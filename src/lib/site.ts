export const SITE = {
  name: "Zorg voor Jeugd en Gezin",
  shortName: "Jeugd en Gezin",
  tagline: "Samen bouwen aan een veilige, sterke toekomst",
  phone: "085 - 000 12 34",
  phoneHref: "+31850001234",
  email: "info@zorgvoorjeugdengezin.nl",
  address: "Voorbeeldstraat 12, 1234 AB Voorbeeldstad",
  kvk: "83695672",
  hours: "Ma t/m vrij, 09:00 - 17:00",
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/diensten", label: "Diensten" },
  { href: "/contact", label: "Contact" },
];

export const SERVICES = [
  {
    slug: "ambulante-begeleiding",
    title: "Ambulante begeleiding",
    short: "Praktische, persoonlijke ondersteuning bij u thuis, afgestemd op de situatie van uw gezin.",
    icon: "home",
  },
  {
    slug: "individuele-begeleiding",
    title: "Individuele begeleiding jongeren",
    short: "Een vaste begeleider die met de jongere werkt aan zelfvertrouwen, structuur en toekomstperspectief.",
    icon: "user",
  },
  {
    slug: "gezinsbegeleiding",
    title: "Gezinsbegeleiding",
    short: "Samen met het hele gezin werken aan een fijnere, stabielere thuissituatie.",
    icon: "users",
  },
  {
    slug: "opvoedondersteuning",
    title: "Opvoedondersteuning",
    short: "Praktische handvatten en advies voor ouders bij vragen over opvoeden en opgroeien.",
    icon: "book",
  },
  {
    slug: "pleegzorgbegeleiding",
    title: "Pleegzorgbegeleiding",
    short: "Begeleiding van pleeggezinnen en pleegkinderen voor een warme, stabiele plek.",
    icon: "houseHeart",
  },
  {
    slug: "crisisinterventie",
    title: "Crisisinterventie",
    short: "Snel schakelen wanneer een situatie direct om hulp en duidelijkheid vraagt.",
    icon: "alert",
  },
] as const;

export const USPS = [
  {
    title: "Persoonlijke aanpak",
    description: "Elk gezin is anders — wij sluiten aan bij wat écht nodig is.",
    icon: "shield",
  },
  {
    title: "Gecertificeerde begeleiders",
    description: "Ervaren, geregistreerde professionals met hart voor het vak.",
    icon: "badge",
  },
  {
    title: "Korte lijnen",
    description: "Snel bereikbaar, duidelijke afspraken, geen wachtlijst-mystificatie.",
    icon: "chat",
  },
  {
    title: "Samenwerking voorop",
    description: "Nauw contact met gemeente, school en andere betrokkenen.",
    icon: "handshake",
  },
] as const;

export const VALUES = [
  {
    title: "Betrokkenheid",
    description: "We staan naast gezinnen, niet erboven — met oprechte aandacht voor ieders verhaal.",
    icon: "seedling",
  },
  {
    title: "Duidelijkheid",
    description: "Heldere afspraken en realistische doelen, zodat iedereen weet waar hij aan toe is.",
    icon: "compass",
  },
  {
    title: "Transparantie",
    description: "Open communicatie met gezin, verwijzer en gemeente, gedurende het hele traject.",
    icon: "eye",
  },
] as const;

export const PROCESS = [
  {
    step: "01",
    title: "Kennismaking",
    description: "Een vrijblijvend gesprek om de vraag en situatie in kaart te brengen.",
  },
  {
    step: "02",
    title: "Plan van aanpak",
    description: "Samen stellen we haalbare doelen op, afgestemd op het gezin en de verwijzer.",
  },
  {
    step: "03",
    title: "Begeleiding",
    description: "Vaste begeleider, regelmatige contactmomenten en bijsturing waar nodig.",
  },
  {
    step: "04",
    title: "Evaluatie & afronding",
    description: "We meten voortgang, evalueren met alle betrokkenen en ronden zorgvuldig af.",
  },
] as const;
