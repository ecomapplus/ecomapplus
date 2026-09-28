import type { LegalEntity } from "./legal-entities";
import type { LandOwnership } from "./land-ownership";
import type { CommunityFunding } from "./funding";
import type { VisitJoin } from "./visit-join";
import type { DailyLife } from "./daily-life";
import type { InformalAgreement } from "./informal-agreements";

export const livingMoreLegalEntities: Record<string, LegalEntity[]> = {
 meltemi: [
  {
   name: "Meltemi ecovillage NGO",
   kind: "Greek cultural association / nonprofit NGO",
   role: "Registered nonprofit for sustainable development and ecological sensitivity. GEN listing. The civil face of a commons that began as occupation.",
   status: "current",
   layer: "membership",
   year: "1946 living; NGO registration later",
   forms: ["Cultural association"],
  },
  {
   name: "150-stremma commons outside Rafina",
   kind: "Unincorporated community association",
   role: "The plot the families keep. Written rules from the mid-1950s. This atlas found no private house-lot cadastre.",
   status: "current",
   layer: "land",
   year: "1946",
   forms: ["Membership association"],
  },
 ],
 tui: [
  {
   name: "Tui Spiritual and Educational Trust",
   kind: "New Zealand charitable trust",
   role: "Current deed-holder of the Wainui Bay farm. Formed so the objects would match what residents were actually doing.",
   status: "current",
   layer: "land",
   year: "~1999",
   forms: ["Charitable trust"],
  },
  {
   name: "Tui Land Trust (historical purchaser)",
   kind: "New Zealand charitable trust",
   role: "Bought the 50–52 ha farm in 1984. Assets later moved to TSET.",
   status: "historical",
   layer: "land",
   year: "1984",
   forms: ["Charitable trust"],
  },
  {
   name: "Resident households",
   kind: "Unincorporated community association",
   role: "About twenty privately and trust-owned dwellings. Contribution and garden work. Occupancy, not a lot sale.",
   status: "current",
   layer: "membership",
  },
 ],
 dyssekilde: [
  {
   name: "Økosamfundet Dyssekilde",
   kind: "Danish housing cooperative / eco-village association",
   role: "Owns communal ground and the former farm building at Torup. Four annual meetings of the whole community.",
   status: "current",
   layer: "land",
   year: "1990",
   forms: ["Housing cooperative"],
  },
  {
   name: "Household groups (domes, terraces, self-build, social-rent)",
   kind: "Danish housing cooperative",
   role: "About 80–82 households in several styles. At least one neighbourhood association owns a shared geothermal system.",
   status: "current",
   layer: "membership",
  },
  {
   name: "Social-rent houses",
   kind: "Danish housing cooperative",
   role: "1990s communal-money flats so the village would not only be for self-builders.",
   status: "current",
   layer: "membership",
   year: "1990s",
  },
 ],
 "greater-world": [
  {
   name: "Greater World Community / lot owners",
   kind: "U.S. fee-simple subdivision",
   role: "Lots of 1–3 acres, fee simple. Plat for about 130 homes. More than half the ~630 acres in common.",
   status: "current",
   layer: "land",
   year: "1992",
   forms: ["Freehold title"],
  },
  {
   name: "Greater World board / Land User’s Code",
   kind: "U.S. homeowners association",
   role: "Board of directors, published dues for roads. A 2026 jury held Michael Reynolds, not the HOA, financially responsible for basic infrastructure. Confirm current papers.",
   status: "current",
   layer: "membership",
   forms: ["Homeowners association"],
  },
  {
   name: "Earthship Biotecture visitor centre",
   kind: "U.S. trading company",
   role: "Tours, academy, the photograph. A business at the edge of the neighbourhood, not the lot landlord of every house behind it.",
   status: "associated",
   layer: "enterprise",
  },
 ],
 narara: [
  {
   name: "Narara Ecovillage Co-operative Ltd",
   kind: "NSW housing cooperative",
   role: "Holds the former DPI horticultural research station. Members buy in and build under covenants. WICA water licence 17_040.",
   status: "current",
   layer: "land",
   year: "2006 (co-op); land in the 2010s",
   forms: ["Housing cooperative"],
  },
  {
   name: "Residential lots (~12 ha)",
   kind: "NSW community-titles lot",
   role: "Stage-1 blocks and later cluster houses. A dwelling is the membership door. Conservation hectares are not those lots.",
   status: "current",
   layer: "membership",
   forms: ["Body corporate", "Freehold title"],
  },
  {
   name: "Food co-operative and common gardens",
   kind: "NSW farm cooperative",
   role: "Published food co-op and unfenced common gardens between homes.",
   status: "current",
   layer: "enterprise",
   forms: ["CSA"],
  },
 ],
 lammas: [
  {
   name: "Lammas / Tir y Gafel smallholdings",
   kind: "UK 1000-year agricultural lease",
   role: "Each household holds a 1000-year agricultural lease rather than a freehold. Originally nine holdings of about 7 acres.",
   status: "current",
   layer: "land",
   year: "2009",
   forms: ["Ground lease"],
  },
  {
   name: "Community hub",
   kind: "UK community building / education",
   role: "Timber, straw-bale, DECC-funded. Courses, conferences, open days. The public room of the hillside.",
   status: "current",
   layer: "education",
   year: "2009–",
  },
  {
   name: "One Planet Development planning",
   kind: "Welsh planning covenant",
   role: "2009 local low-impact consent, then national OPD policy. Monitoring is a planning condition.",
   status: "current",
   layer: "covenant",
   year: "2009",
   forms: ["Conservation covenant"],
  },
 ],
 tempelhof: [
  {
   name: "Schloss Tempelhof foundation",
   kind: "German nonprofit foundation",
   role: "Owns the ground at Kreßberg. 99-year leasehold to the eG so the hamlet cannot be flipped.",
   status: "current",
   layer: "land",
   year: "2010",
   forms: ["Nonprofit foundation"],
  },
  {
   name: "Schloss Tempelhof eG",
   kind: "German registered cooperative (eG)",
   role: "Amtsgericht München GnR 2585. Settlement, buildings, infrastructure, self-sufficiency. One member, one vote, independent of deposit size.",
   status: "current",
   layer: "membership",
   year: "2010",
   identifier: "GnR 2585",
   forms: ["Housing cooperative"],
  },
  {
   name: "Farm, SoLaWi, guesthouse, school",
   kind: "German community enterprise",
   role: "Organic farm, vegetable crates, shop, seminar house, SchlossCafé, school for free unfolding. The earned face.",
   status: "current",
   layer: "enterprise",
  },
 ],
 govardhan: [
  {
   name: "ISKCON Govardhan Ecovillage / Chowpatty",
   kind: "Indian religious charitable trust",
   role: "Temple and ashram project of Sri Sri Radha-Gopinatha, Chowpatty. Holds the Galtare land. Not a housing co-op of lots.",
   status: "current",
   layer: "land",
   year: "2003 (land); 2010 (named village)",
   forms: ["Religious society"],
  },
  {
   name: "Sri Sri Radha Madanmohan Temple",
   kind: "Hindu temple",
   role: "Inaugurated 2019. The religious centre of the campus.",
   status: "current",
   layer: "covenant",
   year: "2019",
  },
  {
   name: "Govardhan Rural Development, gurukula, Ayurveda, GSC",
   kind: "Indian educational and rural-development programmes",
   role: "Rural outreach 2010, gurukula from 2006, Ayurveda centre, Govardhan School of Consciousness. Programmes, not title.",
   status: "current",
   layer: "education",
  },
 ],
 cambium: [
  {
   name: "Leben in Gemeinschaft (Verein)",
   kind: "Austrian registered association",
   role: "Founded 2014. Civil face of the community. Andreas Schindler first Obmann.",
   status: "current",
   layer: "membership",
   year: "2014",
   forms: ["Cultural association"],
  },
  {
   name: "Hadik barracks / Vermögenspool",
   kind: "Austrian community finance / asset pool",
   role: "Rented 2017, bought May 2019 with direct credit from 250+ investors. Holds the former military site.",
   status: "current",
   layer: "land",
   year: "2019",
   forms: ["Community finance"],
  },
  {
   name: "Farm, kitchen, academy, co-working",
   kind: "Austrian community enterprise",
   role: "Organic farming, catering, personal-growth academy, studios. The earned week.",
   status: "current",
   layer: "enterprise",
  },
 ],
 arterra: [
  {
   name: "Asociación Arterra Bizimodu",
   kind: "Spanish cultural association",
   role: "Civil face of the Artieda house. Open doors, ESC, courses. C/ Abajo 1.",
   status: "current",
   layer: "membership",
   year: "2014",
   forms: ["Cultural association"],
  },
  {
   name: "Cooperative capital / integrated members",
   kind: "Spanish housing cooperative",
   role: "Integration fee plus cooperative capital after the trial. Monthly contribution and ~30 hours a month of work.",
   status: "current",
   layer: "membership",
   forms: ["Housing cooperative"],
  },
  {
   name: "Artieda house (former boarding school / hotel)",
   kind: "Spanish private / community building",
   role: "1930 religious school on older fabric, including a station. The building is the village.",
   status: "current",
   layer: "land",
   year: "2013–14 occupancy",
  },
 ],
};

export const livingMoreLand: Record<string, LandOwnership> = {
 meltemi: {
  owner: "Meltemi commons, 150 stremma outside Rafina, Attica",
  complexity: "simple",
  tenure: "Commons / nonprofit",
  howHeld: "Families have kept the plot since 1946. Written rules from the mid-1950s. A nonprofit NGO is the civil face. This atlas found no private house-lot cadastre.",
  narrative: "They did not own it at the start. They moved in and took care of it. Four generations later the coast is still a commons, not a Rafina subdivision.",
  divided: [],
 },
 tui: {
  owner: "Tui Spiritual and Educational Trust, 50–52 ha at Wainui Bay",
  complexity: "simple",
  tenure: "Charitable trust",
  howHeld: "A New Zealand charitable trust holds the farm. Dwellings are privately and trust-owned occupancy on that title. No subdivision of the Wainui land.",
  narrative: "1984 purchase on the edge of Abel Tasman. Sea, farm, park. Residents put into the hat what they could. The trust is why the farm is still one piece.",
  divided: [],
 },
 dyssekilde: {
  owner: "Økosamfundet Dyssekilde, 14 ha at Torup",
  complexity: "split",
  tenure: "Cooperative",
  howHeld: "The community owns communal ground and the former farm. Households sit in groups — some self-build, some social-rent. Neighbourhood associations hold shared kit such as geothermal.",
  narrative: "A potato field that grew eighty houses. Half the 14 hectares is still farm. The rental flats were a political choice: not only for people who could finance a dome.",
  divided: [
   {
    label: "Communal ground and farm",
    holder: "Økosamfundet Dyssekilde",
    share: "About half of 14 ha, plus the old farm building",
    what: "The village’s common land and the building they started with.",
   },
   {
    label: "Household groups",
    holder: "About 80–82 households in several styles",
    share: "Domes, terraces, straw-bale, experimental self-build, social-rent",
    what: "A house is the door. Groups run heat and the week.",
   },
  ],
 },
 "greater-world": {
  owner: "Greater World lot owners plus common land, ~630 acres west of Taos",
  complexity: "split",
  tenure: "Hybrid",
  howHeld: "Fee-simple lots of 1–3 acres. More than half the mesa in common. A board and Land User’s Code. Biotecture visitor centre is a separate business at the edge.",
  narrative: "Reynolds’s 1992 mesa. Earthships, solar, rainwater, tires in the walls. A neighbourhood that photographs as a visitor centre. The 2026 infrastructure verdict is part of the title story now.",
  divided: [
   {
    label: "Residential lots",
    holder: "Individual owners, fee simple",
    share: "1–3 acres; plat for ~130 homes; ~90–115 earthships standing",
    what: "You buy a lot and build (or buy) an earthship. Off-grid by design.",
   },
   {
    label: "Common land",
    holder: "Community / association",
    share: "More than half of ~630 acres",
    what: "Mesa, roads, the reason the lots work.",
   },
  ],
 },
 narara: {
  owner: "Narara Ecovillage Co-operative Ltd, 63 ha at Narara",
  complexity: "split",
  tenure: "Cooperative",
  howHeld: "NSW co-operative holds the former horticultural station. About 12 ha residential; the rest conservation, creek, food, old trial trees. Members build under covenants.",
  narrative: "Darkinjung country. A research station that kept its trees. Twelve hectares of housing so the other fifty-one could stay the point of the purchase.",
  divided: [
   {
    label: "Residential",
    holder: "Co-op members / dwellings",
    share: "~12 ha, 50+ homes",
    what: "A house is the membership door.",
   },
   {
    label: "Conservation, creek, food, old plantings",
    holder: "Narara Ecovillage Co-operative Ltd",
    share: "The rest of 63 ha",
    what: "Birds, the research trees, the food co-op. Not lots.",
   },
  ],
 },
 lammas: {
  owner: "Tir y Gafel smallholdings under 1000-year agricultural leases, Glandwr",
  complexity: "split",
  tenure: "Ground lease",
  howHeld: "Each household holds a 1000-year agricultural lease. Originally nine holdings of about 7 acres plus a hub on 76 acres. Later peripheral holdings have been described as growing the map.",
  narrative: "A hillside that had to prove a livelihood to a planning committee. The lease is the lock: long enough to plant a coppice, not a freehold you flip to a second-home market.",
  divided: [
   {
    label: "Smallholdings",
    holder: "Households on 1000-year agricultural leases",
    share: "Originally nine of ~7 acres; later peripheral households",
    what: "Food, fuel, income from the land. The OPD test.",
   },
   {
    label: "Hub and shared hydro",
    holder: "Community",
    share: "Hub building; 27 kW hydro",
    what: "Courses, open days, the turbine.",
   },
  ],
 },
 tempelhof: {
  owner: "Schloss Tempelhof foundation (ground) / eG (99-year leasehold), Kreßberg",
  complexity: "split",
  tenure: "Hybrid",
  howHeld: "Nonprofit foundation owns the ground. Registered cooperative holds a 99-year leasehold and runs buildings, farm, guesthouse. One member, one vote.",
  narrative: "A Templar hamlet taken off the market. The foundation is why a departing member cannot sell the dirt from under the rest.",
  divided: [
   {
    label: "Ground",
    holder: "Schloss Tempelhof foundation",
    share: "The hamlet and farm at Tempelhof 3",
    what: "Title lock. 99-year lease to the eG.",
   },
   {
    label: "Buildings, farm, guesthouse",
    holder: "Schloss Tempelhof eG",
    share: "Settlement, infrastructure, enterprises",
    what: "The cooperative that lives there.",
   },
  ],
 },
 govardhan: {
  owner: "ISKCON Govardhan Ecovillage, Galtare, Wada",
  complexity: "simple",
  tenure: "Religious trust",
  howHeld: "Indian religious/charitable trust of ISKCON Chowpatty. 25 acres in 2003; later published figures 85–140 acres. Staff, brahmacharis, families, and guests occupy. No member lots.",
  narrative: "A goshala that became a named ecovillage. Cows first. Temple later. The Vaitarna and the Sahyadris are the setting, not a Palghar subdivision.",
  divided: [],
 },
 cambium: {
  owner: "Cambium Vermögenspool / Verein, former Hadik barracks, Fehring",
  complexity: "simple",
  tenure: "Association / community finance",
  howHeld: "Rented 2017, bought May 2019 with direct credit from 250+ investors. The Verein is the community; the pool is the purchase. Occupancy, not condominium lots of the barracks.",
  narrative: "A 1960s drill ground becoming a village. Military rooms into dwellings. Farmland where the training field was.",
  divided: [],
 },
 arterra: {
  owner: "Arterra Bizimodu, former boarding school at Artieda",
  complexity: "simple",
  tenure: "Association / cooperative",
  howHeld: "The Artieda house is the village: occupancy by association members, then cooperative capital for those who integrate. This atlas found no mapped hectare farm treated as separate title.",
  narrative: "A 1930 religious school, a station in the fabric, a hotel, then a house of forty. The building is the land story.",
  divided: [],
 },
};

export const livingMoreFunding: Record<string, CommunityFunding> = {
 meltemi: {
  overview: "A four-generation commons paid by households, not by a Rafina lot market. This atlas found no published grant ledger.",
  grantsHeadline: "None isolated",
  privateHeadline: "Households and a commons",
  grants: [
   {
    source: "No major public land-purchase grant found",
    amount: "—",
    certainty: "estimated",
    kind: "other",
    note: "1946 occupation. Confirm any later municipal or EU line before you invent one.",
   },
  ],
  private: [
   {
    source: "Household contributions to a 200-family commons",
    amount: "Ongoing, unpublished",
    year: "1946–present",
    certainty: "estimated",
    kind: "member-equity",
    note: "A coast kept in common. Not a lot sale.",
   },
  ],
 },
 tui: {
  overview: "A Golden Bay farm paid by the 1984 hat, resident contributions, garden, and hosted stays, not by Wainui lots.",
  grantsHeadline: "None isolated",
  privateHeadline: "Trust purchase, contributions, stays",
  grants: [
   {
    source: "No major public purchase grant found",
    amount: "—",
    certainty: "estimated",
    kind: "other",
    note: "Residents put in what they could afford in 1984.",
   },
  ],
  private: [
   {
    source: "1984 land purchase (~NZ$7,000/acre in the community history) and ongoing contributions, work exchanges, hosted stays",
    amount: "Earned and given",
    year: "1984–present",
    certainty: "documented",
    kind: "member-equity",
    note: "tuitrust.org.nz. The farm is the trust’s.",
   },
  ],
 },
 dyssekilde: {
  overview: "A Torup eco-village paid by household finance, communal money for social-rent, surplus electricity, and the farm, not by a Hundested lot catalogue.",
  grantsHeadline: "Communal social-rent build",
  privateHeadline: "Households and farm",
  grants: [
   {
    source: "1990s social-rent houses from communal money",
    amount: "Communal, 1990s",
    year: "1990s",
    certainty: "documented",
    kind: "other",
    note: "A political choice: not only for self-builders.",
   },
  ],
  private: [
   {
    source: "Household construction, farm, surplus electricity",
    amount: "Earned, village scale of ~200 people",
    year: "1990–present",
    certainty: "documented",
    kind: "member-equity",
    note: "Houses turn over inside groups.",
   },
  ],
 },
 "greater-world": {
  overview: "A west-mesa neighbourhood paid by lot sales, Biotecture tours and academy, and household off-grid life. Dues for roads. A 2026 jury put infrastructure cost back on the developer.",
  grantsHeadline: "None isolated",
  privateHeadline: "Lots, tours, dues",
  grants: [
   {
    source: "No public land-purchase grant found",
    amount: "—",
    certainty: "estimated",
    kind: "other",
    note: "Reynolds’s 1992 mesa.",
   },
  ],
  private: [
   {
    source: "Fee-simple lots (1–3 acres), Earthship Biotecture visitor centre, published dues ~$175/year",
    amount: "Market lots plus tour/academy income",
    year: "1992–present",
    certainty: "documented",
    kind: "member-equity",
    note: "earthship.com/land-for-sale. Visitor centre is the photograph; lots are the neighbourhood.",
   },
  ],
 },
 narara: {
  overview: "A Central Coast co-op paid by member equity, house building, a food co-op, and the bills of 63 hectares, not by selling the conservation land.",
  grantsHeadline: "None isolated",
  privateHeadline: "Co-op shares and dwellings",
  grants: [
   {
    source: "No major public purchase grant found",
    amount: "—",
    certainty: "estimated",
    kind: "other",
    note: "Former DPI station taken on by the co-op.",
   },
  ],
  private: [
   {
    source: "Member equity, dwelling construction, food co-operative",
    amount: "Ongoing",
    year: "2006–present",
    certainty: "documented",
    kind: "member-equity",
    note: "A house is the door.",
   },
  ],
 },
 lammas: {
  overview: "Nine smallholdings paid by land-based livelihoods, a DECC-funded hub, and a shared hydro, under a planning test that they substantially support themselves from the land.",
  grantsHeadline: "Hub / DECC",
  privateHeadline: "Smallholding livelihoods",
  grants: [
   {
    source: "Department of Energy and Climate Change funding for the community hub",
    amount: "Public contribution to the hub (published as DECC-funded)",
    year: "~2009–12",
    certainty: "documented",
    kind: "grant",
    note: "The hub, not the houses. Houses were self-built (one original ~£27,000).",
   },
  ],
  private: [
   {
    source: "Land-based livelihoods, courses, open days, 27 kW hydro",
    amount: "Earned from the holdings",
    year: "2009–present",
    certainty: "documented",
    kind: "business",
    note: "OPD is a livelihood test, not a grant for the hillside.",
   },
  ],
 },
 tempelhof: {
  overview: "A Kreßberg hamlet paid by member deposits, farm, SoLaWi, guesthouse, seminars, and gifts — on land a foundation took off the market.",
  grantsHeadline: "Gifts to specific builds",
  privateHeadline: "eG deposits, farm, guests",
  grants: [
   {
    source: "Own capital and donations for the Earthship community room",
    amount: "€298,500 published project cost",
    year: "2015",
    certainty: "documented",
    kind: "donation",
    note: "GEN Europe write-up of the Earthship.",
   },
  ],
  private: [
   {
    source: "Cooperative deposits, organic farm, SoLaWi, guesthouse, shop, seminars",
    amount: "Earned and member-financed, village of ~130",
    year: "2010–present",
    certainty: "documented",
    kind: "member-equity",
    note: "schloss-tempelhof.de. One member, one vote, whatever the deposit.",
   },
  ],
 },
 govardhan: {
  overview: "An ISKCON ashram paid by donations, guest stays, Ayurveda, courses, and rural-development programmes. Ponds at published crore-scale. Not a Palghar lot sale.",
  grantsHeadline: "Awards and programme funds",
  privateHeadline: "Donations, guests, courses",
  grants: [
   {
    source: "Green-building and responsible-tourism awards (UNWTO, WTM, GRIHA and others of record)",
    amount: "Recognition; not itself the land purchase",
    year: "2010s–2021",
    certainty: "documented",
    kind: "award",
    note: "Awards pages on ecovillage.org.in. Confirm current trophies before you treat a list as income.",
   },
  ],
  private: [
   {
    source: "Donations, guest campus, Ayurveda, GSC courses, farm and goshala",
    amount: "Ongoing charitable and earned income; ponds published at ₹1 crore (2022) and ₹12 crore (2024)",
    year: "2003–present",
    certainty: "documented",
    kind: "donation",
    note: "A religious charity. iskcongev.com for stays.",
   },
  ],
 },
 cambium: {
  overview: "A Fehring barracks paid by a Vermögenspool of 250+ investors, member life, farm, kitchen, and academy. Purchase May 2019. About €1.2 million invested by an early 2019 report.",
  grantsHeadline: "EU circular-building demos",
  privateHeadline: "Asset pool and enterprises",
  grants: [
   {
    source: "HOUSEFUL and related EU circular-building demonstration work on the community centre",
    amount: "Project partnership, not the land purchase",
    year: "2019–",
    certainty: "documented",
    kind: "grant",
    note: "A living lab. The barracks were bought with the pool.",
   },
  ],
  private: [
   {
    source: "Vermögenspool (250+ investors, May 2019 purchase), farm, catering, academy",
    amount: "~€1.2 million invested by a 2019 report, plus ongoing",
    year: "2017–present",
    certainty: "documented",
    kind: "member-equity",
    note: "pool@cambium.at. Not a condominium sale of the Kaserne.",
   },
  ],
 },
 arterra: {
  overview: "An Artieda house paid by monthly contributions, cooperative capital, conservas, courses, and ESC, not by a village lot map.",
  grantsHeadline: "ESC / European placements",
  privateHeadline: "Contributions and workshops",
  grants: [
   {
    source: "European Solidarity Corps placements",
    amount: "Food, lodging, an eight-month cohort in published years",
    certainty: "documented",
    kind: "grant",
    note: "Accredited organisation on the European Youth Portal.",
   },
  ],
  private: [
   {
    source: "Monthly resident contribution, integration fee, cooperative capital, Conservas Gukalde, open-door days",
    amount: "Earned and member-financed, house of ~40–50",
    year: "2014–present",
    certainty: "documented",
    kind: "member-equity",
    note: "arterrabizimodu.org. About 30 hours a month of work is part of the price.",
   },
  ],
 },
};

export const livingMoreVisitJoin: Record<string, VisitJoin> = {
 meltemi: {
  visit: 2,
  join: 1,
  visitProcess:
   "Just outside Rafina, Attica. This is a four-generation commons of more than 200 families, many seasonal. There is no guesthouse catalogue this atlas found. Write through the GEN listing. Do not treat a Rafina beach day as a tour of the plot.",
  joinProcess:
   "A household commons with written rules from the 1950s. Four generations. Harder than an Attica rental. A stranger does not become a family by asking once.",
 },
 tui: {
  visit: 3,
  join: 2,
  visitProcess:
   "Wainui Bay, 23 km from Tākaka, Golden Bay. tuitrust.org.nz. Work exchanges, hosted stays, and rentals are the public doors. Write. The farm is a home on the edge of Abel Tasman, not a trailhead car park.",
  joinProcess:
   "Occupancy on trust land. Contribution and garden work. There is no member share you can flip. Harder than a Golden Bay holiday house; possible if they are taking people.",
 },
 dyssekilde: {
  visit: 3,
  join: 3,
  visitProcess:
   "Torup, between Frederiksværk and Hundested, North Zealand. A living village of about 80 houses. Arrange. Domes and terraces are homes. VisitNordsjælland lists it; that is not a licence to walk every path.",
  joinProcess:
   "Join a household group when a dwelling turns — self-build culture, terraces, or the social-rent stock. Four annual meetings of the whole community. Harder than a Hundested rental; more defined than a closed household.",
 },
 "greater-world": {
  visit: 5,
  join: 4,
  visitProcess:
   "Earthship visitor centre west of Taos, on the way to Tres Piedras. Tours, academy, the photograph. earthship.com. The neighbourhood behind the centre is private. Drive the public road; do not treat every tire wall as a show home.",
  joinProcess:
   "Buy a lot (1–3 acres, fee simple) when one is offered, build or buy an earthship, live under the Land User’s Code. Easier than a commune; still off-grid high desert. Confirm HOA papers after the 2026 infrastructure verdict.",
 },
 narara: {
  visit: 3,
  join: 4,
  visitProcess:
   "Narara, Central Coast NSW, former horticultural station. Open days and listed visits. Homes are homes; the conservation creek is not a dog run for Gosford.",
  joinProcess:
   "Buy into the co-operative when a dwelling turns, build under covenants. A house is the door. Easier than a closed income-sharing farm; still a co-op, not a Central Coast suburb without rules.",
 },
 lammas: {
  visit: 4,
  join: 2,
  visitProcess:
   "Tir y Gafel, Glandwr, near Crymych, Pembrokeshire. Community hub: courses, conferences, open days. Grand Designs made it famous. Smallholdings are homes and livelihoods. Book the hub; do not walk a holding as a viewpoint.",
  joinProcess:
   "A 1000-year agricultural lease and a land-based livelihood under One Planet monitoring. Originally nine holdings; later peripheral households. Harder than a Pembrokeshire cottage. You have to live from the land.",
 },
 tempelhof: {
  visit: 5,
  join: 2,
  visitProcess:
   "Tempelhof 3, 74594 Kreßberg. schloss-tempelhof.de. Guesthouse for groups of 18–140 with full board from the farm; shop; Sunday café; seminars. info@schloss-tempelhof.de, +49 7957 92390-30. Book. Residents’ houses are not the seminar.",
  joinProcess:
   "Wege in die Gemeinschaft / Kennenlernen on the site. eG membership, one vote, on foundation land. A seminar weekend is not a share. Harder than a Crailsheim rental.",
 },
 govardhan: {
  visit: 5,
  join: 1,
  visitProcess:
   "Galtare, Wada, Palghar, about two hours from Mumbai. ecovillage.org.in and iskcongev.com. Guest rooms, temple, goshala, Ayurveda, walks. Book. +91 99200 55993 of record on the stay page. A campus, not a drop-in on brahmachari housing.",
  joinProcess:
   "ISKCON ashram life: discipleship, staff, gurukula, or a job. There is no member share and no private title. Very hard as residential membership; easy as a booked guest.",
 },
 cambium: {
  visit: 3,
  join: 2,
  visitProcess:
   "Kasernenstraße 2, 8350 Fehring. Academy, kitchen, an open hub. Write info@cambium.at, +43 3155 28501. A former barracks that is now a home. Do not treat the Kasernenberg as a ruin to explore.",
  joinProcess:
   "Verein plus life in the converted barracks. Vermögenspool is the investment door (pool@cambium.at), not automatically a bed. Harder than a Fehring rental; they are still taking people toward a village of ~100.",
 },
 arterra: {
  visit: 4,
  join: 2,
  visitProcess:
   "C/ Abajo 1, Artieda, Navarra. arterrabizimodu.org. Puertas abiertas on published weekends; courses; ESC. +34 626 940 441 of record. Write. The house is a home of forty. Open-door day is not a spare bedroom.",
  joinProcess:
   "Visit, trial, monthly contribution, ~30 hours a month of work, then integration fee and cooperative capital. Sociocracy. An eight-month ESC is not membership. Harder than a Navarrese rental.",
 },
};

export const livingMoreDailyLife: Record<string, DailyLife> = {
 meltemi: {
  typical: [
   { title: "Coast and commons", detail: "A 150-stremma plot outside Rafina. Land-care rules from the 1950s. Four generations, many seasonal. Summer is the crowded season." },
   { title: "Households", detail: "More than 200 families. Huts became houses. The board is technical; neighbours enforce the rest." },
   { title: "Keeping the plot", detail: "Preservation against sale and against the kind of Attica coast development that ate the next bay. Care is the founding act." },
  ],
  unique: {
   title: "A 1946 commons that never became lots",
   detail: "Meltemi is four generations on a plot they first occupied, written rules from the 1950s, an NGO face, no house-lot cadastre this atlas found.",
  },
 },
 tui: {
  typical: [
   { title: "Organic garden and orchard", detail: "The week’s work. Members are expected to contribute labour and running costs. A Golden Bay farm that has to eat." },
   { title: "Trust land, sea, park", detail: "50 hectares between Wainui Bay and Abel Tasman. Dwellings on the trust, not a subdivision." },
   { title: "Hosted stays and work exchange", detail: "The public door. Guests work or pay. They do not become trustees on day two." },
  ],
  unique: {
   title: "The Wainui trust that rewrote its objects",
   detail: "Tui is 1984, a hat for the purchase, then a new spiritual and educational trust so the deed would match the life.",
  },
 },
 dyssekilde: {
  typical: [
   { title: "Eighty houses, several styles", detail: "Domes, terraces, straw-bale, experimental self-build, a few social-rent flats. Neighbourhoods run their own heat." },
   { title: "Organic farm on half the land", detail: "14 hectares, half buildings, half farming. A potato field that still grows food." },
   { title: "Surplus electricity, own wastewater", detail: "They produce more power than they use. Four annual meetings of the whole community." },
  ],
  unique: {
   title: "Denmark’s first eco-village, with social-rent on purpose",
   detail: "Dyssekilde put communal money into rental houses in the 1990s so the village would not only be for people who could finance a dome.",
  },
 },
 "greater-world": {
  typical: [
   { title: "Earthship", detail: "Tire walls, rammed earth, south glass, rain on the roof into cisterns. Off-grid by design. Each new build is supposed to perform better than the last." },
   { title: "Mesa", detail: "West of Taos, high desert, wind and sun. Lots of 1–3 acres. More than half the 630 acres in common." },
   { title: "Visitor centre at the edge", detail: "Tours and the academy are the photograph. Residents live off that path." },
  ],
  unique: {
   title: "The large earthship neighbourhood, and a 2026 verdict about who pays for the road",
   detail: "Greater World is Reynolds’s 1992 mesa, fee-simple lots, a Land User’s Code, and a jury that put infrastructure back on the developer.",
  },
 },
 narara: {
  typical: [
   { title: "Unfenced common gardens", detail: "Food forests between homes, no fences in the published permaculture brief. A food co-op. The old research trees still fruit." },
   { title: "Creek and conservation", detail: "Most of 63 hectares is not housing. Birds, the station plantings, Darkinjung country." },
   { title: "Building under covenants", detail: "Fifty-plus dwellings on 12 residential hectares. A co-op, a WICA water licence, the ordinary bills of a NSW village." },
  ],
  unique: {
   title: "A horticultural research station that kept its trees",
   detail: "Narara is a 63-hectare co-op on a former DPI station: 12 ha of housing so the rest could stay the point. The co-op formed in 2006 and holds a WICA water licence (17_040).",
  },
 },
 lammas: {
  typical: [
   { title: "Smallholding", detail: "About 7 acres per original household: food, fuel, a land-based income. Coppice, gardens, animals. The OPD test is that this is how you live." },
   { title: "Hydro and timber heat", detail: "Shared 27 kW turbine. Dump loads into heat. Coppice and waste timber for the rest." },
   { title: "Hub", detail: "Courses, open days, the public room. Straw-bale, local timber, a masonry stove. Grand Designs came once." },
  ],
  unique: {
   title: "The first One Planet village, on a 1000-year lease",
   detail: "Lammas is 2009 permission, nine holdings, a livelihood test written into Welsh planning. The lease is the lock.",
  },
 },
 tempelhof: {
  typical: [
   { title: "Farm and SoLaWi", detail: "Organic, regenerative, permaculture, edible forest garden, agroforestry. Weekly vegetable crates. Shop three weekdays and Saturday." },
   { title: "Guesthouse and seminars", detail: "Groups of 18–140, full board from the land. A school for free unfolding. The public week." },
   { title: "Cooperative hamlet", detail: "About 130 people. One member, one vote. Foundation dirt, eG buildings." },
  ],
  unique: {
   title: "A Templar hamlet on a 99-year foundation lease",
   detail: "Schloss Tempelhof is 2010, an eG on foundation land, so nobody can sell the village from under the rest.",
  },
 },
 govardhan: {
  typical: [
   { title: "Goshala and fields", detail: "Cows first, in 2003. Organic agriculture, a later large pond. Seva in the Vedic sense is the weekday.",
   },
   { title: "Temple, gurukula, Ayurveda", detail: "Darshan, students, a clinic. Govardhan School of Consciousness in season. A campus that teaches." },
   { title: "Guests", detail: "Rooms, walks, a two-hour drive from Mumbai. Booked. The ashram eats and houses more than the tour sees." },
  ],
  unique: {
   title: "An ISKCON goshala that took the ecovillage name",
   detail: "Govardhan is 2003 land, 2010 scaling, Radhanath Swami’s farm in the Sahyadris. A trust, not a co-op.",
  },
 },
 cambium: {
  typical: [
   { title: "Barracks into dwellings", detail: "1960s military rooms becoming apartments, studios, a seminar house. The Kasernenberg is the walk home." },
   { title: "Kitchen and farm", detail: "Organic fields on former training ground. Catering. A village that has to eat." },
   { title: "Academy and co-working", detail: "Personal-growth courses, studios, an open hub. Investors in the pool are not automatically at breakfast." },
  ],
  unique: {
   title: "Austria’s barracks ecovillage, bought with a Vermögenspool",
   detail: "Cambium rented Hadik in 2017 and bought it in 2019 with 250 investors. A Verein, not a condominium.",
  },
 },
 arterra: {
  typical: [
   { title: "The house", detail: "A former boarding school in Artieda. About forty people, kitchens, conservas workshop, rooms that were once a hotel." },
   { title: "Auzolan and circles", detail: "Community work, sociocratic consent, about 30 hours a month. Yoga, meals, the week." },
   { title: "Open doors and ESC", detail: "Published weekends for strangers. Eight-month European volunteers in season. A course is not membership." },
  ],
  unique: {
   title: "Bizimodu: a way of life in a Navarrese school-house",
   detail: "Arterra is 2014, association plus cooperative capital, sociocracy, a building that is the village.",
  },
 },
};

export const livingMoreInformal: Record<string, InformalAgreement[]> = {
 meltemi: [
  { kind: "land-care", why: "Written rules from the 1950s on how the 150 stremma is kept. Guests stay off plantings they did not put in." },
  { kind: "membership-trial", why: "Four generations of families. A stranger does not become a household by asking once." },
  { kind: "kitchen-table", why: "A seasonal commons. Whose fridge in summer, whose in winter, who is actually on the plot this month." },
  { kind: "media-story", why: "The jewel of the commons. Every camera wants the unspoiled Attica coast. Who speaks, and which houses stay out of the frame." },
 ],
 tui: [
  { kind: "volunteer-intern", why: "Work exchanges and hosted stays. A week of labour is not a trustee’s key." },
  { kind: "land-care", why: "50 ha between sea and Abel Tasman. Guests stay on the path they were given." },
  { kind: "labour-roster", why: "Garden and orchard. Someone still has to pick. Members contribute; guests are rostered." },
  { kind: "guest-stay", why: "Rentals and hosted stays. Dwellings are homes. Book through the trust." },
 ],
 dyssekilde: [
  { kind: "building-code", why: "Domes, terraces, straw-bale, experimental self-build. What a new wall may do in each neighbourhood." },
  { kind: "membership-trial", why: "A household group when a dwelling turns. Four annual meetings of the whole community." },
  { kind: "land-care", why: "Half of 14 ha is farm. Guests stay off the beds." },
  { kind: "kitchen-table", why: "Eighty houses, several styles. Which kitchen is the neighbourhood’s and which is a family’s." },
 ],
 "greater-world": [
  { kind: "building-code", why: "Land User’s Code, earthship performance, off-grid kit. What a new tire wall may do, and what the board will actually enforce after 2026." },
  { kind: "guest-stay", why: "Visitor centre is the tour. Houses behind it are homes. Do not treat every south glass as a show home." },
  { kind: "membership-trial", why: "Buy a lot, build or buy an earthship, live under the code. A tour is not an offer." },
  { kind: "media-story", why: "The photograph is always the visitor centre. Residents still have to get to town on that road." },
 ],
 narara: [
  { kind: "building-code", why: "Co-op covenants on 12 residential hectares. What a house may look like, and that the conservation land is not a backyard you fence." },
  { kind: "land-care", why: "Creek, old research trees, birds. Guests stay off restoration they were not asked to." },
  { kind: "membership-trial", why: "A dwelling is the door. How a household leaves without treating 63 ha as a Central Coast lot." },
  { kind: "kitchen-table", why: "Unfenced common gardens and a food co-op. Who picks, who plants, which bed is whose." },
 ],
 lammas: [
  { kind: "land-care", why: "Each holding has to live from the land. Coppice, gardens, the hydro. Guests stay off a neighbour’s seven acres." },
  { kind: "course-host", why: "Hub courses and open days. The hillside is a classroom with livelihoods on it." },
  { kind: "building-code", why: "Low-impact, natural materials, One Planet monitoring. What a rebuild after fire may do without breaking the permission." },
  { kind: "membership-trial", why: "A 1000-year agricultural lease and a livelihood test. A Grand Designs fan is not a smallholder." },
 ],
 tempelhof: [
  { kind: "guest-stay", why: "Guesthouse, seminars, Sunday café. Residents’ houses are not the booking." },
  { kind: "labour-roster", why: "Farm, SoLaWi, kitchen, school. Someone still has to pack the crates." },
  { kind: "membership-trial", why: "Kennenlernen, then eG. A seminar is not a deposit." },
  { kind: "land-care", why: "Permaculture, agroforestry, an edible forest garden. Guests stay on the visit path." },
 ],
 govardhan: [
  { kind: "quiet-practice", why: "Vaishnava ashram, temple, seva. Guests follow ashram form; brahmachari housing is not the tour." },
  { kind: "guest-stay", why: "Booked rooms, Ayurveda, walks. A two-hour drive from Mumbai is not a drop-in." },
  { kind: "animals-stock", why: "Goshala first, 2003. Whose cow, who milks, who photographs." },
  { kind: "course-host", why: "Gurukula, GSC, rural development. A course week is not residence in the trust." },
 ],
 cambium: [
  { kind: "building-code", why: "A barracks becoming dwellings. What a military room may become, who books the seminar house." },
  { kind: "volunteer-intern", why: "Academy, kitchen, farm. A weekend is not a bed in the Kaserne." },
  { kind: "membership-trial", why: "Verein plus life on site. The Vermögenspool is money, not automatically a room." },
  { kind: "kitchen-table", why: "Shared catering. Who cooks, who is a child of the 75, when the dining room is a course." },
 ],
 arterra: [
  { kind: "volunteer-intern", why: "ESC of eight months, open-door weekends. A volunteer is not an integrated member." },
  { kind: "labour-roster", why: "About 30 hours a month. Auzolan. Someone still has to cook and keep the house." },
  { kind: "membership-trial", why: "Visit, contribution, hours, then integration fee and cooperative capital. Sociocracy." },
  { kind: "kitchen-table", why: "A house of forty. Conservas in the workshop. Which kitchen is the community’s." },
 ],
};
