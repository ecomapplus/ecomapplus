import type { Community } from "./communities";

/** Ten living villages, oldest founding first: Aberdeen’s adult Camphill estate, Golden’s resident-built Santa Fe cluster, Brunswick’s LLC-then-easement woods, Seattle’s 27-unit infill, Pleasant Hill’s 32-condo townhouses, Utrecht’s mixed-tenure CPO, Tokyo’s first collective house, an Ardèche SAS coop on six hectares, Winterthur’s self-managed Giesserei, and Kreuzberg’s 471-apartment eG. */
export const livingBatch12Communities: Community[] = [
  {
    slug: "newton-dee",
    name: "Newton Dee",
    location: "Newton Dee Village, Bieldside, Aberdeen AB15 9DX",
    region: "Aberdeenshire, Scotland",
    country: "United Kingdom",
    foundedYear: 1960,
    foundedLabel: "1960 (officially an adult Camphill community). Camphill Schools bought the estate in 1945. LinkedIn also says founded 1960",
    members: 185,
    membersLabel: "36 unique households. Diggers and Dreamers has said 185 people / 158 adults + 30 under-18s. Households of four to 16 of an Adoddle profile. Headcount drifts — confirm on the estate, not a directory",
    acres: 180,
    acresLabel: "180 acres of wooded grounds; 120 of them the biodynamic farm of their own site",
    legalStructure:
      "Scottish charity SC043417 and a non-profit company limited by guarantee SC427688 of their own community page. You apply for a placement or a coworker year. You do not buy Bieldside.",
    legalCategory: "Camphill charity / company limited by guarantee",
    stillActive: true,
    images: [
      "/communities/newton-dee-land.jpg",
      "/communities/newton-dee-1.jpg",
      "/communities/newton-dee-2.jpg",
      "/communities/newton-dee-3.jpg"
    ],
    summary:
      "Aberdeen’s adult Camphill estate. 36 households, 180 acres, a biodynamic farm. Charity and a company limited by guarantee. You apply. You do not buy the woods.",
    businessModel:
      "Charity. Residential and day placements, a farm, workshops, a café of their own pages. A donation is not a deed.",
    foundingProcess:
      "Camphill Schools bought Newton Dee Estate in 1945. Officially a community for adults in 1960. Karl König’s Aberdeen origin, still on the estate.",
    governance:
      "Charity board and a company limited by guarantee. Households of coworkers and villagers. A café table is not a share.",
    website: "https://www.newtondee.co.uk/",
    timeline: [
      { year: "1945", event: "Camphill Schools buy Newton Dee Estate, Bieldside." },
      { year: "1960", event: "Officially a community for adults. LinkedIn and Diggers still date the village from this year." },
      { year: "2018", event: "BBC: Village of Dreams. A year in the life of the estate." },
      { year: "Present", event: "36 households, 180 acres. Charity SC043417, company SC427688. newtondee.co.uk." }
    ]
  },
  {
    slug: "harmony-village",
    name: "Harmony Village",
    location: "1001 Cottonwood Circle, Golden, CO 80401",
    region: "Colorado, USA",
    country: "United States",
    foundedYear: 1996,
    foundedLabel: "1996 (common house and first homes, October). Group met April 1992; land August 1994; groundbreaking December 1995; all units May 1997",
    members: 70,
    membersLabel: "27 townhomes. Ages 0 to the 80s. Headcount not isolated — a 27-house cluster is on the order of sixty to eighty people",
    acres: 5.5,
    acresLabel: "5.5 acres. Gardens, orchard, play areas, natural open space",
    legalStructure:
      "Privately owned Santa Fe-style townhomes plus an association. You buy a house when one opens.",
    legalCategory: "Cohousing condominium",
    stillActive: true,
    images: [
      "/communities/harmony-village-land.jpg",
      "/communities/harmony-village-1.jpg",
      "/communities/harmony-village-2.jpg",
      "/communities/harmony-village-3.jpg"
    ],
    summary:
      "Twenty-seven Santa Fe-style townhomes on 5.5 acres at 1001 Cottonwood Circle in Golden, Colorado. The group met in April 1992, broke ground in December 1995, occupied the first homes in October 1996, and filled all units by May 1997. Cars stay on the edge; the common house, gardens, and orchard sit on the paths. You buy a house when one opens.",
    businessModel:
      "Townhome sales and association dues. Tours by resident volunteers.",
    foundingProcess:
      "Friends met April 1992. Land 1994. Groundbreaking December 1995. First homes October 1996, all units May 1997. Resident-built.",
    governance:
      "Consensus of neighbours. Twenty-seven private titles and a common house.",
    website: "https://harmonyvillage.org/",
    timeline: [
      { year: "1992", event: "The group meets in April." },
      { year: "1994–95", event: "Land contracted August 1994. Groundbreaking December 1995." },
      { year: "1996–97", event: "Common house and first homes October 1996. All 27 units May 1997." },
      { year: "Present", event: "Still 27 townhomes on 5.5 acres." }
    ]
  },
  {
    slug: "two-echo",
    name: "Two Echo Cohousing",
    location: "Echo Road, off Hacker Road, Brunswick, ME 04011",
    region: "Maine, USA",
    country: "United States",
    foundedYear: 1998,
    foundedLabel: "1998 (first residents August / fall). Idea 1991; LLC bought the land 1996",
    members: 70,
    membersLabel: "27 households (21 houses and 3 duplexes). Facebook has said 48 adults and 22 children. Confirm the week on the lane, not a page",
    acres: 95,
    acresLabel: "Acreage drifts: 95, 97, 92. 57 woods + 20 developed + 15 fields. Conservation easement of about 70–72 acres",
    legalStructure:
      "Founding LLC bought the land. Then private houses on clustered lots and a conservation easement on the woods. You buy a house. You do not buy the easement.",
    legalCategory: "Cohousing / conservation easement",
    stillActive: true,
    images: [
      "/communities/two-echo-land.jpg",
      "/communities/two-echo-1.jpg",
      "/communities/two-echo-2.jpg",
      "/communities/two-echo-3.jpg"
    ],
    summary:
      "Twenty-seven households in Brunswick woods. Occupied 1998. A founding LLC, then lots, then an easement. You buy a house. You do not buy the 70 acres locked.",
    businessModel:
      "House sales listed on twoecho.org when one opens. A woods walk is not a viewing.",
    foundingProcess:
      "Idea 1991. LLC to buy land. Parcel found autumn 1994, purchased early 1996. Infrastructure that year. First residents August / fall 1998.",
    governance:
      "Consensus. Households hold titles. The easement holds the woods.",
    website: "https://twoecho.org/",
    timeline: [
      { year: "1991", event: "Portland-area group starts meeting." },
      { year: "1996", event: "LLC buys the Hacker Road parcel after Town of Brunswick site-plan approval." },
      { year: "1998", event: "First residents, August / fall. 21 houses and 3 duplexes follow." },
      { year: "Present", event: "Still 27 households. Houses listed on twoecho.org. The easement stays." }
    ]
  },

  {
    slug: "kersentuin",
    name: "De Kersentuin",
    location: "Atalantahof 11, 3544 VD Utrecht (Leidsche Rijn)",
    region: "Utrecht, Netherlands",
    country: "Netherlands",
    foundedYear: 2003,
    foundedLabel: "2003 (construction finished; 94 dwellings occupied). Initiative summer 1996",
    members: 220,
    membersLabel: "94 dwellings: 28 sociale huur and 66 koop. Headcount not isolated — a 94-house mixed street is on the order of two hundred people",
    acres: null,
    acresLabel: "Two streets in Leidsche Rijn: Atalantahof and Aureliahof. Projecthuis, parking garage with a roof garden. Acreage not isolated",
    legalStructure:
      "Collective private commissioning. 66 owner-occupied houses and 28 social-rent. A residents’ association on the commons. You buy, or you apply for social rent. You do not buy the cherry orchard.",
    legalCategory: "CPO / mixed tenure",
    stillActive: true,
    images: [
      "/communities/kersentuin-land.jpg",
      "/communities/kersentuin-1.jpg",
      "/communities/kersentuin-2.jpg",
      "/communities/kersentuin-3.jpg"
    ],
    summary:
      "Ninety-four mixed-tenure houses in Leidsche Rijn. Occupied 2003. 66 you can buy, 28 sociale huur. You do not buy the roof garden.",
    businessModel:
      "Owner-occupied sales when a house opens; social-rent through the housing queue. info@kersentuin.nl.",
    foundingProcess:
      "Summer 1996: two couples wanted Centraal Wonen, others an environmental neighbourhood. Residents hired the architect. Finished 2003.",
    governance:
      "Bewonersinitiatief. Mixed tenure on two streets. The projecthuis is a meeting, not a freehold.",
    website: "https://kersentuin.nl/",
    timeline: [
      { year: "1996", event: "First initiators in Leidsche Rijn. Municipality had asked residents to plan." },
      { year: "2003", event: "94 dwellings occupied: 28 sociale huur, 66 koop. Projecthuis, garage, commons." },
      { year: "Present", event: "Still mixed tenure." }
    ]
  },
  {
    slug: "hameau-des-buis",
    name: "Hameau des Buis",
    location: "1264 route de Maisonneuve, Berrias-et-Casteljau, 07460 Ardèche",
    region: "Ardèche, France",
    country: "France",
    foundedYear: 2011,
    foundedLabel: "2011 (first inhabitants). Ferme des Enfants association 1999. SAS coopérative constituted 28 January 2023. Colibris has said SC 2003 — drift against the current site",
    members: 43,
    membersLabel: "43 inhabitants on 6 hectares. About 20 bioclimatic dwellings. Woofers, European volunteers and people passing through",
    acres: 15,
    acresLabel: "6 hectares: a wooded plateau above the Chassezac gorges, edge of the Bois de Païolive",
    legalStructure:
      "SAS coopérative à capital variable, non-profit. Habitat cooperative. You join the cooperative. You do not buy Païolive.",
    legalCategory: "Habitat cooperative / SAS coop",
    stillActive: true,
    images: [
      "/communities/hameau-des-buis-land.jpg",
      "/communities/hameau-des-buis-1.jpg",
      "/communities/hameau-des-buis-2.jpg",
      "/communities/hameau-des-buis-3.jpg"
    ],
    summary:
      "Forty-three people on six Ardèche hectares. Occupied 2011. A SAS coop from 2023. You join. You do not buy the gorges.",
    businessModel:
      "Cooperative shares. Two T3 dwellings offered 2024. Woofers and European volunteers. An open day is not a share.",
    foundingProcess:
      "Ferme des Enfants, Sophie Rabhi-Bouquet, association 1999. First inhabitants 2011. SAS coopérative 28 January 2023.",
    governance:
      "Gouvernance partagée. Cooperative of inhabitants, farmers, artisans and sympathisers.",
    website: "https://hameaudesbuis.org/",
    timeline: [
      { year: "1999", event: "Association La Ferme des Enfants. School and farm on the plateau." },
      { year: "2011", event: "First inhabitants of the hamlet." },
      { year: "2023", event: "SAS Coopérative Hameau des Buis constituted 28 January." },
      { year: "2024", event: "Two T3 dwellings offered. Still 43 inhabitants, 6 hectares." }
    ]
  }
];
