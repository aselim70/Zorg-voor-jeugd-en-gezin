# Zorg voor Jeugd en Gezin

Een Nederlandstalige website voor een zelfstandige zorgprofessional, met jeugdzorg en gezinsbegeleiding als belangrijkste expertise. Gebouwd met Next.js 16.3, React 19, TypeScript en CSS/Tailwind 4.

## Starten

```bash
npm install
npm run dev
```

Open http://localhost:3000. Voor productie: `npm run build` gevolgd door `npm start`. De standaardconfiguratie gebruikt de Next.js-server voor onder andere afbeeldingsoptimalisatie.

## Pagina’s

- `/`: homepage
- `/over-ons`: achtergrond en persoonlijke visie
- `/diensten`: overzicht van vijf begeleidingsthema’s
- `/jeugdzorg`: belangrijkste specialisatie
- `/gezinsbegeleiding`: begeleiding voor het gezin
- `/overige-begeleiding`: individuele begeleiding, gehandicaptenzorg en GGZ
- `/werkwijze`: de zes stappen van het begeleidingstraject
- `/voor-verwijzers`: samenwerking met gemeenten en professionals
- `/contact`: contactgegevens en contactformulier
- `/privacy`: werking van het contactformulier en gegevensgebruik op de website

## Teksten en vormgeving aanpassen

- `src/lib/site.ts`: e-mailadres, navigatie, begeleiding, kernwaarden en stappen.
- `src/lib/pages.ts`: inhoud van de achtergrond- en begeleidingspagina’s.
- `src/app/page.tsx`: homepage en persoonlijke boodschap.
- `src/app/globals.css`: kleuren, typografie, layout en responsive gedrag.
- `src/components/ContactForm.tsx`: contactformulier met directe verzending.
- `src/app/api/contact/route.ts`: servervalidatie en verzending via Zoho SMTP.

Het bestaande logo is behouden. De nieuwe vormgeving gebruikt bosgroen, warme lichte tinten, serifkoppen en lokale natuurfoto’s. Decoratieve iconen worden verborgen voor schermlezers. Navigatie, formulierlabels, focusstijlen, een skiplink en verminderde beweging zijn ondersteund.

## Contact en gegevens vóór publicatie

Het formulier verstuurt via `/api/contact` naar `info@zorgvjg.nl`. De server valideert de velden en verstuurt via Zoho SMTP met TLS. Het antwoordadres is dat van de bezoeker; de afzender is het aangemelde Zoho-account. Een bevestiging verschijnt pas wanneer de mailserver het bericht accepteert; dat garandeert geen inboxbezorging. Bij een fout blijven de velden ingevuld en wordt rechtstreeks mailen aangeboden. Berichten worden niet in een websitedatabase opgeslagen en worden niet gelogd door deze route.

Het e-mailadres is door de eigenaar bevestigd als `info@zorgvjg.nl`. Naam, telefoonnummer, persoonlijk portret, registratienummer, bedrijfsgegevens, regio en bereikbaarheid kunnen worden toegevoegd zodra ze beschikbaar zijn. De persoonlijke boodschap is concepttekst op basis van de briefing.

### Zoho activeren

1. Kopieer `.env.example` naar `.env.local` voor lokaal gebruik. Voeg op de hosting dezelfde vier variabelen toe als servergeheimen, zonder `NEXT_PUBLIC_`.
2. Neem `SMTP_HOST` over uit Zoho Mail → Instellingen → Mailaccounts → Serverconfiguratie. De host verschilt per datacenter en abonnement; de voorbeeldwaarde moet worden gecontroleerd. Zie https://www.zoho.com/mail/help/zoho-smtp.html.
3. Gebruik poort `465` (SSL) of `587` (STARTTLS), `SMTP_USER=info@zorgvjg.nl` en vul `SMTP_PASS` veilig in met een Zoho-appwachtwoord. Deel dit wachtwoord niet in de chat of in Git.
4. Herstart de server of publiceer opnieuw en verstuur een test via `/contact`. Controleer ontvangst in Zoho en of beantwoorden naar de bezoeker gaat.

Voor deze website op Vercel: open het project → Settings → Environment Variables. Voeg de vier SMTP-variabelen toe voor Production (en Preview als je daar wilt testen). Markeer `SMTP_PASS` als gevoelig. Publiceer daarna de gewijzigde broncode als nieuwe deployment; alleen een oude deployment opnieuw uitrollen neemt deze codewijzigingen niet mee. Gewijzigde variabelen gelden pas voor een nieuwe deployment: https://vercel.com/docs/environment-variables/managing-environment-variables.

Zonder volledige configuratie geeft het formulier een foutmelding met het rechtstreekse e-mailadres. De site vereist een Next.js-server met uitgaande SMTP-toegang; een statische export kan het formulier niet verwerken. Er is een verborgen spamveld, een verzoeklimiet van 12 kB, een origincontrole en een limiet per serverinstantie (één poging per e-mailadres per minuut, maximaal 30 per minuut). Die limiet wordt bij herstart gewist en is niet gedeeld tussen serverinstanties; gebruik bij opschaling aanvullende limieten op de hosting.

## Controles

```bash
npm run lint
npm test
npm run build
```

De routes worden vooraf gegenereerd. Controleer bij wijzigingen ook de mobiele navigatie, formulier-validatie, ankerlinks en de layout op telefoon, tablet en desktop.

## Beeldbronnen

De foto’s staan lokaal in `public/`, zodat bezoekers geen verbinding met een externe fotodienst hoeven te maken.

- `forest-light.jpg`: https://images.unsplash.com/photo-1441974231531-c6227db76b6e
- `forest-path.jpg`: https://images.unsplash.com/photo-1448375240586-882707db888b
- `logo.png` en `logo-icon.png`: bestaande projectbestanden.
