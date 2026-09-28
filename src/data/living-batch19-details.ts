import type { LegalEntity } from "./legal-entities";
import type { LandOwnership } from "./land-ownership";
import type { CommunityFunding } from "./funding";
import type { VisitJoin } from "./visit-join";
import type { DailyLife } from "./daily-life";
import type { InformalAgreement } from "./informal-agreements";
import type { Governance } from "./governance";
import type { VillageLeaders } from "./leaders";
import type { Accommodations } from "./accommodations";

export const livingBatch19LegalEntities: Record<string, LegalEntity[]> = {
  redfield: [
    { name: "Redfield Community", kind: "Fully mutual housing cooperative", role: "Founded 1978. Up to 17 adults.", status: "current", layer: "membership", year: "1978", forms: ["Housing cooperative"] },
    { name: "Buckingham Road, Winslow", kind: "Mansion and 17 acres", role: "MK18 3LZ. 17 acres.", status: "current", layer: "land", year: "1978", forms: ["Housing cooperative"] }
  ],

  "la-querencia": [
    { name: "La Querencia", kind: "Cohousing association", role: "28 homes. Occupied 2008.", status: "current", layer: "membership", year: "2008", forms: ["Homeowners association"] },
    { name: "2658 E Alluvial Avenue", kind: "2.8 acres", role: "Northeast Fresno. Guest room.", status: "current", layer: "land", year: "2008", forms: ["Homeowners association", "Freehold title"] }
  ]

};

export const livingBatch19Land: Record<string, LandOwnership> = {
  redfield: {
    owner: "The cooperative",
    complexity: "simple",
    tenure: "Fully mutual housing cooperative",
    howHeld: "A mansion and 17 acres. Buckingham Road, Winslow. Founded 1978.",
    narrative: "A Bucks house. A dwelling is not Buckingham Road.",
    divided: [
      { label: "House and 17 acres", holder: "The coop", share: "Fully mutual", what: "You do not buy the road." }
    ]
  },

  "la-querencia": {
    owner: "28 house owners plus the association",
    complexity: "split",
    tenure: "Private lots plus common land",
    howHeld: "28 homes on 2.8 acres. Guest room. Occupied 2008.",
    narrative: "A Fresno twenty-eight. A house is not Alluvial Avenue.",
    divided: [
      { label: "28 homes", holder: "Households", share: "Private lots", what: "The join is a listing." },
      { label: "Common house, pool, garden", holder: "Association", share: "Common", what: "You do not buy Alluvial." }
    ]
  }

};

export const livingBatch19Funding: Record<string, CommunityFunding> = {
  redfield: {
    overview: "Fully mutual from 1978. Sixteen hours a week.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Cooperative occupancy",
    grants: [],
    private: [
      { source: "Members", amount: "Winslow cooperative costs", year: "1978", certainty: "estimated", kind: "member-equity", note: "A Buckingham Road walk is not a share." }
    ]
  },

  "la-querencia": {
    overview: "28 private homes, occupied 2008.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "House sales",
    grants: [],
    private: [
      { source: "28 households", amount: "Fresno housing costs", year: "2008", certainty: "estimated", kind: "member-equity", note: "An Alluvial walk is not a closing." }
    ]
  }

};

export const livingBatch19VisitJoin: Record<string, VisitJoin> = {
  redfield: {
    visit: 3,
    join: 2,
    visitProcess: "Buckingham Road, Winslow. redfieldvisit@gmail.com. Beds for visitors and volunteers. Write. It is not a Winslow picnic.",
    joinProcess: "Cooperative admission. Sixteen hours a week. A Buckingham Road walk is not a share."
  },

  "la-querencia": {
    visit: 3,
    join: 3,
    visitProcess: "2658 E Alluvial Avenue, Fresno. Guest room. Tours. Write.",
    joinProcess: "Buy a house when one is listed. An Alluvial walk is not a closing."
  }

};

export const livingBatch19DailyLife: Record<string, DailyLife> = {
  redfield: {
    typical: [
      { title: "Sixteen hours a week", detail: "Cooking, garden, buildings, animals." },
      { title: "A mansion and 17 acres", detail: "Winslow." },
      { title: "A Winslow week", detail: "The house still has to be a house." }
    ],
    unique: { title: "A fully mutual Bucks mansion", detail: "Founded in 1978 as a fully mutual housing co-operative in a Winslow mansion on 17 acres; adult members give sixteen hours a week to cooking, garden, buildings, and animals." }
  },

  "la-querencia": {
    typical: [
      { title: "Twenty-eight homes", detail: "2.8 acres." },
      { title: "A pool, a gym, a guest room", detail: "Pool, gym, and guest room." },
      { title: "A Fresno week", detail: "Jobs in the Valley. Then the common house." }
    ],
    unique: { title: "The Valley’s first cohousing", detail: "You buy a house. You do not buy Alluvial Avenue." }
  }

};

export const livingBatch19Informal: Record<string, InformalAgreement[]> = {
  redfield: [
    { kind: "kitchen-table", why: "A single household of up to 17 adults." },
    { kind: "membership-trial", why: "Coop admission. Sixteen hours a week." },
    { kind: "guest-stay", why: "Beds for visitors and volunteers. Write redfieldvisit@gmail.com. Not a public inn." },
    { kind: "labour-roster", why: "Cooking, garden, buildings, animals. Confirm current roster with the house." }
  ],

  "la-querencia": [
    { kind: "kitchen-table", why: "28 private doors." },
    { kind: "membership-trial", why: "A listing. An Alluvial walk is not a closing." },
    { kind: "guest-stay", why: "A guest room. Arrange through a household. Not a public inn." },
    { kind: "children-care", why: "Children’s playroom. The pool is a playground as much as a board." }
  ]

};

export const livingBatch19Governance: Record<string, Governance> = {
  redfield: {
    model: "cooperative",
    modelLabel: "Fully mutual housing cooperative on 17 acres",
    unique: true,
    summary: "Up to 17 adults. Founded 1978. Sixteen hours a week. You take a dwelling. You do not buy Buckingham Road.",
    whoDecides: "Adult members of the coop.",
    bodies: [
      { name: "The coop", role: "Fully mutual." },
      { name: "The house", role: "17 acres. Winslow." }
    ],
    howItRuns: "Sixteen hours a week. A Winslow walk is not a share.",
    dive: {
      title: "How a Bucks mansion stayed fully mutual",
      lead: "Redfield put up to 17 adults onto a Winslow house so a 1978 fully mutual coop remains a dwelling-for-work compact, not a country B&B.",
      organs: [
        { name: "The adults", what: "Up to 17. Sixteen hours a week." },
        { name: "The acres", what: "17 acres. Buckingham Road." }
      ],
      path: "Coop admission.",
      history: "Founded 1978.",
      tension: "Up to 17 versus a headcount that includes children. Confirm a vacancy with the house, not a 1978 origin story."
    }
  },

  "la-querencia": {
    model: "hoa",
    modelLabel: "Northeast Fresno cohousing HOA",
    unique: false,
    summary: "28 homes on 2.8 acres. Occupied 2008. You buy a house. You do not buy Alluvial Avenue.",
    whoDecides: "House owners.",
    bodies: [
      { name: "28 households", role: "House owners." },
      { name: "The commons", role: "Guest room, pool, gym." }
    ],
    howItRuns: "A listing. An Alluvial walk is not a closing."
  }

};

export const livingBatch19Leaders: Record<string, VillageLeaders> = {
  redfield: {
    people: [],
    office: { url: "https://redfieldcommunity.org.uk/", email: "redfieldvisit@gmail.com", address: "Buckingham Road, Winslow, Buckinghamshire MK18 3LZ" }
  },

  "la-querencia": {
    people: [],
    office: { url: "https://www.laqcoho.org/", phone: "559-918-9848", address: "2658 E Alluvial Avenue, Fresno, CA 93720" }
  }

};

export const livingBatch19Accommodations: Record<string, Accommodations> = {
  redfield: {
    visitor: {
      overview: "Beds for visitors and volunteers. Write redfieldvisit@gmail.com. Not a public inn.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: [], detail: "Visitor beds. Arrange." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "Up to 17 adults.",
      camping: { available: false, types: [], detail: "People live in the house." },
      rooms: { available: true, types: [], detail: "A fully mutual mansion." },
      other: { available: false, types: [], detail: "None listed." }
    }
  },

  "la-querencia": {
    visitor: {
      overview: "A guest room. Write. Not a public inn.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Guest room. Arrange through a household." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "28 homes.",
      camping: { available: false, types: [], detail: "People live in the cluster." },
      rooms: { available: true, types: [], detail: "Private homes plus a common house." },
      other: { available: false, types: [], detail: "None listed." }
    }
  }

};
