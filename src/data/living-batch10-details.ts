import type { LegalEntity } from "./legal-entities";
import type { LandOwnership } from "./land-ownership";
import type { CommunityFunding } from "./funding";
import type { VisitJoin } from "./visit-join";
import type { DailyLife } from "./daily-life";
import type { InformalAgreement } from "./informal-agreements";
import type { Governance } from "./governance";
import type { VillageLeaders } from "./leaders";
import type { Accommodations } from "./accommodations";

export const livingBatch10LegalEntities: Record<string, LegalEntity[]> = {

  "threshold-centre": [
    { name: "The Threshold Cohousing Centre CIC", kind: "Community interest company", role: "Owns the freehold of all the properties. Mixed tenure on Cole Street Farm.", status: "current", layer: "membership", year: "2004", forms: ["Company limited by guarantee"] },
    { name: "Cole Street Farm", kind: "CIC freehold", role: "14 dwellings plus farmhouse rooms. Housing-association affordable units of record sit on the CIC title.", status: "current", layer: "land", year: "2009", forms: ["Company limited by guarantee"] }
  ]

};

export const livingBatch10Land: Record<string, LandOwnership> = {

  "threshold-centre": {
    owner: "The Threshold Cohousing Centre CIC",
    complexity: "simple",
    tenure: "CIC freehold, mixed occupation",
    howHeld: "CIC holds the freehold of all 14 dwellings and the farmhouse. Seven homes affordable rent or shared ownership with a housing association of record. Garden land across the lane is rented, over an acre.",
    narrative: "A Dorset farm the CIC locked. You apply. You do not buy Cole Street Farm.",
    divided: []
  }

};

export const livingBatch10Funding: Record<string, CommunityFunding> = {

  "threshold-centre": {
    overview: "CIC freehold, mixed owner-occupation and housing-association affordable tenure.",
    grantsHeadline: "Housing-association affordable units of record",
    privateHeadline: "CIC occupation",
    grants: [
      { source: "Seven affordable rent / shared-ownership homes with a local housing association", amount: "Affordable tenure of record", year: "2009", certainty: "documented", kind: "other", note: "UK Cohousing Network / Diggers and Dreamers. Confirm current partner on thresholdcentre.org.uk." }
    ],
    private: [
      { source: "Remaining dwellings under the CIC", amount: "Dorset rural housing costs", certainty: "estimated", kind: "member-equity", note: "CIC holds the freehold. You do not buy the farm." }
    ]
  }

};

export const livingBatch10VisitJoin: Record<string, VisitJoin> = {

  "threshold-centre": {
    visit: 3,
    join: 2,
    visitProcess: "Cole Street Farm, Gillingham. thresholdcentre.org.uk. Farmhouse guest rooms of record. They charge visitors. Write. It is not a Dorset B&B listing you invent.",
    joinProcess: "Mixed tenure under a CIC freehold. Seven affordable homes of record. Confirm vacancies on the site. A labyrinth walk is not a lease."
  }

};

export const livingBatch10DailyLife: Record<string, DailyLife> = {

  "threshold-centre": {
    typical: [
      { title: "Fourteen dwellings", detail: "Mostly barn conversions around a green. Seven affordable of record." },
      { title: "The farmhouse", detail: "18th-century common: kitchen, sitting room, meditation, guest rooms." },
      { title: "The garden across the lane", detail: "Over an acre, two polytunnels, a labyrinth of record. Biomass heat." }
    ],
    unique: { title: "A CIC on a farm", detail: "The Threshold Cohousing Centre CIC registered in 2004 and moved onto Cole Street Farm in 2009; fourteen barn conversions sit around an 18th-century farmhouse, seven of them affordable, with biomass heat, a biodigester, and a rented acre of garden across the lane." }
  }

};

export const livingBatch10Informal: Record<string, InformalAgreement[]> = {

  "threshold-centre": [
    { kind: "kitchen-table", why: "Farmhouse kitchen. Fourteen dwellings, one 18th-century table." },
    { kind: "membership-trial", why: "CIC mixed tenure. A labyrinth walk is not a lease." },
    { kind: "guest-stay", why: "Farmhouse guest rooms of record. They charge visitors. Write first." },
    { kind: "land-care", why: "Garden and orchard across the lane. Guests stay off beds they were not asked onto." },
    { kind: "quiet-practice", why: "A meditation room in the farmhouse of record. The compact is silence versus a guest corridor." }
  ]

};

export const livingBatch10Governance: Record<string, Governance> = {

  "threshold-centre": {
    model: "hybrid",
    modelLabel: "CIC cohousing, mixed tenure",
    unique: true,
    summary: "A Community Interest Company holds the freehold of Cole Street Farm. 14 dwellings, seven of them affordable with a housing association of record. Farmhouse guest rooms. You apply. You do not buy the farm.",
    whoDecides: "CIC members. Housing-association tenancies sit on the same title.",
    bodies: [
      { name: "The Threshold Cohousing Centre CIC", role: "Freehold. 14 homes plus farmhouse rooms. Companies House 05238501." },
      { name: "Housing association partner", role: "Seven affordable rent / shared-ownership homes of record." }
    ],
    howItRuns: "Apply on thresholdcentre.org.uk. A labyrinth walk is not a lease.",
    dive: {
      title: "A CIC that locked a Dorset farm",
      lead: "Threshold is the rare small UK cohousing that put the whole freehold in a community interest company so fourteen dwellings and a farmhouse cannot be split as ordinary Dorset houses.",
      organs: [
        { name: "CIC", what: "Registered 2004. Owns every title. Mixed occupation on one soil." },
        { name: "Farmhouse", what: "18th-century common: kitchen, meditation, guest rooms they charge for." }
      ],
      path: "Mixed tenure. There is no open-market freehold house. thresholdcentre.org.uk.",
      history: "CIC 2004. Occupied as cohousing 2009. Barn conversions, biomass, biodigester, a rented acre of garden across the lane.",
      tension: "UK Cohousing Network has said average age about 60 and no children of current record. Fourteen doors. Guest rooms are a farmhouse, not a hotel. Confirm a vacancy, not a 2009 case study."
    }
  }

};

export const livingBatch10Leaders: Record<string, VillageLeaders> = {

  "threshold-centre": {
    people: [],
    office: { url: "http://www.thresholdcentre.org.uk/", email: "info@thresholdcentre.org.uk", phone: "07934 568648", address: "Cole Street Farm, Cole Street Lane, Gillingham, Dorset SP8 5JQ" }
  }

};

export const livingBatch10Accommodations: Record<string, Accommodations> = {

  "threshold-centre": {
    visitor: {
      overview: "Farmhouse guest rooms of record. They charge visitors. Write info@thresholdcentre.org.uk first. It is not a walk-in B&B.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Spare rooms in the 18th-century farmhouse. Booked through the community." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "14 self-contained homes plus three rented rooms in the farmhouse. Up to about 20 members of record.",
      camping: { available: false, types: [], detail: "People live in the farm cluster." },
      rooms: { available: true, types: [], detail: "Mixed-tenure dwellings plus farmhouse rooms." },
      other: { available: false, types: [], detail: "None listed." }
    }
  }

};
