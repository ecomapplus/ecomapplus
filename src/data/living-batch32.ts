import type { Community } from "./communities";

/** Ten living farms with a bookable yurt, geodesic dome, or tipi — oldest founding first: a Goulburn yurt village on 500 acres, a Provençal sheep farm of six Mongolian yurts, a San Luis Valley camel dairy of a hard-sided yurt, a Shenandoah century farm of a 30-foot geodesic, a Koko Head produce farm of canvas yurts, a Niles flower-and-fiber farm of 15-foot yurts, a Tres Piedras working ranch of 18-foot tipis, a Granville 100-acre farm of luxury yurts, a Taos permaculture farm of a stay yurt, and a Waialua regenerative farm of a hand-sewn yurt. */
export const livingBatch32Communities: Community[] = [
  {
    slug: "the-yurtfarm",
    name: "The Yurtfarm",
    location: "1688 Range Road, Mummel NSW 2580 (between Goulburn and Crookwell)",
    region: "New South Wales, Australia",
    country: "Australia",
    foundedYear: 1996,
    foundedLabel: "Mike Shepherd’s Back to Basics living camps more than thirty years. First Australian yurt factory",
    members: 8,
    membersLabel: "A Mummel farm family. Headcount not isolated",
    acres: 500,
    acresLabel: "About 500 acres. Sheep, Scottish Highland cattle, horses, and chickens. Yurt village around a farm dam",
    legalStructure:
      "Private working farm.",
    legalCategory: "Working mixed farm",
    stillActive: true,
    images: [
      "/communities/the-yurtfarm-land.jpg",
      "/communities/the-yurtfarm-1.jpg",
      "/communities/the-yurtfarm-2.jpg",
      "/communities/the-yurtfarm-3.jpg",
    ],
    summary:
      "A Southern Tablelands farm between Goulburn and Crookwell. Teachers Yurt lodging and a yurt village around a farm dam. Sheep and Highland cattle.",
    businessModel:
      "Yurt nights. Hands-on farm.",
    foundingProcess:
      "Shepherd camps. The public stay door is the Hipcamp listing.",
    governance:
      "The farm.",
    website: "https://www.hipcamp.com/en-AU/land/new-south-wales-the-yurtfarm-wz6hvowq",
    timeline: [
      { year: "1996", event: "Back to Basics camps more than thirty years as of the mid-2020s." },
      { year: "Present", event: "Teachers Yurt." },
    ],
  },
  {
    slug: "verdon-yourte",
    name: "Verdon Yourte",
    location: "719 route de Vergons, 04170 Angles, Alpes-de-Haute-Provence",
    region: "Provence-Alpes-Côte d’Azur, France",
    country: "France",
    foundedYear: 2008,
    foundedLabel: "Farm camping from 2008. Six Mongolian yurts",
    members: 6,
    membersLabel: "A farm family. Headcount not isolated",
    acres: null,
    acresLabel: "Acreage not isolated here. Camping à la ferme. Sheepfolds",
    legalStructure:
      "Private farm. You book a Mongolian yurt. You do not buy Angles.",
    legalCategory: "Farm camping",
    stillActive: true,
    images: [
      "/communities/verdon-yourte-land.jpg",
      "/communities/verdon-yourte-1.jpg",
      "/communities/verdon-yourte-2.jpg",
      "/communities/verdon-yourte-3.jpg",
    ],
    summary:
      "A Chamatte-foot farm between Angles and Vergons. Six 28 m² Mongolian yurts. Online reservation. May–September. You book a yurt. You do not buy the Verdon.",
    businessModel:
      "Yurt nights. 06 73 92 67 86. A Castellane drive is not a closing.",
    foundingProcess:
      "Farm camping 2008. The public stay door is the reservation page.",
    governance:
      "The farm. A yurt night is not Angles.",
    website: "https://www.verdonyourte.com/",
    timeline: [
      { year: "2008", event: "Farm camping." },
      { year: "Present", event: "Six Mongolian yurts. A night, not Chamatte." },
    ],
  },
  {
    slug: "mudita-camel-dairy",
    name: "Mudita Camel Dairy",
    location: "Trujillo Canyon, between Capulin and La Jara, Colorado (San Luis Valley)",
    region: "Colorado, USA",
    country: "United States",
    foundedYear: 2014,
    foundedLabel: "Mudita Camel Dairy started 2014 near Moffat. 35-acre Capulin parcel 2018",
    members: 4,
    membersLabel: "Matt and Meghan Stalzer. Headcount not isolated",
    acres: 35,
    acresLabel: "35 acres. Camels and donkeys",
    legalStructure:
      "Private camel dairy.",
    legalCategory: "Camel dairy",
    stillActive: true,
    images: [
      "/communities/mudita-camel-dairy-land.jpg",
      "/communities/mudita-camel-dairy-1.jpg",
      "/communities/mudita-camel-dairy-2.jpg",
      "/communities/mudita-camel-dairy-3.jpg",
    ],
    summary:
      "A San Luis Valley camel dairy. Hard-sided yurt beside the camel paddock. Instant book. Farm tour.",
    businessModel:
      "Camel milk soap, fudge, and yurt nights.",
    foundingProcess:
      "Stalzers 2014. The public stay door is the Hipcamp listing.",
    governance:
      "The dairy.",
    website: "https://www.hipcamp.com/en-US/land/colorado-mudita-camel-s-yurt-49mxh99n",
    timeline: [
      { year: "2014", event: "Dairy near Moffat." },
      { year: "2018", event: "35 acres at Capulin." },
      { year: "Present", event: "Yurt instant book." },
    ],
  },
  {
    slug: "our-farm-strasburg",
    name: "Our Farm",
    location: "Strasburg, Shenandoah County, Virginia (northern Shenandoah Valley)",
    region: "Virginia, USA",
    country: "United States",
    foundedYear: 2018,
    foundedLabel: "Agritourism 2018. Family farmland more than a hundred years. Geodesic from 1974",
    members: 6,
    membersLabel: "A Strasburg farm family. Headcount not isolated",
    acres: 200,
    acresLabel: "Over 200 acres. Grass-fed beef, sheep, and a garden",
    legalStructure:
      "Private family farm.",
    legalCategory: "Family livestock farm",
    stillActive: true,
    images: [
      "/communities/our-farm-strasburg-land.jpg",
      "/communities/our-farm-strasburg-1.jpg",
      "/communities/our-farm-strasburg-2.jpg",
      "/communities/our-farm-strasburg-3.jpg",
    ],
    summary:
      "A 200-acre Shenandoah farm. Full-Moon 30-foot geodesic dome. Instant book. Sheep and grass-fed beef.",
    businessModel:
      "Dome nights.",
    foundingProcess:
      "Agritourism 2018.",
    governance:
      "The farm.",
    website: "https://www.hipcamp.com/en-US/land/virginia-our-farm-in-strasburg-va-ex9h819w",
    timeline: [
      { year: "2018", event: "Agritourism." },
      { year: "Present", event: "Full-Moon Dome." },
    ],
  },
  {
    slug: "sun-farm-hawaii",
    name: "Sun Farm Hawaii",
    location: "509 Pakala Street, Honolulu, HI 96825 (Hawaii Kai, base of Koko Head)",
    region: "Hawaii, USA",
    country: "United States",
    foundedYear: 2019,
    foundedLabel: "Founded 2019 by Marcos and Michele Santos. Regenerative family farm",
    members: 8,
    membersLabel: "A Hawaii Kai farm family. Headcount not isolated",
    acres: 3,
    acresLabel: "About 3 acres. Working produce farm at the base of Koko Head",
    legalStructure:
      "Private regenerative farm.",
    legalCategory: "Regenerative produce farm",
    stillActive: true,
    images: [
      "/communities/sun-farm-hawaii-land.jpg",
      "/communities/sun-farm-hawaii-1.jpg",
      "/communities/sun-farm-hawaii-2.jpg",
      "/communities/sun-farm-hawaii-3.jpg",
    ],
    summary:
      "A Koko Head produce farm. Canvas yurts. Instant book. Farm tours.",
    businessModel:
      "Tours and yurt nights. (808) 451-1403.",
    foundingProcess:
      "Santos family 2019. The public stay door is the Hipcamp listing.",
    governance:
      "The farm.",
    website: "https://sunfarmhawaii.com/",
    timeline: [
      { year: "2019", event: "Founded." },
      { year: "Present", event: "Canvas yurts." },
    ],
  },
  {
    slug: "blooming-bus-farms",
    name: "Blooming Bus Farms",
    location: "2617 S 17th Street, Niles, MI 49120",
    region: "Michigan, USA",
    country: "United States",
    foundedYear: 2021,
    foundedLabel: "Host on Hipcamp from June 2021. 15-acre regenerative micro-farm",
    members: 6,
    membersLabel: "Melissa. Headcount not isolated",
    acres: 15,
    acresLabel: "15 acres. Flowers, vegetables, fiber, alpaca, and chickens",
    legalStructure:
      "Private regenerative farm.",
    legalCategory: "Flower and fiber farm",
    stillActive: true,
    images: [
      "/communities/blooming-bus-farms-land.jpg",
      "/communities/blooming-bus-farms-1.jpg",
      "/communities/blooming-bus-farms-2.jpg",
      "/communities/blooming-bus-farms-3.jpg",
    ],
    summary:
      "A 15-acre Niles flower-and-fiber farm. 15-foot yurts. Instant book. Alpaca and chickens.",
    businessModel:
      "U-pick flowers and yurt nights. (574) 310-0170.",
    foundingProcess:
      "Melissa.",
    governance:
      "The farm.",
    website: "https://www.bloomingbusfarms.com/",
    timeline: [
      { year: "2021", event: "Hipcamp host." },
      { year: "Present", event: "15-foot yurts." },
    ],
  },
  {
    slug: "creekside-tipis",
    name: "Creekside Glamping Tipis",
    location: "21490 U.S. 64, Tres Piedras, NM 87577",
    region: "New Mexico, USA",
    country: "United States",
    foundedYear: 2021,
    foundedLabel: "Host on Hipcamp from August 2021. 70-acre working ranch",
    members: 4,
    membersLabel: "Deborah. Headcount not isolated",
    acres: 70,
    acresLabel: "70 acres. Horses and cows. Mountain stream",
    legalStructure:
      "Private working ranch.",
    legalCategory: "Working livestock ranch",
    stillActive: true,
    images: [
      "/communities/creekside-tipis-land.jpg",
      "/communities/creekside-tipis-1.jpg",
      "/communities/creekside-tipis-2.jpg",
      "/communities/creekside-tipis-3.jpg",
    ],
    summary:
      "A 70-acre ranch on U.S. 64. 18-foot tipis. Instant book. Horses and cows.",
    businessModel:
      "Tipi nights. (505) 506-4473.",
    foundingProcess:
      "Deborah.",
    governance:
      "The ranch.",
    website: "https://tipiglamping.com/",
    timeline: [
      { year: "2021", event: "Hipcamp host." },
      { year: "Present", event: "18-foot tipis." },
    ],
  },
  {
    slug: "andelyn-farm",
    name: "Andelyn Farm",
    location: "Granville, Washington County, New York",
    region: "New York, USA",
    country: "United States",
    foundedYear: 2022,
    foundedLabel: "Owner-managed 100-acre farm. Bookings for the 2023 season",
    members: 4,
    membersLabel: "Andy and Lyn. Headcount not isolated",
    acres: 100,
    acresLabel: "About 100 acres (108). Woodlands, wildflower meadows, streams, and ponds",
    legalStructure:
      "Private farm. You book a yurt.",
    legalCategory: "Rural farm stay",
    stillActive: true,
    images: [
      "/communities/andelyn-farm-land.jpg",
      "/communities/andelyn-farm-1.jpg",
      "/communities/andelyn-farm-2.jpg",
      "/communities/andelyn-farm-3.jpg",
    ],
    summary:
      "Granville farm in Washington County, New York. Andy and Lyn run about 100 acres of woodlands, wildflower meadows, streams, and ponds. Luxury yurts, two-night minimum. They opened bookings for the 2023 season. You book a yurt.",
    businessModel:
      "Yurt nights. (518) 240-4104.",
    foundingProcess:
      "Andy and Lyn. Bookings for the 2023 season.",
    governance:
      "The farm.",
    website: "https://andelynfarm.com/",
    timeline: [
      { year: "2022", event: "Farm stay." },
      { year: "Present", event: "Luxury yurts. Two-night minimum." },
    ],
  },
  {
    slug: "harmony-taos",
    name: "Harmony Taos Farm",
    location: "Taos, New Mexico (minutes from town)",
    region: "New Mexico, USA",
    country: "United States",
    foundedYear: 2016,
    foundedLabel: "Regenerative permaculture farm. Orchards, gardens, and flowers",
    members: 6,
    membersLabel: "Anastasia. Headcount not isolated",
    acres: 4,
    acresLabel: "About 4 acres. Orchards, ponderosas, vegetable gardens, and flowers",
    legalStructure:
      "Private regenerative farm.",
    legalCategory: "Permaculture farm",
    stillActive: true,
    images: [
      "/communities/harmony-taos-land.jpg",
      "/communities/harmony-taos-1.jpg",
      "/communities/harmony-taos-2.jpg",
      "/communities/harmony-taos-3.jpg",
    ],
    summary:
      "A 4-acre Taos permaculture farm. Yurt lodging. Orchards and vegetable gardens.",
    businessModel:
      "Yurt nights.",
    foundingProcess:
      "Permaculture farm.",
    governance:
      "The farm.",
    website: "https://www.harmonytaosfarm.com/",
    timeline: [
      { year: "2016", event: "Regenerative farm." },
      { year: "Present", event: "Yurt." },
    ],
  },
  {
    slug: "living-circle-farms",
    name: "Living Circle Farms",
    location: "Waialua, North Shore, Oahu, Hawaii",
    region: "Hawaii, USA",
    country: "United States",
    foundedYear: 2023,
    foundedLabel: "Host on Hipcamp from September 2023. Regenerative farm",
    members: 4,
    membersLabel: "A Waialua farm crew. Headcount not isolated",
    acres: 5,
    acresLabel: "5 acres. Bananas, papayas, lilikoi, guava, lei garden, and eggs",
    legalStructure:
      "Private regenerative farm.",
    legalCategory: "Regenerative fruit farm",
    stillActive: true,
    images: [
      "/communities/living-circle-farms-land.jpg",
      "/communities/living-circle-farms-1.jpg",
      "/communities/living-circle-farms-2.jpg",
      "/communities/living-circle-farms-3.jpg",
    ],
    summary:
      "A North Shore regenerative farm. Park Pick & Play Yurt. Instant book. Fruit and eggs.",
    businessModel:
      "Yurt nights.",
    foundingProcess:
      "Hipcamp host 2023. The public stay door is the Hipcamp yurt.",
    governance:
      "The farm.",
    website: "https://www.hipcamp.com/en-US/land/hawaii-living-circle-farms-hawaii-mxvhqmqe",
    timeline: [
      { year: "2023", event: "Hipcamp host." },
      { year: "Present", event: "Hand-sewn yurt." },
    ],
  },
];
