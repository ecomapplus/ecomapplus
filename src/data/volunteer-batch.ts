import type { Community } from "./communities";

/** Four villages that publish a dedicated volunteer / work-exchange / intern page. */
export const volunteerBatchCommunities: Community[] = [
 {
  slug: "sunseed",
  name: "Sunseed Desert Technology",
  location: "Los Molinos del Río Aguas, near Sorbas, Almería (Andalucía)",
  region: "Andalucía, Spain",
  country: "Spain",
  foundedYear: 1986,
  foundedLabel: "1986 (conceived 1982 as a desertification-research project; living in Los Molinos from 1986–87)",
  members: 22,
  membersLabel: "About 20–25 people on a typical week: department coordinators, ESC volunteers, interns, and short-stay residents. A transient community",
  acres: null,
  acresLabel: "An off-grid mill hamlet in a gypsum canyon; no published hectare map of the whole village. The Río Aguas is the water, and it is failing",
  legalStructure:
   "Sunseed Desert Technology is a UK-registered charity (no. 1098353) that has lived, since 1986–87, in the off-grid mill hamlet of Los Molinos del Río Aguas, in the only semi-arid zone in mainland Europe. A 2022 public note described a legal transition toward a Spanish association and long-term managers; the UK charity number is still on the site. Departments (garden, drylands, appropriate technology, education, kitchen, maintenance) are coordinated by people who stay months to a year. You apply for a residency, an internship, or the European Solidarity Corps. Coordinators staff a project; they do not own the gypsum cliffs.",
  legalCategory: "Nonprofit foundation",
  stillActive: true,
  images: [
   "/communities/sunseed-land.jpg",
   "/communities/sunseed-1.jpg",
   "/communities/sunseed-2.jpg",
   "/communities/sunseed-3.jpg",
  ],
  summary:
   "In a gypsum canyon near Sorbas, an off-grid mill hamlet has been testing low-tech desert living since 1986. About twenty people pass through in a typical week: coordinators, ESC volunteers, interns. The Río Aguas, their water, is being pumped dry under olive plantations up the valley.",
  businessModel:
   "Short stays run about €14 a day; ESC placements cover food and lodging; internships, donations, and the UK charity fill the rest. Nobody is selling canyon lots.",
  foundingProcess:
   "British biologists sketched a desertification-research project in 1982, first under the name Green. In 1986–87 they rented a house in Los Molinos and started living the experiment: solar, dryland gardens, low-tech tools, a vegetarian kitchen, sociocracy. Forty years on it is still a transient educational community. The crisis they keep publishing is the aquifer, drained by super-intensive olive plantations.",
  governance:
   "Departments run by sociocracy; coordinators who stay months to a year hold the week. A UK charity is the civil face, with a published path toward a Spanish association. A two-week volunteer does not sit that circle.",
  website: "https://www.sunseed.org.uk/",
  timeline: [
   { year: "1982", event: "Desertification-research project conceived in Britain (Green / Sunseed)." },
   { year: "1986–87", event: "Living together begins in Los Molinos del Río Aguas." },
   { year: "2003", event: "UK charity no. 1098353." },
   { year: "2022", event: "Public transition note: renovations, a Spanish association path, long-term managers." },
   { year: "Present", event: "ESC, internships, and a residency programme. About 20–25 people in a given week. The river is why the work still matters." },
  ],
 },
 {
  slug: "gaia-ashram",
  name: "Gaia Ashram",
  location: "149 M.1 Ban That / Ban Suai Long, Phen District, Udon Thani 41150 (Isan, between Udon Thani and Nong Khai)",
  region: "Isan, Thailand",
  country: "Thailand",
  foundedYear: 2013,
  foundedLabel: "13 December 2013 (Om Sunisa Jamwiset Deiters and Tom Deiters; former rice field)",
  members: 30,
  membersLabel: "A small international household plus 15–50 people on site in course and volunteer season. Winter is quieter; ask who is actually there",
  acres: 15,
  acresLabel: "~6 ha (~15 acres) of former rice field on the current about page; the volunteer brief also names ~13 ha of degraded land under restoration. The two figures are not a single cadastral line",
  legalStructure:
   "Gaia Ashram (อาศรมธรรมชาติ) is a tropical permaculture and ecovillage-design learning community on former rice paddies in Ban That, Phen District. Om Sunisa Jamwiset Deiters, who had lived and facilitated at Wongsanit Ashram, and Tom Deiters began on 13 December 2013. This atlas found no published Thai public-benefit foundation holding the land the way SNF holds Wongsanit; the household and Gaia School Asia are what sit there. GENOA has written about the place. You volunteer two weeks, intern three months, take a PDC or EDE, or you already live in the household.",
  legalCategory: "Membership association",
  stillActive: true,
  images: [
   "/communities/gaia-ashram-land.jpg",
   "/communities/gaia-ashram-1.jpg",
   "/communities/gaia-ashram-2.jpg",
   "/communities/gaia-ashram-3.jpg",
  ],
  summary:
   "On a former rice field in Phen District, Om Sunisa Jamwiset Deiters and Tom Deiters opened a tropical ashram in 2013 after years at Wongsanit. Earth buildings, a food forest, two-week volunteers, and the hottest weeks of April–May when they close the gate.",
  businessModel:
   "Volunteer contributions (5,600 THB for the first two weeks, then a nightly rate), internships, PDC and ecovillage-design courses, and a farmstay for shorter guests. gaiaschoolasia.com takes the bookings. The paddies are being restored, not subdivided.",
  foundingProcess:
   "Om Sunisa Jamwiset Deiters, after years at Wongsanit Ashram, and Tom Deiters began on 13 December 2013 on degraded rice land at Ban Suai Long, with village elders in the origin story. They built in earth, planted a food forest, and started restoring native trees. They close in the hottest weeks of April–May. A small international community, not a Thai foundation campus.",
  governance:
   "Founders still steward the learning community. A course week is not membership. Do not treat a busy calendar as a village of fifty; in the hot season they lock the gate.",
  website: "https://gaiaschoolasia.com/",
  timeline: [
   { year: "2013", event: "13 December: Om and Tom begin Gaia Ashram on former rice field at Ban Suai Long." },
   { year: "2014–", event: "Earth buildings, restoration, Gaia School Asia courses (PDC, EDE, deep ecology)." },
   { year: "2021", event: "GENOA writes the revitalising of Gaia Sala, the hall." },
   { year: "Present", event: "Two-week volunteers, three-month internships, and a seasonal close in April–May. Write before you assume they are receiving." },
  ],
 },
 {
  slug: "quail-springs",
  name: "Quail Springs Permaculture",
  location: "35070 Highway 33, Maricopa, CA 93252 (Cuyama Valley, Chumash homelands)",
  region: "California, USA",
  country: "United States",
  foundedYear: 2004,
  foundedLabel: "2004 (land secured; Wilderness Youth Project roots 1997)",
  members: 18,
  membersLabel: "A core staff-and-community household plus a seasonal work-trade cohort (about 3–4 traders in a published season).",
  acres: 450,
  acresLabel: "450-acre high-desert permaculture demonstration site, juniper–piñon, a spring that was dwindling when the ranch was taken on",
  legalStructure:
   "Quail Springs is a California educational 501(c)(3) on 450 acres of former cattle ranch in the Cuyama Valley, on Chumash homelands. A Santa Barbara family foundation helped secure the land in 2004. Warren Brush and Cyndi Harvan’s Wilderness Youth Project (1997) sits in the origin story. The public work now is land stewardship, environmental education, and a four-month work-trade. Staff and community overlap. You take a course, apply for work-trade, or you already work there. The canvas tents are seasonal beds, not a title.",
  legalCategory: "501(c)(3)",
  stillActive: true,
  images: [
   "/communities/quail-springs-land.jpg",
   "/communities/quail-springs-1.jpg",
   "/communities/quail-springs-2.jpg",
   "/communities/quail-springs-3.jpg",
  ],
  summary:
   "On 450 acres of Cuyama high desert, a former cattle ranch whose spring was already dwindling when a Santa Barbara family foundation helped secure it in 2004. Quail Springs teaches dryland permaculture off-grid: solar, no phone reception, forty minutes to groceries, and a four-month work-trade in a canvas tent.",
  businessModel:
   "Courses, donations, grants, and a four-month work-trade that pays in food and a canvas tent, not a stipend. They partner with Santa Barbara Botanic Garden on native habitat. quailsprings.org takes the applications.",
  foundingProcess:
   "Wilderness Youth Project, Warren Brush and Cyndi Harvan, 1997, led to taking on a former cattle ranch in 2004 whose spring was already dwindling. Off-grid: solar, no phone reception, forty minutes to groceries. Work-traders become staff more often than they become owners, because there is no lot to own.",
  governance:
   "A nonprofit board, and a staff-community that names sociocratic practice in the work-trade brief. Work-traders do not sit the board.",
  website: "https://www.quailsprings.org/",
  timeline: [
   { year: "1997", event: "Wilderness Youth Project founded (Warren Brush, Cyndi Harvan)." },
   { year: "2004", event: "Former cattle ranch in Cuyama Valley secured with help from a Santa Barbara family foundation." },
   { year: "2010s–", event: "Permaculture courses, work-trade, dryland stewardship." },
   { year: "Present", event: "Four-month work-trade (published Sept–Dec cohort), native restoration partnership, emergency-fund appeals for climate stress on the spring." },
  ],
 },
 {
  slug: "camphill-minnesota",
  name: "Camphill Village Minnesota",
  location: "15136 Celtic Drive, Sauk Centre, Minnesota 56378 (about ten miles north of town, Sauk River country)",
  region: "Minnesota, USA",
  country: "United States",
  foundedYear: 1980,
  foundedLabel: "1980 (seeded by Camphill Village Copake coworkers and villagers)",
  members: 45,
  membersLabel: "About 45 people, including adults with developmental disabilities, coworkers, and a live-in volunteer circle",
  acres: 525,
  acresLabel: "About 525 biodynamic acres of farm, garden, orchard, woodland, and prairie; some write-ups say ~500. The Sauk River runs through",
  legalStructure:
   "Camphill Village Minnesota, Inc. is a Minnesota 501(c)(3) (EIN 41-1387425; tax-exempt since April 1981). It was founded in 1980 by experienced Camphill volunteers and young adults who had grown up at Camphill Village Copake. Land, houses, farm, and workshops sit in the nonprofit. Villagers with developmental disabilities and coworker households share the week; there is no private title and no housing co-op of Sauk Centre. Camphill Association of North America lists it as a full member. Distinct from Copake and from Kimberton Hills. You apply as a live-in volunteer, typically six months to a year, room and board, or you are placed as a villager.",
  legalCategory: "Camphill nonprofit",
  stillActive: true,
  images: [
   "/communities/camphill-minnesota-land.jpg",
   "/communities/camphill-minnesota-1.jpg",
   "/communities/camphill-minnesota-2.jpg",
   "/communities/camphill-minnesota-3.jpg",
  ],
  summary:
   "North of Sauk Centre, about forty-five people share 525 biodynamic acres along the Sauk River: villagers with developmental disabilities, coworkers, and live-in volunteers. Camphill Village Minnesota was seeded in 1980 by people who had grown up at Copake. Smaller than Copake, still a Camphill, still a farm.",
  businessModel:
   "A biodynamic farm, vegetables, orchard, beef and a small dairy, laying hens, grains, plus a bakery, weavery, woodshop, and herb products. Donations and disability-services funding pay the charity. The village site is where you apply.",
  foundingProcess:
   "Karl König’s Camphill Movement, begun in Aberdeen in 1939, reached Copake in 1961. In 1980 a handful of Copake-formed people started a village on Celtic Drive. Forty-five people on a few hundred biodynamic acres is the published scale: smaller than Copake, still a Camphill, still no house to buy.",
  governance:
   "A charitable board and Camphill coworker culture. Villagers are residents of a care community, not shareholders. Safeguarding is the point of the week, not an afterthought. A six-month volunteer is not a member of the corporation.",
  website: "https://www.camphillmn.org/",
  timeline: [
   { year: "1939", event: "Karl König founds the Camphill Movement in Aberdeen." },
   { year: "1961", event: "Camphill Village Copake founded; later seeds Minnesota." },
   { year: "1980", event: "Camphill Village Minnesota begins on Celtic Drive, Sauk Centre." },
   { year: "1981", event: "Tax-exempt 501(c)(3); EIN 41-1387425." },
   { year: "Present", event: "About 45 people on ~525 biodynamic acres. Live-in volunteer applications on the village site." },
  ],
 },
];
