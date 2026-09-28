import type { LegalEntity } from "./legal-entities";
import type { LandOwnership } from "./land-ownership";
import type { CommunityFunding } from "./funding";
import type { VisitJoin } from "./visit-join";
import type { DailyLife } from "./daily-life";
import type { InformalAgreement } from "./informal-agreements";
import type { Governance } from "./governance";
import type { VillageLeaders } from "./leaders";
import type { Accommodations } from "./accommodations";

export const livingBatch11LegalEntities: Record<string, LegalEntity[]> = {

  "milagro-cohousing": [
    { name: "Milagro Cohousing association", kind: "Cohousing condominium", role: "28 privately owned townhomes. Consensus of neighbours. Six hours of work a month.", status: "current", layer: "membership", year: "2003", forms: ["Homeowners association"] },
    { name: "43 acres, Tucson Mountain foothills", kind: "Clustered houses plus preserve", role: "Homes in two rows. 35 acres nature preserve. The wash stays common.", status: "current", layer: "land", year: "2003", forms: ["Homeowners association", "Freehold title"] }
  ],
  vrijburcht: [
    { name: "VvE Vrijburcht", kind: "Owners’ association", role: "52 owner-occupied apartments after a CPO. Mixed-use ground floor.", status: "current", layer: "membership", year: "2007", forms: ["Homeowners association"] },
    { name: "Steigereiland block", kind: "CPO freeholds plus commons", role: "Each household holds its apartment. Theatre, café, two guest rooms, courtyard garden and harbour sit in common.", status: "current", layer: "land", year: "2007", forms: ["Homeowners association", "Freehold title"] }
  ]

};

export const livingBatch11Land: Record<string, LandOwnership> = {

  "milagro-cohousing": {
    owner: "28 townhome owners plus the association",
    complexity: "split",
    tenure: "Private homes on community land",
    howHeld: "Homes in two rows. 43 acres; 35 set aside as a nature preserve. Common house, pool, trail.",
    narrative: "A desert cluster. A house is not the wash.",
    divided: [
      { label: "28 townhomes", holder: "Households", share: "Private title", what: "The join is a listing." },
      { label: "Preserve, wash, trail", holder: "Association", share: "~35 of 43 acres", what: "You do not buy the Sonoran open." }
    ]
  },
  vrijburcht: {
    owner: "Apartment owners plus the VvE",
    complexity: "split",
    tenure: "CPO freeholds with mixed-use common",
    howHeld: "52 apartments privately held after a CPO. Theatre, café, two guest rooms, courtyard garden, care home and harbour sit in the block.",
    narrative: "A harbour block.",
    divided: [
      { label: "52 apartments", holder: "Households", share: "Private title", what: "The join is a listing." },
      { label: "Theatre, café, garden, guest rooms", holder: "VvE / operators", share: "Common and leases", what: "Public of record on the ground floor. Homes above." }
    ]
  }

};

export const livingBatch11Funding: Record<string, CommunityFunding> = {

  "milagro-cohousing": {
    overview: "Twenty-eight private townhomes and association dues on 43 acres.",
    grantsHeadline: "No major public grant isolated here",
    privateHeadline: "Townhome sales + dues",
    grants: [],
    private: [
      { source: "28 privately owned townhomes", amount: "Tucson foothill housing costs; listings from about $425,000 in one current account", certainty: "estimated", kind: "member-equity", note: "Homes on a fraction of 43 acres; preserve in common." }
    ]
  },
  vrijburcht: {
    overview: "CPO mortgages, then private titles. Mixed-use ground floor of record.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "CPO titles + ground-floor leases",
    grants: [],
    private: [
      { source: "52 owner-occupied apartments", amount: "Amsterdam IJburg housing costs", certainty: "estimated", kind: "member-equity", note: "Each household held a mortgage through construction of the CityChangers account. Then a VvE." },
      { source: "Theatre, brasserie, daycare, guest rooms", amount: "Ongoing public and lease income of record", certainty: "estimated", kind: "business", note: "theatervrijburcht.nl / brasserievrijburcht.nl. A matinee is not a flat." }
    ]
  }

};

export const livingBatch11VisitJoin: Record<string, VisitJoin> = {

  "milagro-cohousing": {
    visit: 3,
    join: 3,
    visitProcess: "Tucson Mountain foothills. 28 homes, 43 acres, a pool.",
    joinProcess: "Buy a townhome when one opens. Six hours of work a month. A wash walk is not a viewing."
  },
  vrijburcht: {
    visit: 3,
    join: 3,
    visitProcess: "J.O. Vaillantlaan 143, Steigereiland. Public theatre and brasserie of record. Two guest rooms of the Climate-ADAPT account. Homes above are not a hotel.",
    joinProcess: "Buy an apartment when one is listed. VvE of owner-occupiers. A matinee is not a viewing."
  }

};

export const livingBatch11DailyLife: Record<string, DailyLife> = {

  "milagro-cohousing": {
    typical: [
      { title: "Twenty-eight townhomes", detail: "Two rows on 43 acres. Common house of 3,600 square feet, a solar-heated pool." },
      { title: "Rain basins", detail: "Lush basins catch runoff. Recycled wastewater under the plantings." },
      { title: "Desert week", detail: "Six hours of work a month. Then the wash is the neighbour." }
    ],
    unique: { title: "A preserve with doors", detail: "Thirty-five of the 43 acres stay a nature preserve; the 28 townhomes sit in two rows with rain basins and a 3,600-square-foot common house." }
  },
  vrijburcht: {
    typical: [
      { title: "Fifty-two apartments", detail: "Owner-occupied after a CPO. A care home for six youths of record." },
      { title: "Theatre and brasserie", detail: "Public of record on the ground floor. Two guest rooms of the Climate-ADAPT account." },
      { title: "Steigereiland week", detail: "The IJmeer outside. Then a VvE meeting, or a matinee." }
    ],
    unique: { title: "A harbour the neighbours built", detail: "2007. CPO, then titles. You buy a flat. You do not buy the theatre." }
  }

};

export const livingBatch11Informal: Record<string, InformalAgreement[]> = {

  "milagro-cohousing": [
    { kind: "kitchen-table", why: "Community dinners. Twenty-eight private doors and one 3,600-square-foot common house." },
    { kind: "membership-trial", why: "A listing. Six hours of work a month. A wash walk is not a viewing." },
    { kind: "land-care", why: "35 of 43 acres preserve. Rain basins. Guests stay off a neighbour’s rows." },
    { kind: "labour-roster", why: "Monthly workdays, landscaping, tours." }
  ],
  vrijburcht: [
    { kind: "kitchen-table", why: "Fifty-two private doors and a courtyard garden with a greenhouse of the CityChangers account." },
    { kind: "membership-trial", why: "A listing. A matinee is not a viewing." },
    { kind: "guest-stay", why: "Two guest rooms of the Climate-ADAPT account. Public theatre and brasserie. Homes above are not." },
    { kind: "care-household", why: "A care home for six youths with slight mental impairments. Dignity is the compact." }
  ]

};

export const livingBatch11Governance: Record<string, Governance> = {

  "milagro-cohousing": {
    model: "consensus",
    modelLabel: "Cohousing condominium / consensus",
    unique: false,
    summary: "28 privately owned townhomes on 43 acres. Consensus of neighbours. Six hours of work a month.",
    whoDecides: "House owners.",
    bodies: [
      { name: "Households", role: "28 private titles." },
      { name: "Association", role: "Preserve, wash, trail, the common house." }
    ],
    howItRuns: "A listing. A wash walk is not a viewing."
  },
  vrijburcht: {
    model: "hybrid",
    modelLabel: "CPO / VvE mixed-use",
    unique: true,
    summary: "Collective private commissioning, then owner-occupiers. 52 apartments, a public theatre and brasserie, two guest rooms, a care home. You buy a flat. You do not buy the harbour.",
    whoDecides: "VvE of owner-occupiers. Ground-floor operators run the public rooms.",
    bodies: [
      { name: "VvE Vrijburcht", role: "Apartment owners. vve@vrijburcht.nl." },
      { name: "Theatre and brasserie", role: "Public of record. A matinee is not a flat." }
    ],
    howItRuns: "A listing. A café table is not a share.",
    dive: {
      title: "How a CPO kept a theatre in the block",
      lead: "Vrijburcht is a resident CPO that built a mixed-use harbour block — apartments, a theatre, a café, two guest rooms, a care home — then dissolved the building company so each household holds its own title without selling the ground floor as just more flats.",
      organs: [
        { name: "CPO, then VvE", what: "Planning 2000, construction 2005, completed 2007. 52 apartments. Their own site treats 2026 as twenty years." },
        { name: "Mixed-use ground floor", what: "Theatre, brasserie, daycare, two guest rooms, care home for six youths of the Climate-ADAPT account." }
      ],
      path: "Buy an apartment. There is no purchase of the theatre. vrijburcht.nl.",
      history: "Steigereiland, IJmeer. CASA / VLUGP. CityChangers 2022 still interviews the landscape architects who live there.",
      tension: "Completion year drifts 2006/2007. Guest rooms are of the Climate-ADAPT account, not a hotel listing. Confirm a vacancy, not a harbour photograph."
    }
  }

};

export const livingBatch11Leaders: Record<string, VillageLeaders> = {

  "milagro-cohousing": {
    people: [],
    office: { url: "https://www.milagrocohousing.org/", address: "Tucson Mountain foothills, Tucson, Arizona" }
  },
  vrijburcht: {
    people: [
      { name: "Menno Vergunst", role: "Landscape architect and early resident of the CityChangers 2022 account" },
      { name: "Johan Vlug", role: "Landscape architect and early resident" }
    ],
    office: { url: "https://vrijburcht.nl/", email: "vve@vrijburcht.nl", address: "J.O. Vaillantlaan 143, 1086 XZ Amsterdam, Netherlands" }
  }

};

export const livingBatch11Accommodations: Record<string, Accommodations> = {

  "milagro-cohousing": {
    visitor: {
      overview: "Tours. Twenty-eight homes, a pool, a trail. No public inn.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "No inn." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "About 80 people in 28 privately owned townhomes.",
      camping: { available: false, types: [], detail: "People live in townhomes." },
      rooms: { available: true, types: [], detail: "Owned dwellings plus a 3,600-square-foot common house." },
      other: { available: false, types: [], detail: "None listed." }
    }
  },
  vrijburcht: {
    visitor: {
      overview: "Two guest rooms of the Climate-ADAPT account. Public theatre and brasserie. Homes above are not a hotel.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Two guest rooms of record. Ask the VvE. The brasserie is a meal, not a bed." },
      other: { available: true, types: [], detail: "Theatre and brasserie open to the public of record." }
    },
    resident: {
      overview: "52 apartments plus a care home for six youths of record.",
      camping: { available: false, types: [], detail: "People live in the block." },
      rooms: { available: true, types: [], detail: "Owner-occupied dwellings plus mixed-use commons." },
      other: { available: false, types: [], detail: "None listed." }
    }
  }

};
