import type { Community } from "./communities";

/** Ten living villages, oldest occupancy first: Washington’s first open-air condo, a Vashon site-condo, the first east-coast cohousing, Acton’s first, a Central Coast HOA, a Portland wetlands cluster, Arizona’s first infill, a Prescott hillside, a Montréal AccèsLogis coop, and Amsterdam’s floating VvE. */
export const livingBatch17Communities: Community[] = [
  {
    slug: "vashon",
    name: "Vashon Cohousing",
    location: "10421 SW Bank Road, Vashon, WA 98070",
    region: "Washington, USA",
    country: "United States",
    foundedYear: 1991,
    foundedLabel: "1991 (construction from 16 November 1991; one house at a time through 2005). Land purchased around December 1989",
    members: 18,
    membersLabel: "Eighteen households. FIC: 19 families in 18 detached residences (17 single-family and 1 duplex). Headcount not isolated",
    acres: 12,
    acresLabel: "12 acres. More than eight acres of natural areas",
    legalStructure:
      "A site condominium. Homes individually owned. You buy a house. You do not buy Bank Road or the orchard.",
    legalCategory: "Homeowners association",
    stillActive: true,
    images: [
      "/communities/vashon-land.jpg",
      "/communities/vashon-1.jpg",
      "/communities/vashon-2.jpg",
      "/communities/vashon-3.jpg"
    ],
    summary:
      "Eighteen households on 12 acres, a five-minute walk from Vashon town. Site condominium. Three guest rooms in the common house. You buy a house. You do not buy the island.",
    businessModel:
      "Private sales. Common house also rented for events. A Bank Road walk is not a closing.",
    foundingProcess:
      "Land around 1989/90. Construction 16 November 1991 through 16 November 2005, one house at a time.",
    governance:
      "Site condominium. Weekly meals, monthly potlucks, meetings, work parties.",
    website: "https://vashoncohousing.com/",
    timeline: [
      { year: "1990", event: "Land and first campout." },
      { year: "1991", event: "Construction starts 16 November." },
      { year: "Present", event: "18 households on 12 acres. Three guest rooms. A house, not Bank Road." }
    ]
  },
  {
    slug: "new-view",
    name: "New View Cohousing",
    location: "25 Half Moon Hill, Acton, MA 01720",
    region: "Massachusetts, USA",
    country: "United States",
    foundedYear: 1996,
    foundedLabel: "1996 (founded). Group from 1989. First of 16 Massachusetts cohousing",
    members: 24,
    membersLabel: "24 households. Headcount not isolated",
    acres: 20,
    acresLabel: "20-acre site. West Acton, half a mile from the village centre",
    legalStructure:
      "New View Condominiums. 24 privately owned homes. You buy a unit. You do not buy Half Moon Hill.",
    legalCategory: "Homeowners association",
    stillActive: true,
    images: [
      "/communities/new-view-land.jpg",
      "/communities/new-view-1.jpg",
      "/communities/new-view-2.jpg",
      "/communities/new-view-3.jpg"
    ],
    summary:
      "Twenty-four households on Half Moon Hill, Acton. Founded 1996. First of 16 Massachusetts cohousing. You buy a unit. You do not buy Half Moon Hill.",
    businessModel:
      "Condo sales. Outreach invites meals, meetings, events. A hill walk is not a closing.",
    foundingProcess:
      "Three people met in 1989 after reading McCamant and Durrett. Occupied 1996.",
    governance:
      "Multi-generational neighborhood. Common house at 25 Half Moon Hill.",
    website: "https://www.newview.org/",
    timeline: [
      { year: "1989", event: "First meetings." },
      { year: "1996", event: "Founded. Occupied as 24 households." },
      { year: "2026", event: "30th year. First of 16 in Massachusetts." }
    ]
  },
  {
    slug: "tierra-nueva",
    name: "Tierra Nueva Cohousing",
    location: "Tierra Nueva Lane, Oceano, CA 93445",
    region: "California, USA",
    country: "United States",
    foundedYear: 1999,
    foundedLabel: "February 1999 (completed). FIC founding year 1988",
    members: 27,
    membersLabel: "27-unit complex. Headcount not isolated",
    acres: 5,
    acresLabel: "5 acres in Oceano. Adjacent to Halcyon, about 18 miles from San Luis Obispo",
    legalStructure:
      "Land and buildings other than the individual units held in common by the Tierra Nueva Homeowner’s Association. You buy a unit. You do not buy the avocado trees.",
    legalCategory: "Homeowners association",
    stillActive: true,
    images: [
      "/communities/tierra-nueva-land.jpg",
      "/communities/tierra-nueva-1.jpg",
      "/communities/tierra-nueva-2.jpg",
      "/communities/tierra-nueva-3.jpg"
    ],
    summary:
      "Twenty-seven passive-solar duplexes and houses on 5 Oceano acres. Completed February 1999. HOA holds the land in common. You buy a unit. You do not buy the avocados.",
    businessModel:
      "Private sales. Write to visit. A Halcyon walk is not a closing.",
    foundingProcess:
      "Completed February 1999. Passive solar duplexes and single-family homes.",
    governance:
      "Tierra Nueva Homeowner’s Association.",
    website: "https://tncoho.com/",
    timeline: [
      { year: "1988", event: "FIC founding year — confirm against the 1999 completion." },
      { year: "1999", event: "Completed February. 27 units on 5 acres." },
      { year: "Present", event: "HOA holds land in common. A unit, not the avocado grove." }
    ]
  }

];
