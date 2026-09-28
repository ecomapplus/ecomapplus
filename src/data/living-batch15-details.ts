import type { LegalEntity } from "./legal-entities";
import type { LandOwnership } from "./land-ownership";
import type { CommunityFunding } from "./funding";
import type { VisitJoin } from "./visit-join";
import type { DailyLife } from "./daily-life";
import type { InformalAgreement } from "./informal-agreements";
import type { Governance } from "./governance";
import type { VillageLeaders } from "./leaders";
import type { Accommodations } from "./accommodations";

export const livingBatch15LegalEntities: Record<string, LegalEntity[]> = {
  rosewind: [
    { name: "RoseWind Cohousing", kind: "Intentional neighbourhood association", role: "26 member families. Houses on city lots.", status: "current", layer: "membership", year: "1995", forms: ["Homeowners association"] },
    { name: "Haines Street lots plus commons", kind: "Private lots around common land", role: "Each family owns a house and a small yard. A 2,800 sq ft community hall.", status: "current", layer: "land", year: "1998", forms: ["Homeowners association", "Freehold title"] }
  ],

  nubanusit: [
    { name: "Nubanusit Neighborhood & Farm", kind: "Conservation-subdivision condominium", role: "29 households. Occupied 2007.", status: "current", layer: "membership", year: "2007", forms: ["Homeowners association"] },
    { name: "113 acres along Nubanusit Brook", kind: "Clustered homes plus farm and woodland", role: "Homes on about 4.5 acres. Conservation subdivision.", status: "current", layer: "land", year: "2007", forms: ["Homeowners association", "Freehold title", "Conservation covenant"] }
  ]

};

export const livingBatch15Land: Record<string, LandOwnership> = {
  rosewind: {
    owner: "26 house owners plus the commons",
    complexity: "split",
    tenure: "City lots around common land",
    howHeld: "Each family owns a house and a small yard. Community hall 2,800 sq ft. About 9 acres.",
    narrative: "A Port Townsend cluster.",
    divided: [
      { label: "Houses", holder: "Households", share: "Freehold lot", what: "The join is a listing." },
      { label: "Commons and hall", holder: "Association", share: "Common", what: "Common land and hall." }
    ]
  },

  nubanusit: {
    owner: "29 unit owners plus the association; farm and woodland in common",
    complexity: "split",
    tenure: "Conservation-subdivision condominium",
    howHeld: "29 homes clustered on about 4.5 acres. 113 acres of farm, fields and woodland. Conservation subdivision.",
    narrative: "A Peterborough farm. A house is not the brook.",
    divided: [
      { label: "29 homes", holder: "Households", share: "Condo title", what: "The join is a listing." },
      { label: "Farm, woodland, brook", holder: "Association", share: "Common / conservation", what: "You do not buy Nubanusit Brook." }
    ]
  }

};

export const livingBatch15Funding: Record<string, CommunityFunding> = {
  rosewind: {
    overview: "Private houses on city lots plus a common hall.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "House sales",
    grants: [],
    private: [
      { source: "26 member families", amount: "Port Townsend housing costs", certainty: "estimated", kind: "member-equity", note: "Private house sales." }
    ]
  },

  nubanusit: {
    overview: "Twenty-nine clustered homes on a 113-acre conservation subdivision.",
    grantsHeadline: "Zoning change of the town of Peterborough — not a construction grant isolated here",
    privateHeadline: "Condo sales",
    grants: [],
    private: [
      { source: "29 households", amount: "Monadnock housing costs", year: "2007", certainty: "estimated", kind: "member-equity", note: "A Callie's Common walk is not a closing." }
    ]
  }

};

export const livingBatch15VisitJoin: Record<string, VisitJoin> = {
  rosewind: {
    visit: 2,
    join: 3,
    visitProcess: "3121 Haines Street, Port Townsend. Twenty-six families. Write.",
    joinProcess: "Buy a house when one is listed."
  },

  nubanusit: {
    visit: 3,
    join: 3,
    visitProcess: "7 Callie's Common, Peterborough. Open houses twice a year. Book.",
    joinProcess: "Buy a unit when one is listed. A farm walk is not a closing."
  }

};

export const livingBatch15DailyLife: Record<string, DailyLife> = {
  rosewind: {
    typical: [
      { title: "Twenty-six families", detail: "Houses on city lots. A 2,800 sq ft hall." },
      { title: "A grassy commons", detail: "About 9 acres. Intergenerational." },
      { title: "A Port Townsend week", detail: "Jobs in a small Victorian town. Then a Haines Street meeting." }
    ],
    unique: { title: "City lots that stayed a neighbourhood", detail: "Membership from 1995, houses from 1998. Each family owns its house and a small yard around a grassy commons, with a 2,800 sq ft community hall. Early houses were straw-bale; later ones filled in around them." }
  },

  nubanusit: {
    typical: [
      { title: "Twenty-nine homes", detail: "Single-family, duplex and four-plex. Occupied 2007." },
      { title: "A working farm", detail: "Five acres of organic fields and hoop houses. Cattle and lambs." },
      { title: "A Peterborough week", detail: "Jobs in a town of 6,100. Then a brook that is the neighbour." }
    ],
    unique: { title: "A farm that stayed 113 acres", detail: "Two couples bought the defunct Salzburg Inn in 2004; homes clustered on about 4.5 of 113 acres, with nearly a mile of riverfront." }
  }

};

export const livingBatch15Informal: Record<string, InformalAgreement[]> = {
  rosewind: [
    { kind: "kitchen-table", why: "Twenty-six private kitchens and a 2,800 sq ft hall." },
    { kind: "membership-trial", why: "A listing." },
    { kind: "children-care", why: "School-age to retirement. The grass is a playground as much as a board." },
    { kind: "land-care", why: "A common garden. Guests stay off rows they were not asked onto." }
  ],

  nubanusit: [
    { kind: "kitchen-table", why: "Twenty-nine private doors and common indoor space." },
    { kind: "membership-trial", why: "A listing. An open house is not a closing." },
    { kind: "land-care", why: "A working farm. Guests stay off rows and pasture they were not asked onto." },
    { kind: "children-care", why: "Toddlers to more than 92. The lanes are a playground as much as a board." }
  ]

};

export const livingBatch15Governance: Record<string, Governance> = {
  rosewind: {
    model: "hoa",
    modelLabel: "City-lot cohousing",
    unique: false,
    summary: "26 families, each with a house and a small yard. Membership from 1995.",
    whoDecides: "House owners.",
    bodies: [
      { name: "Households", role: "26 member families." },
      { name: "Association", role: "Commons and a 2,800 sq ft hall." }
    ],
    howItRuns: "A listing."
  },

  nubanusit: {
    model: "hoa",
    modelLabel: "Farm conservation condominium",
    unique: true,
    summary: "29 homes on 113 acres. Occupied 2007. New Hampshire’s first cohousing. You buy a house. You do not buy the brook.",
    whoDecides: "Unit owners.",
    bodies: [
      { name: "Households", role: "29 condo titles." },
      { name: "The farm", role: "Organic fields, hoop houses. Conservation subdivision." }
    ],
    howItRuns: "A listing. An open house is not a closing.",
    dive: {
      title: "How an inn site became a farm neighbourhood",
      lead: "Nubanusit put twenty-nine homes onto the old Salzburg Inn so a 113-acre brook farm remains a conservation subdivision, not twenty-nine three-acre lots.",
      organs: [
        { name: "The condo", what: "29 homes. First resident 2007." },
        { name: "The land", what: "113 acres. About 4.5 clustered." }
      ],
      path: "Buy a unit.",
      history: "Site bought 2004. Zoning change.",
      tension: "113 acres versus the clustered 4.5. Headcount not isolated. Confirm a vacancy, not a 2010 magazine walk."
    }
  }

};

export const livingBatch15Leaders: Record<string, VillageLeaders> = {
  rosewind: {
    people: [],
    office: { url: "https://rosewind.org/", address: "3121 Haines Street, Port Townsend, WA 98368" }
  },

  nubanusit: {
    people: [],
    office: { url: "https://www.nhcohousing.com/", phone: "207-200-6824", address: "7 Callie's Common, Peterborough, NH 03458" }
  }

};

export const livingBatch15Accommodations: Record<string, Accommodations> = {
  rosewind: {
    visitor: {
      overview: "Write. Twenty-six families. No public guesthouse.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "Homes. Arrange if someone offers." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "26 member families.",
      camping: { available: false, types: [], detail: "People live in the houses." },
      rooms: { available: true, types: [], detail: "Private houses plus a 2,800 sq ft hall." },
      other: { available: false, types: [], detail: "None listed." }
    }
  },

  nubanusit: {
    visitor: {
      overview: "Open houses twice a year. No public guesthouse.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: false, types: [], detail: "Homes. Arrange if someone offers." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "29 households.",
      camping: { available: false, types: [], detail: "People live in the clustered homes." },
      rooms: { available: true, types: [], detail: "Private homes plus common indoor space." },
      other: { available: false, types: [], detail: "None listed." }
    }
  }

};
