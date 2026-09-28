import type { Community } from "./communities";

/** Ten living villages, oldest founding first: an Oxfordshire Gothic house that became a secular research community, Copenhagen’s freetown on a foundation title, an Arava kibbutz that kept the common purse, Lafayette’s 42-house cohousing under the Flatirons, a Kaipara permaculture peninsula, a Victorian forest of eleven titles, Canada’s oldest urban cohousing, a Vermont farm that Donella Meadows helped start, Britain’s first new-build cohousing street, and Barcelona’s first transfer-of-use coop on public land. */
export const livingBatch7Communities: Community[] = [
 {
  slug: "braziers-park",
  name: "Braziers Park",
  location: "Ipsden, near Wallingford, South Oxfordshire",
  region: "Oxfordshire, England",
  country: "United Kingdom",
  foundedYear: 1950,
  foundedLabel: "1950 (Norman Glaister buys the house; School of Integrative Social Research)",
  members: 22,
  membersLabel: "Around 20 people (Wikipedia); the community about page and Diggers and Dreamers have said about 30",
  acres: 50,
  acresLabel: "About 50 acres of park and garden around a Grade II* house (Diggers and Dreamers)",
  legalStructure:
   "Braziers Park is a secular intentional community and an educational charity, the School of Integrative Social Research, in a Grade II* Strawberry Hill Gothic house. Norman Glaister bought the estate from Lady Moon in 1950. Residents live in and around the house. Courses, a WWOOF host listing, and an ACRE residency are the public doors. braziers.org.uk is the site. You do not buy the manor. You apply, or you come for a course.",
  legalCategory: "Educational charity / intentional community",
  stillActive: true,
  images: [
   "/communities/braziers-park-land.jpg",
   "/communities/braziers-park-1.jpg",
   "/communities/braziers-park-2.jpg",
   "/communities/braziers-park-3.jpg"
  ],
  summary:
   "In Ipsden, a Gothic house that has been a living experiment since 1950. About twenty people, fifty acres, courses in the rooms. You apply. You do not buy the battlements.",
  businessModel:
   "Charity: courses, residencies, farm and house labour, donations. Confirm current open calls on braziers.org.uk.",
  foundingProcess:
   "Glaister bought a house to study how people live in groups. Seventy-five years later they still set the table in it.",
  governance:
   "A charity and a household. A course weekend is not the board.",
  website: "https://www.braziers.org.uk/",
  timeline: [
   { year: "1950", event: "Norman Glaister buys Braziers Park and founds the School of Integrative Social Research." },
   { year: "1996", event: "First Braziers International Artists’ Workshop of record." },
   { year: "Present", event: "About 20–30 residents, Grade II* house, courses and an ACRE residency. Apply on the site." }
  ]
 },
 {
  slug: "christiania",
  name: "Freetown Christiania",
  location: "Christianshavn, Copenhagen, on Amager",
  region: "Copenhagen, Denmark",
  country: "Denmark",
  foundedYear: 1971,
  foundedLabel: "1971 (proclaimed 26 September on an abandoned military site)",
  members: 900,
  membersLabel: "850–1,000 in 2020s accounts",
  acres: 19,
  acresLabel: "About 7.7 ha / 19 acres bought from the state (of an original ~84-acre military plot)",
  legalStructure:
   "Christiania began as a squat on a Defence site in 1971. In June 2011 the state signed an agreement with the new Foundation Freetown Christiania. First payment July 2012: residents went from squatters to legal landowners of about 19 acres. A residents’ Plenum and working groups still run the freetown. You do not buy a Christianshavn house on the open market. A canal-side photograph is not a key.",
  legalCategory: "Foundation / self-governing commune",
  stillActive: true,
  images: [
   "/communities/christiania-land.jpg",
   "/communities/christiania-1.jpg",
   "/communities/christiania-2.jpg",
   "/communities/christiania-3.jpg"
  ],
  summary:
   "Copenhagen’s freetown: a 1971 occupation that bought its dirt in 2012. About nine hundred people, a foundation, a Plenum. Half a million visitors a year. You walk in. You do not buy a house.",
  businessModel:
   "Workshops, cafés, rent to the foundation, tourism. Pusher Street’s cannabis trade was largely dug up in 2024. Confirm current rules on christiania.org, not a 2016 stall photograph.",
  foundingProcess:
   "Soldiers left. People moved in. Forty years of fights with Defence. Then a foundation wrote a cheque.",
  governance:
   "Plenum, working groups, Foundation Freetown Christiania. Consensus is the claim. A tour is not a vote.",
  website: "https://www.christiania.org/",
  timeline: [
   { year: "1971", event: "Freetown proclaimed 26 September on the Christianshavn barracks." },
   { year: "1989", event: "Christiania Law legalises residence, with Defence still able to evict." },
   { year: "2011–12", event: "Foundation Freetown Christiania; first land payment; squatters become owners of about 19 acres." },
   { year: "2024", event: "Majority of residents and police shut much of Pusher Street; the street is dug up." }
  ]
 },
 {
  slug: "kibbutz-samar",
  name: "Kibbutz Samar",
  location: "Arava Valley, Hevel Eilot Regional Council, north of Eilat",
  region: "Southern District, Israel",
  country: "Israel",
  foundedYear: 1976,
  foundedLabel: "1976 (gar'in from other kibbutzim; Hashomer Hatzair)",
  members: 254,
  membersLabel: "254 (Israeli CBS 2024); the community site has said about 60 families / ~350 people including children",
  acres: null,
  acresLabel: "Organic date plantation and a dairy of about 350 cows (Wikipedia / kibbutz-samar.com); acreage not isolated in the sources used here",
  legalStructure:
   "Samar is a kibbutz in the Kibbutz Movement that still runs a collective economy. Founders left other kibbutzim in 1976 to keep more personal autonomy: members decide where and how much they work, inside a common purse. Wikipedia 2024 population 254. The site says ~60 families. Organic dates and a dairy are the week. kibbutz-samar.com is the door. You apply. You do not buy an Arava lot.",
  legalCategory: "Kibbutz",
  stillActive: true,
  images: [
   "/communities/kibbutz-samar-land.jpg",
   "/communities/kibbutz-samar-1.jpg",
   "/communities/kibbutz-samar-2.jpg",
   "/communities/kibbutz-samar-3.jpg"
  ],
  summary:
   "In the southern Arava, a 1976 kibbutz that kept the common purse and let members set their own hours. Dates, a dairy, about 250–350 people of record. You apply. You do not buy the palms.",
  businessModel:
   "Organic dates (medjool, barhi and others), dairy, other branches with almost no hired labour in published accounts. Confirm current membership on kibbutz-samar.com.",
  foundingProcess:
   "A gar'in that did not want the committee to run the bedroom. Fifty years later they still pick dates together.",
  governance:
   "Kibbutz assembly with an anarchist reputation: personal matters stay personal. The dates are still common.",
  website: "https://kibbutz-samar.com/",
  timeline: [
   { year: "1976", event: "Kibbutz Samar founded in the Arava by members from other kibbutzim." },
   { year: "Present", event: "CBS 2024: 254 people. Dates and dairy. Still listed as a collective kibbutz." }
  ]
 },
 {
  slug: "nyland",
  name: "Nyland Cohousing",
  location: "Lafayette, Boulder County, Colorado, below the Flatirons",
  region: "Colorado, USA",
  country: "United States",
  foundedYear: 1992,
  foundedLabel: "1992 (land from the former farm; 42 homes)",
  members: 135,
  membersLabel: "135 residents in 42 privately owned homes",
  acres: 36,
  acresLabel: "36 acres of clustered houses, farm, gardens, and paths",
  legalStructure:
   "Nyland is a cohousing homeowners association: 42 private titles on 36 acres, a common house, a working farm, parking on the edge. Land acquired 1992. Homes turn over slowly. A Boulder listing is not automatically this street.",
  legalCategory: "Cohousing homeowners association",
  stillActive: true,
  images: [
   "/communities/nyland-land.jpg",
   "/communities/nyland-1.jpg",
   "/communities/nyland-2.jpg",
   "/communities/nyland-3.jpg"
  ],
  summary:
   "Forty-two houses under the Flatirons, thirty-six acres, a farm in the middle. Private titles, a common house, 135 people. You buy a home when one opens. You do not buy the meadow.",
  businessModel:
   "House sales, association dues, a working farm. Confirm current openings with the association.",
  foundingProcess:
   "A farm at the edge of Lafayette became a pedestrian village. Muir Commons was a year earlier. This one kept the acres.",
  governance:
   "Homeowners association and common-house work. A Friday meal is not the closing.",
  website: "https://www.nylandcohousing.org/",
  timeline: [
   { year: "1992", event: "Nyland acquires the Lafayette land for a 42-home cohousing association." },
   { year: "Present", event: "42 homes, 135 residents, 36 acres. Openings are rare." }
  ]
 },
 {
  slug: "otamatea",
  name: "Otamatea Eco Village",
  location: "Four kilometres west of Kaiwaka, Kaipara, Northland",
  region: "Northland, New Zealand",
  country: "New Zealand",
  foundedYear: 1997,
  foundedLabel: "1997 (102 ha purchased; Otamatea Limited; titles a few years later)",
  members: 50,
  membersLabel: "About 50 adults including lot owners and tenants, about 20 dwellings (Housing Innovation Society); lot counts 15 originally, later accounts 22 after some subdivisions",
  acres: 250,
  acresLabel: "102 ha / about 250 acres: private lots plus about 70–72 ha held in common",
  legalStructure:
   "Otamatea Limited, formed by Reinhold Huber and Lynne Hindle, bought 102 ha in 1997. Members became directors and shareholders. After individual titles issued, the company was wound up. Each freehold title includes an undivided share of the common land (originally 1/15; some lots later subdivided). Resource consent 2001. A Kaiwaka lifestyle block on Trade Me is not automatically this peninsula.",
  legalCategory: "Freehold plus common land",
  stillActive: true,
  images: [
   "/communities/otamatea-land.jpg",
   "/communities/otamatea-1.jpg",
   "/communities/otamatea-2.jpg",
   "/communities/otamatea-3.jpg"
  ],
  summary:
   "A Kaipara peninsula of permaculture lots and a large common. Bought 1997, titles after 2001. About fifty adults. You buy a lot that already shares the bush. You do not buy the harbour.",
  businessModel:
   "Private lots, common-land shares, organic households. Lots have been sold, with occasional resales.",
  foundingProcess:
   "A couple formed a company, brought shareholders, then wound the company up once the titles existed. The common is the point.",
  governance:
   "Lot owners and the agreements for common land. A harbour swim is not a settlement.",
  website: "https://otamatea.info/",
  timeline: [
   { year: "1996–97", event: "Community forms. 102 ha purchased to be an eco-village." },
   { year: "2001", event: "Resource consent. Individual titles follow." },
   { year: "Present", event: "About 50 adults, 15–22 lots of record, ~70 ha common. Occasional resale." }
  ]
 },
 {
  slug: "fryers-forest",
  name: "Fryers Forest",
  location: "Near Fryerstown, twenty minutes south-east of Castlemaine, central Victoria",
  region: "Victoria, Australia",
  country: "Australia",
  foundedYear: 1998,
  foundedLabel: "1998 (first lots sold; mid-1990s design with Holmgren; Owners Corporation 1999)",
  members: 29,
  membersLabel: "11 one-acre titles; about 29 residents and 5 off-site owners in a Workaway host account",
  acres: 300,
  acresLabel: "11 residential acres clustered in about 300 acres / 120 ha of common native forest (Holmgren Design)",
  legalStructure:
   "Fryers Forest Research and Development sold the first lots in 1998 and the last in 2006. Samantha and Haridas Fairchild with David Holmgren and Su Dennett designed a permaculture village on former goldfields bush. Each freehold lot includes a 1/11 share of the common forest. Fryers Forest Owners Corporation, from 1999, manages common land and the private-lot rules. ABC News filmed the forestry in 2022. You buy a title when one opens. You do not buy the 300 acres.",
  legalCategory: "Freehold lots plus owners corporation",
  stillActive: true,
  images: [
   "/communities/fryers-forest-land.jpg",
   "/communities/fryers-forest-1.jpg",
   "/communities/fryers-forest-2.jpg",
   "/communities/fryers-forest-3.jpg"
  ],
  summary:
   "Eleven houses in a Victorian eucalyptus forest. Holmgren on the drawings. An owners corporation on the common. You thin the bush. You do not subdivide it.",
  businessModel:
   "Private lots, common forestry (firewood, posts), household livelihoods. Confirm a sale with the owners corporation, not a 2015 blog.",
  foundingProcess:
   "Two couples and a permaculture office. Word-of-mouth lots. The last title 2006. The forest is still the larger map.",
  governance:
   "Owners corporation for the common and the covenants. A work day is not a viewing.",
  website: "https://holmgren.com.au/fryers-forest/",
  timeline: [
   { year: "Mid-1990s", event: "Fairchilds, Holmgren, and Dennett design the village." },
   { year: "1998–2006", event: "Lots sold. Owners Corporation from 1999." },
   { year: "2022", event: "ABC News: residents still harvest timber from the common forest." }
  ]
 },

 {
  slug: "cobb-hill",
  name: "Cobb Hill Cohousing",
  location: "Hartland, Windsor County, Vermont, Upper Valley",
  region: "Vermont, USA",
  country: "United States",
  foundedYear: 2001,
  foundedLabel: "2001 (groundbreaking; Donella Meadows’s 1995 vision; land 1997; occupancy 2001–03)",
  members: 50,
  membersLabel: "23 households, around 50 people (cobbhill.org)",
  acres: 270,
  acresLabel: "270 acres of forest, pasture, and farm (community site; history page has said 280 acres of two former dairy farms)",
  legalStructure:
   "Cobb Hill is a cohousing community on land the community holds in common. 23 households: 8 single homes, 6 duplexes, 3 apartments. Members own their homes plus a share of the land, barns, and Hunt House. Development rights were sold in published NOFA accounts. Donella Meadows, co-author of The Limits to Growth, helped start it; she died in 2001. Cedar Mountain Farm, cheese, and sugaring sit on the same acres. cobbhill.org is the door. A Vermont farm listing is not this.",
  legalCategory: "Cohousing on community land",
  stillActive: true,
  images: [
   "/communities/cobb-hill-land.jpg",
   "/communities/cobb-hill-1.jpg",
   "/communities/cobb-hill-2.jpg",
   "/communities/cobb-hill-3.jpg"
  ],
  summary:
   "Twenty-three households on 270 Vermont acres. Meadows’s last village. A farm, a sugar bush, a common house. You buy a share of the dirt. You do not carve a lot out of the pasture.",
  businessModel:
   "Home sales, association, farms (Cedar Mountain, cheese, sugaring). Confirm membership@cobbhill.org.",
  foundingProcess:
   "A Limits-to-Growth author wanted a farm that was also a neighbourhood. The houses went up after she was gone. The farm stayed.",
  governance:
   "Twelve community meetings and twelve work days a year in published accounts, plus committees. A cheese tasting is not the finance circle.",
  website: "http://www.cobbhill.org/",
  timeline: [
   { year: "1995", event: "Donella Meadows’s vision for a farm cohousing." },
   { year: "1997", event: "Land purchased: two former dairy farms." },
   { year: "2001–03", event: "Groundbreaking, construction, occupancy. Meadows dies in 2001." },
   { year: "Present", event: "23 households, ~50 people, 270 acres. Membership committee on the site." }
  ]
 },
 {
  slug: "la-borda",
  name: "La Borda",
  location: "Carrer de la Constitució 85–87, Can Batlló, Sants, Barcelona",
  region: "Catalonia, Spain",
  country: "Spain",
  foundedYear: 2018,
  foundedLabel: "2018 (building finished; cooperative 2014; Can Batlló neighbours from 2012)",
  members: 60,
  membersLabel: "28 dwellings (40, 60 and 75 m²); about 58 bedrooms in one housing-innovation account — on the order of 50–70 residents",
  acres: null,
  acresLabel: "Municipal plot at Can Batlló on a 75-year surface right (Lacol); not a rural acreage",
  legalStructure:
   "Habitatges la Borda SCCL is a housing cooperative. Barcelona ceded the plot on a 75-year grant of use (cessió d’ús / derecho de superficie) as publicly protected housing (VPO). Members do not buy the dirt and may not speculate on the dwelling. Lacol designed the cross-laminated timber courtyard building, among the tallest timber housing in Spain at completion. laborda.coop is the door. A Sants rental listing is not this.",
  legalCategory: "Transfer-of-use housing cooperative",
  stillActive: true,
  images: [
   "/communities/la-borda-land.jpg",
   "/communities/la-borda-1.jpg",
   "/communities/la-borda-2.jpg",
   "/communities/la-borda-3.jpg"
  ],
  summary:
   "Twenty-eight homes in a timber courtyard on city land. Barcelona’s first transfer-of-use coop. You join the cooperative. You do not buy Can Batlló.",
  businessModel:
   "Cooperative shares, below-market use, 75-year municipal surface right. Confirm current membership on laborda.coop, not an architecture award.",
  foundingProcess:
   "Can Batlló neighbours in 2012. Cooperative 2014. Keys 2018. The courtyard is the legal argument in wood.",
  governance:
   "Cooperative assembly. A virtual visit is not a share.",
  website: "https://www.laborda.coop/",
  timeline: [
   { year: "2012", event: "Can Batlló neighbours start the housing project." },
   { year: "2014", event: "Habitatges la Borda SCCL. Negotiation for the municipal plot." },
   { year: "2018", event: "Building finished. 28 dwellings, timber courtyard, 75-year grant of use." }
  ]
 }
];
