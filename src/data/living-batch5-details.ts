import type { LegalEntity } from "./legal-entities";
import type { LandOwnership } from "./land-ownership";
import type { CommunityFunding } from "./funding";
import type { VisitJoin } from "./visit-join";
import type { DailyLife } from "./daily-life";
import type { InformalAgreement } from "./informal-agreements";
import type { Governance } from "./governance";
import type { VillageLeaders } from "./leaders";
import type { Accommodations } from "./accommodations";

export const livingBatch5LegalEntities: Record<string, LegalEntity[]> = {
  "la-borie-noble": [
    { name: "Community of the Ark (Communauté de l’Arche)", kind: "Spiritual community", role: "Gandhian vegetarian community founded 1948; hamlet from 1963.", status: "current", layer: "membership", year: "1948", forms: ["Religious society"] },
    { name: "La Borie Noble land", kind: "Community land", role: "About 1,200 acres bought 1963. Houses occupied, not sold as lots.", status: "current", layer: "land", year: "1963", forms: ["Property trust"] },
    { name: "Association of Friends of Lanza del Vasto", kind: "Cultural association", role: "Headquarters at the hamlet. Writings, friends, the public paper.", status: "current", layer: "education", forms: ["Registered association"] },
  ],
  "tuntable-falls": [
    { name: "Co-ordination Co-operative", kind: "Housing cooperative", role: "Holds about 1,700 acres in common. Tuntable Falls Community is part of it. 1973.", status: "current", layer: "membership", year: "1973", forms: ["Housing cooperative"] },
    { name: "House-site occupancy", kind: "Occupancy rights on common land", role: "No subdivision. The co-op recognises house-sites and gardens.", status: "current", layer: "land", forms: ["Housing cooperative"] },
  ],
  schweibenalp: [
    { name: "Verein Zentrum der Einheit Schweibenalp", kind: "Registered association", role: "The living-and-working community and seminar centre, 1982–present.", status: "current", layer: "membership", year: "1982", forms: ["Registered association"] },
    { name: "Stiftung Schweibenalp", kind: "Foundation", role: "On the public record from the 1982 alpine purchase.", status: "current", layer: "land", year: "1982", forms: ["Nonprofit foundation"] },
    { name: "Alpine Permaculture Schweibenalp", kind: "Garden project", role: "Terraces from 2011 on the same slope.", status: "current", layer: "enterprise", year: "2011", forms: ["Registered association"] },
  ],
  matavenero: [
    { name: "Matavenero residents", kind: "Unincorporated community association", role: "Reoccupied village, 1989–present. Meeting in the geodesic hall.", status: "current", layer: "membership", year: "1989", forms: ["Unincorporated community"] },
    { name: "Abandoned village site, El Bierzo", kind: "Reoccupied rural settlement", role: "No published single title this atlas trusts. Arrival is on foot.", status: "current", layer: "land", forms: ["Unincorporated community"] },
  ],
  jahnishausen: [
    { name: "Gut Jahnishausen eG", kind: "Registered cooperative", role: "Members are co-owners of the Rittergut. Share on admission.", status: "current", layer: "membership", year: "2001", forms: ["Housing cooperative"] },
    { name: "Verein for culture and Schloss Jahnishausen", kind: "Registered association", role: "Culture on the Hof and the castle.", status: "current", layer: "education", forms: ["Registered association"] },
    { name: "Rittergut Jahnishausen", kind: "Cooperative land", role: "Manor, outbuildings, gardens. Occupancy through the eG.", status: "current", layer: "land", year: "2001", forms: ["Housing cooperative"] },
  ],
  biovilla: [
    { name: "BVLL – Cooperativa para o Desenvolvimento Sustentável CRL", kind: "Portuguese cooperative", role: "Sustainability co-op, 2010. Eleven members of record.", status: "current", layer: "membership", year: "2010", forms: ["Housing cooperative"] },
    { name: "Herdade de Pinhal Basto", kind: "Cooperative land", role: "55 ha in Arrábida Natural Park. Showground, lodging, agroforest.", status: "current", layer: "land", forms: ["Property trust"] },
  ],
  "karise-permatopia": [
    { name: "KP-Ejer", kind: "Owner-occupied housing association", role: "Freehold houses inside the village.", status: "current", layer: "membership", year: "2018", forms: ["Freehold title"] },
    { name: "KP-Andel", kind: "Housing cooperative", role: "Co-op houses. Published 43% shared mortgage, 57% share.", status: "current", layer: "membership", year: "2018", forms: ["Housing cooperative"] },
    { name: "KP-Almen", kind: "Non-profit public housing", role: "Almen dwellings so the village is not only buyers.", status: "current", layer: "membership", year: "2018", forms: ["Housing cooperative"] },
    { name: "KP-GRUND", kind: "Landowner association", role: "Green areas of the urban zone.", status: "current", layer: "land", forms: ["Property trust"] },
    { name: "Karise Permatopia a.m.b.a. (KP-AMBA)", kind: "Limited liability cooperative company", role: "Farm, utilities, agriculture. 25,000 DKK contribution per resident.", status: "current", layer: "enterprise", year: "2018", forms: ["Housing cooperative"] },
  ],
};

export const livingBatch5Land: Record<string, LandOwnership> = {
  "la-borie-noble": {
    owner: "Community of the Ark",
    complexity: "simple",
    tenure: "Community land",
    howHeld: "About 1,200 acres bought in 1963. The hamlet is occupied. There is no published map of private lots.",
    narrative: "A ruined hamlet that became a house because Companions stayed. The mountain is still the fence.",
    divided: [],
  },
  "tuntable-falls": {
    owner: "Co-ordination Co-operative shareholders",
    complexity: "simple",
    tenure: "Common land, house-site occupancy",
    howHeld: "About 1,700 acres in common. No subdivision. House-sites and gardens recognised by the co-op, not as freehold lots.",
    narrative: "Forty people put in $200 so the valley would not be carved into lots. Fifty years later it still is not.",
    divided: [],
  },
  schweibenalp: {
    owner: "Stiftung / Verein Zentrum der Einheit Schweibenalp",
    complexity: "simple",
    tenure: "Association and foundation land",
    howHeld: "An alpine centre above Brienz. Residents occupy; guests book. The slope is not sold as chalets.",
    narrative: "A 1982 purchase that had to stay a household and a seminar house on the same path.",
    divided: [],
  },
  matavenero: {
    owner: "Reoccupied village, no single landlord of record",
    complexity: "simple",
    tenure: "Occupied hamlet",
    howHeld: "Self-built houses on an emptied village site. Arrival on foot. Confirm current occupation with residents, not a land office.",
    narrative: "The name was already on the mountain. The 1989 work was to live there again.",
    divided: [],
  },
  jahnishausen: {
    owner: "Gut Jahnishausen eG",
    complexity: "simple",
    tenure: "Cooperative manor",
    howHeld: "Rittergut, outbuildings, gardens. A share in the eG is the door. The castle culture sits in a Verein.",
    narrative: "Seven women bought a wreck. The roofs stand because fifty people still eat under them.",
    divided: [],
  },
  biovilla: {
    owner: "BVLL cooperative",
    complexity: "simple",
    tenure: "Cooperative herdade",
    howHeld: "55 ha in Arrábida Natural Park. Lodging, agroforest, education. Members hold the CRL, not house lots.",
    narrative: "A demonstration farm that has to take guests so the regeneration has a till.",
    divided: [],
  },
  "karise-permatopia": {
    owner: "Three housing associations plus KP-GRUND and KP-AMBA",
    complexity: "split",
    tenure: "Mixed owner / co-op / public housing on common green and farm",
    howHeld: "90 houses in three tenures. Greens in KP-GRUND. Farm and utilities in KP-amba. 29.2 ha.",
    narrative: "The founding bet was that a permaculture village could hold buyers, co-op members, and public-housing tenants on the same path.",
    divided: [
      { label: "KP-Ejer", holder: "Owner-occupiers", share: "Part of the 90 houses", what: "Freehold inside the village" },
      { label: "KP-Andel", holder: "Co-op members", share: "Part of the 90 houses", what: "Andel with a published mortgage/share split" },
      { label: "KP-Almen", holder: "Public-housing tenants", share: "Part of the 90 houses", what: "Non-profit almen dwellings" },
      { label: "Farm and greens", holder: "KP-AMBA and KP-GRUND", share: "24.5 ha rural plus urban greens", what: "The common that is not a house" },
    ],
  },
};

export const livingBatch5Funding: Record<string, CommunityFunding> = {
  "la-borie-noble": {
    overview: "A 1963 land purchase, then decades of hamlet work, simple hospitality, and the associations around Lanza del Vasto.",
    grantsHeadline: "No major public grant isolated",
    privateHeadline: "1963 land + hamlet work",
    grants: [],
    private: [
      { source: "1963 land purchase", amount: "About 1,200 acres", year: "1963", certainty: "documented", kind: "member-equity", note: "Companions bought mountain land and rebuilt the hamlet." },
      { source: "Hamlet work and hospitality", amount: "Ongoing", certainty: "estimated", kind: "other", note: "Confirm current visitor contributions before you go." },
    ],
  },
  "tuntable-falls": {
    overview: "Forty $200 shares in 1973, then a large common holding and ordinary rural livelihoods.",
    grantsHeadline: "No major public grant isolated",
    privateHeadline: "$200 founding shares",
    grants: [],
    private: [
      { source: "Founding shares", amount: "$200 × 40 pioneers", year: "1973", certainty: "documented", kind: "member-equity", note: "Australian Geographic / co-op history." },
      { source: "Current shareholding", amount: "About 280 shareholders", certainty: "documented", kind: "member-equity", note: "coco.org.au." },
    ],
  },
  schweibenalp: {
    overview: "1982 alpine purchase, then a seminar house, donations, and permaculture as a later garden intensification.",
    grantsHeadline: "Donations / foundation",
    privateHeadline: "Retreats and courses",
    grants: [
      { source: "Stiftung Schweibenalp and donations", amount: "Ongoing", certainty: "estimated", kind: "donation", note: "The centre has said it exists through many people’s engagement for 40 years." },
    ],
    private: [
      { source: "Seminar and retreat income", amount: "Ongoing", certainty: "estimated", kind: "courses", note: "Guests are the till." },
    ],
  },
  matavenero: {
    overview: "Self-built houses, gardens, a bar, whatever cash a walking guest leaves. No lot sales.",
    grantsHeadline: "No major public grant found",
    privateHeadline: "Household work",
    grants: [],
    private: [
      { source: "Resident labour and small crafts", amount: "Ongoing", certainty: "estimated", kind: "other", note: "No published accounts. The walk is the filter." },
    ],
  },
  jahnishausen: {
    overview: "2001 manor purchase by seven women, then cooperative shares, a household kitchen, a Solawi on site.",
    grantsHeadline: "No major public grant isolated",
    privateHeadline: "eG shares + household",
    grants: [],
    private: [
      { source: "2001 Rittergut purchase", amount: "Seven founders", year: "2001", certainty: "documented", kind: "member-equity", note: "ltgj.de / Karin-im-Basecamp account of the founding women." },
      { source: "Cooperative shares", amount: "Paid on admission", certainty: "documented", kind: "member-equity", note: "Confirm current amount on ltgj.de." },
    ],
  },
  biovilla: {
    overview: "A 2010 cooperative, nature tourism, courses, organic production, a Goparity expansion of record.",
    grantsHeadline: "Crowdfunding / project finance",
    privateHeadline: "Tourism and courses",
    grants: [
      { source: "Goparity ‘Biovilla is growing’", amount: "Project finance of record", certainty: "documented", kind: "loan", note: "goparity.com/project/biovilla-is-growing-175." },
    ],
    private: [
      { source: "Nature tourism and lodging", amount: "Ongoing", certainty: "estimated", kind: "business", note: "Guest rooms, restaurant, workshops. biovilla.org." },
    ],
  },
  "karise-permatopia": {
    overview: "Ninety houses in three tenures, a 25,000 DKK production share, a farm and a 225 kW turbine.",
    grantsHeadline: "Danish housing / utilities mix",
    privateHeadline: "House tenure + KP-amba share",
    grants: [],
    private: [
      { source: "KP-amba resident contribution", amount: "25,000 DKK, returned on leaving", certainty: "documented", kind: "member-equity", note: "Liability limited to that capital." },
      { source: "Housing costs by tenure", amount: "Ejer / Andel / Almen", certainty: "documented", kind: "other", note: "Three associations. Confirm current prices with the relevant board." },
    ],
  },
};

export const livingBatch5VisitJoin: Record<string, VisitJoin> = {
  "la-borie-noble": {
    visit: 3,
    join: 2,
    visitProcess: "Roqueredonde, Hérault. Write through the associations. A lived hamlet in the hills. Simple hospitality, not a hotel.",
    joinProcess: "Companions take a spiritual life. A meal is not a vow. Confirm current path before you treat a 1979 household as an open door.",
  },
  "tuntable-falls": {
    visit: 2,
    join: 2,
    visitProcess: "Tuntable Valley, Nimbin. A private multiple occupancy at the end of a rainforest road. Not a public resort. The waterfall is on the land; the houses are homes.",
    joinProcess: "Shareholding in the Co-ordination Co-operative, then a house-site the meeting recognises. Confirm current process on coco.org.au. There is no lot to buy.",
  },
  schweibenalp: {
    visit: 5,
    join: 2,
    visitProcess: "Brienz, 1,100 m. Book a retreat or a course. The seminar house is the public door.",
    joinProcess: "A small year-round household. A retreat week is not an application. Ask the Verein if you mean to stay.",
  },
  matavenero: {
    visit: 3,
    join: 2,
    visitProcess: "El Bierzo. No road. A long walk. You are a guest if someone feeds you. Do not treat a National Geographic photograph as a trailhead sign.",
    joinProcess: "Relationship, time, the meeting in the hall. There is no share register. Confirm current welcome before you set out.",
  },
  jahnishausen: {
    visit: 3,
    join: 3,
    visitProcess: "Riesa OT Jahnishausen. ltgj.de. Info weekends and open Saturdays. A lived Rittergut.",
    joinProcess: "A share in Gut Jahnishausen eG after visiting. Consensus household. Confirm current openings; they have been seeking members.",
  },
  biovilla: {
    visit: 5,
    join: 2,
    visitProcess: "Palmela, Arrábida. biovilla.org. Rooms, restaurant, workshops. A regenerative herdade that takes guests on purpose.",
    joinProcess: "Cooperative membership is a small body of record (eleven). A night in a guest room is not a share.",
  },
  "karise-permatopia": {
    visit: 3,
    join: 3,
    visitProcess: "Karise, Faxe. An inhabited village of 90 houses. Volunteers in season. Write. These are homes.",
    joinProcess: "Through KP-Ejer, KP-Andel, or KP-Almen, plus the 25,000 DKK KP-amba contribution. Confirm which tenure has a vacancy.",
  },
};

export const livingBatch5DailyLife: Record<string, DailyLife> = {
  "la-borie-noble": {
    typical: [
      { title: "Hamlet work", detail: "Stone, garden, wood, a vegetarian table." },
      { title: "Quiet practice", detail: "Gandhian non-violence as the week, not a poster." },
      { title: "Guests who write first", detail: "Simple hospitality. Companions still have a Tuesday." },
    ],
    unique: { title: "A 1948 vow on 1963 dirt", detail: "The Ark is older than the hamlet. The hamlet is why the vow still has a kitchen." },
  },
  "tuntable-falls": {
    typical: [
      { title: "House-sites in common bush", detail: "No lots. Gardens and occupancy the meeting already knows." },
      { title: "Valley road that ends", detail: "Nightcap forest. A school of record in the community. Floods and fire are part of the week." },
      { title: "Shareholders who do not all live there", detail: "About 110 non-resident shares. The resident kitchen is smaller than the register." },
    ],
    unique: { title: "Australia’s large common", detail: "1,700 acres that still have not been subdivided. That is the founding sentence, fifty years on." },
  },
  schweibenalp: {
    typical: [
      { title: "Seminar weeks", detail: "Guests in the house. Residents cook and keep the slope." },
      { title: "Alpine gardens", detail: "Permaculture terraces at 1,100 m. Hundreds of vegetable kinds in published visits." },
      { title: "A small winter household", detail: "25–30 people when the courses thin." },
    ],
    unique: { title: "A centre that had to stay a home", detail: "The 1982 purchase only works if someone still lives there when the last guest leaves. Alpine Permaculture Schweibenalp has built terraces since 2011 at 1,100 m above Lake Brienz." },
  },
  matavenero: {
    typical: [
      { title: "Walk in, walk out", detail: "No road. Supplies on a back." },
      { title: "Gardens and a hall", detail: "Geodesic meeting place, sauna, bakery, bar in published visits." },
      { title: "Self-built houses", detail: "Third generation of children in some accounts. Confirm before you quote a number." },
    ],
    unique: { title: "A village that returned", detail: "Five German friends, after Rainbow gatherings, reoccupied an emptied Bierzo hamlet in 1989; there is still no road, a geodesic meeting hall, and a three-hour walk in." },
  },
  jahnishausen: {
    typical: [
      { title: "Manor kitchen", detail: "Vegetarian whole-food, garden produce, breakfast and lunch as offers for the whole house." },
      { title: "Plenum and community time", detail: "Weekly gathering, bi-weekly practical meeting, consensus on the large things." },
      { title: "School next door", detail: "Freies Lernen in the old village school. A two-minute walk." },
    ],
    unique: { title: "Seven women and a wrecked roof", detail: "The 2001 purchase is still the origin story. The eG is the paper that kept the roofs from going back to ruin." },
  },
  biovilla: {
    typical: [
      { title: "Guests and a terrace", detail: "Rooms, restaurant, workshops. The till is tourism that has to match a park." },
      { title: "Agroforest and horta", detail: "55 ha of demonstration. Staff and members share the work." },
      { title: "A small member table", detail: "Eleven people on the CRL. Employees beside them." },
    ],
    unique: { title: "A co-op that teaches by taking bookings", detail: "The regeneration is the product. The guest is why someone can be paid to keep doing it." },
  },
  "karise-permatopia": {
    typical: [
      { title: "Terraced houses, three tenures", detail: "Owner, co-op, public housing on the same path." },
      { title: "Farm and turbine", detail: "7 ha organic. 225 kW wind. Geothermal heat." },
      { title: "KP-amba work", detail: "The production company is the farm and the pipes. 25,000 DKK is the common chip." },
    ],
    unique: { title: "Ninety houses, one farm, three doors", detail: "The Danish trick: a permaculture village that is also ordinary housing associations, including almen." },
  },
};

export const livingBatch5Informal: Record<string, InformalAgreement[]> = {
  "la-borie-noble": [
    { kind: "quiet-practice", why: "Gandhian, vegetarian, non-violence as the week. Guests eat; Companions live." },
    { kind: "guest-stay", why: "Simple hospitality in a hamlet. Write. The houses are homes." },
    { kind: "labour-roster", why: "Stone, garden, wood. Someone still has to do the work that looks like a postcard." },
    { kind: "membership-trial", why: "A spiritual community. A meal is not a vow." },
  ],
  "tuntable-falls": [
    { kind: "building-code", why: "House-sites on common land. What a shareholder may build is a co-op question, not a council lote." },
    { kind: "land-care", why: "Rainforest edge, floods, fire. Guests stay off gardens they were not asked onto." },
    { kind: "membership-trial", why: "Share first, house-site later. A waterfall is not a viewing." },
    { kind: "children-care", why: "A community school of record. Resident children who are shareholders. Safeguarding cannot be only a 1973 story." },
  ],
  schweibenalp: [
    { kind: "guest-stay", why: "A boundaried retreat. Guest rooms and a resident household on the same slope." },
    { kind: "course-host", why: "The seminar timetable is the till. Residents still have a winter." },
    { kind: "land-care", why: "Alpine terraces. Guests stay on the paths they were given." },
    { kind: "quiet-practice", why: "A centre of unity. Confirm current spiritual form on the site; do not invent a guru." },
  ],
  matavenero: [
    { kind: "guest-stay", why: "A walk-in village. You are hosted, or you are a problem. There is no reception desk." },
    { kind: "land-care", why: "Steep gardens, no road. Pack out what you packed in." },
    { kind: "membership-trial", why: "The hall meeting. Time. No share register." },
    { kind: "building-code", why: "Self-built houses on an old village footprint. What a new wall may do next to an older one." },
  ],
  jahnishausen: [
    { kind: "kitchen-table", why: "Shared vegetarian meals as an offer, not a restaurant. Whose child, who cooks, who is approaching." },
    { kind: "membership-trial", why: "Info weekends, then a share. An open Saturday is not admission." },
    { kind: "children-care", why: "A free school next door and teenagers on the estate. Safeguarding is part of the week." },
    { kind: "labour-roster", why: "Garden, manor, the roofs. The eG is the paper; the roster is the Tuesday." },
  ],
  biovilla: [
    { kind: "guest-stay", why: "Lodging and a restaurant on a working herdade. Staff housing is not a guest room." },
    { kind: "course-host", why: "Workshops and education for sustainability. A module is a booking." },
    { kind: "land-care", why: "Arrábida park rules plus a 55 ha demonstration. Guests stay on the paths." },
    { kind: "membership-trial", why: "Eleven members. A terrace coffee is not a CRL share." },
  ],
  "karise-permatopia": [
    { kind: "building-code", why: "Ninety houses, three tenures, one village look. What a household may do to a facade is an association question." },
    { kind: "land-care", why: "Organic farm and KP-GRUND greens. Guests stay off the rows." },
    { kind: "membership-trial", why: "Ejer, Andel, or Almen, plus the amba chip. Volunteers in season are not a fourth tenure." },
    { kind: "kitchen-table", why: "Common farm, private kitchens. Whose child in the path, whose hen." },
  ],
};

export const livingBatch5Governance: Record<string, Governance> = {
  "la-borie-noble": {
    model: "spiritual",
    modelLabel: "Spiritual community",
    unique: false,
    summary: "Companions of the Ark on hamlet land. Associations around Lanza’s work sit at the same place. Guests are guests.",
    whoDecides: "The residential spiritual community, with associations for friends and culture.",
    bodies: [
      { name: "Community of the Ark", role: "The lived hamlet." },
      { name: "Association of Friends of Lanza del Vasto", role: "Headquarters at La Borie Noble." },
    ],
    howItRuns: "Write. Eat if invited. A Companion’s life is a later conversation.",
  },
  "tuntable-falls": {
    model: "cooperative",
    modelLabel: "Multiple-occupancy cooperative",
    unique: false,
    summary: "Co-ordination Co-operative holds the dirt in common. Shareholders, resident and not. House-sites without lots.",
    whoDecides: "Shareholders of the co-op.",
    bodies: [
      { name: "Co-ordination Co-operative", role: "Title and the meeting." },
      { name: "Resident households", role: "The valley week." },
    ],
    howItRuns: "A share is the paper. A house-site is a later recognition. The waterfall is not a sales office.",
  },
  schweibenalp: {
    model: "board",
    modelLabel: "Association and household",
    unique: false,
    summary: "Verein and foundation from 1982. Seminar business on the same slope as a small resident community.",
    whoDecides: "The association, with a resident household that actually lives there.",
    bodies: [
      { name: "Verein Zentrum der Einheit", role: "Community and seminar centre." },
      { name: "Stiftung Schweibenalp", role: "The 1982 alpine holding." },
    ],
    howItRuns: "Book a course. Ask separately if you mean to live there.",
  },
  matavenero: {
    model: "assembly",
    modelLabel: "Village meeting",
    unique: false,
    summary: "No co-op share register. A geodesic hall. People who walked in and stayed.",
    whoDecides: "Residents in the hall.",
    bodies: [
      { name: "Village meeting", role: "The hall." },
      { name: "Households", role: "Self-built houses." },
    ],
    howItRuns: "Walk in only if you have a reason to be hosted. There is no form.",
  },
  jahnishausen: {
    model: "cooperative",
    modelLabel: "Registered cooperative, consensus on the large things",
    unique: false,
    summary: "Gut Jahnishausen eG, a Verein for culture, a bi-weekly plenum, weekly community time.",
    whoDecides: "Cooperative members. Major decisions by consensus.",
    bodies: [
      { name: "Gut Jahnishausen eG", role: "Co-owners of the Rittergut." },
      { name: "Plenum", role: "Practical matters, planning." },
      { name: "Verein", role: "Culture and the Schloss." },
    ],
    howItRuns: "Info weekend, then a share if there is room. An open Saturday is a look.",
  },
  biovilla: {
    model: "cooperative",
    modelLabel: "Sustainability cooperative",
    unique: false,
    summary: "A small CRL, staff, a herdade that takes guests. Founders still on the public page.",
    whoDecides: "Cooperative members.",
    bodies: [
      { name: "BVLL CRL", role: "Eleven members of record." },
      { name: "Staff", role: "Eight employees of record beside the members." },
    ],
    howItRuns: "Book a stay or a workshop. Membership is a different, smaller door.",
  },
  "karise-permatopia": {
    model: "hybrid",
    modelLabel: "Three associations plus a production company",
    unique: false,
    summary: "KP-Ejer, KP-Andel, KP-Almen, KP-GRUND, KP-amba. Ordinary Danish association statutes on a permaculture farm.",
    whoDecides: "Each housing association for its houses; KP-amba general meetings for farm and utilities.",
    bodies: [
      { name: "Housing associations", role: "Ejer, Andel, Almen boards." },
      { name: "KP-amba", role: "Farm, utilities, 25,000 DKK capital." },
      { name: "KP-GRUND", role: "The greens." },
    ],
    howItRuns: "Ask which tenure has a vacancy. A volunteer season is not a fourth association.",
  },
};

export const livingBatch5Leaders: Record<string, VillageLeaders> = {
  "la-borie-noble": {
    people: [{ name: "Lanza del Vasto", role: "Founder of the Community of the Ark, 1948 (historical)" }],
    office: { url: "https://www.lanzadelvasto.com/en/", address: "La Borie Noble, 34650 Roqueredonde, France" },
  },
  "tuntable-falls": {
    people: [{ name: "Megan James", role: "Named as a founding member in ABC reporting" }],
    office: { url: "https://coco.org.au/coordination-cooperative/about/", address: "Tuntable Valley, Nimbin, NSW" },
  },
  schweibenalp: {
    people: [],
    office: { url: "https://schweibenalp.ch/", address: "Zentrum der Einheit Schweibenalp, 3855 Brienz, Switzerland" },
  },
  matavenero: {
    people: [{ name: "Uli", role: "Named as a 1989 founder in National Geographic’s 2015 visit" }],
    office: { url: "http://www.matavenero.org/", address: "Matavenero, Torre del Bierzo, León" },
  },
  jahnishausen: {
    people: [],
    office: { url: "https://ltgj.de/", address: "Jahnatalstraße 4a, 01594 Riesa OT Jahnishausen" },
  },
  biovilla: {
    people: [
      { name: "Filipe Moreira Alves", role: "Co-founder and president of record" },
      { name: "Bárbara Leão de Carvalho", role: "Co-founder named in 2013 reporting" },
    ],
    office: { url: "https://biovilla.org/", address: "Herdade de Pinhal Basto, Vale de Barris, Palmela" },
  },
  "karise-permatopia": {
    people: [],
    office: { url: "https://permatopia.dk/english/", address: "Karise, Faxe Municipality, Denmark" },
  },
};

export const livingBatch5Accommodations: Record<string, Accommodations> = {
  "la-borie-noble": {
    visitor: {
      overview: "Simple hospitality by arrangement. Write. Not a hotel.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Hamlet rooms if invited." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Companions in the hamlet houses.",
      camping: { available: false, types: [], detail: "People live in stone houses." },
      rooms: { available: true, types: [], detail: "Community dwellings, not lots." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "tuntable-falls": {
    visitor: {
      overview: "A private community. Not a public resort. Confirm any guest stay with residents; do not arrive as a tourist of the waterfall only.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "No hotel. House-sites are homes." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "House-sites on common land. About 170 resident people of record.",
      camping: { available: false, types: [], detail: "People live in houses." },
      rooms: { available: true, types: [], detail: "Occupancy recognised by the co-op, not freehold lots." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  schweibenalp: {
    visitor: {
      overview: "Seminar house and retreat beds. Book.",
      camping: { available: false, types: [], detail: "Confirm current types on the site; the public offer is the house." },
      rooms: { available: true, types: [], detail: "Retreat rooms. Meals for staying guests in published descriptions." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A year-round household of about 25–30.",
      camping: { available: false, types: [], detail: "Residents live in the centre." },
      rooms: { available: true, types: [], detail: "Staff and community rooms, not guest bookings." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  matavenero: {
    visitor: {
      overview: "No reception. A walk. Sleep if someone puts you up. Confirm before you go.",
      camping: { available: true, types: ["informal / hosted"], detail: "Only with residents’ yes. Pack out." },
      rooms: { available: false, types: [], detail: "No guesthouse of record." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Self-built houses. About 60 people in 2010s accounts.",
      camping: { available: true, types: ["self-built / informal"], detail: "The village is the camp that became houses." },
      rooms: { available: true, types: [], detail: "Household dwellings." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  jahnishausen: {
    visitor: {
      overview: "Info weekends and open Saturdays. ltgj.de. A lived manor, not a hotel.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Guest rooms by arrangement for people approaching the community." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "About 50 people in the Rittergut buildings.",
      camping: { available: false, types: [], detail: "People live in the estate buildings." },
      rooms: { available: true, types: [], detail: "Cooperative dwellings." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  biovilla: {
    visitor: {
      overview: "Guest rooms, restaurant, workshops. biovilla.org and lodging listings.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "A handful of guest rooms on the herdade. Book." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A small member and staff household on the 55 ha.",
      camping: { available: false, types: [], detail: "Members and staff live in working housing, not guest rooms." },
      rooms: { available: true, types: [], detail: "Co-op and staff housing." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "karise-permatopia": {
    visitor: {
      overview: "An inhabited village. Volunteers in season. Write. Houses are homes.",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: true, types: [], detail: "Volunteer stays by arrangement. Not a hotel of 90 rooms." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Ninety terraced houses in three tenures.",
      camping: { available: false, types: [], detail: "People live in the houses." },
      rooms: { available: true, types: [], detail: "Ejer, Andel, or Almen dwellings." },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
};
