import type { Community } from "./communities";

/** Ten living villages, oldest founding first: a Sonoma limited-equity co-op, Port Townsend’s city-lot cluster, Cotati’s mixed-use downtown, Canada’s first rural cohousing, a Santa Rosa urban condo, New Hampshire’s farm cohousing, France’s first 21st-century inhabitant coop, Vienna’s Nordbahnviertel Verein house, a Navarre sociocratic coop in a former hotel, and Fair Oaks EcoHousing. */
export const livingBatch15Communities: Community[] = [
  {
    slug: "rosewind",
    name: "RoseWind Cohousing",
    location: "3121 Haines Street, Port Townsend, WA 98368",
    region: "Washington, USA",
    country: "United States",
    foundedYear: 1995,
    foundedLabel: "1995 (membership; first house occupied 1998)",
    members: 60,
    membersLabel: "26 member families. Headcount not isolated",
    acres: 9,
    acresLabel: "About 9 acres: houses on their own city lots around a grassy commons.",
    legalStructure:
      "Each family owns its house and a small yard. A 2,800 sq ft community hall.",
    legalCategory: "Homeowners association / freehold",
    stillActive: true,
    images: [
      "/communities/rosewind-land.jpg",
      "/communities/rosewind-1.jpg",
      "/communities/rosewind-2.jpg",
      "/communities/rosewind-3.jpg"
    ],
    summary:
      "Twenty-six families on city lots around a Port Townsend commons. Membership from 1995, houses from 1998.",
    businessModel:
      "Private sales.",
    foundingProcess:
      "Members 1995, first house 1998. Straw-bale and later houses.",
    governance:
      "An intentional neighbourhood. Intergenerational.",
    website: "https://rosewind.org/",
    timeline: [
      { year: "1995", event: "Membership begins." },
      { year: "1998", event: "First house occupied." },
      { year: "Present", event: "26 member families." }
    ]
  },

  {
    slug: "nubanusit",
    name: "Nubanusit Neighborhood & Farm",
    location: "7 Callie's Common, Peterborough, NH 03458",
    region: "New Hampshire, USA",
    country: "United States",
    foundedYear: 2007,
    foundedLabel: "2007 (first resident moved in; Alliance move-in year 2007. Site bought 2004)",
    members: 70,
    membersLabel: "29 households. Ages from toddlers to more than 92. Headcount not isolated",
    acres: 113,
    acresLabel: "113 acres of farm, fields and woodland: trails, a pond, nearly a mile of riverfront. Homes clustered on about 4.5 acres of the former Salzburg Inn",
    legalStructure:
      "A conservation-subdivision condominium. 29 farmhouse-style homes: single-family, duplex and four-plex. You buy a unit. You do not buy the brook.",
    legalCategory: "Homeowners association / conservation subdivision",
    stillActive: true,
    images: [
      "/communities/nubanusit-land.jpg",
      "/communities/nubanusit-1.jpg",
      "/communities/nubanusit-2.jpg",
      "/communities/nubanusit-3.jpg"
    ],
    summary:
      "Twenty-nine homes on 113 acres along Nubanusit Brook. Occupied 2007. New Hampshire’s first cohousing. You buy a house. You do not buy the farm.",
    businessModel:
      "Condo sales. A Callie's Common walk is not a closing.",
    foundingProcess:
      "Two couples bought the defunct Salzburg Inn in 2004. Zoning change. First resident 2007.",
    governance:
      "29 households and a working farm. Open houses twice a year.",
    website: "https://www.nhcohousing.com/",
    timeline: [
      { year: "2004", event: "Site bought. Former Salzburg Inn." },
      { year: "2007", event: "First resident. 29 clustered homes." },
      { year: "Present", event: "Still 29 households and a farm. A house, not the brook." }
    ]
  }

];
