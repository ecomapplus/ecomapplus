import type { Community } from "./communities";

/** Ten living farms with bookable stays, oldest founding first: a Los Altos Hills teaching farm and hostel, a Wayne County farm camp turned cabin stay, a Dorset educational charity with a resident community, a Champlain dairy inn, an Oregon high-country organic ranch, a Caribbean permaculture lodge, a NSW demonstration farm, a Stanly County regenerative farm stay, a North Wales agriwilding camp, and a Devon CIC family camp. */
export const livingBatch20Communities: Community[] = [
  {
    slug: "hidden-villa",
    name: "Hidden Villa",
    location: "26870 Moody Road, Los Altos Hills, CA 94022",
    region: "California, USA",
    country: "United States",
    foundedYear: 1924,
    foundedLabel: "1924 (Frank and Josephine Duveneck purchase). Hostel 1937. Multicultural summer camp 1945. Trust 1960",
    members: 15,
    membersLabel: "A teaching farm, hostel, and camp. Residential headcount not isolated",
    acres: 1600,
    acresLabel: "About 1,600 acres of open space. Moody Road, Los Altos Hills",
    legalStructure:
      "The Trust for Hidden Villa, a 501(c)(3) (1960). You book a hostel cabin or a camp.",
    legalCategory: "Educational nonprofit",
    stillActive: true,
    images: [
      "/communities/hidden-villa-land.jpg",
      "/communities/hidden-villa-1.jpg",
      "/communities/hidden-villa-2.jpg",
      "/communities/hidden-villa-3.jpg",
    ],
    summary:
      "A nonprofit wilderness preserve and environmental education center at 26870 Moody Road in Los Altos Hills. Frank and Josephine Duveneck bought the land in 1924, opened the West’s first youth hostel here in 1937, and started a multicultural summer camp in 1945. The Trust for Hidden Villa has held it as a 501(c)(3) since 1960: about 1,600 acres, an organic teaching farm and garden, hostel cabins from September to May, and camp in summer. You book a cabin.",
    businessModel:
      "Education, farm sales, hostel, and summer camp.",
    foundingProcess:
      "Frank and Josephine Duveneck bought the land in 1924. The hostel opened in 1937, the multicultural summer camp in 1945, the Trust in 1960.",
    governance:
      "The Trust for Hidden Villa. Staff and board of a 501(c)(3).",
    website: "https://www.hiddenvilla.org/",
    timeline: [
      { year: "1924", event: "Duvenecks purchase." },
      { year: "1937", event: "West’s first American youth hostel." },
      { year: "1945", event: "Multicultural children’s summer camp." },
      { year: "1960", event: "Trust for Hidden Villa 501(c)(3)." },
      { year: "Present", event: "Organic farm. Hostel September–May. Summer camp." },
    ],
  },
  {
    slug: "journeys-end",
    name: "Journey’s End Farm",
    location: "364 Sterling Road, Newfoundland, PA 18445",
    region: "Pennsylvania, USA",
    country: "United States",
    foundedYear: 1939,
    foundedLabel: "1939 (Journey’s End Farm Camp). Sleep-away camp 1939–2020. Cabins on Hipcamp",
    members: 15,
    membersLabel: "A family farm. Headcount not isolated",
    acres: 100,
    acresLabel: "Over 100 acres of woods and pastures. 364 Sterling Road",
    legalStructure:
      "Family farm. Journey’s End Farm Camp, Inc. You book a cabin.",
    legalCategory: "Family farm",
    stillActive: true,
    images: [
      "/communities/journeys-end-land.jpg",
      "/communities/journeys-end-1.jpg",
      "/communities/journeys-end-2.jpg",
      "/communities/journeys-end-3.jpg",
    ],
    summary:
      "A Wayne County family farm. Camp 1939–2020. Two cabins in the farm hub, plus tent sites. Gardens and the old cow barn. You book a cabin.",
    businessModel:
      "Cabin and tent stays. Food for themselves and others.",
    foundingProcess:
      "Leon and Edith Allen, 1939. Camp through 2020. Cabins after that.",
    governance:
      "The family.",
    website: "https://www.journeysendfarm.org/",
    timeline: [
      { year: "1939", event: "Farm camp founded." },
      { year: "2020", event: "Sleep-away camp closed. Cabins and tent sites remain." },
      { year: "Present", event: "Two cabins in the farm hub. Hipcamp." },
    ],
  },
  {
    slug: "monkton-wyld",
    name: "Monkton Wyld Court",
    location: "Charmouth, Bridport, Dorset DT6 6DQ",
    region: "England, United Kingdom",
    country: "United Kingdom",
    foundedYear: 1940,
    foundedLabel: "1848 rectory. School 1940–1982. Educational charity for sustainable living after that",
    members: 12,
    membersLabel: "A small resident community and volunteers. Headcount not isolated",
    acres: 11,
    acresLabel: "Eleven acres. 14-bedroom Victorian rectory",
    legalStructure:
      "Educational registered charity. Charity Commission: Monkton Wyld School Limited. Courses and B&B.",
    legalCategory: "Educational charity",
    stillActive: true,
    images: [
      "/communities/monkton-wyld-land.jpg",
      "/communities/monkton-wyld-1.jpg",
      "/communities/monkton-wyld-2.jpg",
      "/communities/monkton-wyld-3.jpg",
    ],
    summary:
      "An 1848 Grade II listed Victorian Gothic rectory near Charmouth, Dorset — Richard Cromwell Carpenter’s house for the adjacent church — that spent 1940–1982 as a progressive co-ed boarding school (Karl and Eleanor Urban / Swinglers) before becoming an educational charity for sustainable living. Today a residential community and short-term volunteers run a vegetarian country guest house that funds courses, family weeks, and venue stays; decisions are by consensus, and the door in is usually a two-week volunteer visit. Eleven acres, a walled organic kitchen garden, and the Jurassic Coast a short hop away. Still a working Court, not a theme-park eco-resort.",
    businessModel:
      "Courses, B&B, and self-catering. Kitchen fed from the walled garden.",
    foundingProcess:
      "Richard Cromwell Carpenter’s 1848 rectory. Progressive co-ed boarding school 1940–1982 (Karl and Eleanor Urban / Swinglers). Educational charity for sustainable living after that.",
    governance:
      "Charity trustees plus the resident community. Consensus. Volunteers write the Court.",
    website: "https://monktonwyldcourt.co.uk/",
    timeline: [
      { year: "1848", event: "Grade II Victorian Gothic rectory. Richard Cromwell Carpenter." },
      { year: "1940–1982", event: "Progressive co-ed boarding school. Karl and Eleanor Urban / Swinglers." },
      { year: "Present", event: "Resident community, vegetarian guest house, courses. Two-week volunteer visit." },
    ],
  },
  {
    slug: "shelburne-farms",
    name: "Shelburne Farms",
    location: "99 Inn Road, Shelburne, VT 05482",
    region: "Vermont, USA",
    country: "United States",
    foundedYear: 1972,
    foundedLabel: "1972 (nonprofit). Estate 1886–87. Bequest 1986",
    members: 15,
    membersLabel: "A 501(c)(3) education campus. Inn guests and staff. Residential membership not isolated",
    acres: 1400,
    acresLabel: "About 1,400 acres on the Lake Champlain shore",
    legalStructure:
      "Shelburne Farms, a nonprofit education organization. National Historic Landmark. Seasonal inn.",
    legalCategory: "Educational nonprofit",
    stillActive: true,
    images: [
      "/communities/shelburne-farms-land.jpg",
      "/communities/shelburne-farms-1.jpg",
      "/communities/shelburne-farms-2.jpg",
      "/communities/shelburne-farms-3.jpg",
    ],
    summary:
      "A 1,400-acre working farm and National Historic Landmark on Lake Champlain in Shelburne, Vermont. Dr. William Seward Webb and Eliza Osgood Vanderbilt Webb laid out the Gilded Age estate in the 1880s with Frederick Law Olmsted’s landscape guidance and Robert Henderson Robertson’s buildings; descendants incorporated the nonprofit education center in 1972. A grass-based dairy of about 125 Brown Swiss cows still makes farmhouse cheddar, and the seasonal Inn puts overnight guests on the same shore. You book a room. You do not buy Inn Road.",
    businessModel:
      "Inn, dining, cheddar, tours, and education. Seasonal inn.",
    foundingProcess:
      "Webb estate 1886–87. Fourth-generation Webb siblings formed the nonprofit in 1972. Bequest 1986.",
    governance:
      "Nonprofit board and staff.",
    website: "https://shelburnefarms.org/",
    timeline: [
      { year: "1886–87", event: "Webb estate." },
      { year: "1972", event: "Nonprofit. Fourth-generation Webb siblings." },
      { year: "1986", event: "Bequest." },
      { year: "Present", event: "Dairy, cheddar, inn at 99 Inn Road." },
    ],
  },
  {
    slug: "willow-witt",
    name: "Willow-Witt Ranch",
    location: "658 Shale City Road, Ashland, OR 97520",
    region: "Oregon, USA",
    country: "United States",
    foundedYear: 1985,
    foundedLabel: "1985 (Suzanne Willow and Lanita Witt). 445 acres",
    members: 15,
    membersLabel: "A working organic ranch. Suzanne Willow continues after Lanita Witt’s death 15 December 2022. Headcount not isolated",
    acres: 445,
    acresLabel: "445 acres. Cascade-Siskiyou high country",
    legalStructure:
      "Private ranch plus The Crest, a legacy nonprofit. Wall tents and the farmhouse are booked stays.",
    legalCategory: "Private farm",
    stillActive: true,
    images: [
      "/communities/willow-witt-land.jpg",
      "/communities/willow-witt-1.jpg",
      "/communities/willow-witt-2.jpg",
      "/communities/willow-witt-3.jpg",
    ],
    summary:
      "Suzanne Willow and Lanita Witt bought the cattle ranch in 1985. About 445 Cascade-Siskiyou acres above Ashland still run as an organic farm — goats, chickens, vegetables — with farm-stay wall tents. Hand-raised pack goats here carry about 25–30% of their weight, about 30–65 pounds.",
    businessModel:
      "Farm stay, campground, events, and the farm. Book via ReservationKey.",
    foundingProcess:
      "Suzanne Willow and Lanita Witt bought the cattle ranch in 1985. Suzanne continues after Lanita’s death on 15 December 2022.",
    governance:
      "The ranch and The Crest, a legacy nonprofit.",
    website: "https://willowwittranch.com/",
    timeline: [
      { year: "1985", event: "Suzanne Willow and Lanita Witt buy the cattle ranch." },
      { year: "2022", event: "Lanita Witt dies 15 December. Suzanne continues." },
      { year: "Present", event: "Organic farm, wall tents, campground." },
    ],
  },
  {
    slug: "punta-mona",
    name: "Punta Mona",
    location: "Punta Mona, Manzanillo, Limón Province",
    region: "Limón, Costa Rica",
    country: "Costa Rica",
    foundedYear: 1997,
    foundedLabel: "1997 (Stephen Brooks). 85 acres",
    members: 15,
    membersLabel: "An international resident crew. Headcount not isolated",
    acres: 85,
    acresLabel: "About 85 acres: 35 cultivated, the rest national-forest habitat",
    legalStructure:
      "Family-owned education centre. Ecoversity campus partner. You book a bungalow or a Saturday dinner.",
    legalCategory: "Private farm",
    stillActive: true,
    images: [
      "/communities/punta-mona-land.jpg",
      "/communities/punta-mona-1.jpg",
      "/communities/punta-mona-2.jpg",
      "/communities/punta-mona-3.jpg",
    ],
    summary:
      "A Caribbean regenerative farm on the Limón coast at Punta Mona. Stephen Brooks started it in 1997. Off-grid, about 85 acres — 35 cultivated, the rest national-forest habitat — with bamboo cabins built from fallen trees. You get there by boat from Manzanillo or on foot. Farm tours run Wednesday and Saturday; Saturday dinner is farm-to-table. You book a casita.",
    businessModel:
      "Lodging, meals, courses, and Saturday dinners.",
    foundingProcess:
      "Stephen Brooks started the farm in 1997. Confirm with the farm.",
    governance:
      "Family centre plus the resident crew.",
    website: "https://www.puntamona.org/",
    timeline: [
      { year: "1997", event: "Founded. 85 acres." },
      { year: "Present", event: "Bungalows, farm-to-table Saturdays. Boat from Manzanillo or a hike." },
    ],
  },
  {
    slug: "zaytuna",
    name: "Zaytuna Farm",
    location: "1158 Pinchin Road, The Channon, NSW",
    region: "New South Wales, Australia",
    country: "Australia",
    foundedYear: 2006,
    foundedLabel: "About 2006. 27 hectares / 66 acres",
    members: 15,
    membersLabel: "Geoff and Nadia Lawton’s demonstration farm. Course and camp guests. Headcount not isolated",
    acres: 66,
    acresLabel: "27 hectares (66 acres). Terania Creek, The Channon",
    legalStructure:
      "Private family farm and permaculture demonstration site. You book a campsite or a course. You do not buy Pinchin Road.",
    legalCategory: "Private farm",
    stillActive: true,
    images: [
      "/communities/zaytuna-land.jpg",
      "/communities/zaytuna-1.jpg",
      "/communities/zaytuna-2.jpg",
      "/communities/zaytuna-3.jpg",
    ],
    summary:
      "A 27-hectare permaculture demonstration on Terania Creek. Geoff Lawton. Dams, food forest, kitchen garden. Camping. PDC courses. You book a site. You do not buy Pinchin Road.",
    businessModel:
      "Courses, consultancy, and Hipcamp. A Channon walk is not a closing.",
    foundingProcess:
      "Lawton from PRI. Farm named Zaytuna. Confirm the year with the farm.",
    governance:
      "The Lawtons. A campsite night is not membership.",
    website: "https://www.zaytunafarm.com/",
    timeline: [
      { year: "~2006", event: "Lawton on the Channon land. Confirm the year with the farm." },
      { year: "Present", event: "Camping. PDC. A site, not Pinchin Road." },
    ],
  },
  {
    slug: "juneberry-ridge",
    name: "Juneberry Ridge",
    location: "40120 Old Cottonville Road, Norwood, NC 28128",
    region: "North Carolina, USA",
    country: "United States",
    foundedYear: 2008,
    foundedLabel: "2008. Judy Carpenter. About 750 acres",
    members: 15,
    membersLabel: "A regenerative farm and education centre. Staff and farm-stay guests. Headcount not isolated",
    acres: 750,
    acresLabel: "About 750 acres. Old Cottonville Road, Norwood",
    legalStructure:
      "Privately held farm. You book a farm-stay weekend.",
    legalCategory: "Private farm",
    stillActive: true,
    images: [
      "/communities/juneberry-ridge-land.jpg",
      "/communities/juneberry-ridge-1.jpg",
      "/communities/juneberry-ridge-2.jpg",
      "/communities/juneberry-ridge-3.jpg",
    ],
    summary:
      "Judy Carpenter’s regenerative farm on about 750 acres in Norwood, North Carolina. She started it in 2008 as Lucky Clays after she was told to find her own place for competitive clay shooting, then built a five-stand on the land that became Juneberry Ridge. Wooded cabin farm stays run on scheduled weekends. There is aquaponics, Juneberry Jams, and a USA Today 10Best No. 3 farm-stay ranking. You book a weekend.",
    businessModel:
      "Farm stays on scheduled weekends, Juneberry Jams, and workshops.",
    foundingProcess:
      "National champion clay shooter Judy Carpenter was told to find her own place for competitive shooting. She built Lucky Clays five-stand on this land in 2008; Juneberry Ridge grew from that farm.",
    governance:
      "Judy Carpenter’s private farm.",
    website: "https://juneberry.com/",
    timeline: [
      { year: "2008", event: "Judy Carpenter founds Lucky Clays on the Norwood land." },
      { year: "Present", event: "Juneberry Ridge: cabin farm stays, aquaponics, Juneberry Jams." },
    ],
  },
  {
    slug: "henbant",
    name: "Henbant Permaculture",
    location: "Tain Lon, Clynnog-fawr, Caernarfon, LL54 5DF",
    region: "Wales, United Kingdom",
    country: "United Kingdom",
    foundedYear: 2012,
    foundedLabel: "2012 (LinkedIn: Henbant Bach). Agriwilding farm, camp and venue",
    members: 15,
    membersLabel: "A home and a farm. Headcount not isolated",
    acres: 80,
    acresLabel: "80 acres. Clynnog-fawr",
    legalStructure:
      "Private farm. Camping. Cabins. You book a pitch. You do not buy Tain Lon.",
    legalCategory: "Private farm",
    stillActive: true,
    images: [
      "/communities/henbant-land.jpg",
      "/communities/henbant-1.jpg",
      "/communities/henbant-2.jpg",
      "/communities/henbant-3.jpg",
    ],
    summary:
      "An 80-acre agriwilding farm on the Llŷn. Camping. Eggs, pigs, sheep. Cabins — that page has said they can be full. You book a pitch. You do not buy Tain Lon.",
    businessModel:
      "Camping, cabins, venue. Hipcamp. A Clynnog walk is not a closing.",
    foundingProcess:
      "LinkedIn: 2012. Confirm with Matt.",
    governance:
      "The farm. A Hipcamp night is not membership.",
    website: "https://www.henbant.org/",
    timeline: [
      { year: "2012", event: "Founded of LinkedIn. Confirm with henbant.org." },
      { year: "Present", event: "Hipcamp camping. Cabins. A pitch, not Tain Lon." },
    ],
  },
  {
    slug: "on-the-hill",
    name: "On The Hill",
    location: "Oxen Park Farm, Lower Ashton, Exeter EX6 7QW",
    region: "England, United Kingdom",
    country: "United Kingdom",
    foundedYear: 2017,
    foundedLabel: "2017 (On The Hill C.I.C.). Oxen Park Farm 55 acres",
    members: 15,
    membersLabel: "A CIC on a working farm. Headcount not isolated",
    acres: 55,
    acresLabel: "55 acres. Teign Valley, Lower Ashton",
    legalStructure:
      "On The Hill C.I.C. on Oxen Park Farm. You book a family camp. You do not buy Oxen Park.",
    legalCategory: "Community interest company",
    stillActive: true,
    images: [
      "/communities/on-the-hill-land.jpg",
      "/communities/on-the-hill-1.jpg",
      "/communities/on-the-hill-2.jpg",
      "/communities/on-the-hill-3.jpg",
    ],
    summary:
      "A 55-acre organic and biodynamic farm in the Teign Valley. CIC 2017. Family camps 26–30 May and 11–16 August 2026. Sheep, pigs, chickens, cider. You book a camp. You do not buy Oxen Park.",
    businessModel:
      "Family camps, education, Teign Greens boxes. Funders. A Lower Ashton walk is not a share.",
    foundingProcess:
      "C.I.C. 2017. Confirm with the CIC.",
    governance:
      "The CIC. A family-camp booking is not membership. Volunteer days.",
    website: "https://onthehill.camp/",
    timeline: [
      { year: "2017", event: "On The Hill C.I.C." },
      { year: "2026", event: "Spring and summer family camps." },
      { year: "Present", event: "55 acres, organic and biodynamic. A camp, not Oxen Park." },
    ],
  },
];
