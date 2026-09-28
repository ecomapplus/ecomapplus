import type { LegalEntity } from "./legal-entities";
import type { LandOwnership } from "./land-ownership";
import type { CommunityFunding } from "./funding";
import type { VisitJoin } from "./visit-join";
import type { DailyLife } from "./daily-life";
import type { InformalAgreement } from "./informal-agreements";
import type { Governance } from "./governance";
import type { VillageLeaders } from "./leaders";
import type { Accommodations } from "./accommodations";

export const livingBatch6LegalEntities: Record<string, LegalEntity[]> = {
  innisfree: [
    { name: "Innisfree Village", kind: "501(c)(3) nonprofit", role: "Lifesharing community on a 550-acre farm, 1971–present.", status: "current", layer: "membership", year: "1971", forms: ["501(c)(3)"] },
    { name: "Crozet farm and woodland", kind: "Nonprofit land", role: "550 acres held by the charity. No house lots.", status: "current", layer: "land", year: "1971", forms: ["501(c)(3)"] }
  ],
  "canon-frome": [
    { name: "Windflower Housing Association", kind: "Co-ownership housing association", role: "Owns the court. 999-year leases to approved members. 1978.", status: "current", layer: "membership", year: "1978", forms: ["Housing cooperative"] },
    { name: "Canon Frome Court and 40-acre farm", kind: "Association land", role: "Grade II manor divided into about 20 apartments, farm worked collectively.", status: "current", layer: "land", year: "1978", forms: ["Housing cooperative", "Historic designation"] },
    { name: "Frome Society", kind: "Charity", role: "Workshops and events in the house.", status: "current", layer: "education", forms: ["Membership association"] },
    { name: "Farming co-operative", kind: "Agricultural cooperative", role: "Fields, garden, livestock.", status: "current", layer: "enterprise", forms: ["Housing cooperative"] }
  ],

  "winslow-cohousing": [
    { name: "Winslow Cohousing Group", kind: "Cooperative housing corporation", role: "Members own shares and hold proprietary leases. 30 homes, 1992.", status: "current", layer: "membership", year: "1992", forms: ["Housing cooperative"] },
    { name: "Five-acre Winslow site", kind: "Cooperative land", role: "Pedestrian village, parking on the edge, common house.", status: "current", layer: "land", year: "1992", forms: ["Housing cooperative"] }
  ],
  "cherry-hill": [
    { name: "Cherry Hill Cohousing (formerly Pioneer Valley)", kind: "Cohousing homeowners association", role: "32 private homes and a common house, 1994. Renamed 2022.", status: "current", layer: "membership", year: "1994", forms: ["Homeowners association"] },
    { name: "22-acre North Amherst meadow", kind: "Clustered houses plus woodland", role: "Homes on about six acres; woodland and agricultural land around.", status: "current", layer: "land", year: "1994", forms: ["Freehold title", "Homeowners association"] }
  ],
  hertha: [
    { name: "HBV / Hertha Levefællesskab", kind: "Self-owning institution / social-economy enterprise", role: "Reverse-integration living community, 1996. About 150 people.", status: "current", layer: "membership", year: "1996", forms: ["Self-governing institution"] },
    { name: "Herskind farm and houses", kind: "Institution and household land", role: "About 38 tønder of farm and garden in a published walking-route account, plus village houses.", status: "current", layer: "land", year: "1996", forms: ["Self-governing institution"] }
  ],
  gastwerke: [
    { name: "gASTWERKe e.V.", kind: "German registered association", role: "Living-and-working community on the Escherode forestry site, 2007–present.", status: "current", layer: "membership", year: "2007", forms: ["Registered association"] },
    { name: "Former Forstamt site, about 5 ha", kind: "Association land", role: "Houses, Bioland garden, academy. Occupancy, not lots.", status: "current", layer: "land", year: "2007", forms: ["Registered association"] },
    { name: "Bioland-Gärtnerei Wurzelwerk GbR", kind: "CSA market garden", role: "Vegetables from the site.", status: "current", layer: "enterprise", year: "2000s", forms: ["CSA"] },
    { name: "gASTWERKe Akademie", kind: "Seminar project", role: "Courses on the same ground.", status: "current", layer: "education", forms: ["Registered association"] }
  ],
  valdepielagos: [
    { name: "Ecoaldea Valdepiélagos housing cooperative", kind: "Spanish housing cooperative", role: "Constituted 9 January 1996. Thirty bioclimatic houses from 2008.", status: "current", layer: "membership", year: "1996", forms: ["Housing cooperative"] },
    { name: "Comunidad de propietarios", kind: "Owners’ community", role: "The street after the houses were built.", status: "current", layer: "membership", year: "2008", forms: ["Homeowners association"] },
    { name: "Thirty house plots, Valdepiélagos", kind: "Cooperative neighbourhood", role: "About 750 m² gardens in published accounts. The village is the street.", status: "current", layer: "land", year: "2008", forms: ["Housing cooperative"] }
  ]

};

export const livingBatch6Land: Record<string, LandOwnership> = {
  innisfree: {
    owner: "Innisfree Village (501(c)(3))",
    complexity: "simple",
    tenure: "Charitable farm",
    howHeld: "550 acres of farm and woodland at Crozet. Coworkers, volunteers, and staff occupy houses. There are no private lots.",
    narrative: "Parents bought a farm so their children would not live in a ward. The dirt is still the charity’s.",
    divided: []
  },
  "canon-frome": {
    owner: "Windflower Housing Association",
    complexity: "simple",
    tenure: "Co-ownership leases on association land",
    howHeld: "Grade II court and a 40-acre farm. About twenty apartments on 999-year leases, sold only to approved buyers. The land is farmed in common.",
    narrative: "A school closed. A housing association bought the house. Forty years later the park is still a farm.",
    divided: []
  },

  "winslow-cohousing": {
    owner: "Winslow Cohousing Group (cooperative housing corporation)",
    complexity: "simple",
    tenure: "Co-op shares and proprietary leases",
    howHeld: "Five acres in the Winslow district. Thirty homes, parking on the edge, a common house. Members own shares, not Bainbridge freehold of the green.",
    narrative: "They built it themselves in 1992 so the pedestrian street would belong to the people who walk it.",
    divided: []
  },
  "cherry-hill": {
    owner: "32 house owners plus common property",
    complexity: "split",
    tenure: "Cohousing HOA",
    howHeld: "Houses clustered on about six acres of a 22-acre meadow. Woodland and agricultural land around. Parking on the edge.",
    narrative: "A 1989 ad, a meadow, thirty-two doors. Most of the dirt was not built. That was the brief.",
    divided: [
      { label: "Houses", holder: "Households", share: "32 units", what: "Private residences, 616–1,600 sq ft" },
      { label: "Common house and remaining acres", holder: "All residents", share: "Woodland and farm around the cluster", what: "The cohousing bet" }
    ]
  },
  hertha: {
    owner: "HBV / Hertha Levefællesskab",
    complexity: "simple",
    tenure: "Self-owning institution and village houses",
    howHeld: "Farm, garden, supported houses, and ordinary households in Herskind. About 38 tønder in a published walking-route account.",
    narrative: "Reverse integration: neighbours moved in so the supported houses would not sit alone on the Jutland slope.",
    divided: []
  },
  gastwerke: {
    owner: "gASTWERKe e.V.",
    complexity: "simple",
    tenure: "Registered association land",
    howHeld: "About 5 hectares on a former forestry-office site. Houses, Bioland garden, academy. Occupancy, not Hessian lots.",
    narrative: "A Forstamt that became a household. The garden is why the office still has a week.",
    divided: []
  },
  valdepielagos: {
    owner: "Housing cooperative and comunidad de propietarios",
    complexity: "simple",
    tenure: "Cooperative neighbourhood",
    howHeld: "Thirty bioclimatic houses on garden plots. Constituted 1996, occupied 2008. A house is a co-op share, not a Madrid lote you flip without the street.",
    narrative: "Twelve years of paper so a village north of the capital could have a street that was not a developer’s catalogue.",
    divided: []
  }

};

export const livingBatch6Funding: Record<string, CommunityFunding> = {
  innisfree: {
    overview: "A 501(c)(3) farm: donations, fees, workshops, volunteer labour.",
    grantsHeadline: "Charitable donations and fees",
    privateHeadline: "Farm and workshop production",
    grants: [
      { source: "Donations and programme fees", amount: "Ongoing", certainty: "estimated", kind: "donation", note: "innisfreevillage.org. A charity, not a lot sale." }
    ],
    private: [
      { source: "Farm and workshops", amount: "Household and programme", certainty: "estimated", kind: "business", note: "Workstations are the week." }
    ]
  },
  "canon-frome": {
    overview: "999-year leases, a farm, a charity for workshops, summer WWOOFers.",
    grantsHeadline: "No major public grant found",
    privateHeadline: "Leases + farm",
    grants: [],
    private: [
      { source: "999-year leases", amount: "Herefordshire house prices, approved buyers only", certainty: "estimated", kind: "member-equity", note: "Membership when a home opens." },
      { source: "Farming co-operative", amount: "Produce", certainty: "estimated", kind: "business", note: "Forty acres. Not certified organic on their own account." }
    ]
  },

  "winslow-cohousing": {
    overview: "Co-op shares for thirty homes the members built themselves.",
    grantsHeadline: "No major public grant found",
    privateHeadline: "Shares and leases",
    grants: [],
    private: [
      { source: "Cooperative shares / proprietary leases", amount: "Bainbridge Island housing costs", certainty: "estimated", kind: "member-equity", note: "First US cohousing built by the co-owners." }
    ]
  },
  "cherry-hill": {
    overview: "Thirty-two private homes on a meadow bought in the early 1990s.",
    grantsHeadline: "No major public grant found",
    privateHeadline: "House sales + common dues",
    grants: [],
    private: [
      { source: "32 private residences", amount: "Amherst house prices", certainty: "estimated", kind: "member-equity", note: "Move-in 1994." }
    ]
  },
  hertha: {
    overview: "A social-economy institution, household housing, a farm.",
    grantsHeadline: "Danish social-economy / care finance",
    privateHeadline: "Households + farm",
    grants: [
      { source: "Supported living as a registered social-economy enterprise", amount: "Public care finance of record", certainty: "estimated", kind: "contract", note: "HBV is a selvejende institution. Confirm current contracts with Hertha, not a 2015 headcount." }
    ],
    private: [
      { source: "Ordinary households in Herskind", amount: "Danish village housing", certainty: "estimated", kind: "member-equity", note: "Reverse integration: neighbours bought in so the houses would not sit alone." }
    ]
  },
  gastwerke: {
    overview: "An association, a CSA garden, an academy.",
    grantsHeadline: "No major public grant isolated here",
    privateHeadline: "Garden + courses",
    grants: [],
    private: [
      { source: "Bioland CSA Wurzelwerk", amount: "Vegetable shares", certainty: "estimated", kind: "business", note: "zukunftskommunen.de / gastwerke.de." },
      { source: "Akademie courses", amount: "Seminar income", certainty: "estimated", kind: "courses", note: "gastwerke-akademie.de." }
    ]
  },
  valdepielagos: {
    overview: "A housing cooperative that spent twelve years getting thirty houses built.",
    grantsHeadline: "No major public grant found",
    privateHeadline: "Cooperative shares",
    grants: [],
    private: [
      { source: "Thirty cooperative houses", amount: "Madrid-hinterland housing costs", certainty: "estimated", kind: "member-equity", note: "Occupied from 2008." }
    ]
  }

};

export const livingBatch6VisitJoin: Record<string, VisitJoin> = {
  innisfree: {
    visit: 3,
    join: 2,
    visitProcess: "Crozet, Blue Ridge foothills. innisfreevillage.org. A working farm of mixed houses. Arrange. It is not a Shenandoah B&B.",
    joinProcess: "Coworkers through residential admissions. Volunteers apply for a year at innisfreevillage.org/apply. A walk of the farm is not an interview."
  },
  "canon-frome": {
    visit: 3,
    join: 3,
    visitProcess: "Canon Frome, near Ledbury. Workshops through the Frome Society. WWOOFers in summer. The court is a home.",
    joinProcess: "A 999-year lease when a dwelling opens, sold only to an approved buyer. membership@canonfromecourt.org.uk. A badminton evening is not a viewing."
  },

  "winslow-cohousing": {
    visit: 2,
    join: 3,
    visitProcess: "Bainbridge Island, a ferry from Seattle. Pre-scheduled tours only. The pedestrian street is not a Seattle open house.",
    joinProcess: "A co-op share and proprietary lease when a home opens. Book the tour first."
  },
  "cherry-hill": {
    visit: 2,
    join: 3,
    visitProcess: "120 Pulpit Hill Road, North Amherst. web.cohousing.com. Common meals and work days by arrangement. Thirty-two houses are homes.",
    joinProcess: "Buy one of the 32 when it is listed. The 2022 name change did not turn the meadow into a campus."
  },
  hertha: {
    visit: 3,
    join: 2,
    visitProcess: "Herskind, west of Aarhus. hertha.dk. Plan a visit. A walking circuit exists. The supported houses are homes.",
    joinProcess: "Live as a neighbour in the reverse-integration village, or work in the houses. GEN has listed it as not open to new members at times. Confirm on hertha.dk."
  },
  gastwerke: {
    visit: 4,
    join: 2,
    visitProcess: "Escherode, south of Kassel. gastwerke.de and the Akademie. Courses, garden, a household on the same path. Book a course. Do not treat the Forstamt as a hostel.",
    joinProcess: "A small resident household inside a larger seminar and garden project. A weekend is not a room."
  },
  valdepielagos: {
    visit: 3,
    join: 3,
    visitProcess: "Valdepiélagos, about 50 km north of Madrid. Workshops of record. Thirty houses are homes. A Madrid day-trip is not a key.",
    joinProcess: "A house in the cooperativa / comunidad when one opens. Confirm with the owners’ community, not a 2019 television clip."
  }

};

export const livingBatch6DailyLife: Record<string, DailyLife> = {
  innisfree: {
    typical: [
      { title: "Workstations", detail: "Gardens, kitchens, workshops. Coworkers and volunteers, 9 to 3 of record." },
      { title: "Lifesharing houses", detail: "Mixed households. A year-long volunteer lives in the same house." },
      { title: "The farm itself", detail: "550 acres at the park edge. Sheep, rows, a red barn in the photographs." }
    ],
    unique: { title: "Parents who would not use a ward", detail: "1971. The farm is still the argument." }
  },
  "canon-frome": {
    typical: [
      { title: "The court", detail: "A Georgian manor divided into apartments that have to be lived in." },
      { title: "Forty acres", detail: "Farming co-operative, garden, livestock. Dogs discouraged because of the animals." },
      { title: "Workshops", detail: "Frome Society: baskets, song, badminton. Then the house is a home." }
    ],
    unique: { title: "A school that became a co-op", detail: "1978. Windflower bought the court. The park is still a farm." }
  },

  "winslow-cohousing": {
    typical: [
      { title: "Pedestrian street", detail: "Thirty homes, parking on the edge, a ferry timetable." },
      { title: "Common house", detail: "The point of the share. Meals, meetings, the work days." },
      { title: "Island week", detail: "Winslow shops, a 35-minute boat to Seattle." }
    ],
    unique: { title: "The first they built themselves", detail: "Second US cohousing, first built by the co-owners. Move-in April 1992." }
  },
  "cherry-hill": {
    typical: [
      { title: "Thirty-two doors", detail: "A pedestrian cluster on six acres of a meadow." },
      { title: "Common house", detail: "Meals, a room that is the reason for the HOA." },
      { title: "Woodland around", detail: "Most of the 22 acres was not built." }
    ],
    unique: { title: "A 1989 ad, a 2022 name", detail: "Pioneer Valley until they chose Cherry Hill. The meadow did not move." }
  },
  hertha: {
    typical: [
      { title: "Reverse integration", detail: "Ordinary households next to about thirty adults who need support." },
      { title: "Farm and garden", detail: "Work days. A walking circuit around the land." },
      { title: "Festivals and meals", detail: "Steiner thread. The village is the care, not a ward on a slope." }
    ],
    unique: { title: "The neighbours moved in", detail: "Omvendt integration. 1996. Herskind is the address on purpose." }
  },
  gastwerke: {
    typical: [
      { title: "Bioland garden", detail: "Wurzelwerk CSA. Vegetables from the old forestry site." },
      { title: "Akademie days", detail: "Courses on the same path as the household." },
      { title: "About fifty people", detail: "Thirty adults, twenty children of record. FÖJ and guests in season." }
    ],
    unique: { title: "A Forstamt that stayed a house", detail: "2007. The office became a week of garden, clay, and seminar." }
  },
  valdepielagos: {
    typical: [
      { title: "Thirty bioclimatic houses", detail: "Solar, gardens, a street north of Madrid." },
      { title: "Workshops", detail: "Yoga, theatre, medicinal plants in published offers." },
      { title: "The comunidad", detail: "Cooperative and owners’ community. The meeting is the street." }
    ],
    unique: { title: "Twelve years of paper", detail: "The housing cooperative was constituted on 9 January 1996; thirty bioclimatic houses, solar and gardens, were occupied from 2008 after twelve years of planning — about 60 adults and 20 children on a street 50 km north of Madrid." }
  }

};

export const livingBatch6Informal: Record<string, InformalAgreement[]> = {
  innisfree: [
    { kind: "care-household", why: "Coworkers, volunteers, and staff in the same houses. Dignity is the compact." },
    { kind: "volunteer-intern", why: "A year is the door. innisfreevillage.org/apply. A weekend is not a coworker." },
    { kind: "children-care", why: "Adults with disabilities, some from age 21. Safeguarding cannot be only a brochure." },
    { kind: "land-care", why: "550 acres. Guests stay off rows and animals they were not asked onto." }
  ],
  "canon-frome": [
    { kind: "guest-stay", why: "Workshops and WWOOFers. The court is a home. Dogs discouraged because of livestock." },
    { kind: "membership-trial", why: "Approved buyer for a 999-year lease. A badminton evening is not a viewing." },
    { kind: "land-care", why: "Forty acres, animals, a Grade II house. Guests stay on the paths they were given." },
    { kind: "labour-roster", why: "Farm, garden, machinery, the house. The jobs visitors do not see are the membership." }
  ],

  "winslow-cohousing": [
    { kind: "guest-stay", why: "Pre-scheduled tours only. The pedestrian street is not a ferry-day open house." },
    { kind: "kitchen-table", why: "Thirty homes, a common house. Whose booking, whose meal." },
    { kind: "membership-trial", why: "A share when a home opens. A reserved tour is the public door." },
    { kind: "land-care", why: "Five acres, parking on the edge. The green is work." }
  ],
  "cherry-hill": [
    { kind: "kitchen-table", why: "Common meals. Thirty-two private doors and one room that is the point." },
    { kind: "membership-trial", why: "A house listing. Pulpit Hill Road is not a UMass shortcut with a key." },
    { kind: "land-care", why: "Woodland and farm around the cluster. Stay off a neighbour’s remaining acres." },
    { kind: "children-care", why: "A multi-generational meadow. The common is a playground as much as a board." }
  ],
  hertha: [
    { kind: "care-household", why: "Reverse integration. Ordinary households next to adults who need support. Dignity is the week." },
    { kind: "children-care", why: "A village with supported adults. Safeguarding cannot be only Steiner language." },
    { kind: "guest-stay", why: "Plan a visit on hertha.dk. The walking circuit is not a tour of the houses." },
    { kind: "land-care", why: "Farm and garden. Guests stay on the Hertha Rundt they were given." }
  ],
  gastwerke: [
    { kind: "course-host", why: "Akademie weekends. Then the Forstamt is a home again." },
    { kind: "volunteer-intern", why: "FÖJ and seasonal labour. A placement is not a room in the household." },
    { kind: "land-care", why: "Bioland garden, five hectares. Guests stay off rows they were not asked onto." },
    { kind: "membership-trial", why: "A small household inside a seminar project. A course is not an application." }
  ],
  valdepielagos: [
    { kind: "guest-stay", why: "Workshops. Thirty houses are homes. A Madrid day-trip is not a spare bedroom." },
    { kind: "membership-trial", why: "A cooperative house when one opens. A 2019 television clip is not a viewing." },
    { kind: "building-code", why: "Bioclimatic fabric, solar. What a household may do to a roof the cameras still want." },
    { kind: "land-care", why: "Garden plots. Guests stay off beds they were not asked onto." }
  ]

};

export const livingBatch6Governance: Record<string, Governance> = {
  innisfree: {
    model: "board",
    modelLabel: "Charitable board and households",
    unique: false,
    summary: "A 501(c)(3) lifesharing farm. Board and staff for the charity. Mixed houses for the week. Volunteers for a year.",
    whoDecides: "The nonprofit board and the households, on different questions.",
    bodies: [
      { name: "Innisfree Village board and staff", role: "The charity, admissions, the farm on paper." },
      { name: "Lifesharing houses", role: "Coworkers, volunteers, long-term staff." }
    ],
    howItRuns: "Apply to volunteer or for residential life. A walk of the barn is not the board."
  },
  "canon-frome": {
    model: "cooperative",
    modelLabel: "Co-ownership housing association",
    unique: false,
    summary: "Windflower holds the court. 999-year leases, approved buyers, a farming co-op, a charity for events.",
    whoDecides: "Association members. The farm and the Frome Society sit beside the leases.",
    bodies: [
      { name: "Windflower Housing Association", role: "The court and the leases." },
      { name: "Farming co-operative", role: "Forty acres." },
      { name: "Frome Society", role: "Workshops. Not the landlord." }
    ],
    howItRuns: "Membership secretary first. A WWOOF week is labour."
  },

  "winslow-cohousing": {
    model: "cooperative",
    modelLabel: "Cooperative housing corporation",
    unique: false,
    summary: "Shares, proprietary leases, thirty self-built homes, a pedestrian village.",
    whoDecides: "Shareholder-members. Self-governing.",
    bodies: [
      { name: "Winslow Cohousing Group", role: "The corporation, the five acres." },
      { name: "Common house", role: "Meals and the work days." }
    ],
    howItRuns: "Reserved tour first. A ferry ticket is not a share."
  },
  "cherry-hill": {
    model: "hoa",
    modelLabel: "Cohousing homeowners association",
    unique: false,
    summary: "32 private homes, a common house, sociocracy, renamed 2022.",
    whoDecides: "House owners. Sociocracy.",
    bodies: [
      { name: "Households", role: "32 deeds." },
      { name: "Common house", role: "Meals, meetings." }
    ],
    howItRuns: "A listing is the door. The 2022 name is not a new landlord."
  },
  hertha: {
    model: "hybrid",
    modelLabel: "Institution and village households",
    unique: false,
    summary: "A self-owning social-economy institution for supported living, plus ordinary households who chose reverse integration.",
    whoDecides: "HBV for the supported houses; village households for neighbour life.",
    bodies: [
      { name: "HBV", role: "Selvejende institution, the care on paper." },
      { name: "Village households", role: "The neighbours who moved in." }
    ],
    howItRuns: "Confirm on hertha.dk whether the village is taking people. A festival is not admissions."
  },
  gastwerke: {
    model: "hybrid",
    modelLabel: "Association, household, and academy",
    unique: false,
    summary: "gASTWERKe e.V. holds the site. A household lives there. An academy and a CSA garden are the public week.",
    whoDecides: "The Verein and the resident household, on different questions.",
    bodies: [
      { name: "gASTWERKe e.V.", role: "The land and the name." },
      { name: "Resident household", role: "About 30 adults and 20 children of record." },
      { name: "Akademie / Wurzelwerk", role: "Courses and vegetables." }
    ],
    howItRuns: "Book a course. A spare room is a smaller door."
  },
  valdepielagos: {
    model: "cooperative",
    modelLabel: "Housing cooperative and owners’ community",
    unique: false,
    summary: "Co-op 1996, houses 2008, thirty bioclimatic dwellings, a comunidad de propietarios for the street.",
    whoDecides: "Cooperative members and the owners’ community.",
    bodies: [
      { name: "Housing cooperative", role: "The 1996 paper." },
      { name: "Comunidad de propietarios", role: "The street after 2008." }
    ],
    howItRuns: "A house opens as a co-op share. A yoga workshop is not the meeting."
  }

};

export const livingBatch6Leaders: Record<string, VillageLeaders> = {
  innisfree: {
    people: [],
    office: { url: "https://www.innisfreevillage.org/", phone: "(434) 823-5400", address: "5505 Walnut Level Road, Crozet, Virginia 22932" }
  },
  "canon-frome": {
    people: [],
    office: { url: "https://www.canonfromecourt.org.uk/", email: "membership@canonfromecourt.org.uk", address: "Canon Frome Court, Canon Frome, Ledbury, Herefordshire" }
  },

  "winslow-cohousing": {
    people: [],
    office: { url: "https://winslowcohousing.org/", address: "Wallace Way NE, Winslow, Bainbridge Island, Washington" }
  },
  "cherry-hill": {
    people: [],
    office: { url: "https://web.cohousing.com/", email: "pvinfo@cohousing.com", address: "120 Pulpit Hill Road, Amherst, Massachusetts 01002" }
  },
  hertha: {
    people: [],
    office: { url: "https://hertha.dk/", address: "Herskind, Skanderborg Municipality, Denmark" }
  },
  gastwerke: {
    people: [{ name: "Jürgen Hassemeier", role: "Named contact for gASTWERKe e.V. on zukunftskommunen.de" }],
    office: { url: "https://gastwerke.de/", email: "juergen.h@gastwerke.de", address: "Forstamtstraße 6, 34355 Staufenberg-Escherode" }
  },
  valdepielagos: {
    people: [],
    office: { url: "https://www.ecoaldeavaldepielagos.org/", address: "Valdepiélagos, Community of Madrid" }
  }

};

export const livingBatch6Accommodations: Record<string, Accommodations> = {
  innisfree: {
    visitor: {
      overview: "Arrange through innisfreevillage.org. A working farm. Overnight is not the public product unless you are applying.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "No guesthouse of record. Volunteers live in." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "Coworkers, year-long volunteers, and staff in shared houses.",
      camping: { available: false, types: [], detail: "People live in houses." },
      rooms: { available: true, types: [], detail: "Lifesharing households on the 550 acres." },
      other: { available: false, types: [], detail: "None listed." }
    }
  },
  "canon-frome": {
    visitor: {
      overview: "Workshops through the Frome Society. Summer WWOOFers.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "WWOOF stays in season. Workshops are daytime unless advertised." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "About fifty people in apartments around the court and farm.",
      camping: { available: false, types: [], detail: "People live in the house." },
      rooms: { available: true, types: [], detail: "999-year leases, about 18–20 dwellings." },
      other: { available: false, types: [], detail: "None listed." }
    }
  },

  "winslow-cohousing": {
    visitor: {
      overview: "Pre-scheduled tours only. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "No advertised guesthouse. Tours, not beds." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "Thirty proprietary-lease homes.",
      camping: { available: false, types: [], detail: "People live in the houses." },
      rooms: { available: true, types: [], detail: "Co-op dwellings and a common house." },
      other: { available: false, types: [], detail: "None listed." }
    }
  },
  "cherry-hill": {
    visitor: {
      overview: "Common meals and work days by arrangement. web.cohousing.com. No published visitor lodging.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "No guesthouse listed. Occasional rentals on the fact sheet." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "Thirty-two private homes on the meadow.",
      camping: { available: false, types: [], detail: "People live in the houses." },
      rooms: { available: true, types: [], detail: "Private residences plus a common house." },
      other: { available: false, types: [], detail: "None listed." }
    }
  },
  hertha: {
    visitor: {
      overview: "Plan a visit on hertha.dk. A living village, not a museum. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "No hotel. Confirm any guest bed with Hertha." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "About 150 people: ordinary households and supported houses.",
      camping: { available: false, types: [], detail: "People live in houses." },
      rooms: { available: true, types: [], detail: "Village dwellings and supported houses." },
      other: { available: false, types: [], detail: "None listed." }
    }
  },
  gastwerke: {
    visitor: {
      overview: "Akademie courses. gastwerke.de. The household lives on the same site.",
      camping: { available: false, types: [], detail: "Confirm current types; the public offer is the seminar." },
      rooms: { available: true, types: [], detail: "Course lodging when advertised. Not a drop-in hostel." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "About 30 adults and 20 children of record.",
      camping: { available: false, types: [], detail: "Residents live in the houses." },
      rooms: { available: true, types: [], detail: "Association dwellings, not guest bookings." },
      other: { available: false, types: [], detail: "None listed." }
    }
  },
  valdepielagos: {
    visitor: {
      overview: "Workshops of record. Thirty houses are homes. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "No hotel of record. Workshops are the public door." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "Thirty bioclimatic houses.",
      camping: { available: false, types: [], detail: "People live in the houses." },
      rooms: { available: true, types: [], detail: "Cooperative dwellings." },
      other: { available: false, types: [], detail: "None listed." }
    }
  }

};
