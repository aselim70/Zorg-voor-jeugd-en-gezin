import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";
import ts from "typescript";
import * as crypto from "node:crypto";

// Exercise the real handler with an isolated SMTP adapter; no real mail is sent.
const source = ts.transpileModule(readFileSync("src/app/api/contact/route.ts", "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true },
}).outputText;
const site = ts.transpileModule(readFileSync("src/lib/site.ts", "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS },
}).outputText;
const siteContext = { exports: {} };
vm.runInNewContext(site, siteContext);

function handler({ configured = true, fail = false, accepted = true } = {}) {
  const calls = [];
  let closed = false;
  const context = {
    exports: {}, Request, Response, Buffer, URL,
    process: { env: configured ? { SMTP_HOST: "smtp.example.test", SMTP_PORT: "465", SMTP_USER: "info@zorgvjg.nl", SMTP_PASS: "test-only" } : {} },
    require: (name) => {
      if (name === "@/lib/site") return siteContext.exports;
      if (name === "node:crypto") return crypto;
      if (name === "nodemailer") return { createTransport: (options) => ({
        sendMail: async (mail) => {
          calls.push({ options, mail });
          if (fail) throw new Error("private SMTP diagnostic");
          return { accepted: accepted ? ["info@zorgvjg.nl"] : [] };
        },
        close: () => { closed = true; },
      }) };
      throw new Error(`Unexpected import: ${name}`);
    },
  };
  vm.runInNewContext(source, context);
  return { post: context.exports.POST, calls, isClosed: () => closed };
}
const valid = { name: "Test Bezoeker", email: "bezoeker@example.com", phone: "", topic: "Kennismaken", message: "Ik wil graag kennismaken.", website: "" };
function request(data = valid, origin = "https://zorgvjg.nl") {
  return new Request("https://zorgvjg.nl/api/contact", {
    method: "POST", headers: { origin, "content-type": "application/json" }, body: JSON.stringify(data),
  });
}

test("sends to the owner with the visitor as reply-to after SMTP acceptance", async () => {
  const smtp = handler();
  const response = await smtp.post(request());
  assert.equal(response.status, 200);
  assert.equal((await response.json()).success, true);
  const { options, mail } = smtp.calls[0];
  assert.equal(mail.to, "info@zorgvjg.nl");
  assert.equal(mail.from.address, "info@zorgvjg.nl");
  assert.equal(mail.replyTo.address, valid.email);
  assert.ok(mail.text.includes(valid.message));
  assert.ok(mail.html.includes("Nieuwe contactaanvraag"));
  assert.ok(mail.html.includes("Contactgegevens"));
  assert.ok(mail.html.includes(valid.message));
  assert.equal(options.secure, true);
  assert.equal(options.requireTLS, true);
  assert.equal(smtp.isClosed(), true);
});

test("HTML email escapes visitor input and preserves message line breaks", async () => {
  const smtp = handler();
  const fields = {
    ...valid, name: 'Jan & <Test> "Voorbeeld"',
    phone: '<b>geen HTML</b>',
    message: 'Eerste regel\n\n<img src="https://example.com/x" onerror="alert(1)">\nLaatste regel',
  };
  assert.equal((await smtp.post(request(fields))).status, 200);
  const { mail } = smtp.calls[0];
  assert.ok(mail.html.includes("Jan &amp; &lt;Test&gt; &quot;Voorbeeld&quot;"));
  assert.ok(mail.html.includes("&lt;b&gt;geen HTML&lt;/b&gt;"));
  assert.ok(mail.html.includes("Eerste regel<br><br>&lt;img"));
  assert.ok(!mail.html.includes("<img"));
  assert.ok(!mail.html.includes("<Test>"));
  assert.ok(mail.text.includes(fields.message));
  assert.equal(mail.replyTo.address, valid.email);
});

test("rejects invalid fields, header injection, spam, and oversized requests without sending", async () => {
  const smtp = handler();
  for (const fields of [
    { name: " " }, { email: "invalid" }, { email: "a@example.com\r\nBcc: x@example.com" },
    { name: "Test\r\nBcc: x@example.com" }, { message: "   " },
    { message: "x".repeat(1501) }, { topic: "Unknown" }, { website: "spam" },
  ]) assert.equal((await smtp.post(request({ ...valid, ...fields }))).status, 400);
  assert.equal((await smtp.post(request({ ...valid, message: "x".repeat(13000) }))).status, 413);
  assert.equal((await smtp.post(request(null))).status, 400);
  assert.equal(smtp.calls.length, 0);
});

test("rejects foreign origins and invalid JSON", async () => {
  const smtp = handler();
  assert.equal((await smtp.post(request(valid, "https://other.test"))).status, 403);
  const broken = new Request("https://zorgvjg.nl/api/contact", {
    method: "POST", headers: { origin: "https://zorgvjg.nl", "content-type": "application/json" }, body: "{",
  });
  assert.equal((await smtp.post(broken)).status, 400);
  assert.equal(smtp.calls.length, 0);
});

test("missing settings return an actionable error and never a success", async () => {
  const smtp = handler({ configured: false });
  const response = await smtp.post(request());
  assert.equal(response.status, 503);
  assert.ok((await response.json()).error.includes("info@zorgvjg.nl"));
  assert.equal(smtp.calls.length, 0);
});

test("SMTP errors and rejections do not report success or reveal diagnostics", async () => {
  for (const settings of [{ fail: true }, { accepted: false }]) {
    const smtp = handler(settings);
    const response = await smtp.post(request());
    assert.equal(response.status, 502);
    assert.ok(!(await response.text()).includes("private SMTP diagnostic"));
    assert.equal(smtp.isClosed(), true);
  }
});

test("repeated submissions from the same email are throttled", async () => {
  const smtp = handler();
  assert.equal((await smtp.post(request())).status, 200);
  assert.equal((await smtp.post(request())).status, 429);
  assert.equal(smtp.calls.length, 1);
});
