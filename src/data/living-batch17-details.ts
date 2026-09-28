import type { LegalEntity } from "./legal-entities";
import type { LandOwnership } from "./land-ownership";
import type { CommunityFunding } from "./funding";
import type { VisitJoin } from "./visit-join";
import type { DailyLife } from "./daily-life";
import type { InformalAgreement } from "./informal-agreements";
import type { Governance } from "./governance";
import type { VillageLeaders } from "./leaders";
import type { Accommodations } from "./accommodations";

export const livingBatch17LegalEntities: Record<string, LegalEntity[]> = {

  vashon: [
    { name: "Vashon Cohousing", kind: "Site condominium", role: "18 households. Construction from 1991.", status: "current", layer: "membership", year: "1991", forms: ["Homeowners association"] },
    { name: "12 acres at Bank Road", kind: "Site condominium land", role: "More than eight acres of natural areas. Orchard.", status: "current", layer: "land", year: "1990", forms: ["Homeowners association", "Freehold title"] }
  ],
  "new-view": [
    { name: "New View Condominiums", kind: "Condominium association", role: "24 households. Occupied 1996.", status: "current", layer: "membership", year: "1996", forms: ["Homeowners association"] },
    { name: "Half Moon Hill", kind: "Condominium land", role: "20 acres. Common house at 25 Half Moon Hill.", status: "current", layer: "land", year: "1996", forms: ["Homeowners association", "Freehold title"] }
  ],
  "tierra-nueva": [
    { name: "Tierra Nueva Homeowner’s Association", kind: "HOA", role: "27 units. Completed February 1999.", status: "current", layer: "membership", year: "1999", forms: ["Homeowners association"] },
    { name: "5 acres at Oceano", kind: "HOA common land", role: "Land and buildings other than the units held in common. Avocado trees.", status: "current", layer: "land", year: "1999", forms: ["Homeowners association", "Freehold title"] }
  ]

};

export const livingBatch17Land: Record<string, LandOwnership> = {

  vashon: {
    owner: "18 house owners plus the association",
    complexity: "split",
    tenure: "Washington site condominium",
    howHeld: "18 homes on 12 acres. More than eight acres of natural areas. Three guest rooms.",
    narrative: "An island cluster. A house is not Bank Road.",
    divided: [
      { label: "18 homes", holder: "Households", share: "Site-condo title", what: "The join is a listing." },
      { label: "Orchard, common house, woods", holder: "Association", share: "Common", what: "You do not buy the island." }
    ]
  },
  "new-view": {
    owner: "24 unit owners plus the association",
    complexity: "split",
    tenure: "Massachusetts condominium",
    howHeld: "24 households. 20 acres. Common house at 25 Half Moon Hill.",
    narrative: "A West Acton hill. A unit is not Half Moon Hill.",
    divided: [
      { label: "24 homes", holder: "Households", share: "Condo title", what: "The join is a listing." },
      { label: "Land and common house", holder: "Association", share: "Common", what: "You do not buy the hill." }
    ]
  },
  "tierra-nueva": {
    owner: "27 unit owners; land in the HOA",
    complexity: "split",
    tenure: "California HOA",
    howHeld: "27 units on 5 acres. Land and buildings other than the units held in common.",
    narrative: "An Oceano grove. A unit is not the avocados.",
    divided: [
      { label: "27 homes", holder: "Households", share: "Unit title", what: "The join is a listing." },
      { label: "Land, common house, trees", holder: "HOA", share: "Common", what: "You do not buy the grove." }
    ]
  }

};

export const livingBatch17Funding: Record<string, CommunityFunding> = {

  vashon: {
    overview: "18 site-condo homes, built one at a time 1991–2005.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "House sales",
    grants: [],
    private: [
      { source: "18 households", amount: "Vashon housing costs", year: "1991", certainty: "estimated", kind: "member-equity", note: "A Bank Road walk is not a closing." }
    ]
  },
  "new-view": {
    overview: "24 condominium households, occupied 1996.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Condo sales",
    grants: [],
    private: [
      { source: "24 households", amount: "Acton housing costs", year: "1996", certainty: "estimated", kind: "member-equity", note: "A Half Moon Hill walk is not a closing." }
    ]
  },
  "tierra-nueva": {
    overview: "27 HOA units, completed February 1999.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Unit sales",
    grants: [],
    private: [
      { source: "27 households", amount: "Oceano housing costs of current listings", year: "1999", certainty: "estimated", kind: "member-equity", note: "A Halcyon walk is not a closing." }
    ]
  }

};

export const livingBatch17VisitJoin: Record<string, VisitJoin> = {

  vashon: {
    visit: 3,
    join: 3,
    visitProcess: "10421 SW Bank Road. Weekly meals, monthly potlucks, work parties — write first. Three guest rooms. It is not a town stroll.",
    joinProcess: "Buy a house when one is listed. A Bank Road walk is not a closing."
  },
  "new-view": {
    visit: 3,
    join: 3,
    visitProcess: "25 Half Moon Hill, Acton. Outreach invites meals, meetings, events. Write outreach@newview.org. It is not a village stroll.",
    joinProcess: "Buy or rent a unit when one is listed. A hill walk is not a closing."
  },
  "tierra-nueva": {
    visit: 2,
    join: 3,
    visitProcess: "Tierra Nueva Lane, Oceano. Write tncoho.com to visit. It is not a Halcyon picnic.",
    joinProcess: "Buy a unit when one is listed. An avocado walk is not a closing."
  }

};

export const livingBatch17DailyLife: Record<string, DailyLife> = {

  vashon: {
    typical: [
      { title: "Eighteen households", detail: "Construction from 1991. Site condominium." },
      { title: "A common house with three guest rooms", detail: "Commercial kitchen." },
      { title: "A Vashon week", detail: "Five minutes to town. Then a meal." }
    ],
    unique: { title: "An island site-condo that built one house at a time", detail: "You buy a house. You do not buy Bank Road." }
  },
  "new-view": {
    typical: [
      { title: "Twenty-four households", detail: "Founded 1996." },
      { title: "A common house at 25 Half Moon Hill", detail: "Common house." },
      { title: "A West Acton week", detail: "Half a mile to the village. Then a meal." }
    ],
    unique: { title: "Massachusetts’ first cohousing", detail: "Three people met in 1989 after reading McCamant and Durrett; the 24 households occupied Half Moon Hill in 1996 as Massachusetts’ first cohousing." }
  },
  "tierra-nueva": {
    typical: [
      { title: "Twenty-seven units", detail: "Completed February 1999." },
      { title: "Avocado trees and a common house", detail: "Five acres." },
      { title: "An Oceano week", detail: "Halcyon next door. Then a meeting." }
    ],
    unique: { title: "A Central Coast HOA that kept the grove in common", detail: "Twenty-seven passive-solar duplexes and houses on 5 Oceano acres, completed February 1999; the HOA holds the land and avocado grove in common, next to Halcyon." }
  }

};

export const livingBatch17Informal: Record<string, InformalAgreement[]> = {

  vashon: [
    { kind: "kitchen-table", why: "18 private doors and a common house with a commercial kitchen." },
    { kind: "membership-trial", why: "A listing. A Bank Road walk is not a closing." },
    { kind: "guest-stay", why: "Three guest rooms. Book through a household. Not a public inn." },
    { kind: "land-care", why: "Orchard and eight acres of natural areas. Guests stay off rows they were not asked onto." }
  ],
  "new-view": [
    { kind: "kitchen-table", why: "24 private doors and a common house at 25 Half Moon Hill." },
    { kind: "membership-trial", why: "A listing. A hill walk is not a closing." },
    { kind: "children-care", why: "Multi-generational. The hill is a playground as much as a board." },
    { kind: "building-code", why: "A 1996 condo. What a household may change on Half Moon Hill." }
  ],
  "tierra-nueva": [
    { kind: "kitchen-table", why: "27 private doors and a common house." },
    { kind: "membership-trial", why: "A listing. An avocado walk is not a closing." },
    { kind: "land-care", why: "Five acres and avocado trees. Guests stay off rows they were not asked onto." },
    { kind: "building-code", why: "Passive-solar duplexes. What a household may change in a 1999 HOA." }
  ]

};

export const livingBatch17Governance: Record<string, Governance> = {

  vashon: {
    model: "hoa",
    modelLabel: "Island site condominium",
    unique: true,
    summary: "18 households on 12 acres. Construction from 1991. Site condominium. You buy a house. You do not buy Bank Road.",
    whoDecides: "House owners.",
    bodies: [
      { name: "The site condominium", role: "18 homes." },
      { name: "The common house", role: "Three guest rooms. Commercial kitchen." }
    ],
    howItRuns: "A listing. A town walk is not a closing.",
    dive: {
      title: "How an island cluster stayed a site-condo",
      lead: "Vashon put eighteen houses onto 12 acres a five-minute walk from town so more than eight acres of natural areas remain common, under a site condominium, not eighteen fenced lots.",
      organs: [
        { name: "The houses", what: "18 homes. FIC: 19 families in 18 residences." },
        { name: "The land", what: "12 acres. Orchard." }
      ],
      path: "Buy a house.",
      history: "Land around 1989/90. Built one house at a time, 16 November 1991 through 16 November 2005.",
      tension: "18 households versus 19 families (FIC). Confirm a vacancy, not a 2005 last-house story."
    }
  },
  "new-view": {
    model: "hoa",
    modelLabel: "Acton condominium",
    unique: false,
    summary: "24 households. Founded 1996. You buy a unit. You do not buy Half Moon Hill.",
    whoDecides: "Unit owners.",
    bodies: [
      { name: "New View Condominiums", role: "24 titles." },
      { name: "Common house", role: "25 Half Moon Hill." }
    ],
    howItRuns: "A listing. A hill walk is not a closing."
  },
  "tierra-nueva": {
    model: "hoa",
    modelLabel: "Oceano HOA",
    unique: false,
    summary: "27 units on 5 acres. Completed February 1999. You buy a unit. You do not buy the avocados.",
    whoDecides: "Unit owners.",
    bodies: [
      { name: "Tierra Nueva HOA", role: "Land in common." },
      { name: "27 homes", role: "Passive-solar duplexes and houses." }
    ],
    howItRuns: "A listing. A Halcyon walk is not a closing."
  }

};

export const livingBatch17Leaders: Record<string, VillageLeaders> = {

  vashon: {
    people: [],
    office: { url: "https://vashoncohousing.com/", email: "vashoncoho@gmail.com", address: "10421 SW Bank Road, Vashon, WA 98070" }
  },
  "new-view": {
    people: [],
    office: { url: "https://www.newview.org/", email: "outreach@newview.org", address: "25 Half Moon Hill, Acton, MA 01720" }
  },
  "tierra-nueva": {
    people: [],
    office: { url: "https://tncoho.com/", address: "Tierra Nueva Lane, Oceano, CA 93445" }
  }

};

export const livingBatch17Accommodations: Record<string, Accommodations> = {

  vashon: {
    visitor: {
      overview: "Three guest rooms. Common house also rented for events. Write the office. Not a public inn.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: [], detail: "Three guest rooms. Book through a household." },
      other: { available: false, types: [], detail: "Event rental of the common house — not a stay." }
    },
    resident: {
      overview: "18 households.",
      camping: { available: false, types: [], detail: "People live in the houses." },
      rooms: { available: true, types: [], detail: "Private homes plus a common house with a commercial kitchen." },
      other: { available: false, types: [], detail: "None listed." }
    }
  },
  "new-view": {
    visitor: {
      overview: "Outreach invites meals, meetings, events. Twenty-four private homes. No public guesthouse.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "Homes. Arrange if someone offers." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "24 households.",
      camping: { available: false, types: [], detail: "People live in the houses." },
      rooms: { available: true, types: [], detail: "Private homes plus a common house at 25 Half Moon Hill." },
      other: { available: false, types: [], detail: "None listed." }
    }
  },
  "tierra-nueva": {
    visitor: {
      overview: "Write via tncoho.com. Twenty-seven private homes. No public guesthouse of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "Homes. Arrange if someone offers." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "27 units.",
      camping: { available: false, types: [], detail: "People live in the cluster." },
      rooms: { available: true, types: [], detail: "Private homes plus a common house." },
      other: { available: false, types: [], detail: "None listed." }
    }
  }

};
