export type ContentPage = {
  label: string;
  title: string;
  accent: string;
  intro: string;
  sections: { id?: string; title: string; paragraphs: string[]; points?: string[] }[];
  asideTitle: string;
  asideText: string;
  faqs?: { question: string; answer: string }[];
};

export const PAGES: Record<string, ContentPage> = {
  "over-ons": {
    label: "Over ons", title: "Persoonlijk betrokken.", accent: "Professioneel naast je.",
    intro: "Achter Zorg voor Jeugd en Gezin staat één zelfstandige begeleider. Met een hart voor jongeren en gezinnen, een professionele basis en de overtuiging dat goede zorg begint met écht luisteren.",
    sections: [
      { title: "Aangenaam, jouw vaste begeleider", paragraphs: ["Ik begeleid jongeren, gezinnen en mensen die ondersteuning nodig hebben in het dagelijks leven. Als zelfstandig zorgprofessional ben ik jouw vaste aanspreekpunt: van de kennismaking tot de evaluatie. Je hoeft je verhaal niet steeds opnieuw te vertellen.", "Mijn belangrijkste deskundigheid ligt in de jeugdzorg en de begeleiding van jongeren en gezinnen. Daarnaast ben ik inzetbaar binnen de gehandicaptenzorg, GGZ en individuele begeleiding. Bij iedere hulpvraag kijk ik zorgvuldig of mijn expertise aansluit bij wat nodig is."] },
      { title: "Jij bent meer dan je hulpvraag", paragraphs: ["Achter elk dossier staat een mens. Iemand met een eigen achtergrond, leefwereld, talenten en dromen. Ik wil begrijpen wat voor jou belangrijk is, waar je tegenaan loopt en wat je graag zou willen veranderen.", "Daarom begint de begeleiding voor mij met een eenvoudige vraag: wat heb jij, of wat heeft jouw gezin, op dit moment nodig? Van daaruit werken we aan haalbare doelen. Met aandacht voor jouw zelfstandigheid, ontwikkeling en de mensen om je heen."] },
      { title: "Een stevige professionele basis", paragraphs: ["Ik beschik over de benodigde diploma’s en professionele registraties en ben SKJ-geregistreerd. Professioneel handelen betekent voor mij ook: duidelijke afspraken maken, zorgvuldig rapporteren en blijven reflecteren op mijn werk.", "Waar mogelijk werk ik met evidence-based methodieken en bewezen werkwijzen. Een methodiek is een hulpmiddel om verder te komen. De aanpak moet blijven passen bij de persoon en de situatie. Ik sta open voor nieuwe inzichten en professionele ontwikkeling."] },
      { title: "Naast je staan, ook als het moeilijk is", paragraphs: ["Juist wanneer een situatie ingewikkeld wordt, zijn rust, overzicht en betrokkenheid belangrijk. Ik kan snel schakelen en mijn aanpak aanpassen wanneer de omstandigheden veranderen. Daarbij houd ik oog voor de grenzen van mijn rol en voor de expertise van andere betrokken professionals.", "‘Geen dal is te diep en geen berg is te hoog’ verwoordt mijn bereidheid om samen naar mogelijkheden te blijven zoeken. Stap voor stap, zonder jouw tempo uit het oog te verliezen."] },
    ],
    asideTitle: "Een goed begin is een gesprek.", asideText: "Wil je ontdekken of mijn begeleiding bij je past? Vertel gerust iets over je vraag. We kijken samen naar de mogelijkheden.",
  },
  jeugdzorg: {
    label: "Jeugdzorg", title: "Ruimte om jezelf te zijn.", accent: "Steun om verder te groeien.",
    intro: "Opgroeien gaat niet altijd vanzelf. Als het thuis, op school of in jezelf even vastloopt, helpt het als er iemand naast je staat. Jeugdzorg is de belangrijkste specialisatie van Zorg voor Jeugd en Gezin.",
    sections: [
      { title: "Jouw verhaal is het vertrekpunt", paragraphs: ["Misschien voel je je niet begrepen, is het lastig om overzicht te houden of weet je niet goed hoe je verder wilt. Je hoeft niet meteen alle antwoorden te hebben. We beginnen met luisteren: wat speelt er, wat gaat al goed en wat heb jij nodig?", "Samen kijken we naar je thuissituatie, sociale omgeving, mogelijkheden en doelen. Jij denkt en beslist mee over de begeleiding. We sluiten aan bij jouw leefwereld en maken de stappen zo concreet mogelijk."] },
      { title: "Waar we samen aan kunnen werken", paragraphs: ["De doelen verschillen per jongere. Afhankelijk van jouw vraag kan de begeleiding bijvoorbeeld gericht zijn op:"], points: ["Meer zelfvertrouwen en zicht op je talenten", "Structuur en overzicht in je dagelijks leven", "Omgaan met spanning, gevoelens en lastige situaties", "Zelfstandigheid en praktische vaardigheden", "Contact met ouders, school en je omgeving", "Een volgende stap richting jouw toekomst"] },
      { title: "Een vertrouwd gezicht, duidelijke afspraken", paragraphs: ["Je hebt één vaste, SKJ-geregistreerde begeleider. We maken samen een persoonlijk begeleidingsplan en spreken af hoe we contact houden. Tussendoor kijken we of de begeleiding je helpt en wat er anders kan.", "Waar passend betrekken we ouders, verzorgers, school of andere professionals. We bespreken wie betrokken is en welke afstemming nodig is. Zo werken we vanuit een gedeeld beeld en duidelijke afspraken."] },
      { title: "Ook bij complexe situaties", paragraphs: ["Bij veel spanning of meerdere problemen tegelijk is het belangrijk om rustig te blijven en prioriteiten te stellen. We brengen samen in kaart wat op dat moment nodig is en stemmen af met de betrokken professionals. Als andere expertise nodig is, bespreken we dat."] },
    ],
    asideTitle: "Je hoeft het niet alleen te doen.", asideText: "Je kunt zelf contact opnemen. Ook ouders, verzorgers en verwijzers zijn welkom om een ondersteuningsvraag te bespreken.",
    faqs: [
      { question: "Kan ik als ouder contact opnemen?", answer: "Ja. Je kunt als ouder of verzorger een eerste vraag stellen. In de kennismaking bespreken we de situatie en hoe de jongere zelf bij de vervolgstappen wordt betrokken." },
      { question: "Hoe worden de aanmelding en financiering geregeld?", answer: "Dat hangt af van de hulpvraag en de afspraken met de betrokken gemeente of opdrachtgever. We bespreken vooraf of de begeleiding passend is en welke verwijzing of afspraken nodig zijn. Vergoeding is niet automatisch gegarandeerd." },
    ],
  },
  gezinsbegeleiding: {
    label: "Gezinsbegeleiding", title: "Meer rust in huis.", accent: "Meer ruimte voor elkaar.",
    intro: "Soms raakt een gezin uit balans. Samen zoeken we naar wat helpt: meer begrip, heldere afspraken en een manier van samenleven die bij jullie past. Met aandacht voor het verhaal van ieder gezinslid.",
    sections: [
      { title: "Het hele gezin in beeld", paragraphs: ["Als er zorgen zijn over een kind of jongere, heeft dat vaak invloed op het hele gezin. Andersom kunnen spanningen thuis doorwerken in het gedrag of welzijn van een jongere. Daarom kijken we naar de samenhang en luisteren we naar de verschillende perspectieven.", "We brengen in kaart wat er speelt, welke krachten het gezin al heeft en waar ondersteuning nodig is. Het doel is niet een ideaal gezin, maar een werkbare en passende situatie voor jullie."] },
      { title: "Kleine veranderingen in het dagelijks leven", paragraphs: ["We werken aan doelen die herkenbaar en haalbaar zijn in jullie dagelijkse situatie. Denk bijvoorbeeld aan:"], points: ["Elkaar beter begrijpen en met elkaar in gesprek blijven", "Duidelijke afspraken, grenzen en dagelijkse structuur", "Versterken van opvoedvaardigheden en vertrouwen", "Herkennen van spanning en anders reageren op lastige momenten", "Meer ruimte voor positieve ervaringen samen"] },
      { title: "Samenwerken rond het gezin", paragraphs: ["Jullie krijgen één vaste begeleider die samen met jullie een plan maakt. Wanneer het nodig en passend is, stemmen we af met school, het wijkteam, de gemeente of andere betrokken professionals.", "We leggen afspraken zorgvuldig vast, bespreken de voortgang en stellen de begeleiding bij wanneer jullie situatie verandert. Zo blijft de ondersteuning aansluiten bij wat jullie nodig hebben."] },
    ],
    asideTitle: "Wat heeft jullie gezin nodig?", asideText: "Je hoeft je hulpvraag nog niet helemaal helder te hebben. Een eerste gesprek kan helpen om overzicht te krijgen.",
    faqs: [{ question: "Moet iedereen meteen bij het eerste gesprek zijn?", answer: "Dat bespreken we vooraf. We kijken wie het beste bij de kennismaking kan aansluiten en hoe we de andere gezinsleden op een passende manier betrekken." }],
  },
  "overige-begeleiding": {
    label: "Overige begeleiding", title: "Ondersteuning die aansluit.", accent: "Bij jouw dagelijks leven.",
    intro: "Naast de specialisatie in jeugdzorg en gezinnen is er ruimte voor individuele begeleiding, gehandicaptenzorg en GGZ-begeleiding. Altijd met een zorgvuldige afweging: past de hulpvraag bij de beschikbare deskundigheid?",
    sections: [
      { id: "individuele-begeleiding", title: "Individuele begeleiding", paragraphs: ["Soms helpt het als iemand met je meekijkt naar het dagelijks leven. Samen maken we overzicht, ontdekken we wat voor jou belangrijk is en oefenen we met stappen die je zelfstandigheid vergroten.", "We richten ons op jouw mogelijkheden, talenten en persoonlijke doelen. Jij houdt zoveel mogelijk de regie. De begeleiding sluit aan bij je tempo, je sociale omgeving en wat je op dat moment aankunt."], points: ["Dagstructuur en praktische vaardigheden", "Werken aan persoonlijke doelen en zelfstandigheid", "Versterken van contact en deelname aan de samenleving"] },
      { id: "gehandicaptenzorg", title: "Gehandicaptenzorg", paragraphs: ["Een beperking zegt niet alles over wie je bent of wat je kunt. We kijken naar jouw mogelijkheden en stemmen de communicatie en begeleiding af op je begripsniveau, wensen en ondersteuningsbehoefte.", "Duidelijkheid, herhaling en praktische ondersteuning kunnen helpen om grip te krijgen op het dagelijks leven. Waar passend werken we samen met naasten en andere zorgprofessionals."], points: ["Ondersteunen bij dagelijkse routines", "Vaardigheden oefenen in een passend tempo", "Vergroten van zelfstandigheid en eigen regie"] },
      { id: "ggz-begeleiding", title: "GGZ-begeleiding", paragraphs: ["Psychische kwetsbaarheid kan het dagelijks leven ingewikkeld maken. Begeleiding kan helpen bij het opbouwen van structuur, het herkennen van belasting en het zetten van haalbare stappen.", "Deze begeleiding richt zich op het dagelijks functioneren. Het is geen vervanging voor diagnostiek of behandeling. Wanneer er een behandelaar betrokken is, stemmen we de ondersteuning waar passend met diegene af."], points: ["Houvast, structuur en balans in de dag", "Aandacht voor draagkracht en persoonlijke doelen", "Afstemming met het netwerk en betrokken behandelaren"] },
    ],
    asideTitle: "Samen kijken wat past.", asideText: "Vertel iets over de ondersteuning die je zoekt. We bespreken of deze begeleiding aansluit en welke afspraken nodig zijn.",
  },
  "voor-verwijzers": {
    label: "Voor verwijzers en professionals", title: "Een betrokken partner.", accent: "Een professionele aanpak.",
    intro: "Zorg voor Jeugd en Gezin is zelfstandig inzetbaar binnen de jeugdzorg en gezinsbegeleiding, met aanvullende inzetbaarheid in de gehandicaptenzorg en GGZ. Korte lijnen, zorgvuldige afstemming en duidelijke communicatie vormen de basis.",
    sections: [
      { title: "Deskundig en zelfstandig inzetbaar", paragraphs: ["Als zelfstandig, SKJ-geregistreerd zorgprofessional bied ik persoonlijke begeleiding aan jongeren, gezinnen en cliënten met uiteenlopende ondersteuningsvragen. Mijn belangrijkste expertise ligt binnen de jeugdzorg.", "Bij een mogelijke samenwerking bespreken we de inhoud van de casus, de benodigde expertise, de opdracht en de beschikbare inzet. Zo bepalen we vooraf of er een passende aansluiting is."] },
      { title: "Methodisch en zorgvuldig werken", paragraphs: ["Een duidelijke opdracht en concrete ondersteuningsdoelen geven richting aan het traject. De begeleiding wordt waar mogelijk onderbouwd met evidence-based methodieken en afgestemd op de cliënt."], points: ["Persoonlijke begeleidingsplannen met haalbare doelen", "Zorgvuldige rapportages en verslaglegging", "Voortgangsbewaking en geplande evaluaties", "Tijdige signalering en bespreking van veranderingen", "Heldere afspraken over rollen, afstemming en informatie-uitwisseling"] },
      { title: "Samenwerking rond de cliënt", paragraphs: ["Goede begeleiding vraagt om samenwerking. Ik functioneer zelfstandig én binnen multidisciplinaire teams, in afstemming met onder andere ouders, scholen, gemeenten, wijkteams, jeugdzorgorganisaties, behandelaren en gedragswetenschappers.", "Bij de start maken we afspraken over overlegmomenten, terugkoppeling en verantwoordelijkheden. Daarbij houden we rekening met de positie en betrokkenheid van de jongere, het gezin of de cliënt."] },
      { title: "Complexe casuïstiek en flexibiliteit", paragraphs: ["Er is ervaring met het begeleiden in complexe en crisissituaties. Rust bewaren, overzicht creëren en snel schakelen zijn daarbij belangrijke vaardigheden. Wanneer omstandigheden veranderen, kan de begeleiding in overleg worden bijgesteld.", "Inzet, bereikbaarheid en eventuele opschaling worden per opdracht afgesproken. De website biedt geen acute crisisdienst. Bij een casusbespreking delen we aanvankelijk alleen de informatie die nodig is om de mogelijke inzet te beoordelen."] },
      { title: "Een samenwerking bespreken", paragraphs: ["Neem contact op voor een verkennend gesprek over uw opdracht of ondersteuningsvraag. We bespreken de doelgroep, doelen, gewenste inzet, rapportageafspraken en praktische voorwaarden. Beschikbaarheid en passende inzet worden persoonlijk afgestemd."] },
    ],
    asideTitle: "Een casus of opdracht bespreken?", asideText: "Neem contact op voor een verkennend gesprek. Deel in het eerste bericht nog geen herleidbare cliëntgegevens of dossiers.",
  },
  privacy: {
    label: "Privacy", title: "Zorgvuldig met je gegevens.", accent: "Duidelijk over deze website.",
    intro: "Hier lees je wat er gebeurt wanneer je deze website gebruikt of via de contactpagina een e-mail opstelt.",
    sections: [
      { title: "Het contactformulier", paragraphs: ["Het formulier op deze website verstuurt of bewaart je bericht niet op een server. De ingevulde informatie wordt in je browser gebruikt om een concept in je eigen e-mailprogramma te openen. Pas als je daar op verzenden klikt, verstuur je het bericht naar Zorg voor Jeugd en Gezin.", "Je naam, e-mailadres en eventuele telefoonnummer helpen om je vraag te beantwoorden. Deel in een eerste bericht geen medische gegevens, burgerservicenummer of cliëntdossiers. Een passende manier om inhoudelijke informatie te delen bespreken we persoonlijk."] },
      { title: "Cookies en externe inhoud", paragraphs: ["Deze website bevat geen door ons toegevoegde advertentiecookies of bezoekersanalyses. De afbeeldingen worden vanaf de website zelf geladen. De hostingprovider kan technische gegevens verwerken die nodig zijn voor het aanbieden en beveiligen van de website."] },
      { title: "Vragen over privacy", paragraphs: ["Heb je een vraag over gegevens die je met Zorg voor Jeugd en Gezin hebt gedeeld? Neem dan contact op via het e-mailadres op de contactpagina. Voor de start van een begeleidingstraject worden afzonderlijke afspraken gemaakt over dossiervorming en gegevensuitwisseling."] },
    ],
    asideTitle: "Een vraag over je gegevens?", asideText: "Neem gerust contact op. Vermeld kort dat je vraag over privacy gaat, zonder gevoelige informatie in het bericht op te nemen.",
  },
};
