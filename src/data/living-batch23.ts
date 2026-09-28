import type { Community } from "./communities";

/** Ten living farms with bookable stays, oldest founding first: a Tecate spa farm with a cooking school, a Smoky Mountain Relais farm, a Heredia coffee inn, a Tuscan organic agriturismo with internships, a Cardigan glamping farm with a summer gather, a Sayan bamboo hotel in permaculture, a Cotswolds cookery estate, a Sacred Valley hacienda farm, an Alentejo monte hotel, and a Hampshire biodynamic country house. */
export const livingBatch23Communities: Community[] = [
  {
    slug: "rancho-la-puerta",
    name: "Rancho La Puerta",
    location: "Tecate, Baja California (foot of Mount Kuchumaa)",
    region: "Baja California, Mexico",
    country: "Mexico",
    foundedYear: 1940,
    foundedLabel: "1940 (Szekely family). Siempre Mejor. Saturday arrivals",
    members: 120,
    membersLabel: "About 100–125 guests a week of Serenity Ways, plus farm and spa staff. Headcount not isolated",
    acres: 4000,
    acresLabel: "4,000 acres: 40 miles of trails, 32 acres of gardens, an organic farm, and La Cocina Que Canta. 2,000 acres a nature preserve",
    legalStructure:
      "Private family destination spa. You book a seven-night week or a cooking class. You do not buy Mount Kuchumaa.",
    legalCategory: "Destination spa farm",
    stillActive: true,
    images: [
      "/communities/rancho-la-puerta-land.jpg",
      "/communities/rancho-la-puerta-1.jpg",
      "/communities/rancho-la-puerta-2.jpg",
      "/communities/rancho-la-puerta-3.jpg",
    ],
    summary:
      "A Tecate wellbeing ranch at the foot of Mount Kuchumaa. Founded 1940. 4,000 acres, an organic farm, and La Cocina Que Canta cooking school. Workshops, culinary weeks, and a Saturday arrival. You book a week. You do not buy Kuchumaa.",
    businessModel:
      "Seven-night stays, spa, farm-to-table, cooking school. 800-443-7565. A San Diego drive is not a closing.",
    foundingProcess:
      "The Szekely family, 1940. Still family-run.",
    governance:
      "The ranch. A week is not membership.",
    website: "https://rancholapuerta.com/",
    timeline: [
      { year: "1940", event: "Szekely ranch." },
      { year: "Present", event: "4,000 acres, organic farm, La Cocina Que Canta. A week, not Kuchumaa." },
    ],
  },
  {
    slug: "blackberry-farm",
    name: "Blackberry Farm",
    location: "1471 West Millers Cove Road, Walland, TN 37886",
    region: "Tennessee, USA",
    country: "United States",
    foundedYear: 1976,
    foundedLabel: "1976 (Kreis and Sandy Beall / Pratesi). 50th anniversary 2026. Relais & Châteaux",
    members: 80,
    membersLabel: "A Relais farm resort. About 62 guest rooms of Pratesi. Staff not isolated",
    acres: 4200,
    acresLabel: "4,200 acres of rolling hills, lakes, and trails in the Great Smoky foothills. Garden and Foothills Cuisine",
    legalStructure:
      "Private Relais & Châteaux farm resort.",
    legalCategory: "Farm inn",
    stillActive: true,
    images: [
      "/communities/blackberry-farm-land.jpg",
      "/communities/blackberry-farm-1.jpg",
      "/communities/blackberry-farm-2.jpg",
      "/communities/blackberry-farm-3.jpg",
    ],
    summary:
      "A Walland farm resort in the Smoky foothills. Bealls 1976. Garden and Foothills Cuisine. Events calendar. 800-557-8864.",
    businessModel:
      "Rooms, cottages, restaurants, seasonal events.",
    foundingProcess:
      "Kreis and Sandy Beall, 1976, / Pratesi. Public hospitality grew through the 1990s.",
    governance:
      "The farm.",
    website: "https://www.blackberryfarm.com/",
    timeline: [
      { year: "1976", event: "Bealls / Pratesi." },
      { year: "2026", event: "50th anniversary." },
      { year: "Present", event: "Garden, Foothills Cuisine, events." },
    ],
  },
  {
    slug: "finca-rosa-blanca",
    name: "Finca Rosa Blanca Coffee Farm & Inn",
    location: "Calle Rosa Blanca, Santa Bárbara de Heredia",
    region: "Heredia, Costa Rica",
    country: "Costa Rica",
    foundedYear: 1985,
    foundedLabel: "1985 (Sylvia, Glenn, and Teri Jampol). Organic coffee farm and inn",
    members: 25,
    membersLabel: "Family inn on an organic coffee farm. About 14 villas and suites of Booking. Staff not isolated",
    acres: 30,
    acresLabel: "An additional 30 acres, reforested, story page. Shaded organic coffee, 137 bird species",
    legalStructure:
      "Private family coffee farm and inn. You book a villa or a cupping tour. You do not buy Santa Bárbara.",
    legalCategory: "Coffee farm inn",
    stillActive: true,
    images: [
      "/communities/finca-rosa-blanca-land.jpg",
      "/communities/finca-rosa-blanca-1.jpg",
      "/communities/finca-rosa-blanca-2.jpg",
      "/communities/finca-rosa-blanca-3.jpg",
    ],
    summary:
      "A Santa Bárbara organic coffee farm with an inn. Jampols 1985. Coffee tour and cupping. +506 2269 9392. You book a villa. You do not buy Santa Bárbara.",
    businessModel:
      "Villas, farm-to-table, coffee tours. info@fincarosablanca.com.",
    foundingProcess:
      "Sylvia, Glenn, and Teri Jampol, 1985. A motocross field turned coffee farm.",
    governance:
      "The family farm.",
    website: "https://fincarosablanca.com/en/",
    timeline: [
      { year: "1985", event: "Jampols." },
      { year: "Present", event: "Organic coffee, villas, cupping. A villa, not Santa Bárbara." },
    ],
  },
  {
    slug: "spannocchia",
    name: "Tenuta di Spannocchia",
    location: "Località Spannocchia 169, 53012 Chiusdino, Siena",
    region: "Tuscany, Italy",
    country: "Italy",
    foundedYear: 1992,
    foundedLabel: "1992 (Francesca and Randall Cinelli). Estate bought 1925 by Delfino Cinelli. Organic 1994",
    members: 30,
    membersLabel: "A working organic farm, agriturismo, and education centre. Eight interns a session. Headcount not isolated",
    acres: 1100,
    acresLabel: "1,100 acres: Cinta Senese pigs, olives, gardens, forest. Merse river nature reserve",
    legalStructure:
      "Private Cinelli farm estate, with Friends of Spannocchia a U.S. nonprofit. You book a farmhouse or an internship. You do not buy Chiusdino.",
    legalCategory: "Organic agriturismo",
    stillActive: true,
    images: [
      "/communities/spannocchia-land.jpg",
      "/communities/spannocchia-1.jpg",
      "/communities/spannocchia-2.jpg",
      "/communities/spannocchia-3.jpg",
    ],
    summary:
      "A Chiusdino organic farm of 1,100 acres. spannocchia.com: Cinta Senese, olives, farmhouses. Three 3-month internships a year. You book a room or apply to intern. You do not buy Località Spannocchia.",
    businessModel:
      "Agriturismo rooms and farmhouses. Internships. Cooking classes.",
    foundingProcess:
      "Delfino Cinelli bought the tenuta in 1925. Francesca and Randall moved in 1992. Organic 1994.",
    governance:
      "The Cinelli estate. Friends of Spannocchia. A week is not a share.",
    website: "https://www.spannocchia.com/",
    timeline: [
      { year: "1925", event: "Delfino Cinelli." },
      { year: "1992", event: "Francesca and Randall." },
      { year: "1994", event: "Organic certification." },
      { year: "Present", event: "1,100 acres, internships, farmhouses. A room, not Chiusdino." },
    ],
  },
  {
    slug: "fforest",
    name: "fforest",
    location: "fforest farm, near Cardigan, Ceredigion",
    region: "Wales, United Kingdom",
    country: "United Kingdom",
    foundedYear: 2005,
    foundedLabel: "Farm bought February 2004. Project 2005 (James Lynch and Sian Tucker)",
    members: 20,
    membersLabel: "A Welsh farm with glamping, shacs, and a summer Gather. Staff not isolated",
    acres: 200,
    acresLabel: "200 acres of Visit Wales / Aspire: Teifi Gorge edge, nature reserve, coast nearby",
    legalStructure:
      "Private farm and hospitality. You book a dome, a shac, or Gather. You do not buy the Teifi.",
    legalCategory: "Glamping farm",
    stillActive: true,
    images: [
      "/communities/fforest-land.jpg",
      "/communities/fforest-1.jpg",
      "/communities/fforest-2.jpg",
      "/communities/fforest-3.jpg",
    ],
    summary:
      "A Cardigan farm of geodesic domes, onsen domes, crog lofts, and Hill Shacs. Lynch and Tucker. Gather festival each summer. You book a dome. You do not buy the Teifi.",
    businessModel:
      "Glamping, farmhouse, feasts, Gather. Book.",
    foundingProcess:
      "James Lynch and Sian Tucker bought the farm February 2004. The stay opened from 2005.",
    governance:
      "The farm. A dome night is not a share.",
    website: "https://www.coldatnight.co.uk/",
    timeline: [
      { year: "2004", event: "Farm bought." },
      { year: "2005", event: "fforest project." },
      { year: "Present", event: "Domes, shacs, Gather. A dome, not the Teifi." },
    ],
  },
  {
    slug: "bambu-indah",
    name: "Bambu Indah",
    location: "Jl. Baung, Sayan, Ubud 80571",
    region: "Bali, Indonesia",
    country: "Indonesia",
    foundedYear: 2005,
    foundedLabel: "2005 (John and Cynthia Hardy. Doors 2010. Accidental hotel",
    members: 40,
    membersLabel: "A Sayan bamboo hotel. Houses and bamboo structures. Staff not isolated",
    acres: null,
    acresLabel: "A Sayan ridge of permaculture gardens, rice, and a mushroom farm. Acreage not isolated here",
    legalStructure:
      "Private regenerative hotel. You book a house. You do not buy Sayan.",
    legalCategory: "Regenerative bamboo hotel",
    stillActive: true,
    images: [
      "/communities/bambu-indah-land.jpg",
      "/communities/bambu-indah-1.jpg",
      "/communities/bambu-indah-2.jpg",
      "/communities/bambu-indah-3.jpg",
    ],
    summary:
      "A Sayan hotel of antique Javanese houses and bamboo. Hardys 2005. Permaculture gardens, rice, mushrooms. Green School is the neighbouring project. You book a house. You do not buy Sayan.",
    businessModel:
      "Houses. Kitchen from the gardens.",
    foundingProcess:
      "John and Cynthia Hardy, 2005. Opened 2010.",
    governance:
      "The hotel. A house is not the ridge.",
    website: "https://www.bambuindah.com/",
    timeline: [
      { year: "2005", event: "Javanese houses." },
      { year: "2008", event: "Green School." },
      { year: "2010", event: "Hotel doors." },
      { year: "Present", event: "Bamboo houses, rice, mushrooms. A house, not Sayan." },
    ],
  },
  {
    slug: "thyme",
    name: "Thyme",
    location: "Southrop, Cotswolds, Gloucestershire",
    region: "England, United Kingdom",
    country: "United Kingdom",
    foundedYear: 2007,
    foundedLabel: "2007 cookery school in the Tithe Barn. Caryn Hibbert. Southrop Manor 2002. 31 bedrooms",
    members: 40,
    membersLabel: "A 150-acre farm estate: hotel, cookery school, Ox Barn, Swan pub. Staff not isolated",
    acres: 150,
    acresLabel: "150-acre Southrop estate: 17th-century houses, restored barns, farm and gardens",
    legalStructure:
      "Private family farm estate. You book a room, a class, or a table. You do not buy Southrop.",
    legalCategory: "Farm cookery estate",
    stillActive: true,
    images: [
      "/communities/thyme-land.jpg",
      "/communities/thyme-1.jpg",
      "/communities/thyme-2.jpg",
      "/communities/thyme-3.jpg",
    ],
    summary:
      "A Southrop farm of 150 acres with a cookery school. Caryn Hibbert, Tithe Barn 2007. 31 rooms, Ox Barn, Swan, Meadow Spa. 01367 850174. You book a room or a class. You do not buy Southrop.",
    businessModel:
      "Rooms, cookery classes, Ox Barn, events. reservations@thyme.co.uk.",
    foundingProcess:
      "Caryn and Jerry Hibbert, Southrop Manor 2002, cookery school 2007.",
    governance:
      "The family estate. A class is not the manor.",
    website: "https://www.thyme.co.uk/",
    timeline: [
      { year: "2002", event: "Southrop Manor." },
      { year: "2007", event: "Cookery school." },
      { year: "Present", event: "31 rooms, Ox Barn, farm. A room, not Southrop." },
    ],
  },
  {
    slug: "hacienda-urubamba",
    name: "Inkaterra Hacienda Urubamba",
    location: "Sacred Valley of the Incas, Urubamba",
    region: "Cusco, Peru",
    country: "Peru",
    foundedYear: 2015,
    foundedLabel: "2015 (José Koechlin). Inkaterra itself 1975. 100-acre hacienda of CN Traveler",
    members: 50,
    membersLabel: "A Sacred Valley hacienda hotel. Lodge and casitas. Staff not isolated",
    acres: 100,
    acresLabel: "About 100 acres / CN Traveler, with a 10-acre organic plantation of Inhabitat",
    legalStructure:
      "Private Inkaterra hotel. You book a casita. You do not buy the Sacred Valley.",
    legalCategory: "Hacienda farm hotel",
    stillActive: true,
    images: [
      "/communities/hacienda-urubamba-land.jpg",
      "/communities/hacienda-urubamba-1.jpg",
      "/communities/hacienda-urubamba-2.jpg",
      "/communities/hacienda-urubamba-3.jpg",
    ],
    summary:
      "A Urubamba hacienda on about 100 acres. inkaterra.com: organic farm, casitas, Andes. Opened 2015. +51 1 610 0400 of CN Traveler. You book a casita. You do not buy the valley.",
    businessModel:
      "Lodge and casitas. Farm-to-table.",
    foundingProcess:
      "José Koechlin, Inkaterra 1975. Hacienda Urubamba 2015 / Inhabitat.",
    governance:
      "Inkaterra. A casita is not the valley.",
    website: "https://www.inkaterra.com/inkaterra/inkaterra-hacienda-urubamba/the-experience/",
    timeline: [
      { year: "1975", event: "Inkaterra." },
      { year: "2015", event: "Hacienda Urubamba / Inhabitat." },
      { year: "Present", event: "100 acres, organic farm, casitas. A casita, not the valley." },
    ],
  },
  {
    slug: "barrocal",
    name: "São Lourenço do Barrocal",
    location: "7200-177 Monsaraz, Alentejo",
    region: "Alentejo, Portugal",
    country: "Portugal",
    foundedYear: 2016,
    foundedLabel: "2016 hotel of barrocal.pt / José António Uva. Family farm since 1820 of Leading Hotels. Eighth generation",
    members: 60,
    membersLabel: "A monte alentejano hotel of barrocal.pt. About 40 rooms of Indagare / AFAR. Staff not isolated",
    acres: 2000,
    acresLabel: "2,000-acre working estate of Leading Hotels / Michelin Guide: cereals, olive oil, wine, cattle since 1820",
    legalStructure:
      "Private family farm hotel of barrocal.pt. You book a farm room or a cottage. You do not buy Monsaraz.",
    legalCategory: "Farm estate hotel",
    stillActive: true,
    images: [
      "/communities/barrocal-land.jpg",
      "/communities/barrocal-1.jpg",
      "/communities/barrocal-2.jpg",
      "/communities/barrocal-3.jpg",
    ],
    summary:
      "A Monsaraz monte of 2,000 acres. Uva family, hotel 2016 of barrocal.pt. Wine, olives, cattle of Leading Hotels. reservations@barrocal.pt, +351 266 247 140. You book a room. You do not buy Monsaraz.",
    businessModel:
      "Guest farm rooms and cottages of barrocal.pt. Wine and farm.",
    foundingProcess:
      "José António Uva, eighth generation, opened the hotel 2016 of barrocal.pt / Here & Away. Farm since 1820 of Leading Hotels.",
    governance:
      "The Uva estate of barrocal.pt.",
    website: "https://barrocal.pt/",
    timeline: [
      { year: "1820", event: "Farm of Leading Hotels." },
      { year: "2016", event: "Hotel of barrocal.pt." },
      { year: "Present", event: "2,000 acres, rooms, wine. A room, not Monsaraz." },
    ],
  },
  {
    slug: "heckfield-place",
    name: "Heckfield Place",
    location: "Heckfield, Hampshire RG27 0LD",
    region: "England, United Kingdom",
    country: "United Kingdom",
    foundedYear: 2018,
    foundedLabel: "Opened 1 September 2018 of Travel Market Report (Gerald Chan). Home Farm biodynamic. Georgian house 1760s",
    members: 70,
    membersLabel: "A 45-room country house of The Hotel Guru / Indagare, with Home Farm. Staff not isolated",
    acres: 438,
    acresLabel: "438-acre estate / The Hotel Guru: organic Home Farm, biodynamic market garden, orchard, lakes",
    legalStructure:
      "Private country-house hotel. You book a room or a farm tour. You do not buy Heckfield.",
    legalCategory: "Biodynamic farm hotel",
    stillActive: true,
    images: [
      "/communities/heckfield-place-land.jpg",
      "/communities/heckfield-place-1.jpg",
      "/communities/heckfield-place-2.jpg",
      "/communities/heckfield-place-3.jpg",
    ],
    summary:
      "A Hampshire Georgian house on 438 acres. Opened 2018 of Travel Market Report. Home Farm and biodynamic market garden feed Marle and Hearth. +44 118 932 6868. You book a room. You do not buy Heckfield.",
    businessModel:
      "Rooms, restaurants, Little Bothy spa, Assembly events. enquiries@heckfieldplace.com.",
    foundingProcess:
      "Gerald Chan restored the house and opened 1 September 2018 of Travel Market Report. Home Farm.",
    governance:
      "The hotel.",
    website: "https://www.heckfieldplace.com/",
    timeline: [
      { year: "1763–66", event: "Georgian house." },
      { year: "2018", event: "Hotel of Travel Market Report." },
      { year: "Present", event: "Home Farm, 45 rooms. A room, not Heckfield." },
    ],
  },
];
