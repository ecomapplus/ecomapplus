import type { Community } from "./communities";

/** Ten living farms with bookable stays, oldest founding first: a Hampshire Georgian house with a biodynamic Home Farm, an Alentejo monte still in the same family, a Wyoming cattle ranch with a greenhouse, a Queensland cattle station, a Ceylon tea-bungalow circuit, a Mendoza vineyard lodge, a Litchfield Hills cottage farm, a Hawke's Bay sheep station, a Marrakech farm hotel, and a Pérez Zeledón coffee hacienda. */
export const livingBatch28Communities: Community[] = [
  {
    slug: "heckfield-place",
    name: "Heckfield Place",
    location: "Heckfield Place, Heckfield, Hook RG27 0LD, United Kingdom",
    region: "Hampshire, UK",
    country: "United Kingdom",
    foundedYear: 1763,
    foundedLabel: "Georgian house 1763–66 Hotel from September 2018. Organic Home Farm and biodynamic Market Garden",
    members: 80,
    membersLabel: "About 38 rooms, 6 suites, and a cottage. Staff headcount not isolated",
    acres: 438,
    acresLabel: "438 acres. Organic Home Farm, biodynamic Market Garden, orchard, and dairy",
    legalStructure:
      "Private farm-estate hotel. You book a room. You do not buy Heckfield.",
    legalCategory: "Biodynamic farm hotel",
    stillActive: true,
    images: [
      "/communities/heckfield-place-land.jpg",
      "/communities/heckfield-place-1.jpg",
      "/communities/heckfield-place-2.jpg",
      "/communities/heckfield-place-3.jpg",
    ],
    summary:
      "A Georgian house on a working Hampshire estate. Organic Home Farm, biodynamic Market Garden, Guernsey dairy, pigs, sheep, and an orchard. Marle and Hearth cook from the rows. You book a room. You do not buy the parish.",
    businessModel:
      "Rooms, farm restaurants, and spa. +44 (0) 118 932 6868.",
    foundingProcess:
      "The house was built 1763–66. The public stay door opened in 2018. Home Farm feeds the kitchens.",
    governance:
      "The estate hotel.",
    website: "https://www.heckfieldplace.com/",
    timeline: [
      { year: "1763–66", event: "Georgian house" },
      { year: "2018", event: "Hotel opening." },
      { year: "Present", event: "Home Farm and rooms." },
    ],
  },
  {
    slug: "barrocal",
    name: "São Lourenço do Barrocal",
    location: "São Lourenço do Barrocal, 7200-177 Monsaraz, Portugal",
    region: "Alentejo, Portugal",
    country: "Portugal",
    foundedYear: 1820,
    foundedLabel: "Family farming village from 1820. Hotel restoration by eighth-generation José António Uva, opened 2016",
    members: 50,
    membersLabel: "Guest rooms and cottages in the restored monte. Staff headcount not isolated",
    acres: 2000,
    acresLabel: "About 2,000 acres / 780 hectares. Organic farm, vines, olives, fruit, and horses",
    legalStructure:
      "Private working-farm hotel. You book a cottage. You do not buy Monsaraz.",
    legalCategory: "Working farm hotel",
    stillActive: true,
    images: [
      "/communities/barrocal-land.jpg",
      "/communities/barrocal-1.jpg",
      "/communities/barrocal-2.jpg",
      "/communities/barrocal-3.jpg",
    ],
    summary:
      "A 200-year Alentejo monte that still farms. Olive groves, vines, kitchen gardens, and horses. Rooms and cottages in the old village. You book a cottage. You do not buy the estate.",
    businessModel:
      "Rooms, cottages, farm restaurants, winery, and spa. +351 266 247 140. An Évora drive is not a closing.",
    foundingProcess:
      "The Uva family has held the monte more than two centuries. José António Uva opened the hotel in 2016. The public stay door is reservations.",
    governance:
      "The family estate. A cottage night is not Monsaraz.",
    website: "https://barrocal.pt/",
    timeline: [
      { year: "1820", event: "Farming village." },
      { year: "2016", event: "Hotel opening." },
      { year: "Present", event: "Organic farm and cottages. A night, not Monsaraz." },
    ],
  },
  {
    slug: "brush-creek-ranch",
    name: "Brush Creek Ranch",
    location: "66 Brush Creek Ranch Road, Saratoga, WY 82331",
    region: "Wyoming, USA",
    country: "United States",
    foundedYear: 1884,
    foundedLabel: "Homestead 1884 of White Lodging. Bruce and Beth White purchase 2008. Lodge & Spa opened 2011 of White Lodging. 30,000-acre working cattle ranch",
    members: 155,
    membersLabel: "Up to 155 guests, 72 bedrooms at the Lodge. Staff headcount not isolated",
    acres: 30000,
    acresLabel: "30,000 acres. Cattle, 20,000-square-foot greenhouse, creamery, and Wagyu",
    legalStructure:
      "Private working-ranch resort. You book a cabin. You do not buy Saratoga.",
    legalCategory: "Working ranch resort",
    stillActive: true,
    images: [
      "/communities/brush-creek-ranch-land.jpg",
      "/communities/brush-creek-ranch-1.jpg",
      "/communities/brush-creek-ranch-2.jpg",
      "/communities/brush-creek-ranch-3.jpg",
    ],
    summary:
      "A Saratoga cattle ranch with a greenhouse kitchen. 30,000 acres. Wagyu, Medicine Bow Creamery, and a 20,000-square-foot greenhouse. Lodge cabins, Magee Homestead, and glamping. You book a cabin. You do not buy the Platte.",
    businessModel:
      "All-inclusive ranch stays. (307) 327-5284. A Laramie drive is not a closing.",
    foundingProcess:
      "The homestead dates to 1884 of White Lodging. The Whites opened the Lodge in 2011. The public stay door is brushcreekranch.com/lodge-and-spa.",
    governance:
      "The ranch. A cabin night is not the deed.",
    website: "https://www.brushcreekranch.com/",
    timeline: [
      { year: "1884", event: "Homestead of White Lodging." },
      { year: "2008", event: "White purchase." },
      { year: "2011", event: "Lodge opening of White Lodging." },
      { year: "Present", event: "Cattle, greenhouse, and cabins. A night, not Saratoga." },
    ],
  },
  {
    slug: "hidden-vale",
    name: "Spicers Hidden Vale",
    location: "617 Grandchester Mount Mort Road, Grandchester QLD 4340",
    region: "Queensland, Australia",
    country: "Australia",
    foundedYear: 1894,
    foundedLabel: "Farmhouse 1894 of Travel Weekly. Spicers cattle-station retreat of Graham and Jude Turner. Homestead rebuilt 2020 after the 2018 fire of SMH. 12,000-acre working cattle farm",
    members: 40,
    membersLabel: "Queenslander cottages and cabins of worldsapart.club / petitpasseport. Staff headcount not isolated",
    acres: 12000,
    acresLabel: "12,000 acres. Working cattle, market garden, and chicken coop of petitpasseport",
    legalStructure:
      "Private cattle-station retreat of worldsapart.club. You book a cottage. You do not buy Grandchester.",
    legalCategory: "Cattle station retreat",
    stillActive: true,
    images: [
      "/communities/hidden-vale-land.jpg",
      "/communities/hidden-vale-1.jpg",
      "/communities/hidden-vale-2.jpg",
      "/communities/hidden-vale-3.jpg",
    ],
    summary:
      "A Lockyer Valley cattle station with a market garden. 12,000 acres. Cottages named for cattle breeds, Homage restaurant, and a chicken coop of petitpasseport. You book a cottage. You do not buy the vale.",
    businessModel:
      "Cottages, cabins, and farm kitchen of worldsapart.club/spicers/hidden-vale. 1300 179 413. A Brisbane drive is not a closing.",
    foundingProcess:
      "An 1894 farmhouse of Travel Weekly. Spicers rebuilt the homestead in 2020 of SMH. The public stay door is worldsapart.club/spicers/hidden-vale.",
    governance:
      "Spicers / Worlds Apart. A cottage night is not Grandchester.",
    website: "https://www.worldsapart.club/spicers/hidden-vale",
    timeline: [
      { year: "1894", event: "Farmhouse of Travel Weekly." },
      { year: "2018", event: "Fire of SMH." },
      { year: "2020", event: "Homestead rebuild of SMH." },
      { year: "Present", event: "Cattle, garden, and cottages. A night, not Grandchester." },
    ],
  },
  {
    slug: "tea-trails",
    name: "Ceylon Tea Trails",
    location: "Dunkeld Estate, Hatton, Central Province, Sri Lanka",
    region: "Central Highlands, Sri Lanka",
    country: "Sri Lanka",
    foundedYear: 2005,
    foundedLabel: "World's first tea-bungalow resort, 2005. Five planters' bungalows on working Dilmah tea estates",
    members: 60,
    membersLabel: "27 rooms in five bungalows. Staff headcount not isolated",
    acres: null,
    acresLabel: "Three working tea estates around Castlereagh Lake. Estate acreage not isolated here. Each bungalow has about six acres of garden",
    legalStructure:
      "Private tea-estate bungalows.",
    legalCategory: "Tea estate bungalows",
    stillActive: true,
    images: [
      "/communities/tea-trails-land.jpg",
      "/communities/tea-trails-1.jpg",
      "/communities/tea-trails-2.jpg",
      "/communities/tea-trails-3.jpg",
    ],
    summary:
      "Five planters' bungalows on living Dilmah tea. Castlereagh, Summerville, Dunkeld, Norwood, and Tientsin. Fernando family.",
    businessModel:
      "All-inclusive bungalow rooms.",
    foundingProcess:
      "Resplendent Ceylon opened the circuit in 2005. The public stay door is resplendentceylon.com/resort/ceylon-tea-trails.",
    governance:
      "Dilmah / Resplendent Ceylon.",
    website: "https://www.resplendentceylon.com/resort/ceylon-tea-trails/",
    timeline: [
      { year: "2005", event: "Tea-bungalow resort." },
      { year: "Present", event: "Five bungalows on working tea." },
    ],
  },
  {
    slug: "awasi-mendoza",
    name: "Awasi Mendoza",
    location: "Calle Costa Flores, Alto Agrelo, Luján de Cuyo, Mendoza 5507, Argentina",
    region: "Mendoza, Argentina",
    country: "Argentina",
    foundedYear: 2005,
    foundedLabel: "Opened 2005 as Cavas Wine Lodge. Awasi from 2025. 55-acre vineyard and vegetable garden",
    members: 40,
    membersLabel: "17 private villas. Staff headcount not isolated",
    acres: 55,
    acresLabel: "55-acre vineyard. Vegetable garden and estate wine",
    legalStructure:
      "Private vineyard lodge. You book a villa.",
    legalCategory: "Vineyard lodge",
    stillActive: true,
    images: [
      "/communities/awasi-mendoza-land.jpg",
      "/communities/awasi-mendoza-1.jpg",
      "/communities/awasi-mendoza-2.jpg",
      "/communities/awasi-mendoza-3.jpg",
    ],
    summary:
      "Luján de Cuyo vineyard lodge in Alto Agrelo, under the Andes. Seventeen villas in the Malbec rows, with a kitchen garden and estate wine on 55 acres. Cecilia Díaz Chuit and Martín Rigal opened it in 2005 as Cavas Wine Lodge; Awasi took the name in 2025. You book a villa.",
    businessModel:
      "Villas and farm-to-table. +(54-9) 2615-335203.",
    foundingProcess:
      "Cecilia Díaz Chuit and Martín Rigal opened Cavas Wine Lodge in 2005. Awasi holds it from 2025.",
    governance:
      "Awasi.",
    website: "https://awasi.com/mendoza/",
    timeline: [
      { year: "2005", event: "Cavas Wine Lodge." },
      { year: "2025", event: "Awasi." },
      { year: "Present", event: "Vineyard, garden, and villas." },
    ],
  },
  {
    slug: "winvian-farm",
    name: "Winvian Farm",
    location: "155 Alain White Road, Morris, CT 06763",
    region: "Connecticut, USA",
    country: "United States",
    foundedYear: 2006,
    foundedLabel: "Opened December 2006. Maggie Smith and Heather Smith Winkelmann. 113 acres with a three-acre organic farm and four greenhouses",
    members: 40,
    membersLabel: "18 cottages plus a master suite. Staff headcount not isolated",
    acres: 113,
    acresLabel: "113 acres. Three-acre organic farm and four greenhouses",
    legalStructure:
      "Private Relais & Châteaux farm hotel. You book a cottage. You do not buy Morris.",
    legalCategory: "Farm cottage hotel",
    stillActive: true,
    images: [
      "/communities/winvian-farm-land.jpg",
      "/communities/winvian-farm-1.jpg",
      "/communities/winvian-farm-2.jpg",
      "/communities/winvian-farm-3.jpg",
    ],
    summary:
      "Eighteen architect cottages on a Litchfield Hills farm. Three organic acres and four greenhouses feed the kitchen. Relais & Châteaux. You book a cottage. You do not buy Alain White Road.",
    businessModel:
      "Cottages and seed-to-table dining. (860) 567-9600.",
    foundingProcess:
      "The Smith family opened the cottages in 2006.",
    governance:
      "The farm.",
    website: "https://www.winvian.com/",
    timeline: [
      { year: "2006", event: "Cottage hotel." },
      { year: "Present", event: "Organic farm and cottages." },
    ],
  },
  {
    slug: "cape-kidnappers",
    name: "The Farm at Cape Kidnappers",
    location: "446 Clifton Road, Te Awanga, Hawke's Bay 4180, New Zealand",
    region: "Hawke's Bay, New Zealand",
    country: "New Zealand",
    foundedYear: 2007,
    foundedLabel: "Lodge opening 2007. 6,000-acre working sheep and beef station. Rosewood from December 2023",
    members: 50,
    membersLabel: "About 22 suites and a villa. Staff headcount not isolated",
    acres: 6000,
    acresLabel: "6,000-acre working sheep and cattle station",
    legalStructure:
      "Private sheep-station lodge. You book a suite. You do not buy Te Awanga.",
    legalCategory: "Sheep station lodge",
    stillActive: true,
    images: [
      "/communities/cape-kidnappers-land.jpg",
      "/communities/cape-kidnappers-1.jpg",
      "/communities/cape-kidnappers-2.jpg",
      "/communities/cape-kidnappers-3.jpg",
    ],
    summary:
      "A Hawke's Bay lodge on a working sheep and beef station. 6,000 acres. Shepherding with farm dogs. Suites over the Pacific. You book a suite. You do not buy the cliffs.",
    businessModel:
      "Suites, farm kitchen, and golf. +64 6 875 1900.",
    foundingProcess:
      "Julian and Josie Robertson opened the lodge in 2007. Rosewood holds the public stay door from 2023.",
    governance:
      "Rosewood.",
    website: "https://www.rosewoodhotels.com/en/cape-kidnappers",
    timeline: [
      { year: "2007", event: "Lodge opening." },
      { year: "2023", event: "Rosewood." },
      { year: "Present", event: "Sheep station and suites." },
    ],
  },
  {
    slug: "fellah-hotel",
    name: "Fellah Hotel",
    location: "Km 13, Route de l'Ourika, Canal Zarraba, 40000 Marrakech, Morocco",
    region: "Marrakech, Morocco",
    country: "Morocco",
    foundedYear: 2011,
    foundedLabel: "Farm-and-art hotel on the Ourika road. Villas in a 6-hectare park. Small working farm",
    members: 50,
    membersLabel: "About 10 villas in a 6-hectare park. Staff headcount not isolated",
    acres: 14,
    acresLabel: "About 14 acres / 6 hectares. Kitchen garden and small working farm",
    legalStructure:
      "Private farm hotel.",
    legalCategory: "Farm hotel",
    stillActive: true,
    images: [
      "/communities/fellah-hotel-land.jpg",
      "/communities/fellah-hotel-1.jpg",
      "/communities/fellah-hotel-2.jpg",
      "/communities/fellah-hotel-3.jpg",
    ],
    summary:
      "A Marrakech farm hotel at the foot of the Atlas. Villas in a 6-hectare park. Kitchen garden, goats, hens, and a donkey.",
    businessModel:
      "Villa rooms, garden kitchen, and spa. +212 5243-84300.",
    foundingProcess:
      "A farm-and-art hotel.",
    governance:
      "The hotel.",
    website: "https://www.fellah-hotel.com/",
    timeline: [
      { year: "2011", event: "Farm hotel." },
      { year: "Present", event: "Garden, farm, and villas." },
    ],
  },
  {
    slug: "hacienda-altagracia",
    name: "Hacienda AltaGracia",
    location: "Santa Teresa, Cajón, Pérez Zeledón, Costa Rica",
    region: "Pérez Zeledón, Costa Rica",
    country: "Costa Rica",
    foundedYear: 2021,
    foundedLabel: "Auberge opening November 2021. Formerly a family coffee farm. 180 acres of coffee, equine stables, and organic chef's gardens",
    members: 80,
    membersLabel: "50 casitas. Staff headcount not isolated",
    acres: 180,
    acresLabel: "180 acres. Coffee farm, vegetable gardens, rainforest, and about 40 horses",
    legalStructure:
      "Private coffee-farm resort.",
    legalCategory: "Coffee farm resort",
    stillActive: true,
    images: [
      "/communities/hacienda-altagracia-land.jpg",
      "/communities/hacienda-altagracia-1.jpg",
      "/communities/hacienda-altagracia-2.jpg",
      "/communities/hacienda-altagracia-3.jpg",
    ],
    summary:
      "A Pérez Zeledón coffee farm in the Talamancas. 180 acres. Casitas, chef's gardens, and horses.",
    businessModel:
      "Casitas, farm kitchen, and riding. (855) 812-2212.",
    foundingProcess:
      "Auberge opened the hacienda in November 2021.",
    governance:
      "Auberge Resorts.",
    website: "https://auberge.com/altagracia/",
    timeline: [
      { year: "2021", event: "Auberge opening, November 2021." },
      { year: "Present", event: "Coffee, gardens, horses, and casitas." },
    ],
  },
];
