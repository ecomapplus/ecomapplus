import type { Community } from "./communities";

/** Ten living farms with bookable stays, oldest founding first: a Puna rainforest retreat with fruit gardens, an Anderson Valley heirloom orchard inn, a restored Cretan mountain village with an organic kitchen, a Cabo organic farm of culinary cottages, an Albuquerque lavender inn, a Roaring Fork glamping horse ranch, an Alsea sheep-farm cottage, a Drôme agroecological farm of cabins and lodges, a Hesaraghatta organic eco-resort, and a Cat Spring working-ranch B&B. */
export const livingBatch25Communities: Community[] = [
  {
    slug: "kalani",
    name: "Kalani",
    location: "12-6870 Kalapana Kapoho Road, Pāhoa, HI 96778",
    region: "Hawaii, USA",
    country: "United States",
    foundedYear: 1975,
    foundedLabel: "1975 (Richard Koob and Earnest Morgan purchase). Original 19 acres. Coastal gardens and fruit trees",
    members: 40,
    membersLabel: "A wellness and education retreat. Guest and resident headcount not isolated",
    acres: 40,
    acresLabel: "About 40 acres of oceanside forest in Puna. Older press has said 120 coastal acres",
    legalStructure:
      "Nonprofit retreat centre. You book a cottage or a workshop.",
    legalCategory: "Educational nonprofit",
    stillActive: true,
    images: [
      "/communities/kalani-land.jpg",
      "/communities/kalani-1.jpg",
      "/communities/kalani-2.jpg",
      "/communities/kalani-3.jpg",
    ],
    summary:
      "A Puna rainforest retreat on the Kalapana-Kapoho road. Koob and Morgan 1975. Tropical fruit trees, gardens, and cottages. Workshops and land stewardship. You book a cottage.",
    businessModel:
      "Lodging, meals, wellness, and courses. (808) 756-9530.",
    foundingProcess:
      "Richard Koob and Earnest Morgan bought the first 19 acres in 1975.",
    governance:
      "The retreat.",
    website: "https://kalani.com/",
    timeline: [
      { year: "1975", event: "Koob and Morgan buy the first 19 acres." },
      { year: "Present", event: "Cottages and gardens." },
    ],
  },
  {
    slug: "philo-apple-farm",
    name: "The Apple Farm",
    location: "18501 Greenwood Road, Philo, CA 95466",
    region: "California, USA",
    country: "United States",
    foundedYear: 1984,
    foundedLabel: "1984 (Tim and Karen Bates purchase). Historic 32-acre orchard. Biodynamic",
    members: 8,
    membersLabel: "A family orchard inn. Bates daughters. Headcount not isolated",
    acres: 32,
    acresLabel: "32-acre heirloom orchard. 80-plus apple varieties, quince, pears. Goats and chickens",
    legalStructure:
      "Private family orchard. You book a cottage. You do not buy Greenwood Road.",
    legalCategory: "Private family farm",
    stillActive: true,
    images: [
      "/communities/philo-apple-farm-land.jpg",
      "/communities/philo-apple-farm-1.jpg",
      "/communities/philo-apple-farm-2.jpg",
      "/communities/philo-apple-farm-3.jpg",
    ],
    summary:
      "An Anderson Valley orchard inn among 80-plus apple varieties. Bates family 1984. Cottages in the trees. Two-night minimum. Breakfast of farm juice and jam. You book a cottage. You do not buy the Navarro.",
    businessModel:
      "Farmstay cottages, farmstand cider and jam, and cooking classes. (707) 895-2333. A Golden Gate drive is not a closing.",
    foundingProcess:
      "Tim and Karen Bates bought the orchard in 1984. Sally Schmitt of the old French Laundry later lived on the farm.",
    governance:
      "The family farm. A cottage night is not the title.",
    website: "https://www.philoapplefarm.com/",
    timeline: [
      { year: "1984", event: "Bates purchase." },
      { year: "Present", event: "Cottages among the trees. A night, not Greenwood Road." },
    ],
  },
  {
    slug: "milia",
    name: "Milia Mountain Retreat",
    location: "Vlatos, Kissamos, Chania 73400, Crete",
    region: "Crete, Greece",
    country: "Greece",
    foundedYear: 1993,
    foundedLabel: "1993 (guesthouses opened). Restoration from 1982. 16th-century settlement",
    members: 16,
    membersLabel: "An eco-lodge and restaurant. Staff headcount not isolated",
    acres: null,
    acresLabel: "A restored 16th-century mountain settlement. Organic production in the farms and yards. Acreage not isolated here",
    legalStructure:
      "Private eco-lodge. You book a stone room. You do not buy Vlatos.",
    legalCategory: "Farm inn",
    stillActive: true,
    images: [
      "/communities/milia-land.jpg",
      "/communities/milia-1.jpg",
      "/communities/milia-2.jpg",
      "/communities/milia-3.jpg",
    ],
    summary:
      "A restored Cretan mountain village that is also an organic kitchen. Opened spring 1993. Stone eco-rooms. Solar, spring water, composting, no gadgets in the rooms. You book a room. You do not buy Vlatos.",
    businessModel:
      "Rooms and a farm restaurant. Reserve-online. +30 694 575 3743. A Kissamos drive is not a closing.",
    foundingProcess:
      "Restoration from 1982. Guesthouses and restaurant in spring 1993.",
    governance:
      "The lodge. A stone night is not the village title.",
    website: "https://milia.gr/",
    timeline: [
      { year: "1982", event: "Restoration of an abandoned settlement." },
      { year: "1993", event: "Guesthouses opened." },
      { year: "Present", event: "Eco-rooms and organic kitchen. A room, not Vlatos." },
    ],
  },
  {
    slug: "flora-farms",
    name: "Flora Farms",
    location: "Las Animas, San José del Cabo, Baja California Sur",
    region: "Baja California Sur, Mexico",
    country: "Mexico",
    foundedYear: 1996,
    foundedLabel: "1996 (Gloria and Patrick Greene; Modern Farmer). 25-acre organic farm",
    members: 40,
    membersLabel: "A working farm, restaurants, shoppes, and cottages. Staff headcount not isolated",
    acres: 25,
    acresLabel: "25-acre organic working farm in the Sierra de la Laguna foothills. Culinary Cottages and Haylofts",
    legalStructure:
      "Private organic farm and hospitality.",
    legalCategory: "Farm inn",
    stillActive: true,
    images: [
      "/communities/flora-farms-land.jpg",
      "/communities/flora-farms-1.jpg",
      "/communities/flora-farms-2.jpg",
      "/communities/flora-farms-3.jpg",
    ],
    summary:
      "A San José del Cabo organic farm that grew restaurants, a spa, and straw-bale cottages around the rows. Gloria and Patrick Greene, 1996. 25 acres. Cottages and Haylofts.",
    businessModel:
      "Farm-to-table, classes, spa, and overnight cottages.",
    foundingProcess:
      "Gloria and Patrick Greene, 1996. Cottages followed for guests who wanted the farm at night.",
    governance:
      "The farm.",
    website: "https://www.flora-farms.com/",
    timeline: [
      { year: "1996", event: "Gloria and Patrick Greene." },
      { year: "Present", event: "25 acres, cottages." },
    ],
  },
  {
    slug: "los-poblanos",
    name: "Los Poblanos Inn & Organic Farm",
    location: "4803 Rio Grande Boulevard NW, Los Ranchos de Albuquerque, NM 87107",
    region: "New Mexico, USA",
    country: "United States",
    foundedYear: 1999,
    foundedLabel: "1999 (Penny and Armin Rembe opened the hacienda as a B&B). John Gaw Meem 1932. Second half of the ranch 1999",
    members: 50,
    membersLabel: "About 46 guest rooms, plus farm, Campo kitchen, and shop staff. Headcount not isolated",
    acres: 25,
    acresLabel: "25 acres of lavender, cottonwoods, formal gardens, and organic farmland",
    legalStructure:
      "Private family inn and organic farm. You book a room. You do not buy Rio Grande Boulevard.",
    legalCategory: "Farm inn",
    stillActive: true,
    images: [
      "/communities/los-poblanos-land.jpg",
      "/communities/los-poblanos-1.jpg",
      "/communities/los-poblanos-2.jpg",
      "/communities/los-poblanos-3.jpg",
    ],
    summary:
      "An Albuquerque lavender farm inn on the Rio Grande. Rembes opened the hacienda as a B&B in 1999. Meem 1932. Campo, spa, and artisan lavender. You book a room. You do not buy Los Ranchos.",
    businessModel:
      "Inn rooms, Campo, farm shop, and events. (505) 985-5000. An Old Town drive is not a closing.",
    foundingProcess:
      "Penny and Armin Rembe bought half in 1976 and the rest in 1999. The public inn door is 1999.",
    governance:
      "The Rembe family farm.",
    website: "https://lospoblanos.com/",
    timeline: [
      { year: "1932", event: "John Gaw Meem." },
      { year: "1976", event: "Rembes." },
      { year: "1999", event: "Hacienda B&B." },
      { year: "Present", event: "46 rooms, lavender, Campo. A room, not Rio Grande Boulevard." },
    ],
  },
  {
    slug: "cedar-ridge",
    name: "Cedar Ridge Ranch",
    location: "3059 County Road 103, Carbondale, CO 81623",
    region: "Colorado, USA",
    country: "United States",
    foundedYear: 1999,
    foundedLabel: "1999 (horse boarding). Family-owned 67-acre ranch",
    members: 8,
    membersLabel: "A family horse ranch and glamping stay. Staff headcount not isolated",
    acres: 67,
    acresLabel: "67 acres under Mt. Sopris. Horses, alpacas, farm tours, eggs",
    legalStructure:
      "Private family ranch. You book a yurt or a tent. You do not buy County Road 103.",
    legalCategory: "Farm inn",
    stillActive: true,
    images: [
      "/communities/cedar-ridge-land.jpg",
      "/communities/cedar-ridge-1.jpg",
      "/communities/cedar-ridge-2.jpg",
      "/communities/cedar-ridge-3.jpg",
    ],
    summary:
      "A Carbondale horse ranch with yurts and safari tents under Mt. Sopris. Family ranch. Farm tours, eggs, alpaca yoga. Rezstream. You book a tent. You do not buy the Roaring Fork.",
    businessModel:
      "Glamping, farmhouse, cabin, and ranch days. (970) 963-3507. An Aspen drive is not a closing.",
    foundingProcess:
      "Horse boarding from 1999. The public glamping door is cedarridgeranch.com.",
    governance:
      "The family ranch. A yurt night is not the title.",
    website: "https://www.cedarridgeranch.com/",
    timeline: [
      { year: "1999", event: "Horse boarding." },
      { year: "Present", event: "Yurts, safari tents, farmhouse. A night, not County Road 103." },
    ],
  },
  {
    slug: "leaping-lamb",
    name: "Leaping Lamb Farm",
    location: "20368 Honey Grove Road, Alsea, OR 97324",
    region: "Oregon, USA",
    country: "United States",
    foundedYear: 2003,
    foundedLabel: "2003 (Scottie and Greg Jones. Homestead buildings 1896–1930. Farmstay",
    members: 6,
    membersLabel: "A family sheep farm. Headcount not isolated",
    acres: 40,
    acresLabel: "40-acre Coast Range farm. Sheep, hay, garden, Honey Grove Creek",
    legalStructure:
      "Private family farm. You book the cottage. You do not buy Honey Grove Road.",
    legalCategory: "Private family farm",
    stillActive: true,
    images: [
      "/communities/leaping-lamb-land.jpg",
      "/communities/leaping-lamb-1.jpg",
      "/communities/leaping-lamb-2.jpg",
      "/communities/leaping-lamb-3.jpg",
    ],
    summary:
      "An Alsea sheep farm in a Coast Range creek valley. Joneses 2003. Cottage about 500 feet from the house. ResNexus. You book a cottage. You do not buy Honey Grove.",
    businessModel:
      "Farmstay cottage, pasture-raised lamb, and garden. (541) 487-4966. A Corvallis drive is not a closing.",
    foundingProcess:
      "Scottie and Greg Jones, second-career farmers from Phoenix, 2003. Public farmstay.",
    governance:
      "The family farm. A cottage night is not the title.",
    website: "https://www.leapinglambfarm.com/",
    timeline: [
      { year: "1896", event: "Spencer homestead buildings." },
      { year: "2003", event: "Joneses." },
      { year: "Present", event: "Cottage farmstay. A night, not Honey Grove Road." },
    ],
  },
  {
    slug: "les-amanins",
    name: "Les Amanins",
    location: "1324 route de Crest, 26400 La Roche-sur-Grane",
    region: "Auvergne-Rhône-Alpes, France",
    country: "France",
    foundedYear: 2003,
    foundedLabel: "2003 (Michel Valentin and Pierre Rabhi). Cooperative agroecological centre",
    members: 25,
    membersLabel: "A cooperative farm, school, and stay. Up to 92 beds in high season. Headcount not isolated",
    acres: 136,
    acresLabel: "55 hectares of prairie, fields, and forest. Polyculture-élevage",
    legalStructure:
      "Cooperative agroecological centre. You book a farm stay. You do not buy route de Crest.",
    legalCategory: "Educational cooperative",
    stillActive: true,
    images: [
      "/communities/les-amanins-land.jpg",
      "/communities/les-amanins-1.jpg",
      "/communities/les-amanins-2.jpg",
      "/communities/les-amanins-3.jpg",
    ],
    summary:
      "A Drôme agroecological farm that is also a school and a stay. Valentin and Rabhi 2003. Cows, pigs, hens, horse, market gardens, bread oven. Eco-buildings, wooden cabins, lodges, and camping. You book a stay. You do not buy La Roche-sur-Grane.",
    businessModel:
      "Farm stays, stages, school groups, and seminars. 04 75 43 75 05. A Crest drive is not a closing.",
    foundingProcess:
      "Michel Valentin and Pierre Rabhi, 2003. École du Colibri on the same land.",
    governance:
      "The cooperative. A cabin night is not a share.",
    website: "https://www.lesamanins.com/",
    timeline: [
      { year: "2003", event: "Valentin and Rabhi." },
      { year: "Present", event: "55 ha, farm stays. A night, not route de Crest." },
    ],
  },
  {
    slug: "our-native-village",
    name: "Our Native Village",
    location: "Hesaraghatta Village, Bengaluru, Karnataka 560088",
    region: "Karnataka, India",
    country: "India",
    foundedYear: 2006,
    foundedLabel: "2006 (C. B. Ramkumar. World Responsible Tourism Awards 2008",
    members: 30,
    membersLabel: "An organic eco-resort. Staff headcount not isolated",
    acres: 12,
    acresLabel: "12-acre organic farm. Vegetables and fruit for the kitchen",
    legalStructure:
      "Private eco-resort. You book a room. You do not buy Hesaraghatta.",
    legalCategory: "Farm inn",
    stillActive: true,
    images: [
      "/communities/our-native-village-land.jpg",
      "/communities/our-native-village-1.jpg",
      "/communities/our-native-village-2.jpg",
      "/communities/our-native-village-3.jpg",
    ],
    summary:
      "A Hesaraghatta eco-resort on a 12-acre organic farm. Ramkumar 2006. Farm vegetables on the plate. Natural pool. You book a room. You do not buy Hesaraghatta.",
    businessModel:
      "Rooms, farm kitchen, and spa. +91 95912 35007. A Bengaluru drive is not a closing.",
    foundingProcess:
      "C. B. Ramkumar returned to India in 2006. Now under Niraamaya reservations.",
    governance:
      "The resort.",
    website: "https://www.ournativevillage.com/",
    timeline: [
      { year: "2006", event: "Ramkumar." },
      { year: "2008", event: "World Responsible Tourism Awards." },
      { year: "Present", event: "12-acre organic farm. A room, not Hesaraghatta." },
    ],
  },
  {
    slug: "blisswood",
    name: "BlissWood Bed and Breakfast Ranch",
    location: "13597 Frantz Road, Cat Spring, TX 78933",
    region: "Texas, USA",
    country: "United States",
    foundedYear: 2010,
    foundedLabel: "Public ranch B&B (Tripadvisor reviews from 2010). Carol Davis of Voyage Houston. Working ranch",
    members: 12,
    membersLabel: "A working-ranch B&B. Staff headcount not isolated",
    acres: 350,
    acresLabel: "350-acre working ranch. Horses, cattle, donkeys, peacocks. Cabins, farmhouses, covered wagon",
    legalStructure:
      "Private ranch inn. You book a cabin. You do not buy Frantz Road.",
    legalCategory: "Farm inn",
    stillActive: true,
    images: [
      "/communities/blisswood-land.jpg",
      "/communities/blisswood-1.jpg",
      "/communities/blisswood-2.jpg",
      "/communities/blisswood-3.jpg",
    ],
    summary:
      "A Cat Spring working ranch an hour west of Houston. Carol Davis / Voyage Houston. Cabins, historic houses, and a covered wagon. ThinkReservations. You book a cabin. You do not buy Frantz Road.",
    businessModel:
      "Ranch rooms, trail rides, and day visits. (713) 301-3235. A Houston drive is not a closing.",
    foundingProcess:
      "Carol Davis. Public B&B of record by 2010. Family ranching of Voyage Houston.",
    governance:
      "The ranch. A cabin night is not the title.",
    website: "https://www.blisswood.net/",
    timeline: [
      { year: "2010", event: "Public B&B / blisswood.net." },
      { year: "Present", event: "350 acres, cabins. A night, not Frantz Road." },
    ],
  },
];
