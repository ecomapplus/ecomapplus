import type { Community } from "./communities";

/** Ten living farms with bookable stays, oldest founding first: a Russian River orchard retreat, a Cambridge country-house garden hotel, a Palliser Bay sheep station, a Lipa organic spa farm, a Laikipia regenerative conservancy, a Philipsburg working ranch with glamping, a Quindío cacao-and-garden hacienda, a Minamiuonuma satoyama inn, a Pucón working-farm lodge, and a Hudson Valley regenerative farm of cabins. */
export const livingBatch26Communities: Community[] = [
  {
    slug: "dawn-ranch",
    name: "Dawn Ranch",
    location: "16467 CA-116, Guerneville, CA 95446",
    region: "California, USA",
    country: "United States",
    foundedYear: 1905,
    foundedLabel: "Early 1900s as Murphy’s Ranch. Rebranded Dawn Ranch 2005. 22 acres",
    members: 25,
    membersLabel: "A Russian River retreat. Guest and staff headcount not isolated",
    acres: 22,
    acresLabel: "22 acres of redwoods, meadows, orchard, and kitchen garden",
    legalStructure:
      "Private farm retreat. You book a cabin, chalet, or tent. You do not buy Highway 116.",
    legalCategory: "Private farm retreat",
    stillActive: true,
    images: [
      "/communities/dawn-ranch-land.jpg",
      "/communities/dawn-ranch-1.jpg",
      "/communities/dawn-ranch-2.jpg",
      "/communities/dawn-ranch-3.jpg",
    ],
    summary:
      "A Guerneville retreat on the lower Russian River. 22 acres. Century-old apple orchard, kitchen garden, cabins, chalets, and glamping tents. Chef-led farm dinners in the orchard. You book a cabin. You do not buy the river.",
    businessModel:
      "Lodging, spa, orchard dinners, and workshops. (707) 869-0656. A Golden Gate drive is not a closing.",
    foundingProcess:
      "Murphy’s Ranch opened in the early 1900s. The Dawn Ranch name is 2005. The public stay door is the cabin, chalet, or tent.",
    governance:
      "The retreat. A cabin night is not membership.",
    website: "https://dawnranch.com/",
    timeline: [
      { year: "Early 1900s", event: "Murphy’s Ranch." },
      { year: "2005", event: "Rebranded Dawn Ranch." },
      { year: "Present", event: "Cabins, orchard, and garden. A night, not Highway 116." },
    ],
  },
  {
    slug: "langdon-hall",
    name: "Langdon Hall",
    location: "1 Langdon Drive, Cambridge, ON N3H 4R8",
    region: "Ontario, Canada",
    country: "Canada",
    foundedYear: 1989,
    foundedLabel: "1989 hotel opening. Bennett and Beaton purchase 1987. Vegetable and flower gardens",
    members: 80,
    membersLabel: "A country-house hotel. Staff and guest headcount not isolated",
    acres: 75,
    acresLabel: "About 75 acres of garden, woods, and trails. Famed vegetable and flower gardens",
    legalStructure:
      "Private country-house hotel.",
    legalCategory: "Country house hotel",
    stillActive: true,
    images: [
      "/communities/langdon-hall-land.jpg",
      "/communities/langdon-hall-1.jpg",
      "/communities/langdon-hall-2.jpg",
      "/communities/langdon-hall-3.jpg",
    ],
    summary:
      "A Cambridge country house among vegetable and flower gardens. Bennett and Beaton opened the hotel in 1989. Daily garden and greenhouse tours. Kitchen from the rows.",
    businessModel:
      "Rooms, Relais & Châteaux dining, spa, and garden tours. 519.740.2100.",
    foundingProcess:
      "William Bennett and Mary Beaton bought the house in 1987 and opened the hotel in 1989.",
    governance:
      "The hotel.",
    website: "https://langdonhall.ca/",
    timeline: [
      { year: "1987", event: "Bennett and Beaton purchase." },
      { year: "1989", event: "Hotel opening." },
      { year: "Present", event: "Gardens and rooms." },
    ],
  },
  {
    slug: "wharekauhau",
    name: "Wharekauhau Country Estate",
    location: "Western Lake Road, Palliser Bay, Featherston 5773, Wairarapa",
    region: "Wairarapa, New Zealand",
    country: "New Zealand",
    foundedYear: 1997,
    foundedLabel: "Lodge of the 1990s on an 1840s sheep station. 3,000 acres. About 6,000 sheep and 300 cattle",
    members: 40,
    membersLabel: "A working sheep-station lodge. Staff and guest headcount not isolated",
    acres: 3000,
    acresLabel: "3,000 acres of pasture, native forest, and Palliser Bay coast. Originally 3,200 acres",
    legalStructure:
      "Private working sheep station and lodge. You book a cottage. You do not buy Palliser Bay.",
    legalCategory: "Working sheep station lodge",
    stillActive: true,
    images: [
      "/communities/wharekauhau-land.jpg",
      "/communities/wharekauhau-1.jpg",
      "/communities/wharekauhau-2.jpg",
      "/communities/wharekauhau-3.jpg",
    ],
    summary:
      "A Palliser Bay sheep station with a lodge on the cliffs. 3,000 acres. Romney and Texel-cross sheep, cattle, and a kitchen garden. Station tours, dogs, and shearing. You book a cottage. You do not buy the Rimutakas.",
    businessModel:
      "Lodge cottages, farm-to-table dining, and station days. A Wellington drive is not a closing.",
    foundingProcess:
      "An 1840s station. The lodge is the public door.",
    governance:
      "The estate. A cottage night is not the station.",
    website: "https://wharekauhau.co.nz/",
    timeline: [
      { year: "1840s", event: "Sheep station." },
      { year: "1990s", event: "Lodge / Relais & Châteaux." },
      { year: "Present", event: "3,000 acres and cottages. A night, not Palliser Bay." },
    ],
  },
  {
    slug: "farm-san-benito",
    name: "The Farm at San Benito",
    location: "119 Barangay Tipacan, 4217 Lipa City, Batangas",
    region: "Batangas, Philippines",
    country: "Philippines",
    foundedYear: 2002,
    foundedLabel: "2002 wellness farm. 48-hectare garden. Organic vegetable garden",
    members: 80,
    membersLabel: "A Lipa wellness farm. Staff and guest headcount not isolated",
    acres: 119,
    acresLabel: "48 hectares of lush garden. About 119 acres. 5,700-plus sq m organic vegetable garden",
    legalStructure:
      "Private organic spa farm. You book a villa. You do not buy Tipacan.",
    legalCategory: "Destination spa farm",
    stillActive: true,
    images: [
      "/communities/farm-san-benito-land.jpg",
      "/communities/farm-san-benito-1.jpg",
      "/communities/farm-san-benito-2.jpg",
      "/communities/farm-san-benito-3.jpg",
    ],
    summary:
      "A Lipa organic farm and wellness sanctuary in the Malarayat foothills. 48 hectares. Kitchen from the vegetable garden. Villas, plant-based dining, and detox programmes. You book a villa. You do not buy Barangay Tipacan.",
    businessModel:
      "Villas, spa, and farm dining. +63 917 572 2222. A Manila drive is not a closing.",
    foundingProcess:
      "Opened as a wellness farm in 2002. The public stay door is thefarmatsanbenito.com.",
    governance:
      "The farm. A villa night is not the title.",
    website: "https://www.thefarmatsanbenito.com/",
    timeline: [
      { year: "2002", event: "Wellness farm." },
      { year: "Present", event: "Organic garden and villas. A night, not Tipacan." },
    ],
  },
  {
    slug: "segera",
    name: "Segera Retreat",
    location: "Segera, Laikipia Plateau, Nanyuki, Kenya",
    region: "Laikipia, Kenya",
    country: "Kenya",
    foundedYear: 2010,
    foundedLabel: "Jochen Zeitz purchase 2005 of The Times. Lodge on a 50,000-acre regenerative ranch. Organic gardens",
    members: 60,
    membersLabel: "A Laikipia conservancy lodge. All-Kenyan staff of Travel Curator. Headcount not isolated",
    acres: 50000,
    acresLabel: "50,000-acre ranch and conservancy / Jacada Travel. Former cattle ranch of Travel Curator",
    legalStructure:
      "Private regenerative conservancy lodge. You book a villa. You do not buy Laikipia.",
    legalCategory: "Regenerative conservancy lodge",
    stillActive: true,
    images: [
      "/communities/segera-land.jpg",
      "/communities/segera-1.jpg",
      "/communities/segera-2.jpg",
      "/communities/segera-3.jpg",
    ],
    summary:
      "A Laikipia retreat in a botanical garden on a 50,000-acre regenerative ranch. Zeitz 2005 of The Times. Organic garden, waste-to-compost, and two-million-tree restoration of Journeys by Design. Villas. You book a villa. You do not buy the plateau.",
    businessModel:
      "Villas, safari, and farm-garden dining. A Nanyuki charter is not a closing.",
    foundingProcess:
      "Jochen Zeitz bought the former cattle ranch in 2005 of The Times. The public stay door is segera.com.",
    governance:
      "The retreat / Zeitz Foundation. A villa night is not the conservancy.",
    website: "https://segera.com/",
    timeline: [
      { year: "2005", event: "Zeitz purchase of The Times." },
      { year: "2010s", event: "Lodge on the restored ranch." },
      { year: "Present", event: "Gardens and villas. A night, not Laikipia." },
    ],
  },
  {
    slug: "rock-creek-ranch",
    name: "The Ranch at Rock Creek",
    location: "79 Carriage House Lane, Philipsburg, MT 59858",
    region: "Montana, USA",
    country: "United States",
    foundedYear: 2010,
    foundedLabel: "Guest ranch. 19th-century homestead. 6,600 acres",
    members: 80,
    membersLabel: "A Philipsburg working ranch. Staff and guest headcount not isolated",
    acres: 6600,
    acresLabel: "6,600 acres of ranchland. Horses, cattle, and canvas cabins",
    legalStructure:
      "Private working ranch resort.",
    legalCategory: "Working ranch resort",
    stillActive: true,
    images: [
      "/communities/rock-creek-ranch-land.jpg",
      "/communities/rock-creek-ranch-1.jpg",
      "/communities/rock-creek-ranch-2.jpg",
      "/communities/rock-creek-ranch-3.jpg",
    ],
    summary:
      "A Philipsburg working ranch in the Rock Creek valley. 6,600 acres. Lodge rooms, homes, and classic canvas cabins. All-inclusive ranch days, horses, and a kitchen that cooks from the land.",
    businessModel:
      "All-inclusive ranch lodging. (877) 786-1545.",
    foundingProcess:
      "A 19th-century homestead. The guest ranch is the public door.",
    governance:
      "The ranch.",
    website: "https://theranchatrockcreek.com/",
    timeline: [
      { year: "19th century", event: "Homestead." },
      { year: "2010s", event: "Guest ranch." },
      { year: "Present", event: "6,600 acres and canvas cabins." },
    ],
  },
  {
    slug: "hacienda-bambusa",
    name: "Hacienda Bambusa",
    location: "Vereda La Bella, Armenia, Quindío, Colombia",
    region: "Quindío, Colombia",
    country: "Colombia",
    foundedYear: 2013,
    foundedLabel: "Working-farm hacienda. Banana, cacao, coffee, citrus, pineapple, and cattle. Kitchen garden",
    members: 16,
    membersLabel: "An eight-room working farm. Staff headcount not isolated",
    acres: 250,
    acresLabel: "About 250 acres of banana, cacao, coffee, citrus, pineapple, and cattle. Tripadvisor has said 360. Confirm with the hacienda",
    legalStructure:
      "Private working-farm hacienda. You book a room. You do not buy the Quindío.",
    legalCategory: "Private working farm",
    stillActive: true,
    images: [
      "/communities/hacienda-bambusa-land.jpg",
      "/communities/hacienda-bambusa-1.jpg",
      "/communities/hacienda-bambusa-2.jpg",
      "/communities/hacienda-bambusa-3.jpg",
    ],
    summary:
      "A Quindío working farm among banana, cacao, coffee, and a kitchen garden. Eight rooms. Chef Paula Serna cooks from the garden. Cacao tour. You book a room. You do not buy La Bella.",
    businessModel:
      "Rooms, farm dinners, and cacao walks. +57 300 7788897.",
    foundingProcess:
      "A coffee-country hacienda opened as a farmstay. The public stay door is the booking line.",
    governance:
      "The hacienda.",
    website: "https://www.haciendabambusa.com/",
    timeline: [
      { year: "2010s", event: "Farmstay." },
      { year: "Present", event: "Garden kitchen and rooms." },
    ],
  },
  {
    slug: "satoyama-jujo",
    name: "Satoyama Jujo",
    location: "555 Nagatani, Minamiuonuma, Niigata 949-6361",
    region: "Niigata, Japan",
    country: "Japan",
    foundedYear: 2012,
    foundedLabel: "2012 takeover of the old inn. Organic Express 2004. Uonuma rice country of Condé Nast Traveler",
    members: 20,
    membersLabel: "A satoyama inn. About 13–17 rooms of Condé Nast Traveler / Design Hotels. Staff headcount not isolated",
    acres: null,
    acresLabel: "Satoyama rice, pasture, and woodland of Minamiuonuma. Inn acreage not isolated",
    legalStructure:
      "Private satoyama inn. You book a room. You do not buy Nagatani.",
    legalCategory: "Satoyama inn",
    stillActive: true,
    images: [
      "/communities/satoyama-jujo-land.jpg",
      "/communities/satoyama-jujo-1.jpg",
      "/communities/satoyama-jujo-2.jpg",
      "/communities/satoyama-jujo-3.jpg",
    ],
    summary:
      "A Minamiuonuma inn in satoyama rice country. 2012 takeover of the old inn. Farm-to-table Sanaburi, Uonuma Koshihikari, wild plants, and an onsen of Condé Nast Traveler / Design Hotels. You book a room. You do not buy the snow country.",
    businessModel:
      "Rooms, onsen, and organic dining. An Ōsawa station drive is not a closing.",
    foundingProcess:
      "Organic Express 2004, then the inn takeover in 2012. The public stay door is that site.",
    governance:
      "The inn. A room night is not Nagatani.",
    website: "https://en.satoyama-jujo.com/",
    timeline: [
      { year: "2004", event: "Organic Express." },
      { year: "2012", event: "Inn takeover." },
      { year: "Present", event: "Rice-country rooms. A night, not Nagatani." },
    ],
  },
  {
    slug: "vira-vira",
    name: "&Beyond Vira Vira",
    location: "Camino a Palguín, Pucón, Araucanía, Chile",
    region: "Araucanía, Chile",
    country: "Chile",
    foundedYear: 2014,
    foundedLabel: "2014. 22-hectare working farm, organic garden, and cheese dairy",
    members: 40,
    membersLabel: "A Pucón farm lodge. Staff and guest headcount not isolated",
    acres: 54,
    acresLabel: "About 22 hectares of working farm. Luxury Latin America has said 33 acres. Organic garden and cheese",
    legalStructure:
      "Private working-farm lodge. You book a suite. You do not buy Palguín.",
    legalCategory: "Working farm lodge",
    stillActive: true,
    images: [
      "/communities/vira-vira-land.jpg",
      "/communities/vira-vira-1.jpg",
      "/communities/vira-vira-2.jpg",
      "/communities/vira-vira-3.jpg",
    ],
    summary:
      "A Pucón lodge on a working farm under Villarrica. Opened 2014. Organic garden, cheese dairy, yogurt, and butter. Suites on the Liucura. You book a suite. You do not buy the volcano.",
    businessModel:
      "Lodge suites, farm kitchen, and cheese tour. A Pucón drive is not a closing.",
    foundingProcess:
      "A Swiss couple opened the farm lodge in 2014. &Beyond holds the public stay door.",
    governance:
      "The lodge. A suite night is not the farm.",
    website: "https://www.andbeyond.com/our-lodges/south-america/chile/lake-district/andbeyond-vira-vira/",
    timeline: [
      { year: "2014", event: "Farm lodge opening." },
      { year: "Present", event: "Garden, cheese, and suites. A night, not Palguín." },
    ],
  },
  {
    slug: "wildflower-farms",
    name: "Wildflower Farms",
    location: "2702 Main Street, Gardiner, NY 12525",
    region: "New York, USA",
    country: "United States",
    foundedYear: 2022,
    foundedLabel: "2022 Auberge opening. Rapoport purchase of a former tree nursery. 6-acre regenerative farm on 140 acres",
    members: 80,
    membersLabel: "A Hudson Valley farm resort. About 65 cabins. Staff headcount not isolated",
    acres: 140,
    acresLabel: "140 acres. 6-acre regenerative farm. 54 acres in conservation easement",
    legalStructure:
      "Private regenerative farm resort. You book a cabin. You do not buy Main Street.",
    legalCategory: "Regenerative farm resort",
    stillActive: true,
    images: [
      "/communities/wildflower-farms-land.jpg",
      "/communities/wildflower-farms-1.jpg",
      "/communities/wildflower-farms-2.jpg",
      "/communities/wildflower-farms-3.jpg",
    ],
    summary:
      "A Gardiner cabin resort under the Shawangunk Ridge. 140 acres. Six-acre farm feeding Clay. Cabins, meadows, and a conservation easement. You book a cabin. You do not buy the Gunks.",
    businessModel:
      "Cabins, farm dining, and spa. (855) 472-3188. A Hudson Valley drive is not a closing.",
    foundingProcess:
      "Phillip and Kristin Rapoport bought the former nursery. Auberge opened the public stay in 2022.",
    governance:
      "Auberge Resorts. A cabin night is not the farm.",
    website: "https://auberge.com/wildflower-farms/",
    timeline: [
      { year: "2022", event: "Auberge opening." },
      { year: "Present", event: "Six-acre farm and cabins. A night, not Gardiner." },
    ],
  },
];
