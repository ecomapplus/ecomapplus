import type { Community } from "./communities";

/** Ten living villages, oldest founding first: a pluralist desert kibbutz, a Suffolk friary household, a Victorian social-change co-op, an Oregon worker-owned hot springs, Hungary’s first eco-village, a Slovak hill settlement, an Auroville forest camp, an Adelaide inner-city eco-block, a Virginia off-grid farm, and a Brabant rental eco-district. */
export const livingBatch3Communities: Community[] = [
 {
  slug: "kibbutz-ketura",
  name: "Kibbutz Ketura",
  location: "Arava Rift Valley, Hevel Eilot Regional Council, about 50 km north of Eilat",
  region: "Southern District, Israel",
  country: "Israel",
  foundedYear: 1973,
  foundedLabel: "November 1973",
  members: 180,
  membersLabel: "About 165–180 adult members and candidates, plus more than 155 children (Arava Institute figures)",
  acres: null,
  acresLabel: "A desert kibbutz of date orchards, solar fields, and housing on Israel Lands Authority ground (published hectare figure not isolated)",
  legalStructure:
   "Ketura is a cooperative kibbutz of the Kibbutz Movement on national land. Members do not hold private house title. The settlement is unusual among kibbutzim for religious pluralism: kashrut and Sabbath rules in public areas, an egalitarian synagogue, observant and secular members together. Members founded the Arava Institute for Environmental Studies on the same ground. AlgaTechnologies grows Haematococcus for astaxanthin. Arava Power Company’s first commercial solar field sat here. The first germinated Judean date palm, Methuselah, was planted on the kibbutz.",
  legalCategory: "Kibbutz",
  stillActive: true,
  images: [
   "/communities/kibbutz-ketura-land.jpg",
   "/communities/kibbutz-ketura-1.jpg",
   "/communities/kibbutz-ketura-2.jpg",
   "/communities/kibbutz-ketura-3.jpg"
  ],
  summary:
   "North of Eilat, a desert kibbutz has grown dates, algae, and solar since 1973. About 180 adults, a house of religious pluralism, the Arava Institute on the same dirt. Guests use Keren Kolot. Membership is the settlement, not a lot sale.",
  businessModel:
   "Dates, algae (AstaPure), solar partnership, the Institute, a guest house. Members live from the common economy. There is no house market.",
  foundingProcess:
   "Young Americans from Young Judaea and others planted a kibbutz in the Arava in November 1973, weeks after the war. The Institute, the algae plant, and the solar field came later, from the same household.",
  governance:
   "Kibbutz assembly and work branches. The Institute has its own academic board. A semester student is not a member.",
  website: "https://www.ketura.org.il/en/",
  timeline: [
   { year: "1973", event: "Kibbutz Ketura founded in the Arava." },
   { year: "1996", event: "Arava Institute for Environmental Studies founded on the kibbutz." },
   { year: "1998", event: "AlgaTechnologies begins Haematococcus cultivation." },
   { year: "2011–15", event: "Arava Power solar fields. Methuselah the Judean date palm is a public story of the orchard." }
  ]
 },
 {
  slug: "old-hall",
  name: "Old Hall Community",
  location: "Old Hall, Rectory Hill, East Bergholt, Suffolk CO7 6TG",
  region: "Suffolk, United Kingdom",
  country: "United Kingdom",
  foundedYear: 1974,
  foundedLabel: "1974",
  members: 60,
  membersLabel: "About 60 people; the community has been seeking new members",
  acres: 65,
  acresLabel: "About 65–70 acres of organic farmland around a former friary",
  legalStructure:
   "Old Hall is a nonprofit intentional community in a large historic building, a former friary, with about 65 acres. People live, farm, and eat together. They work toward food and energy self-sufficiency. There is no published split into private house lots.",
  legalCategory: "Nonprofit / intentional community",
  stillActive: true,
  images: [
   "/communities/old-hall-land.jpg",
   "/communities/old-hall-1.jpg",
   "/communities/old-hall-2.jpg",
   "/communities/old-hall-3.jpg"
  ],
  summary:
   "In East Bergholt, about sixty people share a former friary and sixty-five acres of organic land. They have lived together since 1974. They farm, cook, and keep a large old building standing. They have been asking for new members.",
  businessModel:
   "Household contributions, the farm, volunteer stays. A nonprofit, not a lot catalogue.",
  foundingProcess:
   "A group took the old hall in 1974 and stayed. The farm and the building are the same project. Fifty years is the proof.",
  governance:
   "A residential community meeting. Confirm current practice before you treat a 1974 origin story as a 2026 standing order.",
  website: "https://www.oldhall.org.uk/",
  timeline: [
   { year: "1974", event: "Community begins at Old Hall, East Bergholt." },
   { year: "2023", event: "Household of about 60 on 65 acres." },
   { year: "Present", event: "Seeking members. Volunteer stays listed with Diggers and Dreamers." }
  ]
 },
 {
  slug: "commonground",
  name: "Commonground",
  location: "Bush property near Seymour, Central Victoria",
  region: "Victoria, Australia",
  country: "Australia",
  foundedYear: 1984,
  foundedLabel: "1984 (property purchased; a social-change group had formed around 1980)",
  members: 20,
  membersLabel: "A small resident community plus members and friends based elsewhere (public headcount unpublished; this atlas treats it as a small household on a large venue)",
  acres: 95,
  acresLabel: "95 acres of regenerated bush near Seymour",
  legalStructure:
   "Commonground is a not-for-profit social enterprise and intentional community. Original co-op members bought 95 acres in 1984. The place is a conference and retreat venue for social-justice and environmental groups, run at subsidised rates, and a household of people who live and work on the same dirt. Collaborative decision making, a published lineage of anarchism, feminism, and nonviolence. common-ground.org.au is the public face.",
  legalCategory: "Not-for-profit / cooperative",
  stillActive: true,
  images: [
   "/communities/commonground-land.jpg",
   "/communities/commonground-1.jpg",
   "/communities/commonground-2.jpg",
   "/communities/commonground-3.jpg"
  ],
  summary:
   "Near Seymour, a 95-acre bush block has been a social-change venue and a household since 1984. Groups book the conference centre. A smaller number of people actually live there. The co-op bought the dirt so the movement would have a kitchen.",
  businessModel:
   "Subsidised venue hire, workshops with the Groupwork Centre, resident work. The enterprise is the till. The household is why someone is there on a Tuesday.",
  foundingProcess:
   "Social activists formed a group around 1980 and bought the Seymour property in 1984. Venue and community were the same founding sentence.",
  governance:
   "Collaborative decisions among residents and the co-op. A booked workshop is not a membership meeting.",
  website: "https://www.common-ground.org.au/commonground",
  timeline: [
   { year: "c. 1980", event: "Social-change group forms." },
   { year: "1984", event: "95 acres near Seymour purchased. Legal entity established." },
   { year: "Present", event: "Venue for movement groups. A resident community still on the property." }
  ]
 },
 {
  slug: "breitenbush",
  name: "Breitenbush Hot Springs",
  location: "Willamette National Forest, on the Breitenbush River, Cascade Range, about two hours from Portland or Bend",
  region: "Oregon, USA",
  country: "United States",
  foundedYear: 1985,
  foundedLabel: "1985 (community buys the land from Alex Beamer; worker co-op 1989; guests from 1981)",
  members: 50,
  membersLabel: "About 50 people on staff in recent employment pages; the site has housed up to about 85 full-time residents",
  acres: 154,
  acresLabel: "154 acres of Cascades forest, river, and geothermal wells",
  legalStructure:
   "Breitenbush is a worker-owned cooperative and an off-grid intentional community. Alex Beamer bought the old hot-springs resort; the community purchased the land from him in 1985. In 1989 workers formed a cooperative corporation that owns the business. Everyone who works there lives on the land. A board is elected from membership. A Handbook of Agreements is the published rule book. Geothermal wells heat more than a hundred buildings. A small hydro plant on the river makes about 40 kW.",
  legalCategory: "Worker cooperative",
  stillActive: true,
  images: [
   "/communities/breitenbush-land.jpg",
   "/communities/breitenbush-1.jpg",
   "/communities/breitenbush-2.jpg",
   "/communities/breitenbush-3.jpg"
  ],
  summary:
   "On 154 acres of Cascade forest, a worker co-op runs a hot-springs retreat and lives there. Hydro from the river, heat from the wells, rustic cottages across a footbridge. Guests book a soak. Membership is a job, then a share.",
  businessModel:
   "Retreat and conference centre, workshops, lodging. The co-op is the employer and the household.",
  foundingProcess:
   "Beamer revived the springs. The community bought him out in 1985 and incorporated as a worker co-op in 1989 so the people who made the beds would own the business.",
  governance:
   "Worker-owners, an elected board, a handbook. A guest with a towel is not on the board.",
  website: "https://breitenbush.com/",
  timeline: [
   { year: "1977–81", event: "Beamer years: wells drilled, guests return." },
   { year: "1985", event: "Community buys the 154 acres." },
   { year: "1989", event: "Worker-owned cooperative corporation formed." },
   { year: "Present", event: "Off-grid retreat. Employment is the path toward a share." }
  ]
 },
 {
  slug: "gyurufu",
  name: "Gyűrűfű",
  location: "Former village of Gyűrűfű, Zselic hills, southwest Hungary",
  region: "Baranya / Zselic, Hungary",
  country: "Hungary",
  foundedYear: 1991,
  foundedLabel: "1991 (Gyűrűfű Foundation registered; living settlement through the 1990s)",
  members: 30,
  membersLabel: "About 30 people in more than 10 families (2018–19 published figures)",
  acres: 430,
  acresLabel: "About 175 ha in Euronews’s village account; foundation and related holdings have been published as much larger (over 1,100 ha in one 2018 write-up)",
  legalStructure:
   "Hungary’s first eco-village sits on the site of an abandoned Zselic village. The Gyűrűfű Foundation, registered in 1991, is the environmental organisation the villagers set up. Households live on the land. A guesthouse (Lovastanya Vendégház) takes visitors. GEN lists the project. Figures for how much dirt the foundation versus families hold do not all agree; this atlas records both the 175 ha village picture and the larger watershed claim, and does not pretend they are the same number.",
  legalCategory: "Foundation / eco-village",
  stillActive: true,
  images: [
   "/communities/gyurufu-land.jpg",
   "/communities/gyurufu-1.jpg",
   "/communities/gyurufu-2.jpg",
   "/communities/gyurufu-3.jpg"
  ],
  summary:
   "In the Zselic hills, a handful of families refounded an abandoned village as Hungary’s first eco-village. A 1991 foundation, about thirty people, a guesthouse, a watershed they have been trying to keep. The houses are few. The hills are the rest.",
  businessModel:
   "Households, the foundation, a guesthouse. The village site is the public door. Confirm current stay prices before you treat a 2019 photograph as a booking.",
  foundingProcess:
   "Young Hungarian ecologists took a deserted village and a former agricultural-coop landscape in the early 1990s. Four families first. The foundation is the paper. The hill is the work.",
  governance:
   "Foundation plus resident families. A guesthouse night is not a member vote.",
  website: "http://gyurufu.hu",
  timeline: [
   { year: "1991", event: "Gyűrűfű Foundation registered." },
   { year: "1990s", event: "First families move onto the abandoned village site." },
   { year: "2018–19", event: "Published counts of about 30 people. Euronews visits." }
  ]
 },
 {
  slug: "zajezova",
  name: "Zaježová (Zaježka)",
  location: "Zaježová, near Pliešovce, Zvolen District, central Slovakia",
  region: "Banská Bystrica Region, Slovakia",
  country: "Slovakia",
  foundedYear: 1991,
  foundedLabel: "1991 (NGOs begin in the old village; the living eco-settlement grows through the 1990s)",
  members: 150,
  membersLabel: "On the order of 120–150 people across a dispersed hill settlement (GEN Europe and village accounts; not a single household count)",
  acres: 200,
  acresLabel: "A dispersed village of small settlements and meadows (one 2018 account said about 80 ha; the lived landscape is the old cadastral village)",
  legalStructure:
   "Zaježka is a name for cooperating residents, NGOs, and initiatives around the old village of Zaježová. From 1991 several organisations began work on crafts, folk building, and environment. There is no single co-op that owns the whole hill. People hold houses and small farms. Education centres (including Vzdelávacie centrum Zaježová) host volunteers and courses. GEN lists Zajezka. The settlement is decentralised on purpose.",
  legalCategory: "Dispersed eco-settlement / NGOs",
  stillActive: true,
  images: [
   "/communities/zajezova-land.jpg",
   "/communities/zajezova-1.jpg",
   "/communities/zajezova-2.jpg",
   "/communities/zajezova-3.jpg"
  ],
  summary:
   "On a Slovak hill, an old village thinned out and then filled again with people who wanted crafts, timber houses, and a quieter week. About 150 people, several NGOs, no single landlord. You visit a centre. You join a household only if that household says so.",
  businessModel:
   "Small farms, courses, volunteering, ordinary rural livelihoods. The education centre is the public till. Houses are people’s houses.",
  foundingProcess:
   "The original village emptied. From 1991 NGOs and newcomers treated the empty houses as a chance. The name Zaježka is the network, not a deed.",
  governance:
   "Decentralised. Centres run programmes. Households run houses. A course week is not a village assembly.",
  website: "https://zajezka.sk/",
  timeline: [
   { year: "1991", event: "NGOs begin work in Zaježová." },
   { year: "1990s–2000s", event: "New households and education centres. GEN listing as Zajezka." },
   { year: "Present", event: "Dispersed settlement of on the order of 150 people. Volunteer and course programmes." }
  ]
 },
 {
  slug: "sadhana-forest",
  name: "Sadhana Forest",
  location: "Near Auroville, Viluppuram District, Tamil Nadu (further long-term sites in India, Haiti, Kenya, and Namibia)",
  region: "Tamil Nadu, India",
  country: "India",
  foundedYear: 2003,
  foundedLabel: "2003 (Yorit and Aviram Rozin; Auroville land)",
  members: 40,
  membersLabel: "A core of long-term volunteers and families (one 2025 account said 37 long-term plus 60+ shorter-stay volunteers; capacity published up to about 195)",
  acres: 70,
  acresLabel: "70 acres of formerly barren land at the Auroville site, plus later projects in other countries",
  legalStructure:
   "Sadhana Forest is a volunteer-based international nonprofit for reforestation, water conservation, and vegan community living. Yorit and Aviram Rozin began on 70 acres of barren land at Auroville in 2003. The Auroville site is the mother camp. Later long-term projects opened in Haiti, Kenya, Namibia, and other Indian sites. Volunteers give seva (about 25–35 hours a week). Visitors may come for a free tour. It sits beside Auroville and is not the same membership as Auroville. Wikipedia and sadhanaforest.org are the public record.",
  legalCategory: "Nonprofit / volunteer community",
  stillActive: true,
  images: [
   "/communities/sadhana-forest-land.jpg",
   "/communities/sadhana-forest-1.jpg",
   "/communities/sadhana-forest-2.jpg",
   "/communities/sadhana-forest-3.jpg"
  ],
  summary:
   "West of Auroville, a vegan forest camp has been planting and watering since 2003. Thousands of volunteers have passed through. A small core stays. The trees are the membership that remains. Haiti, Kenya, and Namibia are later sisters of the same idea.",
  businessModel:
   "Donations and volunteer food contributions. Short-stay people chip in for meals. Long-term people live from the common pot and their hours. No lot sales.",
  foundingProcess:
   "The Rozins took barren laterite and started watering. The volunteer week became the institution. Other countries copied the camp, not a franchise of lots.",
  governance:
   "Founders and long-term coordinators. A ten-day volunteer is labour. Auroville admissions are a different door.",
  website: "https://sadhanaforest.org/",
  timeline: [
   { year: "2003", event: "Sadhana Forest begins on 70 acres at Auroville." },
   { year: "2010", event: "Humanitarian Water and Food Award (Haiti and India)." },
   { year: "Present", event: "Auroville camp plus sites in Haiti, Kenya, Namibia, and further Indian land. Volunteers year-round." }
  ]
 },

 {
  slug: "living-energy-farm",
  name: "Living Energy Farm",
  location: "Rural Louisa County, Virginia",
  region: "Virginia, USA",
  country: "United States",
  foundedYear: 2010,
  foundedLabel: "2010 (community; FEC pages also say 2011)",
  members: 12,
  membersLabel: "Eight adults and four children as of 2024; nine long-term residents in the community’s own count",
  acres: 127,
  acresLabel: "127 acres of Piedmont farm and woodland",
  legalStructure:
   "Living Energy Farm is an off-grid intentional community, organic farm, and appropriate-technology centre. A small membership, no grid electricity, no generators, no propane. A DC microgrid with a modest photovoltaic array and nickel-iron batteries. Income from seed growing for Southern Exposure Seed Exchange and others. FEC (Federation of Egalitarian Communities) lists it. Tours about once a month. Residential volunteers two weeks to three months.",
  legalCategory: "Unincorporated community / egalitarian community",
  stillActive: true,
  images: [
   "/communities/living-energy-farm-land.jpg",
   "/communities/living-energy-farm-1.jpg",
   "/communities/living-energy-farm-2.jpg",
   "/communities/living-energy-farm-3.jpg"
  ],
  summary:
   "In Louisa County, a dozen people run an organic farm without the grid. DC microgrid, nickel-iron batteries, seeds for a living, 127 acres. They want the hardware cheap enough that a modest household could copy it. A Monday tour is the public hour.",
  businessModel:
   "Seed growing, donations, volunteer labour. No lot sales. The lesson is the energy system.",
  foundingProcess:
   "A small group set out around 2010 to prove a full domestic life on a few hundred watts per person. The farm is the lab and the kitchen.",
  governance:
   "A small egalitarian household. Volunteers work 30–35 hours a week. A tour is not a membership interview, though it can lead to one.",
  website: "https://livingenergyfarm.org/",
  timeline: [
   { year: "2010–11", event: "Community founded in Louisa County." },
   { year: "2010s", event: "DC microgrid, seed income, FEC listing." },
   { year: "2024", event: "Eight adults and four children." }
  ]
 },
 {
  slug: "ecodorp-boekel",
  name: "Ecodorp Boekel",
  location: "Boekel, North Brabant, the Netherlands",
  region: "North Brabant, Netherlands",
  country: "Netherlands",
  foundedYear: 2016,
  foundedLabel: "c. 2016 first tiny house; 36 climate-positive rental homes as the built village (GEN Europe member)",
  members: 80,
  membersLabel: "36 rental homes, including four informal-care dwellings and two for refugees (resident headcount unpublished; this atlas uses the house count as scale)",
  acres: null,
  acresLabel: "A small forest-edge district of circular timber houses (published hectare figure not isolated in the sources this atlas used)",
  legalStructure:
   "Ecodorp Boekel is a climate-positive rental eco-village of 36 homes, part of VrijCoop, an association that helps new residential communities with collective ownership and finance. Homes are rented, not sold as ordinary Dutch freeholds. Four informal-care houses and two refugee houses are part of the mix. GEN Europe lists it as a full member. In 2021 a Dutch jury named it the most sustainable organisation in the Netherlands. Round timber houses, some on stilts. ecodorpboekel.nl is the public face.",
  legalCategory: "Collective rental / eco-village",
  stillActive: true,
  images: [
   "/communities/ecodorp-boekel-land.jpg",
   "/communities/ecodorp-boekel-1.jpg",
   "/communities/ecodorp-boekel-2.jpg",
   "/communities/ecodorp-boekel-3.jpg"
  ],
  summary:
   "At the edge of a Brabant wood, thirty-six round timber houses are rented as a climate-positive village. Care homes and two refugee houses sit in the same cluster. VrijCoop is the finance idea. You do not buy a tiny house as a speculation. You apply to live in one.",
  businessModel:
   "Social rental, collective finance through VrijCoop, the living-lab story. Confirm current waiting lists on the village site.",
  foundingProcess:
   "A Dutch eco-village group and VrijCoop took a Boekel site, started with a tiny house, and built out 36 climate-adaptive rentals. The award in 2021 is the public stamp.",
  governance:
   "Residents plus the collective-ownership vehicle. A journalist’s drone shot is not an application.",
  website: "https://www.ecodorpboekel.nl/",
  timeline: [
   { year: "c. 2016", event: "First tiny house on the Boekel site." },
   { year: "2021", event: "Named most sustainable organisation in the Netherlands. GEN Europe membership." },
   { year: "Present", event: "36 rental homes, including care and refugee dwellings." }
  ]
 }
];
