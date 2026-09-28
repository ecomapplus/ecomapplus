import type { Community } from "./communities";

/** Ten living villages, oldest founding first: a Danish cooperative village, a Negev art kibbutz, a Dutch eco-district, Auckland’s first cohousing, a Roskilde row-house village, five earth-sheltered homes, an arts suburb south of Adelaide, a no-debt field on Djursland, a Thuringian castle cooperative, and Leeds straw-bale mutual homes. */
export const livingBatch2Communities: Community[] = [
 {
  slug: "hjortshoj",
  name: "Andelssamfundet i Hjortshøj",
  location: "8530 Hjortshøj, 15 km north-east of Aarhus, overlooking the bay",
  region: "Central Jutland, Denmark",
  country: "Denmark",
  foundedYear: 1986,
  foundedLabel: "1986 (vision); first group moved in 1992",
  members: 300,
  membersLabel: "About 300 people in eight housing groups; a further three groups have been discussed",
  acres: 49,
  acresLabel: "~20 ha of organic farmland rented from Aarhus plus the housing groups on the village edge",
  legalStructure:
   "Andelssamfundet i Hjortshøj is a Danish cooperative village that grew in stages. Each housing group chose its own economic-legal form, so the place is a mix: some groups are private houses on their own plots, others are cooperatives or rental. The umbrella is the andelssamfund, the cooperative of Hjortshøj. About a hundred families work a 1.2-hectare market garden. Twenty hectares next to the village are rented from the municipality for grain, fodder, fruit, vegetables, and a little livestock.",
  legalCategory: "Cooperative village (mixed tenure)",
  stillActive: true,
  images: [
   "/communities/hjortshoj-land.jpg",
   "/communities/hjortshoj-1.jpg",
   "/communities/hjortshoj-2.jpg",
   "/communities/hjortshoj-3.jpg",
  ],
  summary:
   "Fifteen kilometres north-east of Aarhus, eight housing groups have grown into a village of about three hundred people. The idea was spoken in an evening class in 1986. The first households moved in in 1992. They still rent twenty hectares from the city and grow food together.",
  businessModel:
   "Households pay for their own dwellings according to the group they live in. Shared costs cover roads, common houses, and the farm. The market garden feeds members. There is no single lot catalogue for the whole village.",
  foundingProcess:
   "Jørg Gaugler and Kaj Hansen put a sustainable-community vision to an evening class in 1986. Consultation with Aarhus followed. The first housing group moved in in 1992. Later groups chose their own tenure. The village is still adding, slowly.",
  governance:
   "Housing groups run their own houses. The andelssamfund sits above them for land, farm, and common work. Confirm the current meeting form before you treat a 1986 evening class as a 2026 standing order.",
  website: "https://www.andelssamfundet.dk/en",
  timeline: [
   { year: "1986", event: "Gaugler and Hansen present the vision in an evening class." },
   { year: "1992", event: "First housing group moves in at Hjortshøj." },
   { year: "Present", event: "Eight groups, about 300 people, 20 ha farm rented from Aarhus." },
  ],
 },
 {
  slug: "neot-semadar",
  name: "Kibbutz Neot Semadar",
  location: "Southern Negev / Arava, about 70 km north of Eilat, Highway 40 near the Shizafon junction",
  region: "Southern District, Israel",
  country: "Israel",
  foundedYear: 1989,
  foundedLabel: "1989 (on the grounds of abandoned Kibbutz Shizafon)",
  members: 273,
  membersLabel: "273 (2024). The kibbutz has said about 90 adult members",
  acres: 198,
  acresLabel: "80 hectares: organic vineyards, dates, olives, deciduous trees, an herb garden, and the art centre",
  legalStructure:
   "Neot Semadar is a cooperative kibbutz on Israel Lands Authority ground, in the classic settlement form. Members do not hold private house title. Every seven years members are assigned new homes, a published practice meant to keep attachment light. The economy is collective: organic agriculture, a boutique winery, goat cheese, olive oil, an art centre with fourteen workshops, and the Pundak roadside restaurant. Yosef Safra named the place for his wife Smadar, killed in 1981. UN Tourism listed it among Best Tourism Villages for 2025.",
  legalCategory: "Kibbutz",
  stillActive: true,
  images: [
   "/communities/neot-semadar-land.jpg",
   "/communities/neot-semadar-1.jpg",
   "/communities/neot-semadar-2.jpg",
   "/communities/neot-semadar-3.jpg",
  ],
  summary:
   "In the southern Arava, a learning kibbutz has been growing vines, dates, and stained glass since 1989. Mud-brick cooling towers, a desert farm, an art centre. About ninety adult members on the kibbutz’s own count, 273 people in the 2024 census. Guests eat at the Pundak. Volunteers write first.",
  businessModel:
   "Organic produce, olive oil, wine, cheese, the restaurant, guest stays, and a volunteer programme. Members live from the common economy. There is no house market.",
  foundingProcess:
   "A Jerusalem circle looking for a learning community took the empty Shizafon site in 1989 and built most of it by hand. Passive cooling, mud brick, a tower that actually works in 40-degree heat. The art workshops came with the houses.",
  governance:
   "Kibbutz assembly and work branches. Volunteers need prior approval from the coordinators (Alex or Inbal of record) before any third-party form. A two-month stay is not membership.",
  website: "https://neot-semadar.com/en/",
  timeline: [
   { year: "1989", event: "Kibbutz founded on the Shizafon site." },
   { year: "2001", event: "Olive mill, with help recorded from ICA and the Ministry of Industry and Trade." },
   { year: "2024–25", event: "Population 273. UN Tourism Best Tourism Village." },
  ],
 },
 {
  slug: "eva-lanxmeer",
  name: "EVA-Lanxmeer",
  location: "Culemborg, Gelderland, on a municipal drinking-water extraction field",
  region: "Gelderland, Netherlands",
  country: "Netherlands",
  foundedYear: 1994,
  foundedLabel: "1994–2009 (Marleen Kaptein’s 1990 idea; 240 houses built out)",
  members: 600,
  membersLabel: "240 houses plus offices and a city farm (resident count unpublished; this atlas uses house count as the scale)",
  acres: 59,
  acresLabel: "More than 20 ha (about 24 ha in planning accounts) around the Vitens water wells",
  legalStructure:
   "EVA-Lanxmeer is an ecological neighbourhood, not a closed commune. The municipality of Culemborg bought the land and pre-financed the plan. Future residents designed it with the city from the early 1990s. Households hold ordinary Dutch title to houses. All residents belong to the EVA-Lanxmeer residents’ association, which manages outdoor space. The association set up Thermo Bello, a local energy company. Caetshage is the urban ecological farm. EVA began as an information centre (Ecologisch Centrum voor Educatie, Voorlichting en Advies). Marleen Kaptein started the idea in 1990.",
  legalCategory: "Ecological neighbourhood (freehold + residents’ association)",
  stillActive: true,
  images: [
   "/communities/eva-lanxmeer-land.jpg",
   "/communities/eva-lanxmeer-1.jpg",
   "/communities/eva-lanxmeer-2.jpg",
   "/communities/eva-lanxmeer-3.jpg",
  ],
  summary:
   "On Culemborg’s drinking-water land, 240 houses went up between 1994 and 2009 around retention ponds and a city farm. Residents designed it with the municipality. You buy a house. You also join the association that runs the green and the local heat.",
  businessModel:
   "Ordinary house sales and mortgages, association dues, Thermo Bello energy, Caetshage farm. The public lesson is the district. The houses are homes.",
  foundingProcess:
   "Marleen Kaptein wanted a neighbourhood designed with the people who would live there. A foundation gathered experts. Culemborg took the risk on the land. Build-out ran to 2009.",
  governance:
   "Residents’ association for the commons. Municipality for the water field and the original land deal. House owners for their dwellings. Thermo Bello for heat. A tourist with a camera is not on the association board.",
  website: "https://lanxmeer.nl/",
  timeline: [
   { year: "1990", event: "Marleen Kaptein begins gathering a resident-design group." },
   { year: "1994", event: "Construction of the ecological neighbourhood begins." },
   { year: "2009", event: "Build-out of about 240 houses complete." },
   { year: "Present", event: "Residents’ association, Thermo Bello, Caetshage farm, water-sensitive urban design still in use." },
  ],
 },
 {
  slug: "earthsong",
  name: "Earthsong Eco-Neighbourhood",
  location: "Ranui, Waitākere, west Auckland",
  region: "Auckland, New Zealand",
  country: "New Zealand",
  foundedYear: 1995,
  foundedLabel: "1995 (resident group); construction 2000–2008",
  members: 80,
  membersLabel: "32 self-contained homes on a pedestrian figure-eight (resident count unpublished; 32 households is the published unit)",
  acres: 3,
  acresLabel: "1.29 hectares in Ranui",
  legalStructure:
   "Earthsong is New Zealand’s first cohousing neighbourhood. Future residents formed a non-profit company (Cohousing New Zealand Ltd) to develop it. The 32 homes sit under Unit Titles: each household owns a unit, and the Earthsong Body Corporate owns and runs the shared path, common house, laundry, guest rooms, and gardens. Membership and the body corporate are tightly bound. Full-group meetings and focus groups do almost all the legal work the body corporate would otherwise hire out. Robin Allison is a published co-founder. World Habitat recognised the project.",
  legalCategory: "Unit titles / body corporate cohousing",
  stillActive: true,
  images: [
   "/communities/earthsong-land.jpg",
   "/communities/earthsong-1.jpg",
   "/communities/earthsong-2.jpg",
   "/communities/earthsong-3.jpg",
  ],
  summary:
   "In Ranui, thirty-two timber houses face a pedestrian loop and a common house. Cars stay at the edge. The group formed in 1995 and built from 2000 to 2008. You buy a unit. You also sit the meetings.",
  businessModel:
   "Unit sales when a home turns, body-corporate levies, shared laundry and guest rooms. The site lists buying and renting. A unit is the door.",
  foundingProcess:
   "A west-Auckland group around Robin Allison wanted urban cohousing with permaculture in the plan. They incorporated, bought in Ranui, and built in stages over eight years.",
  governance:
   "Full-group meetings, focus groups, body-corporate rules (15 October 2016) and a membership agreement (4 May 2016). Consensus culture on top of Unit Titles law.",
  website: "https://www.earthsong.org.nz/",
  timeline: [
   { year: "1995", event: "Resident group forms; Cohousing New Zealand Ltd is the development vehicle." },
   { year: "2000–2008", event: "Construction of 32 homes and the common house." },
   { year: "Present", event: "Units turn over by sale. membership-enquiry@earthsong.org.nz is the published door." },
  ],
 },
 {
  slug: "munksoegaard",
  name: "Munksøgård",
  location: "Trekroner, on the edge of Roskilde, Zealand, half an hour by train from Copenhagen",
  region: "Zealand, Denmark",
  country: "Denmark",
  foundedYear: 1995,
  foundedLabel: "1995 (founding); 100 row houses established 2000",
  members: 225,
  membersLabel: "About 225 children, youths and adults in 100 row houses",
  acres: null,
  acresLabel: "100 row houses in five groups of 20 at Trekroner (published hectare figure not isolated in the sources this atlas used)",
  legalStructure:
   "Munksøgård is five dwelling groups of twenty row houses, each with a common house. Tenure is mixed on purpose. One group is privately owned single-family houses. One is a cooperative association (you own a share of the house you occupy). Three groups are owned by Roskilde Building Association and rented: one for young people, one for seniors, one open. Tenants in the rented groups still control who moves in. The mix was a political choice so the village would not only be for people who could buy.",
  legalCategory: "Mixed-tenure eco-village",
  stillActive: true,
  images: [
   "/communities/munksoegaard-land.jpg",
   "/communities/munksoegaard-1.jpg",
   "/communities/munksoegaard-2.jpg",
   "/communities/munksoegaard-3.jpg",
  ],
  summary:
   "At Trekroner, a hundred row houses sit in five groups at the edge of the Roskilde fields. Some you buy. Some you rent from the building association. One group is a co-op. About 225 people. Common houses, bikes, the ordinary Danish week with an ecological brief.",
  businessModel:
   "Household housing costs (purchase, co-op share, or rent), plus shared operations. Agriculture at the edge. No single developer still selling the village.",
  foundingProcess:
   "A 1990s resident group planned a mixed-tenure eco-village next to the new Trekroner neighbourhood. Houses went up around 2000. The tenure split is the founding fact.",
  governance:
   "Each dwelling group runs its common house and who moves in. Village-scale questions sit across the five.",
  website: "https://www.munksoegaard.dk/en/about.html",
  timeline: [
   { year: "1995", event: "Founding year." },
   { year: "2000", event: "100 row houses established in five groups of 20." },
   { year: "Present", event: "About 225 residents. Mixed tenure still in force." },
  ],
 },
 {
  slug: "hockerton",
  name: "Hockerton Housing Project",
  location: "Outskirts of Hockerton, Nottinghamshire",
  region: "Nottinghamshire, United Kingdom",
  country: "United Kingdom",
  foundedYear: 1998,
  foundedLabel: "1998 (terrace completed after about three years’ planning and 18 months’ build)",
  members: 12,
  membersLabel: "Five earth-sheltered homes (a small resident group; two homes have changed ownership)",
  acres: 10,
  acresLabel: "40,000 m² site (~4 ha / ~10 acres): homes, lake, reed beds, gardens, turbines",
  legalStructure:
   "Five households own their earth-sheltered homes and are members of a not-for-profit co-operative that runs the site and the education business. Each home is supposed to give 300 unpaid hours a year to site management and 300 paid hours to the joint business (tours, courses, consultancy). Liquid waste goes to a reed bed; solids to a septic tank emptied quarterly and composted on site. Two small wind turbines and a PV array. A reservoir sized for about 250 days.",
  legalCategory: "Co-operative of freehold eco-homes",
  stillActive: true,
  images: [
   "/communities/hockerton-land.jpg",
   "/communities/hockerton-1.jpg",
   "/communities/hockerton-2.jpg",
   "/communities/hockerton-3.jpg",
  ],
  summary:
   "Five grass-roofed houses face south over a lake on the edge of a Nottinghamshire village. They were finished in 1998. Residents still lead Saturday tours six times a year. A house comes up rarely. The co-op is how five homes act like a place.",
  businessModel:
   "Household ownership plus a joint education business: booked tours, workshops, consultancy. Energy bills have been published in the low hundreds of pounds a year. The business is the public face; the terrace is a home.",
  foundingProcess:
   "A small group spent about three years on planning and eighteen months building a terrace that would run on its own water, heat, and waste. Nick Martin is a name that appears in early coverage. The co-operative and the tour diary followed.",
  governance:
   "Five households, co-op membership, labour quotas. A tour guest does not sit the meeting. When a home is offered, the published path is to come to meetings and work weekends first.",
  website: "https://www.hockertonhousingproject.org.uk/",
  timeline: [
   { year: "c. 1995–98", event: "Planning and construction of the five-house terrace." },
   { year: "1998", event: "Homes completed." },
   { year: "2002–08", event: "PV array and wind turbines installed and upgraded." },
   { year: "Present", event: "Saturday sustainable-living tours about six times a year. Homes rarely for sale." },
  ],
 },
 {
  slug: "aldinga",
  name: "Aldinga Arts Ecovillage",
  location: "Aldinga Beach / Aldinga, about an hour south of Adelaide, a few minutes from the beach and McLaren Vale",
  region: "South Australia, Australia",
  country: "Australia",
  foundedYear: 2001,
  foundedLabel: "2001 (incorporated); building from 2002 after about a decade of planning",
  members: 310,
  membersLabel: "About 310 residents on 181 lots in a 2021 village figure; later accounts say around 350",
  acres: 82,
  acresLabel: "About 33 ha in later village accounts (older write-ups said 18 ha); 181 lots, nine neighbourhood groups",
  legalStructure:
   "Aldinga Arts Eco Village is a community corporation under South Australia’s Community Titles Act. Households own their lots. The corporation holds common land, orchards, farm, and the no-fences brief that was the 2002 opening intention. Nine neighbourhood groups of about 10–15 neighbouring properties look after streets and shared trees. In 2021 the village said 78% of lots were owner-occupied and 13% rented. Lots come up on the open Adelaide market. A Steiner school and local markets sit next door.",
  legalCategory: "Community titles / community corporation",
  stillActive: true,
  images: [
   "/communities/aldinga-land.jpg",
   "/communities/aldinga-1.jpg",
   "/communities/aldinga-2.jpg",
   "/communities/aldinga-3.jpg",
  ],
  summary:
   "An hour south of Adelaide, a community corporation of about 180 lots tried to make a suburb without fences. Arts studios, orchards, a small farm, nine neighbourhood groups. You buy a lot. You also inherit the common land and the expectation that you will show up.",
  businessModel:
   "Lot sales, corporation levies, a small organic farm and orchards, arts. realestate.com.au is as much a door as the village website. Confirm current bylaws before you treat a listing as the whole story.",
  foundingProcess:
   "About ten years of planning, incorporation in 2001, building from 2002. The arts brief and the no-fence rule were the public founding facts.",
  governance:
   "Community corporation plus nine neighbourhood groups. Closed Facebook group and the website are how they talk between meetings. A beach day in Aldinga is not a vote.",
  website: "https://aldingaartsecovillage.com/",
  timeline: [
   { year: "c. 1991–2001", event: "Planning decade." },
   { year: "2001", event: "Village incorporated." },
   { year: "2002", event: "Building starts. No-fences intention made public." },
   { year: "2021", event: "Village figure: 310 residents, 181 lots, 78% owner-occupied." },
  ],
 },
 {
  slug: "friland",
  name: "Friland",
  location: "Feldballe, Djursland, Syddjurs Municipality, Jutland",
  region: "Central Jutland, Denmark",
  country: "Denmark",
  foundedYear: 2002,
  foundedLabel: "2002 (after a DR-TV experiment with 13 families)",
  members: 115,
  membersLabel: "About 40 households, ~75 adults and 40 children (site figures); an older case study said 10 ha and 105 people",
  acres: 25,
  acresLabel: "~10 hectares, lots of 900–1,400 m², plus common lake, garden, playground",
  legalStructure:
   "A foundation owns the land and lends it to the community. Each shareholder has a plot for a house and a private garden. Houses must meet national building regulations. Residents cannot take a loan secured on the land or the houses. Sale prices are capped per square metre so the field cannot become a speculation. Self-employment is part of the brief. Six common meetings a year start with a meal. An annual assembly elects a small board. Consensus. DR-TV’s early-2000s experiment with thirteen families is the origin story the Guardian still tells.",
  legalCategory: "Foundation land, no-mortgage plots",
  stillActive: true,
  images: [
   "/communities/friland-land.jpg",
   "/communities/friland-1.jpg",
   "/communities/friland-2.jpg",
   "/communities/friland-3.jpg",
  ],
  summary:
   "On a former cornfield in Feldballe, people build their own houses and are not allowed to mortgage them. A foundation holds the dirt. About forty households, experimental walls, a lake, a price cap. The television experiment became a village.",
  businessModel:
   "Households save, then build. Self-employment on site. Common costs for roads and land. The cap on resale is the economic rule. start.friland.org is the door.",
  foundingProcess:
   "Thirteen families on national television, a cheap field, a rule against debt. The group stayed. Lots filled over the next two decades to around forty households.",
  governance:
   "Annual assembly, a small elected board, six meal-then-meeting evenings a year, consensus. New ideas get a first hearing before the main meeting votes.",
  website: "https://start.friland.org/about-friland/",
  timeline: [
   { year: "2002", event: "Friland founded; DR-TV experiment with 13 families." },
   { year: "2010s", event: "Lots fill; experimental houses, plant-based wastewater, masonry stoves." },
   { year: "Present", event: "About 40 households. Foundation land, no mortgage, resale cap." },
  ],
 },
 {
  slug: "tonndorf",
  name: "Schloss Tonndorf",
  location: "Tonndorf, Weimarer Land, Thuringia",
  region: "Thuringia, Germany",
  country: "Germany",
  foundedYear: 2005,
  foundedLabel: "August 2005 (Genossenschaft auf Schloss Tonndorf e.G. takes the castle)",
  members: 65,
  membersLabel: "About 65 people (adults and children) on the community’s own site",
  acres: 37,
  acresLabel: "15 ha of castle ground, gardens, and woodland",
  legalStructure:
   "Since August 2005 the castle has been held by Genossenschaft auf Schloss Tonndorf e.G., a registered German cooperative. About sixty people formed it to live, work, and keep a medieval hilltop from becoming a private hotel they could not afford. The cooperative is the owner of record in Thuringia’s public pages. Residents work the 15 hectares and the buildings. Seminar and guest use exists; the castle is first a home. Thomas Meier is a named early member in regional press. GEN lists the project.",
  legalCategory: "Registered cooperative (e.G.)",
  stillActive: true,
  images: [
   "/communities/tonndorf-land.jpg",
   "/communities/tonndorf-1.jpg",
   "/communities/tonndorf-2.jpg",
   "/communities/tonndorf-3.jpg",
  ],
  summary:
   "Thuringian cooperative castle since August 2005, on a wooded hill at Tonndorf in Weimarer Land. Genossenschaft auf Schloss Tonndorf e.G. holds the keep and 15 hectares. About 65 people live and work there. The castle is a home first; guest groups come by arrangement. You join the e.G. You do not buy a flat in the keep.",
  businessModel:
   "Member shares in the cooperative, household contributions, farm and garden, hosted groups. schloss-tonndorf.de is the public face. There is no apartment market in the keep.",
  foundingProcess:
   "A group looking for a place large enough to live and work together took on Schloss Tonndorf in 2005 as an e.G. Restoration and ordinary life have run together since.",
  governance:
   "Cooperative members, one share one voice in the German e.G. sense. Confirm current board practice before you treat a 2005 founding meeting as today’s standing order.",
  website: "https://www.schloss-tonndorf.de/",
  timeline: [
   { year: "2005", event: "Genossenschaft auf Schloss Tonndorf e.G. takes the castle." },
   { year: "Present", event: "About 65 people on 15 ha. GEN listing. Guest interest by the site’s contact form." },
  ],
 },
 {
  slug: "lilac",
  name: "LILAC",
  location: "Former Wyther Park Primary School site, Bramley / Kirkstall, about 3 miles west of Leeds city centre",
  region: "West Yorkshire, United Kingdom",
  country: "United Kingdom",
  foundedYear: 2013,
  foundedLabel: "Completed March 2013 (resident group from the late 2000s)",
  members: 50,
  membersLabel: "20 households in straw-bale and timber homes plus a common house",
  acres: 2,
  acresLabel: "20 homes on the former Wyther Park Primary School site (published hectare figure not isolated)",
  legalStructure:
   "LILAC (Low Impact Living Affordable Community) is a cohousing neighbourhood held as a Mutual Home Ownership Society, a cooperative in which members own the site together and pay a share of their income (published as about 35% of net) for a democratic stake rather than a mortgage on a single house. Homes are ModCell straw-bale, lime render, timber. The land cannot be split into twenty ordinary freeholds. Paul Chatterton, a University of Leeds geographer, is a published founder-member and the public academic voice of the model. BBC covered completion in 2013. World Habitat listed it. lilac.coop is the door.",
  legalCategory: "Mutual home ownership / housing cooperative",
  stillActive: true,
  images: [
   "/communities/lilac-land.jpg",
   "/communities/lilac-1.jpg",
   "/communities/lilac-2.jpg",
   "/communities/lilac-3.jpg",
  ],
  summary:
   "Twenty straw-bale houses on an old Leeds school yard. You do not buy a freehold. You join a mutual home ownership society and pay a slice of what you earn. The point was to make an ecological terrace that a nurse could actually afford.",
  businessModel:
   "Member income shares into the MHOS, which holds the homes. Common house, shared tools, low bills. Vacancies are advertised on lilac.coop. A viewing is not a key.",
  foundingProcess:
   "A Leeds group spent the late 2000s designing an affordable cohousing model, bought the school site, and finished the terrace in March 2013. The legal form is the invention as much as the straw.",
  governance:
   "Cooperative / MHOS democracy among the twenty households. Focus groups and the common house. Confirm current allocation rules on the vacancies page before you treat a 2013 TEDx talk as the bylaws.",
  website: "https://www.lilac.coop/",
  timeline: [
   { year: "Late 2000s", event: "Resident group designs the MHOS model and finds the school site." },
   { year: "2013", event: "Twenty homes completed. BBC coverage. First households move in." },
   { year: "Present", event: "Vacancies posted on lilac.coop. Model cited in UK community-led housing policy." },
  ],
 },
];
