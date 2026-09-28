import type { LegalEntity } from "./legal-entities";
import type { LandOwnership } from "./land-ownership";
import type { CommunityFunding } from "./funding";
import type { VisitJoin } from "./visit-join";
import type { DailyLife } from "./daily-life";
import type { InformalAgreement } from "./informal-agreements";
import type { Governance } from "./governance";
import type { VillageLeaders } from "./leaders";
import type { Accommodations } from "./accommodations";

export const livingBatch2LegalEntities: Record<string, LegalEntity[]> = {
 hjortshoj: [
  {
   name: "Andelssamfundet i Hjortshøj",
   kind: "Danish cooperative village",
   role: "Umbrella cooperative of the eight housing groups, the farm, and common work.",
   status: "current",
   layer: "membership",
   year: "1986 vision; 1992 first move-in",
   forms: ["Housing cooperative", "Membership association"],
  },
  {
   name: "Housing groups (mixed tenure)",
   kind: "Danish housing cooperative",
   role: "Each group chose its form: private plots, cooperatives, rental. Three private-owner groups are recorded in village accounts.",
   status: "current",
   layer: "land",
   forms: ["Housing cooperative", "Freehold title"],
  },
  {
   name: "20 ha farm leased from Aarhus Municipality",
   kind: "Municipal lease",
   role: "Grain, fodder, fruit, vegetables, a little livestock. 1.2 ha market garden worked by about 100 families.",
   status: "current",
   layer: "land",
   forms: ["State land"],
  },
 ],
 "neot-semadar": [
  {
   name: "Kibbutz Neot Semadar",
   kind: "Israeli cooperative kibbutz",
   role: "The settlement is the legal community. Members have no private house title. Homes rotate about every seven years.",
   status: "current",
   layer: "membership",
   year: "1989",
   forms: ["Kibbutz"],
  },
  {
   name: "Israel Lands Authority ground at Shizafon",
   kind: "National land",
   role: "Classic kibbutz tenure. Occupancy, not a Negev lot sale.",
   status: "current",
   layer: "land",
   forms: ["State land"],
  },
 ],
 "eva-lanxmeer": [
  {
   name: "Bewonersvereniging EVA-Lanxmeer",
   kind: "Dutch residents’ association",
   role: "Every resident is a member. Manages outdoor space. Set up Thermo Bello.",
   status: "current",
   layer: "membership",
   year: "1990s",
   forms: ["Membership association"],
  },
  {
   name: "Municipality of Culemborg",
   kind: "Dutch municipality",
   role: "Bought the land on a drinking-water field and pre-financed the neighbourhood. Partner from the start.",
   status: "current",
   layer: "land",
   year: "1990s",
   forms: ["State land"],
  },
  {
   name: "House owners",
   kind: "Dutch freehold",
   role: "About 240 ordinary house titles. You buy a dwelling. You also join the association.",
   status: "current",
   layer: "land",
   forms: ["Freehold title"],
  },
  {
   name: "Thermo Bello",
   kind: "Local energy company",
   role: "Resident-founded heat company for the district.",
   status: "current",
   layer: "enterprise",
   forms: ["Limited company"],
  },
 ],
 earthsong: [
  {
   name: "Earthsong Body Corporate",
   kind: "New Zealand body corporate",
   role: "Unit Titles vehicle for 32 owners. Shared path, common house, laundry, guest rooms, gardens.",
   status: "current",
   layer: "membership",
   forms: ["Body corporate"],
  },
  {
   name: "32 unit owners",
   kind: "New Zealand unit title",
   role: "Self-contained homes. Sale is the door. Body-corporate rules bind alterations.",
   status: "current",
   layer: "land",
   year: "2000–2008",
   forms: ["Freehold title"],
  },
  {
   name: "Cohousing New Zealand Ltd",
   kind: "New Zealand non-profit company",
   role: "Development vehicle the future residents formed in the 1990s.",
   status: "historical",
   layer: "enterprise",
   year: "1995",
   forms: ["Limited company"],
  },
 ],
 munksoegaard: [
  {
   name: "Five dwelling groups of 20 row houses",
   kind: "Danish mixed tenure",
   role: "One freehold group, one cooperative association, three rented from Roskilde Building Association (youth, seniors, open).",
   status: "current",
   layer: "land",
   year: "2000",
   forms: ["Housing cooperative", "Freehold title"],
  },
  {
   name: "Roskilde Building Association",
   kind: "Danish housing association",
   role: "Landlord of three groups. Tenants still control who moves in.",
   status: "current",
   layer: "land",
   forms: ["Housing cooperative"],
  },
 ],
 hockerton: [
  {
   name: "Hockerton Housing Project co-operative",
   kind: "UK not-for-profit co-operative",
   role: "Runs the site and the education business. Each home: 300 unpaid hours and 300 paid hours a year.",
   status: "current",
   layer: "membership",
   year: "1998",
   forms: ["Housing cooperative"],
  },
  {
   name: "Five earth-sheltered homes",
   kind: "UK freehold",
   role: "Households own the dwellings. Two have changed hands. The co-op is how five houses act as one place.",
   status: "current",
   layer: "land",
   forms: ["Freehold title"],
  },
 ],
 aldinga: [
  {
   name: "Aldinga Arts Eco Village community corporation",
   kind: "South Australian community corporation",
   role: "Community Titles Act vehicle. Common land, orchards, farm, the no-fence brief.",
   status: "current",
   layer: "membership",
   year: "2001",
   forms: ["Body corporate"],
  },
  {
   name: "181 lots",
   kind: "South Australian community title",
   role: "Households own lots. 78% owner-occupied in the 2021 village figure. Open-market sales.",
   status: "current",
   layer: "land",
   forms: ["Freehold title"],
  },
 ],
 friland: [
  {
   name: "Friland foundation",
   kind: "Danish foundation",
   role: "Owns the land and lends it to the community. The lock against a mortgage on the dirt.",
   status: "current",
   layer: "land",
   year: "2002",
   forms: ["Nonprofit foundation"],
  },
  {
   name: "Shareholder households",
   kind: "Danish association of plot-holders",
   role: "Each shareholder has a 900–1,400 m² plot. No loan secured on land or house. Resale capped per m².",
   status: "current",
   layer: "membership",
   forms: ["Membership association", "Ground lease"],
  },
 ],
 tonndorf: [
  {
   name: "Genossenschaft auf Schloss Tonndorf e.G.",
   kind: "German registered cooperative",
   role: "Owner of the castle since August 2005. About 65 people live and work the 15 ha.",
   status: "current",
   layer: "land",
   year: "2005",
   forms: ["Housing cooperative"],
  },
 ],
 lilac: [
  {
   name: "LILAC Mutual Home Ownership Society",
   kind: "UK housing cooperative / MHOS",
   role: "Members own the former school site together. Income share (published as about 35% of net) instead of a house mortgage. Homes cannot be split into twenty ordinary freeholds.",
   status: "current",
   layer: "land",
   year: "2013",
   forms: ["Housing cooperative", "Limited-equity co-op", "Mutual home ownership society"],
  },
  {
   name: "Twenty households",
   kind: "UK cohousing membership",
   role: "Occupy straw-bale homes and a common house. Vacancies on lilac.coop.",
   status: "current",
   layer: "membership",
   forms: ["Housing cooperative"],
  },
 ],
};

export const livingBatch2Land: Record<string, LandOwnership> = {
 hjortshoj: {
  owner: "Mixed: housing-group titles plus 20 ha farm leased from Aarhus Municipality",
  complexity: "split",
  tenure: "Cooperative village, mixed tenure",
  howHeld: "Eight housing groups on the village edge, each with its own tenure choice. Twenty hectares of organic farmland rented from the city. A 1.2 ha market garden.",
  narrative: "Hjortshøj grew in stages, so the map is a patchwork. Some families own the house and the dirt under it. Some hold a co-op share. The farm is the city’s, used by the village.",
  divided: [
   { label: "Housing groups", holder: "Private owners, cooperatives, or rental groups", share: "Eight groups, ~300 people", what: "Dwellings and common houses" },
   { label: "Farm", holder: "Aarhus Municipality (lease to the village)", share: "~20 ha", what: "Grain, fodder, fruit, vegetables, livestock" },
  ],
 },
 "neot-semadar": {
  owner: "Kibbutz Neot Semadar on Israel Lands Authority ground",
  complexity: "simple",
  tenure: "Kibbutz / national land",
  howHeld: "80 hectares of Arava settlement land. No private house lots. Members move house about every seven years.",
  narrative: "A desert farm that is also an art centre. Vines, dates, olives, a cooling tower. The dirt stays with the settlement.",
  divided: [],
 },
 "eva-lanxmeer": {
  owner: "House owners plus Municipality of Culemborg (water field) plus residents’ association (commons)",
  complexity: "split",
  tenure: "Freehold houses on municipal eco-district land",
  howHeld: "Culemborg bought more than 20 ha around the Vitens wells. Households hold ordinary house title. The association manages outdoor space, ponds, and the farm edge.",
  narrative: "A neighbourhood designed around drinking water. You can sell your house. You cannot sell the retention ponds.",
  divided: [
   { label: "Houses", holder: "Private owners", share: "~240 dwellings", what: "Ordinary Dutch title" },
   { label: "Water field and commons", holder: "Municipality and residents’ association", share: "The rest of the 20-plus hectares", what: "Wells, ponds, Caetshage farm, green" },
  ],
 },
 earthsong: {
  owner: "32 unit owners and the Earthsong Body Corporate",
  complexity: "split",
  tenure: "Unit titles",
  howHeld: "1.29 ha in Ranui. Each household owns a unit. The body corporate holds the figure-eight path, common house, laundry, guest rooms, and gardens. Cars park at the entrance.",
  narrative: "Urban cohousing on a small west-Auckland lot. The path is the village. The unit is the home.",
  divided: [
   { label: "Units", holder: "Households", share: "32 homes", what: "Self-contained dwellings" },
   { label: "Common property", holder: "Body corporate", share: "Path, common house, gardens", what: "The neighbourhood as a place" },
  ],
 },
 munksoegaard: {
  owner: "Mixed: freehold group, co-op group, Roskilde Building Association rental groups",
  complexity: "split",
  tenure: "Mixed-tenure row houses",
  howHeld: "Five groups of 20 at Trekroner. One group buys. One group holds co-op shares. Three groups rent from the building association and still pick their neighbours.",
  narrative: "A hundred houses that refused to be only for buyers. The tenure split is the land story.",
  divided: [
   { label: "Freehold group", holder: "Owner-occupiers", share: "20 houses", what: "Ordinary title" },
   { label: "Co-op group", holder: "Cooperative association", share: "20 houses", what: "Share plus occupancy" },
   { label: "Rental groups", holder: "Roskilde Building Association", share: "60 houses", what: "Youth, seniors, open" },
  ],
 },
 hockerton: {
  owner: "Five households, with a co-operative over the 4 ha site",
  complexity: "simple",
  tenure: "Freehold homes inside a co-operative",
  howHeld: "40,000 m²: terrace, lake, reed beds, turbines, gardens. Homes are owned. The co-op runs water, waste, energy, and the tour business.",
  narrative: "Five grass roofs over a reservoir. Small enough that the land story is just the site they built.",
  divided: [],
 },
 aldinga: {
  owner: "Lot owners and the community corporation",
  complexity: "split",
  tenure: "Community titles",
  howHeld: "About 33 ha and 181 lots under South Australia’s Community Titles Act. Corporation holds orchards, farm, lanes. No-fence brief from 2002.",
  narrative: "A suburb that tried to stay a village. You buy a lot on the Adelaide market. The common land is why the fences stayed down.",
  divided: [
   { label: "Lots", holder: "Households", share: "181 lots", what: "Houses, studios, a few business sites" },
   { label: "Common land", holder: "Community corporation", share: "Orchards, farm, lanes", what: "The no-fence village" },
  ],
 },
 friland: {
  owner: "Friland foundation, with plots lent to shareholder households",
  complexity: "simple",
  tenure: "Foundation land, no mortgage",
  howHeld: "About 10 ha at Feldballe. Foundation owns. Households hold plots of 900–1,400 m². Sale prices capped per square metre.",
  narrative: "A cornfield that became a village because nobody was allowed to borrow against it. The foundation is the lock.",
  divided: [],
 },
 tonndorf: {
  owner: "Genossenschaft auf Schloss Tonndorf e.G.",
  complexity: "simple",
  tenure: "Registered cooperative",
  howHeld: "Castle, 15 ha, gardens, woodland. One e.G. since August 2005. Occupancy, not condominium apartments in the keep.",
  narrative: "A hilltop that needed a living group as much as the group needed a roof. The cooperative is why it stayed one place.",
  divided: [],
 },
 lilac: {
  owner: "LILAC Mutual Home Ownership Society",
  complexity: "simple",
  tenure: "Mutual home ownership",
  howHeld: "Former Wyther Park Primary School site. Twenty homes and a common house held in common. Income share instead of a house mortgage. No split into ordinary freeholds.",
  narrative: "A Leeds school yard that became an affordable terrace because the land was not allowed to become twenty mortgages.",
  divided: [],
 },
};

export const livingBatch2Funding: Record<string, CommunityFunding> = {
 hjortshoj: {
  overview: "A village paid by household housing costs and shared farm work, on land that includes a municipal farm lease.",
  grantsHeadline: "Municipal farm lease",
  privateHeadline: "Households and groups",
  grants: [
   {
    source: "Aarhus Municipality farm lease (~20 ha)",
    amount: "Lease, ongoing",
    certainty: "documented",
    kind: "other",
    note: "The city owns the farm hectares. The village works them.",
   },
  ],
  private: [
   {
    source: "Household dwellings (purchase, co-op, or rent) plus shared operations and market garden",
    amount: "Village of ~300",
    year: "1992–present",
    certainty: "documented",
    kind: "member-equity",
    note: "Tenure mix is the founding finance.",
   },
  ],
 },
 "neot-semadar": {
  overview: "A kibbutz paid by organic produce, wine, oil, cheese, the Pundak, guests, and volunteers, on national land.",
  grantsHeadline: "Olive mill assistance of record",
  privateHeadline: "Collective branches",
  grants: [
   {
    source: "ICA and Ministry of Industry and Trade assistance for the olive mill",
    amount: "Public/ICA help, 2001",
    year: "2001",
    certainty: "documented",
    kind: "grant",
    note: "The mill, not a house grant.",
   },
  ],
  private: [
   {
    source: "Organic agriculture, winery, olive oil, goat cheese, Pundak, guest stays, volunteer labour",
    amount: "Kibbutz economy",
    year: "1989–present",
    certainty: "documented",
    kind: "business",
    note: "UN Tourism recognition is not a land purchase.",
   },
  ],
 },
 "eva-lanxmeer": {
  overview: "A district the municipality pre-financed, then sold as ordinary houses, with resident energy and a city farm.",
  grantsHeadline: "Municipal land and pre-finance",
  privateHeadline: "House sales and Thermo Bello",
  grants: [
   {
    source: "Municipality of Culemborg land purchase and pre-finance on the water field",
    amount: "Municipal, 1990s",
    year: "1990s",
    certainty: "documented",
    kind: "other",
    note: "The city took the land risk so a resident-designed neighbourhood could be built.",
   },
  ],
  private: [
   {
    source: "240 house titles, association dues, Thermo Bello heat, Caetshage farm",
    amount: "Market houses plus local utilities",
    year: "1994–present",
    certainty: "documented",
    kind: "member-equity",
    note: "lanxmeer.nl. A house is the door.",
   },
  ],
 },
 earthsong: {
  overview: "A Ranui cohousing paid by unit sales and body-corporate levies after a resident company developed 1.29 ha.",
  grantsHeadline: "None isolated",
  privateHeadline: "Units and levies",
  grants: [
   {
    source: "No major public land-purchase grant found",
    amount: "—",
    certainty: "estimated",
    kind: "other",
    note: "Resident-developed. World Habitat recognised the project.",
   },
  ],
  private: [
   {
    source: "32 unit titles, body-corporate levies, common house",
    amount: "Market units on a small site",
    year: "2000–present",
    certainty: "documented",
    kind: "member-equity",
    note: "Buying and renting listings on the neighbourhood site.",
   },
  ],
 },
 munksoegaard: {
  overview: "A hundred row houses paid by buyers, co-op shares, and Roskilde Building Association rents, mixed on purpose.",
  grantsHeadline: "Social rental stock",
  privateHeadline: "Purchase, share, rent",
  grants: [
   {
    source: "Roskilde Building Association rental groups (youth, seniors, open)",
    amount: "60 of 100 houses",
    year: "2000–present",
    certainty: "documented",
    kind: "other",
    note: "The political choice: the village would not only be for buyers.",
   },
  ],
  private: [
   {
    source: "Freehold group and cooperative association group",
    amount: "40 of 100 houses",
    year: "2000–present",
    certainty: "documented",
    kind: "member-equity",
    note: "Tenants still choose who moves in.",
   },
  ],
 },
 hockerton: {
  overview: "Five homes paid by household build costs and a joint tour-and-consultancy business.",
  grantsHeadline: "None isolated",
  privateHeadline: "Homes and tours",
  grants: [
   {
    source: "No major public construction grant isolated",
    amount: "—",
    certainty: "estimated",
    kind: "other",
    note: "Early coverage cited about £65,000 per home. Confirm current figures.",
   },
  ],
  private: [
   {
    source: "Five freeholds plus booked tours, workshops, consultancy",
    amount: "Small education business",
    year: "1998–present",
    certainty: "documented",
    kind: "business",
    note: "Six Saturday tours a year.",
   },
  ],
 },
 aldinga: {
  overview: "A community-titles suburb paid by lot sales and corporation levies, with a farm and orchards on the common.",
  grantsHeadline: "None isolated",
  privateHeadline: "Lots and levies",
  grants: [
   {
    source: "No major public land-purchase grant found",
    amount: "—",
    certainty: "estimated",
    kind: "other",
    note: "Incorporated 2001. Building from 2002.",
   },
  ],
  private: [
   {
    source: "181 lots, corporation levies, farm and orchards",
    amount: "Open Adelaide market plus village dues",
    year: "2002–present",
    certainty: "documented",
    kind: "member-equity",
    note: "aldingaartsecovillage.com. Listings appear on ordinary real-estate sites.",
   },
  ],
 },
 friland: {
  overview: "A field paid by household savings because mortgages on the land and houses are forbidden.",
  grantsHeadline: "None isolated",
  privateHeadline: "Saved-then-built plots",
  grants: [
   {
    source: "No major public purchase grant found",
    amount: "—",
    certainty: "estimated",
    kind: "other",
    note: "A cheap cornfield and a television experiment.",
   },
  ],
  private: [
   {
    source: "Household savings, self-employment, capped resale, common land dues",
    amount: "~40 households",
    year: "2002–present",
    certainty: "documented",
    kind: "member-equity",
    note: "start.friland.org. The cap is the economic rule.",
   },
  ],
 },
 tonndorf: {
  overview: "A castle paid by cooperative shares, household work, garden, and hosted groups.",
  grantsHeadline: "None isolated",
  privateHeadline: "e.G. shares and life on the hill",
  grants: [
   {
    source: "No major public castle-purchase grant found",
    amount: "—",
    certainty: "estimated",
    kind: "other",
    note: "The e.G. took the building in 2005.",
   },
  ],
  private: [
   {
    source: "Cooperative shares, household contributions, garden, guest groups",
    amount: "Village of ~65",
    year: "2005–present",
    certainty: "documented",
    kind: "member-equity",
    note: "schloss-tonndorf.de. The keep is a home.",
   },
  ],
 },
 lilac: {
  overview: "Twenty homes paid by member income shares into a mutual home ownership society, on a former school site.",
  grantsHeadline: "None isolated as a land grant",
  privateHeadline: "MHOS income shares",
  grants: [
   {
    source: "Community-led housing recognition (World Habitat listing, policy citations)",
    amount: "Recognition",
    certainty: "documented",
    kind: "award",
    note: "The model is the public product. Confirm any specific capital grant before you name one.",
   },
  ],
  private: [
   {
    source: "Member payments (published as about 35% of net income) into the MHOS",
    amount: "20 households",
    year: "2013–present",
    certainty: "documented",
    kind: "member-equity",
    note: "lilac.coop. Affordability is the point of the legal form.",
   },
  ],
 },
};

export const livingBatch2VisitJoin: Record<string, VisitJoin> = {
 hjortshoj: {
  visit: 2,
  join: 3,
  visitProcess:
   "8530 Hjortshøj, 15 km north-east of Aarhus. A living village of eight housing groups and a farm. Write. Houses are homes. The market garden is not a pick-your-own for a Sunday drive from Aarhus.",
  joinProcess:
   "Join a housing group when a dwelling turns, under that group’s tenure (buy, co-op share, or rent). Mixed on purpose. Harder than an Aarhus rental; more defined than a closed household.",
 },
 "neot-semadar": {
  visit: 4,
  join: 1,
  visitProcess:
   "Highway 40 near the Shizafon junction, about 70 km north of Eilat. Pundak restaurant, booked tours, art centre. UN Tourism village. Book. Members’ houses rotate; they are not a desert B&B.",
  joinProcess:
   "Kibbutz membership on national land. Volunteers apply only after writing volunteers@neot-semadar.com and getting approval from the coordinators. A two-month volunteer stay is work, not a share of the vines.",
 },
 "eva-lanxmeer": {
  visit: 3,
  join: 4,
  visitProcess:
   "Culemborg, Gelderland. lanxmeer.nl. An inhabited eco-district around drinking-water ponds. Walk the public streets. Houses and Caetshage farm are working places. Do not treat a retention pond as a playground.",
  joinProcess:
   "Buy a house when one is offered, join the residents’ association. Ordinary Dutch housing market plus association rules. Easier than a commune; still a neighbourhood with a water brief.",
 },
 earthsong: {
  visit: 3,
  join: 4,
  visitProcess:
   "Ranui, west Auckland. Common house has guest rooms. Write membership-enquiry@earthsong.org.nz.",
  joinProcess:
   "Buy a unit when one is listed, sit the membership conversation, live under body-corporate rules and the membership agreement. A unit is the door.",
 },
 munksoegaard: {
  visit: 2,
  join: 3,
  visitProcess:
   "Trekroner, Roskilde. A hundred row houses. Arrange. Common houses are for the groups. Do not walk every terrace as a show home.",
  joinProcess:
   "Buy, take a co-op share, or rent into the building-association groups when a house turns. Tenants help choose neighbours. Mixed tenure is the path.",
 },
 hockerton: {
  visit: 5,
  join: 2,
  visitProcess:
   "Hockerton, Nottinghamshire. Saturday sustainable-living tours about six times a year, resident-led, about three hours. Book. The terrace is five homes.",
  joinProcess:
   "A house rarely comes up. The published path is tours, then meetings and work weekends, then a sale inside the co-operative. Five homes. Very small.",
 },
 aldinga: {
  visit: 3,
  join: 4,
  visitProcess:
   "Aldinga Beach, South Australia. aldingaartsecovillage.com. An inhabited community-titles village. Open days and listed visits. Lots are homes. The orchard is common, not a farm-gate without asking.",
  joinProcess:
   "Buy a lot on the open market, live under the community corporation and a neighbourhood group. Easier than a closed co-op; you still inherit the no-fence brief.",
 },
 friland: {
  visit: 2,
  join: 2,
  visitProcess:
   "Feldballe, Djursland. start.friland.org. Experimental houses on a former cornfield. Write. People built these with savings. A Guardian photograph is not an invitation to walk every plot.",
  joinProcess:
   "A plot when one is offered, savings enough to build without a mortgage, self-employment, the resale cap. Harder than a Djursland cottage with a bank loan. That is the point.",
 },
 tonndorf: {
  visit: 3,
  join: 2,
  visitProcess:
   "Tonndorf, Weimarer Land, Thuringia. schloss-tonndorf.de. Contact form on the site. A lived-in castle. Guest groups by arrangement. The keep is a home of about sixty-five.",
  joinProcess:
   "Cooperative membership and a life on the 15 ha.",
 },
 lilac: {
  visit: 3,
  join: 3,
  visitProcess:
   "Bramley / Kirkstall, Leeds. lilac.coop. An inhabited terrace of twenty. Vacancies and open information on the site. Straw-bale walls are homes. Do not treat the old school yard as a show village.",
  joinProcess:
   "Apply when a household vacancy is posted. Join the MHOS, pay an income share, live in cohousing. Harder than a Leeds rental; designed to be possible on an ordinary wage.",
 },
};

export const livingBatch2DailyLife: Record<string, DailyLife> = {
 hjortshoj: {
  typical: [
   { title: "Housing group", detail: "Eight groups, each with its own house form and tenure. Common houses, neighbours, the Danish week." },
   { title: "Market garden", detail: "About a hundred families on 1.2 ha. Twenty more hectares of farm rented from Aarhus." },
   { title: "Bay edge", detail: "Fifteen kilometres from the city, overlooking the water. Bikes, compost, the ordinary ecological brief." },
  ],
  unique: {
   title: "A village that let each group choose its tenure",
   detail: "Hjortshøj is 1986 vision, 1992 first keys, and a patchwork on purpose so the place would not freeze as one class of owner.",
  },
 },
 "neot-semadar": {
  typical: [
   { title: "Branches", detail: "Vines, dates, olives, goats, kitchen, art workshops. Seva in the desert sense: the work is the practice." },
   { title: "Art centre", detail: "Fourteen workshops: glass, ceramics, textile, wood, metal. Buildings with cooling towers and mud brick." },
   { title: "Pundak and guests", detail: "A roadside restaurant on Highway 40. Tours. Volunteers who wrote first." },
  ],
  unique: {
   title: "A kibbutz that moves house every seven years",
   detail: "Neot Semadar is 1989, national land, a learning community that treats attachment to a particular room as something to keep light.",
  },
 },
 "eva-lanxmeer": {
  typical: [
   { title: "House and rain garden", detail: "240 dwellings, bikes, no cars on the inner streets. Retention ponds on a drinking-water field." },
   { title: "Caetshage farm", detail: "Urban ecological farm at the edge. Food and a reason to walk to the wells." },
   { title: "Thermo Bello", detail: "Local heat from a company the residents set up. Association work on the commons." },
  ],
  unique: {
   title: "A neighbourhood designed around the municipal wells",
   detail: "EVA-Lanxmeer is Culemborg’s bet that future inhabitants could design a district, and that drinking water could be the plan, not the leftover.",
  },
 },
 earthsong: {
  typical: [
   { title: "Figure-eight path", detail: "32 timber houses, cars at the entrance, children on the loop. Ranui light." },
   { title: "Common house", detail: "Kitchen, dining, laundry, guest rooms. Focus groups do the body-corporate work." },
   { title: "Gardens", detail: "Shared beds on 1.29 ha. Low-allergy houses, less energy and water than a standard Auckland home." },
  ],
  unique: {
   title: "New Zealand’s first cohousing, on a small urban lot",
   detail: "Earthsong is 1995, Robin Allison, Unit Titles plus a membership agreement, a neighbourhood that still has to be a good neighbour to Ranui. Cars still park at the edge so the figure-eight can run through the gardens.",
  },
 },
 munksoegaard: {
  typical: [
   { title: "Row house", detail: "Five groups of twenty. A common house in each. Bikes, compost, Trekroner fields." },
   { title: "Mixed neighbours", detail: "Buyers, co-op members, tenants (youth, seniors, open). The mix is the social fact." },
   { title: "Train to Copenhagen", detail: "Half an hour. An eco-village that is also a commuter neighbourhood." },
  ],
  unique: {
   title: "A hundred houses that refused a single tenure",
   detail: "Munksøgård put rental, co-op, and freehold on the same field so the village would have more than one way in. Houses went up around 2000 in five groups of twenty.",
  },
 },
 hockerton: {
  typical: [
   { title: "Earth-sheltered terrace", detail: "Five homes, grass roofs, a 19-metre conservatory along the south. Lake in front." },
   { title: "Water and waste", detail: "Reservoir, reed bed, septic composted on site. Two turbines, a PV array." },
   { title: "Tours", detail: "About six Saturdays a year a resident walks guests through. 300 unpaid hours and 300 paid hours per home." },
  ],
  unique: {
   title: "Five houses that run as a small autonomous site",
   detail: "Hockerton is 1998, a terrace that tried to get water, heat, and waste right, then taught other people how. Residents still walk Saturday tours six times a year through the grass-roof terrace they finished in 1998.",
  },
 },
 aldinga: {
  typical: [
   { title: "Unfenced lot", detail: "181 lots, nine neighbourhood groups. Fruit trees in the lanes. The 2002 brief was no fences." },
   { title: "Arts", detail: "Studios, a name that still means something. Steiner school next door, beach a few minutes away." },
   { title: "Farm and orchard", detail: "Common land the corporation holds. Owner-occupiers and a minority of rentals." },
  ],
  unique: {
   title: "A community-titles suburb that kept the fences down",
   detail: "Aldinga is 2001 paper, 2002 building, an hour from Adelaide, a lot market with a village conscience.",
  },
 },
 friland: {
  typical: [
   { title: "Self-built house", detail: "Straw, timber, earth, a masonry stove. National building rules still apply. You saved first." },
   { title: "Plot", detail: "900–1,400 m², foundation land, no mortgage. Common lake, garden, playground." },
   { title: "Meetings with a meal", detail: "Six evenings a year, then an annual assembly. Consensus. Self-employment is part of the brief." },
  ],
  unique: {
   title: "A village that banned the mortgage",
   detail: "Friland is 2002, a television experiment that stayed, a foundation on a cornfield, a price cap so the lots cannot run away.",
  },
 },
 tonndorf: {
  typical: [
   { title: "Castle as home", detail: "Keep, manor roofs, a courtyard with laundry. About sixty-five people. The building is the week." },
   { title: "Fifteen hectares", detail: "Gardens, woodland, the hill. Restoration and vegetables in the same season." },
   { title: "Guest groups", detail: "By arrangement. Seminars sit beside a cooperative that has to keep a medieval roof on." },
  ],
  unique: {
   title: "An e.G. that moved into a Thuringian castle",
   detail: "Schloss Tonndorf is 2005, a cooperative on a hill, a place that is both a monument and a kitchen.",
  },
 },
 lilac: {
  typical: [
   { title: "Straw-bale terrace", detail: "ModCell walls, lime, timber. Twenty homes around a garden on an old school yard." },
   { title: "Common house", detail: "Meals, laundry, the room where the MHOS actually meets." },
   { title: "Income share", detail: "A slice of what you earn, not a 25-year mortgage on a single freehold. Leeds wages, ecological walls." },
  ],
  unique: {
   title: "Mutual home ownership in straw",
   detail: "LILAC is 2013, twenty households, a legal form invented so a low-impact terrace could be affordable on purpose.",
  },
 },
};

export const livingBatch2Informal: Record<string, InformalAgreement[]> = {
 hjortshoj: [
  { kind: "membership-trial", why: "A housing group when a dwelling turns. Each group’s tenure is a different door." },
  { kind: "land-care", why: "20 ha farm and a 1.2 ha market garden. Guests stay off beds they did not plant." },
  { kind: "kitchen-table", why: "Eight common houses. Whose kitchen, whose child, which group you actually eat with." },
  { kind: "building-code", why: "Groups built in stages. What a new wall may do next to an older cluster." },
 ],
 "neot-semadar": [
  { kind: "quiet-practice", why: "A learning kibbutz. Work as observation. Guests follow the form they were given." },
  { kind: "volunteer-intern", why: "Write volunteers@neot-semadar.com first. Coordinators approve before any third-party form." },
  { kind: "guest-stay", why: "Pundak and booked tours. Members’ rotating houses are not the restaurant." },
  { kind: "animals-stock", why: "Goats, vines, dates. Whose animal, who photographs the cooling tower." },
 ],
 "eva-lanxmeer": [
  { kind: "building-code", why: "Eco-district rules on a water field. What a house may do to a rain garden." },
  { kind: "land-care", why: "Retention ponds and Caetshage. Guests stay off the farm beds and the well protection." },
  { kind: "membership-trial", why: "Buy a house, join the association. A walk by the ponds is not a vote." },
  { kind: "kitchen-table", why: "240 households. Which common is the farm café and which is a family’s terrace." },
 ],
 earthsong: [
  { kind: "building-code", why: "Body-corporate rules on materials, alterations, landscaping. Consult before you change a wall." },
  { kind: "kitchen-table", why: "Common house kitchen and dining. Who cooks, who is a guest in the guest rooms." },
  { kind: "membership-trial", why: "Buy a unit, sit the membership agreement." },
  { kind: "children-care", why: "Figure-eight path, play areas, 32 homes. Safeguarding cannot be only informal." },
 ],
 munksoegaard: [
  { kind: "membership-trial", why: "Buy, share, or rent. Tenants still help choose who moves in." },
  { kind: "kitchen-table", why: "Five common houses. Which group’s table, which fridge, who is a child of the 225." },
  { kind: "building-code", why: "Row houses of several tenures. What a terrace may look like from the next group." },
  { kind: "children-care", why: "Youth group, seniors group, families. Mixed ages on purpose." },
 ],
 hockerton: [
  { kind: "guest-stay", why: "Booked Saturday tours. Five homes." },
  { kind: "labour-roster", why: "300 unpaid hours and 300 paid hours per home. Someone still has to walk the reed bed." },
  { kind: "membership-trial", why: "Meetings and work weekends before a rare sale. Five keys in the whole place." },
  { kind: "land-care", why: "Lake, turbines, composted solids. Guests stay on the tour path." },
 ],
 aldinga: [
  { kind: "building-code", why: "Community titles, no-fence brief, neighbourhood groups of 10–15 lots." },
  { kind: "land-care", why: "Orchards and farm on common land. Guests stay off restoration they were not asked to." },
  { kind: "membership-trial", why: "Buy a lot, join a neighbourhood group. A beach day is not a corporation vote." },
  { kind: "kitchen-table", why: "Nine groups. Whose street tree, whose studio, when the common is a market." },
 ],
 friland: [
  { kind: "building-code", why: "National building rules plus experimental materials. What a straw wall may do next to a neighbour’s earth wall." },
  { kind: "membership-trial", why: "Savings, no mortgage, self-employment. A documentary is not a plot offer." },
  { kind: "land-care", why: "Foundation land, common lake and garden. Guests stay off a shareholder’s 900 m²." },
  { kind: "conflict-circle", why: "Consensus, six meal-meetings a year. New ideas get a first hearing before the main vote." },
 ],
 tonndorf: [
  { kind: "guest-stay", why: "Groups by arrangement. The castle is a home of sixty-five. Contact form first." },
  { kind: "labour-roster", why: "Gardens, woodland, a medieval roof. Someone still has to keep the keep." },
  { kind: "membership-trial", why: "e.G. membership and a life on 15 ha." },
  { kind: "land-care", why: "15 ha of castle ground. Guests stay on the path they were given." },
 ],
 lilac: [
  { kind: "membership-trial", why: "Vacancy on lilac.coop, then MHOS. An income share is the price, not a viewing." },
  { kind: "kitchen-table", why: "Common house. Who cooks, who is a child of the twenty, when the dining room is a meeting." },
  { kind: "building-code", why: "Straw-bale, lime, timber. What a household may do to a ModCell wall." },
  { kind: "conflict-circle", why: "Twenty households, cooperative democracy. Small enough that a fight has nowhere to hide." },
 ],
};

export const livingBatch2Governance: Record<string, Governance> = {
 hjortshoj: {
  model: "hybrid",
  modelLabel: "Housing groups under a cooperative village",
  unique: false,
  summary: "Eight housing groups, each with its own tenure, under Andelssamfundet i Hjortshøj. The farm is a municipal lease. Groups run their houses. The andelssamfund sits above them for land and common work.",
  whoDecides: "Housing groups for dwellings. The cooperative village for farm, commons, and the next group.",
  bodies: [
   { name: "Housing groups", role: "Eight clusters. Buy, co-op, or rent. Common houses." },
   { name: "Andelssamfundet", role: "Umbrella. Farm lease, village-scale decisions." },
   { name: "Aarhus Municipality", role: "Landlord of the 20 ha farm." },
  ],
  howItRuns: "A dwelling turns inside a group. The farm is shared. A visitor from Aarhus does not sit either meeting.",
 },
 "neot-semadar": {
  model: "cooperative",
  modelLabel: "Kibbutz assembly",
  unique: false,
  summary: "A cooperative kibbutz on national land. Branches, an art centre, rotating homes. Volunteers write first. Guests eat at the Pundak.",
  whoDecides: "Kibbutz members through the settlement’s assembly and work branches.",
  bodies: [
   { name: "Kibbutz assembly", role: "Membership on national land." },
   { name: "Work branches", role: "Farm, kitchen, art, tourism." },
   { name: "Volunteer coordinators", role: "Alex or Inbal of record. Approval before any outside form." },
  ],
  howItRuns: "A two-month volunteer is labour, not a vote. A Pundak lunch is not membership.",
 },
 "eva-lanxmeer": {
  model: "hoa",
  modelLabel: "Residents’ association on a municipal eco-district",
  unique: true,
  summary: "Culemborg bought the water field. Households hold ordinary house title. The EVA-Lanxmeer association manages outdoor space and founded Thermo Bello. Caetshage is the farm. Marleen Kaptein’s 1990 idea, built 1994–2009.",
  whoDecides: "House owners for dwellings. Association for commons and heat. Municipality for the wells.",
  bodies: [
   { name: "Bewonersvereniging EVA-Lanxmeer", role: "All residents. Outdoor space." },
   { name: "Municipality of Culemborg", role: "Land partner and water field." },
   { name: "Thermo Bello", role: "Local energy company." },
  ],
  howItRuns: "You buy a house and you join the association. A pond photograph is not a board seat.",
  dive: {
   title: "A district designed with its future inhabitants",
   lead: "Kaptein wanted a neighbourhood that existed before the houses, on paper, with the people who would live there. The city took the land risk on a drinking-water field. The association is how 240 owners still act as one place.",
   organs: [
    { name: "Municipal land deal", what: "Culemborg bought more than 20 ha around the Vitens wells." },
    { name: "Residents’ association", what: "Mandatory membership. Commons, ponds, farm edge." },
    { name: "Thermo Bello", what: "Heat as a local company, not a distant utility only." },
   ],
   path: "Buy a house when one is offered. Live under association rules.",
   history: "1990 idea, 1994 first build, 2009 complete. EVA began as an education centre.",
   tension: "An eco-district that is also a normal housing market. Affordability tracks Culemborg, not a co-op share.",
  },
 },
 earthsong: {
  model: "hoa",
  modelLabel: "Body corporate and full-group meetings",
  unique: false,
  summary: "32 unit titles, an Earthsong Body Corporate, and a membership agreement. Focus groups do almost all the legal work. Robin Allison is a published co-founder.",
  whoDecides: "Unit owners in full-group meetings, under body-corporate rules.",
  bodies: [
   { name: "Full group", role: "Membership decisions." },
   { name: "Focus groups", role: "The actual week." },
   { name: "Body corporate", role: "Unit Titles vehicle for common property." },
  ],
  howItRuns: "A unit sale is the door. membership-enquiry@earthsong.org.nz. Guest rooms in the common house are booked.",
 },
 munksoegaard: {
  model: "hybrid",
  modelLabel: "Five groups, three tenures",
  unique: false,
  summary: "One freehold group, one co-op, three rental groups under Roskilde Building Association. Each group of 20 has a common house. Tenants help choose who moves in.",
  whoDecides: "Dwelling groups for neighbours and common houses. Building association as landlord of 60 houses.",
  bodies: [
   { name: "Five dwelling groups", role: "20 houses and a common house each." },
   { name: "Roskilde Building Association", role: "Landlord of youth, seniors, and open groups." },
   { name: "Co-op association", role: "The share-and-occupy group." },
  ],
  howItRuns: "A house turns inside a group. The mix is the politics. A Trekroner walk is not an application.",
 },
 hockerton: {
  model: "cooperative",
  modelLabel: "Five homes, labour quotas, joint business",
  unique: true,
  summary: "Five freehold earth-sheltered homes inside a not-for-profit co-operative. Each home: 300 unpaid hours on the site, 300 paid hours on tours and consultancy. A terrace that teaches.",
  whoDecides: "The five households as co-op members.",
  bodies: [
   { name: "Households", role: "Five dwellings, two of which have changed hands." },
   { name: "Co-operative", role: "Site, water, energy, education business." },
  ],
  howItRuns: "Book a Saturday tour. If a house is ever offered, come to meetings and work weekends first.",
  dive: {
   title: "Autonomy at the scale of five",
   lead: "The cleverness is smallness. Water, waste, and power on 4 ha, then a business that pays for teaching it. Labour quotas keep five busy households on the site.",
   organs: [
    { name: "Freehold terrace", what: "You own the dwelling." },
    { name: "Co-op", what: "You owe the site 600 hours a year, half unpaid." },
    { name: "Education business", what: "Tours, courses, consultancy. The public face." },
   ],
   path: "Tour, then meetings, then a rare sale.",
   history: "Planning mid-1990s, complete 1998, turbines and PV in the 2000s.",
   tension: "Five homes. Succession is the live question. Two have already changed hands.",
  },
 },
 aldinga: {
  model: "hoa",
  modelLabel: "Community corporation and nine neighbourhood groups",
  unique: false,
  summary: "South Australian community titles. 181 lots, a corporation for common land, nine groups of neighbouring properties. Lots sell on the open market.",
  whoDecides: "Lot owners through the corporation and neighbourhood groups.",
  bodies: [
   { name: "Community corporation", role: "Common land, bylaws, levies." },
   { name: "Nine neighbourhood groups", role: "Streets, trees, the close neighbours." },
  ],
  howItRuns: "Buy a lot, join a group. The no-fence brief is still the social fact. Confirm current bylaws.",
 },
 friland: {
  model: "consensus",
  modelLabel: "Foundation land, consensus assembly",
  unique: true,
  summary: "A foundation owns the field. Households hold plots they must not mortgage. Six meal-meetings a year, annual assembly, a small elected board, consensus. Resale capped per square metre.",
  whoDecides: "Shareholders in consensus, on foundation land.",
  bodies: [
   { name: "Foundation", role: "Owns the 10 ha." },
   { name: "Annual assembly", role: "Budget, board of about five, the big questions." },
   { name: "Six meal-meetings", role: "The actual year. New ideas get a first hearing." },
  ],
  howItRuns: "Save, then build, then sit the meetings. A television origin story is not a plot.",
  dive: {
   title: "The village that took debt off the table",
   lead: "Friland’s lock is simple and hard: no loan on land or house, a price cap, self-employment. The foundation holds the dirt so a bank cannot. Thirteen families on DR-TV became forty households who still have to agree.",
   organs: [
    { name: "Foundation title", what: "The field cannot be collateral." },
    { name: "Plot share", what: "900–1,400 m², build with savings." },
    { name: "Resale cap", what: "Per square metre, against speculation." },
   ],
   path: "A plot when one is offered. Savings. Consensus culture.",
   history: "2002 founding, DR-TV experiment, slow fill to ~40 households.",
   tension: "National building rules still apply. Experimental walls meet ordinary inspectors. The cap only works if people keep it.",
  },
 },
 tonndorf: {
  model: "cooperative",
  modelLabel: "Registered cooperative (e.G.)",
  unique: false,
  summary: "Genossenschaft auf Schloss Tonndorf e.G. has held the castle since August 2005. About 65 people live and work 15 ha. Guest groups by arrangement.",
  whoDecides: "Cooperative members.",
  bodies: [
   { name: "e.G.", role: "Owner of the castle and ground." },
   { name: "Residents", role: "The week: garden, roof, kitchen." },
  ],
  howItRuns: "Contact form first. Confirm current board practice.",
 },
 lilac: {
  model: "cooperative",
  modelLabel: "Mutual home ownership",
  unique: true,
  summary: "Twenty households own the former school site together as an MHOS. Members pay a published slice of net income instead of a house mortgage. Straw-bale terrace, common house, vacancies on lilac.coop. Paul Chatterton is a published founder-member.",
  whoDecides: "MHOS members, the twenty households.",
  bodies: [
   { name: "Mutual Home Ownership Society", role: "Holds the site. Income shares. No split into ordinary freeholds." },
   { name: "Households", role: "Occupy, cook, meet." },
  ],
  howItRuns: "A posted vacancy, then the allocation rules. A TEDx talk is not the current bylaws.",
  dive: {
   title: "Affordability as a legal form",
   lead: "LILAC’s invention is the tenure. Straw is the wall. The MHOS is why a nurse can live in it. Twenty homes on a Leeds school yard, income-linked payments, a common house that is also the company meeting.",
   organs: [
    { name: "MHOS", what: "Democratic stake in the whole site, not a mortgage on one freehold." },
    { name: "Income share", what: "Published as about 35% of net. Confirm current figures." },
    { name: "ModCell terrace", what: "Straw, lime, timber. The physical brief." },
   ],
   path: "lilac.coop vacancies. Apply, meet, join.",
   history: "Late-2000s design, March 2013 completion, BBC and World Habitat.",
   tension: "Twenty is small. Allocation and income-share rules have to stay fair as Leeds wages move.",
  },
 },
};

export const livingBatch2Leaders: Record<string, VillageLeaders> = {
 hjortshoj: {
  people: [
   { name: "Jørg Gaugler", role: "Co-founder (1986 vision)", note: "Evening-class origin with Kaj Hansen." },
   { name: "Kaj Hansen", role: "Co-founder (1986 vision)" },
  ],
  office: { address: "8530 Hjortshøj, Denmark", url: "https://www.andelssamfundet.dk/en" },
 },
 "neot-semadar": {
  people: [
   { name: "Yosef Safra", role: "Naming; memory of Smadar Safra", note: "The kibbutz is named for his wife, killed in 1981." },
  ],
  office: {
   email: "volunteers@neot-semadar.com",
   phone: "+972-8-6358111",
   address: "Kibbutz Neot Semadar, Southern Negev, Israel",
   url: "https://neot-semadar.com/en/",
  },
 },
 "eva-lanxmeer": {
  people: [
   { name: "Marleen Kaptein", role: "Initiator", note: "Began gathering the resident-design group in 1990." },
  ],
  office: { address: "Lanxmeer, Culemborg, Gelderland, Netherlands", url: "https://lanxmeer.nl/" },
 },
 earthsong: {
  people: [
   { name: "Robin Allison", role: "Co-founder", note: "Architect; public voice of the project. GENOA talk 2026." },
  ],
  office: { email: "membership-enquiry@earthsong.org.nz", url: "https://www.earthsong.org.nz/" },
 },
 munksoegaard: {
  people: [],
  office: { url: "https://www.munksoegaard.dk/en/about.html", address: "Trekroner, Roskilde, Denmark" },
 },
 hockerton: {
  people: [],
  office: { url: "https://www.hockertonhousingproject.org.uk/", address: "Hockerton, Nottinghamshire, United Kingdom" },
 },
 aldinga: {
  people: [],
  office: { url: "https://aldingaartsecovillage.com/", address: "Aldinga Beach, South Australia" },
 },
 friland: {
  people: [],
  office: { url: "https://start.friland.org/about-friland/", address: "Feldballe, Djursland, Denmark" },
 },
 tonndorf: {
  people: [
   { name: "Thomas Meier", role: "Early member", note: "Named in regional press on the 2005 founding." },
  ],
  office: { url: "https://www.schloss-tonndorf.de/", address: "Schloss Tonndorf, Tonndorf, Thuringia, Germany" },
 },
 lilac: {
  people: [
   { name: "Paul Chatterton", role: "Founder-member; public academic voice", note: "University of Leeds. TEDx and policy citations of the MHOS model." },
  ],
  office: { url: "https://www.lilac.coop/", address: "Bramley / Kirkstall, Leeds, United Kingdom" },
 },
};

export const livingBatch2Accommodations: Record<string, Accommodations> = {
 hjortshoj: {
  visitor: {
   overview: "A living village of eight housing groups. Write through the village office. There is no guesthouse catalogue this atlas found.",
   camping: { available: false, types: [], detail: "None listed." },
   rooms: { available: false, types: [], detail: "Homes are homes. Arrange a visit. Do not assume a spare room." },
   other: { available: false, types: [], detail: "None listed." },
  },
  resident: {
   overview: "About 300 people in eight groups: private houses, co-op shares, and rental.",
   camping: { available: false, types: [], detail: "People live in houses." },
   rooms: { available: true, types: [], detail: "Dwellings inside a housing group, by that group’s tenure." },
   other: { available: false, types: [], detail: "None listed." },
  },
 },
 "neot-semadar": {
  visitor: {
   overview: "Pundak restaurant, booked tours, a volunteer programme after writing volunteers@neot-semadar.com. UN Tourism village.",
   camping: { available: false, types: [], detail: "None listed." },
   rooms: { available: true, types: [], detail: "Guest stays and volunteer housing by arrangement with the kibbutz. Book. Members’ rotating houses are separate." },
   other: { available: false, types: [], detail: "None listed." },
  },
  resident: {
   overview: "Kibbutz members live in settlement houses that rotate about every seven years. No private title.",
   camping: { available: false, types: [], detail: "Members live in houses." },
   rooms: { available: true, types: [], detail: "Assigned kibbutz housing. Volunteers after coordinator approval." },
   other: { available: false, types: [], detail: "None listed." },
  },
 },
 "eva-lanxmeer": {
  visitor: {
   overview: "An inhabited Culemborg neighbourhood. Walk public streets. Houses are private. No published visitor lodging of record.",
   camping: { available: false, types: [], detail: "None listed." },
   rooms: { available: false, types: [], detail: "No guesthouse catalogue this atlas found. Ordinary Dutch streets." },
   other: { available: false, types: [], detail: "None listed." },
  },
  resident: {
   overview: "About 240 freehold houses. You live in the house you buy.",
   camping: { available: false, types: [], detail: "People live in houses." },
   rooms: { available: true, types: [], detail: "Ordinary dwellings plus association commons." },
   other: { available: false, types: [], detail: "None listed." },
  },
 },
 earthsong: {
  visitor: {
   overview: "Common house guest rooms. Write membership-enquiry@earthsong.org.nz.",
   camping: { available: false, types: [], detail: "None listed." },
   rooms: { available: true, types: [], detail: "Guest rooms in the common house, by arrangement with the neighbourhood." },
   other: { available: false, types: [], detail: "None listed." },
  },
  resident: {
   overview: "32 self-contained homes under Unit Titles.",
   camping: { available: false, types: [], detail: "People live in units." },
   rooms: { available: true, types: [], detail: "Owner-occupied (and occasionally rented) units plus the common house." },
   other: { available: false, types: [], detail: "None listed." },
  },
 },
 munksoegaard: {
  visitor: {
   overview: "A hundred row houses at Trekroner. Arrange.",
   camping: { available: false, types: [], detail: "None listed." },
   rooms: { available: false, types: [], detail: "No public guesthouse this atlas found. Common houses are for the groups." },
   other: { available: false, types: [], detail: "None listed." },
  },
  resident: {
   overview: "100 row houses: buy, co-op share, or rent from Roskilde Building Association.",
   camping: { available: false, types: [], detail: "People live in row houses." },
   rooms: { available: true, types: [], detail: "Dwelling groups of 20, including youth and senior rental." },
   other: { available: false, types: [], detail: "None listed." },
  },
 },
 hockerton: {
  visitor: {
   overview: "Booked Saturday tours about six times a year. No published visitor lodging.",
   camping: { available: false, types: [], detail: "None listed." },
   rooms: { available: false, types: [], detail: "Five homes." },
   other: { available: false, types: [], detail: "None listed." },
  },
  resident: {
   overview: "Five earth-sheltered homes, owner-occupied, inside the co-operative.",
   camping: { available: false, types: [], detail: "People live in the terrace." },
   rooms: { available: true, types: [], detail: "Five dwellings with long south conservatories." },
   other: { available: false, types: [], detail: "None listed." },
  },
 },
 aldinga: {
  visitor: {
   overview: "An inhabited community-titles village. aldingaartsecovillage.com. No published visitor lodging of record.",
   camping: { available: false, types: [], detail: "None listed." },
   rooms: { available: false, types: [], detail: "Lots are homes. Some are rented (13% in the 2021 figure). No central guesthouse this atlas found." },
   other: { available: false, types: [], detail: "None listed." },
  },
  resident: {
   overview: "181 lots, mostly owner-occupied houses, some rentals, some studios.",
   camping: { available: false, types: [], detail: "People live in houses." },
   rooms: { available: true, types: [], detail: "Freehold lots under the community corporation." },
   other: { available: true, types: ["studios", "small business lots"], detail: "Arts and a few business sites sit in the same titles scheme." },
  },
 },
 friland: {
  visitor: {
   overview: "Experimental houses on a former cornfield. start.friland.org. Write.",
   camping: { available: false, types: [], detail: "None listed." },
   rooms: { available: false, types: [], detail: "No guesthouse catalogue this atlas found. Plots are homes people built with savings." },
   other: { available: false, types: [], detail: "None listed." },
  },
  resident: {
   overview: "About 40 self-built houses on foundation plots. No mortgage.",
   camping: { available: false, types: [], detail: "People live in the houses they built." },
   rooms: { available: true, types: [], detail: "Self-built dwellings on 900–1,400 m² plots." },
   other: { available: true, types: ["experimental self-build", "straw and earth houses"], detail: "The architecture is the brief. National building rules still apply." },
  },
 },
 tonndorf: {
  visitor: {
   overview: "Lived-in castle. schloss-tonndorf.de contact form. Guest groups by arrangement.",
   camping: { available: false, types: [], detail: "None listed." },
   rooms: { available: true, types: [], detail: "Hosted groups by arrangement. The keep is a home of about 65. Write first." },
   other: { available: false, types: [], detail: "None listed." },
  },
  resident: {
   overview: "Cooperative members live in the castle and outbuildings.",
   camping: { available: false, types: [], detail: "People live in the buildings." },
   rooms: { available: true, types: [], detail: "Dwellings in a medieval hilltop held by the e.G." },
   other: { available: false, types: [], detail: "None listed." },
  },
 },
 lilac: {
  visitor: {
   overview: "Inhabited terrace. lilac.coop for vacancies and information. No published visitor lodging of record.",
   camping: { available: false, types: [], detail: "None listed." },
   rooms: { available: false, types: [], detail: "No public B&B this atlas found. Common house is for members. Arrange a visit." },
   other: { available: false, types: [], detail: "None listed." },
  },
  resident: {
   overview: "20 straw-bale homes held in a mutual home ownership society.",
   camping: { available: false, types: [], detail: "People live in the terrace." },
   rooms: { available: true, types: [], detail: "Household occupancy through the MHOS, plus a common house." },
   other: { available: true, types: ["straw-bale / ModCell"], detail: "Lime-rendered straw-bale and timber. The wall system is the resident architecture." },
  },
 },
};
