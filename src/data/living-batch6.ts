import type { Community } from "./communities";

/** Ten living villages, oldest founding first: a Blue Ridge lifesharing farm, a Herefordshire manor co-op, Davis’s famous fence-tearing retrofit, Bainbridge’s owner-built cohousing, an Amherst meadow of thirty-two houses, a Jutland reverse-integration village, a Kassel-edge commune, Madrid’s bioclimatic eco-neighbourhood, Melbourne’s all-rental cohousing, and a Lune-side Passivhaus street. */
export const livingBatch6Communities: Community[] = [
 {
  slug: "innisfree",
  name: "Innisfree Village",
  location: "5505 Walnut Level Road, Crozet, Virginia, foothills of the Blue Ridge",
  region: "Virginia, USA",
  country: "United States",
  foundedYear: 1971,
  foundedLabel: "1971 (parents in Maryland and Virginia)",
  members: 80,
  membersLabel: "On the order of 75–80 coworkers, residential volunteers, and long-term staff in published accounts (Innisfree / FIC / CoolWorks)",
  acres: 550,
  acresLabel: "550 acres of farm and woodland (Innisfree / FIC)",
  legalStructure:
   "Innisfree Village is a 501(c)(3) lifesharing community. Adults with intellectual and developmental disabilities, called coworkers, live with residential volunteers and staff in shared houses on a 550-acre farm. Parents in Maryland and Virginia founded it in 1971 as an alternative to institutional care. Volunteers apply for a year. innisfreevillage.org is the door. You do not buy a Blue Ridge lot. You apply, or you visit, or you donate.",
  legalCategory: "Lifesharing nonprofit",
  stillActive: true,
  images: [
   "/communities/innisfree-land.jpg",
   "/communities/innisfree-1.jpg",
   "/communities/innisfree-2.jpg",
   "/communities/innisfree-3.jpg"
  ],
  summary:
   "In the Blue Ridge foothills, a 1971 farm still keeps coworkers, volunteers, and staff in the same houses. Five hundred and fifty acres. Workstations in the day. A year is the volunteer door. You apply. You do not buy Crozet dirt.",
  businessModel:
   "Nonprofit: donations, fees, farm and workshop production, volunteer labour. Confirm current volunteer and admissions pages on innisfreevillage.org.",
  foundingProcess:
   "Parents who did not want a ward found a farm. The houses are still mixed. Fifty-five years is the proof.",
  governance:
   "A charitable board and the households. A year-long volunteer is not a coworker and not a director.",
  website: "https://www.innisfreevillage.org/",
  timeline: [
   { year: "1971", event: "Parents in Maryland and Virginia found Innisfree Village." },
   { year: "1970s–present", event: "Lifesharing houses, farm, workshops. Volunteers for a year." },
   { year: "Present", event: "550 acres at Crozet. About 80 people of record. Apply to volunteer or for residential life." }
  ]
 },
 {
  slug: "canon-frome",
  name: "Canon Frome Court",
  location: "Canon Frome, near Ledbury, Herefordshire",
  region: "Herefordshire, England",
  country: "United Kingdom",
  foundedYear: 1978,
  foundedLabel: "1978 (Windflower Housing Association buys the court after the school closes)",
  members: 50,
  membersLabel: "About 50 adults and children; about 18–20 dwellings",
  acres: 40,
  acresLabel: "40-acre organic farm around a Grade II Georgian manor",
  legalStructure:
   "Windflower Housing Association is a co-ownership housing association. Members buy a home on a 999-year lease and may sell only to an approved buyer. The Frome Society, a charity, hosts workshops. A farming co-operative works the land. The court is divided into about twenty apartments with common rooms. A WWOOF week is not a lease.",
  legalCategory: "Co-ownership housing association",
  stillActive: true,
  images: [
   "/communities/canon-frome-land.jpg",
   "/communities/canon-frome-1.jpg",
   "/communities/canon-frome-2.jpg",
   "/communities/canon-frome-3.jpg"
  ],
  summary:
   "In Herefordshire, a Georgian court that was a school became a co-op in 1978. About fifty people, a forty-acre farm, 999-year leases. You buy a home the association will let you sell. You do not buy the manor.",
  businessModel:
   "Leasehold homes, farm produce, workshops through the Frome Society, summer WWOOFers. Confirm vacancies with the membership secretary.",
  foundingProcess:
   "The school closed. Windflower bought the house. Forty years later they still farm the park.",
  governance:
   "Housing association, farming co-op, charity for events. Membership secretary first. A badminton evening is not a viewing.",
  website: "https://www.canonfromecourt.org.uk/",
  timeline: [
   { year: "1978", event: "School closes. Windflower Housing Association buys Canon Frome Court." },
   { year: "2019", event: "Fortieth anniversary of the co-housing group (Housing Justice / HG Network)." },
   { year: "Present", event: "About 50 people, 40-acre farm, 999-year leases. Vacancies page when a home opens." }
  ]
 },

 {
  slug: "winslow-cohousing",
  name: "Winslow Cohousing",
  location: "Wallace Way NE, Winslow district, Bainbridge Island, a ferry from Seattle",
  region: "Washington, USA",
  country: "United States",
  foundedYear: 1992,
  foundedLabel: "1992 (move-in; group formed 1989). Second cohousing completed in the United States; first built by the co-owners.",
  members: 80,
  membersLabel: "30 private multigenerational homes (community site); headcount follows the houses",
  acres: 5,
  acresLabel: "5 acres, pedestrian village, parking on the edge",
  legalStructure:
   "Winslow Cohousing Group is a cooperative housing corporation. Members own shares and hold a proprietary lease. Thirty homes, a common house, five acres in the Winslow district, a 35-minute ferry from Seattle. The group formed in 1989 and moved in April 1992. It is the first US cohousing built by the co-owners themselves (Muir Commons, already in this atlas, was the first new-build, developer-built). Tours are pre-scheduled.",
  legalCategory: "Housing cooperative",
  stillActive: true,
  images: [
   "/communities/winslow-cohousing-land.jpg",
   "/communities/winslow-cohousing-1.jpg",
   "/communities/winslow-cohousing-2.jpg",
   "/communities/winslow-cohousing-3.jpg"
  ],
  summary:
   "On Bainbridge Island, thirty houses share five acres and a ferry timetable. 1992. A co-op share, a proprietary lease. They built it themselves. You book a tour. You do not walk the pedestrian street as if it were a Seattle open house.",
  businessModel:
   "Co-op shares and leases. Homes change when a member leaves. Confirm tours and listings with the community.",
  foundingProcess:
   "A 1989 group. Construction 1991. Move-in April 1992. Thirty years later the same pedestrian village.",
  governance:
   "Self-governing cooperative. A reserved tour is the public door. A ferry ticket is not.",
  website: "https://winslowcohousing.org/",
  timeline: [
   { year: "1989", event: "Winslow Cohousing group forms." },
   { year: "1992", event: "Move-in April. First US cohousing built by the co-owners." },
   { year: "2022", event: "Thirtieth anniversary. Still 30 homes on five acres." }
  ]
 },
 {
  slug: "cherry-hill",
  name: "Cherry Hill Cohousing",
  location: "120 Pulpit Hill Road, North Amherst, Massachusetts",
  region: "Massachusetts, USA",
  country: "United States",
  foundedYear: 1994,
  foundedLabel: "1994 (move-in; group from 1989). Formerly Pioneer Valley Cohousing; renamed October 2022.",
  members: 84,
  membersLabel: "32 households; 84 members at 1994 move-in. Confirm current headcount.",
  acres: 22,
  acresLabel: "22–23 acres: houses clustered on about six acres, woodland and agricultural land around",
  legalStructure:
   "Cherry Hill is cohousing on private homes plus a common house. The group formed in 1989 after a newspaper ad, bought a North Amherst meadow, and moved in summer 1994. Thirty-two units, 616–1,600 sq ft, parking on the edge. In October 2022 the community dropped the Pioneer Valley name. Sociocracy in later listings. A house listing is the join. Pulpit Hill Road is not a campus tour without asking.",
  legalCategory: "Cohousing",
  stillActive: true,
  images: [
   "/communities/cherry-hill-land.jpg",
   "/communities/cherry-hill-1.jpg",
   "/communities/cherry-hill-2.jpg",
   "/communities/cherry-hill-3.jpg"
  ],
  summary:
   "In North Amherst, thirty-two houses sit on a meadow the group bought in the early 1990s. They renamed the place Cherry Hill in 2022. You buy a house. You inherit the common house. The woodland is not a UMass shortcut.",
  businessModel:
   "Private homes, HOA-style common, occasional rentals. Confirm listings on web.cohousing.com.",
  foundingProcess:
   "A 1989 ad. Five years of planning. Move-in June–September 1994. One of the first eastern US cohousing villages.",
  governance:
   "Households, later sociocracy. A work day is not a closing.",
  website: "https://web.cohousing.com/",
  timeline: [
   { year: "1989", event: "Newspaper ad. Pioneer Valley group begins." },
   { year: "1994", event: "32 homes and a common house. Move-in on a 23-acre meadow." },
   { year: "2022", event: "Renamed Cherry Hill Cohousing." }
  ]
 },
 {
  slug: "hertha",
  name: "Hertha Levefællesskab",
  location: "Herskind, west of Aarhus, Skanderborg Municipality, Jutland",
  region: "Central Jutland, Denmark",
  country: "Denmark",
  foundedYear: 1996,
  foundedLabel: "1996 (living community; ideas from 1987)",
  members: 150,
  membersLabel: "About 150 people, of whom about 30 are adults with developmental disabilities (hertha.dk); GEN has listed 27",
  acres: 52,
  acresLabel: "About 38 tønder (~21 ha / 52 acres) of farm and garden in a published walking-route account; confirm current holding",
  legalStructure:
   "Hertha is a reverse-integration living community: ordinary households choose to live next to adults with developmental disabilities rather than the other way around. HBV is a self-owning institution and a registered social-economy enterprise. Steiner-inspired. A farm and garden, shared meals, festivals. hertha.dk is the door. GEN Europe lists it. You do not buy a Jutland lote. You live in Herskind as a neighbour, or you work in the houses, or you visit.",
  legalCategory: "Lifesharing village",
  stillActive: true,
  images: [
   "/communities/hertha-land.jpg",
   "/communities/hertha-1.jpg",
   "/communities/hertha-2.jpg",
   "/communities/hertha-3.jpg"
  ],
  summary:
   "West of Aarhus, about 150 people share a village with thirty adults who need support. Reverse integration: the neighbours moved in. A farm, a common house, a Steiner thread. You live in Herskind. You do not buy the care.",
  businessModel:
   "Social-economy institution, household housing, farm. Confirm visits on hertha.dk.",
  foundingProcess:
   "Talk from 1987. A living community from 1996. The ‘friendly tribe’ settled around the houses that needed neighbours.",
  governance:
   "Self-owning institution plus village households. A festival day is not an admissions interview.",
  website: "https://hertha.dk/",
  timeline: [
   { year: "1987", event: "First ideas for a living community (Danish Wikipedia)." },
   { year: "1996", event: "Hertha Levefællesskab begins in Herskind." },
   { year: "Present", event: "About 150 people, including about 30 adults with disabilities. Farm and village still there." }
  ]
 },
 {
  slug: "gastwerke",
  name: "gASTWERKe",
  location: "Forstamtstraße 6, 34355 Staufenberg-Escherode, south of Kassel",
  region: "Lower Saxony, Germany",
  country: "Germany",
  foundedYear: 2007,
  foundedLabel: "2007–08 (community on the Escherode site; gASTWERKe e.V. from 2006 in Kassel)",
  members: 50,
  membersLabel: "About 30 adults and 20 children in a municipal page; GEN has listed about 40 people",
  acres: 12,
  acresLabel: "About 5 hectares on the old forestry site: Bioland garden, greenhouses, herb and berry gardens, fruit meadow (zukunftskommunen.de)",
  legalStructure:
   "gASTWERKe e.V. is a registered association. A living-and-working community occupies the old forestry site at Escherode: houses on renewable energy, a Bioland market garden (Wurzelwerk GbR, CSA), tree care, a seminar academy. zukunftskommunen.de and GEN list it. gastwerke.de is the public face. Guests come for courses. Residents are a smaller household. You do not buy a Hessian lote on the Forstamt path.",
  legalCategory: "Registered association",
  stillActive: true,
  images: [
   "/communities/gastwerke-land.jpg",
   "/communities/gastwerke-1.jpg",
   "/communities/gastwerke-2.jpg",
   "/communities/gastwerke-3.jpg"
  ],
  summary:
   "On the edge of Escherode, a 2007 household still shares a former forestry office with a Bioland garden and a seminar house. About fifty people. You book a course. You do not buy the Forstamt.",
  businessModel:
   "Association, CSA garden, academy courses, services. Confirm programmes on gastwerke.de.",
  foundingProcess:
   "People around Kassel formed the Verein in 2006 and took the Escherode site in 2007–08. The garden and the houses are what stayed.",
  governance:
   "Registered association and resident household. A course weekend is not a membership.",
  website: "https://gastwerke.de/",
  timeline: [
   { year: "2006", event: "gASTWERKe e.V. formed in the Kassel area." },
   { year: "2007–08", event: "Community takes the Escherode forestry site." },
   { year: "Present", event: "About 30 adults and 20 children of record. Bioland garden, academy, houses." }
  ]
 },
 {
  slug: "valdepielagos",
  name: "Ecoaldea Valdepiélagos",
  location: "Valdepiélagos, about 50 km north of Madrid",
  region: "Community of Madrid, Spain",
  country: "Spain",
  foundedYear: 2008,
  foundedLabel: "2008 (first households); housing cooperative constituted 9 January 1996",
  members: 80,
  membersLabel: "About 60 adults and 20 children in 30 houses",
  acres: 6,
  acresLabel: "30 two-storey houses on plots of about 750 m² in published accounts; the village is the street, not a latifundio",
  legalStructure:
   "A housing cooperative and a comunidad de propietarios. Constituted 9 January 1996; houses finished and occupied from 2008 after a long planning fight. Thirty bioclimatic houses, solar, gardens. A house in the cooperativa is membership. A Madrid day-trip is not.",
  legalCategory: "Housing cooperative",
  stillActive: true,
  images: [
   "/communities/valdepielagos-land.jpg",
   "/communities/valdepielagos-1.jpg",
   "/communities/valdepielagos-2.jpg",
   "/communities/valdepielagos-3.jpg"
  ],
  summary:
   "Fifty kilometres north of Madrid, thirty bioclimatic houses share a street the cooperative spent twelve years getting built. 1996 on paper. 2008 in the houses. You buy into the co-op. You do not buy a Sierra lote.",
  businessModel:
   "Cooperative housing, household gardens, workshops. Confirm current openings with the comunidad.",
  foundingProcess:
   "Families in the village signed an environmental brief in the mid-1990s. The houses took until 2008. The street is the proof.",
  governance:
   "Housing cooperative and owners’ community. A yoga workshop is not a share.",
  website: "https://www.ecoaldeavaldepielagos.org/",
  timeline: [
   { year: "1996", event: "Housing cooperative constituted, 9 January." },
   { year: "2008", event: "Thirty houses finished. Households move in." },
   { year: "2025", event: "Telemadrid still films the street. About 80 people of record." }
  ]
 }

];
