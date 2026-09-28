import type { Community } from "./communities";

/** Ten living farms with a work-trade or internship door, oldest founding first: a Shenandoah pasture farm that takes summer stewards, a Coromandel organic trust with free four-week stays, a Marin Zen farm apprenticeship, a Ghent biodynamic year, a Hudson Camphill with a twelve-month volunteer year, a Capay Valley intern year, a Cold Spring livestock apprenticeship, a Soquel Camphill volunteer year, a Willamette regenerative intern year, and a Tiskilwa teaching farm with a summer cohort. */
export const livingBatch24Communities: Community[] = [
  {
    slug: "polyface",
    name: "Polyface Farm",
    location: "43 Pure Meadows Lane, Swoope, VA 24479",
    region: "Virginia, USA",
    country: "United States",
    foundedYear: 1961,
    foundedLabel: "1961 (William and Lucille Salatin; Joel Salatin). 500 acres",
    members: 20,
    membersLabel: "Family farm plus a summer stewardship crew. About eight-plus stewards. Staff not isolated",
    acres: 500,
    acresLabel: "500 acres. Pastured poultry, pigs, cattle, sheep",
    legalStructure:
      "Private Salatin family farm. Five-month summer stewardship.",
    legalCategory: "Private family farm",
    stillActive: true,
    images: [
      "/communities/polyface-land.jpg",
      "/communities/polyface-1.jpg",
      "/communities/polyface-2.jpg",
      "/communities/polyface-3.jpg",
    ],
    summary:
      "William and Lucille Salatin bought worn-out land in Swoope, Virginia, in 1961. Their son Joel’s pasture model — poultry, cattle, pigs, sheep — still runs on that Shenandoah farm. The public door is a five-month summer stewardship, May through September: room and most board, U.S. citizens, applications for a few days each August. In 1961 they bought the most worn-out, eroded farm near Staunton and healed it with daily cow moves, ponds, and portable shelters on perennial prairie.",
    businessModel:
      "Direct meat sales, farm tours, and a summer stewardship. 540-885-3590.",
    foundingProcess:
      "William and Lucille Salatin bought the most worn-out, eroded farm near Staunton in 1961. Daily cow moves, ponds, and portable shelters on perennial prairie. The public apprenticeship is the door.",
    governance:
      "The family farm.",
    website: "https://polyfacefarm.com/",
    timeline: [
      { year: "1961", event: "William and Lucille Salatin buy worn-out land near Staunton." },
      { year: "Present", event: "500 acres. Pastured livestock. Five-month summer stewardship." },
    ],
  },
  {
    slug: "wilderland",
    name: "Wilderland",
    location: "RD1/2486 Tairua Whitianga Road, Kaimarama 3591",
    region: "Coromandel, New Zealand",
    country: "New Zealand",
    foundedYear: 1964,
    foundedLabel: "1964 (Dan and Edith Hansen). 64 hectares",
    members: 18,
    membersLabel: "A volunteer farm. Four-week student terms. Headcount not isolated",
    acres: 158,
    acresLabel: "64 hectares near Whitianga. Gardens, syntropic rows, honey, tea",
    legalStructure:
      "Wilderland Trust. You apply for a four-week stay. You do not buy Kaimarama.",
    legalCategory: "Charitable trust",
    stillActive: true,
    images: [
      "/communities/wilderland-land.jpg",
      "/communities/wilderland-1.jpg",
      "/communities/wilderland-2.jpg",
      "/communities/wilderland-3.jpg",
    ],
    summary:
      "A Coromandel organic farm since 1964. Volunteering is free again for a four-week term. Twenty hours a week: gardens, harvest, shop shifts. Shorter stays ask $10 a day. You apply. You do not buy the Tairua road.",
    businessModel:
      "Farm products, a shop, and volunteer labour. visit@wilderland.org.nz.",
    foundingProcess:
      "Dan and Edith Hansen, 1964. Abandoned farmland turned organic.",
    governance:
      "The trust. A four-week term is not a share.",
    website: "https://www.wilderland.org.nz/",
    timeline: [
      { year: "1964", event: "Hansens." },
      { year: "Present", event: "Free four-week volunteer terms. A term, not Kaimarama." },
    ],
  },
  {
    slug: "green-gulch",
    name: "Green Gulch Farm Zen Center",
    location: "1601 Shoreline Highway, Muir Beach, CA 94965",
    region: "California, USA",
    country: "United States",
    foundedYear: 1972,
    foundedLabel: "1972 (San Francisco Zen Center). Farm and Land Steward apprenticeships founded 1994",
    members: 40,
    membersLabel: "A residential Zen temple and organic farm. Apprentice headcount not isolated",
    acres: 97,
    acresLabel: "Seven acres of certified organic fields, a 1½-acre garden, and about 90 acres around",
    legalStructure:
      "San Francisco Zen Center, a Soto Zen religious nonprofit. You apply for a farm apprenticeship. You do not buy Muir Beach.",
    legalCategory: "Religious nonprofit farm",
    stillActive: true,
    images: [
      "/communities/green-gulch-land.jpg",
      "/communities/green-gulch-1.jpg",
      "/communities/green-gulch-2.jpg",
      "/communities/green-gulch-3.jpg",
    ],
    summary:
      "A Muir Beach Zen farm in the Golden Gate Recreation Area. Seven organic acres, a garden, and land stewardship. Farm and Land Steward apprenticeships accepting 2026. Sitting, soji, and rows. You apply. You do not buy Shoreline Highway.",
    businessModel:
      "Produce, a guest program, and residential apprenticeships. A Mill Valley drive is not a closing.",
    foundingProcess:
      "San Francisco Zen Center, 1972. Suzuki Roshi’s Soto line.",
    governance:
      "The temple. An apprenticeship is not the valley.",
    website: "https://www.sfzc.org/locations/green-gulch-farm",
    timeline: [
      { year: "1972", event: "Green Gulch." },
      { year: "1994", event: "Farm apprenticeships." },
      { year: "Present", event: "2026 Farm and Land Steward applications. A season, not Muir Beach." },
    ],
  },
  {
    slug: "hawthorne-valley",
    name: "Hawthorne Valley Farm",
    location: "327 County Route 21C, Ghent, NY 12075",
    region: "New York, USA",
    country: "United States",
    foundedYear: 1972,
    foundedLabel: "1972 farm. Hawthorne Valley Association 1971. 900-acre biodynamic",
    members: 50,
    membersLabel: "A 900-acre biodynamic farm, CSA, creamery, and visiting-students campus. Staff not isolated",
    acres: 900,
    acresLabel: "900-acre Demeter biodynamic farm: dairy, vegetables, CSA",
    legalStructure:
      "Hawthorne Valley Association 501(c)(3). You apply for a one-year apprenticeship. You do not buy Ghent.",
    legalCategory: "Educational nonprofit farm",
    stillActive: true,
    images: [
      "/communities/hawthorne-valley-land.jpg",
      "/communities/hawthorne-valley-1.jpg",
      "/communities/hawthorne-valley-2.jpg",
      "/communities/hawthorne-valley-3.jpg",
    ],
    summary:
      "A Ghent biodynamic farm of 900 acres. farm.hawthornevalley.org: one-year apprenticeship, on-site housing, $1,500 a month. Dairy, vegetables, CSA. Applications for a season open in November. You apply. You do not buy County Route 21C.",
    businessModel:
      "CSA, creamery, farm store, visiting students, and apprenticeships. 518-672-7500.",
    foundingProcess:
      "Waldorf teachers and biodynamic farmers, Association 1971. Farm 1972.",
    governance:
      "The Association. A year in the barn is not the title.",
    website: "https://farm.hawthornevalley.org/",
    timeline: [
      { year: "1971", event: "Association." },
      { year: "1972", event: "Farm." },
      { year: "Present", event: "900 acres, one-year apprenticeship. A year, not Ghent." },
    ],
  },
  {
    slug: "triform",
    name: "Triform Camphill Community",
    location: "20 Triform Road, Hudson, NY 12534",
    region: "New York, USA",
    country: "United States",
    foundedYear: 1979,
    foundedLabel: "1979. Planning 1977. 420 acres",
    members: 70,
    membersLabel: "Young adults with developmental disabilities, coworkers, and year-long volunteers. Headcount not isolated",
    acres: 420,
    acresLabel: "420 acres: forests, fields, organic gardens, a homestead farm with cows, pigs, horses, and chickens",
    legalStructure:
      "Camphill 501(c)(3). You apply for a twelve-month volunteer year. You do not buy Triform Road.",
    legalCategory: "Camphill",
    stillActive: true,
    images: [
      "/communities/triform-land.jpg",
      "/communities/triform-1.jpg",
      "/communities/triform-2.jpg",
      "/communities/triform-3.jpg",
    ],
    summary:
      "A Hudson Camphill on 420 acres. Ten homes, a homestead farm, bakery, weavery, pottery. Twelve-month volunteers, last week of August, full room and board. volunteer@triform.org. You apply. You do not buy Livingston.",
    businessModel:
      "Lifesharing, crafts, and a farm. 518-851-9320.",
    foundingProcess:
      "Triform, 1979. A Camphill for young adults.",
    governance:
      "The community. A volunteer year is not a house.",
    website: "https://www.triform.org/",
    timeline: [
      { year: "1979", event: "Founded as a Camphill for young adults." },
      { year: "Present", event: "420 acres, twelve-month volunteers. A year, not Triform Road." },
    ],
  },
  {
    slug: "full-belly",
    name: "Full Belly Farm",
    location: "Capay Valley, Guinda, CA",
    region: "California, USA",
    country: "United States",
    foundedYear: 1984,
    foundedLabel: "1984 (Dru Rivers and Paul Muller. Organic certified 1985. 400 acres",
    members: 40,
    membersLabel: "Family farm and a live-in intern crew. Intern headcount not isolated",
    acres: 400,
    acresLabel: "400-acre certified organic farm vegetables, fruit, flowers, animals",
    legalStructure:
      "Private family farm. You apply for a one-year internship. You do not buy Guinda.",
    legalCategory: "Private organic farm",
    stillActive: true,
    images: [
      "/communities/full-belly-land.jpg",
      "/communities/full-belly-1.jpg",
      "/communities/full-belly-2.jpg",
      "/communities/full-belly-3.jpg",
    ],
    summary:
      "A Capay Valley organic farm of 400 acres. Rivers and Muller 1984. One-year internships, live on the farm, rolling applications. Short terms are not currently offered. You apply. You do not buy the valley.",
    businessModel:
      "CSA, farmers markets, and internships. produce@fullbellyfarm.com, 530-796-2214.",
    foundingProcess:
      "Dru Rivers and Paul Muller, 1984. Second generation on the title.",
    governance:
      "The farm. A year in the packing shed is not a share.",
    website: "https://fullbellyfarm.com/",
    timeline: [
      { year: "1984", event: "Rivers and Muller." },
      { year: "1985", event: "Organic certification." },
      { year: "Present", event: "400 acres, one-year internships. A year, not Guinda." },
    ],
  },
  {
    slug: "glynwood",
    name: "Glynwood Center",
    location: "362 Glynwood Road, Cold Spring, NY 10516",
    region: "New York, USA",
    country: "United States",
    foundedYear: 1993,
    foundedLabel: "1993 campus. Perkins farm 1929 of A Greener World. About 225–250 acres",
    members: 30,
    membersLabel: "A regional-food nonprofit and working farm. Apprentice headcount not isolated",
    acres: 225,
    acresLabel: "About 225 acres of A Greener World; 250-acre campus. Livestock and vegetables",
    legalStructure:
      "Nonprofit. You apply for a residential apprenticeship. You do not buy Cold Spring.",
    legalCategory: "Educational nonprofit farm",
    stillActive: true,
    images: [
      "/communities/glynwood-land.jpg",
      "/communities/glynwood-1.jpg",
      "/communities/glynwood-2.jpg",
      "/communities/glynwood-3.jpg",
    ],
    summary:
      "A Cold Spring teaching farm in the Hudson Highlands. glynwood.org: Hudson Valley Apprenticeship, a residential livestock season with housing. 845-265-3338. You apply. You do not buy Glynwood Road.",
    businessModel:
      "Farm store, programs, and apprenticeships. info@glynwood.org.",
    foundingProcess:
      "Perkins land 1929 of A Greener World. Glynwood campus 1993.",
    governance:
      "The Center.",
    website: "https://www.glynwood.org/",
    timeline: [
      { year: "1929", event: "Perkins farm of A Greener World." },
      { year: "1993", event: "Glynwood campus." },
      { year: "Present", event: "Apprenticeships. A season, not Cold Spring." },
    ],
  },
  {
    slug: "camphill-california",
    name: "Camphill California",
    location: "3920 Fairway Drive, Soquel, CA 95073",
    region: "California, USA",
    country: "United States",
    foundedYear: 1998,
    foundedLabel: "Founded 1997, doors 1998. About seven acres on six properties",
    members: 40,
    membersLabel: "About 40 residents on six Soquel properties, including adults with developmental disabilities and live-in volunteers",
    acres: 7,
    acresLabel: "About seven acres across six properties in the Soquel foothills. Biodynamic orchard, herbs, and vegetable gardens",
    legalStructure:
      "Camphill 501(c)(3). You apply for six to twelve months. You do not buy Soquel.",
    legalCategory: "Camphill",
    stillActive: true,
    images: [
      "/communities/camphill-california-land.jpg",
      "/communities/camphill-california-1.jpg",
      "/communities/camphill-california-2.jpg",
      "/communities/camphill-california-3.jpg",
    ],
    summary:
      "A Soquel Camphill between Monterey Bay and the Santa Cruz Mountains. Live-in volunteers six to twelve months, private room and board. Gardens and orchard. coworker@camphillca.org. You apply. You do not buy the foothills.",
    businessModel:
      "Lifesharing and a garden. 831-476-7194.",
    foundingProcess:
      "California Friends of Camphill, 1997–98.",
    governance:
      "The community. A volunteer year is not a house.",
    website: "https://camphillca.org/",
    timeline: [
      { year: "1997", event: "Founded." },
      { year: "1998", event: "Doors." },
      { year: "Present", event: "Six-to-twelve-month volunteers. A year, not Soquel." },
    ],
  },
  {
    slug: "deck-family",
    name: "Deck Family Farm",
    location: "25362 High Pass Road, Junction City, OR 97448",
    region: "Oregon, USA",
    country: "United States",
    foundedYear: 2004,
    foundedLabel: "2004 (John and Christine Deck). Regenerative livestock",
    members: 20,
    membersLabel: "Family farm plus interns. About twenty full- and part-time. Intern headcount not isolated",
    acres: 500,
    acresLabel: "Over 500 certified organic acres across the valley. Heritage pork, Galloway beef, poultry, sheep, Jersey dairy, market garden",
    legalStructure:
      "Private family farm. You apply for a one-year internship. You do not buy High Pass Road.",
    legalCategory: "Private family farm",
    stillActive: true,
    images: [
      "/communities/deck-family-land.jpg",
      "/communities/deck-family-1.jpg",
      "/communities/deck-family-2.jpg",
      "/communities/deck-family-3.jpg",
    ],
    summary:
      "A Junction City regenerative livestock farm. Decks 2004. One-year internships with room, board, and a $10,000 stipend. Call Christine. You apply. You do not buy the Willamette.",
    businessModel:
      "Farmers markets, CSA, grocers, and internships. 541-998-4697, info@deckfamilyfarm.com.",
    foundingProcess:
      "John and Christine Deck, 2004. UC Davis.",
    governance:
      "The farm.",
    website: "https://www.deckfamilyfarm.com/",
    timeline: [
      { year: "2004", event: "Decks." },
      { year: "Present", event: "500 acres, one-year internships." },
    ],
  },
  {
    slug: "hungry-world",
    name: "Hungry World Farm",
    location: "19183 Plow Creek Road, Tiskilwa, IL 61368",
    region: "Illinois, USA",
    country: "United States",
    foundedYear: 2017,
    foundedLabel: "2017 nonprofit. Plow Creek Fellowship on the same dirt 1971. 175 acres",
    members: 12,
    membersLabel: "A teaching farm with a summer intern cohort. Headcount not isolated",
    acres: 175,
    acresLabel: "175-acre regenerative teaching farm market garden, sheep, Red Devon cattle, layers",
    legalStructure:
      "Nonprofit. You apply for a summer internship.",
    legalCategory: "Educational nonprofit farm",
    stillActive: true,
    images: [
      "/communities/hungry-world-land.jpg",
      "/communities/hungry-world-1.jpg",
      "/communities/hungry-world-2.jpg",
      "/communities/hungry-world-3.jpg",
    ],
    summary:
      "A Tiskilwa teaching farm of 175 acres. Plow Creek Fellowship 1971, new nonprofit 2017. Summer internships, housing, about $400 a month. applications@hungryworldfarm.com. You apply.",
    businessModel:
      "CSA, farmstay, classes, and internships. 815-200-8688.",
    foundingProcess:
      "Plow Creek 1971. Hungry World 2017 on the same road.",
    governance:
      "The nonprofit.",
    website: "https://hungryworldfarm.com/",
    timeline: [
      { year: "1971", event: "Plow Creek Fellowship." },
      { year: "2017", event: "Hungry World Farm." },
      { year: "Present", event: "175 acres, summer internships." },
    ],
  },
];
