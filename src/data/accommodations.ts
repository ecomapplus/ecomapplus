import { formerClosedAccommodations } from "./former-closed-details";
import { livingBatch2Accommodations } from "./living-batch2-details";
import { livingBatch3Accommodations } from "./living-batch3-details";
import { livingBatch4Accommodations } from "./living-batch4-details";
import { livingBatch5Accommodations } from "./living-batch5-details";
import { livingBatch6Accommodations } from "./living-batch6-details";
import { livingBatch7Accommodations } from "./living-batch7-details";
import { livingBatch8Accommodations } from "./living-batch8-details";
import { livingBatch9Accommodations } from "./living-batch9-details";
import { livingBatch10Accommodations } from "./living-batch10-details";
import { livingBatch11Accommodations } from "./living-batch11-details";
import { livingBatch12Accommodations } from "./living-batch12-details";
import { livingBatch13Accommodations } from "./living-batch13-details";
import { livingBatch14Accommodations } from "./living-batch14-details";
import { livingBatch15Accommodations } from "./living-batch15-details";
import { livingBatch16Accommodations } from "./living-batch16-details";
import { livingBatch17Accommodations } from "./living-batch17-details";
import { livingBatch18Accommodations } from "./living-batch18-details";
import { livingBatch19Accommodations } from "./living-batch19-details";
import { livingBatch20Accommodations } from "./living-batch20-details";
import { livingBatch21Accommodations } from "./living-batch21-details";
import { livingBatch22Accommodations } from "./living-batch22-details";
import { livingBatch23Accommodations } from "./living-batch23-details";
import { livingBatch24Accommodations } from "./living-batch24-details";
import { livingBatch25Accommodations } from "./living-batch25-details";
import { livingBatch26Accommodations } from "./living-batch26-details";
import { livingBatch27Accommodations } from "./living-batch27-details";
import { livingBatch28Accommodations } from "./living-batch28-details";
import { livingBatch29Accommodations } from "./living-batch29-details";
import { livingBatch30Accommodations } from "./living-batch30-details";
import { livingBatch31Accommodations } from "./living-batch31-details";
import { livingBatch32Accommodations } from "./living-batch32-details";
import { livingBatch33Accommodations } from "./living-batch33-details";
import { livingGlampingAccommodations } from "./living-glamping-details";
import { sustainableEcovillageAccommodations } from "./sustainable-ecovillage";
import { maitreyaEcovillageAccommodations } from "./maitreya-ecovillage";

export type StayKind = "camping" | "rooms" | "other";

export type StayLane = {
  available: boolean;
  /** Named lodging types, only when that kind is actually offered. */
  types: string[];
  detail: string;
};

export type StaySide = {
  overview: string;
  camping: StayLane;
  rooms: StayLane;
  other: StayLane;
};

export type Accommodations = {
  visitor: StaySide;
  resident: StaySide;
};

/** Named types that are actually a visitor bed, not a building-method mention. */
export const guestProductTypes = new Set([
  "yurt",
  "tipi",
  "glamping tent",
  "safari tent",
  "treehouse",
  "rondavel",
  "thatched hut",
]);

export const notABedTypes = new Set([
  "arranged visit",
  "open days",
  "courses",
  "day visit",
  "virtual visit",
  "reserved tour",
  "workshops",
  "hot springs",
  "bar",
  "sauna in published visits",
  "pool",
  "restaurant",
  "temple / seminar spaces",
  "dome / events",
]);

export const stayKindLabels: Record<StayKind, string> = {
  camping: "Camping",
  rooms: "Rooms",
  other: "Other lodging",
};

export function stayLaneLabel(kind: StayKind, lane: StayLane): string {
  if (kind === "camping") return "Camping";
  if (kind === "rooms") return "Rooms";
  if (lane.types.length === 1) {
    const t = lane.types[0];
    return t.charAt(0).toUpperCase() + t.slice(1);
  }
  return "Other lodging";
}

const notVisitorProduct =
  /not a (visitor|guest) product|resident vernacular|are homes\. guests|sleep there only if they host|planned community-room/i;

export function isVisitorBedLane(kind: StayKind, lane: StayLane): boolean {
  if (!lane.available) return false;
  if (kind !== "other") return true;
  if (!lane.types.length) return false;
  if (lane.types.every((t) => notABedTypes.has(t))) return false;
  if (notVisitorProduct.test(lane.detail)) return false;
  return lane.types.some((t) => guestProductTypes.has(t));
}

export const accommodationsBySlug: Record<string, Accommodations> = {
  "sabbathday-lake": {
    visitor: {
      overview: "The Shaker Museum, store, herb garden, and Sunday Meeting are daytime public. Overnight lodging is not the museum ticket.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "Tours, the store, and Meeting. Beds are not sold with the ticket." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Three covenanted Shakers live in the village houses of the religious society.",
      camping: { available: false, types: [], detail: "The Shakers live in houses." },
      rooms: { available: true, types: [], detail: "Historic dwelling rooms of the last active Shaker village." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "solheimar": {
    visitor: {
      overview: "Book the Eco-Village Guesthouse, Brekkukot and Veghus, and you eat and sleep in the geothermal valley like any other guest of the institution.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Brekkukot and Veghus guesthouse rooms, bookable online. Cafe, workshops, and Sesseljuhus sit beside the beds." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Villagers, staff, and long-term volunteers live in institutional houses run by Solheimar ses, not in privately titled lots.",
      camping: { available: false, types: [], detail: "Tents were the 1930 origin story. Residents now live in houses." },
      rooms: { available: true, types: [], detail: "Shared and staff houses on the estate. Room is part of placement or a job." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "riverside": {
    visitor: {
      overview: "The Lower Moutere farm runs a café, short-term accommodation, a gallery, and community lunches.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "The Lower Moutere farm runs a café, short-term accommodation, a gallery, and community lunches. Riverside’s “Join in” page lists volunteering, workshops, and staying on the land." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "There is no private house title.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "There is no private house title. You apply to live under the Religious Charitable Riverside Community Trust: pay rent to the trust, receive a weekly allowance, and join weekly consensus meetings." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "koinonia": {
    visitor: {
      overview: "Koinonia welcomes short visits, group visits, and “come, stay awhile, and serve.” Contact the farm in Americus, Georgia; they will place you in guest housing.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Koinonia welcomes short visits, group visits, and “come, stay awhile, and serve.” Contact the farm in Americus, Georgia; they will place you in guest housing. Internships include orientation week, weekday noon meals, groceries, and a modest stipend." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "The usual path is a visit, then an internship (work, prayer, study), then an application to become a member of the Christian intentional community.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "The usual path is a visit, then an internship (work, prayer, study), then an application to become a member of the Christian intentional community. Membership is a vocational and spiritual decision." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "camphill-copake": {
    visitor: {
      overview: "The village café, bakery, and gift shop in Copake, New York, are the public face.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Residential volunteer coworkers apply online through Camphill (account, application, references, interview) and live in shared households for months to years, room, board, and a stipend." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Extended-family households: villagers, coworkers, and children sharing a house." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "findhorn": {
    visitor: {
      overview: "The Park is built for guests. Book a Foundation guesthouse or a programme such as Experience Week, and you have a bed in the village.",
      camping: { available: false, types: [], detail: "No public tent campground is advertised. Overnight guests use Foundation lodging." },
      rooms: { available: true, types: [], detail: "Findhorn Foundation guesthouses and programme rooms. Experience Week is the classic six-day stay." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in ordinary dwellings, ecological houses, and a remaining scatter of caravans on Park Ecovillage Trust and freehold ground.",
      camping: { available: false, types: [], detail: "Tents are not how members live." },
      rooms: { available: true, types: [], detail: "Houses, flats, and Foundation rooms. Some freehold, some through Park Ecovillage Trust." },
      other: { available: true, types: ["converted caravan"], detail: "Caravans remain in the village fabric, leftover from the original park and still lived in." },
    },
  },
  "twin-oaks": {
    visitor: {
      overview: "A three-hour Saturday tour, or the three-week Visitor Program where you live in the community and work a labor quota.",
      camping: { available: false, types: [], detail: "The programme puts you in a residence, not a campground." },
      rooms: { available: true, types: [], detail: "Visitor Program lodging in Twin Oaks residences for the three-week stay. Saturday tours are daytime." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Income-sharing members live in communal residences and work the quota. Housing is part of membership.",
      camping: { available: false, types: [], detail: "Members live in residences." },
      rooms: { available: true, types: [], detail: "Shared residences. You get a room as a member, not a lease on the open market." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "auroville": {
    visitor: {
      overview: "Book a registered Auroville guesthouse. The township is visitable; sleeping there goes through the guesthouse system.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Registered guesthouses at guesthouses.auroville.org. That is the legitimate bed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Residents live in communities and houses under the Auroville Foundation, from apartments to experimental buildings.",
      camping: { available: false, types: [], detail: "Residents live in houses." },
      rooms: { available: true, types: [], detail: "Rooms and houses assigned or stewarded through the township, not a private freehold market." },
      other: { available: true, types: ["earthbag hut", "rammed-earth house"], detail: "Auroville's building experiments, earth, ferrocement, compressed earth, sit in many communities. Stewardship, not a hotel." },
    },
  },
  "the-farm": {
    visitor: {
      overview: "Tours and the Farm Store are the public layer. Overnight stays exist when arranged. Show up with a tent only if they said yes.",
      camping: { available: true, types: [], detail: "Camping is possible when the Farm agrees. Unannounced camping is refused." },
      rooms: { available: true, types: [], detail: "Guest housing is arranged through the Farm. Start with the store and a scheduled tour." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A cooperative village of houses on the Tennessee land the caravan settled in 1971.",
      camping: { available: false, types: [], detail: "The caravan became houses." },
      rooms: { available: true, types: [], detail: "Family and member houses in the village." },
      other: { available: false, types: [], detail: "Ordinary houses are the resident form." },
    },
  },
  "gaviotas": {
    visitor: {
      overview: "Gaviotas sits in the Vichada savanna, hours from Bogotá, and is a working research-and-production village rather than a tourist site.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "There is no public guesthouse booking page." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "There is no residential membership, co-op share, or lot for sale.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "There is no residential membership, co-op share, or lot for sale. People work for the foundation’s enterprises (resin, water, music, forestry)." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "moora-moora": {
    visitor: {
      overview: "Moora Moora on Mount Toolebewong runs internships and receives visitors by arrangement, not as a public resort.",
      camping: { available: true, types: [], detail: "Open days and education events happen; camping or a stay is something you negotiate." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Houses only transfer with membership.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Houses only transfer with membership. The published process is: get to know the co-op (visits, internship, meetings), apply, and (if accepted) buy a dwelling that is already in the co-op or build under its rules." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "east-wind": {
    visitor: {
      overview: "Visiting is by letter of introduction to membership (email is preferred).",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Visiting is by letter of introduction to membership (email is preferred). Official visitor periods last three weeks; you are expected to work 35 hours a week (105 hours total) and stay the full session." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Members live in shared residences. A room comes with membership and the labor quota." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "damanhur": {
    visitor: {
      overview: "Book through Damanhur Welcome / damanhur.travel. Temple of Humankind visits, Damjl, and the Sacred Woods are ticketed experiences, not casual wanderings, underground temples are guided.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Citizenship is a staged spiritual and social process.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Citizenship is a staged spiritual and social process. New Life 2.0 (about a month) is the published first residential preview; longer programmes follow." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "svanholm": {
    visitor: {
      overview: "Svanholm, Denmark’s large income-sharing collective, runs visitor weeks (besøgsuge) so outsiders can work and eat with the community.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Svanholm, Denmark’s large income-sharing collective, runs visitor weeks (besøgsuge) so outsiders can work and eat with the community. Contact the commune in English and apply for a published visitor period." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Members live in shared residences. A room comes with membership and the labor quota." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "lakabe": {
    visitor: {
      overview: "Lakabe is a recovered village in Navarre.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Contact the cultural association before any trip; work camps and arranged visits have happened, but there is no guesthouse booking engine and no drop-in tourism." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "There are no private lots.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "There are no private lots. People join by living there, working, and being accepted by the existing group while title stays with Navarre." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "kibbutz-lotan": {
    visitor: {
      overview: "Tourists book eco-lodging and a look at the straw-bale and Earthship experiments. The EcoCampus mud-domes are the course beds.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Eco-lodging on the kibbutz. Book as a tourist or as a course participant." },
      other: { available: true, types: ["geodesic dome", "straw-bale house", "Earthship"], detail: "Ten geodesic dome-atories, straw-bale and earth plaster, built as EcoCampus. Earthship and earthbag experiments sit in the teaching landscape." },
    },
    resident: {
      overview: "A Reform kibbutz that stayed collective. Members live in kibbutz housing, not private lots in the wadi.",
      camping: { available: false, types: [], detail: "Members live in houses." },
      rooms: { available: true, types: [], detail: "Standard kibbutz rooms and family housing assigned through the collective." },
      other: { available: true, types: ["geodesic dome", "straw-bale house", "Earthship"], detail: "Experimental buildings are the campus and the brand. Family life is still kibbutz rooms." },
    },
  },
  "lebensgarten": {
    visitor: {
      overview: "Lebensgarten Steyerberg’s seminar house (a nonprofit gGmbH) is the front door: courses, guest rooms, and a public educational programme.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Lebensgarten Steyerberg’s seminar house (a nonprofit gGmbH) is the front door: courses, guest rooms, and a public educational programme. You book a seminar or a bed, eat with other guests, and see the settlement." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Residents typically rent or buy a dwelling in the eco-settlement and take part in the Verein (registered association) that holds village life.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Residents typically rent or buy a dwelling in the eco-settlement and take part in the Verein (registered association) that holds village life. It is closer to an ecological neighborhood with a strong seminar engine than to income-sharing." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "niederkaufungen": {
    visitor: {
      overview: "Kommune Niederkaufungen asks visitors to read the English “Visiting us” notes and contact them well in advance. Arrive by public transport if you can. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Members live in shared residences. A room comes with membership and the labor quota." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "crystal-waters": {
    visitor: {
      overview: "Phone the EcoPark. Crystal Waters hires camping pitches and cabins on the common property while lot owners live on their freehold.",
      camping: { available: true, types: [], detail: "EcoPark camping on the common land. Book by phone through the village co-operative." },
      rooms: { available: true, types: [], detail: "EcoPark cabin hire. Village-centre stays, not a spare room in a private lot." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Ordinary houses on freehold lots inside Group Title Plan 1833, plus by-laws on building, chemicals, animals, and trees.",
      camping: { available: false, types: [], detail: "Camping is the EcoPark, not a resident tenure." },
      rooms: { available: true, types: [], detail: "Private houses on the lots. You buy a lot and live in a house, with the body corporate in the background." },
      other: { available: true, types: ["straw-bale house"], detail: "Some houses use the ecological building palette the village is known for. Confirm lot by lot." },
    },
  },
  "ecovillage-ithaca": {
    visitor: {
      overview: "Free public tours leave from the Frog common house on the last Saturday of most months (not November-December); notify Thrive Ithaca. Small-group tours (~$30 a person) and private group tours are bookable. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Private dwellings: houses or units with rooms, kitchens, and a common house or by-laws in the background." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "zegg": {
    visitor: {
      overview: "ZEGG in Bad Belzig is an international seminar centre as well as a community.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "ZEGG in Bad Belzig is an international seminar centre as well as a community. Book a festival, workshop, or guest stay. The gGmbH hosts the public programme." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Community membership is separate from buying a ticket to a festival.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Community membership is separate from buying a ticket to a festival. People usually attend seminars, spend longer guest periods, and then enter a membership conversation with the resident group." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "los-angeles-eco-village": {
    visitor: {
      overview: "Public walking tours on posted weekend dates, 10:30 a.m. to 1 p.m., sliding scale $15-$25 (children 12 and under free). No published visitor lodging listed.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Co-op dwellings. You join, occupy a unit, and share the building rules." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "earthaven": {
    visitor: {
      overview: "Live-and-work exchanges with member hosts trade about 24 hours a week for camping, food, and a roof. Write the host, not a front desk.",
      camping: { available: true, types: [], detail: "Work-exchange camping arranged with a member host, plus four hours a week for Earthaven itself." },
      rooms: { available: true, types: [], detail: "A roof is part of the same exchange. Indoor beds depend on the host household." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Members live in natural buildings on HOA and pod sites in the North Carolina woods.",
      camping: { available: false, types: [], detail: "Camping is the visitor exchange. Members have houses." },
      rooms: { available: true, types: [], detail: "Households in owner-built dwellings, organised by neighbourhood pods." },
      other: { available: true, types: ["cob house", "straw-bale house"], detail: "Natural building is the culture: cob, straw, timber, and whatever the site covenant allows." },
    },
  },
  "konohana": {
    visitor: {
      overview: "Konohana Family in Fujinomiya offers farm stays, courses, and volunteer-style immersions through the family.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Konohana Family in Fujinomiya offers farm stays, courses, and volunteer-style immersions through the family. You eat the household’s meals, work the fields, and sleep as a guest of one extended family at the foot of Mt. Fuji." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "People sleep in the community's own houses, rooms of a household or order rather than a housing market." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "oaec": {
    visitor: {
      overview: "OAEC in Occidental, California, is a teaching site: dozens of courses, retreats, nursery plant sales, and tours each year.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "An 11-month internship (cohort of about five to six, 24 hours a week, private cabin, meals, stipend) is the deep visitor path, applications open late summer for the following year." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "The people who live there as a community are Sowing Circle LLC, a closed residential group.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "The people who live there as a community are Sowing Circle LLC, a closed residential group. You do not apply to “join OAEC” as a villager." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "tamera": {
    visitor: {
      overview: "Book an on-site course or guest programme (Introduction to Tamera, community courses, Summer University, event calendar).",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Book an on-site course or guest programme (Introduction to Tamera, community courses, Summer University, event calendar). The Monte do Cerro land in Alentejo hosts guests in seminar infrastructure." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Tamera’s published path for new co-workers is a multi-year education-and-engagement programme (recently framed as three years), with a written application, often a video call, and a prerequisite on-site course.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Tamera’s published path for new co-workers is a multi-year education-and-engagement programme (recently framed as three years), with a written application, often a video call, and a prerequisite on-site course. Deadlines are real (for 2026, applications closed in February)." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "dancing-rabbit": {
    visitor: {
      overview: "Programmes put you in the wooded campground with meals and a structured look at the village. Write first. This is rural Missouri, not a motel strip.",
      camping: { available: true, types: [], detail: "Wooded campground used for visitor programmes. Camping comes with the structured stay, not as an anonymous pitch." },
      rooms: { available: true, types: [], detail: "Host roofs and indoor visitor beds are arranged with the programme. Confirm when you write." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Members build low-impact houses on community land trust leases: cob, straw, salvaged wood. Cars are a co-op, not a driveway habit.",
      camping: { available: false, types: [], detail: "Camping is for programmes. Members live in houses they built." },
      rooms: { available: true, types: [], detail: "Small dwellings with rooms, kitchens, and the usual village sharing of tools and vehicles." },
      other: { available: true, types: ["cob house", "straw-bale house"], detail: "Prairie cob and straw-bale houses are the resident vernacular." },
    },
  },
  "sieben-linden": {
    visitor: {
      overview: "The guesthouse and seminar programme are the door. You book a bed and a course in the Altmark straw-bale village.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Seminar guesthouse rooms." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A cooperatively owned village of load-bearing straw-bale neighbourhoods on land the Siedlungsgenossenschaft holds in common.",
      camping: { available: false, types: [], detail: "Members live in houses." },
      rooms: { available: true, types: [], detail: "Rooms in straw-bale and timber houses the members built and occupy." },
      other: { available: true, types: ["straw-bale house"], detail: "Load-bearing straw-bale is the resident building culture, timber and clay with it." },
    },
  },
  "cloughjordan": {
    visitor: {
      overview: "Cloughjordan Ecovillage welcomes weekend tours (often first Sunday of the month), a 360° virtual tour, and overnight stays at the eco-hostel in the village.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Cloughjordan Ecovillage welcomes weekend tours (often first Sunday of the month), a 360° virtual tour, and overnight stays at the eco-hostel in the village." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "The village company sells serviced sites; households then build, or you buy an existing house when one is offered.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "The village company sells serviced sites; households then build, or you buy an existing house when one is offered. You become part of the company-limited-by-guarantee membership and the residents’ governance by living there, not by a year of income-sharing." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "currumbin": {
    visitor: {
      overview: "The Ecovillage at Currumbin is a private hinterland subdivision. Village-centre businesses (GROUND produce, café, bath house) are the public edge; 147 freehold lots are people’s homes. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Private dwellings: houses or units with rooms, kitchens, and a common house or by-laws in the background." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "longo-mai": {
    visitor: {
      overview: "Longo Maï has hosted visitors since the first European co-op members arrived. Researchers, volunteers, and travellers stay weeks to a year, work the finca, and live communitarian life.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "This is a refugee-origin agricultural cooperative.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "This is a refugee-origin agricultural cooperative. Living here long-term means being accepted into cooperative life, farming, committees, Spanish, and a fit with a mostly Salvadoran village." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "maya-mountain": {
    visitor: {
      overview: "The farm hosts interns, students, volunteers, and visiting groups on the Columbia River above San Pedro Columbia. Apply through mmrfbz.org. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Maya Mountain is a Belizean NGO farm.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Maya Mountain is a Belizean NGO farm. The realistic door is an internship or a staff role." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "pachamama": {
    visitor: {
      overview: "Book a retreat, workshop, or silent sitting.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Book a retreat, workshop, or silent sitting. The village is set up for visitors: lodging, meditation hall, and a stated practice of welcoming people (including children) into the valley near San Juanillo." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Long-term life here is membership in a founder-led spiritual community.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Long-term life here is membership in a founder-led spiritual community. People who feel a call put down roots by relationship with the village and with Tyohar’s community, not by conveyancing a lot." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "imap": {
    visitor: {
      overview: "IMAP’s centre is in Pachitulul, San Lucas Tolimán, kilometre 3.5 toward Santiago Atitlán, then a walk toward the lake.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Workshops, the living seed bank, amaranth kitchens, and ecological cabins are the public face." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "IMAP is a Maya Kaqchikel ONG.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "IMAP is a Maya Kaqchikel ONG. The path is to be a farmer in the network, a workshop student, a visiting educator, or (rarely) staff." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "rancho-mastatal": {
    visitor: {
      overview: "Book the ecolodge, a permaculture or natural-building course, or a farm-to-table stay. Mastatal is a small village in Puriscal; the ranch has trails, swimming holes, and a wildlife refuge backing La Cangreja.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Residential life is staff and apprentices, not lot owners.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Residential life is staff and apprentices, not lot owners. Apply for an apprenticeship or a job on the teaching team." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "bona-fide": {
    visitor: {
      overview: "The usual door is a three-month internship on Finca Bona Fide in Balgüe, Ometepe: orientation, room and board, Spanish lessons, and a farm-system project.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "The usual door is a three-month internship on Finca Bona Fide in Balgüe, Ometepe: orientation, room and board, Spanish lessons, and a farm-system project. Apply through projectbonafide.com." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Project Bona Fide is a 501(c)(3) and Nicaraguan NGO farm.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Project Bona Fide is a 501(c)(3) and Nicaraguan NGO farm. There is no village membership and no parcel for sale." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "ipes": {
    visitor: {
      overview: "The teaching hectare sits above Suchitoto, a colonial town an hour or so from San Salvador.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: true, types: ["thatched hut"], detail: "This is a campesino institute: expect farm work, Spanish, and a thatched classroom." },
    },
    resident: {
      overview: "IPES is a farmer NGO.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "IPES is a farmer NGO. Membership means being a campesino in the network, not buying a house on the hectare." },
      other: { available: true, types: ["thatched hut"], detail: "Thatch as the monument: A thatched teaching site on stony ground." },
    },
  },
  "finca-bellavista": {
    visitor: {
      overview: "Real-estate tours are by appointment only.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Treehouse lodging and walkways are the public edge; occupied houses are private." },
      other: { available: true, types: ["treehouse"], detail: "Treehouse lodging and walkways are the public edge; occupied houses are private." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Private dwellings: houses or units with rooms, kitchens, and a common house or by-laws in the background." },
      other: { available: true, types: ["treehouse"], detail: "Treehouses instead of a mill: Owner-built homes in the canopy under written guidelines: local materials, tree protection, walkways between octagon houses." },
    },
  },
  "la-ecovilla": {
    visitor: {
      overview: "Contact La Ecovilla to arrange a look at the original village or San Mateo. Forty-eight families live on the original 42 acres, this is a neighborhood.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Private dwellings: houses or units with rooms, kitchens, and a common house or by-laws in the background." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "brave-earth": {
    visitor: {
      overview: "Book a Gaia Dome, Earth Tambo, jungle hut, or garden cabina through braveearth.com and come for a retreat.",
      camping: { available: true, types: [], detail: "Book lodging; do not arrive to camp." },
      rooms: { available: true, types: [], detail: "Book lodging; do not arrive to camp." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Residential membership is a share in a 40-shareholder commons (a private living structure on communal land).",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Residential membership is a share in a 40-shareholder commons (a private living structure on communal land). Shares have been limited; Porvenir Design noted about half sold in 2019." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "lama": {
    visitor: {
      overview: "Call or write first. Retreats, a summer steward season, and visitor yurts. Not a drop-in inn.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Guest yurts and retreat beds, by arrangement. Write first." },
      other: { available: true, types: ["yurt"], detail: "Lama runs retreats, community camp, and a summer steward residency at 8,600 feet beside Carson National Forest, about 30 miles north of Taos." },
    },
    resident: {
      overview: "The path is a visit, then a summer steward or resident-circle season, inside a 501(c)(3) whose board will not sell you title.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "The path is a visit, then a summer steward or resident-circle season, inside a 501(c)(3) whose board will not sell you title. People who stay a long time still do not own a share of Lama Mountain." },
      other: { available: true, types: ["yurt", "straw-bale house"], detail: "After the 1996 fire, people rebuilt in straw-bale, adobe, and yurts. Nobody owns the mountain." },
    },
  },
  "arcosanti": {
    visitor: {
      overview: "Daily public tours, specialty architecture and archives tours, a café and gallery, guest rooms, hiking trails, and live demonstrations in the bronze foundry and ceramics apse.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Daily public tours, specialty architecture and archives tours, a café and gallery, guest rooms, hiking trails, and live demonstrations in the bronze foundry and ceramics apse. Book at arcosanti.org." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Living here means a job with The Cosanti Foundation, a workshop, or a long volunteer stretch.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Living here means a job with The Cosanti Foundation, a workshop, or a long volunteer stretch. The 860 acres and the state leases stay with the nonprofit and Arizona." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "alpha-farm": {
    visitor: {
      overview: "Write ahead. Deadwood is an hour of Coast Range road from the nearest grocery; this is a working income-sharing farm.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Members live in shared residences. A room comes with membership and the labor quota." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "sirius": {
    visitor: {
      overview: "Sirius is set up for visitors: internships, programs, and exploring-member stays on 90 acres in Shutesbury, east of Amherst. Read the membership page, then email.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Intern or visit, then apply as an exploring member, then resident.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Intern or visit, then apply as an exploring member, then resident. The 501(c)(3) holds the land." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "huehuecoyotl": {
    visitor: {
      overview: "Five acres in the Sierra del Tepozteco, above Tepoztlán. Contact the community about cultural programs, courses, or a short stay.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A small asociación of about twenty people.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "A small asociación of about twenty people. There is no published share offer." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "cite-ecologique": {
    visitor: {
      overview: "The Cité lists visits, internships, and training. Ham-Nord is rural Centre-du-Québec (689 rang 8). No published visitor lodging.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Participate in a visit, then an internship or training, then present a request to the community.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Participate in a visit, then an internship or training, then present a request to the community. Work in the school, the farm, or an enterprise (Kheops and the others) is the realistic path." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "acorn": {
    visitor: {
      overview: "Like Twin Oaks: a visitor period on the Louisa County farm, especially during Southern Exposure seed-packing season, when extra hands are expected.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Like Twin Oaks: a visitor period on the Louisa County farm, especially during Southern Exposure seed-packing season, when extra hands are expected. Contact through southernexposure.com/acorn-community-farm or the FEC visitor channels." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Members live in shared residences. A room comes with membership and the labor quota." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "las-canadas": {
    visitor: {
      overview: "Book a course (permaculture, agroecology, bioconstruction, silvopasture, or the regenerative-living immersion) at bosquedeniebla.com.mx.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Book a course (permaculture, agroecology, bioconstruction, silvopasture, or the regenerative-living immersion) at bosquedeniebla.com.mx. The Huatusco cloud-forest ranch is set up for students: food, lodging, milpa, dairy, and a seed bank." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Co-op dwellings. You join, occupy a unit, and share the building rules." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "our-ecovillage": {
    visitor: {
      overview: "Book a PDC, a natural-building course, an internship, or a stay.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Book a PDC, a natural-building course, an internship, or a stay. 1565 Baldy Mountain Road, Shawnigan Lake, is a 25-acre teaching site with cob buildings, a labyrinth, gardens, and beds for students." },
      other: { available: true, types: ["treehouse"], detail: "Talk to the co-op; do not confuse this with Treehouse Village Ecohousing in Nova Scotia." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Co-op dwellings. You join, occupy a unit, and share the building rules." },
      other: { available: true, types: ["treehouse"], detail: "Cob on 25 acres: Natural-building workshops and cob demonstration buildings are why students come." },
    },
  },
  "whole-village": {
    visitor: {
      overview: "Contact Whole Village to arrange a look at the Caledon farm and Greenhaven. This is eleven families in one house plus a CSA farm.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Co-op dwellings. You join, occupy a unit, and share the building rules." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "botton": {
    visitor: {
      overview: "The café, bakery, and landscape in Danby Dale are the public face. Walk the North York Moors paths; eat at the village café. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Extended-family households: villagers, coworkers, and children sharing a house." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "limans": {
    visitor: {
      overview: "Longo Maï farms receive solidarity visitors and working guests. Contact Pro Longo Maï or the Limans cooperative rather than arriving at Le Pigeonnier unannounced. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "No wages, no private title, no lot to buy.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "No wages, no private title, no lot to buy. You live the cooperative and the Swiss land foundation holds the land." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "los-portales": {
    visitor: {
      overview: "The finca hosts courses, ESC volunteers, and arranged stays at Castilblanco de los Arroyos, about 50 km north of Seville. Contact losportales.net.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "About thirty residents in an asociación.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "About thirty residents in an asociación. There is no published share offer." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "torri-superiore": {
    visitor: {
      overview: "Book the eco-guesthouse in the restored 14th-century stone hamlet.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Book the eco-guesthouse in the restored 14th-century stone hamlet." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "The resident group is about twenty people deciding by consensus.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "The resident group is about twenty people deciding by consensus. The realistic doors are a restored private apartment in the stack (when one is offered) or a long commitment to the association and cooperative." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "krishna-valley": {
    visitor: {
      overview: "Buy a visitor ticket at the valley.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Guesthouse beds exist." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "People sleep in the community's own houses, rooms of a household or order rather than a housing market." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "brithdir-mawr": {
    visitor: {
      overview: "The farm sits under Carningli in the Pembrokeshire Coast National Park. Visits have long been by arrangement café. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Co-op dwellings. You join, occupy a unit, and share the building rules." },
      other: { available: true, types: ["roundhouse"], detail: "That Roundhouse: Turf roof, 1997, a ten-year planning fight." },
    },
  },
  "keuruu": {
    visitor: {
      overview: "Contact Keuruun ekokylä (keuruunekokyla.fi) about a visit, a course, or talkoot. Central Finland lake country near the town of Keuruu. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Join the registered association.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Join the registered association. There is no asunto-osakeyhtiö apartment to buy and no private title to the 53 hectares." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "hurdal": {
    visitor: {
      overview: "Huldra Økogrend is a neighbourhood of timber houses at Gjøding, about 80 km north of Oslo. There is a common house and a village shop in published descriptions. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Private dwellings: houses or units with rooms, kitchens, and a common house or by-laws in the background." },
      other: { available: true, types: ["straw-bale house"], detail: "From straw-bale to active houses: Nine straw-bale houses on a rented farm, then Gaia Architects and others on Huldra Økogrend." },
    },
  },
  "suderbyn": {
    visitor: {
      overview: "Book a stay, a course, or an ESC / Green Skills volunteer year.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Book a stay, a course, or an ESC / Green Skills volunteer year. Five hectares at Västerhejde, south of Visby on Gotland." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Join the People-Care cooperative after time on the land.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Join the People-Care cooperative after time on the land. RELEARN volunteers are not automatically members." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "aardehuis": {
    visitor: {
      overview: "Twenty-three earthships and a common house on the outskirts of Olst. The neighbourhood receives groups, municipalities, and nascent ecovillage visitors by arrangement (aardehuis.nl). No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Private dwellings: houses or units with rooms, kitchens, and a common house or by-laws in the background." },
      other: { available: true, types: ["Earthship"], detail: "Twenty-three earthships: Tire-and-earth houses packed by volunteers from dozens of countries." },
    },
  },
  "comunidad-del-sur": {
    visitor: {
      overview: "This is a small Montevideo collective with a press.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Nordan titles and the Tres Cruces address are the public face; there is no guesthouse booking page." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "An anarchist common-purse tradition you buy.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "An anarchist common-purse tradition you buy. Living here has always meant being accepted into a tiny self-managed collective, after dictatorship exile, even smaller." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "penalolen": {
    visitor: {
      overview: "An urban-edge eco-neighborhood on the Peñalolén hillside. Paths, the forest, and the junta’s public life are walkable from Santiago; houses are private. No published visitor lodging.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "You join by acquiring a sitio inside the copropiedad, harder than a suburban listing, easier than a religious covenant.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "You join by acquiring a sitio inside the copropiedad, harder than a suburban listing, easier than a religious covenant. There is no housing-co-op share and no land-trust lease." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "eco-truly": {
    visitor: {
      overview: "One of the easier South American visits: cone houses on the beach at Chacra y Mar, about 63 km north of Lima.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Day tickets, guided tours, and a simple guesthouse." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "People sleep in the community's own houses, rooms of a household or order rather than a housing market." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "ecovilla-gaia": {
    visitor: {
      overview: "Book a course, a PDC, or a bioconstruction workshop through gaia.org.ar / the Universidad de Permacultura.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Book a course, a PDC, or a bioconstruction workshop through gaia.org.ar / the Universidad de Permacultura. Navarro is about 120 km from Buenos Aires on RP 41." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Asociación civil membership sale.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Asociación civil membership sale. Course students are not automatically members." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "ipec": {
    visitor: {
      overview: "Book a PDC, a bioconstruction course, or a volunteer stay through the institute.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Book a PDC, a bioconstruction course, or a volunteer stay through the institute. Twenty-five hectares of restored Cerrado at Pirenópolis, Goiás." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A nonprofit institute.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "A nonprofit institute. The realistic door is a course, a volunteer season, or a staff role." },
      other: { available: true, types: ["rammed-earth house"], detail: "Bioconstruindo, 2001: André Soares introduced natural building as a named course, cob, rammed earth, light clay, on the Pirenópolis site." },
    },
  },
  "piracanga": {
    visitor: {
      overview: "Book a retreat through Unah or Inkiri (inkiri.com).",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Book a retreat through Unah or Inkiri (inkiri.com). The village sits where the Rio Piracanga meets the sea on the Maraú Peninsula, Bahia." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Three doors: Inkiri nonprofit membership, a job (including Unah), or a private dwelling when one is actually offered.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Three doors: Inkiri nonprofit membership, a job (including Unah), or a private dwelling when one is actually offered. Easier than a closed commune, still a peninsula with a waiting culture." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "aldeafeliz": {
    visitor: {
      overview: "Workshops in permaculture, NVC, sociocracy, and natural building; about a thousand visitors a year on their own count. Contact aldeafeliz.org. No published visitor lodging.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "GEN currently lists the community as not open to new members.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "GEN currently lists the community as not open to new members. The association holds about 90% of the land." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "nashira": {
    visitor: {
      overview: "A working women’s housing project on three hectares at Bolo San Isidro, Palmira, sugarcane country near Cali. The restaurant and productive núcleos have received journalists, students, and World Habitat visitors by arrangement (nashira-ecoaldea.org). No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Private dwellings: houses or units with rooms, kitchens, and a common house or by-laws in the background." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "el-manzano": {
    visitor: {
      overview: "Book a PDC or an apprenticeship through elmanzano.org. A 120-hectare family farm at Cabrero, Biobío, in a landscape of pine plantations.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Family freehold plus a limited company and a nonprofit school.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Family freehold plus a limited company and a nonprofit school. Apprentices are not members." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "finca-sagrada": {
    visitor: {
      overview: "A working biodynamic farm in an isolated Vilcabamba valley. Visitors by arrangement through fincasagrada.org, river, food forest, and mountain. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "GEN lists about seven residents.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "GEN lists about seven residents. The farm is a private holding; the asociación lends legal personality to valley projects." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "sekem": {
    visitor: {
      overview: "The Sharqia farm, school, and Heliopolis University receive study visits, journalists, and tour groups by arrangement through sekem.com. The companies have shops; the desert farm is a workplace.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "The realistic path is a job in a SEKEM company, a place at the school or university, or a farmer contract in the biodynamic network.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "The realistic path is a job in a SEKEM company, a place at the school or university, or a farmer contract in the biodynamic network. There is no member share and no private title to the original 70 hectares." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "wongsanit": {
    visitor: {
      overview: "Book a guesthouse stay, a study visit, or an EDE course through wongsanit-ashram.org.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Book a guesthouse stay, a study visit, or an EDE course through wongsanit-ashram." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "People sleep in the community's own houses, rooms of a household or order rather than a housing market." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "ndem": {
    visitor: {
      overview: "A living Sahel village near Bambey, about 120 km from Dakar. ONG de Ndem and Maam Samba receive journalists, buyers, and solidarity visitors by arrangement (ong-ndem.org). No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "The village is older than the NGO.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "The village is older than the NGO. Core membership is relational (Bayfall, family, craft)." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "songhai": {
    visitor: {
      overview: "The Porto-Novo campus on RNIE 1 at Ouando is a teaching farm with aquaculture tanks, processing, and a public face. Book a tour or a training.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "An NGO campus.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "An NGO campus. Trainees become rural entrepreneurs and leave; staff run the farm." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "tlholego": {
    visitor: {
      overview: "Book a course, camp, or eco-venue stay through rucore.org.za.",
      camping: { available: true, types: [], detail: "Book a course, camp, or eco-venue stay through rucore." },
      rooms: { available: true, types: [], detail: "Book a course, camp, or eco-venue stay through rucore.org.za. A 150-hectare former cattle farm on the western Magaliesberg, Koster Road R52 near Rustenburg." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Rucore is a South African nonprofit.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Rucore is a South African nonprofit. Stays and courses are the public door." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "lilleoru": {
    visitor: {
      overview: "Visit Estonia lists the Flower of Life garden. Book a Practical Consciousness course, an event, or a garden visit through lilleoru.ee.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Lilleoru MTÜ owns the 30 hectares.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Lilleoru MTÜ owns the 30 hectares. About 30 people live on site; NGO membership is larger and mostly non-resident." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "zmag": {
    visitor: {
      overview: "The Recycled Estate at Vukomerić, 30 km from Zagreb, runs courses, a seed library, and workshops by appointment through zmag.hr. Straw-bale houses and a common garden are the public face. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "ZMAG is a Croatian association.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "ZMAG is a Croatian association. Members decide; some live in houses on nearby village plots." },
      other: { available: true, types: ["straw-bale house"], detail: "Straw-bale and tires: Natural-building experiments that gave the estate its name." },
    },
  },
  "guneskoy": {
    visitor: {
      overview: "Sun Village sits 3 km from Hisarköy, Yahşihan, Kırıkkale, 65 km east of Ankara. CSA members, European volunteers, and arranged visitors see the straw-bale mandala and the vegetable fields. No published visitor lodging.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A handful of cooperative members.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "A handful of cooperative members. Volunteers and CSA members are not automatically co-op members." },
      other: { available: true, types: ["straw-bale house"], detail: "Straw-bale mandala: The 2007 building the cooperative kept when the railway cut a hectare in the 2010s." },
    },
  },
  "kufunda": {
    visitor: {
      overview: "Book a programme (Art of Hosting, Oasis Game, Young Women are Medicine) or a stay through the village.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Book a programme (Art of Hosting, Oasis Game, Young Women are Medicine) or a stay through the village. Ruwa is about 25 km from Harare." },
      other: { available: true, types: ["rondavel", "thatched hut"], detail: "Thatched dormitories, rondavels, a dining room, and a school." },
    },
    resident: {
      overview: "A practice community on family land.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "A practice community on family land. About fifteen families live and work here." },
      other: { available: true, types: ["rondavel", "thatched hut"], detail: "Thatch and rondavels: Dormitories and a dining room the village grew as the work demanded." },
    },
  },
  "glarisegg": {
    visitor: {
      overview: "Book a seminar, an EDE, a garden day, or the Academy for Community Education through schloss-glarisegg.ch.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Book a seminar, an EDE, a garden day, or the Academy for Community Education through schloss-glarisegg.ch. The castle on Lake Constance at Steckborn is a venue: park, forest, shore." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "The AG owns the stones; the Verein lives in them.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "The AG owns the stones; the Verein lives in them. Joining is a long outer-circle / inner-circle path." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "los-horcones": {
    visitor: {
      overview: "Km 63 of the Hermosillo-Chihuahua highway (Federal 16), about 45 minutes from Hermosillo. Visitors welcome October-March, weekdays preferred. No published visitor lodging listed.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A small family-core cooperativa.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "A small family-core cooperativa. Open to new members in principle; growth has been slow and measured by commitment, not headcount." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "tosepan": {
    visitor: {
      overview: "Stay at Tosepan Kali in Nahuiogpan, 1.5 km from Cuetzalan centro on the road to San Miguel Tzinacapan: bamboo cabins, hotel, hostel, temazcal, coffee and cinnamon walks, Yohualichan nearby.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "5 km from Cuetzalan centro on the road to San Miguel Tzinacapan: bamboo cabins, hotel, hostel, temazcal, coffee and cinnamon walks, Yohualichan nearby." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Membership is as a socio of a local cooperative (coffee, pepper, savings, school, tourism work) requested in a community assembly.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Membership is as a socio of a local cooperative (coffee, pepper, savings, school, tourism work) requested in a community assembly. Fifty-three thousand people already belong that way." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "teopantli-kalpulli": {
    visitor: {
      overview: "San Isidro Mazatepec, municipality of Tala, at the southern edge of Bosque La Primavera, about 40 minutes from Guadalajara. The kalpulli has hosted festivals and the 2015 Consejo de Visiones. No published visitor lodging.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "People sleep in the community's own houses, rooms of a household or order rather than a housing market." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "litibu": {
    visitor: {
      overview: "Playa Litibú, two kilometres from Higuera Blanca, between Sayulita and Punta de Mita. Eight casas in the beach forest. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Private dwellings: houses or units with rooms, kitchens, and a common house or by-laws in the background." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "u-yits-kaan": {
    visitor: {
      overview: "Reserve a recorrido (meliponario, milpa, a day of escuela campesina) at uyitskaan.com. The internado sits at Km 3 of the Maní-Dzán road. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "There is no house to buy.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "There is no house to buy. Paths are: visit, study, become a farming family in the campesino-a-campesino network, or support the A.C." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "tierra-del-sol": {
    visitor: {
      overview: "Book a guided visit (from MXN $250) or a thematic day with lunch through tierradelsol.org.mx. Paraje Langueche, San Jerónimo Tlacochahuaya, Valles Centrales.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A founder-led teaching farm on private title.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "A founder-led teaching farm on private title. Volunteers and apprentices come and go." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "bosque-village": {
    visitor: {
      overview: "Forest near Yotatiro / Erongarícuaro, above Lake Pátzcuaro. Historically a participant application (skills, self-directed work). No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "IC.org has listed a single invested member (the founder) and an intern-first path for people who can support themselves.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "IC.org has listed a single invested member (the founder) and an intern-first path for people who can support themselves. A 2016 nonprofit was meant to take staged control." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "via-organica": {
    visitor: {
      overview: "The Jalpa-valley ranch is set up for visitors: daily hours, guided tours, workshops, horseback, eco-cabins, and a restaurant that serves the farm.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "The Jalpa-valley ranch is set up for visitors: daily hours, guided tours, workshops, horseback, eco-cabins, and a restaurant that serves the farm." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "An asociación civil.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "An asociación civil. Paths are a job, servicio social, a farm-school course, or a donation." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "crisalium": {
    visitor: {
      overview: "Guided visits from Parque Natural El Encuentro, east of San Cristóbal de las Casas, about 15-20 minutes from centro. Workshops in permaculture, bioconstruction, and nonviolent communication. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "GEN: not currently open to new members.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "GEN: not currently open to new members. A family A.C." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "inla-kesh": {
    visitor: {
      overview: "Chichihuistán, municipality of Teopisca, Los Altos de Chiapas. Book an EDE (Gaia Education, often a month) or a puertas-abiertas / community-experience week through inlakeshchiapas.org.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A small residential circle.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "A small residential circle. Courses have a public door; membership is relational and currently tiny." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "vicente-guerrero": {
    visitor: {
      overview: "Comunidad Vicente Guerrero, municipality of Españita, Tlaxcala, west of the state capital. Maize fairs are the public door (from 1998). No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Membership is as a farming family and promoter in a member community, requested in the village, not on a portal.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Membership is as a farming family and promoter in a member community, requested in the village, not on a portal. The A.C." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "nanciyaga": {
    visitor: {
      overview: "Carretera Catemaco-Coyame km 7, on Laguna Catemaco.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Cabins, jungle walks, temazcal, restaurant, one of the easier reserve visits in the atlas." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A family reserve.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "A family reserve. There is no membership share and no Catemaco lot." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "pueblo-sacbe": {
    visitor: {
      overview: "Jungle west of Playa del Carmen, about fifteen minutes from centro.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Some houses are retreats and short-term rentals (Jungle Sanctuary Lodge and others)." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Private dwellings: houses or units with rooms, kitchens, and a common house or by-laws in the background." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "ixixtlan": {
    visitor: {
      overview: "Hill above Atlixco, Puebla, facing Popocatépetl and Iztaccíhuatl.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Sacred-geometry cabins and a vegetarian kitchen." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "GEN: open to new members.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "GEN: open to new members. A founder-led family and retreat circle." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "huerto-roma-verde": {
    visitor: {
      overview: "Jalapa 234, Roma Sur, Cuauhtémoc, Metro and walkable. Historically Tuesday-Saturday. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A volunteer-and-neighbour A.C.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "A volunteer-and-neighbour A.C. Show up with compost, a stall, or a shift." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "rancho-la-salud": {
    visitor: {
      overview: "Carretera Poniente Chapala-Jocotepec 1259, three miles west of Ajijic.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Carretera Poniente Chapala-Jocotepec 1259, three miles west of Ajijic. Common meals, guest rooms, scheduled and individual tours." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Private dwellings: houses or units with rooms, kitchens, and a common house or by-laws in the background." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "tamarindos": {
    visitor: {
      overview: "Camino a las Cabañas, Mata de Agua, Camarón de Tejeda, about 1h25 from Córdoba, about an hour from the port of Veracruz.",
      camping: { available: true, types: [], detail: "Cabins, restaurant, temazcal, zip-line, camping, river." },
      rooms: { available: true, types: [], detail: "Cabins, restaurant, temazcal, zip-line, camping, river." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Private dwellings: houses or units with rooms, kitchens, and a common house or by-laws in the background." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "hapori": {
    visitor: {
      overview: "Km 13.5 Nuevo Libramiento SMA-Guanajuato, Fraccionamiento Águila Real, twenty minutes from San Miguel centro. Agenda a visit through the village site or +52 55 8389 7651. No published visitor lodging.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Private dwellings: houses or units with rooms, kitchens, and a common house or by-laws in the background." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "sekkan": {
    visitor: {
      overview: "Former Rancho Lacayo, countryside near San Miguel de Allende. Email or phone via the IC.org listing; visits often include lunch; 1-2 nights by arrangement; donation for the biodynamic farm. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Informal conversation, vision/mission/values and minutes, a tour, a letter (reasons, contributions, biographical sketch), a group decision on philosophical fit and maturity, then meetings.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Informal conversation, vision/mission/values and minutes, a tour, a letter (reasons, contributions, biographical sketch), a group decision on philosophical fit and maturity, then meetings. Independent finances, ~$300 fees, two hours a week." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "nuevo-san-juan": {
    visitor: {
      overview: "Nuevo San Juan Parangaricutiro, Meseta Purépecha. The buried church in the Parícutin lava and the volcano itself are the public door; the community also receives visitors around the forestry works. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "You are a comunero, born into the census, or the asamblea says so.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "You are a comunero, born into the census, or the asamblea says so. There is no membership share and no Parícutin lot." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "cedicam": {
    visitor: {
      overview: "Mixteca Alta around Tilantongo / Nochixtlán. Contour ditches, nurseries, milpa. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A Mixtec farmer network.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "A Mixtec farmer network. You join by farming and promoting in a member village." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "sierra-gorda": {
    visitor: {
      overview: "Jalpan de Serra and the 383,567 ha biosphere.",
      camping: { available: true, types: [], detail: "Go; book lodging, do not camp in a core zone." },
      rooms: { available: true, types: [], detail: "Go; book lodging, do not camp in a core zone." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "The IAP is a public-benefit alliance.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "The IAP is a public-benefit alliance. You volunteer, donate, or live already in a sierra community." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "la-ventanilla": {
    visitor: {
      overview: "Playa La Ventanilla, Santa María Tonameca, about three kilometres east of Mazunte. Canoe the mangroves with the cooperativa. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "About twenty-five Zapotec families.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "About twenty-five Zapotec families. You are born into the village or you marry in." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "punta-laguna": {
    visitor: {
      overview: "Km 27.5 of the Nuevo Xcan-Cobá road. Book a spider-monkey walk through puntalagunamx.com or 985-114-….",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Najil Tucha is the village.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Najil Tucha is the village. You join by being of those thirty families." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "yomol-atel": {
    visitor: {
      overview: "Capeltic cafés in Jesuit universities are the city door. In Chilón / Yajalón the door is a producer community. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "You join by being a Tseltal socio in a member community, coffee, honey, soap.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "You join by being a Tseltal socio in a member community, coffee, honey, soap. Jesuit partnership is history." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "tierraluz": {
    visitor: {
      overview: "Hill above Sayulita, Nayarit, twenty minutes’ walk or five minutes’ drive from the surf. Contact tierraluzsayulita@gmail.com. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Private dwellings: houses or units with rooms, kitchens, and a common house or by-laws in the background." },
      other: { available: true, types: ["earthbag hut"], detail: "Cob, superadobe, brick: Natural-building houses on titled lots." },
    },
  },
  "huerto-tlatelolco": {
    visitor: {
      overview: "Nonoalco-Tlatelolco, next to the Plaza de las Tres Culturas. Metro and walkable. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A volunteer-and-neighbour A.C.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "A volunteer-and-neighbour A.C. Show up with compost, a stall, or a shift." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "kuyabeh": {
    visitor: {
      overview: "Km 34 of the Tulum-Cobá highway.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Hotel, restaurant, cenote, temazcal on the commons." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Private dwellings: houses or units with rooms, kitchens, and a common house or by-laws in the background." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "cabo-pulmo": {
    visitor: {
      overview: "East Cape, an hour-plus from San José del Cabo on a road that is sometimes washboard. Book a dive or snorkel with Cabo Pulmo Divers or another village shop.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A shore village of families.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "A shore village of families. You are born here, you marry in, or you work a shop." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "baja-ecovillage": {
    visitor: {
      overview: "Cantú, Punta Banda, south of Ensenada, above the estero. The forest park invites planting, trails, and inventory. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Houses sit on Cantú parcels.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Houses sit on Cantú parcels. The A.C." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "baja-biosana": {
    visitor: {
      overview: "El Chorro, dirt road, Sierra de la Laguna foothills. Retreats and natural-building workshops are the door when they are running. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A house and a yes have to open at the same time.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "A house and a yes have to open at the same time. About nine residents." },
      other: { available: true, types: ["earthbag hut"], detail: "Cob, earthbag, a dome: Each house a different method." },
    },
  },
  "san-jose-de-la-zorra": {
    visitor: {
      overview: "A Kumiai valley inland from Ensenada, near Ejido El Porvenir. Only if the community is receiving. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Co-op dwellings. You join, occupy a unit, and share the building rules." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "rancho-pacifico-baja": {
    visitor: {
      overview: "7 km east of El Pescadero toward the sierra, 15 minutes from Todos Santos.",
      camping: { available: true, types: [], detail: "Wood-fired bakery and an off-grid campground (van, tent, glamping)." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: true, types: ["glamping tent"], detail: "Wood-fired bakery and an off-grid campground (van, tent, glamping)." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Private dwellings: houses or units with rooms, kitchens, and a common house or by-laws in the background." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "tateikie": {
    visitor: {
      overview: "Mezquitic, Sierra Madre Occidental, a long dirt approach. Only if the comunidad is receiving. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Co-op dwellings. You join, occupy a unit, and share the building rules." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "ayotitlan": {
    visitor: {
      overview: "Sierra de Manantlán, Cuautitlán de García Barragán. Trails exist in the biosphere; the ejido is not those trails. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Co-op dwellings. You join, occupy a unit, and share the building rules." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "bosque-la-primavera": {
    visitor: {
      overview: "West of Guadalajara. Trailheads from Zapopan and Tala. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "An APFF.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "An APFF. Staff, researchers, volunteer fire." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "rancho-amigos": {
    visitor: {
      overview: "Cajón de Peña, Tomatlán, ~108 km from Puerto Vallarta. Instagram @ecovillagemexico and the 2013 email. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Private dwellings: houses or units with rooms, kitchens, and a common house or by-laws in the background." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "kasisi": {
    visitor: {
      overview: "Kasisi Mission, Chongwe, about 30 km east of Lusaka.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Kasisi Mission, Chongwe, about 30 km east of Lusaka. Book a course or a look through katczm.com." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "An institutional training centre.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "An institutional training centre. The realistic path is a course, a staff job, or Jesuit vocation." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "awra-amba": {
    visitor: {
      overview: "Fogera woreda, 73 km east of Bahir Dar. The village receives study visits, journalists, and religious leaders through a guest committee (awraamba.net).",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A cooperative village of about 463 people.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "A cooperative village of about 463 people. Membership is being of Awra Amba (work, equal wages, no religious hierarchy)." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "umoja": {
    visitor: {
      overview: "Archers Post, Samburu, on the Isiolo-Marsabit road along the Waso.",
      camping: { available: true, types: [], detail: "A campsite and a living village." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Women-only.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Women-only. You are received as a woman fleeing FGM, forced marriage, or violence, or you are a guest of the cottages." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "st-jude": {
    visitor: {
      overview: "Busense village, 12 km along Mutukura Road from Masaka.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Busense village, 12 km along Mutukura Road from Masaka. Book a course or a farm look." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "An NGO campus.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "An NGO campus. Trainees go home to Masaka, Rakai, Ssembabule, Mpigi." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "khula-dhamma": {
    visitor: {
      overview: "Near Haga Haga, 8-10 km from Wild Coast beaches, Quko River. Self-catering cob rooms, camping, retreats through the farm.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Private dwellings: houses or units with rooms, kitchens, and a common house or by-laws in the background." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "nadeet": {
    visitor: {
      overview: "NaDEET Centre on NamibRand, Maltahöhe side; office in Swakopmund.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "NaDEET Centre on NamibRand, Maltahöhe side; office in Swakopmund. Book a school programme, internship, or visit." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A nonprofit trust.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "A nonprofit trust. The realistic path is a staff job, an internship, or a school-group booking." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "kaydara": {
    visitor: {
      overview: "Keur Samba Dia, commune of Fimela, Fatick / Sine Saloum. Book a look or a training through jardins-afrique.org.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A Senegalese association.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "A Senegalese association. Students train and go home to sixteen Fimela villages." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "otepic": {
    visitor: {
      overview: "Kitale, Trans-Nzoia, Mount Elgon foothills. Mitume in town, Sabwani the 10 ha garden. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A founder-led self-help project.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "A founder-led self-help project. Trainings are the public door; residential membership is small and vocational." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "ndanifor": {
    visitor: {
      overview: "Bafut, Bamenda Grassfields.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "The 2012 lodge and gardens were the door until the Anglophone crisis of 2016." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "An NGO whose living site was looted and emptied.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "An NGO whose living site was looted and emptied. Trainings and international partnerships continue." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "basaisa": {
    visitor: {
      overview: "Basaisa, Zagazig district, Sharqiya, about 95 km northeast of Cairo.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Arrange through the Community Development Association, there is no hotel desk." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A village and its association of lots.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "A village and its association of lots. The realistic path is being of Basaisa, a research partnership, or work at New Basaisa." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "boabeng-fiema": {
    visitor: {
      overview: "Boabeng and Fiema, 22 km from Nkoranza, Bono East. A national tourist site: pay at the sanctuary, take a local guide, walk the 4.4 km² of forest and village lanes. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "You are of Boabeng or Fiema, or you are a visitor.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "You are of Boabeng or Fiema, or you are a visitor. Harder than a Ghana lodge night, the villages are homes." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "fambidzanai": {
    visitor: {
      overview: "Lot 4 Dovedale Road, Stapleford / Mt Hampden, Harare.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Lot 4 Dovedale Road, Stapleford / Mt Hampden, Harare. Book a course or a look through fambidzanai.org.zw." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "An institutional training centre.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "An institutional training centre. The realistic path is a PDC, the agroecology diploma, or a staff job." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "guie": {
    visitor: {
      overview: "Guiè, near Manéga, about 60 km north of Ouagadougou. Write guie.azn@eauterreverdure.org for the year’s programme.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "An inter-village association.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "An inter-village association. Young people train at CFAR and go home to lay wégoubri." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "chikukwa": {
    visitor: {
      overview: "Chitekete, Chimanimani District, Eastern Highlands.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "The CELUO training centre has a kitchen and dormitory." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Six villages on communal land.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Six villages on communal land. Membership is being of Chikukwa." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "il-ngwesi": {
    visitor: {
      overview: "Mukogodo escarpment, Laikipia, neighbouring Lewa.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Book the community-owned lodge at ilngwesi." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A group ranch of some 6,000 Il Lakipiak Maasai.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "A group ranch of some 6,000 Il Lakipiak Maasai. Membership is being of the six villages." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "lynedoch": {
    visitor: {
      overview: "Lynedoch Road at the R310, opposite the station, Stellenbosch. Book a Sustainability Institute programme or a campus look through sustainabilityinstitute.net.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Private dwellings: houses or units with rooms, kitchens, and a common house or by-laws in the background." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "anja": {
    visitor: {
      overview: "13 km south of Ambalavao on RN7, at the Three Sisters granite. Pay at the association gate and take a local guide, required. No published visitor lodging.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A village association of local households.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "A village association of local households. Membership is being of Anja." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "atarashiki-mura": {
    visitor: {
      overview: "Moroyama, Saitama, from Bushu-Nagase station. The foundation still receives visitors who write ahead (atarashiki-mura.or.jp).",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Historically: live, pool income, take pocket money, sit unanimous meetings.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Historically: live, pool income, take pocket money, sit unanimous meetings. The residential circle is now tiny." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "anandwan": {
    visitor: {
      overview: "About 5 km from Warora, Chandrapur. MSS receives visitors who write (visitors@anandwan.in / maharogisewasamiti.org).",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A samiti campus of equal shares.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "A samiti campus of equal shares. The realistic path is work, a professional posting, or a vocational yes to MSS." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "barefoot-college": {
    visitor: {
      overview: "Tilonia, Ajmer district, about 90 km from Jaipur. Book a campus look through barefootcollegetilonia.org.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "An institutional training village.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "An institutional training village. The realistic path is a course, a staff job, or a Solar Mama nomination from your village." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "seongmisan": {
    visitor: {
      overview: "Mapo-gu, Seoul, at the foot of Seongmisan, Seongsan-dong and neighbouring dong. Cafés, the consumer co-op, the school gate are the public face. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Honest path: rent or buy in the neighbourhood, then walk into childcare, the school, or a co-op.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Honest path: rent or buy in the neighbourhood, then walk into childcare, the school, or a co-op. Easier than a closed commune, more involved than a Mapo studio." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "ulpotha": {
    visitor: {
      overview: "Galgamuwa, Kurunegala, at the foot of Galgiriya. Book a seasonal yoga and Ayurveda stay at ulpotha.com, mud-and-thatch huts, a lotus tank, paddy.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A private estate and a resident farming community.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "A private estate and a resident farming community. Guests book a season." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "taomi": {
    visitor: {
      overview: "Puli Township, Nantou, on the road to Sun Moon Lake. Paper Dome, frog walks, B&Bs, lotus. No published visitor lodging.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Membership is being of Taomi li, live there, perhaps run a B&B.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Membership is being of Taomi li, live there, perhaps run a B&B. The 18 km² is a village." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "pun-pun": {
    visitor: {
      overview: "Mae Taeng, about 50 km north of Chiang Mai.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Mae Taeng, about 50 km north of Chiang Mai. Book a course, a volunteer stay, or a farm look through punpunthailand.org." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A family-core farm of about ten families.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "A family-core farm of about ten families. Volunteers come for weeks and leave." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "bumi-langit": {
    visitor: {
      overview: "Imogiri, Bantul, Jalan Mangunan KM 3, Giriloyo. Warung Bumi Langit is the public door (organic lunch; published hours Tuesday-Sunday). No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A family farm that hosts an institute.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "A family farm that hosts an institute. The realistic path is a course or a job with the family." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "little-donkey": {
    visitor: {
      overview: "Houshajian West Village, Haidian, at the foot of Fenghuangling, outside Beijing’s Sixth Ring. CSA pickup and family plots are the public face. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Buy a CSA season or rent a family plot.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Buy a CSA season or rent a family plot. That is membership in a box." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "gk-enchanted-farm": {
    visitor: {
      overview: "California Street, Barangay Encanto, Angat, Bulacan. Book a farm visit, internships, or a social-enterprise look through GK (gk1world.com).",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "GK families received houses as beneficiaries, not as co-op shareholders.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "GK families received houses as beneficiaries, not as co-op shareholders. Fellows apply to the Farm Village University." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "yucun": {
    visitor: {
      overview: "Tianhuangping, Anji, Huzhou. Bamboo paths, village museum, homestays. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Co-op dwellings. You join, occupy a unit, and share the building rules." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "lehe-daping": {
    visitor: {
      overview: "Daping, Tongji, Pengzhou, Longmen mountains. A living village with a reconstruction story. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "You are of Daping.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "You are of Daping. The NGO left a method." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "shared-harvest": {
    visitor: {
      overview: "Mafang, Xiji, Tongzhou, and a Shunyi base. CSA pickup is the public door. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Buy a season.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Buy a season. That is a box." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "sun-commune": {
    visitor: {
      overview: "Tingzibian 22, Shuangmiao, Taiyang Town, Lin'an.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Organic farm, guesthouse, the photographed pigsty." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A company farm.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "A company farm. The realistic path is a job, a CSA share, or a guest night." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "qiandao": {
    visitor: {
      overview: "Maoliyuan, Jiangjia, Chun'an, beside Longchuan Bay. Only if the community is receiving. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A minfei practice of about twenty.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "A minfei practice of about twenty. Confirm." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "huadao": {
    visitor: {
      overview: "Qunan, Longxing, Chongzhou. GEN page and LinkedIn. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A small constructed community.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "A small constructed community. Possible if they say yes." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "sunshine-ecovillage": {
    visitor: {
      overview: "Xuling Village, Jiande, about two hours from Hangzhou. EDE and public education are the door. No published visitor lodging.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Take an EDE.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Take an EDE. Living in Xuling is not joining GEN." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "southern-life": {
    visitor: {
      overview: "Minhou County, Fuzhou. A mountain lease. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A small circle on a lease.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "A small circle on a lease. Confirm the lease is alive." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "yuansu": {
    visitor: {
      overview: "Eastern Dongtai coast, Yancheng. A pond and rice. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A consensus circle on 160 mu.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "A consensus circle on 160 mu. Confirm who is there." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "kitezh": {
    visitor: {
      overview: "Baryatinsky District, ~10 km from Baryatino. A children’s village. No published visitor lodging.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "You foster or you teach.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "You foster or you teach. Harder than a Kaluga B&B." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "nevo-ecoville": {
    visitor: {
      overview: "Reuskula, 20 km from Sortavala, Ladoga shore. Write the association.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Association membership or a private plot they will actually sell.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Association membership or a private plot they will actually sell. Confirm." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "grishino": {
    visitor: {
      overview: "Historical Grishino, ~300 km NE of St Petersburg. Summer seminars for adults and children are the public door. No published visitor lodging.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A small circle in a hamlet.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "A small circle in a hamlet. Possible if they say yes." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "tiberkul": {
    visitor: {
      overview: "Kuraginsky District, Lake Tiberkul. A church settlement. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "People sleep in the community's own houses, rooms of a household or order rather than a housing market." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "kovcheg": {
    visitor: {
      overview: "Village of Kovcheg, 140 km SW of Moscow. Guest days, seminars, or a named settler since 2008.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Co-op dwellings. You join, occupy a unit, and share the building rules." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "vedrussiya": {
    visitor: {
      overview: "Seversky District. The settlement books excursions (prpvedrussia.ru). No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Co-op dwellings. You join, occupy a unit, and share the building rules." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "rodnoe": {
    visitor: {
      overview: "Konyaevo / Ilyino, Sudogodsky District. Festivals at the lake several times a year. No published visitor lodging.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Co-op dwellings. You join, occupy a unit, and share the building rules." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "orion": {
    visitor: {
      overview: "Kaluga, sister to Kitezh. A children’s village. No published visitor lodging.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Foster or teach, as at Kitezh.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Foster or teach, as at Kitezh. Harder than a farm stay." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "big-stone": {
    visitor: {
      overview: "Shilykovo, Sokolsky District, Kubena bend. GEN says volunteers welcome. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "You are not buying a hectare.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "You are not buying a hectare. A family project." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "zdravoe": {
    visitor: {
      overview: "Stanitsa Grigoryevskaya, Seversky District.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Guest cabins, bath-house, pond." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Co-op dwellings. You join, occupy a unit, and share the building rules." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "celo": {
    visitor: {
      overview: "South Toe valley, Yancey County, under the Black Mountains. There is no visitor centre. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Consensus membership, a waiting list, a modest refundable land fee like a lifetime lease.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Consensus membership, a waiting list, a modest refundable land fee like a lifetime lease. You may own a house; you never own the land." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "sunrise-ranch": {
    visitor: {
      overview: "100 Sunrise Ranch Road, Eden Valley, west of Loveland.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Pavilion, dome, guest rooms, a dining hall." },
      other: { available: true, types: ["geodesic dome"], detail: "Pavilion, dome, guest rooms, a dining hall." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "People sleep in the community's own houses, rooms of a household or order rather than a housing market." },
      other: { available: true, types: ["geodesic dome"], detail: "Pavilion and dome, 1986: A hospitality hall, a geodesic dome, residences, guest rooms, a dining hall." },
    },
  },
  "ananda-village": {
    visitor: {
      overview: "14618 Tyler Foote Road, Nevada City.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: true, types: ["tipi"], detail: "Teepees and trailers first; a village later." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "People sleep in the community's own houses, rooms of a household or order rather than a housing market." },
      other: { available: true, types: ["tipi"], detail: "Cooperative housing, Temple of Light: Community-owned and cooperatively held dwellings; members invest in the housing inventory, not in a speculative lot." },
    },
  },
  "sandhill": {
    visitor: {
      overview: "29398 County Road 203, Rutledge. Write.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "They are recruiting, especially families who will farm.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "They are recruiting, especially families who will farm. Visit, intern, then ask." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "linnaea": {
    visitor: {
      overview: "Gunflint Lake, Cortes Island.",
      camping: { available: true, types: [], detail: "Arrange rather than camp unannounced on the trust." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Resident steward and farmer openings are advertised when they exist.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Resident steward and farmer openings are advertised when they exist. A no-sale land trust." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "camphill-ontario": {
    visitor: {
      overview: "7841 4th Line, Angus (Nottawasaga) and Sophia Creek in Barrie. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Villagers enter through disability-support admission.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Villagers enter through disability-support admission. Coworkers apply for a live-in year or a life." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "lost-valley": {
    visitor: {
      overview: "81868 Lost Valley Lane, Dexter, 18 miles southeast of Eugene.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Oak savanna, lodge, outdoor kitchen." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Residency as staff, renter, or volunteer on the 501(c)(3).",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Residency as staff, renter, or volunteer on the 501(c)(3). Affordable housing is a programme." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "windsong": {
    visitor: {
      overview: "20543 96th Avenue, Walnut Grove, Langley. A 34-home strata. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Private dwellings: houses or units with rooms, kitchens, and a common house or by-laws in the background." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "yarrow": {
    visitor: {
      overview: "42312 Yarrow Central Road, Chilliwack. Groundswell lists tours and contact at groundswellcohousing.ca. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Co-op dwellings. You join, occupy a unit, and share the building rules." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "ecoreality": {
    visitor: {
      overview: "2152 Fulford-Ganges Road, south Salt Spring. The public door is a wiki (ecoreality.org) and whatever email answers. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Co-op dwellings. You join, occupy a unit, and share the building rules." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "bryn-gweled": {
    visitor: {
      overview: "1805 Meadow Road, Upper Southampton Township, Bucks County. A living homestead village of ~75 families. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Applicants meet families, then need an 80% yes before they may buy a house on a 99-year lease.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Applicants meet families, then need an 80% yes before they may buy a house on a 99-year lease. You never own the land." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "the-vale": {
    visitor: {
      overview: "About two miles south of Yellow Springs, Greene County. The public door is thin, Community Solutions history more than a visitor centre. No published visitor lodging.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A small membership on trust land.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "A small membership on trust land. Houses are occupied, not sold as lots." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "heathcote": {
    visitor: {
      overview: "21300 Heathcote Road, Freeland, northern Baltimore County, a mile south of the Pennsylvania line.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Confirm occupancy before you treat a page as a hostel." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A membership and a bed on SoL trust land.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "A membership and a bed on SoL trust land. Resident roll: 4 resident adults plus 20+ non-residents on the community count, counts have been lower." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "kimberton-hills": {
    visitor: {
      overview: "Kimberton, Chester County, former Myrin estate. camphillkimberton.org. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Extended-family households: villagers, coworkers, and children sharing a house." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "miccosukee": {
    visitor: {
      overview: "East of Tallahassee, Leon County. No published visitor lodging.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Co-op dwellings. You join, occupy a unit, and share the building rules." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "shannon-farm": {
    visitor: {
      overview: "274 Shannon Farm Lane, Afton, Rockfish Valley, Nelson County, 27 miles west of Charlottesville.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "274 Shannon Farm Lane, Afton, Rockfish Valley, Nelson County, 27 miles west of Charlottesville. WWOOF and visitor paths exist; shannonfarm.org / IC.org are the doors." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "No joining fee; membership is living there under the trust.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "No joining fee; membership is living there under the trust. You need assets to rent or buy a house the trust owns." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "village-homes": {
    visitor: {
      overview: "West Davis, Yolo County. A living 70-acre neighborhood. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Private dwellings: houses or units with rooms, kitchens, and a common house or by-laws in the background." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "songaia": {
    visitor: {
      overview: "North of Seattle in Bothell, Snohomish County. No published visitor lodging.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Private dwellings: houses or units with rooms, kitchens, and a common house or by-laws in the background." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "heartwood": {
    visitor: {
      overview: "800 Heartwood Lane, west of Bayfield, La Plata County, 20-25 minutes east of Durango.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: true, types: ["yurt"], detail: "Common house, workshop, yurt." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Private dwellings: houses or units with rooms, kitchens, and a common house or by-laws in the background." },
      other: { available: true, types: ["yurt"], detail: "Twenty-four homes, pedestrian cluster: The 24-home neighborhood sits in a small corner of the 360 acres, completed 2000." },
    },
  },
  "bhrugu-aranya": {
    visitor: {
      overview: "Nadlas / Wysoka 151, 34-240 Jordanów, Tatra foothills between Kraków and Zakopane. agnihotra.pl. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A foundation holds the four hectares.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "A foundation holds the four hectares. Occupancy is a resident-circle yes." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "juchowo": {
    visitor: {
      overview: "Juchowo 54 A, 78-446 Silnowo, near Szczecinek. juchowo.org. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "You work here, intern, or are placed in a disability workshop.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "You work here, intern, or are placed in a disability workshop. There is no member share and no private title of the 1,900 ha." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "brzozowka": {
    visitor: {
      overview: "Brzozówka 24d, 96-214 Cielądz. eko-brzozowka.pl and the Facebook group. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Take a private plot after talking to the foundation, or join the centre’s work.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Take a private plot after talking to the foundation, or join the centre’s work. The 2018 wiec law is consensus." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "ostoja-natury": {
    visitor: {
      overview: "Tomaszyn, gmina Olsztynek. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Co-op dwellings. You join, occupy a unit, and share the building rules." },
      other: { available: true, types: ["Earthship"], detail: "Earthship-inspired houses and hemp: Housing and workshop teaching." },
    },
  },
  "osada": {
    visitor: {
      overview: "Prosinko 28, 78-552, Drawsko lakes. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "An association, a small winter household.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "An association, a small winter household. A month in the garden is not membership." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "sunseed": {
    visitor: {
      overview: "Los Molinos del Río Aguas, near Sorbas, Almería.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Los Molinos del Río Aguas, near Sorbas, Almería." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "This is a transient educational community.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "This is a transient educational community. Coordinators stay months to a year." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "gaia-ashram": {
    visitor: {
      overview: "Ban Suai Long past the temple and the river bridge, Phen District, Udon Thani. Coordinates 17.708852, 102.837371. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Internship of three months or more, then more responsibility.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Internship of three months or more, then more responsibility. The about page still describes a small international community." },
      other: { available: true, types: ["earthbag hut"], detail: "Adobe, cob, earthbag: Seven natural buildings on the last count." },
    },
  },
  "quail-springs": {
    visitor: {
      overview: "35070 Highway 33, Maricopa, CA 93252, Cuyama Valley. quailsprings.org. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Work-trade is a season.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Work-trade is a season. Staff-community overlap; many staff began as traders." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "camphill-minnesota": {
    visitor: {
      overview: "15136 Celtic Drive, Sauk Centre, MN 56378, about ten miles north of town off Highway 71. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Extended-family households: villagers, coworkers, and children sharing a house." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "drop-city": {
    visitor: {
      overview: "Drop City is gone. The geodesic domes were dismantled.",
      camping: { available: false, types: [], detail: "The camp is over." },
      rooms: { available: false, types: [], detail: "No guesthouse remains." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "In the 1960s people lived in geodesic junk-architecture on the Trinidad, Colorado, land. That residency ended.",
      camping: { available: true, types: [], detail: "Early living was improvised, closer to a camp than a subdivision." },
      rooms: { available: false, types: [], detail: "Households formed inside the domes more than in ordinary rooms." },
      other: { available: true, types: ["geodesic dome"], detail: "Geodesic domes made of car roofs and scrap were the dwellings until the community dispersed." },
    },
  },
  "morningstar-ranch": {
    visitor: {
      overview: "The 32 acres are private Sonoma land, not Open Land. The county ended the residential commune in 1973. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Morningstar Ranch no longer houses a living membership the way it once did. Some buildings are still slept in.",
      camping: { available: true, types: [], detail: "Improvised or seasonal living was part of how people stayed on the land." },
      rooms: { available: true, types: [], detail: "There is no Open Land membership left. Gottlieb’s experiment is historical." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "rajneeshpuram": {
    visitor: {
      overview: "The Big Muddy is a Young Life camp (Washington Family Ranch). It is not Antelope.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Rajneeshpuram no longer houses a living membership the way it once did. What remains is a site, a museum, or ordinary later occupancy.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "The residential community ended. Buildings that remain are interpreted, privately reused, or gone." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },  "source-family": {
    visitor: {
      overview: "The Source Restaurant is not theirs. An archive and a documentary trail remain. No published visitor lodging.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "The Source Family no longer houses a living membership the way it once did. What remains is a site, a museum, or ordinary later occupancy.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "The residential community ended. Buildings that remain are interpreted, privately reused, or gone." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },  "brook-farm": {
    visitor: {
      overview: "The Ellis Farm site in West Roxbury is a National Historic Landmark and cemetery landscape. nps.gov notes the place. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Brook Farm no longer houses a living membership the way it once did. What remains is a site, a museum, or ordinary later occupancy.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "The residential community ended. Buildings that remain are interpreted, privately reused, or gone." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "hancock-shaker": {
    visitor: {
      overview: "Hancock Shaker Village is a museum campus. You buy a ticket and walk the buildings. Overnight is a nearby inn, not a Shaker bed.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "Day museum. Sleep in the Berkshires, not in the dwelling houses." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "The last Hancock Shakers left. Interpreters and a museum now occupy the National Historic Landmark.",
      camping: { available: false, types: [], detail: "No residential camp." },
      rooms: { available: false, types: [], detail: "Dwelling houses are exhibits." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "oneida-community": {
    visitor: {
      overview: "The Mansion House in Oneida, NY. No published visitor lodging.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Oneida Community no longer houses a living membership the way it once did. What remains is a site, a museum, or ordinary later occupancy.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "The residential community ended. Buildings that remain are interpreted, privately reused, or gone." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },  "new-harmony": {
    visitor: {
      overview: "The town of New Harmony, Indiana, is walkable and interpreted (visitnewharmony.com, Historic New Harmony). That is a historic town, not Owen’s Preliminary Society still in session. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "New Harmony no longer houses a living membership the way it once did. What remains is a site, a museum, or ordinary later occupancy.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "The residential community ended. Buildings that remain are interpreted, privately reused, or gone." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "llano-del-rio": {
    visitor: {
      overview: "Ruins in the Antelope Valley north of Pearblossom are not a visitor centre. Private land and desert. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Llano del Rio no longer houses a living membership the way it once did. What remains is a site, a museum, or ordinary later occupancy.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "The residential community ended. Buildings that remain are interpreted, privately reused, or gone." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },  "lomaland": {
    visitor: {
      overview: "Point Loma Nazarene University occupies much of the headland. Some Theosophical buildings remain as campus architecture. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Lomaland no longer houses a living membership the way it once did. What remains is a site, a museum, or ordinary later occupancy.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "The residential community ended. Buildings that remain are interpreted, privately reused, or gone." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },  "meltemi": {
    visitor: {
      overview: "Just outside Rafina, Attica.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "There is no guesthouse catalogue this atlas found." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A household commons with written rules from the 1950s.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "A household commons with written rules from the 1950s. Four generations." },
      other: { available: true, types: ["straw-bale house"], detail: "Huts that became houses: Four generations of incremental building." },
    },
  },
  "tui": {
    visitor: {
      overview: "Wainui Bay, 23 km from Tākaka, Golden Bay. tuitrust.org.nz. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Occupancy on trust land.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Occupancy on trust land. Contribution and garden work." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "dyssekilde": {
    visitor: {
      overview: "Torup, between Frederiksværk and Hundested, North Zealand. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "People live in houses here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Co-op dwellings. You join, occupy a unit, and share the building rules." },
      other: { available: true, types: ["straw-bale house"], detail: "Domes, straw-bale, terraces, experimental self-build: Recycled materials, several neighbourhood styles, social-rent flats from communal money so the ecology would not only be for people who could finance a dome." },
    },
  },
  "greater-world": {
    visitor: {
      overview: "The Earthship visitor centre west of Taos is the public door: tours and the academy. The neighbourhood behind it is private lots.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "The visitor centre is set up for tours and academy stays. Book through earthship.com rather than knocking on a tire wall." },
      other: { available: true, types: ["Earthship"], detail: "You look at Earthships. Sleeping in one as a tourist is a visitor-centre or rental question, not a knock on a private house." },
    },
    resident: {
      overview: "You buy a lot and build or buy an Earthship, then live under the Land User's Code. Off-grid by design.",
      camping: { available: false, types: [], detail: "Camping is not the neighbourhood form." },
      rooms: { available: true, types: [], detail: "Finished Earthships have ordinary rooms inside: bedrooms, kitchen, greenhouse corridor." },
      other: { available: true, types: ["Earthship"], detail: "The house is the Earthship: tire walls, rammed earth, south glass. About 90-115 stand on the plat." },
    },
  },
  "narara": {
    visitor: {
      overview: "A housing co-op on the NSW Central Coast. Open days and arranged visits exist. Overnight guests are not a hotel operation.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Arranged stays with members or during public events. Write first." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Members live in co-op dwellings, including hempcrete and high-performance houses, on the old Narara farm.",
      camping: { available: false, types: [], detail: "Members live in houses." },
      rooms: { available: true, types: [], detail: "Co-op houses and units. You join the co-op and occupy a dwelling." },
      other: { available: true, types: ["hempcrete house"], detail: "Hempcrete and other high-performance houses are part of the built village." },
    },
  },
  "lammas": {
    visitor: {
      overview: "Low-impact smallholdings in Pembrokeshire. Visits are arranged with the project. This is a cluster of One Planet Development homes, not a hotel.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Occasional arranged stays with the community. Harder than a Pembrokeshire cottage rental." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Nine smallholdings on ground leases under Wales's One Planet Development policy. People live in the houses they built.",
      camping: { available: false, types: [], detail: "Residents live in their houses." },
      rooms: { available: true, types: [], detail: "Rooms inside each smallholding house, on a residential lease tied to the land-use plan." },
      other: { available: true, types: ["straw-bale house"], detail: "Turf-roofed, timber, straw-bale low-impact houses are the resident form." },
    },
  },
  "tempelhof": {
    visitor: {
      overview: "The guesthouse takes groups of 18-140 with full board from the farm. Sunday cafe and seminars are the other public doors.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Guesthouse with full board, scaled for large groups. Shop and Sunday cafe sit beside it." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Members live in the reused hamlet buildings under the cooperative, with an experimental Earthship on the books as a community room.",
      camping: { available: false, types: [], detail: "Members live in buildings." },
      rooms: { available: true, types: [], detail: "Farm hamlet rooms and apartments held through the cooperative lease." },
      other: { available: true, types: ["Earthship"], detail: "A community-room Earthship was publicly costed as the first approved in Germany. Confirm what is standing this year." },
    },
  },
  "govardhan": {
    visitor: {
      overview: "Govardhan Ecovillage in Wada runs as a public ashram and farm. Guesthouse lodging is the visitor path, with the temple and goshala on the same campus.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Ashram guesthouse rooms. Book through the project rather than arriving for a temple-only day." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Residents, staff, and long-term ashram members live on the Wada campus in institutional housing.",
      camping: { available: false, types: [], detail: "People live in buildings." },
      rooms: { available: true, types: [], detail: "Ashram and staff rooms on the charitable-trust campus." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "cambium": {
    visitor: {
      overview: "Kasernenstraße 2, 8350 Fehring. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Verein plus life in the converted barracks.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Verein plus life in the converted barracks. Vermögenspool is the investment door (pool@cambium.at), not automatically a bed." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "arterra": {
    visitor: {
      overview: "C/ Abajo 1, Artieda, Navarra. arterrabizimodu.org. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "None listed." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Visit, trial, monthly contribution, ~30 hours a month of work, then integration fee and cooperative capital.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Visit, trial, monthly contribution, ~30 hours a month of work, then integration fee and cooperative capital. Sociocracy." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  ...livingBatch2Accommodations,
  ...livingBatch3Accommodations,
  ...livingBatch4Accommodations,
  ...livingBatch5Accommodations,
  ...livingBatch6Accommodations,
  ...livingBatch7Accommodations,
  ...livingBatch8Accommodations,
  ...livingBatch9Accommodations,
  ...livingBatch10Accommodations,
  ...livingBatch11Accommodations,
  ...livingBatch12Accommodations,
  ...livingBatch13Accommodations,
  ...livingBatch14Accommodations,
  ...livingBatch15Accommodations,
  ...livingBatch16Accommodations,
  ...livingBatch17Accommodations,
  ...livingBatch18Accommodations,
  ...livingBatch19Accommodations,
  ...livingBatch20Accommodations,
  ...livingBatch21Accommodations,
  ...livingBatch22Accommodations,
  ...livingBatch23Accommodations,
  ...livingBatch24Accommodations,
  ...livingBatch25Accommodations,
  ...livingBatch26Accommodations,
  ...livingBatch27Accommodations,
  ...livingBatch28Accommodations,
  ...livingBatch29Accommodations,
  ...livingBatch30Accommodations,
  ...livingBatch31Accommodations,
  ...livingBatch32Accommodations,
  ...livingBatch33Accommodations,
  ...livingGlampingAccommodations,
  ...sustainableEcovillageAccommodations,
  ...maitreyaEcovillageAccommodations,
  ...formerClosedAccommodations
};

export function accommodationsFor(slug: string): Accommodations {
  const row = accommodationsBySlug[slug];
  if (!row) {
    throw new Error(`Missing accommodations data for ${slug}`);
  }
  return row;
}
