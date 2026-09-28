import type { Community } from "./communities";

/** Ten living farms with bookable stays, oldest founding first: a Stroud educational charity on a biodynamic estate, a Cornish organic housing co-op with camping, a Swindon smallholding of weekend courses, a Rochester dairy inn, a Nimbin permaculture college, a Chachagua regenerative lodge, a Bocas cacao farm lodge, an Arenal carbon-neutral ranch, a Hartland sheep-farm cabin stay, and a Floral City regenerative grove with glamping. */
export const livingBatch21Communities: Community[] = [
  {
    slug: "hawkwood",
    name: "Hawkwood",
    location: "Painswick Old Road, Stroud GL6 7QW",
    region: "England, United Kingdom",
    country: "United Kingdom",
    foundedYear: 1947,
    foundedLabel: "1947 (Lily Whincop and Margaret Bennell). Opened as Hawkwood College 1949. Rebranded Hawkwood Centre for Future Thinking 2019",
    members: 15,
    membersLabel: "An arts and education charity. Residential headcount not isolated. Stroud Community Agriculture on the grounds",
    acres: 42,
    acresLabel: "42 acres: gardens, pastures, woodland, a natural spring",
    legalStructure:
      "Registered arts and education charity, Hawkwood College Limited. Courses and rooms.",
    legalCategory: "Educational charity",
    stillActive: true,
    images: [
      "/communities/hawkwood-land.jpg",
      "/communities/hawkwood-1.jpg",
      "/communities/hawkwood-2.jpg",
      "/communities/hawkwood-3.jpg",
    ],
    summary:
      "A Grade II country house on 42 acres above Stroud in Gloucestershire. Lily Whincop and Margaret Bennell opened it in 1947 for adult education; Hawkwood College followed in 1949, and in 2019 it rebranded as the Hawkwood Centre for Future Thinking. The estate still runs biodynamic gardens, pastures, and woodland, with Stroud Community Agriculture growing food on the same grounds where residential courses sleep. You book a course or a room. You do not buy Painswick Old Road.",
    businessModel:
      "Courses, retreats, and venue hire. 27 bedrooms, up to 47 guests. Kitchen from the estate.",
    foundingProcess:
      "Lily Whincop and Margaret Bennell took the house in 1947. It opened as Hawkwood College on 28 March 1949.",
    governance:
      "Charity trustees and staff. Stroud Community Agriculture is a co-operative on the grounds.",
    website: "https://www.hawkwoodcollege.co.uk/",
    timeline: [
      { year: "1947", event: "Whincop and Bennell." },
      { year: "1949", event: "Opened as Hawkwood College." },
      { year: "2019", event: "Centre for Future Thinking." },
      { year: "Present", event: "42-acre biodynamic estate. Courses, retreats, rooms." },
    ],
  },
  {
    slug: "keveral",
    name: "Keveral Farm",
    location: "Keveral Farm, Looe, Cornwall PL13 1PA",
    region: "England, United Kingdom",
    country: "United Kingdom",
    foundedYear: 1973,
    foundedLabel: "1973. Housing co-op",
    members: 10,
    membersLabel: "10 adults. Currently 10 members, no children. Confirm current",
    acres: 30,
    acresLabel: "30 acres: veg plots, polytunnels, soft fruit, orchard, woodland, meadow and camping",
    legalStructure:
      "Housing co-operative. Soil Association organic.",
    legalCategory: "Housing cooperative",
    stillActive: true,
    images: [
      "/communities/keveral-land.jpg",
      "/communities/keveral-1.jpg",
      "/communities/keveral-2.jpg",
      "/communities/keveral-3.jpg",
    ],
    summary:
      "A Looe organic farm co-op. Founded 1973. Veg boxes since 1997. Camping by email. Pitchup has said it does not currently take bookings there.",
    businessModel:
      "Members rent land or buildings for their own work: vegetables, firewood, a campsite.",
    foundingProcess:
      "Established 1973.",
    governance:
      "Housing co-op. Write keveralfarm@yahoo.co.uk.",
    website: "https://diggersanddreamers.org.uk/community/keveral-farm-community",
    timeline: [
      { year: "1973", event: "Community founded." },
      { year: "1997", event: "Weekly veg boxes." },
      { year: "Present", event: "Camping by email." },
    ],
  },
  {
    slug: "lower-shaw",
    name: "Lower Shaw Farm",
    location: "Old Shaw Lane, West Swindon SN5 5PJ",
    region: "England, United Kingdom",
    country: "United Kingdom",
    foundedYear: 1975,
    foundedLabel: "1975 (Foundation for Alternatives lease). Council purchase 1974. Mid-1970s WWOOF tea",
    members: 15,
    membersLabel: "A smallholding and course house. Headcount not isolated",
    acres: 4,
    acresLabel: "About 3.5 acres. An oasis in a 1980s development",
    legalStructure:
      "Leased from the borough. Foundation for Alternatives. You book a listed weekend. You do not buy Old Shaw Lane.",
    legalCategory: "Educational smallholding",
    stillActive: true,
    images: [
      "/communities/lower-shaw-land.jpg",
      "/communities/lower-shaw-1.jpg",
      "/communities/lower-shaw-2.jpg",
      "/communities/lower-shaw-3.jpg",
    ],
    summary:
      "A 3.5-acre Swindon smallholding. Leased 1975. Organic vegetables, herbs, flowers. 2026 events calendar. Farmhouse rooms. You book a weekend. You do not buy Old Shaw Lane.",
    businessModel:
      "Weekend courses and family breaks. 01793 771080. A Swindon walk is not a closing.",
    foundingProcess:
      "Foundation for Alternatives, 1975 lease. Sue Coppard’s WWOOF tea of the mid-1970s.",
    governance:
      "The farm and the Friends of Lower Shaw Farm. A weekend is not membership.",
    website: "https://www.lowershawfarm.co.uk/",
    timeline: [
      { year: "1974", event: "Borough compulsory purchase." },
      { year: "1975", event: "Foundation for Alternatives lease." },
      { year: "Present", event: "2026 events. A weekend, not Old Shaw Lane." },
    ],
  },
  {
    slug: "liberty-hill",
    name: "Liberty Hill Farm",
    location: "511 Liberty Hill, Rochester, VT 05767",
    region: "Vermont, USA",
    country: "United States",
    foundedYear: 1979,
    foundedLabel: "1979 (Kennett dairy). Inn from winter 1984",
    members: 15,
    membersLabel: "A family dairy. Inn guests. Residential membership not isolated",
    acres: 240,
    acresLabel: "240-acre farm. A couple hundred acres off Route 100",
    legalStructure:
      "Private dairy farm and inn. Vermont’s first Green Agritourism Enterprise. You book a room. You do not buy Liberty Hill.",
    legalCategory: "Private farm",
    stillActive: true,
    images: [
      "/communities/liberty-hill-land.jpg",
      "/communities/liberty-hill-1.jpg",
      "/communities/liberty-hill-2.jpg",
      "/communities/liberty-hill-3.jpg",
    ],
    summary:
      "A Rochester dairy inn. Kennetts 1979. Guests from 1984. Seven rooms. Dinner and breakfast from $172 an adult. Two-night minimum. You book a room. You do not buy Liberty Hill.",
    businessModel:
      "Farm stay with meals. Cabot milk. A Rochester walk is not a closing.",
    foundingProcess:
      "Beth and Bob Kennett, 1979 dairy, inn 1984.",
    governance:
      "The family. An inn night is not membership. Write beth@libertyhillfarm.com.",
    website: "https://www.libertyhillfarm.com/",
    timeline: [
      { year: "1825", event: "Main house." },
      { year: "1979", event: "Kennett dairy." },
      { year: "1984", event: "Guests and." },
      { year: "Present", event: "Seven rooms, dinner at 6 pm. A room, not Liberty Hill." },
    ],
  },
  {
    slug: "djanbung",
    name: "Djanbung Gardens",
    location: "74 Cecil Street, Nimbin, NSW",
    region: "New South Wales, Australia",
    country: "Australia",
    foundedYear: 1993,
    foundedLabel: "1993 (design and earthworks). Possession 1994. December 1992 development also appears in published accounts",
    members: 15,
    membersLabel: "Permaculture College Australia Course guests and volunteers. Headcount not isolated",
    acres: 5,
    acresLabel: "2.16 hectares / 5 acres. 74 Cecil Street",
    legalStructure:
      "Private permaculture education centre. You book a Hipcamp pitch or a course. You do not buy Cecil Street.",
    legalCategory: "Private farm",
    stillActive: true,
    images: [
      "/communities/djanbung-land.jpg",
      "/communities/djanbung-1.jpg",
      "/communities/djanbung-2.jpg",
      "/communities/djanbung-3.jpg",
    ],
    summary:
      "A five-acre Nimbin permaculture college. Robyn Francis 1993. Hipcamp. Guided tours. PDC camping. You book a pitch. You do not buy Cecil Street.",
    businessModel:
      "Courses, tours, and Hipcamp.",
    foundingProcess:
      "Robyn Francis on a degraded cow pasture. Design 1993. Possession 1994.",
    governance:
      "Permaculture College Australia.",
    website: "https://permaculture.com.au/",
    timeline: [
      { year: "1993", event: "Design. December 1992 development also appears in published accounts." },
      { year: "1994", event: "Possession." },
      { year: "Present", event: "Hipcamp and tours." },
    ],
  },
  {
    slug: "luna-nueva",
    name: "Finca Luna Nueva",
    location: "Chachagua, near La Fortuna, Alajuela",
    region: "Alajuela, Costa Rica",
    country: "Costa Rica",
    foundedYear: 1994,
    foundedLabel: "1994 (organic ginger and turmeric). Regenerative lodge",
    members: 15,
    membersLabel: "A lodge and teaching farm. Staff and guests. Headcount not isolated",
    acres: 127,
    acresLabel: "127-acre regenerative farm. Sacred Seeds Sanctuary: over 300 tropical species",
    legalStructure:
      "Private regenerative farm and lodge. You book a casita. You do not buy the finca.",
    legalCategory: "Private farm",
    stillActive: true,
    images: [
      "/communities/luna-nueva-land.jpg",
      "/communities/luna-nueva-1.jpg",
      "/communities/luna-nueva-2.jpg",
      "/communities/luna-nueva-3.jpg",
    ],
    summary:
      "A 127-acre regenerative lodge near Arenal. Farming from 1994. Casitas and bungalows. Farm tour, cow milking, chocolate workshop. You book a room. You do not buy the finca.",
    businessModel:
      "Lodge, restaurant, and farm tours. SimpleBooking. A La Fortuna drive is not a closing.",
    foundingProcess:
      "Organic ginger and turmeric, 1994.",
    governance:
      "The lodge. A casita night is not membership.",
    website: "https://fincalunanuevalodge.com/",
    timeline: [
      { year: "1994", event: "Farming." },
      { year: "Present", event: "127 acres, Sacred Seeds, casitas. A room, not the finca." },
    ],
  },
  {
    slug: "la-loma",
    name: "La Loma Jungle Lodge",
    location: "Bahía Honda, Isla Bastimentos, Bocas del Toro",
    region: "Bocas del Toro, Panama",
    country: "Panama",
    foundedYear: 2003,
    foundedLabel: "2003 (purchase). Lodge after the farm",
    members: 15,
    membersLabel: "A lodge crew on a cacao farm. Headcount not isolated",
    acres: 55,
    acresLabel: "55 acres of rainforest and farmland",
    legalStructure:
      "Private cacao and permaculture farm with a lodge. Boat only. You book a bungalow. You do not buy Bahía Honda.",
    legalCategory: "Private farm",
    stillActive: true,
    images: [
      "/communities/la-loma-land.jpg",
      "/communities/la-loma-1.jpg",
      "/communities/la-loma-2.jpg",
      "/communities/la-loma-3.jpg",
    ],
    summary:
      "A 55-acre cacao farm on Bastimentos. Purchase 2003. Open-air bungalows. Cacao and permaculture tour in the stay. Boat from Bocas. You book a bungalow. You do not buy Bahía Honda.",
    businessModel:
      "All-inclusive lodge. Farm-to-table. A Bocas boat is not a closing.",
    foundingProcess:
      "Farm first, lodge after. Purchase 2003.",
    governance:
      "The lodge. A bungalow night is not membership.",
    website: "https://www.thejunglelodge.com/",
    timeline: [
      { year: "2003", event: "Purchase." },
      { year: "Present", event: "55 acres, cacao tour. A bungalow, not Bahía Honda." },
    ],
  },
  {
    slug: "rancho-margot",
    name: "Rancho Margot",
    location: "El Castillo, Lake Arenal, Alajuela",
    region: "Alajuela, Costa Rica",
    country: "Costa Rica",
    foundedYear: 2004,
    foundedLabel: "2004 (Juan Sostheim story page). About 400 acres / Retreat Guru",
    members: 15,
    membersLabel: "A regenerative ranch and eco-lodge. Staff and guests. Headcount not isolated",
    acres: 400,
    acresLabel: "More than four hundred acres. Story page: 400 acres in 2004",
    legalStructure:
      "Private regenerative ranch and lodge.",
    legalCategory: "Private farm",
    stillActive: true,
    images: [
      "/communities/rancho-margot-land.jpg",
      "/communities/rancho-margot-1.jpg",
      "/communities/rancho-margot-2.jpg",
      "/communities/rancho-margot-3.jpg",
    ],
    summary:
      "A 400-acre regenerative ranch by Lake Arenal. Juan Sostheim 2004. Nineteen bungalows and twenty bunkhouse quarters. Cloudbeds. Dairy, pigs, chickens, gardens.",
    businessModel:
      "Lodge, meals, ranch tours. Carbon-neutral 2012.",
    foundingProcess:
      "Sostheim, 2004.",
    governance:
      "The ranch.",
    website: "https://www.ranchomargot.com/",
    timeline: [
      { year: "2004", event: "Sostheim." },
      { year: "2012", event: "Certified carbon-neutral." },
      { year: "Present", event: "Bungalows and bunkhouse." },
    ],
  },
  {
    slug: "fat-sheep",
    name: "Fat Sheep Farm",
    location: "122 Best Road, Hartland, VT 05089",
    region: "Vermont, USA",
    country: "United States",
    foundedYear: 2016,
    foundedLabel: "2016 (Suzy Kaplan and Todd Heyman of Edible Vermont). SBA: farm-stay on 60 acres in 2017. Boston Globe: to Vermont in 2016",
    members: 15,
    membersLabel: "A family sheep farm. Cabin guests. Headcount not isolated",
    acres: 60,
    acresLabel: "60 acres. 122 Best Road, Hartland",
    legalStructure:
      "Private farm and five cabins. You book a cabin. You do not buy Best Road.",
    legalCategory: "Private farm",
    stillActive: true,
    images: [
      "/communities/fat-sheep-land.jpg",
      "/communities/fat-sheep-1.jpg",
      "/communities/fat-sheep-2.jpg",
      "/communities/fat-sheep-3.jpg",
    ],
    summary:
      "A 60-acre Hartland sheep farm. Kaplan and Heyman 2016 of Edible Vermont. Five cabins. ThinkReservations. Chores, cheese, sourdough. Yankee Magazine best farm stay 2021. You book a cabin. You do not buy Best Road.",
    businessModel:
      "Cabin stays. Workshops of Edible Vermont. A Hartland walk is not a closing.",
    foundingProcess:
      "Kaplan and Heyman, 2016, of Edible Vermont. Cabins.",
    governance:
      "The farm. A cabin night is not a share. (802) 436-4696.",
    website: "https://www.fatsheepfarmvermont.com/",
    timeline: [
      { year: "2016", event: "Kaplan and Heyman of Edible Vermont." },
      { year: "2017", event: "Farm-stay of the SBA piece." },
      { year: "Present", event: "Five cabins. A cabin, not Best Road." },
    ],
  },
  {
    slug: "wonderfield",
    name: "Wonderfield Farm",
    location: "10707 E Gobbler Drive, Floral City, FL 34436",
    region: "Florida, USA",
    country: "United States",
    foundedYear: 2018,
    foundedLabel: "2018 (Tara Hubbard co-founded after a 2018 yoga retreat). Family purchase 2016",
    members: 15,
    membersLabel: "A regenerative farm and gathering place. Headcount not isolated",
    acres: 66,
    acresLabel: "66 acres. Flying Eagle Preserve",
    legalStructure:
      "Private regenerative farm.",
    legalCategory: "Private farm",
    stillActive: true,
    images: [
      "/communities/wonderfield-land.jpg",
      "/communities/wonderfield-1.jpg",
      "/communities/wonderfield-2.jpg",
      "/communities/wonderfield-3.jpg",
    ],
    summary:
      "A 66-acre Floral City grove. Purchase 2016, co-founded 2018. Glamping tents, cottages, farmhouse. Gatherings and events.",
    businessModel:
      "Agritourism: stays, events, tours. info@wonderfieldfarm.com.",
    foundingProcess:
      "Tara Hubbard. First yoga retreat 2018.",
    governance:
      "The farm.",
    website: "https://wonderfieldfarm.com/",
    timeline: [
      { year: "2016", event: "Family purchase." },
      { year: "2018", event: "Co-founded after a yoga retreat." },
      { year: "Present", event: "Glamping, cottages, gatherings." },
    ],
  },
];
