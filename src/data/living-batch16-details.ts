import type { LegalEntity } from "./legal-entities";
import type { LandOwnership } from "./land-ownership";
import type { CommunityFunding } from "./funding";
import type { VisitJoin } from "./visit-join";
import type { DailyLife } from "./daily-life";
import type { InformalAgreement } from "./informal-agreements";
import type { Governance } from "./governance";
import type { VillageLeaders } from "./leaders";
import type { Accommodations } from "./accommodations";

export const livingBatch16LegalEntities: Record<string, LegalEntity[]> = {
  "puget-ridge": [
    { name: "Puget Ridge Cohousing Association", kind: "Condominium association", role: "23 cedar duplexes and triplexes. Occupied 1994/1995.", status: "current", layer: "membership", year: "1994", forms: ["Homeowners association"] },
    { name: "Homestead Community Land Trust partnership", kind: "Community land trust", role: "One door becoming permanently affordable.", status: "current", layer: "land", year: "2020s", forms: ["Community land trust"] }
  ],

  landmatters: [
    { name: "Landmatters Permaculture Co-op", kind: "Workers cooperative", role: "Rural permaculture. Land 2003; permanent permission 2016.", status: "current", layer: "membership", year: "2003", forms: ["Limited company"] },
    { name: "42 acres near Totnes", kind: "Co-operative holding", role: "Pasture and ancient woodland. Low-impact dwellings.", status: "current", layer: "land", year: "2003", forms: ["Limited company"] }
  ],
  belterra: [
    { name: "Belterra Cohousing", kind: "Strata corporation", role: "30 townhouse suites. Occupied 2014.", status: "current", layer: "membership", year: "2014", forms: ["Homeowners association"] },
    { name: "Bowen Island hillside", kind: "Clustered townhouses", role: "3,700 sq ft common house with guest rooms.", status: "current", layer: "land", year: "2014", forms: ["Homeowners association", "Freehold title"] }
  ]
};

export const livingBatch16Land: Record<string, LandOwnership> = {
  "puget-ridge": {
    owner: "23 unit owners; one door in Homestead CLT partnership",
    complexity: "split",
    tenure: "Washington condominium plus a CLT door",
    howHeld: "23 cedar duplexes and triplexes on 2.4 acres. Parking at the edge. One permanently affordable partnership.",
    narrative: "A Delridge cluster. A unit is not 18th Avenue SW.",
    divided: [
      { label: "23 homes", holder: "Households / one CLT partnership", share: "Condo title", what: "The join is a listing." },
      { label: "Gardens and common house", holder: "Association", share: "Common", what: "You do not buy Delridge." }
    ]
  },

  landmatters: {
    owner: "The permaculture co-operative",
    complexity: "simple",
    tenure: "Co-operative holding",
    howHeld: "42 acres near Totnes. Land 2003. Permanent permission 2016. Low-impact dwellings. No private lots.",
    narrative: "A Devon holding. You apply. You do not buy a lot.",
    divided: [
      { label: "Dwellings", holder: "Co-op members", share: "Occupancy under planning", what: "The join is an application." },
      { label: "42 acres", holder: "The co-op", share: "Held in common", what: "You do not buy the woodland as lots." }
    ]
  },
  belterra: {
    owner: "30 suite owners plus the strata",
    complexity: "split",
    tenure: "British Columbia strata",
    howHeld: "30 townhouses on a Bowen Island hillside. Common house with guest rooms.",
    narrative: "An island cluster. Strata title. Guest rooms through a household.",
    divided: [
      { label: "30 townhouses", holder: "Households", share: "Strata title", what: "Buy a suite when one is listed." },
      { label: "Common house", holder: "Strata", share: "Common", what: "Guest rooms and a workshop." }
    ]
  }
};

export const livingBatch16Funding: Record<string, CommunityFunding> = {
  "puget-ridge": {
    overview: "23 condo titles from 1995; one Homestead CLT partnership.",
    grantsHeadline: "Homestead CLT partnership for one door — not a construction grant for the 1995 cluster",
    privateHeadline: "Condo sales",
    grants: [],
    private: [
      { source: "23 households", amount: "West Seattle housing costs", year: "1995", certainty: "estimated", kind: "member-equity", note: "A Delridge walk is not a closing." }
    ]
  },

  landmatters: {
    overview: "A co-operative holding bought 2003. Permanent permission 2016.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Co-operative occupancy",
    grants: [],
    private: [
      { source: "The co-op", amount: "16 adults and 7 children, 2016", certainty: "estimated", kind: "member-equity", note: "A visit is not a membership." }
    ]
  },
  belterra: {
    overview: "30 strata townhouses, occupied 2014.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Strata sales",
    grants: [],
    private: [
      { source: "30 households", amount: "Bowen Island housing costs of current listings", year: "2014", certainty: "estimated", kind: "member-equity", note: "Strata sales." }
    ]
  }
};

export const livingBatch16VisitJoin: Record<string, VisitJoin> = {
  "puget-ridge": {
    visit: 2,
    join: 3,
    visitProcess: "7020 18th Avenue SW, Delridge. Twenty-three homes. Write.",
    joinProcess: "Buy a unit when one is listed. One CLT door. A garden walk is not a closing."
  },

  landmatters: {
    visit: 2,
    join: 2,
    visitProcess: "Near Totnes. BBC 2016 noted educational visits. Write.",
    joinProcess: "Co-operative application. A woodland walk is not a membership."
  },
  belterra: {
    visit: 3,
    join: 3,
    visitProcess: "Bowen Island, 15 minutes from Snug Cove. Guest rooms. Write belterracohousing.ca.",
    joinProcess: "Buy a suite when one is listed.",
  }
};

export const livingBatch16DailyLife: Record<string, DailyLife> = {
  "puget-ridge": {
    typical: [
      { title: "Twenty-three cedar homes", detail: "Duplexes and triplexes. Occupied 1994/1995." },
      { title: "A 4,000 sq ft common house", detail: "Gardens and fruit trees." },
      { title: "A Delridge week", detail: "Jobs in Seattle. Then a pedway." }
    ],
    unique: { title: "A 1995 cluster that took a CLT door", detail: "Friends inspired by Danish cohousing built 23 cedar duplexes and triplexes in Delridge in 1994–95; one door is now a Homestead CLT permanently affordable unit." }
  },

  landmatters: {
    typical: [
      { title: "A 42-acre holding", detail: "Pasture and woodland. Land 2003." },
      { title: "Low-impact dwellings", detail: "Temporary-building rules; permanent permission 2016." },
      { title: "A South Devon week", detail: "Permaculture. Then a meeting." }
    ],
    unique: { title: "A co-op that won a ten-year planning fight", detail: "You apply. You do not buy a Devon lot." }
  },
  belterra: {
    typical: [
      { title: "Common house", detail: "About 3,700 square feet. Guest rooms and a workshop." },
      { title: "Gardens", detail: "Shared vegetable gardens. Guests stay off rows they were not asked onto." },
      { title: "Hillside walk", detail: "Fifteen minutes from Snug Cove. Forest and the Coastal Mountains." },
    ],
    unique: { title: "Fifteen minutes from Snug Cove", detail: "Thirty townhouses overlooking forest and the Coastal Mountains. Guest rooms in the common house. Canadian Cohousing lists the cluster completed in 2014; the 3,700 sq ft common house still holds those guest rooms and a workshop, a fifteen-minute walk from Snug Cove." },
  }
};

export const livingBatch16Informal: Record<string, InformalAgreement[]> = {
  "puget-ridge": [
    { kind: "kitchen-table", why: "23 private doors and a 4,000 sq ft common house." },
    { kind: "membership-trial", why: "A listing. A garden walk is not a closing." },
    { kind: "children-care", why: "Ages from months to 99. The pedway is a playground as much as a board." },
    { kind: "land-care", why: "Organic gardens. Guests stay off rows they were not asked onto." }
  ],

  landmatters: [
    { kind: "kitchen-table", why: "A co-op kitchen." },
    { kind: "membership-trial", why: "Apply. A woodland walk is not a membership." },
    { kind: "land-care", why: "42 acres of pasture and woodland. Guests stay off rows they were not asked onto." },
    { kind: "building-code", why: "Low-impact dwellings and the 2016 permission. What a household may change under planning." }
  ],
  belterra: [
    { kind: "kitchen-table", why: "30 private doors and a 3,700 sq ft common house." },
    { kind: "membership-trial", why: "A listing. Buy a suite when one is listed." },
    { kind: "guest-stay", why: "Guest rooms. Arrange through a household. Not a public inn." },
    { kind: "children-care", why: "Multi-generational. The hillside is a playground as much as a board." }
  ]
};

export const livingBatch16Governance: Record<string, Governance> = {
  "puget-ridge": {
    model: "hoa",
    modelLabel: "Condominium plus a CLT door",
    unique: true,
    summary: "23 homes. Built 1995. One Homestead CLT partnership. You buy a unit. You do not buy Delridge.",
    whoDecides: "Unit owners.",
    bodies: [
      { name: "PRCA", role: "23 condo titles." },
      { name: "Homestead CLT", role: "One permanently affordable door." }
    ],
    howItRuns: "A listing. A garden walk is not a closing.",
    dive: {
      title: "How a 1995 condo took a land-trust door",
      lead: "Puget Ridge put twenty-three cedar homes on 2.4 acres of Delridge so a Danish-inspired cluster remains self-governed condominium, with one door now held permanently affordable through Homestead Community Land Trust.",
      organs: [
        { name: "The association", what: "23 homes. Built 1995. Established 1994." },
        { name: "The CLT door", what: "Homestead partnership. Confirm which unit, not a 2020s press line as a vacancy." }
      ],
      path: "Buy a unit.",
      history: "Friends inspired by Denmark.",
      tension: "1994 versus 1995. 50 of 2011 versus 60. Confirm a vacancy, not a 2011 magazine walk."
    }
  },

  landmatters: {
    model: "cooperative",
    modelLabel: "Permaculture workers co-op",
    unique: true,
    summary: "42 acres near Totnes. Land 2003. Permanent permission 2016. You apply. You do not buy a Devon lot.",
    whoDecides: "The co-op.",
    bodies: [
      { name: "Landmatters Co-operative", role: "The members." },
      { name: "The holding", role: "42 acres of pasture and woodland." }
    ],
    howItRuns: "A woodland walk is not a membership.",
    dive: {
      title: "How a ten-year fight kept 42 acres off the lot map",
      lead: "Landmatters put a permaculture co-op onto 42 acres near Totnes so low-impact dwellings remain cooperative occupancy under a 2016 permanent permission, not a row of Devon freeholds.",
      organs: [
        { name: "The co-op", what: "16 adults and 7 children, 2016. Confirm current numbers." },
        { name: "The land", what: "Bought 2003. Temporary 2007; permanent 2016." }
      ],
      path: "Apply.",
      history: "First application rejected 2006. Inspector 2007. Permanent 2016.",
      tension: "Headcount of 2016. Confirm a vacancy.",
    }
  },
  belterra: {
    model: "hoa",
    modelLabel: "Island strata",
    unique: false,
    summary: "30 townhouses. Occupied 2014. Guest rooms in the common house.",
    whoDecides: "Suite owners.",
    bodies: [
      { name: "Strata", role: "30 titles." },
      { name: "Common house", role: "Guest rooms." }
    ],
    howItRuns: "A listing. Buy a suite when one is listed.",
  }
};

export const livingBatch16Leaders: Record<string, VillageLeaders> = {
  "puget-ridge": {
    people: [],
    office: { url: "https://sites.google.com/view/prcacohousing/home", address: "7020 18th Avenue SW, Seattle, WA 98106" }
  },

  landmatters: {
    people: [],
    office: { url: "https://landmatters.wixsite.com/devon", phone: "01803 712718", address: "Near Totnes, South Devon, United Kingdom" }
  },
  belterra: {
    people: [],
    office: { url: "https://www.belterracohousing.ca/", address: "726 Belterra Rd, Bowen Island, British Columbia, Canada" }
  },
};

export const livingBatch16Accommodations: Record<string, Accommodations> = {
  "puget-ridge": {
    visitor: {
      overview: "Write. Twenty-three private homes. No public guesthouse.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "Homes. Arrange if someone offers." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "23 cedar homes.",
      camping: { available: false, types: [], detail: "People live in the cluster." },
      rooms: { available: true, types: [], detail: "Private homes plus a common house." },
      other: { available: false, types: [], detail: "None listed." }
    }
  },

  landmatters: {
    visitor: {
      overview: "Write. Educational visits noted in 2016. No public inn.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: false, types: [], detail: "Dwellings. Arrange if someone offers." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "Co-op members.",
      camping: { available: false, types: [], detail: "People live in low-impact dwellings." },
      rooms: { available: true, types: [], detail: "Co-op dwellings plus shared land." },
      other: { available: false, types: [], detail: "None listed." }
    }
  },
  belterra: {
    visitor: {
      overview: "Guest rooms in the common house. Arrange through a household. Not a public inn. Write belterracohousing.ca.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Guest rooms of record on the Canadian Cohousing directory." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "30 townhouses.",
      camping: { available: false, types: [], detail: "People live in the cluster." },
      rooms: { available: true, types: [], detail: "Private suites plus a 3,700 sq ft common house." },
      other: { available: false, types: [], detail: "None listed." }
    }
  }
};
