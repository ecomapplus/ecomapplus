import type { LegalEntity } from "./legal-entities";
import type { LandOwnership } from "./land-ownership";
import type { CommunityFunding } from "./funding";
import type { VisitJoin } from "./visit-join";
import type { DailyLife } from "./daily-life";
import type { InformalAgreement } from "./informal-agreements";
import type { Governance } from "./governance";
import type { VillageLeaders } from "./leaders";
import type { Accommodations } from "./accommodations";

export const livingBatch8LegalEntities: Record<string, LegalEntity[]> = {

  "belfast-cohousing": [
    { name: "Belfast Cohousing condominium association", kind: "Cohousing condominium", role: "36 homes, bylaws, board. First Passive House-level cohousing of its type in North America of record.", status: "current", layer: "membership", year: "2012", forms: ["Homeowners association"] },
    { name: "42 acres, Belfast, Maine", kind: "Clustered houses plus farm", role: "Buildings on about 6 acres. Remainder farm and recreation. You do not buy the 42 acres with a unit.", status: "current", layer: "land", year: "2012", forms: ["Homeowners association", "Freehold title"] },
    { name: "Belfast Area Cohousing LLC", kind: "Historical purchaser", role: "Vehicle that bought the land. Not the household.", status: "historical", layer: "enterprise", year: "2011", forms: ["LLC"] }
  ],
  "new-ground": [
    { name: "OWCH (Barnet) Ltd", kind: "Company limited by guarantee", role: "Holds a 999-year head lease. Fully mutual company of women over fifty.", status: "current", layer: "membership", year: "2016", forms: ["Company limited by guarantee", "Housing cooperative"] },
    { name: "Housing for Women (freehold)", kind: "Housing association", role: "Holds the freehold of the Barnet block. Landlord for 8 assured tenancies.", status: "current", layer: "land", year: "2016", forms: ["Ground lease"] },
    { name: "17 long leases / 8 social rent", kind: "Mixed tenure", role: "17 residents hold 250-year leases; 8 have assured tenancies. You do not buy Barnet dirt.", status: "current", layer: "land", year: "2016", forms: ["Ground lease"] }
  ],
  "marmalade-lane": [
    { name: "Cambridge Cohousing Ltd", kind: "Cohousing company", role: "Company limited by guarantee (£1). Residents hold a stake in the common. No buy-to-let.", status: "current", layer: "membership", year: "2018", forms: ["Company limited by guarantee"] },
    { name: "Marmalade Lane, Orchard Park", kind: "Homes plus shared garden", role: "42 homes, car-free street, long shared garden. City-council land at origin. Eight-week member window before open-market sale.", status: "current", layer: "land", year: "2018", forms: ["Company limited by guarantee", "Freehold title"] }
  ]
};

export const livingBatch8Land: Record<string, LandOwnership> = {

  "belfast-cohousing": {
    owner: "Unit owners plus the association",
    complexity: "split",
    tenure: "Maine condominium on 42 acres",
    howHeld: "36 homes clustered on about 6 acres. Remainder farm and recreation held in common. Belfast Area Cohousing LLC was the historical purchaser.",
    narrative: "Passive House duplexes on a Maine farm. A unit is not the 42 acres.",
    divided: [
      { label: "36 homes", holder: "Households", share: "Condo title", what: "13 duplexes, 2 triplexes, a quad." },
      { label: "Farm and recreation", holder: "Association", share: "~36 of 42 acres", what: "The rest of the map." }
    ]
  },
  "new-ground": {
    owner: "Housing for Women (freehold) / OWCH (Barnet) Ltd (head lease)",
    complexity: "split",
    tenure: "999-year head lease, mixed long lease and social rent",
    howHeld: "Housing association holds the freehold. OWCH holds a 999-year head lease. 17 residents hold 250-year leases; 8 have assured tenancies. Walled garden on a former convent-school site.",
    narrative: "UK’s first senior women’s cohousing. You apply as a woman over fifty. You do not buy Barnet dirt.",
    divided: [
      { label: "Freehold", holder: "Housing for Women", share: "The soil", what: "Landlord for 8 social-rent flats." },
      { label: "999-year head lease", holder: "OWCH (Barnet) Ltd", share: "The building", what: "Fully mutual company." },
      { label: "17 long leases", holder: "Residents", share: "250-year leases", what: "Not a freehold house." }
    ]
  },
  "marmalade-lane": {
    owner: "Households plus Cambridge Cohousing Ltd",
    complexity: "split",
    tenure: "Homes plus a company stake in the common",
    howHeld: "42 homes owned or rented. Company limited by guarantee holds the common. City-council land at origin. No buy-to-let. Eight-week member window before open-market sale.",
    narrative: "A car-free Cambridge street. You buy or rent a house. You do not buy the garden.",
    divided: [
      { label: "42 homes", holder: "Households (own or rent)", share: "Private dwelling", what: "Member window, then market." },
      { label: "Street and shared garden", holder: "Cambridge Cohousing Ltd", share: "Common", what: "The £1 company." }
    ]
  }
};

export const livingBatch8Funding: Record<string, CommunityFunding> = {

  "belfast-cohousing": {
    overview: "Condo sales on 42 acres. Passive House fabric was the construction brief.",
    grantsHeadline: "No major public grant isolated here",
    privateHeadline: "Home sales",
    grants: [],
    private: [
      { source: "36 condominium homes", amount: "Midcoast Maine housing costs", certainty: "estimated", kind: "member-equity", note: "mainecohousing.org. A unit is not the 42 acres." }
    ]
  },
  "new-ground": {
    overview: "Mixed leasehold and social rent on a housing-association freehold.",
    grantsHeadline: "Housing association freehold / social-rent units",
    privateHeadline: "Long leases",
    grants: [
      { source: "Housing for Women freehold and 8 social-rent flats", amount: "Assured tenancies", year: "2016", certainty: "documented", kind: "other", note: "OWCH / UK Cohousing Network. The dirt stays the association’s." }
    ],
    private: [
      { source: "17 × 250-year leases", amount: "Barnet long-lease prices of the day", certainty: "estimated", kind: "member-equity", note: "newgroundcohousing.uk. You do not buy the freehold." }
    ]
  },
  "marmalade-lane": {
    overview: "Home sales and rentals, a £1 company, city-council land at origin.",
    grantsHeadline: "City-council land",
    privateHeadline: "Homes + service charge",
    grants: [
      { source: "Cambridge City Council land, Orchard Park", amount: "Council land into a cohousing procurement", year: "2015", certainty: "documented", kind: "other", note: "TOWN. Landowner was the city." }
    ],
    private: [
      { source: "42 homes, own or rent", amount: "Cambridge housing costs plus ~£64/month service charge", certainty: "estimated", kind: "member-equity", note: "No buy-to-let. Eight-week member window before open-market sale." }
    ]
  }
};

export const livingBatch8VisitJoin: Record<string, VisitJoin> = {

  "belfast-cohousing": {
    visit: 2,
    join: 3,
    visitProcess: "25 Village Road, Belfast, Maine. mainecohousing.org. Write. Thirty-six Passive House homes on 42 acres. Not a Penobscot Bay B&B.",
    joinProcess: "Buy a unit when one is listed. The 42 acres stay the association’s. A farm walk is not the closing."
  },
  "new-ground": {
    visit: 2,
    join: 2,
    visitProcess: "5b Union Street, Chipping Barnet. newgroundcohousing.uk. A three-storey block around a walled garden. Write. High Barnet is not a hotel corridor.",
    joinProcess: "Apply as a woman over fifty. Mixed leasehold and social rent. An architecture prize is not a lease."
  },
  "marmalade-lane": {
    visit: 3,
    join: 3,
    visitProcess: "Orchard Park, Cambridge. A car-free street and a long garden. Open days. Then the street is a home.",
    joinProcess: "Buy or rent when a home opens. Eight-week member mailing-list window before open-market sale. No buy-to-let. A garden lunch is not a plot."
  }
};

export const livingBatch8DailyLife: Record<string, DailyLife> = {

  "belfast-cohousing": {
    typical: [
      { title: "Thirty-six homes", detail: "Duplexes, triplexes, a quad. Passive House fabric." },
      { title: "The cluster", detail: "Buildings on about 6 of 42 acres. Pedestrian in the middle." },
      { title: "Farm and recreation", detail: "The rest of the map. Maine weather is the week." }
    ],
    unique: { title: "Passive House cohousing", detail: "OPAL / GO Logic. First of its type in North America of record. 2012 occupancy." }
  },
  "new-ground": {
    typical: [
      { title: "Twenty-five flats", detail: "26 women 50+. 17 leasehold, 8 social rent." },
      { title: "Walled garden", detail: "Former convent-school site. Allotment, the outdoor room." },
      { title: "Barnet week", detail: "High Street, the tube, then a three-storey block that is a meeting." }
    ],
    unique: { title: "UK’s first senior women’s cohousing", detail: "OWCH from 1998. Keys 2016. Brothers, sons, lovers — they cannot live here." }
  },
  "marmalade-lane": {
    typical: [
      { title: "The car-free street", detail: "Forty-two timber homes. Cars stay off it." },
      { title: "Long shared garden", detail: "The outdoor room. Common house at the end." },
      { title: "Cambridge week", detail: "Jobs in town. Then the lane is a meeting." }
    ],
    unique: { title: "No buy-to-let", detail: "£1 company. Eight-week member window before the open market. 2018 keys." }
  }
};

export const livingBatch8Informal: Record<string, InformalAgreement[]> = {

  "belfast-cohousing": [
    { kind: "kitchen-table", why: "Common house. Thirty-six Passive House doors." },
    { kind: "membership-trial", why: "A condo listing. A farm walk is not the closing." },
    { kind: "land-care", why: "42 acres, cluster on six. Guests stay off the farm they were not asked onto." },
    { kind: "children-care", why: "A pedestrian cluster. The common is a playground as much as a board." }
  ],
  "new-ground": [
    { kind: "kitchen-table", why: "Common rooms and a walled garden. Twenty-six women, one table." },
    { kind: "membership-trial", why: "Women over fifty. Mixed leasehold and social rent. A garden tea is not a lease." },
    { kind: "guest-stay", why: "Write. High Barnet is a home. Brothers, sons, lovers — they cannot live here." },
    { kind: "media-story", why: "Guardian 2023 still wants the feminist utopia photograph. Names and doors still matter." }
  ],
  "marmalade-lane": [
    { kind: "kitchen-table", why: "Common house and a long garden. Forty-two doors." },
    { kind: "membership-trial", why: "Eight-week member window, then the open market. A garden lunch is not a plot." },
    { kind: "children-care", why: "A car-free street. The garden is a playground as much as a meeting." },
    { kind: "building-code", why: "Timber street, no buy-to-let. What a household may change on Cambridge’s first cohousing lane." }
  ]
};

export const livingBatch8Governance: Record<string, Governance> = {

  "belfast-cohousing": {
    model: "hoa",
    modelLabel: "Cohousing condominium",
    unique: false,
    summary: "36 Passive House homes on 42 acres. Cluster on about 6. Board, bylaws, Maine condominium association.",
    whoDecides: "Unit owners through the board.",
    bodies: [
      { name: "Households", role: "36 homes." },
      { name: "Association", role: "42 acres, farm, recreation." }
    ],
    howItRuns: "A listing. mainecohousing.org. A farm walk is not the closing."
  },
  "new-ground": {
    model: "hybrid",
    modelLabel: "Senior women’s cohousing, mixed tenure",
    unique: true,
    summary: "UK’s first senior women’s cohousing. Housing for Women holds the freehold. OWCH holds a 999-year head lease. 17 long leases, 8 social rent. Women over fifty.",
    whoDecides: "OWCH members in group meetings, plus a small elected committee. Housing for Women is landlord on eight flats.",
    bodies: [
      { name: "OWCH (Barnet) Ltd", role: "Fully mutual company, 999-year head lease." },
      { name: "Housing for Women", role: "Freehold. Landlord for 8 assured tenancies." }
    ],
    howItRuns: "Apply as a woman over fifty. newgroundcohousing.uk. A garden tea is not a lease.",
    dive: {
      title: "A 999-year head lease for women over fifty",
      lead: "New Ground is the rare senior cohousing that mixed long lease and social rent under a housing-association freehold, so twenty-six women could age in a building they run without buying Barnet dirt.",
      organs: [
        { name: "OWCH (Barnet) Ltd", what: "Company limited by guarantee. 999-year head lease. Group meetings, elected committee, service teams." },
        { name: "Housing for Women", what: "Freehold. 8 assured tenancies. The soil stays the association’s." }
      ],
      path: "Women over fifty. Mixed tenure. There is no open-market freehold house. newgroundcohousing.uk / owch.org.uk.",
      history: "OWCH 1998. Eighteen years of sites and a Barnet planning fight. Pollard Thomas Edwards. Move-in November 2016 on a former convent-school plot.",
      tension: "Guardian 2023 still wants the feminist-utopia photograph. 17 leases and 8 social rents have to live in one garden. Brothers, sons, lovers cannot live here — that is the founding rule, not a slogan."
    }
  },
  "marmalade-lane": {
    model: "cooperative",
    modelLabel: "Cohousing company",
    unique: false,
    summary: "Cambridge Cohousing Ltd, £1 guarantee. 42 homes, car-free street, no buy-to-let. Eight-week member window before open-market sale.",
    whoDecides: "Members of the company. Households own or rent the dwellings.",
    bodies: [
      { name: "Cambridge Cohousing Ltd", role: "The £1 company, the common, the service charge." },
      { name: "Households", role: "42 homes, own or rent." }
    ],
    howItRuns: "A sale or a rental, member window first. A garden lunch is not a share certificate."
  }
};

export const livingBatch8Leaders: Record<string, VillageLeaders> = {

  "belfast-cohousing": {
    people: [],
    office: { url: "https://mainecohousing.org/", address: "25 Village Road, Belfast, Maine 04915" }
  },
  "new-ground": {
    people: [{ name: "Maria Brenton", role: "Founding member of record; Older Women’s Co-Housing" }],
    office: { url: "https://www.newgroundcohousing.uk/", address: "5b Union Street, Chipping Barnet, London EN5 4HY" }
  },
  "marmalade-lane": {
    people: [],
    office: { url: "https://www.marmaladelane.co.uk/", address: "Orchard Park, Cambridge CB4 2ZE" }
  }
};

export const livingBatch8Accommodations: Record<string, Accommodations> = {

  "belfast-cohousing": {
    visitor: {
      overview: "mainecohousing.org. Thirty-six Passive House homes on 42 acres. Arrange. Not a Penobscot Bay B&B.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "No inn of record." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "36 homes. Headcount on the order of 70–90.",
      camping: { available: false, types: [], detail: "People live in houses." },
      rooms: { available: true, types: [], detail: "Owned dwellings plus a common house. Farm in common." },
      other: { available: false, types: [], detail: "None listed." }
    }
  },
  "new-ground": {
    visitor: {
      overview: "newgroundcohousing.uk. A three-storey block around a walled garden. Write. High Barnet is a home.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "No tourist rooms of record." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "26 women 50+ in 25 flats. 17 leasehold, 8 social rent.",
      camping: { available: false, types: [], detail: "People live in the block." },
      rooms: { available: true, types: [], detail: "Long leases and assured tenancies plus common rooms and a walled garden." },
      other: { available: false, types: [], detail: "None listed." }
    }
  },
  "marmalade-lane": {
    visitor: {
      overview: "Open days. Then the car-free street is a home. No published visitor lodging.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "No guesthouse." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "42 homes. A neighbourhood of that size is on the order of 100 people.",
      camping: { available: false, types: [], detail: "People live in houses." },
      rooms: { available: true, types: [], detail: "Owned or rented dwellings plus a common house and a long shared garden." },
      other: { available: false, types: [], detail: "None listed." }
    }
  }
};
