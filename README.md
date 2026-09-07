# Zorg voor Jeugd en Gezin — website

Next.js 16 + TypeScript + Tailwind CSS 4. Vier pagina's (Home, Over ons, Diensten, Contact)
in het warme, groene design dat we eerder samen hebben bepaald.

## Lokaal draaien

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Voor een productie-build:

```bash
npm run build
npm run start
```

## Wat nog moet worden ingevuld

Alle tekst die nog een placeholder is, staat overzichtelijk bij elkaar in
`src/lib/site.ts`:

- Naam, telefoonnummer, e-mailadres, adres, KvK-nummer en openingstijden (`SITE`)
- De diensten met titel en omschrijving (`SERVICES`)
- De USP's op de homepage (`USPS`)
- De waarden op de Over-ons-pagina (`VALUES`)
- De stappen van het traject (`PROCESS`)

Het contactformulier op `/contact` is nu alleen visueel — er zit nog geen
verzendfunctie achter. Zodra er een voorkeur is (bijv. een formulier-service
als Formspree, of een eigen API-route), kan dat in `src/app/contact/page.tsx`
aangesloten worden.

## Design aanpassen

Kleuren, lettertype en basisstijlen staan als CSS-variabelen bovenaan
`src/app/globals.css` (`--color-accent`, `--color-bg`, etc.) — pas je die aan,
dan verandert de hele site mee.

## Deployen

**Optie 1 — Vercel (makkelijkst, gratis)**
Vercel is gemaakt door de bouwers van Next.js en heeft geen configuratie nodig.

1. Ga naar [vercel.com](https://vercel.com) en maak een gratis account.
2. Zet dit project in een GitHub-repository (of installeer de Vercel CLI:
   `npm i -g vercel`, en run `vercel` vanuit deze map).
3. Importeer de repository in Vercel — hij herkent automatisch dat het
   Next.js is en deployt zonder verdere instellingen.
4. Koppel daarna een eigen domein (bijv. zorgvoorjeugdengezin.nl) via
   Vercel → Project → Settings → Domains.

**Optie 2 — Eigen/bestaande hosting (cPanel, Strato, etc.)**
Deze site heeft geen server nodig, dus kan ook als losse HTML/CSS/JS-bestanden
geüpload worden naar gewone hosting:

1. Voeg in `next.config.ts` toe: `output: "export"`.
2. Run `npm run build` — dit maakt een map `out/` met alle statische bestanden.
3. Upload de volledige inhoud van `out/` naar de hostingprovider (via FTP of
   de bestandsbeheerder van cPanel), meestal in de map `public_html`.

Let op: het contactformulier op `/contact` is nu alleen visueel. Ongeacht de
hostingkeuze moet daar nog een verzendfunctie achter (bijv. Formspree, of een
eigen backend), anders komen ingevulde berichten nergens aan.
