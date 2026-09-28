import { uniqueGovernanceInformal } from "./unique-governance-informal";
import { asiaInformal } from "./asia-details";
import { russiaInformal } from "./russia-details";
import { usaMoreInformal } from "./usa-details";
import { polandInformal } from "./poland-details";
import { volunteerBatchInformal } from "./volunteer-batch-details";
import { formerInformal } from "./former-details";
import { formerMoreInformal } from "./former-more-details";
import { formerClosedInformal } from "./former-closed-details";
import { livingMoreInformal } from "./living-more-details";
import { livingBatch2Informal } from "./living-batch2-details";
import { livingBatch3Informal } from "./living-batch3-details";
import { livingBatch4Informal } from "./living-batch4-details";
import { livingBatch5Informal } from "./living-batch5-details";
import { livingBatch6Informal } from "./living-batch6-details";
import { livingBatch7Informal } from "./living-batch7-details";
import { livingBatch8Informal } from "./living-batch8-details";
import { livingBatch9Informal } from "./living-batch9-details";
import { livingBatch10Informal } from "./living-batch10-details";
import { livingBatch11Informal } from "./living-batch11-details";
import { livingBatch12Informal } from "./living-batch12-details";
import { livingBatch13Informal } from "./living-batch13-details";
import { livingBatch14Informal } from "./living-batch14-details";
import { livingBatch15Informal } from "./living-batch15-details";
import { livingBatch16Informal } from "./living-batch16-details";
import { livingBatch17Informal } from "./living-batch17-details";
import { livingBatch18Informal } from "./living-batch18-details";
import { livingBatch19Informal } from "./living-batch19-details";
import { livingBatch20Informal } from "./living-batch20-details";
import { livingBatch21Informal } from "./living-batch21-details";
import { livingBatch22Informal } from "./living-batch22-details";
import { livingBatch23Informal } from "./living-batch23-details";
import { livingBatch24Informal } from "./living-batch24-details";
import { livingBatch25Informal } from "./living-batch25-details";
import { livingBatch26Informal } from "./living-batch26-details";
import { livingBatch27Informal } from "./living-batch27-details";
import { livingBatch28Informal } from "./living-batch28-details";
import { livingBatch29Informal } from "./living-batch29-details";
import { livingBatch30Informal } from "./living-batch30-details";
import { livingBatch31Informal } from "./living-batch31-details";
import { livingBatch32Informal } from "./living-batch32-details";
import { livingBatch33Informal } from "./living-batch33-details";
import { livingGlampingInformal } from "./living-glamping-details";
import { sustainableEcovillageInformal } from "./sustainable-ecovillage";
import { maitreyaEcovillageInformal } from "./maitreya-ecovillage";

export type InformalAgreement = {
 kind: string;
 why: string;
};

export const informalBySlug: Record<string, InformalAgreement[]> = {
 "sabbathday-lake": [
 { kind: "quiet-practice", why: "Celibate Shaker covenant, Sunday Meeting in the 1794 Meetinghouse, and a village that still treats worship as the reason the farm exists. Guests come to Meeting; they do not treat the dwelling houses as a B&B." },
 { kind: "guest-stay", why: "A public museum, herb shop, and Open Farm Day sit beside three covenanted members. The likely compact is which doors are the tour and which are still a home." },
 { kind: "land-care", why: "Herbs, the tree lot, and nearly 1,800 acres of farm and bog. The still-room is a trade." },
 { kind: "media-story", why: "The last Shakers in the world. Every journalist wants the same photograph. A compact about names, Meeting, and the remaining three people is overdue in any such house." },
 ],
 solheimar: [
 { kind: "care-household", why: "Reverse integration is the founding rule: people without disabilities adapt to those with. The likely compact is how a mixed household actually runs breakfast, work, and dignity." },
 { kind: "volunteer-intern", why: "Worldwide Friends work camps and long-term coworkers live in the same geothermal valley as villagers. Room, board, and a role." },
 { kind: "guest-stay", why: "Guesthouse, café, and tour groups are the public face. Residents still have to eat somewhere the groups are not." },
 { kind: "course-host", why: "Sesseljuhús and the workshops are set up to teach. A compact that keeps the environmental centre from swallowing the homes is the ordinary one." },
 ],
 riverside: [
 { kind: "common-purse", why: "Rent to the trust, a weekly allowance, no private sale of houses or cars. The informal layer is what a person may actually keep." },
 { kind: "labour-roster", why: "Dairy rounds, café, and the charitable guest work are the week. Someone still has to write the roster." },
 { kind: "membership-trial", why: "Visit, workshop, then a membership conversation. There is no title to buy; fit and timing are the filter." },
 { kind: "guest-stay", why: "Café, rooms, and community lunches are charitable work. Guests are not members on day two." },
 { kind: "animals-stock", why: "A dairy farm still milks. The compact is whose cow, whose dog, and who is on the morning round." },
 ],
 koinonia: [
 { kind: "membership-trial", why: "Visit, internship, then a vocational yes to a Christian intentional community." },
 { kind: "labour-roster", why: "Farm, hospitality, and the leftover of a common-purse history. Interns work a quota; members work the place." },
 { kind: "quiet-practice", why: "Sermon-on-the-Mount orientation, prayer, and a history of interracial pacifism. The compact is what is asked of a guest versus a covenanted member." },
 { kind: "volunteer-intern", why: "“Come, stay awhile, and serve” is the public door. Orientation week, noon meals, a stipend, then you leave or you apply." },
 ],
 "camphill-copake": [
 { kind: "care-household", why: "Villagers, coworkers, and children in extended-family houses. The compact is the houseparent’s role and the villager’s dignity." },
 { kind: "volunteer-intern", why: "Residential coworkers apply, live in, take a stipend. The likely paper is the house agreement they actually sign before they hold a key." },
 { kind: "kitchen-table", why: "Shared households eat together. Café and bakery are public." },
 { kind: "children-care", why: "Children of coworkers grow up in the same houses as adults with disabilities. Safeguarding cannot be only informal, and yet most of the day is." },
 ],
 findhorn: [
 { kind: "course-host", why: "Experience Week is the classic door. The compact is how a programme guest relates to people who actually live in the Park." },
 { kind: "guest-stay", why: "Guesthouses, the Universal Hall, and a village that has hosted seekers for sixty years. Private dwellings still need a door that stays shut." },
 { kind: "membership-trial", why: "Experience Week, then a house, a job, NFA membership. Living in the Park is not joining the Foundation." },
 { kind: "kitchen-table", why: "Community meals and the original sanctuary kitchen culture. New residents still have to learn which fridge is whose." },
 { kind: "land-care", why: "The original gardens, the dunes, and a park that is also a neighbourhood. The informal rule is still: do not pick the nature sanctuary as if it were a hotel bouquet." },
 ],
 "twin-oaks": [
 { kind: "labour-roster", why: "A labour quota is the membership. The three-week visitor program already works it; the likely compact is the book that keeps the quota honest." },
 { kind: "common-purse", why: "Income-sharing, no buy-in, no rent. The informal layer is allowance, personal property, and what you take when you leave." },
 { kind: "membership-trial", why: "Visitor period, interview in week two or three, then a wait for a room. Capacity, not ideology, is often the gate." },
 { kind: "kitchen-table", why: "Tofu, hammocks, and a dining system that has fed a commune for decades. Someone still writes the cook shift." },
 { kind: "conflict-circle", why: "A political community this old has a process, or it has a split. Twin Oaks is famous for having a process." },
 ],
 auroville: [
 { kind: "membership-trial", why: "Newcomer, friend of Auroville, then the Entry Service. The Foundation holds the land; the informal compact is the human path the Act does not write." },
 { kind: "land-care", why: "The greenbelt, the water table, and a city that was supposed to be a forest first. Informal felling and informal wells are the real politics." },
 { kind: "quiet-practice", why: "Matrimandir inner chamber is booked like a shift. The compact is silence, shoes, and who does not treat the sphere as a viewpoint." },
 { kind: "volunteer-intern", why: "Volunteers keep kitchens, forests, and schools running. They are not Aurovilians by showing up in a language class." },
 { kind: "media-story", why: "Every documentary wants the golden disc. Residents have been living under other people’s cameras since the 1970s." },
 ],
 "the-farm": [
 { kind: "membership-trial", why: "After the Changeover, membership is a cooperative yes. The trial is still vocational." },
 { kind: "land-care", why: "1,700 acres, soy, mushrooms, and a village that is no longer a commune. Commons woods versus household gardens still need a sentence." },
 { kind: "children-care", why: "Midwifery is what most people still ask about first. Shared child care and a school sit beside that history." },
 { kind: "volunteer-intern", why: "Plenty, visitors, and a long tradition of people showing up to help. The compact is labour plus a bed." },
 ],
 gaviotas: [
 { kind: "labour-roster", why: "A research village in the llanos runs on work, not on lots. The informal compact is who does the resin, the pump, the kitchen." },
 { kind: "land-care", why: "Pines, grassland, and a water table that became a story. Guests do not wander the plantation as a park." },
 { kind: "volunteer-intern", why: "Students and technicians have always been part of the experiment. They leave with notes, not with a hectare." },
 { kind: "media-story", why: "UNDP, resin, and decades of journalists. The likely compact is who speaks for Gaviotas when a camera arrives." },
 ],
 "moora-moora": [
 { kind: "land-care", why: "The co-op owns the mountain; houses sit in clusters so most of 245 hectares stay forest. The informal rule is: do not turn your cluster into a second subdivision." },
 { kind: "building-code", why: "Cluster design was the founding idea. A new house still has to look like it belongs on Mount Toolebewong." },
 { kind: "membership-trial", why: "Almost all of the original twelve left; new members replaced them without selling the land. The compact is how a household joins the co-op without buying the mountain." },
 { kind: "conflict-circle", why: "A small mountain co-op of fifty years either has a process or it has a lawyer. The likely paper is the process." },
 ],
 "east-wind": [
 { kind: "labour-roster", why: "Income-sharing Ozark community with nut butter and a quota. The book of hours is the membership." },
 { kind: "common-purse", why: "No buy-in. The informal compact is allowance, the truck, and what a leaving member takes." },
 { kind: "membership-trial", why: "Visitor period then a yes. Capacity on 1,000 acres of hills is still a room." },
 { kind: "kitchen-table", why: "A common kitchen feeding a fluctuating membership. The roster of cook and clean is older than any website." },
 ],
 damanhur: [
 { kind: "membership-trial", why: "Citizens, nucleos, and a living constitution cut from 130 articles to 15. The informal path is still a human yes." },
 { kind: "quiet-practice", why: "Temples of Humankind, meditation, and a federation that was secret for years. Guests on a temple tour are not citizens at prayer." },
 { kind: "course-host", why: "Courses and tourism to the Temples are a business. The compact is how a nucleo remains a home when the tour is booked." },
 { kind: "media-story", why: "Guinness temples, a complementary currency, a dead founder. Every crew wants the Hall of Mirrors. Citizens have been saying no since 1992." },
 ],
 svanholm: [
 { kind: "common-purse", why: "One of Europe’s best-known income-sharing villages. The compact is the common purse, the allowance, and the farm income that feeds it." },
 { kind: "labour-roster", why: "Organic farm, dairy, and a quota. Work meetings are the politics." },
 { kind: "membership-trial", why: "A large Danish collective does not take a new adult without a trial that the existing adults can live with." },
 { kind: "kitchen-table", why: "A common kitchen at that scale is a workplace. The informal rules are posted on the fridge whether or not anyone has filed them." },
 { kind: "animals-stock", why: "An organic farm and dairy at manor scale. The compact is whose cow, whose dog, and who is on the morning round." },
 { kind: "land-care", why: "Fields, animals, and a manor landscape. Commons farming versus a member’s private project is a weekly conversation." },
 ],
 lakabe: [
 { kind: "conflict-circle", why: "A recovered village that began as an occupation. Consensus, concejo, and thirty years of living in a place they were not invited to buy, the process is the village." },
 { kind: "land-care", why: "A Navarra hamlet brought back from empty. Wood, animals, and a mountain that is not a second-home plot." },
 { kind: "kitchen-table", why: "A small recovered village eats as a house. Guests of the bakery are not automatically at the inner table." },
 { kind: "membership-trial", why: "You are accepted into a village that remembers being empty." },
 { kind: "quiet-practice", why: "A nonviolence lineage from Bilbao conscientious objectors. The compact is how a political origin becomes an ordinary Tuesday." },
 ],
 "kibbutz-lotan": [
 { kind: "labour-roster", why: "A kibbutz still assigns work. Ecotourism, date groves, and the bird trail do not staff themselves." },
 { kind: "volunteer-intern", why: "Volunteers and Green Apprentice programmes are a Lotan signature. They leave; members stay." },
 { kind: "land-care", why: "Arava desert, mud buildings, and Israel Land Authority leasehold. Water and shade are the real commons." },
 { kind: "membership-trial", why: "Kibbutz membership is a cooperative process sale in the Arava." },
 { kind: "animals-stock", why: "Date groves, desert ecology, and a kibbutz that still has animals. The compact is whose flock and who closes the gate on the Arava night." },
 ],
 lebensgarten: [
 { kind: "conflict-circle", why: "A German eco-village with a long seminar and neighbourhood life. Sociocracy or circle process is the likely informal court." },
 { kind: "land-care", why: "Permaculture gardens on a former barracks. Commons beds versus household plots need a sentence." },
 { kind: "guest-stay", why: "Seminars and visitors are part of the economy. Residents still need a kitchen that is not a course." },
 { kind: "membership-trial", why: "The trial is social before it is a lease." },
 ],
 niederkaufungen: [
 { kind: "common-purse", why: "One of Germany’s densest income-sharing communities. The Kommuja-style purse is the compact people actually argue about." },
 { kind: "labour-roster", why: "Work in community businesses and the house. Quota and rotation keep a large group fed." },
 { kind: "conflict-circle", why: "A political commune of that size either has plenary process or it fragments. Niederkaufungen is known for plenary process." },
 { kind: "membership-trial", why: "You are taken in, or you are not, after living the quota." },
 ],
 "crystal-waters": [
 { kind: "building-code", why: "Australia’s first permaculture village: clustered houses, 80% open space. The informal layer is the design review people actually obey." },
 { kind: "land-care", why: "Covenants on title plus the ordinary fight about cats, weeds, and creeks. The compact is the neighbour version of the covenant." },
 { kind: "guest-stay", why: "A famous village on the world permaculture trail. Homestays need a rule so the open space stays open." },
 { kind: "course-host", why: "Robin Clayfield’s PDC and the EcoCentre calendar are the public classroom. A course week is not a house lot." },
 { kind: "conflict-circle", why: "Body corporate plus a village of strong personalities. The likely informal paper is how a dispute is heard before it becomes a by-law complaint." },
 ],
 "ecovillage-ithaca": [
 { kind: "building-code", why: "Cohousing neighbourhoods with a common house and a farm. Design covenants and the informal “does this look like EcoVillage” conversation." },
 { kind: "land-care", why: "CSA farm, ponds, and clustered housing. The compact is who picks the berries and who mows the path." },
 { kind: "conflict-circle", why: "Three neighbourhoods of consensus-flavoured Americans. Process is a local sport." },
 { kind: "children-care", why: "A village that has always advertised children in the common house. Shared watching still needs a roster and a safeguarding sentence." },
 ],
 zegg: [
 { kind: "relationship-culture", why: "Forum, experimental relating, and a seminar village whose reputation travels faster than its gGmbH papers. The compact is consent, privacy, and that a course is not a membership." },
 { kind: "course-host", why: "The seminar centre is the economic core. Teachers and participants sleep in a village that is also 100 people’s home." },
 { kind: "conflict-circle", why: "Sociocracy, a Visionsrat, and a history of intense social experiment. The process is the product." },
 { kind: "kitchen-table", why: "Catering for courses plus a residents’ kitchen. Two menus, one dish room, the informal rules are on the wall." },
 { kind: "membership-trial", why: "Living at ZEGG is not buying a Brandenburg lot. A long look, then a yes from people who already live with Forum." },
 ],
 "los-angeles-eco-village": [
 { kind: "building-code", why: "Two apartment buildings and a land trust in Koreatown. Bike parking, greywater, and what you may do to a unit without a meeting." },
 { kind: "kitchen-table", why: "A common courtyard and kitchens in a dense block. Noise, smells, and the courtyard table are the village." },
 { kind: "conflict-circle", why: "An urban intentional community on a small footprint. Process is how you stay neighbours." },
 { kind: "membership-trial", why: "Limited-equity and a land trust: you apply, you are interviewed, you do not just answer a Craigslist ad." },
 { kind: "land-care", why: "The courtyard orchard and the alley. Urban commons still need a watering roster." },
 ],
 earthaven: [
 { kind: "building-code", why: "Natural building is the brand. The compact is what you may raise on a lease site before the council of the village objects." },
 { kind: "land-care", why: "A steep forest neighbourhood with a creek. Roads, waste, and trees are the politics." },
 { kind: "membership-trial", why: "You are taken into a village that still interviews." },
 { kind: "labour-roster", why: "Work days on roads and commons. Membership includes showing up with gloves." },
 ],
 konohana: [
 { kind: "labour-roster", why: "A Japanese farming village that works as one. The day’s assignment is the membership." },
 { kind: "quiet-practice", why: "Spiritual practice and a founder-led culture. Guests on a farm stay still meet a village that sits together." },
 { kind: "kitchen-table", why: "Common meals of what the fields gave that day. The compact is gratitude as a kitchen rule." },
 { kind: "membership-trial", why: "A small village that does not sell lots. Living there is vocational, after a long look." },
 ],
 oaec: [
 { kind: "land-care", why: "A Sonoma teaching farm and wildland. Fire, water, and the covenanted acres are the real curriculum." },
 { kind: "course-host", why: "Permaculture courses and public programmes pay the place. The compact is how a class uses a land that is also a home." },
 { kind: "volunteer-intern", why: "Interns and residents have kept OAEC working for decades." },
 { kind: "kitchen-table", why: "A teaching kitchen that also feeds the people who live there. Two populations, one sink." },
 ],
 tamera: [
 { kind: "relationship-culture", why: "A healing biotope whose teachings on love and community are the thing visitors come to argue with. The compact is consent, opt-in, and that a course is not the inner village." },
 { kind: "course-host", why: "SolarVillage tours and peace education are the outward economy. Residents still live there when the course goes home." },
 { kind: "land-care", why: "Water retention, cork oak, and a Monte Alentejano landscape treated as a political project. Guests do not redesign the lakes." },
 { kind: "quiet-practice", why: "Inner work is scheduled. The compact is silence, ceremony, and who is not on the programme." },
 { kind: "membership-trial", why: "A long path into the inner community. Famous, photographed." },
 ],
 "dancing-rabbit": [
 { kind: "land-care", why: "A rural Missouri ecovillage with covenants about cars, energy, and organic land. The informal layer is the neighbour version of the covenant." },
 { kind: "building-code", why: "Natural building on lease land from a community land trust. The compact is the design conversation before the straw bale." },
 { kind: "membership-trial", why: "Visitor programme, then a yes." },
 { kind: "labour-roster", why: "Committees, land work, and a small town’s worth of jobs. Membership includes the unglamorous ones." },
 { kind: "conflict-circle", why: "Holacracy-flavoured process in a village that publishes its documents. The likely informal paper is still how a fight is heard." },
 ],
 "sieben-linden": [
 { kind: "building-code", why: "Straw-bale and cob as a German village style. New buildings go through a process that is half building code, half village look." },
 { kind: "land-care", why: "A forest village in the Altmark. Wood, gardens, and a landscape that is the reason people stay." },
 { kind: "membership-trial", why: "A famous seminar village that is also a home. The trial is social; the e.V. is the shell." },
 { kind: "kitchen-table", why: "Seminar catering and a residents’ kitchen. The compact is who eats which menu." },
 { kind: "conflict-circle", why: "A large German eco-village with plenary muscle. Process is how 100 people share a forest." },
 ],
 cloughjordan: [
 { kind: "building-code", why: "Ireland’s ecovillage: a neighbourhood with a building code, a district heating system, and a look. The informal compact is the neighbour enforcement." },
 { kind: "land-care", why: "Farm, woodland, and a village green in Tipperary. Allotments versus the community farm is a weekly conversation." },
 { kind: "conflict-circle", why: "A residents’ association plus strong personalities in a small Irish town. Process, or the pub becomes the process." },
 { kind: "children-care", why: "A village that sold itself as a place to raise children. Shared watching and the school run still need a roster." },
 ],
 currumbin: [
 { kind: "building-code", why: "A 147-lot hinterland village with a strict sustainable-building code and a design panel. The informal compact is what the panel will actually pass." },
 { kind: "land-care", why: "80% of 270 acres is open space. Cats, weeds, and the creek are the neighbour politics the body corporate cannot fully write." },
 { kind: "guest-stay", why: "Café, bath house, and a village that is also a real-estate product. Short stays still need a rule so the open space is not a resort." },
 { kind: "conflict-circle", why: "Principal body corporate plus four subsidiaries. The informal layer is how a dispute is heard before it becomes a by-law letter." },
 ],
 "longo-mai": [
 { kind: "labour-roster", why: "No wages, no private lots, a self-managed agricultural cooperative. The roster is the politics." },
 { kind: "common-purse", why: "People and goods move among Longo Maï farms. The informal compact is what a person may keep and what belongs to the European network." },
 { kind: "land-care", why: "A Costa Rican finca in a European cooperative family. Cattle, coffee, and a mountain that is not a subdivided finca." },
 { kind: "membership-trial", why: "You work your way in." },
 { kind: "animals-stock", why: "A finca in a European cooperative family. Cattle and dogs are commons questions." },
 ],
 "maya-mountain": [
 { kind: "volunteer-intern", why: "A 70-acre NGO farm that hosts interns rather than selling lots. The compact is cacao labour, solar, and a bunk, then you leave." },
 { kind: "land-care", why: "Multi-strata agroforestry is what matters. Guests do not “help” by cutting what they do not recognise." },
 { kind: "course-host", why: "Researchers and partner NGOs visit." },
 ],
 pachamama: [
 { kind: "quiet-practice", why: "A spiritual eco-village with silent meditation as the public face. Guests on retreat follow hours that residents live." },
 { kind: "guest-stay", why: "A retreat centre whose income goes back into reforested Guanacaste. The compact is which casita is the course and which is a home." },
 { kind: "course-host", why: "Retreats fund the land. Teachers are guests; they do not rewrite the silence." },
 { kind: "membership-trial", why: "About seventy residents, a smaller core. Spiritual membership is vocational." },
 ],
 imap: [
 { kind: "land-care", why: "A Maya educational farm. Seed, milpa, and forest are the curriculum. Visitors do not treat the plot as a photogenic garden." },
 { kind: "volunteer-intern", why: "Students and volunteers pass through. They learn; they do not take seed home without a yes." },
 { kind: "kitchen-table", why: "Food that was grown that week. The compact is respect for the kitchen as a Maya house." },
 ],
 "rancho-mastatal": [
 { kind: "volunteer-intern", why: "A teaching ranch famous for natural building internships." },
 { kind: "building-code", why: "The buildings are the classroom. Experiments still have to stand up and stay dry." },
 { kind: "land-care", why: "A working ranch and forest. Tools, horses, and slopes that punish a casual volunteer." },
 { kind: "course-host", why: "Workshops pay the ranch. Course groups eat in a kitchen that is also a home." },
 ],
 "bona-fide": [
 { kind: "volunteer-intern", why: "A Nicaraguan natural-building and permaculture farm that lives on interns and courses. The compact is labour, a bunk, and a leaving date." },
 { kind: "land-care", why: "Ometepe soil and a farm that teaches by doing. Machetes and water are not toys." },
 { kind: "course-host", why: "Workshops are the public door. Residents still sleep there when the group leaves." },
 ],
 ipes: [
 { kind: "volunteer-intern", why: "A Salvadoran permaculture school. Interns come to learn; they do not inherit a plot." },
 { kind: "land-care", why: "Demonstration plots and a landscape that is a classroom. Seed and water stay unless the school says otherwise." },
 { kind: "course-host", why: "Courses are the work. The compact is how a class uses a farm that is also a household." },
 ],
 "finca-bellavista": [
 { kind: "building-code", why: "Treehouses on a rainforest finca, with design rules that keep the canopy looking like one place. The informal compact is what you may bolt to a tree." },
 { kind: "guest-stay", why: "A canopy village that is also a hospitality business. Short stays versus homes in the trees need a door policy." },
 { kind: "land-care", why: "The forest is the product. Paths, ziplines, and waste cannot become a second tourism concession." },
 { kind: "conflict-circle", why: "Owners, renters, and staff in a vertical village. Process is how you share a platform." },
 ],
 "la-ecovilla": [
 { kind: "building-code", why: "A Costa Rican eco-neighbourhood with a look and a materials conversation. New houses still have to belong." },
 { kind: "land-care", why: "Shared green, water, and a tropical landscape that punishes chemicals. The compact is the neighbour version of the covenant." },
 { kind: "membership-trial", why: "The social yes still matters." },
 { kind: "conflict-circle", why: "A small village of owners. Process, or every fence is a lawyer." },
 ],
 "brave-earth": [
 { kind: "guest-stay", why: "A high-design regenerative centre that hosts. The compact is which maloca is the programme and which is a home." },
 { kind: "course-host", why: "Retreats and branded regeneration are the outward face. Staff and residents still live there on Tuesday." },
 { kind: "land-care", why: "Reforestation and a landscape sold as healing. Guests do not wander the restoration as a spa garden." },
 { kind: "media-story", why: "Photogenic architecture. The likely compact is who owns the pictures of other people’s faces." },
 ],
 lama: [
 { kind: "quiet-practice", why: "A mountain ashram-flavoured community with practice at the centre. Silence, substances, and the dome are the house rules." },
 { kind: "membership-trial", why: "No permanent membership in the old sense; a resident circle and summer stewards. The compact is who is in for the winter." },
 { kind: "kitchen-table", why: "A common kitchen at 8,000 feet. Food, fire, and the winter pantry are survival, not lifestyle." },
 { kind: "land-care", why: "A Taos mountain that burned and was rebuilt. Water, firewise, and the hermitages." },
 ],
 arcosanti: [
 { kind: "volunteer-intern", why: "Workshoppers have built the fragment for fifty years." },
 { kind: "course-host", why: "Tours and workshops pay the Foundation. The compact is how a tour group uses a place that is also a construction site and a home." },
 { kind: "building-code", why: "Soleri’s forms are the law of the mesa. Informal additions still have to look like Arcosanti." },
 { kind: "guest-stay", why: "Overnight stays in a prototype city. Rooms are not condos." },
 ],
 "alpha-farm": [
 { kind: "labour-roster", why: "An Oregon income-sharing farm. Dairy, print, and the quota keep a small commune fed." },
 { kind: "common-purse", why: "Common purse is the membership. The informal compact is allowance and the leaving package." },
 { kind: "membership-trial", why: "A visitor period in the Coast Range. You are taken in, or you go back down the road." },
 { kind: "kitchen-table", why: "A farm kitchen that has fed a fluctuating membership since the 1970s. The cook shift is older than the website." },
 { kind: "animals-stock", why: "An Oregon dairy-and-print commune. The compact is the milkers, the dogs, and who is on the morning round." },
 ],
 sirius: [
 { kind: "quiet-practice", why: "A Findhorn-inspired New England community with meditation and attunement. Guests follow the silence they came to see." },
 { kind: "membership-trial", why: "A small village that interviews. Spiritual fit is spoken, not sold." },
 { kind: "land-care", why: "Woods, gardens, and a Massachusetts landscape held in common. The compact is the woodpile and the path." },
 { kind: "kitchen-table", why: "Common meals as practice. The kitchen is a chapel that also feeds people." },
 ],
 huehuecoyotl: [
 { kind: "course-host", why: "A Mexican eco-village on the theatre-and-course circuit. Guests come for a programme; residents stay for a life." },
 { kind: "kitchen-table", why: "A common kitchen in Tepoztlán’s orbit. Two populations, one comal." },
 { kind: "land-care", why: "Dry-season water and a hillside. The compact is the cistern and the trees." },
 { kind: "membership-trial", why: "A small village that has already lived through several generations of members. The yes is social." },
 ],
 "cite-ecologique": [
 { kind: "children-care", why: "A school from kindergarten through graduation is the reason the village exists. The compact is the line between school, house, and parent." },
 { kind: "labour-roster", why: "Enterprises (including Kheops) pay a hundred residents. Work is membership." },
 { kind: "kitchen-table", why: "A village that eats as a school-and-work community." },
 { kind: "membership-trial", why: "You come for the school or the work. You stay if the circle can live with you." },
 ],
 acorn: [
 { kind: "labour-roster", why: "Twin Oaks’ southern cousin: a quota, seed, and a small income-sharing farm." },
 { kind: "common-purse", why: "Income-sharing. The compact is the allowance and the seed-business money." },
 { kind: "membership-trial", why: "Visitor period, then a yes. A room in Louisa County." },
 { kind: "kitchen-table", why: "A small commune kitchen. The cook shift is the culture." },
 ],
 "las-canadas": [
 { kind: "land-care", why: "A Mexican cooperative cloud-forest farm. Seed, timber, and a landscape that is the curriculum." },
 { kind: "volunteer-intern", why: "Courses and internships in agroecology." },
 { kind: "course-host", why: "Teaching is the public door. The cooperative still has to milk and mill when the course leaves." },
 { kind: "labour-roster", why: "A working cooperative. Membership is work; guests are extra hands with a leaving date." },
 ],
 "our-ecovillage": [
 { kind: "course-host", why: "A Vancouver Island teaching site. Programmes pay the place; the compact is how a class uses a farm that is also a home." },
 { kind: "volunteer-intern", why: "Work-trade and internships. Labour plus learning." },
 { kind: "land-care", why: "A demonstration farm. Soil, water, and animals are the lesson." },
 { kind: "building-code", why: "Natural building as curriculum. Experiments still have to pass a Canadian winter." },
 ],
 "whole-village": [
 { kind: "children-care", why: "A school-centred Ontario village. The compact is how children move between house, school, and farm." },
 { kind: "land-care", why: "Organic fields and a rural Ontario holding. Commons farm versus household garden." },
 { kind: "membership-trial", why: "A small village that interviews families, not buyers of lots." },
 { kind: "building-code", why: "Clustered houses and a look. New building still has to belong to the village, not to a catalogue." },
 ],
 botton: [
 { kind: "care-household", why: "A Camphill village in a dale: households of villagers and coworkers. The compact is the house, not the Yorkshire care-contract." },
 { kind: "volunteer-intern", why: "Coworkers still arrive to live in. Room, board, a role." },
 { kind: "land-care", why: "Farms, crafts, and a moorland valley. The land work is the therapy and the economy." },
 { kind: "kitchen-table", why: "House tables. Each household’s kitchen is a home that also feeds visitors on open days." },
 { kind: "animals-stock", why: "Camphill farms in a dale. Cows, crafts, and whose animal when a coworker rotates out." },
 ],
 limans: [
 { kind: "labour-roster", why: "No wages. The Provençal cooperative assigns the flocks, the fields, and the jobs that keep 270 hectares alive." },
 { kind: "common-purse", why: "A Longo Maï mother farm. The informal compact is what a person may keep in a network that shares tools and people." },
 { kind: "land-care", why: "Hamlets bought to be farmed, not subdivided. The compact is the flock, the wood, and the road." },
 { kind: "membership-trial", why: "You work your way into Longo Maï." },
 ],
 "los-portales": [
 { kind: "quiet-practice", why: "Dream research and a Sierra Morena finca. Inner work is part of why people stay; guests need the hours in writing." },
 { kind: "land-care", why: "200 hectares of dehesa. Animals, cork, and a landscape that is not a hunting estate of lots." },
 { kind: "membership-trial", why: "A small association on a large finca. The yes is vocational." },
 { kind: "course-host", why: "Education and visitors. The compact is how a course uses a finca that is also a home." },
 ],
 "torri-superiore": [
 { kind: "guest-stay", why: "A restored medieval village that hosts. The compact is which stone room is the guesthouse and which is a home." },
 { kind: "building-code", why: "You do not casually alter a Ligurian borgo. Lime, stone, and the look of the alley are the law of the place." },
 { kind: "land-care", why: "Terraces, olives, and a valley that collapses if nobody maintains the walls." },
 { kind: "membership-trial", why: "A handful of residents in a famous stone village. You are invited into a restoration." },
 ],
 "krishna-valley": [
 { kind: "quiet-practice", why: "A Hungarian Krishna-conscious village. Diet, worship, and hours are the house rules, explained before a guest unpacks." },
 { kind: "guest-stay", why: "A visitable village with guesthouses. Tourists see the temple; they do not treat ashram quarters as a hotel corridor." },
 { kind: "course-host", why: "Temple tours, ox-cart rides, and the vegetarian food festival are the public door. The guesthouse books the bed; the temple is not a hotel corridor." },
 { kind: "land-care", why: "Oxen, fields, and a self-sufficiency project. The compact is the cow, the garden, and the closed-loop waste." },
 { kind: "kitchen-table", why: "Prasadam kitchen at village scale. Guests eat the kitchen’s rule, not their own menu." },
 { kind: "animals-stock", why: "Oxen and a self-sufficiency project." },
 ],
 "brithdir-mawr": [
 { kind: "land-care", why: "A Welsh valley farm famous for off-grid life and a roundhouse fight with planning. The compact is wood, water, and what you may build." },
 { kind: "building-code", why: "Planning history is the village myth. Informal building still has to face a planning officer someday." },
 { kind: "conflict-circle", why: "A small land community. Process is how you share a valley without a second lawyer." },
 { kind: "membership-trial", why: "You are taken into a farm that already has a story." },
 ],
 keuruu: [
 { kind: "membership-trial", why: "A Finnish eco-village that remains small. The social yes is the membership." },
 { kind: "land-care", why: "Lakeside Finland: wood, sauna, gardens. Commons forest versus household strip." },
 { kind: "kitchen-table", why: "A northern common kitchen. The compact is firewood, meals, and the sauna hours." },
 { kind: "conflict-circle", why: "A small association. Process, or the winter becomes very long." },
 ],
 hurdal: [
 { kind: "building-code", why: "From straw-bale co-op to a 70-house eco-neighbourhood. The informal compact is still how a house may look in Huldra." },
 { kind: "land-care", why: "Shared streets, commons, and a former rectory farm. Who ploughs, who salts, who plants." },
 { kind: "conflict-circle", why: "A village that scaled through a developer. Identity conflict is documented; a process is the repair." },
 { kind: "guest-stay", why: "A visitable Norwegian eco-neighbourhood. Short stays still need a rule so the streets stay a neighbourhood." },
 ],
 suderbyn: [
 { kind: "land-care", why: "A Gotland permaculture farm on thin soil. Water, wind, and the garden are the membership." },
 { kind: "volunteer-intern", why: "European volunteers have kept Suderbyn working." },
 { kind: "building-code", why: "Natural and experimental buildings in a Baltic climate. They still have to stand the winter." },
 { kind: "membership-trial", why: "A small community. The yes is social and practical, can you live the winter?" },
 ],
 aardehuis: [
 { kind: "building-code", why: "Twenty-three earthships and a community building, raised by volunteers. The compact is what you may do to an earthship that is also a neighbour’s house." },
 { kind: "land-care", why: "A hectare that wanted to be five. Greywater, tyres, and a food-forest next door." },
 { kind: "conflict-circle", why: "An association of households who built together. Process is how you share a freak neighbourhood in Olst." },
 { kind: "membership-trial", why: "Houses can change hands, but the association still has a social yes." },
 ],
 "comunidad-del-sur": [
 { kind: "common-purse", why: "A 1955 anarchist commune. The informal compact is still common ownership, rotation, and ‘to each according to need’ inside the collective’s means." },
 { kind: "labour-roster", why: "Press, workshops, and an agrarian arm. Rotation of work was the 1955 compact; it still needs a Tuesday version." },
 { kind: "conflict-circle", why: "An anarchist house that survived dictatorship exile. Process is how a small collective stays a collective." },
 { kind: "membership-trial", why: "You are not buying a Montevideo lot. You are accepted into a family that already has a press." },
 ],
 penalolen: [
 { kind: "building-code", why: "A Santiago hillside eco-neighbourhood with a look. Water, slopes, and what you may add to a house." },
 { kind: "land-care", why: "Precordillera, fire, and a landscape that is not a second-home lot map if they can help it." },
 { kind: "conflict-circle", why: "Copropiedad plus a village of neighbours. Process before the reglamento." },
 { kind: "kitchen-table", why: "Common spaces on a hillside. The compact is the oven, the path, and the dogs." },
 ],
 "eco-truly": [
 { kind: "quiet-practice", why: "A Vaishnava community on the Peruvian coast. Diet, worship, and hours are the house, explained to every volunteer." },
 { kind: "land-care", why: "Desert coast, gardens, and a temple landscape. Water is the compact." },
 { kind: "volunteer-intern", why: "Volunteers keep the gardens. They eat prasadam and they leave." },
 { kind: "kitchen-table", why: "A temple kitchen. Guests eat the kitchen’s rule." },
 ],
 "ecovilla-gaia": [
 { kind: "land-care", why: "A Gaia teaching village on the Argentine pampa. The demonstration is the land; guests do not treat it as a park." },
 { kind: "course-host", why: "Gaia Education and visitors. The compact is how a course uses a village that is also a home." },
 { kind: "membership-trial", why: "A small Argentine eco-village. The yes is social; the asociación is the shell." },
 { kind: "building-code", why: "Natural building as teaching. Experiments still have to survive the pampa." },
 ],
 ipec: [
 { kind: "course-host", why: "A world-famous natural-building school at Pirenópolis. The compact is the classroom versus the home of the people who stay." },
 { kind: "building-code", why: "The buildings are the curriculum. Students still do not redesign a house they do not live in." },
 { kind: "volunteer-intern", why: "Interns and course assistants." },
 { kind: "land-care", why: "Cerrado, water, and a campus that is a farm. Tools and trees stay." },
 ],
 piracanga: [
 { kind: "quiet-practice", why: "A spiritual village on a Bahia beach. Silence, substances, and the river are the house rules visitors came for, and sometimes ignore." },
 { kind: "guest-stay", why: "A visitable village with a strong retreat economy. The compact is which house is the programme." },
 { kind: "course-host", why: "Courses pay the place. Teachers are guests of a village that is also a home." },
 { kind: "membership-trial", why: "Living there is vocational. A beach does not make you a member." },
 ],
 aldeafeliz: [
 { kind: "land-care", why: "A Colombian eco-village in the mountains. Water, paths, and a mountain landscape." },
 { kind: "membership-trial", why: "A small community. The yes is social." },
 { kind: "conflict-circle", why: "A village that chose a name about happiness. Process is how they stay that way." },
 { kind: "kitchen-table", why: "A common kitchen in the hills. Guests eat with the house when invited." },
 ],
 nashira: [
 { kind: "labour-roster", why: "Houses earned with 1,200 labour hours. The informal compact is the núcleos, the restaurant, and whose turn it is now that the houses are built." },
 { kind: "kitchen-table", why: "A restaurant and productive kitchens run by the women of the village. The compact is the work and the table." },
 { kind: "children-care", why: "A village of women heads of household. Shared watching of children is not optional; it still needs a roster." },
 { kind: "conflict-circle", why: "Eleven productive núcleos. Process is how a matriarchal project stays a project and not eleven arguments." },
 ],
 "el-manzano": [
 { kind: "course-host", why: "PDCs and apprenticeships on a family farm. About seven hours of guided work a day in season. The compact is the course versus the family’s house." },
 { kind: "volunteer-intern", why: "Apprentices are not members." },
 { kind: "land-care", why: "Forest, pasture, blueberries in a sea of pine. The compact is what an apprentice may cut or pick." },
 { kind: "kitchen-table", why: "A farm kitchen that feeds students. Two populations, one table, a leaving date." },
 ],
 "finca-sagrada": [
 { kind: "land-care", why: "Twenty irrigated acres plus eight hundred of mountain. The compact is that the mountain stays mountain, and guests do not treat it as a hiking concession." },
 { kind: "volunteer-intern", why: "A handful of residents. Extra hands are guests with a job." },
 { kind: "quiet-practice", why: "A biodynamic holding in an isolated valley. The rhythm of the farm is the practice; guests match it or they leave." },
 { kind: "guest-stay", why: "Visitors by arrangement. The compact is the river, the food forest, and the doors that stay shut." },
 ],
 sekem: [
 { kind: "labour-roster", why: "A farm-and-company community. The informal compact is the day’s work in fields, workshops, and schools." },
 { kind: "land-care", why: "Biodynamic desert reclamation is the founding act. Compost, tree belts, and water are the likely house rules of the oasis." },
 { kind: "children-care", why: "A Waldorf-inspired school and a university sit on the farm. The compact is how children, trainees, and company staff share a place that is also a workplace." },
 { kind: "volunteer-intern", why: "Vocational centre and visiting researchers." },
 ],
 wongsanit: [
 { kind: "quiet-practice", why: "An engaged-Buddhist ashram: quiet hours, no alcohol, no indoor smoking. The compact is the rule guests already read on the website, written so it can be signed." },
 { kind: "guest-stay", why: "Guesthouse and study visits on 34 rai of former paddies. The compact is which path is public and which hut is a home." },
 { kind: "course-host", why: "EDE courses since 2007. A course week is not ashram membership." },
 { kind: "land-care", why: "Canal, earthen buildings, herbal gardens. Guests do not redesign a foundation’s paddies." },
 ],
 ndem: [
 { kind: "labour-roster", why: "Gardens, crafts, and a village that organised so people would stay. The compact is whose turn in the garden and the workshop." },
 { kind: "land-care", why: "Sahel gardens against peanut-basin decline. Water, trees, and a village that is not a project site for visitors to rearrange." },
 { kind: "kitchen-table", why: "A Bayfall village table. Guests eat as guests of a household, not as hotel clients of an ONG." },
 { kind: "volunteer-intern", why: "The NGO draws visitors. They learn Maam Samba and the gardens; they do not become the village." },
 ],
 songhai: [
 { kind: "volunteer-intern", why: "A teaching campus: trainees become rural entrepreneurs and leave. The compact is the training contract." },
 { kind: "course-host", why: "UN Centre of Excellence. Courses and delegations walk a farm that also has to produce." },
 { kind: "land-care", why: "Zero-waste loops, the waste of one unit is the input of another. Visitors do not break the loop for a photograph of the fish tanks." },
 { kind: "labour-roster", why: "Crops, livestock, aquaculture, processing. Staff and trainees work a campus." },
 { kind: "animals-stock", why: "Fish, livestock, and a zero-waste loop. Visitors do not feed the tanks a picnic; the compact is whose animal and who closes the gate." },
 ],
 tlholego: [
 { kind: "course-host", why: "A learning village on 150 hectares. Courses and eco-venue stays are the public door; the compact is the classroom versus the farm household." },
 { kind: "land-care", why: "Bushveld restoration on a former cattle farm. Guests do not treat the Magaliesberg as a game-lodge garden." },
 { kind: "volunteer-intern", why: "Camps and stays." },
 { kind: "kitchen-table", why: "A food garden that feeds courses. Two populations, one kitchen." },
 ],
 lilleoru: [
 { kind: "quiet-practice", why: "A yoga-and-consciousness village. Practical Consciousness courses have hours; residents live them when the course goes home." },
 { kind: "course-host", why: "Courses, events, and a school. The compact is the Flower of Life garden as a visit, not as a festival ground." },
 { kind: "land-care", why: "30 hectares and a garden you can see from the air. Guests walk the paths; they do not shortcut the pattern." },
 { kind: "membership-trial", why: "About 30 residents and a much larger MTÜ. Living there is not the same as paying a membership fee from Tallinn." },
 ],
 zmag: [
 { kind: "course-host", why: "An educational estate that teaches permaculture by appointment. The compact is the workshop versus the houses of people who live in the village." },
 { kind: "building-code", why: "Straw-bale, tires, green roofs, the recycled estate is a classroom. Experiments still have to stand in Zagreb County weather." },
 { kind: "volunteer-intern", why: "Workshops and extra hands." },
 { kind: "land-care", why: "A seed library and a common garden. Seed leaves only as the association says." },
 ],
 guneskoy: [
 { kind: "land-care", why: "7.5 hectares of stony steppe, a CSA, and a straw-bale mandala they negotiated to keep when the railway came. The compact is the field, the fence, and the train." },
 { kind: "volunteer-intern", why: "European volunteers since 2018." },
 { kind: "labour-roster", why: "A handful of members and a CSA box. Someone still has to harvest." },
 { kind: "membership-trial", why: "Turkey’s first environmental cooperative is still small. You join the cooperative." },
 ],
 kufunda: [
 { kind: "course-host", why: "Art of Hosting, Oasis Game, Young Women are Medicine. The compact is how a programme sits on a family farm that is also about fifteen families’ home." },
 { kind: "children-care", why: "A Waldorf-inspired school on the land. The compact is the school, the families, and visitors’ children." },
 { kind: "land-care", why: "Biodynamic since 2019. Preparations, fields, and a Ruwa landscape that is not a conference centre lawn." },
 { kind: "volunteer-intern", why: "Hosting is the work. Extra hands are guests of a learning village, not heirs of a family farm." },
 ],
 glarisegg: [
 { kind: "membership-trial", why: "Outer circle, inner circle, a trial of a year or more, a joining fee historically on the order of $5,450. The compact is the path the AG and the Verein actually use." },
 { kind: "course-host", why: "A seminar centre that pays the castle roof. Academy, EDE, garden days, guests of a venue in a place that is also 37 adults’ home." },
 { kind: "kitchen-table", why: "A castle kitchen that feeds seminars and a community. Two menus, one courtyard." },
 { kind: "conflict-circle", why: "Circle culture inside the association. The likely paper is how a fight is heard before it becomes a matter for the AG." },
 { kind: "land-care", why: "Five hectares of park, forest, and lake shore. Permaculture from 2012; guests do not picnic the beds." },
 ],
 "los-horcones": [
 { kind: "care-household", why: "An autism programme in the dining hall and yards. The compact is dignity." },
 { kind: "labour-roster", why: "A producer cooperativa in the desert. Farm, crafts, and the programme are the week. Someone still writes the board." },
 { kind: "membership-trial", why: "A small family-core Walden Two. The yes is slow and measured. There is no parcela to buy." },
 { kind: "children-care", why: "Homeschooling in Spanish, English, mathematics, and behavior analysis. Children are the experiment and the members." },
 ],
 tosepan: [
 { kind: "land-care", why: "Coffee gardens of two hundred species, a million-plant nursery, milpa, and stingless bees. The compact is the shade and the seed." },
 { kind: "common-purse", why: "A caja called money-of-all, fair-trade premiums, and nine cooperatives. The informal layer is what a socio may actually keep." },
 { kind: "children-care", why: "A bilingual school from preschool through music. The compact is the line between school, house, and co-op." },
 { kind: "guest-stay", why: "Tosepan Kali cabins are the public door. Guests of a cooperative lodge are not socios on night two." },
 { kind: "labour-roster", why: "Coffee, pepper, tourism, bamboo, radio. Membership is work in a village that is also 39 municipalities." },
 ],
 "teopantli-kalpulli": [
 { kind: "quiet-practice", why: "An ashram that became a kalpulli. Ceremony, visiting abuelos, and a household spiritual timetable guests do not improvise." },
 { kind: "land-care", why: "Dry pasture reforested at the Primavera edge. Internal lots versus the reserve still need a sentence." },
 { kind: "course-host", why: "Festivals and a Vision Council of five hundred. The compact is how a gathering sits on 22 families’ land." },
 { kind: "membership-trial", why: "A family A.C. with internal parcels. The yes is social and spiritual." },
 ],
 litibu: [
 { kind: "building-code", why: "Eight eco casas, solar, cisterns, a common blackwater system. A new roof still has to look like it belongs in the beach forest." },
 { kind: "membership-trial", why: "Visit, fee, associate period, dues, work. A casa key is not automatic membership." },
 { kind: "land-care", why: "Jungle, mangrove, food forest, greywater beds. Guests do not treat the common ground as a beach club." },
 { kind: "guest-stay", why: "Sojourner stays exist. The eight casas are homes beside a FONATUR resort. Two populations, one bay." },
 ],
 "u-yits-kaan": [
 { kind: "course-host", why: "A campesino internado. The compact is how a recorrido uses a milpa that is also a school." },
 { kind: "land-care", why: "Melipona jobones, criollo seed, milpa. Guests do not harvest the dew as a souvenir." },
 { kind: "volunteer-intern", why: "Students historically boarded." },
 { kind: "quiet-practice", why: "Maní is the town of the Auto de Fe. Ceremony and milpa sit on purpose on that memory." },
 ],
 "tierra-del-sol": [
 { kind: "course-host", why: "Guided visits and thematic days with lunch. The compact is how a tour uses a four-hectare farm that is also a home." },
 { kind: "volunteer-intern", why: "Apprentices and volunteers. Labour plus learning." },
 { kind: "land-care", why: "Dry-tropics syntropic rows. Neighbours once doubted the title; guests still do not pick the medicinal beds." },
 { kind: "kitchen-table", why: "The villa kitchen serves what the land grew. Two menus when a group is in: the farm’s and the tour’s." },
 ],
 "bosque-village": [
 { kind: "volunteer-intern", why: "Participants apply with skills. Three thousand visitors." },
 { kind: "land-care", why: "Pine, oak, madrone, a food forest, composting toilets. The founder holds title; guests hold tools." },
 { kind: "membership-trial", why: "A single invested member. Intern first. The 2016 nonprofit was supposed to take staged control." },
 { kind: "media-story", why: "The domain was eaten by slots. Every visitor with a camera still wants the cob and the sauna. The compact is who speaks for the forest." },
 ],
 "via-organica": [
 { kind: "course-host", why: "School groups, activist delegations, restoration camps. The compact is how a tour uses an 80 ha ranch that also has to milk and plate." },
 { kind: "land-care", why: "Agave, mesquite, rotational grazing, olla irrigation. Guests do not treat the Billion Agave rows as a sculpture garden." },
 { kind: "volunteer-intern", why: "Agronomy students and servicio social." },
 { kind: "guest-stay", why: "Eco-cabins and a restaurant. Two doors: the ranch tour and the town store. Residents and staff still have to eat somewhere the groups are not." },
 ],
 crisalium: [
 { kind: "land-care", why: "Five hectares inside a 143 ha park with a 2020 easement. Conservation polygons are not a picnic map." },
 { kind: "course-host", why: "Permaculture and NVC in a forest that is also ten families’ home. The compact is which cabin is the course." },
 { kind: "volunteer-intern", why: "Workaway stays. Labour plus a bunk. GEN: not open to new members." },
 { kind: "children-care", why: "Children growing up in El Encuentro. The park is public-ish." },
 { kind: "membership-trial", why: "A family A.C. that has closed the residential door while keeping the educational one open." },
 ],
 "inla-kesh": [
 { kind: "course-host", why: "A Gaia Education EDE on two highland hectares. The compact is how a month-long course sits on ten adults’ home." },
 { kind: "relationship-culture", why: "A Tamera-lineage biotopo. Meta-relational practice is the curriculum. Guests follow the compact they came to study." },
 { kind: "quiet-practice", why: "In Lak'ech as an ethic. Silence, food, and the circle are asked of people who live here, and of the EDE." },
 { kind: "membership-trial", why: "A tiny residential circle. Courses have a public door; living there is relational." },
 { kind: "children-care", why: "Five children on two hectares with course guests in season. The compact is the line between programme and home." },
 ],
 "vicente-guerrero": [
 { kind: "land-care", why: "Criollo maize, soil, and water in Españita. Guests of a fair do not treat a promoter’s milpa as a demonstration plot they own for the afternoon." },
 { kind: "course-host", why: "Campesino-a-campesino is the method. The compact is how a visiting promoter sleeps in a village that is also a home." },
 { kind: "labour-roster", why: "Roads and water were the 1973 start. Training days still need a roster. Someone writes the board." },
 { kind: "membership-trial", why: "You become a promoter in a living village. The yes is social and agricultural." },
 ],
 nanciyaga: [
 { kind: "guest-stay", why: "Cabins, restaurant, temazcal. Two hectares of visitors, twelve of jungle. The compact is which path is the tour." },
 { kind: "land-care", why: "Macaws, howler monkeys, a biosphere next door. Guests do not treat the recovery work as a petting zoo." },
 { kind: "media-story", why: "Medicine Man and Apocalypto. Every visitor with a camera still wants the lagoon. The compact is who speaks for the 14 ha." },
 { kind: "animals-stock", why: "Crocodiles are fenced. Macaws are not a photo prop. Feed, vet, and the ethics of a reserve that also plates lunch." },
 ],
 "pueblo-sacbe": [
 { kind: "building-code", why: "Rounded hurricane houses, no glass, no grid, biodigesters. A new roof still has to look like it belongs in the jungle." },
 { kind: "land-care", why: "54 ha of jungle and resident cenotes. Guests of a rental do not treat the water system as a club." },
 { kind: "membership-trial", why: "A lot plus the bylaws. A casa key is not automatic village. Confirm the fideicomiso." },
 { kind: "guest-stay", why: "Retreats and Airbnbs sit next to families. Two populations, one off-grid settlement. The compact is whose cenote." },
 ],
 ixixtlan: [
 { kind: "course-host", why: "Retreats and PeregrinArte on a hill that is also a home. The compact is which cabin is the course." },
 { kind: "quiet-practice", why: "A sanctuary facing two volcanoes. Silence, vegetarian kitchen, ceremony. Guests follow the compact they came to study." },
 { kind: "land-care", why: "Garden and sacred-geometry cabins. Guests do not pick the hill as a viewpoint bouquet." },
 { kind: "membership-trial", why: "GEN: open to members. A founder-led circle. The yes is relational." },
 ],
 "huerto-roma-verde": [
 { kind: "land-care", why: "A city lot that used to be rubble. Compost, nursery, punto limpio. Neighbours still have to live next to the market." },
 { kind: "course-host", why: "Workshops in a huerto that is also a civic hall. The compact is which afternoon is the class." },
 { kind: "volunteer-intern", why: "The 2012 clearing was volunteer." },
 { kind: "media-story", why: "Every earthquake anniversary wants the same photograph. The compact is who speaks for Jalapa 234." },
 ],
 "rancho-la-salud": [
 { kind: "kitchen-table", why: "Monthly community dinners and a 3,000 sq ft common house. Two menus: the house’s and the guest’s." },
 { kind: "building-code", why: "Hacienda style, bóveda brick, Talavera, miradors. A new Villa still has to look like Ajijic." },
 { kind: "membership-trial", why: "A deed plus modified consensus. Buying in is the trial. Confirm a unit is actually for sale." },
 { kind: "guest-stay", why: "Guest rooms in the common house. Residents still have to eat somewhere the tours are not." },
 ],
 tamarindos: [
 { kind: "guest-stay", why: "Cabins, zip-line, restaurant, river. The compact is which bank is the tour and which is someone’s lot." },
 { kind: "building-code", why: "Lots from 500 m² in selva baja. A new roof still has to belong on the Jamapa." },
 { kind: "land-care", why: "A 2023 flood is in the record. Guests do not treat the river as a park they own for the afternoon." },
 { kind: "membership-trial", why: "A lot on the village site. Confirm services and the flood line." },
 ],
 hapori: [
 { kind: "building-code", why: "Independent off-grid solar, biodigesters, passive solar, local materials. A new house still has to mean it." },
 { kind: "land-care", why: "Former pasture, native planting, swales, mature trees kept. Guests do not treat the regeneration rows as a sculpture garden." },
 { kind: "membership-trial", why: "A land-and-home package plus two layers of covenant, Águila Real and Hapori. A key is a purchase." },
 { kind: "kitchen-table", why: "Common house, palapa, temazcal. The compact is when the palapa is a living room rather than a listing photo." },
 ],
 sekkan: [
 { kind: "membership-trial", why: "A letter, a tour, a group yes. Philosophical fit and emotional maturity." },
 { kind: "labour-roster", why: "Two hours a week. Six families. Someone still writes the board." },
 { kind: "land-care", why: "38 acres of former Rancho Lacayo, Chichimec ancestral land acknowledged." },
 { kind: "guest-stay", why: "Lunch and 1–2 nights by arrangement; donation for the farm. Guests are not members on night two." },
 ],
 "nuevo-san-juan": [
 { kind: "labour-roster", why: "Sawmill, resin, furniture, water, and the forest itself. Nine hundred permanent jobs. Someone still writes the round." },
 { kind: "land-care", why: "18,138 ha of pine-oak on the Parícutin lava. FSC is the certificate; the informal rule is still: do not treat the communal forest as a park." },
 { kind: "media-story", why: "The buried church and the Equator Prize. Every journalist wants the lava. The compact is who speaks for the comuneros." },
 { kind: "membership-trial", why: "A comunero census. The asamblea is the yes. Visitors to the volcano do not become members on the walk back." },
 ],
 cedicam: [
 { kind: "land-care", why: "Contour ditches, ocote pines, milpa. Five metres of lost topsoil is the curriculum. Guests do not walk the terraces as a sculpture garden." },
 { kind: "labour-roster", why: "Campesino-a-campesino. The A-frame level and the nursery round are the week. Someone still digs the ditch." },
 { kind: "volunteer-intern", why: "Partner NGOs and the Goldman-era visitors. A stay is labour plus a bed." },
 { kind: "course-host", why: "The hills teach. The compact is which afternoon is the class and which is someone’s milpa." },
 ],
 "sierra-gorda": [
 { kind: "land-care", why: "383,567 ha, eleven core zones, a citizen biosphere. Guests do not treat a waterfall as a pool they own for the afternoon." },
 { kind: "guest-stay", why: "Missions, trails, community lodging. Residents of Jalpan still have to live somewhere the vans are not." },
 { kind: "media-story", why: "Wangari Maathai, UNEP, UNESCO Green Citizens. Every camera wants Pati and a mountain. The compact is who speaks for the IAP." },
 { kind: "course-host", why: "Schools, radio, carbon workshops. The sierra is a classroom that is also home. Which hour is the class." },
 ],
 "la-ventanilla": [
 { kind: "animals-stock", why: "Crocodiles in the nursery, mangroves on Uma Island, deer. Feed, release, and the ethics of a tour that also hatches the animals people came to see." },
 { kind: "guest-stay", why: "Canoes from a beach village. Two cooperatives on one lagoon. The compact is whose boat and whose bank." },
 { kind: "land-care", why: "A mangrove that used to be a hunt. Guests do not treat the Tonameca as a park they own for the afternoon." },
 { kind: "labour-roster", why: "Twenty-five families, a UMA, a paddle. Someone still cleans the canoe." },
 ],
 "punta-laguna": [
 { kind: "animals-stock", why: "Spider monkeys and howlers on a village trail. The compact is distance, food, and who does not make a primate a prop." },
 { kind: "guest-stay", why: "Tours that pay thirty families. Guests still have to leave the thatch as a home." },
 { kind: "land-care", why: "5,367 ha of Otoch Ma’ax Yetel Kooh. The ANP is the designation; the informal rule is still: stay on the guide’s path." },
 { kind: "labour-roster", why: "Revenue divided among families. Guiding is the weekday. Someone still walks first." },
 ],
 "yomol-atel": [
 { kind: "labour-roster", why: "Coffee, honey, soap, a café in the city. 341 families. Someone still picks, roasts, and pours." },
 { kind: "land-care", why: "Tseltal coffee gardens in the northern Chiapas jungle. The federation is the market." },
 { kind: "kitchen-table", why: "Capeltic is a public cup." },
 { kind: "membership-trial", why: "A socio in a member community. The congress every three years is the yes. Jesuit history is not a waiting list." },
 ],
 tierraluz: [
 { kind: "building-code", why: "Cob, superadobe, local brick, independent solar. A new house still has to mean off-grid." },
 { kind: "land-care", why: "8,500 m² of commons, a food forest, a yoga platform. Guests do not treat the mango as a hotel buffet." },
 { kind: "membership-trial", why: "A titled lot plus A.C. membership. A key is a purchase. Confirm two of nineteen still remain before you treat the hill as open." },
 { kind: "kitchen-table", why: "A small neighbourhood above the surf. The compact is when the platform is a living room rather than a listing photo." },
 ],
 "huerto-tlatelolco": [
 { kind: "land-care", why: "1,650 m² that used to be a tower. Compost, seed bank, edible forest. Neighbours still have to live next to the beds." },
 { kind: "course-host", why: "Workshops in a huerto that is also a civic hall. The compact is which afternoon is the class." },
 { kind: "volunteer-intern", why: "The 2013 opening was neighbours." },
 { kind: "media-story", why: "Every earthquake anniversary wants the same photograph. The compact is who speaks for the footprint." },
 ],
 kuyabeh: [
 { kind: "building-code", why: "About 7% of a lot is buildable. Off-grid. A new roof still has to look like jungle." },
 { kind: "land-care", why: "375 ha, 25 ha of commons, a cenote. Guests of the hotel do not treat the lagoon as a club they own for the afternoon." },
 { kind: "membership-trial", why: "A ½-ha lot plus the construction rules. Apply, then a deed. Confirm the phase." },
 { kind: "guest-stay", why: "Hotel, restaurant, temazcal. Residents still have to live somewhere the tours are not." },
 ],
 "cabo-pulmo": [
 { kind: "land-care", why: "A no-take reef since 1995. The informal rule is still: do not spear, and tell the newcomer." },
 { kind: "guest-stay", why: "Dive boats and bungalows on a small shore. Family yards are not the second beach club." },
 { kind: "media-story", why: "Every film wants the 462% and the Castro family. The compact is who speaks for the village when the camera arrives." },
 { kind: "animals-stock", why: "The reef is the stock. Boats, moorings, and whose dive is first light." },
 ],
 "baja-ecovillage": [
 { kind: "land-care", why: "A 54-acre canyon park. Seedlings, cages, erosion. Guests plant; they do not redesign the 200-year plan." },
 { kind: "volunteer-intern", why: "Planting days are the door." },
 { kind: "building-code", why: "Earth-friendly houses on town parcels. The hill still has a look the founder is stewarding." },
 { kind: "guest-stay", why: "Punta Banda has lookout parking. The canyon is not La Bufadora." },
 ],
 "baja-biosana": [
 { kind: "building-code", why: "Cob, earthbag, a dome. Each house a method. A new wall still has to belong to the oasis." },
 { kind: "course-host", why: "Retreats and natural-building workshops. The compact is which bed is the course and which is a home." },
 { kind: "membership-trial", why: "A house and a yes. Nine people." },
 { kind: "land-care", why: "Greening 11 ha of desert. Greywater and trees. Guests do not wander the Sierra as if it were the programme." },
 ],
 "san-jose-de-la-zorra": [
 { kind: "quiet-practice", why: "Kumiai language and authority. Guests are not owed a ceremony." },
 { kind: "land-care", why: "1,740 ha of a people. The wine valley next door is not this dirt." },
 { kind: "media-story", why: "Every documentary wants the last speakers. Do not photograph a child as the story." },
 { kind: "guest-stay", why: "Only if the community is receiving. sanjosedelazorra.com." },
 ],
 "rancho-pacifico-baja": [
 { kind: "guest-stay", why: "Campground and bakery." },
 { kind: "land-care", why: "15 acres of desert permaculture. Guests water what they used." },
 { kind: "membership-trial", why: "A PDF invite. Write, visit, see if they are taking people." },
 { kind: "kitchen-table", why: "Wood-fired bread is the public face. Residents still eat when the vans leave." },
 ],
 tateikie: [
 { kind: "quiet-practice", why: "Cargos are civil and religious. Guests are not owed a ceremony, a yarn painting, or a pilgrimage slot to Wirikuta." },
 { kind: "land-care", why: "Communal Wixárika sierra in Mezquitic. Sixteen agencies look here." },
 { kind: "media-story", why: "Every documentary wants the last Huichol photograph. Do not photograph ceremony, children, or a cargo as content. The asamblea speaks, or nobody does." },
 { kind: "guest-stay", why: "Only if the comunidad is receiving. Guests leave." },
 ],
 ayotitlan: [
 { kind: "land-care", why: "34,700 ha delivered of a larger decree. Coffee, milpa, cloud forest. Guests do not treat a waterfall as a hectare they may pick." },
 { kind: "quiet-practice", why: "Consejo de Mayores. Guests are not owed a council, a mine tour, or a story of the disappeared." },
 { kind: "media-story", why: "Mining, the biosphere, the undelivered hectáreas. Every camera wants the same mountain. The compact is who speaks for the 88 localities." },
 { kind: "guest-stay", why: "Only if the ejido is receiving." },
 ],
 "bosque-la-primavera": [
 { kind: "land-care", why: "30,500 ha of oak and pine on a caldera. Fire season is the weekday. Guests stay on the trail; they do not cut, camp where bans say no, or treat the lung as a Zapopan backyard." },
 { kind: "guest-stay", why: "Public trailheads from Zapopan and Tala. Closures in fire season. Teopantli Kalpulli is a neighbour; their pasture is not the APFF tour." },
 { kind: "animals-stock", why: "White-tailed deer, cattle on the edge, the forest still a stock. Whose herd, whose firebreak, who closes the gate." },
 { kind: "media-story", why: "Every Guadalajara fire wants the same smoke photograph. The compact is who speaks for the 30,500 ha when the city is watching." },
 ],
 kasisi: [
 { kind: "course-host", why: "Three-to-five-day and two-week courses. The compact is which field is the class and which is the dairy." },
 { kind: "land-care", why: "80 irrigated hectares, two dams, no-till, oxen. Guests do not treat the Chongwe dirt as a picnic site." },
 { kind: "animals-stock", why: "A dairy herd and the oxen that replaced the tractor. Whose cow, whose span, who is on the morning round." },
 { kind: "volunteer-intern", why: "Farmers and Jesuit visitors." },
 ],
 "awra-amba": [
 { kind: "labour-roster", why: "Six days’ work, one day free, equal wages. Weaving, mills, the farm that remains. Someone still writes the round." },
 { kind: "quiet-practice", why: "No religion, no hierarchy of men over women. The compact is what a guest may ask and what the village will not perform for a camera." },
 { kind: "guest-stay", why: "A guest committee. Journalists, bishops, consultants. Houses are homes; the library is the public room." },
 { kind: "membership-trial", why: "Being of the village. The cooperative is the yes. Ethiopian land is not a portal purchase." },
 ],
 umoja: [
 { kind: "children-care", why: "Girls running from child marriage still arrive. The compact is refuge." },
 { kind: "guest-stay", why: "Twelve cottages, men in daylight only. Residents still have to live somewhere the road is not." },
 { kind: "labour-roster", why: "Beads, cottages, the Waso. Someone still builds a manyatta and cooks." },
 { kind: "media-story", why: "Every camera wants Lolosoli and the beads. The compact is who speaks for a village that has also been threatened at the gate." },
 ],
 "st-jude": [
 { kind: "course-host", why: "Integrated organic farming, 75% practical. The compact is which bed is the class and which is someone’s lunch." },
 { kind: "land-care", why: "Feed the soil so that it feeds you. Nurseries, mangoes, compost. Guests do not walk the Busense farm as a sculpture garden." },
 { kind: "volunteer-intern", why: "Partner NGOs and farmer groups. A stay is labour plus a bed." },
 { kind: "labour-roster", why: "Women’s cooperatives, a dried-fruit plant, the weekday extension round." },
 ],
 "khula-dhamma": [
 { kind: "building-code", why: "Cob, straw bale, thatch, bottle glass, old windscreens. A new roof still has to look like the Wild Coast." },
 { kind: "land-care", why: "180 ha (or 300) of bushveld on the Quko. Guests do not treat the food forest as a hotel buffet." },
 { kind: "guest-stay", why: "Retreats, cob rooms, camping. Residents still have to live somewhere the yoga is not." },
 { kind: "volunteer-intern", why: "15–20 hours a week for a bed, when the site is receiving." },
 ],
 nadeet: [
 { kind: "course-host", why: "School groups, solar cooking, biodiversity. The compact is which dune is the class." },
 { kind: "land-care", why: "A centre on NamibRand. Wood is scarce; parabolic cookers are the rule. Guests do not treat the reserve as a public beach." },
 { kind: "volunteer-intern", why: "Teach for ESD, internships, research." },
 { kind: "animals-stock", why: "Oryx and the desert. Distance, and who does not chase a photograph into the dunes." },
 ],
 kaydara: [
 { kind: "course-host", why: "Come to the school of life. Sixteen villages. The compact is which plot is the class and which is someone’s field." },
 { kind: "land-care", why: "Salinisation has taken more than 60% of Fimela. Trees, coconut, agroecology against the salt. Guests do not walk the grove as a park." },
 { kind: "volunteer-intern", why: "Young people who would otherwise leave for Dakar." },
 { kind: "labour-roster", why: "Nine staff, rotating students, a farm-school week. Someone still waters the coconut." },
 ],
 otepic: [
 { kind: "children-care", why: "22 orphans at Tabasamu. Safeguarding cannot be only informal, and yet most of the day is the garden." },
 { kind: "course-host", why: "Permaculture trainings for Kitale and East Africa. The compact is which bed is the class." },
 { kind: "land-care", why: "Three gardens, 10 ha at Sabwani. Guests do not treat Upendo as a picnic concession." },
 { kind: "quiet-practice", why: "Alcohol and drugs forbidden. A peace-village rule." },
 ],
 ndanifor: [
 { kind: "media-story", why: "Paradise on earth, then the war. Every camera wants the looted lodge. The compact is who speaks for a team that was expelled." },
 { kind: "course-host", why: "Trainings continue off the original dirt. The compact is which classroom is still standing." },
 { kind: "land-care", why: "Five acres that were a demonstration and are not currently a village." },
 { kind: "membership-trial", why: "The NGO is the remaining yes. Confirm before you plan a move-in." },
 ],
 basaisa: [
 { kind: "land-care", why: "Rooftop PV, biogas, a Delta village’s fields. Guests do not treat the association roof as a demonstration they own." },
 { kind: "course-host", why: "Researchers and trainees have used Basaisa as a living lab since 1974. The compact is which house is the classroom." },
 { kind: "guest-stay", why: "No hotel desk. A family lane is a home. New Basaisa in Sinai is a different bed." },
 { kind: "media-story", why: "Egypt’s solar village. Every camera wants the panel on the mud roof. The compact is who speaks for the association." },
 ],
 "boabeng-fiema": [
 { kind: "animals-stock", why: "Seven hundred monkeys in the streets, a cemetery of small coffins. Whose kitchen they enter, and that visitors do not feed them." },
 { kind: "guest-stay", why: "A national tourist site inside two living villages. The compact is which door is the tour and which is still a home." },
 { kind: "land-care", why: "4.4 km² of forest the villages refused to hunt. Guests walk with a guide; they do not take a tree." },
 { kind: "quiet-practice", why: "The monkeys are children of the gods." },
 ],
 fambidzanai: [
 { kind: "course-host", why: "PDCs and an agroecology diploma. The compact is which bed is the class and which is the PVO’s own food." },
 { kind: "land-care", why: "A Stapleford training farm. Guests do not treat Dovedale Road as a picnic concession." },
 { kind: "volunteer-intern", why: "Farmers and diploma students." },
 { kind: "labour-roster", why: "Soil labs, seed, the beds. Someone still writes the round." },
 ],
 guie: [
 { kind: "land-care", why: "Wégoubri hedges, ponds, bunds. Guests do not treat a bocage perimeter as a picnic site." },
 { kind: "course-host", why: "CFAR trains bocage builders. The compact is which field is the class." },
 { kind: "labour-roster", why: "Village perimeters from 2 ha to Tankouri 100 ha. Someone still digs the pond." },
 { kind: "volunteer-intern", why: "A season of hedges at CFAR." },
 ],
 chikukwa: [
 { kind: "land-care", why: "Springs, contours, vetiver, woodlots on communal land. Guests do not treat a restored hillside as a picnic concession." },
 { kind: "course-host", why: "Chitekete centre, kitchen, dormitory. The compact is which hall is the class." },
 { kind: "labour-roster", why: "Gift-economy community works. Someone still writes the contour round." },
 { kind: "membership-trial", why: "Being of the six villages. Trainees come and go." },
 ],
 "il-ngwesi": [
 { kind: "guest-stay", why: "Community-owned bandas on a rocky outcrop. Six villages below are homes." },
 { kind: "animals-stock", why: "Wildlife and cattle on the same group ranch. Whose grazing, whose rhino, who is on the ranger round." },
 { kind: "land-care", why: "8,645 ha conserved in the prize account. Guests walk with ranch rules, not as if Lewa next door were the title." },
 { kind: "media-story", why: "The first upmarket Maasai-owned lodge. Every camera wants the same escarpment. Who speaks for the six villages." },
 ],
 lynedoch: [
 { kind: "building-code", why: "An HOA code of conduct on 6 ha. Ecological design, mixed income, child-centred streets. The compact is what a freehold house may actually look like." },
 { kind: "guest-stay", why: "Institute programmes and a school precinct. Houses are homes; the old hotel is the public door." },
 { kind: "membership-trial", why: "To join: buy a house, sit the LHOA." },
 { kind: "children-care", why: "Spark school, a crèche, a child-centred precinct as the social argument. Safeguarding cannot be only informal." },
 ],
 anja: [
 { kind: "animals-stock", why: "About 300 ring-tailed lemurs on 30 ha. Local fady already forbade eating them. Do not feed; do not walk unguided." },
 { kind: "guest-stay", why: "A gate on the RN7. Guides required." },
 { kind: "land-care", why: "Granite woodland and a lake the association gazetted. Guests stay on the path." },
 { kind: "media-story", why: "The densest ring-tails on the south road. Every camera wants the same troop. Who speaks for Anja Miray." },
 ],

 celo: [
 { kind: "membership-trial", why: "Consensus, a waiting list, a refundable land fee. Houses may be owned; dirt is not. The compact is how someone leaves without a fight over a lease they never thought was title." },
 { kind: "land-care", why: "1,200 acres of South Toe. Assigned land, a neighborhood farm, Helene’s flood line. Guests of the school and camp stay on programme ground." },
 { kind: "children-care", why: "Arthur Morgan School, a preschool, Camp Celo. Safeguarding cannot be only informal when three children’s programmes sit on the trust." },
 { kind: "building-code", why: "A house you may own on dirt you may not. What can be built, what the refundable fee covers, what happens to the building when you go." },
 ],
 "sunrise-ranch": [
 { kind: "guest-stay", why: "Pavilion, dome, guest rooms. Staff homes are not the tour. Programme guests stay where they are put." },
 { kind: "quiet-practice", why: "Attunement culture of the Emissaries. Silence, substances, and what a retreat guest is asked to follow." },
 { kind: "labour-roster", why: "Resident staff cook, farm, and host." },
 { kind: "media-story", why: "A geodesic dome against the Front Range. Every camera wants the same valley. Who speaks for the Emissaries." },
 ],
 "ananda-village": [
 { kind: "quiet-practice", why: "Kriya yoga, Temple of Light, two retreats. Guests follow retreat form; housing areas are homes." },
 { kind: "guest-stay", why: "Expanding Light and the Meditation Retreat are the public doors. Drop-in office hours are not a licence to walk every driveway." },
 { kind: "membership-trial", why: "Spiritual membership, cooperative housing inventory, independent finances. How someone leaves a dwelling they invested in without treating it as a Sierra lot." },
 { kind: "children-care", why: "Living Wisdom School on the same land. Safeguarding cannot be only informal." },
 ],
 sandhill: [
 { kind: "membership-trial", why: "A small board of members, recruiting. Visit, intern, then ask. The 2019 compact is private dwellings on common land or revived common purse unless they say so." },
 { kind: "land-care", why: "168 acres next to Dancing Rabbit. Hay, forest, gardens. Guests do not treat a DR tour as a Sandhill invitation." },
 { kind: "labour-roster", why: "Four adults and two youth cannot fake a 1970s labour credit system. Who actually feeds the animals." },
 { kind: "common-purse", why: "The FEC purse ended in 2019. Monthly contributions now. Do not arrive expecting sorghum-era income-sharing unless the board has put it back." },
 ],
 linnaea: [
 { kind: "volunteer-intern", why: "Agricultural internships and steward openings. 314 acres need people who will farm." },
 { kind: "course-host", why: "PDC, UVic permaculture, Power of Hope. Course land is not a campsite you extend." },
 { kind: "land-care", why: "No-sale trust and a 1999 covenant. Trails to Hague Lake are a local culture." },
 { kind: "guest-stay", why: "Family farmstays. The lake is Gunflint; the houses are steward homes." },
 ],
 "lost-valley": [
 { kind: "course-host", why: "PDC, EDE, Community Experience Week. The oak savanna is a classroom with residents on it." },
 { kind: "volunteer-intern", why: "Staff, renters, volunteers of Meadowsong. Affordable housing is a programme." },
 { kind: "guest-stay", why: "Lodge and lodging options. Meadowsong houses are homes. Book through the education center." },
 { kind: "land-care", why: "87 acres of oak savanna and mixed conifer. Lookout Point is the view, not the title." },
 ],
 windsong: [
 { kind: "building-code", why: "A strata and a cohousing culture. What a freehold townhome may look like, who uses the common house, who books the guest rooms." },
 { kind: "kitchen-table", why: "5,000 sq ft common house. Who cooks, who is a guest, when the dining room is a living room rather than a hostel." },
 { kind: "membership-trial", why: "To join: buy a unit, sit consensus. How a household leaves without a fight over the atrium." },
 { kind: "children-care", why: "Playroom, loft, two playgrounds. Thirty-four households. Safeguarding cannot be only informal." },
 ],
 "camphill-ontario": [
 { kind: "care-household", why: "Adults with developmental disabilities in extended-family houses. The compact is who lives with whom, and that a guest is not a second coworker." },
 { kind: "volunteer-intern", why: "Coworker years still exist. Vocational, safeguarded." },
 { kind: "animals-stock", why: "Biodynamic farm. Whose animals, whose milk, who is on the morning round." },
 { kind: "children-care", why: "A care community. Photography of villagers is not a souvenir. Safeguarding is the point of the charity." },
 ],
 yarrow: [
 { kind: "building-code", why: "Ecovillage zoning 2006, a 33-home strata, timber-frame duplexes. What a Groundswell unit may look like, and that the farm is not the backyard you fence." },
 { kind: "land-care", why: "Twenty organic acres and Stewart Creek. Farm lessees, a food forest, a salmon-bearing stream. Guests stay off the beds." },
 { kind: "membership-trial", why: "Buy a strata unit, or join a farm lease, or the deli co-op. Three doors, one umbrella." },
 { kind: "kitchen-table", why: "Groundswell common house. Who cooks, who is a child of the 33, when the deli is the public table instead." },
 ],
 ecoreality: [
 { kind: "membership-trial", why: "Member-funder shares in a s. 149(1)(e) co-op. They have advertised for years. The compact is who is actually on the 43 acres this season." },
 { kind: "land-care", why: "Class 2 ALR, two streams, a 61-acre neighbour that is not theirs. Guests do not flatten the map." },
 { kind: "animals-stock", why: "Goats have been the public photo. Whose animals, whose milk, who is on the round." },
 { kind: "guest-stay", why: "A small farm with two houses. Stay is by arrangement." },
 ],
  ...asiaInformal,
  ...russiaInformal,
  ...usaMoreInformal,
  ...polandInformal,
  ...volunteerBatchInformal,
  ...formerInformal,
  ...formerMoreInformal,
  ...formerClosedInformal,
  ...livingMoreInformal,
  ...livingBatch2Informal,
  ...livingBatch3Informal,
  ...livingBatch4Informal,
  ...livingBatch5Informal,
  ...livingBatch6Informal,
  ...livingBatch7Informal,
  ...livingBatch8Informal,
  ...livingBatch9Informal,
  ...livingBatch10Informal,
  ...livingBatch11Informal,
  ...livingBatch12Informal,
  ...livingBatch13Informal,
  ...livingBatch14Informal,
  ...livingBatch15Informal,
  ...livingBatch16Informal,
  ...livingBatch17Informal,
  ...livingBatch18Informal,
  ...livingBatch19Informal,
  ...livingBatch20Informal,
  ...livingBatch21Informal,
  ...livingBatch22Informal,
  ...livingBatch23Informal,
  ...livingBatch24Informal,
  ...livingBatch25Informal,
  ...livingBatch26Informal,
  ...livingBatch27Informal,
  ...livingBatch28Informal,
  ...livingBatch29Informal,
  ...livingBatch30Informal,
  ...livingBatch31Informal,
  ...livingBatch32Informal,
  ...livingBatch33Informal,
  ...livingGlampingInformal,
  ...sustainableEcovillageInformal,
  ...maitreyaEcovillageInformal,
};

export function informalFor(slug: string): InformalAgreement[] {
 const tailored = uniqueGovernanceInformal[slug];
 if (tailored) return tailored;
 const row = informalBySlug[slug];
 if (!row) {
 throw new Error(`Missing informal-agreement data for ${slug}`);
 }
 return row;
}

export function compactKindCounts() {
 const counts = new Map<string, number>();
 for (const list of Object.values(informalBySlug)) {
 for (const row of list) {
 counts.set(row.kind, (counts.get(row.kind) ?? 0) + 1);
 }
 }
 return counts;
}
