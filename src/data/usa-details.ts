import type { LegalEntity } from "./legal-entities";
import type { LandOwnership } from "./land-ownership";
import type { CommunityFunding } from "./funding";
import type { VisitJoin } from "./visit-join";
import type { DailyLife } from "./daily-life";
import type { InformalAgreement } from "./informal-agreements";

export const usaMoreLegalEntities: Record<string, LegalEntity[]> = {
 "bryn-gweled": [
  {
   name: "Bryn Gweled Homesteads, Inc.",
   kind: "Pennsylvania homestead corporation",
   role: "Holds the 240 acres. Members are shareholders of the corporation, not lot owners. A Pennsylvania nonprofit from 1940, like a CLT by 99-year lease.",
   status: "current",
   layer: "land",
   year: "1940",
  },
  {
   name: "99-year leaseholds and house title",
   kind: "Ground leases + personal building title",
   role: "Families hold 99-year leases on about two acres each and own the house and improvements. You buy a house after an 80% membership vote. You never own the land.",
   status: "current",
   layer: "membership",
  },
  {
   name: "Heritage Conservancy easement",
   kind: "Land-conservation nonprofit",
   role: "Easement on most of the undeveloped common land, Heritage Conservancy’s first easement. A use restriction, not the landlord.",
   status: "current",
   layer: "covenant",
  },
 ],
 "the-vale": [
  {
   name: "Community Service, Inc. Land Trust",
   kind: "501(c)(3) community land trust",
   role: "Took the land under the houses in 1980. Arthur Morgan’s Yellow Springs nonprofit, later associated with Community Solutions. The landlord of the forty acres.",
   status: "current",
   layer: "land",
   year: "1980",
  },
  {
   name: "The Vale (incorporated 1960)",
   kind: "Non-exempt nonprofit",
   role: "The membership that occupies houses on trust land. Jane and Griscom Morgan’s 1946 woods; incorporated 1960. About eleven families. Not lots.",
   status: "current",
   layer: "membership",
   year: "1946; incorporated 1960",
  },
  {
   name: "Yellow Springs Home, Inc.",
   kind: "501(c)(3) community land trust",
   role: "The later village CLT of the town of Yellow Springs. A different title. Do not flatten the two trusts.",
   status: "associated",
   layer: "network",
  },
  {
   name: "Celo Community (sister lineage)",
   kind: "North Carolina 501(c)(4) land-holding nonprofit",
   role: "Arthur Morgan’s 1937 South Toe trust, where Ernest Morgan (Griscom’s brother) lived. A sister experiment, not this Greene County dirt.",
   status: "associated",
   layer: "network",
   year: "1937",
  },
 ],
 heathcote: [
  {
   name: "School of Living community land trust",
   kind: "501(c)(3) community land trust",
   role: "Holds the 44-acre Freeland creek valley. Mildred Loomis’s decentralist movement is the parent. Heathcote occupies on a 99-year lease as SoL headquarters.",
   status: "current",
   layer: "land",
  },
  {
   name: "Heathcote 99-year lease",
   kind: "Ground leases + personal building title",
   role: "The community’s occupancy of SoL land. A bed and a membership. Confirm who actually winters; the resident roll is small.",
   status: "current",
   layer: "membership",
  },
  {
   name: "Heathcote Education Center",
   kind: "On-site intern and education program",
   role: "Fiscally sponsored SoL entity after the 1970s split from the resident community. Gardens, analog forestry, a mill. Education, not the landlord.",
   status: "current",
   layer: "education",
   year: "1970s split",
  },
  {
   name: "Bill Anacker land",
   kind: "Previous landowner",
   role: "Anacker’s land was sold to School of Living and became Heathcote Center. Historical conveyor, not today’s title.",
   status: "historical",
   layer: "land",
   year: "1965",
  },
 ],
 "kimberton-hills": [
  {
   name: "Camphill Village Kimberton Hills",
   kind: "501(c)(3) nonprofit",
   role: "A Pennsylvania 501(c)(3). Owns the 432-acre former Myrin estate, the houses, and the workshops. Villagers, coworkers, and volunteers live in extended-family houses the charity owns.",
   status: "current",
   layer: "land",
   year: "1972",
  },
  {
   name: "Camphill Association of North America",
   kind: "Lateral movement association",
   role: "Network affiliation. Not the Kimberton landlord. Distinct from Camphill Village Copake and Camphill Communities Ontario in this atlas.",
   status: "associated",
   layer: "network",
  },
  {
   name: "Camphill Village Copake",
   kind: "501(c)(3) public charity",
   role: "The older U.S. Camphill, 1961. A sister village, not the Myrin estate title.",
   status: "associated",
   layer: "network",
   year: "1961",
  },
  {
   name: "Karin Myrin estate gift",
   kind: "Previous landowner",
   role: "Heir to the Myrin estate; gave the land in 1972 so a Camphill village could sit the land. Historical gift. Helen Zipperlen was a co-founder (remembered 2020, age 92).",
   status: "historical",
   layer: "land",
   year: "1972",
  },
 ],
 miccosukee: [
  {
   name: "Miccosukee Land Cooperative",
   kind: "Florida member-owned corporation",
   role: "Incorporated early 1974 after May 1973 presentations. Holds the common preserve and the membership.",
   status: "current",
   layer: "land",
   year: "1974",
  },
  {
   name: "Private homesteads",
   kind: "Private house title on co-op land",
   role: "Homesteads (one acre to several) are privately owned. The last deed went out in 2000. You own a homestead if you are a member, or you buy a member’s house when one is for sale.",
   status: "current",
   layer: "membership",
   year: "Last deed 2000",
  },
  {
   name: "Common nature preserve",
   kind: "Recorded private land-use regime",
   role: "Over 90 acres of common land the membership holds together as a nature preserve. Not house dirt and of the homesteads.",
   status: "current",
   layer: "covenant",
  },
  {
   name: "Small Change Foundation",
   kind: "Supporting nonprofit",
   role: "James Clement van Pelt, Anna Coble van Pelt, and Chris and Carol Headley started the project under Small Change in May 1973; options on the first 240 acres. Historical starter, not today’s landlord.",
   status: "historical",
   layer: "network",
   year: "1973",
  },
 ],
 "shannon-farm": [
  {
   name: "Shannon Farm Community land-and-housing trust",
   kind: "Virginia land-and-housing trust",
   role: "A private non-speculative trust that owns the land and the buildings on ~520 acres. Members occupy houses under affordability agreements. Not Twin Oaks income-sharing.",
   status: "current",
   layer: "land",
   year: "1974",
  },
  {
   name: "Member house occupancy",
   kind: "Private residential title / tenancy",
   role: "No joining fee; you need assets to rent or buy occupancy of a house the trust already owns. Prices kept below the Rockfish market. Income-based monthly dues. Consensus. The buildings stay with the trust.",
   status: "current",
   layer: "membership",
  },
  {
   name: "Twin Oaks (not this title)",
   kind: "Secular egalitarian corporation holding assets in common",
   role: "Louisa County income-sharing, a different Virginia pin. Shannon is not a common purse. Do not flatten the two.",
   status: "associated",
   layer: "network",
  },
 ],
 "village-homes": [
  {
   name: "Village Homes Homeowners Association",
   kind: "California homeowners association",
   role: "Holds common greens, bike paths, orchards, and the natural-drainage easements on the 70-acre west-Davis PUD. An HOA.",
   status: "current",
   layer: "membership",
   year: "1975–82",
  },
  {
   name: "Freehold houses and apartments",
   kind: "Ordinary freehold plus running covenants",
   role: "225 houses and 20 apartments. Lots sell on the open market subject to design review. Judy Corbett has sat the architectural review board and has lived there since 1976.",
   status: "current",
   layer: "land",
  },
  {
   name: "Michael and Judy Corbett / original development",
   kind: "Developer company",
   role: "Optioned 70 acres, raised $100,000 from friends, built from south to north through the early 1980s. Completed 1982. Historical builders, not today’s title of each house.",
   status: "historical",
   layer: "land",
   year: "1975–82",
  },
 ],
 songaia: [
  {
   name: "Songaia Cohousing",
   kind: "Washington cohousing HOA",
   role: "Individually owned homes plus common house and land on a Bothell forest-edge cluster. Houses sell.",
   status: "current",
   layer: "membership",
   year: "Land 1986; community 1993 / officially 2000",
  },
  {
   name: "Core cohousing freeholds",
   kind: "Ordinary freehold plus running covenants",
   role: "Often counted as 13 homes on about 11 acres. Buy a unit if one is for sale. Confirm which properties are the core.",
   status: "current",
   layer: "land",
  },
  {
   name: "Songaia internships",
   kind: "On-site intern and education program",
   role: "A public path into the cluster. Labour plus a bed.",
   status: "current",
   layer: "education",
  },
  {
   name: "Greater Neighborhood",
   kind: "Ordinary freehold plus running covenants",
   role: "Nearby houses that grew around the original 13. Associated cluster. Confirm the line.",
   status: "associated",
   layer: "covenant",
  },
 ],
 heartwood: [
  {
   name: "Heartwood Cohousing HOA",
   kind: "Colorado homeowners association",
   role: "Twenty-four privately owned homes completed in 2000. Cohousing consensus plus an HOA.",
   status: "current",
   layer: "membership",
   year: "2000",
  },
  {
   name: "24 freehold homes",
   kind: "Ordinary freehold plus running covenants",
   role: "Buying a house includes access to about 350 acres of open space, trails, common house, greenhouse, workshop, pasture, a yurt. Houses sell.",
   status: "current",
   layer: "land",
  },
  {
   name: "Open-space covenants (~350 acres)",
   kind: "Recorded private land-use regime",
   role: "Irrigated pasture, meadow, juniper and pine. Common. Confirm the covenants before you treat them as a park you own. Southern Ute and other Ute lands; 2000 is the settler completion date.",
   status: "current",
   layer: "covenant",
  },
 ],
};

export const usaMoreLand: Record<string, LandOwnership> = {
 "bryn-gweled": {
  owner: "Bryn Gweled Homesteads, Inc., 240 acres, 99-year leases, Heritage Conservancy easement",
  complexity: "split",
  tenure: "Ground lease",
  howHeld: "The corporation keeps the 240 acres. Families hold 99-year leases on about two acres each and own the house. Members are shareholders, not lot owners. Like a CLT by lease; not open lots.",
  narrative: "Spring 1940, Upper Southampton farm, Welsh ‘hill of vision.’ About 160 acres in two-acre leaseholds; ~80 acres woods, streams, community centre. Heritage Conservancy’s first easement sits on most undeveloped common. Early houses by Frank Lloyd Wright students.",
  divided: [
   { label: "Leaseholds", holder: "Member families on 99-year leases", share: "~160 acres in ~2-acre leaseholds (81 sites; ~75 houses)", what: "You own the house after an 80% vote. You never own the land." },
   { label: "Common woods", holder: "Bryn Gweled Homesteads, Inc.", share: "~80 acres woods, streams, community centre", what: "Work parties and assessments. Easement on most undeveloped common." },
  ],
 },
 "the-vale": {
  owner: "Community Service, Inc. Land Trust, 40 acres two miles south of Yellow Springs",
  complexity: "simple",
  tenure: "Community land trust",
  howHeld: "The 1980 land trust holds the land under the houses. Members occupy; houses are not sold as lots. Distinct from Yellow Springs Home, Inc., the later village CLT of the town, and from Celo.",
  narrative: "Jane and Griscom Morgan, 1946. Incorporated 1960. About eleven families, some Quaker in culture, no religious test. Quiet woods. Confirm who is on the forty acres this year.",
  divided: [],
 },
 heathcote: {
  owner: "School of Living community land trust, 44 acres, Heathcote on a 99-year lease",
  complexity: "simple",
  tenure: "Community land trust",
  howHeld: "SoL holds the Freeland creek valley. Heathcote took a 99-year lease as headquarters. A small resident group (4 resident adults plus non-residents; counts have been lower, confirm who winters) on trust land.",
  narrative: "1965, Anacker land, Mildred Loomis’s movement. 1970s split: community and Education Center. A mill in a narrow valley, biointensive gardens, analog forestry.",
  divided: [],
 },
 "kimberton-hills": {
  owner: "Camphill Village Kimberton Hills, 501(c)(3), 432 acres of the former Myrin estate",
  complexity: "simple",
  tenure: "Nonprofit",
  howHeld: "One Pennsylvania charity owns the farm, gardens, woodlands, and extended-family houses. Villagers and coworkers do not hold private lots. Distinct from Camphill Village Copake and Camphill Communities Ontario in this atlas.",
  narrative: "Karin Myrin gave the estate in 1972. Helen Zipperlen co-founded (died at 92; remembered 2020). About 110 people, biodynamic fields, crafts. Social care.",
  divided: [],
 },
 miccosukee: {
  owner: "Miccosukee Land Cooperative, private homesteads plus a 90+ acre common preserve",
  complexity: "split",
  tenure: "Housing cooperative",
  howHeld: "A Florida member-owned corporation. Homesteads are privately owned (last deed 2000). Over 90 acres stay a nature preserve in common.",
  narrative: "Van Pelts and Headleys, May 1973; MLC 1974; first members June 1974. A 500-year flood showed where to build. About 319–344 acres, 140+ households.",
  divided: [
   { label: "Homesteads", holder: "Member households, private title", share: "One acre to several; last deed 2000", what: "You own a homestead if you are a member. Finished." },
   { label: "Common preserve", holder: "Miccosukee Land Cooperative", share: "90+ acres nature preserve", what: "Held together. Not house dirt and." },
  ],
 },
 "shannon-farm": {
  owner: "Shannon Farm Community, private land-and-housing trust, ~520 acres in the Rockfish Valley",
  complexity: "simple",
  tenure: "Community land trust",
  howHeld: "The trust owns the land and the buildings. Members occupy under agreements that keep prices below the Rockfish market. About 30 occupied house sites of ~113 zoned cluster sites. Not Twin Oaks income-sharing.",
  narrative: "1974, eight house clusters, ~60 adults and ~20 children, about 70% wooded. Consensus at monthly business meetings. Forests were not clear-cut.",
  divided: [],
 },
 "village-homes": {
  owner: "225 freehold houses and 20 apartments plus an HOA on 70 acres of west Davis",
  complexity: "split",
  tenure: "Freehold + covenants",
  howHeld: "Houses are freehold. The HOA holds common greens, bike paths, orchards, and natural-drainage easements (about 20–25 acres). Lots sell. Famous eco-subdivision.",
  narrative: "Michael and Judy Corbett optioned 70 acres, first residents April 1976, completed 1982. Houses face common land; solar heating and bioswales were in the first drawings. Patwin land; 1976 is the settler construction date, not the first story of Putah Creek.",
  divided: [
   { label: "Freehold dwellings", holder: "Individual owners", share: "225 houses and 20 apartments", what: "A house is the membership path. Design review." },
   { label: "Commons and drainage", holder: "Village Homes HOA", share: "About 20–25 acres greens, orchards, bioswales", what: "The ecological claim is the design. Not lots of the creeks." },
  ],
 },
 songaia: {
  owner: "Songaia cohousing freeholds plus a Greater Neighborhood on about 13 acres in Bothell",
  complexity: "split",
  tenure: "Hybrid",
  howHeld: "Individually owned homes plus common house and land. Core often counted as 13 homes on about 11 acres; a Greater Neighborhood of nearby houses grew around it. Houses sell.",
  narrative: "Land bought 1986 as a boarding school; community dated 1993 in the IC directory and 2000 on the community’s own ‘officially born’ line. Coast Salish land; 1993/2000 is the settler cohousing date, not the first story of the creek.",
  divided: [
   { label: "Core cohousing", holder: "Individual owners in the original cluster", share: "13 homes on ~11 acres, plus common house", what: "A unit is the residential door. Internships are the other door." },
   { label: "Greater Neighborhood", holder: "Nearby houses around the original 13", share: "Later cluster on contiguous Bothell properties", what: "Confirm which properties are the core." },
  ],
 },
 heartwood: {
  owner: "24 freehold homes plus an HOA on 360 acres west of Bayfield",
  complexity: "split",
  tenure: "Homeowners association",
  howHeld: "Twenty-four privately owned homes in a small corner. Buying a house includes access to about 350 acres of open space, trails, common house, greenhouse, workshop, pasture, a yurt. Houses sell.",
  narrative: "A 1990s cohousing group moved in in 2000. The land, pasture, meadow, juniper and pine, was larger than the original housing dream. Southern Ute and other Ute lands; 2000 is the settler completion date.",
  divided: [
   { label: "Home cluster", holder: "24 individual owners, all in the HOA", share: "Pedestrian cluster completed 2000", what: "A house is the membership path. community@heartwoodcohousing.com when one turns." },
   { label: "Open space", holder: "Heartwood HOA / common covenants", share: "~350 acres pasture, meadow, forest", what: "Common. Confirm the covenants before you treat them as a park." },
  ],
 },
};

export const usaMoreFunding: Record<string, CommunityFunding> = {
 "bryn-gweled": {
  overview: "A 1940 Bucks County homestead paid by monthly assessments, unpaid work parties, and house sales after an 80% vote, not by lots.",
  grantsHeadline: "Heritage Conservancy easement",
  privateHeadline: "Assessments and house transfers",
  grants: [
   {
    source: "Heritage Conservancy conservation easement",
    amount: "Use restriction on most undeveloped common (its first easement)",
    certainty: "documented",
    kind: "easement",
    note: "A covenant. The corporation already held the 240 acres.",
   },
  ],
  private: [
   {
    source: "Monthly assessments and work parties",
    amount: "Ongoing; no paid officers",
    year: "1940–present",
    certainty: "documented",
    kind: "member-equity",
    note: "Roads, woods, community centre. Households work off-site.",
   },
   {
    source: "House sales after 80% membership vote",
    amount: "Building price when a family leaves",
    certainty: "documented",
    kind: "member-equity",
    note: "You buy a house on a 99-year lease. You never buy the land. bryngweled.org.",
   },
  ],
 },
 "the-vale": {
  overview: "A 40-acre Yellow Springs hamlet paid by household wages and shared land care, not by Greene County lots.",
  grantsHeadline: "None isolated",
  privateHeadline: "Households and land care",
  grants: [
   {
    source: "No major public land-purchase grant found",
    amount: ", ",
    certainty: "estimated",
    kind: "other",
    note: "The 1980 gift of land under the houses to the Community Service land trust is a donation of title.",
   },
  ],
  private: [
   {
    source: "Land under the houses donated to Community Service, Inc. Land Trust",
    amount: "Title (1980)",
    year: "1980",
    certainty: "documented",
    kind: "donation",
    note: "Arthur Morgan’s nonprofit took the land. transaction, and not Celo’s South Toe fee.",
   },
   {
    source: "Household livelihoods in Yellow Springs, at Antioch, or from home",
    amount: "Ongoing wages; shared land care",
    certainty: "estimated",
    kind: "business",
    note: "About eleven families. No lot sales. The public door is thin.",
   },
  ],
 },
 heathcote: {
  overview: "A 44-acre Freeland creek paid by members, donors, and an education centre, not by Baltimore County lots. Confirm occupancy; the resident roll is small.",
  grantsHeadline: "None isolated",
  privateHeadline: "Members, donors, education",
  grants: [
   {
    source: "No major public land-purchase grant found",
    amount: ", ",
    certainty: "estimated",
    kind: "other",
    note: "Anacker’s land went to School of Living. A CLT occupancy.",
   },
  ],
  private: [
   {
    source: "Member and donor support",
    amount: "Ongoing; unpublished here",
    certainty: "estimated",
    kind: "donation",
    note: "A small resident group on a 99-year lease. Four resident adults plus non-residents on the community count, confirm who winters.",
   },
   {
    source: "Heathcote Education Center programs and garden",
    amount: "Course and garden income (ongoing)",
    certainty: "estimated",
    kind: "courses",
    note: "The education centre is the public door. Education, not lot sales.",
   },
  ],
 },
 "kimberton-hills": {
  overview: "A 432-acre Chester County Camphill paid by disability-support contracts, gifts, and a biodynamic farm, not by Kimberton lots.",
  grantsHeadline: "Disability-support contracts",
  privateHeadline: "Gifts, farm, crafts",
  grants: [
   {
    source: "Pennsylvania disability-support / developmental-services contracts",
    amount: "Ongoing public care funding (undisclosed here)",
    year: "1972–present",
    certainty: "estimated",
    kind: "contract",
    note: "The cash engine of a Camphill charity. Confirm current programmes. Distinct from Copake’s OPWDD figures; do not copy those numbers here.",
   },
  ],
  private: [
   {
    source: "Karin Myrin’s 1972 estate gift",
    amount: "The Myrin estate (432 acres)",
    year: "1972",
    certainty: "documented",
    kind: "donation",
    note: "The origin of the village. A gift of dirt.",
   },
   {
    source: "Donor gifts, CSA/local food, weavery, pottery, mosaic, workshops",
    amount: "Ongoing",
    certainty: "documented",
    kind: "business",
    note: "camphillkimberton.org. Social care and craft, not house sales.",
   },
  ],
 },
 miccosukee: {
  overview: "A Leon County land co-op paid by private homesteads and common-land dues. The last deed was 2000.",
  grantsHeadline: "None isolated",
  privateHeadline: "Homestead title and co-op dues",
  grants: [
   {
    source: "No major public land-purchase grant found",
    amount: ", ",
    certainty: "estimated",
    kind: "other",
    note: "Options on the first 240 acres in 1973, then member deeds.",
   },
  ],
  private: [
   {
    source: "Private homestead purchases (through last deed 2000)",
    amount: "Household title, one acre to several",
    year: "1974–2000",
    certainty: "documented",
    kind: "member-equity",
    note: "Finished member-owned corporation. You buy a member’s house when one is for sale.",
   },
   {
    source: "Co-op maintenance of common land and roads",
    amount: "Member dues (ongoing)",
    certainty: "estimated",
    kind: "member-equity",
    note: "90+ acre preserve. Households work in Tallahassee or from home.",
   },
  ],
 },
 "shannon-farm": {
  overview: "A 520-acre Rockfish land-and-housing trust paid by income-based dues and below-market house transfers, not by lots, and not by a Twin Oaks purse.",
  grantsHeadline: "None isolated",
  privateHeadline: "Dues and house occupancy",
  grants: [
   {
    source: "No major public land-purchase grant found",
    amount: ", ",
    certainty: "estimated",
    kind: "other",
    note: "A 1974 private trust.",
   },
  ],
  private: [
   {
    source: "Income-based monthly dues",
    amount: "Roads and shared costs (ongoing)",
    year: "1974–present",
    certainty: "documented",
    kind: "member-equity",
    note: "No joining fee. Members work on and off the land.",
   },
   {
    source: "Rent or buy a house under affordability agreements",
    amount: "Below Rockfish market; you need assets",
    certainty: "documented",
    kind: "member-equity",
    note: "The trust owns land and buildings. A transfer. WWOOF is labour, not title.",
   },
  ],
 },
 "village-homes": {
  overview: "A 70-acre west-Davis neighborhood paid by house sales and HOA fees, honest subdivision money.",
  grantsHeadline: "None isolated",
  privateHeadline: "House sales and HOA fees",
  grants: [
   {
    source: "No major public construction grant found",
    amount: ", ",
    certainty: "estimated",
    kind: "other",
    note: "A planned-unit development the Corbetts built with friends’ capital. The ecological claim is design.",
   },
  ],
  private: [
   {
    source: "Friends’ capital to option 70 acres",
    amount: "$100,000",
    year: "1970s",
    certainty: "documented",
    kind: "loan",
    note: "Michael and Judy Corbett raised it from friends. The founding number in the public story.",
   },
   {
    source: "Freehold house and apartment sales",
    amount: "Open-market closings (1976–present)",
    year: "1976–present",
    certainty: "documented",
    kind: "member-equity",
    note: "Lots sell. 225 houses, 20 apartments, design review. This is the famous eco-subdivision.",
   },
   {
    source: "HOA assessments",
    amount: "Monthly (ongoing)",
    certainty: "documented",
    kind: "member-equity",
    note: "Greens, orchards, bioswales, drainage.",
   },
  ],
 },
 songaia: {
  overview: "A Bothell cohousing cluster paid by house sales, household wages, and internships, not by lots of the remaining woods.",
  grantsHeadline: "None isolated",
  privateHeadline: "House sales and internships",
  grants: [
   {
    source: "No major public land-purchase grant found",
    amount: ", ",
    certainty: "estimated",
    kind: "other",
    note: "A 1986 boarding-school parcel that became cohousing.",
   },
  ],
  private: [
   {
    source: "Freehold house sales",
    amount: "Unit purchases when a household leaves",
    year: "1993/2000–present",
    certainty: "documented",
    kind: "member-equity",
   note: "Houses sell. Core plus Greater Neighborhood.",
   },
   {
    source: "Internships and common-house life",
    amount: "Labour-for-bed; households work in the Seattle area",
    certainty: "estimated",
    kind: "courses",
    note: "A 4,000-square-foot common house on some counts. Internships are a door.",
   },
  ],
 },
 heartwood: {
  overview: "A 24-home Bayfield cluster paid by unit purchases and HOA fees, not by lot sales of the 350 acres of open space.",
  grantsHeadline: "None isolated",
  privateHeadline: "Unit purchases and HOA fees",
  grants: [
   {
    source: "No major public construction grant found",
    amount: ", ",
    certainty: "estimated",
    kind: "other",
    note: "A 1990s cohousing build completed 2000. The 360 acres were the land.",
   },
  ],
  private: [
   {
    source: "24 home purchases",
    amount: "Unit closings (from 2000)",
    year: "2000–present",
    certainty: "documented",
    kind: "member-equity",
    note: "Houses sell. community@heartwoodcohousing.com. Access to ~350 acres is with the house.",
   },
   {
    source: "HOA fees",
    amount: "Monthly (ongoing)",
    certainty: "documented",
    kind: "member-equity",
    note: "Common house, greenhouse, workshop, pasture, trails. Households work in Durango, Bayfield, or from home.",
   },
  ],
 },
};

export const usaMoreVisitJoin: Record<string, VisitJoin> = {
 "bryn-gweled": {
  visit: 2,
  join: 2,
  visitProcess: "1805 Meadow Road, Upper Southampton Township, Bucks County. A living homestead village of ~75 families. bryngweled.org. Work parties and covered-dish suppers are the week. Arrange through a member. Do not drive the two-acre leaseholds as a lot map.",
  joinProcess: "Applicants meet families, then need an 80% yes before they may buy a house on a 99-year lease. You never own the land. Harder than a Bucks County closing, fifty-odd households have to want you.",
 },
 "the-vale": {
  visit: 2,
  join: 2,
  visitProcess: "About two miles south of Yellow Springs, Greene County. The public door is thin, Community Solutions history more than a visitor centre. A quiet woods of about eleven families. Write.",
  joinProcess: "A small membership on trust land. Houses are occupied, not sold as lots. Confirm who is on the forty acres this year. Harder than an Antioch rental.",
 },
 heathcote: {
  visit: 3,
  join: 2,
  visitProcess: "21300 Heathcote Road, Freeland, northern Baltimore County, a mile south of the Pennsylvania line. Education programs and a garden are the public door. A working creek valley; houses are homes. Arrange. Confirm occupancy before you treat a page as a hostel.",
  joinProcess: "A membership and a bed on SoL trust land. Resident roll: 4 resident adults plus 20+ non-residents on the community count, counts have been lower. Consensus culture. Harder than a Baltimore B&B; possible if they are actually taking residents.",
 },
 "kimberton-hills": {
  visit: 3,
  join: 2,
  visitProcess: "Kimberton, Chester County, former Myrin estate. camphillkimberton.org. Workshops, the farm, a scheduled day. This is a care community. Visit by arrangement. Do not drop in on extended-family houses. Distinct from Copake and from Camphill Ontario.",
  joinProcess: "Villagers enter through the Admissions Group, a care admission. Coworkers apply for a year or a life. Safeguarding is the point. Harder than a Chester County farm stay.",
 },
 miccosukee: {
  visit: 2,
  join: 3,
  visitProcess: "East of Tallahassee, Leon County. Private homesteads and a 90-acre preserve. Write.",
  joinProcess: "Join the co-op, or buy a member’s house when one is for sale. Waiting lists have existed. Homesteads are privately owned; last deed 2000. Easier than a closed commune.",
 },
 "shannon-farm": {
  visit: 2,
  join: 2,
  visitProcess: "274 Shannon Farm Lane, Afton, Rockfish Valley, Nelson County, 27 miles west of Charlottesville. WWOOF and visitor paths exist; shannonfarm.org / IC.org are the doors. Eight house clusters, a lake, forest. Arrange. Houses are homes. This is not Twin Oaks’ visitor program.",
  joinProcess: "No joining fee; membership is living there under the trust. You need assets to rent or buy a house the trust owns. Consensus. Harder than a Charlottesville rental; easier than Twin Oaks’ labor-credit year if they have a house.",
 },
 "village-homes": {
  visit: 4,
  join: 4,
  visitProcess: "West Davis, Yolo County. A living 70-acre neighborhood. Commons, orchards, bioswales are the view from the paths. Houses face common land; they are homes. Patwin land, stay on the public path.",
  joinProcess: "Buy a house if one is for sale. Ordinary Davis closing plus design review and HOA meetings. Easier than a closed co-op, more meetings than a raw Davis tract. Lots sell. This is the famous eco-subdivision.",
 },
 songaia: {
  visit: 3,
  join: 3,
  visitProcess: "North of Seattle in Bothell, Snohomish County. Internships and common-house interest are the public path. A forest-edge cluster among suburban tracts. Arrange. Coast Salish land.",
  joinProcess: "Buy a unit if one is for sale, or intern. Cohousing consensus plus ordinary homeownership. Easier than a closed commune, more meals than a raw Bothell tract. Confirm core versus Greater Neighborhood. Houses sell.",
 },
 heartwood: {
  visit: 3,
  join: 3,
  visitProcess: "800 Heartwood Lane, west of Bayfield, La Plata County, 20–25 minutes east of Durango. Common house and trails by arrangement. The 24 homes are houses. The 350 acres of open space are common. Southern Ute and other Ute lands, read that first.",
  joinProcess: "Buy a house if one is for sale (community@heartwoodcohousing.com). Cohousing consensus plus an HOA. Easier than a closed commune, more meetings than a raw Bayfield acreage. The 350 acres are not lots waiting to happen, confirm the covenants.",
 },
};

export const usaMoreDailyLife: Record<string, DailyLife> = {
 "bryn-gweled": {
  typical: [
   { title: "Saturday work party", detail: "Morning work, then a Homesteads meeting, then a covered-dish supper. No paid officers. Roads, woods, community centre." },
   { title: "Two-acre leasehold", detail: "A house you own on dirt you lease for 99 years. Early houses by Frank Lloyd Wright students. Off-site jobs, on-site assessments." },
   { title: "Eased woods", detail: "About 80 acres common. Heritage Conservancy’s first easement on most undeveloped land. Guests stay off the streams they did not ease." },
  ],
  unique: {
   title: "The Bucks County hill that never sold the land",
   detail: "Bryn Gweled is 1940, 240 acres, 99-year leases, seventy-five families.",
  },
 },
 "the-vale": {
  typical: [
   { title: "Forty acres of woods", detail: "Two miles south of Yellow Springs. About eleven families. Shared land care." },
   { title: "Trust under the houses", detail: "1980, Community Service, Inc. Land Trust. Occupied, not sold as lots. Not Yellow Springs Home, Inc." },
   { title: "Quiet weekday", detail: "Work in town, at Antioch, or from home. Some Quaker in culture, no religious test. Confirm who is actually there." },
  ],
  unique: {
   title: "Morgan’s Ohio hamlet on forty acres",
   detail: "Jane and Griscom Morgan invited another family to share their woods in 1946; the forty acres went to Arthur Morgan’s Community Service land trust in 1980.",
  },
 },
 heathcote: {
  typical: [
   { title: "Creek-valley mill", detail: "44 acres, a narrow valley, a mill. Biointensive gardens and analog forestry." },
   { title: "Small resident morning", detail: "4 resident adults plus non-residents on the community count. Counts have been lower. Confirm who winters before you count a village." },
   { title: "Education centre day", detail: "The 1970s split still holds: community and Education Center. Visiting notes are on the education centre." },
  ],
  unique: {
   title: "The School of Living creek that stayed a CLT",
   detail: "Heathcote is 1965, Mildred Loomis, 44 acres, a 99-year lease, a small circle.",
  },
 },
 "kimberton-hills": {
  typical: [
   { title: "Extended-family house", detail: "Villagers, coworkers, volunteers. The charity owns the houses. Breakfast is a household." },
   { title: "Biodynamic round", detail: "432 acres of farm, gardens, woodlands. Weavery, pottery, mosaic, a CSA/local food door. Craft is work." },
   { title: "Board and rotation", detail: "Five board meetings a year, March budget, unpaid executive director chosen from within. Care admissions." },
  ],
  unique: {
   title: "Karin Myrin’s Chester County Camphill",
   detail: "Kimberton Hills is 1972: 432 acres, about 110 people, a Camphill 501(c)(3).",
  },
 },
 miccosukee: {
  typical: [
   { title: "Private homestead", detail: "One acre to several, last deed 2000. Over 140 households. You own the house dirt if you are a member." },
   { title: "Ninety-acre preserve", detail: "Common land the co-op holds together." },
   { title: "Tallahassee weekday", detail: "Households work in town or from home. Roads and common by the membership. Waiting lists have existed." },
  ],
  unique: {
   title: "The Leon County co-op that finished its deeds",
   detail: "A 1973 Back to the Land group took options on the first 240 acres after a 500-year flood showed where to build; the last homestead deed went out in 2000, and more than 90 acres stay a nature preserve the membership holds together.",
  },
 },
 "shannon-farm": {
  typical: [
   { title: "Cluster among woods", detail: "Eight house clusters, ~30 occupied sites of ~113 zoned. About 70% wooded. The trust owns land and buildings." },
   { title: "Consensus month", detail: "Monthly business meeting. Housing, Land Stewardship, Finance committees. Income-based dues, no joining fee, no common purse." },
   { title: "Rockfish livelihood", detail: "Gardens, hay, art, teaching, unschooling, small businesses. ~60 adults and ~20 children. Not Twin Oaks’ labor credit." },
  ],
  unique: {
   title: "The Blue Ridge trust that kept houses off the market",
   detail: "Shannon Farm put a Rockfish Valley farm into a non-speculative land-and-housing trust in 1974: about 520 acres stay in common, eight house clusters occupy about 30 of 113 zoned sites, and roughly 70 percent is still wooded.",
  },
 },
 "village-homes": {
  typical: [
   { title: "House facing common land", detail: "Not the street. 225 houses and 20 apartments. Solar heating and bioswales were in the first drawings. Lots sell." },
   { title: "Orchard and drainage", detail: "About 20–25 acres of greens, bike paths, orchards, natural drainage. The HOA holds them." },
   { title: "Design review", detail: "Judy Corbett has sat the board and has lived here since 1976. Ordinary Davis livelihoods plus HOA assessments." },
  ],
  unique: {
   title: "The Davis neighborhood that kept the creeks and still sells houses",
   detail: "Michael and Judy Corbett optioned 70 acres in west Davis and built Village Homes from 1975–82: 225 houses and 20 apartments face common land rather than streets, with solar heating and bioswales in the first drawings; first residents arrived April 1976, and Judy has lived there since.",
  },
 },
 songaia: {
  typical: [
   { title: "Common-house supper", detail: "A 4,000-square-foot common house on some counts. Common meals. About 45–50 people in the cluster." },
   { title: "Intern week", detail: "Internships remain a public path. Labour plus a bed. Households work in the Seattle area." },
   { title: "Forest edge among tracts", detail: "Core 13 homes on ~11 acres; Greater Neighborhood around it. Houses sell. Confirm which driveway is which." },
  ],
  unique: {
   title: "The Bothell common house inside suburban tracts",
   detail: "Land bought in 1986 as a boarding school; the core is often counted as 13 homes on about 11 acres, with a Greater Neighborhood of nearby houses around it.",
  },
 },
 heartwood: {
  typical: [
   { title: "Common house and pasture", detail: "Greenhouse, workshop, yurt, trails. Twenty-four homes in a small corner of 360 acres." },
   { title: "Juniper and pine", detail: "About 350 acres left open. Irrigated pasture, meadow, forest. Common." },
   { title: "Durango weekday", detail: "Households work in Durango, Bayfield, or from home. HOA fees. When a house sells, that is how a new household arrives." },
  ],
  unique: {
   title: "The Four Corners cluster that left 350 acres open",
   detail: "Heartwood is 2000, 24 homes, 360 acres, houses sell.",
  },
 },
};

export const usaMoreInformal: Record<string, InformalAgreement[]> = {
 "bryn-gweled": [
  { kind: "membership-trial", why: "80% of the membership must want you before you buy a house." },
  { kind: "land-care", why: "240 acres, woods, streams, Heritage Conservancy’s first easement. Guests do not treat the common as a county park." },
  { kind: "building-code", why: "A house you own on dirt you lease. What can be built on two acres, what happens to the building when you leave, who still sits the Wright-student roof." },
  { kind: "kitchen-table", why: "Covered-dish supper after the work party. Which table is the Homesteads meeting and which is a family’s kitchen." },
 ],
 "the-vale": [
  { kind: "membership-trial", why: "A small circle on trust land. Houses are occupied, not listed." },
  { kind: "land-care", why: "Forty acres of Morgan woods. Shared care. Guests stay off gardens they did not plant." },
  { kind: "guest-stay", why: "The public door is thin. Confirm who is on the forty acres." },
  { kind: "quiet-practice", why: "Some Quaker in culture, no religious test. Guests are not owed a meeting. The compact is how a quiet hamlet stays quiet." },
 ],
 heathcote: [
  { kind: "membership-trial", why: "A bed and a membership on SoL land. Four resident adults on the published count, confirm they are taking people." },
  { kind: "volunteer-intern", why: "Education Center programs in a creek valley. A course week is labour and learning." },
  { kind: "land-care", why: "44 acres, a mill, biointensive beds, analog forestry. Guests stay on programme ground. The valley is narrow." },
  { kind: "guest-stay", why: "Visiting notes are on the education centre. Houses are homes. Do not arrive as if a page were a hostel." },
 ],
 "kimberton-hills": [
  { kind: "care-household", why: "Adults with developmental disabilities in extended-family houses. The compact is who lives with whom, and that a guest is not a second coworker." },
  { kind: "volunteer-intern", why: "Short-term volunteers and long-term coworkers. Vocational, safeguarded." },
  { kind: "children-care", why: "Coworkers’ children grow up in the same houses as villagers. Photography of a villager is not a souvenir. Safeguarding is the point of the charity." },
  { kind: "kitchen-table", why: "Shared households eat together. Workshops and the CSA are public." },
 ],
 miccosukee: [
  { kind: "land-care", why: "90+ acres of common preserve beside private homesteads. Guests do not treat the preserve as a Leon County park or a second homestead." },
  { kind: "membership-trial", why: "You join, or you buy a member’s house. Last deed 2000." },
  { kind: "building-code", why: "A 500-year flood showed where to build. Homesteads from one acre to several. What a new roof may do without eating the preserve." },
  { kind: "guest-stay", why: "Private titles, a thin website. Houses are homes. Write." },
 ],
 "shannon-farm": [
  { kind: "membership-trial", why: "No joining fee; you need assets to rent or buy a house the trust owns. Not Twin Oaks’ visitor interview." },
  { kind: "land-care", why: "520 acres, eight clusters, ~70% wooded. Forests were not clear-cut. Guests stay off hay and lake they did not steward." },
  { kind: "building-code", why: "About 30 occupied sites of ~113 zoned. Cluster, not sprawl. A new house still has to sit the trust." },
  { kind: "guest-stay", why: "Visitor paths exist. Houses are homes. Arrange." },
 ],
 "village-homes": [
  { kind: "building-code", why: "Architectural review, Judy Corbett has sat it. What a freehold house may look like facing the common, not the street." },
  { kind: "land-care", why: "Bioswales, orchards, drainage easements. The ecological claim is the design. Guests stay on the path." },
  { kind: "membership-trial", why: "To join: buy a house. Lots sell. An HOA meeting is not a commune yes. Design review still sits the closing." },
  { kind: "media-story", why: "The famous solar neighborhood. Every camera wants the bioswale. Who speaks for a living HOA when a planner arrives. Patwin land is the older story." },
 ],
 songaia: [
  { kind: "volunteer-intern", why: "Internships are a public door. Labour plus a bed." },
  { kind: "kitchen-table", why: "Common meals in a 4,000-square-foot common house on some counts. Who cooks, who is a guest, which fridge is whose." },
  { kind: "membership-trial", why: "Buy a unit if one is for sale, or intern. Confirm core versus Greater Neighborhood." },
  { kind: "land-care", why: "Forest-edge cluster among suburban tracts. Coast Salish land. Guests do not take the remaining woods as a park." },
 ],
 heartwood: [
  { kind: "building-code", why: "A 24-home pedestrian cluster. What a freehold house may look like, who uses the common house, who books the yurt." },
  { kind: "land-care", why: "About 350 acres of pasture, meadow, juniper and pine. Common. Guests do not treat Ute land as a forest-service picnic." },
  { kind: "membership-trial", why: "To join: buy a house. An HOA-plus-consensus week is not a closing you skip. The 350 acres come with the house, not as lots." },
  { kind: "kitchen-table", why: "Common house, greenhouse, workshop. Who cooks, who is a child of the 24, when the pasture is a walk rather than a hostel." },
 ],
};

