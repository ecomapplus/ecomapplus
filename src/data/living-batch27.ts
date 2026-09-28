import type { Community } from "./communities";

/** Ten living farms with bookable stays, oldest founding first: an Andean working hacienda, a Baja organic spa farm, a Ngorongoro coffee plantation, a Smoky Mountain Relais farm, a Mae Rim rice-paddy resort, a Sayan permaculture bamboo hotel, a Tuscan organic estate, a Sacred Valley organic hacienda, a Yucatán farm hacienda, and a Wasatch working ranch with a no-till garden. */
export const livingBatch27Communities: Community[] = [
  {
    slug: "hacienda-zuleta",
    name: "Hacienda Zuleta",
    location: "Angochagua, Imbabura 100150, Ecuador",
    region: "Imbabura, Ecuador",
    country: "Ecuador",
    foundedYear: 1691,
    foundedLabel: "Colonial working farm. Plaza Lasso family more than 100 years. 4,000 acres",
    members: 40,
    membersLabel: "A 21-room working-farm hacienda. Staff and guest headcount not isolated",
    acres: 4000,
    acresLabel: "4,000 acres / 2,000 hectares. Dairy, trout, sheep, cheese, and horses",
    legalStructure:
      "Private working-farm hacienda. You book a room.",
    legalCategory: "Working farm hacienda",
    stillActive: true,
    images: [
      "/communities/hacienda-zuleta-land.jpg",
      "/communities/hacienda-zuleta-1.jpg",
      "/communities/hacienda-zuleta-2.jpg",
      "/communities/hacienda-zuleta-3.jpg",
    ],
    summary:
      "Working farm in the Angochagua valley, Imbabura. A colonial hacienda from 1691; the Plaza Lasso family has held it more than a century. About 4,000 acres of dairy, trout, sheep, and a cheese factory. Twenty-one rooms. About 90 Zuleteño horses work the same land as the Condor Huasi project. You book a room, 72 hours ahead.",
    businessModel:
      "Full-board rooms, farm tours, and riding. Book 72 hours ahead.",
    foundingProcess:
      "A colonial farm from 1691. The Plaza Lasso family has held it more than a century.",
    governance:
      "The family hacienda.",
    website: "https://zuleta.com/",
    timeline: [
      { year: "1691", event: "Colonial farm in the Zuleta valley." },
      { year: "20th century", event: "Plaza Lasso family farm." },
      { year: "Present", event: "Cheese, horses, and rooms." },
    ],
  },
  {
    slug: "rancho-la-puerta",
    name: "Rancho La Puerta",
    location: "Carretera Mexicali–Tijuana Km 136.5, Tecate, Baja California 21447",
    region: "Baja California, Mexico",
    country: "Mexico",
    foundedYear: 1940,
    foundedLabel: "1940 Szekely founding. 4,000 acres. Six-acre Tres Estrellas organic farm",
    members: 150,
    membersLabel: "A destination spa farm. Guest and staff headcount not isolated",
    acres: 4000,
    acresLabel: "4,000 acres at the foot of Mount Kuchumaa. 6-acre Tres Estrellas organic farm. 32 acres of gardens",
    legalStructure:
      "Private destination spa and organic farm. You book a week. You do not buy Kuchumaa.",
    legalCategory: "Destination spa farm",
    stillActive: true,
    images: [
      "/communities/rancho-la-puerta-land.jpg",
      "/communities/rancho-la-puerta-1.jpg",
      "/communities/rancho-la-puerta-2.jpg",
      "/communities/rancho-la-puerta-3.jpg",
    ],
    summary:
      "A Tecate fitness ranch with a working organic farm. Edmond and Deborah Szekely 1940. Tres Estrellas grows the kitchen. La Cocina Que Canta cooking school. You book a stay. You do not buy Mount Kuchumaa.",
    businessModel:
      "All-inclusive spa weeks. Synxis. (800) 443-7565. A San Diego drive is not a closing.",
    foundingProcess:
      "The Szekelys opened the ranch in 1940.",
    governance:
      "The Szekely family ranch. A casita night is not the mountain.",
    website: "https://rancholapuerta.com/",
    timeline: [
      { year: "1940", event: "Szekely founding." },
      { year: "Present", event: "Tres Estrellas farm and casitas. A week, not Kuchumaa." },
    ],
  },
  {
    slug: "gibbs-farm",
    name: "Gibb's Farm",
    location: "Gibb's Farm, Karatu, Tanzania, P.O. Box 280",
    region: "Karatu, Tanzania",
    country: "Tanzania",
    foundedYear: 1929,
    foundedLabel: "Coffee plantation of the 1920s. Guesthouse from the 1970s. 80-acre organic farm",
    members: 50,
    membersLabel: "Seventeen cottages and two family houses. Staff and guest headcount not isolated",
    acres: 80,
    acresLabel: "Over 80 acres. 30 acres of Arabica coffee, 10 acres of vegetables and fruit, 5 acres of flowers and herbs, plus dairy and pigs",
    legalStructure:
      "Private coffee-farm lodge. You book a cottage. You do not buy Karatu.",
    legalCategory: "Coffee farm lodge",
    stillActive: true,
    images: [
      "/communities/gibbs-farm-land.jpg",
      "/communities/gibbs-farm-1.jpg",
      "/communities/gibbs-farm-2.jpg",
      "/communities/gibbs-farm-3.jpg",
    ],
    summary:
      "A Karatu coffee plantation on the outer slopes of Ngorongoro. Over 80 organic acres. Arabica, kitchen garden, dairy, and pigs. Seventeen cottages. You book a cottage. You do not buy the crater.",
    businessModel:
      "Full-board cottages, farm kitchen, and coffee. +255 272 970 438.",
    foundingProcess:
      "A German-settler coffee estate of the 1920s. James and Margaret Gibb made it a guesthouse. The public stay door is gibbsfarm.com.",
    governance:
      "The farm lodge.",
    website: "https://www.gibbsfarm.com/",
    timeline: [
      { year: "1920s", event: "Coffee plantation." },
      { year: "1970s", event: "Guesthouse." },
      { year: "Present", event: "Organic farm and cottages." },
    ],
  },
  {
    slug: "blackberry-farm",
    name: "Blackberry Farm",
    location: "1471 W Millers Cove Rd, Walland, TN 37886",
    region: "Tennessee, USA",
    country: "United States",
    foundedYear: 1976,
    foundedLabel: "1976 Beall inn. 4,200 acres. Vegetable gardens and East Friesian sheep",
    members: 120,
    membersLabel: "About 68 guest rooms. Staff headcount not isolated",
    acres: 4200,
    acresLabel: "4,200 acres in the Great Smoky foothills. Gardens, sheep, and the Farmstead",
    legalStructure:
      "Private Relais & Châteaux farm resort.",
    legalCategory: "Farm resort",
    stillActive: true,
    images: [
      "/communities/blackberry-farm-land.jpg",
      "/communities/blackberry-farm-1.jpg",
      "/communities/blackberry-farm-2.jpg",
      "/communities/blackberry-farm-3.jpg",
    ],
    summary:
      "A Walland farm resort under Chilhowee Mountain. 4,200 acres. Heirloom gardens, East Friesian sheep cheese, and Foothills Cuisine. Historic rooms, cottages, and houses.",
    businessModel:
      "Rooms, Farmstead dining, and the spa. (800) 557-8864.",
    foundingProcess:
      "The Bealls opened a six-room inn in 1976. The public stay door is a cottage booking.",
    governance:
      "The farm.",
    website: "https://www.blackberryfarm.com/",
    timeline: [
      { year: "1940", event: "Land purchase." },
      { year: "1976", event: "Six-room inn." },
      { year: "Present", event: "4,200 acres and cottages." },
    ],
  },
  {
    slug: "four-seasons-chiang-mai",
    name: "Four Seasons Chiang Mai",
    location: "502 Moo 1, Mae Rim–Samoeng Old Road, Chiang Mai 50180",
    region: "Chiang Mai, Thailand",
    country: "Thailand",
    foundedYear: 1995,
    foundedLabel: "1995 resort opening, Four Seasons flag from 2003 of Condé Nast Traveler. 32 acres of rice paddies of Indagare",
    members: 200,
    membersLabel: "About 98 pavilions of Condé Nast Traveler. Staff and guest headcount not isolated",
    acres: 32,
    acresLabel: "32 acres of landscaped rice paddies of Indagare / Condé Nast Traveler. Working paddies",
    legalStructure:
      "Private rice-paddy resort. You book a pavilion. You do not buy Mae Rim.",
    legalCategory: "Rice paddy resort",
    stillActive: true,
    images: [
      "/communities/four-seasons-chiang-mai-land.jpg",
      "/communities/four-seasons-chiang-mai-1.jpg",
      "/communities/four-seasons-chiang-mai-2.jpg",
      "/communities/four-seasons-chiang-mai-3.jpg",
    ],
    summary:
      "A Mae Rim resort among working rice paddies. Opened 1995, Four Seasons from 2003 of Condé Nast Traveler. Lanna pavilions look onto the fields. You book a pavilion. You do not buy the valley.",
    businessModel:
      "Pavilions, farm-paddy dining, and spa. +66 (53) 298 181. A Chiang Mai drive is not a closing.",
    foundingProcess:
      "The Mae Rim resort opened in 1995 of Condé Nast Traveler. Four Seasons holds the public stay door.",
    governance:
      "Four Seasons. A pavilion night is not Mae Rim.",
    website: "https://www.fourseasons.com/chiangmai/",
    timeline: [
      { year: "1995", event: "Resort opening of Condé Nast Traveler." },
      { year: "2003", event: "Four Seasons flag." },
      { year: "Present", event: "Rice paddies and pavilions. A night, not Mae Rim." },
    ],
  },
  {
    slug: "bambu-indah",
    name: "Bambu Indah",
    location: "Jl. Baung, Sayan, Kecamatan Ubud, Gianyar, Bali 80571",
    region: "Bali, Indonesia",
    country: "Indonesia",
    foundedYear: 2005,
    foundedLabel: "2005 accidental hotel. John and Cynthia Hardy. Permaculture gardens, rice fields, and mushroom farm",
    members: 40,
    membersLabel: "A Sayan bamboo hotel. Antique Javanese houses plus bamboo rooms. Staff headcount not isolated",
    acres: null,
    acresLabel: "Hillside rice, permaculture gardens, and a river. Acreage not isolated. Edible gardens and replanted rice",
    legalStructure:
      "Private permaculture hotel. You book a house.",
    legalCategory: "Permaculture hotel",
    stillActive: true,
    images: [
      "/communities/bambu-indah-land.jpg",
      "/communities/bambu-indah-1.jpg",
      "/communities/bambu-indah-2.jpg",
      "/communities/bambu-indah-3.jpg",
    ],
    summary:
      "Sayan ridge above the Ayung, Ubud. John and Cynthia Hardy set eleven antique Javanese bridal houses — gladaks — beside their home in 2005 and hosted friends there first. They call it an accidental hotel: the public doors opened later, in 2010. Permaculture gardens, rice paddies, ducks, an underground mushroom farm, and bamboo rooms. You book a house.",
    businessModel:
      "Houses and farm kitchen.",
    foundingProcess:
      "The Hardys set eleven Javanese houses beside their home in 2005. Friends stayed first; the hotel opened to the public in 2010.",
    governance:
      "The Hardy hotel.",
    website: "https://www.bambuindah.com/",
    timeline: [
      { year: "2005", event: "Accidental hotel." },
      { year: "2010", event: "Public opening." },
      { year: "Present", event: "Permaculture and bamboo houses." },
    ],
  },
  {
    slug: "borgo-santo-pietro",
    name: "Borgo Santo Pietro",
    location: "Borgo Santo Pietro 110, Loc. Palazzetto, 53012 Chiusdino (SI)",
    region: "Tuscany, Italy",
    country: "Italy",
    foundedYear: 2008,
    foundedLabel: "2008 hotel opening. Thottrup purchase 2001. 300-acre organic farm",
    members: 50,
    membersLabel: "22 rooms and suites. Staff headcount not isolated",
    acres: 300,
    acresLabel: "300-acre organically cultivated estate. Market gardens, vines, nuts, herbs, pigs, and a dairy",
    legalStructure:
      "Private organic-farm hotel. You book a suite. You do not buy Palazzetto.",
    legalCategory: "Organic farm hotel",
    stillActive: true,
    images: [
      "/communities/borgo-santo-pietro-land.jpg",
      "/communities/borgo-santo-pietro-1.jpg",
      "/communities/borgo-santo-pietro-2.jpg",
      "/communities/borgo-santo-pietro-3.jpg",
    ],
    summary:
      "A Chiusdino farmhouse hotel on a 300-acre organic estate. Claus and Jeanette Thottrup opened it in 2008. Market gardens, vines, pigs, dairy, and a cooking school. You book a suite. You do not buy the Merse.",
    businessModel:
      "Suites, farm restaurants, spa, and cooking school. +39 0577 75 1222. A Siena drive is not a closing.",
    foundingProcess:
      "The Thottrups found the ruin in 2001 and opened the hotel in 2008. The public stay door is that site.",
    governance:
      "Relais Borgo Santo Pietro S.p.A. A suite night is not Palazzetto.",
    website: "https://borgosantopietro.com/",
    timeline: [
      { year: "2001", event: "Thottrup purchase history page." },
      { year: "2008", event: "Hotel opening." },
      { year: "Present", event: "300-acre organic farm and suites. A night, not Chiusdino." },
    ],
  },
  {
    slug: "inkaterra-urubamba",
    name: "Inkaterra Hacienda Urubamba",
    location: "Km 63, Cusco–Urubamba–Pisac–Calca Highway, Huayoccari, Huayllabamba, Urubamba",
    region: "Sacred Valley, Peru",
    country: "Peru",
    foundedYear: 2015,
    foundedLabel: "2015 opening. 100 acres. 10-acre organic farm",
    members: 80,
    membersLabel: "Casa Hacienda rooms and about 24 casitas. Staff headcount not isolated",
    acres: 100,
    acresLabel: "About 100 acres. 10-acre organic farm",
    legalStructure:
      "Private organic-farm hacienda. You book a casita.",
    legalCategory: "Organic farm hacienda",
    stillActive: true,
    images: [
      "/communities/inkaterra-urubamba-land.jpg",
      "/communities/inkaterra-urubamba-1.jpg",
      "/communities/inkaterra-urubamba-2.jpg",
      "/communities/inkaterra-urubamba-3.jpg",
    ],
    summary:
      "A Sacred Valley hacienda with a working organic farm. Opened 2015. One hundred acres and a 10-acre garden. Guests walk the rows. You book a casita.",
    businessModel:
      "Casitas, earth-to-table kitchen, and farm tours. +51 1 610-0400.",
    foundingProcess:
      "Inkaterra opened the hacienda in 2015.",
    governance:
      "Inkaterra.",
    website: "https://www.inkaterra.com/inkaterra/inkaterra-hacienda-urubamba/",
    timeline: [
      { year: "2015", event: "Hacienda opening." },
      { year: "Present", event: "Organic farm and casitas." },
    ],
  },
  {
    slug: "chable-yucatan",
    name: "Chablé Yucatán",
    location: "Tablaje Catastral 642, Chocholá, Yucatán, Mexico",
    region: "Yucatán, Mexico",
    country: "Mexico",
    foundedYear: 2016,
    foundedLabel: "2016 hacienda hotel. 19th-century hacienda on 750 acres. La Granja de Abu farm",
    members: 80,
    membersLabel: "About 40 casitas and villas. Staff headcount not isolated",
    acres: 750,
    acresLabel: "750 acres of tropical landscape. La Granja de Abu farm, gardens, and animals",
    legalStructure:
      "Private hacienda farm hotel. You book a casita. You do not buy Chocholá.",
    legalCategory: "Hacienda farm hotel",
    stillActive: true,
    images: [
      "/communities/chable-yucatan-land.jpg",
      "/communities/chable-yucatan-1.jpg",
      "/communities/chable-yucatan-2.jpg",
      "/communities/chable-yucatan-3.jpg",
    ],
    summary:
      "A Chocholá hacienda in 750 acres of jungle and farm. Casitas with private pools. La Granja de Abu, melipona honey, and an organic kitchen. You book a casita. You do not buy the cenote.",
    businessModel:
      "Casitas, spa, and farm kitchen. A Mérida drive is not a closing.",
    foundingProcess:
      "A 19th-century hacienda opened as Chablé in 2016.",
    governance:
      "Chablé Hotels. A casita night is not Chocholá.",
    website: "https://yucatan.chablehotels.com/",
    timeline: [
      { year: "19th century", event: "Hacienda." },
      { year: "2016", event: "Chablé opening." },
      { year: "Present", event: "Farm, casitas, and jungle. A night, not Chocholá." },
    ],
  },
  {
    slug: "lodge-at-blue-sky",
    name: "The Lodge at Blue Sky",
    location: "27649 Old Lincoln Highway, Wanship, UT 84017",
    region: "Utah, USA",
    country: "United States",
    foundedYear: 2019,
    foundedLabel: "2019 Auberge opening. Phillips ranch. 4,000 acres. Gracie’s Farm no-till garden",
    members: 80,
    membersLabel: "About 46 rooms. Staff headcount not isolated",
    acres: 4000,
    acresLabel: "4,000 private acres. 1.5-acre Gracie’s Farm. Horses",
    legalStructure:
      "Private working-ranch resort. You book a suite. You do not buy Wanship.",
    legalCategory: "Working ranch resort",
    stillActive: true,
    images: [
      "/communities/lodge-at-blue-sky-land.jpg",
      "/communities/lodge-at-blue-sky-1.jpg",
      "/communities/lodge-at-blue-sky-2.jpg",
      "/communities/lodge-at-blue-sky-3.jpg",
    ],
    summary:
      "A Wanship ranch between the Wasatch and the Uintas. 4,000 acres. Gracie’s Farm grows for Yuta. Suites, creek houses, and a mountaintop yurt. You book a suite. You do not buy Old Lincoln Highway.",
    businessModel:
      "Rooms, ranch days, and farm dining. (866) 296-8998. A Park City drive is not a closing.",
    foundingProcess:
      "Mike and Barb Phillips opened the Auberge lodge in 2019. The public stay door is auberge.com/blue-sky.",
    governance:
      "Auberge Resorts. A suite night is not the ranch.",
    website: "https://auberge.com/blue-sky/",
    timeline: [
      { year: "2019", event: "Auberge opening." },
      { year: "Present", event: "Gracie’s Farm and suites. A night, not Wanship." },
    ],
  },
];
