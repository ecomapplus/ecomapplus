import type { Community } from "./communities";

/** Ten living villages, oldest first: a Greek commons, a Golden Bay trust, Denmark’s first eco-village, the Taos earthship mesa, an NSW co-op, Wales’s One Planet pioneer, a German hamlet cooperative, an ISKCON ashram, an Austrian barracks, a Navarrese house. */
export const livingMoreCommunities: Community[] = [
 {
  slug: "meltemi",
  name: "Meltemi",
  location: "Just outside Rafina, Attica",
  region: "Attica, Greece",
  country: "Greece",
  foundedYear: 1946,
  foundedLabel: "1946 (written rules from the mid-1950s; GEN-listed NGO)",
  members: 200,
  membersLabel: "More than 200 families, four generations; many seasonal, a summer commons as much as a winter village",
  acres: 37,
  acresLabel: "150 stremma (~15 ha / ~37 acres) of Attica coast they did not originally own",
  legalStructure:
   "Meltemi is a registered Greek nonprofit NGO for sustainable development, governed by a mix of direct participatory democracy and representative democracy. Families moved onto the plot in 1946 and wrote internal rules in the mid-1950s for how they live with each other and how they keep the land. They did not buy the coast as lots. A board exists and is described as technical more than ruling; peer pressure does the rest. GEN lists it. This atlas found no ordinary HOA, no housing co-op of shares, and no cadastral map of private house lots.",
  legalCategory: "Nonprofit / commons",
  stillActive: true,
  images: [
   "/communities/meltemi-land.jpg",
   "/communities/meltemi-1.jpg",
   "/communities/meltemi-2.jpg",
   "/communities/meltemi-3.jpg",
  ],
  summary:
   "Just outside Rafina, more than two hundred families have kept a strip of Attica coast in common since 1946. Written rules from the 1950s, four generations, a board that serves more than it rules. They moved in and started taking care of it.",
  businessModel:
   "Households and a commons, not a guesthouse company. GEN lists a nonprofit NGO. There is no published lot market and no seminar catalogue this atlas could treat as the books. Confirm how money actually moves before you treat a directory line as a balance sheet.",
  foundingProcess:
   "People settled the plot in 1946, outside Rafina, and wrote rules in the mid-1950s. They did not own the place in the beginning. They occupied, cared, and kept a temporary autonomous zone until it became a four-generation commons. A 2013 account still calls it one of the most interesting commoning communities in Greece. GEN now lists it as an ecovillage NGO.",
  governance:
   "Direct participatory democracy plus a representative board that is described as technical. Rules are enforced by the community. A stranger does not sit that assembly.",
  website: "https://ecovillage.org/map/community/meltemi/",
  timeline: [
   { year: "1946", event: "Families settle the plot outside Rafina." },
   { year: "Mid-1950s", event: "Written rules for internal life and land care." },
   { year: "2013", event: "Public account of Meltemi as a registered ecovillage commons." },
   { year: "Present", event: "GEN listing: 150 stremma, 200+ families, NGO. Four generations." },
  ],
 },
 {
  slug: "tui",
  name: "Tui Community",
  location: "Wainui Bay, Golden Bay, 23 km from Tākaka, edge of Abel Tasman National Park",
  region: "Tasman, New Zealand",
  country: "New Zealand",
  foundedYear: 1984,
  foundedLabel: "1984 (Tui Land Trust purchase; assets later moved to Tui Spiritual and Educational Trust)",
  members: 40,
  membersLabel: "About 30–40 adults and children (ages about 8–75 on the current site)",
  acres: 125,
  acresLabel: "50–52 hectares (~125 acres) of Wainui Bay farm, sea on one side, Abel Tasman on the other",
  legalStructure:
   "Tui Community sits on land held by a New Zealand charitable trust. The group bought a 50–52 hectare farm in 1984 through the Tui Land Trust, residents putting into the hat what they could afford. After about fifteen years they formed the Tui Spiritual and Educational Trust (TSET) and transferred the assets, because it was easier to write a new deed than to change the old objects. About twenty privately and trust-owned dwellings and communal buildings. Members contribute to running costs and work the organic garden. There is no private subdivision of the Wainui farm.",
  legalCategory: "Charitable trust",
  stillActive: true,
  images: [
   "/communities/tui-land.jpg",
   "/communities/tui-1.jpg",
   "/communities/tui-2.jpg",
   "/communities/tui-3.jpg",
  ],
  summary:
   "On 50 hectares of Wainui Bay farm, between the sea and Abel Tasman, a Golden Bay community has lived under a charitable trust since 1984. About forty people, an organic garden, work exchanges. The land is the trust’s.",
  businessModel:
   "Resident contributions, the garden and orchard, hosted stays, rentals, and work exchanges. tuitrust.org.nz is the door. Nobody is selling Wainui lots.",
  foundingProcess:
   "A small group looking for intentional community found a 52-hectare farm in Wainui Bay in 1984. The Tui Land Trust bought it; households put in what felt right. Ten households with small children at the start. Later the Tui Spiritual and Educational Trust took the assets so the objects would match what people were actually doing. Robina McCurdy is a published co-founder, resident, and trustee.",
  governance:
   "Trustees hold the deed. Residents run the week. Work exchanges and hosted stays are not membership. Confirm the current meeting form before you treat a 1984 origin story as a 2026 standing-order.",
  website: "https://www.tuitrust.org.nz/",
  timeline: [
   { year: "1984", event: "Tui Land Trust buys the Wainui Bay farm. Living together begins." },
   { year: "~1999", event: "Tui Spiritual and Educational Trust formed; assets transferred." },
   { year: "Present", event: "About 40 people on 50 ha. Work exchanges, hosted stays, organic garden." },
  ],
 },
 {
  slug: "dyssekilde",
  name: "Økosamfundet Dyssekilde",
  location: "Torup, between Frederiksværk and Hundested, Halsnæs, North Zealand",
  region: "North Zealand, Denmark",
  country: "Denmark",
  foundedYear: 1990,
  foundedLabel: "1990 (idea 1982; building from a potato field; ~82 households)",
  members: 180,
  membersLabel: "Just under 200 residents in about 80–82 households (domes, terraces, self-build, a few social-rent houses)",
  acres: 35,
  acresLabel: "14 hectares (~35 acres); about half buildings, half organic farming",
  legalStructure:
   "Dyssekilde is Denmark’s first eco-village, built from a potato field at Torup. The community owns the communal ground and the former farm building. Households sit in several housing groups — domes, straw-bale, terraces, experimental self-build — and at least one small legal association cooperatively owns a neighbourhood geothermal system. Social-rent houses were built from communal money in the 1990s so the village would not only be for people who could finance a self-build. Four annual meetings of the whole community take the major decisions. You do not buy Torup as an open-market suburb; you join a household group.",
  legalCategory: "Housing cooperative",
  stillActive: true,
  images: [
   "/communities/dyssekilde-land.jpg",
   "/communities/dyssekilde-1.jpg",
   "/communities/dyssekilde-2.jpg",
   "/communities/dyssekilde-3.jpg",
  ],
  summary:
   "From a potato field at Torup, Denmark’s first eco-village put up about eighty houses: domes, terraces, straw-bale, a few social-rent flats. Just under two hundred people. Four meetings a year. They make more electricity than they use.",
  businessModel:
   "Households, organic farming on half the 14 hectares, surplus electricity, and a village that has to eat. Houses turn over inside the groups; this is not a Hundested lot catalogue.",
  foundingProcess:
   "Five people sketched a small vegetarian and spiritual village in 1982. About fifty of an intended hundred started building in 1989–90 on a potato field. Neighbourhoods specialised: a dome street, terraces, experimental houses from recycled materials, and rental flats paid from communal money. Torup around them later grew; Dyssekilde stayed the ecological core.",
  governance:
   "Four annual meetings of the whole community. Neighbourhood groups run heat, houses, and the week. A visitor does not vote.",
  website: "https://dyssekilde.dk/",
  timeline: [
   { year: "1982", event: "First sketch of a small ecological village." },
   { year: "1989–90", event: "Building begins on a potato field at Torup." },
   { year: "1990s", event: "Social-rent houses from communal money; neighbourhood heat associations." },
   { year: "Present", event: "About 80–82 households, just under 200 people, 14 ha. Surplus electricity, own wastewater." },
  ],
 },
 {
  slug: "greater-world",
  name: "Greater World Earthship Community",
  location: "West mesa, Tres Piedras / west of Taos, Taos County",
  region: "New Mexico, USA",
  country: "United States",
  foundedYear: 1992,
  foundedLabel: "1992 (Michael Reynolds; ~630-acre mesa; earthships from the early 1990s)",
  members: 150,
  membersLabel: "About 90–115 earthships and roughly 150 full-time residents on a plat for ~130 homes (2026 community post)",
  acres: 630,
  acresLabel: "~630 acres of west-mesa high desert; lots of 1–3 acres; more than half the land held in common",
  legalStructure:
   "Greater World is the large off-grid earthship neighbourhood west of Taos, started by Michael Reynolds in 1992. Community members own lots fee simple. A board of directors enforces a Land User’s Code. Annual dues have been published around $175 for roads and a community improvement fund. Earthship Biotecture’s visitor centre sits at the edge and is a business; the houses behind it are a neighbourhood. A 2026 Taos News jury found Reynolds financially responsible for basic infrastructure, not the homeowners association he had established. Confirm the current association papers before you treat a 1990s code as the 2026 deed.",
  legalCategory: "Homeowners association",
  stillActive: true,
  images: [
   "/communities/greater-world-land.jpg",
   "/communities/greater-world-1.jpg",
   "/communities/greater-world-2.jpg",
   "/communities/greater-world-3.jpg",
  ],
  summary:
   "On about 630 acres of Taos west mesa, people have been packing tires into earthships since the early 1990s. Fee-simple lots, a board, a Land User’s Code. The visitor centre is the photograph. The neighbourhood is behind it.",
  businessModel:
   "Lot sales (earthship.com/land-for-sale), Biotecture academy and tours at the visitor centre, and household off-grid life. Dues for roads. A house here is a lot plus a tire wall, not a commune share.",
  foundingProcess:
   "Reynolds bought the mesa in 1992 after earlier earthship experiments around Taos. Greater World was platted for on the order of a hundred homes. County planning fought the subdivision for years. The neighbourhood filled anyway. The visitor centre became the public face; residents live off the tour path.",
  governance:
   "Board of directors and a Land User’s Code. Lot owners, not a common purse. The 2026 infrastructure verdict is the live legal fact; read it before you join a board you have not met.",
  website: "https://earthship.com/land-for-sale/",
  timeline: [
   { year: "1992", event: "Reynolds takes on the ~630-acre west-mesa property." },
   { year: "1990s–present", event: "Earthships built lot by lot. Visitor centre becomes the public door." },
   { year: "2026", event: "Jury: Reynolds, not the HOA, financially responsible for basic infrastructure." },
   { year: "Present", event: "About 90–115 earthships, ~150 residents, lots still offered." },
  ],
 },
 {
  slug: "narara",
  name: "Narara Ecovillage",
  location: "Narara, Central Coast, former NSW horticultural research station",
  region: "New South Wales, Australia",
  country: "Australia",
  foundedYear: 2006,
  foundedLabel: "2006 (co-operative formed; land the former DPI horticultural station; homes from the 2010s)",
  members: 120,
  membersLabel: "Over 50 homes on the 63-hectare site (stage-1 blocks plus later cluster houses)",
  acres: 156,
  acresLabel: "63 hectares (~156 acres): ~12 ha residential, ~12 ha food/co-op, the rest conservation, creek, and the old research plantings",
  legalStructure:
   "Narara Ecovillage Co-operative Ltd holds the former NSW Department of Primary Industries horticultural research station on the Central Coast. A NSW co-operative, not a commune. About 12 hectares are zoned residential; households buy into the co-op and build under village covenants. The co-op has held a WICA network-operator and retail-supplier water licence (17_040). Common gardens, no fences between homes in the published permaculture brief. You can buy a dwelling when one turns. You do not buy the conservation hectares as a private lot.",
  legalCategory: "Housing cooperative",
  stillActive: true,
  images: [
   "/communities/narara-land.jpg",
   "/communities/narara-1.jpg",
   "/communities/narara-2.jpg",
   "/communities/narara-3.jpg",
  ],
  summary:
   "On 63 hectares of a former horticultural research station, a Central Coast co-op has put up more than fifty homes among old trial trees and a conservation creek. Twelve hectares of housing. The rest is the reason they bought the place.",
  businessModel:
   "Member equity in the co-op, house construction, a food co-operative, and the ordinary bills of a NSW village. Homes list when they turn. Not income-sharing.",
  foundingProcess:
   "A group formed the co-operative in 2006 and later took over the DPI station. Development applications for a masterplan of about 33 stage-1 blocks and further cluster houses. Permaculture gatherings on the land from 2014. Homes followed. Darkinjung country.",
  governance:
   "Co-operative members. Covenants on what you may build. A house is the membership door.",
  website: "https://nararaecovillage.com/",
  timeline: [
   { year: "2006", event: "Narara Ecovillage Co-operative formed." },
   { year: "2013–14", event: "Land in hand; masterplan DAs; permaculture gathering on the old station." },
   { year: "2016", event: "WICA water-licence applications (network operator and retail supplier)." },
   { year: "Present", event: "Over 50 homes on 63 ha. 12 ha residential, conservation and food land around them." },
  ],
 },
 {
  slug: "lammas",
  name: "Lammas Ecovillage",
  location: "Tir y Gafel, Glandwr, near Crymych, Pembrokeshire",
  region: "Pembrokeshire, Wales",
  country: "United Kingdom",
  foundedYear: 2009,
  foundedLabel: "2009 (planning permission; campaign from 2006; Tir y Gafel)",
  members: 35,
  membersLabel: "Nine original smallholdings; later write-ups name about 15 households and ~50 adults plus children on a larger acreage",
  acres: 76,
  acresLabel: "76 acres (31 ha); later residents have spoken of ~120–150 acres as peripheral holdings accrued",
  legalStructure:
   "Lammas is a low-impact, off-grid cluster of eco-smallholdings at Tir y Gafel. Planning permission in 2009, after a three-year campaign, made it the first UK ecovillage to get prospective consent under a local low-impact policy; the Welsh Government’s national One Planet Development policy followed. Each household holds a 1000-year agricultural lease, giving autonomy without a freehold flip. Originally nine smallholdings of about 7 acres each plus a community hub (local timber, straw-bale, a DECC-funded build). Paul Wimbush, Tony Wrench, and Larch Maxey are the named origin meeting. Featured on Grand Designs in 2016.",
  legalCategory: "Ground lease",
  stillActive: true,
  images: [
   "/communities/lammas-land.jpg",
   "/communities/lammas-1.jpg",
   "/communities/lammas-2.jpg",
   "/communities/lammas-3.jpg",
  ],
  summary:
   "Nine smallholdings on a Pembrokeshire hillside, grass roofs, a 27 kW hydro, and a 1000-year agricultural lease instead of a freehold. The first One Planet village in Wales. Grand Designs came. The planning fight was the point.",
  businessModel:
   "Land-based livelihoods from each holding (food, fuel, courses), a shared hydro, a hub for open days and teaching. A house here is a lease and a livelihood test, not a Crymych lot.",
  foundingProcess:
   "Tony Wrench, Paul Wimbush, and Larch Maxey met — the story goes — on Lammas Street in Carmarthen. Tao (Paul) Wimbush and partner joined in 2006. Three years of planning. Permission 2009. Households built in timber, straw, cob. One house burned in January 2018 (uninsured; original build about £27,000). Peripheral development has added households since the original nine.",
  governance:
   "Smallholders under 1000-year leases, plus a hub. One Planet monitoring is a planning condition, not a homeowners association. A course guest does not sit that.",
  website: "https://lammas.org.uk/",
  timeline: [
   { year: "2006", event: "Campaign group assembles. Name from Lammas / Lughnasadh." },
   { year: "2009", event: "Planning permission. First UK ecovillage with prospective low-impact consent." },
   { year: "2016", event: "Grand Designs, series 17 episode 6. One Planet Development now national Welsh policy." },
   { year: "2018", event: "One house destroyed by fire; rebuild cost far above the original self-build." },
   { year: "Present", event: "Original nine holdings plus later peripheral households. Hub, hydro, open days." },
  ],
 },
 {
  slug: "tempelhof",
  name: "Schloss Tempelhof",
  location: "Tempelhof 3, 74594 Kreßberg, Baden-Württemberg",
  region: "Baden-Württemberg, Germany",
  country: "Germany",
  foundedYear: 2010,
  foundedLabel: "2010 (community; Schloss Tempelhof eG; 15 years in 2026)",
  members: 130,
  membersLabel: "About 130 adults, young people, and children, plus people who work in the village businesses",
  acres: null,
  acresLabel: "A former Templar hamlet and farm at Kreßberg. Foundation holds the ground; the cooperative holds a 99-year leasehold. No single published hectare line this atlas would treat as cadastral",
  legalStructure:
   "Schloss Tempelhof eG (registered cooperative, Amtsgericht München GnR 2585) is the settlement vehicle: development, buildings, infrastructure, self-sufficiency. The ground is owned by a nonprofit Schloss Tempelhof foundation and leased to the eG for 99 years, a lock against speculation. One member, one vote, independent of the size of the deposit. Organic farm, SoLaWi, farm shop, guesthouse, SchlossCafé, a school for free unfolding, seminars. GEN Europe lists it. You apply to the community; you do not buy a Kreßberg lot.",
  legalCategory: "Housing cooperative",
  stillActive: true,
  images: [
   "/communities/tempelhof-land.jpg",
   "/communities/tempelhof-1.jpg",
   "/communities/tempelhof-2.jpg",
   "/communities/tempelhof-3.jpg",
  ],
  summary:
   "Baden-Württemberg cooperative hamlet since 2010, a former Templar farm at Kreßberg. The foundation holds the ground; Schloss Tempelhof eG holds a 99-year lease. About 130 people. Organic farm, SoLaWi, guesthouse, school. One member, one vote. You apply. You do not buy a Kreßberg lot.",
  businessModel:
   "Farm, farm shop, SoLaWi, guesthouse with full board from the land, café, seminars, donations, and member deposits. schloss-tempelhof.de. The earthship community room was budgeted at €298,500 from own capital and gifts.",
  foundingProcess:
   "The community formed in 2010 around the hamlet and farm. Foundation plus eG so the dirt could not be flipped. Regenerative agriculture, permaculture, an edible forest garden, agroforestry. A planned Earthship as the first approved in Germany. Newsletter still counting from that founding in 2026.",
  governance:
   "Registered cooperative, one member one vote. Foundation holds title. Seminar guests and SoLaWi customers do not sit the eG.",
  website: "https://www.schloss-tempelhof.de/",
  timeline: [
   { year: "2010", event: "Community founds around the Kreßberg hamlet. eG as settlement vehicle." },
   { year: "2015", event: "Earthship community-room project publicly costed." },
   { year: "Present", event: "About 130 residents. Farm, SoLaWi, guesthouse, school. 15 years in 2026." },
  ],
 },
 {
  slug: "govardhan",
  name: "Govardhan Ecovillage",
  location: "Galtare, P.O. Hamrapur, Wada Taluka, Palghar District, Maharashtra",
  region: "Maharashtra, India",
  country: "India",
  foundedYear: 2003,
  foundedLabel: "2003 (25-acre purchase and goshala; village named and scaled from 2010 under ISKCON Chowpatty / Radhanath Swami)",
  members: 200,
  membersLabel: "A working ashram of brahmacharis, families, staff, gurukula students, and guests — published counts vary from a few hundred residents to large student cohorts in season",
  acres: 100,
  acresLabel: "25 acres in 2003; later published figures run ~85–140 acres in the Sahyadri foothills by the Vaitarna",
  legalStructure:
   "Govardhan Ecovillage is an ISKCON project of Sri Sri Radha-Gopinatha Temple, Chowpatty, inspired by Radhanath Swami. Land at Galtare was purchased in 2003 for a goshala. In 2010 young men moved from Mumbai to scale the farm into a named ecovillage: green buildings, biogas, rural development, Ayurveda, a gurukula, later a temple. Indian charitable/religious trust holding, not a members’ housing co-op. Guests book. Disciples and staff live in. You do not buy a Palghar lot.",
  legalCategory: "Religious society",
  stillActive: true,
  images: [
   "/communities/govardhan-land.jpg",
   "/communities/govardhan-1.jpg",
   "/communities/govardhan-2.jpg",
   "/communities/govardhan-3.jpg",
  ],
  summary:
   "In the Sahyadri foothills two hours from Mumbai, an ISKCON ashram grew from a 25-acre goshala in 2003 into a named ecovillage: cows, organic fields, Ayurveda, a gurukula, a temple. Radhanath Swami’s farm. Book a stay. You do not join a co-op.",
  businessModel:
   "Guest stays, Ayurveda, courses (Govardhan School of Consciousness), rural-development programmes, donations, farm and goshala. ecovillage.org.in and iskcongev.com. Awards in green building and responsible tourism. A religious charity, not a housing market.",
  foundingProcess:
   "2003: 25 acres and a small goshala. 2006: gurukula students from Chowpatty. 2009: green buildings and biogas. 2010: Radhanath Swami sends fifteen brahmacharis; Govardhan Rural Development launches; the place takes the ecovillage name. Temple consecrated 2019. Ponds excavated 2022 and 2024 at published crore-scale cost.",
  governance:
   "ISKCON Chowpatty / temple authorities and ashram management. A guest of a weekend does not sit that. Confirm who currently holds rural-development and temple offices before you treat a 2010 move as the 2026 org chart.",
  website: "https://www.ecovillage.org.in/",
  timeline: [
   { year: "2003", event: "25 acres purchased at Galtare. Goshala of 6 cows and 4 bulls." },
   { year: "2010", event: "Brahmacharis move from Chowpatty. Village named. Rural development begins." },
   { year: "2019", event: "Sri Sri Radha Madanmohan Temple inaugurated." },
   { year: "Present", event: "Ashram, gurukula, Ayurveda, goshala, guest campus on a much larger published acreage." },
  ],
 },
 {
  slug: "cambium",
  name: "Cambium · Leben in Gemeinschaft",
  location: "Kasernenstraße 2, 8350 Fehring, Styria (former Hadik barracks)",
  region: "Styria, Austria",
  country: "Austria",
  foundedYear: 2014,
  foundedLabel: "2014 (Verein); barracks rented 2017; bought May 2019 through a Vermögenspool",
  members: 75,
  membersLabel: "About 50 adults and 25 children in published 2017–23 figures; the aim is a village of about 100",
  acres: 39,
  acresLabel: "Former Hadik base: about 9.8 acres building land, 5.1 developed, 24.4 training ground, plus farmland named around 20 ha in some reports",
  legalStructure:
   "Leben in Gemeinschaft — Verein zur Förderung eines generationsübergreifenden solidarischen Zusammenlebens, founded 2014 (Andreas Schindler first Obmann). In 2017 the group rented the former Hadik barracks at Fehring, a 1960s military site later used as a refugee camp. In May 2019 they bought it through a Vermögenspool (direct-credit / asset pool) of more than 250 investors. Organic farming, kitchen and catering, an academy, co-working. You write mitmachen@cambium.at. You do not buy a Fehring condominium of the barracks.",
  legalCategory: "Membership association",
  stillActive: true,
  images: [
   "/communities/cambium-land.jpg",
   "/communities/cambium-1.jpg",
   "/communities/cambium-2.jpg",
   "/communities/cambium-3.jpg",
  ],
  summary:
   "A 1960s barracks at Fehring is being turned into Austria’s first large ecovillage: about seventy-five people, a Vermögenspool of 250 investors, organic fields where drill grounds were. They rented in 2017. They bought in 2019.",
  businessModel:
   "Member life, organic farm, kitchen/catering, academy, co-working, and the Vermögenspool that bought the site. pool@cambium.at for the investment door. Not a lot sale.",
  foundingProcess:
   "Verein 2014. Search for land. Hadik Kaserne rented 2017. Direct-credit campaign; purchase May 2019. Slow conversion of military rooms into dwellings, studios, a seminar house. HOUSEFUL and other EU circular-building demos have used the community centre as a living lab.",
  governance:
   "Registered association plus the pool that holds the purchase. Residents and investors are not the same list. A seminar weekend is not membership.",
  website: "https://www.cambium.at/",
  timeline: [
   { year: "2014", event: "Verein Leben in Gemeinschaft founded. Andreas Schindler first chair." },
   { year: "2017", event: "Group rents the former Hadik barracks at Fehring." },
   { year: "2019", event: "May: purchase through a Vermögenspool of 250+ investors." },
   { year: "Present", event: "About 50 adults and 25 children. Aim of ~100. Farm, kitchen, academy." },
  ],
 },
 {
  slug: "arterra",
  name: "Arterra Bizimodu",
  location: "C/ Abajo 1, Artieda, Navarra",
  region: "Navarra, Spain",
  country: "Spain",
  foundedYear: 2014,
  foundedLabel: "2014 (spring; group from 2013; former boarding school / rural hotel in Artieda)",
  members: 45,
  membersLabel: "Around 40–50 people, including seasonal ESC volunteers; numbers fluctuate",
  acres: null,
  acresLabel: "A large former boarding-school / rural-hotel complex in the village of Artieda (buildings from a 1930 religious school on older fabric, including a station). Not a mapped hectare farm this atlas would treat as cadastral",
  legalStructure:
   "Asociación Arterra Bizimodu, a Spanish cultural association, with a cooperative capital layer for people who integrate. Sociocracy: circles, consent, roles. About twenty people decided in 2013 to take a former rural hotel in Artieda; by 2014 nearly fifty were living in the building. Monthly contribution, about 30 hours a month of community work, then an integration fee and cooperative capital. European Solidarity Corps placements. Open-door weekends. You write. You do not buy an Artieda freehold of the house.",
  legalCategory: "Cultural association",
  stillActive: true,
  images: [
   "/communities/arterra-land.jpg",
   "/communities/arterra-1.jpg",
   "/communities/arterra-2.jpg",
   "/communities/arterra-3.jpg",
  ],
  summary:
   "In a former boarding school in Artieda, about forty people run a Navarrese ecovillage by sociocracy: association plus cooperative capital, auzolan, conservas, ESC volunteers. Bizimodu is Basque for a way of life. Open-door days. Write first.",
  businessModel:
   "Resident contributions, cooperative capital, conservas (Gukalde), courses, ESC, open-door fees. arterrabizimodu.org. The house is the village; it is not a lot map of the Pyrenean foothills.",
  foundingProcess:
   "A group of about twenty took the old boarding school / hotel in 2013–14. The building had been a 1930 religious school on older fabric, including a station. Nearly fifty people moved in. Sociocracy from the start. Conservas Gukalde later set a workshop in the house. Youth ESC projects followed.",
  governance:
   "Sociocratic circles and consent. Association for the civil face, cooperative capital for those who integrate. An ESC volunteer of eight months does not sit the membership circle.",
  website: "https://arterrabizimodu.org/",
  timeline: [
   { year: "2013", event: "About 20 people decide to create a community in the Artieda house." },
   { year: "2014", event: "Spring: living together begins. Nearly 50 people in the building." },
   { year: "Present", event: "Sociocracy, association plus cooperative capital, ESC, open-door weekends. About 40–50 people." },
  ],
 },
];
