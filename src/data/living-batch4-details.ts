import type { LegalEntity } from "./legal-entities";
import type { LandOwnership } from "./land-ownership";
import type { CommunityFunding } from "./funding";
import type { VisitJoin } from "./visit-join";
import type { DailyLife } from "./daily-life";
import type { InformalAgreement } from "./informal-agreements";
import type { Governance } from "./governance";
import type { VillageLeaders } from "./leaders";
import type { Accommodations } from "./accommodations";

export const livingBatch4LegalEntities: Record<string, LegalEntity[]> = {
  "laurieston-hall": [
    { name: "Laurieston Hall Housing Co-operative Ltd.", kind: "Housing cooperative", role: "Residential co-op from 1987; the hall, cottages, and land.", status: "current", layer: "membership", year: "1987", forms: ["Housing cooperative"] },
    { name: "1972 commune purchase", kind: "Unincorporated community association", role: "Eight adults bought the hall with a sealed bid of £25,500.", status: "historical", layer: "land", year: "1972", forms: ["Unincorporated community"] }
  ],
  "ufa-fabrik": [
    { name: "International Culture Centre ufaFabrik Berlin", kind: "Self-governing cultural project", role: "Work-and-life village on the former UFA lab, 1979–present.", status: "current", layer: "membership", year: "1979", forms: ["Registered association"] },
    { name: "Tempelhof site lease", kind: "City leasehold", role: "18,500 m² former film laboratory, leased from Berlin in published accounts.", status: "current", layer: "land", forms: ["Ground lease"] }
  ],
  tuggelite: [
    { name: "Tuggelite housing cluster", kind: "Housing association", role: "16 households in five apartment houses, Sweden’s first completed eco-village.", status: "current", layer: "membership", year: "1984", forms: ["Housing cooperative"] },
    { name: "Karlstad municipality", kind: "Municipal partner", role: "Land, permits, and backing for compost toilets and pellet heat.", status: "associated", layer: "network", year: "1980s", forms: ["Municipal"] }
  ],
  pinakarri: [
    { name: "Pinakarri Community Inc.", kind: "Housing cooperative", role: "Suburban cohousing of 12 dwellings and a common house.", status: "current", layer: "membership", year: "1991", forms: ["Housing cooperative"] },
    { name: "Public rental co-operative", kind: "State-partnered rental", role: "Affordable rental dwellings beside private-equity shares.", status: "current", layer: "membership", forms: ["Housing cooperative"] }
  ],
  "muir-commons": [
    { name: "Muir Commons homeowners", kind: "Cohousing homeowners association", role: "26 privately owned houses and shared common areas, 1991.", status: "current", layer: "membership", year: "1991", forms: ["Homeowners association"] },
    { name: "Common house, orchard, and shop", kind: "Shared common property", role: "3,668 sq ft common house plus workshop, equally maintained.", status: "current", layer: "land", forms: ["Homeowners association"] }
  ],
  urupia: [
    { name: "Comune Urupia", kind: "Libertarian commune", role: "Open agricultural commune, first points September 1993.", status: "current", layer: "membership", year: "1993", forms: ["Unincorporated community"] },
    { name: "Società Cooperativa La Petrosa", kind: "Agricultural cooperative", role: "Published civil wrapper for the masseria farm.", status: "current", layer: "enterprise", forms: ["Housing cooperative"] }
  ],
  "tinkers-bubble": [
    { name: "Tinkers Bubble residents", kind: "Unincorporated community association", role: "Low-impact woodland household, Residents Agreement, no buy-in.", status: "current", layer: "membership", year: "1994", forms: ["Unincorporated community"] },
    { name: "Forty-acre Somerset holding", kind: "Community land", role: "Woodland, orchard, and field. Permanent planning 2023.", status: "current", layer: "land", year: "1994", forms: ["Property trust"] }
  ],

  hallingelille: [
    { name: "Økosamfundet Hallingelille", kind: "Eco-village association", role: "20 plots, two collectives, commons, LØS-listed.", status: "current", layer: "membership", year: "2004", forms: ["Unincorporated community"] },
    { name: "Plot holders", kind: "Private household plots", role: "Ordinary plots inside the village, plus two collectives.", status: "current", layer: "land", forms: ["Freehold title"] }
  ],
  "red-earth-farms": [
    { name: "Red Earth Farms community land trust", kind: "Community land trust", role: "CLT with board and bylaws, 2007. Seven homestead leases.", status: "current", layer: "membership", year: "2007", forms: ["Community land trust"] },
    { name: "76-acre Scotland County land", kind: "Trust land", role: "Bought from Aron Heintz, early 2008. Fully leased 2013.", status: "current", layer: "land", year: "2008", forms: ["Community land trust"] }
  ]
};

export const livingBatch4Land: Record<string, LandOwnership> = {
  "laurieston-hall": {
    owner: "Laurieston Hall Housing Co-operative Ltd.",
    complexity: "simple",
    tenure: "Housing co-operative",
    howHeld: "Victorian hall, cottages, walled garden, and about 180 acres of woods, pasture, and wetland. Occupancy, not private lots.",
    narrative: "A sealed bid in 1972, a co-op in 1987, and a house large enough that it only stands if people live in it.",
    divided: []
  },
  "ufa-fabrik": {
    owner: "City of Berlin lease to ufaFabrik",
    complexity: "simple",
    tenure: "Urban leasehold",
    howHeld: "18,500 m² former UFA film laboratory in Tempelhof. Residents occupy; they do not hold Berlin freehold of the old lab.",
    narrative: "An occupation that became a lease. The film buildings stayed because people stayed.",
    divided: []
  },
  tuggelite: {
    owner: "Households in the five apartment houses",
    complexity: "simple",
    tenure: "Swedish housing association",
    howHeld: "Sixteen households, five low-energy houses on the Karlstad edge. Ordinary tenure in an extraordinary first.",
    narrative: "The municipality helped find the dirt so compost toilets and pellets would have somewhere legal to stand.",
    divided: []
  },
  pinakarri: {
    owner: "Pinakarri Community Inc. and rental co-op partners",
    complexity: "split",
    tenure: "Mixed equity and public rental",
    howHeld: "About a hectare in Hamilton Hill. Some dwellings are co-op shares, some are state-partnered rentals, one common house.",
    narrative: "Fremantle built a street that would not be only those who could raise a full deposit.",
    divided: [
      { label: "Equity dwellings", holder: "Private-equity co-op members", share: "Part of the 12 houses", what: "Bought-in homes" },
      { label: "Rental dwellings", holder: "Public rental co-operative", share: "The rest of the cluster", what: "Affordable rent on the same common" }
    ]
  },
  "muir-commons": {
    owner: "26 house owners plus common property",
    complexity: "split",
    tenure: "Cohousing HOA",
    howHeld: "Just under three acres in Davis. Houses are private title. Common house, orchard, and shop are shared equally.",
    narrative: "The first new-build cohousing in the country still has to work as ordinary California deeds plus a common house.",
    divided: [
      { label: "Houses", holder: "Households", share: "26 units", what: "Private residences, 808–1,381 sq ft" },
      { label: "Common house and grounds", holder: "All residents equally", share: "3,668 sq ft plus orchard and shop", what: "The cohousing bet" }
    ]
  },
  urupia: {
    owner: "Società Cooperativa La Petrosa / Comune Urupia",
    complexity: "simple",
    tenure: "Agricultural co-operative",
    howHeld: "A Salento masseria and fields. Assemblies, not plots. People pass through; the farm stays.",
    narrative: "A libertarian commune that put the farm in a co-operative so the meeting would have dirt under it.",
    divided: []
  },
  "tinkers-bubble": {
    owner: "Tinkers Bubble community",
    complexity: "simple",
    tenure: "Low-impact community land",
    howHeld: "About 40 acres of woodland, orchard, and field. Permanent planning 2023. No buy-in, no lots.",
    narrative: "Thirty years of living there was the planning argument. The 2023 permission is the paper that caught up.",
    divided: []
  },

  hallingelille: {
    owner: "Plot holders and Økosamfundet Hallingelille commons",
    complexity: "split",
    tenure: "Plots plus village commons",
    howHeld: "Twenty ordinary plots and two collectives on a former livestock farm, plus lake, forest, willow treatment, and a community house.",
    narrative: "An old chicken farm that became a village by splitting houses from the commons on purpose.",
    divided: [
      { label: "Household plots", holder: "Families", share: "20 plots", what: "Houses and gardens" },
      { label: "Collectives", holder: "Two collective households", share: "Udgården and the second collective", what: "Shared houses" },
      { label: "Commons", holder: "The eco-village", share: "Lake, forest, willow, community house", what: "The village that is not a plot" }
    ]
  },
  "red-earth-farms": {
    owner: "Red Earth Farms community land trust",
    complexity: "simple",
    tenure: "Community land trust leases",
    howHeld: "76 acres in Scotland County. Homesteads lease from the trust. Fully leased by 2013. Seven households.",
    narrative: "Next to Dancing Rabbit, with more elbow room written into the leases so people with less money could still have land.",
    divided: []
  }
};

export const livingBatch4Funding: Record<string, CommunityFunding> = {
  "laurieston-hall": {
    overview: "A 1972 sealed bid, then co-op housing costs and guest weeks in a large Galloway house.",
    grantsHeadline: "No major public grant found",
    privateHeadline: "£25,500 bid + co-op + guests",
    grants: [],
    private: [
      { source: "1972 sealed bid for the hall", amount: "£25,500", year: "1972", certainty: "documented", kind: "member-equity", note: "Eight adults with children. Mix Café / Freedom News." },
      { source: "Co-op housing costs and guest weeks", amount: "Ongoing", certainty: "estimated", kind: "other", note: "lauriestonhall.org.uk. Confirm current guest contributions." }
    ]
  },
  "ufa-fabrik": {
    overview: "A city lease, cultural enterprises, café and bakery, and a small resident household inside a large workplace.",
    grantsHeadline: "City lease / cultural funding",
    privateHeadline: "Shows, café, bakery, courses",
    grants: [
      { source: "Berlin site lease and cultural programmes", amount: "Ongoing city relationship", certainty: "estimated", kind: "contract", note: "18,500 m² former UFA lab. Confirm current lease terms with the centre." }
    ],
    private: [
      { source: "Theatre, circus, café, organic bakery, courses", amount: "Workplace of 180+ people", certainty: "documented", kind: "business", note: "Shows, café, bakery, and courses." }
    ]
  },
  tuggelite: {
    overview: "Municipal backing for Sweden’s first eco-village: land, permits, and kit that was then unusual.",
    grantsHeadline: "Karlstad municipal support",
    privateHeadline: "16 household housing costs",
    grants: [
      { source: "Karlstad municipality", amount: "Land help and permits", year: "1980s", certainty: "documented", kind: "grant", note: "WWF and Magnusson 2018: municipality found land and backed compost toilets and pellets." }
    ],
    private: [
      { source: "Sixteen households", amount: "Ordinary Swedish housing costs", certainty: "estimated", kind: "member-equity", note: "Five apartment houses." }
    ]
  },
  pinakarri: {
    overview: "A Fremantle mixed-equity cohousing cluster with a public rental partner so some households rent.",
    grantsHeadline: "State rental partnership",
    privateHeadline: "Equity shares + rents",
    grants: [
      { source: "Western Australian public rental co-operative", amount: "Affordable rental dwellings on the same site", certainty: "documented", kind: "grant", note: "Research literature on Pinakarri as mixed equity plus public rental." }
    ],
    private: [
      { source: "Private-equity co-op shares", amount: "Member buy-in", certainty: "estimated", kind: "member-equity", note: "" }
    ]
  },
  "muir-commons": {
    overview: "Twenty-six private houses and HOA dues for a common house in Davis, 1991.",
    grantsHeadline: "No major public grant found",
    privateHeadline: "House sales + HOA dues",
    grants: [],
    private: [
      { source: "26 private residences", amount: "Davis house prices", certainty: "estimated", kind: "member-equity", note: "First US new-build cohousing." },
      { source: "HOA / common house", amount: "Shared maintenance", certainty: "documented", kind: "other", note: "3,668 sq ft common house, orchard, 900 sq ft shop." }
    ]
  },
  urupia: {
    overview: "A Salento farm commune paid by produce, GAS buyers, camps, and the festival.",
    grantsHeadline: "No major public grant found",
    privateHeadline: "Farm + festival + camps",
    grants: [],
    private: [
      { source: "Agricultural produce and GAS", amount: "Farm income", certainty: "estimated", kind: "business", note: "Wine, oil, ovens. La Petrosa co-operative." },
      { source: "Festival delle Terre and camps", amount: "Seasonal gatherings", certainty: "documented", kind: "courses", note: "urupia.wordpress.com." }
    ]
  },
  "tinkers-bubble": {
    overview: "A low-impact woodland household: communal expenses, produce, volunteer labour. No buy-in.",
    grantsHeadline: "No major public grant found",
    privateHeadline: "£120/month communal + produce",
    grants: [],
    private: [
      { source: "Communal expenses", amount: "About £120 per month of record", certainty: "documented", kind: "other", note: "tinkersbubble.org Residency page. Confirm current figure." },
      { source: "Woodland, orchard, and field produce", amount: "Household and local", certainty: "estimated", kind: "business", note: "Horse-powered founding brief." }
    ]
  },

  hallingelille: {
    overview: "Household plots plus shared commons on a former livestock farm, LØS-listed.",
    grantsHeadline: "No major public grant found",
    privateHeadline: "Plots + commons dues",
    grants: [],
    private: [
      { source: "Twenty household plots and two collectives", amount: "House and plot costs", certainty: "estimated", kind: "member-equity", note: "LØS listing." },
      { source: "Commons (lake, forest, willow, community house)", amount: "Shared village costs", certainty: "estimated", kind: "other", note: "The part that is not a plot." }
    ]
  },
  "red-earth-farms": {
    overview: "A 76-acre land trust bought with help from a friend of the community; homestead leases rather than fee-simple sales.",
    grantsHeadline: "No major public grant found",
    privateHeadline: "Friend loan + leases",
    grants: [],
    private: [
      { source: "Land purchase (Aron Heintz; friend loan of record)", amount: "$90,000 for 76 acres in a 2024 report", year: "2008", certainty: "estimated", kind: "loan", note: "Community history: purchase early 2008. Nation of Change 2024 gave $90k. Confirm with the trust." },
      { source: "Homestead ground leases", amount: "Seven households", certainty: "documented", kind: "other", note: "Fully leased 2013." }
    ]
  }
};

export const livingBatch4VisitJoin: Record<string, VisitJoin> = {
  "laurieston-hall": {
    visit: 3,
    join: 2,
    visitProcess: "Near Castle Douglas, Dumfries and Galloway. lauriestonhall.org.uk. Guest weeks in a lived-in hall. Book. The woods are not a drop-in park.",
    joinProcess: "Housing co-operative. They have said they are not currently looking for more members. A guest week is not an application."
  },
  "ufa-fabrik": {
    visit: 5,
    join: 2,
    visitProcess: "Viktoriastraße, Tempelhof. Theatre, circus, café, bakery. Buy a ticket. The 30 residents live on the same four acres.",
    joinProcess: "A small residential household inside a large workplace. A job on site is more likely than a spare room. Confirm on the centre’s own pages."
  },
  tuggelite: {
    visit: 2,
    join: 3,
    visitProcess: "Karlstad edge, city bus. Lived-in apartment houses. There is no advertised guesthouse. A ski-track neighbour is not the village door.",
    joinProcess: "A flat in one of the five houses when one is offered. Ordinary Swedish housing tenure in the first eco-village. Not a pioneer share."
  },
  pinakarri: {
    visit: 3,
    join: 3,
    visitProcess: "Hamilton Hill, Fremantle. A suburban cohousing street. Write. Dwellings are homes.",
    joinProcess: "Equity share or public rental when a dwelling opens. Mixed tenure on purpose. A courtyard photograph is not a viewing."
  },
  "muir-commons": {
    visit: 2,
    join: 3,
    visitProcess: "Davis, California. A lived-in cohousing cul-de-sac. There is no public tour of record. Houses are private.",
    joinProcess: "Buy one of the 26 houses when it is listed. HOA and cohousing covenants come with the deed. Davis prices."
  },
  urupia: {
    visit: 3,
    join: 2,
    visitProcess: "Contrada Cistonaro, Francavilla Fontana. Write comune.urupia@gmail.com or the WordPress page. Festival, camps, harvest. The masseria is a home.",
    joinProcess: "Live, work, sit assemblies. La Petrosa is the farm paper, not a plot sale. Relationship-led and slow."
  },
  "tinkers-bubble": {
    visit: 3,
    join: 2,
    visitProcess: "Norton-sub-Hamdon, Somerset. tinkersbubble.org. Volunteer stays through the year. Write. Forty acres of woodland, not a campsite listing.",
    joinProcess: "Trial volunteering, then a Residents Agreement. No buy-in. About £120 a month communal plus work. Fit is the filter."
  },

  hallingelille: {
    visit: 3,
    join: 3,
    visitProcess: "Near Ringsted, Zealand. Tours and WWOOF stays have been advertised. Plots are homes. Write.",
    joinProcess: "A plot or a place in a collective when one opens. LØS village, not a Copenhagen cabin. Confirm current with the village."
  },
  "red-earth-farms": {
    visit: 3,
    join: 2,
    visitProcess: "Scotland County, Missouri, next to Dancing Rabbit. Write. Seven homesteads. Do not treat the neighbour village as the door.",
    joinProcess: "A ground lease from the land trust when a homestead is offered. Consensus and means-tested access are the published brief. No fee-simple lot book."
  }
};

export const livingBatch4DailyLife: Record<string, DailyLife> = {
  "laurieston-hall": {
    typical: [
      { title: "The hall itself", detail: "A huge Victorian house that has to be lived in to be kept." },
      { title: "Walled garden", detail: "Organic kitchen garden, stables, cottages." },
      { title: "Guest weeks", detail: "Booked groups in a house that is also a home." }
    ],
    unique: { title: "A sealed bid, then fifty years", detail: "Eight adults bought it for £25,500 in 1972. The co-op is what survived the commune." }
  },
  "ufa-fabrik": {
    typical: [
      { title: "Shows and circus", detail: "A cultural workplace of more than 180 people." },
      { title: "Café and bakery", detail: "Organic food on the old film lot." },
      { title: "Thirty residents", detail: "A small household inside a large public site." }
    ],
    unique: { title: "The lab that was not demolished", detail: "About a hundred people occupied the 18,500 m² former UFA film laboratory in Tempelhof in June 1979 when the buildings were slated for demolition; the occupation became a city lease, and about thirty people still live on the lot while more than 180 work there." }
  },
  tuggelite: {
    typical: [
      { title: "Five apartment houses", detail: "Sixteen households, a Karlstad bus, ordinary Swedish flats." },
      { title: "Pellet heat", detail: "Wood pellets and triple glass when those were still arguments." },
      { title: "Compost toilets of record", detail: "The municipality said yes. Later villages copied the permit." }
    ],
    unique: { title: "Sweden’s first completed eco-village", detail: "A Gothenburg research group spent the 1970s on the drawings; Karlstad then built sixteen households in five low-energy apartment houses — wood-pellet heat, compost toilets, triple glass — as Sweden’s first completed eco-village." }
  },
  pinakarri: {
    typical: [
      { title: "Twelve houses, one common", detail: "A Fremantle street that eats together on purpose." },
      { title: "Mixed tenure week", detail: "Some bought in. Some rent through the state partner." },
      { title: "Suburban work", detail: "Hamilton Hill, not a bush camp. Jobs in Fremantle." }
    ],
    unique: { title: "Equity and rental on the same common", detail: "The founding bet was that the street would not be only those who could raise a full deposit. Formed in 1991 as twelve dwellings plus a common house on about a hectare in Hamilton Hill." }
  },
  "muir-commons": {
    typical: [
      { title: "Common house meals", detail: "3,668 square feet at the centre. Monthly communal meals of record." },
      { title: "Orchard and shop", detail: "After thirty years the houses sit behind a canopy that was not there in 1991." },
      { title: "Twenty-six private doors", detail: "You own a house. You also inherit the workshop." }
    ],
    unique: { title: "The first new-build cohousing in the United States", detail: "Charles Durrett drew twenty-six Davis houses after Denmark; people moved in in the summer of 1991. It was the first newly built cohousing community in the United States." }
  },
  urupia: {
    typical: [
      { title: "Farm and ovens", detail: "Wine, oil, wood ovens, phytodepuration." },
      { title: "Assemblies", detail: "Whoever is living the masseria sits the meeting." },
      { title: "Festival weeks", detail: "Festival delle Terre. Camps. Then the ordinary Tuesday." }
    ],
    unique: { title: "A libertarian commune with a co-operative on paper", detail: "First points 1993. La Petrosa holds the farm so the meeting has dirt." }
  },
  "tinkers-bubble": {
    typical: [
      { title: "Horse and woodland", detail: "Fossil-fuel-free founding brief. Hay, orchard, timber." },
      { title: "Three days a fortnight", detail: "Communal work plus a domestic rota. About £120 a month of record." },
      { title: "Volunteer trials", detail: "People come for a season. Some stay." }
    ],
    unique: { title: "Permanent planning in 2023", detail: "A group moved onto these forty Somerset acres on New Year’s Day 1994 to live horse-powered and off-grid; they fought planning for decades, won permanent permission in 2023, and the Landworkers’ Alliance marked thirty-one years in 2025." }
  },

  hallingelille: {
    typical: [
      { title: "Plots and collectives", detail: "Twenty houses, two collective households, a community house." },
      { title: "Lake and willow", detail: "Wastewater through willow. A peace forest. Animals." },
      { title: "Zealand week", detail: "Seventy kilometres from Copenhagen. Gardens, kids, commons work." }
    ],
    unique: { title: "A chicken farm that became a village", detail: "A former chicken-and-pig farm near Ringsted, on Zealand, became this LØS-listed eco-village around 2004: twenty household plots, two collectives, a lake, a peace forest, and willow wastewater. GEN Europe has used the site for youth exchanges; Copenhagen is about seventy kilometres away." },
  },
  "red-earth-farms": {
    typical: [
      { title: "Seven homesteads", detail: "Leases on 76 acres. More elbow room than the neighbour village on purpose." },
      { title: "Land-trust paper", detail: "Board, bylaws, ground leases. No fee-simple lot book." },
      { title: "The walk to Dancing Rabbit", detail: "A short walk. A different tenure. Both still Missouri." }
    ],
    unique: { title: "Homesteads on a trust, next door to a village", detail: "Founders from Dancing Rabbit and Sandhill wanted land that people with less money could still lease. Incorporated as a CLT in 2007, bought 76 acres in early 2008, fully leased by 2013." }
  }
};

export const livingBatch4Informal: Record<string, InformalAgreement[]> = {
  "laurieston-hall": [
    { kind: "guest-stay", why: "Guest weeks in a lived-in hall. Booked groups still have to leave the household rooms alone." },
    { kind: "kitchen-table", why: "A huge house, about twenty people, whose fridge, whose child." },
    { kind: "membership-trial", why: "They have said they are not recruiting. A guest week is not an interview." },
    { kind: "land-care", why: "Woods, wetland, walled garden. Guests stay on the paths they were given." }
  ],
  "ufa-fabrik": [
    { kind: "guest-stay", why: "Tickets, café, bakery. Thirty residents on the same four acres as the public." },
    { kind: "course-host", why: "Theatre, varieté, circus, and the courtyard stages are a public programme. A ticket is not a key to a resident room." },
    { kind: "labour-roster", why: "A workplace of 180. The compact is who lives there and who only works there." },
    { kind: "media-story", why: "The occupation that saved a film lab. Every camera wants the same courtyard." },
    { kind: "land-care", why: "18,500 m² of city lease. The buildings stay if the project stays." }
  ],
  tuggelite: [
    { kind: "building-code", why: "Pellets, compost toilets, triple glass. What a household may change in Sweden’s first eco-village." },
    { kind: "kitchen-table", why: "Five houses, sixteen households. Whose common, whose quiet." },
    { kind: "membership-trial", why: "A flat when one is offered. Not a pioneer share from 1979." },
    { kind: "land-care", why: "A city-edge cluster. The ski track next door is not the village garden." }
  ],
  pinakarri: [
    { kind: "kitchen-table", why: "Common house for equity and rental households together." },
    { kind: "membership-trial", why: "Share or rental when a dwelling opens. Mixed tenure on purpose." },
    { kind: "children-care", why: "About 35 people including children in a suburban cluster. Safeguarding cannot be only a brochure." },
    { kind: "guest-stay", why: "A Hamilton Hill street. Write. Dwellings are homes." }
  ],
  "muir-commons": [
    { kind: "kitchen-table", why: "Monthly communal meals and a common house that is the point of the deed." },
    { kind: "building-code", why: "Cohousing covenants on ordinary California title. Parking on the edge, walking in the middle." },
    { kind: "membership-trial", why: "A house listing is the door. A walk through the orchard is not a viewing with a key." },
    { kind: "children-care", why: "About 35 children of record. The common is a playground as much as a meeting." }
  ],
  urupia: [
    { kind: "labour-roster", why: "Farm, ovens, assemblies. Whoever is there works." },
    { kind: "course-host", why: "Festival delle Terre and camps. Then the masseria is a home again." },
    { kind: "membership-trial", why: "Live, sit the meeting. Not a trullo sale." },
    { kind: "land-care", why: "Phytodepuration, solar, fields. Guests stay off rows they were not asked onto." }
  ],
  "tinkers-bubble": [
    { kind: "volunteer-intern", why: "Trial volunteering through the year. Three days a fortnight if you stay." },
    { kind: "labour-roster", why: "Hay, woodland, orchard, cooking rota. A small household." },
    { kind: "membership-trial", why: "Residents Agreement, no buy-in. Fit, not a deposit." },
    { kind: "land-care", why: "Forty acres, horse-powered founding brief. Guests stay on the path they were given." }
  ],

  hallingelille: [
    { kind: "land-care", why: "Lake, willow treatment, peace forest. The commons are work." },
    { kind: "membership-trial", why: "A plot or a collective place when one opens. A WWOOF week is labour." },
    { kind: "children-care", why: "About 20 children on a 2019 account. Playground and football field in progress." },
    { kind: "guest-stay", why: "Tours and exchanges. Plots are homes." }
  ],
  "red-earth-farms": [
    { kind: "membership-trial", why: "A ground lease when a homestead opens. Consensus. Means-tested access of record." },
    { kind: "land-care", why: "76 acres, seven households. Elbow room on purpose. Stay off a neighbour’s rows." },
    { kind: "kitchen-table", why: "Less enmeshed than Dancing Rabbit by design. The compact is how much you actually share." },
    { kind: "guest-stay", why: "Write. Do not treat the walk from Dancing Rabbit as a tour booking." }
  ]
};

export const livingBatch4Governance: Record<string, Governance> = {
  "laurieston-hall": {
    model: "cooperative",
    modelLabel: "Housing co-operative",
    unique: false,
    summary: "Commune 1972, housing co-op 1987. About twenty people in a Victorian hall. Guest weeks are bookings. They have said they are not recruiting.",
    whoDecides: "Members of Laurieston Hall Housing Co-operative Ltd.",
    bodies: [
      { name: "Housing co-operative", role: "The hall, cottages, and land since 1987." },
      { name: "Guest-week hosts", role: "Booked groups. Not the meeting." }
    ],
    howItRuns: "A guest week is lodging. Membership is a long conversation they are not advertising."
  },
  "ufa-fabrik": {
    model: "hybrid",
    modelLabel: "Self-governing cultural project",
    unique: false,
    summary: "Occupation 1979, city lease, a workplace of 180 and a household of 30 on the same four acres.",
    whoDecides: "The self-governing project. Residents are a small circle inside it.",
    bodies: [
      { name: "International Culture Centre", role: "The public workplace." },
      { name: "Resident household", role: "About 30 people on site." }
    ],
    howItRuns: "Buy a ticket. Apply for work. A spare room is a different, smaller door."
  },
  tuggelite: {
    model: "hoa",
    modelLabel: "Housing association of five houses",
    unique: false,
    summary: "Sweden’s first completed eco-village as ordinary housing tenure with municipal backing for the kit.",
    whoDecides: "Households in the five apartment houses.",
    bodies: [
      { name: "Housing association", role: "Sixteen households." },
      { name: "Karlstad municipality", role: "Historical partner for land and permits." }
    ],
    howItRuns: "A flat when one is offered. The 1970s research group is the origin story, not the landlord."
  },
  pinakarri: {
    model: "cooperative",
    modelLabel: "Mixed-equity cohousing co-op",
    unique: false,
    summary: "Twelve dwellings, a common house, some equity shares, some public rental, one Fremantle street.",
    whoDecides: "Pinakarri Community Inc. and the rental partner for their own dwellings.",
    bodies: [
      { name: "Equity co-op", role: "Bought-in homes." },
      { name: "Public rental co-operative", role: "Affordable rent on the same common." }
    ],
    howItRuns: "A dwelling opens as a share or a rental. The courtyard is shared either way."
  },
  "muir-commons": {
    model: "hoa",
    modelLabel: "Cohousing homeowners association",
    unique: false,
    summary: "26 private houses, equally shared common house, consensus for community decisions. First US new-build cohousing.",
    whoDecides: "House owners in the HOA. Consensus for shared life.",
    bodies: [
      { name: "Homeowners association", role: "26 deeds and the common." },
      { name: "Common house", role: "Meals, meetings, the point of the design." }
    ],
    howItRuns: "Buy a listed house. The orchard walk is not the closing."
  },
  urupia: {
    model: "consensus",
    modelLabel: "Libertarian assemblies",
    unique: false,
    summary: "Open commune, first points 1993, La Petrosa as the farm paper. Whoever is living the masseria sits the meeting.",
    whoDecides: "Assemblies of residents and people staying to work.",
    bodies: [
      { name: "Comune assemblies", role: "Daily life and political line." },
      { name: "La Petrosa co-operative", role: "The farm on paper." }
    ],
    howItRuns: "Write, arrive, work, sit. A festival ticket is not a vote."
  },
  "tinkers-bubble": {
    model: "consensus",
    modelLabel: "Residents Agreement",
    unique: false,
    summary: "Small low-impact household, no buy-in, trial volunteering, permanent planning 2023.",
    whoDecides: "People who have signed the Residents Agreement.",
    bodies: [
      { name: "Residents", role: "The woodland household." },
      { name: "Volunteers on trial", role: "Seasonal labour, not yet the meeting." }
    ],
    howItRuns: "Volunteer first. Membership is fit. The 2023 permission is the paper, not the roster."
  },

  hallingelille: {
    model: "hybrid",
    modelLabel: "Plots, collectives, and commons",
    unique: false,
    summary: "Twenty plots, two collectives, a village association for lake, forest, and willow. LØS-listed.",
    whoDecides: "Plot-holders and collectives in the eco-village meeting.",
    bodies: [
      { name: "Økosamfundet Hallingelille", role: "Commons and the village name." },
      { name: "Plot households", role: "Twenty houses." },
      { name: "Two collectives", role: "Shared houses on the same farm." }
    ],
    howItRuns: "A WWOOF week is work. A plot is a slower conversation."
  },
  "red-earth-farms": {
    model: "consensus",
    modelLabel: "Community land trust and leaseholders",
    unique: false,
    summary: "CLT 2007, land 2008, seven homestead leases, consensus, neighbour to Dancing Rabbit.",
    whoDecides: "Land-trust board and consensus among leaseholders.",
    bodies: [
      { name: "Community land trust", role: "Title, board, bylaws." },
      { name: "Seven households", role: "Ground leases, homestead life." }
    ],
    howItRuns: "Write for a lease when one opens. A walk from Dancing Rabbit is not an application."
  }
};

export const livingBatch4Leaders: Record<string, VillageLeaders> = {
  "laurieston-hall": {
    people: [{ name: "Mike Reid", role: "Founding member; Mix Café memoir of 1972–77" }],
    office: { url: "https://www.lauriestonhall.org.uk/", address: "Laurieston, Castle Douglas, Dumfries and Galloway" }
  },
  "ufa-fabrik": {
    people: [],
    office: { url: "https://www.ufafabrik.de/en/", address: "Viktoriastraße 10–18, 12105 Berlin" }
  },
  tuggelite: {
    people: [],
    office: { url: "https://www.ekoby.org/cs1.html", address: "Tuggelite, Karlstad, Värmland" }
  },
  pinakarri: {
    people: [],
    office: { url: "https://pinakarri.org.au/", address: "Hamilton Hill, Fremantle, Western Australia" }
  },
  "muir-commons": {
    people: [{ name: "Charles Durrett", role: "Architect; The Cohousing Company. Danish cohousing adapted for Davis." }],
    office: { url: "https://muircommons.org/", address: "Davis, California" }
  },
  urupia: {
    people: [{ name: "Agostino Manni", role: "Named as a founder in later Italian accounts of the commune" }],
    office: { url: "https://urupia.wordpress.com/", email: "comune.urupia@gmail.com", address: "Contrada Cistonaro, Francavilla Fontana (BR)" }
  },
  "tinkers-bubble": {
    people: [],
    office: { url: "https://tinkersbubble.org/", address: "Norton-sub-Hamdon, Somerset" }
  },

  hallingelille: {
    people: [],
    office: { url: "https://www.hallingelille.dk/", address: "Near Ringsted, Zealand, Denmark" }
  },
  "red-earth-farms": {
    people: [
      { name: "Kim Scheidt", role: "Named founding member in 2024 reporting" },
      { name: "Aron Heintz", role: "Sold the 76 acres; named on the community history page" }
    ],
    office: { url: "http://redearthfarms.org/", address: "Scotland County, northeast Missouri" }
  }
};

export const livingBatch4Accommodations: Record<string, Accommodations> = {
  "laurieston-hall": {
    visitor: {
      overview: "Guest weeks in the hall by arrangement. lauriestonhall.org.uk. A lived-in house.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Guest weeks in the Victorian hall. Book." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "About twenty people in and around the hall, cottages, and garden.",
      camping: { available: false, types: [], detail: "People live in the house and cottages." },
      rooms: { available: true, types: [], detail: "Co-op dwellings, not private lots." },
      other: { available: false, types: [], detail: "None listed." }
    }
  },
  "ufa-fabrik": {
    visitor: {
      overview: "Theatre, circus, café, bakery. Day visitors. Overnight is not the public product.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "No advertised guesthouse on the pages this atlas used." },
      other: { available: true, types: ["theatre", "circus", "café"], detail: "Buy a ticket. Eat. The residents live on the same lot." }
    },
    resident: {
      overview: "About 30 people live on the 18,500 m² site.",
      camping: { available: false, types: [], detail: "Residents occupy buildings, not a camp." },
      rooms: { available: true, types: [], detail: "A small household inside the cultural centre." },
      other: { available: false, types: [], detail: "None listed." }
    }
  },
  tuggelite: {
    visitor: {
      overview: "Lived-in apartment houses on the Karlstad edge. No advertised visitor beds. No published visitor lodging of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "No guesthouse of record." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "Sixteen households in five apartment houses.",
      camping: { available: false, types: [], detail: "People live in flats." },
      rooms: { available: true, types: [], detail: "Ordinary Swedish apartments in an eco-village cluster." },
      other: { available: false, types: [], detail: "None listed." }
    }
  },
  pinakarri: {
    visitor: {
      overview: "A suburban cohousing street in Hamilton Hill. Write. Dwellings are homes.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "No public guesthouse." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "About 35 people in 12–14 dwellings, mixed equity and rental.",
      camping: { available: false, types: [], detail: "People live in houses." },
      rooms: { available: true, types: [], detail: "Co-op and rental dwellings plus a common house." },
      other: { available: false, types: [], detail: "None listed." }
    }
  },
  "muir-commons": {
    visitor: {
      overview: "A lived-in Davis cohousing street. No public tour or guesthouse of record.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "Houses are private." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "26 privately owned houses and a shared common house.",
      camping: { available: false, types: [], detail: "People live in houses." },
      rooms: { available: true, types: [], detail: "808–1,381 sq ft homes plus the 3,668 sq ft common house." },
      other: { available: true, types: ["workshop"], detail: "900 sq ft woodworking and automotive shop." }
    }
  },
  urupia: {
    visitor: {
      overview: "Write for camps, festival, harvest stays. comune.urupia@gmail.com. The masseria is a home.",
      camping: { available: true, types: ["camp"], detail: "Camps and gatherings advertised through the commune’s pages. Arrange." },
      rooms: { available: true, types: [], detail: "Simple stays by reservation. Confirm by email." },
      other: { available: true, types: ["festival"], detail: "Festival delle Terre is the public week." }
    },
    resident: {
      overview: "A small residential core plus people who stay to work the farm.",
      camping: { available: false, types: [], detail: "Long-term people live in dwellings." },
      rooms: { available: true, types: [], detail: "Masseria dwellings, not private lots." },
      other: { available: false, types: [], detail: "None listed." }
    }
  },
  "tinkers-bubble": {
    visitor: {
      overview: "Volunteer stays through the year. tinkersbubble.org. Write first. Forty acres of woodland.",
      camping: { available: true, types: ["low-impact"], detail: "Volunteer living is simple and off-grid. Not a public campsite." },
      rooms: { available: false, types: [], detail: "No guesthouse product. Stays are work stays." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "A small household under a Residents Agreement. No buy-in.",
      camping: { available: true, types: ["low-impact structures"], detail: "Woodland living: the founding aesthetic is not a subdivision." },
      rooms: { available: true, types: [], detail: "Simple dwellings on the 40 acres." },
      other: { available: false, types: [], detail: "None listed." }
    }
  },

  hallingelille: {
    visitor: {
      overview: "Tours and WWOOF stays have been advertised. Plots are homes.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "WWOOF and exchange stays by arrangement." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "Twenty plots, two collectives, a community house.",
      camping: { available: false, types: [], detail: "People live in houses." },
      rooms: { available: true, types: [], detail: "Household plots and collective houses." },
      other: { available: false, types: [], detail: "None listed." }
    }
  },
  "red-earth-farms": {
    visitor: {
      overview: "Write. Seven homesteads. Not a tour product. Do not arrive via Dancing Rabbit unannounced.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "No guesthouse." },
      other: { available: false, types: [], detail: "None listed." }
    },
    resident: {
      overview: "Seven households on ground leases from the land trust.",
      camping: { available: false, types: [], detail: "People live in homesteads." },
      rooms: { available: true, types: [], detail: "Homestead dwellings on 76 acres." },
      other: { available: false, types: [], detail: "None listed." }
    }
  }
};
