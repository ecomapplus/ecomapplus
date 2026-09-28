import { communities, type Community } from "./communities";
import { esalenWorkshops } from "./esalen-workshops";
import { inferredYear } from "./inferred-dates";
import { informalFor } from "./informal-agreements";

export type EventKind =
  | "workshop"
  | "course"
  | "retreat"
  | "tour"
  | "festival"
  | "open-day"
  | "volunteer";

export const eventKindLabel: Record<EventKind, string> = {
  workshop: "Workshop",
  course: "Course",
  retreat: "Retreat",
  tour: "Tour",
  festival: "Festival",
  "open-day": "Open day",
  volunteer: "Volunteer",
};

export type DatedEvent = {
  slug: string;
  title: string;
  start: string;
  end?: string;
  url: string;
  kind?: EventKind;
  blurb?: string;
  /** Projected from a yearly pattern. The village has not posted this date. */
  unannounced?: boolean;
};

export type EventListing = {
  community: Community;
  note: string;
  calendarUrl: string;
};

/** Official calendar or programme pages, used when a village publishes one. */
export const eventCalendarBySlug: Record<string, string> = {
  esalen: "https://www.esalen.org/learn/workshops",
  "mount-madonna": "https://mountmadonna.org/calendar/",
  findhorn: "https://www.findhorn.org/workshops",
  tamera: "https://www.tamera.org/event-calendar/",
  embercombe: "https://www.embercombe.org/events-calendar",
  hawkwood: "https://www.hawkwoodcollege.co.uk/our-programmes",
  yogaville: "https://www.yogaville.org/events/",
  ballymaloe: "https://www.ballymaloecookeryschool.ie/all-courses",
  "shelburne-farms": "https://shelburnefarms.org/calendar",
  "hidden-villa": "https://www.hiddenvilla.org/calendar/",
  zaytuna: "https://www.zaytunafarm.com/courses-events/",
  "les-amanins": "https://www.lesamanins.com/sejours-et-stages/",
  "new-vrindaban": "https://www.newvrindaban.com/new-vrindaban-calendar",
  henbant: "https://www.henbant.org/brf",
  "lost-valley": "https://www.lostvalley.org/",
  zegg: "https://www.zegg.de/en/events/",
  oaec: "https://oaec.org/events/",
  earthaven: "https://www.earthaven.org/classes-and-events/",
  damanhur: "https://damanhur.org/events/",
  arcosanti: "https://www.arcosanti.org/",
  kalani: "https://kalani.com/calendar/",
  "our-ecovillage": "https://ourecovillage.org/",
  "sieben-linden": "https://lernort.siebenlinden.org/",
  cloughjordan: "https://www.thevillage.ie/",
  "plum-village": "https://plumvillage.org/event/retreat/2026-retreats-events-in-plum-village-france",
  "dancing-rabbit": "https://www.dancingrabbit.org/workshops-and-events/",
  tempelhof: "https://www.schloss-tempelhof.de/seminare-und-veranstaltungen/kalender/",
  lilleoru: "https://www.lilleoru.ee/en/events/all-events/",
  pachamama: "https://www.pachamama.com/events/",
  auroville: "https://auroville.org/",
  "sunburst-sanctuary": "https://sunburst.org/events/",
  glarisegg: "https://schloss-glarisegg.ch/kalender/",
  lakabe: "https://www.lakabe.org/actividades/",
  "crystal-waters": "https://crystalwaters.org.au/cwevents",
  svanholm: "https://svanholm.dk/besoeg-os/",
  "sabbathday-lake": "https://maineshakers.com/special-events/",
  hollyhock: "https://hollyhock.ca/events/",
  ulpotha: "https://www.ulpotha.com/",
  "ananda-assisi": "https://corsi.ananda.it/en",
  plenitud: "https://www.plenitudpr.org/plenitudexperiences",
  "can-masdeu": "https://canmasdeu.net/",
  "new-vrindaban": "https://www.palaceofgold.com/",
  "krishna-valley": "https://krisnavolgy.hu/programok",
  "kul-kul-farm": "https://www.kulkulfarmbali.com/experiences",
  "ufa-fabrik": "https://www.ufafabrik.de/en/",
  "white-oak-pastures": "https://whiteoakpastures.com/pages/wop-education-events",
  "twin-oaks": "https://twinoaks.org/twinoaks-visits-60/visit-tour/visitor-program",
  "east-wind": "https://www.eastwind.org/visiting-eastwind",
  "ecovillage-ithaca": "https://ecovillageithaca.org/about/living-here/",
  "kibbutz-lotan": "https://kibbutzlotan.com/mud_building_workshop_he/",
  "las-canadas": "https://bosquedeniebla.com.mx/cursos-y-aprendices/",
  "cite-ecologique": "https://www.citeecologique.org/d%C3%A9couvrir-l%C3%A9covillage/visites-guid%C3%A9es",
  "isabella-freedman": "https://adamah.org/isabella-freedman/",
  "moora-moora": "https://mooramoora.org.au/index.php/get-involved/visitors-day/",
  solheimar: "https://www.solheimar.is/",
  "sunrise-ranch": "https://sunriseranch.org/events/",
  "ananda-village": "https://anandavillage.org/family-yoga-fest/",
  "los-portales": "https://losportales.net/visitas.html",
  "finca-tierra": "https://fincatierra.com/permaculture-design-course-calendar",
  aardehuis: "https://www.aardehuis.nl/",
  "sivananda-yoga-farm": "https://sivanandayogafarm.org/",
  narara: "https://nararaecovillage.com/calendar/",
  tui: "https://www.tuitrust.org.nz/events",
  dyssekilde: "https://dyssekilde.dk/rundvisning",
  "hameau-des-buis": "https://hameaudesbuis.org/visites/",
  arterra: "https://arterrabizimodu.org/eventos/",
  hallingelille: "https://www.hallingelille.dk/",
};

/**
 * Dated public events copied from official calendars (Sept 2026).
 * Confirm current with the village — programmes move.
 */
export const datedEvents: DatedEvent[] = [
  ...esalenWorkshops,
  { slug: "zaytuna", title: "Permaculture Design Certificate", start: "2026-11-08", end: "2026-11-19", url: "https://www.greeningthedesertproject.org/product/permaculture-design-certificate-course-pdc-8th-november-19th-of-november-2026/", kind: "course", blurb: "Twelve-day PDC at Zaytuna Farm with Geoff Lawton. From $2,600." },
  { slug: "zaytuna", title: "Two-week permaculture internship", start: "2026-11-22", end: "2026-12-03", url: "https://www.greeningthedesertproject.org/product/2-weeks-permaculture-internship-23rd-of-november-3rd-of-december-2026/", kind: "course", blurb: "Paid on-farm internship, about 40 hours a week. From $2,600." },
  { slug: "zaytuna", title: "Permaculture Design Course", start: "2027-07-05", end: "2027-07-16", url: "https://www.zaytunafarm.com/product/permaculture-design-course-5th-july-to-16th-july-2027/", kind: "course", blurb: "Twelve-day PDC. From $3,100." },
  { slug: "les-amanins", title: "Cultivons la Paix — écologie personnelle", start: "2026-10-01", end: "2026-10-02", url: "https://www.lesamanins.com/sejours-et-stages/stages-et-formations/cycle-cultivons-la-paix-module-1-ecologie-personnelle/", kind: "course" },
  { slug: "les-amanins", title: "Séjour vacances au cœur de la ferme", start: "2026-10-19", end: "2026-10-24", url: "https://www.lesamanins.com/sejours-et-stages/sejours-vacances/sejour-vacances-au-coeur-de-la-ferme-avec-bayard-jeunesse/", kind: "retreat", blurb: "Farm holiday with Bayard Jeunesse. €625." },
  { slug: "les-amanins", title: "Secrets d’automne", start: "2026-10-26", end: "2026-10-31", url: "https://www.lesamanins.com/sejours-et-stages/sejours-vacances/vacances-automne-famille-secrets-toussaint/", kind: "retreat", blurb: "Autumn farm holiday. €550." },
  { slug: "les-amanins", title: "Changer de regard sur les conflits", start: "2026-11-27", end: "2026-11-28", url: "https://www.lesamanins.com/sejours-et-stages/stages-et-formations/session-changer-de-regard-sur-les-conflits-systemes-relationnels/", kind: "workshop" },
  { slug: "new-vrindaban", title: "Festival of Colors", start: "2026-10-11", url: "https://www.newvrindaban.com/events-1/festival-of-colors-7", kind: "festival" },
  { slug: "new-vrindaban", title: "24-hour kirtan", start: "2026-10-31", url: "https://www.newvrindaban.com/events-1/24-hour-kirtan-10", kind: "festival" },
  { slug: "new-vrindaban", title: "Govardhana Puja", start: "2026-11-09", url: "https://www.newvrindaban.com/events-1/govardhana-puja-3", kind: "festival" },
  { slug: "new-vrindaban", title: "Christmas retreat", start: "2026-12-24", url: "https://www.newvrindaban.com/events-1/christmas-retreat-9", kind: "retreat" },
  { slug: "new-vrindaban", title: "New Year’s retreat", start: "2026-12-31", url: "https://www.newvrindaban.com/events-1/new-years-retreat-3", kind: "retreat" },
  { slug: "henbant", title: "Becoming a Regenerative Farmer", start: "2027-03-01", end: "2027-11-30", url: "https://www.henbant.org/brf", kind: "course", blurb: "Nine-month training at the farm, announced for March through November 2027. The opening day is not posted yet." },
  { slug: "mount-madonna", title: "Winter volunteer session", start: "2026-12-08", end: "2027-03-07", url: "https://mountmadonna.org/about/volunteer-opportunities/", kind: "volunteer", blurb: "Three-month residential volunteer stay. Meals and a private room. No fee." },
  { slug: "yogaville", title: "Living Well and Dying Well According to the Bhagavad Gita", start: "2026-09-11", end: "2026-09-13", url: "https://www.yogaville.org/programs/", kind: "workshop" },
  { slug: "yogaville", title: "Journey Into Sound Weekend", start: "2026-09-11", end: "2026-09-13", url: "https://www.yogaville.org/programs/", kind: "workshop" },
  { slug: "oaec", title: "23rd Annual Chautauqua Revue", start: "2026-09-11", end: "2026-09-19", url: "https://oaec.org/event/23rd-annual-chautauqua-revue/2026-09-11/", kind: "festival", blurb: "Two weekends in the North Garden Theater: 11–12 and 17–19 September." },
  { slug: "tempelhof", title: "Prototype Weekend", start: "2026-09-11", end: "2026-09-13", url: "https://www.schloss-tempelhof.de/seminare-und-veranstaltungen/kalender/", kind: "workshop", blurb: "Turn a social or regenerative idea into a first working prototype." },
  { slug: "sieben-linden", title: "Den Demokratie-Muskel stärken", start: "2026-09-11", end: "2026-09-14", url: "https://lernort.siebenlinden.org/", kind: "workshop", blurb: "Training with Christian Felber and Roman Huber." },
  { slug: "mount-madonna", title: "Restorative Yoga & Live Indian Classical Music", start: "2026-09-12", url: "https://mountmadonna.org/calendar/", kind: "workshop" },
  { slug: "hidden-villa", title: "Farm Volunteer Day", start: "2026-09-12", url: "https://www.hiddenvilla.org/calendar/individuals-families/region-HV/", kind: "volunteer" },
  { slug: "dancing-rabbit", title: "Monthly village tour", start: "2026-09-12", url: "https://www.dancingrabbit.org/visit/", kind: "tour", blurb: "Second Saturday, May–October. Reservation required." },
  { slug: "lilleoru", title: "Satsang", start: "2026-09-12", url: "https://www.lilleoru.ee/en/events/all-events/", kind: "workshop" },
  { slug: "findhorn", title: "Experience Week: From I to We", start: "2026-09-13", end: "2026-09-18", url: "https://www.findhorn.org/workshops", kind: "retreat" },
  { slug: "hidden-villa", title: "Art in the Garden", start: "2026-09-13", url: "https://www.hiddenvilla.org/calendar/individuals-families/region-HV/", kind: "workshop" },
  { slug: "zegg", title: "Sunday grounds tour", start: "2026-09-13", url: "https://www.zegg.de/en/events/", kind: "tour", blurb: "Garden and site walk. Sundays, no registration." },
  { slug: "dancing-rabbit", title: "Visitor Program", start: "2026-09-13", end: "2026-09-27", url: "https://www.dancingrabbit.org/visit/", kind: "retreat", blurb: "One- or two-week stay learning village life." },
  { slug: "ballymaloe", title: "Farm to Fork", start: "2026-09-14", url: "https://www.ballymaloecookeryschool.ie/all-courses", kind: "course" },
  { slug: "damanhur", title: "New Life 2.0", start: "2026-09-14", end: "2026-10-12", url: "https://damanhur.org/events/", kind: "retreat", blurb: "Month-long immersion in Damanhur daily life and the Temples of Humankind." },
  { slug: "shelburne-farms", title: "Farm to Medicine Cabinet Herb Walk", start: "2026-09-15", url: "https://shelburnefarms.org/calendar", kind: "workshop" },
  { slug: "hidden-villa", title: "Farm Volunteer Day", start: "2026-09-16", url: "https://www.hiddenvilla.org/calendar/individuals-families/region-HV/", kind: "volunteer" },
  { slug: "oaec", title: "Garden Volunteer Day", start: "2026-09-16", url: "https://oaec.org/event/garden-volunteer-day-4/2026-09-16/", kind: "volunteer" },
  { slug: "shelburne-farms", title: "Cows, Cheese, and Tractors!", start: "2026-09-16", url: "https://shelburnefarms.org/calendar", kind: "tour" },
  { slug: "tamera", title: "Community Service (4th arc)", start: "2026-09-16", end: "2026-11-13", url: "https://www.tamera.org/event-calendar/", kind: "volunteer" },
  { slug: "earthaven", title: "Juncture: Fall Equinox Gathering", start: "2026-09-17", url: "https://www.earthaven.org/classes-and-events/", kind: "workshop", blurb: "Equinox gathering on what to carry into winter. Donation." },
  { slug: "sieben-linden", title: "Bewegte Zeiten — Tanz trifft Tiefenökologie", start: "2026-09-17", end: "2026-09-20", url: "https://lernort.siebenlinden.org/", kind: "workshop" },
  { slug: "tempelhof", title: "Agile Organisationsentwicklung für Schulen", start: "2026-09-17", end: "2026-09-20", url: "https://www.schloss-tempelhof.de/seminare-und-veranstaltungen/kalender/", kind: "course" },
  { slug: "tempelhof", title: "Tiefes WIR", start: "2026-09-17", end: "2026-09-20", url: "https://www.schloss-tempelhof.de/seminare-und-veranstaltungen/kalender/", kind: "workshop" },
  { slug: "earthaven", title: "Designing for Resilience", start: "2026-09-18", end: "2026-09-20", url: "https://www.earthaven.org/classes-and-events/", kind: "workshop", blurb: "First of three autumnal permaculture weekends (also 9–11 Oct and 6–8 Nov)." },
  { slug: "damanhur", title: "Introductory course to find your mission in life", start: "2026-09-18", end: "2026-09-19", url: "https://damanhur.academy/", kind: "course" },
  { slug: "auroville", title: "Sound Bath & Flower Mandala", start: "2026-09-18", url: "https://svaram.org/events-booking-calendar/", kind: "workshop" },
  { slug: "tamera", title: "Reweaving Culture", start: "2026-09-19", end: "2026-09-28", url: "https://www.tamera.org/event-calendar/", kind: "course" },
  { slug: "hidden-villa", title: "Weekend Farm Tour", start: "2026-09-19", url: "https://www.hiddenvilla.org/calendar/individuals-families/region-HV/", kind: "tour" },
  { slug: "oaec", title: "Public Tour — 3rd Saturday", start: "2026-09-19", url: "https://oaec.org/event/public-tour-3rd-saturday/2026-09-19/", kind: "tour", blurb: "Seasonal walk of the 80-acre demonstration site, 1pm." },
  { slug: "cloughjordan", title: "Féile na nÚll — Community Apple Festival", start: "2026-09-19", url: "https://www.thevillage.ie/", kind: "festival", blurb: "Tenth anniversary of the village apple festival." },
  { slug: "sunburst-sanctuary", title: "Sacred Geometry Mandala for Heart Chakra Opening", start: "2026-09-19", url: "https://sunburst.org/registration/?action=evrplusegister&event_id=126", kind: "workshop", blurb: "Hands-on mandala with Craig Hanson, 10am–4pm. Gardens and labyrinth." },
  { slug: "sunburst-sanctuary", title: "Sunday Inspiration & Meditation", start: "2026-09-20", url: "https://sunburst.org/sundays/", kind: "open-day", blurb: "Every Sunday, 10:30am. Music, talk, and quiet meditation, then refreshments and an optional hike." },
  { slug: "sunburst-sanctuary", title: "Autumn Harvest Garden Tour", start: "2026-10-03", url: "https://sunburst.org/garden/", kind: "tour", blurb: "Permaculture garden and orchard walk, then a garden-to-table lunch in the pine lodge, 9:30am–1pm." },
  { slug: "sunburst-sanctuary", title: "Kriya II Meditation Retreat", start: "2026-10-15", end: "2026-10-18", url: "https://sunburst.org/registration/?action=evrplusegister&event_id=8", kind: "retreat", blurb: "Second Kriya initiation on the Central Coast. Prerequisite: Kriya I." },
  { slug: "sunburst-sanctuary", title: "Dances of Universal Peace", start: "2026-11-07", url: "https://sunburst.org/upcoming/", kind: "workshop", blurb: "Chant and simple circle dances with live music." },
  { slug: "sunburst-sanctuary", title: "Silent Peace Retreat", start: "2026-11-12", end: "2026-11-15", url: "https://sunburst.org/upcoming/", kind: "retreat", blurb: "Four-day silent retreat: meals, views, and tools for a calmer daily life." },
  { slug: "sunburst-sanctuary", title: "Winter Solstice Gathering", start: "2026-12-19", url: "https://sunburst.org/upcoming/", kind: "open-day", blurb: "Meditation and a lantern-lit labyrinth walk, noon–8:30pm." },
  { slug: "lakabe", title: "Ate Irekiak — Puertas Abiertas", start: "2026-09-10", end: "2026-09-23", url: "https://www.lakabe.org/actividades/", kind: "open-day", blurb: "Ten to fifteen days living the recovered village: garden, wood, and daily work. Form on the actividades page." },
  { slug: "svanholm", title: "Besøgsdag — visitor day", start: "2026-09-20", url: "https://svanholm.dk/kollektivet/vil-du-vaere-med/", kind: "open-day", blurb: "Open day for people considering life in the collective. Confirm with the contact group." },
  { slug: "svanholm", title: "Sunday tour of the collective", start: "2026-09-20", url: "https://svanholm.dk/besoeg-os/", kind: "tour", blurb: "Weekly Sunday tour, April through October, 11:00. Pay in the café. 130 kr." },
  { slug: "glarisegg", title: "Führung Schloss Glarisegg", start: "2026-09-20", url: "https://schloss-glarisegg.ch/kalender/", kind: "tour", blurb: "Castle tour, 15:00–17:00. Behind the seminar rooms of the lakeside community." },
  { slug: "glarisegg", title: "Gemeinschaftsbildung Einführungs-Wochenende", start: "2026-09-25", end: "2026-09-27", url: "https://seminare-glarisegg.ch/seminar_events/gemeinschaftsbildung-einfuehrungs-wochenende-fruehjahr/", kind: "workshop", blurb: "Introductory weekend for people considering joining. Lodging booked with the seminar." },
  { slug: "glarisegg", title: "Hände in die Erde", start: "2026-09-26", url: "https://permakultur-bodensee.ch/", kind: "volunteer", blurb: "Saturday morning in the permaculture garden, 9:00–14:00." },
  { slug: "glarisegg", title: "Erntedankfest im Permakulturgarten", start: "2026-09-26", url: "https://schloss-glarisegg.ch/kalender/", kind: "festival", blurb: "Harvest thanksgiving in the castle garden, 17:00–19:00." },
  { slug: "svanholm", title: "Sunday tour of the collective", start: "2026-09-27", url: "https://svanholm.dk/besoeg-os/", kind: "tour", blurb: "Weekly Sunday tour, April through October, 11:00. Pay in the café. 130 kr." },
  { slug: "yogaville", title: "Yom Kippur", start: "2026-09-20", url: "https://www.yogaville.org/events/", kind: "open-day" },
  { slug: "damanhur", title: "Autumn Equinox Great Ritual", start: "2026-09-20", url: "https://damanhur.travel/annual-celebrations-rituals/", kind: "open-day" },
  { slug: "sieben-linden", title: "Mitarbeitswoche: Ökodorfgelände gestalten", start: "2026-09-20", end: "2026-09-25", url: "https://lernort.siebenlinden.org/", kind: "volunteer" },
  { slug: "zegg", title: "Sunday grounds tour", start: "2026-09-20", url: "https://www.zegg.de/en/events/", kind: "tour" },
  { slug: "ballymaloe", title: "12 Week Certificate Course", start: "2026-09-21", url: "https://www.ballymaloecookeryschool.ie/certificate-cookery-course/upcoming-12-week-certificate-courses", kind: "course" },
  { slug: "embercombe", title: "The Journey", start: "2026-09-21", end: "2026-09-26", url: "https://www.embercombe.org/events-calendar", kind: "retreat" },
  { slug: "oaec", title: "Garden Volunteer Day", start: "2026-09-23", url: "https://oaec.org/event/garden-volunteer-day-4/2026-09-23/", kind: "volunteer" },
  { slug: "tamera", title: "Art Course — Painting, Perception & Eros", start: "2026-09-24", end: "2026-09-30", url: "https://www.tamera.org/event-calendar/", kind: "course" },
  { slug: "ballymaloe", title: "Just Cook It", start: "2026-09-25", url: "https://www.ballymaloecookeryschool.ie/all-courses", kind: "course" },
  { slug: "yogaville", title: "Intermediate Integral Yoga Teacher Training, Part 2", start: "2026-09-25", end: "2026-10-04", url: "https://www.yogaville.org/programs/", kind: "course" },
  { slug: "plum-village", title: "Happy Farm Harvest Themed Week", start: "2026-09-25", end: "2026-10-02", url: "https://plumvillage.org/event/retreat/2026-retreats-events-in-plum-village-france", kind: "retreat" },
  { slug: "mount-madonna", title: "Sacred Series: 8th Annual Aradhana", start: "2026-09-26", url: "https://mountmadonna.org/calendar/", kind: "open-day" },
  { slug: "shelburne-farms", title: "Wild Mushroom Foray", start: "2026-09-26", url: "https://shelburnefarms.org/calendar", kind: "workshop" },
  { slug: "lilleoru", title: "Temple Seva Day", start: "2026-09-26", url: "https://www.lilleoru.ee/en/events/all-events/", kind: "volunteer" },
  { slug: "auroville", title: "Full Moon Gathering", start: "2026-09-26", url: "https://auroville.org/page/savitri-bhavan-programmes", kind: "open-day", blurb: "At Sri Aurobindo’s statue, Savitri Bhavan." },
  { slug: "sieben-linden", title: "Permakultur und Selbstversorgung", start: "2026-09-27", end: "2026-10-02", url: "https://permakultur.siebenlinden.org/kursangebote/", kind: "course" },
  { slug: "zegg", title: "Sunday grounds tour", start: "2026-09-27", url: "https://www.zegg.de/en/events/", kind: "tour" },
  { slug: "oaec", title: "Garden Volunteer Day", start: "2026-09-30", url: "https://oaec.org/event/garden-volunteer-day-4/2026-09-30/", kind: "volunteer" },
  { slug: "zegg", title: "Forum Basiskurs", start: "2026-09-30", end: "2026-10-04", url: "https://www.zegg.de/en/events/", kind: "course" },
  { slug: "zegg", title: "Empathic Visioneers", start: "2026-10-01", end: "2026-10-04", url: "https://www.zegg.de/en/events/", kind: "workshop" },
  { slug: "sieben-linden", title: "AcroYoga Retreat", start: "2026-10-01", end: "2026-10-04", url: "https://lernort.siebenlinden.org/", kind: "retreat" },
  { slug: "ballymaloe", title: "The Living Soil: Health, Function & Future", start: "2026-10-02", url: "https://www.ballymaloecookeryschool.ie/all-courses", kind: "course" },
  { slug: "tamera", title: "Hands-on in the Solar Test Field & Garden Autumn", start: "2026-10-03", end: "2026-10-14", url: "https://www.tamera.org/event-calendar/", kind: "workshop" },
  { slug: "oaec", title: "Public Tour — 1st Saturday", start: "2026-10-03", url: "https://oaec.org/event/public-tour-1st-saturday/2026-10-03/", kind: "tour" },
  { slug: "cloughjordan", title: "Monthly guided tour", start: "2026-10-04", url: "https://www.thevillage.ie/", kind: "tour", blurb: "First Sunday of the month, 3pm from Sheelagh na Gig on Main Street." },
  { slug: "sieben-linden", title: "Active Hope — Intensivwoche Tiefenökologie", start: "2026-10-04", end: "2026-10-09", url: "https://lernort.siebenlinden.org/", kind: "workshop" },
  { slug: "sieben-linden", title: "Chronische Schmerzen bewältigen — MBSR", start: "2026-10-04", end: "2026-10-09", url: "https://lernort.siebenlinden.org/", kind: "workshop" },
  { slug: "tamera", title: "Introduction to Tamera", start: "2026-10-07", end: "2026-10-13", url: "https://www.tamera.org/event-calendar/", kind: "course" },
  { slug: "oaec", title: "Garden Volunteer Day", start: "2026-10-07", url: "https://oaec.org/event/garden-volunteer-day-4/2026-10-07/", kind: "volunteer" },
  { slug: "findhorn", title: "Navigating Life with Nonviolent Communication", start: "2026-10-09", end: "2026-10-11", url: "https://www.findhorn.org/workshops", kind: "workshop" },
  { slug: "earthaven", title: "Designing for Resilience", start: "2026-10-09", end: "2026-10-11", url: "https://www.earthaven.org/classes-and-events/", kind: "workshop" },
  { slug: "arcosanti", title: "FORM Arcosanti", start: "2026-10-09", end: "2026-10-11", url: "https://www.experienceform.com/", kind: "festival", blurb: "Music, arcology tours, and workshops at the high-desert prototype city." },
  { slug: "dancing-rabbit", title: "Monthly village tour", start: "2026-10-10", url: "https://www.dancingrabbit.org/visit/", kind: "tour", blurb: "Second Saturday, 1pm. Reservation required." },
  { slug: "lilleoru", title: "Satsang", start: "2026-10-10", url: "https://www.lilleoru.ee/en/events/all-events/", kind: "workshop" },
  { slug: "yogaville", title: "Navaratri", start: "2026-10-11", end: "2026-10-19", url: "https://www.yogaville.org/events/", kind: "open-day" },
  { slug: "mount-madonna", title: "Sacred Series: Navaratri & Vijay Dasami", start: "2026-10-11", end: "2026-10-20", url: "https://mountmadonna.org/calendar/navaratri-and-vijay-dasami-2026/", kind: "open-day" },
  { slug: "plum-village", title: "90-Day Rains Retreat", start: "2026-10-13", end: "2027-01-13", url: "https://plumvillage.org/event/retreat/2026-retreats-events-in-plum-village-france", kind: "retreat" },
  { slug: "oaec", title: "Garden Volunteer Day", start: "2026-10-14", url: "https://oaec.org/event/garden-volunteer-day-4/2026-10-14/", kind: "volunteer" },
  { slug: "findhorn", title: "Healing Our World: From Despair to Repair", start: "2026-10-16", end: "2026-10-20", url: "https://www.findhorn.org/workshops", kind: "workshop" },
  { slug: "tamera", title: "Deepening Love School with Sabine Lichtenfels", start: "2026-10-16", end: "2026-10-25", url: "https://www.tamera.org/learn/deepening-love-school-with-sabine-lichtenfels-october/", kind: "course" },
  { slug: "dancing-rabbit", title: "Ecovillage Adventure Weekend", start: "2026-10-16", end: "2026-10-19", url: "https://www.dancingrabbit.org/ecovillage-weekend/", kind: "retreat" },
  { slug: "sieben-linden", title: "Terra Preta und der Klimakrimi", start: "2026-10-16", end: "2026-10-18", url: "https://permakultur.siebenlinden.org/kursangebote/", kind: "workshop" },
  { slug: "auroville", title: "Sound Bath & Flower Mandala", start: "2026-10-16", url: "https://svaram.org/events-booking-calendar/", kind: "workshop" },
  { slug: "oaec", title: "Public Tour — 3rd Saturday", start: "2026-10-17", url: "https://oaec.org/events/", kind: "tour" },
  { slug: "lost-valley", title: "Community Experience Week", start: "2026-10-18", end: "2026-10-24", url: "https://www.lostvalley.org/community-experience-week", kind: "retreat" },
  { slug: "sieben-linden", title: "Familienfreizeit: Raus auf's Land", start: "2026-10-18", end: "2026-10-25", url: "https://lernort.siebenlinden.org/", kind: "retreat" },
  { slug: "hawkwood", title: "Further Journeys in Gong Mastery", start: "2026-10-19", end: "2026-10-23", url: "https://www.hawkwoodcollege.co.uk/our-programmes", kind: "course" },
  { slug: "tamera", title: "Life, Death and Transition", start: "2026-10-20", end: "2026-10-24", url: "https://www.tamera.org/learn/life-death-and-transition/", kind: "workshop" },
  { slug: "findhorn", title: "Spirit at Work — Transform your Leadership and Coaching", start: "2026-10-20", end: "2026-10-25", url: "https://www.findhorn.org/workshops", kind: "course" },
  { slug: "findhorn", title: "Finding Inner Sanctuary: Living in Changing Times", start: "2026-10-24", end: "2026-10-31", url: "https://www.findhorn.org/workshops", kind: "retreat" },
  { slug: "lilleoru", title: "Temple Seva Day", start: "2026-10-24", url: "https://www.lilleoru.ee/en/events/all-events/", kind: "volunteer" },
  { slug: "sieben-linden", title: "Info-Woche und Urlaub", start: "2026-10-25", end: "2026-10-30", url: "https://lernort.siebenlinden.org/", kind: "open-day" },
  { slug: "damanhur", title: "Community Life Campus", start: "2026-10-26", end: "2026-11-04", url: "https://damanhur.org/events/", kind: "retreat", blurb: "Ten-day taste of Damanhur community living." },
  { slug: "tamera", title: "Golden Autumn in Community", start: "2026-10-30", end: "2026-11-11", url: "https://www.tamera.org/learn/golden-autumn-in-community/", kind: "retreat" },
  { slug: "sieben-linden", title: "Mit Permakultur die Zukunft gestalten", start: "2026-10-30", end: "2026-11-01", url: "https://permakultur.siebenlinden.org/kursangebote/", kind: "course" },
  { slug: "embercombe", title: "The Journey", start: "2026-11-01", end: "2026-11-06", url: "https://www.embercombe.org/events-calendar", kind: "retreat" },
  { slug: "cloughjordan", title: "Monthly guided tour", start: "2026-11-01", url: "https://www.thevillage.ie/", kind: "tour", blurb: "First Sunday of the month, 3pm from Sheelagh na Gig." },
  { slug: "damanhur", title: "Commemoration of the Dead", start: "2026-11-01", url: "https://damanhur.travel/annual-celebrations-rituals/", kind: "open-day" },
  { slug: "arcosanti", title: "Land Stewardship & Sustainable Technology Workshop", start: "2026-11-03", end: "2026-11-28", url: "https://www.arcosanti.org/workshops/land-stewardship-workshop/", kind: "course" },
  { slug: "pachamama", title: "Body Cleanse Detox Program", start: "2026-11-03", end: "2026-11-08", url: "https://www.pachamama.com/events/", kind: "retreat" },
  { slug: "findhorn", title: "Foundations in Coaching", start: "2026-11-06", end: "2026-11-09", url: "https://www.findhorn.org/workshops", kind: "course" },
  { slug: "earthaven", title: "Designing for Resilience", start: "2026-11-06", end: "2026-11-08", url: "https://www.earthaven.org/classes-and-events/", kind: "workshop" },
  { slug: "yogaville", title: "Deepavali", start: "2026-11-07", url: "https://www.yogaville.org/events/", kind: "open-day" },
  { slug: "pachamama", title: "200-Hour Breathwork Facilitator Training", start: "2026-11-10", end: "2026-12-02", url: "https://www.pachamama.com/events/", kind: "course" },
  { slug: "pachamama", title: "Reiki Level 1", start: "2026-11-10", end: "2026-11-11", url: "https://www.pachamama.com/events/", kind: "workshop" },
  { slug: "mount-madonna", title: "Silence Speaks: A Silent Meditation Retreat", start: "2026-11-11", end: "2026-11-15", url: "https://mountmadonna.org/", kind: "retreat" },
  { slug: "earthaven", title: "Death Midwifery Training", start: "2026-11-12", end: "2026-11-14", url: "https://www.schoolofintegratedliving.org/death-midwifery-training/", kind: "course" },
  { slug: "kalani", title: "Ecstatic Dance 25 Year Birthday Bash", start: "2026-11-13", end: "2026-11-15", url: "https://kalani.com/calendar/", kind: "festival" },
  { slug: "findhorn", title: "Heritage Week: A Living Story", start: "2026-11-14", end: "2026-11-21", url: "https://www.findhorn.org/workshops", kind: "retreat" },
  { slug: "lilleoru", title: "Satsang", start: "2026-11-14", url: "https://www.lilleoru.ee/en/events/all-events/", kind: "workshop" },
  { slug: "hawkwood", title: "Reclaiming Time for Transformation", start: "2026-11-16", end: "2026-11-18", url: "https://www.hawkwoodcollege.co.uk/our-programmes", kind: "workshop" },
  { slug: "pachamama", title: "Theobroma Cacao", start: "2026-11-16", end: "2026-11-18", url: "https://www.pachamama.com/events/", kind: "workshop" },
  { slug: "lilleoru", title: "The Cycle of the Nine Shaktis", start: "2026-11-20", end: "2026-11-22", url: "https://www.lilleoru.ee/en/events/all-events/", kind: "retreat" },
  { slug: "earthaven", title: "Home Funerals, Green Burials", start: "2026-11-21", url: "https://www.schoolofintegratedliving.org/home-funerals-green-burials-online/", kind: "workshop" },
  { slug: "yogaville", title: "Thanksgiving Worship Service", start: "2026-11-26", url: "https://www.yogaville.org/events/", kind: "open-day" },
  { slug: "sieben-linden", title: "Info-Wochenende", start: "2026-11-27", end: "2026-11-29", url: "https://lernort.siebenlinden.org/", kind: "open-day" },
  { slug: "cloughjordan", title: "Monthly guided tour", start: "2026-12-06", url: "https://www.thevillage.ie/", kind: "tour", blurb: "First Sunday of the month, 3pm from Sheelagh na Gig." },
  { slug: "findhorn", title: "Experience Week: From I to We", start: "2026-12-13", end: "2026-12-18", url: "https://www.findhorn.org/workshops", kind: "retreat" },
  { slug: "damanhur", title: "Awakening Essentials 1", start: "2026-12-18", end: "2026-12-19", url: "https://damanhur.academy/", kind: "course" },
  { slug: "damanhur", title: "Winter Solstice Great Ritual", start: "2026-12-20", url: "https://damanhur.travel/annual-celebrations-rituals/", kind: "open-day" },
  { slug: "plum-village", title: "Christmas Holiday Retreat", start: "2026-12-21", end: "2026-12-28", url: "https://plumvillage.org/event/retreat/2026-retreats-events-in-plum-village-france", kind: "retreat" },
  { slug: "mount-madonna", title: "48th Annual New Year’s Yoga Retreat", start: "2026-12-28", end: "2027-01-01", url: "https://mountmadonna.org/", kind: "retreat" },
  { slug: "findhorn", title: "Crossing the Threshold", start: "2026-12-28", end: "2027-01-03", url: "https://www.findhorn.org/workshops", kind: "retreat" },
  { slug: "plum-village", title: "New Year’s Retreat", start: "2026-12-28", end: "2027-01-04", url: "https://plumvillage.org/event/retreat/2026-retreats-events-in-plum-village-france", kind: "retreat" },
  { slug: "our-ecovillage", title: "Permaculture Design Certificate & reVILLAGEing Family Camp", start: "2027-07-02", end: "2027-07-18", url: "https://ourecovillage.org/o-u-r-2027-permaculture-programs/", kind: "course" },
  { slug: "hollyhock", title: "Social Venture Institute", start: "2026-09-23", end: "2026-09-26", url: "https://hollyhock.ca/events/", kind: "workshop", blurb: "Leadership gathering on the Cortes Island campus." },
  { slug: "hollyhock", title: "Kintsugi: Embracing Imperfection", start: "2026-09-27", end: "2026-10-02", url: "https://hollyhock.ca/events/", kind: "workshop", blurb: "With Yuka Morino." },
  { slug: "hollyhock", title: "The Language of Flowers", start: "2026-09-28", end: "2026-10-02", url: "https://hollyhock.ca/events/", kind: "workshop", blurb: "Ikebana and contemplation with Heather Midori Yamada." },
  { slug: "sabbathday-lake", title: "Punch Needle with Shaker Yarn", start: "2026-10-02", url: "https://maineshakers.com/event/punch-needle-yarn/", kind: "workshop" },
  { slug: "sabbathday-lake", title: "Market Basket Weaving", start: "2026-10-03", url: "https://maineshakers.com/event/market-basket/", kind: "workshop" },
  { slug: "sabbathday-lake", title: "Simply Being: Guided Mindfulness Walk & Shaker Tea", start: "2026-10-09", url: "https://maineshakers.com/event/mindfulness/", kind: "workshop", blurb: "Walk at the Shaker Bog, then tea." },
  { slug: "sabbathday-lake", title: "Seed Saving Workshop", start: "2026-10-10", url: "https://maineshakers.com/event/seed-saving/", kind: "workshop" },
  { slug: "sabbathday-lake", title: "Fall Volunteer Work Day", start: "2026-10-24", url: "https://maineshakers.com/event/fall/", kind: "volunteer", blurb: "Farm and museum work day, 9am–3pm." },
  { slug: "white-oak-pastures", title: "Solar Grazing Workshop", start: "2026-09-21", end: "2026-09-23", url: "https://thecfar.org/products/solar-grazing-september-2026", kind: "course", blurb: "Center for Agricultural Resilience session on the farm." },
  { slug: "white-oak-pastures", title: "Pasture-to-Plate Turkeys Field Day", start: "2026-09-25", url: "https://whiteoakpastures.com/products/pasture-to-plate-turkeys-field-day", kind: "workshop", blurb: "Pasture-raised turkeys, from the field to the plate." },
  { slug: "white-oak-pastures", title: "Saturday Bluffton Walking Tour", start: "2026-09-26", url: "https://whiteoakpastures.com/pages/wop-farm-tours", kind: "tour", blurb: "Each Saturday at 11am from the General Store. No reservation." },
  { slug: "white-oak-pastures", title: "Herbs in Autumn with Leslie Williams", start: "2026-10-03", url: "https://whiteoakpastures.com/products/herbs-in-autumn", kind: "workshop" },
  { slug: "white-oak-pastures", title: "Immersive Introduction to Regenerative Agriculture", start: "2026-10-05", end: "2026-10-06", url: "https://thecfar.org/products/immersive-introduction-to-regenerative-agriculture-october-2026", kind: "course", blurb: "Two-day CFAR workshop with field managers and the Harris family." },
  { slug: "white-oak-pastures", title: "Intro to Pastured Rabbits & Homestead Processing", start: "2026-10-17", url: "https://whiteoakpastures.com/products/intro-to-pastured-rabbits-homestead-processing", kind: "workshop" },
  { slug: "white-oak-pastures", title: "Swine-to-Sausage Field Day for Kids", start: "2026-10-23", url: "https://whiteoakpastures.com/products/swine-to-sausage-field-day", kind: "workshop" },
  { slug: "white-oak-pastures", title: "Fall Festival & General Store 10 Year Celebration", start: "2026-10-24", url: "https://whiteoakpastures.com/pages/wop-education-events", kind: "festival" },
  { slug: "white-oak-pastures", title: "Immersive Introduction to Regenerative Agriculture", start: "2026-11-09", end: "2026-11-10", url: "https://thecfar.org/products/immersive-introduction-to-regenerative-agriculture-november-2026", kind: "course" },
  { slug: "white-oak-pastures", title: "Pastured Hog Workshop", start: "2026-11-12", url: "https://whiteoakpastures.com/products/pastured-hog-workshop", kind: "workshop" },
  { slug: "white-oak-pastures", title: "Backyard Butchery with Farmstead Meatsmith", start: "2026-11-13", end: "2026-11-14", url: "https://whiteoakpastures.com/products/backyard-butchery", kind: "workshop" },
  { slug: "white-oak-pastures", title: "Makerspace Field Day for Kids", start: "2026-11-20", url: "https://whiteoakpastures.com/products/makerspace-field-day", kind: "workshop" },
  { slug: "white-oak-pastures", title: "Leather Ornament Making & Cookie Decorating for Kids", start: "2026-12-11", url: "https://whiteoakpastures.com/products/leather-ornament-making-cookie-decorating-for-kids", kind: "workshop" },
  { slug: "white-oak-pastures", title: "Leather Ornament Making & Cookie Workshop", start: "2026-12-12", url: "https://whiteoakpastures.com/products/leather-ornament-making-workshop", kind: "workshop" },
  { slug: "white-oak-pastures", title: "Santa's Workshop", start: "2026-12-13", url: "https://whiteoakpastures.com/pages/wop-education-events", kind: "workshop" },
  { slug: "twin-oaks", title: "Three-week visitor program", start: "2026-09-18", end: "2026-10-08", url: "https://twinoaks.org/twinoaks-visits-60/visit-tour/visitor-program", kind: "retreat", blurb: "Structured visit. A letter of introduction is required. Not a drop-in." },
  { slug: "twin-oaks", title: "Three-week visitor program", start: "2026-10-16", end: "2026-11-05", url: "https://twinoaks.org/twinoaks-visits-60/visit-tour/visitor-program", kind: "retreat", blurb: "Over Halloween. Letter of introduction required." },
  { slug: "twin-oaks", title: "Three-week visitor program", start: "2026-11-13", end: "2026-12-03", url: "https://twinoaks.org/twinoaks-visits-60/visit-tour/visitor-program", kind: "retreat", blurb: "Last 2026 group. No December visitor period." },
  { slug: "east-wind", title: "Three-week visitor period", start: "2026-09-07", end: "2026-09-27", url: "https://www.eastwind.org/visiting-eastwind", kind: "retreat", blurb: "First Monday of the month, three weeks. Letter of introduction. No drop-ins." },
  { slug: "east-wind", title: "Three-week visitor period", start: "2026-10-05", end: "2026-10-25", url: "https://www.eastwind.org/visiting-eastwind", kind: "retreat", blurb: "Warm-season visitor period. December through February have none." },
  { slug: "east-wind", title: "Three-week visitor period", start: "2026-11-02", end: "2026-11-22", url: "https://www.eastwind.org/visiting-eastwind", kind: "retreat", blurb: "Last visitor period of 2026." },
  { slug: "ecovillage-ithaca", title: "Free public tour", start: "2026-09-26", url: "https://www.thriveithaca.org/requestatour", kind: "tour", blurb: "Last Saturday of the month, 3–5pm from the Frog common house. Tell them you are coming. Not in November or December." },
  { slug: "ecovillage-ithaca", title: "Free public tour", start: "2026-10-31", url: "https://www.thriveithaca.org/requestatour", kind: "tour", blurb: "Last Saturday of the month, 3–5pm from the Frog common house." },
  { slug: "crystal-waters", title: "Women’s Change Makers Permaculture Design Course", start: "2026-10-02", end: "2026-10-18", url: "https://crystalwaters.org.au/event/womens-change-makers-permaculture-design-course/", kind: "course", blurb: "Two-week PDC at the EcoCentre." },
  { slug: "crystal-waters", title: "Village Market", start: "2026-10-03", url: "https://crystalwaters.org.au/", kind: "open-day", blurb: "First Saturday of the month, 8am–1pm. Not held in January." },
  { slug: "crystal-waters", title: "Village Market", start: "2026-11-07", url: "https://crystalwaters.org.au/", kind: "open-day", blurb: "First Saturday of the month, 8am–1pm." },
  { slug: "crystal-waters", title: "Village Market", start: "2026-12-05", url: "https://crystalwaters.org.au/", kind: "open-day", blurb: "First Saturday of the month, 8am–1pm." },
  { slug: "kibbutz-lotan", title: "Mud building workshop", start: "2026-11-12", end: "2026-11-14", url: "https://kibbutzlotan.com/mud_building_workshop_he/", kind: "workshop", blurb: "Three-day earth-building workshop at the Center for Creative Ecology." },
  { slug: "kibbutz-lotan", title: "Mud building workshop", start: "2026-12-17", end: "2026-12-19", url: "https://kibbutzlotan.com/mud_building_workshop_he/", kind: "workshop" },
  { slug: "ufa-fabrik", title: "Ezé", start: "2026-10-23", url: "https://ufafabrik.de/veranstaltung/39015/eze", kind: "festival", blurb: "Concert in the Varieté Salon, 20:00." },
  { slug: "ufa-fabrik", title: "Sebastian Krumbiegel — Kompass", start: "2026-10-31", url: "https://ufafabrik.de/veranstaltung/39793/sebastian-krumbiegel", kind: "festival", blurb: "Solo concert in the Theatersaal, 20:00." },
  { slug: "krishna-valley", title: "Cow Protection Center walk", start: "2026-09-26", url: "https://krisnavolgy.hu/programok/seta-a-tehenvedelmi-kozpontban-2026-szept", kind: "tour", blurb: "Guided walk of the cow sanctuary." },
  { slug: "krishna-valley", title: "Spiritual retreat weekend", start: "2026-10-01", end: "2026-10-04", url: "https://krisnavolgy.hu/programok/spiritualis-elvonulas-hetvege-2026-okt", kind: "retreat" },
  { slug: "krishna-valley", title: "Life in Krishna Valley", start: "2026-10-03", url: "https://krisnavolgy.hu/programok/eletunk-krisna-volgyben-2026-okt", kind: "tour", blurb: "Guided walk through the residential area." },
  { slug: "krishna-valley", title: "Karma-cleansing pilgrimage", start: "2026-10-09", end: "2026-10-11", url: "https://krisnavolgy.hu/programok/karmatisztito-zarandoklat-kundavalival-okt", kind: "retreat", blurb: "With Kundavali. Sacred places in the valley." },
  { slug: "krishna-valley", title: "Be a princess", start: "2026-10-10", url: "https://krisnavolgy.hu/programok/legy-hercegno-2026-okt", kind: "workshop", blurb: "An afternoon program for women." },
  { slug: "krishna-valley", title: "Sweetness Festival", start: "2026-10-18", url: "https://krisnavolgy.hu/programok/edesseg-fesztival-261018", kind: "festival" },
  { slug: "krishna-valley", title: "Cow Protection Center walk", start: "2026-10-21", url: "https://krisnavolgy.hu/programok/seta-a-tehenvedelmi-kozpontban-2026-okt", kind: "tour" },
  { slug: "krishna-valley", title: "Season farewell", start: "2026-10-24", url: "https://krisnavolgy.hu/programok/szezon-zaro-rendezveny", kind: "festival" },
  { slug: "krishna-valley", title: "Cow Protection Center walk", start: "2026-10-31", url: "https://krisnavolgy.hu/programok/seta-a-tehenvedelmi-kozpontban-okt", kind: "tour" },
  { slug: "las-canadas", title: "Agroecology apprentice immersion", start: "2026-10-05", end: "2026-10-24", url: "https://bosquedeniebla.com.mx/cursos-y-aprendices/programa-aprendices-agroecologia-octubre/", kind: "course", blurb: "Three weeks living and working with the cooperative. Arrive Monday 3–6pm." },
  { slug: "las-canadas", title: "Agroecological soil fertility", start: "2026-10-19", end: "2026-10-24", url: "https://bosquedeniebla.com.mx/cursos-y-aprendices/manejo-agroecologico-de-la-fertilidad-del-suelo/", kind: "course", blurb: "Advanced course with Ricardo Romero. Ends Saturday at 10:30am." },
  { slug: "cite-ecologique", title: "Guided visit", start: "2026-09-23", url: "https://www.citeecologique.org/d%C3%A9couvrir-l%C3%A9covillage/visites-guid%C3%A9es", kind: "tour", blurb: "Last published 2026 tour, Wednesday 2pm. Reservation required. $25." },
  { slug: "isabella-freedman", title: "Sukkahfest", start: "2026-09-25", url: "https://adamah.org/isabella-freedman/", kind: "festival", blurb: "Harvest celebration of Sukkot. All ages." },
  { slug: "isabella-freedman", title: "Simchafest", start: "2026-10-13", end: "2026-10-15", url: "https://adamah.org/event/simchafest-at-isabella-freedman/", kind: "festival", blurb: "Simchat Torah gathering, Friday 4pm through Sunday 5pm." },
  { slug: "isabella-freedman", title: "ReTreat Yourself! The Jewish Leadership Gathering", start: "2026-12-06", url: "https://adamah.org/isabella-freedman/", kind: "retreat" },
  { slug: "isabella-freedman", title: "Adamah Meditation Retreat", start: "2026-12-20", url: "https://adamah.org/isabella-freedman/", kind: "retreat", blurb: "A week of silence, awareness, and insight." },
  { slug: "moora-moora", title: "Visitor day", start: "2026-10-04", url: "https://mooramoora.org.au/index.php/get-involved/visitors-day/", kind: "tour", blurb: "First Sunday of the month, 2–4pm from the Octagon. Register ahead. Not on total fire ban days." },
  { slug: "moora-moora", title: "Visitor day", start: "2026-11-01", url: "https://mooramoora.org.au/index.php/get-involved/visitors-day/", kind: "tour", blurb: "First Sunday of the month, 2–4pm. Arrive 1:45." },
  { slug: "moora-moora", title: "Visitor day", start: "2026-12-06", url: "https://mooramoora.org.au/index.php/get-involved/visitors-day/", kind: "tour", blurb: "First Sunday of the month, 2–4pm." },
  { slug: "solheimar", title: "Yoga and rest weekend", start: "2026-09-24", end: "2026-09-27", url: "https://www.solheimar.is/", kind: "retreat", blurb: "With Kristín Albertsdóttir, Ágústa Kolbrún Róberts, and Edda Björgvins. Write yoga@solheimar.is." },
  { slug: "sunrise-ranch", title: "Dance & Drums for Africa Annual Gala", start: "2026-09-29", url: "https://sunriseranch.org/events/", kind: "festival" },
  { slug: "sunrise-ranch", title: "Holotropic Breathwork Double-Breathwork Retreat", start: "2026-09-30", end: "2026-10-03", url: "https://sunriseranch.org/events/", kind: "retreat" },
  { slug: "sunrise-ranch", title: "The Creative Field Project", start: "2026-09-30", url: "https://sunriseranch.org/events/", kind: "workshop" },
  { slug: "sunrise-ranch", title: "FSS Shamanic Reunion", start: "2026-10-01", end: "2026-10-06", url: "https://sunriseranch.org/events/", kind: "retreat" },
  { slug: "sunrise-ranch", title: "Bohemian Cafe", start: "2026-10-01", url: "https://sunriseranch.org/events/", kind: "open-day" },
  { slug: "sunrise-ranch", title: "Unity Women's Retreat", start: "2026-10-02", end: "2026-10-04", url: "https://sunriseranch.org/events/", kind: "retreat" },
  { slug: "sunrise-ranch", title: "GTT / Deepening into Samhain", start: "2026-10-04", end: "2026-10-10", url: "https://sunriseranch.org/events/", kind: "retreat" },
  { slug: "sunrise-ranch", title: "Ecstatic Dance", start: "2026-10-12", url: "https://sunriseranch.org/events/", kind: "workshop" },
  { slug: "sunrise-ranch", title: "The Heart of the Wounded Healer", start: "2026-10-13", end: "2026-10-18", url: "https://sunriseranch.org/events/", kind: "retreat" },
  { slug: "sunrise-ranch", title: "Primal Spirituality: Grace", start: "2026-10-15", end: "2026-10-16", url: "https://sunriseranch.org/events/", kind: "workshop" },
  { slug: "sunrise-ranch", title: "The Well: Circle Facilitator Training", start: "2026-10-22", end: "2026-10-25", url: "https://sunriseranch.org/events/", kind: "course" },
  { slug: "sunrise-ranch", title: "Path of Love Process", start: "2026-10-24", end: "2026-10-31", url: "https://sunriseranch.org/events/", kind: "retreat" },
  { slug: "sunrise-ranch", title: "The Creative Field Project", start: "2026-10-28", url: "https://sunriseranch.org/events/", kind: "workshop" },
  { slug: "sunrise-ranch", title: "Bohemian Cafe", start: "2026-11-05", url: "https://sunriseranch.org/events/", kind: "open-day" },
  { slug: "sunrise-ranch", title: "Reclaiming Your Spark", start: "2026-11-05", end: "2026-11-08", url: "https://sunriseranch.org/events/", kind: "retreat" },
  { slug: "sunrise-ranch", title: "The Dragon Training", start: "2026-11-06", end: "2026-11-08", url: "https://sunriseranch.org/events/", kind: "workshop" },
  { slug: "sunrise-ranch", title: "Ecstatic Dance", start: "2026-11-09", url: "https://sunriseranch.org/events/", kind: "workshop" },
  { slug: "sunrise-ranch", title: "The Well: Circle Facilitator Training", start: "2026-11-12", end: "2026-11-15", url: "https://sunriseranch.org/events/", kind: "course" },
  { slug: "sunrise-ranch", title: "SkyDancing LET Cycle 4: Maturity and Expansion", start: "2026-11-13", end: "2026-11-20", url: "https://sunriseranch.org/events/", kind: "course" },
  { slug: "sunrise-ranch", title: "The Upledger Institute", start: "2026-11-15", end: "2026-11-20", url: "https://sunriseranch.org/events/", kind: "course" },
  { slug: "sunrise-ranch", title: "The Creative Field Project", start: "2026-11-25", url: "https://sunriseranch.org/events/", kind: "workshop" },
  { slug: "ananda-village", title: "Discipleship Renewal", start: "2026-10-09", end: "2026-10-18", url: "https://anandavillage.org/programs-and-classes/discipleship-renewal/", kind: "retreat", blurb: "Nine days at the Meditation Retreat. For Kriyabans who have already done Living Discipleship." },
  { slug: "ananda-village", title: "Family Yoga Fest", start: "2026-10-17", url: "https://anandavillage.org/family-yoga-fest/", kind: "festival", blurb: "10am–3pm on the Master’s Market lawn. Adults $5, children 5–11 $3." },
  { slug: "los-portales", title: "Festival Humánica", start: "2026-09-25", end: "2026-09-27", url: "https://www.festivalhumanica.net", kind: "festival" },
  { slug: "los-portales", title: "Open Saturday", start: "2026-10-10", url: "https://losportales.net/visitas.html", kind: "open-day", blurb: "Second Saturday, 10:30–17:00. €15 including lunch. Write ahead." },
  { slug: "los-portales", title: "Open Saturday", start: "2026-11-14", url: "https://losportales.net/visitas.html", kind: "open-day", blurb: "Second Saturday, 10:30–17:00. €15 including lunch." },
  { slug: "los-portales", title: "Open Saturday", start: "2026-12-12", url: "https://losportales.net/visitas.html", kind: "open-day", blurb: "Second Saturday, 10:30–17:00. €15 including lunch." },
  { slug: "finca-tierra", title: "Permaculture Design Course · Fall B", start: "2026-10-04", end: "2026-10-18", url: "https://fincatierra.com/permaculture-design-course-calendar", kind: "course", blurb: "15-day hands-on PDC near Puerto Viejo." },
  { slug: "finca-tierra", title: "Permaculture Design Course · Fall C", start: "2026-11-01", end: "2026-11-15", url: "https://fincatierra.com/permaculture-design-course-calendar", kind: "course" },
  { slug: "finca-tierra", title: "Permaculture Design Course · Winter A", start: "2027-01-10", end: "2027-01-24", url: "https://fincatierra.com/permaculture-design-course-calendar", kind: "course" },
  { slug: "finca-tierra", title: "Permaculture Design Course · Winter B", start: "2027-02-07", end: "2027-02-21", url: "https://fincatierra.com/permaculture-design-course-calendar", kind: "course" },
  { slug: "finca-tierra", title: "Permaculture Design Course · Spring", start: "2027-03-07", end: "2027-03-21", url: "https://fincatierra.com/permaculture-design-course-calendar", kind: "course" },
  { slug: "aardehuis", title: "Open tour", start: "2026-10-04", url: "https://www.aardehuis.nl/", kind: "tour", blurb: "First Sunday, 2pm. About an hour. No signup. A house is usually opened." },
  { slug: "aardehuis", title: "Open tour", start: "2026-11-01", url: "https://www.aardehuis.nl/", kind: "tour", blurb: "First Sunday of the month, 2pm. No signup." },
  { slug: "aardehuis", title: "Open tour", start: "2026-12-06", url: "https://www.aardehuis.nl/", kind: "tour", blurb: "First Sunday of the month, 2pm. No signup." },
  { slug: "sivananda-yoga-farm", title: "From Stress to Strength", start: "2026-12-04", url: "https://sivanandayogafarm.org/", kind: "retreat", blurb: "Stress-relief retreat at the Grass Valley ashram." },
  { slug: "zegg", title: "Experiment Gemeinschaft — Kennlern weekend", start: "2026-10-16", end: "2026-10-18", url: "https://www.zegg.de/de/veranstaltungen/programm/31a6a20628fe4dc8b4246dd0374d3cca/experiment-gemeinschaft", kind: "retreat", blurb: "A first weekend inside the community. Course €90–€160, lodging €132–€152." },
  { slug: "zegg", title: "Saisonier month", start: "2026-09-01", end: "2026-10-01", url: "https://www.zegg.de/de/veranstaltungen/programm/9ae455651da4407687665b26fad72a44/zegg-saisonierzeit-2026", kind: "volunteer", blurb: "September living-in month. From €855 if you work four days a week. Waitlist." },
  { slug: "tamera", title: "Open Afternoon", start: "2026-09-26", url: "https://www.tamera.org/learn/open-afternoon/", kind: "tour", blurb: "Guided tour, 14:30–18:30. Donation. Register ahead." },
  { slug: "tamera", title: "Open Afternoon", start: "2026-10-24", url: "https://www.tamera.org/learn/open-afternoon/", kind: "tour", blurb: "Guided tour, 14:30–18:30. Donation. Register ahead." },
  { slug: "tamera", title: "Open Afternoon", start: "2026-11-07", url: "https://www.tamera.org/learn/open-afternoon/", kind: "tour", blurb: "Last open afternoon of 2026. Donation. Register ahead." },
  { slug: "sieben-linden", title: "Garten-Mitarbeitswoche", start: "2026-10-19", end: "2026-10-24", url: "https://lernort.siebenlinden.org/de/b119db601c82463ea09a4538477e0e8d/garten-mitarbeitswoche-3", kind: "volunteer", blurb: "Garden work week. Fee is on the booking page." },
  { slug: "sieben-linden", title: "Waldmitarbeitswoche", start: "2026-11-23", end: "2026-11-28", url: "https://lernort.siebenlinden.org/de/a3d24eb8bdc7462ab3b33c4e1e5fd737/waldmitarbeitswoche", kind: "volunteer", blurb: "Forest work week. Fee is on the booking page." },
  { slug: "glarisegg", title: "Führung Schloss Glarisegg", start: "2026-10-25", url: "https://schloss-glarisegg.ch/kalender/", kind: "tour", blurb: "Castle tour, 15:00–17:00." },
  { slug: "svanholm", title: "Sunday tour of the collective", start: "2026-10-04", url: "https://svanholm.dk/besoeg-os/", kind: "tour", blurb: "Weekly Sunday tour through the last Sunday of October, 11:00. 130 kr." },
  { slug: "svanholm", title: "Sunday tour of the collective", start: "2026-10-11", url: "https://svanholm.dk/besoeg-os/", kind: "tour", blurb: "11:00. Pay in the café. 130 kr." },
  { slug: "svanholm", title: "Sunday tour of the collective", start: "2026-10-18", url: "https://svanholm.dk/besoeg-os/", kind: "tour", blurb: "11:00. Pay in the café. 130 kr." },
  { slug: "svanholm", title: "Sunday tour of the collective", start: "2026-10-25", url: "https://svanholm.dk/besoeg-os/", kind: "tour", blurb: "Last Sunday tour of 2026. 11:00. 130 kr." },
  { slug: "white-oak-pastures", title: "Saturday Bluffton Walking Tour", start: "2026-10-03", url: "https://whiteoakpastures.com/pages/wop-farm-tours", kind: "tour", blurb: "Every Saturday, 11am from the General Store. $15. No reservation." },
  { slug: "white-oak-pastures", title: "Saturday Bluffton Walking Tour", start: "2026-10-10", url: "https://whiteoakpastures.com/pages/wop-farm-tours", kind: "tour", blurb: "Every Saturday, 11am. $15." },
  { slug: "white-oak-pastures", title: "Saturday Bluffton Walking Tour", start: "2026-10-17", url: "https://whiteoakpastures.com/pages/wop-farm-tours", kind: "tour", blurb: "Every Saturday, 11am. $15." },
  { slug: "white-oak-pastures", title: "Saturday Bluffton Walking Tour", start: "2026-10-24", url: "https://whiteoakpastures.com/pages/wop-farm-tours", kind: "tour", blurb: "Every Saturday, 11am. $15." },
  { slug: "white-oak-pastures", title: "Saturday Bluffton Walking Tour", start: "2026-10-31", url: "https://whiteoakpastures.com/pages/wop-farm-tours", kind: "tour", blurb: "Every Saturday, 11am. $15." },
  { slug: "white-oak-pastures", title: "Saturday Bluffton Walking Tour", start: "2026-11-07", url: "https://whiteoakpastures.com/pages/wop-farm-tours", kind: "tour", blurb: "Every Saturday, 11am. $15." },
  { slug: "white-oak-pastures", title: "Saturday Bluffton Walking Tour", start: "2026-11-14", url: "https://whiteoakpastures.com/pages/wop-farm-tours", kind: "tour", blurb: "Every Saturday, 11am. $15." },
  { slug: "white-oak-pastures", title: "Saturday Bluffton Walking Tour", start: "2026-11-21", url: "https://whiteoakpastures.com/pages/wop-farm-tours", kind: "tour", blurb: "Every Saturday, 11am. $15." },
  { slug: "white-oak-pastures", title: "Saturday Bluffton Walking Tour", start: "2026-11-28", url: "https://whiteoakpastures.com/pages/wop-farm-tours", kind: "tour", blurb: "Every Saturday, 11am. $15." },
  { slug: "white-oak-pastures", title: "Saturday Bluffton Walking Tour", start: "2026-12-05", url: "https://whiteoakpastures.com/pages/wop-farm-tours", kind: "tour", blurb: "Every Saturday, 11am. $15." },
  { slug: "white-oak-pastures", title: "Saturday Bluffton Walking Tour", start: "2026-12-12", url: "https://whiteoakpastures.com/pages/wop-farm-tours", kind: "tour", blurb: "Every Saturday, 11am. $15." },
  { slug: "white-oak-pastures", title: "Saturday Bluffton Walking Tour", start: "2026-12-19", url: "https://whiteoakpastures.com/pages/wop-farm-tours", kind: "tour", blurb: "Every Saturday, 11am. $15." },
  { slug: "white-oak-pastures", title: "Saturday Bluffton Walking Tour", start: "2026-12-26", url: "https://whiteoakpastures.com/pages/wop-farm-tours", kind: "tour", blurb: "Every Saturday, 11am. $15." },
  { slug: "findhorn", title: "Experience Week: From I to We", start: "2027-02-21", end: "2027-02-26", url: "https://www.findhorn.org/workshops", kind: "retreat" },
  { slug: "findhorn", title: "Experience Week: From I to We", start: "2027-03-21", end: "2027-03-26", url: "https://www.findhorn.org/workshops", kind: "retreat" },
  { slug: "findhorn", title: "Experience Week: From I to We", start: "2027-04-25", end: "2027-04-30", url: "https://www.findhorn.org/workshops", kind: "retreat" },
  { slug: "narara", title: "September Open Day Tour and Talk", start: "2026-09-26", url: "https://nararaecovillage.com/event/september-open-day-tour-and-talk-2026/", kind: "tour", blurb: "10am–1pm. Small-group tours of food gardens, shared workplaces, and low-carbon homes. $20 per adult. Under 18s and NELN members free." },
  { slug: "narara", title: "Edible Garden Trail", start: "2026-09-26", url: "https://nararaecovillage.com/calendar/", kind: "tour", blurb: "12pm–4pm, after the morning tour. Ticketed self-guided walk of home gardens, the community gardens, and the Scribbly Gum food forest. Separate charge." },
  { slug: "narara", title: "October Open Day Tour and Talk", start: "2026-10-24", url: "https://nararaecovillage.com/event/october-open-day-tour-and-talk-2026/", kind: "tour", blurb: "10am–1pm. Same monthly tour. $20 per adult. Under 18s free." },
  { slug: "narara", title: "November Open Day Tour and Talk", start: "2026-11-28", url: "https://nararaecovillage.com/event/november-open-day-tour-and-talk-2026/", kind: "tour", blurb: "10am–1pm. $20 per adult. The booking link was still to be posted. Under 18s free." },
  { slug: "dyssekilde", title: "Guided village tour", start: "2026-09-26", url: "https://dyssekilde.dk/rundvisning", kind: "tour", blurb: "11:15 at the info wall by the car park. About 90 minutes. 50 kr. No signup. Odd Saturdays through 24 October." },
  { slug: "dyssekilde", title: "Guided village tour", start: "2026-10-10", url: "https://dyssekilde.dk/rundvisning", kind: "tour", blurb: "11:15. About 90 minutes. 50 kr. No signup." },
  { slug: "dyssekilde", title: "Guided village tour", start: "2026-10-24", url: "https://dyssekilde.dk/rundvisning", kind: "tour", blurb: "Last published tour of 2026. 11:15. 50 kr." },
  { slug: "hameau-des-buis", title: "Journée portes ouvertes", start: "2026-10-17", url: "https://hameaudesbuis.org/visites/", kind: "open-day", blurb: "10:30–17:00. Farm in the morning, bioclimatic houses in the afternoon. €10. Children free. Bring a picnic. Book ahead." },
  { slug: "hameau-des-buis", title: "Journée portes ouvertes", start: "2026-11-14", url: "https://hameaudesbuis.org/visites/", kind: "open-day", blurb: "10:30–17:00. €10. Children free. Book ahead." },
  { slug: "hameau-des-buis", title: "Journée portes ouvertes", start: "2026-12-12", url: "https://hameaudesbuis.org/visites/", kind: "open-day", blurb: "10:30–17:00. Last published open day of 2026. €10. Children free." },
  { slug: "arterra", title: "Puertas abiertas", start: "2026-10-03", url: "https://arterrabizimodu.org/puertas-abiertas/", kind: "open-day", blurb: "One-day open doors: shared work, a communal meal, a tour, and questions. Not a drop-in on other days." },
  { slug: "hallingelille", title: "Village tour", start: "2026-09-27", url: "https://www.hallingelille.dk/", kind: "tour", blurb: "14:00 from the blue common house. Free. Email talk@image.dk by 19:00 the day before." },
  { slug: "hallingelille", title: "Open sewing day", start: "2026-10-11", url: "https://www.hallingelille.dk/", kind: "workshop", blurb: "13:00–16:00 in the common house. Free tea and coffee." },
  { slug: "hallingelille", title: "Open sewing day", start: "2026-11-22", url: "https://www.hallingelille.dk/", kind: "workshop", blurb: "13:00–16:00 in the common house." },
  { slug: "hallingelille", title: "Village tour", start: "2026-11-29", url: "https://www.hallingelille.dk/", kind: "tour", blurb: "14:00 from the blue common house. Free. Email the day before." },
  { slug: "tui", title: "RoPF 25 Year Celebration", start: "2026-09-25", end: "2026-09-27", url: "https://www.tuitrust.org.nz/events-1/ropf-25-year-celebration", kind: "retreat", blurb: "Two-day celebration at the Tui Events Park." },
  { slug: "tui", title: "Rising Families: Fathers & Daughters", start: "2026-10-02", end: "2026-10-04", url: "https://ropf.org.nz/programme/rising-families-fathers-daughters-ages-9-11/", kind: "retreat", blurb: "Residential weekend for fathers and daughters aged 9–11." },
  { slug: "tui", title: "Rising Families: Mothers & Sons", start: "2026-10-09", end: "2026-10-11", url: "https://ropf.org.nz/programme/rising-families-mothers-sons-ages-8-10/", kind: "retreat", blurb: "Residential weekend for mothers and sons aged 8–10." },
  { slug: "tui", title: "Rising Tides", start: "2026-10-30", end: "2026-11-01", url: "https://ropf.org.nz/programme/rising-tides/", kind: "retreat", blurb: "Weekend for girls aged 9–11 and their mothers." },
  { slug: "tui", title: "Wise and Wild", start: "2026-11-06", end: "2026-11-08", url: "https://www.tuitrust.org.nz/events-1/wise-and-wild-6", kind: "retreat", blurb: "A gathering for women 50+." },
  { slug: "tui", title: "Rising Sons", start: "2026-11-13", end: "2026-11-15", url: "https://ropf.org.nz/programme/rising-sons/", kind: "retreat", blurb: "Weekend for boys aged 8–10 and their fathers." },
  { slug: "tui", title: "Crossroads", start: "2026-11-26", end: "2026-11-29", url: "https://www.tuitrust.org.nz/events-1/crossroads-a-rites-of-passage-foundation-event-6", kind: "retreat", blurb: "Rites of passage foundation event at the Events Park." },
  { slug: "tui", title: "Men’s and Women’s Heart Sharing", start: "2026-12-10", end: "2026-12-13", url: "https://www.tuitrust.org.nz/events-1/mens-and-womens-heart-sharing-10", kind: "retreat", blurb: "For singles and couples." },
  { slug: "tui", title: "Tides – Rites of Passage", start: "2027-01-12", end: "2027-01-16", url: "https://ropf.org.nz/programme/tides-rites-of-passage/", kind: "retreat", blurb: "Five days for young women aged 13–16." },
  { slug: "tui", title: "Tracks – Rites of Passage", start: "2027-01-19", end: "2027-01-23", url: "https://ropf.org.nz/programme/tracks-rites-of-passage/", kind: "retreat", blurb: "Five-day residential for boys 14+ and their fathers." },
  { slug: "tui", title: "Alive as Earth", start: "2027-02-05", end: "2027-02-08", url: "https://innaevolution.wixsite.com/inna/alive-as-earth", kind: "retreat", blurb: "Summer gathering at the Events Park." },
  { slug: "tui", title: "SoulHum", start: "2027-02-12", end: "2027-02-14", url: "https://www.embodiedfreedom.co.nz/soulhum", kind: "retreat", blurb: "Multi-generational gathering." },
  { slug: "tui", title: "Jamboney Gathering", start: "2027-03-03", end: "2027-03-07", url: "https://www.tuitrust.org.nz/events-1/jamboney-gathering-2", kind: "festival", blurb: "Music, poetry, storytelling, and fooling." },
  { slug: "tui", title: "Rising Tides", start: "2027-03-12", end: "2027-03-14", url: "https://ropf.org.nz/programme/rising-tides/", kind: "retreat", blurb: "Weekend for girls aged 9–11 and their mothers." },
  { slug: "tui", title: "Good Men Make Tracks", start: "2027-03-19", end: "2027-03-21", url: "https://ropf.org.nz/programme/good-men-make-tracks/", kind: "workshop", blurb: "Training weekend." },
  { slug: "tui", title: "Embodied Intimacy", start: "2027-03-24", end: "2027-03-28", url: "https://www.embodiedfreedom.co.nz/embodiedintimacy", kind: "retreat", blurb: "Five-day Embodied Freedom journey." },
  { slug: "tui", title: "Tides – Rites of Passage", start: "2027-04-06", end: "2027-04-10", url: "https://ropf.org.nz/programme/tides-rites-of-passage/", kind: "retreat", blurb: "Five days for young women aged 13–16." },
  { slug: "tui", title: "Tracks – Rites of Passage", start: "2027-04-13", end: "2027-04-17", url: "https://ropf.org.nz/programme/tracks-rites-of-passage/", kind: "retreat", blurb: "Five-day residential for boys 14+ and their fathers." },
];

function todayIso() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

/** After the start day, and the published end has not passed. */
export function isUnderway(row: { start: string; end?: string }, asOf?: string): boolean {
  const day = asOf && asOf.length >= 10 ? asOf : todayIso();
  const end = row.end && row.end >= row.start ? row.end : row.start;
  return row.start < day && end >= day;
}

function normTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/\d+(st|nd|rd|th)\b/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function clashes(have: DatedEvent, row: DatedEvent): boolean {
  if (have.slug !== row.slug) return false;
  if (have.start === row.start) return true;
  if (normTitle(have.title) !== normTitle(row.title)) return false;
  return Math.abs(Date.parse(`${have.start}T00:00:00Z`) - Date.parse(`${row.start}T00:00:00Z`)) <= 21 * 86_400_000;
}

let calendarCache: DatedEvent[] | null = null;

/** Official dates, plus 2027 projections that do not collide with a posted date. */
export function calendarEvents(): DatedEvent[] {
  if (calendarCache) return calendarCache;
  const extra = inferredYear(2027).filter((row) => !datedEvents.some((have) => clashes(have, row)));
  calendarCache = [...datedEvents, ...extra];
  return calendarCache;
}

export function upcomingEvents(asOf = todayIso()): DatedEvent[] {
  return calendarEvents()
    .filter((row) => (row.end ?? row.start) >= asOf)
    .sort((a, b) => a.start.localeCompare(b.start) || a.title.localeCompare(b.title));
}

export function upcomingEventsFor(slug: string, asOf = todayIso()): DatedEvent[] {
  return upcomingEvents(asOf).filter((row) => row.slug === slug);
}

/** Every dated event on file for a village, upcoming and past. */
export function eventsFor(slug: string): DatedEvent[] {
  return calendarEvents()
    .filter((row) => row.slug === slug)
    .sort((a, b) => a.start.localeCompare(b.start) || a.title.localeCompare(b.title));
}

export function formatEventWhen(start: string, end?: string) {
  const fmt = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric" });
  const startDate = new Date(`${start}T12:00:00`);
  if (!end || end === start) return fmt.format(startDate);
  const endDate = new Date(`${end}T12:00:00`);
  const sameMonth = startDate.getMonth() === endDate.getMonth() && startDate.getFullYear() === endDate.getFullYear();
  if (sameMonth) {
    return `${startDate.getDate()}–${fmt.format(endDate)}`;
  }
  return `${fmt.format(startDate)} – ${fmt.format(endDate)}`;
}

export function monthKey(iso: string) {
  return iso.slice(0, 7);
}

export function formatEventMonth(yyyyMm: string) {
  return new Intl.DateTimeFormat("en-GB", { month: "long", year: "numeric" }).format(
    new Date(`${yyyyMm}-01T12:00:00`),
  );
}

export function groupEventsByMonth(rows: DatedEvent[]) {
  const map = new Map<string, DatedEvent[]>();
  for (const row of rows) {
    const key = monthKey(row.start);
    const list = map.get(key) ?? [];
    list.push(row);
    map.set(key, list);
  }
  return Array.from(map.entries()).map(([month, events]) => ({
    month,
    label: formatEventMonth(month),
    events,
  }));
}

function eventNote(slug: string): string {
  try {
    return informalFor(slug).find((row) => row.kind === "course-host")?.why ?? "Public courses, seminars, or events.";
  } catch {
    return "Public courses, seminars, or events.";
  }
}

let listingCache: EventListing[] | null = null;

/** Villages with a dated event or an official calendar. Course-host alone is not an event. */
export function eventListings(): EventListing[] {
  if (listingCache) return listingCache;
  listingCache = communities
    .filter(
      (community) =>
        datedEvents.some((row) => row.slug === community.slug) || Boolean(eventCalendarBySlug[community.slug]),
    )
    .map((community) => ({
      community,
      note: eventNote(community.slug),
      calendarUrl: eventCalendarBySlug[community.slug] ?? community.website,
    }))
    .sort(
      (a, b) =>
        a.community.country.localeCompare(b.community.country) ||
        a.community.name.localeCompare(b.community.name),
    );
  return listingCache;
}

export const eventVillageCount = eventListings().length;

const datedSlugSet = new Set(datedEvents.map((row) => row.slug));
export const datedVillageCount = datedSlugSet.size;
