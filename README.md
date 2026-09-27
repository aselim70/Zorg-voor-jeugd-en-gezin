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
- `/contact`: contactgegevens en e-mailconcept
- `/privacy`: werking van het contactformulier en gegevensgebruik op de website

## Teksten en vormgeving aanpassen

- `src/lib/site.ts`: e-mailadres, navigatie, begeleiding, kernwaarden en stappen.
- `src/lib/pages.ts`: inhoud van de achtergrond- en begeleidingspagina’s.
- `src/app/page.tsx`: homepage en persoonlijke boodschap.
- `src/app/globals.css`: kleuren, typografie, layout en responsive gedrag.
- `src/components/ContactForm.tsx`: formulier en e-mailconcept.

Het bestaande logo is behouden. De nieuwe vormgeving gebruikt bosgroen, warme lichte tinten, serifkoppen en lokale natuurfoto’s. Decoratieve iconen worden verborgen voor schermlezers. Navigatie, formulierlabels, focusstijlen, een skiplink en verminderde beweging zijn ondersteund.

## Contact en gegevens vóór publicatie

Het formulier valideert verplichte velden en opent een `mailto:`-concept in het e-mailprogramma van de bezoeker. De bezoeker verstuurt dit vervolgens zelf. Een terugvaloptie toont het bericht en biedt een kopieerknop. Er is geen serververzending, databaseopslag of bevestiging van e-mailbezorging.

Het e-mailadres `info@zorgvoorjeugdengezin.nl` is overgenomen uit het bestaande project en moet door de eigenaar worden bevestigd. Naam, telefoonnummer, persoonlijk portret, registratienummer, bedrijfsgegevens, regio en bereikbaarheid kunnen worden toegevoegd zodra ze beschikbaar zijn. Het voorbeeldtelefoonnummer en niet onderbouwde claims over een team, wachttijden en ervaringsjaren zijn verwijderd. De persoonlijke boodschap is concepttekst op basis van de briefing.

Voor rechtstreeks verzenden is nog een maildienst en serverkoppeling nodig. Stem dan ook de privacytekst af op de werkelijke verwerking. Stel vóór publicatie de definitieve domeinnaam, hosting en contactgegevens vast.

## Controles

```bash
npm run lint
npm run build
```

De routes worden vooraf gegenereerd. Controleer bij wijzigingen ook de mobiele navigatie, formulier-validatie, ankerlinks en de layout op telefoon, tablet en desktop.

## Beeldbronnen

De foto’s staan lokaal in `public/`, zodat bezoekers geen verbinding met een externe fotodienst hoeven te maken.

- `forest-light.jpg`: https://images.unsplash.com/photo-1441974231531-c6227db76b6e
- `forest-path.jpg`: https://images.unsplash.com/photo-1448375240586-882707db888b
- `logo.png` en `logo-icon.png`: bestaande projectbestanden.
