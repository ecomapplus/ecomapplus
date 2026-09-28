import type { LegalEntity } from "./legal-entities";
import type { LandOwnership } from "./land-ownership";
import type { CommunityFunding } from "./funding";
import type { VisitJoin } from "./visit-join";
import type { DailyLife } from "./daily-life";
import type { InformalAgreement } from "./informal-agreements";
import type { Governance } from "./governance";
import type { VillageLeaders } from "./leaders";
import type { Accommodations } from "./accommodations";

export const livingBatch7LegalEntities: Record<string, LegalEntity[]> = {
  "braziers-park": [
    { name: "School of Integrative Social Research", kind: "Educational charity", role: "Holds the house and the research brief, 1950–present.", status: "current", layer: "membership", year: "1950", forms: ["Membership association"] },
    { name: "Braziers Park house and about 50 acres", kind: "Charity land, Grade II*", role: "Strawberry Hill Gothic house, park, garden. Occupancy, not lots.", status: "current", layer: "land", year: "1950", forms: ["Historic designation"] }
  ],
  christiania: [
    { name: "Foundation Freetown Christiania", kind: "Foundation", role: "Legal landowner of about 19 acres from the 2011–12 state agreement. First payment July 2012.", status: "current", layer: "land", year: "2011", forms: ["Nonprofit foundation"] },
    { name: "Residents’ Plenum and working groups", kind: "Collective self-government", role: "The freetown’s assembly. Consensus is the claim.", status: "current", layer: "membership", year: "1971", forms: ["Unincorporated community"] },
    { name: "Christiania Law / later ordinary Danish law", kind: "State statute", role: "1989 law legalised residence; later repealed so ordinary rules apply, with the foundation holding title.", status: "historical", layer: "covenant", year: "1989" }
  ],
  "kibbutz-samar": [
    { name: "Kibbutz Samar", kind: "Kibbutz", role: "Collective agricultural settlement in the Kibbutz Movement, 1976. Common purse, personal autonomy on hours.", status: "current", layer: "membership", year: "1976", forms: ["Kibbutz"] },
    { name: "Arava date plantation and dairy", kind: "Cooperative land", role: "Organic dates and about 350 cows of record. No private house lots.", status: "current", layer: "land", year: "1976", forms: ["Kibbutz"] }
  ],
  nyland: [
    { name: "Nyland Cohousing", kind: "Cohousing homeowners association", role: "42 private homes and a common house, 1992.", status: "current", layer: "membership", year: "1992", forms: ["Homeowners association"] },
    { name: "36-acre Lafayette site", kind: "Clustered houses plus farm", role: "Private titles, common paths, a working farm, parking on the edge.", status: "current", layer: "land", year: "1992", forms: ["Freehold title", "Homeowners association"] }
  ],
  otamatea: [
    { name: "Otamatea Limited (wound up)", kind: "Development company", role: "Huber and Hindle bought 102 ha in 1997. Members became directors. Wound up after titles issued.", status: "historical", layer: "membership", year: "1997", forms: ["Limited company"] },
    { name: "Freehold lots with undivided common-land shares", kind: "Unit titles plus common", role: "Originally 15 titles of about 2 ha private plus 1/15 of ~72 ha common. Later accounts: some lots subdivided, 22 of record.", status: "current", layer: "land", year: "2001", forms: ["Freehold title"] }
  ],
  "fryers-forest": [
    { name: "Fryers Forest Owners Corporation", kind: "Owners corporation", role: "Common forest and private-lot rules from 1999.", status: "current", layer: "membership", year: "1999", forms: ["Homeowners association"] },
    { name: "11 freehold lots plus 1/11 of 300 acres", kind: "Cluster titles in common forest", role: "One-acre house lots. The bush is the larger title.", status: "current", layer: "land", year: "1998", forms: ["Freehold title"] },
    { name: "Fryers Forest Research and Development", kind: "Developer", role: "Sold lots 1998–2006.", status: "historical", layer: "enterprise", year: "1998", forms: ["Limited company"] }
  ],

  "cobb-hill": [
    { name: "Cobb Hill Cohousing", kind: "Cohousing association", role: "23 households. Members own homes plus a share of land and barns.", status: "current", layer: "membership", year: "2001", forms: ["Homeowners association"] },
    { name: "About 270 acres, Hartland", kind: "Community land", role: "Two former dairy farms. Development rights sold in published NOFA accounts. Curtis house sold to a member with repurchase rights.", status: "current", layer: "land", year: "1997", forms: ["Community land trust"] },
    { name: "Cedar Mountain Farm / cheese / sugaring", kind: "Member farms", role: "Working agriculture on the same acres.", status: "current", layer: "enterprise", forms: ["CSA"] }
  ],
  "la-borda": [
    { name: "Habitatges la Borda SCCL", kind: "Housing cooperative", role: "Cessió d’ús cooperative, 2014. Members use, they do not speculate.", status: "current", layer: "membership", year: "2014", forms: ["Housing cooperative"] },
    { name: "75-year municipal surface right, Can Batlló", kind: "Public land, grant of use", role: "Barcelona ceded Carrer Constitució 85–87 as VPO housing. The dirt stays the city’s.", status: "current", layer: "land", year: "2014", forms: ["Ground lease"] },
    { name: "Lacol", kind: "Architecture cooperative", role: "Designed the CLT courtyard. Associated, not the landlord.", status: "associated", layer: "enterprise", year: "2014", forms: ["Housing cooperative"] }
  ]
};

export const livingBatch7Land: Record<string, LandOwnership> = {
  "braziers-park": {
    owner: "School of Integrative Social Research (charity)",
    complexity: "simple",
    tenure: "Charitable estate",
    howHeld: "Grade II* house and about 50 acres. Residents occupy. There are no house lots.",
    narrative: "Glaister bought a house to study groups. The dirt is still the charity’s.",
    divided: []
  },
  christiania: {
    owner: "Foundation Freetown Christiania",
    complexity: "split",
    tenure: "Foundation title on former Defence land",
    howHeld: "About 19 acres purchased from the Danish state after the 2011 agreement. Original military plot was larger (~84 acres). Occupancy through the freetown, not open-market deeds.",
    narrative: "Forty years of a squat. Then a foundation wrote a cheque. The Plenum still argues about the rest.",
    divided: [
      { label: "Foundation land", holder: "Foundation Freetown Christiania", share: "~19 acres", what: "Bought 2012." },
      { label: "Remainder of the old barracks", holder: "Danish state / municipality", share: "Not bought", what: "The original plot was larger. Confirm current maps, not a 1971 aerial." }
    ]
  },
  "kibbutz-samar": {
    owner: "Kibbutz Samar",
    complexity: "simple",
    tenure: "Kibbutz cooperative land",
    howHeld: "Collective agricultural settlement. Dates and dairy. No private house lots.",
    narrative: "The Arava dirt is still common. Members set their hours. The palms are not a subdivision.",
    divided: []
  },
  nyland: {
    owner: "42 house owners plus the association",
    complexity: "split",
    tenure: "Private homes on a 36-acre cohousing site",
    howHeld: "Freehold houses, common house, farm and paths held in common.",
    narrative: "A Lafayette farm became a pedestrian village. The Flatirons did not move.",
    divided: [
      { label: "42 homes", holder: "Households", share: "Private title", what: "The join is a listing." },
      { label: "Farm, paths, common house", holder: "Association", share: "Common", what: "The 36 acres around the cluster." }
    ]
  },
  otamatea: {
    owner: "Lot owners with undivided shares of common land",
    complexity: "split",
    tenure: "Freehold plus common",
    howHeld: "102 ha bought 1997. Originally 15 titles: ~2 ha private plus 1/15 of ~72 ha common. Some lots later subdivided.",
    narrative: "A company bought a peninsula, issued titles, and wound itself up. The bush is still the larger map.",
    divided: [
      { label: "Private lots", holder: "Households", share: "0.4–2 ha of record", what: "Freehold." },
      { label: "Common land", holder: "Lot owners undivided", share: "~70–72 ha", what: "The harbour bush." }
    ]
  },
  "fryers-forest": {
    owner: "11 lot owners and the Owners Corporation",
    complexity: "split",
    tenure: "Freehold lots in a common forest",
    howHeld: "Eleven one-acre titles, each with 1/11 of about 300 acres of native forest.",
    narrative: "Goldfields bush. Holmgren on the drawings. The forest is not eleven extra paddocks.",
    divided: [
      { label: "11 house lots", holder: "Households", share: "~1 acre each", what: "Freehold." },
      { label: "Common forest", holder: "Owners corporation / 1/11 shares", share: "~300 acres", what: "Thinning, firewood, the larger title." }
    ]
  },

  "cobb-hill": {
    owner: "Cobb Hill community (homes privately owned; land in common)",
    complexity: "split",
    tenure: "Homes plus share of community land",
    howHeld: "About 270 acres. Members own dwellings and a share of land, barns, Hunt House. Development rights sold in published accounts. Curtis house sold to a member with repurchase rights.",
    narrative: "Meadows wanted a farm that was also a neighbourhood. The pasture was not carved into lots.",
    divided: [
      { label: "23 dwellings", holder: "Households", share: "Home ownership", what: "8 singles, 6 duplexes, 3 apartments." },
      { label: "Land, forest, barns", holder: "Community", share: "~270 acres", what: "The farm." }
    ]
  },
  "la-borda": {
    owner: "Barcelona (soil) / Habitatges la Borda SCCL (use)",
    complexity: "split",
    tenure: "75-year municipal grant of use",
    howHeld: "City land at Can Batlló. Cooperative holds a surface right. Members use dwellings; they do not buy the plot.",
    narrative: "The dirt stays the city’s. The timber courtyard is the dwelling. That is the legal invention.",
    divided: [
      { label: "Soil", holder: "Barcelona City Council", share: "Public plot, VPO", what: "75-year cession." },
      { label: "28 dwellings", holder: "Cooperative members", share: "Right of use", what: "Not a freehold flat." }
    ]
  }
};

export const livingBatch7Funding: Record<string, CommunityFunding> = {
  "braziers-park": {
    overview: "A charity: courses, residencies, house and garden labour.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Courses and the household",
    grants: [],
    private: [
      { source: "Courses, ACRE residency, donations", amount: "Charity income", certainty: "estimated", kind: "courses", note: "braziers.org.uk. A course is not a lease." }
    ]
  },
  christiania: {
    overview: "A foundation that bought former Defence land; workshops, cafés, resident payments.",
    grantsHeadline: "2011–12 state land agreement",
    privateHeadline: "Workshops and the freetown’s till",
    grants: [
      { source: "Purchase of about 19 acres from the Danish state", amount: "Bank loan and resident funds", year: "2012", certainty: "documented", kind: "loan", note: "2011 agreement. First payment July 2012." }
    ],
    private: [
      { source: "Workshops, cafés, resident contributions", amount: "Ongoing", certainty: "estimated", kind: "business", note: "Tourism is a fact, not the membership." }
    ]
  },
  "kibbutz-samar": {
    overview: "A collective kibbutz: dates, dairy, almost no hired labour in published accounts.",
    grantsHeadline: "No major public grant isolated here",
    privateHeadline: "Dates and milk",
    grants: [],
    private: [
      { source: "Organic date plantation", amount: "Export crop", certainty: "estimated", kind: "business", note: "kibbutz-samar.com. Medjool, barhi and others." },
      { source: "Dairy, about 350 cows", amount: "Ongoing", certainty: "estimated", kind: "business", note: "Wikipedia." }
    ]
  },
  nyland: {
    overview: "Private homes and association dues on 36 acres.",
    grantsHeadline: "No major public grant found",
    privateHeadline: "House sales + dues",
    grants: [],
    private: [
      { source: "42 private residences", amount: "Boulder County house prices", certainty: "estimated", kind: "member-equity", note: "A listing is the join." }
    ]
  },
  otamatea: {
    overview: "Shareholders bought a peninsula, then took titles.",
    grantsHeadline: "No major public grant found",
    privateHeadline: "Lot sales",
    grants: [],
    private: [
      { source: "Freehold lots with common-land shares", amount: "Northland lifestyle prices", certainty: "estimated", kind: "member-equity", note: "Occasional resale." }
    ]
  },
  "fryers-forest": {
    overview: "Eleven lots and a common forest that still sells timber.",
    grantsHeadline: "No major public grant found",
    privateHeadline: "Lots + forestry",
    grants: [],
    private: [
      { source: "11 freehold lots", amount: "Central Victorian rural prices", certainty: "estimated", kind: "member-equity", note: "Last developer sale 2006. Resales after that." },
      { source: "Common-forest timber", amount: "Firewood, posts, poles", certainty: "estimated", kind: "business", note: "Holmgren Design / ABC 2022." }
    ]
  },

  "cobb-hill": {
    overview: "Homes plus a share of 270 acres; development rights sold; farms on the same dirt.",
    grantsHeadline: "Development-rights sale of record",
    privateHeadline: "Homes + farms",
    grants: [
      { source: "Sale of development rights", amount: "Subsidised housing in a NOFA account", certainty: "estimated", kind: "easement", note: "NOFA Vermont visiting piece. Confirm current easement holder with the community." }
    ],
    private: [
      { source: "23 dwellings", amount: "Upper Valley house prices", certainty: "estimated", kind: "member-equity", note: "cobbhill.org." },
      { source: "Cedar Mountain Farm, cheese, sugaring", amount: "Farm income", certainty: "estimated", kind: "business", note: "Same acres." }
    ]
  },
  "la-borda": {
    overview: "Cooperative shares on city land. The soil is not for sale.",
    grantsHeadline: "75-year municipal surface right",
    privateHeadline: "Cooperative capital",
    grants: [
      { source: "Barcelona grant of use, VPO plot", amount: "75-year surface right", year: "2014", certainty: "documented", kind: "other", note: "Lacol / laborda.coop. Public land, not a gift of title." }
    ],
    private: [
      { source: "Habitatges la Borda SCCL shares", amount: "Cooperative capital, below-market use", certainty: "estimated", kind: "member-equity", note: "28 dwellings. Confirm current figures on laborda.coop." }
    ]
  }
};

export const livingBatch7VisitJoin: Record<string, VisitJoin> = {
  "braziers-park": {
    visit: 4,
    join: 2,
    visitProcess: "Ipsden, South Oxfordshire. braziers.org.uk. Courses, an ACRE residency, a WWOOF listing. The house is a home. Book. Do not treat the Gothic pile as a Landmark Trust weekend without the listing.",
    joinProcess: "Apply to live in the community. A course is not a bedroom. Confirm current process on the site."
  },
  christiania: {
    visit: 5,
    join: 1,
    visitProcess: "Christianshavn, Copenhagen. Walk in. Half a million visitors a year. Cafés, workshops, painted houses. Homes are still homes. Pusher Street was largely dug up in 2024 — do not arrive for a stall that is gone.",
    joinProcess: "Residence is a Plenum and foundation matter, not a sale. Very few outsiders become Christianites. A canal photograph is not an application."
  },
  "kibbutz-samar": {
    visit: 3,
    join: 2,
    visitProcess: "Arava, north of Eilat. kibbutz-samar.com. Write. Dates and a dairy. It is not a hotel on the way to the Red Sea.",
    joinProcess: "Kibbutz membership. The site says new members still come. A harvest day is not the vote."
  },
  nyland: {
    visit: 2,
    join: 3,
    visitProcess: "Lafayette, Colorado. Write the association. Forty-two houses and a farm. It is not a Boulder open house.",
    joinProcess: "Buy a home when one is listed. Turnover is slow. A Flatirons walk is not a viewing."
  },
  otamatea: {
    visit: 2,
    join: 3,
    visitProcess: "West of Kaiwaka. Write. A peninsula of lots and common bush. Not a DOC campsite.",
    joinProcess: "A freehold lot with a common-land share when one is resold. A harbour swim is not a settlement."
  },
  "fryers-forest": {
    visit: 2,
    join: 3,
    visitProcess: "Near Fryerstown, central Victoria. Holmgren’s page and the owners corporation. The forest is a home. A Castlemaine day-trip is not a track you may drive.",
    joinProcess: "One of eleven titles when it is sold. Word of mouth was the original door. A forestry afternoon is not a contract."
  },

  "cobb-hill": {
    visit: 3,
    join: 3,
    visitProcess: "Hartland, Vermont. cobbhill.org. Membership committee. Farms and a common house. Arrange. It is not a Quechee B&B.",
    joinProcess: "A dwelling plus a share of the land when one opens. membership@cobbhill.org. A sugar-house tour is not the closing."
  },
  "la-borda": {
    visit: 2,
    join: 2,
    visitProcess: "Can Batlló, Sants. laborda.coop has a virtual visit. The courtyard is a home. A Sants tapas crawl is not a viewing.",
    joinProcess: "Cooperative membership, grant of use, not a freehold. Confirm on laborda.coop. An architecture prize is not a share."
  }
};

export const livingBatch7DailyLife: Record<string, DailyLife> = {
  "braziers-park": {
    typical: [
      { title: "The house", detail: "A Grade II* Gothic pile that has to be lived in. Rooms, meals, the boiler." },
      { title: "Garden and park", detail: "About fifty acres. Courses spill into the grounds, then the household cooks." },
      { title: "Courses and residencies", detail: "The charity’s public week. Then the house is a home again." }
    ],
    unique: { title: "A research community in a manor", detail: "1950. Glaister. They are still asking how a group actually lives." }
  },
  christiania: {
    typical: [
      { title: "Workshops and cafés", detail: "The freetown’s till. Half a million visitors walk through." },
      { title: "The Plenum", detail: "Working groups. Consensus is the claim. The foundation holds the dirt." },
      { title: "Painted houses", detail: "Handmade dwellings on former barracks. Homes, not a set." }
    ],
    unique: { title: "From squat to cheque", detail: "1971 occupation. 2012 purchase. 2024, Pusher Street dug up. The lane is still a village." }
  },
  "kibbutz-samar": {
    typical: [
      { title: "Dates", detail: "Organic medjool and others. Export is the week." },
      { title: "Dairy", detail: "About 350 cows of record. Almost no hired labour in published accounts." },
      { title: "Personal hours", detail: "Members set their own work. The purse is still common." }
    ],
    unique: { title: "The anarchist kibbutz", detail: "1976. A gar'in that would not let the committee run the bedroom. CBS 2024: 254 people." }
  },
  nyland: {
    typical: [
      { title: "Forty-two doors", detail: "A pedestrian cluster, parking on the edge." },
      { title: "Common house", detail: "Meals, the work, the reason for the HOA." },
      { title: "The farm", detail: "Thirty-six acres under the Flatirons. Gardens and a working farm." }
    ],
    unique: { title: "A farm that kept its acres", detail: "1992. Muir Commons was a year earlier. Nyland kept the meadow." }
  },
  otamatea: {
    typical: [
      { title: "Private lots", detail: "Permaculture households on 0.4–2 ha of record." },
      { title: "Common bush", detail: "About 70 ha. The harbour is the neighbour." },
      { title: "Agreements", detail: "Land-use rules on private lots and common land." }
    ],
    unique: { title: "A company that wound itself up", detail: "Reinhold Huber and Lynne Hindle formed Otamatea Limited and bought 102 ha in 1997; after titles issued the company was wound up, each freehold keeping an undivided share of the common." }
  },
  "fryers-forest": {
    typical: [
      { title: "Eleven houses", detail: "One-acre lots in the goldfields bush." },
      { title: "Thinning", detail: "Firewood, posts, poles from the common forest. ABC still films it." },
      { title: "Owners corporation", detail: "The meeting that keeps eleven titles from becoming a suburb." }
    ],
    unique: { title: "Holmgren’s forest", detail: "Mid-1990s drawings. Last lot 2006. The eucalyptus is still the larger map." }
  },

  "cobb-hill": {
    typical: [
      { title: "Twenty-three households", detail: "Singles, duplexes, apartments. A common house." },
      { title: "Farms", detail: "Cedar Mountain, cheese, sugaring, a sugar bush." },
      { title: "Work days", detail: "Twelve community meetings and twelve work days a year in published accounts." }
    ],
    unique: { title: "Meadows’s last village", detail: "Limits to Growth on the founding shelf. She died in 2001. The pasture stayed." }
  },
  "la-borda": {
    typical: [
      { title: "The courtyard", detail: "Galleries, laundry, a timber void that is the living room." },
      { title: "Twenty-eight dwellings", detail: "40, 60, 75 m². Use, not a freehold." },
      { title: "Can Batlló", detail: "A recovered factory next door. Sants is the neighbourhood." }
    ],
    unique: { title: "City dirt, timber walls", detail: "First transfer-of-use coop on public land in Barcelona. 2018 keys." }
  }
};

export const livingBatch7Informal: Record<string, InformalAgreement[]> = {
  "braziers-park": [
    { kind: "guest-stay", why: "Courses and a WWOOF listing. Then the Gothic house is a home. A Landmark Trust weekend is a different product." },
    { kind: "course-host", why: "The charity’s till. Compact: which rooms are the workshop and which are still a bedroom." },
    { kind: "membership-trial", why: "Apply to live. A residency is not the household." },
    { kind: "land-care", why: "Fifty acres, a listed house. Guests stay on the paths they were given." }
  ],
  christiania: [
    { kind: "media-story", why: "The fourth tourist site in Copenhagen. Every journalist wants Pusher Street. The street was dug up in 2024. Names and doors still matter." },
    { kind: "guest-stay", why: "Half a million visitors. Homes are still homes. A café is not a spare room." },
    { kind: "membership-trial", why: "Plenum and foundation. A walk from Christianshavn is not an application." },
    { kind: "building-code", why: "Handmade houses on former barracks. What a household may add, and what the municipality now checks." }
  ],
  "kibbutz-samar": [
    { kind: "common-purse", why: "Collective economy. Personal hours. The informal layer is what a person may actually keep." },
    { kind: "animals-stock", why: "Dates and about 350 cows. Whose round, whose calf." },
    { kind: "labour-roster", why: "Almost no hired labour in published accounts. Someone still picks the fruit." },
    { kind: "membership-trial", why: "The site says members still arrive. A harvest is not the vote." }
  ],
  nyland: [
    { kind: "kitchen-table", why: "Common meals. Forty-two private doors and one room that is the point." },
    { kind: "membership-trial", why: "A listing. The Flatirons walk is not a viewing." },
    { kind: "land-care", why: "Farm and 36 acres. Guests stay off a neighbour’s rows." },
    { kind: "children-care", why: "135 residents. The common is a playground as much as a board." }
  ],
  otamatea: [
    { kind: "land-care", why: "Private lots and ~70 ha common. The agreements page is the compact." },
    { kind: "membership-trial", why: "A resale with a common-land share. A harbour swim is not a settlement." },
    { kind: "building-code", why: "Permaculture rules on lots. What a household may put on 2 ha." },
    { kind: "guest-stay", why: "Write first. The peninsula is not a DOC camp." }
  ],
  "fryers-forest": [
    { kind: "land-care", why: "Thinning the common forest. Fire, timber, whose track." },
    { kind: "membership-trial", why: "One of eleven titles. A forestry afternoon is not a contract." },
    { kind: "building-code", why: "Permaculture siting, water, waste. What a household may add in the bush." },
    { kind: "labour-roster", why: "Common-land work. The owners corporation is who actually shows up." }
  ],

  "cobb-hill": [
    { kind: "land-care", why: "270 acres, farms, a sugar bush. Guests stay off rows they were not asked onto." },
    { kind: "kitchen-table", why: "Common house. Twenty-three households." },
    { kind: "animals-stock", why: "Horses, cheese, sugaring in published accounts. Whose animal, whose vat." },
    { kind: "membership-trial", why: "A dwelling plus a land share. A farm tour is not the closing." }
  ],
  "la-borda": [
    { kind: "kitchen-table", why: "Courtyard and common kitchen. Twenty-eight dwellings, one void." },
    { kind: "membership-trial", why: "Cooperative capital, grant of use. An architecture prize is not a share." },
    { kind: "building-code", why: "CLT fabric, galleries, laundry. What a household may hang in a timber courtyard the cameras still want." },
    { kind: "guest-stay", why: "Virtual visit on laborda.coop. The building is a home." }
  ]
};

export const livingBatch7Governance: Record<string, Governance> = {
  "braziers-park": {
    model: "hybrid",
    modelLabel: "Charity and household",
    unique: false,
    summary: "An educational charity in a listed house. Courses are the public face. A small household lives there.",
    whoDecides: "The charity and the residents, on different questions.",
    bodies: [
      { name: "School of Integrative Social Research", role: "The charity, the house on paper." },
      { name: "Resident household", role: "About 20–30 people of record." }
    ],
    howItRuns: "Apply, or book a course. A Gothic photograph is not the board."
  },
  christiania: {
    model: "assembly",
    modelLabel: "Plenum and foundation",
    unique: true,
    summary: "A 1971 freetown that bought its dirt in 2012. Plenum and working groups for the week. Foundation Freetown Christiania for the title.",
    whoDecides: "Residents in Plenum. The foundation board for the land the state sold.",
    bodies: [
      { name: "Residents’ Plenum", role: "The assembly. Consensus is the claim." },
      { name: "Working groups", role: "The week." },
      { name: "Foundation Freetown Christiania", role: "The 19 acres." }
    ],
    howItRuns: "Walk in as a visitor. Residence is a much smaller door.",
    dive: {
      title: "How a squat bought the barracks",
      lead: "Christiania is the rare occupation that became a landowner without becoming a suburb.",
      organs: [
        { name: "Plenum", what: "Residents’ assembly. Working groups underneath." },
        { name: "Foundation", what: "2011 vehicle that paid the state and holds title." }
      ],
      path: "You visit by walking in from Christianshavn. You join only if the freetown takes you. There is no estate-agent door.",
      history: "Proclaimed 1971. Christiania Law 1989. Supreme Court fights. 2011 agreement, 2012 first payment. Pusher Street largely closed and dug up in 2024.",
      tension: "Half a million tourists and about 900 residents. The foundation owns 19 acres of a larger old plot. Consensus is slower than a police action."
    }
  },
  "kibbutz-samar": {
    model: "common-purse",
    modelLabel: "Collective kibbutz, personal hours",
    unique: true,
    summary: "A Kibbutz Movement settlement that kept the common purse and let members set their own work. Dates and a dairy.",
    whoDecides: "The kibbutz. Personal matters stay personal — that is the 1976 brief.",
    bodies: [
      { name: "Kibbutz assembly", role: "The collective." },
      { name: "Branches", role: "Dates, dairy, the rest of the week." }
    ],
    howItRuns: "Write kibbutz-samar.com. A date crate is not membership.",
    dive: {
      title: "The anarchist kibbutz",
      lead: "Samar’s founders left other kibbutzim so a committee would not run the bedroom, and so the purse would stay common.",
      organs: [
        { name: "Kibbutz", what: "Collective economy, land, the name." },
        { name: "Members", what: "Set their own hours. Few hired workers in published accounts." }
      ],
      path: "Kibbutz admissions. The site says people still join. Confirm there, not a 2015 blog.",
      history: "1976 gar'in, Hashomer Hatzair, Hevel Eilot. Still listed as a collective while many kibbutzim privatised.",
      tension: "CBS 2024 counts 254; the site has said ~350 including children. Figures drift. The legal fact is: no private lots."
    }
  },
  nyland: {
    model: "hoa",
    modelLabel: "Cohousing homeowners association",
    unique: false,
    summary: "42 private homes, a common house, a farm, 36 acres.",
    whoDecides: "House owners. Common-house work for the shared acres.",
    bodies: [
      { name: "Households", role: "42 deeds." },
      { name: "Common house", role: "Meals and the farm roster." }
    ],
    howItRuns: "A listing is the door. Friday dinner is not the closing."
  },
  otamatea: {
    model: "hoa",
    modelLabel: "Lot owners and common-land agreements",
    unique: false,
    summary: "Freehold lots with undivided shares of a Kaipara common. The development company is gone.",
    whoDecides: "Lot owners, under the land-use agreements.",
    bodies: [
      { name: "Lot owners", role: "Private titles and common shares." },
      { name: "Land-use agreements", role: "Private lots and the bush." }
    ],
    howItRuns: "A resale. A harbour photograph is not a title."
  },
  "fryers-forest": {
    model: "hoa",
    modelLabel: "Owners corporation",
    unique: false,
    summary: "Eleven freehold lots in a 300-acre common forest. The corporation manages the bush and the covenants.",
    whoDecides: "Lot owners through the Owners Corporation.",
    bodies: [
      { name: "Fryers Forest Owners Corporation", role: "Common forest, private-lot rules, 1999–." },
      { name: "Eleven households", role: "The dwellings." }
    ],
    howItRuns: "A title when one opens. A thinning day is labour."
  },

  "cobb-hill": {
    model: "hybrid",
    modelLabel: "Cohousing on community land",
    unique: false,
    summary: "23 households own homes and a share of 270 acres. Farms sit on the same dirt. Twelve meetings and twelve work days a year of record.",
    whoDecides: "Members. Committees including finance and legal, membership.",
    bodies: [
      { name: "Cobb Hill members", role: "Homes plus land share." },
      { name: "Farms", role: "Cedar Mountain, cheese, sugaring — not the HOA by another name." }
    ],
    howItRuns: "membership@cobbhill.org. A sugar-house visit is not the share."
  },
  "la-borda": {
    model: "cooperative",
    modelLabel: "Transfer-of-use cooperative on public land",
    unique: true,
    summary: "Habitatges la Borda SCCL. 75-year municipal surface right. 28 dwellings. Members use; they do not buy Can Batlló.",
    whoDecides: "Cooperative assembly.",
    bodies: [
      { name: "Habitatges la Borda SCCL", role: "The members, the timber courtyard." },
      { name: "Barcelona City Council", role: "The soil, VPO, 75 years." }
    ],
    howItRuns: "Cooperative admissions. A Mies van der Rohe photograph is not a share.",
    dive: {
      title: "Cessió d’ús on city dirt",
      lead: "La Borda is the first Barcelona housing cooperative to build on a public plot under a grant of use, so the dwelling cannot be sold as a freehold speculative flat.",
      organs: [
        { name: "SCCL cooperative", what: "Members, capital, the building." },
        { name: "Surface right", what: "75 years from the city. VPO." }
      ],
      path: "Join the cooperative. There is no estate-agent freehold. laborda.coop.",
      history: "Can Batlló neighbours 2012, coop 2014, keys 2018. Lacol’s CLT courtyard was among Spain’s tallest timber housing at the time.",
      tension: "Architecture fame versus a waiting list. The soil stays public. Confirm current membership, not a 2019 award."
    }
  }
};

export const livingBatch7Leaders: Record<string, VillageLeaders> = {
  "braziers-park": {
    people: [{ name: "Norman Glaister", role: "Founder, 1950; bought the house and set up the School of Integrative Social Research (d. 1961)" }],
    office: { url: "https://www.braziers.org.uk/", address: "Braziers Park, Ipsden, Wallingford, Oxfordshire" }
  },
  christiania: {
    people: [],
    office: { url: "https://www.christiania.org/", address: "Christiania, Christianshavn, Copenhagen" }
  },
  "kibbutz-samar": {
    people: [],
    office: { url: "https://kibbutz-samar.com/", address: "Kibbutz Samar, Hevel Eilot, Israel" }
  },
  nyland: {
    people: [],
    office: { url: "https://www.nylandcohousing.org/", address: "Lafayette, Colorado" }
  },
  otamatea: {
    people: [
      { name: "Reinhold Huber", role: "Co-founder; Otamatea Limited, 1997 land purchase" },
      { name: "Lynne Hindle", role: "Co-founder; Otamatea Limited" }
    ],
    office: { url: "https://otamatea.info/", address: "Kaiwaka, Northland, New Zealand" }
  },
  "fryers-forest": {
    people: [
      { name: "David Holmgren", role: "Co-designer with Su Dennett; permaculture brief" },
      { name: "Samantha and Haridas Fairchild", role: "Co-founders with Holmgren and Dennett, mid-1990s" }
    ],
    office: { url: "https://holmgren.com.au/fryers-forest/", address: "Near Fryerstown, central Victoria" }
  },

  "cobb-hill": {
    people: [{ name: "Donella Meadows", role: "Founding vision, 1995; co-author of The Limits to Growth (d. 2001)" }],
    office: { url: "http://www.cobbhill.org/", email: "membership@cobbhill.org", address: "Hartland, Vermont" }
  },
  "la-borda": {
    people: [],
    office: { url: "https://www.laborda.coop/", address: "Carrer de la Constitució 85–87, Can Batlló, Sants, Barcelona" }
  }
};

export const livingBatch7Accommodations: Record<string, Accommodations> = {
  "braziers-park": {
    visitor: {
      overview: "Courses, ACRE residency, WWOOF listing. braziers.org.uk. The house is a home.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Course and residency beds when advertised. WWOOF stays of record." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "About 20–30 people in and around the listed house.",
      camping: { available: false, types: [], detail: "People live in the house." },
      rooms: { available: true, types: [], detail: "Community rooms, not lots." },
      other: { available: false, types: [], detail: "None listed." }
    }
  },
  christiania: {
    visitor: {
      overview: "Walk in. Cafés and workshops. Overnight is not the tourist product unless a resident puts you up.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "No municipal guesthouse of record. Homes are homes." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "About 850–1,000 people in handmade houses on foundation land.",
      camping: { available: false, types: [], detail: "People live in houses." },
      rooms: { available: true, types: [], detail: "Occupied dwellings. Not open-market flats." },
      other: { available: false, types: [], detail: "None listed." }
    }
  },
  "kibbutz-samar": {
    visitor: {
      overview: "Write kibbutz-samar.com. A working kibbutz. Overnight is arranged, not a walk-in.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "No hotel of record on the community site." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "Kibbutz members in collective housing.",
      camping: { available: false, types: [], detail: "People live in houses." },
      rooms: { available: true, types: [], detail: "Member dwellings. No private lots." },
      other: { available: false, types: [], detail: "None listed." }
    }
  },
  nyland: {
    visitor: {
      overview: "Write the association. A lived-in Lafayette street. No public guesthouse.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "Homes. Arrange if someone offers." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "42 private homes, 135 people.",
      camping: { available: false, types: [], detail: "People live in houses." },
      rooms: { available: true, types: [], detail: "Private residences plus a common house." },
      other: { available: false, types: [], detail: "None listed." }
    }
  },
  otamatea: {
    visitor: {
      overview: "Write. A peninsula of homes. Not a campground.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "No guesthouse of record." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "About 50 adults on private lots plus common bush.",
      camping: { available: false, types: [], detail: "People live in houses." },
      rooms: { available: true, types: [], detail: "Freehold dwellings on lots." },
      other: { available: false, types: [], detail: "None listed." }
    }
  },
  "fryers-forest": {
    visitor: {
      overview: "Arrange. Eleven houses in a forest. A Castlemaine tourist loop is not a driveway.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "Workaway host accounts exist; confirm with residents, not a listing year." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "Eleven titles, about 29 residents in one host account.",
      camping: { available: false, types: [], detail: "People live in houses." },
      rooms: { available: true, types: [], detail: "Freehold dwellings on one-acre lots." },
      other: { available: false, types: [], detail: "None listed." }
    }
  },

  "cobb-hill": {
    visitor: {
      overview: "cobbhill.org. Membership committee. Farms are working. Arrange.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "No inn of record." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "23 households on 270 acres.",
      camping: { available: false, types: [], detail: "People live in houses." },
      rooms: { available: true, types: [], detail: "Owned dwellings plus a common house." },
      other: { available: false, types: [], detail: "None listed." }
    }
  },
  "la-borda": {
    visitor: {
      overview: "laborda.coop virtual visit. The courtyard is a home. Sants is not a hotel corridor.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "No tourist rooms of record." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "28 cooperative dwellings on a grant of use.",
      camping: { available: false, types: [], detail: "People live in the timber courtyard." },
      rooms: { available: true, types: [], detail: "Right-of-use homes, 40–75 m²." },
      other: { available: false, types: [], detail: "None listed." }
    }
  }
};
