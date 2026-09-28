import type { LegalEntity } from "./legal-entities";
import type { LandOwnership } from "./land-ownership";
import type { CommunityFunding } from "./funding";
import type { VisitJoin } from "./visit-join";
import type { DailyLife } from "./daily-life";
import type { InformalAgreement } from "./informal-agreements";
import type { Governance } from "./governance";
import type { VillageLeaders } from "./leaders";
import type { Accommodations } from "./accommodations";

export const livingBatch12LegalEntities: Record<string, LegalEntity[]> = {
  "newton-dee": [
    { name: "Newton Dee Camphill Community Limited", kind: "Company limited by guarantee", role: "Scottish non-profit company SC427688 of their own community page. Holds the charity’s corporate personality.", status: "current", layer: "membership", year: "1960", identifier: "SC427688", forms: ["Company limited by guarantee"] },
    { name: "Newton Dee Camphill Community Limited (charity)", kind: "Scottish charity", role: "Registered charity SC043417. Adults with additional support needs and coworkers live and work together of their own site.", status: "current", layer: "covenant", year: "1960", identifier: "SC043417", forms: ["Charitable trust"] },
    { name: "Newton Dee Estate, Bieldside", kind: "Charity land", role: "180 acres, 36 households, 120-acre biodynamic farm. You do not buy the woods.", status: "current", layer: "land", year: "1945", forms: ["Charitable trust"] }
  ],
  "harmony-village": [
    { name: "Harmony Village association", kind: "Cohousing condominium", role: "27 privately owned Santa Fe-style townhomes. Consensus of neighbours.", status: "current", layer: "membership", year: "1996", forms: ["Homeowners association"] },
    { name: "1001 Cottonwood Circle, 5.5 acres", kind: "Clustered freeholds plus commons", role: "Townhomes around car-free paths. Common house, gardens, orchard.", status: "current", layer: "land", year: "1996", forms: ["Homeowners association", "Freehold title"] }
  ],
  "two-echo": [
    { name: "Cumberland County Cohousing Community LLC (C4)", kind: "Founding LLC", role: "Formed to buy land and develop. Historical vehicle, not the current house titles.", status: "historical", layer: "enterprise", year: "1996", forms: ["LLC"] },
    { name: "Two Echo households", kind: "Clustered freeholds", role: "21 houses and 3 duplexes, 27 households.", status: "current", layer: "membership", year: "1998", forms: ["Homeowners association", "Freehold title"] },
    { name: "Conservation easement, Brunswick woods", kind: "Easement", role: "About 70–72 acres locked, and a town map. You do not buy the easement.", status: "current", layer: "land", year: "1998", forms: ["Conservation covenant"] }
  ],

  kersentuin: [
    { name: "Bewoners De Kersentuin", kind: "Residents’ association", role: "CPO from 1996. Mixed 66 koop and 28 sociale huur. Projecthuis at Atalantahof 11.", status: "current", layer: "membership", year: "1996", forms: ["Membership association"] },
    { name: "66 owner-occupied houses", kind: "Private titles", role: "Koop dwellings on Atalantahof and Aureliahof. You buy when one opens.", status: "current", layer: "land", year: "2003", forms: ["Homeowners association", "Freehold title"] },
    { name: "28 sociale-huur dwellings", kind: "Social rent", role: "A housing-corporation lease, not a freehold. You apply. You do not buy.", status: "current", layer: "land", year: "2003", forms: ["Membership association"] }
  ],
  "hameau-des-buis": [
    { name: "SAS Coopérative Hameau des Buis", kind: "Habitat cooperative", role: "SAS à capital variable, non-profit, constituted 28 January 2023. Inhabitants, farmers, artisans, sympathisers.", status: "current", layer: "membership", year: "2023", forms: ["Housing cooperative"] },
    { name: "Association La Ferme des Enfants", kind: "Association", role: "Founded 1999. School and farm that originated the hamlet.", status: "current", layer: "education", year: "1999", forms: ["Membership association"] },
    { name: "Six hectares, Berrias-et-Casteljau", kind: "Cooperative land", role: "Wooded plateau above the Chassezac, edge of Païolive. About 20 bioclimatic dwellings.", status: "current", layer: "land", year: "2011", forms: ["Housing cooperative"] }
  ]
};

export const livingBatch12Land: Record<string, LandOwnership> = {
  "newton-dee": {
    owner: "Newton Dee Camphill Community Limited (charity SC043417 / company SC427688)",
    complexity: "simple",
    tenure: "Scottish charity estate",
    howHeld: "180 acres at Bieldside. 36 households, 120 acres biodynamic farm of their own site. No private freehold.",
    narrative: "An adult Camphill estate. You apply. You do not buy the woods.",
    divided: []
  },
  "harmony-village": {
    owner: "27 townhome owners plus the association",
    complexity: "split",
    tenure: "Private homes on community land",
    howHeld: "Santa Fe-style townhomes clustered on 5.5 acres. Common house, gardens, orchard in common.",
    narrative: "A Golden cluster. You buy a house when one opens.",
    divided: [
      { label: "27 townhomes", holder: "Households", share: "Private title", what: "The join is a listing." },
      { label: "Paths, common house, orchard", holder: "Association", share: "Common", what: "Car-free paths." }
    ]
  },
  "two-echo": {
    owner: "27 households plus a conservation easement",
    complexity: "split",
    tenure: "Clustered lots with an easement on the woods",
    howHeld: "21 houses and 3 duplexes on small lots. Acreage drifts 92 / 95 / 97. About 70–72 acres in a conservation easement.",
    narrative: "A Brunswick woods. A house is not the easement.",
    divided: [
      { label: "27 households", holder: "Households", share: "Private title", what: "The join is a listing on twoecho.org." },
      { label: "Woods and fields under easement", holder: "Easement holder", share: "~70–72 acres", what: "You do not buy the lock." }
    ]
  },

  kersentuin: {
    owner: "66 owner-occupiers, a social-rent landlord, and the residents’ association",
    complexity: "split",
    tenure: "Mixed koop and sociale huur",
    howHeld: "94 dwellings on two streets. 66 private titles, 28 social-rent. Projecthuis, garage roof garden and orchard in common.",
    narrative: "A Leidsche Rijn CPO.",
    divided: [
      { label: "66 koop dwellings", holder: "Households", share: "Private title", what: "The join is a listing." },
      { label: "28 sociale huur", holder: "Housing-corporation tenants", share: "Social-rent lease", what: "You apply. You do not buy." },
      { label: "Projecthuis, roof garden, orchard", holder: "Residents’ association", share: "Common", what: "Atalantahof 11 of record." }
    ]
  },
  "hameau-des-buis": {
    owner: "SAS Coopérative Hameau des Buis",
    complexity: "simple",
    tenure: "Habitat-cooperative land",
    howHeld: "6 hectares, about 20 bioclimatic dwellings. Cooperative of inhabitants from 2023. No private freehold.",
    narrative: "An Ardèche plateau the cooperative locked. You join. You do not buy Païolive.",
    divided: []
  }
};

export const livingBatch12Funding: Record<string, CommunityFunding> = {
  "newton-dee": {
    overview: "Scottish charity. Placements, farm, workshops, donations. A café is not a deed.",
    grantsHeadline: "Charity and placement income of record",
    privateHeadline: "Donations, café, farm",
    grants: [
      { source: "Residential and day placements", amount: "Adults with additional support needs of their welfare page", certainty: "estimated", kind: "contract", note: "welfare@newtondee.org.uk. A placement is not a freehold." }
    ],
    private: [
      { source: "Donations, café, farm shop of their own pages", amount: "Charity SC043417", certainty: "estimated", kind: "donation", note: "01224 868 701 / info@newtondee.org.uk. A loaf is not a share." }
    ]
  },
  "harmony-village": {
    overview: "Twenty-seven private townhomes and association dues on 5.5 acres.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Townhome sales + dues",
    grants: [],
    private: [
      { source: "27 privately owned townhomes", amount: "Golden housing costs; 1,000–3,500 SF", certainty: "estimated", kind: "member-equity", note: "Townhome sales when a listing opens." }
    ]
  },
  "two-echo": {
    overview: "Founding LLC bought the land. Then private houses. An easement locked the woods.",
    grantsHeadline: "Conservation easement of record",
    privateHeadline: "House sales",
    grants: [
      { source: "Conservation easement on about 70–72 acres", amount: "Locked woods and fields and a town map", year: "1990s", certainty: "documented", kind: "easement", note: "Acreage drifts. Confirm the lock with the community, not a 1998 photograph." }
    ],
    private: [
      { source: "21 houses and 3 duplexes", amount: "Brunswick housing costs; listings on twoecho.org", certainty: "estimated", kind: "member-equity", note: "A woods walk is not a viewing." }
    ]
  },

  kersentuin: {
    overview: "CPO in Leidsche Rijn. Mixed owner-occupied and social rent.",
    grantsHeadline: "Construction subsidy of record",
    privateHeadline: "66 koop dwellings + 28 social-rent",
    grants: [
      { source: "Public construction support", amount: "6–7 tonnes of subsidy", year: "c. 2003", certainty: "estimated", kind: "grant", note: "De Witte Wolf, July 2023. Confirm with kersentuin.nl." }
    ],
    private: [
      { source: "66 owner-occupied houses", amount: "Utrecht Leidsche Rijn housing costs", certainty: "estimated", kind: "member-equity", note: "kersentuin.nl." },
      { source: "28 sociale-huur dwellings", amount: "Ordinary Dutch social-housing rent", certainty: "estimated", kind: "other", note: "You apply. You do not buy." }
    ]
  },
  "hameau-des-buis": {
    overview: "Cooperative capital. Ferme des Enfants put in €52,000 at the start — confirm with the SAS, not a magazine.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Cooperative shares",
    grants: [],
    private: [
      { source: "SAS coopérative shares", amount: "43 inhabitants, about 20 dwellings", certainty: "estimated", kind: "member-equity", note: "Two T3 openings in 2024. An open day is not a share." }
    ]
  }
};

export const livingBatch12VisitJoin: Record<string, VisitJoin> = {
  "newton-dee": {
    visit: 3,
    join: 2,
    visitProcess: "Bieldside, Aberdeen AB15 9DX. newtondee.co.uk. A café and a farm shop of their own pages. 01224 868 701. Write. It is a lived-in estate, not an Aberdeenshire outing.",
    joinProcess: "Residential or day placement through the Welfare Group, welfare@newtondee.org.uk. Coworker years of the Camphill path. A café table is not a lease."
  },
  "harmony-village": {
    visit: 3,
    join: 3,
    visitProcess: "1001 Cottonwood Circle, Golden. Tours by resident volunteers. 27 townhomes, 5.5 acres.",
    joinProcess: "Buy a townhome when one opens. Interest list via harmonyvillage.org."
  },
  "two-echo": {
    visit: 3,
    join: 3,
    visitProcess: "Echo Road, off Hacker Road, Brunswick. twoecho.org. Individual tours. N43°56.268′ W70°03.155′. It is not a town woods.",
    joinProcess: "Buy a house when one is listed on twoecho.org. 21 houses and 3 duplexes. A conservation-easement walk is not a viewing."
  },

  kersentuin: {
    visit: 2,
    join: 3,
    visitProcess: "Atalantahof 11, Leidsche Rijn. kersentuin.nl / info@kersentuin.nl. Projecthuis, roof garden. Write.",
    joinProcess: "Buy a koop house when one opens, or apply for sociale huur (66 koop / 28 sociale huur).",
  },
  "hameau-des-buis": {
    visit: 3,
    join: 2,
    visitProcess: "1264 route de Maisonneuve, Berrias-et-Casteljau. Woofers, European volunteers, people passing through. Write. It is not a Chassezac gîte.",
    joinProcess: "Cooperative membership of the SAS. Two T3 dwellings offered in 2024. An open day is not a share."
  }
};

export const livingBatch12DailyLife: Record<string, DailyLife> = {
  "newton-dee": {
    typical: [
      { title: "Thirty-six households", detail: "Large and small, four to 16 people of an Adoddle profile. Coworkers and villagers in the same houses." },
      { title: "A 120-acre biodynamic farm", detail: "Of their own site, inside 180 wooded acres. Workshops, a café, a farm shop." },
      { title: "Aberdeen week", detail: "Placements and coworker years. Then a household kitchen is a meeting." }
    ],
    unique: { title: "The adult village on the first Camphill soil", detail: "Estate 1945, adult community 1960. Charity and a company limited by guarantee. You apply. You do not buy Bieldside." }
  },
  "harmony-village": {
    typical: [
      { title: "Twenty-seven Santa Fe townhomes", detail: "1,000–3,500 square feet. Car-free paths, a common house." },
      { title: "Gardens and an orchard", detail: "Play areas, natural open space. Downtown Golden in walking distance." },
      { title: "Foothills week", detail: "Jobs in Denver or the mountains. Then a shared meal." }
    ],
    unique: { title: "Golden’s resident-built cluster", detail: "Twenty-seven Santa Fe-style townhomes on 5.5 acres at 1001 Cottonwood Circle. The group met in 1992, occupied the first homes in October 1996, and filled all 27 units by May 1997; cars stay on the edge so the common house, gardens, and orchard sit on pedestrian paths." }
  },
  "two-echo": {
    typical: [
      { title: "Twenty-seven households", detail: "21 houses and 3 duplexes. Singles, couples, seniors, families." },
      { title: "Woods and an easement", detail: "About 70–72 acres locked. Fields, forest, streams." },
      { title: "Brunswick week", detail: "Fifteen minutes from downtown. Then a lane without through-traffic." }
    ],
    unique: { title: "An LLC that became an easement", detail: "C4 bought the land. Households hold titles. The woods stay locked. You buy a house. You do not buy the 70 acres." }
  },

  kersentuin: {
    typical: [
      { title: "Ninety-four mixed doors", detail: "28 sociale huur, 66 koop. Two streets, a projecthuis." },
      { title: "A garage roof garden", detail: "Cherry orchard, play woods, herb and kitchen gardens." },
      { title: "Leidsche Rijn week", detail: "Twenty minutes by bike from Utrecht Centraal. Then the projecthuis." }
    ],
    unique: { title: "A CPO that kept social rent in the street", detail: "Occupied 2003 after a 1996 resident CPO in Leidsche Rijn: 66 koop and 28 sociale huur around a cherry orchard, kitchen garden, and garage roof garden." }
  },
  "hameau-des-buis": {
    typical: [
      { title: "Forty-three inhabitants", detail: "Young workers, retirees, families, children. About 20 bioclimatic dwellings." },
      { title: "A school and a farm", detail: "Ferme des Enfants on the same plateau. Woofers and European volunteers." },
      { title: "Ardèche week", detail: "Shared governance. Then the gorges are the neighbour." }
    ],
    unique: { title: "A SAS coop on six hectares", detail: "Occupied 2011, cooperative 2023. You join. You do not buy Païolive." }
  }
};

export const livingBatch12Informal: Record<string, InformalAgreement[]> = {
  "newton-dee": [
    { kind: "care-household", why: "Adults with additional support needs and coworkers in the same houses. Dignity is the compact." },
    { kind: "volunteer-intern", why: "Coworker years of the Camphill path. A placement is not a tourist week." },
    { kind: "land-care", why: "120 acres of biodynamic farm inside 180 wooded acres of their own site. Guests stay off a household garden they were not asked onto." },
    { kind: "media-story", why: "BBC Village of Dreams, 2018. A compact about names and the remaining households is overdue in any such estate." }
  ],
  "harmony-village": [
    { kind: "kitchen-table", why: "Shared meals. Twenty-seven private doors and one common house." },
    { kind: "membership-trial", why: "A listing and an interest list." },
    { kind: "land-care", why: "Gardens, orchard, open space. Guests stay off a neighbour’s rows." },
    { kind: "children-care", why: "Ages 0 to the 80s. The paths are a playground as much as a meeting." }
  ],
  "two-echo": [
    { kind: "kitchen-table", why: "Twenty-seven private doors in a clustered lane. Consensus." },
    { kind: "membership-trial", why: "A listing on twoecho.org. A woods walk is not a viewing." },
    { kind: "land-care", why: "An easement on about 70–72 acres. Guests stay off a neighbour’s lot and off the locked woods they were not asked onto." },
    { kind: "children-care", why: "Toddlers to teenagers. The lane is a playground as much as a board." }
  ],

  kersentuin: [
    { kind: "kitchen-table", why: "A projecthuis at Atalantahof 11. Ninety-four mixed doors, one meeting room." },
    { kind: "membership-trial", why: "A koop listing or a social-rent queue." },
    { kind: "land-care", why: "Garage roof garden, cherry orchard, kitchen garden. Guests stay off a neighbour’s rows." },
    { kind: "children-care", why: "Play woods. Mixed tenure so children stay in the street of the founding brief." }
  ],
  "hameau-des-buis": [
    { kind: "kitchen-table", why: "Forty-three inhabitants, shared governance." },
    { kind: "volunteer-intern", why: "Woofers and European volunteers. A volunteer week is not a share." },
    { kind: "membership-trial", why: "SAS coop admissions. An open day is not a dwelling." },
    { kind: "land-care", why: "6 hectares above the Chassezac. Guests stay off a neighbour’s garden and off the farm they were not asked onto." }
  ]
};

export const livingBatch12Governance: Record<string, Governance> = {
  "newton-dee": {
    model: "board",
    modelLabel: "Camphill charity / company limited by guarantee",
    unique: true,
    summary: "Aberdeen’s adult Camphill estate. Charity SC043417 and company SC427688. 36 households, coworkers and villagers. You apply. You do not buy the woods.",
    whoDecides: "Charity board and company. Households run the week.",
    bodies: [
      { name: "Newton Dee Camphill Community Limited", role: "Charity and CLG. Placements, land, the farm." },
      { name: "Households", role: "36 unique houses of their own site. Coworkers and villagers together." }
    ],
    howItRuns: "welfare@newtondee.org.uk for placements. A café table is not a lease.",
    dive: {
      title: "How an adult village sat down on the first Camphill soil",
      lead: "Newton Dee put an adult Camphill community into a Scottish charity and a company limited by guarantee on the Bieldside estate Camphill Schools bought in 1945, so 36 households and a 120-acre biodynamic farm stay off the Aberdeen housing market.",
      organs: [
        { name: "The company and the charity", what: "SC427688 and SC043417 of their own community page. No private freehold." },
        { name: "The households", what: "36. Four to 16 people of an Adoddle profile. Diggers has said 185 / 158+30 — drift." }
      ],
      path: "Placement or coworker year. There is no estate-agent freehold. newtondee.co.uk.",
      history: "Estate 1945. Adult community 1960. BBC Village of Dreams 2018.",
      tension: "36 households versus Diggers 185. A café is public of their own pages; homes are not. Confirm a placement with the Welfare Group, not a 2018 film."
    }
  },
  "harmony-village": {
    model: "consensus",
    modelLabel: "Cohousing condominium / consensus",
    unique: false,
    summary: "27 privately owned townhomes on 5.5 acres. Consensus of neighbours. You buy a house when one opens.",
    whoDecides: "House owners.",
    bodies: [
      { name: "Households", role: "27 private titles." },
      { name: "Association", role: "Paths, common house, orchard." }
    ],
    howItRuns: "A listing when a townhome opens."
  },
  "two-echo": {
    model: "hybrid",
    modelLabel: "Founding LLC / easement / clustered titles",
    unique: true,
    summary: "An LLC bought 95-or-so acres. Households hold 27 titles. An easement locked about 70 acres. You buy a house. You do not buy the woods.",
    whoDecides: "House owners, consensus. The easement holds the lock.",
    bodies: [
      { name: "C4 LLC", role: "Historical. Bought the land 1996." },
      { name: "Households", role: "21 houses and 3 duplexes." },
      { name: "Conservation easement", role: "About 70–72 acres. Not a lot." }
    ],
    howItRuns: "A listing on twoecho.org. A woods walk is not a viewing.",
    dive: {
      title: "How a founding LLC left the woods locked",
      lead: "Two Echo used a limited-liability company to buy a Brunswick farm, then let 27 households take clustered titles while a conservation easement took the woods off the market — so the join is a house, not 95 acres.",
      organs: [
        { name: "C4", what: "Cumberland County Cohousing Community LLC. Land 1996. First residents 1998." },
        { name: "The easement", what: "About 70–72 acres and a town map. Total acreage drifts 92 / 95 / 97." }
      ],
      path: "Buy a house listed on twoecho.org. There is no purchase of the easement.",
      history: "Idea 1991. More than 25 sites. Parcel found 1994, bought 1996. Infrastructure that year.",
      tension: "Acreage drifts. Facebook 48 adults and 22 children is not a census. Confirm a listing, not a 1998 photograph."
    }
  },

  kersentuin: {
    model: "hybrid",
    modelLabel: "CPO / mixed tenure",
    unique: true,
    summary: "94 dwellings: 66 you can buy, 28 sociale huur. A residents’ association on the commons. You buy, or you apply. You do not buy the orchard.",
    whoDecides: "Owner-occupiers on their titles; social-rent through the housing corporation; the association on the projecthuis and gardens.",
    bodies: [
      { name: "66 koop households", role: "Private titles on Atalantahof and Aureliahof." },
      { name: "28 sociale huur", role: "A lease, not a freehold." },
      { name: "Residents’ association", role: "Projecthuis, roof garden, orchard." }
    ],
    howItRuns: "info@kersentuin.nl.",
    dive: {
      title: "How a CPO kept social rent on the same street",
      lead: "De Kersentuin is a resident-commissioned Leidsche Rijn neighbourhood that put 28 sociale-huur dwellings next to 66 owner-occupied houses so the cherry orchard and the garage roof garden stay common, and the street does not become one tenure.",
      organs: [
        { name: "The CPO", what: "Initiative summer 1996. Occupied 2003. Residents hired the architect." },
        { name: "Two tenures", what: "66 koop, 28 sociale huur. Mixed sizes, some live-work, some step-free." }
      ],
      path: "A listing, or a social-rent queue. There is no purchase of the orchard. kersentuin.nl.",
      history: "Municipality invited resident plans in 1996. Seven years to occupation. Witte Wolf still walked the gardens in 2023.",
      tension: "Headcount not isolated. Subsidy of 6–7 tonnes is a visitor’s 2023 note. Confirm a vacancy, not a 2003 photograph."
    }
  },
  "hameau-des-buis": {
    model: "cooperative",
    modelLabel: "SAS coopérative / shared governance",
    unique: true,
    summary: "Habitat cooperative, SAS from 2023. 43 inhabitants, 6 hectares. Occupied 2011. You join. You do not buy Païolive.",
    whoDecides: "Cooperative of inhabitants, farmers, artisans and sympathisers. Gouvernance partagée.",
    bodies: [
      { name: "SAS Coopérative Hameau des Buis", role: "Constituted 28 January 2023." },
      { name: "Association La Ferme des Enfants", role: "School and farm, 1999." }
    ],
    howItRuns: "An open day is not a share.",
    dive: {
      title: "How a school plateau became a SAS coop",
      lead: "Hameau des Buis put an intergenerational hamlet into a French SAS coopérative à capital variable so about 20 bioclimatic dwellings and six hectares above the Chassezac stay cooperative land, beside a school the Ferme des Enfants still runs.",
      organs: [
        { name: "The SAS", what: "Non-profit, variable capital, 28 January 2023. Colibris has said SC 2003 — drift against the current site." },
        { name: "The association", what: "Ferme des Enfants, 1999. Sophie Rabhi-Bouquet. Origin of the hamlet." }
      ],
      path: "Join the cooperative. There is no estate-agent freehold.",
      history: "First inhabitants 2011. Two T3 dwellings offered 2024. Still 43 people.",
      tension: "SC 2003 versus SAS 2023. Dwelling count about 20, not a census. Confirm current capital with the SAS, not a 2011 photograph."
    }
  }
};

export const livingBatch12Leaders: Record<string, VillageLeaders> = {
  "newton-dee": {
    people: [
      { name: "Dr Karl König", role: "Founder of the Camphill movement, Aberdeen, 1940 — historical," }
    ],
    office: { url: "https://www.newtondee.co.uk/", email: "info@newtondee.org.uk", phone: "01224 868 701", address: "Newton Dee Village, Bieldside, Aberdeen AB15 9DX, United Kingdom" }
  },
  "harmony-village": {
    people: [],
    office: { url: "https://harmonyvillage.org/", address: "1001 Cottonwood Circle, Golden, CO 80401" }
  },
  "two-echo": {
    people: [],
    office: { url: "https://twoecho.org/", address: "Echo Road, off Hacker Road, Brunswick, ME 04011" }
  },

  kersentuin: {
    people: [],
    office: { url: "https://kersentuin.nl/", email: "info@kersentuin.nl", address: "Atalantahof 11, 3544 VD Utrecht, Netherlands" }
  },
  "hameau-des-buis": {
    people: [
      { name: "Sophie Rabhi-Bouquet", role: "Founder of association La Ferme des Enfants, 1999, origin of the hamlet" }
    ],
    office: { url: "https://hameaudesbuis.org/", address: "1264 route de Maisonneuve, Berrias-et-Casteljau, 07460 Ardèche, France" }
  }
};

export const livingBatch12Accommodations: Record<string, Accommodations> = {
  "newton-dee": {
    visitor: {
      overview: "A café and a farm shop of their own pages. No public guesthouse of record. Write first: info@newtondee.org.uk.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "Homes. A café is a meal, not a bed." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "36 unique households. Headcount drifts against Diggers 185.",
      camping: { available: false, types: [], detail: "People live in the houses." },
      rooms: { available: true, types: [], detail: "Charity households plus workshops and a farm." },
      other: { available: false, types: [], detail: "None listed." }
    }
  },
  "harmony-village": {
    visitor: {
      overview: "Tours by resident volunteers. Guest rooms in the common house. Not a public inn. Arrange through a household.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Guest rooms in the common house. Confirm with a household." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "27 privately owned townhomes on 5.5 acres.",
      camping: { available: false, types: [], detail: "People live in townhomes." },
      rooms: { available: true, types: [], detail: "Owned dwellings plus a common house." },
      other: { available: false, types: [], detail: "None listed." }
    }
  },
  "two-echo": {
    visitor: {
      overview: "Individual tours. Houses for sale listed on twoecho.org. No public guesthouse of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "Homes. Arrange if someone offers." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "27 households: 21 houses and 3 duplexes.",
      camping: { available: false, types: [], detail: "People live in the houses." },
      rooms: { available: true, types: [], detail: "Private dwellings on clustered lots." },
      other: { available: false, types: [], detail: "None listed." }
    }
  },

  kersentuin: {
    visitor: {
      overview: "Write info@kersentuin.nl. Projecthuis at Atalantahof 11. No public guesthouse of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "Homes. A projecthuis is a meeting, not a spare room." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "94 dwellings: 28 sociale huur and 66 koop.",
      camping: { available: false, types: [], detail: "People live in the houses." },
      rooms: { available: true, types: [], detail: "Mixed-tenure dwellings plus projecthuis and gardens." },
      other: { available: false, types: [], detail: "None listed." }
    }
  },
  "hameau-des-buis": {
    visitor: {
      overview: "Woofers and European volunteers. People passing through. No public guesthouse for a paying overnight stay.",
      camping: { available: false, types: [], detail: "None listed as a visitor product." },
      rooms: { available: false, types: [], detail: "Homes. Volunteer stays are work, not a hotel." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "43 inhabitants; about 20 bioclimatic dwellings.",
      camping: { available: false, types: [], detail: "People live in the hamlet." },
      rooms: { available: true, types: [], detail: "Cooperative dwellings plus a school and farm on the plateau." },
      other: { available: false, types: [], detail: "None listed." }
    }
  }
};
