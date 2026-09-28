import type { Community } from "./communities";

/** Ten living farms with a bookable yurt, geodesic dome, or tipi — not a cabin as the public stay — oldest founding first: a Mendocino organic farm of geodesic river-domes, an Ohio bison ranch of a 22-foot tipi, a Finger Lakes cider farm of creek yurts, a Mount Hood garden of eight yurts, an Adirondack sheep dairy of a 30-foot pasture yurt, a Gallatin permaculture farm of Nordic tipis, a San Marcos Hill Country farm of three geodesic domes, a Niagara alpaca farm of Mongolian yurts, a North Georgia regenerative farm of one luxury yurt, and a Catskills blueberry farm of four geodesic domes. */
export const livingBatch30Communities: Community[] = [
  {
    slug: "oz-farm",
    name: "Oz Farm",
    location: "Point Arena, Mendocino County, California (Garcia River; (707) 882-3046)",
    region: "California, USA",
    country: "United States",
    foundedYear: 1971,
    foundedLabel: "Village Oz commune early 1970s (Lawrence “Redwood” Kroll). CCOF organic apples and pears since 1990. Cooperative purchase 2015",
    members: 20,
    membersLabel: "A farm-and-retreat crew on 240 acres. Headcount not isolated",
    acres: 240,
    acresLabel: "About 240 acres on the Garcia River. Certified organic apples, pears, and vegetables. Geodesic double-dome over the river",
    legalStructure:
      "Private organic farm and retreat.",
    legalCategory: "Organic farm retreat",
    stillActive: true,
    images: [
      "/communities/oz-farm-land.jpg",
      "/communities/oz-farm-1.jpg",
      "/communities/oz-farm-2.jpg",
      "/communities/oz-farm-3.jpg",
    ],
    summary:
      "A Garcia River organic farm that began as Village Oz. Geodesic double-dome over the south bank, reached by a seasonal footbridge. Yurts. CCOF apples and pears since 1990.",
    businessModel:
      "CSA, farmer’s-market produce, retreats, weddings, and dome nights. (707) 882-3046.",
    foundingProcess:
      "Village Oz in the early 1970s. Organic certification 1990. A cooperative bought the acres in 2015.",
    governance:
      "The farm.",
    website: "https://www.ozfarm.com/",
    timeline: [
      { year: "1971", event: "Village Oz commune (early 1970s)." },
      { year: "1990", event: "CCOF organic apples and pears." },
      { year: "2015", event: "Cooperative purchase." },
      { year: "Present", event: "Geodesic Domes June–October." },
    ],
  },
  {
    slug: "cherokee-valley-bison",
    name: "Cherokee Valley Bison Ranch",
    location: "Lonesome Road, Thornville, OH 43076",
    region: "Ohio, USA",
    country: "United States",
    foundedYear: 1975,
    foundedLabel: "Family farm more than fifty years. 22-foot tipi",
    members: 8,
    membersLabel: "A family bison ranch with a tipi stay. Headcount not isolated",
    acres: null,
    acresLabel: "Acreage not isolated here. Working bison pastures. A 22-foot tipi",
    legalStructure:
      "Private family bison ranch. You book the tipi. You do not buy Thornville.",
    legalCategory: "Family bison ranch",
    stillActive: true,
    images: [
      "/communities/cherokee-valley-bison-land.jpg",
      "/communities/cherokee-valley-bison-1.jpg",
      "/communities/cherokee-valley-bison-2.jpg",
      "/communities/cherokee-valley-bison-3.jpg",
    ],
    summary:
      "A Thornville bison ranch east of Columbus. A 22-foot tipi beside the pastures. Queen platform bed. Bison graze next door. You book a tipi. You do not buy Lonesome Road.",
    businessModel:
      "Bison and a tipi night. (740) 403-3763. A Buckeye Lake drive is not a closing.",
    foundingProcess:
      "Family land more than fifty years. The public stay door is the 22-foot tipi.",
    governance:
      "The family ranch. A tipi night is not Perry County.",
    website: "https://www.cherokeevalleybisonranch.com/",
    timeline: [
      { year: "1975", event: "Family farm more than fifty years." },
      { year: "Present", event: "22-foot tipi. A night, not Thornville." },
    ],
  },
  {
    slug: "good-life-farm",
    name: "Good Life Farm",
    location: "4017 Hickok Road, Interlaken, NY 14847",
    region: "New York, USA",
    country: "United States",
    foundedYear: 2008,
    foundedLabel: "Certified organic 69-acre farm established 2008 by Garrett Miller. Finger Lakes Cider House on the same dirt",
    members: 12,
    membersLabel: "A cider-house crew on Good Life Farm. Headcount not isolated",
    acres: 70,
    acresLabel: "70 acres of organic regenerative farmland strawberry patches, peach and apple orchards, pasture with turkey, chicken, pigs, sheep, and white Angus",
    legalStructure:
      "Private organic farm and cider house.",
    legalCategory: "Organic cider farm",
    stillActive: true,
    images: [
      "/communities/good-life-farm-land.jpg",
      "/communities/good-life-farm-1.jpg",
      "/communities/good-life-farm-2.jpg",
      "/communities/good-life-farm-3.jpg",
    ],
    summary:
      "A Cayuga Lake organic farm with a cider house. Walnut Grove and Maple Grove yurts, hand-built by the crew, creekside. Apples, strawberries, and grass-fed stock.",
    businessModel:
      "Cider, farm food, u-pick, and yurt nights. (607) 351-3313.",
    foundingProcess:
      "Garrett Miller established Good Life Farm in 2008. The Cider House is the public tasting door. The yurts are the overnight door.",
    governance:
      "The farm.",
    website: "https://www.fingerlakesciderhouse.com/",
    timeline: [
      { year: "2008", event: "Good Life Farm." },
      { year: "2025", event: "Maple Grove Yurt finished, May — all-season creekside cabin in the farm’s maple grove." },
      { year: "Present", event: "Walnut Grove and Maple Grove yurts." },
    ],
  },
  {
    slug: "zigzag-mountain-farm",
    name: "Zigzag Mountain Farm",
    location: "70803 E Mountain Drive, Rhododendron, OR 97049",
    region: "Oregon, USA",
    country: "United States",
    foundedYear: 2009,
    foundedLabel: "50 acres purchased 2009. Organic garden. Eight yurts",
    members: 8,
    membersLabel: "A Mount Hood farm with eight yurts. Headcount not isolated",
    acres: 50,
    acresLabel: "50 acres of meadows and forest, bordering national forest. One-acre-plus organic garden and a small orchard",
    legalStructure:
      "Private farm. You book a yurt. You do not buy Rhododendron.",
    legalCategory: "Organic garden farm",
    stillActive: true,
    images: [
      "/communities/zigzag-mountain-farm-land.jpg",
      "/communities/zigzag-mountain-farm-1.jpg",
      "/communities/zigzag-mountain-farm-2.jpg",
      "/communities/zigzag-mountain-farm-3.jpg",
    ],
    summary:
      "A Mount Hood meadow farm of 50 acres. Eight yurts: family yurts with a double and bunks, dorm yurts with four bunks. Organic garden. Season May 1–September 30. You book a yurt. You do not buy E Mountain Drive.",
    businessModel:
      "Yurt nights, camping, and garden produce. (503) 922-3162 / info@zigzagmountainfarm.com.",
    foundingProcess:
      "The 50 acres were bought in 2009, vacant then. The public stay door is the eight yurts.",
    governance:
      "The farm.",
    website: "https://www.zigzagmountainfarm.com/",
    timeline: [
      { year: "2009", event: "50 acres purchased." },
      { year: "Present", event: "Eight yurts May–September." },
    ],
  },
  {
    slug: "blue-pepper-farm",
    name: "Blue Pepper Farm",
    location: "91 Hazen Road, Jay, NY 12941",
    region: "New York, USA",
    country: "United States",
    foundedYear: 2011,
    foundedLabel: "Tyler and Shannon Eaton bought 46 acres in 2011. Sheep dairy est. 2012. 30-foot pasture yurt",
    members: 6,
    membersLabel: "A small sheep-dairy household. Headcount not isolated",
    acres: 156,
    acresLabel: "156-acre working sheep dairy (46 owned plus leased hay). 30-foot yurt on a 25-acre pasture with Whiteface views",
    legalStructure:
      "Private Eaton sheep dairy.",
    legalCategory: "Sheep dairy",
    stillActive: true,
    images: [
      "/communities/blue-pepper-farm-land.jpg",
      "/communities/blue-pepper-farm-1.jpg",
      "/communities/blue-pepper-farm-2.jpg",
      "/communities/blue-pepper-farm-3.jpg",
    ],
    summary:
      "A Jay sheep dairy in the Au Sable valley. A 30-foot yurt at the top of a 25-acre pasture, Whiteface in the window. Outdoor kitchen and al fresco shower. Animal Welfare Approved.",
    businessModel:
      "Sheep milk, yogurt, lamb, pork, eggs, and yurt nights. (518) 524-1482 / bluepepperfarmstay@gmail.com.",
    foundingProcess:
      "The Eatons bought in 2011. Sheep dairy from 2012. The public unique stay is the 30-foot yurt, not the farmhouse.",
    governance:
      "The family dairy.",
    website: "https://www.bluepepperfarm.com/",
    timeline: [
      { year: "2011", event: "46 acres bought." },
      { year: "2012", event: "Sheep dairy." },
      { year: "Present", event: "30-foot pasture yurt." },
    ],
  },
  {
    slug: "bodhi-farms",
    name: "Bodhi Farms",
    location: "13624 S Cottonwood Road, Bozeman, MT 59718",
    region: "Montana, USA",
    country: "United States",
    foundedYear: 2016,
    foundedLabel: "35-acre organic permaculture farm and eco-resort. About nine years. Nine Nordic tipis May–September",
    members: 15,
    membersLabel: "A Cottonwood Creek farm with Field Kitchen and nine tipis. Headcount not isolated",
    acres: 35,
    acresLabel: "35-acre organic permaculture farm, along Cottonwood Creek at the Gallatin foothills. Nine Nordic tipis in the woods",
    legalStructure:
      "Private permaculture farm. You book a Nordic tipi. You do not buy Cottonwood Road.",
    legalCategory: "Permaculture farm",
    stillActive: true,
    images: [
      "/communities/bodhi-farms-land.jpg",
      "/communities/bodhi-farms-1.jpg",
      "/communities/bodhi-farms-2.jpg",
      "/communities/bodhi-farms-3.jpg",
    ],
    summary:
      "A Cottonwood Creek permaculture farm south of Bozeman. Nine Nordic tipis along the creek, May–September. Field Kitchen wild-game table. You book a tipi. You do not buy the Gallatins.",
    businessModel:
      "Tipi nights, Field Kitchen, spa, and farm events. (406) 201-1324. A Bozeman drive is not a closing.",
    foundingProcess:
      "A 35-acre farm. The public unique stay is the nine Nordic tipis, not the year-round cabins.",
    governance:
      "The farm. A tipi night is not Gallatin Gateway.",
    website: "https://www.bodhi-farms.com/",
    timeline: [
      { year: "2016", event: "Permaculture farm and eco-resort (about nine years)." },
      { year: "Present", event: "Nine Nordic tipis May–September. A night, not Cottonwood Creek." },
    ],
  },
  {
    slug: "the-farm-texas",
    name: "The Farm Texas",
    location: "4602 South Old Bastrop Highway, San Marcos, TX 78666",
    region: "Texas, USA",
    country: "United States",
    foundedYear: 2018,
    foundedLabel: "Opened 2018. Three geodesic glamping domes on a 15-acre working farm",
    members: 8,
    membersLabel: "A Hill Country farm with three geodesic domes. Headcount not isolated",
    acres: 15,
    acresLabel: "15-acre working farm Nigerian Dwarf goats, alpacas, heritage chickens. Three insulated geodesic domes",
    legalStructure:
      "Private working farm. You book a geodesic dome. You do not buy San Marcos.",
    legalCategory: "Working farm",
    stillActive: true,
    images: [
      "/communities/the-farm-texas-land.jpg",
      "/communities/the-farm-texas-1.jpg",
      "/communities/the-farm-texas-2.jpg",
      "/communities/the-farm-texas-3.jpg",
    ],
    summary:
      "A San Marcos Hill Country farm of 15 acres. Three insulated geodesic domes, each a standalone rental with a hot tub. Goats, alpacas, and heritage chickens. You book a dome. You do not buy Old Bastrop Highway.",
    businessModel:
      "Dome nights booked direct. A 45-minute Austin drive is not a closing.",
    foundingProcess:
      "Opened 2018. The public stay door is the three geodesic domes, not a hotel block.",
    governance:
      "The farm. A dome night is not San Marcos.",
    website: "https://thefarmtexas.com/",
    timeline: [
      { year: "2018", event: "Opened." },
      { year: "Present", event: "Three geodesic domes. A night, not the highway." },
    ],
  },
  {
    slug: "riverside-oasis",
    name: "Riverside Oasis Farm",
    location: "6696 Canborough Road, West Lincoln, ON L0R 2J0",
    region: "Ontario, Canada",
    country: "Canada",
    foundedYear: 2020,
    foundedLabel: "Founded 2020 by the Carltons. Reilly family now. Three Mongolian yurts",
    members: 6,
    membersLabel: "A Niagara family farm with three yurts. Headcount not isolated",
    acres: 21,
    acresLabel: "21-acre family farm on the Welland River: alpacas, goats, sheep, chickens, pear orchard, honey, and eggs. Three Mongolian yurts",
    legalStructure:
      "Private family farm. Mongolian yurt stays.",
    legalCategory: "Family farm",
    stillActive: true,
    images: [
      "/communities/riverside-oasis-land.jpg",
      "/communities/riverside-oasis-1.jpg",
      "/communities/riverside-oasis-2.jpg",
      "/communities/riverside-oasis-3.jpg",
    ],
    summary:
      "A 21-acre Welland River farm in West Lincoln, Niagara Region. Founded 2020 by the Carltons; the Reilly family runs it now after leaving oceanside B.C. Three all-season Mongolian yurts — Kandy, Lyla, Caspian — each with a wood stove. Overnight stays include an evening farm tour with the alpacas, goats, sheep, chickens, and barn cats; kayaks and a riverside trail come with the stay. The founders wanted yurts after living and working in Kazakhstan, then bought them through Groovy Yurts, a Canadian importer of hand-crafted Mongolian frames — the first one went up in six to eight hours with no tools or nails. You book a yurt. You do not buy Canborough Road.",
    businessModel:
      "Yurt nights from about $249. Farm tour with the stay.",
    foundingProcess:
      "The Carltons founded the farm in 2020, after time in Kazakhstan. Groovy Yurts from Mongolia. The Reilly family runs it now.",
    governance:
      "The family farm.",
    website: "https://riversideoasisfarm.ca/",
    timeline: [
      { year: "2020", event: "The Carltons found Riverside Oasis Farm." },
      { year: "Present", event: "Reilly family. Three Mongolian yurts. Farm tour with the stay." },
    ],
  },
  {
    slug: "bereishis",
    name: "Bereishis The Farm",
    location: "10675 Chatsworth Highway, Ellijay, GA 30540",
    region: "Georgia, USA",
    country: "United States",
    foundedYear: 2021,
    foundedLabel: "Regenerative farm. Public yurt stay. Founding year not isolated on the stay page",
    members: 6,
    membersLabel: "A farmer-owned regenerative farm. Headcount not isolated",
    acres: null,
    acresLabel: "Acreage not isolated here. Organically grown produce and pasture-raised livestock. One luxury yurt among the trees",
    legalStructure:
      "Private regenerative farm.",
    legalCategory: "Regenerative family farm",
    stillActive: true,
    images: [
      "/communities/bereishis-land.jpg",
      "/communities/bereishis-1.jpg",
      "/communities/bereishis-2.jpg",
      "/communities/bereishis-3.jpg",
    ],
    summary:
      "An Ellijay regenerative farm. One insulated yurt among the trees, wood-fired hot tub and sauna. Produce, pasture eggs, and grain-free livestock.",
    businessModel:
      "Farm store, produce, eggs, and yurt nights. (470) 358-4075 / bereishis@hotmail.com.",
    foundingProcess:
      "A farmer-owned regenerative farm. The public unique stay is the yurt.",
    governance:
      "The farm.",
    website: "https://bereishis.us/",
    timeline: [
      { year: "2021", event: "Public regenerative farm. Confirm founding with the farm." },
      { year: "Present", event: "Yurt among the trees." },
    ],
  },
  {
    slug: "north-star-farm",
    name: "North Star Farm",
    location: "595 Franklin Heights Road, Franklin, NY 13775",
    region: "New York, USA",
    country: "United States",
    foundedYear: 2024,
    foundedLabel: "75-acre working organic blueberry farm. Four geodesic glamping domes. Public agritourism",
    members: 8,
    membersLabel: "A blueberry farm with four geodesic domes. Headcount not isolated",
    acres: 75,
    acresLabel: "75-acre working organic blueberry farm: 15 acres of blueberries, chestnut groves, grazing sheep. Four private geodesic domes",
    legalStructure:
      "Private blueberry farm. You book a geodesic dome. You do not buy Franklin.",
    legalCategory: "Organic blueberry farm",
    stillActive: true,
    images: [
      "/communities/north-star-farm-land.jpg",
      "/communities/north-star-farm-1.jpg",
      "/communities/north-star-farm-2.jpg",
      "/communities/north-star-farm-3.jpg",
    ],
    summary:
      "A western Catskills blueberry farm of 75 acres. Four geodesic domes with wood-fired hot tubs. Fifteen acres of organic blueberries; overnight guests pick free in season. Sheep graze. You book a dome. You do not buy Franklin Heights.",
    businessModel:
      "Dome nights and u-pick blueberries. info@northstarfarm.com. A Catskills drive is not a closing.",
    foundingProcess:
      "A working organic blueberry farm. The public stay door is four geodesic domes, not a hotel.",
    governance:
      "The farm. A dome night is not Franklin.",
    website: "https://www.northstarfarm.com/",
    timeline: [
      { year: "2024", event: "Public geodesic-dome stay on the 75-acre blueberry farm." },
      { year: "Present", event: "Four domes and u-pick. A night, not Franklin Heights." },
    ],
  },
];
