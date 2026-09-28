import type { LegalEntity } from "./legal-entities";
import type { LandOwnership } from "./land-ownership";
import type { CommunityFunding } from "./funding";
import type { VisitJoin } from "./visit-join";
import type { DailyLife } from "./daily-life";
import type { InformalAgreement } from "./informal-agreements";
import type { Governance } from "./governance";
import type { VillageLeaders } from "./leaders";
import type { Accommodations } from "./accommodations";

export const livingBatch9LegalEntities: Record<string, LegalEntity[]> = {

  navadarshanam: [
    { name: "Navadarshanam Trust", kind: "Charitable trust", role: "Public charitable trust, 1990. Holds all land and buildings. No individual ownership on the campus.", status: "current", layer: "membership", year: "1990", forms: ["Charitable trust"] },
    { name: "Ganganahalli campus", kind: "Trust land", role: "About 100 acres of record next to Thally Reserve Forest. Figures on the acres drift (100 / 104 / 115).", status: "current", layer: "land", year: "1990", forms: ["Charitable trust"] }
  ],

  "can-masdeu": [
    { name: "Can Masdeu community", kind: "Unincorporated occupation", role: "Occupied December 2001. Assembly, gardens, social centre. No titles.", status: "current", layer: "membership", year: "2001", forms: ["Unincorporated community"] },
    { name: "Hospital de Sant Pau (owner)", kind: "Hospital / foundation title", role: "Owns the former leper hospital and the Collserola land. The occupation did not take the deed.", status: "current", layer: "land", year: "2001", forms: ["Unincorporated community"] }
  ],
  "columbia-ecovillage": [
    { name: "Columbia Ecovillage condominium association", kind: "Urban cohousing / condominium", role: "37 privately owned units. Sociocracy. Common house in a 1912 farmhouse.", status: "current", layer: "membership", year: "2009", forms: ["Homeowners association"] },
    { name: "3.73 acres, Cully", kind: "Condo land plus gardens", role: "Renovated 1970s apartments, vineyard, vegetable gardens, fruit and nut trees. You do not buy the orchard with a unit.", status: "current", layer: "land", year: "2009", forms: ["Homeowners association", "Freehold title"] }
  ],

  spreefeld: [
    { name: "Bau- und Wohngenossenschaft Spreefeld Berlin eG", kind: "Housing cooperative", role: "Cooperative mixed-use, 64 apartments of record, cluster flats, option spaces.", status: "current", layer: "membership", year: "2007", forms: ["Housing cooperative"] },
    { name: "Wilhelmine-Gemberg-Weg 10–14", kind: "Three cooperative buildings", role: "On the Spree between Mitte, Kreuzberg and Friedrichshain. 2012–14. You do not buy the riverbank.", status: "current", layer: "land", year: "2014", forms: ["Housing cooperative"] }
  ],
  "cannock-mill": [
    { name: "Cannock Mill Cohousing Colchester Ltd", kind: "Cohousing company", role: "Company limited by guarantee (06805556), 2009. Members are directors of record.", status: "current", layer: "membership", year: "2009", forms: ["Company limited by guarantee"] },
    { name: "Cannock Mill and 26 homes", kind: "Homes plus listed mill", role: "23 Passivhaus homes 2019, three flats 2023. Grade II mill as common house. Homes privately owned; the mill is the company’s.", status: "current", layer: "land", year: "2019", forms: ["Company limited by guarantee", "Freehold title"] }
  ]
};

export const livingBatch9Land: Record<string, LandOwnership> = {

  navadarshanam: {
    owner: "Navadarshanam Trust",
    complexity: "simple",
    tenure: "Charitable trust; no individual ownership",
    howHeld: "About 100 acres adjoining Thally Reserve Forest. Figures drift (100 / 104 / 115). All land and buildings sit in the trust.",
    narrative: "Barren land planted into forest. The trust holds it. There is no plot to buy.",
    divided: []
  },

  "can-masdeu": {
    owner: "Hospital de Sant Pau / its foundation (title); community (occupation)",
    complexity: "split",
    tenure: "Occupation of hospital land",
    howHeld: "Former leper hospital in Collserola Natural Park. About 35 hectares of record. Occupied December 2001. The deed did not move.",
    narrative: "The masia was empty fifty-three years. The occupation holds. The hospital still owns it.",
    divided: [
      { label: "Title", holder: "Hospital de Sant Pau", share: "The soil and the masia", what: "Owner of record since before 2001." },
      { label: "Occupation", holder: "Can Masdeu community", share: "Use, gardens, social centre", what: "No deed. Assembly. €100/month of a 2018 account." }
    ]
  },
  "columbia-ecovillage": {
    owner: "37 unit owners plus the association",
    complexity: "split",
    tenure: "Oregon condominium",
    howHeld: "37 condos in a renovated 1970s complex on 3.73 acres. 1912 farmhouse as common house. Gardens, vineyard, trees in common.",
    narrative: "Cully, not a greenfield. A unit is not the orchard.",
    divided: [
      { label: "37 condominiums", holder: "Households", share: "Condo title", what: "Studios to three bedrooms. The join is a listing." },
      { label: "Gardens and farmhouse", holder: "Association", share: "3.73 acres minus the units", what: "You do not buy the grapes with the paint." }
    ]
  },

  spreefeld: {
    owner: "Bau- und Wohngenossenschaft Spreefeld Berlin eG",
    complexity: "simple",
    tenure: "Cooperative",
    howHeld: "Three buildings on Wilhelmine-Gemberg-Weg. Ordinary flats, cluster apartments, ground-floor work, option spaces. The Spree is the neighbour, not a lot.",
    narrative: "A Genossenschaft on the river. You join the eG. You do not buy the bank.",
    divided: []
  },
  "cannock-mill": {
    owner: "Households plus Cannock Mill Cohousing Colchester Ltd",
    complexity: "split",
    tenure: "Private homes plus a company mill",
    howHeld: "23 Passivhaus homes (2019) and three later flats (2023). Grade II mill held as the common house. Members are directors of the £guarantee company.",
    narrative: "You buy a house. The mill stays the company’s.",
    divided: [
      { label: "26 homes", holder: "Households", share: "Private dwelling", what: "Passivhaus fabric on the first 23." },
      { label: "Grade II mill, pond, grounds", holder: "Cannock Mill Cohousing Colchester Ltd", share: "Common", what: "Kitchen, dining, guest rooms, workshops." }
    ]
  }
};

export const livingBatch9Funding: Record<string, CommunityFunding> = {

  navadarshanam: {
    overview: "Charitable-trust land. No plots. Kitchen and farm of record.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Trust corpus",
    grants: [],
    private: [
      { source: "Navadarshanam Trust", amount: "About 100 acres held in charity", certainty: "estimated", kind: "donation", note: "No individual ownership. Figures on the acres drift." }
    ]
  },

  "can-masdeu": {
    overview: "Occupation, not a purchase. Members contributed €100/month in a 2018 account.",
    grantsHeadline: "No construction grant — the building was already there",
    privateHeadline: "Occupation costs",
    grants: [],
    private: [
      { source: "Community contribution", amount: "€100/month of a 2018 account", certainty: "estimated", kind: "member-equity", note: "Not rent to the hospital. Confirm current figures with the community." }
    ]
  },
  "columbia-ecovillage": {
    overview: "Condo sales on 3.73 Cully acres. A 1970s complex, not a greenfield.",
    grantsHeadline: "No major public grant isolated here",
    privateHeadline: "Unit sales + dues",
    grants: [],
    private: [
      { source: "37 condominiums", amount: "Portland condo prices; HOA dues $300–482/month of record", certainty: "estimated", kind: "member-equity", note: "columbiaecovillage.org. A unit is not the 3.73 acres." }
    ]
  },

  spreefeld: {
    overview: "Cooperative mixed-use on the Spree. Option spaces for hire.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Cooperative shares + mixed use",
    grants: [],
    private: [
      { source: "Spreefeld eG shares", amount: "Berlin cooperative capital, 64 apartments", certainty: "estimated", kind: "member-equity", note: "Cluster flats included. You do not buy the riverbank." },
      { source: "Option spaces and ground-floor work", amount: "Three 128 m² option spaces of record, plus commercial", certainty: "estimated", kind: "business", note: "Building Social Ecology. Public hire, not a hotel." }
    ]
  },
  "cannock-mill": {
    overview: "Home sales and a 2009 company. Passivhaus fabric was the construction brief.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "House sales",
    grants: [],
    private: [
      { source: "26 homes", amount: "Colchester housing costs; a D&D listing has been in the £410,000 range", certainty: "estimated", kind: "member-equity", note: "A house is not the mill." }
    ]
  }
};

export const livingBatch9VisitJoin: Record<string, VisitJoin> = {

  navadarshanam: {
    visit: 2,
    join: 2,
    visitProcess: "Ganganahalli, Thally block. Write navadarshanam@gmail.com. Food is served by prior arrangement, not to walk-ins. It is not a Bengaluru weekend farmstay.",
    joinProcess: "The trust holds the land. There is no plot. A forest walk is not membership."
  },

  "can-masdeu": {
    visit: 3,
    join: 2,
    visitProcess: "Camí de Sant Llàtzer, Collserola. Sunday open days, Thursday work days. They already turn people away.",
    joinProcess: "Occupation, not a sale. Assembly, gardens, two meals of a 2018 account. Capacity is the gate."
  },
  "columbia-ecovillage": {
    visit: 2,
    join: 3,
    visitProcess: "4647 NE Killingsworth, Cully. columbiaecovillage.org. Write. Scheduled and individual tours of record. It is not a Killingsworth food-cart stop.",
    joinProcess: "Buy a condo when one is listed. No waiting list — an email list. Sociocracy comes with the paint. A garden walk is not the closing."
  },

  spreefeld: {
    visit: 2,
    join: 2,
    visitProcess: "Wilhelmine-Gemberg-Weg, Berlin. Three buildings on the Spree. Option spaces and a kindergarten on the ground. Homes above are not a hotel.",
    joinProcess: "Join the eG when a flat or cluster room opens. A river walk is not a share."
  },
  "cannock-mill": {
    visit: 2,
    join: 3,
    visitProcess: "Old Heath Road, Colchester. Write living@cannockmillcohousing.co.uk. A Grade II mill and a pond. Not a Dedham Vale B&B.",
    joinProcess: "Buy a home when one opens, and join the company. They have been seeking members. A mill supper is not a viewing."
  }
};

export const livingBatch9DailyLife: Record<string, DailyLife> = {

  navadarshanam: {
    typical: [
      { title: "Community kitchen", detail: "Organic, satvic, local of record. Food for visitors only by arrangement." },
      { title: "Forest-farm week", detail: "Nursery, mulching, fire watch, cattle, IMO. The land was barren." },
      { title: "Trust desk", detail: "Accounts, a village food co-operative, experiments in energy and buildings." }
    ],
    unique: { title: "No individual ownership", detail: "Concerned professionals founded the 1990 charitable trust after a decade of study; land bought with Swami Sahajanand, a food forest on what was barren, next to Thally Reserve Forest, about 50 km from Bengaluru. No private plots." }
  },

  "can-masdeu": {
    typical: [
      { title: "Two meals of record", detail: "Collective kitchen. A 2018 account still has two a day." },
      { title: "Gardens", detail: "Communal terraces plus neighbour plots. Thursday is a work day of record." },
      { title: "Social centre", detail: "PIC upstairs. Sunday open days. About a hundred people." }
    ],
    unique: { title: "Occupation that held", detail: "December 2001. April 2002 eviction failed. The hospital still owns the masia. Sundays the hillside opens; PIC is the room upstairs." }
  },
  "columbia-ecovillage": {
    typical: [
      { title: "Thirty-seven doors", detail: "Studios to three bedrooms in a renovated 1970s block." },
      { title: "Meals twice a week of record", detail: "Optional, about $6–7, or a potluck. Cooks use the gardens." },
      { title: "Cully week", detail: "Vineyard, vegetables, fruit and nut trees on 3.73 acres. The city is the neighbour." }
    ],
    unique: { title: "A retrofit, not a greenfield", detail: "2008 renovation, 2009 keys. Sociocracy. You buy a condo. You do not buy the orchard." }
  },

  spreefeld: {
    typical: [
      { title: "Three buildings", detail: "Ordinary flats and cluster apartments of 600 and 800 m²." },
      { title: "Ground floor", detail: "Work, kindergarten, three option spaces. The Spree is the outdoor room." },
      { title: "Genossenschaft week", detail: "Laundry, fitness, guest rooms, roof terraces in common." }
    ],
    unique: { title: "Cluster living on the Spree", detail: "Three buildings on Wilhelmine-Gemberg-Weg, occupied 2014: ordinary flats, cluster apartments of 600 and 800 m², option spaces, a kindergarten." }
  },
  "cannock-mill": {
    typical: [
      { title: "The mill", detail: "Grade II common house: kitchen, dining, lounge, library, guest rooms, workshops." },
      { title: "Passivhaus week", detail: "Triple glazing, MVHR, a pond. 23 certified homes, three later flats." },
      { title: "Colchester week", detail: "Jobs in town. Then the mill is a meeting." }
    ],
    unique: { title: "A listed mill as the common house", detail: "Occupied 2019. Company limited by guarantee. You buy a house. You do not buy the mill." }
  }
};

export const livingBatch9Informal: Record<string, InformalAgreement[]> = {

  navadarshanam: [
    { kind: "kitchen-table", why: "Community kitchen. Satvic, local, visitors only by arrangement." },
    { kind: "land-care", why: "About 100 acres next to a reserve forest. Fire watch, grazing, who plants." },
    { kind: "quiet-practice", why: "Inner peace is in the founding sentence. Silence at meals of a current note. Guests are not on a retreat package." },
    { kind: "membership-trial", why: "The trust holds everything. A forest walk is not a plot." }
  ],

  "can-masdeu": [
    { kind: "kitchen-table", why: "Two collective meals of a 2018 account. Whose cook shift in an occupied masia." },
    { kind: "labour-roster", why: "Gardens, housework, Thursday work days. The land belongs to those who work it, in their sentence." },
    { kind: "guest-stay", why: "Sunday open days, more stay requests than beds." },
    { kind: "media-story", why: "Every climate documentary wants the 2002 plank photograph. Names and doors still matter." }
  ],
  "columbia-ecovillage": [
    { kind: "kitchen-table", why: "About two meals a week. Optional. Cooks use the gardens." },
    { kind: "membership-trial", why: "A condo listing. Sociocracy comes with the paint. A garden walk is not the closing." },
    { kind: "land-care", why: "3.73 acres, vineyard, vegetables, trees. Guests stay off rows they were not asked onto." },
    { kind: "guest-stay", why: "Guest rooms in the 1912 farmhouse of record. Write. Cully is a home." }
  ],

  spreefeld: [
    { kind: "kitchen-table", why: "Cluster apartments of 600 and 800 m². Whose stove in a 20-person kitchen." },
    { kind: "membership-trial", why: "eG admissions. A river walk is not a share." },
    { kind: "guest-stay", why: "Communal guest rooms of record. For visitors of people who live here, not a hotel on the Spree." },
    { kind: "building-code", why: "Option spaces, kindergarten, roof terraces. What stays public on the ground floor." }
  ],
  "cannock-mill": [
    { kind: "kitchen-table", why: "The mill kitchen. Twenty-six doors, one listed dining room." },
    { kind: "membership-trial", why: "Buy a house, join the company. A mill supper is not a viewing." },
    { kind: "guest-stay", why: "Guest rooms in the mill for visitors of residents. Not a Dedham Vale B&B." },
    { kind: "land-care", why: "Pond, grounds, bee-keeping of record. Guests stay off beds they were not asked onto." }
  ]
};

export const livingBatch9Governance: Record<string, Governance> = {

  navadarshanam: {
    model: "hybrid",
    modelLabel: "Charitable trust plus community consensus",
    unique: true,
    summary: "Public charitable trust, 1990. Board of trustees holds all land. Community decisions by executive committee or consensus. No individual ownership.",
    whoDecides: "Trustees on the deed. The community on the week, by consensus of record.",
    bodies: [
      { name: "Board of trustees", role: "Trust deed, the acres, the buildings." },
      { name: "Community / executive committee", role: "Kitchen, farm, experiments. Consensus of record." }
    ],
    howItRuns: "Write. There is no plot. A forest walk is not membership.",
    dive: {
      title: "A trust, not a title",
      lead: "Navadarshanam put a food forest and a kitchen into a public charitable trust so nobody on the campus would own a plot next to Thally Reserve Forest.",
      organs: [
        { name: "Navadarshanam Trust", what: "Holds all land and property. Board of trustees. 1990." },
        { name: "The community", what: "People who live the brief. Executive committee or full consensus of record." }
      ],
      path: "Prior arrangement. Food is not for walk-ins. There is no estate-agent acre. navadarshanam@gmail.com.",
      history: "Professionals after a decade of study. Land bought with Swami Sahajanand of record. Barren ground planted from the reserve forest’s seed rain.",
      tension: "Headcount is not on the current site. Acres drift (100 / 104 / 115). A small community next to a reserve forest is not a Bengaluru farmstay."
    }
  },

  "can-masdeu": {
    model: "assembly",
    modelLabel: "Occupation assembly",
    unique: true,
    summary: "Occupied December 2001. Hospital de Sant Pau still owns the masia. Assembly, gardens, social centre. No titles.",
    whoDecides: "The people who live there, in assembly. Bi-weekly meetings of a 2018 account.",
    bodies: [
      { name: "Community assembly", role: "Who lives here, the gardens, the social centre." },
      { name: "Hospital de Sant Pau", role: "Title holder. Not the kitchen rota." }
    ],
    howItRuns: "Capacity is the gate.",
    dive: {
      title: "An eviction that did not stick",
      lead: "Can Masdeu is an occupation of a hospital-owned masia in Collserola, held since 2001, with gardens opened to neighbours and no deed to sell.",
      organs: [
        { name: "The assembly", what: "Bi-weekly of a 2018 account. Two meals, gardens, €100/month then." },
        { name: "Sant Pau title", what: "The hospital / foundation still owns the building. The occupation did not take the soil." }
      ],
      path: "Write. Sunday open days, Thursday work. They already turn people away. There is no sale.",
      history: "Empty about 53 years. Occupied December 2001 for a climate gathering. April 2002: more than a hundred police, eleven people, three days, the eviction failed.",
      tension: "Member counts drift (24 adults + 5 children in 2018; 16 + 5 later). Every camera wants the 2002 plank. The valley is still a home, and still not theirs on paper."
    }
  },
  "columbia-ecovillage": {
    model: "sociocracy",
    modelLabel: "Sociocracy in a condominium",
    unique: false,
    summary: "37 condos on 3.73 Cully acres. Sociocracy. 1912 farmhouse as common house. You buy a unit.",
    whoDecides: "Circles of record, inside a condominium association.",
    bodies: [
      { name: "Households", role: "37 deeds." },
      { name: "Association / circles", role: "3.73 acres, gardens, meals twice a week of record." }
    ],
    howItRuns: "A listing. columbiaecovillage.org. A garden walk is not the closing."
  },

  spreefeld: {
    model: "cooperative",
    modelLabel: "Wohnungsgenossenschaft",
    unique: false,
    summary: "Spreefeld Berlin eG. Three buildings on the Spree, 64 apartments, cluster flats, option spaces. About 140 people. You join the eG.",
    whoDecides: "Cooperative members.",
    bodies: [
      { name: "Spreefeld eG", role: "The members, three buildings, mixed use." },
      { name: "Cluster apartments", role: "600 and 800 m². Shared living inside the cooperative." }
    ],
    howItRuns: "Cooperative admissions. A river walk is not a share."
  },
  "cannock-mill": {
    model: "cooperative",
    modelLabel: "Cohousing company",
    unique: false,
    summary: "Company limited by guarantee, 2009. Members are directors. 26 homes, Grade II mill as common house. You buy a house. You do not buy the mill.",
    whoDecides: "Members of the company — every member a director of record.",
    bodies: [
      { name: "Cannock Mill Cohousing Colchester Ltd", role: "The company, the mill, finance / buildings / communications / membership groups." },
      { name: "Households", role: "26 homes, 23 of them certified Passivhaus." }
    ],
    howItRuns: "A sale, then the company. living@cannockmillcohousing.co.uk. A mill supper is not a share certificate."
  }
};

export const livingBatch9Leaders: Record<string, VillageLeaders> = {

  navadarshanam: {
    people: [
      { name: "Swami Sahajananda", role: "Helped purchase land of record at founding" },
      { name: "Gopi Sankarasubramani", role: "Named among the people of the community on the current site" }
    ],
    office: { url: "https://navadarshanam.org/", email: "navadarshanam@gmail.com", address: "4/70 Ganganahalli hamlet, Gumalapuram Village, Thally block, Tamil Nadu 635 118, India" }
  },

  "can-masdeu": {
    people: [],
    office: { url: "https://canmasdeu.net/", address: "Camí de Sant Llàtzer, Collserola, 08035 Barcelona, Catalonia" }
  },
  "columbia-ecovillage": {
    people: [],
    office: { url: "https://columbiaecovillage.org/", email: "info@columbiaecovillage.org", address: "4647 NE Killingsworth Street, Portland, Oregon 97218" }
  },

  spreefeld: {
    people: [],
    office: { url: "https://spreefeld.org/", address: "Wilhelmine-Gemberg-Weg 10–14, 10179 Berlin, Germany" }
  },
  "cannock-mill": {
    people: [],
    office: { url: "https://cannockmillcohousing.co.uk/", email: "living@cannockmillcohousing.co.uk", address: "Cannock Mill, Old Heath Road, Colchester, Essex CO2 8AA" }
  }
};

export const livingBatch9Accommodations: Record<string, Accommodations> = {

  navadarshanam: {
    visitor: {
      overview: "Write navadarshanam@gmail.com. Food is served by prior arrangement, not to walk-ins. No public guesthouse of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "No inn of record. Arrange a visit first." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "A small community. A 2014 account said about fifteen permanent residents. Land in the trust.",
      camping: { available: false, types: [], detail: "People live on the campus." },
      rooms: { available: true, types: [], detail: "Trust buildings. No private plots." },
      other: { available: false, types: [], detail: "None listed." }
    }
  },

  "can-masdeu": {
    visitor: {
      overview: "Sunday open days and Thursday work days of record. They receive more stay requests than they can host. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: false, types: [], detail: "Capacity-limited. Arrange, and expect a no." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "Member counts drift: 24 adults and 5 children in a 2018 account; 16 adults and 5 children later.",
      camping: { available: false, types: [], detail: "People live in the masia." },
      rooms: { available: true, types: [], detail: "Occupied hospital rooms. No titles." },
      other: { available: false, types: [], detail: "None listed." }
    }
  },
  "columbia-ecovillage": {
    visitor: {
      overview: "Guest rooms in the 1912 farmhouse of record, for visitors of people who live here. Write columbiaecovillage.org. Not a Killingsworth inn.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Common-house guest rooms. Ask through someone who lives here." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "37 condominiums. Headcount on the order of 60–80.",
      camping: { available: false, types: [], detail: "People live in the condos." },
      rooms: { available: true, types: [], detail: "Owned dwellings plus a 1912 farmhouse used as common house." },
      other: { available: false, types: [], detail: "None listed." }
    }
  },

  spreefeld: {
    visitor: {
      overview: "Communal guest rooms, for visitors of people who live here. Not a public hotel on the Spree.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Members’ guest rooms. Ask through someone who lives here." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "About 140 people in 64 apartments, including cluster flats.",
      camping: { available: false, types: [], detail: "People live in the three buildings." },
      rooms: { available: true, types: [], detail: "Cooperative dwellings, cluster apartments, ground-floor work." },
      other: { available: false, types: [], detail: "None listed." }
    }
  },
  "cannock-mill": {
    visitor: {
      overview: "Guest rooms in the Grade II mill for visitors of people who live here. Write living@cannockmillcohousing.co.uk. Not a Dedham Vale B&B.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Mill guest rooms. Ask through someone who lives here." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "26 homes. 35 adults of a Diggers and Dreamers count.",
      camping: { available: false, types: [], detail: "People live in houses and flats." },
      rooms: { available: true, types: [], detail: "Owned dwellings plus a listed mill used as common house." },
      other: { available: false, types: [], detail: "None listed." }
    }
  }
};
