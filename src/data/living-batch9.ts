import type { Community } from "./communities";

/** Ten living villages, oldest founding first: Vandkunsten’s covered-street andel in Jystrup, a Tamil Nadu charitable-trust forest farm, Stockholm’s municipal senior kollektivhus, Vienna’s coffin-factory Verein, Burnaby’s 22-home strata courtyard, a Collserola occupation on hospital land, Portland’s Cully condo retrofit, Zürich’s cost-rent block over a tram depot, three cooperative buildings on the Spree, and Colchester’s Passivhaus mill. */
export const livingBatch9Communities: Community[] = [
 {
  slug: "navadarshanam",
  name: "Navadarshanam",
  location: "4/70 Ganganahalli hamlet, Gumalapuram Village, Thally block, Tamil Nadu 635 118",
  region: "Krishnagiri district, Tamil Nadu, India",
  country: "India",
  foundedYear: 1990,
  foundedLabel: "1990 (public charitable trust; rural campus adjoining a reserve forest, about 50 km from Bengaluru)",
  members: 15,
  membersLabel: "A small community of record. A 2014 account said about fifteen permanent residents. Headcount is not isolated on the current site",
  acres: 100,
  acresLabel: "About 100 acres of record; figures drift (100 / 104 / 115 in later press). Held by the trust, not by households",
  legalStructure:
   "Public charitable trust. All land and property is held by the trust; there is no individual ownership of land or property on the campus. Board of trustees, executive committee, consensus in the community. You do not buy a plot.",
  legalCategory: "Charitable trust",
  stillActive: true,
  images: [
   "/communities/navadarshanam-land.jpg",
   "/communities/navadarshanam-1.jpg",
   "/communities/navadarshanam-2.jpg",
   "/communities/navadarshanam-3.jpg"
  ],
  summary:
   "A small community on about a hundred Tamil Nadu acres, 1990. A charitable trust. No private plots. Food forest where the land was barren. You write. You do not buy a plot.",
  businessModel:
   "Trust, not titles. Community kitchen, farming, a village food co-operative of record. Confirm a visit — food is served by prior arrangement, not to walk-ins.",
  foundingProcess:
   "Concerned professionals after a decade of study. Land bought with Swami Sahajanand of record. The brief was ecological balance and inner peace next to Thally Reserve Forest.",
  governance:
   "Trust deed and a board. A forest walk is not membership.",
  website: "https://navadarshanam.org/",
  timeline: [
   { year: "1990", event: "Public charitable trust founded. Ganganahalli hamlet, Thally block, about 50 km from Bengaluru." },
   { year: "1990s–present", event: "Barren land planted into an early-stage forest. Community kitchen, alternative energy and building experiments of record." },
   { year: "Present", event: "Still a small community. Land in the trust. Write navadarshanam@gmail.com. No individual ownership." }
  ]
 },

 {
  slug: "can-masdeu",
  name: "Can Masdeu",
  location: "Camí de Sant Llàtzer, Collserola, 08035 Barcelona",
  region: "Catalonia, Spain",
  country: "Spain",
  foundedYear: 2001,
  foundedLabel: "2001 (occupied December 2001; former leper hospital of Sant Pau, abandoned about 53 years)",
  members: 24,
  membersLabel: "2018: 24 adults and 5 children. A later account said 16 adults and 5 children. Figures drift; turnover of record is low",
  acres: 86,
  acresLabel: "About 35 hectares in Collserola Natural Park (the masia is occupied, the dirt is still the hospital’s)",
  legalStructure:
   "Occupation. The building is owned by the Hospital de Sant Pau / its foundation. Occupied December 2001 after decades empty. Eviction attempt April 2002 failed. No titles. Community contribution of record €100/month (2018). You do not buy Collserola.",
  legalCategory: "Occupation / unincorporated community",
  stillActive: true,
  images: [
   "/communities/can-masdeu-land.jpg",
   "/communities/can-masdeu-1.jpg",
   "/communities/can-masdeu-2.jpg",
   "/communities/can-masdeu-3.jpg"
  ],
  summary:
   "A Collserola masia the hospital left empty. Occupied 2001. Gardens, a social centre, Sunday open days. The dirt is still Sant Pau’s. You write. You do not buy it.",
  businessModel:
   "Occupation, not a sale. Community gardens shared with neighbours. Thursday work days, Sunday open days. They receive more stay requests than they can host.",
  foundingProcess:
   "International activists, December 2001, looking for a climate-conference site. April 2002: more than a hundred police, eleven squatters, three days, the eviction did not stick.",
  governance:
   "Assembly.",
  website: "https://canmasdeu.net/",
  timeline: [
   { year: "2001", event: "Occupied in December. Former Sant Pau leper hospital, empty about 53 years." },
   { year: "2002", event: "April eviction attempt. Passive resistance. The occupation holds." },
   { year: "2018", event: "24 adults and 5 children. €100/month. Two collective meals a day." },
   { year: "Present", event: "Still occupied. Member counts drift. The hospital still owns the building." }
  ]
 },
 {
  slug: "columbia-ecovillage",
  name: "Columbia Ecovillage",
  location: "4647 NE Killingsworth Street, Portland, Oregon 97218",
  region: "Cully, Portland, Oregon, USA",
  country: "United States",
  foundedYear: 2009,
  foundedLabel: "2009 (move-in of record; 1970s apartments renovated 2008 into 37 condominiums)",
  members: 70,
  membersLabel: "37 condominiums, studios to three bedrooms (columbiaecovillage.org); headcount not isolated — a Cully cluster of that size is on the order of 60–80 people",
  acres: 3.73,
  acresLabel: "3.73 acres: play areas, vineyards, vegetable gardens, fruit and nut trees (Cohousing Alliance)",
  legalStructure:
   "Oregon condominium association. Sociocracy. 37 privately owned units in a renovated 1970s apartment complex, plus a 1912 farmhouse used as common house. You buy a condo when one is listed. You do not buy the 3.73 acres.",
  legalCategory: "Urban cohousing / condominium",
  stillActive: true,
  images: [
   "/communities/columbia-ecovillage-land.jpg",
   "/communities/columbia-ecovillage-1.jpg",
   "/communities/columbia-ecovillage-2.jpg",
   "/communities/columbia-ecovillage-3.jpg"
  ],
  summary:
   "Thirty-seven condos on 3.73 Cully acres. A 1970s apartment block renovated in 2008. Gardens, a 1912 farmhouse. Sociocracy. You buy a unit. You do not buy the orchard.",
  businessModel:
   "Condo sales and HOA dues of record $300–482 a month. No waiting list — an email list for openings. Confirm on columbiaecovillage.org. A Killingsworth listing is not automatically this cluster.",
  foundingProcess:
   "A 1970s two-storey complex converted rather than a greenfield. Oregonian 2008 covered the conversion. First occupancy 2009.",
  governance:
   "Sociocracy and a condominium association. A garden tour is not the closing.",
  website: "https://columbiaecovillage.org/",
  timeline: [
   { year: "1970s", event: "Apartment complex built on Killingsworth in Cully." },
   { year: "2008", event: "Renovated into 37 condominiums for energy and air quality." },
   { year: "2009", event: "Move-in of record. Urban cohousing, sociocracy, 3.73 acres." },
   { year: "Present", event: "Still 37 condos. Meals about twice a week. Confirm a listing on columbiaecovillage.org." }
  ]
 },

 {
  slug: "spreefeld",
  name: "Spreefeld",
  location: "Wilhelmine-Gemberg-Weg 10, 12 and 14, 10179 Berlin",
  region: "Mitte / Kreuzberg / Friedrichshain, Berlin, Germany",
  country: "Germany",
  foundedYear: 2014,
  foundedLabel: "2014 (Bau- und Wohngenossenschaft Spreefeld Berlin eG; three buildings 2012–14)",
  members: 140,
  membersLabel: "About 140 residents in 64 apartments (Building Social Ecology); architects also wrote 46–63 units during design — figures drift",
  acres: null,
  acresLabel: "Three buildings on the Spree, about 4,000–7,000 m² site depending on the account. Cluster flats of 600 and 800 m². Not a rural acreage",
  legalStructure:
   "Bau- und Wohngenossenschaft Spreefeld Berlin eG. Cooperative mixed-use: ordinary flats, cluster apartments, ground-floor work, option spaces, a kindergarten. Guest rooms for members’ visitors. You join the Genossenschaft. You do not buy a Spree freehold.",
  legalCategory: "Housing cooperative (Wohnungsgenossenschaft)",
  stillActive: true,
  images: [
   "/communities/spreefeld-land.jpg",
   "/communities/spreefeld-1.jpg",
   "/communities/spreefeld-2.jpg",
   "/communities/spreefeld-3.jpg"
  ],
  summary:
   "Three cooperative buildings on the Spree, 2014. Cluster flats, option spaces, a kindergarten. About 140 people. You join the eG. You do not buy the riverbank.",
  businessModel:
   "Cooperative shares, mixed-use rents, three option spaces for public hire.",
  foundingProcess:
   "Cooperative from 2007. Carpaneto, fatkoehl, BARarchitekten. Concrete frame, timber façade, passive-house construction. Occupied 2014.",
  governance:
   "Genossenschaft. A cluster kitchen is not a deed.",
  website: "https://spreefeld.org/",
  timeline: [
   { year: "2007", event: "Spreefeld cooperative begins." },
   { year: "2012–14", event: "Three buildings on Wilhelmine-Gemberg-Weg. Concrete and timber, cluster flats." },
   { year: "2014", event: "Occupied. Mixed use, option spaces, the Spree as the neighbour." },
   { year: "Present", event: "About 140 residents. 64 apartments." }
  ]
 },
 {
  slug: "cannock-mill",
  name: "Cannock Mill Cohousing",
  location: "Cannock Mill, Old Heath Road, Colchester, Essex CO2 8AA",
  region: "Essex, England",
  country: "United Kingdom",
  foundedYear: 2019,
  foundedLabel: "2019 (company 2009; 23 Passivhaus homes occupied late 2019; three more flats 2023)",
  members: 35,
  membersLabel: "26 homes (23 Passivhaus 2019 + 3 flats 2023). Diggers and Dreamers: 35 people over 18 of record",
  acres: null,
  acresLabel: "Mill pond, Grade II listed mill as common house, clustered houses and flats. Acreage not isolated here",
  legalStructure:
   "Cannock Mill Cohousing Colchester Ltd, company limited by guarantee (06805556, 2009). Members are directors. You buy a home when one opens, and you join the company. Guest rooms in the mill for visitors of people who live here. You do not buy the mill.",
  legalCategory: "Cohousing company",
  stillActive: true,
  images: [
   "/communities/cannock-mill-land.jpg",
   "/communities/cannock-mill-1.jpg",
   "/communities/cannock-mill-2.jpg",
   "/communities/cannock-mill-3.jpg"
  ],
  summary:
   "Twenty-three Passivhaus homes and a Grade II mill in Colchester. Occupied 2019, three more flats 2023. You buy a house. You do not buy the mill.",
  businessModel:
   "Home sales at market of record, company membership, shared mill. Actively seeking members of record. living@cannockmillcohousing.co.uk. A mill-pond photograph is not a viewing.",
  foundingProcess:
   "London friends, LoCoCo, then a 2009 company. Anne Thorne Architects. Dirt at Old Heath. Keys late 2019. Passivhaus Trust residential new-build prize of record 2023.",
  governance:
   "Company board — every member a director of record. A mill supper is not a share certificate.",
  website: "https://cannockmillcohousing.co.uk/",
  timeline: [
   { year: "2009", event: "Cannock Mill Cohousing Colchester Ltd incorporated, company limited by guarantee." },
   { year: "2019", event: "23 certified Passivhaus homes occupied, late in the year. Grade II mill as common house." },
   { year: "2023", event: "Three more flats in the Miller’s House. Passivhaus Trust prize of record." },
   { year: "Present", event: "26 homes. 35 adults of a D&D count. Still seeking members." }
  ]
 }
];
