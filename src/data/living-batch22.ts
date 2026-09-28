import type { Community } from "./communities";

/** Ten living farms with bookable stays, oldest founding first: an Irish organic cookery school, a Devon rewilding charity with yurts, a Georgia farm inn inside a planned hamlet, an Algarve restoration farm, a Laconian olive-harvest agritourism, a Guerrero regenerative beach lodge, a Cape Dutch garden hotel, an Andalusian horse farm of nine rooms, a Toledo jungle farm lodge, and a Somerset cyder estate. */
export const livingBatch22Communities: Community[] = [
  {
    slug: "ballymaloe",
    name: "Ballymaloe Cookery School",
    location: "Kinoith, Shanagarry, Co. Cork P25 R297",
    region: "Munster, Ireland",
    country: "Ireland",
    foundedYear: 1983,
    foundedLabel: "1983 (Darina and Tim Allen). The organic farm is the campus",
    members: 20,
    membersLabel: "A cookery school on a working farm. Residential headcount not isolated",
    acres: 100,
    acresLabel: "100-acre organic farm: vegetables, fruit, meat, dairy, hens",
    legalStructure:
      "Private cookery school on the Allen farm. You book a course or a cottage. You do not buy Kinoith.",
    legalCategory: "Educational farm school",
    stillActive: true,
    images: [
      "/communities/ballymaloe-land.jpg",
      "/communities/ballymaloe-1.jpg",
      "/communities/ballymaloe-2.jpg",
      "/communities/ballymaloe-3.jpg",
    ],
    summary:
      "A Shanagarry organic farm that is also Ireland’s best-known cookery school. Founded 1983. 100 acres. Farm School courses on hens, soil, homesteading. Cottages in converted farm buildings. You book a course. You do not buy Kinoith.",
    businessModel:
      "Short courses, the 12-week certificate, and farm-school days. A Cork drive is not a closing.",
    foundingProcess:
      "Darina and Tim Allen, 1983. The farm was already the family land.",
    governance:
      "The school and the farm. A course week is not membership.",
    website: "https://www.ballymaloecookeryschool.ie/",
    timeline: [
      { year: "1983", event: "Cookery school." },
      { year: "Present", event: "100-acre organic farm. Cottages. A course, not Kinoith." },
    ],
  },
  {
    slug: "embercombe",
    name: "Embercombe",
    location: "Higher Ashton, Devon EX6 7QQ",
    region: "England, United Kingdom",
    country: "United Kingdom",
    foundedYear: 1999,
    foundedLabel: "1999 (Mac Macartney). 25th anniversary April 2024. Registered charity 1116793",
    members: 12,
    membersLabel: "Educational charity and retreat centre. Staff headcount not isolated",
    acres: 50,
    acresLabel: "50-acre rewilding site, Teign Valley edge of Dartmoor. Rewilding since 2017",
    legalStructure:
      "Registered educational charity 1116793. Courses and yurt stays.",
    legalCategory: "Educational charity",
    stillActive: true,
    images: [
      "/communities/embercombe-land.jpg",
      "/communities/embercombe-1.jpg",
      "/communities/embercombe-2.jpg",
      "/communities/embercombe-3.jpg",
    ],
    summary:
      "Mac Macartney founded Embercombe as an educational charity on about 50 Teign Valley acres. The Children’s Fire is the rule: make decisions that protect people not yet born. Yurt villages sit on land that has been rewilding since 2017. Charity 1116793. They marked 25 years in April 2024.",
    businessModel:
      "The Journey, The Catalyst, The Rewilding Training, family camp. Course fees include a yurt.",
    foundingProcess:
      "Mac Macartney founded the educational charity. Charity 1116793. Twenty-five years marked in April 2024.",
    governance:
      "Charity trustees.",
    website: "https://www.embercombe.org/",
    timeline: [
      { year: "1999", event: "Mac Macartney founds Embercombe." },
      { year: "2017", event: "Rewilding begins." },
      { year: "2024", event: "25th anniversary, April." },
      { year: "Present", event: "50 acres, yurts, trainings." },
    ],
  },
  {
    slug: "serenbe",
    name: "The Inn at Serenbe",
    location: "10950 Hutcheson Ferry Road, Chattahoochee Hills, GA 30268",
    region: "Georgia, USA",
    country: "United States",
    foundedYear: 2004,
    foundedLabel: "2004 (Steve Nygren’s Serenbe). Inn on a 36-acre farm",
    members: 40,
    membersLabel: "A hamlet with an inn and a working farm. Inn staff not isolated from residents",
    acres: 36,
    acresLabel: "36-acre inn farm, inside the larger Serenbe hamlets. Farm tours $15",
    legalStructure:
      "Private inn and planned hamlets. Rooms and events are bookings.",
    legalCategory: "Farm inn",
    stillActive: true,
    images: [
      "/communities/serenbe-land.jpg",
      "/communities/serenbe-1.jpg",
      "/communities/serenbe-2.jpg",
      "/communities/serenbe-3.jpg",
    ],
    summary:
      "Steve Nygren opened Serenbe in 2004. The Inn at Serenbe sits on a 36-acre farm in Chattahoochee Hills, inside the hamlets that grew around those fields. Rooms, cottages, bonfires, hayrides, and $15 farm tours. Serenbe’s 2,000 acres take in preserved forest, wildflower meadows, and 20 miles of trails past two waterfalls and an animal village.",
    businessModel:
      "Rooms, cottages, events, spa. Farm tours. 770.463.2610.",
    foundingProcess:
      "Steve Nygren, Serenbe, 2004. The inn is the farm door.",
    governance:
      "The inn and the hamlets.",
    website: "https://www.serenbeinn.com/",
    timeline: [
      { year: "2004", event: "Steve Nygren opens Serenbe." },
      { year: "Present", event: "Inn farm. Events. Farm tours." },
    ],
  },
  {
    slug: "vale-da-lama",
    name: "Quinta Vale da Lama",
    location: "Odiáxere, Lagos, Algarve",
    region: "Algarve, Portugal",
    country: "Portugal",
    foundedYear: 2006,
    foundedLabel: "Mid-2000s regenerative farm. Ecosystem Restoration Communities hub",
    members: 15,
    membersLabel: "A regenerative farm and training hub. Interns and campers",
    acres: 106,
    acresLabel: "43 hectares. Agroforestry, soil, water, biodiversity",
    legalStructure:
      "Private regenerative farm and training centre. You book a camp, an internship, or a volunteer Tuesday. You do not buy Odiáxere.",
    legalCategory: "Regenerative farm",
    stillActive: true,
    images: [
      "/communities/vale-da-lama-land.jpg",
      "/communities/vale-da-lama-1.jpg",
      "/communities/vale-da-lama-2.jpg",
      "/communities/vale-da-lama-3.jpg",
    ],
    summary:
      "A Lagos regenerative farm of 43 hectares. Agroforestry, ecosystem restoration camps, a six-month intern year, Tuesdays of Regen. Member of Ecosystem Restoration Communities. Casa Vale da Lama sits on the same permaculture land. You book a camp. You do not buy Odiáxere.",
    businessModel:
      "Camps, internships, open days. November 2026 regeneration month.",
    foundingProcess:
      "A Lagos farm turned restoration hub.",
    governance:
      "The farm team. A camp week is not a share.",
    website: "https://www.valedalama.net/",
    timeline: [
      { year: "2006", event: "Farm and training." },
      { year: "Present", event: "43 ha, ERC hub, 2026 camps. A camp, not Odiáxere." },
    ],
  },
  {
    slug: "eumelia",
    name: "Eumelia",
    location: "Gouves, Laconia 23055, Peloponnese",
    region: "Peloponnese, Greece",
    country: "Greece",
    foundedYear: 2008,
    foundedLabel: "Organic agritourism. Biodynamic and permaculture",
    members: 10,
    membersLabel: "A family farmstay. Eco-houses",
    acres: 50,
    acresLabel: "Olive groves, vines, gardens. Permaculture and biodynamic",
    legalStructure:
      "Private organic agritourism. You book a cottage or an olive-harvest retreat.",
    legalCategory: "Organic agritourism",
    stillActive: true,
    images: [
      "/communities/eumelia-land.jpg",
      "/communities/eumelia-1.jpg",
      "/communities/eumelia-2.jpg",
      "/communities/eumelia-3.jpg",
    ],
    summary:
      "Gouves farmstay in Laconia 23055, on the Peloponnese. A family opened the land as organic agritourism in 2008. Biodynamic and permaculture: olive groves, vines, gardens. The eco-houses run on solar, geothermal, and rainwater. Olive Harvest Retreat is the guest calendar. You book a cottage.",
    businessModel:
      "Cottages, harvest retreats, farm dinners. Reserve-online.",
    foundingProcess:
      "A Laconian family farm opened as organic agritourism in 2008.",
    governance:
      "The farm.",
    website: "https://eumelia.com/en/",
    timeline: [
      { year: "2008", event: "Agritourism." },
      { year: "Present", event: "Olive harvest, eco-houses." },
    ],
  },
  {
    slug: "playa-viva",
    name: "Playa Viva",
    location: "Juluchuca, Guerrero",
    region: "Guerrero, Mexico",
    country: "Mexico",
    foundedYear: 2009,
    foundedLabel: "2009 (David Leventhal). B Corp regenerative boutique hotel / Regenerative Travel",
    members: 40,
    membersLabel: "Hotel, farm team Gente Viva, turtle sanctuary. Staff not isolated",
    acres: 20,
    acresLabel: "20-acre permaculture farm: coconut, mango, cashew, tamarind, vegetables",
    legalStructure:
      "Private regenerative hotel. You book a treehouse or a yoga week. You do not buy Juluchuca.",
    legalCategory: "Regenerative lodge",
    stillActive: true,
    images: [
      "/communities/playa-viva-land.jpg",
      "/communities/playa-viva-1.jpg",
      "/communities/playa-viva-2.jpg",
      "/communities/playa-viva-3.jpg",
    ],
    summary:
      "A Juluchuca beach lodge with a working permaculture farm. Food as Medicine, Gente Viva farm, sea-turtle sanctuary, yoga. About 20 eco-luxury rooms. Two Michelin Keys. You book a treehouse. You do not buy Juluchuca.",
    businessModel:
      "Rooms, retreats, farm tours. A Zihuatanejo drive is not a closing.",
    foundingProcess:
      "David Leventhal, 2009.",
    governance:
      "The hotel and Gente Viva. A treehouse is not a share.",
    website: "https://www.playaviva.com/",
    timeline: [
      { year: "2009", event: "Leventhal." },
      { year: "Present", event: "20-acre farm, turtle beach, rooms. A treehouse, not Juluchuca." },
    ],
  },
  {
    slug: "babylonstoren",
    name: "Babylonstoren",
    location: "Babylonstoren Road, Simondium, Franschhoek",
    region: "Western Cape, South Africa",
    country: "South Africa",
    foundedYear: 2010,
    foundedLabel: "Cape Dutch farm from 1692. Karen Roos and Koos Bekker bought it in 2007; hotel opened 2010",
    members: 80,
    membersLabel: "Farm hotel, garden, spa, restaurants. Staff not isolated",
    acres: 494,
    acresLabel: "200-hectare working farm. Formal fruit-and-vegetable garden",
    legalStructure:
      "Private farm hotel. You book a room or a garden day.",
    legalCategory: "Farm hotel",
    stillActive: true,
    images: [
      "/communities/babylonstoren-land.jpg",
      "/communities/babylonstoren-1.jpg",
      "/communities/babylonstoren-2.jpg",
      "/communities/babylonstoren-3.jpg",
    ],
    summary:
      "A Cape Dutch farm in Simondium, from 1692. Karen Roos and Koos Bekker bought it in 2007 and opened the garden hotel in 2010: rooms, spa, restaurants, still a working farm. French garden architect Patrice Taravella laid out the formal fruit-and-vegetable garden, taking a cue from Cape Town’s Company’s Garden. You book a room.",
    businessModel:
      "Hotel, restaurants Babel and Greenhouse, farm shop, spa, wine. Garden memberships.",
    foundingProcess:
      "Cape Dutch werf from 1692. Karen Roos and Koos Bekker bought the farm in 2007; Roos commissioned Taravella that year. The hotel opened in 2010.",
    governance:
      "Karen Roos and Koos Bekker. The farm hotel.",
    website: "https://babylonstoren.com/",
    timeline: [
      { year: "1692", event: "Cape Dutch farm." },
      { year: "2007", event: "Karen Roos and Koos Bekker buy the farm. Roos commissions Patrice Taravella for the garden." },
      { year: "2010", event: "Garden hotel opens." },
      { year: "Present", event: "Working farm, garden hotel, spa, restaurants." },
    ],
  },
  {
    slug: "la-donaira",
    name: "Finca La Donaira",
    location: "Montecorto, Serranía de Ronda, Málaga",
    region: "Andalusia, Spain",
    country: "Spain",
    foundedYear: 2014,
    foundedLabel: "Eco-retreat on a working organic farm. Relais & Châteaux. Nine rooms of Forbes 2024",
    members: 25,
    membersLabel: "Farm, stud, nine-room retreat. Staff not isolated",
    acres: 1730,
    acresLabel: "700 hectares of Kiwa No / Forbes. Lusitano stud, medicinal garden of 350 species of Artful Living",
    legalStructure:
      "Private organic farm and eco-retreat. You book a room or a trail-run weekend. You do not buy Montecorto.",
    legalCategory: "Regenerative farm retreat",
    stillActive: true,
    images: [
      "/communities/la-donaira-land.jpg",
      "/communities/la-donaira-1.jpg",
      "/communities/la-donaira-2.jpg",
      "/communities/la-donaira-3.jpg",
    ],
    summary:
      "A Montecorto organic farm of about 700 hectares. ladonaira.com: nine rooms, Lusitano horses, seed-to-plate kitchen. Soil Academy workshops. EcoMaratón. You book a room. You do not buy Montecorto.",
    businessModel:
      "Nine rooms, riding, weddings, trail run. Relais & Châteaux.",
    foundingProcess:
      "A Ronda farm opened as a discreet retreat / Forbes.",
    governance:
      "The finca.",
    website: "https://www.ladonaira.com/",
    timeline: [
      { year: "2014", event: "Retreat / Forbes." },
      { year: "Present", event: "Nine rooms, Lusitanos, 700 ha. A room, not Montecorto." },
    ],
  },
  {
    slug: "copal-tree",
    name: "Copal Tree Lodge",
    location: "Big Falls Village, Toledo",
    region: "Toledo, Belize",
    country: "Belize",
    foundedYear: 2016,
    foundedLabel: "Jungle lodge on a 3,000-acre farm / Michelin Guide. Muy’Ono Resort",
    members: 50,
    membersLabel: "Lodge, farm, spa. Staff not isolated",
    acres: 3000,
    acresLabel: "3,000-acre sustainable farm, 15,000-acre rainforest preserve. Twelve to seventeen suites / visittoledobelize.com",
    legalStructure:
      "Private eco-lodge. You book a suite. You do not buy Big Falls.",
    legalCategory: "Jungle farm lodge",
    stillActive: true,
    images: [
      "/communities/copal-tree-land.jpg",
      "/communities/copal-tree-1.jpg",
      "/communities/copal-tree-2.jpg",
      "/communities/copal-tree-3.jpg",
    ],
    summary:
      "A Toledo jungle lodge on a 3,000-acre farm. copaltreelodge.com: farm-to-table, infinity pool, spa. Michelin Key. All-inclusive package. You book a suite. You do not buy Big Falls.",
    businessModel:
      "Suites and a villa. 1-877-417-9478.",
    foundingProcess:
      "A Toledo farm lodge, now Muy’Ono.",
    governance:
      "The lodge. A suite is not the farm.",
    website: "https://www.copaltreelodge.com/",
    timeline: [
      { year: "2016", event: "Lodge on the farm / Michelin." },
      { year: "Present", event: "3,000-acre farm table. A suite, not Big Falls." },
    ],
  },
  {
    slug: "the-newt",
    name: "The Newt in Somerset",
    location: "Hadspen, Bruton, Somerset BA7 7NG",
    region: "England, United Kingdom",
    country: "United Kingdom",
    foundedYear: 2019,
    foundedLabel: "2019 hotel. Hadspen estate gardens. Same Bekker family as Babylonstoren",
    members: 70,
    membersLabel: "Estate hotel, gardens, farm, cyder. Staff not isolated",
    acres: 800,
    acresLabel: "Hadspen country estate: gardens, farm-to-table, cyder. Garden membership",
    legalStructure:
      "Private estate hotel. You book a room or a garden membership. You do not buy Hadspen.",
    legalCategory: "Farm estate hotel",
    stillActive: true,
    images: [
      "/communities/the-newt-land.jpg",
      "/communities/the-newt-1.jpg",
      "/communities/the-newt-2.jpg",
      "/communities/the-newt-3.jpg",
    ],
    summary:
      "A Bruton estate of gardens, farm, and cyder. Hotel 2019. Stay a night or become a garden member. Seasonal events. You book a room. You do not buy Hadspen.",
    businessModel:
      "Hotel, garden membership, farm shop, restaurants.",
    foundingProcess:
      "Bekker family, 2019, on the Hadspen estate.",
    governance:
      "The estate. A membership is not the title.",
    website: "https://thenewtinsomerset.com/",
    timeline: [
      { year: "2019", event: "Hotel." },
      { year: "Present", event: "Gardens, farm, cyder, rooms. A room, not Hadspen." },
    ],
  },
];
