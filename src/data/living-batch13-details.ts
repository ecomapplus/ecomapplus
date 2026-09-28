import type { LegalEntity } from "./legal-entities";
import type { LandOwnership } from "./land-ownership";
import type { CommunityFunding } from "./funding";
import type { VisitJoin } from "./visit-join";
import type { DailyLife } from "./daily-life";
import type { InformalAgreement } from "./informal-agreements";
import type { Governance } from "./governance";
import type { VillageLeaders } from "./leaders";
import type { Accommodations } from "./accommodations";

export const livingBatch13LegalEntities: Record<string, LegalEntity[]> = {
  "neve-shalom": [
    { name: "Wahat al-Salam – Neve Shalom", kind: "Cooperative village", role: "Equal Jewish and Palestinian membership. A bilingual school and the School for Peace sit beside the houses.", status: "current", layer: "membership", year: "1970", forms: ["Housing cooperative", "Membership association"] },
    { name: "Latrun Trappist lease, then gift", kind: "Monastery land", role: "Forty hectares leased 1970 at a peppercorn rent. About twenty hectares later gifted outright.", status: "current", layer: "land", year: "1970", forms: ["Ground lease"] }
  ],
  "den-selvforsynende": [
    { name: "Andelsforening Den Selvforsynende Landsby", kind: "Housing cooperative", role: "Andel. 19 dwellings, aiming at 26.", status: "current", layer: "membership", year: "2002", forms: ["Housing cooperative"] },
    { name: "Højgårdsvej, Hundstrup", kind: "Andel land and farm", role: "Permaculture farm and houses on the edge of Hundstrup.", status: "current", layer: "land", year: "2002", forms: ["Housing cooperative"] }
  ]

};

export const livingBatch13Land: Record<string, LandOwnership> = {
  "neve-shalom": {
    owner: "Village on land leased, then partly gifted, by the Latrun Trappists",
    complexity: "split",
    tenure: "Monastery ground lease, later a gift of part",
    howHeld: "Forty hectares leased 1970 at a peppercorn rent. About twenty hectares gifted outright in the late 1990s. Houses of member families. No private flip of the hill.",
    narrative: "A Latrun hill. You apply. You do not buy the monastery’s lease.",
    divided: [
      { label: "Household lots", holder: "Member families", share: "Occupancy in the cooperative village", what: "The join is an application, not a Latrun freehold." },
      { label: "The hill", holder: "Lease, then a gift of part", share: "Trappist origin", what: "Peppercorn rent, then about twenty hectares outright." }
    ]
  },
  "den-selvforsynende": {
    owner: "Andelsforening",
    complexity: "simple",
    tenure: "Danish andel on a farm",
    howHeld: "Houses and a permaculture farm at Hundstrup. 19 dwellings, aiming at 26. Members hold shares.",
    narrative: "A Funen field the andel locked.",
    divided: []
  }

};

export const livingBatch13Funding: Record<string, CommunityFunding> = {
  "neve-shalom": {
    overview: "A monastery peppercorn lease, then a gift of part of the hill. Households and educational institutions of record.",
    grantsHeadline: "Trappist lease, then a gift of hectares",
    privateHeadline: "Households and the School for Peace",
    grants: [
      { source: "Latrun Trappist abbey", amount: "Forty hectares at 3 pence a year, 100-year lease; later about 20 ha gifted", year: "1970", certainty: "documented", kind: "other", note: "A peppercorn is not a purchase. Confirm the current parcel with the village." }
    ],
    private: [
      { source: "Member households", amount: "About 60–70 families of drifting accounts; 331 people in 2024", certainty: "estimated", kind: "member-equity", note: "A waiting list is not a deed." }
    ]
  },
  "den-selvforsynende": {
    overview: "Andel shares on a Funen farm. Occupied from the early 2000s.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Andel shares",
    grants: [],
    private: [
      { source: "19 andel dwellings", amount: "Funen housing costs; aiming at 26 houses", certainty: "estimated", kind: "member-equity", note: "Andel shares. Confirm a vacancy with the village." }
    ]
  }

};

export const livingBatch13VisitJoin: Record<string, VisitJoin> = {
  "neve-shalom": {
    visit: 3,
    join: 2,
    visitProcess: "Latrun hill, halfway between Tel Aviv and Jerusalem. A bilingual school and the School for Peace of record. Write. It is not a monastery outing.",
    joinProcess: "Cooperative membership, equal Jewish and Palestinian. A waiting list of about 300 families. A school day is not a share."
  },
  "den-selvforsynende": {
    visit: 3,
    join: 2,
    visitProcess: "Højgårdsvej, Hundstrup. Guided tours. A permaculture andel. Book.",
    joinProcess: "Buy an andel share when a house opens. 19 dwellings, aiming at 26."
  }

};

export const livingBatch13DailyLife: Record<string, DailyLife> = {
  "neve-shalom": {
    typical: [
      { title: "A bilingual school", detail: "Equal hours of Arabic and Hebrew. Children of both peoples in the same rooms." },
      { title: "The School for Peace", detail: "Encounter programmes of record since 1979. Workshops, not a spare room." },
      { title: "A Latrun week", detail: "Jobs in the region. Then a village that still insists on equal membership." }
    ],
    unique: { title: "Half and half on a leased hill", detail: "Bruno Hussar, an Egyptian-born Dominican, leased forty hectares from the Latrun Trappists in 1970; the first five families arrived in 1978 — four Jewish, one Palestinian — and the village still keeps equal membership." }
  },
  "den-selvforsynende": {
    typical: [
      { title: "Nineteen doors, aiming at twenty-six", detail: "A permaculture farm." },
      { title: "A Funen field", detail: "Hundstrup. Houses, a small farm, a guided walk." },
      { title: "A Svendborg week", detail: "Jobs in town. Then an andel meeting." }
    ],
    unique: { title: "An andel that kept the farm", detail: "Founded 2002; a May anniversary on Instagram. Hundstrup still books the walk; the farm stays the andel’s." }
  }

};

export const livingBatch13Informal: Record<string, InformalAgreement[]> = {
  "neve-shalom": [
    { kind: "children-care", why: "A bilingual school of record. Equal hours of Arabic and Hebrew." },
    { kind: "membership-trial", why: "A waiting list. A school day is not a share." },
    { kind: "quiet-practice", why: "A village founded for dialogue. The compact is what a guest may film after 7 October." },
    { kind: "media-story", why: "Every correspondent wants the same hill. Names, children, and the remaining equal membership are the likely compact." }
  ],
  "den-selvforsynende": [
    { kind: "kitchen-table", why: "An andel of nineteen doors." },
    { kind: "membership-trial", why: "An andel share." },
    { kind: "land-care", why: "Permaculture. Guests stay off rows they were not asked onto." },
    { kind: "children-care", why: "Adults and children. The lane is a playground as much as a board." }
  ]

};

export const livingBatch13Governance: Record<string, Governance> = {
  "neve-shalom": {
    model: "hybrid",
    modelLabel: "Equal-membership cooperative village",
    unique: true,
    summary: "A Jewish–Palestinian cooperative village on a Latrun hill. Lease 1970, families from 1978. Equal membership. You apply. You do not buy the monastery’s hill.",
    whoDecides: "Village members, half and half.",
    bodies: [
      { name: "The village", role: "Equal Jewish and Palestinian membership. Households, a bilingual school." },
      { name: "School for Peace", role: "Encounter programmes of record. A workshop is not a dwelling." }
    ],
    howItRuns: "A school day is not a share.",
    dive: {
      title: "How a peppercorn lease became a village",
      lead: "Wahat al-Salam – Neve Shalom put equal Jewish and Palestinian households on a Latrun hill first leased from Trappist monks, so a bilingual school and a waiting list replace both a gated settlement and a monastery guest wing.",
      organs: [
        { name: "The village", what: "331 people in 2024. About 60–70 families of drifting earlier counts. Half and half." },
        { name: "The land", what: "Forty hectares, 1970, 3 pence a year, 100 years. About twenty hectares gifted in the late 1990s." }
      ],
      path: "Apply. There is no estate-agent freehold of the hill.",
      history: "Bruno Hussar, 1970. First five families 1978. After 7 October, the village was still on the hill.",
      tension: "331 versus 60–70 families. A waiting list of about 300. Confirm a vacancy with the village, not a 1970 lease or a 2024 magazine walk."
    }
  },
  "den-selvforsynende": {
    model: "cooperative",
    modelLabel: "Permaculture andel",
    unique: true,
    summary: "A Funen andelsforening on a permaculture farm. 19 dwellings, aiming at 26. You buy a share. You do not buy Hundstrup.",
    whoDecides: "Andel members.",
    bodies: [
      { name: "Andelsforening", role: "Shares in houses. The farm in common." },
      { name: "The farm", role: "Permaculture." }
    ],
    howItRuns: "A vacancy.",
    dive: {
      title: "An andel that kept the farm",
      lead: "Den Selvforsynende Landsby put a permaculture farm in a true andelsforening so Hundstrup’s field stays association land, not twenty-six freehold gardens.",
      organs: [
        { name: "The andel", what: "19 dwellings; 26 houses intended." },
        { name: "The farm", what: "Permaculture. Tours." }
      ],
      path: "Buy a share. There is no private title to the hedge.",
      history: "Founded 2002. Instagram marks a 6 May twenty-year anniversary — 2004 or 2006 depending on the post.",
      tension: "2002 versus a May founding. 30 adults versus 70 mixed. 19 versus 26 houses. Confirm a vacancy.",
    }
  }

};

export const livingBatch13Leaders: Record<string, VillageLeaders> = {
  "neve-shalom": {
    people: [
      { name: "Bruno Hussar", role: "Founder; leased the hill from the Latrun Trappists in 1970" }
    ],
    office: { url: "https://wasns.org/", address: "Neve Shalom / Wahat al-Salam, Latrun, 99761, Israel" }
  },
  "den-selvforsynende": {
    people: [],
    office: { url: "https://selvforsyning.dk/", address: "Højgårdsvej, 5762 Vester Skerninge / Hundstrup, Denmark" }
  }

};

export const livingBatch13Accommodations: Record<string, Accommodations> = {
  "neve-shalom": {
    visitor: {
      overview: "Write. A bilingual school and the School for Peace of record. No public guesthouse of record here.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "Homes. A school is not a spare room." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "About 60–70 families of drifting counts; 331 people in 2024.",
      camping: { available: false, types: [], detail: "People live in houses." },
      rooms: { available: true, types: [], detail: "Member households on the hill." },
      other: { available: false, types: [], detail: "None listed." }
    }
  },
  "den-selvforsynende": {
    visitor: {
      overview: "Guided tours. A permaculture andel. No public guesthouse.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "Homes." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "19 dwellings; aiming at 26.",
      camping: { available: false, types: [], detail: "People live in the houses." },
      rooms: { available: true, types: [], detail: "Andel dwellings plus a farm in common." },
      other: { available: false, types: [], detail: "None listed." }
    }
  }

};
