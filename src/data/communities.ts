import { legalFormsFor, allLegalForms, sharedLegalForms } from "./legal-entities";
import {
 browseGroupForForm,
 formBrowseGroupOrder,
 guideForForm,
 type FormBrowseGroup,
} from "./legal-form-guides";
import { visitJoinFor } from "./visit-join";
import { understoodFor } from "./understood";
import { hasVolunteerProgram } from "./volunteer-programs";
import { centralAmericaCommunities } from "./central-america";
import { northAmericaCommunities } from "./north-america";
import { europeCommunities } from "./europe";
import { southAmericaCommunities } from "./south-america";
import { newCountryCommunities } from "./new-countries";
import { mexicoCommunities } from "./mexico";
import { africaCommunities } from "./africa";
import { asiaCommunities } from "./asia";
import { chinaCommunities } from "./china";
import { russiaCommunities } from "./russia";
import { usaCanadaCommunities } from "./usa-canada";
import { usaMoreCommunities } from "./usa-more";
import { polandCommunities } from "./poland";
import { volunteerBatchCommunities } from "./volunteer-batch";
import { formerCommunities } from "./former";
import { formerMoreCommunities } from "./former-more";
import { formerClosedCommunities } from "./former-closed";
import { livingMoreCommunities } from "./living-more";
import { livingBatch2Communities } from "./living-batch2";
import { livingBatch3Communities } from "./living-batch3";
import { livingBatch4Communities } from "./living-batch4";
import { livingBatch5Communities } from "./living-batch5";
import { livingBatch6Communities } from "./living-batch6";
import { livingBatch7Communities } from "./living-batch7";
import { livingBatch8Communities } from "./living-batch8";
import { livingBatch9Communities } from "./living-batch9";
import { livingBatch10Communities } from "./living-batch10";
import { livingBatch11Communities } from "./living-batch11";
import { livingBatch12Communities } from "./living-batch12";
import { livingBatch13Communities } from "./living-batch13";
import { livingBatch14Communities } from "./living-batch14";
import { livingBatch15Communities } from "./living-batch15";
import { livingBatch16Communities } from "./living-batch16";
import { livingBatch17Communities } from "./living-batch17";
import { livingBatch18Communities } from "./living-batch18";
import { livingBatch19Communities } from "./living-batch19";
import { livingBatch20Communities } from "./living-batch20";
import { livingBatch21Communities } from "./living-batch21";
import { livingBatch22Communities } from "./living-batch22";
import { livingBatch23Communities } from "./living-batch23";
import { livingBatch24Communities } from "./living-batch24";
import { livingBatch25Communities } from "./living-batch25";
import { livingBatch26Communities } from "./living-batch26";
import { livingBatch27Communities } from "./living-batch27";
import { livingBatch28Communities } from "./living-batch28";
import { livingBatch29Communities } from "./living-batch29";
import { livingBatch30Communities } from "./living-batch30";
import { livingBatch31Communities } from "./living-batch31";
import { livingBatch32Communities } from "./living-batch32";
import { livingBatch33Communities } from "./living-batch33";
import { livingGlampingCommunities } from "./living-glamping";
import { sustainableEcovillageCommunities } from "./sustainable-ecovillage";
import { maitreyaEcovillageCommunities } from "./maitreya-ecovillage";
import { cardPhotos } from "./card-photos";
import { isGlampingListing } from "./glamping";

export type Community = {
 slug: string;
 name: string;
 location: string;
 region: string;
 country: string;
 foundedYear: number;
 foundedLabel: string;
 members: number;
 membersLabel: string;
 acres: number | null;
 acresLabel: string;
 legalStructure: string;
 legalCategory: string;
 stillActive: boolean;
 images: string[];
 summary: string;
 businessModel: string;
 foundingProcess: string;
 governance: string;
 website: string;
 timeline: { year: string; event: string }[];
};

export const communities: Community[] = [
 {
 slug: "sabbathday-lake",
 name: "Sabbathday Lake Shaker Village",
 location: "New Gloucester, Maine",
 region: "Maine, USA",
 country: "United States",
 foundedYear: 1783,
 foundedLabel: "1782–83 (organized 1794)",
 members: 3,
 membersLabel: "3 (as of 2025)",
 acres: 1800,
 acresLabel: "~1,800 acres",
 legalStructure: "Religious society / nonprofit. National Historic Landmark District. Land and buildings held by the Shaker society.",
 legalCategory: "Religious society",
 stillActive: true,
 images: [
 "/communities/sabbathday-lake-land.jpg",
    "/communities/sabbathday-lake-people.jpg",
 "/communities/sabbathday-4.jpg",
 "/communities/sabbathday-1.jpg",
 "/communities/sabbathday-5.jpg",
 "/communities/sabbathday-2.jpg",
 "/communities/sabbathday-6.jpg",
 "/communities/sabbathday-3.jpg"
 ],
 summary: "The last active Shaker community in the world sits in New Gloucester, Maine. Organized in 1794 after a 1782–83 founding, it still holds about 1,800 acres the Meetinghouse has watched since 1794. As of 2025 three covenanted members remain — Brother Arnold Hadd, Sister June Carpenter, and Sister April Baxter — keeping a living religious village, a museum, and a working farm. They still tend a culinary and medicinal herb garden and still-room, packing tins for the museum shop, a trade the Shakers have run here since the 19th century.",
 businessModel: "Museum and library (public since 1926), herb garden sales, crafts (baskets, woodenware), tree farm, agriculture, public tours, and Sunday worship. Historic trades still practiced on site.",
 foundingProcess: "Shaker missionaries settled Thompson’s Pond Plantation in 1782–83. Formal organization followed construction of the Meetinghouse in 1794. By 1850 the village had about 26 large buildings on nearly 1,900 acres. Membership declined through the 20th century; the community still accepts people who take the Shaker covenant.",
 governance: "Traditional Shaker structure with Elders and Eldresses. The society holds the land. Public Meeting continues on Sundays in the historic Meetinghouse.",
 website: "https://www.maineshakers.com/",
 timeline: [
 {
 year: "1782–83",
 event: "Missionaries establish the settlement at Thompson’s Pond Plantation."
 },
 {
 year: "1794",
 event: "Meetinghouse built; community formally organized."
 },
 {
 year: "1850",
 event: "Peak physical plant: ~26 large buildings on ~1,900 acres."
 },
 {
 year: "1926",
 event: "Museum and library open to the public."
 },
 {
 year: "2025",
 event: "Three members remain; Sister April Baxter joins, keeping the community active."
 }
 ]
 },
 {
 slug: "solheimar",
 name: "Sólheimar",
 location: "Grímsnes- og Grafningshreppur, South Iceland",
 region: "South Iceland",
 country: "Iceland",
 foundedYear: 1930,
 foundedLabel: "5 July 1930",
 members: 100,
 membersLabel: "~100 residents (~40 with disabilities)",
 acres: 618,
 acresLabel: "~250 hectares (~618 acres)",
 legalStructure: "Nonprofit social-enterprise village (self-governing institution). The Church of Iceland’s Childcare Committee bought the land in 1930 and leased it to founder Sesselja Sigmundsdóttir; today Sólheimar operates as an independent nonprofit community and workplace rather than a residential co-op or land trust.",
 legalCategory: "Nonprofit / social enterprise",
 stillActive: true,
 images: [
 "/communities/solheimar-land.jpg",
    "/communities/solheimar-people.jpg",
 "/communities/solheimar-3.jpg",
 "/communities/solheimar-1.jpg",
 "/communities/solheimar-4.jpg",
 "/communities/solheimar-2.jpg",
 "/communities/solheimar-wiki-1.jpg"
 ],
 summary: "Iceland’s oldest ecovillage sits in a geothermal valley, where people with and without disabilities share greenhouses, craft shops, and a guesthouse. The heat still comes out of the ground, as it did when Sesselja pitched tents for the first foster children in 1930.",
 businessModel: "Self-supporting mix of organic greenhouse and horticulture, forestry, egg production, craft workshops, a café, and a guesthouse. Responsible tourism and volunteer stays help fund the nonprofit. Geothermal heat and solar energy cover much of the energy load.",
 foundingProcess: "Sesselja Sigmundsdóttir, inspired by Steiner and the idea that children with disabilities should live in nature, leased Hverakot after the Church of Iceland bought it on 31 March 1930 for ISK 8,000. The first five foster children arrived on 5 July 1930 and lived in tents. Parliament later funded the first purpose-built house. After World War II almost all of the children at Sólheimar had disabilities. The village grew into a mixed community of workers, residents, and visitors; Sesseljuhús, a turf-roofed environmental centre, opened in 2002.",
 governance: "A nonprofit board and village management run Sólheimar as a workplace and a home. Staff, residents with disabilities, and volunteers share the greenhouses, craft shops, and guesthouse. The institution holds the land; nobody here buys a house lot.",
 website: "https://www.solheimar.is",
 timeline: [
 {
 year: "1930",
 event: "Land purchased; Sesselja founds Sólheimar as a foster home on 5 July."
 },
 {
 year: "1932–33",
 event: "First building (Selhamar) constructed with parliamentary support."
 },
 {
 year: "Post-WWII",
 event: "Village becomes a mixed community of people with and without disabilities."
 },
 {
 year: "2002",
 event: "Sesseljuhús environmental centre completed."
 },
 {
 year: "Present",
 event: "About 100 residents on ~250 hectares; organic farm, crafts, and guesthouse."
 }
 ]
 },
 {
 slug: "riverside",
 name: "Riverside Community",
 location: "Lower Moutere, near Motueka",
 region: "Tasman, New Zealand",
 country: "New Zealand",
 foundedYear: 1941,
 foundedLabel: "1941 (trust 1953)",
 members: 25,
 membersLabel: "~25 members + children (up to ~80 on the land at busy times)",
 acres: 514,
 acresLabel: "200–208 hectares (~494–514 acres)",
 legalStructure: "Religious Charitable Riverside Community Trust (formed 1953). The trust owns all land, houses, and major assets, there is no private title to houses or cars. Members pay rent to the trust and receive a weekly allowance from the community fund. Trustees administer the deed; weekly meetings run by consensus with no leader. The community has shifted from an explicitly Christian pacifist founding to a secular, pluralist membership living under the same trust.",
 legalCategory: "Charitable trust",
 stillActive: true,
 images: [
 "/communities/riverside-land.jpg",
 "/communities/riverside-2.jpg",
 "/communities/riverside-4.jpg",
 "/communities/riverside-3.jpg",
 "/communities/riverside-1.jpg"
 ],
 summary: "New Zealand’s oldest intentional community began as a Christian-pacifist farm in wartime. The 1953 charitable trust still holds about 200 hectares in common: a dairy, a café, and weekly consensus instead of private lots.",
 businessModel: "Dairy farm and fresh-milk vending, café (leased in recent years), tourist accommodation, a cultural centre and gallery, joinery, and a mechanical workshop. Enterprise income supports education and charitable work. A general fund covers health, dental, electricity, and phone; other needs are subsidized. Income is shared by family size rather than job.",
 foundingProcess: "A small group of Methodist Christian pacifists, including Archibald Barrington, chose communal life as an alternative to a competitive wartime society. Hubert Holdaway contributed 30 acres of farm and orchard in the Lower Moutere valley in 1941. Several founding men spent the war as conscientious objectors on a prison farm in Taranaki while their families held the land. After the war they formed the Religious Charitable Riverside Community Trust (1953), bought more hill country, and cleared scrub into a dairy farm.",
 governance: "Trustees hold the deed. Members govern daily life by consensus in weekly meetings. No private sale of houses or cars. The trust and the residential community are legally distinct but designed to work together.",
 website: "https://www.riverside.org.nz/",
 timeline: [
 {
 year: "1941",
 event: "Christian pacifists settle 30 acres contributed by Hubert Holdaway."
 },
 {
 year: "WWII",
 event: "Founding men serve as conscientious objectors; families hold the farm."
 },
 {
 year: "1953",
 event: "Religious Charitable Riverside Community Trust formed; land held in common."
 },
 {
 year: "Post-war",
 event: "Additional land purchased and cleared into a dairy farm of ~200 hectares."
 },
 {
 year: "Present",
 event: "About 25 members on trust land; dairy, café, and consensus meetings continue."
 }
 ]
 },
 {
 slug: "koinonia",
 name: "Koinonia Farm",
 location: "Americus, Sumter County, Georgia",
 region: "Georgia, USA",
 country: "United States",
 foundedYear: 1942,
 foundedLabel: "1942",
 members: 20,
 membersLabel: "Small residential community of partners, interns, and guests",
 acres: 573,
 acresLabel: "573 acres (from 400; peaked above 1,400)",
 legalStructure: "Koinonia Partners, Inc., a 501(c)(3) Christian nonprofit (Georgia Historic Site since 2005). Founded as a common-purse interracial farm. Reincorporated as Koinonia Partners in 1969 to run partnership housing and social ministries. In 1993 it tried a staff-and-board nonprofit model and dropped the common purse. In 2005 it reorganized back toward an intentional Christian community: members receive a needs-based allowance rather than a restored common purse. Land and ministries sit with the nonprofit, not with individual title.",
 legalCategory: "Christian nonprofit",
 stillActive: true,
 images: [
 "/communities/koinonia-land.jpg",
 "/communities/koinonia-3.jpg",
 "/communities/koinonia-5.jpg",
 "/communities/koinonia-4.jpg",
 "/communities/koinonia-1.jpg",
 "/communities/koinonia-2.jpg"
 ],
 summary: "An interracial Christian farm that survived Klan boycotts by mailing pecans out of Georgia, invented no-interest partnership housing, and became the seedbed of Habitat for Humanity.",
 businessModel: "Mail-order pecan catalog (still the largest earned-income stream; original slogan: “Help us ship the nuts out of Georgia!”), bakery, grapes, blueberries, vegetables, grass-fed beef, hospitality, internships, and donations. Partnership Housing built 194 no-interest houses (1969–92) on a revolving Fund for Humanity, the template Millard and Linda Fuller took global as Habitat for Humanity in 1976.",
 foundingProcess: "Clarence and Florence Jordan and Martin and Mabel England bought 400 acres in 1942 as a “demonstration plot for the Kingdom of God”: interracial, pacifist, common-purse. Equal pay for Black and white workers broke Jim Crow custom. In the 1950s the Klan dynamited the roadside stand, fired shots into the farm, and led a 70-car motorcade; the local Chamber asked them to sell and leave. A nationwide mail-order pecan business kept them alive. Membership collapsed to two families by the late 1960s. Jordan and the Fullers then reinvented the farm as Koinonia Partners (1969). Jordan died in his writing shack on 29 October 1969. Habitat launched from Americus in 1976. Land later shrank from 1,400+ acres to 573.",
 governance: "Nonprofit board plus resident partners. After 2005 the staff/volunteer split was dropped. Members live by a needs-based allowance, prayer, work, and hospitality rather than a town-meeting co-op or a restored common purse.",
 website: "https://koinoniafarm.org/",
 timeline: [
 {
 year: "1942",
 event: "Jordans and Englands found Koinonia on 400 acres near Americus."
 },
 {
 year: "1950s",
 event: "Boycott, bombings, and Klan intimidation; pecan mail-order business launched."
 },
 {
 year: "1969",
 event: "Reincorporated as Koinonia Partners; Clarence Jordan dies 29 October."
 },
 {
 year: "1969–76",
 event: "Partnership Housing; Fullers found Habitat for Humanity in Americus (1976)."
 },
 {
 year: "2005",
 event: "Reorganized as an intentional Christian community; named a Georgia Historic Site."
 }
 ]
 },
 {
 slug: "camphill-copake",
 name: "Camphill Village Copake",
 location: "Copake, Columbia County, New York",
 region: "New York, USA",
 country: "United States",
 foundedYear: 1961,
 foundedLabel: "17 September 1961",
 members: 250,
 membersLabel: "~250 people (over 100 adults with developmental disabilities)",
 acres: 615,
 acresLabel: "~615–750 acres of farm, garden, and woodland",
 legalStructure: "Camphill Village U.S.A., Inc., a 501(c)(3) public charity (tax-exempt since 1963). The oldest and largest Camphill community in North America, part of a lateral movement of 100+ Camphill places worldwide rather than a franchise. A separate Camphill Village Copake Foundation supports the village. Land, houses, and workshops are held by the nonprofit. Residents with developmental disabilities and coworker families share extended-family houses; there is no private lot title and no housing co-op.",
 legalCategory: "Camphill nonprofit",
 stillActive: true,
 images: [
 "/communities/camphill-copake-land.jpg",
    "/communities/camphill-copake-people.jpg",
 "/communities/camphill-1.jpg",
 "/communities/camphill-4.jpg",
 "/communities/camphill-2.jpg",
 "/communities/camphill-5.jpg",
 "/communities/camphill-3.jpg"
 ],
 summary: "The first Camphill community in North America: a lifesharing village where people with and without developmental disabilities farm, craft, and live in extended-family houses on a 501(c)(3)’s land.",
 businessModel: "Biodynamic farm (including a small dairy milked by hand), three gardens, Turtle Tree Seed (open-pollinated seed since 1998), a Healing Plant Garden (ointments, teas), bakery, weavery, bookbindery, woodshop, candleshop, and a coffee shop. Products sell through the Camphill Store. The nonprofit also draws donations, fees, and state support typical of a disability-services charity. About 40 full-time and 8 part-time staff sit alongside volunteer coworkers.",
 foundingProcess: "Dr. Karl König founded the Camphill Movement in Aberdeen in 1939, drawing on Rudolf Steiner. Carlo Pietzner and colleagues were invited to the United States and leased Sunny Valley Farm in Copake on 17 September 1961 for $1 a year, 210 acres, a farmhouse, a bungalow, and three red barns. A board was assembled in Albany before the move. Within five years they had 36 people with special needs in eight houses; by 1973 about 210 people in 15 lifesharing houses. The community later seeded Camphill villages in Pennsylvania, Minnesota, California, and elsewhere.",
 governance: "Nonprofit board of directors. Daily life is organized in about 22 lifesharing houses plus workshop and farm groups, guided by anthroposophical social-therapy practice rather than a members’ co-op. Camphill Academy trains coworkers. The village renamed itself Camphill Village Copake (from Camphill Village USA) after its 60th anniversary to match the place-name custom of other Camphills.",
 website: "https://camphillvillage.org/",
 timeline: [
 {
 year: "1939",
 event: "Karl König founds the Camphill Movement in Aberdeen, Scotland."
 },
 {
 year: "1961",
 event: "Sunny Valley Farm leased for $1/year; Camphill Village Copake founded 17 September."
 },
 {
 year: "1973",
 event: "About 210 people in 15 lifesharing houses; land later expands toward 600–750 acres."
 },
 {
 year: "1983",
 event: "Camphill Association of North America formed."
 },
 {
 year: "2021–23",
 event: "60th anniversary; name changed to Camphill Village Copake."
 }
 ]
 },
 {
 slug: "findhorn",
 name: "Findhorn Ecovillage",
 location: "The Park, Findhorn, Moray",
 region: "Scotland, UK",
 country: "United Kingdom",
 foundedYear: 1962,
 foundedLabel: "17 November 1962",
 members: 250,
 membersLabel: "~250 Park residents",
 acres: 37,
 acresLabel: "~37 acres at The Park, plus reserve land",
 legalStructure: "Hybrid of many entities, not one owner. Findhorn Foundation (Trust 1968, Foundation 1972, later SCIO SC051938) historically held core assets and ran education; it ceased operations in November 2023. Ecovillage Findhorn Community Benefit Society (May 2023) is buying land and buildings into democratic community ownership (first stages completed 18 November 2024). Alongside: New Findhorn Association (1999), Phoenix Community Stores, Park Ecovillage Trust, Duneland Ltd, and Ekopia.",
 legalCategory: "Hybrid / Community Benefit Society",
 stillActive: true,
 images: [
 "/communities/findhorn-land.jpg",
    "/communities/findhorn-people.jpg",
 "/communities/findhorn-1.jpg",
 "/communities/findhorn-4.jpg",
 "/communities/findhorn-3.jpg",
 "/communities/findhorn-5.jpg",
 "/communities/findhorn-2.jpg"
 ],
 summary: "A Findhorn caravan park that learned to grow vegetables in sand, then grew itself into a UN Best Practice settlement of ecological houses, education, and community enterprise on Findhorn Bay. The first whisky-barrel house went up in 1986; four more followed, some with turf roofs looking over the Moray Firth. Seekers have been arriving for sixty years.",
 businessModel: "Education and workshops (historically via the Foundation), visitor centre, Phoenix Shop, accommodation, local food systems, the Eko community currency, and regenerative agriculture projects.",
 foundingProcess: "Peter and Eileen Caddy, their three sons, and Dorothy Maclean arrived in a caravan on 17 November 1962. First buildings and the Findhorn Trust in 1968; the Findhorn Foundation replaced the Trust in 1972. The Park grew through the 1970s. After Foundation financial strain in the 2020s, residents formed a Community Benefit Society and began buying land and buildings into community ownership (first stages completed November 2024).",
 governance: "Multi-entity: charitable trust / SCIO, Community Benefit Society with elected board, and neighborhood associations. Consensus and boards rather than a single owner.",
 website: "https://www.ecovillagefindhorn.uk/",
 timeline: [
 {
 year: "1962",
 event: "Founders arrive at Findhorn Bay Caravan Park."
 },
 {
 year: "1968–72",
 event: "First buildings; Findhorn Trust, then Findhorn Foundation."
 },
 {
 year: "1970s",
 event: "Community grows toward ~150 members; ecological building begins."
 },
 {
 year: "1990s",
 event: "UN Best Practice designation; New Findhorn Association (1999)."
 },
 {
 year: "2023–25",
 event: "CBS formed; land and buildings transferred into community ownership."
 }
 ]
 },
 {
 slug: "twin-oaks",
 name: "Twin Oaks Community",
 location: "Louisa County, Virginia",
 region: "Virginia, USA",
 country: "United States",
 foundedYear: 1967,
 foundedLabel: "1967",
 members: 100,
 membersLabel: "~85–100 adults + ~15 children",
 acres: 465,
 acresLabel: "450–485 acres",
 legalStructure: "Income-sharing intentional community. Twin Oaks Community, Inc. is a Virginia corporation with IRC 501(d) apostolic tax status: land and businesses sit with the corporation, members are not individual title holders, and members report a small taxable dividend rather than wages. Member of the Federation of Egalitarian Communities.",
 legalCategory: "Income-sharing",
 stillActive: true,
 images: [
 "/communities/twin-oaks-land.jpg",
    "/communities/twin-oaks-people.jpg",
 "/communities/twin-oaks-4.jpg",
 "/communities/twin-oaks-1.jpg",
 "/communities/twin-oaks-5.jpg",
 "/communities/twin-oaks-3.jpg",
 "/communities/twin-oaks-2.jpg",
 "/communities/twin-oaks-6.jpg"
 ],
 summary: "In Louisa County, Virginia, a Walden Two experiment kept the labor credits and dropped the behaviorism. Twin Oaks has been sharing income, tofu, and hammocks since 1967, one of the longest-running large secular communes in North America. For decades Twin Oaks hammocks hung in Pier 1 stores across America while the weavers owned nothing privately.",
 businessModel: "Fully income-sharing. Twin Oaks Community Foods (tofu), work with Southern Exposure Seed Exchange, book indexing, and historically hammock making. Members work ~38.5–42 hours/week and receive housing, food, healthcare, and a small personal stipend (~$100/month).",
 foundingProcess: "Eight founders with no farming experience leased a 123-acre tobacco farm for $50 with an option to buy. The experiment held; they purchased the land and expanded over decades to several hundred acres of farm and forest.",
 governance: "Planner-manager democracy plus committees. No single leader. Values: cooperation, egalitarianism, nonviolence, feminism, sustainability.",
 website: "https://www.twinoaks.org/",
 timeline: [
 {
 year: "1967",
 event: "Founded on a leased 123-acre tobacco farm in Louisa County."
 },
 {
 year: "Late 1960s",
 event: "Lease converts to purchase; labor-credit system established."
 },
 {
 year: "1970s–90s",
 event: "Hammock business and other enterprises fund expansion of land and membership."
 },
 {
 year: "Present",
 event: "Tofu, seeds, and indexing are core income; membership around 100."
 }
 ]
 },
 {
 slug: "auroville",
 name: "Auroville",
 location: "Viluppuram district, Tamil Nadu (near Puducherry)",
 region: "Tamil Nadu, India",
 country: "India",
 foundedYear: 1968,
 foundedLabel: "28 February 1968",
 members: 3527,
 membersLabel: "~3,500 residents from 60 countries (Auroville Census 2026)",
 acres: 3400,
 acresLabel: "~3,400 acres held by the Foundation",
 legalStructure: "Unique statutory body. The Auroville Foundation Act, 1988, passed by the Parliament of India, vested all movable and immovable assets of Auroville in the Auroville Foundation, an autonomous body. Three authorities must work together: a government-appointed Governing Board, the Residents’ Assembly of all official residents, and an International Advisory Council. There is no private land title for residents.",
 legalCategory: "Statutory foundation",
 stillActive: true,
 images: [
 "/communities/auroville-land.jpg",
    "/communities/auroville-people.jpg",
 "/communities/auroville-4.jpg",
 "/communities/auroville-1.jpg",
 "/communities/auroville-2.jpg",
 "/communities/auroville-3.jpg"
 ],
 summary: "An experimental international township inaugurated with soil from 124 nations. Land is held by a foundation created by Act of Parliament.",
 businessModel: "Commercial units (handmade paper, food, incense, construction, IT, guesthouses) contribute a share of profits to a Central Fund. Residents receive a maintenance stipend covering basic needs rather than wages as private owners. Guest fees, donations, and a small government grant support the rest. Surrounding villages employ thousands through Auroville units.",
 foundingProcess: "The Sri Aurobindo Society resolved in 1964 to found a city dedicated to Sri Aurobindo’s vision; Mirra Alfassa (“the Mother”) issued the invitation in 1965. Inauguration on 28 February 1968 gathered delegates from 124 countries. Early assets sat with the Sri Aurobindo Society. After the Mother’s death in 1973, a conflict over control led to the Auroville Emergency Provisions Act 1980 (government administration) and then the 1988 Foundation Act. Assets vested in the Foundation in 1992.",
 governance: "Three-tier: Governing Board (seven members appointed by the Government of India), Residents’ Assembly (all listed residents, with a Working Committee), and International Advisory Council. Admission and termination of residents is a Residents’ Assembly responsibility under the Act. In practice the three bodies have not always agreed, and the 2020s have seen public disputes over development and trees.",
 website: "https://auroville.org",
 timeline: [
 {
 year: "1964–65",
 event: "Sri Aurobindo Society resolution; the Mother invites people of goodwill."
 },
 {
 year: "1968",
 event: "Inauguration on 28 February; charter and urn of earth from 124 nations."
 },
 {
 year: "1980",
 event: "Emergency Provisions Act places assets under Government of India administration."
 },
 {
 year: "1988–92",
 event: "Foundation Act passed; Foundation created (1991); assets vest (1992)."
 },
 {
 year: "Present",
 event: "About 3,500 residents (Census 2026); Foundation holds roughly 3,400 acres."
 }
 ]
 },
 {
 slug: "the-farm",
 name: "The Farm",
 location: "Summertown, Tennessee",
 region: "Tennessee, USA",
 country: "United States",
 foundedYear: 1971,
 foundedLabel: "1971",
 members: 210,
 membersLabel: "~200–225 residents",
 acres: 1750,
 acresLabel: "~1,750 acres",
 legalStructure: "Originally a fully communal nonprofit (The Foundation). After the 1983 Changeover, a cooperative village: land held in common, members pay monthly dues, personal assets retained. Multiple nonprofits and businesses on the same land.",
 legalCategory: "Cooperative village",
 stillActive: true,
 images: [
 "/communities/the-farm-land.jpg",
    "/communities/the-farm-people.jpg",
 "/communities/the-farm-4.jpg",
 "/communities/the-farm-5.jpg",
 "/communities/the-farm-1.jpg",
 "/communities/the-farm-2.jpg",
 "/communities/the-farm-3.jpg"
 ],
 summary: "Stephen Gaskin led a San Francisco caravan onto Tennessee land in 1971 and built America’s best-known commune. It peaked near 1,500 people, nearly broke, and reorganized into a cooperative village that is still there, midwifery, publishing, and aid work included. Ina May Gaskin’s Spiritual Midwifery came out of births here.",
 businessModel: "Early years: full income-sharing. After 1983: dues-based membership plus independent livelihoods. On-site work has included Book Publishing Company, soy foods, construction, media, the Ecovillage Training Center, Plenty International, and midwifery education.",
 foundingProcess: "About 300 people left Haight-Ashbury in a caravan of buses, spent months on the road, and bought land in Lewis County (~1,064 acres at $70/acre, later expanded). Rapid growth strained infrastructure. The 1980s recession and living-standard pressure led to the 1983 Changeover from commune to cooperative.",
 governance: "Spiritual leadership under Gaskin gave way to a council of elders and later a board of directors. Town-meeting budgeting for community dues.",
 website: "https://thefarmcommunity.com/",
 timeline: [
 {
 year: "1970–71",
 event: "Caravan from San Francisco; land purchased near Summertown."
 },
 {
 year: "1971–83",
 event: "Fully communal economy; population peaks near 1,500."
 },
 {
 year: "1983",
 event: "Changeover: cooperative model, monthly dues, personal assets kept."
 },
 {
 year: "Present",
 event: "Stable village of ~200 with diversified businesses and training programs."
 }
 ]
 },
 {
 slug: "gaviotas",
 name: "Gaviotas",
 location: "Vichada department, Llanos orientales",
 region: "Vichada, Colombia",
 country: "Colombia",
 foundedYear: 1971,
 foundedLabel: "1971",
 members: 200,
 membersLabel: "~200 residents (historically; ~2,000 regional livelihoods)",
 acres: 24710,
 acresLabel: "~10,000 hectares staked; ~10,000 ha of planted Caribbean pine",
 legalStructure: "Centro las Gaviotas, a Colombian nonprofit founded by Paolo Lugari in 1971. The organization holds the settlement, forest, and appropriate-technology work. Residents work inside a research-and-production nonprofit that stayed deliberately apolitical (no weapons, treating combatants of every side in its hospital). Early UN Development Programme grants gave way to pine-resin income in the late 1980s.",
 legalCategory: "Nonprofit foundation",
 stillActive: true,
 images: [
 "/communities/gaviotas-land.jpg",
    "/communities/gaviotas-people.jpg",
 "/communities/gaviotas-4.jpg",
 "/communities/gaviotas-1.jpg",
 "/communities/gaviotas-3.jpg",
 "/communities/gaviotas-5.jpg"
 ],
 summary: "A tropical-research village on the Colombian Llanos that planted thousands of hectares of pine, designed dual-action water pumps and solar hospital systems, and funds itself as a nonprofit rather than a co-op.",
 businessModel: "Caribbean-pine resin (colophony, turpentine, rosin) made the village financially independent after UN funding ended; it once supplied much of Colombia’s market. After Chinese competition, Gaviotas bottled aquifer water and experimented with oil palm. A Bogotá factory makes pumps and windmills. A solar hospital (mid-1980s) treated civilians and combatants until 1990s health-law changes closed it; the building was later reused. The forest is carbon-negative and hosts 250+ plant species under the pines.",
 foundingProcess: "Paolo Lugari saw the empty Llanos on a 1966 flight and, with tropical geographers and university students, staked about 10,000 hectares around abandoned buildings in 1971. Guahibo people helped build houses. Population grew from ~20 to ~200 by the late 1970s. A 1978 water pump won Colombia’s National Science Prize; a 1979 UNDP visit extended grants. First pines went in in 1983. Neutrality during Colombia’s conflict limited growth but kept the experiment alive.",
 governance: "Nonprofit administration around Lugari’s long leadership. Weapons are banned. The model is a research settlement whose assets sit with the centre, not with residents as owners.",
 website: "https://en.wikipedia.org/wiki/Gaviotas",
 timeline: [
 {
 year: "1966",
 event: "Lugari first sees the Llanos from the air."
 },
 {
 year: "1971",
 event: "Centro las Gaviotas founded; ~20 people on staked savanna."
 },
 {
 year: "1978–79",
 event: "Water pump wins a national science prize; UNDP funding follows."
 },
 {
 year: "1983",
 event: "First Caribbean pine planted; resin later replaces grants."
 },
 {
 year: "Late 1980s",
 event: "Solar hospital; village self-finances through resin."
 }
 ]
 },
 {
 slug: "moora-moora",
 name: "Moora Moora Co-operative Community",
 location: "Mount Toolebewong, near Healesville",
 region: "Victoria, Australia",
 country: "Australia",
 foundedYear: 1974,
 foundedLabel: "February 1974",
 members: 70,
 membersLabel: "~50 adults + ~20 children in 6–8 clusters",
 acres: 605,
 acresLabel: "245 hectares (~605 acres), Trust for Nature covenant",
 legalStructure: "A members’ co-operative, originally registered as a Community Settlement Society under Victoria’s Co-operative Act 1959. The co-operative owns the 245 hectares in common. Members hold shares and a right to build in a designated cluster; houses are privately owned on co-op land. Seven directors are elected annually for operations. A Trust for Nature covenant protects the forest. Not income-sharing: livelihoods stay with households.",
 legalCategory: "Community cooperative",
 stillActive: true,
 images: [
 "/communities/moora-moora-land.jpg",
    "/communities/moora-moora-people.jpg",
 "/communities/moora-1.jpg",
 "/communities/moora-4.jpg",
 "/communities/moora-2.jpg",
 "/communities/moora-3.jpg"
 ],
 summary: "One of Australia’s longest-running cooperative communities: privately owned houses in forest clusters on 245 hectares the co-op holds in common, locked down by a conservation covenant.",
 businessModel: "Members finance their own homes and off-site or on-site work. About 40 hectares are cleared (pasture, gardens, cluster sites); the rest is eucalypt forest and Leadbeater’s Possum habitat. The co-operative maintains roads, water, and common buildings. Visitors, internships, and occasional events supplement but do not replace household incomes.",
 foundingProcess: "Twelve people bought the Mount Toolebewong property in 1974, after the Aquarius-festival wave of Australian intentional communities, and registered a community settlement society. The plan was explicit: the co-op owns the land, individuals own houses, living is clustered so most of the mountain stays forest. Clusters of four to six houses were built on the plateau (~700 m). Almost all of the original twelve later left; new members replaced them without selling the land out of common ownership.",
 governance: "Seven elected directors plus co-op general meetings. Cluster-level daily life. Building and land-use rules sit in the co-op’s rules and the Trust for Nature covenant.",
 website: "https://mooramoora.org.au/",
 timeline: [
 {
 year: "1974",
 event: "Twelve buyers register a Community Settlement Society and purchase the mountain."
 },
 {
 year: "1970s–80s",
 event: "Six clusters of houses built; most of 245 hectares left as forest."
 },
 {
 year: "Later",
 event: "Trust for Nature covenant placed on the land."
 },
 {
 year: "Present",
 event: "About 70 people in clusters; co-op still owns the mountain."
 }
 ]
 },
 {
 slug: "east-wind",
 name: "East Wind Community",
 location: "Tecumseh, Missouri",
 region: "Missouri, USA",
 country: "United States",
 foundedYear: 1974,
 foundedLabel: "1 May 1974",
 members: 29,
 membersLabel: "~29 full members (early 2025; historically ~70)",
 acres: 1045,
 acresLabel: "~1,045–1,200 acres",
 legalStructure: "Secular egalitarian income-sharing community. All major assets held in common. Direct democracy; managers elected annually.",
 legalCategory: "Income-sharing",
 stillActive: true,
 images: [
 "/communities/east-wind-land.jpg",
    "/communities/east-wind-people.jpg",
 "/communities/east-wind-5.jpg",
 "/communities/east-wind-1.jpg",
 "/communities/east-wind-3.jpg",
 "/communities/east-wind-4.jpg",
 "/communities/east-wind-2.jpg",
 "/communities/east-wind-6.jpg"
 ],
 summary: "An Ozarks income-sharing community that funds itself primarily through East Wind Nut Butters. Membership has fluctuated; the land and nut-butter plant remain collectively owned.",
 businessModel: "Egalitarian income-sharing. East Wind Nut Butters (roasting, milling, packaging; historically 200,000+ lbs/year) is the flagship. Also gardens, orchards, and pasture. Members receive food, shelter, clothing, medical care, and a modest stipend.",
 foundingProcess: "A Massachusetts group sought inexpensive land with creek access. Sixteen people established East Wind in Ozark County on 1 May 1974. The nut-butter business launched around 1980 to provide a steady income independent of farming luck.",
 governance: "Direct democracy. Annual election of managers. Labor is broadly defined and allocated collectively. No private ownership of community assets.",
 website: "https://www.eastwind.org/",
 timeline: [
 {
 year: "1973–74",
 event: "Group forms in Massachusetts; settles Missouri on May 1, 1974."
 },
 {
 year: "1980",
 event: "East Wind Nut Butters founded as the community’s main income."
 },
 {
 year: "2010s",
 event: "Membership often around 70 on 1,000+ acres."
 },
 {
 year: "2025",
 event: "Membership dip (~29 full members); community and plant remain active."
 }
 ]
 },
 {
 slug: "damanhur",
 name: "Federation of Damanhur",
 location: "Vidracco, Valchiusella, Piedmont",
 region: "Piedmont, Italy",
 country: "Italy",
 foundedYear: 1975,
 foundedLabel: "1975 (settled 1979)",
 members: 600,
 membersLabel: "~600 citizens on site, plus a worldwide community",
 acres: null,
 acresLabel: "Valley nucleos around Vidracco",
 legalStructure: "Federation of spiritual communities whose land, houses, and enterprises are legally owned by cooperatives. Citizens hold shares in the co-ops, not individual title to the land. A living constitution (rewritten from 130+ articles down to 15 since 1981) governs internal life. The community issues its own complementary currency, the Credito. Damanhur is a federation of nucleos.",
 legalCategory: "Federation of cooperatives",
 stillActive: true,
 images: [
 "/communities/damanhur-land.jpg",
    "/communities/damanhur-people.jpg",
 "/communities/damanhur-4.jpg",
 "/communities/damanhur-3.jpg",
 "/communities/damanhur-1.jpg",
 "/communities/damanhur-2.jpg"
 ],
 summary: "A Piedmont federation that dug the Temples of Humankind in secret, then came above ground as a constitution-based society of cooperatives, nucleos, and a local currency.",
 businessModel: "Cooperative businesses (art, olive oil, agriculture, publishing, tourism to the Temples, education) redistribute profits. Citizens contribute labor and money according to membership level. The Credito circulates internally. Visitors and courses are a major outward-facing income.",
 foundingProcess: "Oberto Airaudi (later Falco Tarassaco) and about a dozen friends founded Damanhur in 1975. They settled the Valchiusella in 1979 and began secretly excavating underground temples. Italian authorities discovered the Temples in 1992; after legal resolution the site opened to visitors. Guinness listed them among the world’s largest underground temples. After Falco’s death in 2013 the Federation became more public-facing.",
 governance: "Written constitution, elected king/queen guides on rotation historically, and cooperative boards for assets. Daily life is organized in nucleos (small residential groups). Citizens participate through the School of Meditation, social bodies, and the Game of Life.",
 website: "https://damanhur.org",
 timeline: [
 {
 year: "1975",
 event: "Founded by Oberto Airaudi (Falco Tarassaco) with a small circle of friends."
 },
 {
 year: "1979",
 event: "Settlement in Valchiusella; secret excavation of the Temples begins."
 },
 {
 year: "1981",
 event: "First written constitution."
 },
 {
 year: "1992",
 event: "Temples of Humankind discovered by the authorities; later opened to visitors."
 },
 {
 year: "2013",
 event: "Founder dies; Federation continues as a more outward-facing community of ~600."
 }
 ]
 },
 {
 slug: "svanholm",
 name: "Svanholm Storkollektiv",
 location: "Skibby, Hornsherred, Zealand",
 region: "Zealand, Denmark",
 country: "Denmark",
 foundedYear: 1978,
 foundedLabel: "1978",
 members: 120,
 membersLabel: "~70–85 adults + ~35–50 children",
 acres: 1025,
 acresLabel: "~400–415 hectares (~990–1,025 acres)",
 legalStructure: "Denmark’s largest income-sharing collective. An association of more than 100 people bought the historic Svanholm estate in 1978. The property is jointly owned; members are limited partners (kommanditister) in the legal entity, so there is no individual title. All members sit on the board. Organic farming, forestry, and small enterprises sit inside the same collective.",
 legalCategory: "Income-sharing",
 stillActive: true,
 images: [
 "/communities/svanholm-land.jpg",
    "/communities/svanholm-people.jpg",
 "/communities/svanholm-wiki-1.jpg",
 "/communities/svanholm-1.jpg",
 "/communities/svanholm-2.jpg"
 ],
 summary: "A medieval manor turned into Denmark’s largest intentional community: joint ownership, organic fields, and income-sharing instead of private lots on the estate.",
 businessModel: "Organic agriculture (a Danish pioneer), forestry, and several small businesses. Members who work on the estate and members who work outside both contribute. Commonly described split: taxes take a share, then about 80% of remaining income goes into the collective economy, with a personal remainder. Food, housing, and shared services come from the common purse.",
 foundingProcess: "A 1977 newspaper ad for a “storkollektiv” (large collective) drew a group that wanted communal living without squatting. In 1978 more than 100 people bought the Svanholm estate (a manor mentioned as early as 1346, rebuilt in 1744) and took on the debt together. They converted conventional farmland to organic production and became a reference point for Danish organic agriculture.",
 governance: "Direct democracy and consensus. Every member is a limited partner and a board member. Working groups run farm, kitchen, and enterprises. No private sale of land or houses.",
 website: "https://svanholm.dk/english/",
 timeline: [
 {
 year: "1977",
 event: "Newspaper ad for a storkollektiv; founding group forms."
 },
 {
 year: "1978",
 event: "Association of 100+ people buys the Svanholm estate."
 },
 {
 year: "1980s",
 event: "Farm converts to organic; Svanholm helps build Denmark’s organic movement."
 },
 {
 year: "Present",
 event: "About 120 people jointly own ~400 hectares of farm, park, and forest."
 }
 ]
 },
 {
 slug: "lakabe",
 name: "Lakabe",
 location: "Arce-Artzibar valley, Navarra",
 region: "Navarra, Spain",
 country: "Spain",
 foundedYear: 1980,
 foundedLabel: "21 March 1980",
 members: 45,
 membersLabel: "~20–45 residents (INE 51 in 2014; ~45 in 2025)",
 acres: 1320,
 acresLabel: "Concejo of 5.34 km² (~1,320 acres)",
 legalStructure: "A recovered medieval village. Lakabe emptied in the 1960s rural exodus and was occupied on 21 March 1980. Title to the place sits with the Government of Navarra. Two legal figures now run it: the concejo abierto (open council) for municipal administration (one resident has served as president-alcalde) and a cultural association (asociación cultural) with a tax ID for courses and projects. There is no private sale of houses. Internal economy is shared (euros plus labour); sociocracy “petals” organize work.",
 legalCategory: "Recovered village",
 stillActive: true,
 images: [
 "/communities/lakabe-land.jpg",
    "/communities/lakabe-people.jpg",
 "/communities/lakabe-4.jpg",
 "/communities/lakabe-1.jpg",
 "/communities/lakabe-2.jpg",
 "/communities/lakabe-5.jpg",
 "/communities/lakabe-3.jpg"
 ],
 summary: "A Navarrese ghost village occupied in 1980 by Basque conscientious objectors: the government still holds the land, while a concejo and a cultural association run a shared-economy ecoaldea.",
 businessModel: "Shared purse. The bakery is the main cash enterprise; courses and visiting groups are next. Some members work or barter off-site. Food, building, and childcare are collective. The village rebuilt roofs, ovens, and paths by hand after finding the hamlet roofless.",
 foundingProcess: "The founding circle came out of 1970s Bilbao nonviolence, support for Pepe Beunza, Spain’s first political conscientious objector. They first shared a flat, then a shack in Uretamendi, then a rented house in Usoz (Navarra) in 1978. Looking for lost goats, they found the empty hamlet of Lakabe, set a date, and moved in on 21 March 1980. Pioneer Mabel Cañada is still identified with the project. Over decades the occupation was regularized into concejo plus association rather than evicted.",
 governance: "Concejo abierto for the municipality; asociación cultural for activities that need a CIF. Internally, sociocracy petals, whole-community meetings, and a shared economy.",
 website: "https://www.lakabe.org/",
 timeline: [
 {
 year: "1960s",
 event: "Medieval hamlet empties in the rural exodus."
 },
 {
 year: "1970s",
 event: "Bilbao conscientious-objector circle forms; 1978 house in Usoz."
 },
 {
 year: "1980",
 event: "Occupation of Lakabe on 21 March; roofs and ovens rebuilt by hand."
 },
 {
 year: "Later",
 event: "Regularized as concejo abierto plus cultural association."
 },
 {
 year: "Present",
 event: "About 45 people; bakery, courses, and shared purse still run the village."
 }
 ]
 },
 {
 slug: "kibbutz-lotan",
 name: "Kibbutz Lotan",
 location: "Arabah / Arava valley, 55 km north of Eilat",
 region: "Southern District, Israel",
 country: "Israel",
 foundedYear: 1983,
 foundedLabel: "1983",
 members: 270,
 membersLabel: "~270 residents (2024); more than 100 members",
 acres: 548,
 acresLabel: "~2,220 dunams (~548 acres / 222 hectares)",
 legalStructure: "A Reform kibbutz (the second kibbutz founded by Israel’s Reform movement) inside the Kibbutz Movement. Under Israeli kibbutz law the settlement is a cooperative agricultural community: members share production and (in Lotan’s case) a remaining collective economy, and there is no private real-estate title in the classic suburban sense. Lotan kept a stronger ecological and egalitarian identity than kibbutzim that fully privatized in the 1990s–2000s. The Center for Creative Ecology (1997) is the educational arm.",
 legalCategory: "Kibbutz",
 stillActive: true,
 images: [
 "/communities/kibbutz-lotan-land.jpg",
    "/communities/kibbutz-lotan-people.jpg",
 "/communities/lotan-4.jpg",
 "/communities/lotan-1.jpg",
 "/communities/lotan-5.jpg",
 "/communities/lotan-6.jpg",
 "/communities/lotan-3.jpg",
 "/communities/lotan-2.jpg"
 ],
 summary: "A Reform kibbutz in the Arava desert that stayed collective while pioneering mud-dome building, permaculture, and the Center for Creative Ecology on 2,220 dunams of cooperative land.",
 businessModel: "Date orchards, dairy, tourism (Desert Travel Hotel, EcoCampus of ~10 mud domes), solar fields, and environmental education. The CfCE runs courses in organic farming, alternative architecture, energy, and permaculture for universities and volunteers. Members who work on and off the kibbutz feed a remaining profit-sharing economy.",
 foundingProcess: "Idealistic Israeli and American youths in the Reform movement founded Lotan in 1983 as a profit-sharing community based on pluralistic, egalitarian Jewish values and desert ecology. It is the second Reform kibbutz. The Center for Creative Ecology grew from members’ wish to cut environmental impact and opened in 1997, making Lotan a teaching site as well as a farm.",
 governance: "Kibbutz general assembly and elected committees, under Israeli cooperative-settlement law. Ecological building (straw, mud, tires) is a community practice. Admission follows kibbutz membership or lot purchase.",
 website: "https://kibbutzlotan.com/en/",
 timeline: [
 {
 year: "1983",
 event: "Second Reform kibbutz founded in the Arava by Israeli and American youths."
 },
 {
 year: "1997",
 event: "Center for Creative Ecology established."
 },
 {
 year: "2000s–",
 event: "Mud-dome EcoCampus, solar, dates, and eco-tourism expand."
 },
 {
 year: "2024",
 event: "Population about 270 on ~2,220 dunams."
 }
 ]
 },
 {
 slug: "lebensgarten",
 name: "Lebensgarten Steyerberg",
 location: "Steyerberg, Lower Saxony",
 region: "Lower Saxony, Germany",
 country: "Germany",
 foundedYear: 1985,
 foundedLabel: "1985–86",
 members: 130,
 membersLabel: "~115–150 residents in 58–62 houses",
 acres: null,
 acresLabel: "58–62 restored houses on a former munitions settlement",
 legalStructure: "Lebensgarten Steyerberg e.V. (a registered association) is the community body. Residents typically own or rent the restored brick houses individually. Education, permaculture, and seminar work run through separate Vereine (associations) and gGmbHs (nonprofit companies), including PALS gGmbH for the gardens. A founder member of the Global Ecovillage Network.",
 legalCategory: "Registered association",
 stillActive: true,
 images: [
 "/communities/lebensgarten-land.jpg",
    "/communities/lebensgarten-people.jpg",
 "/communities/lebensgarten-4.jpg",
 "/communities/lebensgarten-5.jpg",
 "/communities/lebensgarten-1.jpg",
 "/communities/lebensgarten-6.jpg",
 "/communities/lebensgarten-2.jpg",
 "/communities/lebensgarten-3.jpg"
 ],
 summary: "Lower Saxony eco-settlement since 1985–86, in a former munitions-workers’ hamlet at Steyerberg. About 130 people in 58–62 restored brick houses. The Verein holds village life; households own or rent their own houses. Permaculture gardens and the Heilhaus seminar house are the public door. You book a course, then ask about a dwelling. You do not join an income-sharing commune.",
 businessModel: "Not income-sharing. Households are financially independent. The seminar house (Heilhaus) is the main shared enterprise; PALS runs CSA vegetable boxes; a community shop sells organic goods. Courses in permaculture, mediation, and spirituality bring guests. A local exchange currency (Minuto) circulates among members.",
 foundingProcess: "The site was built in 1938–39 as housing for a gunpowder mill, later a British depot and refugee camp. Christian Benzin, returning from Findhorn, acquired the derelict settlement in 1983 and called people to an ecological-spiritual village. About seven families were in place by 1985; the association dates to 1986. Pioneers made one habitable house into many. Margrit and Declan Kennedy founded the Permaculture Institute of Europe here. Expo 2000 in Hanover funded renovation of the community building.",
 governance: "Plenum of the e.V. for village issues. Project Vereine and gGmbHs run their own boards. Residents are responsible for their own livelihoods. Younger members have pushed for a tighter shared economy; the historic pattern is looser than a commune.",
 website: "https://www.lebensgarten.de",
 timeline: [
 {
 year: "1938–45",
 event: "Munitions-workers’ settlement built; later used as depot and refugee camp."
 },
 {
 year: "1983",
 event: "Christian Benzin acquires the site after a visit to Findhorn."
 },
 {
 year: "1985–86",
 event: "First families move in; Lebensgarten Steyerberg e.V. founded."
 },
 {
 year: "2000",
 event: "Expo 2000 external exhibition; grant to renovate the community building."
 },
 {
 year: "Present",
 event: "About 120 people in ~60 restored houses; seminar house and CSA gardens."
 }
 ]
 },
 {
 slug: "niederkaufungen",
 name: "Kommune Niederkaufungen",
 location: "Niederkaufungen, Kaufungen (near Kassel)",
 region: "Hesse, Germany",
 country: "Germany",
 foundedYear: 1986,
 foundedLabel: "December 1986",
 members: 81,
 membersLabel: "61 adults + 20 children and teenagers (community’s own figure)",
 acres: null,
 acresLabel: "Half-timbered farm buildings in the village centre",
 legalStructure: "Two registered associations (eingetragene Vereine). Kommune Niederkaufungen e.V. owns all land, buildings, vehicles, and means of production; every communard is a member, and communal property cannot be privatized. A second association (Verein für Ökologie, Gesundheit und Bildung e.V.) runs the seminar house, kindergarten, and horticulture enterprises. Income-sharing: members work mainly in commune collectives and live from a common purse (“from each according to ability, to each according to need”). Consensus decision-making. Member of the Kommuja network of political communes.",
 legalCategory: "Income-sharing",
 stillActive: true,
 images: [
 "/communities/niederkaufungen-land.jpg",
    "/communities/niederkaufungen-people.jpg",
 "/communities/niederkaufungen-1.jpg",
 "/communities/niederkaufungen-4.jpg",
 "/communities/niederkaufungen-2.jpg",
 "/communities/niederkaufungen-3.jpg"
 ],
 summary: "Hesse income-sharing commune since December 1986, in a village-centre farmstead at Niederkaufungen, seven kilometres from Kassel. Two Vereine hold the land, buildings, and tools in common. 61 adults and 20 children live from one purse. The public door is the seminar house. You visit, work alongside, then a membership conversation. You do not buy a house.",
 businessModel: "Nearly all members work in commune-owned collectives: Tagungshaus seminar centre, KOMM-BAU building firm, carpentry/joinery, Komm-Menu organic catering, Bioland market garden “Rote Rübe,” Obst-Manufactur orchard and juice, Hof Birkengrund organic dairy and cheese, kindergarten “Die Wühlmäuse,” KOMM-RAT consultancy, and Tagespflege Lossetal day care. Enterprises sell into the local economy; surplus stays collective.",
 foundingProcess: "A 1983 pamphlet (Grundsatzpapier) set left-wing, egalitarian, ecological principles. Fifteen people moved into a complex of former farm buildings in the historic centre of Niederkaufungen in December 1986, seven kilometres from Kassel. They chose a village-centre farmstead rather than remote land. Membership grew to about 60 adults and 20 children by the late 2000s and has stayed in that range (61 adults and 20 young people on the commune’s own site).",
 governance: "Consensus among members of the e.V. Living groups (about fourteen) handle daily life. Collectives manage each enterprise. The association structure means that even if membership fell below the seven people needed to found a Verein, the property would not revert to private owners.",
 website: "https://www.kommune-niederkaufungen.de/",
 timeline: [
 {
 year: "1983",
 event: "Grundsatzpapier of left-wing, income-sharing, ecological principles."
 },
 {
 year: "1986",
 event: "Fifteen founders occupy the village farmstead in December."
 },
 {
 year: "2000s",
 event: "Collectives (Bioland garden, dairy, building, seminar house) mature."
 },
 {
 year: "Present",
 event: "61 adults and 20 children; two Vereine still hold all property in common."
 }
 ]
 },
 {
 slug: "crystal-waters",
 name: "Crystal Waters",
 location: "Conondale, Sunshine Coast hinterland, Queensland",
 region: "Queensland, Australia",
 country: "Australia",
 foundedYear: 1988,
 foundedLabel: "1988 (approved 1986)",
 members: 200,
 membersLabel: "~200 residents on 83 residential lots",
 acres: 640,
 acresLabel: "259 hectares (640 acres)",
 legalStructure: "Queensland body corporate (Group Title Plan No. 1833) under what is now the Body Corporate and Community Management Act. 83 freehold residential lots and 2 commercial lots occupy about 20% of the land; 80% is common property managed by the body corporate and licensable for farming, forestry, recreation, and habitat. Crystal Waters Community Co-operative (registered 1981 as a land-settlement co-op) is the entrepreneurial arm for the village centre, camping, and community house.",
 legalCategory: "Body corporate",
 stillActive: true,
 images: [
 "/communities/crystal-waters-land.jpg",
    "/communities/crystal-waters-people.jpg",
 "/communities/crystal-waters-3.jpg",
 "/communities/crystal-waters-2.jpg",
 "/communities/crystal-waters-4.jpg",
 "/communities/crystal-waters-1.jpg"
 ],
 summary: "The first purpose-designed permaculture village: freehold house lots on 20% of the land, the rest held in common, under a Queensland body corporate instead of a commune or land trust.",
 businessModel: "Residents buy lots and finance their own homes. Home businesses, education tourism, and courses are the economic engine. Common land is licensed for agriculture and forestry. The co-op runs visitor camping and the village centre. 1996 World Habitat Award for low-impact rural settlement.",
 foundingProcess: "A small community lived on the property without approved titles. In 1981 they registered a land-settlement co-op. In 1985 remaining residents hired Max Lindegger, Robert Tap, Barry Goodman, and Geoff Young (Permaculture Services) to design a legal subdivision. Local government approved Crystal Waters Village in April 1986. Earthworks finished in 1987; separate freehold titles were sealed in June 1988 and lot sales began, funded without a bank loan, using lots in lieu of cash to the previous owner and the designers.",
 governance: "Elected body-corporate committee (chair, treasurer, secretary, four members) plus sub-committees. By-laws cover building, chemicals, animals, and trees. The co-op handles enterprise. Disputes can go to an elders process.",
 website: "https://crystalwaters.org.au/",
 timeline: [
 {
 year: "1981",
 event: "Crystal Waters Community Co-operative registered as a land-settlement co-op."
 },
 {
 year: "1985–86",
 event: "Permaculture design; shire approval for the village in April 1986."
 },
 {
 year: "1988",
 event: "Freehold titles issued; first new residents arrive."
 },
 {
 year: "1996",
 event: "World Habitat Award for pioneering low-impact sustainable living."
 },
 {
 year: "Present",
 event: "About 200 people on 83 lots; 80% of 259 hectares remains common land."
 }
 ]
 },
 {
 slug: "ecovillage-ithaca",
 name: "EcoVillage at Ithaca",
 location: "Ithaca, New York",
 region: "New York, USA",
 country: "United States",
 foundedYear: 1991,
 foundedLabel: "1991 (land 1992)",
 members: 210,
 membersLabel: "~170 adults + ~40 children",
 acres: 175,
 acresLabel: "170–175 acres",
 legalStructure: "Six core entities plus a land-trust easement. EcoVillage at Ithaca, Inc. (501(c)(3)) owns land outside the neighborhoods. FROG, SONG, and TREE housing cooperatives own the cohousing. EcoVillage at Ithaca Village Association (EVIVA) owns roads, water, sewer, parking, and the pond. A second 501(c)(3) runs education. Conservation easement with Finger Lakes Land Trust; Special Land Use District with the Town of Ithaca.",
 legalCategory: "Cohousing cooperatives",
 stillActive: true,
 images: [
 "/communities/ecovillage-ithaca-land.jpg",
    "/communities/ecovillage-ithaca-people.jpg",
 "/communities/ithaca-4.jpg",
 "/communities/ithaca-5.jpg",
 "/communities/ithaca-6.jpg",
 "/communities/ithaca-1.jpg",
 "/communities/ithaca-2.jpg",
 "/communities/ithaca-3.jpg"
 ],
 summary: "One of the largest cohousing ecovillages: three sequential neighborhoods of duplex homes, shared common houses, working farms, and 80%+ of the land kept as green space.",
 businessModel: "Residents own or co-own homes in cohousing co-ops. Shared gardens, work teams (about 2–4 hours/week), on-site farms and office space. Not income-sharing. Homes are privately financed within the cooperative framework.",
 foundingProcess: "A 1991 envisioning retreat launched the project. Land (a former dairy farm) was purchased in 1992. FROG (New York’s first cohousing neighborhood) finished in 1996–97 (30 duplex homes). SONG followed in 2006; TREE construction began 2012–13. Sequential self-development rather than a single master builder for every phase.",
 governance: "Consensus or dynamic governance inside each neighborhood, plus a Village Association that coordinates all three. Work organized through teams.",
 website: "https://ecovillageithaca.org/",
 timeline: [
 {
 year: "1991",
 event: "Envisioning retreat; EcoVillage at Ithaca project begins."
 },
 {
 year: "1992",
 event: "Land purchased west of downtown Ithaca."
 },
 {
 year: "1996–97",
 event: "FROG neighborhood completed, first cohousing in New York State."
 },
 {
 year: "2006",
 event: "SONG neighborhood completed."
 },
 {
 year: "2012–13",
 event: "TREE neighborhood construction and first move-ins."
 }
 ]
 },
 {
 slug: "zegg",
 name: "ZEGG",
 location: "Bad Belzig, Brandenburg",
 region: "Brandenburg, Germany",
 country: "Germany",
 foundedYear: 1991,
 foundedLabel: "1991",
 members: 100,
 membersLabel: "~100 residents (including children)",
 acres: 37,
 acresLabel: "15 hectares (~37 acres)",
 legalStructure: "ZEGG gGmbH (nonprofit limited company; Zentrum für experimentelle Gesellschaftsgestaltung). The gGmbH, recognized as nonprofit in 2015, holds the site and hosts the seminar business. Members live on the former GDR intelligence training ground as a residential community using sociocracy, not as shareholders of private lots.",
 legalCategory: "Nonprofit gGmbH",
 stillActive: true,
 images: [
 "/communities/zegg-land.jpg",
    "/communities/zegg-people.jpg",
 "/communities/zegg-4.jpg",
 "/communities/zegg-5.jpg",
 "/communities/zegg-3.jpg",
 "/communities/zegg-1.jpg",
 "/communities/zegg-2.jpg"
 ],
 summary: "Brandenburg seminar village since 1991, on a former Stasi training ground outside Bad Belzig. ZEGG gGmbH holds the 15 hectares. About 100 people live, cook, and teach there. The public door is the seminar and festival programme. The Forum is the social technology this place is known for. You book a course or ask about membership. You do not buy the site.",
 businessModel: "Seminar and festival centre (catering, accommodation, courses) is the main income. Members also garden, maintain the site, or work as self-employed people. Community work is expected. Woodchip heating and a constructed wetland are part of the ecological plant.",
 foundingProcess: "Ideas associated with Dieter Duhm and Sabine Lichtenfels’s earlier German experiments fed the project. In 1991 the group bought a 15-hectare former Stasi reconnaissance training centre near Belzig for 2.1 million D-Marks and founded ZEGG. A constructed wetland went in in 1992. From about 2001 the seminar centre became the economic core. The company gained nonprofit (gGmbH) status in 2015.",
 governance: "Sociocracy: self-organizing teams, a management circle for finance, and a Visionsrat (vision board) for longer-term community interest. Important social and money decisions still aim at consensus.",
 website: "https://www.zegg.de/en/",
 timeline: [
 {
 year: "1991",
 event: "15-hectare former GDR site purchased; ZEGG founded."
 },
 {
 year: "1992",
 event: "Constructed-wetland sewage system built."
 },
 {
 year: "2001–",
 event: "Seminar centre becomes the community’s main enterprise."
 },
 {
 year: "2015",
 event: "Recognized as a nonprofit gGmbH."
 },
 {
 year: "Present",
 event: "About 100 people live and teach on 15 hectares outside Bad Belzig."
 }
 ]
 },
 {
 slug: "los-angeles-eco-village",
 name: "Los Angeles Eco-Village",
 location: "Bimini Place, Koreatown, Los Angeles",
 region: "California, USA",
 country: "United States",
 foundedYear: 1993,
 foundedLabel: "1 January 1993",
 members: 40,
 membersLabel: "~40 intentional community members (~500 in the two blocks)",
 acres: null,
 acresLabel: "Two urban blocks (~50 community-controlled units)",
 legalStructure: "Hybrid of three nonprofits. CRSP / LA Eco-Village Institute (501(c)(3) developer and revolving loan fund). Urban Soil–Tierra Urbana (limited-equity housing cooperative). Beverly-Vermont Community Land Trust (owns the land under the co-op buildings). “Los Angeles Eco-Village” is a place name.",
 legalCategory: "Limited-equity co-op + CLT",
 stillActive: true,
 images: [
 "/communities/los-angeles-eco-village-land.jpg",
    "/communities/los-angeles-eco-village-people.jpg",
 "/communities/laev-1.jpg",
 "/communities/laev-4.jpg",
 "/communities/laev-2.jpg",
 "/communities/laev-3.jpg"
 ],
 summary: "An urban retrofit: two Koreatown blocks turned into a demonstration of permanently affordable, ecological neighborhood living after the 1992 Los Angeles uprising.",
 businessModel: "Limited-equity co-op keeps housing affordable. Ecological Revolving Loan Fund finances acquisition and green retrofits. Food Lobby (produce and bulk foods), bike workshop, learning garden, and committee labor rather than a single village enterprise.",
 foundingProcess: "CRSP (founded 1980) chose the neighborhood in late 1992. The Eco-Village launched 1 January 1993. Apartment buildings were acquired in the 1990s and 2011. In 2012, buildings transferred to the limited-equity co-op and land to the community land trust.",
 governance: "Co-op committees plus nonprofit boards. Members are expected to serve on committees. Place-based rather than a gated campus.",
 website: "https://laecovillage.org/",
 timeline: [
 {
 year: "1980",
 event: "CRSP founded as a community-development nonprofit."
 },
 {
 year: "1992–93",
 event: "Neighborhood chosen after the uprising; Eco-Village launches January 1, 1993."
 },
 {
 year: "1990s–2011",
 event: "Apartment buildings acquired with the revolving loan fund."
 },
 {
 year: "2012",
 event: "Buildings to USTU co-op; land to Beverly-Vermont Community Land Trust."
 }
 ]
 },
 {
 slug: "earthaven",
 name: "Earthaven Ecovillage",
 location: "Black Mountain, North Carolina",
 region: "North Carolina, USA",
 country: "United States",
 foundedYear: 1994,
 foundedLabel: "1994",
 members: 100,
 membersLabel: "~75 adults + ~25 children",
 acres: 329,
 acresLabel: "329 forested mountain acres",
 legalStructure: "Hybrid. Common land owned by a homeowners association. Residential “Pods” (neighborhoods) organized as housing cooperatives or LLCs that own their parcels. Educational work through the nonprofit School of Integrated Living. Covenants, Conditions & Restrictions govern sustainability practice.",
 legalCategory: "HOA + pods",
 stillActive: true,
 images: [
 "/communities/earthaven-land.jpg",
    "/communities/earthaven-people.jpg",
 "/communities/earthaven-1.jpg",
 "/communities/earthaven-3.jpg",
 "/communities/earthaven-2.jpg",
 "/communities/earthaven-4.jpg",
 "/communities/earthaven-5.jpg"
 ],
 summary: "After Hurricane Helene, NPR’s Climate Solutions Week used Earthaven as the case for neighbor-knowing-neighbor resilience: hydro briefly failed, backup solar came up.",
 businessModel: "Residents finance their own housing, food, and livelihoods. Natural building, renewable energy, organic farms, and education programs. Joining Fee and Commons Fee; 1,500 hours of community service over the first ten years.",
 foundingProcess: "The group purchased 329 acres in 1994 as a living laboratory for sustainable culture. They built Council Hall, roads, constructed wetlands, and sequential neighborhoods (Pods). The community still describes itself as an aspiring ecovillage under construction.",
 governance: "Modified consensus. Council plus guilds and committees. HOA board for common land. Each Pod defines membership in its own legal documents.",
 website: "https://www.earthaven.org/",
 timeline: [
 {
 year: "1994",
 event: "Land purchased; Earthaven founded."
 },
 {
 year: "1990s–2000s",
 event: "Council Hall, roads, off-grid systems, first neighborhoods."
 },
 {
 year: "Present",
 event: "About 100 residents across pods on 329 acres."
 }
 ]
 },
 {
 slug: "konohana",
 name: "Konohana Family",
 location: "Fujinomiya, Shizuoka (foot of Mount Fuji)",
 region: "Shizuoka, Japan",
 country: "Japan",
 foundedYear: 1994,
 foundedLabel: "21 March 1994",
 members: 100,
 membersLabel: "~90–100 people living as one household",
 acres: 44,
 acresLabel: "~16–18 hectares of farmland (~40–44 acres)",
 legalStructure: "A one-household agricultural community. Members live as one family with one wallet (full income- and asset-sharing). Japanese labour and tax law did not fit a single communal employer, so after negotiation each member is registered as a sole proprietor while the community still pools money. NPO Green Grass, founded by members, handles visits, education, and ecological programs. Farmland is a mix of land they work (some used by arrangement with local owners). They reject both “cult” and strict “ecovillage” labels.",
 legalCategory: "One-household community",
 stillActive: true,
 images: [
 "/communities/konohana-land.jpg",
 "/communities/konohana-2.jpg",
 "/communities/konohana-1.jpg",
 "/communities/konohana-3.jpg"
 ],
 summary: "A Mount Fuji farm where about a hundred unrelated people live as one family, share one wallet, grow most of their food, and legally sit as sole proprietors plus an NPO rather than a co-op.",
 businessModel: "Pesticide-free vegetables, rice, and fruit (200+ varieties) for the table, a daily farmers’ market, two cafés (including Lotus Land), soy foods (tofu, soymilk, miso, soy sauce), bakery, enzyme drinks, and handmade goods. They report growing on the order of 99% of the food they eat. Courses, volunteer stays, and natural-therapy programs bring guests. All cash goes into the one wallet.",
 foundingProcess: "People gathered in Komaki, Aichi, around Isadon (also called Jiiji), an interior designer whose house-consultations became a spiritual practice. Twenty people (15 adults and 5 children) moved to an old house in Fujinomiya on the spring equinox, 21 March 1994, as Konohana Farm, later renamed Konohana Family. The aim was a “Village of Bodhisattvas” at the foot of Fuji, practice rather than talk. Membership grew toward 80–100 over three decades.",
 governance: "Daily consensus meetings as one family rather than a board of lot owners. Isadon is the acknowledged spiritual elder; operational decisions are collective. The sole-proprietor workaround and NPO Green Grass are the outward legal face; inward life is one household.",
 website: "https://konohana-family.org/en/",
 timeline: [
 {
 year: "Pre-1994",
 event: "Circle gathers in Komaki, Aichi, around Isadon’s house practice."
 },
 {
 year: "1994",
 event: "20 people found Konohana Farm in Fujinomiya on 21 March."
 },
 {
 year: "Later",
 event: "Renamed Konohana Family; one-wallet economy; NPO Green Grass for outreach."
 },
 {
 year: "Present",
 event: "About 100 people; farms, cafés, and a sole-proprietor legal workaround."
 }
 ]
 },
 {
 slug: "oaec",
 name: "Sowing Circle · OAEC",
 location: "Occidental, Sonoma County, California",
 region: "California, USA",
 country: "United States",
 foundedYear: 1994,
 foundedLabel: "July 1994",
 members: 10,
 membersLabel: "Small closed residential community (~original 7 + partners/children)",
 acres: 80,
 acresLabel: "80 acres",
 legalStructure: "Classic hybrid. Sowing Circle LLC owns the land and buildings (intentional community). Occidental Arts & Ecology Center is a separate 501(c)(3) that runs education, research, and advocacy on the same site. An Organic Agricultural Easement (with Sonoma Land Trust) protects gardens and orchards in perpetuity.",
 legalCategory: "LLC + 501(c)(3)",
 stillActive: true,
 images: [
 "/communities/oaec-land.jpg",
    "/communities/oaec-people.jpg",
 "/communities/oaec-2.jpg",
 "/communities/oaec-3.jpg",
 "/communities/oaec-5.jpg",
 "/communities/oaec-6.jpg",
 "/communities/oaec-1.jpg",
 "/communities/oaec-4.jpg"
 ],
 summary: "A closed residential LLC living on the same 80 acres as a public ecology education center, land taken off the speculative market by design, with one of the country’s first organic agricultural easements.",
 businessModel: "Nonprofit programs in permaculture, biointensive horticulture, conservation hydrology, and community organizing. Residents share cooking, maintenance, and land care. Some work for the Center; others work off-site. Membership is not open (zoning and carrying capacity).",
 foundingProcess: "Seven friends bought the site in July 1994, formed Sowing Circle LLC, immediately founded the nonprofit OAEC, and wrote an Organic Agricultural Easement with the previous landowner and Sonoma Land Trust. Residential ownership and the educational mission were legally separated but mutually supporting.",
 governance: "Consensus inside Sowing Circle. Nonprofit board for OAEC. Shares are not linked to market land value.",
 website: "https://oaec.org/",
 timeline: [{
 year: "1994",
 event: "Land purchase; Sowing Circle LLC and OAEC founded; organic easement written."
 }, {
 year: "1990s–present",
 event: "Gardens, wildlands preserve, and education programs developed on the same land."
 }]
 },
 {
 slug: "tamera",
 name: "Tamera",
 location: "Monte do Cerro, Relíquias, Alentejo",
 region: "Alentejo, Portugal",
 country: "Portugal",
 foundedYear: 1995,
 foundedLabel: "1995",
 members: 200,
 membersLabel: "~170–250 coworkers, students, and children",
 acres: 335,
 acresLabel: "335 acres (originally ~140 hectares)",
 legalStructure: "Communitarian ownership of a not-for-profit social enterprise. Two Portuguese associations (G.R.A.C.E. (Associação Grupo para a Reconciliação em Áreas de Crise e Educação) and Associação para um Mundo Humanitário) own equal shares of ILOS, Peace Research Center, Lda., which holds the land and infrastructure. Community members belong to one of the associations. No individual can buy, sell, or transfer a share of Tamera.",
 legalCategory: "Associations + Lda",
 stillActive: true,
 images: [
 "/communities/tamera-land.jpg",
    "/communities/tamera-people.jpg",
 "/communities/tamera-1.jpg",
 "/communities/tamera-3.jpg",
 "/communities/tamera-2.jpg",
 "/communities/tamera-4.jpg"
 ],
 summary: "A peace-research village in the Alentejo whose land is locked inside a company owned 50/50 by two associations, so no resident can sell the place out from under the others.",
 businessModel: "ILOS runs the site, lodging, and course administration as a not-for-profit. The associations finance education, ecology, and global peacework through seminars, donations, and grants. Water-retention landscape, solar research, publishing (Verlag Meiga), and guest programs are the visible enterprises.",
 foundingProcess: "Dieter Duhm, Sabine Lichtenfels, and Charly Rainer Ehrenpreis left conventional careers in 1978. A three-year social experiment with about fifty people ran in the Black Forest from 1983. After further European projects they bought undeveloped Monte do Cerro in 1995 with private donations; the name “Tamera” came to Lichtenfels in meditation at a spring (an old word for “land of water”). Lakes and a water-retention landscape followed on former dry hills.",
 governance: "Each resident is a member of one of the two associations, which jointly own ILOS. No personal property rights in land or infrastructure. Daily coordination includes research projects, the Institute for Global Peacework, and community forums rather than a town-meeting co-op.",
 website: "https://www.tamera.org",
 timeline: [
 {
 year: "1978",
 event: "Founders leave conventional work to start a peace-research experiment in Germany."
 },
 {
 year: "1983–86",
 event: "Three-year social experiment with ~50 people in the Black Forest."
 },
 {
 year: "1995",
 event: "Monte do Cerro purchased; Tamera founded in the Alentejo."
 },
 {
 year: "2007",
 event: "GRACE Foundation established to fund peace education."
 },
 {
 year: "Present",
 event: "Two associations own ILOS Lda.; ~200 people on 335 acres."
 }
 ]
 },
 {
 slug: "dancing-rabbit",
 name: "Dancing Rabbit Ecovillage",
 location: "Rutledge, Missouri",
 region: "Missouri, USA",
 country: "United States",
 foundedYear: 1993,
 foundedLabel: "1993 (Stanford group); land 1 October 1997",
 members: 40,
 membersLabel: "Grew from founders to ~40 by 2007; membership fluctuates",
 acres: 280,
 acresLabel: "280 acres",
 legalStructure: "Community Land Trust. Land owned by Dancing Rabbit Land Trust (501(c)(2) nonprofit). Education and demonstration via the Center for Sustainable and Cooperative Culture (501(c)(3)). Members lease small residential plots and own their buildings, which can be sold to other members. Land cannot be speculated.",
 legalCategory: "Community Land Trust",
 stillActive: true,
 images: [
 "/communities/dancing-rabbit-land.jpg",
    "/communities/dancing-rabbit-people.jpg",
 "/communities/dancing-rabbit-3.jpg",
 "/communities/dancing-rabbit-1.jpg",
 "/communities/dancing-rabbit-4.jpg",
 "/communities/dancing-rabbit-2.jpg",
 "/communities/dancing-rabbit-5.jpg"
 ],
 summary: "A Missouri prairie village designed so land stays permanently affordable: a land trust underneath privately built natural homes, with ecological covenants for everyone who lives there.",
 businessModel: "No land buy-in. Monthly lease fees support the trust (residential leases historically about $25/month for a tiny plot). Members build small natural homes, run micro-enterprises, and host education. Buildings can be sold to other members; the land cannot.",
 foundingProcess: "Mid-1990s vision of an “eco-town” of up to 1,000 people. The group found 280 acres with farm buildings, borrowed from members and family, and purchased for $190,000 on 1 October 1997. Early years in a rented double-wide; Common House by 2004; about 40 members and 16 buildings by the 10th anniversary.",
 governance: "Consensus, with committees and an Oversight Team. Land-trust board (members and non-members) for major land and finance decisions. Village life is run by the membership.",
 website: "https://www.dancingrabbit.org/",
 timeline: [
 {
 year: "1993",
 event: "Three Stanford students start the Dancing Rabbit group at Synergy co-op."
 },
 {
 year: "1997",
 event: "280 acres purchased for $190,000 on 1 October; land trust formed."
 },
 {
 year: "2004",
 event: "Common House completed; about 20 members."
 },
 {
 year: "2007",
 event: "Tenth anniversary: ~40 members, 16 new buildings."
 }
 ]
 },
 {
 slug: "sieben-linden",
 name: "Sieben Linden",
 location: "Poppau, Beetzendorf, Saxony-Anhalt",
 region: "Saxony-Anhalt, Germany",
 country: "Germany",
 foundedYear: 1997,
 foundedLabel: "1997 (project 1989)",
 members: 150,
 membersLabel: "~150 inhabitants (aiming toward 300)",
 acres: 247,
 acresLabel: "More than 100 hectares (~250 acres)",
 legalStructure: "Settlement and housing cooperatives. An “Ecovillage housing cooperative” was formed in 1993 (later Siedlungsgenossenschaft / housing cooperative). The cooperative owns the land (now more than 100 hectares of woods, fields, gardens, and a small building zone) so members are co-owners of the commons rather than freehold lot holders. Neighborhoods (“Nachbarschaften”) occupy shared straw-bale, cob, and timber buildings. Not income-sharing: each adult finances their own life and buys cooperative shares.",
 legalCategory: "Housing cooperative",
 stillActive: true,
 images: [
 "/communities/sieben-linden-land.jpg",
    "/communities/sieben-linden-people.jpg",
 "/communities/sieben-linden-3.jpg",
 "/communities/sieben-linden-1.jpg",
 "/communities/sieben-linden-2.jpg",
 "/communities/sieben-linden-4.jpg",
 "/communities/sieben-linden-5.jpg"
 ],
 summary: "Altmark cooperative village since 1997, talks from 1989. Straw-bale neighbourhoods on more than 100 hectares the Siedlungsgenossenschaft holds in common. About 150 people, paced toward 300. Strohpolis is the street this place is known for. The public door is the guesthouse and seminar programme. You visit, then buy co-op shares. You do not buy a freehold lot.",
 businessModel: "Individual livelihoods plus a seminar and guesthouse economy. Members buy cooperative shares (co-ownership of land) and pay into housing. Gardens, a wood workshop, and education programs sit beside off-site jobs. Growth is paced so the village does not leap to its 300-person ceiling.",
 foundingProcess: "Talks began in 1989, with roots in the Gorleben anti-nuclear resistance. In 1993 the group bought a project centre in Groß Chüden and formed a housing cooperative. In 1997 they purchased the Sieben Linden site; some of the Groß Chüden residents moved a few months later and renovated an old farm into the community and seminar building. Infrastructure (paths, wells, plant treatment, hedges) was added from 1999. The holding has grown from about 25 hectares to more than 100.",
 governance: "Cooperative membership plus neighborhood-level decisions. The village sits inside the municipality of Beetzendorf; a project member has served on the municipal council. Consensus culture with committees rather than a single director.",
 website: "https://siebenlinden.org/en/",
 timeline: [
 {
 year: "1989",
 event: "Founding circle begins planning a self-sufficient ecological village."
 },
 {
 year: "1993",
 event: "Project centre at Groß Chüden; housing cooperative formed."
 },
 {
 year: "1997",
 event: "Sieben Linden land purchased; pioneers move onto the farm."
 },
 {
 year: "1999–",
 event: "Roads, wells, plant wastewater, and neighborhoods built out."
 },
 {
 year: "Present",
 event: "About 150 people on 100+ hectares of forest, fields, and building land."
 }
 ]
 },
 {
 slug: "cloughjordan",
 name: "Cloughjordan Ecovillage",
 location: "Cloughjordan, County Tipperary",
 region: "Tipperary, Ireland",
 country: "Ireland",
 foundedYear: 1999,
 foundedLabel: "1999 (first residents 2009)",
 members: 130,
 membersLabel: "~130 residents in ~55 homes",
 acres: 67,
 acresLabel: "67 acres",
 legalStructure: "Sustainable Projects Ireland CLG (a company limited by guarantee, run as an educational charity on co-operative principles) owns the 67-acre site and the shared infrastructure (roads, district heating, amenities). Members of the company develop and occupy individual eco-homes on serviced sites (about 55 of a planned 114–130 have been built). SPI is the land-and-infrastructure company, with every member having a say.",
 legalCategory: "Company limited by guarantee",
 stillActive: true,
 images: [
 "/communities/cloughjordan-land.jpg",
    "/communities/cloughjordan-people.jpg",
 "/communities/cloughjordan-1.jpg",
 "/communities/cloughjordan-4.jpg",
 "/communities/cloughjordan-2.jpg",
 "/communities/cloughjordan-3.jpg"
 ],
 summary: "Ireland’s first ecovillage: a charity company owns the 67 acres and the district heating, while households build their own low-carbon homes on the edge of an existing market town.",
 businessModel: "Members paid deposits to buy the land and service the sites; they then finance their own houses. A community farm (CSA) and a green enterprise centre sit on the land. District heating is biomass- and solar-fed. Adult members pledge community work (historically about 100 hours/year) and pay service charges. Education, tours, and events are part of the charity’s mission.",
 foundingProcess: "Gavin Harte, Gregg Allen, and other environmental activists conceived the project in the late 1990s. Sustainable Projects Ireland was incorporated in 1999. After looking at several locations they chose a 67-acre field on the edge of Cloughjordan (identified around 2003; purchase completed in the mid-2000s). Outline planning for 114 homes and live-work units followed. The community farm started in 2008; the first residents moved in in December 2009. Later years included a native woodland, an amphitheatre opened by President Michael D. Higgins, and a measured ecological footprint of 2 global hectares, Ireland’s lowest recorded community figure.",
 governance: "Membership of the CLG, with decisions by mutual agreement and self-organizing groups. A board of directors oversees the company. Homes and livelihoods stay with households; the commons (land, heat, farm partnership) stay with SPI.",
 website: "https://www.thevillage.ie/",
 timeline: [
 {
 year: "1999",
 event: "Sustainable Projects Ireland incorporated to develop an ecovillage."
 },
 {
 year: "2003–05",
 event: "67-acre site at Cloughjordan chosen and acquired."
 },
 {
 year: "2008–09",
 event: "Community farm begins; first residents move in (December 2009)."
 },
 {
 year: "2013–14",
 event: "Ecological footprint measured at 2 global hectares, Ireland’s lowest."
 },
 {
 year: "Present",
 event: "About 130 people in ~55 homes; further sites still to be built."
 }
 ]
 },
 {
 slug: "currumbin",
 name: "The Ecovillage at Currumbin",
 location: "Currumbin Valley, Gold Coast hinterland",
 region: "Queensland, Australia",
 country: "Australia",
 foundedYear: 2006,
 foundedLabel: "2006 (first home; conceived late 1990s)",
 members: 450,
 membersLabel: "~350 adults + ~100 children on 147 lots",
 acres: 270,
 acresLabel: "270 acres (110 hectares); 80% open space",
 legalStructure: "Queensland body corporate under the Body Corporate and Community Management Act. A Principal Body Corporate plus four subsidiary body corporates for sub-regions (Creek Ecohamlets, Valley Terraces, Highlands, and related stages) manage commons, design covenants, and shared infrastructure. Lots are freehold, buying and selling is treated as ordinary freehold. Developer Landmatters led a site-led subdivision rather than a commune. Contrast with Crystal Waters (also a Queensland body corporate, but grown from a 1981 land-settlement co-op): Currumbin is a later, larger, developer-built ecovillage with the same legal family and tighter building codes.",
 legalCategory: "Body corporate",
 stillActive: true,
 images: [
 "/communities/currumbin-land.jpg",
 "/communities/currumbin-3.jpg",
 "/communities/currumbin-4.jpg",
 "/communities/currumbin-2.jpg",
 "/communities/currumbin-1.jpg"
 ],
 summary: "A 147-lot hinterland ecovillage on 270 acres: freehold homes, a principal body corporate and four subsidiaries, rainwater and recycled sewerage, and 80% of the land kept as open space.",
 businessModel: "Residents buy lots and finance their own houses under a strict sustainable-building code (most report little or no electricity bills). Village-centre businesses include GROUND produce, a café, a bath house, and health rooms. A shared garden supplies OzHarvest. The RRR Centre handles recycling. Homes in later stages are 100% rainwater-self-sufficient; earlier stages share a central wastewater plant. More than 33 design and sustainability awards. Not income-sharing.",
 foundingProcess: "Friends conceived the project in the late 1990s after worldwide research. The site had been rainforest logging country, then bananas and dairy; a previous owner planted 25 acres of hoop pine in the 1970s. Developer Landmatters took a custodian role, signed a Memorandum of Understanding with the Kombumerri Gold Coast People before construction, and opened an Interpretive Centre in December 2005 (Premier Peter Beattie). First home 2006. About 98% of planned homes are now built. Queensland used it as an Energywise/Waterwise demonstration.",
 governance: "Elected principal body-corporate committee plus four subsidiary committees. Design review before building. By-laws cover energy, water, materials, and landscape. No extra restriction on selling a home beyond ordinary freehold and the covenants that run with the lot.",
 website: "https://theecovillage.com.au/",
 timeline: [
 {
 year: "Late 1990s",
 event: "Friends and Landmatters begin an 11-year research and design process."
 },
 {
 year: "2005",
 event: "Interpretive Centre opened by the Queensland Premier (December)."
 },
 {
 year: "2006",
 event: "First home completed."
 },
 {
 year: "2016",
 event: "Reduce/Reuse/Recycle Centre completed."
 },
 {
 year: "Present",
 event: "About 450 people on 147 lots; ~98% of homes built; 80% of 270 acres open."
 }
 ]
 },
...centralAmericaCommunities,
  ...northAmericaCommunities,
  ...europeCommunities,
  ...southAmericaCommunities,
  ...newCountryCommunities,
  ...mexicoCommunities,
  ...africaCommunities,
  ...asiaCommunities,
  ...chinaCommunities,
  ...russiaCommunities,
  ...usaCanadaCommunities,
  ...usaMoreCommunities,
  ...polandCommunities,
  ...volunteerBatchCommunities,
  ...formerCommunities,
  ...formerMoreCommunities,
  ...formerClosedCommunities,
  ...livingMoreCommunities,
  ...livingBatch2Communities,
  ...livingBatch3Communities,
  ...livingBatch4Communities,
  ...livingBatch5Communities,
  ...livingBatch6Communities,
  ...livingBatch7Communities,
  ...livingBatch8Communities,
  ...livingBatch9Communities,
  ...livingBatch10Communities,
  ...livingBatch11Communities,
  ...livingBatch12Communities,
  ...livingBatch13Communities,
  ...livingBatch14Communities,
  ...livingBatch15Communities,
  ...livingBatch16Communities,
  ...livingBatch17Communities,
  ...livingBatch18Communities,
  ...livingBatch19Communities,
  ...livingBatch20Communities,
  ...livingBatch21Communities,
  ...livingBatch22Communities,
  ...livingBatch23Communities.filter(
    (row) =>
      row.slug !== "rancho-la-puerta" &&
      row.slug !== "blackberry-farm" &&
      row.slug !== "bambu-indah" &&
      row.slug !== "barrocal" &&
      row.slug !== "heckfield-place" &&
      row.slug !== "hacienda-urubamba",
  ),
  ...livingBatch24Communities,
  ...livingBatch25Communities,
  ...livingBatch26Communities,
  ...livingBatch27Communities,
  ...livingBatch28Communities,
  ...livingBatch29Communities,
  ...livingBatch30Communities,
  ...livingBatch31Communities,
  ...livingBatch32Communities,
  ...livingBatch33Communities,
  ...livingGlampingCommunities,
  ...sustainableEcovillageCommunities,
  ...maitreyaEcovillageCommunities,
];

export const communityCount = communities.length;

export type SortKey =
 | "random"
 | "added"
 | "founded"
 | "founded-asc"
 | "members-desc"
 | "members-asc"
 | "visit-desc"
 | "join-desc"
 | "understood-desc"
 | "understood-asc";

export type ViewMode = "cards" | "table";
export type ActiveFilter = "all" | "active" | "inactive";
export type VolunteerFilter = "all" | "yes" | "no";

export const sortOptions: { value: SortKey; label: string }[] = [
 { value: "random", label: "Random" },
 { value: "added", label: "Recently added" },
 { value: "visit-desc", label: "Easiest to visit" },
 { value: "join-desc", label: "Easiest to join" },
 { value: "understood-desc", label: "Best understood" },
 { value: "understood-asc", label: "Most mysterious" },
 { value: "founded", label: "Founded (newest first)" },
 { value: "founded-asc", label: "Founded (oldest first)" },
 { value: "members-desc", label: "Members (most first)" },
 { value: "members-asc", label: "Members (fewest first)" },
];

export const legalCategories = allLegalForms();

export type FormUsage = {
 form: string;
 family: string;
 group: FormBrowseGroup;
 count: number;
};

export type FormUsageGroup = {
 label: FormBrowseGroup;
 forms: FormUsage[];
};

/** Count how many communities in `list` carry each legal form. */
export function formUsage(list: Community[] = communities): FormUsage[] {
 const counts = new Map<string, number>();
 for (const community of list) {
 for (const form of legalFormsFor(community.slug)) {
 counts.set(form, (counts.get(form) ?? 0) + 1);
 }
 }
 return legalCategories.map((form) => ({
 form,
 family: guideForForm(form).family,
 group: browseGroupForForm(form),
 count: counts.get(form) ?? 0,
 }));
}

export function formUsageByGroup(list: Community[] = communities): FormUsageGroup[] {
 const rows = formUsage(list);
 return formBrowseGroupOrder
.map((label) => ({
 label,
 forms: rows
.filter((row) => row.group === label)
.sort((a, b) => b.count - a.count || a.form.localeCompare(b.form)),
 }))
.filter((group) => group.forms.length > 0);
}

export const regions = Array.from(new Set(communities.map((c) => c.region))).sort((a, b) =>
 a.localeCompare(b),);

const SLUG_ALIASES: Record<string, string> = {
  "anja-community-reserve": "anja",
  "anja-reserve": "anja",
  "anja-community": "anja",
};

export function getCommunity(slug: string) {
  const key = SLUG_ALIASES[slug] ?? slug;
  return communities.find((c) => c.slug === key);
}

export function randomCommunity(exceptSlug?: string | null) {
  const pool = communities.filter((row) => row.slug !== exceptSlug && !isGlampingListing(row.slug));
  const list = pool.length > 0 ? pool : communities.filter((row) => !isGlampingListing(row.slug));
  if (list.length === 0) return undefined;
  return list[Math.floor(Math.random() * list.length)];
}

export type VillageRef = {
  slug: string;
  name: string;
  location: string;
};

export function villageRef(slug: string): VillageRef | null {
  const community = getCommunity(slug);
  if (!community) return null;
  return { slug: community.slug, name: community.name, location: community.location };
}

export function searchVillages(query: string, limit = 8): VillageRef[] {
  const q = query.trim().toLowerCase();
  return communities
    .map((community) => {
      const name = community.name.toLowerCase();
      const hay = `${name} ${community.location} ${community.region} ${community.country} ${community.slug}`.toLowerCase();
      const score = !q ? 1 : name.startsWith(q) ? 4 : name.includes(q) ? 3 : hay.includes(q) ? 2 : 0;
      return { community, score };
    })
    .filter((row) => row.score > 0)
    .sort((a, b) => b.score - a.score || a.community.name.localeCompare(b.community.name))
    .slice(0, limit)
    .map((row) => ({
      slug: row.community.slug,
      name: row.community.name,
      location: row.community.location,
    }));
}

export function villageSlugFromText(text: string): string | null {
  const match = text.match(/\/communities\/([a-z0-9-]+)/i);
  if (!match?.[1]) return null;
  return villageRef(match[1])?.slug ?? null;
}

export function villageThumbSrc(src: string) {
 if (!src.startsWith("/communities/")) return src;
 const name = src.slice("/communities/".length);
 if (!name || name.startsWith("thumbs/")) return src;
 return `/communities/thumbs/${name}`;
}

export function villageThumbs(community: Community) {
 const pick = cardPhotos[community.slug];
 const satellite =
 pick?.satellite ??
 community.images.find((src) => src.includes("-land.")) ??
 community.images[0] ??
 "";
 const photo =
 pick?.photo ?? community.images.find((src) => src !== satellite) ?? satellite;
 return {
 satellite: villageThumbSrc(satellite),
 photo: villageThumbSrc(photo),
 satelliteFull: satellite,
 photoFull: photo,
 };
}

export type VillagePhoto = {
 slug: string;
 src: string;
};

/** Ground-level stills from every village page, satellite / land tiles excluded. */
export function nonSatellitePhotos(): VillagePhoto[] {
 const out: VillagePhoto[] = [];
 const seen = new Set<string>();
 for (const community of communities) {
  const satellite = villageThumbs(community).satelliteFull;
  for (const src of community.images) {
   if (!src || src === satellite || src.includes("-land.")) continue;
   if (seen.has(src)) continue;
   seen.add(src);
   out.push({ slug: community.slug, src });
  }
 }
 return out;
}

export function neighbors(slug: string) {
 const i = communities.findIndex((c) => c.slug === slug);
 if (i < 0) return { prev: undefined, next: undefined };
 return {
 prev: i > 0 ? communities[i - 1]: undefined,
 next: i < communities.length - 1 ? communities[i + 1]: undefined,
 };
}

export type RelatedCommunity = Community & { sharedForms: string[] };

export function relatedByLegal(slug: string): RelatedCommunity[] {
 const current = getCommunity(slug);
 if (!current) return [];
 return communities
.filter((c) => c.slug !== slug)
.map((c) => ({ community: c, shared: sharedLegalForms(slug, c.slug) }))
.filter((row) => row.shared.length > 0)
.sort((a, b) =>
 b.shared.length - a.shared.length || a.community.name.localeCompare(b.community.name),)
.slice(0, 8)
.map((row) => ({ ...row.community, sharedForms: row.shared }));
}

function shuffleSeed(seed: number): () => number {
 let a = (Math.floor(seed * 0xffffffff) || 1) >>> 0;
 return () => {
 a = (a + 0x6d2b79f5) | 0;
 let t = Math.imul(a ^ (a >>> 15), 1 | a);
 t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
 return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
 };
}

export function shuffleWithSeed<T>(list: T[], seed = 1): T[] {
 const copy = [...list];
 const rng = shuffleSeed(seed);
 for (let i = copy.length - 1; i > 0; i -= 1) {
  const j = Math.floor(rng() * (i + 1));
  const tmp = copy[i];
  copy[i] = copy[j]!;
  copy[j] = tmp!;
 }
 return copy;
}

/** Position in the atlas as villages were added. Later index = more recently added. */
const addedIndexBySlug = new Map(communities.map((community, index) => [community.slug, index]));

function addedIndex(community: Community): number {
 return addedIndexBySlug.get(community.slug) ?? -1;
}

export function sortCommunities(list: Community[], sort: SortKey, seed = 1): Community[] {
 const copy = [...list];
 if (sort === "random") {
 return shuffleWithSeed(copy, seed);
 }
 copy.sort((a, b) => {
 const aYear = Number(a.foundedYear);
 const bYear = Number(b.foundedYear);
 switch (sort) {
 case "added":
 return addedIndex(b) - addedIndex(a) || a.name.localeCompare(b.name);
 case "members-desc":
 return b.members - a.members || a.name.localeCompare(b.name);
 case "members-asc":
 return a.members - b.members || a.name.localeCompare(b.name);
 case "founded-asc":
 return aYear - bYear || a.name.localeCompare(b.name);
 case "visit-desc":
 return visitJoinFor(b.slug).visit - visitJoinFor(a.slug).visit || a.name.localeCompare(b.name);
 case "join-desc":
 return visitJoinFor(b.slug).join - visitJoinFor(a.slug).join || a.name.localeCompare(b.name);
 case "understood-desc":
 return understoodFor(b.slug) - understoodFor(a.slug) || a.name.localeCompare(b.name);
 case "understood-asc":
 return understoodFor(a.slug) - understoodFor(b.slug) || a.name.localeCompare(b.name);
 case "founded":
 return bYear - aYear || a.name.localeCompare(b.name);
 default:
 return bYear - aYear || a.name.localeCompare(b.name);
 }
 });
 return copy;
}

export type AtlasFilters = {
 active: ActiveFilter;
 legal: string;
 region: string;
 volunteer?: VolunteerFilter;
};

export function filterCommunities(list: Community[], filters: AtlasFilters): Community[] {
 return list.filter((c) => {
 if (filters.active === "active" && !c.stillActive) return false;
 if (filters.active === "inactive" && c.stillActive) return false;
 if (filters.legal !== "all" && !legalFormsFor(c.slug).includes(filters.legal)) return false;
 if (filters.region !== "all" && c.region !== filters.region) return false;
 if (filters.volunteer === "yes" && !hasVolunteerProgram(c.slug)) return false;
 if (filters.volunteer === "no" && hasVolunteerProgram(c.slug)) return false;
 return true;
 });
}

export const ATLAS_PAGE_SIZE = 10;

export type PageWindow<T> = {
 items: T[];
 page: number;
 pages: number;
 from: number;
 to: number;
 total: number;
};

/** Page 1 is omitted from the URL so the atlas root stays `/`. */
export function parsePageParam(value: unknown): number | undefined {
 const n = typeof value === "number" ? value: typeof value === "string" ? Number(value): NaN;
 if (!Number.isFinite(n) || n < 2) return undefined;
 return Math.min(Math.floor(n), 999);
}

const sortKeys = new Set<string>(sortOptions.map((opt) => opt.value));

/** Default (random) is omitted from the URL. */
export function parseSortParam(value: unknown): SortKey | undefined {
 if (typeof value !== "string" || !sortKeys.has(value)) return undefined;
 return value as SortKey;
}

export function paginate<T>(items: T[], requestedPage = 1, size = ATLAS_PAGE_SIZE): PageWindow<T> {
 const total = items.length;
 const pages = Math.max(1, Math.ceil(total / size) || 1);
 const page = Math.min(Math.max(1, requestedPage || 1), pages);
 const start = (page - 1) * size;
 const slice = items.slice(start, start + size);
 return {
 items: slice,
 page,
 pages,
 from: total === 0 ? 0: start + 1,
 to: start + slice.length,
 total,
 };
}

export function pageNumbers(page: number, pages: number): Array<number | "gap"> {
 if (pages <= 7) return Array.from({ length: pages }, (_, i) => i + 1);
 const keep = new Set([1, pages, page - 1, page, page + 1]);
 if (page <= 3) {
 keep.add(2);
 keep.add(3);
 keep.add(4);
 }
 if (page >= pages - 2) {
 keep.add(pages - 3);
 keep.add(pages - 2);
 keep.add(pages - 1);
 }
 const nums = [...keep].filter((n) => n >= 1 && n <= pages).sort((a, b) => a - b);
 const out: Array<number | "gap"> = [];
 for (const n of nums) {
 const last = out[out.length - 1];
 if (typeof last === "number" && n - last > 1) out.push("gap");
 out.push(n);
 }
 return out;
}
