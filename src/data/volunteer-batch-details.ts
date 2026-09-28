import type { LegalEntity } from "./legal-entities";
import type { LandOwnership } from "./land-ownership";
import type { CommunityFunding } from "./funding";
import type { VisitJoin } from "./visit-join";
import type { DailyLife } from "./daily-life";
import type { InformalAgreement } from "./informal-agreements";

export const volunteerBatchLegalEntities: Record<string, LegalEntity[]> = {
 sunseed: [
  {
   name: "Sunseed Desert Technology (UK charity)",
   kind: "UK company limited by guarantee / charity",
   role: "Charity no. 1098353. The civil face of the Los Molinos project. Still named on the current site.",
   status: "current",
   layer: "land",
   year: "2003 (charity number on the site); living from 1986",
   identifier: "Charity no. 1098353",
  },
  {
   name: "Spanish association transition",
   kind: "Spanish cultural association (CIF)",
   role: "A 2022 public note described moving the legal wrapper toward a Spanish association and long-term managers. Confirm what is actually filed before you treat a blog post as the 2026 registro.",
   status: "associated",
   layer: "membership",
   year: "2022 note",
  },
  {
   name: "Department coordinators and ESC / intern circle",
   kind: "On-site intern and education program",
   role: "Garden, drylands, appropriate technology, education, kitchen, maintenance. Coordinators stay months to a year. ESC and internships are placements, not title.",
   status: "current",
   layer: "education",
  },
 ],
 "gaia-ashram": [
  {
   name: "Gaia Ashram / Gaia School Asia",
   kind: "Unincorporated community association",
   role: "The learning community and household at Ban That. This atlas found no published Thai public-benefit foundation holding the land the way SNF holds Wongsanit. Occupancy and courses.",
   status: "current",
   layer: "membership",
   year: "2013",
  },
  {
   name: "Land at Ban Suai Long / Ban That",
   kind: "Thai private organic farm",
   role: "Former rice field taken on in 2013. Confirm the cadastral holder.",
   status: "current",
   layer: "land",
   year: "2013",
  },
  {
   name: "Volunteer and internship programmes",
   kind: "On-site intern and education program",
   role: "Two-week volunteer door and three-month internships. PDC, EDE, deep ecology. A course week is not membership.",
   status: "current",
   layer: "education",
  },
 ],
 "quail-springs": [
  {
   name: "Quail Springs Permaculture",
   kind: "501(c)(3) educational nonprofit",
   role: "California educational charity on 450 acres of former cattle ranch in Cuyama Valley. Board-driven lock on the spring.",
   status: "current",
   layer: "land",
   year: "2004",
  },
  {
   name: "Work-trade and staff-community",
   kind: "On-site intern and education program",
   role: "Four-month immersion (published Sept–Dec cohort). Food and a canvas tent. Many current staff began as traders.",
   status: "current",
   layer: "education",
  },
  {
   name: "Wilderness Youth Project (historical root)",
   kind: "501(c)(3) educational nonprofit",
   role: "1997, Warren Brush and Cyndi Harvan. Origin story of the Cuyama site, not the current landlord.",
   status: "historical",
   layer: "network",
   year: "1997",
  },
 ],
 "camphill-minnesota": [
  {
   name: "Camphill Village Minnesota, Inc.",
   kind: "501(c)(3) nonprofit corporation",
   role: "Minnesota 501(c)(3), EIN 41-1387425, tax-exempt since April 1981. Holds the ~525 acres, houses, farm, and workshops. Villagers do not hold lots.",
   status: "current",
   layer: "land",
   year: "1980 (village); 1981 (tax-exempt)",
   identifier: "EIN 41-1387425",
  },
  {
   name: "Lifesharing households and live-in volunteers",
   kind: "On-site intern and education program",
   role: "Coworkers and volunteers (typically six months to a year, room and board) live with villagers. Vocational.",
   status: "current",
   layer: "membership",
  },
  {
   name: "Camphill Association of North America",
   kind: "Lateral movement association",
   role: "Full-member affiliation. Network, not the Celtic Drive landlord. Distinct from Copake and Kimberton Hills.",
   status: "associated",
   layer: "network",
   year: "1983 association",
  },
 ],
};

export const volunteerBatchLand: Record<string, LandOwnership> = {
 sunseed: {
  owner: "Sunseed Desert Technology, off-grid mill hamlet of Los Molinos del Río Aguas, Sorbas, Almería",
  complexity: "simple",
  tenure: "Nonprofit",
  howHeld: "A UK charity has occupied the hamlet since 1986–87. Coordinators and volunteers occupy; they do not buy gypsum lots. A 2022 note described a Spanish-association path. Confirm the current registro.",
  narrative: "A mill village in a gypsum canyon. The Río Aguas is the water for about fifty people in Los Molinos and thousands downstream, and super-intensive olives are pumping the aquifer.",
  divided: [],
 },
 "gaia-ashram": {
  owner: "Gaia Ashram, former rice field at Ban That / Ban Suai Long, Phen District, Udon Thani",
  complexity: "simple",
  tenure: "Private / community",
  howHeld: "Former rice paddies taken on in 2013. This atlas found no published foundation title of the Wongsanit kind. Occupancy is the circle. Confirm the cadastral holder before you treat a course page as a deed.",
  narrative: "About 6 ha in the current about page; a restoration brief names ~13 ha of degraded dirt. Earth buildings, a river crossing past the temple.",
  divided: [],
 },
 "quail-springs": {
  owner: "Quail Springs Permaculture, 450 acres at 35070 Highway 33, Cuyama Valley, CA",
  complexity: "simple",
  tenure: "Nonprofit",
  howHeld: "A California 501(c)(3) holds a former cattle ranch. Work-traders occupy tents and do not take a lot. Chumash homelands.",
  narrative: "2004, a dwindling spring, juniper–piñon, off-grid. Native restoration with Santa Barbara Botanic Garden is stewardship of Maricopa.",
  divided: [],
 },
 "camphill-minnesota": {
  owner: "Camphill Village Minnesota, Inc., ~525 biodynamic acres at 15136 Celtic Drive, Sauk Centre, MN",
  complexity: "simple",
  tenure: "Nonprofit",
  howHeld: "One Minnesota 501(c)(3) holds the farm, houses, and workshops. Villagers and coworkers occupy. There are no house lots.",
  narrative: "1980 seed of Copake. The Sauk River runs through. A Camphill. Distinct from Camphill Village Copake, already in this atlas.",
  divided: [],
 },
};

export const volunteerBatchFunding: Record<string, CommunityFunding> = {
 sunseed: {
  overview: "A transient desert-technology project paid by volunteer contributions, ESC, internships, and a UK charity, not by Sorbas lots.",
  grantsHeadline: "ESC / European placements",
  privateHeadline: "Volunteer contributions and donations",
  grants: [
   {
    source: "European Solidarity Corps placements",
    amount: "Food, lodging, insurance for a six-month cohort (18–30, EU residents)",
    certainty: "documented",
    kind: "grant",
    note: "Apply on the ESC page.",
   },
  ],
  private: [
   {
    source: "Short-stay volunteer contributions (~€14/day on the GEN line) and donations",
    amount: "Earned and given, ongoing",
    year: "1986–present",
    certainty: "documented",
    kind: "donation",
    note: "A canyon that has to eat.",
   },
  ],
 },
 "gaia-ashram": {
  overview: "A small Isan ashram paid by volunteer contributions, internships, and courses, not by Udon lots.",
  grantsHeadline: "None isolated",
  privateHeadline: "Volunteer fees and Gaia School Asia courses",
  grants: [
   {
    source: "No major public land-purchase grant found",
    amount: "—",
    certainty: "estimated",
    kind: "other",
    note: "Former rice field taken on in 2013.",
   },
  ],
  private: [
   {
    source: "Volunteer contribution (5,600 THB first two weeks; nightly rates after) and PDC / EDE courses",
    amount: "Earned, seasonal",
    year: "2013–present",
    certainty: "documented",
    kind: "courses",
    note: "gaiaschoolasia.com. Closed hottest April–May.",
   },
  ],
 },
 "quail-springs": {
  overview: "A 450-acre teaching ranch paid by courses, donations, grants, and unpaid work-trade, not by Maricopa lots.",
  grantsHeadline: "Climate and restoration appeals",
  privateHeadline: "Courses, donations, work-trade labour",
  grants: [
   {
    source: "Emergency / climate-resilience fundraising and native-habitat partnership work",
    amount: "Appeals of record; Santa Barbara Botanic Garden partnership on restoration education",
    certainty: "documented",
    kind: "grant",
    note: "Stewardship money. Confirm current awards before you treat a homepage appeal as a cheque.",
   },
  ],
  private: [
   {
    source: "Educational courses, donations, and four-month work-trade (food and a tent, no stipend)",
    amount: "Earned and sweat",
    year: "2004–present",
    certainty: "documented",
    kind: "courses",
    note: "quailsprings.org. Work-traders are not buyers.",
   },
  ],
 },
 "camphill-minnesota": {
  overview: "A Camphill charity paid by farm products, crafts, donations, and disability-services funding, not by Sauk Centre lots.",
  grantsHeadline: "Charitable and disability-services income",
  privateHeadline: "Farm, bakery, weavery, herbs",
  grants: [
   {
    source: "Donations and the disability-services funding typical of a Camphill 501(c)(3)",
    amount: "Ongoing charitable income (EIN 41-1387425)",
    year: "1981–present",
    certainty: "documented",
    kind: "donation",
    note: "Care funding.",
   },
  ],
  private: [
   {
    source: "Biodynamic produce, bakery, weavery, woodshop, herb teas and products",
    amount: "Earned, farm scale of ~45 people",
    year: "1980–present",
    certainty: "documented",
    kind: "business",
    note: "A village that has to eat and care.",
   },
  ],
 },
};

export const volunteerBatchVisitJoin: Record<string, VisitJoin> = {
 sunseed: {
  visit: 4,
  join: 2,
  visitProcess:
   "Los Molinos del Río Aguas, near Sorbas, Almería. Apply for the co-learning residency, an internship, or ESC. Short stays contribute about €14/day. Off-grid canyon, vegetarian kitchen, six-day work week in departments. Write sunseed@sunseed.org.uk. Do not drop in on the mill hamlet as a viewpoint.",
  joinProcess:
   "This is a transient educational community. Coordinators stay months to a year. ESC is a six-month placement for EU residents 18–30. There is no member share and no private title of a mill house. Harder than an Almería rental.",
 },
 "gaia-ashram": {
  visit: 4,
  join: 2,
  visitProcess:
   "Ban Suai Long past the temple and the river bridge, Phen District, Udon Thani. Coordinates 17.708852, 102.837371. gaiaschoolasia.com. Volunteer two weeks (arrive Monday before noon); a farmstay exists for shorter guests; ELEW is the introductory week. Email gaiaschoolasia@gmail.com, WhatsApp +66 80 849 8582. Closed April and most of May. Do not drop in on the household.",
  joinProcess:
   "Internship of three months or more, then more responsibility. The about page still describes a small international community. Harder than a Udon guesthouse.",
 },
 "quail-springs": {
  visit: 3,
  join: 2,
  visitProcess:
   "35070 Highway 33, Maricopa, CA 93252, Cuyama Valley. quailsprings.org. Courses, restoration workshops, and a four-month work-trade (applications open on a published window, June for a Sept–Dec cohort in the last write-up). Off-grid, no phone reception, forty minutes to groceries. Email info@quailsprings.org, +1 805-886-7239. Arrange.",
  joinProcess:
   "Work-trade is a season. Staff-community overlap; many staff began as traders. There is no member share of 450 acres. Harder than a Cuyama AirBnB.",
 },
 "camphill-minnesota": {
  visit: 3,
  join: 2,
  visitProcess:
   "15136 Celtic Drive, Sauk Centre, MN 56378, about ten miles north of town off Highway 71. This is a working Camphill of about 45 people. Arrange. outreach@camphillmn.org, +1 320-732-6365. Houses are homes; the farm is work. Do not drop in on villagers.",
  joinProcess:
   "Apply as a live-in volunteer (typically six months to a year, room and board) or be placed as a villager. Vocational, with safeguarding. There is no member share and no private title. Harder than a Minnesota farm-stay listing. Distinct from Copake.",
 },
};

export const volunteerBatchDailyLife: Record<string, DailyLife> = {
 sunseed: {
  typical: [
   { title: "Department morning", detail: "Garden, drylands, appropriate technology, kitchen, maintenance, education. Six hours, five days. A personal project is asked of ESC people." },
   { title: "Vegetarian canyon kitchen", detail: "Solar and low-tech cooking, shared meals, a mill hamlet that has to eat without a supermarket at the door." },
   { title: "Río Aguas", detail: "The river is water for the hamlet and for thousands downstream. Super-intensive olives are the published enemy. Restoration and a campaign sit beside the beds." },
  ],
  unique: {
   title: "A transient desert laboratory in a gypsum mill village",
   detail: "British biologists sketched a desertification-research project in 1982 and started living in Los Molinos in 1986–87; the off-grid mill hamlet still runs on solar and dryland gardens in Europe’s only mainland semi-arid zone, while the Río Aguas that waters it is being pumped dry under olive plantations up the valley.",
  },
 },
 "gaia-ashram": {
  typical: [
   { title: "Earth building", detail: "Adobe bricks, plasters, wattle and cob, earthbag. Seven natural buildings on the last count. Rainy season plants trees; hot season builds." },
   { title: "Garden and restoration", detail: "Organic beds, food forest, native trees on former rice dirt. Five to six hours, Monday to Friday, Wednesday afternoon off." },
   { title: "Circle and courses", detail: "Yoga and meditation named in the volunteer brief. PDC, EDE, deep ecology when the calendar runs. April–May is closed." },
  ],
  unique: {
   title: "The Isan ashram Om started after Wongsanit",
   detail: "Gaia Ashram is 2013, former rice field, two-week volunteers.",
  },
 },
 "quail-springs": {
  typical: [
   { title: "Goats, chickens, dryland beds", detail: "Twenty to twenty-five hours a week in a work-trade season: shepherding, compost, irrigation, harvest. A spring that was dwindling is the reason the ranch was taken on." },
   { title: "Off-grid Cuyama", detail: "Solar, no phone reception, canvas tents, forty minutes to groceries. Juniper–piñon, Chumash homelands." },
   { title: "Courses and restoration", detail: "Workshops, educational tours, native habitat work with Santa Barbara Botanic Garden. Work-traders support the calendar; they do not own it." },
  ],
  unique: {
   title: "The 450-acre spring that teaches instead of subdividing",
   detail: "Quail Springs is 2004, a 501(c)(3), work-trade.",
  },
 },
 "camphill-minnesota": {
  typical: [
   { title: "Biodynamic farm", detail: "Vegetables, orchard, high tunnels, beef and a small dairy, laying hens, the grains that feed them. Prairie burns and forestry in season." },
   { title: "Workshops", detail: "Bakery, weavery, woodshop, herb teas and products. Villagers and coworkers in the same rooms." },
   { title: "House life", detail: "Lifesharing households. The Sauk River, the library in town, a canoe. A volunteer lives in; a guest of an hour does not." },
  ],
  unique: {
   title: "Copake’s Minnesota seed on 525 acres",
   detail: "Camphill Village Minnesota is 1980, about 45 people, a 501(c)(3).",
  },
 },
};

export const volunteerBatchInformal: Record<string, InformalAgreement[]> = {
 sunseed: [
  { kind: "volunteer-intern", why: "ESC, internships, and a paid-contribution residency." },
  { kind: "labour-roster", why: "Six departments. Someone still has to cook. Coordinators hold a year; short stays hold a week." },
  { kind: "land-care", why: "Dryland beds, a failing river, gypsum cliffs. Guests stay off restoration they were not rostered to." },
  { kind: "kitchen-table", why: "Vegetarian shared meals. Which fridge is the project’s and which is a coordinator’s still has to be learned." },
 ],
 "gaia-ashram": [
  { kind: "volunteer-intern", why: "Two weeks minimum, a contribution, then maybe an internship. A course week is not membership of the household." },
  { kind: "building-code", why: "Adobe, cob, earthbag. What a new wall may do without eating last year’s plaster. Seven buildings on the last count." },
  { kind: "quiet-practice", why: "Yoga, meditation, an ashram brief. A volunteer is asked; a drop-in is not owed a process." },
  { kind: "land-care", why: "Former rice field under restoration. Guests stay on beds they were rostered to." },
 ],
 "quail-springs": [
  { kind: "volunteer-intern", why: "Four-month work-trade, food and a tent, no stipend." },
  { kind: "animals-stock", why: "Goats, chickens. Whose animal, who is on the morning round, who may name a kid." },
  { kind: "course-host", why: "Workshops and tours on a working ranch. Which door is the course and which is a staff tent." },
  { kind: "land-care", why: "A dwindling spring, native restoration, Chumash homelands. Guests stay off plantings they did not put in. Highway 33 is not a trailhead of the ranch." },
 ],
 "camphill-minnesota": [
  { kind: "care-household", why: "Villagers, coworkers, and live-in volunteers in shared houses. Dignity at breakfast is the compact." },
  { kind: "volunteer-intern", why: "Six months to a year, room and board. A placement is not membership of the corporation." },
  { kind: "animals-stock", why: "Beef, a small dairy, laying hens. Whose cow, who milks, who is on the morning round." },
  { kind: "land-care", why: "525 biodynamic acres, prairie burns, the Sauk River. Guests stay on the visit path." },
 ],
};
