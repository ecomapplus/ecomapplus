import type { LegalEntity } from "./legal-entities";
import type { LandOwnership } from "./land-ownership";
import type { CommunityFunding } from "./funding";
import type { VisitJoin } from "./visit-join";
import type { DailyLife } from "./daily-life";
import type { InformalAgreement } from "./informal-agreements";
import type { Accommodations } from "./accommodations";
import type { Governance } from "./governance";
import type { VillageLeaders } from "./leaders";

export const formerClosedLegalEntities: Record<string, LegalEntity[]> = {  "pleasant-hill-shaker": [
    { name: "United Society of Believers at Pleasant Hill", kind: "Religious society", role: "Kentucky Shaker covenant, 1805–1910.", status: "historical", layer: "covenant", year: "1805–1910" },
    { name: "Shaker Village of Pleasant Hill", kind: "501(c)(3) educational nonprofit", role: "Holds the landmark campus, inn, and farm programs from 1961.", status: "current", layer: "education", year: "1961" },
  ],
  "amana-colonies": [
    { name: "Community of True Inspiration (communal Amana)", kind: "Religious society", role: "Communal purse and kitchens, 1855–1932.", status: "historical", layer: "covenant", year: "1855–1932" },
    { name: "Amana Church Society", kind: "Religious society", role: "Kept worship after the Great Change.", status: "current", layer: "covenant", year: "1932" },
    { name: "Amana Society, Inc.", kind: "Trading company", role: "Profit-sharing corporation for land and enterprises after 1 June 1932. Still holds about 26,000 acres.", status: "current", layer: "enterprise", year: "1932" },
  ],  "new-lanark": [
    { name: "Dale / Owen mill partnership", kind: "Trading company", role: "Cotton mills and the reform village, 1786–1825 under Dale then Owen.", status: "historical", layer: "enterprise", year: "1786–1825" },
    { name: "New Lanark Trust", kind: "Charitable trust", role: "Restores and runs the World Heritage village and visitor centre.", status: "current", layer: "education" },
  ],
  "familistere-guise": [
    { name: "Association coopérative du capital et du travail", kind: "Producer cooperative", role: "Godin’s 1880 endowment; ran foundry and palace until 1968.", status: "historical", layer: "membership", year: "1880–1968" },
    { name: "Familistère de Guise (museum)", kind: "Public museum", role: "Interprets the social palace. Apartments also remain as housing.", status: "current", layer: "education" },
  ],  zoar: [
    { name: "Society of Separatists of Zoar", kind: "Religious society", role: "Communal German pietist society, 1817–1898.", status: "historical", layer: "covenant", year: "1817–1898" },
    { name: "Zoar Village / Ohio History Connection", kind: "State historic site", role: "Interprets the remaining Separatist core.", status: "current", layer: "education" },
  ],};

export const formerClosedLand: Record<string, LandOwnership> = {  "pleasant-hill-shaker": {
    owner: "Shaker Village of Pleasant Hill, Harrodsburg, Kentucky",
    complexity: "simple",
    tenure: "Museum nonprofit",
    howHeld: "A 501(c)(3) holds about 3,000 acres and 34 original Shaker buildings. The United Society as a living covenant here ended in 1910.",
    narrative: "Mercer County limestone village. Tour and sleep in the inn. Sabbathday Lake is the last living society.",
    divided: [],
  },
  "amana-colonies": {
    owner: "Amana Society, Inc., plus private village lots after 1932",
    complexity: "split",
    tenure: "Corporation farmland + private village houses",
    howHeld: "Until 1932 the Inspiration held kitchens and shops in common. The Great Change created a corporation for some 26,000 acres and private homes in the seven villages.",
    narrative: "Iowa County. Seven villages, one old purse, then stock.",
    divided: [
      { label: "Society land", holder: "Amana Society, Inc.", share: "~26,000 acres", what: "Farm, pasture, timber after 1932." },
      { label: "Village houses", holder: "Private owners", share: "Lots after the Great Change", what: "Family tables instead of colony kitchens." },
    ],
  },  "new-lanark": {
    owner: "New Lanark Trust, with residents in restored mill housing",
    complexity: "split",
    tenure: "Trust / living heritage village",
    howHeld: "Dale and Owen ran mills and housing as a company village. The Trust now stewards the World Heritage site. People live in restored houses on ordinary tenancies, not Owen’s rules.",
    narrative: "Clyde gorge. The school and the river outlasted the reformer.",
    divided: [
      { label: "Mills and interpretation", holder: "New Lanark Trust", share: "Core historic fabric", what: "Visitor centre, hotel, museum." },
      { label: "Village housing", holder: "Residents / Trust lets", share: "Mill rows", what: "A living village, Owen’s household long gone." },
    ],
  },
  "familistere-guise": {
    owner: "Historical: Godin association; now museum plus remaining apartments",
    complexity: "split",
    tenure: "Museum / social housing",
    howHeld: "Godin built the palace for foundry families. The 1880 association held housing and works until 1968. Restoration split museum rooms from lived apartments.",
    narrative: "Guise, on the Oise. A Fourier wing you can still sleep in if you already have a lease.",
    divided: [
      { label: "Museum wings", holder: "Familistère museum", share: "Interpreted courts and rooms", what: "Tickets." },
      { label: "Apartments", holder: "Later housing", share: "Restored flats", what: "Ordinary tenancy, Godin’s association gone." },
    ],
  },  zoar: {
    owner: "Historical: Society of Separatists; now a historic village and private lots",
    complexity: "split",
    tenure: "Historic town",
    howHeld: "Communal acres until 1898 partition. Ohio History Connection interprets the core. Families took lots.",
    narrative: "Tuscarawas River. Canal money, then a division.",
    divided: [
      { label: "Separatist commons", holder: "Society of Separatists", share: "1817–1898", what: "Divided among members." },
      { label: "Historic village", holder: "State site and private houses", share: "after 1898", what: "A town." },
    ],
  },};

function funds(
  overview: string,
  grantsHeadline: string,
  privateHeadline: string,
  grants: CommunityFunding["grants"],
  priv: CommunityFunding["private"],
): CommunityFunding {
  return { overview, grantsHeadline, privateHeadline, grants, private: priv };
}

export const formerClosedFunding: Record<string, CommunityFunding> = {  "pleasant-hill-shaker": funds(
    "A closed Shaker society whose farm is now paid as a museum, inn, and table, not as a covenanted household.",
    "Preservation support to the nonprofit",
    "Admission, inn, Trustees’ Table",
    [{ source: "Historic preservation and museum grants", amount: "Ongoing campus care (not itemized here)", certainty: "estimated", kind: "grant", note: "Pays limestone buildings and 3,000 acres." }],
    [{ source: "Tours, the Inn, the Trustees’ Table, shop", amount: "Earned, seasonal", certainty: "documented", kind: "business", note: "" }],
  ),
  "amana-colonies": funds(
    "Communal mills and kitchens until 1932, then a corporation, private shops, and visitors in seven villages.",
    "None that kept the common purse",
    "Society farms, shops, visitors",
    [{ source: "No grant reversed the Great Change", amount: "A member vote in a farm depression", year: "1932", certainty: "documented", kind: "other", note: "They chose stock rather than watching children leave." }],
    [{ source: "Amana Society, Inc., and village businesses", amount: "Ongoing", certainty: "documented", kind: "business", note: "amanacolonies.com." }],
  ),  "new-lanark": funds(
    "Cotton paid Owen’s school. Heritage tourism and a mill hotel pay the Trust now.",
    "Heritage and World Heritage support",
    "Visitor centre, mill hotel, rents",
    [{ source: "Heritage restoration of the gorge village", amount: "Multi-decade Trust campaign", certainty: "estimated", kind: "grant", note: "UNESCO listing 2001." }],
    [{ source: "newlanark.org tickets, hotel, shop", amount: "Earned", certainty: "documented", kind: "business", note: "A living heritage town." }],
  ),
  "familistere-guise": funds(
    "A foundry paid for a social palace. After 1968, museum funds and rents.",
    "French heritage restoration",
    "Museum tickets and apartment rents",
    [{ source: "Public restoration of the Familistère", amount: "Ongoing museum and building care", certainty: "estimated", kind: "grant", note: "familistere.com." }],
    [{ source: "Godin’s stove works (historical)", amount: "The original till", year: "1859–1968", certainty: "documented", kind: "business", note: "Association of capital and labor." }],
  ),  zoar: funds(
    "Canal contracts and communal farms until an 1898 partition. A state historic site now.",
    "Ohio History Connection care",
    "Canal-era trades, then tourism",
    [{ source: "State historic site support", amount: "Ongoing interpretation", certainty: "estimated", kind: "grant", note: "ohiohistory.org." }],
    [{ source: "Ohio & Erie Canal contract (historical)", amount: "A Separatist till", certainty: "documented", kind: "contract", note: "Bimeler years." }],
  ),};

export const formerClosedVisitJoin: Record<string, VisitJoin> = {  "pleasant-hill-shaker": { visit: 5, join: 1, visitProcess: "Buy a ticket. Thirty-four original buildings, farm walks, the Trustees’ Table, and the Inn. One of the easiest closed villages in this atlas to stand in.", joinProcess: "The United Society here ended in 1910. Sabbathday Lake is the living Shaker covenant. Pleasant Hill hires museum and farm staff." },
  "amana-colonies": { visit: 5, join: 1, visitProcess: "Seven villages are a National Historic Landmark with shops, restaurants, and B&Bs. amanacolonies.com is the visitor door. You walk German brick streets that kept going after 1932.", joinProcess: "The communal Inspiration ended at the Great Change. You can buy a house in the villages on the open market, or a share of nostalgia. You cannot join the 1855 kitchens." },  "new-lanark": { visit: 5, join: 1, visitProcess: "newlanark.org: mill tours, the Annie McLeod story, a hotel in the mill, a gorge walk. UNESCO site. Easy to visit.", joinProcess: "Owen’s reform household ended when he left in 1825. People live in restored housing as ordinary residents and Trust lets, not as Owenites." },
  "familistere-guise": { visit: 5, join: 1, visitProcess: "familistere.com: museum in the social palace, courtyards under glass. Guise is a town you can reach. Book the museum.", joinProcess: "Godin’s association dissolved in 1968. Remaining apartments are later housing." },  zoar: { visit: 5, join: 1, visitProcess: "Zoar Village is an Ohio History Connection site with a living town around it. ohiohistory.org has hours. Garden walks, Number One House, brick streets.", joinProcess: "The Society of Separatists divided property in 1898. You can live in Zoar as in any Ohio village. You cannot join Bimeler’s society." },};

export const formerClosedDailyLife: Record<string, DailyLife> = {  "pleasant-hill-shaker": { typical: [{ title: "Family dwellings", detail: "East and West families in limestone, celibate, until 1910." }, { title: "Workshops and seed", detail: "Kentucky Shaker trades." }, { title: "Meeting", detail: "A turnpike village at worship." }], unique: { title: "The Inn as afterlife", detail: "The living society ended in 1910; from 1961 a 501(c)(3) restored about 3,000 acres and 34 original buildings as a National Historic Landmark." } },
  "amana-colonies": { typical: [{ title: "Colony kitchens", detail: "Assigned meals in seven villages, until 1932." }, { title: "Mills and woolens", detail: "The communal till." }, { title: "Inspirationist worship", detail: "A church that assigned the week." }], unique: { title: "The Great Change", detail: "A vote for stock and family tables rather than watching the children go." } },  "new-lanark": { typical: [{ title: "Mill shifts", detail: "Cotton on the Clyde." }, { title: "Institute and infant school", detail: "Owen’s character project, 1816–17." }, { title: "Village store", detail: "Goods without the old truck system." }], unique: { title: "Neighbourhood spokespeople", detail: "Twelve divisions, elected voices, a council with Owen." } },
  "familistere-guise": { typical: [{ title: "Foundry shifts", detail: "Godin’s stoves paid the palace." }, { title: "Courtyard apartments", detail: "Families under glass roofs." }, { title: "Nursery, baths, theatre", detail: "Fourier’s amenities in brick." }], unique: { title: "A palace next to the works", detail: "He did not send workers to a field phalanstère. He housed them beside the factory." } },  zoar: { typical: [{ title: "Separatist gardens", detail: "A Number One House and village beds." }, { title: "Canal contract", detail: "The till that paid." }, { title: "German compact", detail: "Bimeler’s word, then a long thinning." }], unique: { title: "An 1898 division", detail: "They ended with a partition, not a fire." } },};

export const formerClosedInformal: Record<string, InformalAgreement[]> = {  "pleasant-hill-shaker": [
    { kind: "guest-stay", why: "The Inn and the Trustees’ Table sit in dwellings that were once covenanted. Tour versus overnight is the compact now." },
    { kind: "quiet-practice", why: "The living Shaker covenant is at Sabbathday Lake. Pleasant Hill is interpretation." },
  ],
  "amana-colonies": [
    { kind: "land-care", why: "Twenty-six thousand acres still in a corporation. Village lots are private. Two layers, one Iowa." },
    { kind: "quiet-practice", why: "The church kept worship. The kitchens did not. Visitors eat in restaurants that used to be colony rooms." },
  ],  "new-lanark": [
    { kind: "guest-stay", why: "A mill hotel and a living village in the same gorge. Residents still have to eat somewhere tour groups are not." },
    { kind: "course-host", why: "The Institute is a visitor story. Owen’s school is an exhibit." },
  ],
  "familistere-guise": [
    { kind: "guest-stay", why: "Museum courts and lived apartments share brick. A ticket is not a key." },
  ],  zoar: [
    { kind: "guest-stay", why: "A state historic site inside a living Ohio village. Museum hours and private porches." },
  ],};

const closedStay = (visitor: string, resident: string, rooms = false, inn = false): Accommodations => ({
  visitor: {
    overview: visitor,
    camping: { available: false, types: [], detail: "None listed as a public camp of the old household." },
    rooms: { available: rooms || inn, types: inn ? ["inn / historic lodging"] : [], detail: inn ? "Historic lodging on the museum campus." : rooms ? "A hotel or guesthouse on the later site." : "No public rooms of the old colony." },
    other: { available: false, types: [], detail: "None listed." },
  },
  resident: {
    overview: resident,
    camping: { available: false, types: [], detail: "The residential commune ended." },
    rooms: { available: false, types: [], detail: "No covenanted or cooperative membership remains." },
    other: { available: false, types: [], detail: "None listed as a usual way people live here now." },
  },
});

export const formerClosedAccommodations: Record<string, Accommodations> = {  "pleasant-hill-shaker": closedStay("The Inn and campus lodging are the visitor beds.", "No covenanted Shakers remain. Museum and farm staff go home or hold jobs, not the old family dwellings as members.", false, true),
  "amana-colonies": closedStay("B&Bs and inns in the seven villages. A visitor economy after 1932.", "People live in private houses. The colony kitchens are closed.", true, false),  "new-lanark": closedStay("A hotel in the mill and Trust stays. newlanark.org.", "Residents occupy restored mill housing as ordinary tenants, not as Owen’s household.", true, true),
  "familistere-guise": closedStay("Museum visit. Apartments are lived in by later tenants, not offered as colony rooms.", "Godin’s association ended in 1968. Some wings remain housing."),  zoar: closedStay("Nearby lodgings and a historic village day-visit. Check Ohio History hours.", "Separatist members divided the lots in 1898. People live in Zoar as a town.", true, false),};

export const formerClosedGovernance: Record<string, Governance> = {  "pleasant-hill-shaker": { model: "spiritual", modelLabel: "Shaker ministry (historical)", unique: false, summary: "A United Society village until 1910. A museum board now. Historical as a covenant.", whoDecides: "Shaker ministry while the families lasted. A nonprofit board for the campus.", bodies: [{ name: "United Society at Pleasant Hill", role: "1805–1910." }, { name: "Shaker Village of Pleasant Hill", role: "1961–present museum." }], howItRuns: "Buy a ticket. The covenant is at Sabbathday Lake." },
  "amana-colonies": { model: "spiritual", modelLabel: "Inspirationist elders, then corporation", unique: false, summary: "Elders assigned the communal week until 1932. Then a church and Amana Society, Inc. The kitchens are over.", whoDecides: "Elders until the Great Change, then shareholders and a church.", bodies: [{ name: "Community of True Inspiration", role: "Communal years." }, { name: "Amana Society, Inc.", role: "Land and enterprise after 1932." }], howItRuns: "Visit the villages. The 1855 purse does not sit." },  "new-lanark": { model: "board", modelLabel: "Company village, then a trust", unique: false, summary: "Owen and neighbourhood spokespeople, then mill owners, then New Lanark Trust. The reform household is historical.", whoDecides: "The Trust for the site; residents for their lets.", bodies: [{ name: "Robert Owen", role: "1800–1825 reform village." }, { name: "New Lanark Trust", role: "World Heritage steward." }], howItRuns: "Book the mill. Owen’s council does not meet." },
  "familistere-guise": { model: "cooperative", modelLabel: "Association of capital and labor", unique: false, summary: "Godin, then his 1880 association, dissolved 1968. Museum and housing offices now.", whoDecides: "The association until 1968. A museum now.", bodies: [{ name: "J.-B. A. Godin", role: "Founder, 1859–1888." }, { name: "Association coopérative", role: "1880–1968." }], howItRuns: "Tour the palace. The cooperative household is over." },  zoar: { model: "spiritual", modelLabel: "Separatist society", unique: false, summary: "Bimeler and a German compact until 1898 partition. A historic town now.", whoDecides: "The society, then members dividing lots.", bodies: [{ name: "Joseph Bimeler", role: "Founder, d. 1853." }, { name: "Society of Separatists", role: "1817–1898." }], howItRuns: "Tour the site. The society does not sit." },};

export const formerClosedLeaders: Record<string, VillageLeaders> = {
  "pleasant-hill-shaker": { people: [], office: { url: "https://shakervillageky.org/", address: "3501 Lexington Road, Harrodsburg, Kentucky" } },
  "amana-colonies": { people: [], office: { url: "https://amanacolonies.com/" } },
  "new-lanark": { people: [{ name: "David Dale", role: "Founded the mills, 1785–86 (historical)" }, { name: "Robert Owen", role: "Reform manager, 1800–1825 (historical)" }], office: { url: "https://www.newlanark.org/" } },
  "familistere-guise": { people: [{ name: "Jean-Baptiste André Godin", role: "Founder (historical)" }], office: { url: "https://www.familistere.com/" } },
  zoar: { people: [{ name: "Joseph Bimeler", role: "Separatist leader, d. 1853 (historical)" }], office: { url: "https://www.ohiohistory.org/visit/browse-historical-sites/zoar-village/" } },
};
