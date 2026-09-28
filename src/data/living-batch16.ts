import type { Community } from "./communities";

/** Ten living villages, oldest founding first: West Seattle’s cedar duplexes, a Hudson creek cluster, a Boulder courtyard, Asheville’s first cohousing, a Virginia hillside, Calgary’s first equity co-op, a Devon permaculture holding, Munich’s first wagnis house, Bowen Island townhouses, and East Vancouver infill. */
export const livingBatch16Communities: Community[] = [
  {
    slug: "puget-ridge",
    name: "Puget Ridge Cohousing",
    location: "7020 18th Avenue SW, Seattle, WA 98106",
    region: "Washington, USA",
    country: "United States",
    foundedYear: 1995,
    foundedLabel: "1995 (built). Homestead CLT: first established 1994 as the Puget Ridge Cohousing Association.",
    members: 60,
    membersLabel: "23 homes. About 60 residents, a few months to 99. Headcount drifts",
    acres: 2.4,
    acresLabel: "2.4 acres. Nearly 2½ acres. Delridge, West Seattle",
    legalStructure:
      "A self-governed condominium. 23 cedar-sided duplexes and triplexes. One door is becoming permanently affordable with Homestead Community Land Trust. You buy a unit. You do not buy Delridge.",
    legalCategory: "Homeowners association / community land trust partnership",
    stillActive: true,
    images: [
      "/communities/puget-ridge-land.jpg",
      "/communities/puget-ridge-1.jpg",
      "/communities/puget-ridge-2.jpg",
      "/communities/puget-ridge-3.jpg"
    ],
    summary:
      "Twenty-three cedar homes in West Seattle. Built 1995. One door now a Homestead CLT partnership. You buy a unit. You do not buy 18th Avenue SW.",
    businessModel:
      "Condo sales. A CLT door. A Delridge walk is not a closing.",
    foundingProcess:
      "Friends inspired by Danish cohousing. Occupied from 1994/1995.",
    governance:
      "Self-governed condominium. Parking at the edge.",
    website: "https://sites.google.com/view/prcacohousing/home",
    timeline: [
      { year: "1994", event: "PRCA established." },
      { year: "1995", event: "23 units built. 12 buildings." },
      { year: "Present", event: "Homestead CLT partnership for one permanently affordable door. A unit, not Delridge." }
    ]
  },

  {
    slug: "landmatters",
    name: "Landmatters",
    location: "Near Totnes, South Devon",
    region: "Devon, United Kingdom",
    country: "United Kingdom",
    foundedYear: 2003,
    foundedLabel: "2003 (bought the land). Temporary permission 2007; permanent 2016 after a ten-year battle",
    members: 23,
    membersLabel: "16 adults and 7 children, 27 July 2016. Headcount not isolated since",
    acres: 42,
    acresLabel: "42 acres of pasture and semi-natural ancient woodland",
    legalStructure:
      "A rural permaculture co-operative. Affinity Workers Co-operative is a different wood — Landmatters is its own co-op. You apply. You do not buy the 42 acres as lots.",
    legalCategory: "Workers cooperative",
    stillActive: true,
    images: [
      "/communities/landmatters-land.jpg",
      "/communities/landmatters-1.jpg",
      "/communities/landmatters-2.jpg",
      "/communities/landmatters-3.jpg"
    ],
    summary:
      "Forty-two acres near Totnes. Land bought 2003. Permanent planning permission 2016. You apply. You do not buy a Devon lot.",
    businessModel:
      "Co-operative occupancy. Educational value to schools. A visit is not a membership.",
    foundingProcess:
      "Land 2003. First dwelling application rejected 2006. Inspector overturned 2007, five-year temporary. Permanent 2016.",
    governance:
      "Permaculture co-op. Low-impact dwellings.",
    website: "https://landmatters.wixsite.com/devon",
    timeline: [
      { year: "2003", event: "Land bought." },
      { year: "2007", event: "Five-year temporary permission." },
      { year: "2016", event: "Permanent planning permission, 27 July 2016. 16 adults and 7 children." },
      { year: "Present", event: "Still a permaculture co-op. A join, not a lot." }
    ]
  },
  {
    slug: "belterra",
    name: "Belterra Cohousing",
    location: "Bowen Island, British Columbia",
    region: "British Columbia, Canada",
    country: "Canada",
    foundedYear: 2014,
    foundedLabel: "2014 (completed)",
    members: 80,
    membersLabel: "30 townhouse suites. Headcount not isolated",
    acres: null,
    acresLabel: "A hillside overlooking forest and the Coastal Mountains. Acreage not isolated here. 15-minute walk from Snug Cove",
    legalStructure:
      "Condo/strata. Thirty privately owned townhouses.",
    legalCategory: "Homeowners association / strata",
    stillActive: true,
    images: [
      "/communities/belterra-land.jpg",
      "/communities/belterra-1.jpg",
      "/communities/belterra-2.jpg",
      "/communities/belterra-3.jpg"
    ],
    summary:
      "Thirty townhouses on a forested Bowen Island hillside, about a fifteen-minute walk from Snug Cove and a short ferry from West Vancouver. The multi-generational community shares vegetable gardens and a roughly 3,700 sq ft common house with guest rooms and a workshop, so thirty households do not each build those. Canadian Cohousing Network lists it completed in 2014; the residents’ own site still posts units when one opens. You buy a suite. You do not buy the mountain view.",
    businessModel:
      "Strata sales. Guest rooms arranged through a household.",
    foundingProcess:
      "Public hearing 2012 (Bowen Island Undercurrent). Completed 2014.",
    governance:
      "30 households. About 3,700 sq ft common house. Guest rooms and a workshop.",
    website: "https://www.belterracohousing.ca/",
    timeline: [
      { year: "2012", event: "Public hearing, Bowen Island Undercurrent, 23 February 2012." },
      { year: "2014", event: "Completed. 30 townhouses." },
      { year: "Present", event: "Still 30 suites. Guest rooms in the common house." }
    ]
  }
];
