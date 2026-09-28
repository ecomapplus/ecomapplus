import type { Community } from "./communities";

/** Ten living farms with a farmstay or volunteer door, oldest founding first: a fifth-generation South Georgia pasture farm with cabins and a twelve-week intern course, a Connecticut Berkshires Jewish retreat with a farm fellowship, a Big Sur cliff farm with a three-month work-scholar season, an 80-acre Sierra ashram of karma yoga, a 1,200-acre Arkansas training ranch with on-site interns, a James River ashram with a Farm Yogi season, a Northeast Kingdom Camphill with a volunteer year, a Mae Taeng permaculture camp of week-long volunteers, a Pahoa rainforest household with a farm-support month, and a Puerto Viejo food-forest lodge of bamboo cabinas. */
export const livingBatch29Communities: Community[] = [
  {
    slug: "white-oak-pastures",
    name: "White Oak Pastures",
    location: "2275 Heron Road, Bluffton, GA 39824",
    region: "Georgia, USA",
    country: "United States",
    foundedYear: 1866,
    foundedLabel: "Family farm soon after the Civil War (Capt. James Edward Harris). Will Harris III’s regenerative turn 1995. Fifth generation",
    members: 80,
    membersLabel: "A large family farm with a restaurant, store, and a twelve-week intern course. Headcount not isolated",
    acres: 3000,
    acresLabel: "About 3,000 acres of regenerative pasture. Cattle, hogs, poultry, and a certified-organic garden",
    legalStructure:
      "Private Harris family farm. You book a cabin or apply for a twelve-week intern course. You do not buy Bluffton.",
    legalCategory: "Regenerative family farm",
    stillActive: true,
    images: [
      "/communities/white-oak-pastures-land.jpg",
      "/communities/white-oak-pastures-1.jpg",
      "/communities/white-oak-pastures-2.jpg",
      "/communities/white-oak-pastures-3.jpg",
    ],
    summary:
      "A fifth-generation pasture farm in Bluffton. Cabins, a Pond House, and downtown houses. Twelve-week internships. brandi.hilton@whiteoakpastures.com. You book a cabin or you apply. You do not buy Heron Road.",
    businessModel:
      "Meat, a general store, Pasture restaurant, cabin nights, and intern labour. (229) 641-2081. A Bainbridge drive is not a closing.",
    foundingProcess:
      "Capt. James Edward Harris took the farm after the Civil War. Industrial years after WWII. Will Harris III began the regenerative turn in 1995. The public stay is cabins, a Pond House, and downtown houses.",
    governance:
      "The Harris family. A cabin night is not Early County.",
    website: "https://whiteoakpastures.com/",
    timeline: [
      { year: "1866", event: "Family farm of Capt. James Edward Harris." },
      { year: "1995", event: "Will Harris III’s regenerative turn." },
      { year: "Present", event: "Cabins and a twelve-week intern course. A night, not Bluffton." },
    ],
  },
  {
    slug: "isabella-freedman",
    name: "Isabella Freedman Jewish Retreat Center",
    location: "116 Johnson Road, Falls Village, CT 06031",
    region: "Connecticut, USA",
    country: "United States",
    foundedYear: 1893,
    foundedLabel: "Jewish Working Girls Vacation Society 1893. Isabella Freedman campus in the Connecticut Berkshires. Adamah Farm Fellowship",
    members: 40,
    membersLabel: "Retreat staff plus a three-month Adamah Farm Fellowship cohort. About 6,000 guests a year. Headcount not isolated",
    acres: 400,
    acresLabel: "400-acre Connecticut Berkshires campus. Organic farm cited as about six to twenty acres with goats, greenhouses, and a commercial kitchen",
    legalStructure:
      "Nonprofit retreat. You book a retreat or apply for the three-month Farm Fellowship. You do not buy Falls Village.",
    legalCategory: "Jewish retreat farm",
    stillActive: true,
    images: [
      "/communities/isabella-freedman-land.jpg",
      "/communities/isabella-freedman-1.jpg",
      "/communities/isabella-freedman-2.jpg",
      "/communities/isabella-freedman-3.jpg",
    ],
    summary:
      "A Falls Village retreat on 400 acres. Kosher farm-to-table. Three-month Adamah Farm Fellowship, housing included. You book a retreat or you apply. You do not buy Johnson Road.",
    businessModel:
      "Retreats, rentals, farm produce, and the fellowship. A New York drive is not a closing.",
    foundingProcess:
      "Jewish Working Girls Vacation Society 1893. The Berkshires campus and Adamah farm programmes sit on that older charitable line. The public stay door is Isabella Freedman.",
    governance:
      "Adamah. A fellowship summer is not 400 acres.",
    website: "https://adamah.org/isabella-freedman/",
    timeline: [
      { year: "1893", event: "Jewish Working Girls Vacation Society." },
      { year: "Present", event: "400 acres, farm fellowship. A season, not Falls Village." },
    ],
  },
  {
    slug: "esalen",
    name: "Esalen Institute",
    location: "55000 Highway 1, Big Sur, CA 93920",
    region: "California, USA",
    country: "United States",
    foundedYear: 1962,
    foundedLabel: "1962 · Michael Murphy and Richard Price",
    members: 80,
    membersLabel: "Year-round staff plus a three-month Work Scholar cohort",
    acres: 27,
    acresLabel: "About 27 acres on an 87-year lease through 2049. Cliff farm and garden above the Pacific",
    legalStructure:
      "California educational nonprofit. You book a workshop or apply for the three-month Work Scholar season. You do not buy Slates Hot Springs.",
    legalCategory: "Educational nonprofit farm",
    stillActive: true,
    images: [
      "/communities/esalen-land.jpg",
      "/communities/esalen-1.jpg",
      "/communities/esalen-2.jpg",
      "/communities/esalen-3.jpg",
    ],
    summary:
      "Big Sur cliff institute since 1962, started by Michael Murphy and Richard Price. Farm & Garden feeds the kitchen. The public work door is the three-month Work Scholar season — shared rooms, kitchen or cabin shifts, plus farm hours. Workshops and baths are the guest path. You apply or book. You do not buy Slates Hot Springs.",
    businessModel:
      "Workshops, lodging, baths, and a paid Work Scholar season. (831) 667-3000.",
    foundingProcess:
      "Murphy and Price opened the institute in 1962. Esselen homelands. The public work door is the three-month Work Scholar season.",
    governance:
      "The nonprofit.",
    website: "https://www.esalen.org/",
    timeline: [
      { year: "1962", event: "Murphy and Price found Esalen." },
      { year: "Present", event: "Farm & Garden and a three-month Work Scholar season." },
    ],
  },
  {
    slug: "sivananda-yoga-farm",
    name: "Sivananda Ashram Yoga Farm",
    location: "14651 Ballantree Lane, Grass Valley, CA 95949",
    region: "California, USA",
    country: "United States",
    foundedYear: 1971,
    foundedLabel: "1971 (Swami Vishnudevananda. Karma Yoga seva-study. 80 acres",
    members: 25,
    membersLabel: "A karma-yoga household plus month-long seva-study guests. Headcount not isolated",
    acres: 80,
    acresLabel: "80 acres in the Sierra foothills. Gardens and grounds",
    legalStructure:
      "501(c)(3) ashram (EIN 95-3190863). You book a yoga vacation or apply for a one-to-three-month Karma Yoga month. You do not buy Ballantree Lane.",
    legalCategory: "Yoga ashram farm",
    stillActive: true,
    images: [
      "/communities/sivananda-yoga-farm-land.jpg",
      "/communities/sivananda-yoga-farm-1.jpg",
      "/communities/sivananda-yoga-farm-2.jpg",
      "/communities/sivananda-yoga-farm-3.jpg",
    ],
    summary:
      "An 80-acre Grass Valley ashram. Vishnudevananda 1971. Karma Yoga, four hours of seva a day, tent or dorm. First week on trial. yogafarm@sivananda.org. You apply. You do not buy the foothills.",
    businessModel:
      "Yoga vacations, teacher training, and Karma Yoga months. (530) 272-9322.",
    foundingProcess:
      "Swami Vishnudevananda opened the Yoga Farm in 1971. The public work door is the Karma Yoga page.",
    governance:
      "The ashram. A month of seva is not 80 acres.",
    website: "https://sivanandayogafarm.org/",
    timeline: [
      { year: "1971", event: "Swami Vishnudevananda founds the Yoga Farm." },
      { year: "Present", event: "Karma Yoga months. A month, not Grass Valley." },
    ],
  },
  {
    slug: "heifer-ranch",
    name: "Heifer Ranch",
    location: "55 Heifer Road, Perryville, AR 72126",
    region: "Arkansas, USA",
    country: "United States",
    foundedYear: 1971,
    foundedLabel: "1971 breeding and quarantine ranch. Regenerative training campus. 1,200 acres",
    members: 30,
    membersLabel: "Ranch staff plus on-site interns. Headcount not isolated",
    acres: 1200,
    acresLabel: "1,200-acre regenerative training ranch. Organic gardens and pasture livestock",
    legalStructure:
      "Heifer International training ranch. On-site internship with housing.",
    legalCategory: "Nonprofit training ranch",
    stillActive: true,
    images: [
      "/communities/heifer-ranch-land.jpg",
      "/communities/heifer-ranch-1.jpg",
      "/communities/heifer-ranch-2.jpg",
      "/communities/heifer-ranch-3.jpg",
    ],
    summary:
      "A 1,200-acre Perryville ranch. Heifer 1971. Interns live on site and work gardens and livestock. HeiferRanch@heifer.org.",
    businessModel:
      "Farmer training, livestock, and intern labour. (501) 889-7001.",
    foundingProcess:
      "Heifer used the ranch from 1971 as a breeding and holding yard. The 2019 turn is a living classroom.",
    governance:
      "Heifer International.",
    website: "https://www.heifer.org/usa/ranch",
    timeline: [
      { year: "1971", event: "Heifer Ranch as a breeding and quarantine yard." },
      { year: "2019", event: "Turn toward a regenerative living classroom." },
      { year: "Present", event: "1,200 acres, on-site internships." },
    ],
  },
  {
    slug: "yogaville",
    name: "Satchidananda Ashram–Yogaville",
    location: "108 Yogaville Way, Buckingham, VA 23921",
    region: "Virginia, USA",
    country: "United States",
    foundedYear: 1980,
    foundedLabel: "1980 ashram (Sri Swami Satchidananda; 600 acres bought 1979). 750 acres. Farm Yogi and residential volunteer",
    members: 60,
    membersLabel: "Residents, guests, and residential volunteers. Headcount not isolated",
    acres: 750,
    acresLabel: "750 acres on the James River. One-acre organic farm",
    legalStructure:
      "Satchidananda Ashram–Yogaville Inc. Retreats, residential volunteer, Farm Yogi.",
    legalCategory: "Yoga ashram farm",
    stillActive: true,
    images: [
      "/communities/yogaville-land.jpg",
      "/communities/yogaville-1.jpg",
      "/communities/yogaville-2.jpg",
      "/communities/yogaville-3.jpg",
    ],
    summary:
      "A 750-acre Integral Yoga ashram on the James River in Buckingham, Virginia. Swami Satchidananda bought the first 600 acres in 1979 and opened the ashram in 1980; the lotus-shaped LOTUS shrine, with altars for a dozen world faiths, was dedicated in 1986. Residential volunteers work about 33 hours a week for a dorm bed, and Farm Yogi is the separate farm-hours door. You apply. You do not buy Yogaville Way.",
    businessModel:
      "Retreats, teacher training, and volunteer terms. (800) 858-9642.",
    foundingProcess:
      "Swami Satchidananda bought Virginia land in 1979 and opened the ashram in 1980. LOTUS 1986.",
    governance:
      "The ashram.",
    website: "https://www.yogaville.org/",
    timeline: [
      { year: "1979", event: "Virginia land bought." },
      { year: "1980", event: "Satchidananda Ashram–Yogaville." },
      { year: "1986", event: "LOTUS, the Light Of Truth Universal Shrine." },
      { year: "Present", event: "Farm Yogi and residential volunteer." },
    ],
  },
  {
    slug: "heartbeet",
    name: "Heartbeet Lifesharing",
    location: "218 Town Farm Road, Hardwick, VT 05843",
    region: "Vermont, USA",
    country: "United States",
    foundedYear: 2000,
    foundedLabel: "2000 of Idealist / heartbeet.org. Camphill Association full member. 150 acres",
    members: 50,
    membersLabel: "About 50 people, including adults with developmental disabilities, long-term coworkers, and about 12 short-term volunteers of Idealist / camphill.org",
    acres: 150,
    acresLabel: "150-acre biodynamic-inspired farm in Hardwick and Craftsbury of Idealist / camphill.org. Gardens, forestry, and workshops",
    legalStructure:
      "Vermont Camphill 501(c)(3) and licensed therapeutic residence / heartbeet.org. You apply for a live-in volunteer year. You do not buy Town Farm Road.",
    legalCategory: "Camphill nonprofit",
    stillActive: true,
    images: [
      "/communities/heartbeet-land.jpg",
      "/communities/heartbeet-1.jpg",
      "/communities/heartbeet-2.jpg",
      "/communities/heartbeet-3.jpg",
    ],
    summary:
      "A Hardwick Camphill on 150 acres. Founded 2000 of Idealist. Villagers, coworkers, and a volunteer year. coworker@heartbeet.org. You apply. You do not buy the Northeast Kingdom.",
    businessModel:
      "Disability-services funding, a biodynamic farm, crafts, and volunteer years. (802) 472-3285.",
    foundingProcess:
      "Heartbeet began in 2000 as a land-based Camphill of Idealist. The public work door is a coworker year, not a cabin listing.",
    governance:
      "A charitable board and Camphill coworker culture. A volunteer year is not 150 acres. Safeguarding is the week.",
    website: "https://heartbeet.org/",
    timeline: [
      { year: "2000", event: "Heartbeet Lifesharing of Idealist / heartbeet.org." },
      { year: "Present", event: "150 acres, a volunteer year. A year, not Hardwick." },
    ],
  },
  {
    slug: "panya-project",
    name: "Panya Project",
    location: "Ban Mae Jo, Mae Taeng District, Chiang Mai, Thailand",
    region: "Chiang Mai, Thailand",
    country: "Thailand",
    foundedYear: 2002,
    foundedLabel: "Proposed 2002 as Baan Thai by Christian Shearer. Panya Project. 10 acres / 4 ha",
    members: 15,
    membersLabel: "A small volunteer-run household plus short-stay and course weeks. Headcount not isolated",
    acres: 10,
    acresLabel: "10 acres (four hectares) between village farms and second-growth forest",
    legalStructure:
      "Volunteer-run permaculture education centre. You register for a week or longer. You do not buy Mae Taeng.",
    legalCategory: "Permaculture education farm",
    stillActive: true,
    images: [
      "/communities/panya-project-land.jpg",
      "/communities/panya-project-1.jpg",
      "/communities/panya-project-2.jpg",
      "/communities/panya-project-3.jpg",
    ],
    summary:
      "A 10-acre Mae Taeng permaculture camp. Shearer 2002. One-week minimum, 3,000 baht then 400 baht a day. panyaproject@gmail.com. You write first. You do not buy Ban Mae Jo.",
    businessModel:
      "Volunteer contributions, PDCs, and building workshops. A Chiang Mai drive is not a closing.",
    foundingProcess:
      "Christian Shearer proposed Baan Thai in 2002. Earth buildings and a volunteer week are the public door.",
    governance:
      "A small volunteer household. A week is not four hectares. They close intake during courses.",
    website: "https://www.panyaproject.org/",
    timeline: [
      { year: "2002", event: "Baan Thai / Panya proposed." },
      { year: "Present", event: "Week-long volunteers. A week, not Mae Taeng." },
    ],
  },
  {
    slug: "laakea",
    name: "La'akea Permaculture Community",
    location: "Four miles south of Pāhoa, Island of Hawai'i",
    region: "Hawai'i, USA",
    country: "United States",
    foundedYear: 2005,
    foundedLabel: "Land 2005. Small egalitarian household. 23 acres",
    members: 12,
    membersLabel: "A small family-style household plus a farm-support month. Headcount not isolated",
    acres: 23,
    acresLabel: "23 acres of rainforest gardens, taro, orchards, and greenhouses. Bees, chickens, and ducks",
    legalStructure:
      "Small intentional household on private land. You apply for a one-month farm-support term or write for a farmstay. You do not buy Pāhoa.",
    legalCategory: "Permaculture community",
    stillActive: true,
    images: [
      "/communities/laakea-land.jpg",
      "/communities/laakea-1.jpg",
      "/communities/laakea-2.jpg",
      "/communities/laakea-3.jpg",
    ],
    summary:
      "A Pāhoa rainforest household on 23 acres. Land 2005. Farm support, $12 a day, one month. Tours and farmstays. (808) 443-4076. You write. You do not buy Kalapana road.",
    businessModel:
      "Farm-support tuition, farmstays, classes, and a household garden. A Hilo drive is not a closing.",
    foundingProcess:
      "The household bought land in 2005. Tropical permaculture and a farm-support month are the public doors.",
    governance:
      "A small egalitarian household. A month is not 23 acres.",
    website: "https://permaculture-hawaii.com/",
    timeline: [
      { year: "2005", event: "Land bought." },
      { year: "Present", event: "Farm-support month. A month, not Pāhoa." },
    ],
  },
  {
    slug: "finca-tierra",
    name: "Finca Tierra",
    location: "Near Puerto Viejo de Talamanca, Limón, Costa Rica",
    region: "Limón, Costa Rica",
    country: "Costa Rica",
    foundedYear: 2008,
    foundedLabel: "2008 on degraded cattle pasture. Nine-acre food forest. Plant · Harvest · Cook retreat",
    members: 12,
    membersLabel: "A teaching homestead plus course and retreat weeks. Eight cabinas a week. Headcount not isolated",
    acres: 9,
    acresLabel: "Nine-acre off-grid tropical farm. Food forest, roots, fruit, vegetables",
    legalStructure:
      "Private teaching farm. You book a bamboo-cabina retreat or a PDC. You do not buy Puerto Viejo.",
    legalCategory: "Tropical teaching farm",
    stillActive: true,
    images: [
      "/communities/finca-tierra-land.jpg",
      "/communities/finca-tierra-1.jpg",
      "/communities/finca-tierra-2.jpg",
      "/communities/finca-tierra-3.jpg",
    ],
    summary:
      "A nine-acre Puerto Viejo food forest. 2008 pasture. Bamboo cabinas, eight a week. PDC weeks. You book. You do not buy Talamanca.",
    businessModel:
      "Retreats, PDCs, and farm-to-table.",
    foundingProcess:
      "Degraded cattle pasture in 2008. The public stay door is the Plant · Harvest · Cook retreat.",
    governance:
      "The teaching farm.",
    website: "https://fincatierra.com/",
    timeline: [
      { year: "2008", event: "Homestead on degraded pasture." },
      { year: "Present", event: "Nine acres, bamboo cabinas." },
    ],
  },
];
