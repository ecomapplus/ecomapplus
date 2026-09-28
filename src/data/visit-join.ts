import { asiaVisitJoin } from "./asia-details";
import { russiaVisitJoin } from "./russia-details";
import { usaMoreVisitJoin } from "./usa-details";
import { polandVisitJoin } from "./poland-details";
import { volunteerBatchVisitJoin } from "./volunteer-batch-details";
import { formerVisitJoin } from "./former-details";
import { formerMoreVisitJoin } from "./former-more-details";
import { formerClosedVisitJoin } from "./former-closed-details";
import { livingMoreVisitJoin } from "./living-more-details";
import { livingBatch2VisitJoin } from "./living-batch2-details";
import { livingBatch3VisitJoin } from "./living-batch3-details";
import { livingBatch4VisitJoin } from "./living-batch4-details";
import { livingBatch5VisitJoin } from "./living-batch5-details";
import { livingBatch6VisitJoin } from "./living-batch6-details";
import { livingBatch7VisitJoin } from "./living-batch7-details";
import { livingBatch8VisitJoin } from "./living-batch8-details";
import { livingBatch9VisitJoin } from "./living-batch9-details";
import { livingBatch10VisitJoin } from "./living-batch10-details";
import { livingBatch11VisitJoin } from "./living-batch11-details";
import { livingBatch12VisitJoin } from "./living-batch12-details";
import { livingBatch13VisitJoin } from "./living-batch13-details";
import { livingBatch14VisitJoin } from "./living-batch14-details";
import { livingBatch15VisitJoin } from "./living-batch15-details";
import { livingBatch16VisitJoin } from "./living-batch16-details";
import { livingBatch17VisitJoin } from "./living-batch17-details";
import { livingBatch18VisitJoin } from "./living-batch18-details";
import { livingBatch19VisitJoin } from "./living-batch19-details";
import { livingBatch20VisitJoin } from "./living-batch20-details";
import { livingBatch21VisitJoin } from "./living-batch21-details";
import { livingBatch22VisitJoin } from "./living-batch22-details";
import { livingBatch23VisitJoin } from "./living-batch23-details";
import { livingBatch24VisitJoin } from "./living-batch24-details";
import { livingBatch25VisitJoin } from "./living-batch25-details";
import { livingBatch26VisitJoin } from "./living-batch26-details";
import { livingBatch27VisitJoin } from "./living-batch27-details";
import { livingBatch28VisitJoin } from "./living-batch28-details";
import { livingBatch29VisitJoin } from "./living-batch29-details";
import { livingBatch30VisitJoin } from "./living-batch30-details";
import { livingBatch31VisitJoin } from "./living-batch31-details";
import { livingBatch32VisitJoin } from "./living-batch32-details";
import { livingBatch33VisitJoin } from "./living-batch33-details";
import { livingGlampingVisitJoin } from "./living-glamping-details";
import { sustainableEcovillageVisitJoin } from "./sustainable-ecovillage";
import { maitreyaEcovillageVisitJoin } from "./maitreya-ecovillage";

export type Ease = 1 | 2 | 3 | 4 | 5;

export const easeLabels: Record<Ease, string> = {
 1: "Very hard",
 2: "Hard",
 3: "Moderate",
 4: "Fairly easy",
 5: "Easy"
};

export const easeLegend = {
 visit:
 "How readily a stranger can tour or stay without already knowing someone. Easy means a museum, guesthouse, or public tour you can book. Very hard means no public visitor path.",
 join: "How defined the path is from outsider to resident or member. Easy means buying a lot on the open market. Very hard means a closed household, a religious covenant, or no residential membership at all."
};

export type VisitJoin = {
 visit: Ease;
 join: Ease;
 visitProcess: string;
 joinProcess: string;
};

export const visitJoinBySlug: Record<string, VisitJoin> = {
 "sabbathday-lake": {
 visit: 5,
 join: 1,
 visitProcess:
 "The Shaker Museum runs guided tours Monday–Saturday from Memorial Day through Indigenous Peoples’ Day. The store and herb garden are open to the public; Sunday Meeting in the 1794 Meetinghouse is still a public worship. Open Farm Day and garden tours are free. Walk the trails or cross-country ski in season. You do not need an invitation, show up in New Gloucester and buy a ticket.",
 joinProcess:
 "Living here as a Shaker means signing the covenant of the United Society of Believers: celibacy, confession, and common property. The village still says it accepts new members, and Sister April Baxter joined in 2025, but the residential society is three people. Friends of the Shakers is a supporting membership (museum admission, events). Almost nobody who visits becomes a Shaker.",
 },
 solheimar: {
 visit: 5,
 join: 2,
 visitProcess:
 "Book the Eco-Village Guesthouse (Brekkukot and Veghús) online. The café, craft workshops, greenhouses, and Sesseljuhús environmental centre are set up for visitors; G Adventures and other operators bring tour groups through. Volunteers can join work camps through Worldwide Friends. It is one of the most visitable villages in this atlas, a geothermal valley with beds, food, and a shop.",
 joinProcess:
 "Sólheimar is a nonprofit workplace and home for people with and without disabilities. Residents are staff, placed villagers, or long-term volunteers. There is no member share and no private title. The realistic path is a job, a disability placement, or an extended volunteer contract with the institution.",
 },
 riverside: {
 visit: 4,
 join: 3,
 visitProcess:
 "The Lower Moutere farm runs a café, short-term accommodation, a gallery, and community lunches. Riverside’s “Join in” page lists volunteering, workshops, and staying on the land. Book ahead rather than dropping in on houses; the trust hosts guests as part of its charitable work. Public transport to Motueka plus a local ride is the usual approach.",
 joinProcess:
 "There is no private house title. You apply to live under the Religious Charitable Riverside Community Trust: pay rent to the trust, receive a weekly allowance, and join weekly consensus meetings. Several ways in exist (volunteer stays, workshops, then a membership conversation). The community is small (~25 members), so fit and timing matter more than a published waitlist.",
 },
 koinonia: {
 visit: 4,
 join: 3,
 visitProcess:
 "Koinonia welcomes short visits, group visits, and “come, stay awhile, and serve.” Contact the farm in Americus, Georgia; they will place you in guest housing. Internships include orientation week, weekday noon meals, groceries, and a modest stipend. Day visitors can see the farm, the store, and the history of Koinonia and Habitat for Humanity. Schedule rather than arrive unannounced.",
 joinProcess:
 "The usual path is a visit, then an internship (work, prayer, study), then an application to become a member of the Christian intentional community. Membership is a vocational and spiritual decision. The farm is open to new members who share the Sermon-on-the-Mount orientation.",
 },
 "camphill-copake": {
 visit: 4,
 join: 2,
 visitProcess:
 "The village café, bakery, and gift shop in Copake, New York, are the public face. Residential volunteer coworkers apply online through Camphill (account, application, references, interview) and live in shared households for months to years, room, board, and a stipend. Admissions for villagers with developmental disabilities include a four-week trial visit after an interview. Casual drop-in to homes is not the culture; start with the café or a scheduled visit.",
 joinProcess:
 "Two different doors. Villagers (adults with disabilities) go through Camphill admissions and a trial household stay. Coworkers apply as live-in volunteers and may become long-term houseleaders, a vocation. There is no co-op share. Joining means being accepted into an extended-family household that mixes villagers, volunteers, and children.",
 },
 findhorn: {
 visit: 5,
 join: 3,
 visitProcess:
 "The Park Ecovillage is one of the most visited communities on Earth. Book a guesthouse or a Findhorn Foundation programme, Experience Week (“From I to We”) is the classic six-day introduction and a prerequisite for longer Foundation programmes. Garden Weeks and other workshops run through the year. You can walk parts of the village, visit the Universal Hall, and stay without any membership. Book early in summer.",
 joinProcess:
 "Living in the Park is not the same as joining the Foundation. Many residents rent or buy a dwelling (some freehold, some through Park Ecovillage Trust) and join the New Findhorn Association, which is the civic layer. Experience Week is the usual first step; then you look for a house, a job or enterprise, and NFA membership. There is a local housing market, but it is small, mission-flavored.",
 },
 "twin-oaks": {
 visit: 4,
 join: 2,
 visitProcess:
 "Two doors: a three-hour Saturday tour (email visittwinoaks@gmail.com) or the official three-week Visitor Program. For the program, send a letter of introduction, pick session dates from the calendar, and work a labor quota while you live there. Twin Oaks prefers email, not phone. Tours are the easy look; the three-week stay is required if you might join. Visitor dates for the year are posted in advance.",
 joinProcess:
 "You must complete a visitor period, request a membership interview in week two or three, and be accepted. There is no buy-in and no rent (income is shared) but the community is often at capacity, so accepted people wait three to nine months for a room. Provisional membership follows, then full membership. Skipping the interview means repeating the three-week visit. Labor, meetings, and the income-sharing culture are the real filter.",
 },
 auroville: {
 visit: 4,
 join: 2,
 visitProcess:
 "Book a registered Auroville guesthouse at guesthouses.auroville.org (winter fills early). Non-Indians file an arrival C-Form within 24 hours. The Visitors’ Centre, Matrimandir viewing point, cafés, and units are set up for guests. The Inner Chamber and Park of Unity have tighter rules for Aurovilians and Newcomers. A tourist visa is fine for a stay; do not treat a guest-house week as the start of residency.",
 joinProcess:
 "Official path: volunteer and stay at least three months (contact atr@auroville.org.in), then apply as a Newcomer for a twelve-month trial, then become an Aurovilian. Foreigners who want to settle need an Entry Visa, a tourist visa will not convert. Housing is short; Newcomers often pay their own way and may need to fund a dwelling. There are no private plots. The bar is time, visa, work, and the Entry Service.",
 },
 "the-farm": {
 visit: 4,
 join: 3,
 visitProcess:
 "Contact the Welcome Center in Summertown, Tennessee (phone) before you come. Overnight visitors pay a small per-adult night fee (about $3) and check in with dates and contacts. Stays past two weeks go to the Membership Committee. Several visits are encouraged before anyone talks residency. Tours and the Farm Store are the public layer; do not camp unannounced.",
 joinProcess:
 "Resident (with a sponsor) after getting known; from about day 46 you pay monthly dues (on the order of $114 per adult in 2025). After a year as Resident you may apply for Provisional Member ($150 processing fee, financial disclosure, credit check, medical history, committee vote). After a year as Provisional you may apply for Full Member ($75 fee, community vote). Full members vote and can sit on the Board. Two-plus years is the honest timeline.",
 },
 gaviotas: {
 visit: 2,
 join: 1,
 visitProcess:
 "Gaviotas sits in the Vichada savanna, hours from Bogotá, and is a working research-and-production village rather than a tourist site. There is no public guesthouse booking page. Journalists, students, and organized groups have visited by arrangement with the Fundación; independent travelers are not expected. If you go, it is through a hosted invitation or a study trip.",
 joinProcess:
 "There is no residential membership, co-op share, or lot for sale. People work for the foundation’s enterprises (resin, water, music, forestry). You do not “join Gaviotas” the way you join a commune. The path, if any, is employment or a research collaboration with the institution that holds the place.",
 },
 "moora-moora": {
 visit: 3,
 join: 3,
 visitProcess:
 "Moora Moora on Mount Toolebewong runs internships and receives visitors by arrangement, not as a public resort. Contact the co-operative before you drive up the mountain; houses are private and the land is shared. Open days and education events happen; camping or a stay is something you negotiate.",
 joinProcess:
 "Houses only transfer with membership. The published process is: get to know the co-op (visits, internship, meetings), apply, and (if accepted) buy a dwelling that is already in the co-op or build under its rules. The share is the right to live on common land. Timing depends on whether a house is actually for sale.",
 },
 "east-wind": {
 visit: 3,
 join: 2,
 visitProcess:
 "Visiting is by letter of introduction to membership (email is preferred). Official visitor periods last three weeks; you are expected to work 35 hours a week (105 hours total) and stay the full session. If 15% of full members file written concerns, you have 24 hours to leave. Book well ahead. There is no public Saturday tour comparable to Twin Oaks.",
 joinProcess:
 "After the visitor period you may apply for provisional membership, which is about a year, then full membership. Income is shared; there is no buy-in. Rooms are often full, provisionals go on a waitlist, and the community may prioritize minority genders when the balance is off. If you cannot take a room when offered, you go to the bottom of the list. Labor, culture, and space are the gates.",
 },
 damanhur: {
 visit: 4,
 join: 2,
 visitProcess:
 "Book through Damanhur Welcome / damanhur.travel. Temple of Humankind visits, Damjl, and the Sacred Woods are ticketed experiences, not casual wanderings, underground temples are guided. Multi-day packages and the Community Life Campus (about ten days) exist for people who want more than a tour. Create an account, pick a date, and arrive as a guest of the federation, not as a house-guest of a citizen unless invited.",
 joinProcess:
 "Citizenship is a staged spiritual and social process. New Life 2.0 (about a month) is the published first residential preview; longer programmes follow. Citizens join the federation of cooperatives; leaving usually means leaving your stake in that structure. Expect courses, community life, and a yes from Damanhur.",
 },
 svanholm: {
 visit: 3,
 join: 2,
 visitProcess:
 "Svanholm, Denmark’s large income-sharing collective, runs visitor weeks (besøgsuge) so outsiders can work and eat with the community. Contact the commune in English and apply for a published visitor period. The farm shop and some events are more public; sleeping in the collective is not. Come by arrangement, do the work week, and leave unless you are invited to continue.",
 joinProcess:
 "After visitor weeks, a membership conversation. Svanholm is income-sharing: wages go into the common purse, and members live by the collective’s labor and money rules. There is no house to purchase on the open market. Acceptance is social and economic, can you live this way, and does the commune have room. Timeline is months to a year.",
 },
 lakabe: {
 visit: 2,
 join: 2,
 visitProcess:
 "Lakabe is a recovered village in Navarre. Contact the cultural association before any trip; work camps and arranged visits have happened, but there is no guesthouse booking engine and no drop-in tourism. The concejo and the occupied houses are a living place. If they host you, it will be as a guest of the village, usually in exchange for work and respect for their rhythm.",
 joinProcess:
 "There are no private lots. People join by living there, working, and being accepted by the existing group while title stays with Navarre. That is a social occupation of a public village. Expect a long stay, Basque and Spanish on the ground, and consensus of the people already there. It is possible.",
 },
 "kibbutz-lotan": {
 visit: 4,
 join: 2,
 visitProcess:
 "Lotan is built for guests: Eco Experience, the month-long Green Apprentice programme, 3–6 month volunteers (typically ages 18–25) in dates, gardens, dairy, kitchen, and tourism, plus virtual tours. Volunteers get housing, food, and a small stipend. Tourists can book eco-lodging and a look at the straw-bale and earthship experiments. The Arava is remote, fly to Eilat or bus south, and book the programme, do not hitch in.",
 joinProcess:
 "Kibbutz membership is a different door from volunteering. Classic kibbutz acceptance (often via the Kibbutz Movement / Jewish Agency, and in practice much easier if you are Jewish and prepared for Israeli life) is slow, political, and sale. Lotan remains closer to a collective economy than a privatized “renewing” kibbutz. Most visitors leave after a programme; a few stay and begin the membership conversation.",
 },
 lebensgarten: {
 visit: 4,
 join: 3,
 visitProcess:
 "Lebensgarten Steyerberg’s seminar house (a nonprofit gGmbH) is the front door: courses, guest rooms, and a public educational programme. You book a seminar or a bed, eat with other guests, and see the settlement. That is a normal German seminar-centre stay. Contact lebensgarten.de; English may be limited, German is the working language.",
 joinProcess:
 "Residents typically rent or buy a dwelling in the eco-settlement and take part in the Verein (registered association) that holds village life. It is closer to an ecological neighborhood with a strong seminar engine than to income-sharing. You still need the community to accept you as a neighbor, and housing stock is finite. Start with seminars, meet people, then ask what is actually for rent or sale.",
 },
 niederkaufungen: {
 visit: 3,
 join: 2,
 visitProcess:
 "Kommune Niederkaufungen asks visitors to read the English “Visiting us” notes and contact them well in advance. Arrive by public transport if you can. This is Germany’s large left income-sharing commune in old farm buildings inside a village near Kassel. You visit as a political-community guest, work alongside members, and leave on the agreed date.",
 joinProcess:
 "Income-sharing with a high bar: people have historically brought assets into the common purse (with a negotiated sum if they later leave). Consensus, left politics, and living in small groups inside the e.V. are the culture. After visits, a long getting-to-know-you, then a membership decision. Plan on many months and a serious economic conversation.",
 },
 "crystal-waters": {
 visit: 4,
 join: 5,
 visitProcess:
 "Crystal Waters has an EcoPark with camping and cabin hire (phone the EcoPark). The Village Green and some cooperative businesses are the public layer. Residential one-acre lots are private; inspections of houses for sale are by appointment. Stay at the EcoPark, walk permitted common land, and treat clustered houses as someone’s home.",
 joinProcess:
 "Buy a freehold lot. The 83 privately owned one-acre plots trade as ordinary Queensland freehold, subject to body-corporate by-laws and the permaculture covenants. Listings appear on the community site and ordinary agencies; inspections are appointment-only. You become a body-corporate member by buying the lot, no visitor year, no income-sharing. Price and a willing seller are the real constraints.",
 },
 "ecovillage-ithaca": {
 visit: 4,
 join: 3,
 visitProcess:
 "Free public tours leave from the Frog common house on the last Saturday of most months (not November–December); notify Thrive Ithaca. Small-group tours (~$30 a person) and private group tours are bookable. Several Airbnbs sit on site; you can also stay in Ithaca and come in for the tour. Do not wander neighborhoods uninvited, the tour.",
 joinProcess:
 "After a 3–5 day visit that includes an official tour, you work through the neighborhood co-op’s membership steps (some can be done online). Homes are limited-equity or co-op shares in FROG, SONG, or TREE, not open-market flip houses. When a unit turns over you buy the share at the formula price, subject to the co-op’s approval. Waitlists and timing of a vacancy matter more than filling in a form.",
 },
 zegg: {
 visit: 4,
 join: 3,
 visitProcess:
 "ZEGG in Bad Belzig is an international seminar centre as well as a community. Book a festival, workshop, or guest stay. The gGmbH hosts the public programme. You sleep in guest rooms, eat in the seminar kitchen, and may join morning work. Berlin is about ninety minutes by train. You do not need to be on a membership track to attend a course.",
 joinProcess:
 "Community membership is separate from buying a ticket to a festival. People usually attend seminars, spend longer guest periods, and then enter a membership conversation with the resident group. Housing is on the 15-hectare site under the gGmbH. Expect social process (including ZEGG Forum culture) rather than a realtor. German helps; the seminar scene is international.",
 },
 "los-angeles-eco-village": {
 visit: 4,
 join: 3,
 visitProcess:
 "Public walking tours on posted weekend dates, 10:30 a.m. to 1 p.m., sliding scale $15–$25 (children 12 and under free). Reserve at 213-738-1254 or crsp@igc.org; start at Bimini Place near 1st Street. Special tours by appointment ($75 minimum). Bring a brown-bag lunch for the optional discussion. The neighborhood is ordinary Koreatown blocks, you can walk the sidewalk anytime; the tour is how you see the inside.",
 joinProcess:
 "Residential membership is a unit in Urban Soil / Tierra Urbana, the limited-equity housing co-op on land held by the Beverly-Vermont CLT. Units turn over slowly; you get on the co-op’s process (tour, interest, wait, interview) and buy a share at the capped price when one opens. You cannot buy at market and flip. Start with a tour and ask CRSP about the current membership path.",
 },
 earthaven: {
 visit: 4,
 join: 3,
 visitProcess:
 "Book an in-person ecovillage tour. Live-and-work / work-exchange positions are arranged with individual member hosts (about 24 hours a week: 20 for host + 4 for Earthaven, in exchange for camping, food, and a roof). Rentals appear periodically. The gate is open for scheduled tours. Black Mountain, North Carolina, is the nearest town.",
 joinProcess:
 "New Root (renter, work-exchanger, intern) → Provisional → Full Member. There is a one-time joining fee, a commons fee, and annual dues; each neighborhood “pod” has its own extra process. Full members hold sites through the HOA structure. Earthaven says it is looking for new members, but finding a site and moving through New Roots takes months to years. Money plus labor plus pod fit.",
 },
 konohana: {
 visit: 4,
 join: 2,
 visitProcess:
 "Konohana Family in Fujinomiya offers farm stays, courses, and volunteer-style immersions through the family. You eat the household’s meals, work the fields, and sleep as a guest of one extended family at the foot of Mt. Fuji. Book a stay or programme; English pages exist. This is a warm visitor culture.",
 joinProcess:
 "The residential group is one income-pooling household (members are sole proprietors on paper who put money in a common purse). Joining means being accepted into that family after a substantial trial, not buying a room. Japanese language and readiness to live as one household are the real tests. Most guests leave after a stay; a few begin the long conversation to remain.",
 },
 oaec: {
 visit: 4,
 join: 1,
 visitProcess:
 "OAEC in Occidental, California, is a teaching site: dozens of courses, retreats, nursery plant sales, and tours each year. Book a workshop or a scheduled visit. An 11-month internship (cohort of about five to six, 24 hours a week, private cabin, meals, stipend) is the deep visitor path, applications open late summer for the following year.",
 joinProcess:
 "The people who live there as a community are Sowing Circle LLC, a closed residential group. You do not apply to “join OAEC” as a villager. Interns and staff turn over by design. Unless the LLC invites a new member into the operating agreement (which is rare and private) there is no membership door. Come to learn; do not come to buy a cabin.",
 },
 tamera: {
 visit: 4,
 join: 2,
 visitProcess:
 "Book an on-site course or guest programme (Introduction to Tamera, community courses, Summer University, event calendar). The Monte do Cerro land in Alentejo hosts guests in seminar infrastructure. If you have never been, they prefer you take a course before any longer conversation. Portuguese countryside: fly to Lisbon or Faro and continue by bus or arranged pickup.",
 joinProcess:
 "Tamera’s published path for new co-workers is a multi-year education-and-engagement programme (recently framed as three years), with a written application, often a video call, and a prerequisite on-site course. Deadlines are real (for 2026, applications closed in February). Joining is vocational (peace research and community life) and selective.",
 },
 "dancing-rabbit": {
 visit: 3,
 join: 3,
 visitProcess:
 "Apply for the Sustainable Living Visitor Program. Programmes include camping in the wooded campground, meals, and a structured look at the village. They fill; request an application early. The Mercantile is a lighter public touchpoint. Rutledge, Missouri, is rural, plan travel. This is a booked immersion of about a week or more.",
 joinProcess:
 "Visit first. Then a Letter of Intent to the Membership and Residency Committee, a community survey, and a residency interview. Approved residents rent land or space, join work rotations, and cannot yet buy or build. After six months of residency (extendable to two years) you may apply for membership: self-evaluation, survey, interview, then a membership agreement and the ecological covenants. Building a house comes after membership, on leased land.",
 },
 "sieben-linden": {
 visit: 4,
 join: 3,
 visitProcess:
 "Sieben Linden’s guesthouse and seminar programme are the door. Book a visitor week, a course, or a non-working guest stay. The village in the Altmark lives partly on visitors. Train toward Salzwedel / Beetzendorf and arrange pickup as instructed. English pages exist; German is daily life.",
 joinProcess:
 "Get known through guest stays, then a trial period. If both sides agree, you buy a share in the housing co-op (historically on the order of €13,000) and contribute to food, rent, and running costs. The co-op owns the land and buildings. They periodically list skills they need (forestry, clay building, and so on). Months of visiting before money changes hands.",
 },
 cloughjordan: {
 visit: 4,
 join: 4,
 visitProcess:
 "Cloughjordan Ecovillage welcomes weekend tours (often first Sunday of the month), a 360° virtual tour, and overnight stays at the eco-hostel in the village. The café and village centre are used to guests. Book via thevillage.ie. You can also stay in Cloughjordan town and walk in. It is one of the simpler European visits: train to Cloughjordan, walk to the eco-village.",
 joinProcess:
 "The village company sells serviced sites; households then build, or you buy an existing house when one is offered. You become part of the company-limited-by-guarantee membership and the residents’ governance by living there, not by a year of income-sharing. Sites have been released in phases and are not infinite, but the legal idea is close to “buy a plot in a planned eco-neighborhood.” Check current sales on the village site.",
 },
 currumbin: {
 visit: 3,
 join: 5,
 visitProcess:
 "The Ecovillage at Currumbin is a private hinterland subdivision. Village-centre businesses (GROUND produce, café, bath house) are the public edge; 147 freehold lots are people’s homes. You do not tour backyards. If a lot is for sale, inspections are with an agent. Treat it like visiting a green suburb that happens to have a produce shop, park at the centre, do not drive the clusters looking at houses.",
 joinProcess:
 "Buy a freehold lot. Later stages have been released by Landmatters; resales go through ordinary Queensland conveyancing plus the body-corporate and design covenants. No visitor year, no share interview. You join the principal body corporate by taking title. Price, a seller, and willingness to build or buy under the sustainability code are the constraints. This is the most market-like door in the atlas.",
 },
 "longo-mai": {
 visit: 4,
 join: 2,
 visitProcess:
 "Longo Maï has hosted visitors since the first European co-op members arrived. Researchers, volunteers, and travellers stay weeks to a year, work the finca, and live communitarian life. Contact the village through longomaicostarica.org rather than dropping in on houses. San Isidro de El General is the usual hub; the finca sits less than an hour from town on the San José / Puntarenas border. You will be a guest of a working cooperative.",
 joinProcess:
 "This is a refugee-origin agricultural cooperative. Living here long-term means being accepted into cooperative life, farming, committees, Spanish, and a fit with a mostly Salvadoran village. European Longo Maï communities remain a path for some visitors; Costa Rican and Central American residents arrive through family and farm work. Very few tourists become members.",
 },
 "maya-mountain": {
 visit: 4,
 join: 1,
 visitProcess:
 "The farm hosts interns, students, volunteers, and visiting groups on the Columbia River above San Pedro Columbia. Apply through mmrfbz.org. You live and work on a 70-acre agroforestry demonstration (cacao, coffee, solar, biochar). Toledo is remote; plan river and road logistics. Day visits for partner NGOs and universities are arranged, not walk-up.",
 joinProcess:
 "Maya Mountain is a Belizean NGO farm. The realistic door is an internship or a staff role. If you want to live in Toledo as a neighbor, that is ordinary Belizean life off the farm, not joining MMRF.",
 },
 pachamama: {
 visit: 5,
 join: 2,
 visitProcess:
 "Book a retreat, workshop, or silent sitting. The village is set up for visitors: lodging, meditation hall, and a stated practice of welcoming people (including children) into the valley near San Juanillo. This is one of the easier Central American visits, a spiritual eco-village that runs as a centre of transformation. Book; do not wander private houses.",
 joinProcess:
 "Long-term life here is membership in a founder-led spiritual community. People who feel a call put down roots by relationship with the village and with Tyohar’s community, not by conveyancing a lot. The land is privately held. Expect a trial of living there (retreats, work, silence) before anyone talks about staying.",
 },
 imap: {
 visit: 4,
 join: 1,
 visitProcess:
 "IMAP’s centre is in Pachitulul, San Lucas Tolimán, kilometre 3.5 toward Santiago Atitlán, then a walk toward the lake. Workshops, the living seed bank, amaranth kitchens, and ecological cabins are the public face. Book a workshop or cabin through the institute. Lake Atitlán logistics (chicken bus, boat, pickup) are ordinary Guatemala travel. This is an institute visit.",
 joinProcess:
 "IMAP is a Maya Kaqchikel ONG. The path is to be a farmer in the network, a workshop student, a visiting educator, or (rarely) staff. Surrounding Kaqchikel towns are where people actually live.",
 },
 "rancho-mastatal": {
 visit: 5,
 join: 2,
 visitProcess:
 "Book the ecolodge, a permaculture or natural-building course, or a farm-to-table stay. Mastatal is a small village in Puriscal; the ranch has trails, swimming holes, and a wildlife refuge backing La Cangreja. This is one of the most visitable teaching ranches in Costa Rica, beds, meals, and a library. Course weeks fill; book ahead.",
 joinProcess:
 "Residential life is staff and apprentices, not lot owners. Apply for an apprenticeship or a job on the teaching team. Neighbors in Mastatal village live ordinary Costa Rican title next door; that is not the same as joining the ranch. Most people who love the place come back as course students, not as members.",
 },
 "bona-fide": {
 visit: 4,
 join: 1,
 visitProcess:
 "The usual door is a three-month internship on Finca Bona Fide in Balgüe, Ometepe: orientation, room and board, Spanish lessons, and a farm-system project. Apply through projectbonafide.com. Shorter volunteer windows have existed; internships are the structured visit. Reach Ometepe by ferry from San Jorge, then road to Balgüe on the Maderas side. This is a working farm under two volcanoes.",
 joinProcess:
 "Project Bona Fide is a 501(c)(3) and Nicaraguan NGO farm. There is no village membership and no parcel for sale. Staff roles open rarely. If you want to live on Ometepe, that is ordinary Nicaraguan life in Balgüe or nearby, separate from joining the nonprofit.",
 },
 ipes: {
 visit: 3,
 join: 1,
 visitProcess:
 "The teaching hectare sits above Suchitoto, a colonial town an hour or so from San Salvador. Volunteers have historically applied by email (volunteer@permacultura.com.sv / the Permaculture El Salvador page). This is a campesino institute: expect farm work, Spanish, and a thatched classroom. Suchitoto itself has hotels if you are only passing through the town.",
 joinProcess:
 "IPES is a farmer NGO. Membership means being a campesino in the network, not buying a house on the hectare. International supporters volunteer or donate; they do not take title. There is no residential ecovillage to join here, by design.",
 },
 "finca-bellavista": {
 visit: 3,
 join: 5,
 visitProcess:
 "Real-estate tours are by appointment only. The community recommends a visit before any purchase. Treehouse lodging and walkways are the public edge; occupied houses are private. Coordinate through fincabellavistacommunity.com. The Osa hinterland is remote, Piedras Blancas / La Florida. Treat it like visiting a private rainforest neighborhood.",
 joinProcess:
 "Buy a parcel (¼–3 acres, garden / forest / riverfront) and build under the Community Guidelines. Title is freehold with covenants. No visitor year, no income-sharing interview. Price, a seller, and willingness to build a treehouse in the canopy are the filters. This is the open-market door in Costa Rica’s rainforest, closest to Currumbin in legal spirit.",
 },
 "la-ecovilla": {
 visit: 3,
 join: 5,
 visitProcess:
 "Contact La Ecovilla to arrange a look at the original village or San Mateo. Forty-eight families live on the original 42 acres, this is a neighborhood. The geodesic commons and food forest are the photogenic edge; houses are private. Webinars with the founder are the remote introduction. Do not drive in unannounced.",
 joinProcess:
 "Buy a lot in the condominio (original village is largely full; San Mateo is the expansion). You take title, join the assembly, and build under the reglamento. That is the Costa Rican condominio door (HOA plus freehold). Capital and a willing seller are the constraints.",
 },
 "brave-earth": {
 visit: 4,
 join: 3,
 visitProcess:
 "Book a Gaia Dome, Earth Tambo, jungle hut, or garden cabina through braveearth.com and come for a retreat. The site is 2.5 hours northeast of San José, in San Isidro de Peñas Blancas, between Arenal and the Children’s Eternal Rainforest. Meals and healing-arts programs are the public life. They are not accepting volunteers or work exchanges. Book lodging; do not arrive to camp.",
 joinProcess:
 "Residential membership is a share in a 40-shareholder commons (a private living structure on communal land). Shares have been limited; Porvenir Design noted about half sold in 2019. Talk to the association. U.S. donors can give through Amigos de Costa Rica without becoming residents. This is harder than buying at Finca Bellavista, easier than joining a closed spiritual covenant.",
 },
 lama: {
 visit: 4,
 join: 2,
 visitProcess:
 "Call or write first. Lama runs retreats, community camp, and a summer steward residency at 8,600 feet beside Carson National Forest, about 30 miles north of Taos. Guest housing is simple. Prayer flags, the dome, and the kitchen that survived the 1996 fire are the public face. Winter access is a real constraint.",
 joinProcess:
 "The path is a visit, then a summer steward or resident-circle season, inside a 501(c)(3) whose board will not sell you title. People who stay a long time still do not own a share of Lama Mountain. This is a school.",
 },
 arcosanti: {
 visit: 5,
 join: 2,
 visitProcess:
 "Daily public tours, specialty architecture and archives tours, a café and gallery, guest rooms, hiking trails, and live demonstrations in the bronze foundry and ceramics apse. Book at arcosanti.org. This is one of the easiest visits in the atlas, a mesa town that was built to be seen. Workshops have historically been the longer stay.",
 joinProcess:
 "Living here means a job with The Cosanti Foundation, a workshop, or a long volunteer stretch. The 860 acres and the state leases stay with the nonprofit and Arizona. Arcology is a research project.",
 },
 "alpha-farm": {
 visit: 3,
 join: 2,
 visitProcess:
 "Write ahead. Deadwood is an hour of Coast Range road from the nearest grocery; this is a working income-sharing farm. Short visits and working stays have been the door. The Alpha-Bit Café in Mapleton was the old public face.",
 joinProcess:
 "Visit, work, then ask. Membership is equal ownership of the cooperative and a common purse, Quaker consensus, no buy-in, no private house. The community is small (~8–12). Caroline Estes’s death in 2022 did not close the door, but fit and capacity are the filters. This is Twin Oaks culture at Oregon scale listing.",
 },
 sirius: {
 visit: 4,
 join: 3,
 visitProcess:
 "Sirius is set up for visitors: internships, programs, and exploring-member stays on 90 acres in Shutesbury, east of Amherst. Read the membership page, then email. The community center, gardens, and stone circle are the public landscape; households are private. Tens of thousands of people have come through since 1978. Book; do not assume a spare bed.",
 joinProcess:
 "Intern or visit, then apply as an exploring member, then resident. The 501(c)(3) holds the land. Associate membership exists for neighbors. Easier than Alpha Farm’s common purse, harder than buying a Currumbin lot, a spiritual community with a defined path.",
 },
 huehuecoyotl: {
 visit: 3,
 join: 2,
 visitProcess:
 "Five acres in the Sierra del Tepozteco, above Tepoztlán. Contact the community about cultural programs, courses, or a short stay. Tepoztlán itself is a town with hotels; the village is a small asociación in the mountains.",
 joinProcess:
 "A small asociación of about twenty people. There is no published share offer. Living there is by invitation and commitment after time on the land. Alberto Ruz’s death in 2023 did not turn Huehuecoyotl into a real-estate project.",
 },
 "cite-ecologique": {
 visit: 3,
 join: 3,
 visitProcess:
 "The Cité lists visits, internships, and training. Ham-Nord is rural Centre-du-Québec (689 rang 8). The school, greenhouses, farm, and boutique are the public face; houses are homes. This is a working village of a hundred people. Arrange a visit rather than arriving at the school door unannounced.",
 joinProcess:
 "Participate in a visit, then an internship or training, then present a request to the community. Work in the school, the farm, or an enterprise (Kheops and the others) is the realistic path. Easier than a closed religious covenant, more vocational than a condo purchase.",
 },
 acorn: {
 visit: 4,
 join: 2,
 visitProcess:
 "Like Twin Oaks: a visitor period on the Louisa County farm, especially during Southern Exposure seed-packing season, when extra hands are expected. Contact through southernexposure.com/acorn-community-farm or the FEC visitor channels. This is a working seed house and commune. Tours and visitor stays exist; drop-in to households does not.",
 joinProcess:
 "Complete a visitor stay, ask for membership, live the labor-credit and income-sharing culture. No buy-in, no rent, no private title. The community is often near capacity (~20–30). Twin Oaks’s 501(d) paperwork is not Acorn’s door. FEC membership is the network.",
 },
 "las-canadas": {
 visit: 4,
 join: 2,
 visitProcess:
 "Book a course (permaculture, agroecology, bioconstruction, silvopasture, or the regenerative-living immersion) at bosquedeniebla.com.mx. The Huatusco cloud-forest ranch is set up for students: food, lodging, milpa, dairy, and a seed bank. This is one of the easier teaching-ranch visits in Mexico. Courses fill; register.",
 joinProcess:
 "The cooperativa is about two dozen people who share votes and income. Course alumni are not members. Joining means being accepted into a horizontal Mexican cooperativa on a ranch that is not subdivided. Harder than paying for a PDC, much harder than buying a condominio lot.",
 },
 "our-ecovillage": {
 visit: 5,
 join: 3,
 visitProcess:
 "Book a PDC, a natural-building course, an internship, or a stay. 1565 Baldy Mountain Road, Shawnigan Lake, is a 25-acre teaching site with cob buildings, a labyrinth, gardens, and beds for students. This is one of the most visitable co-ops in the atlas. They are an education centre first.",
 joinProcess:
 "Adult membership in the BC Community Services Cooperative is a separate door from taking a course. Sociocracy, a small membership (~12 adults), and no strata lot to buy. Interns and students come and go. Talk to the co-op; do not confuse this with Treehouse Village Ecohousing in Nova Scotia.",
 },
 "whole-village": {
 visit: 3,
 join: 4,
 visitProcess:
 "Contact Whole Village to arrange a look at the Caledon farm and Greenhaven. This is eleven families in one house plus a CSA farm. CSA pickup and occasional open days are the gentle introduction. Do not drive to Shaw’s Creek Road and walk into the ecoresidence.",
 joinProcess:
 "When a household leaves, you buy into Whole Village Property Co-operative Inc. and occupy that share of Greenhaven (or another agreed arrangement). There is a defined real-estate-ish door: a co-op share. The 999-year easement stays on the deed regardless. Easier than income-sharing, harder than a suburban listing.",
 },
 botton: {
 visit: 4,
 join: 2,
 visitProcess:
 "The café, bakery, and landscape in Danby Dale are the public face. Walk the North York Moors paths; eat at the village café. Camphill Village Trust and Esk Valley both receive arranged visitors. This is a working care village. Book rather than knock on farmhouse doors.",
 joinProcess:
 "Two doors, neither a house purchase. Villagers with learning disabilities come through local-authority funding and a trial stay. Coworkers join a Shared Lives household (Esk Valley) or apply for a Trust care job. There is no co-op share and no freehold lot. Living here is a vocation or a placement.",
 },
 limans: {
 visit: 3,
 join: 2,
 visitProcess:
 "Longo Maï farms receive solidarity visitors and working guests. Contact Pro Longo Maï or the Limans cooperative rather than arriving at Le Pigeonnier unannounced. This is a wage-free agricultural cooperative in the Alpes-de-Haute-Provence. Finca Sonador in Costa Rica is a sister or this gate.",
 joinProcess:
 "No wages, no private title, no lot to buy. You live the cooperative and the Swiss land foundation holds the land. Joining is a political and practical commitment after time on the land, harder than a volunteer week, much harder than a French farmhouse purchase.",
 },
 "los-portales": {
 visit: 3,
 join: 2,
 visitProcess:
 "The finca hosts courses, ESC volunteers, and arranged stays at Castilblanco de los Arroyos, about 50 km north of Seville. Contact losportales.net. Most of the 200 hectares is jara and holm oak; the houses are a small cluster.",
 joinProcess:
 "About thirty residents in an asociación. There is no published share offer. ESC volunteers and course students are not members. Living there is by invitation after time on the land.",
 },
 "torri-superiore": {
 visit: 5,
 join: 3,
 visitProcess:
 "Book the eco-guesthouse in the restored 14th-century stone hamlet. Single, double, and multiple rooms, courses, and meals with residents. Ventimiglia is the rail gate; the village is a few kilometres up the Bevera valley. This is one of the easier European visits in the atlas.",
 joinProcess:
 "The resident group is about twenty people deciding by consensus. The realistic doors are a restored private apartment in the stack (when one is offered) or a long commitment to the association and cooperative. Guests are not members. Easier than a closed commune, harder than booking a week.",
 },
 "krishna-valley": {
 visit: 5,
 join: 2,
 visitProcess:
 "Buy a visitor ticket at the valley. Guided temple visit, organic garden, cowshed, shop, and festivals. Guesthouse beds exist. Somogyvámos is south of Lake Balaton; buses run from the region. You do not need to be a devotee to walk the village for a day.",
 joinProcess:
 "Residential membership is a Vaishnava religious life on church land. The path is devotion, community acceptance, and ISKCON Hungary. Harder than a festival weekend, much harder than a Balaton holiday house.",
 },
 "brithdir-mawr": {
 visit: 3,
 join: 2,
 visitProcess:
 "The farm sits under Carningli in the Pembrokeshire Coast National Park. Visits have long been by arrangement café. As of 2025 the community was occupying after a 2024 sale and an eviction notice, check brithdirmawr.co.uk before you travel. The roundhouse is a famous object.",
 joinProcess:
 "Historically a housing co-op on a lease from Julian Orbach. The 2024 sale put that lease in question; some members left, others stayed. Joining now is a small, disputed occupancy.",
 },
 keuruu: {
 visit: 4,
 join: 3,
 visitProcess:
 "Contact Keuruun ekokylä (keuruunekokyla.fi) about a visit, a course, or talkoot. Central Finland lake country near the town of Keuruu. Wooden houses, sauna, fields, and forest, a working association farm. Arrange rather than arrive at the sauna unannounced.",
 joinProcess:
 "Join the registered association. There is no asunto-osakeyhtiö apartment to buy and no private title to the 53 hectares. A small village (~30–35) so fit and timing matter. Easier than income-sharing, harder than a Finnish lakeside listing.",
 },
 hurdal: {
 visit: 3,
 join: 4,
 visitProcess:
 "Huldra Økogrend is a neighbourhood of timber houses at Gjøding, about 80 km north of Oslo. There is a common house and a village shop in published descriptions. This is privately owned eco-housing. Contact hurdalecovillage.org; do not walk into people’s winter gardens.",
 joinProcess:
 "When a dwelling comes up, you buy it. The later phase is freehold plus a realsameie for streets and commons, the open-ish Nordic door in this atlas. The original Kilden cooperative share is historical. Easier than a commune, still a small village with a waiting culture.",
 },
 suderbyn: {
 visit: 5,
 join: 3,
 visitProcess:
 "Book a stay, a course, or an ESC / Green Skills volunteer year. Five hectares at Västerhejde, south of Visby on Gotland. Gardens, experimental buildings, and a multilingual house. This is one of the easier teaching-lab visits in the Baltic.",
 joinProcess:
 "Join the People-Care cooperative after time on the land. RELEARN volunteers are not automatically members. There is no bostadsrätt apartment to buy. Small (15–25 people), participatory, English as a working language. Defined, not automatic.",
 },
 aardehuis: {
 visit: 3,
 join: 4,
 visitProcess:
 "Twenty-three earthships and a common house on the outskirts of Olst. The neighbourhood receives groups, municipalities, and nascent ecovillage visitors by arrangement (aardehuis.nl). Houses are homes; book a look rather than parking in the lane.",
 joinProcess:
 "When a household leaves, a house can change hands. Private finance plus the vereniging, closer to buying a Dutch house with extra common rules than to a commune application. Three units involved a social-housing partner. The open-ish Dutch door in the atlas, still only twenty-three dwellings.",
 },
 "comunidad-del-sur": {
 visit: 2,
 join: 1,
 visitProcess:
 "This is a small Montevideo collective with a press. Nordan titles and the Tres Cruces address are the public face; there is no guesthouse booking page. Contact through the published civil-society listing (La Paz 1988) or the press rather than arriving at a household unannounced.",
 joinProcess:
 "An anarchist common-purse tradition you buy. Living here has always meant being accepted into a tiny self-managed collective, after dictatorship exile, even smaller. There is no FUCVAM apartment share and no eco-lot. Harder than a Montevideo rental, much harder than a visitor weekend.",
 },
 penalolen: {
 visit: 3,
 join: 3,
 visitProcess:
 "An urban-edge eco-neighborhood on the Peñalolén hillside. Paths, the forest, and the junta’s public life are walkable from Santiago; houses are private. Write rather than walking into someone’s sitio. The 2003 toma next door is history.",
 joinProcess:
 "You join by acquiring a sitio inside the copropiedad, harder than buying a suburban house, easier than a religious covenant. There is no housing-co-op share and no land-trust lease. The junta is the civic face; title sits with the parcels.",
 },
 "eco-truly": {
 visit: 5,
 join: 2,
 visitProcess:
 "One of the easier South American visits: cone houses on the beach at Chacra y Mar, about 63 km north of Lima. Day tickets, guided tours, and a simple guesthouse. Lima day-trippers have come in large numbers. You do not need to be a devotee to walk the cones for an afternoon.",
 joinProcess:
 "Residential membership is a Vaishnava religious life. Volunteers are welcome; living there means bhakti community acceptance. Harder than a beach ticket, much harder than a Huaral holiday house.",
 },
 "ecovilla-gaia": {
 visit: 4,
 join: 2,
 visitProcess:
 "Book a course, a PDC, or a bioconstruction workshop through gaia.org.ar / the Universidad de Permacultura. Navarro is about 120 km from Buenos Aires on RP 41. This is a teaching village on a former dairy pampas resort. Arrange rather than arrive at the cob houses unannounced.",
 joinProcess:
 "Asociación civil membership sale. Course students are not automatically members. The association says the demonstration-centre cycle is complete; the Navarro land remains. There is no Argentine cooperativa apartment to buy.",
 },
 ipec: {
 visit: 5,
 join: 2,
 visitProcess:
 "Book a PDC, a bioconstruction course, or a volunteer stay through the institute. Twenty-five hectares of restored Cerrado at Pirenópolis, Goiás. Cob buildings, solar, and a teaching path. This is one of the easier Brazilian visits in the atlas, a course centre.",
 joinProcess:
 "A nonprofit institute. The realistic door is a course, a volunteer season, or a staff role. Founders, staff, and a small resident community run the site.",
 },
 piracanga: {
 visit: 5,
 join: 3,
 visitProcess:
 "Book a retreat through Unah or Inkiri (inkiri.com). The village sits where the Rio Piracanga meets the sea on the Maraú Peninsula, Bahia. Dry toilets, palms, and a lot of visitors. One of the most visitable spiritual settlements on the Brazilian coast.",
 joinProcess:
 "Three doors: Inkiri nonprofit membership, a job (including Unah), or a private dwelling when one is actually offered. Easier than a closed commune, still a peninsula with a waiting culture.",
 },
 aldeafeliz: {
 visit: 4,
 join: 2,
 visitProcess:
 "Workshops in permaculture, NVC, sociocracy, and natural building; about a thousand visitors a year on their own count. Contact aldeafeliz.org. Vereda San Miguel, San Francisco de Cundinamarca, about 1.5 hours from Bogotá. A forested mountain valley. Arrange rather than arrive at the bamboo houses unannounced.",
 joinProcess:
 "GEN currently lists the community as not open to new members. The association holds about 90% of the land. Volunteers and course students are not members. Living there is a small-family sociocratic invitation.",
 },
 nashira: {
 visit: 3,
 join: 1,
 visitProcess:
 "A working women’s housing project on three hectares at Bolo San Isidro, Palmira, sugarcane country near Cali. The restaurant and productive núcleos have received journalists, students, and World Habitat visitors by arrangement (nashira-ecoaldea.org). Houses are homes; book a look rather than parking in the lane.",
 joinProcess:
 "Eighty-eight houses in the names of women who survived domestic violence or displacement, earned with 1,200 labour hours.",
 },
 "el-manzano": {
 visit: 4,
 join: 2,
 visitProcess:
 "Book a PDC or an apprenticeship through elmanzano.org. A 120-hectare family farm at Cabrero, Biobío, in a landscape of pine plantations. About seven hours of guided work a day in season. The eco-school is used to students; the farmhouse is a home. Arrange rather than arrive at the blueberries unannounced.",
 joinProcess:
 "Family freehold plus a limited company and a nonprofit school. Apprentices are not members. Harder than a Chilean smallholding listing, much harder than a course week.",
 },
 "finca-sagrada": {
 visit: 3,
 join: 2,
 visitProcess:
 "A working biodynamic farm in an isolated Vilcabamba valley. Visitors by arrangement through fincasagrada.org, river, food forest, and mountain. Loja is the regional gate.",
 joinProcess:
 "GEN lists about seven residents. The farm is a private holding; the asociación lends legal personality to valley projects. Ainachay is a related four-hectare centre.",
 },
 sekem: {
 visit: 4,
 join: 2,
 visitProcess:
 "The Sharqia farm, school, and Heliopolis University receive study visits, journalists, and tour groups by arrangement through sekem.com. The companies have shops; the desert farm is a workplace. Book a visit rather than arriving at the tree belt unannounced. Cairo is about 60 km southwest.",
 joinProcess:
 " The realistic path is a job in a SEKEM company, a place at the school or university, or a farmer contract in the biodynamic network. There is no member share and no private title to the original 70 hectares.",
 },
 wongsanit: {
 visit: 5,
 join: 2,
 visitProcess:
 "Book a guesthouse stay, a study visit, or an EDE course through wongsanit-ashram.org. Khlong 15 is 1.5–2 hours from Bangkok. Earthen buildings, a canal, herbal products, and workshops are set up for guests. It is an ashram (quiet hours, no alcohol).",
 joinProcess:
 "Land sits with the Sathirakoses-Nagapradipa Foundation. Volunteers are evaluated over months; full membership is unanimous and vocational. Harder than a Thai homestay, much harder than a course week.",
 },
 ndem: {
 visit: 3,
 join: 2,
 visitProcess:
 "A living Sahel village near Bambey, about 120 km from Dakar. ONG de Ndem and Maam Samba receive journalists, buyers, and solidarity visitors by arrangement. Houses are homes; book a look rather than parking in the lane.",
 joinProcess:
 "The village is older than the NGO. Core membership is relational (Bayfall, family, craft). The ONG’s work now covers about twenty villages; that is development.",
 },
 songhai: {
 visit: 5,
 join: 2,
 visitProcess:
 "The Porto-Novo campus on RNIE 1 at Ouando is a teaching farm with aquaculture tanks, processing, and a public face. Book a tour or a training. Sister sites at Savalou, Parakou, and Kinwedji. This is one of the most visitable farms in West Africa, a school.",
 joinProcess:
 "An NGO campus. Trainees become rural entrepreneurs and leave; staff run the farm. There is no member share and no private title. The realistic path is a training contract or a job.",
 },
 tlholego: {
 visit: 4,
 join: 2,
 visitProcess:
 "Book a course, camp, or eco-venue stay through rucore.org.za. A 150-hectare former cattle farm on the western Magaliesberg, Koster Road R52 near Rustenburg. The learning village is used to students; the bushveld is picnic site. Arrange rather than arrive at the lekgotla unannounced.",
 joinProcess:
 "Rucore is a South African nonprofit. Stays and courses are the public door. Harder than a course week, much harder than a smallholding listing.",
 },
 lilleoru: {
 visit: 4,
 join: 2,
 visitProcess:
 "Visit Estonia lists the Flower of Life garden. Book a Practical Consciousness course, an event, or a garden visit through lilleoru.ee. Taevasmaa tee 2, Aruvalla, is about 30 minutes from Tallinn. The ashram is used to students; houses are homes. Arrange rather than walk the mandala uninvited.",
 joinProcess:
 "Lilleoru MTÜ owns the 30 hectares. About 30 people live on site; NGO membership is larger and mostly non-resident. Course students are not automatically members. You join the association.",
 },
 zmag: {
 visit: 5,
 join: 3,
 visitProcess:
 "The Recycled Estate at Vukomerić, 30 km from Zagreb, runs courses, a seed library, and workshops by appointment through zmag.hr. Straw-bale houses and a common garden are the public face. Book a workshop. It is an educational estate.",
 joinProcess:
 "ZMAG is a Croatian association. Members decide; some live in houses on nearby village plots. Joining the association is a defined path, easier than a closed household, harder than buying a Croatian village house on a listing.",
 },
 guneskoy: {
 visit: 3,
 join: 3,
 visitProcess:
 "Sun Village sits 3 km from Hisarköy, Yahşihan, Kırıkkale, 65 km east of Ankara. CSA members, European volunteers, and arranged visitors see the straw-bale mandala and the vegetable fields. Write the cooperative. It is a small cooperative farm.",
 joinProcess:
 "A handful of cooperative members. Volunteers and CSA members are not automatically co-op members. You can in principle join the environmental cooperative; you cannot buy an Anatolian lot on a portal. Small, academic, and stubborn about the railway that cut a hectare.",
 },
 kufunda: {
 visit: 4,
 join: 2,
 visitProcess:
 "Book a programme (Art of Hosting, Oasis Game, Young Women are Medicine) or a stay through the village. Ruwa is about 25 km from Harare. Thatched dormitories, rondavels, a dining room, and a school. Hosting is the public door; the farm is a home. Arrange rather than arrive.",
 joinProcess:
 "A practice community on family land. About fifteen families live and work here. Programmes have a public door; residential membership is small and relational.",
 },
 glarisegg: {
 visit: 5,
 join: 2,
 visitProcess:
 "Book a seminar, an EDE, a garden day, or the Academy for Community Education through schloss-glarisegg.ch. The castle on Lake Constance at Steckborn is a venue: park, forest, shore. This is one of the most visitable communities in the atlas, a seminar house. Book; do not treat the park as a public beach.",
 joinProcess:
 "The AG owns the stones; the Verein lives in them. Joining is a long outer-circle / inner-circle path. IC.org has listed a joining fee on the order of $5,450 and a trial of a year or more. Shares in the AG are the land path.",
 },
 "los-horcones": {
 visit: 3,
 join: 2,
 visitProcess:
 "Km 63 of the Hermosillo–Chihuahua highway (Federal 16), about 45 minutes from Hermosillo. Visitors welcome October–March, weekdays preferred. This is a working desert cooperativa and an autism programme. Write the village rather than arriving at the highway gate unannounced.",
 joinProcess:
 "A small family-core cooperativa. Open to new members in principle; growth has been slow and measured by commitment, not headcount. The realistic path is a long stay in the Walden Two culture, then a yes from the members.",
 },
 tosepan: {
 visit: 5,
 join: 3,
 visitProcess:
 "Stay at Tosepan Kali in Nahuiogpan, 1.5 km from Cuetzalan centro on the road to San Miguel Tzinacapan: bamboo cabins, hotel, hostel, temazcal, coffee and cinnamon walks, Yohualichan nearby. Book through tosepankali.com. This is one of the easier indigenous-cooperative visits in the atlas, a community-owned lodge. The union itself spans 39 municipalities; Kali is the lodge you can actually walk into.",
 joinProcess:
 "Membership is as a socio of a local cooperative (coffee, pepper, savings, school, tourism work) requested in a community assembly. Fifty-three thousand people already belong that way. Tosepan Kali staff are workers in a cooperative, not shareholders of a sierra subdivision.",
 },
 "teopantli-kalpulli": {
 visit: 3,
 join: 2,
 visitProcess:
 "San Isidro Mazatepec, municipality of Tala, at the southern edge of Bosque La Primavera, about 40 minutes from Guadalajara. The kalpulli has hosted festivals and the 2015 Consejo de Visiones. Contact the A.C. before you treat the Primavera trail as a back door into family houses.",
 joinProcess:
 "About 22 families on internally parceled land inside an A.C. Historically family-based; a few internal parcels exist on paper. Living there is a spiritual-and-family yes.",
 },
 litibu: {
 visit: 3,
 join: 4,
 visitProcess:
 "Playa Litibú, two kilometres from Higuera Blanca, between Sayulita and Punta de Mita. Eight casas in the beach forest. Contact litibuecovillage.org before you go, a required visit sits inside the membership path. Do not confuse the eight casas with the FONATUR resort and golf course on the same bay.",
 joinProcess:
 "Application, a nonrefundable fee, an in-person visit, mentorship, an associate period, dues, and work. Most casas are privately held through a coastal fideicomiso/LLC. Easier than a closed religious covenant, more paperwork than a week on Workaway. Confirm that a casa or membership is actually open.",
 },
 "u-yits-kaan": {
 visit: 4,
 join: 2,
 visitProcess:
 "Reserve a recorrido (meliponario, milpa, a day of escuela campesina) at uyitskaan.com. The internado sits at Km 3 of the Maní–Dzán road. Tianguis agroecológicos are the public market days. This is a school. Book; do not arrive at the milpa unannounced.",
 joinProcess:
 "There is no house to buy. Paths are: visit, study, become a farming family in the campesino-a-campesino network, or support the A.C. The internado historically boarded about 30 students a year. Membership is vocational and Maya-campesino.",
 },
 "tierra-del-sol": {
 visit: 4,
 join: 2,
 visitProcess:
 "Book a guided visit (from MXN $250) or a thematic day with lunch through tierradelsol.org.mx. Paraje Langueche, San Jerónimo Tlacochahuaya, Valles Centrales. Monday–Saturday, minimum groups for some tours. Apprenticeships and volunteer stays exist. Houses on the four hectares are a farm.",
 joinProcess:
 "A founder-led teaching farm on private title. Volunteers and apprentices come and go. There is no co-op share and no published membership.",
 },
 "bosque-village": {
 visit: 4,
 join: 2,
 visitProcess:
 "Forest near Yotatiro / Erongarícuaro, above Lake Pátzcuaro. Historically a participant application (skills, self-directed work). The old bosquevillage.com domain has been hijacked, use the GEN/IC listing and the Facebook page (bosqueforest). Three thousand visitors have come through; this is still a working off-grid farm.",
 joinProcess:
 "IC.org has listed a single invested member (the founder) and an intern-first path for people who can support themselves. A 2016 nonprofit was meant to take staged control. There is no published share of the 83 acres. Neighbouring land is a different conversation.",
 },
 "via-organica": {
 visit: 5,
 join: 2,
 visitProcess:
 "The Jalpa-valley ranch is set up for visitors: daily hours, guided tours, workshops, horseback, eco-cabins, and a restaurant that serves the farm. Fifteen kilometres from San Miguel de Allende (El Membrillo / Jalpa spur off the Querétaro highway). School groups and activist delegations are normal. This is one of the easiest ranch visits in the atlas. Book the tour; the store in town is the other door.",
 joinProcess:
 "An asociación civil. Paths are a job, servicio social, a farm-school course, or a donation. OCA partnership does not sell you land.",
 },
 crisalium: {
 visit: 4,
 join: 1,
 visitProcess:
 "Guided visits from Parque Natural El Encuentro, east of San Cristóbal de las Casas, about 15–20 minutes from centro. Workshops in permaculture, bioconstruction, and nonviolent communication. Workaway stays (minimum two weeks) have been listed. Write crisalium@crisalium.org. The park has hours; the five hectares are a home inside a reserve.",
 joinProcess:
 "GEN: not currently open to new members. A family A.C. on five hectares with a 2020 ecological easement. Courses and volunteer stays are the public door.",
 },
 "inla-kesh": {
 visit: 4,
 join: 2,
 visitProcess:
 "Chichihuistán, municipality of Teopisca, Los Altos de Chiapas. Book an EDE (Gaia Education, often a month) or a puertas-abiertas / community-experience week through inlakeshchiapas.org. A two-hectare biotopo. Arrange; do not drop in on ten adults and five children.",
 joinProcess:
 "A small residential circle. Courses have a public door; membership is relational and currently tiny. In Lak'ech is an ethic.",
 },
 "vicente-guerrero": {
 visit: 3,
 join: 3,
 visitProcess:
 "Comunidad Vicente Guerrero, municipality of Españita, Tlaxcala, west of the state capital. Maize fairs are the public door (from 1998). Write gvgtlaxcala.org before you treat a promoter’s milpa as a visitor centre. This is a campesino school in living villages.",
 joinProcess:
 "Membership is as a farming family and promoter in a member community, requested in the village, not on a portal. The A.C. trains; the milpa stays yours.",
 },
 nanciyaga: {
 visit: 5,
 join: 1,
 visitProcess:
 "Carretera Catemaco–Coyame km 7, on Laguna Catemaco. Cabins, jungle walks, temazcal, restaurant, one of the easier reserve visits in the atlas. Book; the two tourist hectares are set up for it. The other twelve are jungle. Do not wander the macaw work as a park.",
 joinProcess:
 "A family reserve. There is no membership share and no Catemaco lot. Staff jobs exist; title does not. You visit. You leave.",
 },
 "pueblo-sacbe": {
 visit: 3,
 join: 4,
 visitProcess:
 "Jungle west of Playa del Carmen, about fifteen minutes from centro. Some houses are retreats and short-term rentals (Jungle Sanctuary Lodge and others). This is a village of homes with cenotes for residents.",
 joinProcess:
 "Buy or rent a house or lot that comes with the bylaws: no grid, biodigesters, jungle. Foreigners typically need a fideicomiso. Easier than a closed covenant, more paperwork than a week on Airbnb. Confirm the covenants on the folio.",
 },
 ixixtlan: {
 visit: 4,
 join: 3,
 visitProcess:
 "Hill above Atlixco, Puebla, facing Popocatépetl and Iztaccíhuatl. Book a retreat, workshop, or PeregrinArte through ixixtlan.com. Sacred-geometry cabins and a vegetarian kitchen. A sanctuary. Arrange.",
 joinProcess:
 "GEN: open to new members. A founder-led family and retreat circle. Courses have a public door; living there is relational.",
 },
 "huerto-roma-verde": {
 visit: 5,
 join: 2,
 visitProcess:
 "Jalapa 234, Roma Sur, Cuauhtémoc, Metro and walkable. Historically Tuesday–Saturday. Markets, workshops, compost, punto limpio. One of the easiest urban visits in the atlas. It is a lot in a neighbourhood: go during posted hours.",
 joinProcess:
 "A volunteer-and-neighbour A.C. Show up with compost, a stall, or a shift. There is no residential membership and no Roma Sur lot. The 1985 rubble is not for sale.",
 },
 "rancho-la-salud": {
 visit: 4,
 join: 4,
 visitProcess:
 "Carretera Poniente Chapala–Jocotepec 1259, three miles west of Ajijic. Common meals, guest rooms, scheduled and individual tours. Contact through rancholasaludvillage.com (video call, then a visit). A lakeshore condominio. Book; do not park in the lane.",
 joinProcess:
 "Buy a Garden Home, Villa, or Townhome. A percentage of the deed is the commons. Modified consensus after you own. Easier than a closed religious covenant, more neighbour than a gated Ajijic condo. Confirm that a unit is actually for sale, six were lived in as of 2024, 37 planned.",
 },
 tamarindos: {
 visit: 4,
 join: 4,
 visitProcess:
 "Camino a las Cabañas, Mata de Agua, Camarón de Tejeda, about 1h25 from Córdoba, about an hour from the port of Veracruz. Cabins, restaurant, temazcal, zip-line, camping, river. Book or call 271 140 7788. A visitable ecoaldea.",
 joinProcess:
 "Lots from 500 m² on the village’s own site. Pequeña propiedad on the Jamapa. Confirm services, access, and what the river flood of 2023 did to the parcel you are looking at.",
 },
 hapori: {
 visit: 4,
 join: 4,
 visitProcess:
 "Km 13.5 Nuevo Libramiento SMA–Guanajuato, Fraccionamiento Águila Real, twenty minutes from San Miguel centro. Agenda a visit through the village site or +52 55 8389 7651. Off-grid houses on regenerating pasture. Arrange at the gate.",
 joinProcess:
 "Purchase a land-and-home package. GEN: founding members via that path. Independent solar, biodigesters, Águila Real plus Hapori covenants. Confirm both layers of rules. Easier than a closed commune, more off-grid than a San Miguel condo.",
 },
 sekkan: {
 visit: 3,
 join: 3,
 visitProcess:
 "Former Rancho Lacayo, countryside near San Miguel de Allende. Email or phone via the IC.org listing; visits often include lunch; 1–2 nights by arrangement; donation for the biodynamic farm. Six families. Arrange; do not drop in.",
 joinProcess:
 "Informal conversation, vision/mission/values and minutes, a tour, a letter (reasons, contributions, biographical sketch), a group decision on philosophical fit and maturity, then meetings. Independent finances, ~$300 fees, two hours a week.",
 },
 "nuevo-san-juan": {
 visit: 4,
 join: 1,
 visitProcess:
 "Nuevo San Juan Parangaricutiro, Meseta Purépecha. The buried church in the Parícutin lava and the volcano itself are the public door; the community also receives visitors around the forestry works. A working indigenous town. Arrange; do not treat the sawmill as a viewpoint.",
 joinProcess:
 "You are a comunero, born into the census, or the asamblea says so. There is no membership share and no Parícutin lot. Almost nobody who visits the lava church becomes a comunero.",
 },
 cedicam: {
 visit: 3,
 join: 2,
 visitProcess:
 "Mixteca Alta around Tilantongo / Nochixtlán. Contour ditches, nurseries, milpa. This is a campesino school. Contact through documented channels (Goldman-era networks, partner NGOs) rather than arriving at a hillside unannounced.",
 joinProcess:
 "A Mixtec farmer network. You join by farming and promoting in a member village. There is no residential membership and no Nochixtlán lot. Goldman recognition is not a waiting list.",
 },
 "sierra-gorda": {
 visit: 5,
 join: 2,
 visitProcess:
 "Jalpan de Serra and the 383,567 ha biosphere. Franciscan missions, waterfalls, trails, community lodging. One of the easiest mountain visits in the atlas, a public reserve with a citizen IAP behind it. Go; book lodging, do not camp in a core zone.",
 joinProcess:
 "The IAP is a public-benefit alliance. You volunteer, donate, or live already in a sierra community. The mountain is not for sale as a membership.",
 },
 "la-ventanilla": {
 visit: 5,
 join: 1,
 visitProcess:
 "Playa La Ventanilla, Santa María Tonameca, about three kilometres east of Mazunte. Canoe the mangroves with the cooperativa. Easy to visit; buy a tour. Confirm whether you are with Servicios Ecoturísticos de La Ventanilla or Lagarto Real. A working village.",
 joinProcess:
 "About twenty-five Zapotec families. You are born into the village or you marry in. There is no membership share and no Tonameca lot on a portal. Almost nobody who takes a canoe becomes a socio.",
 },
 "punta-laguna": {
 visit: 5,
 join: 1,
 visitProcess:
 "Km 27.5 of the Nuevo Xcan–Cobá road. Book a spider-monkey walk through puntalagunamx.com or 985-114-…. Thirty Maya families, a lagoon, howlers. One of the easiest jungle visits on the peninsula. Go with a village guide; do not walk the reserve as a park you own for the afternoon.",
 joinProcess:
 "Najil Tucha is the village. You join by being of those thirty families.",
 },
 "yomol-atel": {
 visit: 4,
 join: 2,
 visitProcess:
 "Capeltic cafés in Jesuit universities are the city door. In Chilón / Yajalón the door is a producer community. Drink the cup; if you want the jungle, arrange through the group (yomolatel.org). A federation at work.",
 joinProcess:
 "You join by being a Tseltal socio in a member community, coffee, honey, soap. Jesuit partnership is history.",
 },
 tierraluz: {
 visit: 4,
 join: 4,
 visitProcess:
 "Hill above Sayulita, Nayarit, twenty minutes’ walk or five minutes’ drive from the surf. Contact tierraluzsayulita@gmail.com. Off-grid houses, food forest, yoga platform. A small neighbourhood. Arrange; do not park in the lane.",
 joinProcess:
 "Buy a titled lot (the site has said two of nineteen remain; from about US$185,000). A.C. membership comes with the commons. Independent solar. Confirm the deed and the A.C. rules. Easier than a closed commune, more off-grid than a Sayulita condo. A lot is the path, and they say so.",
 },
 "huerto-tlatelolco": {
 visit: 5,
 join: 2,
 visitProcess:
 "Nonoalco-Tlatelolco, next to the Plaza de las Tres Culturas. Metro and walkable. Workshops, compost, the edible forest. One of the easiest urban visits in the atlas. It is a lot in a housing unit: go during posted hours.",
 joinProcess:
 "A volunteer-and-neighbour A.C. Show up with compost, a stall, or a shift. There is no residential membership and no Tlatelolco lot. The 1985 tower footprint is not for sale.",
 },
 kuyabeh: {
 visit: 4,
 join: 5,
 visitProcess:
 "Km 34 of the Tulum–Cobá highway. Hotel, restaurant, cenote, temazcal on the commons. Book through kuyabeh.com. A visitable eco-residencial. Twenty minutes from Tulum, ten from Cobá.",
 joinProcess:
 "Buy a ½-ha or 1-ha lot (from about US$108,000). Apply, accept the ~7% construction cap and off-grid rules, take a deed or fideicomiso. GEN: 160 owners. The easiest join in this Mexican ten if you can pay. Confirm phase, services, and the cap.",
 },
 "cabo-pulmo": {
 visit: 5,
 join: 1,
 visitProcess:
 "East Cape, an hour-plus from San José del Cabo on a road that is sometimes washboard. Book a dive or snorkel with Cabo Pulmo Divers or another village shop. Stay in a bungalow. The reef is the visit; do not treat family yards as a beach club. Peak season books out.",
 joinProcess:
 "A shore village of families. You are born here, you marry in, or you work a shop. The park is federal water. ACCP is a conservation membership. Almost nobody who dives becomes a resident.",
 },
 "baja-ecovillage": {
 visit: 3,
 join: 2,
 visitProcess:
 "Cantú, Punta Banda, south of Ensenada, above the estero. The forest park invites planting, trails, and inventory. Contact through bajaecovillage.com rather than arriving at houses unannounced. La Bufadora traffic is next door; the canyon is not the lookout parking lot.",
 joinProcess:
 "Houses sit on Cantú parcels. The A.C. does not sell a share of El Rinconcito Verde. Write the founder. A small hill. Confirm; Baja Montecito is a neighbouring project, not this title.",
 },
 "baja-biosana": {
 visit: 3,
 join: 2,
 visitProcess:
 "El Chorro, dirt road, Sierra de la Laguna foothills. Retreats and natural-building workshops are the door when they are running. Instagram @bajabiosana. Arrange. This is an oasis.",
 joinProcess:
 "A house and a yes have to open at the same time. About nine residents. A membership transfer. Harder than a retreat week. Confirm the current roll before you treat a 2014 film as a vacancy.",
 },
 "san-jose-de-la-zorra": {
 visit: 2,
 join: 1,
 visitProcess:
 "A Kumiai valley inland from Ensenada, near Ejido El Porvenir. Only if the community is receiving. sanjosedelazorra.com. Do not arrive unannounced, and do not photograph children as the poverty story.",
 joinProcess:
 "Ancestral Kumiai membership. The 2024 public-subject decree did not open a lot map. You are not joining. Guests leave.",
 },
 "rancho-pacifico-baja": {
 visit: 4,
 join: 3,
 visitProcess:
 "7 km east of El Pescadero toward the sierra, 15 minutes from Todos Santos. Wood-fired bakery and an off-grid campground (van, tent, glamping). Book the oven or a site.",
 joinProcess:
 "A published PDF invite to the forming eco-village. Write, visit, see if they are taking people that season. Harder than a Cerritos rental; possible if the hosts say yes.",
 },
 tateikie: {
 visit: 1,
 join: 1,
 visitProcess:
 "Mezquitic, Sierra Madre Occidental, a long dirt approach. Only if the comunidad is receiving. Do not arrive unannounced, and do not photograph ceremony as content.",
 joinProcess:
 "Ancestral Wixárika membership. You are not joining. Guests leave.",
 },
 ayotitlan: {
 visit: 2,
 join: 1,
 visitProcess:
 "Sierra de Manantlán, Cuautitlán de García Barragán. Trails exist in the biosphere; the ejido is not those trails. Only if the community is receiving.",
 joinProcess:
 "Born into the ejido, or the asamblea says so. Guests leave.",
 },
 "bosque-la-primavera": {
 visit: 5,
 join: 1,
 visitProcess:
 "West of Guadalajara. Trailheads from Zapopan and Tala. Go in the cool of the morning; fire season closes gates. This is a public forest. It is not Teopantli Kalpulli’s backyard tour unless they invited you.",
 joinProcess:
 "An APFF. Staff, researchers, volunteer fire. The city is next door.",
 },
 kasisi: {
 visit: 4,
 join: 2,
 visitProcess:
 "Kasisi Mission, Chongwe, about 30 km east of Lusaka. Book a course or a look through katczm.com. A working Jesuit farm (oxen, dairy, irrigated fields) used to students. Arrange rather than arrive at the dams unannounced.",
 joinProcess:
 "An institutional training centre. The realistic path is a course, a staff job, or Jesuit vocation. There is no member share and no Chongwe condominium. Harder than a course week, much harder than a Lusaka smallholding listing.",
 },
 "awra-amba": {
 visit: 4,
 join: 2,
 visitProcess:
 "Fogera woreda, 73 km east of Bahir Dar. The village receives study visits, journalists, and religious leaders through a guest committee (awraamba.net). Weaving workshops and the library are the public face. Houses are homes. Book rather than walk the hill uninvited.",
 joinProcess:
 "A cooperative village of about 463 people. Membership is being of Awra Amba (work, equal wages, no religious hierarchy). Growth has been from children and the occasional yes, not from a portal. Ethiopian land is not for sale as freehold.",
 },
 umoja: {
 visit: 4,
 join: 1,
 visitProcess:
 "Archers Post, Samburu, on the Isiolo–Marsabit road along the Waso. Twelve cottages on 14 acres. Book through umojawomen.or.ke. A campsite and a living village. Men may visit in daylight; they do not sleep as members.",
 joinProcess:
 "Women-only. You are received as a woman fleeing FGM, forced marriage, or violence, or you are a guest of the cottages. Harder than a Samburu lodge night, the village is a refuge.",
 },
 "st-jude": {
 visit: 4,
 join: 2,
 visitProcess:
 "Busense village, 12 km along Mutukura Road from Masaka. Book a course or a farm look. Agroecology beds, a nursery, a dried-fruit plant. Used to students and partners. Arrange rather than arrive at the mangoes unannounced.",
 joinProcess:
 "An NGO campus. Trainees go home to Masaka, Rakai, Ssembabule, Mpigi. Staff run the farm. There is no member share and no Busense lot. The realistic path is a course or a job.",
 },
 "khula-dhamma": {
 visit: 4,
 join: 2,
 visitProcess:
 "Near Haga Haga, 8–10 km from Wild Coast beaches, Quko River. Self-catering cob rooms, camping, retreats through the farm. The site has paused volunteers at times, confirm before you go. A working farm.",
 joinProcess:
 "Private freehold. Retreat guests and volunteers are not members. A long stay is a conversation with the people who actually hold the 180 hectares.",
 },
 nadeet: {
 visit: 4,
 join: 2,
 visitProcess:
 "NaDEET Centre on NamibRand, Maltahöhe side; office in Swakopmund. Book a school programme, internship, or visit. Solar cookers, dunes, oryx. A classroom in a reserve picnic site. Arrange; do not treat NamibRand as a public beach.",
 joinProcess:
 "A nonprofit trust. The realistic path is a staff job, an internship, or a school-group booking. There is no member share and no Maltahöhe dune lot. NamibRand remains a separate private reserve.",
 },
 kaydara: {
 visit: 4,
 join: 2,
 visitProcess:
 "Keur Samba Dia, commune of Fimela, Fatick / Sine Saloum. Book a look or a training through jardins-afrique.org. Baobabs, a farm-school, salinised land, mangroves next door. Used to students. Arrange rather than arrive at the coconut grove unannounced. About 2.5 hours from Dakar.",
 joinProcess:
 "A Senegalese association. Students train and go home to sixteen Fimela villages. There is no member share and no Sine Saloum condominium. Ndem, already in the atlas, is a different door.",
 },
 otepic: {
 visit: 3,
 join: 2,
 visitProcess:
 "Kitale, Trans-Nzoia, Mount Elgon foothills. Mitume in town, Sabwani the 10 ha garden. Book a training. A working peace-village project with 22 orphans on site. Alcohol and drugs forbidden. Arrange rather than arrive at Tabasamu unannounced.",
 joinProcess:
 "A founder-led self-help project. Trainings are the public door; residential membership is small and vocational.",
 },
 ndanifor: {
 visit: 1,
 join: 1,
 visitProcess:
 "Bafut, Bamenda Grassfields. The 2012 lodge and gardens were the door until the Anglophone crisis of 2016. Confirm with Better World Cameroon whether the site is actually visitable before you treat a pre-war stay as current.",
 joinProcess:
 "An NGO whose living site was looted and emptied. Trainings and international partnerships continue. Do not plan a move-in.",
 },
 basaisa: {
 visit: 3,
 join: 1,
 visitProcess:
 "Basaisa, Zagazig district, Sharqiya, about 95 km northeast of Cairo. Arrange through the Community Development Association, there is no hotel desk. A working Delta village with solar on roofs. New Basaisa at Ras Sudr is a separate Sinai trip. Do not arrive unannounced at a family lane.",
 joinProcess:
 "A village and its association of lots. The realistic path is being of Basaisa, a research partnership, or work at New Basaisa. Harder than a Cairo Airbnb, much harder than a lot listing.",
 },
 "boabeng-fiema": {
 visit: 5,
 join: 1,
 visitProcess:
 "Boabeng and Fiema, 22 km from Nkoranza, Bono East. A national tourist site: pay at the sanctuary, take a local guide, walk the 4.4 km² of forest and village lanes. The monkeys will find you. Do not feed them. The cemetery of small graves is part of the visit.",
 joinProcess:
 "You are of Boabeng or Fiema, or you are a visitor. Harder than a Ghana lodge night, the villages are homes.",
 },
 fambidzanai: {
 visit: 4,
 join: 2,
 visitProcess:
 "Lot 4 Dovedale Road, Stapleford / Mt Hampden, Harare. Book a course or a look through fambidzanai.org.zw. A working PVO farm-school, used to students. Arrange rather than arrive at the beds unannounced.",
 joinProcess:
 "An institutional training centre. The realistic path is a PDC, the agroecology diploma, or a staff job. There is no member share and no Stapleford condominium. Harder than a course week, much harder than a Harare smallholding listing.",
 },
 guie: {
 visit: 3,
 join: 2,
 visitProcess:
 "Guiè, near Manéga, about 60 km north of Ouagadougou. Write guie.azn@eauterreverdure.org for the year’s programme. A working bocage farm and CFAR school. Arrange rather than arrive at the hedges unannounced. Check security conditions before you travel.",
 joinProcess:
 "An inter-village association. Young people train at CFAR and go home to lay wégoubri. The realistic path is a training or association work.",
 },
 chikukwa: {
 visit: 3,
 join: 1,
 visitProcess:
 "Chitekete, Chimanimani District, Eastern Highlands. The CELUO training centre has a kitchen and dormitory. Arrange through celuozw.org. A living communal-land village. The mountains are a border; check conditions before you go.",
 joinProcess:
 "Six villages on communal land. Membership is being of Chikukwa. Trainees come and go. There is no published freehold. Harder than a course week, much harder than an Eastern Highlands listing.",
 },
 "il-ngwesi": {
 visit: 4,
 join: 1,
 visitProcess:
 "Mukogodo escarpment, Laikipia, neighbouring Lewa. Book the community-owned lodge at ilngwesi.com. Thatch bandas on a rocky outcrop, game walks, six Maasai villages below. Arrange transfers.",
 joinProcess:
 "A group ranch of some 6,000 Il Lakipiak Maasai. Membership is being of the six villages. Guests take a bandas. There is no published plot map. Harder than a safari night, the ranch is a pastoralist title.",
 },
 lynedoch: {
 visit: 4,
 join: 3,
 visitProcess:
 "Lynedoch Road at the R310, opposite the station, Stellenbosch. Book a Sustainability Institute programme or a campus look through sustainabilityinstitute.net. A working eco-HOA and school precinct among vineyards. Houses are homes; the Institute is the public door. Arrange rather than walk gardens unannounced.",
 joinProcess:
 "To join: buy a house if one is for sale, then sit the Lynedoch Home Owners Association, a Section 21 company with a code of conduct. An affordable tranche was designed in; confirm which units still are. Easier than a closed co-op, more rules than a raw Stellenbosch smallholding.",
 },
 anja: {
 visit: 5,
 join: 1,
 visitProcess:
 "13 km south of Ambalavao on RN7, at the Three Sisters granite. Pay at the association gate and take a local guide, required. About 300 ring-tailed lemurs, a lake, 30 hectares. One of Madagascar’s easiest community reserves to visit on a south-road day.",
 joinProcess:
 "A village association of local households. Membership is being of Anja. Visitors walk. Harder than a ticket, the granite is still a village.",
 },

 celo: {
 visit: 2,
 join: 2,
 visitProcess:
 "South Toe valley, Yancey County, under the Black Mountains. There is no visitor centre. Arthur Morgan School and Camp Celo are the public programmes on leased land. The Inn flooded in Helene; Celo Commons is rebuilding. Do not drive in looking for a lot map. Arrange through school, camp, or a member.",
 joinProcess:
 "Consensus membership, a waiting list, a modest refundable land fee like a lifetime lease. You may own a house; you never own the land. Predominantly Quaker in culture, no religious test. Harder than a house closing, fifty-odd families. Some people settle on the periphery and wait.",
 },
 "sunrise-ranch": {
 visit: 4,
 join: 2,
 visitProcess:
 "100 Sunrise Ranch Road, Eden Valley, west of Loveland. Book a programme or a stay. Pavilion, dome, guest rooms, a dining hall. A working retreat; houses are staff homes. Arrange rather than walk the valley unannounced.",
 joinProcess:
 "A vocational and spiritual path into the resident staff community of the Emissaries. Trustees and a spiritual director. Harder than a Front Range closing, attunement.",
 },
 "ananda-village": {
 visit: 4,
 join: 3,
 visitProcess:
 "14618 Tyler Foote Road, Nevada City. Expanding Light and the Meditation Retreat are the published doors. Village Reception Center weekdays 10–4; the site says you may visit without prior arrangements in office hours. Retreats, Crystal Hermitage, Master’s Market. Housing areas are homes.",
 joinProcess:
 "A spiritual membership path through courses and a stay. Housing is cooperative inventory. Demand sometimes exceeds supply; some members live nearby. Independent finances. Easier than a closed ashram, harder than buying a Nevada City house.",
 },
 sandhill: {
 visit: 3,
 join: 3,
 visitProcess:
 "29398 County Road 203, Rutledge. Write. A small farm next to Dancing Rabbit, do not treat a DR tour as a Sandhill invitation. Intern and visitor path. Capacity is rooms.",
 joinProcess:
 "They are recruiting, especially families who will farm. Visit, intern, then ask. Members are the board; monthly contributions. Private dwellings since 2019, land still common. Easier than the FEC years. Confirm the current household before you pack.",
 },
 linnaea: {
 visit: 3,
 join: 2,
 visitProcess:
 "Gunflint Lake, Cortes Island. Ferry via Quadra. linnaeafarm.org for farmstays, internships, and the PDC. Trails are a local culture; the farm is a workplace. Arrange rather than camp unannounced on the trust.",
 joinProcess:
 "Resident steward and farmer openings are advertised when they exist. A no-sale land trust. Internships are the usual first year. Harder than a Gulf Islands B&B, they need people who will farm 314 acres.",
 },
 "lost-valley": {
 visit: 4,
 join: 3,
 visitProcess:
 "81868 Lost Valley Lane, Dexter, 18 miles southeast of Eugene. Book a Community Experience Week, a PDC, lodging, or a tour through the education center. Oak savanna, lodge, outdoor kitchen. A working campus; Meadowsong houses are homes.",
 joinProcess:
 "Residency as staff, renter, or volunteer on the 501(c)(3). Affordable housing is a programme. Intern and course paths first. Easier than a closed commune, harder than an Eugene rental.",
 },
 windsong: {
 visit: 2,
 join: 3,
 visitProcess:
 "20543 96th Avenue, Walnut Grove, Langley. A 34-home strata. The common house is for members and their guests. Public interest goes through windsong.bc.ca; do not treat the atria as a park. Yorkson Creek greenspace is the view.",
 joinProcess:
 "To join: buy a townhome if one is for sale, then sit the strata and the cohousing consensus. Easier than a closed co-op, more meetings than a raw Langley townhouse.",
 },
 "camphill-ontario": {
 visit: 2,
 join: 2,
 visitProcess:
 "7841 4th Line, Angus (Nottawasaga) and Sophia Creek in Barrie. This is a care community. Visit by arrangement, workshops, the farm, a scheduled day. Do not drop in on houses.",
 joinProcess:
 "Villagers enter through disability-support admission. Coworkers apply for a live-in year or a life. Safeguarding is what matters. Harder than a farm stay.",
 },
 yarrow: {
 visit: 3,
 join: 3,
 visitProcess:
 "42312 Yarrow Central Road, Chilliwack. Groundswell lists tours and contact at groundswellcohousing.ca. The deli on the road is the public commercial door. The farm and the 33 homes are workplaces and houses, arrange. Stó:lō territory; read their land acknowledgement.",
 joinProcess:
 "Buy a Groundswell unit if one is for sale (strata). Or join a farm lease / the deli co-op. YES Cooperative is the umbrella. Easier than a closed commune, more meetings than a raw Fraser Valley acreage. The twenty organic acres are not lots.",
 },
 ecoreality: {
 visit: 2,
 join: 2,
 visitProcess:
 "2152 Fulford-Ganges Road, south Salt Spring. The public door is a wiki (ecoreality.org) and whatever email answers. A small working farm. Arrange. The 61-acre neighbour is not theirs to tour as if it were.",
 joinProcess:
 "Member-funder shares in a s. 149(1)(e) agricultural co-op. They have advertised for more members for years. Confirm who is on the land this year. Harder than a Salt Spring B&B; possible if they are actually taking people.",
 },
  ...asiaVisitJoin,
  ...russiaVisitJoin,
  ...usaMoreVisitJoin,
  ...polandVisitJoin,
  ...volunteerBatchVisitJoin,
  ...formerVisitJoin,
  ...formerMoreVisitJoin,
  ...formerClosedVisitJoin,
  ...livingMoreVisitJoin,
  ...livingBatch2VisitJoin,
  ...livingBatch3VisitJoin,
  ...livingBatch4VisitJoin,
  ...livingBatch5VisitJoin,
  ...livingBatch6VisitJoin,
  ...livingBatch7VisitJoin,
  ...livingBatch8VisitJoin,
  ...livingBatch9VisitJoin,
  ...livingBatch10VisitJoin,
  ...livingBatch11VisitJoin,
  ...livingBatch12VisitJoin,
  ...livingBatch13VisitJoin,
  ...livingBatch14VisitJoin,
  ...livingBatch15VisitJoin,
  ...livingBatch16VisitJoin,
  ...livingBatch17VisitJoin,
  ...livingBatch18VisitJoin,
  ...livingBatch19VisitJoin,
  ...livingBatch20VisitJoin,
  ...livingBatch21VisitJoin,
  ...livingBatch22VisitJoin,
  ...livingBatch23VisitJoin,
  ...livingBatch24VisitJoin,
  ...livingBatch25VisitJoin,
  ...livingBatch26VisitJoin,
  ...livingBatch27VisitJoin,
  ...livingBatch28VisitJoin,
  ...livingBatch29VisitJoin,
  ...livingBatch30VisitJoin,
  ...livingBatch31VisitJoin,
  ...livingBatch32VisitJoin,
  ...livingBatch33VisitJoin,
  ...livingGlampingVisitJoin,
  ...sustainableEcovillageVisitJoin,
  ...maitreyaEcovillageVisitJoin,
};

export function visitJoinFor(slug: string): VisitJoin {
 const row = visitJoinBySlug[slug];
 if (!row) {
 throw new Error(`Missing visit/join data for ${slug}`);
 }
 return row;
}
