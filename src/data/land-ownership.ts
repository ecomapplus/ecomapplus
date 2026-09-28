import { asiaLand } from "./asia-details";
import { russiaLand } from "./russia-details";
import { usaMoreLand } from "./usa-details";
import { polandLand } from "./poland-details";
import { volunteerBatchLand } from "./volunteer-batch-details";
import { formerLand } from "./former-details";
import { formerMoreLand } from "./former-more-details";
import { formerClosedLand } from "./former-closed-details";
import { livingMoreLand } from "./living-more-details";
import { livingBatch2Land } from "./living-batch2-details";
import { livingBatch3Land } from "./living-batch3-details";
import { livingBatch4Land } from "./living-batch4-details";
import { livingBatch5Land } from "./living-batch5-details";
import { livingBatch6Land } from "./living-batch6-details";
import { livingBatch7Land } from "./living-batch7-details";
import { livingBatch8Land } from "./living-batch8-details";
import { livingBatch9Land } from "./living-batch9-details";
import { livingBatch10Land } from "./living-batch10-details";
import { livingBatch11Land } from "./living-batch11-details";
import { livingBatch12Land } from "./living-batch12-details";
import { livingBatch13Land } from "./living-batch13-details";
import { livingBatch14Land } from "./living-batch14-details";
import { livingBatch15Land } from "./living-batch15-details";
import { livingBatch16Land } from "./living-batch16-details";
import { livingBatch17Land } from "./living-batch17-details";
import { livingBatch18Land } from "./living-batch18-details";
import { livingBatch19Land } from "./living-batch19-details";
import { livingBatch20Land } from "./living-batch20-details";
import { livingBatch21Land } from "./living-batch21-details";
import { livingBatch22Land } from "./living-batch22-details";
import { livingBatch23Land } from "./living-batch23-details";
import { livingBatch24Land } from "./living-batch24-details";
import { livingBatch25Land } from "./living-batch25-details";
import { livingBatch26Land } from "./living-batch26-details";
import { livingBatch27Land } from "./living-batch27-details";
import { livingBatch28Land } from "./living-batch28-details";
import { livingBatch29Land } from "./living-batch29-details";
import { livingBatch30Land } from "./living-batch30-details";
import { livingBatch31Land } from "./living-batch31-details";
import { livingBatch32Land } from "./living-batch32-details";
import { livingBatch33Land } from "./living-batch33-details";
import { livingGlampingLand } from "./living-glamping-details";
import { sustainableEcovillageLand } from "./sustainable-ecovillage";
import { maitreyaEcovillageLand } from "./maitreya-ecovillage";

export type LandComplexity = "simple" | "split";

export type LandParcel = {
 label: string;
 holder: string;
 share: string;
 what: string;
};

export type LandOwnership = {
 owner: string;
 complexity: LandComplexity;
 tenure: string;
 howHeld: string;
 narrative: string;
 divided: LandParcel[];
};

export const complexityLabels: Record<LandComplexity, string> = {
 simple: "One title holder",
 split: "Title is divided"
};

export const landBySlug: Record<string, LandOwnership> = {
 "sabbathday-lake": {
 owner: "United Society of Shakers, Sabbathday Lake, Inc.",
 complexity: "simple",
 tenure: "Religious society",
 howHeld: "One Maine 501(c)(3) holds the village, museum, farm, and historic buildings. There are no house lots.",
 narrative: "Title is not split. The last active Shaker society owns the ~1,800 acres as a nonprofit educational corporation (EIN 01-0317232; tax entity 1976, religious society organized 1794). Covenanted Shakers, still govern inward life. The National Historic Landmark District is a designation on the same land. Nobody here holds a private deed to a house.",
 divided: [],
 },
 solheimar: {
 owner: "Sólheimar ses (self-governing institution)",
 complexity: "simple",
 tenure: "Nonprofit",
 howHeld: "The independent Icelandic institution operates the village. Residents do not hold private title.",
 narrative: "Current title and operations sit with Sólheimar ses, a sjálfseignarstofnun (a self-governing nonprofit) that runs the workplaces, guesthouse, greenhouses, and workshops. Residents work inside the institution; they do not buy lots. Historically the Church of Iceland’s Childcare Committee bought Hverakot on 31 March 1930 for ISK 8,000 and leased it to founder Sesselja Sigmundsdóttir. That church purchase is the origin story, not today’s landlord.",
 divided: [],
 },
 riverside: {
 owner: "Religious Charitable Riverside Community Trust",
 complexity: "simple",
 tenure: "Charitable trust",
 howHeld: "The 1953 New Zealand charitable trust owns all land, houses, and major assets. Members pay rent to the trust.",
 narrative: "There is no private title to houses or cars. Trustees administer the deed; the residential community is legally distinct but designed to work with the trust. Members live under the trust, join weekly consensus meetings, and receive a weekly allowance. The community has become more secular and pluralist while the same trust still holds the Lower Moutere farm.",
 divided: [],
 },
 koinonia: {
 owner: "Koinonia Partners, Inc.",
 complexity: "simple",
 tenure: "Nonprofit",
 howHeld: "The Georgia 501(c)(3) holds the farm, ministries, catalog business, and land. Members receive an allowance.",
 narrative: "Founded as a common-purse interracial farm in 1942 and reincorporated in 1969, Koinonia still sits in one Christian nonprofit. Members do not hold individual title. A 1993 staff-and-board experiment dropped the common purse; a 2005 reorganization returned the place toward an intentional community with a needs-based allowance. Georgia Historic Site status since 2005 is a designation.",
 divided: [],
 },
 "camphill-copake": {
 owner: "Camphill Village U.S.A., Inc.",
 complexity: "simple",
 tenure: "Nonprofit",
 howHeld: "The 501(c)(3) public charity owns the land, houses, and workshops.",
 narrative: "Tax-exempt since 1963, this is the oldest and largest Camphill community in North America. Villagers with developmental disabilities and coworker families share extended-family houses owned by the charity. A separate Camphill Village Copake Foundation supports the village; it is not the title holder of the Copake land.",
 divided: [],
 },
 findhorn: {
 owner: "Several Park entities, led by Ecovillage Findhorn Community Benefit Society",
 complexity: "split",
 tenure: "Hybrid",
 howHeld: "Title in the Park is being moved into a Community Benefit Society after the Foundation collapsed. Neighborhood trusts, a land company, and private dwellings still sit beside it.",
 narrative: "Findhorn is one of the most divided titles in this atlas. For decades the Findhorn Foundation (Trust 1968, Foundation 1972, later a SCIO) held core Park assets and ran education. It ceased operations in November 2023 after financial collapse; more than 150 jobs ended, and the SCIO remains a registered charity while assets transfer. Ecovillage Findhorn Community Benefit Society, founded May 2023 and open to Park residents, bought major land and buildings (including Universal Hall) from the Foundation; first stages completed 18 November 2024. Alongside that transfer: Park Ecovillage Trust holds neighborhood-level property; Duneland Ltd holds or has held parts of the wider Findhorn/Duneland landscape as the Foundation sold parcels over decades; and many residents rent or buy dwellings (some freehold) and join the New Findhorn Association as the civic layer. Living in the Park is not the same as joining the Foundation. There is no single landlord and no community land trust.",
 divided: [
 {
 label: "Community-owned core",
 holder: "Ecovillage Findhorn Community Benefit Society",
 share: "Major land and buildings, including Universal Hall (first stages 18 Nov 2024)",
 what: "Democratic community-ownership vehicle. Elected board from November 2023. Partners with Moray Council, the Scottish Government, and OSCR.",
 },
 {
 label: "Foundation remainder",
 holder: "Findhorn Foundation SCIO",
 share: "Assets still transferring after operations stopped in November 2023",
 what: "Historical hub. The SCIO remains a registered charity while the CBS takes over core Park assets. Predecessor: Findhorn Trust, 1968–1972.",
 },
 {
 label: "Neighborhood holdings",
 holder: "Park Ecovillage Trust",
 share: "Neighborhood-level land and buildings sold down over decades",
 what: "One of the entities that sat alongside the Foundation as parcels left the original charity.",
 },
 {
 label: "Wider landscape",
 holder: "Duneland Ltd",
 share: "Parts of the Findhorn / Duneland landscape",
 what: "A community land / development company.",
 },
 {
 label: "Private dwellings",
 holder: "Individual residents (rent or freehold)",
 share: "Houses inside the Park that are not CBS or Foundation assets",
 what: "Many people live here by renting or buying a dwelling and joining the New Findhorn Association. That civic membership is not a deed to the dunes.",
 }
 ],
 },
 "twin-oaks": {
 owner: "Twin Oaks Community, Inc.",
 complexity: "simple",
 tenure: "Cooperative (common title)",
 howHeld: "The Virginia corporation owns the land, houses, and businesses in common. Members are not individual title holders.",
 narrative: "Twin Oaks is a for-profit corporation in form with IRC 501(d) apostolic tax status: the corporation is not taxed on community income; members report a small taxable ‘dividend’. Income-sharing and labor-credit rules live in bylaws, not in a charity’s exempt purpose. The corporation holds the land; members do not pay rent and do not hold a community land trust share. A member of the Federation of Egalitarian Communities.",
 divided: [],
 },
 auroville: {
 owner: "Auroville Foundation (Act of Parliament of India, 1988)",
 complexity: "split",
 tenure: "Statutory body",
 howHeld: "A statute holds every movable and immovable asset. Residents have no private land title.",
 narrative: "This is unique in the atlas: land tenure is an Act of Parliament. The Auroville Foundation Act, 1988, created an autonomous body corporate; assets vested on 1 April 1992. The Act acquired Auroville’s assets in the public interest without compensation. Three authorities must work together (a government-appointed Governing Board, the Residents’ Assembly of all official residents, and an International Advisory Council) but none of those is a private landlord. Historically the Sri Aurobindo Society resolved in 1964 to found the city and held early assets; after the Mother’s death in 1973 a conflict over control led to the Emergency Provisions Act 1980 and then the 1988 Foundation Act. Residents live on Foundation land. There is no house-lot market and no community land trust.",
 divided: [
 {
 label: "All Auroville assets",
 holder: "Auroville Foundation",
 share: "Every movable and immovable asset, vested 1 April 1992",
 what: "Statutory body corporate under the Auroville Foundation Act, 1988. Residents have no private title.",
 },
 {
 label: "Historical landholder",
 holder: "Sri Aurobindo Society",
 share: "Early assets, 1964 until the Emergency / Foundation sequence",
 what: "The society that resolved to found the city. Not the current owner.",
 },
 {
 label: "Who decides",
 holder: "Governing Board, Residents’ Assembly, International Advisory Council",
 share: "Governance of the Foundation",
 what: "Three statutory authorities must work together. None sells lots.",
 }
 ],
 },
 "the-farm": {
 owner: "The Farm Community (cooperative village)",
 complexity: "simple",
 tenure: "Cooperative (common title)",
 howHeld: "After the 1983 Changeover, land stays common. Members pay monthly dues and keep personal assets.",
 narrative: "The original Foundation held everything as a fully communal nonprofit. The Changeover kept the ~1,750 acres in common while ending the common purse: members finance their own livelihoods, pay dues, and sit a town-meeting / board. Multiple nonprofits and businesses (Plenty International, Book Publishing Company, the Ecovillage Training Center) operate on the same land; they are not separate landlords of the village. There is no private house title and no community land trust.",
 divided: [],
 },
 gaviotas: {
 owner: "Centro las Gaviotas",
 complexity: "simple",
 tenure: "Foundation",
 howHeld: "The Colombian nonprofit holds the settlement, planted forest, hospital campus, and appropriate-technology work.",
 narrative: "Residents work inside a research-and-production nonprofit founded by Paolo Lugari in 1971; they are not co-op shareholders. The organisation staked on the order of 10,000 hectares and planted a Caribbean-pine forest of similar scale. It stayed deliberately apolitical during Colombia’s conflict. Early UNDP grants gave way to pine-resin income.",
 divided: [],
 },
 "moora-moora": {
 owner: "Moora Moora Co-operative Community, land in common, houses privately owned",
 complexity: "split",
 tenure: "Housing cooperative",
 howHeld: "The Victorian co-operative owns the 245 hectares. Members hold shares and a right to build in a designated cluster; the houses themselves are privately owned on co-op land.",
 narrative: "This is a classic split between dirt and dwelling. Registered under Victoria’s Co-operative Act 1959 as a Community Settlement Society, the co-op owns the mountain in common. A share is a right to build in a designated cluster. Houses are privately owned sitting on co-op land: if you leave, the house can change hands under co-op rules, but you cannot carve a freehold lot out of the 245 hectares. Seven directors are elected annually.",
 divided: [
 {
 label: "The mountain",
 holder: "Moora Moora Co-operative Community",
 share: "All 245 hectares in common",
 what: "Co-op title. Shares are membership and a building right in a cluster.",
 },
 {
 label: "The houses",
 holder: "Individual members",
 share: "Dwellings in designated clusters",
 what: "Privately owned buildings on co-op land. Not freehold lots that can be sold off the mountain.",
 }
 ],
 },
 "east-wind": {
 owner: "East Wind Community, Inc.",
 complexity: "simple",
 tenure: "Cooperative (common title)",
 howHeld: "The secular egalitarian corporation owns the Ozarks land, houses, and the nut-butter plant. Members have no private title.",
 narrative: "Founded 1 May 1974 as a sister community to Twin Oaks in the Federation of Egalitarian Communities. Direct democracy; managers elected annually. Income-sharing; labor is allocated collectively.",
 divided: [],
 },
 damanhur: {
 owner: "Damanhur cooperatives (federation of nucleos)",
 complexity: "split",
 tenure: "Cooperative (common title)",
 howHeld: "Land, houses, and enterprises are legally owned by Italian cooperatives. Citizens hold shares in the co-ops, not individual title to the valley.",
 narrative: "The Federation is the social form; the cooperatives are the property form. Damanhur is a federation of nucleos (small residential groups). A living constitution (rewritten from 130+ articles down to 15 since 1981) governs internal life. The complementary currency is the Credito. Citizens contribute labor and money according to membership level. After the Temples of Humankind were discovered in 1992 the site opened to visitors; that tourism sits on co-op land.",
 divided: [
 {
 label: "Land and houses",
 holder: "Damanhur cooperatives",
 share: "Valley nucleos around Vidracco",
 what: "Italian cooperatives are the legal owners. Citizens hold shares, not cadastral lots.",
 },
 {
 label: "Enterprises",
 holder: "Cooperative businesses",
 share: "Art, olive oil, agriculture, publishing, temple tourism, education",
 what: "Profits redistribute inside the Federation.",
 },
 {
 label: "Social form",
 holder: "Federation of Damanhur",
 share: "Constitution, nucleos, School of Meditation",
 what: "The civic and spiritual layer. It is not itself a land-title vehicle.",
 }
 ],
 },
 svanholm: {
 owner: "Svanholm Storkollektiv (limited partners)",
 complexity: "simple",
 tenure: "Cooperative (common title)",
 howHeld: "Members are limited partners (kommanditister) in the legal entity that jointly owns the historic estate. There is no individual title.",
 narrative: "An association of more than 100 people bought the manor (mentioned 1346; rebuilt 1744) together in 1978 and took on the debt. All members sit on the board. Direct democracy and consensus. Income-sharing.",
 divided: [],
 },
 lakabe: {
 owner: "Government of Navarra (recovered hamlet)",
 complexity: "split",
 tenure: "Recovered village",
 howHeld: "Legal title sits with the regional government. Occupied 21 March 1980 and later regularized rather than sold to members. There is no private sale of houses.",
 narrative: "Lakabe is a recovered medieval hamlet. Occupiers regularized their life with Navarra instead of taking freehold. The Asociación cultural de Lakabe is a private-law vehicle with a tax ID for courses and visiting groups (a concejo cannot run those as a cultural business) but it is not the landlord. This atlas tags the form as concejo / recovered village.",
 divided: [
 {
 label: "Legal title",
 holder: "Government of Navarra",
 share: "The recovered medieval hamlet",
 what: "Regional government title. Regularized occupancy.",
 },
 {
 label: "Who lives there",
 holder: "The residential community (concejo practice)",
 share: "Houses and commons in use, not in private sale",
 what: "No member can sell a house as a lot. Occupancy is the point of the recovery.",
 },
 {
 label: "Courses and visitors",
 holder: "Asociación cultural de Lakabe",
 share: "Not title, a CIF vehicle for cultural work",
 what: "Private-law association so the hamlet can host groups.",
 }
 ],
 },
 "kibbutz-lotan": {
 owner: "Israel Land Authority, usage rights with Kibbutz Lotan",
 complexity: "split",
 tenure: "State land",
 howHeld: "Classic kibbutz land is not freehold lots. Usage rights sit with the cooperative settlement on nationally administered land.",
 narrative: "Lotan is a cooperative agricultural settlement under Israeli kibbutz law, the second kibbutz founded by Israel’s Reform movement. Members share production and, in Lotan’s case, a remaining collective economy. There is no private suburban real-estate title. The Center for Creative Ecology (opened 1997) teaches on the same land. The Kibbutz Movement is a federation, not the title holder of the Arava land. This is state settlement land plus a cooperative.",
 divided: [
 {
 label: "Underlying title",
 holder: "Israel Land Authority / state settlement land",
 share: "National land tenure under kibbutz law",
 what: "Not freehold lots. The state administers the land; the kibbutz holds usage rights.",
 },
 {
 label: "Who uses it",
 holder: "Kibbutz Lotan (cooperative agricultural settlement)",
 share: "Residential and productive community in the Arava",
 what: "Members share production. No private suburban deed.",
 },
 {
 label: "Teaching overlay",
 holder: "Center for Creative Ecology",
 share: "Courses on the same land, from 1997",
 what: "Educational arm of the kibbutz.",
 }
 ],
 },
 lebensgarten: {
 owner: "Individual house owners and tenants, plus Lebensgarten Steyerberg e.V.",
 complexity: "split",
 tenure: "Freehold + covenants",
 howHeld: "Fifty-eight to sixty-two restored houses on a former munitions-workers’ settlement are owned or rented individually. The Verein is the community body.",
 narrative: "Households are financially independent, not income-sharing. Lebensgarten Steyerberg e.V. (1986) handles village issues; residents typically own or rent the restored brick houses. PaLS gGmbH (Permakulturpark am Lebensgarten Steyerberg, park from 2003, company 2013) runs the permaculture park, CSA boxes, and agroforestry on former sandy farmland, enterprise on the landscape. The Heilhaus seminar house is a shared economic engine separate from household livelihoods. Margrit and Declan Kennedy founded the Permaculture Institute of Europe here; that is origin, not title.",
 divided: [
 {
 label: "The houses",
 holder: "Individual owners and tenants",
 share: "58–62 restored brick houses",
 what: "Private residential title or tenancy. Households keep their own money.",
 },
 {
 label: "Village body",
 holder: "Lebensgarten Steyerberg e.V.",
 share: "Community membership and shared issues",
 what: "A registered association, not the owner of every dwelling.",
 },
 {
 label: "Permaculture park",
 holder: "PaLS gGmbH",
 share: "Park, CSA, agroforestry on former sandy farmland",
 what: "Nonprofit limited company from 2013. Enterprise.",
 }
 ],
 },
 niederkaufungen: {
 owner: "Kommune Niederkaufungen e.V.",
 complexity: "simple",
 tenure: "Association",
 howHeld: "The registered association owns all land, buildings, vehicles, and means of production. Communal property cannot be privatized.",
 narrative: "Every communard is a member of the e.V. Even if membership fell below the seven people needed to found a Verein, the property would not revert to private owners. A second association (Verein für Ökologie, Gesundheit und Bildung e.V.) runs the seminar house, kindergarten, and horticulture enterprises that need a separate charitable vehicle. Income-sharing from a common purse. Village-centre farm buildings rather than a remote estate.",
 divided: [],
 },
 "crystal-waters": {
 owner: "Body corporate (GTP 1833) plus 83 freehold residential lots and 2 commercial lots",
 complexity: "split",
 tenure: "Body corporate",
 howHeld: "About 20% of the 259 hectares is freehold lots; 80% is common property managed by the Queensland body corporate.",
 narrative: "Crystal Waters is a community titles scheme. Group Title Plan No. 1833 was sealed in June 1988 under the Building Units and Group Titles Act; it now sits under the Body Corporate and Community Management Act. Buying a lot is ordinary freehold plus the by-laws, building, chemicals, animals, trees. Lot owners together own and manage the common property, which can be licensed for farming, forestry, recreation, and habitat. Crystal Waters Community Co-operative (registered 1981, years before titles) is the entrepreneurial arm for the village centre, camping, and community house, not the landlord of the lots. Earthworks and lot sales were funded without a bank loan, using lots in lieu of cash to the previous owner and the designers. 1996 World Habitat Award.",
 divided: [
 {
 label: "House and commercial lots",
 holder: "Individual freehold lot owners",
 share: "83 residential lots + 2 commercial lots · about 20% of 259 ha",
 what: "Ordinary freehold plus body-corporate by-laws. Households finance their own homes.",
 },
 {
 label: "Common property",
 holder: "Crystal Waters Permaculture Village Body Corporate (GTP 1833)",
 share: "About 80%, farming, forestry, recreation, habitat",
 what: "Lot owners together own and manage the commons.",
 },
 {
 label: "Village centre",
 holder: "Crystal Waters Community Co-operative",
 share: "Camping, community house, entrepreneurial arm",
 what: "Registered 1981 as a land-settlement co-op. Enterprise, not title to the 259 hectares.",
 }
 ],
 },
 "ecovillage-ithaca": {
 owner: "Six core entities plus a conservation easement, dirt, buildings, and infrastructure are separate",
 complexity: "split",
 tenure: "Hybrid",
 howHeld: "The 501(c)(3) owns the farms and woods. Three housing cooperatives own the cohousing. A village association owns roads, pipes, and the pond. A land trust holds a conservation easement, not the operating title.",
 narrative: "six core entities plus an easement, on 170–175 acres. EcoVillage at Ithaca, Inc. (501(c)(3), land 1992) owns the property outside the cohousing neighborhoods: the farms, woods, and open land that make the site an ecovillage rather than three condo clusters. FROG Housing Cooperative (30 duplex homes, 1996–97) owns its buildings and the land beneath them, New York’s first cohousing neighborhood. TREE Housing Cooperative (2012–15) likewise owns buildings and the land beneath. SONG Housing Cooperative (2006) owns its buildings but not the land beneath, which stays with the village-level entities. EcoVillage at Ithaca Village Association (EVIVA) owns and manages roads, water and sewer, parking lots, the swimming pond, and the land immediately around FROG and TREE. A second 501(c)(3), the Center for Transformative Consciousness, helped develop each neighborhood and runs education. Finger Lakes Land Trust holds a conservation easement on open land (restricts development; does not own operating title). The Town of Ithaca Special Land Use District is the zoning that made three neighborhoods legal.",
 divided: [
 {
 label: "Farms, woods, open land",
 holder: "EcoVillage at Ithaca, Inc. (501(c)(3))",
 share: "Property outside the cohousing neighborhood boundaries",
 what: "The piece that makes the site an ecovillage rather than three condo clusters.",
 },
 {
 label: "FROG neighborhood",
 holder: "FROG Housing Cooperative",
 share: "30 duplex homes plus the land beneath (1996–97)",
 what: "New York’s first cohousing neighborhood. Owns buildings and dirt.",
 },
 {
 label: "SONG neighborhood",
 holder: "SONG Housing Cooperative",
 share: "Buildings only (completed 2006)",
 what: "Unlike FROG and TREE, SONG does not own the land beneath, that stays with village-level entities.",
 },
 {
 label: "TREE neighborhood",
 holder: "TREE Housing Cooperative",
 share: "Buildings and the land beneath (2012–15)",
 what: "Third neighborhood. Owns both the dwellings and the land they sit on.",
 },
 {
 label: "Shared infrastructure",
 holder: "EcoVillage at Ithaca Village Association (EVIVA)",
 share: "Roads, water, sewer, parking, pond, land around FROG and TREE",
 what: "Non-exempt nonprofit. The pipes and the pond, not the farms.",
 },
 {
 label: "Conservation overlay",
 holder: "Finger Lakes Land Trust (easement)",
 share: "Open land, development restricted",
 what: "An easement. The Town of Ithaca SLUD is zoning or ownership.",
 }
 ],
 },
 zegg: {
 owner: "ZEGG gGmbH",
 complexity: "simple",
 tenure: "Company / LLC",
 howHeld: "The German nonprofit limited company holds the 15-hectare former GDR intelligence-training site. Members are not shareholders of private lots.",
 narrative: "Bought for 2.1 million D-Marks in 1991. Nonprofit status 2015. Members live on the land as a residential community using sociocracy (Visionsrat, management circle). The seminar centre became the economic core from about 2001.",
 divided: [],
 },
 "los-angeles-eco-village": {
 owner: "Beverly-Vermont Community Land Trust (land) + Urban Soil–Tierra Urbana (buildings)",
 complexity: "split",
 tenure: "Community land trust",
 howHeld: "Classic CLT split: the land trust owns the land; a limited-equity housing co-op owns the buildings. Resale of shares is capped so the housing stays affordable.",
 narrative: "This is one of two places in the atlas with a documented community land trust, do not read a CLT into villages that only have a nonprofit or a co-op. Cooperative Resources and Services Project (CRSP, 501(c)(3), EIN 95-3900435) is the founding developer from 1980; it acquired two apartment buildings in the 1990s and a third in 2011. “Los Angeles Eco-Village” is a place name, not CRSP’s legal name. In 2012 CRSP donated the land under the co-op buildings to Beverly-Vermont Community Land Trust (501(c)(3) CLT) and sold the buildings to Urban Soil–Tierra Urbana (USTU), a resident-organized limited-equity housing cooperative that is itself a 501(c)(3). Separating dirt from buildings is the classic CLT move against speculation. USTU members share legal and social ownership of those buildings; resale prices are capped. CRSP’s Ecological Revolving Loan Fund financed acquisition and retrofits; it is a program. A third building remains in the CRSP story as later work. Koreatown / Rampart blocks.",
 divided: [
 {
 label: "The dirt",
 holder: "Beverly-Vermont Community Land Trust",
 share: "Land under the co-op buildings, donated by CRSP in 2012",
 what: "A 501(c)(3) community land trust. Ground is taken off the speculative market.",
 },
 {
 label: "The buildings",
 holder: "Urban Soil–Tierra Urbana (limited-equity housing co-op)",
 share: "Two buildings acquired from CRSP in 2012",
 what: "Resident-organized LEHC and 501(c)(3). Members own the buildings through capped-resale shares, not condominium units.",
 },
 {
 label: "Founding developer",
 holder: "Cooperative Resources and Services Project (CRSP)",
 share: "Acquired the buildings; still a neighborhood resource centre",
 what: "501(c)(3) from 1980. Donated the land to the CLT. Not the current landlord of the co-op dirt.",
 }
 ],
 },
 earthaven: {
 owner: "Earthaven Community Association (commons) + residential pods (sites)",
 complexity: "split",
 tenure: "Freehold + covenants",
 howHeld: "The North Carolina HOA owns roads, Council Hall, and shared infrastructure. About twelve neighborhood pods (housing co-ops and LLCs) hold the residential sites. Recorded CC&Rs run with the land.",
 narrative: "Earthaven is a village of pods. Earthaven Community Association (1994) is a homeowners association that owns the common land and runs village-level membership, including nonresident contributing members. Each pod owns the land for one or more neighborhoods: a housing-co-op pod makes members shareholders with a residential site; an LLC pod uses company membership instead. A person may need both ECA membership and pod membership to live on a site. Pods received deeds as they formed. Earthaven Covenants, Conditions & Restrictions are recorded in Rutherford County and govern sustainability building and land use, a private land-use regime. School of Integrated Living (SOIL), a 501(c)(3), runs tours and workshops; cultural work sits with the charity, not with the HOA.",
 divided: [
 {
 label: "Village commons",
 holder: "Earthaven Community Association",
 share: "Roads, Council Hall, shared infrastructure",
 what: "North Carolina HOA. Village-level membership, including nonresident contributing members.",
 },
 {
 label: "Residential sites",
 holder: "About 12 neighborhood pods (housing co-ops and LLCs)",
 share: "The land for one or more neighborhoods each",
 what: "Pods received deeds as they formed. Co-op pods: shareholders with a site. LLC pods: company membership.",
 },
 {
 label: "Rules that run with the land",
 holder: "Earthaven CC&Rs (Rutherford County records)",
 share: "Sustainability building and land-use regime",
 what: "Recorded private covenants.",
 }
 ],
 },
 konohana: {
 owner: "Konohana Family farmland, some they hold, some used by arrangement with local owners",
 complexity: "split",
 tenure: "Hybrid",
 howHeld: "A one-household agricultural community on ~16–18 hectares at the foot of Fuji. Farmland is a mix of land they work and land used by arrangement with local owners.",
 narrative: "About a hundred unrelated people live as one family with one wallet. Japanese labour and tax law did not fit a single communal employer, so after negotiation each member is registered as a sole proprietor while the community still pools money, that workaround is about employment, not about splitting title into lots. NPO Green Grass handles visits, education, and ecological programs; it is the outward legal face, not the landlord of the fields. They reject both “cult” and strict “ecovillage” labels. Some of the farmland is used by arrangement with local owners, so the map of who holds which parcel is mixed. Nobody buys a Fujinomiya condominium here.",
 divided: [
 {
 label: "Land they work",
 holder: "Konohana Family (one-household community)",
 share: "Part of the ~16–18 hectares of pesticide-free vegetables, rice, and fruit",
 what: "One family, one wallet.",
 },
 {
 label: "Land by arrangement",
 holder: "Local owners, used by the Family",
 share: "Some of the farmland they cultivate",
 what: "Used by arrangement rather than as a single communal deed. This is why the picture is mixed.",
 },
 {
 label: "Outward legal face",
 holder: "NPO Green Grass",
 share: "Visits, education, ecological programs, not the fields",
 what: "Does not replace the one-wallet household and is not a land trust.",
 }
 ],
 },
 oaec: {
 owner: "Sowing Circle LLC (the 80 acres); OAEC educates on the same land",
 complexity: "split",
 tenure: "Company / LLC",
 howHeld: "The California LLC owns the 80 acres and buildings. The 501(c)(3) Occidental Arts & Ecology Center is legally separate and runs public education on that land.",
 narrative: "Two entities, one ranch in Occidental. Sowing Circle LLC (July 1994) is the closed residential intentional community; its purpose is to hold title, not to speculate. Shares are not linked to market land value. Nine OAEC board members have also been members of the LLC. Occidental Arts & Ecology Center (501(c)(3), EIN 68-0359676) is public education, research, and advocacy, mutually supporting in practice, legally separate.",
 divided: [
 {
 label: "Title",
 holder: "Sowing Circle LLC",
 share: "The 80 acres and buildings",
 what: "Closed residential community. Shares are not market land value.",
 },
 {
 label: "Public education",
 holder: "Occidental Arts & Ecology Center (501(c)(3))",
 share: "Programs on the same land",
 what: "Legally separate from the LLC. The ranch is not split into course lots.",
 }
 ],
 },
 tamera: {
 owner: "ILOS, Peace Research Center, Lda.",
 complexity: "simple",
 tenure: "Company / LLC",
 howHeld: "The Portuguese limited company (not-for-profit social enterprise) owns Tamera’s property and infrastructure. No individual can buy, sell, or transfer a share of Tamera.",
 narrative: "Land 1995. ILOS manages maintenance, planning, lodging, and course administration. Members live inside a peace-research community.",
 divided: [],
 },
 "dancing-rabbit": {
 owner: "Dancing Rabbit Land Trust (501(c)(2) CLT), members lease plots and own buildings",
 complexity: "split",
 tenure: "Community land trust",
 howHeld: "The land trust owns the 280 acres. Members lease small residential plots and own their buildings, which can be sold to other members. Land cannot be speculated.",
 narrative: "This is the other documented community land trust in the atlas (with Los Angeles Eco-Village). Dancing Rabbit Land Trust is a 501(c)(2) title-holding corporation formed 1 October 1997; a 501(c)(2) must turn income over to its parent 501(c)(3). Purchase price $190,000, borrowed from members and family. There is no land buy-in for new members. Buildings can be sold to other members; the land cannot be flipped. Do not confuse this 501(c)(2) CLT with a 501(c)(3) community land trust, both are CLTs, different IRS shells.",
 divided: [
 {
 label: "The 280 acres",
 holder: "Dancing Rabbit Land Trust",
 share: "Entire property; 501(c)(2) community land trust",
 what: "Land cannot be speculated. Income must pass to the parent 501(c)(3).",
 },
 {
 label: "Houses and outbuildings",
 holder: "Members, on leased plots",
 share: "Small residential plots leased from the trust",
 what: "Members own buildings and can sell them to other members. They do not own the land.",
 }
 ],
 },
 "sieben-linden": {
 owner: "Siedlungsgenossenschaft Ökodorf e.G.",
 complexity: "simple",
 tenure: "Housing cooperative",
 howHeld: "The German settlement cooperative owns the land, now more than 100 hectares of woods, fields, gardens, and a small building zone. Members are co-owners of the commons rather than freehold lot holders.",
 narrative: "Co-op 1993; site 1997. Long-term residents are asked to buy a minimum number of shares (historically 11 shares / €11,275, with solidarity paths if someone cannot). This is a Genossenschaft and not Brandenburg freehold lots.",
 divided: [],
 },
 cloughjordan: {
 owner: "Sustainable Projects Ireland CLG owns the 67-acre site; members own the eco-homes",
 complexity: "split",
 tenure: "Hybrid",
 howHeld: "The company limited by guarantee owns the land and shared infrastructure. It is not a housing co-op that owns the dwellings, members develop and occupy individual eco-homes on serviced sites.",
 narrative: "Incorporated 1999, run on co-operative principles. Roads, district heating, and amenities sit with the company. About 55 of a planned 114–130 homes have been built; households finance their own houses on serviced sites. A board of directors oversees the company; membership decisions aim at mutual agreement. This is closer to a community-owned estate with private houses than to a CLT ground lease or a body corporate of Queensland lots.",
 divided: [
 {
 label: "The estate",
 holder: "Sustainable Projects Ireland CLG",
 share: "67 acres plus roads, district heating, amenities",
 what: "Company limited by guarantee and educational charity. Cooperative principles, not lot title.",
 },
 {
 label: "The houses",
 holder: "Member households",
 share: "Individual eco-homes on serviced sites (~55 of 114–130 planned)",
 what: "Members develop and occupy the dwellings. The company does not own those houses.",
 }
 ],
 },
 currumbin: {
 owner: "Principal Body Corporate plus 147 freehold lots on 270 acres",
 complexity: "split",
 tenure: "Body corporate",
 howHeld: "Village-wide commons, design covenants, and shared infrastructure for 147 freehold lots. Eighty percent of the 270 acres is open space. Buying and selling is treated as ordinary freehold.",
 narrative: "Queensland body corporate under the BCCM Act. First home 2006. An elected committee plus a Village Design Panel assesses building applications. Covenants on energy, water, materials, and landscape run with each lot. This is The Ecovillage at Currumbin (a covenanted freehold estate) and not income-sharing.",
 divided: [
 {
 label: "House lots",
 holder: "Individual freehold lot owners",
 share: "147 lots on 270 acres",
 what: "Ordinary freehold plus running covenants. Houses change hands as real estate.",
 },
 {
 label: "Commons and rules",
 holder: "Principal Body Corporate",
 share: "Village-wide commons, infrastructure, ~80% open space",
 what: "Elected committee and Village Design Panel.",
 }
 ],
 },
 "longo-mai": {
 owner: "Cooperativa Longo Maï / Finca Sonador",
 complexity: "simple",
 tenure: "Cooperative (common title)",
 howHeld: "The Costa Rican agricultural cooperative holds the settlement, farmland, and housing in common. There is no private sale of the commons.",
 narrative: "Founded 1979 with United Nations support as a refugee cooperative in the European Longo Maï family. Several hundred residents farm and live on cooperative land. UNAPROA, a regional environmental organization, is based on the finca; committees run infrastructure.",
 divided: [],
 },
 "maya-mountain": {
 owner: "Private farm title (Toledo), Maya Mountain Research Farm",
 complexity: "simple",
 tenure: "Private farm",
 howHeld: "The 70-acre hillside above the Columbia River is a working research farm, not subdivided lots.",
 narrative: "Christopher Nesbitt began the work in 1988; a Belizean registered NGO from 2004 is the public-benefit shell. Researchers, staff, and interns live on the farm.",
 divided: [],
 },
 pachamama: {
 owner: "PachaMama Eco-Village (private land)",
 complexity: "simple",
 tenure: "Private farm",
 howHeld: "About 500 acres of former cattle land in Guanacaste, privately owned and reforested since 1999.",
 narrative: "A founder-led spiritual community. Residents live by membership, not by buying a condominio lot. The village presents itself as a nonprofit centre of transformation whose retreat income is reinvested.",
 divided: [],
 },
 imap: {
 owner: "IMAP Permaculture Centre, Pachitulul",
 complexity: "simple",
 tenure: "Private farm",
 howHeld: "A lakeshore teaching site with ecological cabins, a living seed bank, and workshops. Site acres unpublished. Serves the institute.",
 narrative: "A Guatemalan asociación / ONG created by Maya Kaqchikel people on the south shore of Lake Atitlán. IMAP is an education and seed-sovereignty institute.",
 divided: [],
 },
 "rancho-mastatal": {
 owner: "Rancho Mastatal (farm and ecolodge)",
 complexity: "simple",
 tenure: "Private farm",
 howHeld: "Tim O’Hara and Robin Nunes hold and steward 300+ acres at Mastatal as a teaching ranch, not as a condominio of lots.",
 narrative: "Founded 2001. The private wildlife refuge that backs La Cangreja National Park is a conservation overlay. Residential life is staff, apprentices, and course participants.",
 divided: [],
 },
 "bona-fide": {
 owner: "Project Bona Fide (Nicaraguan NGO) on Finca Bona Fide",
 complexity: "simple",
 tenure: "Nonprofit",
 howHeld: "The on-island nonprofit holds the 26-acre agroecology farm in Balgüe, Ometepe, under Ley 147. Interns do not buy lots.",
 narrative: "Paired with a U.S. 501(c)(3). Michael Judd founded the project in 2001. A teaching farm with beds.",
 divided: [],
 },
 ipes: {
 owner: "Suchitoto teaching hectare",
 complexity: "simple",
 tenure: "Private farm",
 howHeld: "About one hectare of stony hillside demonstration site above Suchitoto, a teaching plot.",
 narrative: "A Salvadoran grassroots NGO (asociación) founded in 2002 by Juan Rojas and Karen Inwood. The real body is a campesino-a-campesino network of small farmers. An institute and movement.",
 divided: [],
 },
 "finca-bellavista": {
 owner: "Freehold rainforest parcels plus shared walkways and commons",
 complexity: "split",
 tenure: "Freehold + covenants",
 howHeld: "Owners take title to a garden, forest, or riverfront parcel of ¼–3 acres inside the residential community. Buying and selling is ordinary (covenanted) real estate.",
 narrative: "Costa Rica’s closest cousin to an HOA. Erica Andrews and Mateo Hogan bought a 62-acre timber-sale site in 2006 and grew the finca to about 600 acres; the residential community is on the order of 140 acres of that. Written Community Guidelines govern canopy building, walkways, and commons. Garden, forest, or riverfront parcels are freehold. This is real estate with covenants.",
 divided: [
 {
 label: "Private parcels",
 holder: "Individual parcel owners",
 share: "Garden, forest, or riverfront lots of ¼–3 acres",
 what: "Freehold title. Buying and selling is ordinary real estate under canopy rules.",
 },
 {
 label: "Walkways and commons",
 holder: "Shared under Community Guidelines",
 share: "Canopy walkways and common infrastructure inside the ~140-acre residential community",
 what: "HOA-like covenants.",
 }
 ],
 },
 "la-ecovilla": {
 owner: "Two Costa Rican condominios, original 42 acres plus Ecovilla San Mateo",
 complexity: "split",
 tenure: "Body corporate",
 howHeld: "Each family owns a lot and an undivided share of the commons (food forest, river edge, shared buildings). That is HOA-plus-freehold under the Ley Reguladora de la Propiedad en Condominio.",
 narrative: "Marcelo Valansi founded the original village in 2012: 48 families on 42 acres. Buying a lot is the membership path; the original village is full. A second project, Ecovilla San Mateo, opened in 2023 on about 220 hectares of regenerated land (a former petting zoo) near the Machuca River, same founder, larger lot-sales and neighborhood plan, associated with rather than a replacement of the original 42 acres. Two condominio titles, two sales books.",
 divided: [
 {
 label: "Original village",
 holder: "La Ecovilla Original condominio",
 share: "48 families · 42 acres · lots plus undivided commons",
 what: "Ley Reguladora de la Propiedad en Condominio. Food forest, river edge, shared buildings.",
 },
 {
 label: "San Mateo expansion",
 holder: "Ecovilla San Mateo condominio",
 share: "~220 hectares of regenerated land, from 2023",
 what: "Same founder, larger lot-sales plan. Associated with, the original 42 acres.",
 }
 ],
 },
 "brave-earth": {
 owner: "Asociación Tierra Valiente Trust, up to 40 shares on an 80-acre commons",
 complexity: "split",
 tenure: "Shareholder commons",
 howHeld: "Private living structures sit on communal land. Shares are membership in a commons.",
 narrative: "Founded 2016 on Maleku territory between Arenal and the Children’s Eternal Rainforest. Asociación Tierra Valiente Trust is a Costa Rican asociación holding the 80-acre (35 ha) commons, farm, and healing-arts centre. Up to 40 shares (individuals, couples, or families) come with a private living structure around communal infrastructure; Porvenir Design documented the plan, with about half the shares sold by 2019. U.S. gifts are fiscally sponsored by Amigos de Costa Rica (a 501(c)(3)), that is a donation path. Retreat infrastructure (Gaia Domes, tambos, jungle huts) is the public face.",
 divided: [
 {
 label: "The 80-acre commons",
 holder: "Asociación Tierra Valiente Trust",
 share: "Farm, healing-arts centre, communal land",
 what: "Costa Rican asociación.",
 },
 {
 label: "Shareholder dwellings",
 holder: "Up to 40 shareholder households",
 share: "Private living structures on the commons",
 what: "A share is membership.",
 },
 {
 label: "U.S. gift path",
 holder: "Amigos de Costa Rica (fiscal sponsor)",
 share: "Not title",
 what: "501(c)(3) fiscal sponsor for deductible gifts. Not the landlord.",
 }
 ],
 },
 lama: {
 owner: "Lama Foundation",
 complexity: "simple",
 tenure: "Nonprofit",
 howHeld: "The New Mexico 501(c)(3) holds the mountain land, buildings, and retreat programs. There are no private lots and no permanent members.",
 narrative: "Educational, religious, and scientific nonprofit (EIN 85-0202741; founded 1967, tax entity 1968–69). Ultimate legal authority sits with a board, mostly past residents, who treat themselves as advisors; a resident circle runs daily life.",
 divided: [],
 },
 arcosanti: {
 owner: "The Cosanti Foundation owns ~860 acres; Arizona State Land Department leases ~3,200 more",
 complexity: "split",
 tenure: "Hybrid",
 howHeld: "The experimental town sits on fewer than 25 acres of Foundation land. Two state parcels totaling about 3,200 acres are leased as open-space preserve, for a sanctuary of roughly 4,060 acres.",
 narrative: "The Cosanti Foundation is an Arizona 501(c)(3) founded in 1965. It owns about 860 acres at Arcosanti, plus Cosanti (Soleri’s Paradise Valley studio, a separate Arizona Historic Site under the same parent) the bell foundries, tours, and workshops. Occupancy of the state parcels is by lease, not freehold. Agua Fria National Monument bounds the east.",
 divided: [
 {
 label: "Owned land",
 holder: "The Cosanti Foundation",
 share: "About 860 acres, including the town site of fewer than 25 acres",
 what: "Arizona 501(c)(3). Also owns the Cosanti studio in Paradise Valley.",
 },
 {
 label: "Leased preserve",
 holder: "Arizona State Land Department (leases to the Foundation)",
 share: "Two state parcels totaling about 3,200 acres",
 what: "Open-space preserve. Occupancy by lease, not freehold. Combined with the 860 acres this is the ~4,060-acre sanctuary.",
 }
 ],
 },
 "alpha-farm": {
 owner: "Alpha Farm cooperative",
 complexity: "simple",
 tenure: "Cooperative (common title)",
 howHeld: "Members own the 280-acre Deadwood farm equally and pool income. Quaker-style consensus.",
 narrative: "Caroline Estes contributed most of the original purchase money; that did not become private title. Jim Estes died 2013; Caroline died at the farm 13 July 2022. Members own the farm equally. Not Oregon condominium lots.",
 divided: [],
 },
 sirius: {
 owner: "Sirius Community, Inc.",
 complexity: "simple",
 tenure: "Nonprofit",
 howHeld: "The 501(c)(3) educational nonprofit holds the 90 acres in Shutesbury. Residents live as a spiritual membership community.",
 narrative: "The charity is the public-benefit shell (courses, internships, visitors). Land is Nipmuc and Pocomtuc territory; the nonprofit holds title.",
 divided: [],
 },
 huehuecoyotl: {
 owner: "Huehuecoyotl land (Tepoztlán)",
 complexity: "simple",
 tenure: "Private farm",
 howHeld: "About two hectares (five acres) held for Mexico’s first ecovillage. Small enough that title is a household-scale deed.",
 narrative: "A Mexican asociación on privately held land. About twenty people share the Sierra del Tepozteco site. Alberto Ruz Buenfil (El Coyote) died in 2023; the village remains a cultural and educational association.",
 divided: [],
 },
 "cite-ecologique": {
 owner: "La Cité Écologique de Ham-Nord",
 complexity: "simple",
 tenure: "Nonprofit",
 howHeld: "A Quebec nonprofit / OSBL holds the village, school, and land at 689 rang 8.",
 narrative: "Successor to the 1984 Cité écologique de l’ère du Verseau after a 1990 bankruptcy ended that first legal shell; the community continued under the Cité Écologique name. Trading companies (historically Kheops International, RespecTerre, Jardins de la Cité / Ferme Bio-Maraîchère) sit beside the nonprofit; they are enterprises. Land is held for the community rather than as freehold house lots.",
 divided: [],
 },
 acorn: {
 owner: "Acorn Community Farm",
 complexity: "simple",
 tenure: "Cooperative (common title)",
 howHeld: "The secular egalitarian corporation holds about 72 acres, houses, and the seed business in common. Members have no private title.",
 narrative: "Income-sharing, consensus, Federation of Egalitarian Communities. Twin Oaks spin-off. Twin Oaks’s 501(d) tax status is not documented here and is not assumed. Do not confuse with the California 501(c)(3) Acorn Community Enterprises (EIN 68-0434948), a different organization.",
 divided: [],
 },
 "las-canadas": {
 owner: "Rancho Las Cañadas, private ranch title under a cooperativa",
 complexity: "split",
 tenure: "Private farm",
 howHeld: "Three hundred and six hectares inherited by agronomist Ricardo Romero as extensive cattle land. Title began as private ranch land (freehold); the project became a cooperativa, members share votes and income, they are not purchasers of subdivided lots.",
 narrative: "They farm inherited ranch land as a cooperativa. Cloud-forest conservation is how they use the land. You join the cooperativa.",
 divided: [
 {
 label: "Underlying title",
 holder: "Rancho Las Cañadas (private farm title)",
 share: "306 hectares of former cattle land",
 what: "Inherited freehold. The ranch was not purchased as a CLT or an ejido.",
 },
 {
 label: "Who has a say",
 holder: "The agroecological cooperativa",
 share: "Votes and income, not cadastral lots",
 what: "Social structure on the ranch. Members are not purchasers of subdivided parcels.",
 }
 ],
 },
 "our-ecovillage": {
 owner: "O.U.R. Eco Village Cooperative",
 complexity: "simple",
 tenure: "Cooperative (common title)",
 howHeld: "A British Columbia Community Services (Non-Profit) Cooperative holds the 25-acre Shawnigan Lake demonstration site. Members hold co-op membership, not strata lots.",
 narrative: "Multi-stakeholder; sociocracy. The land is on unceded Indigenous territory of the Cowichan peoples.",
 divided: [],
 },
 "whole-village": {
 owner: "Whole Village Property Co-operative Inc., plus a 999-year conservation easement",
 complexity: "split",
 tenure: "Housing cooperative",
 howHeld: "The Ontario co-operative corporation holds the 191-acre Caledon farm. Most members live in Greenhaven, a 15,000 sq ft eleven-family ecoresidence, occupancy in a co-op, not eleven freehold lots.",
 narrative: "Whole Village King Ltd became the property co-operative after the 2002 purchase. Greenhaven (2004) is a legal-precedent ‘single family’ dwelling used as cohousing. A conservation easement held by the Escarpment Biosphere Conservancy is attached to the deed for 999 years (farmland, forest, a provincially significant wetland; housing cluster excepted). That easement is a conservation covenant. A CSA operates on the organic farm.",
 divided: [
 {
 label: "The 191-acre farm",
 holder: "Whole Village Property Co-operative Inc.",
 share: "The Caledon land (successor to Whole Village King Ltd)",
 what: "Ontario co-operative corporation. Members steward; they do not hold eleven freehold lots.",
 },
 {
 label: "Greenhaven",
 holder: "The co-op, occupied by eleven families",
 share: "15,000 sq ft ecoresidence (2004)",
 what: "Shared common space, private quarters, one building. Not eleven condo titles.",
 },
 {
 label: "Conservation overlay",
 holder: "Escarpment Biosphere Conservancy (easement)",
 share: "999-year covenant on farmland, forest, wetland, housing cluster excepted",
 what: "Restricts development. Does not own the farm.",
 }
 ],
 },
 botton: {
 owner: "Camphill Village Trust Ltd holds most of the dale; Esk Valley Camphill rents 19 households",
 complexity: "split",
 tenure: "Hybrid",
 howHeld: "Two charities on one 600-acre dale. The Trust holds most of the land and still runs part of Botton as professional social care. Esk Valley Camphill Community rents properties from the Trust and lives the original shared-lives pattern. Neither sells title.",
 narrative: "Camphill Village Trust Ltd (company 00539694; charity 232402) is a company limited by guarantee incorporated October 1954. The Macmillan family offered Botton at the head of Danby Dale in 1955; Alistair Macmillan, who had a learning disability, later lived in the village. The Trust now runs several communities in England and Scotland; Botton is the first village, not the whole charity. In the 2010s the Trust professionalised care; most coworkers formed Esk Valley Camphill Community, about 19 households at Botton and nearby Ainthorpe and Castleton, shared lives, no employment contracts, pooled household income. A legal fight left EVCC with the households, not the freehold. EVCC is a recognised Shared Lives scheme in partnership with The Avalon Group for North Yorkshire. The North York Moors National Park is a planning overlay, not the owner.",
 divided: [
 {
 label: "Most of the 600-acre dale",
 holder: "Camphill Village Trust Ltd",
 share: "Freehold of the farms and most houses; still a professional social-care service",
 what: "Company limited by guarantee and registered charity. Botton is the first village, not the whole Trust.",
 },
 {
 label: "Nineteen shared-lives households",
 holder: "Esk Valley Camphill Community",
 share: "Households at Botton, Ainthorpe, and Castleton, rented from the Trust",
 what: "The original Camphill pattern after the 2010s split. Occupancy, not freehold.",
 },
 {
 label: "Historical gift",
 holder: "Macmillan family (1955)",
 share: "Offered Botton",
 what: "Origin of the dale in Camphill hands. National Park planning is an overlay, not title.",
 }
 ],
 },
 limans: {
 owner: "European Land Fund (Swiss foundation)",
 complexity: "simple",
 tenure: "Foundation",
 howHeld: "A Swiss land foundation holds the land and means of production so the farm cannot be subdivided or sold privately.",
 narrative: "Longo Maï Limans in the Alpes-de-Haute-Provence. The European Land Fund is a lock against private sale. The cooperative community lives and farms on foundation land.",
 divided: [],
 },
 "los-portales": {
 owner: "Asociación El Espacio Cooperativo, sede Los Portales",
 complexity: "simple",
 tenure: "Association",
 howHeld: "A Spanish asociación on a 200-hectare Sierra Morena finca. Agriculture, education, and dream research.",
 narrative: "Founded 1984. You join the association.",
 divided: [],
 },
 "torri-superiore": {
 owner: "Associazione Culturale Torri Superiore owns the public half; about twenty private apartments the rest",
 complexity: "split",
 tenure: "Hybrid",
 howHeld: "The cultural association owns the guesthouse / cultural-centre half of the 14th-century stone hamlet. About twenty apartments in the other half are privately owned and restored by members, freehold inside a stone stack.",
 narrative: "Three overlapping bodies. Associazione Culturale Torri Superiore (1989) owns the public half. Ture Nirvane Società Cooperativa Sociale di Comunità (1999) runs eco-tourism, courses, and the guesthouse, enterprise to the stack. The resident community decides by consensus. Restoration of lime, timber, and solar took decades after emigration had emptied the mule-track hamlet.",
 divided: [
 {
 label: "Public half",
 holder: "Associazione Culturale Torri Superiore",
 share: "Guesthouse / cultural centre in the medieval stack",
 what: "Founded 1989 to restore and repopulate the abandoned hamlet.",
 },
 {
 label: "Private apartments",
 holder: "About twenty member households",
 share: "Restored apartments in the other half of the stone village",
 what: "Freehold inside the stack. Owners are members of the village.",
 },
 {
 label: "Stays and courses",
 holder: "Ture Nirvane community social cooperative",
 share: "Not title, the tourist and teaching face",
 what: "Founded 1999. Legacoop Liguria / Banca Etica. Rents the public work, does not own the hamlet.",
 }
 ],
 },
 "krishna-valley": {
 owner: "Magyarországi Krisna-tudatú Hívők Közössége / ISKCON Hungary",
 complexity: "simple",
 tenure: "Religious society",
 howHeld: "The registered church holds the ~266–300 hectare organic farm as New Vraja-dhama. Title sits with the religious organisation, not with household lots.",
 narrative: "About 120 ha bought at auction in 1993 with Hungarian donations; groundbreaking February 1994. Sivarama Swami is the founding spiritual figure. Visitors walk a temple village; members live a Vaishnava religious life.",
 divided: [],
 },
 "brithdir-mawr": {
 owner: "A split farm whose leased half was sold in 2024, occupancy still disputed",
 complexity: "split",
 tenure: "Hybrid",
 howHeld: "The Brithdir Mawr Housing Co-op leased the farmyard half. In 2024 that half was sold to a buyer who wants a retreat centre; as of 2025 the community was still occupying and in dispute. The other half had already gone to Tir Ysbrydol.",
 narrative: "Architectural historian Julian Orbach and Emma Orbach set up on a rundown ~160-acre farm in 1993. The land later split: Emma Orbach’s Tir Ysbrydol took woodland; That Roundhouse later sat in its own trust; Julian retained about 80 acres and the farmyard and leased it to the housing co-op. That is a housing cooperative on leased land. The community had first refusal when the farmyard half went up and spent years trying to raise about £1 million. In 2024 Julian sold; the new buyer’s retreat-centre plan is what the remaining community is fighting. National Park planning, is the overlay that made the roundhouse famous (Low Impact Development policy followed the ten-year fight). The 2024–25 dispute is about who the landlord is, not about converting to freehold lots.",
 divided: [
 {
 label: "Farmyard half (~80 acres)",
 holder: "Sold 2024; previously Julian Orbach, leased to Brithdir Mawr Housing Co-op",
 share: "The lived farm, now in dispute",
 what: "Co-op on a lease, not freehold. Community occupying and disputing a retreat-centre sale as of 2025.",
 },
 {
 label: "Woodland half",
 holder: "Tir Ysbrydol (Emma Orbach) after the split",
 share: "Woodland from the original ~160 acres",
 what: "Separated earlier. Not the housing co-op’s lease.",
 },
 {
 label: "That Roundhouse",
 holder: "Its own trust",
 share: "The turf-roofed house that forced Low Impact Development into Welsh policy",
 what: "A separate trust, not the farmyard title. National Park planning is the overlay.",
 }
 ],
 },
 keuruu: {
 owner: "Keuruun ekokylä ry",
 complexity: "simple",
 tenure: "Association",
 howHeld: "The Finnish registered association owns the 53-hectare farm: about 25 ha organic arable and 17 ha forest. You join the association.",
 narrative: "Founded 1997. Politically and religiously unaffiliated. Members of GEN Finland (SKEY) and GEN.",
 divided: [],
 },
 hurdal: {
 owner: "Private timber houses plus Huldra Økogrend Fellesareal (joint commons)",
 complexity: "split",
 tenure: "Freehold + covenants",
 howHeld: "Two eras, two forms. Phase one: a cooperative rented the former Gjøding rectory from the municipality. Phase two: households own dwellings, and a realsameie holds roads and commons. Houses can change hands.",
 narrative: "Hurdal municipality invited an ecovillage onto the former rectory farm around 2001–02 and rented it to Kilden eco-community cooperative, which built straw-bale houses; members held equal shares. Filago AS later developed Huldra Økogrend as a larger eco-housing project, about 64–70 houses and ~150 residents. That later layer is closer to a homeowners association plus freehold than to a housing cooperative. Huldra Økogrend Fellesareal is the joint ownership of roads and commons. The scale-up brought debt and identity conflict; the place is still lived in. The municipality is a partner and former landlord, not the current freehold of the houses.",
 divided: [
 {
 label: "The houses",
 holder: "Private households",
 share: "About 64–70 timber houses in Huldra Økogrend",
 what: "Freehold dwellings. Houses can change hands. Not income-sharing.",
 },
 {
 label: "Roads and commons",
 holder: "Huldra Økogrend Fellesareal (realsameie)",
 share: "Joint ownership of shared land and infrastructure",
 what: "Norwegian joint-ownership of commons, closer to an HOA than to a co-op.",
 },
 {
 label: "Earlier lease",
 holder: "Hurdal municipality → Kilden cooperative (historical)",
 share: "Gjøding rectory farm, rented from about 2001",
 what: "Phase-one co-op on a municipal lease. Not the current freehold of the houses.",
 }
 ],
 },
 suderbyn: {
 owner: "Suderbyn Earth-Care",
 complexity: "simple",
 tenure: "Foundation",
 howHeld: "A Swedish foundation holds land and ecology on the old farm.",
 narrative: "The ecovillage lives on foundation land on Gotland. You join the community.",
 divided: [],
 },
 aardehuis: {
 owner: "Twenty-three privately financed earthships plus an association",
 complexity: "split",
 tenure: "Freehold + covenants",
 howHeld: "Households privately financed 23 earthships on 1.2 hectares at Olst. Occupancy is closer to freehold plus an association than to a housing-cooperative share. Houses can change hands.",
 narrative: "Built 2012–15 with help from some 1,500–2,000 volunteers from dozens of countries. Total construction about €5 million. The tiny site is a cluster of private earthships.",
 divided: [
 {
 label: "The 23 earthships",
 holder: "Individual households",
 share: "Privately financed dwellings on 1.2 ha",
 what: "Closer to freehold plus association than to a co-op share. Houses can change hands.",
 },
 {
 label: "Shared project",
 holder: "The earthship association / project body",
 share: "The 1.2 ha cluster and the building story",
 what: "Held by the community, not sold as municipal housing.",
 }
 ],
 },
 "comunidad-del-sur": {
 owner: "Urban headquarters in Tres Cruces; ECOSUR is the agrarian arm",
 complexity: "split",
 tenure: "Hybrid",
 howHeld: "An anarchist cooperative that never became a housing-lot company. Urban life and an agrarian cooperative sit in the same family, not as one farm title.",
 narrative: "Founded 20 August 1955 in Montevideo. Common ownership, shared production and consumption, rotation of work. After dictatorship exile in Peru and Sweden the group returned as an eco-community. Editorial Nordan and the Tryckop workshops are anarchist cooperatives; Cooperativa de Educación y Comunicación Alternativa (CODEUCA) and Cooperativa de Producción Agraria ECOSUR sit in the same family. ECOSUR is cooperative production. The civil-society map still lists La Paz 1988, Montevideo.",
 divided: [
 {
 label: "Urban house",
 holder: "Comunidad del Sur (anarchist cooperative)",
 share: "Headquarters at La Paz 1988, Tres Cruces; historically Malvín Norte",
 what: "A small collective. Common ownership was the 1955 compact.",
 },
 {
 label: "Agrarian arm",
 holder: "Cooperativa de Producción Agraria ECOSUR",
 share: "The rural production cooperative",
 what: "Same family.",
 }
 ],
 },
 penalolen: {
 owner: "Copropiedad, Comunidad Ecológica de Peñalolén",
 complexity: "split",
 tenure: "Freehold + covenants",
 howHeld: "About twenty parcels on the old Lo Hermida hillside, with sitios inside them that the state does not always recognise as lots. Houses sit closer to freehold-plus-association than to a housing-cooperative share.",
 narrative: "From 1980. The complication is recognition: parcels exist, sitios inside them are lived as homes, and Chilean cadastre does not always treat those sitios as lots. This is a hillside copropiedad with a contested internal map.",
 divided: [
 {
 label: "Recognised parcels",
 holder: "Copropiedad members",
 share: "About twenty parcels on the Lo Hermida hillside",
 what: "Chilean copropiedad. Closer to freehold-plus-association than to a co-op share.",
 },
 {
 label: "Sitios inside parcels",
 holder: "Households occupying sitios",
 share: "Homes the state does not always recognise as lots",
 what: "The lived map is finer than the cadastral map. That is the complication.",
 }
 ],
 },
 "eco-truly": {
 owner: "Eco Truly Park (Vaishnava community)",
 complexity: "simple",
 tenure: "Religious society",
 howHeld: "Title and temple life sit with the Hare Krishna / Vaishnava community on the Chacra y Mar beach strip, not with household lots.",
 narrative: "Founded 1 January 1994.",
 divided: [],
 },
 "ecovilla-gaia": {
 owner: "Asociación Gaia",
 complexity: "simple",
 tenure: "Association",
 howHeld: "The Argentine asociación civil holds the 20.5-hectare former Lactona dairy at Navarro. Members of the association, not lot owners.",
 narrative: "Association founded 1991 (from Amigos de la Tierra, 1984); land May 1996.",
 divided: [],
 },
 ipec: {
 owner: "Instituto de Permacultura e Ecovilas do Cerrado (IPEC)",
 complexity: "simple",
 tenure: "Nonprofit",
 howHeld: "The Brazilian nonprofit institute holds a 25-hectare teaching site on former degraded cattle pasture at Pirenópolis.",
 narrative: "Founded 1998 by Lucy Legan and André Soares. Soares bought cow-trodden Cerrado instead of intact forest, to show a positive human footprint. Ecoversidade is the educational arm.",
 divided: [],
 },
 piracanga: {
 owner: "Several bodies on one beach, Inkiri, Unah, and private dwellings",
 complexity: "split",
 tenure: "Hybrid",
 howHeld: "Living here can mean Inkiri membership, a job at the retreat enterprise, or a private dwelling, three doors, not one title.",
 narrative: "Around 2000 Angelina Ataíde bought land at the Piracanga river mouth on the Maraú Peninsula. A community grew intuitively until 2011, when the Inkiri statute created a Brazilian nonprofit form (Instituto Inkiri). Unah is a retreat enterprise employing local people on the same ground. Private houses sit among them. About forty houses / ~200 residents, 20+ nationalities. GEN and CASA Latina treat Piracanga as a reference site; it is not one landlord.",
 divided: [
 {
 label: "Intentional-community face",
 holder: "Instituto Inkiri",
 share: "Nonprofit community (statute 2011)",
 what: "Founded by Angelina Ataíde. Membership.",
 },
 {
 label: "Retreat enterprise",
 holder: "Unah",
 share: "Visitor organisation employing local people",
 what: "A job on the peninsula.",
 },
 {
 label: "Private houses",
 holder: "Individual dwelling owners",
 share: "Houses among the Inkiri and Unah ground",
 what: "The third door. Private title sitting next to nonprofit and enterprise.",
 }
 ],
 },
 aldeafeliz: {
 owner: "Asociación Aldeafeliz owns about 90% of the ecoaldea",
 complexity: "split",
 tenure: "Association",
 howHeld: "The Colombian asociación sin ánimo de lucro was created in 2009 so the land outlasts the founders.",
 narrative: "About ten families on association land in a forested mountain valley at San Francisco, Gualivá. Gloria Acosta is listed as legal representative. GEN currently lists the community as not open to new members.",
 divided: [
 {
 label: "Association land",
 holder: "Asociación Aldeafeliz",
 share: "About 90% of the ecoaldea",
 what: "Nonprofit association (2009). Designed so the land outlasts the founders.",
 },
 {
 label: "Remaining land",
 holder: "Community land",
 share: "The other ~10%",
 what: "The association is the lock on most of the valley.",
 }
 ],
 },
 nashira: {
 owner: "Eighty-eight houses titled to the women heads of household",
 complexity: "split",
 tenure: "Freehold + covenants",
 howHeld: "Title to a house is the point of the project, freehold of a dwelling earned by labour hours or Colombian cooperativa of shares.",
 narrative: "Three hectares at Bolo San Isidro, Palmira, on the former Malagana farm. Asociación / Fundación Nashira, led from the start by lawyer Ángela Cuevas Dolmetsch, is the organizing nonprofit, it is not the landlord of the 88 houses. First 39 houses finished in 2007; remaining 41 used public finance in the 2010s. About USD 10,000 a house in exchange for 1,200 hours of labour (World Habitat). Eleven productive núcleos run the internal economy. Mothers run the economy, in their own words.",
 divided: [
 {
 label: "The 88 houses",
 holder: "Women heads of household, by name",
 share: "Freehold dwellings on 3 ha (first 39 in 2007; remaining 41 in the 2010s)",
 what: "Title is what matters. Earned by labour hours, not bought on a listing.",
 },
 {
 label: "Organizing nonprofit",
 holder: "Asociación / Fundación Nashira",
 share: "Project vehicle, not landlord of the houses",
 what: "Ángela Cuevas Dolmetsch. Eleven núcleos coordinate the internal economy.",
 }
 ],
 },
 "el-manzano": {
 owner: "El Manzano family farm",
 complexity: "simple",
 tenure: "Family farm",
 howHeld: "One hundred and twenty hectares at Cabrero bought in 1930 by an English great-grandfather of co-founder Javiera Carrión. Family freehold. You cannot buy a share of the 120 hectares.",
 narrative: "This generation’s Transition / eco-school work dates from 2007; the farm is older. An extended family plus apprentices and an on-site eco-school.",
 divided: [],
 },
 "finca-sagrada": {
 owner: "Finca Sagrada biodynamic farm (Walter and Susan Davis Moora)",
 complexity: "simple",
 tenure: "Family farm",
 howHeld: "Private biodynamic holding: about 20 irrigated acres plus about 800 acres of mountain. Freehold plus association.",
 narrative: "From 2008. GEN lists about seven residents.",
 divided: [],
 },
 sekem: {
 owner: "SEKEM Holding and the Developmental Foundation on the Sharqia farm, plus a later Wahat holding",
 complexity: "split",
 tenure: "Hybrid",
 howHeld: " Companies, a foundation, an employee cooperative, and a university sit on land that began as 70 hectares of untouched desert.",
 narrative: "Pharmacologist Ibrahim Abouleish returned from Europe in 1977, bought 70 hectares of desert northeast of Cairo, planted a tree belt, and started biodynamic farming with Bedouin neighbours. SEKEM Holding (2001) administers ISIS Organic, ATOS Pharma, NatureTex, and the produce arms. The SEKEM Developmental Foundation runs school, clinic, and later Heliopolis University, paid by the companies, not by house sales. The Cooperative of SEKEM Employees is workplace membership. Oikocredit became a shareholder in 2012 after the Arab Spring, associated capital, not the landlord. Later desert reclamation (Wahat) is a separate holding from the original 70 hectares.",
 divided: [
 {
 label: "Original Sharqia farm",
 holder: "SEKEM (holding + foundation family)",
 share: "70 ha (~173 acres) of the 1977 desert farm",
 what: "Bought by Ibrahim Abouleish. Companies and cultural work sit on it. Not household lots.",
 },
 {
 label: "Companies",
 holder: "SEKEM Holding (2001)",
 share: "ISIS Organic, ATOS Pharma, NatureTex, produce arms",
 what: "Administers the enterprises.",
 },
 {
 label: "Culture and university",
 holder: "SEKEM Developmental Foundation / Heliopolis University",
 share: "School, clinic, campus, paid by the companies",
 what: "Board-driven nonprofit.",
 },
 {
 label: "Later desert",
 holder: "Wahat (separate holding)",
 share: "Later desert reclamation, not the original 70 ha",
 what: "A separate holding. Do not collapse it into the Belbeis farm.",
 }
 ],
 },
 wongsanit: {
 owner: "Sathirakoses-Nagapradipa Foundation (SNF)",
 complexity: "simple",
 tenure: "Foundation",
 howHeld: "The Thai public-benefit foundation holds the 34 rai donated in 1984. The ashram lives by consensus on foundation land.",
 narrative: "Foundation founded by Sulak Sivaraksa in 1968/69 (public charity no. 501). Land donated by M.R. Saisawatdee Svasti. Board-driven lock. Membership is vocational and unanimous.",
 divided: [],
 },
 ndem: {
 owner: "A Bayfall village older than the NGO, customary village land, not one farm title",
 complexity: "split",
 tenure: "Hybrid",
 howHeld: "The village itself is older than the 1985 association. The ONG organises gardens, water, school, and a cluster of neighbouring villages.",
 narrative: "Association des Villageois de Ndem was founded in 1985 and became ONG de Ndem in 2006. GEN lists ~30 in the core project; the NGO now works with about 20 villages / ~10,000 people (Reuters: ~4,600 in the Ndem village world). Historical village land is on the order of 50 hectares. Maam Samba is the artisan cooperative/brand attached to the craft centre, productive arm. GIEs in neighbouring villages sit in the same family. Serigne Babacar Mbow chairs; Maam Samba (the brother, and the brand) is the craft face. Visitors are guests of a village, not hotel clients.",
 divided: [
 {
 label: "The historical village",
 holder: "Ndem as a Bayfall settlement (older than the NGO)",
 share: "~50 ha at the village; customary / village land",
 what: "People live here. The association did not invent the village in 1985.",
 },
 {
 label: "Organising nonprofit",
 holder: "ONG de Ndem (Association des Villageois de Ndem)",
 share: "Gardens, water, school, neighbouring villages",
 what: "Founded 1985; ONG since 2006.",
 },
 {
 label: "Craft and neighbours",
 holder: "Maam Samba cooperative + neighbour-village GIEs",
 share: "Artisan brand and ~20 villages in the NGO’s map",
 what: "Productive arms and a cluster.",
 }
 ],
 },
 songhai: {
 owner: "Centre Songhai",
 complexity: "simple",
 tenure: "Nonprofit",
 howHeld: "The Beninese NGO holds the land and the integrated farm.",
 narrative: "Founded 1985 (UN civil-society profile: non-governmental organisation, B.P. 597 Porto-Novo). United Nations Centre of Excellence for Agriculture designation in 2008 is recognition.",
 divided: [],
 },
 tlholego: {
 owner: "Rural Educational Development Corporation (Rucore)",
 complexity: "simple",
 tenure: "Nonprofit",
 howHeld: "The South African nonprofit holds Tlholego as a living-and-learning site on 150 hectares of former cattle farm.",
 narrative: "Rucore founded 1991; Paul Cohen is executive director. You stay for a course or camp.",
 divided: [],
 },
 lilleoru: {
 owner: "Lilleoru MTÜ",
 complexity: "simple",
 tenure: "Association",
 howHeld: "The Estonian mittetulundusühing (registry 80143446) owns and runs the 30 hectares at Aruvalla. Land sits with the NGO, not with household lots.",
 narrative: "Founded 1993. You join the association.",
 divided: [],
 },
 zmag: {
 owner: "Recycled Estate (association site) plus members’ houses on nearby village plots",
 complexity: "split",
 tenure: "Association",
 howHeld: "ZMAG’s educational site is imagined as an ekoselo. Members’ houses sit on nearby village plots.",
 narrative: "Zelena mreža aktivističkih grupa, a Croatian udruga founded in 2002 (OIB 27906908289). The Recycled Estate (1999 permaculture experiment (straw-bale, tires, a common garden) is the association’s educational site. That split) teaching estate versus nearby village houses, is the land story.",
 divided: [
 {
 label: "Teaching site",
 holder: "ZMAG / Recycled Estate",
 share: "The 1999 permaculture experiment, run by the association",
 what: "Educational ekoselo.",
 },
 {
 label: "Where members live",
 holder: "Nearby village plots",
 share: "Members’ houses, not the Recycled Estate as a single title",
 what: "The residential map is the surrounding village, not one cooperativa of the estate.",
 }
 ],
 },
 guneskoy: {
 owner: "Güneşköy Kooperatifi",
 complexity: "simple",
 tenure: "Cooperative (common title)",
 howHeld: "Turkey’s first ‘environmental cooperative’ bought 75,000 m² from the state in July 2002. You join the cooperative.",
 narrative: "Founded in 2000 by eight people, most linked to Middle East Technical University. Non-profit-oriented.",
 divided: [],
 },
 kufunda: {
 owner: "Knuth family farm, Ruwa, the village lives on it",
 complexity: "simple",
 tenure: "Family farm",
 howHeld: "Part of the founder’s mother’s family farm at Ruwa. Title stays with the family; the village lives on it.",
 narrative: "A Zimbabwean nonprofit practice community of about fifteen families. Programmes have a public door; residential membership is small and relational.",
 divided: [],
 },
 glarisegg: {
 owner: "Liegenschaft Schloss Glarisegg AG, the Verein lives in the stones",
 complexity: "split",
 tenure: "Company / LLC",
 howHeld: "The Swiss Aktiengesellschaft has owned the castle, park, forest, and lake shore since the October 2003 auction. Shares in the AG are the land path. Gemeinschaft Schloss Glarisegg, a Swiss association founded in 2009, is the residential community.",
 narrative: "Other Vereine (seminar centre, school and forest kindergarten, permaculture) rent from the AG, associated operating layer. IC.org has listed a joining fee on the order of $5,450 and a trial of a year or more. Not Stockwerkeigentum (Swiss condominium). The AG owns the stones; the Verein lives in them.",
 divided: [
 {
 label: "Castle, park, forest, shore",
 holder: "Liegenschaft Schloss Glarisegg AG",
 share: "The whole property, since the October 2003 auction",
 what: "Swiss company. Shares in the AG are the land path, not apartment title.",
 },
 {
 label: "Who lives there",
 holder: "Gemeinschaft Schloss Glarisegg (association, 2009)",
 share: "Residential community in the castle",
 what: "Outer-circle / inner-circle path. Occupancy.",
 },
 {
 label: "Seminar, school, garden",
 holder: "Other Vereine renting from the AG",
 share: "Operating layer, not title",
 what: "Seminar centre, school and forest kindergarten, permaculture. They pay rent to the AG.",
 }
 ],
 },
 "los-horcones": {
 owner: "Comunidad de los Horcones, Sociedad Cooperativa de Producción",
 complexity: "simple",
 tenure: "Cooperative (common title)",
 howHeld: "The Sonoran producer cooperative holds about 100 hectares, houses, and enterprises in common. Members have no private title.",
 narrative: "The village began in 1973 on a smaller parcel outside Hermosillo and moved to the present desert tract at km 63 in October 1981. The cooperativa was formalized in November 1977. You join the Walden Two experiment.",
 divided: [],
 },
 tosepan: {
 owner: "Unión de Cooperativas Tosepan, socios’ milpas, plus cooperative campuses",
 complexity: "split",
 tenure: "Cooperative (common title)",
 howHeld: "The union does not hold one ranch. Member families hold pequeña propiedad (on the order of three-quarters of a hectare each) and some ejidal rights; Tosepan Kali, the training centre, the school, and the nursery sit on cooperative campuses around Cuetzalan.",
 narrative: "Mexico’s largest indigenous cooperative movement is a federation. Coffee gardens, milpas, and houses stay with the socios in 39 municipalities. Tosepan Kali at Nahuiogpan is the visitable campus. The 745,000 hectares that appeared in 2022 were mining concessions the union helped get invalidated, not land Tosepan owns.",
 divided: [
 {
 label: "Member land",
 holder: "Nahua and Tutunaku socios (pequeña propiedad and some ejidal rights)",
 share: "On the order of 0.75 ha per producer, across 39 municipalities",
 what: "The dirt people farm. The union is the market, the caja, and the school, not the landlord of every milpa.",
 },
 {
 label: "Cooperative campuses",
 holder: "Tosepan Kali, Kaltaixpetaniloyan, the school, the Xiloxochico nursery",
 share: "The visitable and training sites around Cuetzalan",
 what: "Cooperative-held nodes. Cabins, internado, plants.",
 },
 ],
 },
 "teopantli-kalpulli": {
 owner: "Teopantli Kalpulli A.C.",
 complexity: "split",
 tenure: "Private farm",
 howHeld: "About 37 hectares at San Isidro Mazatepec in an asociación civil: roughly 7 ha internally parceled (~55 lots of ~500 m²) and ~30 ha farm and reserve.",
 narrative: "A 1983 ashram that became a kalpulli. Private land. Internal lots are a cohousing-style split among families. The Primavera forest is next door; it is not their title.",
 divided: [
 {
 label: "Residential parcels",
 holder: "Member families inside the A.C.",
 share: "~7 ha as ~55 lots of ~500 m²",
 what: "Household dirt.",
 },
 {
 label: "Farm and reserve",
 holder: "Teopantli Kalpulli A.C.",
 share: "~30 ha",
 what: "Agriculture and environmental reserve. The commons of the kalpulli.",
 },
 ],
 },
 litibu: {
 owner: "Fideicomiso / LLC holding eight eco casas at Playa Litibú",
 complexity: "split",
 tenure: "Trust",
 howHeld: "Coastal restricted-zone structure: a bank fideicomiso holds title; an LLC is the collective beneficiary. Eight privately managed casas sit inside that wrapper.",
 narrative: "Foreigners cannot hold direct title on this beach. The trust-and-LLC is the legal path. Do not confuse the eight casas with FONATUR’s master-planned Litibú (golf, condos, resort) on the same bay. Membership is a visit-and-work path in addition to a casa share.",
 divided: [
 {
 label: "Underlying title",
 holder: "Mexican bank fideicomiso",
 share: "The beach-forest parcel",
 what: "Required in the coastal restricted zone. The bank is the named owner; the LLC is the beneficiary.",
 },
 {
 label: "Who lives there",
 holder: "Eight eco-casa households via the LLC",
 share: "Privately managed houses plus common solar, cisterns, blackwater, food forest",
 what: "A casa key is not automatic membership. Dues and labour still apply.",
 },
 ],
 },
 "u-yits-kaan": {
 owner: "Escuela de Agricultura Ecológica U Yits Ka'an A.C.",
 complexity: "simple",
 tenure: "Nonprofit",
 howHeld: "About 15 hectares at Km 3 of the Maní–Dzán road, purchased by the founding priests for the internado and now sitting with the independent A.C.",
 narrative: "A campesino school. MISEREOR paid for the founding; after 2008 the school separated from the hierarchy as an asociación civil. Students and promotores work the milpa.",
 divided: [],
 },
 "tierra-del-sol": {
 owner: "Villa Agroecológica Tierra del Sol (private farm title)",
 complexity: "simple",
 tenure: "Private farm",
 howHeld: "Four hectares at Paraje Langueche, Tlacochahuaya, held as a private regenerative farm. Founder Pablo Ruiz Lavalle bought about two hectares in 2001; the holding grew.",
 narrative: "A teaching villa on family-scale title. Apprentices and visitors come by programme; they do not purchase a Valles Centrales lot. Neighbours once questioned the claim; the farm still teaches on it.",
 divided: [],
 },
 "bosque-village": {
 owner: "Brian Fey (private title / family trust)",
 complexity: "simple",
 tenure: "Private farm",
 howHeld: "Eighty-three acres of pine, oak, and madrone near Yotatiro held in a founder’s name. A 2016 nonprofit was intended to take staged control; the named A.C. is not in public sources reviewed.",
 narrative: "A founder-owned highland forest that hosts interns and visitors. IC.org lists a single invested member. Neighbouring land is a different conversation.",
 divided: [],
 },
 "via-organica": {
 owner: "Vía Regenerativa y Orgánica A.C.",
 complexity: "simple",
 tenure: "Nonprofit",
 howHeld: "The Mexican asociación civil holds the 80-hectare Jalpa-valley demonstration ranch. Store and restaurant are operating arms.",
 narrative: "A regenerative ranch-school. OCA and Regeneration International are U.S. partners, not the Mexican title holder. You tour and train.",
 divided: [],
 },
 crisalium: {
 owner: "Crisalium A.C. nested inside Parque Natural El Encuentro",
 complexity: "split",
 tenure: "Private farm",
 howHeld: "Five hectares inhabited by the ecoaldea, inside a ~143-hectare private park (from 2002). A 2020 notarial servidumbre ecológica zones conservation, restoration, and limited building.",
 narrative: "An unusual Mexican hybrid: a family A.C. living inside a private natural park under an ecological easement. GEN: visitors yes, new members no. You take a workshop in the forest.",
 divided: [
 {
 label: "Park",
 holder: "Parque Natural El Encuentro (private park, 2002)",
 share: "~143 ha pine-oak and wetland",
 what: "Opened to the public by its owners. The larger title Crisalium is nested in.",
 },
 {
 label: "Who lives there",
 holder: "Crisalium, educación, naturaleza y transición A.C.",
 share: "5 ha inhabited and stewarded",
 what: "Family ecoaldea. Collaboration with the park from 2017; easement 2020.",
 },
 {
 label: "Covenant",
 holder: "Servidumbre ecológica (2020)",
 share: "Georeferenced use zones",
 what: "A covenant on the land.",
 },
 ],
 },
 "inla-kesh": {
 owner: "Inla Kesh residential circle (Chichihuistán parcel)",
 complexity: "simple",
 tenure: "Private farm",
 howHeld: "About two hectares at Chichihuistán, Teopisca municipality, lived on since 2012. Named Mexican moral person not in public sources reviewed.",
 narrative: "A Tamera-inspired biotopo on private highland land. Courses (EDE) have a public door; membership is a small circle.",
 divided: [],
 },
 "vicente-guerrero": {
 owner: "Member families’ milpas; Proyecto de Desarrollo Rural Integral Vicente Guerrero A.C. is the school",
 complexity: "split",
 tenure: "Cooperative (common title)",
 howHeld: "The A.C. does not hold one ranch. Promoter families farm pequeña propiedad and village plots in Españita and neighbouring municipalities; the asociación is the training, the maize fair, and the grant wrapper.",
 narrative: "A campesino-a-campesino movement. The 1973 committee became a 1997 A.C. You join by farming and promoting in a member village. and. Pan para el Mundo pays projects; it does not buy the milpas.",
 divided: [
 {
 label: "Member land",
 holder: "Campesino families in Vicente Guerrero and neighbouring villages",
 share: "Family milpas across Españita and nearby municipalities",
 what: "The dirt people farm. The A.C. is the school and the fair, not the landlord.",
 },
 {
 label: "Association",
 holder: "Proyecto de Desarrollo Rural Integral Vicente Guerrero A.C.",
 share: "Training, fairs, grant administration",
 what: "The 1997 civil-association wrapper.",
 },
 ],
 },
 nanciyaga: {
 owner: "Rodríguez family (Reserva Ecológica Nanciyaga)",
 complexity: "split",
 tenure: "Private farm",
 howHeld: "About 14 hectares on Laguna Catemaco, bought at auction in the late 1980s. Two hectares are the tourist face; the rest is jungle. Inside the Los Tuxtlas biosphere (1998) as geography, not as a second landlord.",
 narrative: "A family ecological reserve. Carlos Rodríguez Mouriño directs. Cabins are a business on private title. Tourism listings that say 35 hectares are not the El País 2023 figure used here.",
 divided: [
 {
 label: "Tourist face",
 holder: "Nanciyaga eco-tourism operation",
 share: "~2 ha of cabins, docks, restaurant",
 what: "The public door. Film sets and limpias.",
 },
 {
 label: "Jungle",
 holder: "Rodríguez family reserve",
 share: "~12 ha selva",
 what: "Macaw recovery, howler monkeys, the reason the 2 ha exist.",
 },
 ],
 },
 "pueblo-sacbe": {
 owner: "Private lot holders under Sacbé village bylaws",
 complexity: "split",
 tenure: "Freehold",
 howHeld: "About 54 hectares of jungle west of Playa del Carmen, parceled as private lots (foreigners typically via a coastal fideicomiso). Bylaws forbid the electrical grid and require biodigesters.",
 narrative: "A 1998 covenanted freehold village that still sells lots. Better jungle rules than Fifth Avenue condos. A casa key is a purchase plus the covenants.",
 divided: [
 {
 label: "House lots",
 holder: "About 50 families (and later buyers)",
 share: "Private parcels inside 54 ha",
 what: "The dirt people own. Listings exist. The bylaws still run with the lot.",
 },
 {
 label: "Jungle, cenotes, and covenants",
 holder: "Village bylaws (no grid, biodigesters, water)",
 share: "The conserved rest",
 what: "A private code on the land.",
 },
 ],
 },
 ixixtlan: {
 owner: "Ixixtlán SanArte (founder-held hill at Atlixco)",
 complexity: "simple",
 tenure: "Private farm",
 howHeld: "A hill sanctuary facing Popocatépetl and Iztaccíhuatl, founded 2006 by Beleni Kumara Inti. Named Mexican moral person not in public sources reviewed.",
 narrative: "A founder-led retreat ecoaldea. GEN lists 20 people, open to visitors and members. You take a retreat.",
 divided: [],
 },
 "huerto-roma-verde": {
 owner: "La Cuadra A.C. / Huerto Roma Verde occupying Jalapa 234",
 complexity: "simple",
 tenure: "Nonprofit",
 howHeld: "An urban lot at Jalapa 234, Roma Sur, left empty for 27 years after the 1985 earthquake. The A.C. and neighbours occupy and steward it as a biosocial laboratory.",
 narrative: "A city compost-and-market lot. The Multifamiliar Juárez rubble is the origin story.",
 divided: [],
 },
 "rancho-la-salud": {
 owner: "Rancho La Salud Village condominio (Jalisco law)",
 complexity: "split",
 tenure: "Condominium",
 howHeld: "Mexico’s first cohousing: each home is deeded; a percentage of ownership includes common ground. Founding member Jaime Navarro’s ~3½-acre lakeshore parcel is the land.",
 narrative: "A Jalisco condominio that runs monthly modified-consensus meetings. You buy a Garden Home, Villa, or Townhome. lot-and-home cohousing on Lake Chapala.",
 divided: [
 {
 label: "Deed homes",
 holder: "Individual owners (13 residents in 6 homes as of 2024)",
 share: "37 units planned from 120 m²",
 what: "Hacienda-style houses. Beneficiaries can inherit.",
 },
 {
 label: "Commons",
 holder: "Condominio (common house, palapa, pool, garden)",
 share: "Percentage of each deed",
 what: "The 3,000 sq ft common house and the salt-water lap pool. The cohousing face.",
 },
 ],
 },
 tamarindos: {
 owner: "EcoAldea Tamarindos lot holders (Mata de Agua)",
 complexity: "split",
 tenure: "Freehold",
 howHeld: "Selva baja caducifolia on the Río Jamapa. Lots from 500 m² offered on the village’s own site. Cabins and EcoClub sit on the same land.",
 narrative: "A lot-sales ecoaldea with a tourism face. Confirm what a 500 m² lot actually includes before you treat the river as a commons share.",
 divided: [
 {
 label: "Lots",
 holder: "Buyers of 500 m²+ parcels",
 share: "Pequeña propiedad on the Jamapa",
 what: "The published membership path. A portal, on the village’s own site.",
 },
 {
 label: "Hospitality and EcoClub",
 holder: "EcoAldea Tamarindos operation",
 share: "Cabins, restaurant, temazcal, zip-line, observatory",
 what: "The public door. You can visit without buying.",
 },
 ],
 },
 hapori: {
 owner: "Hapori lot holders inside Fraccionamiento Águila Real",
 complexity: "split",
 tenure: "Freehold",
 howHeld: "More than eight hectares of former pasture at km 13.5 of the SMA–Guanajuato libramiento. Custom eco-homes, each independently off-grid. Nested in the Águila Real eco-residencial.",
 narrative: "A regenerative lot-sales neighbourhood that actually means the off-grid part. Mike and Pau’s Hapori (Māori for community) sits inside a gated eco-residencial, two covenant layers, one hill. You buy a homesite.",
 divided: [
 {
 label: "Homesites",
 holder: "Lot-and-home buyers (GEN listed 8 early members)",
 share: "Custom lots on 8+ ha",
 what: "Standalone solar-and-battery houses. A purchase.",
 },
 {
 label: "Enclosing residencial",
 holder: "Fraccionamiento Águila Real",
 share: "The gated eco-residencial around Hapori",
 what: "Associated geography and covenants. Not the Hapori houses themselves.",
 },
 ],
 },
 sekkan: {
 owner: "Several individuals via LLC or tenancy in common (former Rancho Lacayo)",
 complexity: "simple",
 tenure: "Trust",
 howHeld: "Thirty-eight acres near San Miguel de Allende. IC.org: privately owned by several individuals through an LLC or a TIC. Six founding families closed in 2022.",
 narrative: "A letter-of-intent ecovillage. Members keep independent finances, pay fees, and owe two hours a week. You write a letter.",
 divided: [],
 },
 "nuevo-san-juan": {
 owner: "Comuneros of the Comunidad Indígena de Nuevo San Juan Parangaricutiro",
 complexity: "simple",
 tenure: "Cooperative (common title)",
 howHeld: "Presidential resolution of 25 November 1991 titled 18,138.32 ha as bienes comunales (inalienable, imprescriptible, unseizable) to 1,229 comuneros. The forestry enterprise sits on that communal territory.",
 narrative: "Purépecha communal title. You are a comunero. The 1943 volcano is the origin story; the 1991 Diario Oficial is the deed.",
 divided: [],
 },
 cedicam: {
 owner: "Member families’ milpas; CEDICAM is the school",
 complexity: "split",
 tenure: "Nonprofit",
 howHeld: "The organisation does not hold one ranch. Mixtec families farm pequeña propiedad and village plots in the Mixteca Alta; CEDICAM is the training, the nursery, and the contour-ditch school.",
 narrative: "A campesino-a-campesino movement. Jesús León Santos and neighbours built it in 1983. You join by farming and ditching. Goldman money paid recognition; it did not buy the hills.",
 divided: [
 {
 label: "Member land",
 holder: "Mixtec campesino families in the Mixteca Alta",
 share: "Family milpas, terraces, and contour ditches",
 what: "The dirt people farm. CEDICAM is the school, not the landlord.",
 },
 {
 label: "Organisation",
 holder: "CEDICAM",
 share: "Nurseries, training, Goldman-era recognition",
 what: "The 1983 campesino wrapper.",
 },
 ],
 },
 "sierra-gorda": {
 owner: "Communities inside the reserve; Grupo Ecológico Sierra Gorda I.A.P. is the alliance",
 complexity: "split",
 tenure: "Nonprofit",
 howHeld: "The 383,567 ha biosphere (DOF 19 May 1997) is a CONANP designation. Pequeña propiedad, ejido, and comunidad titles stay with the people who live there. The IAP does not hold the mountain.",
 narrative: "A citizen biosphere. Pati Ruiz Corzo’s 1987 IAP talked the decree into being. You take a trail or join the alliance. The missions and the waterfalls are public geography.",
 divided: [
 {
 label: "Designation",
 holder: "Reserva de la Biosfera Sierra Gorda (CONANP)",
 share: "383,567 ha, eleven core zones",
 what: "A 1997 decree on the mountains.",
 },
 {
 label: "Who lives there",
 holder: "Sierra communities (pequeña propiedad, ejido, comunidad)",
 share: "Village and farm titles inside the reserve",
 what: "The dirt people farm. The IAP is the alliance, not their deed.",
 },
 {
 label: "Alliance",
 holder: "Grupo Ecológico Sierra Gorda I.A.P.",
 share: "Education, carbon, radio, trails",
 what: "The 1987 Jalpan wrapper.",
 },
 ],
 },
 "la-ventanilla": {
 owner: "Servicios Ecoturísticos de La Ventanilla cooperativa (~25 families)",
 complexity: "simple",
 tenure: "Cooperative (common title)",
 howHeld: "A sociedad cooperativa of about twenty-five Zapotec families on the Tonameca mangrove lagoon, formed 1998, UMA 2002. The lagoon is the tour; the beach village is the home.",
 narrative: "A canoe cooperative. The turtle-and-crocodile trade closed; the families invented tours. You buy a paddle. Lagarto Real is a second cooperative on the same water, confirm whose boat.",
 divided: [],
 },
 "punta-laguna": {
 owner: "Najil Tucha families inside Otoch Ma’ax Yetel Kooh",
 complexity: "split",
 tenure: "Cooperative (common title)",
 howHeld: "About thirty Maya families live in the village and run the 2002 cooperativa. The 5,367.42 ha ANP is a CONANP flora-and-fauna designation on the forest.",
 narrative: "A village-and-reserve split. The monkeys are the cash engine; the families still live in thatch. You take a spider-monkey walk.",
 divided: [
 {
 label: "Reserve",
 holder: "Otoch Ma’ax Yetel Kooh ANP (CONANP)",
 share: "5,367.42 ha of jungle, lagoon, and monkeys",
 what: "A 2002 designation, petitioned since 1967. Not the co-op’s deed to the whole forest.",
 },
 {
 label: "Who lives there",
 holder: "Najil Tucha families",
 share: "Village, milpa, tour operation",
 what: "Thirty families dividing tour revenue. The membership is being of the village.",
 },
 ],
 },
 "yomol-atel": {
 owner: "Tseltal member families’ coffee gardens; Yomol A’tel is the federation",
 complexity: "split",
 tenure: "Cooperative (common title)",
 howHeld: "The group does not hold one ranch. Ts’umbal Xitalha’ families farm their own plots; Bats’il Maya and Capeltic add value. Jesuits helped found the structure in 2002.",
 narrative: "A Tseltal solidarity federation. You join by producing in a member community. Capeltic is a café.",
 divided: [
 {
 label: "Member land",
 holder: "Tseltal coffee-and-honey families (Ts’umbal Xitalha’)",
 share: "Family plots across Chilón / Yajalón and nine regions",
 what: "The dirt people farm. The federation is the roast and the café.",
 },
 {
 label: "Enterprises",
 holder: "Bats’il Maya, Capeltic, honey and soap companies",
 share: "Roaster, university cafés, value-add",
 what: "The public door in the city.",
 },
 ],
 },
 tierraluz: {
 owner: "TierraLuz lot holders; A.C. holds the commons",
 complexity: "split",
 tenure: "Freehold",
 howHeld: "Nineteen titled lots of about 400–600 m² plus about 8,500 m² of common land co-owned through a Mexican asociación civil. Off-grid solar, shared well. GEN living-together 2009.",
 narrative: "A covenanted freehold eco-neighbourhood that sells titled lots, and says so. You buy a homesite above Sayulita. The A.C. is the commons wrapper.",
 divided: [
 {
 label: "Lots",
 holder: "Buyers of titled 400–600 m² parcels (19 lots; two remaining on the site)",
 share: "Pequeña propiedad on the hill",
 what: "The published membership path. A deed.",
 },
 {
 label: "Commons",
 holder: "TierraLuz A.C.",
 share: "~8,500 m² trails, food forest, yoga platform, garden, roads",
 what: "GEN: co-owned via the civil association of lot-holders.",
 },
 ],
 },
 "huerto-tlatelolco": {
 owner: "Cultiva Ciudad A.C. occupying the Tlatelolco tower footprint",
 complexity: "simple",
 tenure: "Nonprofit",
 howHeld: "About 1,650 m² on the site of a Nonoalco-Tlatelolco housing tower damaged in 1985 and later demolished. The A.C. and neighbours steward it as a community huerto.",
 narrative: "A city garden on quake rubble. You bring compost. The Plaza de las Tres Culturas is next door; it is not their title.",
 divided: [],
 },
 kuyabeh: {
 owner: "Kuyabeh lot holders (km 34 Tulum–Cobá)",
 complexity: "split",
 tenure: "Freehold",
 howHeld: "375 ha of jungle in ½-ha and 1-ha lots, about 25 ha of commons, a roughly 7% construction cap. Foreigners typically via fideicomiso. Four named phases.",
 narrative: "A jungle lot-sales eco-residencial. GEN lists 160 owners. You buy a 4,700–9,400 m² parcela from US$108,000. The cenote and the hotel are amenities of a masterplan.",
 divided: [
 {
 label: "Lots",
 holder: "Buyers of ½-ha and 1-ha parcels (GEN: 160 owners)",
 share: "Pequeña propiedad / fideicomiso on 375 ha",
 what: "The published membership path. Portals and kuyabeh.com.",
 },
 {
 label: "Commons",
 holder: "Kuyabeh amenities (~25 ha)",
 share: "Hotel, restaurant, cenote, temazcal, lagoon, school, towers",
 what: "The visitor door. You can stay without buying. A lot is still the path in.",
 },
 ],
 },
 "cabo-pulmo": {
 owner: "CONANP (the water) + village households (the shore)",
 complexity: "split",
 tenure: "Nonprofit",
 howHeld: "Parque Nacional Cabo Pulmo is 71.11 km² of federal no-take reef and water. Houses on the East Cape are pequeña propiedad. ACCP is the civic A.C., not the landlord.",
 narrative: "A fishing village that asked for a park. The reef is not for sale. Dive shops are family enterprises. You buy a tank. UNESCO and Ramsar sit on the same water.",
 divided: [
 {
 label: "The reef",
 holder: "Parque Nacional Cabo Pulmo (CONANP)",
 share: "71.11 km², decreed 5 June 1995",
 what: "No-take marine park. The commons they dive.",
 },
 {
 label: "The village",
 holder: "East Cape households",
 share: "Pequeña propiedad on the shore",
 what: "The houses. Not sold by the park.",
 },
 {
 label: "Civic wrapper",
 holder: "Amigos para la Conservación de Cabo Pulmo A.C.",
 share: "Patrols and education from 2002",
 what: "One title.",
 },
 ],
 },
 "baja-ecovillage": {
 owner: "Zonas Verdes de Punta Banda A.C. (park) + Cantú parcels (houses)",
 complexity: "split",
 tenure: "Nonprofit",
 howHeld: "El Rinconcito Verde (~54 acres) is a canyon forest park protected with the town of Cantú in 2005 and managed by the A.C. from 2006. Houses sit on land Mark Lurie and others bought from Cantú from 2003.",
 narrative: "A founder-stewarded Punta Banda settlement and a nonprofit forest. The A.C. does not sell the canyon. Baja Montecito (~27 acres) is a neighbouring private eco-community, not this title.",
 divided: [
 {
 label: "Forest park",
 holder: "Zonas Verdes de Punta Banda, A.C.",
 share: "El Rinconcito Verde, ~54 acres",
 what: "Protected 2005. Named by a schoolchild. A 200-year plan.",
 },
 {
 label: "Houses",
 holder: "Cantú residential parcels",
 share: "Land purchased from the town from 2003",
 what: "Earth-friendly houses.",
 },
 ],
 },
 "baja-biosana": {
 owner: "Baja BioSana resident membership, 11 ha at El Chorro",
 complexity: "simple",
 tenure: "Hybrid",
 howHeld: "A shared 11-hectare desert oasis. Natural-building homes; a house that opens is offered as a membership transfer.",
 narrative: "GEN’s El Chorro ecoaldea. Off-grid under the Sierra de la Laguna. Confirm the current civil wrapper.",
 divided: [],
 },
 "san-jose-de-la-zorra": {
 owner: "Comunidad Indígena Kumiai de San José de la Zorra",
 complexity: "simple",
 tenure: "Cooperative (common title)",
 howHeld: "About 1,740 hectares of Kumiai territory, described as sitting in the jurisdiction of Ejido El Porvenir. 2024 Sujeto de Derecho Público. Ancestral dirt.",
 narrative: "One of five Baja Kumiai communities. You are Kumiai here, or you are a guest. The wine valley is next door; it is not this title.",
 divided: [],
 },
 "rancho-pacifico-baja": {
 owner: "Rancho Pacífico Baja homestead (15 acres east of El Pescadero)",
 complexity: "simple",
 tenure: "Freehold",
 howHeld: "A private 15-acre agricultural / eco-tourism parcel. Forming eco-village. Campground and bakery are uses of the same dirt.",
 narrative: "2019 permaculture rancho. The PDF is the join path. Guests of the oven are not members. Confirm who holds the deed this year.",
 divided: [],
 },
 tateikie: {
 owner: "Comunidad Indígena Wixárika de San Andrés Cohamiata (TateiKie)",
 complexity: "simple",
 tenure: "Cooperative (common title)",
 howHeld: "Communal Wixárika territory in Mezquitic. TateiKie is the ceremonial headquarters of sixteen agencies.",
 narrative: "Ancestral sierra. Cargos are civil and religious. Guests do not buy in. Wirikuta is a pilgrimage.",
 divided: [],
 },
 ayotitlan: {
 owner: "Ejido Ayotitlán (Nahua-Otomí)",
 complexity: "split",
 tenure: "Cooperative (common title)",
 howHeld: "1963 presidential resolution ~50,332 ha on paper; about 34,700 ha delivered. Consejo de Mayores beside the comisariado. The 1987 biosphere is a CONANP designation on the same mountain.",
 narrative: "A República de Ayotitlán far larger than the ejido paper. The undelivered hectáreas and the mines are the title fight.",
 divided: [
 {
 label: "Ejido dirt",
 holder: "Comuneros of Ejido Ayotitlán",
 share: "~34,700 ha delivered",
 what: "The 1963 paper that actually arrived. ~88 localities.",
 },
 {
 label: "Biosphere",
 holder: "Reserva de la Biosfera Sierra de Manantlán (CONANP)",
 share: "139,577 ha, 23 March 1987",
 what: "A designation around the ejido.",
 },
 ],
 },
 "bosque-la-primavera": {
 owner: "APFF La Primavera (CONANP designation); edge titles stay with ejidos and pequeña propiedad",
 complexity: "split",
 tenure: "Nonprofit",
 howHeld: "30,500 ha decreed 6 March 1980. CONANP holds the APFF. Zapopan, Tala, Tlajomulco, El Arenal keep their edge titles.",
 narrative: "Guadalajara’s lung on a Pleistocene caldera. Teopantli Kalpulli is a neighbour, not this deed. You hike.",
 divided: [
 {
 label: "The designation",
 holder: "Área de Protección de Flora y Fauna La Primavera",
 share: "30,500 ha",
 what: "DOF 6 March 1980. CONANP / SEMADET weekday.",
 },
 {
 label: "The edge",
 holder: "Ejidos and pequeña propiedad in four municipalities",
 share: "Farms and city on the urban side",
 what: "Not the APFF’s lots. The politics is the edge.",
 },
 ],
 },
 kasisi: {
 owner: "Kasisi Agricultural Training Centre (Jesuits of the Zambia-Malawi Province)",
 complexity: "simple",
 tenure: "Nonprofit",
 howHeld: "The Jesuit training farm holds the Chongwe land, dairy, dams, and classrooms.",
 narrative: "Founded 1974 at Kasisi Mission. About 80 hectares under irrigation from two dams (KATC 2001). Organic since 1990. Farmers rotate through courses; they do not take title.",
 divided: [],
 },
 "awra-amba": {
 owner: "Awra Amba village cooperative, on Ethiopian state-and-people land",
 complexity: "split",
 tenure: "Cooperative (common title)",
 howHeld: "About 17.5 hectares with cooperative members plus about one associated hectare. The constitution vests land in the state and the people; the cooperative is the user.",
 narrative: "Founded 1980, displaced 1989–93, weaving after the farm was taken. A later trading company exists because cooperatives cannot operate outside their locality.",
 divided: [
 {
 label: "Cooperative holding",
 holder: "Awra Amba village cooperative",
 share: "~17.5 ha (plus ~1 ha associated)",
 what: "The dirt people still farm. Small. Weaving is the cash that replaced the lost fields.",
 },
 {
 label: "Underlying title",
 holder: "Ethiopian state and people (constitutional)",
 share: "All rural land",
 what: "No private freehold. The cooperative uses; it does not sell lots.",
 },
 ],
 },
 umoja: {
 owner: "Umoja Uaso Women Group, 14-acre campsite on the Waso",
 complexity: "simple",
 tenure: "Association",
 howHeld: "A Kenyan CBO holds the 14-acre campsite and manyattas at Archers Post. Twelve cottages are the enterprise. Women live here; men do not take membership.",
 narrative: "Founded 1990 by Rebecca Lolosoli and about fifteen Samburu women. You take a cottage.",
 divided: [],
 },
 "st-jude": {
 owner: "St. Jude Family Projects (NGO S.5914/2000) on the Busense farm",
 complexity: "simple",
 tenure: "Nonprofit",
 howHeld: "The Ugandan NGO holds the teaching farm at Busense, 12 km along Mutukura Road from Masaka. Hectares unpublished in the public record.",
 narrative: "Josephine Kizza Aliddeki and the late John Kizza. Courses, women’s groups, a dried-fruit plant.",
 divided: [],
 },
 "khula-dhamma": {
 owner: "Khula Dharma farm, five friends’ freehold near Haga Haga",
 complexity: "simple",
 tenure: "Freehold",
 howHeld: "Private bushveld bought in 2000. Just under 300 ha then; the village site now says 180 ha on the Quko. Cob houses sit on that title, not on a sectional-title scheme.",
 narrative: "Living together from 1 January 2002. Retreats and volunteers are the public door. Confirm who holds the 180 hectares.",
 divided: [],
 },
 nadeet: {
 owner: "NaDEET Centre on NamibRand, trust on a private reserve",
 complexity: "split",
 tenure: "Trust",
 howHeld: "Namib Desert Environmental Education Trust (T168/2003) runs the solar centre. NamibRand Nature Reserve (on the order of 202,000 ha of former sheep farms) is a separate private reserve the Centre sits on by arrangement.",
 narrative: "Viktoria Keding, 2003. UNESCO-Japan Prize 2018. You come for a programme.",
 divided: [
 {
 label: "The education centre",
 holder: "NaDEET trust T168/2003",
 share: "Solar classrooms and hostels on NamibRand (hectares unpublished)",
 what: "The programme. School groups, parabolic cookers, interns.",
 },
 {
 label: "The reserve",
 holder: "NamibRand Nature Reserve",
 share: "~202,000 ha of private reserve",
 what: "Associated land. The trust is a guest of the dunes, not the landlord of the oryx.",
 },
 ],
 },
 kaydara: {
 owner: "Association Jardins d’Afrique, Ferme-école Kaydara at Fimela",
 complexity: "simple",
 tenure: "Association",
 howHeld: "A Senegalese association holds the farm-school at Keur Samba Dia, commune of Fimela. Hectares unpublished. Salinisation has taken more than 60% of the commune’s land.",
 narrative: "UNESCO: 21 June 2006. Gora Ndiaye. Sixteen villages in the training net. Ndem, already in the atlas, is a different Senegalese village.",
 divided: [],
 },
 otepic: {
 owner: "OTEPIC, three Kitale gardens, Sabwani the largest",
 complexity: "split",
 tenure: "Association",
 howHeld: "A Kenyan self-help project. Mitume 441 m² in town, Armani about half an acre, Sabwani about 10 ha for a peace village and permaculture school.",
 narrative: "Philip Odhiambo Munyasia, 2008. Tamera partner since 2011. Twenty-two orphans at Tabasamu.",
 divided: [
 {
 label: "Sabwani",
 holder: "OTEPIC / Upendo Garden",
 share: "~10 ha (~25 acres) peace village and school",
 what: "The larger holding from 2014. Conference centre in process.",
 },
 {
 label: "Town gardens",
 holder: "OTEPIC (Mitume and Armani)",
 share: "441 m² + ~0.5 acre",
 what: "The 2008 beginning. Informal-settlement plots.",
 },
 ],
 },
 ndanifor: {
 owner: "Better World Cameroon, Ndanifor site at Bafut, emptied in the crisis",
 complexity: "simple",
 tenure: "Nonprofit",
 howHeld: "About five acres of demonstration gardens and a lodge at Bafut, run by the NGO from 2012 until the Anglophone crisis of 2016 expelled the team and looted the site.",
 narrative: "Joshua Konkankoh. Gaia Trust Excellence Award 2015. Visitors called it paradise; the war emptied it. BWC still teaches. Confirm whether the Bafut site is actually visitable.",
 divided: [],
 },
 basaisa: {
 owner: "Basaisa village / Community Development Association, Egyptian rural land",
 complexity: "split",
 tenure: "Association",
 howHeld: "An existing Sharqiya village with an association as the public face. New Basaisa (1992) is a separate Sinai holding of about 750 feddans.",
 narrative: "Salah Arafa began work in his home village in 1974. Rooftop PV, biogas, a 2017 solar station on the association roof.",
 divided: [
 {
 label: "Basaisa village, Sharqiya",
 holder: "Village households and the Community Development Association",
 share: "Existing Delta village (feddans unpublished)",
 what: "The 1974 beginning. Solar on roofs.",
 },
 {
 label: "New Basaisa, Ras Sudr",
 holder: "The later desert community",
 share: "~750 feddans (~315 ha)",
 what: "1992 offshoot in South Sinai. Associated holding, 200 km from the old village.",
 },
 ],
 },
 "boabeng-fiema": {
 owner: "Boabeng and Fiema villages, 4.4 km² sanctuary",
 complexity: "simple",
 tenure: "Customary / community",
 howHeld: "Twin villages hold forest and lanes under traditional law plus a 1975 bye-law. About 700 monkeys live in the same streets. You walk with a guide.",
 narrative: "Sacred-monkey taboo older than the sanctuary; 1975 bye-law made it a statute. Wildlife Division later framed a sanctuary. The monkey cemetery in Fiema is still used.",
 divided: [],
 },
 fambidzanai: {
 owner: "Fambidzanai Permaculture Centre (ZIP-PVO12/92)",
 complexity: "simple",
 tenure: "Nonprofit",
 howHeld: "A Zimbabwean PVO holds the Stapleford training farm.",
 narrative: "Founded 1988 by John Wilson. Africa’s first dedicated permaculture centre. Hectare count unpublished. Farmers rotate through courses; they do not take title.",
 divided: [],
 },
 guie: {
 owner: "Association Zoramb Naagtaaba, Ferme pilote de Guiè",
 complexity: "split",
 tenure: "Association",
 howHeld: "AZN is the inter-village association. The pilot farm is the school. Village bocage perimeters (wégoubri) sit with neighbouring villages.",
 narrative: "AZN 27 January 1989; farm 14 December 1989. Henri Girard. Tankouri 100 ha is the largest documented perimeter. Terre Verte is the French partner.",
 divided: [
 {
 label: "Pilot farm and CFAR",
 holder: "AZN / Ferme pilote de Guiè",
 share: "Farm-school at Guiè (hectares unpublished beyond perimeters)",
 what: "The 14 December 1989 farm. Bocage-builders train here.",
 },
 {
 label: "Village bocage perimeters",
 holder: "AZN villages (Kankamsin, Zemstaaba, Tankouri, and others)",
 share: "Documented pieces from 2 ha to Tankouri 100 ha (1998)",
 what: "Hedges, ponds, bunds on village fields.",
 },
 ],
 },
 chikukwa: {
 owner: "Chikukwa communal lands, CELUO / six villages",
 complexity: "simple",
 tenure: "Customary / community",
 howHeld: "Six villages on Chimanimani communal land. The trust/organisation is the public face; the land is communal, not freehold plots.",
 narrative: "Permaculture clubs from 1991; CELUCT 1995; now CELUO. Eli and Ulli Westermann as catalysts; Julious Piti a founder. About 15 km of hills. Hectare count unpublished.ve of lots.",
 divided: [],
 },
 "il-ngwesi": {
 owner: "Il Ngwesi Group Ranch, Il Lakipiak Maasai",
 complexity: "split",
 tenure: "Customary / community",
 howHeld: "Kenyan group-ranch tenure: undivided shares, a committee, six villages. A conserved core (Equator Initiative 8,645 ha) and a community-owned lodge (1996). You take a bandas.",
 narrative: "Group ranch 1995 conserved core; lodge 1996 with USAID/KWS. Equator Prize 2002. English sources mix 8,645 ha and 16,500 ha, acres and hectares. The ranch is large.",
 divided: [
 {
 label: "Conserved core",
 holder: "Il Ngwesi Group Ranch",
 share: "8,645 ha (Equator Initiative 2002)",
 what: "Wildlife and grazing set aside. The prize figure. Confirm current conservancy boundaries.",
 },
 {
 label: "Wider ranch / lodge",
 holder: "Group ranch; lodge as community enterprise",
 share: "Site: ranch covers 16,500 ha; lodge on a rocky outcrop",
 what: "Six pastoralist villages and the 1996 bandas. Not lots.",
 },
 ],
 },
 lynedoch: {
 owner: "Lynedoch Development Company and individual freehold owners under the LHOA",
 complexity: "split",
 tenure: "Homeowners association",
 howHeld: "A Section 21 nonprofit bought 6 ha in 1999. Houses are freehold under a Section 21 Home Owners Association the municipality required. An HOA.",
 narrative: "Eve Annecke and Mark Swilling. Old Drie Gewels Hotel. Sustainability Institute on the same campus. Plots transferred July 2004. GEN: ~30 mixed families. You may buy a house if one is for sale.",
 divided: [
 {
 label: "Campus and commons",
 holder: "Lynedoch Development Company / Sustainability Institute",
 share: "Old hotel, Institute, school precinct on the 6 ha",
 what: "The 1999 purchase. Teaching is the public door.",
 },
 {
 label: "Residential plots",
 holder: "Individual owners, all members of the LHOA",
 share: "Freehold houses under an HOA code; an affordable tranche was designed in",
 what: "A house is the membership path. Confirm which units are actually affordable.",
 },
 ],
 },
 anja: {
 owner: "Association Anja Miray, 30 ha reserve",
 complexity: "simple",
 tenure: "Association",
 howHeld: "A Malagasy village association manages 30 hectares of woodland and lake at the Three Sisters. UNDP 2001. You walk with a local guide.",
 narrative: "Association 1999; reserve 2001; Equator Prize 2012. About 300 ring-tailed lemurs. Some guides say 37 ha; UNDP says 30.",
 divided: [],
 },

 celo: {
 owner: "Celo Community, Inc., 501(c)(4) land trust",
 complexity: "split",
 tenure: "Community land trust",
 howHeld: "The 501(c)(4) holds ~1,200 acres. Members are assigned land for a modest one-time refundable fee, like a lifetime lease, and may own the house. Arthur Morgan School, Camp Celo, a health centre, and a neighborhood farm lease land. Nobody holds a private deed to the land.",
 narrative: "Arthur Morgan’s 1937 experiment, tax-exempt 1940. Helene flooded the Celo Inn in 2024; Celo Commons is a separate rebuild.",
 divided: [
 {
 label: "Community land",
 holder: "Celo Community, Inc.",
 share: "~1,100–1,200 acres in the South Toe, under the Black Mountains",
 what: "Assigned, never sold. Consensus membership. EIN 56-6049967.",
 },
 {
 label: "Member houses",
 holder: "Households on assigned land",
 share: "~53 family units; houses may be privately owned",
 what: "The building can be yours; the land stays with CCI. A refundable fee.",
 },
 {
 label: "Institutional leases",
 holder: "Arthur Morgan School, Camp Celo, health centre, neighborhood farm",
 share: "Low-cost leases on community land",
 what: "Long-standing endeavours. Lessees, not landlords.",
 },
 ],
 },
 "sunrise-ranch": {
 owner: "Emissaries of Divine Light, Sunrise Ranch, 123 acres",
 complexity: "simple",
 tenure: "Religious society",
 howHeld: "The Emissary organization holds the Eden Valley farm. Resident staff live and work here. You come for a programme.",
 narrative: "Bought 1945 for $6,000 as a barren dry-land farm. Pavilion and dome by 1986. A July 2024 fire evacuation emptied the valley for days.",
 divided: [],
 },
 "ananda-village": {
 owner: "Ananda Church of Self-Realization and cooperative housing inventory",
 complexity: "split",
 tenure: "Hybrid",
 howHeld: "Non-residential land in the Planned Development sits with the church. Housing is community land plus individual investment in the inventory, group houses and stand-alone homes. Independent household finances.",
 narrative: "Kriyananda’s 1968–69 colony. About 700 acres. Speculation in the lot market is the thing they designed out. Some members live off-site when housing is tight.",
 divided: [
 {
 label: "Church and commons",
 holder: "Ananda Church of Self-Realization",
 share: "Non-residential land, retreats, Crystal Hermitage, school, market",
 what: "The public and spiritual core. Expanding Light is the visitor door.",
 },
 {
 label: "Housing inventory",
 holder: "Cooperative / community housing with individual investment",
 share: "Group housing and stand-alone homes on community land",
 what: "You invest in a dwelling, not in a Sierra lot. Demand sometimes exceeds supply.",
 },
 ],
 },
 sandhill: {
 owner: "Sandhill Farm nonprofit, 168 acres in common",
 complexity: "simple",
 tenure: "Nonprofit",
 howHeld: "A Missouri nonprofit land project. Members are the board. Private dwellings since 2019; land, houses, and infrastructure still caretaken collectively. Monthly contributions for taxes and upkeep.",
 narrative: "FEC income-sharing 1974–2019, sorghum the famous product, Dancing Rabbit next door. The common purse ended; the 168 acres did not become Scotland County parcels. Confirm the current household, it is small and recruiting.",
 divided: [],
 },
 linnaea: {
 owner: "Turtle Island Earth Stewards / Linnaea Farm Society, 314 acres, covenanted",
 complexity: "split",
 tenure: "Charitable trust",
 howHeld: "No-sale land trust from 1978 (Cabot → Trust for Public Land → Turtle Island Earth Stewards). The Land Conservancy of BC and Quadra Island Conservancy hold a 1999 covenant on 127 ha. Stewards farm; they do not take lots.",
 narrative: "Michael Manson’s 1887 pre-emption is the settler origin. Hansen Lakeview Ranch became Linnaea, named for the twinflower. Klahoose, Tla’amin, and Homalco territory.",
 divided: [
 {
 label: "Farm and forest",
 holder: "Turtle Island Earth Stewards / Linnaea Farm Society",
 share: "314 acres / 127 ha on Gunflint Lake",
 what: "No-sale trust. CSA, internships, PDC. You steward.",
 },
 {
 label: "Conservation covenant",
 holder: "The Land Conservancy of BC with Quadra Island Conservancy",
 share: "127 ha covenanted 1999",
 what: "A use restriction, not the operating farmer.",
 },
 ],
 },
 "lost-valley": {
 owner: "Lost Valley Education Center 501(c)(3), 87 acres",
 complexity: "simple",
 tenure: "Nonprofit",
 howHeld: "One Oregon charity holds the Dexter oak savanna. Meadowsong Ecovillage is the residential programme on the same title. Shiloh built “The Land” here and sold in the 1980s.",
 narrative: "Founded 1989. Courses and affordable housing, not Lane County lots. Lookout Point and Dexter reservoirs are the neighboring water, not the title.",
 divided: [],
 },
 windsong: {
 owner: "34 strata owners plus a common house, 5.8 acres",
 complexity: "split",
 tenure: "Strata / freehold",
 howHeld: "Individually owned townhomes in a BC strata corporation. About 4 acres kept as Yorkson Creek forest and wetland. HOA: you buy a unit if one is for sale.",
 narrative: "Completed 19 July 1996, Canada’s first purpose-built cohousing. Kwantlen and other Coast Salish territory; the 1996 date is the settler cohousing date.",
 divided: [
 {
 label: "Townhomes",
 holder: "Individual owners, all members of the strata",
 share: "34 units, 740–1,840 sq ft",
 what: "A house is the membership path. Listed on windsong.bc.ca when one turns.",
 },
 {
 label: "Commons and creek",
 holder: "Strata corporation",
 share: "5,000 sq ft common house; ~4 acres of setback, forest, wetland",
 what: "The salmon creek is why they fought Ottawa for a year.",
 },
 ],
 },
 "camphill-ontario": {
 owner: "Camphill Communities Ontario, charity on 290 acres plus Barrie",
 complexity: "split",
 tenure: "Nonprofit",
 howHeld: "A Canadian registered charity holds the Nottawasaga farm and runs Sophia Creek in Barrie. Villagers and coworkers live in houses the charity owns. No private lots.",
 narrative: "Opened 1986 from Camphill Special School coworkers. Distinct from Camphill Village Copake in this atlas. Social care.",
 divided: [
 {
 label: "Nottawasaga farm",
 holder: "Camphill Communities Ontario",
 share: "290 acres of river, farmland, and forest at Angus",
 what: "Biodynamic farm, workshops, extended-family houses. The rural village.",
 },
 {
 label: "Sophia Creek",
 holder: "Camphill Communities Ontario",
 share: "Urban neighbourhood in Barrie",
 what: "A later city site as Simcoe grew. Same charity, different street.",
 },
 ],
 },
 yarrow: {
 owner: "YES Cooperative umbrella, Groundswell strata, farm co-op, deli co-op",
 complexity: "split",
 tenure: "Hybrid",
 howHeld: "YES Cooperative bought 25 acres in 2002. Groundswell is a 33-home strata. The farm leases ~20 organic acres. A deli co-op holds the road-front store. Chilliwack’s 2006 Ecovillage zoning is the municipal layer.",
 narrative: "Canada’s first ecovillage zone. You may buy a Groundswell strata unit; you do not buy the farm. Stó:lō territory.",
 divided: [
 {
 label: "Umbrella land",
 holder: "Yarrow Ecovillage Society Cooperative",
 share: "25-acre former dairy, 2002 purchase",
 what: "The co-op that got the zoning.",
 },
 {
 label: "Groundswell homes",
 holder: "33 strata owners",
 share: "Cohousing cluster and common house",
 what: "A unit is the residential door. Durrett/McCamant 2010–13.",
 },
 {
 label: "Organic farm",
 holder: "Farm cooperative / lessees",
 share: "~20 acres certified organic plus Stewart Creek food forest",
 what: "CSA and a succession of farm names. Not lots.",
 },
 ],
 },
 ecoreality: {
 owner: "EcoReality Co-op, 43 acres in the ALR",
 complexity: "simple",
 tenure: "Cooperative",
 howHeld: "A BC not-for-profit agricultural co-op (s. 149(1)(e)) holds 43 acres on Fulford-Ganges Road. Two houses, Zone-1 cluster, two stream licences. The adjoining 61 acres are community farmland, not this title.",
 narrative: "Commenced 1 October 2005. Member-funders, not strata lots. Confirm who is actually on the land before you treat a 2005 wiki as a 2026 household. Cowichan, Tsawout, and other Coast Salish territory.",
 divided: [],
 },
  ...asiaLand,
  ...russiaLand,
  ...usaMoreLand,
  ...polandLand,
  ...volunteerBatchLand,
  ...formerLand,
  ...formerMoreLand,
  ...formerClosedLand,
  ...livingMoreLand,
  ...livingBatch2Land,
  ...livingBatch3Land,
  ...livingBatch4Land,
  ...livingBatch5Land,
  ...livingBatch6Land,
  ...livingBatch7Land,
  ...livingBatch8Land,
  ...livingBatch9Land,
  ...livingBatch10Land,
  ...livingBatch11Land,
  ...livingBatch12Land,
  ...livingBatch13Land,
  ...livingBatch14Land,
  ...livingBatch15Land,
  ...livingBatch16Land,
  ...livingBatch17Land,
  ...livingBatch18Land,
  ...livingBatch19Land,
  ...livingBatch20Land,
  ...livingBatch21Land,
  ...livingBatch22Land,
  ...livingBatch23Land,
  ...livingBatch24Land,
  ...livingBatch25Land,
  ...livingBatch26Land,
  ...livingBatch27Land,
  ...livingBatch28Land,
  ...livingBatch29Land,
  ...livingBatch30Land,
  ...livingBatch31Land,
  ...livingBatch32Land,
  ...livingBatch33Land,
  ...livingGlampingLand,
  ...sustainableEcovillageLand,
  ...maitreyaEcovillageLand,
};

export const landTenures = Array.from(new Set(Object.values(landBySlug).map((row) => row.tenure)),).sort((a, b) => a.localeCompare(b));

export function landFor(slug: string): LandOwnership {
 const row = landBySlug[slug];
 if (!row) {
 throw new Error(`Missing land-ownership data for ${slug}`);
 }
 return row;
}

