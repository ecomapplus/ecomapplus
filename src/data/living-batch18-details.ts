import type { LegalEntity } from "./legal-entities";
import type { LandOwnership } from "./land-ownership";
import type { CommunityFunding } from "./funding";
import type { VisitJoin } from "./visit-join";
import type { DailyLife } from "./daily-life";
import type { InformalAgreement } from "./informal-agreements";
import type { Governance } from "./governance";
import type { VillageLeaders } from "./leaders";
import type { Accommodations } from "./accommodations";

export const livingBatch18LegalEntities: Record<string, LegalEntity[]> = {

  "eno-commons": [
    { name: "Eno Commons HOA", kind: "HOA", role: "Yearly elected officers. Occupied from 1998.", status: "current", layer: "membership", year: "1998", forms: ["Homeowners association"] },
    { name: "11.2 acres at Indigo Creek", kind: "Private lots plus common land", role: "Homes and small lots private; Common House and barn in common.", status: "current", layer: "land", year: "1998", forms: ["Homeowners association", "Freehold title"] }
  ],

  "villa-locomuna": [
    { name: "Gemeinsam Leben eG", kind: "Housing cooperative", role: "Founded 2000. Houses stay in the eG.", status: "current", layer: "membership", year: "2000", forms: ["Registered association"] },
    { name: "Kölnische Straße 183", kind: "Former Bahn buildings", role: "First residents December 2000. Tannenwäldchen.", status: "current", layer: "land", year: "2000", forms: ["Registered association"] }
  ]

};

export const livingBatch18Land: Record<string, LandOwnership> = {

  "eno-commons": {
    owner: "22 house owners plus the association",
    complexity: "split",
    tenure: "Private lots plus common land",
    howHeld: "22 homes on 11.2 acres. Common House and barn in common. An upstairs guest bedroom.",
    narrative: "A Durham river cluster. A house is not the Eno.",
    divided: [
      { label: "22 homes", holder: "Households", share: "Private lots", what: "The join is a listing." },
      { label: "Common House, barn, rest of the land", holder: "Association", share: "Common", what: "You do not buy the river." }
    ]
  },

  "villa-locomuna": {
    owner: "Gemeinsam Leben eG",
    complexity: "simple",
    tenure: "Hessian Genossenschaft",
    howHeld: "Former Bahn buildings at Kölnische Straße 183. First residents December 2000.",
    narrative: "A Kassel commune. A room is not Kölnische Straße.",
    divided: [
      { label: "The houses", holder: "The eG", share: "Genossenschaft", what: "You do not buy the Bahn buildings." }
    ]
  }

};

export const livingBatch18Funding: Record<string, CommunityFunding> = {

  "eno-commons": {
    overview: "22 private homes, occupied from 1998.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "House sales",
    grants: [],
    private: [
      { source: "22 households", amount: "Durham housing costs of current listings", year: "1998", certainty: "estimated", kind: "member-equity", note: "An Indigo Creek walk is not a closing." }
    ]
  },

  "villa-locomuna": {
    overview: "Gemeinsam Leben eG from 2000. Spiegel 2018: income on a common account.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Genossenschaft occupancy / common purse (Spiegel 2018)",
    grants: [],
    private: [
      { source: "Members", amount: "Common account (Spiegel 2018) — amount not isolated", year: "2000", certainty: "estimated", kind: "member-equity", note: "A Tannenwäldchen walk is not a share." }
    ]
  }

};

export const livingBatch18VisitJoin: Record<string, VisitJoin> = {

  "eno-commons": {
    visit: 3,
    join: 3,
    visitProcess: "1 Indigo Creek Trail, Durham. Guide for Prospective Neighbors. An upstairs guest bedroom. It is not a river hike.",
    joinProcess: "Buy a house when one is listed. An Indigo Creek walk is not a closing."
  },

  "villa-locomuna": {
    visit: 2,
    join: 2,
    visitProcess: "Kölnische Straße 183, Kassel. Write. It is not a Tannenwäldchen picnic.",
    joinProcess: "eG admission. A Kölnische Straße walk is not a share."
  }

};

export const livingBatch18DailyLife: Record<string, DailyLife> = {

  "eno-commons": {
    typical: [
      { title: "Twenty-two homes", detail: "Occupied from 1998. 11.2 acres." },
      { title: "A weekly common-house meal", detail: "Turns cooking." },
      { title: "A Durham week", detail: "Fifteen minutes from the centre. Then the Eno." }
    ],
    unique: { title: "A river cluster that kept the barn in common", detail: "Neighbours started living here on 1 January 1998 — twenty-two homes, a Common House and barn held together, walking distance to Eno River State Park." }
  },

  "villa-locomuna": {
    typical: [
      { title: "A Kassel commune", detail: "eG from 2000. First residents December 2000." },
      { title: "A common account (Spiegel 2018)", detail: "Confirm it still holds." },
      { title: "A Vorderer Westen week", detail: "Jobs in Kassel. Then the Tannenwäldchen." }
    ],
    unique: { title: "An income-sharing eG in former Bahn buildings", detail: "You do not buy Kölnische Straße." }
  }

};

export const livingBatch18Informal: Record<string, InformalAgreement[]> = {

  "eno-commons": [
    { kind: "kitchen-table", why: "22 private doors and a weekly common-house meal." },
    { kind: "membership-trial", why: "A listing. An Indigo Creek walk is not a closing." },
    { kind: "guest-stay", why: "An upstairs bedroom used by neighbours’ guests. Not a public inn." },
    { kind: "land-care", why: "11.2 acres. Guests stay off the Eno they were not asked onto." }
  ],

  "villa-locomuna": [
    { kind: "kitchen-table", why: "A commune kitchen." },
    { kind: "membership-trial", why: "eG admission. A Kölnische Straße walk is not a share." },
    { kind: "building-code", why: "Former Bahn buildings. What a household may change under the eG." },
    { kind: "labour-roster", why: "Selbstverwaltung. Confirm current roster with the eG." }
  ]

};

export const livingBatch18Governance: Record<string, Governance> = {

  "eno-commons": {
    model: "hoa",
    modelLabel: "Durham river HOA",
    unique: false,
    summary: "22 homes on 11.2 acres. Occupied from 1998. You buy a house. You do not buy the Eno.",
    whoDecides: "House owners, yearly officers.",
    bodies: [
      { name: "HOA", role: "Yearly elected officers." },
      { name: "The land", role: "Common House and barn in common." }
    ],
    howItRuns: "A listing. An Indigo Creek walk is not a closing."
  },

  "villa-locomuna": {
    model: "cooperative",
    modelLabel: "Income-sharing Hessian eG",
    unique: true,
    summary: "Former Bahn buildings. eG from 2000. Spiegel 2018: a common account. You do not buy Kölnische Straße.",
    whoDecides: "Members of Gemeinsam Leben eG.",
    bodies: [
      { name: "The eG", role: "Founded 2000. Ownership stays with the eG." },
      { name: "The commune", role: "Selbstverwaltung. KommuJa." }
    ],
    howItRuns: "eG admission. A Tannenwäldchen walk is not a share.",
    dive: {
      title: "How a Bahn compound became a common purse",
      lead: "Villa Locomuna put a political commune into former Deutsche Bahn buildings so the houses stay in Gemeinsam Leben eG, and Spiegel 2018 still found the income on one account.",
      organs: [
        { name: "The eG", what: "Founded 2000. First residents December 2000." },
        { name: "The purse", what: "Spiegel 2 May 2018. Confirm it still holds." }
      ],
      path: "eG admission.",
      history: "Planungsbeginn 2000. Interkomm Kassel.",
      tension: "10 adults (GEN) versus 13 (Wohnprojekte) versus 30 (Permakultur.de). Confirm a vacancy, not a 2018 magazine walk."
    }
  }

};

export const livingBatch18Leaders: Record<string, VillageLeaders> = {

  "eno-commons": {
    people: [],
    office: { url: "https://www.enocommons.org/", address: "1 Indigo Creek Trail, Durham, NC 27712" }
  },

  "villa-locomuna": {
    people: [],
    office: { url: "https://www.villa-locomuna.de/", email: "info@gemeinsam-leben-eg.de", address: "Kölnische Straße 183, 34119 Kassel" }
  }

};

export const livingBatch18Accommodations: Record<string, Accommodations> = {

  "eno-commons": {
    visitor: {
      overview: "An upstairs bedroom used by neighbours’ guests. Write enocommons.org. Not a public inn.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: [], detail: "An upstairs guest bedroom. Arrange through a household." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "22 homes.",
      camping: { available: false, types: [], detail: "People live in the cluster." },
      rooms: { available: true, types: [], detail: "Private homes plus a Common House and barn." },
      other: { available: false, types: [], detail: "None listed." }
    }
  },

  "villa-locomuna": {
    visitor: {
      overview: "Write the office. No public guesthouse of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "Rooms. Arrange if someone offers." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "A Kassel commune.",
      camping: { available: false, types: [], detail: "People live in the Bahn buildings." },
      rooms: { available: true, types: [], detail: "Self-managed houses." },
      other: { available: false, types: [], detail: "None listed." }
    }
  }

};
