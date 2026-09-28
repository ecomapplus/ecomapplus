/** Internal governance for every village in the atlas.
 * Ordinary entries cover who decides, which bodies sit, and how a week runs.
 * Villages with especially unusual structures carry a unique flag, the
 * “Unique governance structure” tag, and a deeper dive (organs, path, history, tension).
 */
import { uniqueGovernanceAdditions } from "./unique-governance-additions";
import { uniqueGovernanceDeepen } from "./unique-governance-dives";
import { formerClosedGovernance } from "./former-closed-details";
import { livingBatch2Governance } from "./living-batch2-details";
import { livingBatch3Governance } from "./living-batch3-details";
import { livingBatch4Governance } from "./living-batch4-details";
import { livingBatch5Governance } from "./living-batch5-details";
import { livingBatch6Governance } from "./living-batch6-details";
import { livingBatch7Governance } from "./living-batch7-details";
import { livingBatch8Governance } from "./living-batch8-details";
import { livingBatch9Governance } from "./living-batch9-details";
import { livingBatch10Governance } from "./living-batch10-details";
import { livingBatch11Governance } from "./living-batch11-details";
import { livingBatch12Governance } from "./living-batch12-details";
import { livingBatch13Governance } from "./living-batch13-details";
import { livingBatch14Governance } from "./living-batch14-details";
import { livingBatch15Governance } from "./living-batch15-details";
import { livingBatch16Governance } from "./living-batch16-details";
import { livingBatch17Governance } from "./living-batch17-details";
import { livingBatch18Governance } from "./living-batch18-details";
import { livingBatch19Governance } from "./living-batch19-details";
import { livingBatch20Governance } from "./living-batch20-details";
import { livingBatch21Governance } from "./living-batch21-details";
import { livingBatch22Governance } from "./living-batch22-details";
import { livingBatch23Governance } from "./living-batch23-details";
import { livingBatch24Governance } from "./living-batch24-details";
import { livingBatch25Governance } from "./living-batch25-details";
import { livingBatch26Governance } from "./living-batch26-details";
import { livingBatch27Governance } from "./living-batch27-details";
import { livingBatch28Governance } from "./living-batch28-details";
import { livingBatch29Governance } from "./living-batch29-details";
import { livingBatch30Governance } from "./living-batch30-details";
import { livingBatch31Governance } from "./living-batch31-details";
import { livingBatch32Governance } from "./living-batch32-details";
import { livingBatch33Governance } from "./living-batch33-details";
import { livingGlampingGovernance } from "./living-glamping-details";
import { sustainableEcovillageGovernance } from "./sustainable-ecovillage";
import { maitreyaEcovillageGovernance } from "./maitreya-ecovillage";

export type GovernanceModel =
 | "consensus"
 | "sociocracy"
 | "planner-manager"
 | "assembly"
 | "board"
 | "cooperative"
 | "spiritual"
 | "federation"
 | "hoa"
 | "founder"
 | "indigenous-assembly"
 | "common-purse"
 | "hybrid";

export type GovernanceBody = {
 name: string;
 role: string;
};

export type GovernanceDive = {
 title: string;
 lead: string;
 organs: { name: string; what: string }[];
 path: string;
 history: string;
 tension: string;
};

export type Governance = {
 model: GovernanceModel;
 modelLabel: string;
 unique: boolean;
 summary: string;
 whoDecides: string;
 bodies: GovernanceBody[];
 howItRuns: string;
 dive?: GovernanceDive;
};

export const modelLabels: Record<GovernanceModel, string> = {
consensus: "Consensus",
sociocracy: "Sociocracy",
"planner-manager": "Planner-manager",
assembly: "Village assembly",
board: "Board and staff",
cooperative: "Cooperative democracy",
spiritual: "Spiritual order",
federation: "Federation",
hoa: "Homeowners / body corporate",
founder: "Founder-stewarded",
"indigenous-assembly": "Indigenous assembly",
"common-purse": "Common purse",
hybrid: "Hybrid"
};

export const uniqueGovernanceTag = "Unique governance structure";

export const governanceBySlug: Record<string, Governance> =
{
	"sabbathday-lake": {
		model: "spiritual",
		modelLabel: "Spiritual order",
		unique: true,
		summary: "The last Shakers in the world still govern as a religious society of Elders and Eldresses. The United Society of Shakers, Sabbathday Lake, Inc. holds the village, museum, farm, and historic buildings. Public Meeting continues on Sundays in the 1794 Meetinghouse. New members are accepted in principle by taking the covenant, celibacy, confession, common property, not by buying a house.",
		whoDecides: "Covenanted Shakers, through the traditional Ministry of Elders and Eldresses. There are three remaining members as of 2025. The nonprofit corporation is the civil face of that society.",
		bodies: [
			{
				name: "Elders and Eldresses",
				role: "The traditional Shaker Ministry. Authority is religious and personal."
			},
			{
				name: "United Society of Believers in Christ’s Second Appearing",
				role: "The covenanted religious society. Inward life sits here."
			},
			{
				name: "United Society of Shakers, Sabbathday Lake, Inc.",
				role: "Maine 501(c)(3) (EIN 01-0317232). Holds the ~1,800 acres. Tax entity 1976; society organized 1794."
			},
			{
				name: "Sunday Meeting",
				role: "Public worship in the 1794 Meetinghouse. Outsiders sit the benches; they do not vote."
			},
			{
				name: "Friends of the Shakers",
				role: "Supporting nonprofit. Friends are not Shakers."
			}
		],
		howItRuns: "A decision about the herb garden, the museum, or a timber lot is a decision of the remaining covenanted members, carried in the corporation’s name. A journalist’s request, a tour, and Open Farm Day are the public face. There is no homeowners association, no planner-manager diagram, and no path to a private deed. Joining means taking the Shaker covenant.",
		dive: {
			title: "A Ministry of three people on 1,800 acres",
			lead: "Every other village in this atlas, however spiritual, has a membership that looks like a village. Sabbathday Lake is a religious order that happens to still farm. Elders and Eldresses, celibacy, confession, and common property are the government. The museum is how the order talks to Maine.",
			organs: [
				{
					name: "Ministry (Elders and Eldresses)",
					what: "The original Shaker constitution, still in force because there was never a vote to replace it. With three people, the Ministry and the membership are almost the same set."
				},
				{
					name: "The covenant",
					what: "Celibacy, confession of sin, joint interest in property. Sister April Baxter joined in 2025, which is the proof that the door is not theoretically closed."
				},
				{
					name: "The corporation and the National Historic Landmark",
					what: "Civil and federal skins on the same dirt. They protect the buildings. They do not sit above the Ministry."
				},
				{
					name: "Meetinghouse",
					what: "The public court. Sunday Meeting is where the world’s people are allowed in. Governance does not happen there."
				}
			],
			path: "A repair to the Dwelling House: the members, in the corporation’s name, with historic-preservation overlay. A new believer: the covenant, which is a religious yes. A request to film: the society, which has heard every version of the request.",
			history: "Shaker missionaries settled Thompson’s Pond Plantation in 1782–83. The Meetinghouse went up in 1794. At mid-19th century this was a full village of workshops and farms. Membership declined through the 20th century as the other Shaker societies closed or became museums. Sabbathday Lake refused to close. It incorporated as a nonprofit in 1976, opened the museum to the public, and kept the covenant. The National Historic Landmark District is a designation on that choice.",
			tension: "Three people cannot be a 19th-century Ministry without help, and help (staff, Friends, journalists) is not the Society. Celibacy as a growth strategy. What happens to the 1,800 acres if the last covenanted member dies, a legal and spiritual question the society has had to hear for fifty years. Unique because the government is still an order."
		}
	},
	"solheimar": {
		model: "board",
		modelLabel: "Board and staff",
		unique: false,
		summary: "A nonprofit board and village management run Sólheimar as a workplace and a home. Staff, residents with disabilities, and volunteers share the greenhouses, craft shops, and guesthouse. The institution holds the land; nobody here buys a house lot.",
		whoDecides: "Nonprofit board and village management.",
		bodies: [
			{
				name: "Sólheimar ses",
				role: "Independent nonprofit that operates the village, workplaces, guesthouse, and workshops."
			},
			{
				name: "Church of Iceland Childcare Committee",
				role: "Bought Hverakot on 31 March 1930 for ISK 8,000 and leased it to founder Sesselja Sigmundsdóttir."
			},
			{
				name: "Sesseljuhús",
				role: "Turf-roofed visitor and environment centre opened in 2002."
			}
		],
		howItRuns: "A nonprofit board and village management run the day. Staff, residents with disabilities, and volunteers share greenhouses, craft shops, and the guesthouse. The institution holds the land. Sólheimar began when the Church of Iceland’s Childcare Committee bought Hverakot on 31 March 1930 and leased it to Sesselja Sigmundsdóttir; it now operates as an independent nonprofit community and workplace, not a residential co-op."
	},
	"riverside": {
		model: "consensus",
		modelLabel: "Consensus",
		unique: false,
		summary: "Trustees hold the deed. Members govern daily life by consensus in weekly meetings. No private sale of houses or cars. The trust and the residential community are legally distinct but designed to work together.",
		whoDecides: "Trustees hold the deed. Members govern daily life by consensus in weekly meetings. No private sale of houses or cars. The trust and the residential community are legally distinct but designed to work together.",
		bodies: [{
			name: "Riverside residential community",
			role: "Weekly consensus meetings run daily life. No leader."
		}, {
			name: "Religious Charitable Riverside Community Trust",
			role: "Owns all land, houses, and major assets. There is no private title to houses or cars."
		}],
		howItRuns: "Members govern daily life by consensus in weekly meetings. No private sale of houses or cars. The trust and the residential community are legally distinct but designed to work together. Religious Charitable Riverside Community Trust (formed 1953). The trust owns all land, houses, and major assets, there is no private title to houses or cars. Members pay rent to the trust and receive a weekly allowance from the community fund. Trustees administer the deed; weekly meetings run by consensus with no leader. The community has shifted from an explicitly Christian pacifist founding to a secular, pluralist membership living under the same trust."
	},
	"koinonia": {
		model: "board",
		modelLabel: "Board and staff",
		unique: false,
		summary: "Nonprofit board plus resident partners. After 2005 the staff/volunteer split was dropped. Members live by a needs-based allowance, prayer, work, and hospitality rather than a town-meeting co-op or a restored common purse.",
		whoDecides: "Nonprofit board plus resident partners.",
		bodies: [
			{
				name: "Koinonia Farm (original common-purse community)",
				role: "Founding form: common purse, equal pay for Black and white workers, pacifist. Survived Klan boycotts via pecan mail-order."
			},
			{
				name: "Koinonia Partners, Inc.",
				role: "Holds the farm, ministries, catalog business, and land. Members receive a needs-based allowance rather than individual title."
			},
			{
				name: "Fund for Humanity / Partnership Housing",
				role: "Built 194 no-interest houses (1969–92). The template Millard and Linda Fuller took global as Habitat for Humanity."
			},
			{
				name: "Habitat for Humanity International",
				role: "Founded from Koinonia’s partnership-housing idea in Americus in 1976. Now a separate global charity."
			}
		],
		howItRuns: "After 2005 the staff/volunteer split was dropped. Members live by a needs-based allowance, prayer, work, and hospitality rather than a town-meeting co-op or a restored common purse. Koinonia Partners, Inc., a 501(c)(3) Christian nonprofit (Georgia Historic Site since 2005). Founded as a common-purse interracial farm. Reincorporated as Koinonia Partners in 1969 to run partnership housing and social ministries. In 1993 it tried a staff-and-board nonprofit model and dropped the common purse. In 2005 it reorganized back toward an intentional Christian community: members receive a needs-based allowance rather than a restored common purse. Land and ministries sit with the nonprofit, not with individual title."
	},
	"camphill-copake": {
		model: "board",
		modelLabel: "Board and staff",
		unique: false,
		summary: "Nonprofit board of directors. Daily life is organized in about 22 lifesharing houses plus workshop and farm groups, guided by anthroposophical social-therapy practice rather than a members’ co-op. Camphill Academy trains coworkers. The village renamed itself Camphill Village Copake (from Camphill Village USA) after its 60th anniversary to match the place-name custom of other Camphills.",
		whoDecides: "Nonprofit board of directors.",
		bodies: [
			{
				name: "Camphill Village U.S.A., Inc.",
				role: "Owns land, houses, and workshops. The oldest and largest Camphill community in North America."
			},
			{
				name: "Camphill Village Copake Foundation",
				role: "Raises and holds funds in support of the village; does not replace the operating charity as landowner."
			},
			{
				name: "Camphill Academy",
				role: "Trains coworkers in anthroposophical social therapy."
			},
			{
				name: "Camphill Association of North America",
				role: "Network of 100+ Camphill places worldwide. Copake helped seed later villages in Pennsylvania, Minnesota, California, and elsewhere."
			}
		],
		howItRuns: "Daily life is organized in about 22 lifesharing houses plus workshop and farm groups, guided by anthroposophical social-therapy practice rather than a members’ co-op. Camphill Academy trains coworkers. The village renamed itself Camphill Village Copake (from Camphill Village USA) after its 60th anniversary to match the place-name custom of other Camphills. Camphill Village U.S.A., Inc., a 501(c)(3) public charity (tax-exempt since 1963). The oldest and largest Camphill community in North America, part of a lateral movement of 100+ Camphill places worldwide rather than a franchise. A separate Camphill Village Copake Foundation supports the village. Land, houses, and workshops are held by the nonprofit. Residents with developmental disabilities and coworker families share extended-family houses; there is no private lot title and no housing co-op."
	},
	"findhorn": {
		model: "hybrid",
		modelLabel: "Hybrid",
		unique: true,
		summary: "The Park is a civic neighbourhood sitting beside a charity that used to run the place. After the Findhorn Foundation ceased operations in November 2023, an elected Community Benefit Society began buying the core land and buildings, while the New Findhorn Association remains the membership body for people who live or work here whether or not they were Foundation staff.",
		whoDecides: "Park residents through the New Findhorn Association and the elected board of Ecovillage Findhorn Community Benefit Society. The Foundation’s remaining SCIO still exists on paper while assets transfer; it no longer runs daily life.",
		bodies: [
			{
				name: "New Findhorn Association",
				role: "Civic membership body (1999) for individuals and organisations connected with the Park. Common Ground is the values statement. Living here is NFA life, not automatically Foundation life."
			},
			{
				name: "Ecovillage Findhorn Community Benefit Society",
				role: "Democratic community-ownership vehicle founded May 2023. Elected board from November 2023. Bought major land and buildings, including Universal Hall, from the Foundation (first stages 18 November 2024)."
			},
			{
				name: "Park Ecovillage Trust",
				role: "Neighborhood-level property holder that sat beside the Foundation as parcels were sold down over decades."
			},
			{
				name: "Findhorn Foundation SCIO",
				role: "Historical education charity (Trust 1968, Foundation 1972, later SC051938). Ceased operations November 2023 after financial collapse; more than 150 jobs ended. Remains registered while assets move."
			},
			{
				name: "Phoenix Community Stores and Ekopia",
				role: "Park enterprises. They are part of the local economy, not the village council."
			}
		],
		howItRuns: "A question about living in the Park (noise, a path, a new household) still goes to the NFA. A question about who owns Universal Hall or the next land transfer goes to the CBS board, which is open to Park residents and partners with Moray Council, the Scottish Government, and OSCR. Private dwellings, some freehold, sit beside community-owned core. There is no single landlord and no community land trust.",
		dive: {
			title: "A neighbourhood that outlived its founding charity",
			lead: "Findhorn is famous as one spiritual community. Internally it has been several legal persons for decades: a charity that ran courses, a civic association of people who actually live in the Park, neighborhood trusts, a land company, and houses people rent or own. The 2023 collapse made that split impossible to ignore.",
			organs: [
				{
					name: "New Findhorn Association",
					what: "The Park’s civic layer. You can live here, join NFA, and never have been Foundation staff. That distinction is the whole modern constitution."
				},
				{
					name: "Ecovillage Findhorn CBS",
					what: "The vehicle invented in 2023 so the Park could buy itself. One member, one vote among residents who join."
				},
				{
					name: "Park Ecovillage Trust and Duneland Ltd",
					what: "Older neighborhood and landscape holders. They explain why a map of “Findhorn” is not a map of one title."
				},
				{
					name: "Findhorn Foundation SCIO",
					what: "The name the world still uses. Operations stopped. Education that continues in the Park now sits with other hosts."
				}
			],
			path: "Someone who lives in a Park house raises a living issue at NFA. If the issue is a building the CBS now holds, it goes to the elected CBS board. If it is a privately owned dwelling, the household decides inside the Park’s covenants and planning. Visitors on a programme are guests of whoever is hosting that week; they are not voting members. The old Foundation council is not the path.",
			history: "Peter and Eileen Caddy and Dorothy Maclean parked a caravan at the Findhorn Bay Caravan Park in 1962. A charitable trust (1968) and then the Findhorn Foundation (1972) held the education centre that made the name. As the Park densified, NFA (1999) was created because residents were no longer the same set as Foundation staff. Ekopia, Phoenix, and Duneland grew beside them. In November 2023 the Foundation ceased operations. CBS, founded that May, completed first asset purchases on 18 November 2024.",
			tension: "Who speaks for Findhorn when journalists still mean the Foundation. How a CBS of residents relates to people who bought houses expecting a charity next door. Whether Experience Week and the spiritual origin story still have an institutional home. OSCR, Moray Council, and creditors are parties to the transfer; they are not the village meeting."
		}
	},
	"twin-oaks": {
		model: "planner-manager",
		modelLabel: "Planner-manager",
		unique: true,
		summary: "Twin Oaks runs a planner-manager democracy taken from B. F. Skinner’s Walden Two. Three planners hold overlapping 18-month terms. Area managers run the tofu, hammocks, and other work. Land and businesses sit with Twin Oaks Community, Inc., a Virginia corporation with IRC 501(d) apostolic tax status. Members are not individual title holders.",
		whoDecides: "The three planners on policy and the membership as a whole on the biggest questions. Managers decide inside their areas. There is no single leader and no private sale of the farm.",
		bodies: [
			{
				name: "Three planners",
				role: "Overlapping 18-month terms. The executive. They can be recalled. The design is that no one person is “the founder in charge” after the first years."
			},
			{
				name: "Area managers",
				role: "Tofu, hammocks, garden, child care, and the rest. Appointed, not hereditary. Labour credit is the membership."
			},
			{
				name: "Twin Oaks Community, Inc.",
				role: "Virginia corporation holding land and businesses. 501(d) apostolic tax status: members report a small taxable dividend rather than wages."
			},
			{
				name: "Membership process",
				role: "Three-week visitor program, interview, then a wait for a room. Capacity is rooms, not ideology."
			},
			{
				name: "Federation of Egalitarian Communities",
				role: "The peer network. East Wind and Acorn sit in the same family of labour-credit communes."
			}
		],
		howItRuns: "You work a labour quota. A change in a work area goes to the manager; a change in the labour system or a new building goes to the planners; a change in the membership deal goes to the community. Income is shared. The 501(d) filing is the tax face of a religious-looking apostolic code used by a secular commune.",
		dive: {
			title: "Walden Two without a king",
			lead: "Most income-sharing communes either keep a charismatic founder at the centre or dissolve into a house-meeting that cannot decide. Twin Oaks’ answer, copied from Skinner and then adapted for fifty years, is to split “who thinks about the whole” (planners) from “who runs the tofu” (managers), rotate the first, and keep labour credits as the constitution.",
			organs: [
				{
					name: "Planners",
					what: "Three people, staggered terms, recallable. The point of the number three is that a pair cannot silently run the place, and one person cannot."
				},
				{
					name: "Managers",
					what: "Competence, not popularity contests, is the theory. In practice some areas are harder to staff than others, which is its own politics."
				},
				{
					name: "Labour-credit system",
					what: "The real bylaw. Hours are the membership. Vacation, illness, age, and child care are written into the credit system because otherwise the commune reproduces the household it was trying to leave."
				},
				{
					name: "501(d) corporation",
					what: "The IRS sees an apostolic community. The members see a secular egalitarian farm. That mismatch is a legal technology."
				}
			],
			path: "A member wants the tofu recipe changed: manager. A member wants the weekly quota dropped: planners, then the community if it is big enough. A visitor wants to join: the three-week program and an interview, then a room if one exists. A member leaving takes personal property. There is no board of outside directors above the planners.",
			history: "Kat Kinkade and others founded Twin Oaks in 1967 as a deliberate Walden Two experiment in Louisa County, Virginia. The planner-manager system, the labour quota, and the refusal of a single guru were the founding bets. Hammocks paid the bills; tofu still does. The Federation of Egalitarian Communities spread the labour-credit pattern to East Wind, Acorn, and others. The community is still income-sharing in 2026, which is the rare outcome.",
			tension: "Whether a 1960s behavioural-science org chart still fits a membership that is smaller, older, and less willing to treat labour as the whole self. How 501(d) looks to a secular IRS. Child care and gender in a system designed by people who thought they could design around both. The uniqueness is not “they have meetings.” It is that they still run the Skinner diagram on purpose."
		}
	},
	"auroville": {
		model: "hybrid",
		modelLabel: "Hybrid",
		unique: true,
		summary: "Auroville is a statutory township. The Auroville Foundation Act, 1988, vested all assets in the Auroville Foundation. Three authorities must work together: a government-appointed Governing Board, the Residents’ Assembly of all listed residents, and an International Advisory Council. Residents have no private land title.",
		whoDecides: "On paper, the three authorities together. Admission and termination of residents is a Residents’ Assembly responsibility under the Act. In the 2020s the Governing Board, the Secretary (an IAS officer), and the Residents’ Assembly have publicly disagreed over development, trees, and who actually governs.",
		bodies: [
			{
				name: "Auroville Foundation",
				role: "Autonomous body under the 1988 Act. Holds all movable and immovable assets. Residents are not title holders."
			},
			{
				name: "Governing Board",
				role: "Seven members appointed by the Government of India. The legal high table for the Foundation."
			},
			{
				name: "Residents’ Assembly",
				role: "All official residents. Elects a Working Committee. The human city as the Act imagined it."
			},
			{
				name: "Working Committee of the Residents’ Assembly",
				role: "The RA’s standing executive. The body most often in the room with the Secretary."
			},
			{
				name: "International Advisory Council",
				role: "The third statutory authority. Advice."
			},
			{
				name: "Office of the Secretary",
				role: "An IAS officer posted to Auroville. Not in the original three-body diagram as a fourth power, and in the 2020s treated by many residents as exactly that."
			}
		],
		howItRuns: "A resident is a person on the Register. Entry is a Newcomer process under the Residents’ Assembly’s responsibility. Land, the Crown, and major building sit with the Foundation. A working group of residents can run a service or a commercial unit; it cannot sell the plot. When the three authorities agree, the place looks like a self-governing township. When they do not, as over the Crown forest, visas, and the Register in the 2020s, Delhi’s appointments and the Secretary’s office become the path that matters.",
		dive: {
			title: "Three authorities, one Act, and a city that is not a country",
			lead: "No other village in this atlas is a creature of a national parliament in quite this way. The Auroville Foundation Act tried to keep the place from becoming either a private ashram of the Sri Aurobindo Society or a suburb of Villupuram. It created three authorities that must work together. They have not always done so.",
			organs: [
				{
					name: "Governing Board",
					what: "Appointed from Delhi. Holds the Foundation’s legal high ground. Since 2021 its development push and the posting of a strong Secretary have been the live constitutional crisis."
				},
				{
					name: "Residents’ Assembly and Working Committee",
					what: "The listed residents as a body politic. Under the Act they admit and terminate residents. In practice they have fought to keep that, and the forests, from being treated as a file in an IAS office."
				},
				{
					name: "International Advisory Council",
					what: "Named in the Act so the experiment would stay international. It can speak; it cannot outvote a Board appointment."
				},
				{
					name: "Register of Residents and Entry Service",
					what: "The practical gate. Who is an Aurovilian is the most political list in the township."
				}
			],
			path: "A new person arrives as a Newcomer, then (if the RA process completes) as a resident on the Register. A forest, a housing project, or a visa is supposed to move through resident working groups and then the Foundation. In the 2020s many of those files have gone to the Secretary and the Governing Board instead, which is why protests over the Crown were not a planning dispute but a governance dispute. There is no plot you can buy to skip the Register.",
			history: "The Mother (Mirra Alfassa) inaugurated Auroville on 28 February 1968. Land was assembled by the Sri Aurobindo Society. Conflicts over that Society’s control led Parliament to pass the Auroville Foundation Act in 1988; assets vested in the Foundation on 1 April 1992. The three-authority design is the peace treaty from that fight. The 2021–24 conflict over the Crown, visas, and the Register is the first time since then that the treaty has been publicly stress-tested by the Union government.",
			tension: "Whether Auroville is a self-governing international township that happens to sit in India, or an Indian public project that happens to have residents. Trees versus the Master Plan. Who may stay when visas are a central-government instrument. The Act names three authorities and does not say what happens when they disagree. That silence is the unique structure."
		}
	},
	"the-farm": {
		model: "cooperative",
		modelLabel: "Cooperative democracy",
		unique: true,
		summary: "The Farm is the American commune that wrote down its own Changeover. Stephen Gaskin’s spiritual caravan became a common-purse village, then in 1983 dropped the common purse, kept the land in common, and became a cooperative whose members pay dues and keep personal assets. A board and a town meeting now sit where the teacher sat.",
		whoDecides: "A board of directors for the cooperative village, with town-meeting budgeting for community dues. Spiritual leadership under Gaskin gave way to a council of elders and then to that board. Plenty and the other nonprofits have their own boards.",
		bodies: [
			{
				name: "The Farm Community (cooperative village)",
				role: "Post-1983 membership community. Land held in common. Members pay monthly dues and keep personal assets."
			},
			{
				name: "Board of directors",
				role: "The legal successor to the teacher. Town-meeting budgeting sits beside it."
			},
			{
				name: "The Foundation (historical)",
				role: "The common-purse nonprofit of the bus years. The Changeover is the story of this body ending."
			},
			{
				name: "Plenty International",
				role: "501(c)(3) relief nonprofit born on The Farm. Its own board; not the village council."
			},
			{
				name: "Ecovillage Training Center, Book Publishing Company, SE International",
				role: "On-site enterprises and education. They are the economic face."
			}
		],
		howItRuns: "You do not join by getting on a bus from San Francisco. You visit, you are considered, you pay dues if you become a member. Households keep their money. The woods and the roads stay common. Midwifery, soy, and Plenty are reputations; the governance is a co-op that remembers being a church.",
		dive: {
			title: "The Changeover as a constitution",
			lead: "Plenty of communes quietly became a handful of aging owners. The Farm named the day. In 1983 the common purse ended, personal assets returned, and the land stayed collective. That written shift, from spiritual teacher to dues-paying cooperative, is the unique structure.",
			organs: [
				{
					name: "Stephen Gaskin and the council of elders (historical)",
					what: "The original path. Agreements, Monday Night Class, and a teacher who could settle a fight. That path was retired on purpose."
				},
				{
					name: "Cooperative board and town meeting",
					what: "The current path. Dues, budgets, and a membership roll. Less revelation, more minutes."
				},
				{
					name: "Plenty and the second-layer nonprofits",
					what: "The Farm’s moral surplus was spun into organisations that can raise money without being the village."
				},
				{
					name: "Swan Conservation Trust",
					what: "A conservation layer on the same dirt, so the 1,700 acres are not only a co-op asset."
				}
			],
			path: "A household wants a new shed on common land: the co-op. A midwife wants to run a clinic: a mix of village permission and a separate nonprofit. A visitor wants to join: a vocational yes. Money for roads and the water system: dues, argued in a town meeting. Gaskin died in 2014; the path does not go to his successor because the Changeover already spent that option.",
			history: "The caravan left San Francisco in 1971 and bought land in Lewis County, Tennessee. For a decade The Farm was a spiritual commune with a teacher, a vow of poverty, and a midwifery that became world-famous. Population crashed as the money did. The 1983 Changeover kept the land and ended the purse. The people who stayed invented a cooperative that still has to explain, to every guest, that it is not 1972.",
			tension: "Nostalgia for the teacher versus the board. Dues that have to fund a village built for a thousand people and lived in by a few hundred. How to be a pilgrimage site (midwifery, Plenty, vegan origin stories) without letting pilgrims run the meeting. The unique fact is that they documented the fall of the guru-commune and still live on the same road."
		}
	},
	"gaviotas": {
		model: "founder",
		modelLabel: "Founder-stewarded",
		unique: true,
		summary: "Gaviotas is a research-and-production settlement in the Colombian llanos. Centro las Gaviotas, the nonprofit Paolo Lugari founded in 1971, holds the forest, the hospital, and the appropriate-technology work. Residents work inside that centre. Weapons are banned. The place stayed deliberately apolitical through decades of war, treating combatants of every side in its hospital. Early UNDP grants gave way to pine-resin income.",
		whoDecides: "Nonprofit administration around Lugari’s long leadership. Assets sit with the centre, not with residents as owners.",
		bodies: [
			{
				name: "Centro las Gaviotas",
				role: "Colombian nonprofit. Landlord, employer, and the legal person of the experiment."
			},
			{
				name: "Paolo Lugari",
				role: "Founder. The public theory of the place is still his: a laboratory in the llanos."
			},
			{
				name: "Hospital and workshops",
				role: "The inner institutions. A dual-pump, a solar kettle, a resin still, administered as research production, not as a makerspace co-op."
			},
			{
				name: "Bogotá factory",
				role: "The urban enterprise face."
			}
		],
		howItRuns: "You are hired, invited, or born into a worker’s household. Resin pays for the forest that makes the water story. Guests (UN, journalists, engineers) are received as witnesses of an experiment. There is no planner-manager diagram and no assembly of comuneros.",
		dive: {
			title: "A laboratory that refused to become a republic",
			lead: "Most ecovillages in this atlas are trying, in some way, to be a small polity. Gaviotas is trying to be a laboratory that happens to have a kitchen. Lugari’s bet was that a research settlement in the llanos, with no weapons and no party, could outlast the war by not being a side. The nonprofit is the government because a membership democracy would have had to pick one.",
			organs: [
				{
					name: "The founder’s office",
					what: "Lugari is not a mayor. He is closer to a director of a remote institute. Succession is the unwritten problem."
				},
				{
					name: "Centro las Gaviotas",
					what: "Holds the pines, the pumps, the hospital. Residents are inside it. That is the opposite of Dancing Rabbit’s leases or Twin Oaks’ planners."
				},
				{
					name: "Hospital",
					what: "The wartime constitution: treat everyone, hold no guns. A governance rule that is also a medical one."
				},
				{
					name: "Resin enterprise",
					what: "After UNDP, the budget. A forest that must pay is a forest someone has to manage without a co-op vote."
				}
			],
			path: "A new pump design: the workshop and Lugari’s people. A family who lives there: employment and housing inside the centre. A guerrilla or army wounded: the hospital, which is why the path is “we are not a side.” A journalist: the founder’s story. There is no share, no leasehold lot, no comunero list.",
			history: "Paolo Lugari founded Centro las Gaviotas in 1971 on the eastern plains. UNDP and a generation of appropriate-technology fame (the dual-action pump, solar kettles, hospital) paid the early bills. In the late 1980s a Caribbean pine plantation began to produce resin and, unexpectedly, a forest floor that held water. Alan Weisman’s book made the myth. The war came and went around a place that had banned weapons. The legal form never became a co-op.",
			tension: "What happens when the founder is no longer the institute. Whether resin, climate, and Colombian rural politics will let a nonprofit keep a forest this large without becoming a company or a park service. The people who live there have no membership rights of the Twin Oaks kind, by design. Unique because the government is an experiment’s administration, and the administration survived a war by refusing politics."
		}
	},
	"moora-moora": {
		model: "cooperative",
		modelLabel: "Cooperative democracy",
		unique: false,
		summary: "Seven elected directors plus co-op general meetings. Cluster-level daily life. Building and land-use rules sit in the co-op’s rules and the Trust for Nature covenant.",
		whoDecides: "Seven elected directors plus co-op general meetings.",
		bodies: [
			{
				name: "Cluster households",
				role: "Six to eight clusters of four to six houses. Livelihoods stay with households; this is not income-sharing."
			},
			{
				name: "Moora Moora Co-operative Community",
				role: "Owns the 245 hectares in common. Members hold shares and a right to build in a designated cluster; houses are privately owned on co-op land."
			},
			{
				name: "Trust for Nature (Victoria)",
				role: "Holds a covenant over the forest. Restricts clearing and subdivision; does not own the co-op’s title."
			}
		],
		howItRuns: "Cluster-level daily life. Building and land-use rules sit in the co-op’s rules and the Trust for Nature covenant. A members’ co-operative, originally registered as a Community Settlement Society under Victoria’s Co-operative Act 1959. The co-operative owns the 245 hectares in common. Members hold shares and a right to build in a designated cluster; houses are privately owned on co-op land. Seven directors are elected annually for operations. A Trust for Nature covenant protects the forest. Not income-sharing: livelihoods stay with households."
	},
	"east-wind": {
		model: "common-purse",
		modelLabel: "Common purse",
		unique: false,
		summary: "Direct democracy. Annual election of managers. Labor is broadly defined and allocated collectively. No private ownership of community assets.",
		whoDecides: "Direct democracy. Annual election of managers. Labor is broadly defined and allocated collectively. No private ownership of community assets.",
		bodies: [
			{
				name: "East Wind Community, Inc.",
				role: "Owns the Ozarks land, houses, and the nut-butter plant. Members have no private title."
			},
			{
				name: "East Wind Nut Butters",
				role: "Flagship income since about 1981 (peanut, almond, cashew, tahini). Assets belong to the community corporation, not to outside investors."
			},
			{
				name: "Federation of Egalitarian Communities",
				role: "Mutual-aid network."
			}
		],
		howItRuns: "Annual election of managers. Labor is broadly defined and allocated collectively. No private ownership of community assets. Secular egalitarian income-sharing community. All major assets held in common. Direct democracy; managers elected annually."
	},
	"damanhur": {
		model: "federation",
		modelLabel: "Federation",
		unique: true,
		summary: "A federation of spiritual communities whose land and enterprises sit in cooperatives, not in individual title. A living constitution (rewritten from more than 130 articles down to 15 since 1981) governs inward life. Citizens live in nucleos, issue a complementary currency called the Credito, and participate through the School of Meditation, social bodies, and the Game of Life.",
		whoDecides: "Citizens of the Federation, through cooperative boards for assets and through the constitution’s social and spiritual bodies. King and queen guides have historically rotated as public faces.",
		bodies: [
			{
				name: "Federation of Damanhur",
				role: "The social form. Citizens, not lot owners. A written constitution is the internal law."
			},
			{
				name: "Damanhur cooperatives",
				role: "The property form. Houses, land, and enterprises are owned by co-ops; citizens hold shares in those co-ops."
			},
			{
				name: "School of Meditation",
				role: "Spiritual body. Initiation and inner work sit here, not in the land registry."
			},
			{
				name: "Game of Life",
				role: "The experimental social laboratory Oberto Airaudi (Falco) founded as a way to keep the Federation from freezing into a church or a company."
			},
			{
				name: "Credito",
				role: "Complementary currency. It is a governance tool as much as a shop token: value stays inside the Federation."
			}
		],
		howItRuns: "Daily life is organized in nucleos, small residential groups. Material questions (a house, a workshop, a field) go to the relevant cooperative. Questions of membership, ritual, and the constitution go through the Federation’s social and spiritual bodies. There is no HOA of individual freehold.",
		dive: {
			title: "A constitution, a currency, and a federation of nucleos",
			lead: "Damanhur is easy to misread as a New Age theme park under one guru. Internally it is a federation that learned, over forty years, to write its own constitution down from a thick book to fifteen articles, to hold property in cooperatives, and to keep spiritual rank from becoming a real-estate rank.",
			organs: [
				{
					name: "Federation",
					what: "Citizenship. You are in or you are not. The constitution, not Piedmont cadastral law, is the inner code."
				},
				{
					name: "Cooperatives",
					what: "Who holds the land and the companies. Citizens are co-op members, not owners of a villa they can list in Torino."
				},
				{
					name: "Nucleos",
					what: "The household scale. A nucleo is the unit of daily life, smaller than the Federation, larger than a couple."
				},
				{
					name: "School of Meditation and Game of Life",
					what: "Where experiment is supposed to keep the structure from becoming either a cult or a corporation. Falco died in 2013; the Game is how they claim not to freeze."
				},
				{
					name: "King and queen guides",
					what: "Rotating public offices with spiritual colour, historically."
				}
			],
			path: "A nucleo wants to change a house: cooperative. A new citizen: Federation membership path, including the School. A public statement about the Temples: the Federation’s spokespeople. Money inside the village can move in Credito so that a decision does not immediately become a euro vote. Italian law still sits under all of it. The cooperatives are real Italian co-ops.",
			history: "Oberto Airaudi (Falco) and a handful of people began Damanhur in the late 1970s in Valchiusella. The Temples of Humankind were dug in secret and revealed in 1992, which forced the community into the open and into Italian law. The constitution has been rewritten repeatedly, most famously thinned from 130-plus articles to 15, as a theory of how a spiritual people can stay a federation instead of a church with a property company attached. Falco’s death in 2013 was the succession test.",
			tension: "How much the founder’s charisma still structures decisions a decade after his death. How a complementary currency and a temple complex sit under Italian tax and heritage law. Whether citizens who want a quieter nucleo life can opt out of the Game without opting out of the land. The Federation is unique because it tried to be all three, church, co-op, and experimental city-state, on purpose."
		}
	},
	"svanholm": {
		model: "common-purse",
		modelLabel: "Common purse",
		unique: true,
		summary: "Denmark’s largest income-sharing collective is also its strangest board: every member is a limited partner (kommanditist) and a board member. An association of more than a hundred people bought the historic Svanholm estate in 1978. The property is jointly owned; there is no individual title. Direct democracy and consensus run the week. Working groups run farm, kitchen, and enterprises.",
		whoDecides: "The members, all of whom sit on the board. Working groups execute. No private sale of land or houses. There is no inner directorate that holds shares the others do not.",
		bodies: [
			{
				name: "All-member board",
				role: "The unique organ. Limited partners = board members = the people who live there. A Danish company-law joke that they have kept for decades."
			},
			{
				name: "General meeting / consensus",
				role: "Direct democracy for the questions working groups cannot hold."
			},
			{
				name: "Working groups",
				role: "Farm, kitchen, enterprises, buildings. The ordinary executive."
			},
			{
				name: "Svanholm Storkollektiv",
				role: "The legal person of the estate. Joint ownership; kommanditister, not tenants."
			},
			{
				name: "Organic farm, forestry, and small enterprises",
				role: "How a hundred people eat and pay the taxes on a manor."
			}
		],
		howItRuns: "Income goes in. Need comes out. A cow, a solar array, or a new adult member is a meeting. You cannot buy a wing of the manor. You can leave with what is personal, not with a hectare. Danish tax and company law see a partnership of many; the kitchen sees a collective.",
		dive: {
			title: "Everyone is on the board, on purpose",
			lead: "Income-sharing is not rare in this atlas. What is rare is to take Danish limited-partnership law and make every resident a partner and a director so that there is no outer board of the kind that captured other collectives. Svanholm’s government is a storkollektiv that refused to let “the board” become someone else.",
			organs: [
				{
					name: "The all-member board",
					what: "If you live here as a member, you are kommanditist and director. That is the constitution. It is inconvenient, and that is the feature."
				},
				{
					name: "Consensus meeting",
					what: "The political culture inside the legal joke. A hundred directors still have to sit in a room."
				},
				{
					name: "Working groups",
					what: "Where work happens so the meeting does not have to decide the milk."
				},
				{
					name: "The estate as one asset",
					what: "A manor not broken into owner-occupied flats. The 1978 purchase is still the land story."
				}
			],
			path: "A new tractor: a working group, then the meeting if it is expensive. A new member: the collective, which is the board. A couple who want to treat their room as a flat they could sell: there is no path. Tax: the partnership, which is why the all-member board is not only an ideal.",
			history: "In 1978 a group bought Svanholm, a historic estate, to live a common economy at a scale Danish collectives had mostly talked about. They chose a limited-partnership form in which members are kommanditister. Organic farming became the public face (and a business). They remained income-sharing while many other 1970s collectives privatised. The all-member board is the reason a quiet inner company could not sell the manor out from under the kitchen.",
			tension: "A hundred directors is a slow government. Generational turnover: can people who did not buy the manor in 1978 still feel like partners. Danish welfare and tax rules that were not written for a storkollektiv. Unique because they used company law against the usual company outcome, a board that is smaller than the village."
		}
	},
	"lakabe": {
		model: "assembly",
		modelLabel: "Village assembly",
		unique: true,
		summary: "Lakabe is a recovered medieval village. It emptied in the 1960s rural exodus and was occupied on 21 March 1980. Title sits with the Government of Navarra. Two legal figures run it: the concejo abierto (open council) for municipal administration, and a cultural association with a tax ID for courses and projects. Internally, sociocracy “petals” organize work and a shared economy (euros plus labour) replaces private sale of houses.",
		whoDecides: "The concejo abierto for anything that looks like a municipality; the asociación cultural for activities that need a CIF; the whole-community meeting and sociocracy petals for inward life.",
		bodies: [
			{
				name: "Government of Navarra",
				role: "Title holder. The village lives on public land it recovered, not on a deed it bought."
			},
			{
				name: "Concejo abierto",
				role: "Open council under Navarrese municipal law. One resident has served as president-alcalde. This is real local government."
			},
			{
				name: "Asociación cultural de Lakabe",
				role: "CIF, courses, projects. The face that can sign a grant."
			},
			{
				name: "Whole-community meeting",
				role: "The inner assembly. Occupation memory sits here."
			},
			{
				name: "Sociocracy petals",
				role: "Work groups. How a recovered village does labour without becoming a company."
			}
		],
		howItRuns: "A roof: the community and, if it is a municipal matter, the concejo. A course for visitors: the association. A new adult who wants to live here: the assembly, which remembers that nobody bought a lot in 1980. Euros and hours are both currency. You cannot list a house in Pamplona’s portals.",
		dive: {
			title: "An occupation that became a concejo",
			lead: "Lakabe’s unique government is a palimpsest: an okupa of 1980, a concejo abierto that Spanish municipal law understands, a cultural association that grant-makers understand, and sociocracy petals that GEN understands. Title never passed to the members. Navarra still holds it. That is the structure.",
			organs: [
				{
					name: "The 1980 occupation as founding law",
					what: "They did not buy the empty village. They entered it. Everything since is a negotiation with that fact."
				},
				{
					name: "Concejo abierto",
					what: "Navarrese open council, a real municipal form for small places. Lakabe used it so the occupation could have an alcalde instead of only a barricade."
				},
				{
					name: "Asociación cultural",
					what: "The CIF. Without it there are no courses, no invoices, no grants. With only it, Lakabe is an NGO on someone else’s land."
				},
				{
					name: "Petals and shared economy",
					what: "Internal sociocracy and a mix of euros and labour. The anti-speculation rule is cultural and practical: there is no title to speculate with."
				}
			],
			path: "A visitor course: association. A path, a water system, a name on a municipal paper: concejo. A conflict about who lives in which recovered house: the community meeting, which is still the occupation’s child. A developer who wants to regularise lots: there is no path, because Navarra holds title and the assembly would have to stop being Lakabe.",
			history: "Lakabe was a medieval village that died in the 1960s rural exodus. On 21 March 1980 a group occupied it. Years of conflict with authorities followed. Eventually Navarra’s title and the concejo form made a peace: the village could live, incorporate an association, generate electricity, and host the Basque and European alternative scene, without the land becoming a cooperative’s asset to sell. Sociocracy petals are a later graft onto that peace.",
			tension: "Occupation ethics versus municipal respectability. A generation that did not climb through the window in 1980. Navarra as landlord, which is safety and a limit. Unique because they turned a squat into an open council without ever taking the title home, and because two legal faces (concejo, asociación) plus an inner assembly all still operate."
		}
	},
	"kibbutz-lotan": {
		model: "assembly",
		modelLabel: "Village assembly",
		unique: false,
		summary: "Kibbutz general assembly and elected committees, under Israeli cooperative-settlement law. Ecological building (straw, mud, tires) is a community practice. Admission follows kibbutz membership or lot purchase.",
		whoDecides: "Kibbutz general assembly and elected committees, under Israeli cooperative-settlement law.",
		bodies: [
			{
				name: "Kibbutz Lotan",
				role: "The residential and productive community. Members share production and, in Lotan’s case, a remaining collective economy."
			},
			{
				name: "Israel Land Authority / state settlement land",
				role: "Classic kibbutz land is not freehold lots. Usage rights sit with the cooperative settlement on nationally administered land."
			},
			{
				name: "Center for Creative Ecology",
				role: "Opened 1997. Courses in organic farming, alternative architecture, energy, and permaculture."
			},
			{
				name: "Kibbutz Movement",
				role: "Lotan sits inside the wider movement. A network, not the title holder of the Arava land."
			}
		],
		howItRuns: "Ecological building (straw, mud, tires) is a community practice. Admission follows kibbutz membership or lot purchase. A Reform kibbutz (the second kibbutz founded by Israel’s Reform movement) inside the Kibbutz Movement. Under Israeli kibbutz law the settlement is a cooperative agricultural community: members share production and (in Lotan’s case) a remaining collective economy, and there is no private real-estate title in the classic suburban sense. Lotan kept a stronger ecological and egalitarian identity than kibbutzim that fully privatized in the 1990s–2000s. The Center for Creative Ecology (1997) is the educational arm."
	},
	"lebensgarten": {
		model: "board",
		modelLabel: "Board and staff",
		unique: false,
		summary: "Plenum of the e.V. for village issues. Project Vereine and gGmbHs run their own boards. Residents are responsible for their own livelihoods. Younger members have pushed for a tighter shared economy; the historic pattern is looser than a commune.",
		whoDecides: "Plenum of the e.V. for village issues. Project Vereine and gGmbHs run their own boards. Residents are responsible for their own livelihoods. Younger members have pushed for a tighter shared economy; the historic pattern is looser than a commune.",
		bodies: [
			{
				name: "Lebensgarten Steyerberg e.V.",
				role: "The community body for village issues. Residents typically own or rent the restored brick houses individually; the e.V."
			},
			{
				name: "Individual house owners and tenants",
				role: "58–62 restored houses on a former munitions-workers’ settlement. Households are financially independent."
			},
			{
				name: "PaLS gGmbH (Permakulturpark am Lebensgarten Steyerberg)",
				role: "Runs the permaculture park, CSA vegetable boxes, and agroforestry on former sandy farmland. Incorporated 2013."
			},
			{
				name: "Heilhaus / seminar house",
				role: "Main shared economic engine (courses, guests). Separate from household livelihoods."
			}
		],
		howItRuns: "Plenum of the e.V. for village issues. Project Vereine and gGmbHs run their own boards. Residents are responsible for their own livelihoods. Younger members have pushed for a tighter shared economy; the historic pattern is looser than a commune. Lebensgarten Steyerberg e.V. (a registered association) is the community body. Residents typically own or rent the restored brick houses individually. Education, permaculture, and seminar work run through separate Vereine (associations) and gGmbHs (nonprofit companies), including PALS gGmbH for the gardens. A founder member of the Global Ecovillage Network."
	},
	"niederkaufungen": {
		model: "common-purse",
		modelLabel: "Common purse",
		unique: false,
		summary: "Consensus among members of the e.V. Living groups (about fourteen) handle daily life. Collectives manage each enterprise. The association structure means that even if membership fell below the seven people needed to found a Verein, the property would not revert to private owners.",
		whoDecides: "Consensus among members of the e.V.",
		bodies: [
			{
				name: "Kommune Niederkaufungen e.V.",
				role: "Owns all land, buildings, vehicles, and means of production. Every communard is a member."
			},
			{
				name: "Members’ meeting",
				role: "The common purse is the membership."
			},
			{
				name: "Work collectives",
				role: "Enterprises and the roster sit here."
			}
		],
		howItRuns: "Living groups (about fourteen) handle daily life. Collectives manage each enterprise. The association structure means that even if membership fell below the seven people needed to found a Verein, the property would not revert to private owners. Two registered associations (eingetragene Vereine). Kommune Niederkaufungen e.V. owns all land, buildings, vehicles, and means of production; every communard is a member, and communal property cannot be privatized. A second association (Verein für Ökologie, Gesundheit und Bildung e.V.) runs the seminar house, kindergarten, and horticulture enterprises. Income-sharing: members work mainly in commune collectives and live from a common purse (“from each according to ability, to each according to need”). Consensus decision-making. Member of the Kommuja network of political communes."
	},
	"crystal-waters": {
		model: "hoa",
		modelLabel: "Homeowners / body corporate",
		unique: false,
		summary: "Elected body-corporate committee (chair, treasurer, secretary, four members) plus sub-committees. By-laws cover building, chemicals, animals, and trees. The co-op handles enterprise. Disputes can go to an elders process.",
		whoDecides: "Elected body-corporate committee (chair, treasurer, secretary, four members) plus sub-committees.",
		bodies: [
			{
				name: "Individual freehold lot owners",
				role: "Households finance their own homes."
			},
			{
				name: "Crystal Waters Permaculture Village Body Corporate (GTP 1833)",
				role: "Lot owners together own and manage the 80% common property (farming, forestry, recreation, habitat). Created under the Building Units and Group Titles Act; now sits under the Body Corporate and Community Management Act."
			},
			{
				name: "Crystal Waters Community Co-operative",
				role: "Entrepreneurial arm for the village centre, camping, and community house. Registered 1981, years before freehold titles were issued."
			}
		],
		howItRuns: "By-laws cover building, chemicals, animals, and trees. The co-op handles enterprise. Disputes can go to an elders process. Queensland body corporate (Group Title Plan No. 1833) under what is now the Body Corporate and Community Management Act. 83 freehold residential lots and 2 commercial lots occupy about 20% of the land; 80% is common property managed by the body corporate and licensable for farming, forestry, recreation, and habitat. Crystal Waters Community Co-operative (registered 1981 as a land-settlement co-op) is the entrepreneurial arm for the village centre, camping, and community house."
	},
	"ecovillage-ithaca": {
		model: "cooperative",
		modelLabel: "Cooperative democracy",
		unique: true,
		summary: "EcoVillage at Ithaca is three cohousing neighborhoods nested under a village association, with a land-holding nonprofit and a conservation easement around them. FROG, SONG, and TREE housing cooperatives own the cohousing. EcoVillage at Ithaca, Inc. (501(c)(3)) owns land outside the neighborhoods. EVIVA owns roads, water, sewer, parking, and the pond. Consensus or dynamic governance inside each neighborhood; the Village Association coordinates all three.",
		whoDecides: "Each neighborhood on its own houses and common house; EVIVA on shared infrastructure; the 501(c)(3) on the outer land and the education mission. You join a neighborhood co-op, not “Ithaca” as a single roll.",
		bodies: [
			{
				name: "FROG Housing Cooperative",
				role: "First neighborhood (1996). Its own membership, its own meeting."
			},
			{
				name: "SONG Housing Cooperative",
				role: "Second neighborhood. Same pattern, different kitchen."
			},
			{
				name: "TREE Housing Cooperative",
				role: "Third neighborhood. The village became a village of three when TREE filled."
			},
			{
				name: "EcoVillage at Ithaca Village Association (EVIVA)",
				role: "Roads, water, sewer, parking, pond. The municipal layer they had to invent."
			},
			{
				name: "EcoVillage at Ithaca, Inc.",
				role: "501(c)(3). Outer land, mission, and the name on the easement paperwork."
			},
			{
				name: "Finger Lakes Land Trust easement and Town of Ithaca SLUD",
				role: "Conservation and zoning overlays. Not the HOA, and not optional."
			}
		],
		howItRuns: "Work is organized through teams inside a neighborhood, and through village-wide teams for the systems EVIVA owns. A household buys into a co-op share. Dynamic governance / sociocracy has been used alongside consensus. The CSA and education programs sit on nonprofit land, not in someone’s backyard by accident.",
		dive: {
			title: "Three co-ops, one village, a nonprofit, an easement",
			lead: "Most cohousing is one common house and one HOA. EcoVillage at Ithaca scaled by cloning neighborhoods instead of cloning lots, then had to invent a village layer so the three would share a pond and a sewer. The unique government is nested cooperative federalism on 175 acres, with a land trust easement so the outer land cannot become a fourth neighborhood of McMansions.",
			organs: [
				{
					name: "Neighborhood co-ops (FROG, SONG, TREE)",
					what: "Where dinner and the membership meeting happen. Each can, in theory, annoy the others. That is the design."
				},
				{
					name: "EVIVA",
					what: "The boring unique organ: pipes, roads, pond. Without it the three neighborhoods are three projects. With it they are a village."
				},
				{
					name: "EVI, Inc. 501(c)(3)",
					what: "Holds what the neighborhoods do not. Education, future land, the name that funders recognise."
				},
				{
					name: "Land Trust easement + Special Land Use District",
					what: "The outer lock. Town of Ithaca’s SLUD is a zoning technology; the Finger Lakes Land Trust easement is a conservation one. Together they are why this did not become a golf-course conservation subdivision."
				}
			],
			path: "A kitchen renovation in FROG: FROG. A sewer plant: EVIVA. A new educational building on outer land: the 501(c)(3), plus town permits, plus the easement if it touches protected ground. A new household: the neighborhood that has a unit, which is why “joining EcoVillage at Ithaca” is the wrong sentence. TREE, SONG, or FROG is the right one.",
			history: "Liz Walker, Joan Bokaer, and others launched the project in the early 1990s as an answer to suburban Ithaca. FROG was occupied in 1996, SONG later, TREE after that. The legal stack grew as each neighborhood came online: co-ops for houses, EVIVA for guts, the nonprofit for the rest, the easement so success would not eat the fields. Dynamic governance was adopted in some layers as consensus tired.",
			tension: "Neighborhood autonomy versus village systems. Affordability (cohousing shares in Ithaca are not a commune’s labour quota). Three cultures of meeting. The nonprofit’s education mission versus residents who just want a quiet pond. Unique because it is a federation of cohousing co-ops with a municipal layer they had to write themselves, sitting inside a conservation envelope they cannot vote off."
		}
	},
	"zegg": {
		model: "sociocracy",
		modelLabel: "Sociocracy",
		unique: true,
		summary: "ZEGG (Zentrum für experimentelle Gesellschaftsgestaltung) is a nonprofit gGmbH that holds a former GDR intelligence training ground and hosts a seminar business. Residents use sociocracy: self-organizing teams, a management circle for finance, and a Visionsrat (vision board) for the longer-term community interest. The cultural technology the place is known for is the Forum, a radical-honesty circle that later travelled to Tamera and elsewhere.",
		whoDecides: "Sociocratic circles for operations, the Visionsrat for long-term community interest, and consensus still aimed at for important social and money decisions. The gGmbH is the legal person; residents are not shareholders of private lots.",
		bodies: [
			{
				name: "ZEGG gGmbH",
				role: "Nonprofit limited company, recognized as nonprofit in 2015. Holds the site and the seminar business."
			},
			{
				name: "Sociocratic teams",
				role: "Self-organizing work circles. The ordinary government of the week."
			},
			{
				name: "Management circle",
				role: "Finance and the seminar company. Where the gGmbH meets the community."
			},
			{
				name: "Visionsrat",
				role: "Vision board for longer-term community interest, distinct from the money circle."
			},
			{
				name: "Forum",
				role: "The unincorporated inner court. ZEGG’s most copied invention."
			}
		],
		howItRuns: "A kitchen roster is a team. A new building or a debt is the management circle and, if it changes the place, the Visionsrat and a community consensus. Guests of the seminar house are customers of the gGmbH, not voters. The Forum is where a personal or sexual conflict is supposed to be spoken before it becomes a faction.",
		dive: {
			title: "The Forum as a second bylaw",
			lead: "On paper ZEGG is a German nonprofit company with sociocratic circles, which is already more structure than most seminar villages. Under that paper is the Forum: a facilitated, public, emotionally raw circle invented here as a way to govern love, power, and rumour. Other villages borrowed the Forum. ZEGG still has to live with the place that invented it.",
			organs: [
				{
					name: "gGmbH",
					what: "The landlord and the seminar firm. Without it there is no site. With only it, ZEGG would be a conference hotel."
				},
				{
					name: "Sociocratic circles and Visionsrat",
					what: "The 2010s answer to “who decides now that we are not a 1990s free-love commune.” Teams for work; a vision board so finance does not eat the experiment."
				},
				{
					name: "Forum",
					what: "The older answer. People sit in a circle and speak what is actually going on. It is not minutes, and it is more binding than minutes for the things that split communities."
				}
			],
			path: "A leaking roof: a team, then the management circle if it costs. A new resident: community process. A love triangle that is poisoning the kitchen: Forum, which is why ZEGG’s governance cannot be read from the gGmbH articles alone. Important money still aims at consensus, sociocracy notwithstanding.",
			history: "The site is a former GDR state-security training ground at Belzig. The community that became ZEGG grew out of Dieter Duhm’s 1970s–80s experiment (Bauhütte) and the free-love, free-sexuality research that later also founded Tamera. Over the 1990s and 2000s ZEGG professionalised: seminars, a gGmbH, sociocracy, a Visionsrat. The Forum remained the signature, even as the political-ashram energy largely moved to Portugal.",
			tension: "Seminar guests who buy a weekend of Forum versus residents who have to do Forum on a Tuesday in February. How a gGmbH’s directors relate to a Visionsrat that is not in the commercial register. The free-love origin story in a Germany that has since rewritten consent culture. Unique because the inner court (Forum) and the outer company (gGmbH) are both real, and neither is a decoration."
		}
	},
	"los-angeles-eco-village": {
		model: "cooperative",
		modelLabel: "Cooperative democracy",
		unique: false,
		summary: "Co-op committees plus nonprofit boards. Members are expected to serve on committees. Place-based rather than a gated campus.",
		whoDecides: "Co-op committees plus nonprofit boards.",
		bodies: [
			{
				name: "Urban Soil–Tierra Urbana (USTU)",
				role: "Resident-organized LEHC. Acquired two buildings from CRSP in 2012."
			},
			{
				name: "Beverly-Vermont Community Land Trust",
				role: "Owns the land under the co-op buildings. CRSP donated that land in 2012."
			},
			{
				name: "Cooperative Resources and Services Project (CRSP)",
				role: "Founding developer (1980). Acquired two apartment buildings in the 1990s and a third in 2011."
			},
			{
				name: "Ecological Revolving Loan Fund (ELF)",
				role: "Financed building acquisition, rehabilitation, and ecological retrofits."
			}
		],
		howItRuns: "Members are expected to serve on committees. Place-based rather than a gated campus. Hybrid of three nonprofits. CRSP / LA Eco-Village Institute (501(c)(3) developer and revolving loan fund). Urban Soil–Tierra Urbana (limited-equity housing cooperative). Beverly-Vermont Community Land Trust (owns the land under the co-op buildings). “Los Angeles Eco-Village” is a place name."
	},
	"earthaven": {
		model: "hoa",
		modelLabel: "Homeowners / body corporate",
		unique: false,
		summary: "Modified consensus. Council plus guilds and committees. HOA board for common land. Each Pod defines membership in its own legal documents.",
		whoDecides: "Modified consensus. Council plus guilds and committees. HOA board for common land. Each Pod defines membership in its own legal documents.",
		bodies: [
			{
				name: "Residential pods (housing cooperatives and LLCs)",
				role: "Each pod owns the land for one or more neighborhoods. A housing-co-op pod makes members shareholders with a residential site; an LLC pod uses company membership instead."
			},
			{
				name: "Earthaven Community Association",
				role: "Owns the common land (roads, Council Hall, shared infrastructure) and runs village-level membership (including nonresident contributing members). CC&Rs govern sustainability practice."
			},
			{
				name: "Earthaven Covenants, Conditions & Restrictions",
				role: "Sustainability building and land-use rules that run with the land in Rutherford County records."
			},
			{
				name: "School of Integrated Living (SOIL)",
				role: "Tours, workshops, and whole-life-skills programs. Cultural and educational work sits with the charity, not with the HOA."
			}
		],
		howItRuns: "Council plus guilds and committees. HOA board for common land. Each Pod defines membership in its own legal documents. Hybrid. Common land owned by a homeowners association. Residential “Pods” (neighborhoods) organized as housing cooperatives or LLCs that own their parcels. Educational work through the nonprofit School of Integrated Living. Covenants, Conditions & Restrictions govern sustainability practice."
	},
	"konohana": {
		model: "common-purse",
		modelLabel: "Common purse",
		unique: true,
		summary: "Konohana Family lives as one household with one wallet, not as a housing co-op or a land trust. Daily consensus meetings as one family are the government. Isadon is the acknowledged spiritual elder; operational decisions are collective. Japanese labour and tax law did not fit a single communal employer, so each member is registered as a sole proprietor while the community still pools money. NPO Green Grass is the outward education face.",
		whoDecides: "The family in daily meeting. Isadon holds a spiritual elder’s voice.",
		bodies: [
			{
				name: "Daily family meeting",
				role: "The actual government. One household, one conversation, most days."
			},
			{
				name: "Isadon (Kawagishi)",
				role: "Acknowledged spiritual elder."
			},
			{
				name: "One wallet",
				role: "Full income- and asset-sharing. The inner constitution. Members do not keep a side account as the real life."
			},
			{
				name: "Sole-proprietor registrations",
				role: "The tax workaround. Each member is a 個人事業主 on paper so Japanese labour law can see persons; the money still pools."
			},
			{
				name: "NPO Green Grass",
				role: "Visits, education, ecological programs. Guests deal with the NPO; they are not in the wallet."
			}
		],
		howItRuns: "A day’s work on the Fuji-side farms is assigned as family work. Money from crops, talks, and the guest program goes into the common purse. A new person is received as someone who might become family, not as a tenant. The NPO books a visit. The family meeting can say no. They reject both “cult” and strict “ecovillage” labels.",
		dive: {
			title: "One family, one wallet, a tax fiction, and an elder",
			lead: "Most common-purse villages in this atlas are communes with a labour quota and a corporation. Konohana is a Japanese ie: one household that farms, prays, and accounts together. The unique structure is the combination of daily family consensus, a named spiritual elder, full pooling, and a sole-proprietor filing that exists only because the tax office could not see a village.",
			organs: [
				{
					name: "The daily meeting",
					what: "The family sits often enough that gossip and the work plan are the same conversation."
				},
				{
					name: "Isadon",
					what: "Elder, not CEO. Outsiders hear a guru. Insiders describe a person who speaks last, or first, in a room that still has to agree. The ambiguity is the structure."
				},
				{
					name: "The wallet",
					what: "More complete than Twin Oaks’ allowance culture. The claim is one family."
				},
				{
					name: "Sole proprietors + NPO Green Grass",
					what: "The mask worn for the Japanese state and for visitors. Without it they cannot farm legally; with only it they would be a seminar business."
				}
			],
			path: "A crop plan: morning meeting. A guest who wants to stay the winter: the family, after the NPO has done the first filter. A member who wants to keep an outside royalty: the wallet, which is to say the family, which is to say no unless the meeting says yes. There is no share to sell on the way out.",
			history: "The community gathered at the foot of Mount Fuji in the 1990s around Isadon’s “Konohanaism”, a syncretic, ecological, ancestor-and-nature spirituality that they insist is not a religion in the Japanese corporate-religion sense. As numbers grew, labour law and tax law caught up: a village cannot easily be one employer. The sole-proprietor workaround is the scar of that fight. NPO Green Grass was founded so the world could visit without entering the wallet.",
			tension: "How an elder-plus-family model looks to a culture that has seen Aum and every other headline. How sole-proprietor filings would unwind if a member really wanted to leave with “their” farm income. Whether daily meeting still scales. Unique because they kept the ie (household) as the unit of government in a country where that word usually means a blood family, and because the state made them wear a different unit on paper."
		}
	},
	"oaec": {
		model: "consensus",
		modelLabel: "Consensus",
		unique: false,
		summary: "Consensus inside Sowing Circle. Nonprofit board for OAEC. Shares are not linked to market land value.",
		whoDecides: "Consensus inside Sowing Circle.",
		bodies: [
			{
				name: "Sowing Circle LLC",
				role: "Owns the 80 acres and buildings. The closed residential intentional community."
			},
			{
				name: "Sonoma Land Trust",
				role: "Co-author and holder of the Organic Agricultural Easement that keeps gardens and orchards in organic production in perpetuity."
			},
			{
				name: "Warsh-Mott Legacy",
				role: "Collaborated with Sowing Circle and Sonoma Land Trust on one of the country’s first organic agricultural easements when the land changed hands."
			},
			{
				name: "Occidental Arts & Ecology Center",
				role: "Public education, research, and advocacy on the same land. Legally separate from the residential LLC; mutually supporting in practice."
			}
		],
		howItRuns: "Nonprofit board for OAEC. Shares are not linked to market land value. Classic hybrid. Sowing Circle LLC owns the land and buildings (intentional community). Occidental Arts & Ecology Center is a separate 501(c)(3) that runs education, research, and advocacy on the same site. An Organic Agricultural Easement (with Sonoma Land Trust) protects gardens and orchards in perpetuity."
	},
	"tamera": {
		model: "spiritual",
		modelLabel: "Spiritual order",
		unique: true,
		summary: "Tamera calls itself a healing biotope and a peace research village. Two Portuguese associations own equal shares of ILOS, Peace Research Center, Lda., which holds the land. Community members belong to one of the associations. No individual can buy, sell, or transfer a share of Tamera. Inner work, the Forum, and a political-ashram culture sit where a town meeting would sit in a co-op.",
		whoDecides: "The two associations that jointly own ILOS, and the community forums of the people who live there. Dieter Duhm and Sabine Lichtenfels remain the public theoretical founders.",
		bodies: [
			{
				name: "ILOS, Peace Research Center, Lda.",
				role: "The Portuguese company that holds land and infrastructure. Owned 50/50 by the two associations. No personal share."
			},
			{
				name: "G.R.A.C.E. association",
				role: "One of the two member associations. A resident belongs to one association or the other."
			},
			{
				name: "Associação para um Mundo Humanitário",
				role: "The other association. Equal owner of ILOS."
			},
			{
				name: "Institute for Global Peacework",
				role: "The outward education and network face, including the Global Campus."
			},
			{
				name: "Forum / inner council culture",
				role: "The ZEGG-lineage circle in which the community does its political and erotic truth-telling."
			}
		],
		howItRuns: "You are received as a guest, a student, a coworker, or (rarely) a community member of one of the two associations. Research projects, the SolarVillage, and the love-school lineage are coordinated as community work, not as a body-corporate agenda. Land cannot be split among members because the Lda. is locked by the two associations.",
		dive: {
			title: "A political ashram with a locked company",
			lead: "Tamera’s legal diagram is almost simple: two associations, one company, no personal land. Its real constitution is a German-Portuguese experiment in “healing biotope” politics, Forum, free sexuality as a stated research topic, and a claim to be a peace model rather than a village. That mix is what is unique.",
			organs: [
				{
					name: "The two associations and ILOS",
					what: "The lock. Because the company is owned equally by two membership associations, a faction cannot take the land home."
				},
				{
					name: "Founders as theorists",
					what: "Duhm, Lichtenfels, and the early ZEGG generation. Their books are closer to a basic law than the Lda. articles are."
				},
				{
					name: "Forum",
					what: "A facilitated circle, imported from ZEGG, in which what would be gossip or scandal in another village is supposed to be spoken. It is the inner court."
				},
				{
					name: "Institute for Global Peacework and SolarVillage",
					what: "The outward proofs. Without them Tamera is an intentional community in the Alentejo; with them it claims to be a research station."
				}
			],
			path: "A water-retention landscape decision is a project of the community and ILOS-owner vote. A conflict between lovers is a Forum matter, which is why outsiders read Tamera as a sex cult and insiders read it as the actual government. A new resident is invited into one of the associations; there is no open market. Guests of the guest house and students of a course do not sit that path.",
			history: "Dieter Duhm’s experiment moved from the German Bauhütte and ZEGG years to Portugal in 1995 with Sabine Lichtenfels and others, buying degraded Alentejo land and naming it Tamera. The legal structure (two associations, ILOS) was built so the land could not become someone’s retirement plot. The SolarVillage, the peace work in the Middle East, and the “healing biotope” framing are the public history; the Forum and the love-school are the inner one.",
			tension: "Founders who are still alive versus a membership that has to outlive them. Portuguese neighbours and media who see a German sex-and-peace enclave. How much Forum can govern once the population includes children, employees, and short-term students. The uniqueness is the combination of a hard legal lock on the land with a deliberately un-corporate inner government."
		}
	},
	"dancing-rabbit": {
		model: "consensus",
		modelLabel: "Consensus",
		unique: true,
		summary: "Dancing Rabbit’s real constitution is a set of ecological covenants. Land sits with Dancing Rabbit Land Trust (a 501(c)(2)). Education sits with the Center for Sustainable and Cooperative Culture (a 501(c)(3)). Members lease small residential plots and own their buildings, which can be sold to other members. Village life is run by consensus, committees, and an Oversight Team. Land cannot be speculated.",
		whoDecides: "The membership, by consensus, on village life. The land-trust board (members and non-members) on major land and finance. Covenants, no private cars, fossil fuel limits, organic land care, bind both.",
		bodies: [
			{
				name: "Village membership / consensus",
				role: "The political community. Committees do the week; consensus is the law of the meeting."
			},
			{
				name: "Oversight Team",
				role: "A standing group so consensus has a floor when the meeting is tired."
			},
			{
				name: "Dancing Rabbit Land Trust",
				role: "501(c)(2) CLT. Landlord of the land. Ground leases, not deeds of lots."
			},
			{
				name: "Center for Sustainable and Cooperative Culture",
				role: "501(c)(3), formerly Dancing Rabbit, Inc. The education and demonstration face."
			},
			{
				name: "Eco-covenants",
				role: "The written ecological basic law. More binding, day to day, than the 501 filings."
			}
		],
		howItRuns: "You become a member, you take a ground lease, you own the building you put on it. You may sell that building to another member. You may not sell the land, park a private car as a lifestyle, or farm in a way the covenants forbid. Visitors and interns are not members. Sandhill’s older commune sits next door on different terms.",
		dive: {
			title: "Covenants as a constitution, a CLT as the lock",
			lead: "Plenty of ecovillages have sustainability guidelines. Dancing Rabbit wrote a short list of ecological covenants and then built two nonprofits so the land could not be speculated and the education arm could raise money. Consensus runs the village. The covenants run the consensus. That hierarchy is the unique structure.",
			organs: [
				{
					name: "Eco-covenants",
					what: "No personal vehicles as the default, limits on fossil fuel, organic land management, and the rest of the published list. They are closer to a basic law than to an HOA paint colour."
				},
				{
					name: "Consensus and Oversight Team",
					what: "How members change anything that is not the covenants, and how they decide whether something is the covenants."
				},
				{
					name: "Land Trust (501(c)(2))",
					what: "Holds the land, issues leases, includes non-member trustees so the village cannot quietly vote itself a subdivision."
				},
				{
					name: "CSCC (501(c)(3))",
					what: "Courses, visitors, the public story. Deliberately not the landlord."
				}
			],
			path: "A new shed: membership process plus covenants (materials, energy). A new member: visitor, intern or resident path, then consensus. A building sale: only to someone the village can accept, on the same lease. A desire for a private pickup truck as a lifestyle: the covenants, which is to say no, unless an exception process the village has already fought about. The land-trust board is the path if the question is the land itself.",
			history: "Members of Sandhill and others founded Dancing Rabbit in the 1990s on adjacent Scotland County land as an ecovillage that would not income-share like Sandhill but would bind itself ecologically. The land trust and the education nonprofit were separated on purpose. The covenants were published as the thing you agree to before you agree to the people. The village grew slowly, on purpose, in a county that is not a cohousing market.",
			tension: "Covenants written by founders versus members who want an e-bike, a chainsaw, or a child who has to get to Kirksville. Non-member land-trust trustees versus the meeting. Buildings that have a market among members and a dirt that does not. Unique because the ecological rules are the constitution, and the CLT exists to keep a majority from amending them with a deed."
		}
	},
	"sieben-linden": {
		model: "cooperative",
		modelLabel: "Cooperative democracy",
		unique: false,
		summary: "Cooperative membership plus neighborhood-level decisions. The village sits inside the municipality of Beetzendorf; a project member has served on the municipal council. Consensus culture with committees rather than a single director.",
		whoDecides: "Cooperative membership plus neighborhood-level decisions.",
		bodies: [
			{
				name: "Nachbarschaften (neighborhoods)",
				role: "Straw-bale, cob, and timber neighborhoods occupy the building zone. Not income-sharing: each adult finances their own life."
			},
			{
				name: "Siedlungsgenossenschaft Ökodorf e.G.",
				role: "Owns the land, now more than 100 hectares of woods, fields, gardens, and a small building zone. Members are co-owners of the commons rather than freehold lot holders."
			},
			{
				name: "Freundeskreis Ökodorf e.V.",
				role: "Nationwide friends’ association that carries public education, the seminar/guesthouse learning place, and outreach for Sieben Linden."
			}
		],
		howItRuns: "The village sits inside the municipality of Beetzendorf; a project member has served on the municipal council. Consensus culture with committees rather than a single director. Settlement and housing cooperatives. An “Ecovillage housing cooperative” was formed in 1993 (later Siedlungsgenossenschaft / housing cooperative). The cooperative owns the land (now more than 100 hectares of woods, fields, gardens, and a small building zone) so members are co-owners of the commons rather than freehold lot holders. Neighborhoods (“Nachbarschaften”) occupy shared straw-bale, cob, and timber buildings. Not income-sharing: each adult finances their own life and buys cooperative shares."
	},
	"cloughjordan": {
		model: "cooperative",
		modelLabel: "Cooperative democracy",
		unique: false,
		summary: "Membership of the CLG, with decisions by mutual agreement and self-organizing groups. A board of directors oversees the company. Homes and livelihoods stay with households; the commons (land, heat, farm partnership) stay with SPI.",
		whoDecides: "Membership of the CLG, with decisions by mutual agreement and self-organizing groups.",
		bodies: [
			{
				name: "Member households (eco-homes on serviced sites)",
				role: "Members paid deposits to buy into the land and services, then finance their own houses. Livelihoods stay with households."
			},
			{
				name: "Sustainable Projects Ireland CLG",
				role: "Owns the 67-acre site and shared infrastructure (roads, district heating, amenities). Run on co-operative principles."
			},
			{
				name: "Cloughjordan Community Farm",
				role: "Organic/biodynamic community-supported agriculture. Leases land from the ecovillage (about 12 acres) and additional off-site acres."
			}
		],
		howItRuns: "A board of directors oversees the company. Homes and livelihoods stay with households; the commons (land, heat, farm partnership) stay with SPI. Sustainable Projects Ireland CLG (a company limited by guarantee, run as an educational charity on co-operative principles) owns the 67-acre site and the shared infrastructure (roads, district heating, amenities). Members of the company develop and occupy individual eco-homes on serviced sites (about 55 of a planned 114–130 have been built). SPI is the land-and-infrastructure company, with every member having a say."
	},
	"currumbin": {
		model: "hoa",
		modelLabel: "Homeowners / body corporate",
		unique: false,
		summary: "Elected principal body-corporate committee plus four subsidiary committees. Design review before building. By-laws cover energy, water, materials, and landscape. No extra restriction on selling a home beyond ordinary freehold and the covenants that run with the lot.",
		whoDecides: "Elected principal body-corporate committee plus four subsidiary committees.",
		bodies: [
			{
				name: "Creek Ecohamlets subsidiary body corporate",
				role: "Sub-precinct governance for Creek Ecohamlets lots, nested under the Principal Body Corporate."
			},
			{
				name: "Valley Terraces subsidiary body corporate",
				role: "Sub-precinct governance for Valley Terraces."
			},
			{
				name: "Highlands subsidiary body corporate",
				role: "Sub-precinct governance for the Highlands stage."
			},
			{
				name: "Further subsidiary body corporates",
				role: "Currumbin uses a principal-plus-four-subsidiaries model so each sub-region can manage its own commons without splitting the whole village into unrelated HOAs."
			}
		],
		howItRuns: "Design review before building. By-laws cover energy, water, materials, and landscape. No extra restriction on selling a home beyond ordinary freehold and the covenants that run with the lot. Queensland body corporate under the Body Corporate and Community Management Act. A Principal Body Corporate plus four subsidiary body corporates for sub-regions (Creek Ecohamlets, Valley Terraces, Highlands, and related stages) manage commons, design covenants, and shared infrastructure. Lots are freehold, buying and selling is treated as ordinary freehold. Developer Landmatters led a site-led subdivision rather than a commune. Contrast with Crystal Waters (also a Queensland body corporate, but grown from a 1981 land-settlement co-op): Currumbin is a later, larger, developer-built ecovillage with the same legal family and tighter building codes."
	},
	"longo-mai": {
		model: "cooperative",
		modelLabel: "Cooperative democracy",
		unique: false,
		summary: "Self-administration in the Longo Maï style: agricultural self-sufficiency, committees for infrastructure, and no private sale of the commons. UNAPROA organizes regional environmental work from the finca. It is a cooperative village.",
		whoDecides: "Self-administration in the Longo Maï style: agricultural self-sufficiency, committees for infrastructure, and no private sale of the commons.",
		bodies: [
			{
				name: "Cooperativa Longo Maï / Finca Sonador",
				role: "Holds the settlement, farmland, and housing in common for several hundred residents. Founded 1979 with United Nations support as a refugee cooperative."
			},
			{
				name: "UNAPROA",
				role: "Regional environmental organization based on the finca. Organizes resistance to pineapple-plantation expansion and water defense."
			},
			{
				name: "Longo Maï European cooperatives",
				role: "The 1973 French and European Longo Maï settlements that launched the Costa Rican finca and still send visitors and solidarity."
			},
			{
				name: "United Nations (founding support)",
				role: "Supported the 1979 founding as a project for a region torn by civil wars. Historical funder."
			}
		],
		howItRuns: "UNAPROA organizes regional environmental work from the finca. It is a cooperative village. A Costa Rican agricultural cooperative in the European Longo Maï movement, founded with United Nations support as a refugee settlement. Land is held in common for farming and housing rather than as freehold lots. UNAPROA, a regional environmental organization, is based on the finca. Committees run infrastructure."
	},
	"maya-mountain": {
		model: "founder",
		modelLabel: "Founder-stewarded",
		unique: false,
		summary: "NGO board and farm management. Interns and visiting groups work inside the demonstration; they do not buy membership shares or title. Local Maya and Toledo communities are partners.",
		whoDecides: "NGO board and farm management.",
		bodies: [
			{
				name: "Finca / farm title (Toledo)",
				role: "The 70-acre hillside above the Columbia River. A working research farm, not subdivided lots and."
			},
			{
				name: "Maya Mountain Research Farm (Belize NGO)",
				role: "Registered 2004. Holds the public-benefit work of the 70-acre demonstration farm: agroforestry, internships, carbon farming, and community education."
			},
			{
				name: "Intern and visiting-researcher program",
				role: "Interns, students, and visiting groups live and work on the farm. They do not take title."
			}
		],
		howItRuns: "Interns and visiting groups work inside the demonstration; they do not buy membership shares or title. Local Maya and Toledo communities are partners. A Belizean registered NGO (from 2004) running a 70-acre demonstration farm. Christopher Nesbitt began the work in 1988; the NGO is the public-benefit shell."
	},
	"pachamama": {
		model: "spiritual",
		modelLabel: "Spiritual order",
		unique: false,
		summary: "Founder-guided spiritual community rather than a one-member-one-vote cooperativa or a condominio assembly. Long-term residents make a life there by invitation and commitment, not by conveyancing. Tyohar remains the public spiritual guide.",
		whoDecides: "Founder-guided spiritual community rather than a one-member-one-vote cooperativa or a condominio assembly.",
		bodies: [
			{
				name: "PachaMama resident community",
				role: "About 70 residents living by membership in a founder-led spiritual village, not by buying a lot. Tyohar remains the public spiritual guide."
			},
			{
				name: "PachaMama Eco-Village (private land)",
				role: "Holds the ~500 acres of former cattle land in Guanacaste. Privately owned, reforested since 1999."
			},
			{
				name: "PachaMama centre of transformation",
				role: "Retreats, silent sittings, and workshops. The village says income is reinvested in the land and operations, a nonprofit centre in practice, beside the residential community."
			}
		],
		howItRuns: "Long-term residents make a life there by invitation and commitment, not by conveyancing. Tyohar remains the public spiritual guide. A founder-led spiritual community on privately held land. The village presents itself as a nonprofit centre of transformation whose retreat income is reinvested in the place; residents live by membership in the community, not by buying a condominio lot. Land is privately owned."
	},
	"imap": {
		model: "board",
		modelLabel: "Board and staff",
		unique: false,
		summary: "NGO / asociación directed by Maya staff. Visiting farmers and workshop groups do not become shareholders. The seed bank and teaching centre are the institution; surrounding Kaqchikel communities are the constituency.",
		whoDecides: "NGO / asociación directed by Maya staff.",
		bodies: [
			{
				name: "IMAP Permaculture Centre, Pachitulul",
				role: "Lakeshore site with ecological cabins, seed bank, and workshops. Site acres unpublished."
			},
			{
				name: "Instituto Mesoamericano de Permacultura (IMAP)",
				role: "Maya Kaqchikel education and seed-sovereignty institute at Pachitulul, San Lucas Tolimán. Trains farmers; holds the teaching centre and living seed bank."
			},
			{
				name: "Living seed bank and farmer network",
				role: "Native-seed catalogue and training for more than 10,000 smallholder farmers in the Atitlán basin and Mesoamerica."
			}
		],
		howItRuns: "Visiting farmers and workshop groups do not become shareholders. The seed bank and teaching centre are the institution; surrounding Kaqchikel communities are the constituency. A Guatemalan asociación / ONG created by Maya Kaqchikel people on the south shore of Lake Atitlán. IMAP is an education and seed-sovereignty institute. Land and cabins serve workshops, a living seed bank, and visiting farmers."
	},
	"rancho-mastatal": {
		model: "founder",
		modelLabel: "Founder-stewarded",
		unique: false,
		summary: "Founder-stewarded education centre with a resident team. Apprentices and course participants live there for a season; they do not buy title. Local Costa Rican neighbors are part of the social fabric of Mastatal.",
		whoDecides: "Founder-stewarded education centre with a resident team.",
		bodies: [
			{
				name: "Rancho Mastatal (farm and ecolodge)",
				role: "Holds the 300+ acres at Mastatal. Founded 2001 by Tim O’Hara and Robin Nunes."
			},
			{
				name: "Private wildlife refuge (MINAE / SINAC overlay)",
				role: "Conservation overlay on most of the ranch, backing La Cangreja National Park. Protects water, trails, and habitat."
			},
			{
				name: "Rancho Mastatal Sustainability Education Center",
				role: "PDC, natural building, fermentation, agroforestry, wilderness medicine. Apprentices and course residents live on site without taking title."
			}
		],
		howItRuns: "Apprentices and course participants live there for a season; they do not buy title. Local Costa Rican neighbors are part of the social fabric of Mastatal. A privately founded education centre, permaculture farm, and ecolodge on a private wildlife refuge that backs La Cangreja National Park. Tim O’Hara and Robin Nunes hold and steward the land as a teaching ranch, not as a condominio of lots or a community land trust. The refuge designation is a conservation overlay. Residential life is staff, apprentices, and course participants."
	},
	"bona-fide": {
		model: "board",
		modelLabel: "Board and staff",
		unique: false,
		summary: "Nonprofit boards (U.S. and Nicaraguan) and farm coordinators. Interns are program participants, not members with title. Local Balgüe and Ometepe farmers are collaborators.",
		whoDecides: "Nonprofit boards (U.S. and Nicaraguan) and farm coordinators. Interns are program participants, not members with title. Local Balgüe and Ometepe farmers are collaborators.",
		bodies: [
			{
				name: "Project Bona Fide (Nicaraguan NGO)",
				role: "On-island nonprofit face of the 26-acre Finca Bona Fide in Balgüe. Holds the Nicaraguan work under Ley 147."
			},
			{
				name: "Project Bona Fide (U.S. 501(c)(3))",
				role: "U.S. public charity that raises tax-deductible gifts for the Ometepe agroecology farm and internships."
			},
			{
				name: "Internship program",
				role: "Three-month minimum stays: room, board, Spanish, a farm-system project, and a project seed fund. Interns are not members with title."
			}
		],
		howItRuns: "Nonprofit boards (U.S. and Nicaraguan) and farm coordinators. Interns are program participants, not members with title. Local Balgüe and Ometepe farmers are collaborators. A U.S. 501(c)(3) nonprofit paired with a Nicaraguan NGO, running a 26-acre agroecology farm on Ometepe. Michael Judd founded the project in 2001. Interns live and work on the farm; they do not buy lots."
	},
	"ipes": {
		model: "board",
		modelLabel: "Board and staff",
		unique: false,
		summary: "Grassroots NGO. Campesino members govern the movement more than a residential assembly. International volunteers apply by email; they do not buy in.",
		whoDecides: "Grassroots NGO. Campesino members govern the movement more than a residential assembly. International volunteers apply by email; they do not buy in.",
		bodies: [
			{
				name: "Suchitoto teaching hectare",
				role: "Stony hillside demonstration site above Suchitoto, about one hectare with thatched teaching space."
			},
			{
				name: "Instituto de Permacultura de El Salvador (IPES)",
				role: "Grassroots farmer NGO founded 2002. The Suchitoto hectare is the classroom; the campesino-a-campesino network is the body."
			},
			{
				name: "Campesino-a-campesino network",
				role: "Small-scale farmer members across El Salvador. Volunteers and interns support communications and field work; they do not buy lots."
			}
		],
		howItRuns: "Campesino members govern the movement more than a residential assembly. International volunteers apply by email; they do not buy in. A Salvadoran grassroots NGO (asociación) founded in 2002 by Juan Rojas and Karen Inwood. The hectare in Suchitoto is a demonstration and teaching site; the real body is a campesino-a-campesino network of small farmers. This is an institute and movement."
	},
	"finca-bellavista": {
		model: "hoa",
		modelLabel: "Homeowners / body corporate",
		unique: false,
		summary: "Community Guidelines plus parcel owners. Design and construction rules (solar, local materials, tree protection) run with the lot. This is a covenanted neighborhood in the rainforest.",
		whoDecides: "Community Guidelines plus parcel owners.",
		bodies: [
			{
				name: "Finca Bellavista parcel owners",
				role: "Individual title to garden, forest, or riverfront parcels of ¼–3 acres inside the ~140-acre residential community. Buying and selling is ordinary (covenanted) real estate."
			},
			{
				name: "Finca Bellavista Community Guidelines",
				role: "Written building and land-use rules for treehouses, solar, materials, and canopy protection. Costa Rica’s closest cousin to an HOA, covenants."
			},
			{
				name: "Andrews / Hogan founding holding",
				role: "Erica Andrews and Mateo Hogan assembled the original 62 acres (a timber-sale site) in 2006 and expanded toward ~600 acres. Historical developer-stewards of unsold reserve land."
			}
		],
		howItRuns: "Design and construction rules (solar, local materials, tree protection) run with the lot. This is a covenanted neighborhood in the rainforest. A rainforest subdivision of freehold treehouse parcels under written Community Guidelines, Costa Rica’s closest cousin to an HOA. Erica Andrews and Mateo Hogan bought a 62-acre timber-sale site in 2006 and grew the finca to about 600 acres. Owners take title to a parcel (garden, forest, or riverfront), build under canopy rules, and share walkways and commons. Buying and selling is real estate with covenants."
	},
	"la-ecovilla": {
		model: "hoa",
		modelLabel: "Homeowners / body corporate",
		unique: false,
		summary: "Condominio assembly of lot owners, plus the founder’s ongoing development role (especially at San Mateo). You join by taking title, then living under the reglamento.",
		whoDecides: "Condominio assembly of lot owners, plus the founder’s ongoing development role (especially at San Mateo).",
		bodies: [
			{
				name: "Lot owners (reglamento de condominio)",
				role: "Private house title on a condominio lot. Membership in the assembly comes with the deed."
			},
			{
				name: "La Ecovilla Original condominio",
				role: "48 families each own a lot plus an undivided share of the food forest, river edge, and shared buildings on 42 acres. Ley Reguladora de la Propiedad en Condominio, HOA plus freehold."
			},
			{
				name: "Ecovilla San Mateo (expansion)",
				role: "2023 expansion on ~220 hectares of regenerated land (former petting zoo) near the Machuca River. Same founder, larger lot-sales and neighborhood plan."
			},
			{
				name: "Marcelo Valansi / development entity",
				role: "Founder and ongoing developer, especially of San Mateo. Historical purchaser of the original cattle farm in 2012."
			}
		],
		howItRuns: "You join by taking title, then living under the reglamento. A Costa Rican condominio (Ley Reguladora de la Propiedad en Condominio): each family owns a lot and an undivided share of the commons, food forest, river edge, shared buildings. That is an HOA-plus-freehold. Marcelo Valansi founded the original village in 2012; a second project, Ecovilla San Mateo, opened on regenerated land in 2023. Buying a lot is the membership path."
	},
	"brave-earth": {
		model: "cooperative",
		modelLabel: "Cooperative democracy",
		unique: false,
		summary: "Shareholders plus Asociación Tierra Valiente Trust. U.S. tax-deductible gifts go through Amigos de Costa Rica as fiscal sponsor. Retreat guests are not members. Shares are limited.",
		whoDecides: "Shareholders plus Asociación Tierra Valiente Trust.",
		bodies: [
			{
				name: "Shareholder commons (up to 40 shares)",
				role: "Individuals, couples, or families hold shares with a private living structure on communal land. Shares are membership in a commons."
			},
			{
				name: "Asociación Tierra Valiente Trust",
				role: "Costa Rican nonprofit entity for the 80-acre commons, farm, and healing-arts centre at San Isidro de Peñas Blancas."
			},
			{
				name: "Amigos de Costa Rica (fiscal sponsor)",
				role: "U.S. public charity that fiscally sponsors Asociación Tierra Valiente Trust so U.S."
			},
			{
				name: "Ma Earth donor round",
				role: "Public ledger: $32,602.43 from 147 donors across three projects. Crowdfunding."
			}
		],
		howItRuns: "U.S. tax-deductible gifts go through Amigos de Costa Rica as fiscal sponsor. Retreat guests are not members. Shares are limited. A shareholder commons on Maleku territory: up to 40 shares (individuals, couples, or families) with private living structures on communal land, plus Asociación Tierra Valiente Trust, fiscally sponsored for U.S. gifts by Amigos de Costa Rica (a 501(c)(3)). The association is a Costa Rican asociación.S.-style community land trust, shares are membership in a commons. Retreat infrastructure (Gaia Domes, tambos, jungle huts) is the public face."
	},
	"lama": {
		model: "consensus",
		modelLabel: "Consensus",
		unique: false,
		summary: "A 501(c)(3) board holds legal authority but chooses to advise. Residents and summer stewards sit a circle. No one buys membership or title. Visitors come by arrangement; dropping in on the mountain is not the culture.",
		whoDecides: "A 501(c)(3) board holds legal authority but chooses to advise.",
		bodies: [
			{
				name: "Resident circle and summer stewards",
				role: "People who live on the mountain for a season or longer."
			},
			{
				name: "Lama Foundation",
				role: "Holds the mountain land, buildings, and retreat programs. Educational, religious, and scientific 501(c)(3)."
			},
			{
				name: "Lama Foundation Press / Be Here Now",
				role: "Historical spiritual publishing from the mountain. Ram Dass finished and first produced Be Here Now here in 1971."
			}
		],
		howItRuns: "Residents and summer stewards sit a circle. No one buys membership or title. Visitors come by arrangement; dropping in on the mountain is not the culture. A New Mexico 501(c)(3) educational, religious, and scientific nonprofit (EIN 85-0202741). Ultimate legal authority sits with a board, mostly past residents, who treat themselves as advisors; a resident circle runs daily life. There are no permanent members and no private lots."
	},
	"arcosanti": {
		model: "board",
		modelLabel: "Board and staff",
		unique: false,
		summary: "Nonprofit board and Foundation staff. Residents are employees, workshop participants, and long-term volunteers, not shareholders. State land stays with Arizona; the Foundation’s 860 acres stay with the 501(c)(3). No one buys an apartment as title.",
		whoDecides: "Nonprofit board and Foundation staff.",
		bodies: [
			{
				name: "The Cosanti Foundation",
				role: "Arizona 501(c)(3) founded in 1965. Owns about 860 acres at Arcosanti, the Cosanti studio in Paradise Valley, the bell foundries, tours, and workshops."
			},
			{
				name: "Arizona State Land Department leases",
				role: "Two state parcels totaling about 3,200 acres leased as open-space preserve. Combined with the Foundation’s 860 acres this is the ~4,060-acre sanctuary."
			},
			{
				name: "Cosanti (Paradise Valley studio)",
				role: "Soleri’s original earth-cast studio and home, an Arizona Historic Site under the same Foundation. Associated, not the Arcosanti mesa title."
			},
			{
				name: "Soleri windbell foundry (bronze and ceramic)",
				role: "The cash engine: bells sold at Arcosanti, Cosanti, and online. Every purchase supports the Foundation."
			}
		],
		howItRuns: "Residents are employees, workshop participants, and long-term volunteers, not shareholders. State land stays with Arizona; the Foundation’s 860 acres stay with the 501(c)(3). No one buys an apartment as title. A project of The Cosanti Foundation, an Arizona 501(c)(3) nonprofit founded in 1965. The Foundation owns about 860 acres; two state parcels totaling about 3,200 acres are leased from the Arizona State Land Department, so the preserve is roughly 4,060 acres. The experimental town sits on fewer than 25 acres of that. Cosanti, Soleri’s Paradise Valley studio, is a separate Arizona Historic Site under the same parent."
	},
	"alpha-farm": {
		model: "consensus",
		modelLabel: "Consensus",
		unique: false,
		summary: "Quaker consensus of the members. Equal ownership, no private sale of houses or cars as individual assets. New people visit, then ask to join; the community is small enough that fit is the filter.",
		whoDecides: "Quaker consensus of the members.",
		bodies: [
			{
				name: "Common purse and member labor",
				role: "On-farm work and any outside earnings go to the cooperative; members receive a stipend. No individual house title."
			},
			{
				name: "Alpha Farm cooperative",
				role: "Members own the 280-acre Deadwood farm equally and pool income. Quaker consensus."
			},
			{
				name: "Alpha-Bit Café (Mapleton)",
				role: "Historical public café that helped pay the farm. A community business."
			}
		],
		howItRuns: "Equal ownership, no private sale of houses or cars as individual assets. New people visit, then ask to join; the community is small enough that fit is the filter. An income-sharing cooperative: members own the farm equally and pool earnings (on-farm work plus any outside jobs). Governance is Quaker-style consensus. Land is held in common. Caroline Estes contributed most of the original purchase money; that did not become private title."
	},
	"sirius": {
		model: "consensus",
		modelLabel: "Consensus",
		unique: false,
		summary: "Meditative consensus / attunement in the Findhorn lineage, inside a 501(c)(3). An exploring-member path sits between intern and resident. Associate members live nearby. The board of the nonprofit is the legal face; daily life is the circle.",
		whoDecides: "Meditative consensus / attunement in the Findhorn lineage, inside a 501(c)(3).",
		bodies: [{
			name: "Resident and exploring members",
			role: "Findhorn-lineage attunement community. Exploring-member path between intern and resident."
		}, {
			name: "Sirius Community, Inc.",
			role: "Holds the 90 acres in Shutesbury and runs the education centre, internships, and visitor programs. Public-benefit shell of a spiritual residential community."
		}],
		howItRuns: "An exploring-member path sits between intern and resident. Associate members live nearby. The board of the nonprofit is the legal face; daily life is the circle. A cooperatively run residential community and educational 501(c)(3) nonprofit. The charity is the public-benefit shell (courses, internships, visitors). Residents live as a spiritual membership community. Land is Nipmuc and Pocomtuc territory; the nonprofit holds title."
	},
	"huehuecoyotl": {
		model: "assembly",
		modelLabel: "Village assembly",
		unique: false,
		summary: "A small asociación of residents. Decisions sit with the people who live there. Visitors come by invitation and program, not by buying in.",
		whoDecides: "A small asociación of residents.",
		bodies: [
			{
				name: "Comunidad Huehuecoyotl",
				role: "Mexico’s first ecovillage, organized as an asociación on five acres in the Sierra del Tepozteco. Cultural and educational association."
			},
			{
				name: "Huehuecoyotl land (Tepoztlán)",
				role: "About two hectares held for the village. Small enough that title is a household-scale deed."
			},
			{
				name: "Illuminated Elephants / GEN",
				role: "The travelling theatre commune that founded the village, and later GEN networking. Associated history, not the landowner."
			}
		],
		howItRuns: "Decisions sit with the people who live there. Visitors come by invitation and program, not by buying in. Mexico’s first ecovillage, organized as a Mexican asociación on privately held land. About twenty people share five acres in the Sierra del Tepozteco. A founding member of the Global Ecovillage Network. Alberto Ruz Buenfil (El Coyote) died in 2023; the village remains a cultural and educational association."
	},
	"cite-ecologique": {
		model: "founder",
		modelLabel: "Founder-stewarded",
		unique: false,
		summary: "A founder-led village that grew into a cluster of enterprises and a school, with about a hundred people participating in different ways. Not one-member-one-vote housing co-op of the Whole Village type. Visitors intern or train, then ask to stay.",
		whoDecides: "A founder-led village that grew into a cluster of enterprises and a school, with about a hundred people participating in different ways.",
		bodies: [
			{
				name: "La Cité Écologique de Ham-Nord",
				role: "The village, school, and land at 689 rang 8. A Quebec nonprofit community rather than a housing co-op of lots."
			},
			{
				name: "Cité écologique de l’ère du Verseau",
				role: "The first legal shell, founded 1984. Bankruptcy in 1990 ended this name; the community continued."
			},
			{
				name: "Kheops International",
				role: "Art and metaphysical-gift importer/wholesaler rooted in the Cité. Historically about CAD $2 million sales and 25 staff around 2011."
			},
			{
				name: "Ferme Bio-Maraîchère / Jardins de la Cité and RespecTerre",
				role: "Organic farm, maple, and other village enterprises that employ residents and stock the boutique."
			}
		],
		howItRuns: "Not one-member-one-vote housing co-op of the Whole Village type. Visitors intern or train, then ask to stay. A Quebec ecovillage built around a school and a cluster of enterprises. The village operates as a nonprofit / OSBL community with trading companies (historically Kheops International, RespecTerre, Jardins de la Cité / Ferme Bio-Maraîchère). Land is held for the community rather than as freehold house lots. A 1990 bankruptcy closed the first legal shell (Cité écologique de l’ère du Verseau); the project continued under the Cité Écologique name."
	},
	"acorn": {
		model: "common-purse",
		modelLabel: "Common purse",
		unique: false,
		summary: "Consensus of the members; FEC labor-credit culture. No buy-in. A visitor period and a membership interview, in the Twin Oaks family of processes. Capacity is the hard limit, rooms, not zoning lots.",
		whoDecides: "Consensus of the members; FEC labor-credit culture.",
		bodies: [
			{
				name: "Acorn Community Farm",
				role: "Holds the ~72 acres, houses, and seed business in common. Income-sharing, consensus, FEC member."
			},
			{
				name: "Southern Exposure Seed Exchange",
				role: "Open-pollinated and heirloom seed cooperative taken on in 1999 from Jeff McCormack. The income engine of the farm."
			},
			{
				name: "Federation of Egalitarian Communities",
				role: "Acorn is a Twin Oaks spin-off and FEC member. Mutual aid."
			}
		],
		howItRuns: "No buy-in. A visitor period and a membership interview, in the Twin Oaks family of processes. Capacity is the hard limit, rooms. A secular egalitarian income-sharing commune and Twin Oaks spin-off. Members of the Federation of Egalitarian Communities. Land, houses, and the seed business are held in common Do not confuse with the California 501(c)(3) “Acorn Community Enterprises.”"
	},
	"las-canadas": {
		model: "cooperative",
		modelLabel: "Cooperative democracy",
		unique: false,
		summary: "A horizontal cooperativa: one member, one vote, shared income and responsibility. Romero remains the public agronomist-director. Course students are not members. The ranch is not for sale as parcels.",
		whoDecides: "A horizontal cooperativa: one member, one vote, shared income and responsibility.",
		bodies: [
			{
				name: "Cooperativa agroecológica Las Cañadas",
				role: "Horizontal cooperative of about two dozen members who share votes and income on the Huatusco ranch."
			},
			{
				name: "Rancho Las Cañadas",
				role: "306 hectares inherited by agronomist Ricardo Romero as extensive cattle land. Title began as private ranch land; the cooperativa is the social structure on it."
			},
			{
				name: "Centro de agroecología y permacultura (courses and seed bank)",
				role: "Courses, a living seed bank, cheese, and bioconstruction teaching."
			}
		],
		howItRuns: "Romero remains the public agronomist-director. Course students are not members. The ranch is not for sale as parcels. A Mexican agroecological cooperativa on a ranch Ricardo Romero inherited as extensive cattle land. Members share votes and income; they are not purchasers of subdivided lots. Title began as private ranch land (freehold), then the project became a cooperativa.S.-style conservation easement. Cloud-forest conservation is their land use, written in practice more than as a separate covenant vehicle."
	},
	"our-ecovillage": {
		model: "sociocracy",
		modelLabel: "Sociocracy",
		unique: false,
		summary: "Sociocracy inside a multi-stakeholder community-services co-op. One member, one vote at the co-op layer; circles for operations. Course participants are not automatically members. No strata council of lot owners.",
		whoDecides: "Sociocracy inside a multi-stakeholder community-services co-op.",
		bodies: [
			{
				name: "Sociocratic circles",
				role: "Internal governance of the co-op. Course students and interns are not automatically members."
			},
			{
				name: "O.U.R. Eco Village Cooperative",
				role: "British Columbia Community Services (Non-Profit) Cooperative holding the 25-acre Shawnigan Lake demonstration site. Multi-stakeholder; sociocracy."
			},
			{
				name: "Permaculture and natural-building school",
				role: "PDC, cob, internships, and CSA. The earned-income face of the 25 acres."
			}
		],
		howItRuns: "One member, one vote at the co-op layer; circles for operations. Course participants are not automatically members. No strata council of lot owners. A British Columbia Community Services (Non-Profit) Cooperative, a multi-stakeholder co-op under BC cooperative law, run by sociocracy. The land is on unceded Indigenous territory of the Cowichan peoples. Members hold co-op membership, not freehold house lots."
	},
	"whole-village": {
		model: "consensus",
		modelLabel: "Consensus",
		unique: false,
		summary: "Consensus in the co-op. Members of Whole Village Property Co-operative Inc. occupy Greenhaven and steward the farm. The conservancy holds the easement; it does not own the operating title. New people join when a household leaves and the co-op accepts a buyer of that share.",
		whoDecides: "Consensus in the co-op. Members of Whole Village Property Co-operative Inc. occupy Greenhaven and steward the farm. The conservancy holds the easement; it does not own the operating title. New people join when a household leaves and the co-op accepts a buyer of that share.",
		bodies: [
			{
				name: "Greenhaven ecoresidence",
				role: "15,000 sq ft house for eleven families (2004). Shared common space, private quarters, one building."
			},
			{
				name: "Whole Village Property Co-operative Inc.",
				role: "Holds the 191-acre Caledon farm. Successor to Whole Village King Ltd."
			},
			{
				name: "Whole Village King Ltd",
				role: "The company that first held the 2002 purchase, later converted into the property co-operative."
			},
			{
				name: "Escarpment Biosphere Conservancy easement",
				role: "999-year conservation easement attached to the deed: farmland, forest, and a provincially significant wetland. Housing cluster excepted."
			}
		],
		howItRuns: "Members of Whole Village Property Co-operative Inc. occupy Greenhaven and steward the farm. The conservancy holds the easement; it does not own the operating title. New people join when a household leaves and the co-op accepts a buyer of that share. Whole Village King Ltd became Whole Village Property Co-operative Inc., an Ontario co-operative corporation that holds the 191-acre farm. Most members live in Greenhaven, a 15,000 sq ft eleven-family ecoresidence (2004), occupancy in a co-op, not eleven freehold lots. A conservation easement held by the Escarpment Biosphere Conservancy is attached to the deed for 999 years (farmland, forest, wetland; housing cluster excepted). That easement is a conservation covenant."
	},
	"botton": {
		model: "hybrid",
		modelLabel: "Hybrid",
		unique: true,
		summary: "Botton is two charities on one dale, and that split is the government. Camphill Village Trust Ltd holds most of the land and runs part of the village as a social-care service with staff and service-users. Esk Valley Camphill Community, formed after a 2010s rupture, runs about nineteen households on the original Camphill pattern, shared lives, no employment contracts, as a recognised Shared Lives scheme. Neither sells title.",
		whoDecides: "Two boards, two cultures. Trust directors and care-quality regulation on one side; coworkers and villagers in Esk Valley households, with consensus inside that community, on the other. The North York Moors is a planning overlay.",
		bodies: [
			{
				name: "Camphill Village Trust Ltd",
				role: "Company limited by guarantee and registered charity. Landlord of most of the dale. Employment-model social care, inspected as such."
			},
			{
				name: "Esk Valley Camphill Community",
				role: "The post-split community that kept life-sharing. About 19 households. Shared Lives, not employment contracts."
			},
			{
				name: "The Avalon Group (Shared Lives provider)",
				role: "The regulatory home for Esk Valley’s life-sharing, so the old pattern can exist under modern English care law."
			},
			{
				name: "House communities",
				role: "The Camphill unit: coworkers and villagers sharing a kitchen. Still the day, on both sides of the split, with different contracts."
			},
			{
				name: "Camphill movement",
				role: "The anthroposophical network Botton came from."
			}
		],
		howItRuns: "On Trust land, a decision about a house is a care-management decision with a board behind it. In Esk Valley, a decision about a house is a household and community decision under Shared Lives. A visitor who knew Botton in 1995 has to ask which Botton they are standing in. Nobody here buys a cottage as freehold.",
		dive: {
			title: "One village that had to become two governments",
			lead: "Camphill’s founding idea was that people with and without learning disabilities share a house and a work, without wages, under anthroposophy. English care regulation and a charity board decided, in the 2010s, that Botton would become a service with staff. Some households refused. They formed Esk Valley. The unique structure is a geographic community with two constitutions, two boards, and one dale.",
			organs: [
				{
					name: "Camphill Village Trust",
					what: "The charity that won the 2010s argument about employment, safeguarding, and “modernisation.” It still holds most of the land Karl König’s people were given."
				},
				{
					name: "Esk Valley Camphill Community",
					what: "The charity that lost the argument and stayed. Life-sharing, no contracts between coworkers and villagers, Shared Lives as the legal skin."
				},
				{
					name: "CQC / Shared Lives / Avalon",
					what: "The state. Botton’s split cannot be read without the inspectorate. One side is a service; the other is a Shared Lives scheme. Both are answers to the same statute."
				},
				{
					name: "The house",
					what: "Still the unit both sides claim. Breakfast with villagers is the unchanging picture. The contract around the breakfast is the fight."
				}
			],
			path: "A new coworker on Trust land: a job, a DBS check, a manager. A new coworker in Esk Valley: a vocation into a household, under Shared Lives. A repair to a listed farm building: the landlord charity (usually the Trust). A fight about whether a villager is a resident or a service-user: that fight already happened, and produced two paths. Families of villagers have to pick which Botton they mean.",
			history: "Botton was founded in 1955 as the first Camphill village in Britain, on land in Danby Dale. For decades it was the picture of Camphill: houses, crafts, a dairy, coworkers who were not staff. In the 2010s Camphill Village Trust moved to an employment and tenancy model under pressure from care law and its own board. Coworkers were dismissed or left. Esk Valley formed to keep the old pattern on part of the original footprint. Courts, campaigns, and the press were part of the government for a while.",
			tension: "Safeguarding versus life-sharing. Who the land is for when the donor thought they were giving it to a movement, not to a care company. Two cultures sharing roads and a postcode. Unique because the governance experiment is the split itself: England forced a Camphill village to become a service, and a remainder reconstituted as a community under a different clause of the same law."
		}
	},
	"limans": {
		model: "federation",
		modelLabel: "Federation",
		unique: true,
		summary: "Longo Maï Limans is the mother cooperative of a European network that decided not to pay wages. Land and means of production sit in a Swiss foundation (the European Land Fund), a lock against private sale. Pro Longo Maï, an association founded in 1974, pools donations. Daily life is a self-managed agricultural cooperative: no salaries, no private lots, no HOA bylaws. Sister cooperatives in France, Austria, Germany, Ukraine, and Costa Rica (Finca Sonador in this atlas) are the rest of the federation.",
		whoDecides: "Self-administration on site, the network for questions that bind more than one cooperative, the Swiss foundation for the land. There is no written bylaw of the suburban kind and no director who can sell Limans.",
		bodies: [
			{
				name: "Coopérative agricole Longo Maï Limans",
				role: "The mother cooperative. Agricultural self-management. No wages."
			},
			{
				name: "European Land Fund (Swiss foundation)",
				role: "Title. The lock. Members do not hold the land in their names."
			},
			{
				name: "Pro Longo Maï",
				role: "1974 association. Donor face, not the village council."
			},
			{
				name: "Longo Maï European cooperatives",
				role: "The federation. Limans is first among sisters."
			},
			{
				name: "Finca Sonador / other sites",
				role: "Later sisters. Same wage rule, different countries. Not this title."
			}
		],
		howItRuns: "Work is the week; there is no pay packet. Decisions about goats, grain, and guests are self-administered. Decisions about buying another farm in another country are network decisions with the foundation in the room. A member who leaves does not cash out a share of Provence.",
		dive: {
			title: "A wage-less federation with a Swiss lock on the land",
			lead: "Longo Maï is easy to file under “1970s European commune.” The unique structure is a transnational federation of agricultural cooperatives that still do not pay wages, whose land is held by a Swiss foundation so that no national co-op can privatise it, and whose mother site at Limans has refused, for fifty years, to become a bylaws-and-salary farm.",
			organs: [
				{
					name: "Limans cooperative",
					what: "The original farm. Self-administration, agriculture, the culture of no wages."
				},
				{
					name: "European Land Fund",
					what: "Swiss foundation title. The anti-speculation technology. Closer to a CLT than to a French SCI, and in the American filing sense."
				},
				{
					name: "Pro Longo Maï",
					what: "How German and Swiss donors keep the network from having to become a wage economy to survive. Politics: the donor association is not supposed to run the goats."
				},
				{
					name: "Sister cooperatives",
					what: "Austria, Germany, Ukraine, Costa Rica, other French sites. A federation without a president. Limans’ uniqueness is that it is the mother, not that it is the boss."
				}
			],
			path: "A barn at Limans: the cooperative. A crisis at another site: the network, then sometimes the foundation if land is at stake. A journalist who wants the 1973 origin story: Pro Longo Maï and whoever is putting up visitors that week. A young person who wants a salary: there is no path inside; the structure is the refusal. French labour inspection and Swiss foundation law are silent partners.",
			history: "In 1973, after the occupation of a farm at Limans in the Alpes-de-Haute-Provence, Longo Maï (“that it may last long” in Provençal) was founded as a European cooperative movement for unemployed youth. The Swiss European Land Fund and Pro Longo Maï (1974) were built so the land would outlast a generation of activists. Finca Sonador in Costa Rica was a later refugee-settlement sister. The no-wage rule is the thread.",
			tension: "Ageing founders and a youth that knows wages. Schengen, Ukrainian war, and Costa Rican land law all sitting on one federation. Donors versus goats. Unique because the government is a wage-less transnational cooperative locked by a Swiss foundation, and because Limans has stayed the mother site without becoming a head office."
		}
	},
	"los-portales": {
		model: "consensus",
		modelLabel: "Consensus",
		unique: false,
		summary: "Asociación / espacio cooperativo. Consensus among a small resident group. Guests and ESC volunteers are not members. No private sale of the commons.",
		whoDecides: "Asociación / espacio cooperativo.",
		bodies: [
			{
				name: "Resident circle",
				role: "About 30 people deciding by consensus. Guests and ESC volunteers are not members."
			},
			{
				name: "Asociación El Espacio Cooperativo, sede Los Portales",
				role: "Spanish asociación on a 200-hectare Sierra Morena finca. Agriculture, education, and dream research."
			},
			{
				name: "Red Ibérica de Ecoaldeas / GEN",
				role: "RIE and GEN membership. Network."
			}
		],
		howItRuns: "Consensus among a small resident group. Guests and ESC volunteers are not members. No private sale of the commons. A Spanish asociación (El Espacio Cooperativo, sede Los Portales) on a privately held 200-hectare finca. Members of the Iberian Ecovillage Network (RIE) and GEN. The land is a farm held for the association’s work (agriculture, education, dream research), not subdivided title."
	},
	"torri-superiore": {
		model: "consensus",
		modelLabel: "Consensus",
		unique: false,
		summary: "Association (public half), social cooperative (enterprise), resident community (consensus, twice-weekly meetings). Apartment owners in the private half are members of the village.",
		whoDecides: "Association (public half), social cooperative (enterprise), resident community (consensus, twice-weekly meetings).",
		bodies: [
			{
				name: "Private restored apartments",
				role: "About twenty apartments in the other half of the stack, privately owned and restored by members, freehold inside a medieval hamlet."
			},
			{
				name: "Resident community (consensus)",
				role: "Twice-weekly meetings of about twenty residents. Apartment owners are members of the village."
			},
			{
				name: "Associazione Culturale Torri Superiore",
				role: "Founded 1989 to restore and repopulate the abandoned 14th-century hamlet. Owns the public half of the stone village (guesthouse / cultural centre)."
			},
			{
				name: "Ture Nirvane Società Cooperativa Sociale di Comunità",
				role: "Founded 1999 by association members to run eco-tourism, courses, and the guesthouse as a non-profit cooperative. Member of Legacoop Liguria and Banca Etica."
			}
		],
		howItRuns: "Apartment owners in the private half are members of the village. Three overlapping bodies. The Associazione Culturale Torri Superiore (1989) owns the public half of the medieval village (guesthouse). Ture Nirvane Società Cooperativa Sociale di Comunità (1999) runs eco-tourism, courses, and the guesthouse. About twenty apartments in the other half are privately owned and restored by members, freehold inside a stone stack or Italian condominio of suburban lots. The resident community decides by consensus."
	},
	"krishna-valley": {
		model: "spiritual",
		modelLabel: "Spiritual order",
		unique: false,
		summary: "ISKCON / Hungarian Krishna-conscious church structure (GBC) plus village organisation. Residential membership is religious.",
		whoDecides: "ISKCON / Hungarian Krishna-conscious church structure (GBC) plus village organisation.",
		bodies: [
			{
				name: "New Vraja-dhama residential community",
				role: "Monks and families living a Vaishnava religious life on church land. Membership is vocational."
			},
			{
				name: "Magyarországi Krisna-tudatú Hívők Közössége / ISKCON Hungary",
				role: "Registered church holding the ~266–300 ha organic farm as New Vraja-dhama (Krisna-völgy). Title sits with the religious organisation, not with household lots."
			},
			{
				name: "Radha-Syamsundara temple and guesthouse",
				role: "Public face: visitor tickets, festivals, organic-garden tours, cow protection, and a guesthouse."
			}
		],
		howItRuns: "Residential membership is religious. An ISKCON / Hungarian Krishna-conscious religious community (Magyarországi Krisna-tudatú Hívők Közössége and related church entities) holding a large organic farm as New Vraja-dhama. Title sits with the religious organisation, not with household lots. Visitors walk a temple village; members live a Vaishnava religious life."
	},
	"brithdir-mawr": {
		model: "cooperative",
		modelLabel: "Cooperative democracy",
		unique: false,
		summary: "Housing co-op on a lease, plus a separate Roundhouse Trust for the famous house. Consensus among a small membership. The 2024–25 dispute is about who the landlord is, not about converting to freehold lots.",
		whoDecides: "Housing co-op on a lease, plus a separate Roundhouse Trust for the famous house.",
		bodies: [
			{
				name: "Brithdir Mawr Housing Co-op",
				role: "Housing cooperative that leased about 80 acres and the farmyard from Julian Orbach after the split with Tir Ysbrydol."
			},
			{
				name: "Julian Orbach (freehold, then sale)",
				role: "Architectural historian who, with Emma Orbach, set up on a rundown farm in 1993. Retained the farmyard half after the split; sold in 2024."
			},
			{
				name: "That Roundhouse Trust",
				role: "The 1997 turf-roofed roundhouse (Tony Wrench and Jane Faith) later sat in its own trust, separate from the farmyard lease. The planning fight helped put Low Impact Development into Pembrokeshire policy."
			},
			{
				name: "Pembrokeshire Coast National Park",
				role: "Planning overlay that made the unauthorised eco-buildings famous. Not the owner."
			}
		],
		howItRuns: "Consensus among a small membership. The 2024–25 dispute is about who the landlord is, not about converting to freehold lots. Julian Orbach retained about 80 acres and the farmyard after a split with Emma Orbach (Tir Ysbrydol took woodland; the Roundhouse later sat in its own trust). The farm was leased to the Brithdir Mawr Housing Co-op. That is a housing cooperative on leased land. In 2024 the farm was sold to a buyer who wants a retreat centre; as of 2025 the community was still occupying and in dispute. National Park planning, is the overlay that made the roundhouse famous."
	},
	"keuruu": {
		model: "cooperative",
		modelLabel: "Cooperative democracy",
		unique: false,
		summary: "Registered-association democracy (one member, one vote) plus the practical culture of talkoot. No private title to the fields.",
		whoDecides: "Registered-association democracy (one member, one vote) plus the practical culture of talkoot.",
		bodies: [
			{
				name: "Village membership",
				role: "One member, one vote plus talkoot (the Finnish work bee). About 30–35 inhabitants."
			},
			{
				name: "Keuruun ekokylä ry",
				role: "Finnish registered association (rekisteröity yhdistys) that owns the 53-hectare farm: about 25 ha organic arable and 17 ha forest. Politically and religiously unaffiliated."
			},
			{
				name: "GEN Finland / SKEY",
				role: "Finnish ecovillage network and GEN membership. Hosted a GEN-Europe assembly in 2009."
			}
		],
		howItRuns: "No private title to the fields. Keuruun ekokylä ry, a Finnish registered association (rekisteröity yhdistys), owns the 53-hectare farm. Politically and religiously unaffiliated. Members of GEN Finland (SKEY) and GEN. You join the association."
	},
	"hurdal": {
		model: "hoa",
		modelLabel: "Homeowners / body corporate",
		unique: false,
		summary: "Early: cooperative consensus. Later: homeowners plus the realsameie for internals. Filago was the developer, not the village council. This is the Nordic case of an ecovillage that scaled by selling houses.",
		whoDecides: "Early: cooperative consensus.",
		bodies: [
			{
				name: "Kilden eco-community cooperative",
				role: "Phase one: rented Gjøding farm from the municipality and built straw-bale houses from 2002. Members held equal shares."
			},
			{
				name: "Private timber houses",
				role: "Households own dwellings. Houses can change hands."
			},
			{
				name: "Hurdal municipality (Gjøding farm)",
				role: "Invited an ecovillage onto the former rectory farm around 2001–02 and rented it to Kilden. Partner and former landlord, not the current freehold of the houses."
			},
			{
				name: "Huldra Økogrend Fellesareal (realsameie)",
				role: "Joint ownership of roads, commons, and internals for the timber-house cluster. Closer to a homeowners association than to a housing cooperative."
			}
		],
		howItRuns: "Later: homeowners plus the realsameie for internals. Filago was the developer, not the village council. This is the Nordic case of an ecovillage that scaled by selling houses. Two eras, two forms. Phase one (from 2002): Kilden eco-community cooperative rented Gjøding from the municipality and built straw-bale houses; members held equal shares. Phase two: Filago AS developed Huldra Økogrend as a larger eco-housing project, households own dwellings, and Huldra Økogrend Fellesareal is a realsameie (joint ownership of roads and commons). That later layer is closer to a homeowners association plus freehold than to a housing cooperative. The scale-up brought debt and identity conflict; the place is still lived in."
	},
	"suderbyn": {
		model: "sociocracy",
		modelLabel: "Sociocracy",
		unique: false,
		summary: "Cooperative membership plus NGO board plus foundation. Participatory / sociocratic practice on a small scale. Volunteers are not automatically members.",
		whoDecides: "Cooperative membership plus NGO board plus foundation.",
		bodies: [
			{
				name: "Suderbyn People-Care (economic association)",
				role: "Cooperative for membership and housing on the 5 ha farm at Västerhejde. You join the cooperative."
			},
			{
				name: "Suderbyn Earth-Care",
				role: "Foundation for land and ecology on the old farm."
			},
			{
				name: "RELEARN Suderbyn",
				role: "Education NGO (from 2007): ESC / Green Skills volunteers, courses, advocacy, and EU research projects. The public face."
			},
			{
				name: "GEN Europe node",
				role: "Network and teaching lab."
			}
		],
		howItRuns: "Participatory / sociocratic practice on a small scale. Volunteers are not automatically members. Three Swedish entities on one small farm: the cooperative Suderbyn People-Care (membership and housing), the NGO RELEARN Suderbyn (education, ESC volunteers, advocacy), and the foundation Suderbyn Earth-Care (land/ecology). You join the cooperative; RELEARN is the public education face."
	},
	"aardehuis": {
		model: "hoa",
		modelLabel: "Homeowners / body corporate",
		unique: false,
		summary: "Vereniging (association) of the households. Private houses, common rules, a common house. No income-sharing and no CLT ground lease.",
		whoDecides: "Vereniging (association) of the households.",
		bodies: [
			{
				name: "Vereniging Aardehuis Oost-Nederland",
				role: "Dutch association of the 23 households. Common house, gardens, sociocratic board."
			},
			{
				name: "Social-housing partner (three units)",
				role: "A social-housing provider financed three of the twenty-three homes so the cluster was not only owner-occupiers. Partner, not the village landlord."
			},
			{
				name: "23 earthships (private finance)",
				role: "Households privately financed 23 earthships on 1.2 ha at Olst. Occupancy is closer to freehold plus an association than to a housing-cooperative share."
			},
			{
				name: "Municipality of Olst-Wijhe",
				role: "Found land after a long search and later let the group “adopt” an extra hectare for community use. Partner, not the landlord of the houses."
			}
		],
		howItRuns: "Private houses, common rules, a common house. No income-sharing and no CLT ground lease. Vereniging Aardehuis Oost-Nederland is the Dutch association that holds the common life. Households privately financed 23 earthships (three with a social-housing partner) on municipal land found after a long search. Occupancy is closer to freehold plus an association / VvE than to a housing cooperative share. The municipality of Olst-Wijhe was a partner, not the landlord of the houses."
	},
	"comunidad-del-sur": {
		model: "common-purse",
		modelLabel: "Common purse",
		unique: false,
		summary: "Self-management, rotation, ‘to each according to need’ inside the collective’s means. Cooperatives for press and land sit beside the community, not above it. No private sale of a commons that was never subdivided.",
		whoDecides: "Self-management, rotation, ‘to each according to need’ inside the collective’s means.",
		bodies: [
			{
				name: "Comunidad del Sur",
				role: "The 1955 Montevideo anarchist commune: common ownership, shared production and consumption, rotation of work. Never became a housing-lot company, a FUCVAM apartment co-op, or a community land trust."
			},
			{
				name: "Cooperativa de Producción Agraria ECOSUR",
				role: "Agrarian arm of the family. Cooperative production."
			},
			{
				name: "Cooperativa de Educación y Comunicación Alternativa (CODEUCA)",
				role: "Education and alternative-communication cooperative in the same family. Not the land title."
			},
			{
				name: "Editorial Nordan and Tryckop",
				role: "Anarchist press and graphic workshops founded in Swedish exile and continued after the return. The trading face of the family."
			}
		],
		howItRuns: "Cooperatives for press and land sit beside the community, not above it. No private sale of a commons that was never subdivided. An anarchist cooperative that never became a housing-lot company. Common ownership, shared production and consumption, and rotation of work were the 1955 compact. After dictatorship exile in Peru and Sweden the group returned as an eco-community. Editorial Nordan and the Tryckop workshops are anarchist cooperatives; Cooperativa de Educación y Comunicación Alternativa (CODEUCA) and Cooperativa de Producción Agraria ECOSUR sit in the same family."
	},
	"penalolen": {
		model: "hoa",
		modelLabel: "Homeowners / body corporate",
		unique: false,
		summary: "Junta de Vecinos plus copropiedad. You join by acquiring a sitio, which is harder than buying a suburban house and easier than a religious covenant.",
		whoDecides: "Junta de Vecinos plus copropiedad.",
		bodies: [
			{
				name: "Junta de Vecinos de la Comunidad Ecológica",
				role: "Neighborhood association under Chilean junta law. Civic face of the eco-neighborhood."
			},
			{
				name: "Copropiedad, Comunidad Ecológica de Peñalolén",
				role: "About twenty parcels on the old Lo Hermida hillside, with sitios inside them that the state does not always recognise as lots. Houses sit closer to freehold-plus-association than to a housing-cooperative share."
			},
			{
				name: "Municipality of Peñalolén",
				role: "Planning overlay for the precordillera neighborhood. Partner and regulator, not the landlord."
			}
		],
		howItRuns: "You join by acquiring a sitio, which is harder than a suburban listing and easier than a religious covenant. Chilean copropiedad: about twenty parcels with several owners each, sitios inside them that the state does not always recognise as lots, and a Junta de Vecinos under neighborhood law. Houses sit closer to freehold-plus-association than to a housing cooperative share. A 2003 conflict with a neighboring land occupation is part of the public record. The municipality of Peñalolén is the planning overlay, not the landlord."
	},
	"eco-truly": {
		model: "spiritual",
		modelLabel: "Spiritual order",
		unique: false,
		summary: "Vaishnava community structure. Volunteers are welcome; residential membership is religious.",
		whoDecides: "Vaishnava community structure.",
		bodies: [{
			name: "ISKCON / Vaishnava temple life",
			role: "Bhakti religious life inside the cones. Volunteers and day visitors are not members of the covenant."
		}, {
			name: "Eco Truly Park (Vaishnava community)",
			role: "Hare Krishna / Vaishnava ecological and artistic community on the Chacra y Mar beach strip. Title and temple life sit with the religious community, not with household lots."
		}],
		howItRuns: "Volunteers are welcome; residential membership is religious. A Vaishnava / Hare Krishna ecological and artistic community. Title and temple life sit with the religious community, not with household lots. Visitors walk the cones; members live a bhakti religious life."
	},
	"ecovilla-gaia": {
		model: "board",
		modelLabel: "Board and staff",
		unique: false,
		summary: "Asociación civil: members, a board, no private sale of the 20.5 ha. Course students are not automatically members.",
		whoDecides: "Asociación civil: members, a board, no private sale of the 20.5 ha.",
		bodies: [
			{
				name: "Asociación Gaia",
				role: "Argentine asociación civil founded in 1991 (from Amigos de la Tierra, 1984). Holds the 20.5-hectare former Lactona dairy at Navarro."
			},
			{
				name: "Universidad Internacional de Permacultura",
				role: "Teaching face built on twenty-three years as a demonstration centre. Course students are not automatically members of the association."
			},
			{
				name: "CASA Latina / GEN",
				role: "Gaia helped seed the Latin American ecovillage network. Network, not the title holder."
			}
		],
		howItRuns: "Course students are not automatically members. Asociación Gaia, an Argentine asociación civil founded in 1991 (from Amigos de la Tierra, 1984), holds the 20.5-hectare Navarro site. Members of the association, not lot owners. The Universidad Internacional de Permacultura is the teaching face built on the village’s twenty-three years as a demonstration centre."
	},
	"ipec": {
		model: "board",
		modelLabel: "Board and staff",
		unique: false,
		summary: "A nonprofit institute. Founders, staff, and a small resident community run the site. Students come and go.",
		whoDecides: "A nonprofit institute.",
		bodies: [
			{
				name: "Instituto de Permacultura e Ecovilas do Cerrado (IPEC)",
				role: "Brazilian nonprofit institute holding a 25-hectare teaching site on former degraded cattle pasture at Pirenópolis."
			},
			{
				name: "Ecoversidade",
				role: "Educational arm: PDCs, bioconstruction, volunteers. Students come and go."
			},
			{
				name: "GEN / CASA Latina",
				role: "Network and teaching reputation. Not the landowner."
			}
		],
		howItRuns: "Founders, staff, and a small resident community run the site. Students come and go. Instituto de Permacultura e Ecovilas do Cerrado, a Brazilian nonprofit institute / associação holding a 25-hectare teaching site. Ecoversidade is the educational arm. You take a course."
	},
	"piracanga": {
		model: "hybrid",
		modelLabel: "Hybrid",
		unique: false,
		summary: "Inkiri as a nonprofit community; Unah as an enterprise; private owners as neighbors. GEN and CASA Latina treat Piracanga as a reference site.",
		whoDecides: "Inkiri as a nonprofit community; Unah as an enterprise; private owners as neighbors.",
		bodies: [
			{
				name: "Instituto Inkiri",
				role: "Brazilian nonprofit (statute 2011) and the intentional-community face founded by Angelina Ataíde."
			},
			{
				name: "Residential community",
				role: "The people who live here."
			},
			{
				name: "Legal entities",
				role: "Boards, trusts, or companies that hold land and the public face."
			}
		],
		howItRuns: "GEN and CASA Latina treat Piracanga as a reference site. Several bodies on one beach. Instituto Inkiri, a Brazilian nonprofit (statute 2011), is the intentional-community face founded by Angelina Ataíde. Unah is a retreat enterprise employing local people. Private houses sit among them. Living here can mean Inkiri membership, a job, or a private dwelling, three doors, not one."
	},
	"aldeafeliz": {
		model: "sociocracy",
		modelLabel: "Sociocracy",
		unique: false,
		summary: "Sociocracy since 2013, plus association membership. A convivencia manual by consent. Volunteers and visitors are not members. GEN: not open to new members at last listing.",
		whoDecides: "Sociocracy since 2013, plus association membership.",
		bodies: [
			{
				name: "Resident families (sociocracy)",
				role: "About ten families. Sociocracy since 2013, they say the first self-governed Colombian community to adopt it."
			},
			{
				name: "Asociación Aldeafeliz",
				role: "Colombian asociación sin ánimo de lucro created in 2009. Owns about 90% of the ecoaldea so the land outlasts the founders."
			},
			{
				name: "GEN / CASA Latina",
				role: "Network listing."
			}
		],
		howItRuns: "A convivencia manual by consent. Volunteers and visitors are not members. GEN: not open to new members at last listing. Asociación Aldeafeliz, a Colombian asociación sin ánimo de lucro created in 2009, owns about 90% of the ecoaldea so the land outlasts the founders. GEN currently lists the community as not open to new members."
	},
	"nashira": {
		model: "assembly",
		modelLabel: "Village assembly",
		unique: false,
		summary: "Women-led consensus and the eleven núcleos. Mothers run the economy, in their own words.",
		whoDecides: "Women-led consensus and the eleven núcleos.",
		bodies: [
			{
				name: "88 houses in the women’s names",
				role: "Houses are titled to the women heads of household, freehold of a dwelling earned by labour hours or Colombian cooperativa of shares. Title to a house is the point of the project."
			},
			{
				name: "Municipality of Palmira and Valle del Cauca department",
				role: "Public partners on the land purchase (130 million Colombian pesos, about USD 35,000) and later house finance. Partners, not the landlords of the titled houses."
			},
			{
				name: "Asociación / Fundación Nashira",
				role: "Organizing nonprofit led from the start by lawyer Ángela Cuevas Dolmetsch. Eleven productive núcleos (a coordinator and the women of that cluster) run the internal economy."
			}
		],
		howItRuns: "Mothers run the economy, in their own words. A women’s housing project on three hectares. Houses are in the women’s names, freehold of a dwelling or Colombian cooperativa of shares. Asociación / Fundación Nashira, led from the start by lawyer Ángela Cuevas Dolmetsch, is the organizing nonprofit. Eleven productive núcleos (a coordinator and the women of that cluster) run the internal economy. Title to a house is the point of the project, earned by labour hours."
	},
	"el-manzano": {
		model: "founder",
		modelLabel: "Founder-stewarded",
		unique: false,
		summary: "A family farm with a limited company and a nonprofit school. Apprentices are not members. No published path to buy in.",
		whoDecides: "A family farm with a limited company and a nonprofit school.",
		bodies: [
			{
				name: "El Manzano family farm",
				role: "120 hectares at Cabrero bought in 1930 by an English great-grandfather of co-founder Javiera Carrión. Family freehold."
			},
			{
				name: "ERES (with Gaia University)",
				role: "Nonprofit educational corporation co-founded in 2016 with Gaia University for regenerative learning in Latin America. Board-driven school."
			},
			{
				name: "Ecoescuela El Manzano Limitada",
				role: "Chilean limited company, the booking and school face. PDCs, apprenticeships, gardens."
			}
		],
		howItRuns: "Apprentices are not members. No published path to buy in. Family freehold plus two operating entities. The land is a family farm (bought 1930 by an English great-grandfather of co-founder Javiera Carrión). Ecoescuela El Manzano Limitada, a Chilean limited company, is the booking and school face. In 2016 El Manzano and Gaia University co-founded ERES, a nonprofit educational corporation, for regenerative learning in Latin America. You cannot buy a share of the 120 hectares."
	},
	"finca-sagrada": {
		model: "founder",
		modelLabel: "Founder-stewarded",
		unique: false,
		summary: "A small resident group plus an asociación that lends legal personality to grassroots projects. Visitors are not members. No published lot offer.",
		whoDecides: "A small resident group plus an asociación that lends legal personality to grassroots projects.",
		bodies: [
			{
				name: "Asociación Finca Sagrada",
				role: "Ecuadorian asociación with personería jurídica, the legal and organising anchor for regenerative work in the Vilcabamba valley."
			},
			{
				name: "Finca Sagrada biodynamic farm",
				role: "Private biodynamic holding of Walter and Susan Davis Moora: about 20 irrigated acres plus about 800 acres of mountain. Freehold plus association."
			},
			{
				name: "Ainachay",
				role: "A related four-hectare centre beside the finca. Associated project."
			}
		],
		howItRuns: "Visitors are not members. No published lot offer. Asociación Finca Sagrada, an Ecuadorian asociación with personería jurídica, is the legal and organising anchor for regenerative work in the Vilcabamba valley. The farm itself is a private biodynamic holding, freehold plus association. Ainachay, a four-hectare parcel beside the finca, is a related centre."
	},
	"sekem": {
		model: "hybrid",
		modelLabel: "Hybrid",
		unique: true,
		summary: "SEKEM is a biodynamic holding on reclaimed Belbeis desert of equal shares. SEKEM Holding (2001) administers the companies (ISIS Organic, ATOS Pharma, NatureTex, and the produce arms). Beside them sit the SEKEM Developmental Foundation, the Cooperative of SEKEM Employees, and Heliopolis University. Ibrahim Abouleish’s Islamic-inspired, anthroposophical development idea is the inner constitution.",
		whoDecides: "A holding board plus a foundation and an employee cooperative. Monthly farmer gatherings. This is a social enterprise with a cultural core.",
		bodies: [
			{
				name: "SEKEM Holding",
				role: "2001. Administers the companies. The commercial high table."
			},
			{
				name: "SEKEM Developmental Foundation",
				role: "The cultural and social-development face. Schools, clinics, and the original “impulse.”"
			},
			{
				name: "Cooperative of SEKEM Employees",
				role: "The workers’ organ. Real, and not the same as a residents’ co-op of land."
			},
			{
				name: "Heliopolis University for Sustainable Development",
				role: "The university as a fourth power. Students are not villagers."
			},
			{
				name: "Farmer network and monthly gatherings",
				role: "The rural constituency. SEKEM is a nucleus with contract farmers around it."
			}
		],
		howItRuns: "A question about cotton or tea: the relevant company. A question about a school or a clinic: the foundation. A question about wages and workers: the employee cooperative. A question about the idea of SEKEM: still the Abouleish impulse, now institutionalised in a university and a holding. Guests tour. They do not join a circle that owns the 70 hectares.",
		dive: {
			title: "Four organs, one impulse, no village meeting",
			lead: "SEKEM is often photographed as an oasis and described as an ecovillage. Internally it is closer to a group of companies, a foundation, an employee co-op, and a university sharing one founder’s idea. That four-organ diagram, commercial, cultural, labour, academic, is the unique government. There is no Residents’ Assembly hiding behind it.",
			organs: [
				{
					name: "Holding",
					what: "Where ISIS Organic and ATOS Pharma sit. Without it SEKEM is a charity farm. With only it, SEKEM is a brand."
				},
				{
					name: "Foundation",
					what: "Where the schools and the “human development” claim sit. Abouleish’s anthroposophy-plus-Islam is more at home here than on a balance sheet."
				},
				{
					name: "Employee cooperative",
					what: "The organ that keeps the word “community” from being only a marketing department."
				},
				{
					name: "Heliopolis University",
					what: "A 2012 fact that changed the diagram. A university has a board, a ministry, and students. It cannot be a nucleo."
				}
			],
			path: "A pesticide complaint in the farmer network: agricultural company plus foundation extension. A student who wants to live on campus: the university. A worker who wants a say: the cooperative, inside a holding that still has directors. A visitor from Demeter or from a sheikh: both doors exist, which is the point of the hybrid.",
			history: "Ibrahim Abouleish bought seventy hectares of desert at Belbeis in 1977 and named the work SEKEM (ancient Egyptian for “vitality from the sun”). Biodynamics, Islam, and European anthroposophy were braided on purpose. Companies followed the farm; the holding in 2001; the university later. The Right Livelihood Award (2003) fixed the public story. Abouleish died in 2017. The four organs are the succession plan.",
			tension: "Whether a holding and a university can still be a community once the founder is gone. How Islamic and anthroposophical languages share a board agenda in an Egypt that is not always gentle with either. Contract farmers who are in the story and not on the holding board. Unique because it is a full social-enterprise state in miniature, and it never agreed to be governed like a village."
		}
	},
	"wongsanit": {
		model: "spiritual",
		modelLabel: "Spiritual order",
		unique: false,
		summary: "Unanimous consensus on site; SNF as the foundation. Volunteers are evaluated over months. Quiet hours, no alcohol or indoor smoking, an ashram.",
		whoDecides: "Unanimous consensus on site; SNF as the foundation.",
		bodies: [
			{
				name: "Wongsanit Ashram community",
				role: "Engaged-Buddhist ashram living by unanimous consensus on foundation land. Membership is vocational."
			},
			{
				name: "Sathirakoses-Nagapradipa Foundation (SNF)",
				role: "Thai public-benefit foundation founded by Sulak Sivaraksa in 1968/69 (public charity no. 501)."
			},
			{
				name: "GENOA / Gaia Education EDE",
				role: "Wongsanit is a GENOA core member and has hosted Ecovillage Design Education since 2007. Network listing, not the title holder."
			}
		],
		howItRuns: "Volunteers are evaluated over months. Quiet hours, no alcohol or indoor smoking, an ashram. Land was donated in 1984 by M.R. Saisawatdee Svasti to the Sathirakoses-Nagapradipa Foundation (SNF), a Thai public-benefit foundation founded by Sulak Sivaraksa in 1968/69 (public charity no. 501). The ashram lives by consensus on foundation land. Membership is vocational and unanimous."
	},
	"ndem": {
		model: "cooperative",
		modelLabel: "Cooperative democracy",
		unique: false,
		summary: "Participatory NGO plus the artisan cooperative. Visitors are guests of a village, not hotel clients. Joining the core is not a plot purchase.",
		whoDecides: "Participatory NGO plus the artisan cooperative.",
		bodies: [
			{
				name: "ONG de Ndem (Association des Villageois de Ndem)",
				role: "Villagers’ association founded 1985; ONG since 2006. Organising nonprofit for gardens, water, school, and neighbouring villages."
			},
			{
				name: "Maam Samba",
				role: "Artisan cooperative and brand attached to the craft centre. Sold as far as Spain, Italy, and the US."
			},
			{
				name: "Neighbour-village GIEs",
				role: "Groupements in neighbouring villages in the same family. The NGO’s map is about twenty villages, not one farm title."
			}
		],
		howItRuns: "Visitors are guests of a village, not hotel clients. Joining the core is not a plot purchase. Association des Villageois de Ndem (1985), an ONG since 2006, is the organising nonprofit. Maam Samba is the artisan cooperative/brand attached to the craft centre. GIEs in neighbouring villages sit in the same family. The village is older than the NGO, Bayfall, Sahel."
	},
	"songhai": {
		model: "board",
		modelLabel: "Board and staff",
		unique: false,
		summary: "An NGO campus. Trainees become rural entrepreneurs and leave; staff run the farm. The founder’s institution is the legal face.",
		whoDecides: "An NGO campus.",
		bodies: [{
			name: "Centre Songhai",
			role: "Beninese non-governmental organisation (UN civil-society profile; B.P. 597 Porto-Novo)."
		}, {
			name: "United Nations Centre of Excellence for Agriculture",
			role: "UN designation in 2008. Recognition."
		}],
		howItRuns: "Trainees become rural entrepreneurs and leave; staff run the farm. The founder’s institution is the legal face. Centre Songhai is a Beninese NGO (UN civil-society profile: non-governmental organisation, B.P. 597 Porto-Novo). Land and the integrated farm sit with the centre, not with household lots."
	},
	"tlholego": {
		model: "board",
		modelLabel: "Board and staff",
		unique: false,
		summary: "A nonprofit board. Stays and courses are the public door. No published path to buy a piece of the 150 hectares.",
		whoDecides: "A nonprofit board.",
		bodies: [{
			name: "Rural Educational Development Corporation (Rucore)",
			role: "South African nonprofit founded in 1991. Paul Cohen is executive director."
		}, {
			name: "Tshedimosong School",
			role: "Early-years school for farm-worker children on the same land. A program of the village."
		}],
		howItRuns: "Stays and courses are the public door. No published path to buy a piece of the 150 hectares. Rural Educational Development Corporation (Rucore), a South African nonprofit founded in 1991, established the village as a living-and-learning site. Paul Cohen is executive director. You stay for a course or camp."
	},
	"lilleoru": {
		model: "board",
		modelLabel: "Board and staff",
		unique: false,
		summary: "A registered association with a board. Residents are a subset of members. Course students are not automatically members. No private sale of the 30 hectares.",
		whoDecides: "A registered association with a board.",
		bodies: [{
			name: "Lilleoru residential circle",
			role: "About 30 people live on site; MTÜ membership has been ~125–180, many of whom do not live there. Residents are a subset of members."
		}, {
			name: "Lilleoru MTÜ",
			role: "Estonian mittetulundusühing (registry 80143446) that owns and runs the 30 ha at Aruvalla. Land sits with the NGO, not with household lots."
		}],
		howItRuns: "Residents are a subset of members. Course students are not automatically members. No private sale of the 30 hectares. Lilleoru MTÜ (registry 80143446), an Estonian mittetulundusühing (a registered nonprofit association) owns and runs the place. Land sits with the NGO, not with household lots. You join the association."
	},
	"zmag": {
		model: "board",
		modelLabel: "Board and staff",
		unique: false,
		summary: "A Croatian association. Members decide; some live next door. Guests book a workshop.",
		whoDecides: "A Croatian association. Members decide; some live next door. Guests book a workshop.",
		bodies: [
			{
				name: "Recycled Estate",
				role: "The 1999 permaculture experiment (straw-bale, tires, a common garden) imagined as an ekoselo. Members’ houses sit on nearby village plots."
			},
			{
				name: "Nacionalna zaklada za razvoj civilnoga društva",
				role: "Croatian National Foundation support as a knowledge centre in sustainable living. Funder, not the landlord."
			},
			{
				name: "Zelena mreža aktivističkih grupa (ZMAG)",
				role: "Croatian udruga founded in 2002 (OIB 27906908289). The Recycled Estate is the association’s educational site at Vukomerić."
			}
		],
		howItRuns: "Members decide; some live next door. Guests book a workshop. Zelena mreža aktivističkih grupa (ZMAG), a Croatian udruga (association) founded in 2002 (OIB 27906908289). The Recycled Estate is the association’s educational site, imagined as an ekoselo. Members’ houses sit on nearby village plots."
	},
	"guneskoy": {
		model: "cooperative",
		modelLabel: "Cooperative democracy",
		unique: false,
		summary: "A cooperative of a handful of people. Volunteers and CSA members are not automatically co-op members. Small, academic, stubborn about the railway.",
		whoDecides: "A cooperative of a handful of people.",
		bodies: [
			{
				name: "Güneşköy Kooperatifi",
				role: "Turkey’s first ‘environmental cooperative’, founded in 2000 by eight people, most linked to Middle East Technical University. Non-profit-oriented."
			},
			{
				name: "General meeting of members",
				role: "One member, one vote. Shares are membership."
			},
			{
				name: "Elected board or working groups",
				role: "Operations between meetings."
			}
		],
		howItRuns: "Volunteers and CSA members are not automatically co-op members. Small, academic, stubborn about the railway. Güneşköy Kooperatifi, Turkey’s first ‘environmental cooperative’, founded in 2000 by eight people, most of them linked to Middle East Technical University. Non-profit-oriented. Land bought from the state in July 2002. You join the cooperative."
	},
	"kufunda": {
		model: "founder",
		modelLabel: "Founder-stewarded",
		unique: false,
		summary: "A practice community on family land. Programmes have a public door; residential membership is small and relational. No published lot offer.",
		whoDecides: "A practice community on family land.",
		bodies: [{
			name: "Knuth family farm, Ruwa",
			role: "Part of the founder’s mother’s family farm at Ruwa. Title stays with the family; the village lives on it."
		}, {
			name: "Kufunda Learning Village",
			role: "A Zimbabwean nonprofit practice community, youth and women’s programmes, a Waldorf-inspired school, biodynamic farming since 2019. Board and practice."
		}],
		howItRuns: "Programmes have a public door; residential membership is small and relational. No published lot offer. A learning village on part of the founder’s mother’s family farm at Ruwa. The village organisation is a Zimbabwean nonprofit practice community or community land trust. Title stays with the family farm; the village lives on it."
	},
	"glarisegg": {
		model: "hybrid",
		modelLabel: "Hybrid",
		unique: false,
		summary: "Circle culture inside the association; the AG as landlord of record. Visitors come for seminars and garden days. Joining is a long outer-circle / inner-circle path.",
		whoDecides: "Circle culture inside the association; the AG as landlord of record.",
		bodies: [
			{
				name: "Gemeinschaft Schloss Glarisegg",
				role: "Swiss Verein founded in 2009, the residential community. Circle culture; outer-circle / inner-circle path."
			},
			{
				name: "Liegenschaft Schloss Glarisegg AG",
				role: "Has owned the castle, park, forest, and lake shore since the October 2003 auction. A Swiss Aktiengesellschaft."
			},
			{
				name: "Seminar centre, school, and permaculture Vereine",
				role: "Other associations rent from the AG: seminar centre, school and forest kindergarten, permaculture. The castle earns its keep as a venue."
			}
		],
		howItRuns: "Visitors come for seminars and garden days. Joining is a long outer-circle / inner-circle path. Liegenschaft Schloss Glarisegg AG has owned the property since the October 2003 auction. Gemeinschaft Schloss Glarisegg, a Swiss association founded in 2009, is the residential community. Other Vereine (seminar centre, school, permaculture) rent from the AG. Shares in the AG are the land path, a Swiss company. IC.org has listed a joining fee on the order of $5,450 and a trial of a year or more."
	},
	"los-horcones": {
		model: "planner-manager",
		modelLabel: "Planner-manager",
		unique: false,
		summary: "A planner-manager experimental cooperativa in the Walden Two lineage: members design experiments, measure results, and may write successful behaviors into a community code. No private title. Open to new members in principle; growth has been slow and family-centered. Visitors come in the cool season, weekdays preferred. Contact is the village and the autism programme.",
		whoDecides: "A planner-manager experimental cooperativa in the Walden Two lineage: members design experiments, measure results, and may write successful behaviors into a community code.",
		bodies: [
			{
				name: "Comunidad de los Horcones, Sociedad Cooperativa de Producción",
				role: "Holds the ~100 ha Sonoran desert parcel, houses, farm, and enterprises in common. Walden Two experimental village."
			},
			{
				name: "Centro para Niños con Déficit Conductual / autism programme",
				role: "The 1971 Hermosillo precursor and the on-site special-education programme. A cash engine and the founding reason."
			},
			{
				name: "Asociación Internacional Walden Two",
				role: "Founded 1980 as a Walden Two network. Associated history, not the Sonora landowner."
			}
		],
		howItRuns: "No private title. Open to new members in principle; growth has been slow and family-centered. Visitors come in the cool season, weekdays preferred. Contact is the village and the autism programme. Comunidad de los Horcones, organized as a Sonoran Sociedad Cooperativa de Producción in November 1977. The village began in October 1973 on a smaller parcel outside Hermosillo and moved to the present ~100-hectare desert tract in October 1981. Land, houses, and enterprises are held by the cooperative, not individual title. Members live the Walden Two experiment."
	},
	"tosepan": {
		model: "federation",
		modelLabel: "Federation",
		unique: false,
		summary: "A federation of cooperatives, each administratively autonomous, with a Nahuatl-and-Totonac membership democracy. Yeknemilis A.C. trains; Fundación Tosepan takes donations. You join by being a socio in a member community (coffee, pepper, savings, school) not by buying a sierra lot on a portal.",
		whoDecides: "A federation of cooperatives, each administratively autonomous, with a Nahuatl-and-Totonac membership democracy.",
		bodies: [
			{
				name: "Unión de Cooperativas Tosepan Titataniske",
				role: "The 2007 federation that binds about nine cooperatives while each keeps its own books. Mexico’s largest indigenous cooperative movement."
			},
			{
				name: "Yeknemilis A.C. and Fundación Tosepan A.C.",
				role: "Technical assistance and the donation-receiving foundation. Associated education and charity layer, not house-lot landlords."
			},
			{
				name: "Tosepan Kalnemachtiloyan (school) and Kaltaixpetaniloyan (training centre)",
				role: "Bilingual preschool through secondary plus music, and the 2003 training house."
			},
			{
				name: "Sociedad Cooperativa Agropecuaria Regional Tosepan Titataniske",
				role: "The 1980 agricultural cooperative (coffee, pepper, milpa, nursery) that the later union grew from."
			}
		],
		howItRuns: "Yeknemilis A.C. trains; Fundación Tosepan takes donations. You join by being a socio in a member community (coffee, pepper, savings, school) not by buying a sierra lot on a portal. Mexico’s oldest indigenous cooperative movement: Sociedad Cooperativa Agropecuaria Regional Tosepan Titataniske (Nahuatl: “united we will overcome”), formalized in 1980 after a 1977 sugar-and-pepper organizing drive, then the Unión de Cooperativas Tosepan (2007) holding about nine cooperatives and several asociaciones civiles (Yeknemilis, Fundación Tosepan). Tosepantomin is the savings-and-credit cooperative. Tosepan Kali (2004) is the ecotourism cooperative. Members live in their own villages."
	},
	"teopantli-kalpulli": {
		model: "spiritual",
		modelLabel: "Spiritual order",
		unique: false,
		summary: "A small spiritual-and-family kalpulli. Decisions sit with the families who live there. Visitors come for ceremonies, festivals, and councils by arrangement, not by buying in.",
		whoDecides: "A small spiritual-and-family kalpulli.",
		bodies: [
			{
				name: "Internal family parcels (~55 of ~500 m²)",
				role: "Residential lots inside the A.C. tract, a cohousing-style split."
			},
			{
				name: "Ananda Marga ashram (founding form)",
				role: "The 1983 spiritual origin. The village later lived as a Mexica kalpulli."
			},
			{
				name: "Teopantli Kalpulli A.C.",
				role: "The civil-association wrapper of the Jalisco kalpulli. About 37 ha at San Isidro Mazatepec, internally parceled for families, with farm and reserve held in common."
			},
			{
				name: "Consejo de Visiones – Guardianes de la Tierra",
				role: "The 14th Vision Council (Llamado de la Salvia, November 2015) met here. CASA Latina traces a seed to that week."
			}
		],
		howItRuns: "Decisions sit with the families who live there. Visitors come for ceremonies, festivals, and councils by arrangement, not by buying in. Teopantli Kalpulli A.C. Founded 7 March 1983 as an Ananda Marga ashram outside Guadalajara, later living as a Mexican kalpulli (Nahuatl for a clan/community) of about 22 families at San Isidro Mazatepec. About 37 hectares, of which roughly 7 have been internally parceled (~55 lots of ~500 m²) with the rest farm and reserve. A cultural and spiritual membership community on private land. Hosted the 14th Consejo de Visiones – Guardianes de la Tierra (“Llamado de la Salvia”) in November 2015."
	},
	"litibu": {
		model: "hoa",
		modelLabel: "Homeowners / body corporate",
		unique: false,
		summary: "Community agreements among casa households. Joining is an application, a nonrefundable fee, a required visit, mentorship, an associate period, dues, and work. Houses are mostly private; you do not automatically buy the forest. Confirm availability with the village, this is not an open beach subdivision.",
		whoDecides: "Community agreements among casa households.",
		bodies: [
			{
				name: "Eight eco-casa households",
				role: "Privately managed houses bound by community agreements, dues, and labour. Membership is not automatic with a casa key."
			},
			{
				name: "Litibú EcoVillage fideicomiso and LLC",
				role: "Coastal restricted-zone structure: a bank trust holds title; an LLC is the collective beneficiary. Eight eco casas sit inside that wrapper."
			},
			{
				name: "FONATUR Litibú master plan (adjacent)",
				role: "The government-sponsored resort, golf, and condo plan on the same coastline. Associated geography, not the eight-casa village."
			}
		],
		howItRuns: "Joining is an application, a nonrefundable fee, a required visit, mentorship, an associate period, dues, and work. Houses are mostly private; you do not automatically buy the forest. Confirm availability with the village, this is not an open beach subdivision. Eight privately managed eco casas on a small beach-forest parcel at Playa Litibú. Because the site sits in Mexico’s coastal restricted zone, foreign beneficial ownership typically runs through a bank fideicomiso and an LLC rather than direct title. Most houses are privately held inside that wrapper; membership is a separate path (application, fee, visit, associate period, dues, work)."
	},
	"u-yits-kaan": {
		model: "board",
		modelLabel: "Board and staff",
		unique: false,
		summary: "A pastoral-and-campesino school with promotores in parishes across southern and eastern Yucatán. Visitors book a school-day tour. There is no membership share and no house title. Joining means becoming a farming family in the network, or a volunteer at the internado, not buying in.",
		whoDecides: "A pastoral-and-campesino school with promotores in parishes across southern and eastern Yucatán.",
		bodies: [
			{
				name: "Pastoral de la Tierra / founding priests",
				role: "Liberation-theology priests (Atilano Ceballos Loeza and others) bought the land and founded the internado. Historical church link; the school later became an independent A.C."
			},
			{
				name: "Maní internado land (~15 ha)",
				role: "Terrain purchased by the founding priests for the school."
			},
			{
				name: "Escuela de Agricultura Ecológica U Yits Ka'an A.C.",
				role: "The campesino school and ~15 ha internado at Maní. Founded by Pastoral de la Tierra priests; independent A.C."
			}
		],
		howItRuns: "Visitors book a school-day tour. There is no membership share and no house title. Joining means becoming a farming family in the network, or a volunteer at the internado, not buying in. Escuela de Agricultura Ecológica U Yits Ka'an A.C. (“the dew that falls from the sky” in Yucatec Maya), founded 11 January 1996 by diocesan priests of the Pastoral de la Tierra. About 15 hectares were purchased for the internado at Maní. MISEREOR financed the founding; after that grant ended (2005) and a 2008 rupture with the hierarchy, the school constituted itself as an independent asociación civil. SEMARNAT’s Premio Nacional al Mérito Ecológico in 2014."
	},
	"tierra-del-sol": {
		model: "founder",
		modelLabel: "Founder-stewarded",
		unique: false,
		summary: "A founder-led teaching farm, self-managed, with apprentices and volunteers on a private title. Visitors book. There is no co-op share and no published membership. Harder than a course fee, much harder than an Oaxaca vacation rental.",
		whoDecides: "A founder-led teaching farm, self-managed, with apprentices and volunteers on a private title.",
		bodies: [{
			name: "Villa Agroecológica Tierra del Sol",
			role: "Four hectares at Paraje Langueche, Tlacochahuaya, held as a private regenerative farm and teaching villa."
		}, {
			name: "Instituto de Permacultura / teaching programmes",
			role: "Guided visits, apprenticeships, immersives, and workshops. The earned-income face."
		}],
		howItRuns: "Visitors book. There is no co-op share and no published membership. Harder than a course fee, much harder than an Oaxaca vacation rental. A privately held regenerative farm and teaching villa founded by Pablo Ruiz Lavalle, a former Mexico City pilot who bought about two hectares in 2001 and grew the place to four or five. Run as a self-managed agroecological centre. Courses, guided visits, apprenticeships, and stays sit on family-scale title. You learn dry-tropics regeneration."
	},
	"bosque-village": {
		model: "founder",
		modelLabel: "Founder-stewarded",
		unique: false,
		summary: "A founder-led nonprofit. Potential residents intern or participate first. GEN has listed the village as open to new members who can support themselves, retirees, digital nomads, people starting small businesses on site.",
		whoDecides: "A founder-led nonprofit.",
		bodies: [{
			name: "Bosque Village land (Brian Fey)",
			role: "Eighty-three acres of pine, oak, and madrone near Yotatiro held in a founder’s name (or family trust). A 2016 nonprofit was intended to take staged control; the named A.C."
		}, {
			name: "Bosque Village project / registered nonprofit intent",
			role: "The educational and retreat project. Interns and visitors are not lot owners."
		}],
		howItRuns: "Potential residents intern or participate first. GEN has listed the village as open to new members who can support themselves, retirees, digital nomads, people starting small businesses on site. A registered Mexican nonprofit running an off-grid permaculture farm and retreat in the Michoacán highlands. Founded in 2004 by Brian Fey. Land is held for the project rather than as subdivided lots. Interns and visitors come first; residents are people who can support themselves."
	},
	"via-organica": {
		model: "board",
		modelLabel: "Board and staff",
		unique: false,
		summary: "A Mexican asociación civil with a ranch, a store, and a restaurant. The board of the A.C. is the legal face. Visitors book tours. There is no residential membership share. Interns and students come and go. Joining means a job, a course, or a donation.",
		whoDecides: "A Mexican asociación civil with a ranch, a store, and a restaurant.",
		bodies: [
			{
				name: "Vía Regenerativa y Orgánica A.C.",
				role: "Mexican nonprofit holding the 80 ha Jalpa-valley demonstration ranch and running the farm school. Rosana Álvarez Martínez."
			},
			{
				name: "Vía Orgánica restaurant, tienda, and farmers market",
				role: "Town and ranch food businesses that sell what the 80 ha grows. Trading arms."
			},
			{
				name: "Organic Consumers Association / Regeneration International",
				role: "U.S. partners (Ronnie Cummins, Rose Welch; Billion Agave; Ecosystem Restoration Communities)."
			}
		],
		howItRuns: "The board of the A.C. is the legal face. Visitors book tours. There is no residential membership share. Interns and students come and go. Joining means a job, a course, or a donation. Vía Regenerativa y Orgánica, Asociación Civil, a Mexican nonprofit (Rosana Álvarez Martínez) whose mission is organic agriculture, fair trade, and public nutrition. The 80-hectare Jalpa-valley ranch is the demonstration school (from 2012–13); a store and restaurant opened in San Miguel de Allende in 2009. A project in partnership with the U.S. Organic Consumers Association and Regeneration International. You tour and train here."
	},
	"crisalium": {
		model: "consensus",
		modelLabel: "Consensus",
		unique: false,
		summary: "Consensus among resident families inside an asociación civil. GEN: open to visitors, not currently open to new members. Courses are the public door.",
		whoDecides: "Consensus among resident families inside an asociación civil.",
		bodies: [
			{
				name: "Crisalium, educación, naturaleza y transición A.C.",
				role: "The 2012 civil association of families inhabiting five hectares inside Parque Natural El Encuentro. Consensus."
			},
			{
				name: "Five hectares inside Parque Natural El Encuentro",
				role: "Forest inhabited by the ecoaldea, nested in a ~143 ha private park (from 2002). The park-owning persons and the A.C."
			},
			{
				name: "Servidumbre ecológica (2020)",
				role: "Notarial ecological easement zoning conservation, restoration, recreation, and limited building on georeferenced polygons. A covenant on the land."
			}
		],
		howItRuns: "GEN: open to visitors, not currently open to new members. Courses are the public door. Crisalium, educación, naturaleza y transición A.C. Families inhabit and steward five hectares of forest inside Parque Natural El Encuentro (~143 ha, private park from 2002) near San Cristóbal de las Casas. A 2020 notarial servidumbre ecológica (ecological easement) zones conservation, restoration, and limited building. Consensus among resident families. GEN lists the village as open to visitors."
	},
	"inla-kesh": {
		model: "spiritual",
		modelLabel: "Spiritual order",
		unique: false,
		summary: "A small residential circle on private highland land. Courses have a public door; membership is relational and currently tiny. Contact the community about an EDE or a stay; do not treat Chichihuistán as a listing.",
		whoDecides: "A small residential circle on private highland land.",
		bodies: [
			{
				name: "Inla Kesh / Biotopo de Sanación",
				role: "A Tamera-inspired healing biotope on about two hectares at Chichihuistán, Teopisca municipality. Small residential circle."
			},
			{
				name: "Chichihuistán highland parcel (~2 ha)",
				role: "The land the circle has lived on since 2012. Teaching (EDE) sits on it; guests do not buy an Altos lot."
			},
			{
				name: "Gaia Education EDE / Tamera lineage",
				role: "Month-long Ecovillage Design Education and healing-biotope practice. Associated pedagogy."
			}
		],
		howItRuns: "Courses have a public door; membership is relational and currently tiny. Contact the community about an EDE or a stay; do not treat Chichihuistán as a listing. A Tamera-inspired healing biotope (biotopo de sanación) on about two hectares at Chichihuistán in the Chiapas highlands. A small intentional community and EDE (Ecovillage Design Education) host in coordination with Gaia Education. Private community land under a residential circle. In Lak'ech: “I am another you.” You take an EDE."
	},
	"vicente-guerrero": {
		model: "assembly",
		modelLabel: "Village assembly",
		unique: false,
		summary: "An asociación civil of community promoters (Gabriel Sánchez, Teodoro Juárez, Delfino Sánchez, and Roque Sánchez in the founding layer) teaching family to family. Assemblies and fairs. You join by farming and promoting in a member village.",
		whoDecides: "An asociación civil of community promoters (Gabriel Sánchez, Teodoro Juárez, Delfino Sánchez, and Roque Sánchez in the founding layer) teaching family to family.",
		bodies: [
			{
				name: "Proyecto de Desarrollo Rural Integral Vicente Guerrero A.C.",
				role: "The 1997 civil association of campesino promoters from Vicente Guerrero, Españita. Trains, holds maize fairs, and channels project grants."
			},
			{
				name: "Comité de Servicio de los Amigos / SEDEPAC (founding path)",
				role: "1973 Quaker-linked village committee; 1980–88 work inside SEDEPAC. Historical shells, not today’s A.C."
			},
			{
				name: "Member milpas (pequeña propiedad and village plots)",
				role: "Families farm their own dirt in Españita and neighbouring municipalities. The A.C."
			},
			{
				name: "Katoque Ketzal / campesino-a-campesino exchange",
				role: "Guatemalan soil-and-water school whose promoters stayed in Vicente Guerrero 1979–84. Associated pedagogy."
			}
		],
		howItRuns: "Assemblies and fairs. You join by farming and promoting in a member village. Proyecto de Desarrollo Rural Integral Vicente Guerrero A.C., formalized in December 1997 by promoters from the village of Vicente Guerrero, Españita. The work is older: a 1973 Comité de Servicio de los Amigos (Quaker-linked) for roads and drinking water, agroecological training from 1976, and a campesino-a-campesino exchange with Guatemala’s Katoque Ketzal from 1978. Members farm their own plots. You become a promoter in a village."
	},
	"nanciyaga": {
		model: "founder",
		modelLabel: "Founder-stewarded",
		unique: false,
		summary: "A family reserve with a biologist-director. Staff and guides. Book a cabin.",
		whoDecides: "A family reserve with a biologist-director.",
		bodies: [
			{
				name: "Reserva Ecológica Nanciyaga (Rodríguez family title)",
				role: "About 14 ha on Laguna Catemaco, bought at auction when Carlos Rodríguez Mouriño was thirteen. Family reserve."
			},
			{
				name: "Reserva de la Biósfera Los Tuxtlas",
				role: "1998 biosphere wrapping the region. A designation on the geography, not the owner of the 14 ha."
			},
			{
				name: "Nanciyaga eco-tourism operation",
				role: "Cabins, restaurant, walks, temazcal, film location. The cash engine."
			}
		],
		howItRuns: "Staff and guides. Book a cabin. A privately held ecological reserve on the Catemaco shore, inside the Los Tuxtlas biosphere. Carlos Rodríguez Mouriño’s father bought deforested land at auction when Carlos was thirteen; the family became guardians rather than subdividers. Carlos, a biologist, now directs. About fourteen hectares, of which two are the tourist face. You take a cabin, a limpia, or a jungle walk."
	},
	"pueblo-sacbe": {
		model: "hoa",
		modelLabel: "Homeowners / body corporate",
		unique: false,
		summary: "Resident bylaws and a village of lot owners. Decisions sit with people who hold parcels, not with a common-purse circle. Joining means buying or renting a house or lot that comes with the covenants. Confirm the fideicomiso and the bylaws before you treat a portal listing as membership.",
		whoDecides: "Resident bylaws and a village of lot owners.",
		bodies: [
			{
				name: "Pueblo Sacbé lot holders",
				role: "About 54 ha of jungle west of Playa del Carmen, held as private parcels (foreigners typically via fideicomiso in the coastal zone). A covenanted freehold village."
			},
			{
				name: "Bank fideicomiso (foreign holders)",
				role: "Coastal restricted-zone structure for non-Mexican beneficial owners. Associated title path, not the village corporation."
			},
			{
				name: "Sacbé village bylaws (no grid, biodigesters, jungle and water)",
				role: "Resident covenants that run with the lots: off-grid power, biodigesters, jungle conservation. A private code."
			}
		],
		howItRuns: "Decisions sit with people who hold parcels, not with a common-purse circle. Joining means buying or renting a house or lot that comes with the covenants. Confirm the fideicomiso and the bylaws before you treat a portal listing as membership. A private off-grid jungle settlement of about 54 hectares west of Playa del Carmen. Bylaws (as published by residents) forbid connecting to the electrical grid, require biodigesters, and treat the jungle and the water system as the thing to conserve. Houses are privately held (typically pequeña propiedad, with foreigners often in a bank fideicomiso in the coastal zone) and lots are listed on ordinary Riviera Maya portals. A covenanted freehold village that still sells lots, with better jungle rules than the condos on Fifth Avenue."
	},
	"ixixtlan": {
		model: "founder",
		modelLabel: "Founder-stewarded",
		unique: false,
		summary: "A founder-led family and retreat circle. GEN: open to visitors and new members. Courses have a public door; living there is relational.",
		whoDecides: "A founder-led family and retreat circle.",
		bodies: [
			{
				name: "Ecoaldea Ixixtlán SanArte",
				role: "Founder-led hill sanctuary at Atlixco. Beleni Kumara Inti."
			},
			{
				name: "Atlixco hill parcel (sacred-geometry cabins)",
				role: "The hill facing Popocatépetl and Iztaccíhuatl. Retreats sit on it; guests do not buy an Atlixco lot."
			},
			{
				name: "Retreat and recreational-education programmes",
				role: "Workshops, camps, PeregrinArte, ceremonies. The public cash."
			}
		],
		howItRuns: "GEN: open to visitors and new members. Courses have a public door; living there is relational. Ecoaldea Ixixtlán SanArte, a founder-led spiritual-and-retreat community on a hill at Atlixco, Puebla, facing the two volcanoes. Beleni Kumara Inti (Beleni DuArte Kumara Inti Alonso) founded it. Named Mexican moral person not in public sources reviewed; GEN lists it as an ecovillage open to visitors and new members. Private community land. You take a retreat."
	},
	"huerto-roma-verde": {
		model: "board",
		modelLabel: "Board and staff",
		unique: false,
		summary: "A neighbourhood A.C. and volunteer circle on a city lot. Open hours (historically Tuesday–Saturday). There is no residential membership and no title to sell. You join by showing up with compost, a stall, or a shift.",
		whoDecides: "A neighbourhood A.C. and volunteer circle on a city lot. Open hours (historically Tuesday–Saturday). There is no residential membership and no title to sell. You join by showing up with compost, a stall, or a shift.",
		bodies: [{
			name: "La Cuadra A.C. / Huerto Roma Verde",
			role: "The neighbourhood civil association that, with volunteers, cleared Jalapa 234 in 2012 and still runs the urban permaculture lab."
		}, {
			name: "Jalapa 234 lot (former Multifamiliar Juárez rubble)",
			role: "A city lot left empty for 27 years after the 1985 earthquake. The huerto occupies it."
		}],
		howItRuns: "A neighbourhood A.C. and volunteer circle on a city lot. Open hours (historically Tuesday–Saturday). There is no residential membership and no title to sell. You join by showing up with compost, a stall, or a shift. An urban biosocial laboratory run with La Cuadra A.C. and neighbours on a lot left empty for 27 years after the 1985 earthquake brought down buildings of the Multifamiliar Juárez. A Mexican nonprofit community space. You compost, market, and organize here."
	},
	"rancho-la-salud": {
		model: "hoa",
		modelLabel: "Homeowners / body corporate",
		unique: false,
		summary: "Condominio bylaws plus cohousing practice. Annual budget meeting as required by Jalisco law; monthly modified-consensus business meetings the rest of the year. ‘Somos comunidad.’ Joining is a purchase plus a visit. Easier than a closed covenant, more neighbour than a gated Ajijic condo.",
		whoDecides: "Condominio bylaws plus cohousing practice.",
		bodies: [
			{
				name: "Cohousing common house, palapa, and pool",
				role: "3,000 sq ft common house, palapa, salt-water lap pool, garden. Commons of the condominio."
			},
			{
				name: "Rancho La Salud Village condominio (Jalisco)",
				role: "Mexico’s first cohousing, on paper a Jalisco condominio. Each home is deeded; a percentage of ownership includes common ground."
			},
			{
				name: "Jaime Navarro founding parcel (~3½ acres)",
				role: "The lakeshore dirt the condominio sits on. Founding member’s holding."
			}
		],
		howItRuns: "Annual budget meeting as required by Jalisco law; monthly modified-consensus business meetings the rest of the year. ‘Somos comunidad.’ Joining is a purchase plus a visit. Easier than a closed covenant, more neighbour than a gated Ajijic condo. A Jalisco condominio, Mexico’s first cohousing community, on paper. Each home is deeded (and can pass to beneficiaries); a percentage of ownership includes the common ground. Founding member Jaime Navarro holds the 3½-acre parcel the village sits on. Official bylaws require an annual budget meeting; monthly business meetings run by modified consensus in the cohousing style. You buy a Garden Home, Villa, or Townhome; you do not join a common purse."
	},
	"tamarindos": {
		model: "hoa",
		modelLabel: "Homeowners / body corporate",
		unique: false,
		summary: "A founder-led ecoaldea that sells lots and hosts visitors. Contact 271 140 7788 / ecoaldeatamarindos.com.mx. Confirm what a lot actually includes (access, services, the river) before you treat a 500 m² listing as a commons share.",
		whoDecides: "A founder-led ecoaldea that sells lots and hosts visitors.",
		bodies: [{
			name: "EcoAldea Tamarindos lots (Mata de Agua)",
			role: "Selva baja caducifolia on the Río Jamapa. Lots from 500 m² offered on the village site."
		}, {
			name: "Tamarindos cabins, EcoClub, and hospitality",
			role: "Cabins, restaurant, temazcal, zip-line, camping, observatory, courses. The tourism face."
		}],
		howItRuns: "Contact 271 140 7788 / ecoaldeatamarindos.com.mx. Confirm what a lot actually includes (access, services, the river) before you treat a 500 m² listing as a commons share. A Veracruz intentional community and eco-tourism site on the Jamapa at Mata de Agua, Camarón de Tejeda. Lots from 500 m² are offered for sale on the village’s own site, pequeña propiedad. Cabins, a restaurant, temazcal, zip-line, camping, an observatory, and an EcoClub sit on the same land. A lot-sales ecoaldea with a demonstration and hospitality face. You can buy a lot; you can also just take a cabin."
	},
	"hapori": {
		model: "hoa",
		modelLabel: "Homeowners / body corporate",
		unique: false,
		summary: "A co-created neighbourhood of lot holders. Visit (info@hapori.com.mx), then a purchase if values match. Easier than a closed covenant, more infrastructure than a raw parcela. Confirm the Águila Real covenants and the Hapori ones, two layers, one hill.",
		whoDecides: "A co-created neighbourhood of lot holders.",
		bodies: [
			{
				name: "Hapori common house, palapa, biopool, temazcal",
				role: "Shared infrastructure of the neighbourhood. A casa key is a lot purchase, not automatic membership of a commons purse."
			},
			{
				name: "Hapori Eco Aldea lots (Águila Real)",
				role: "More than eight hectares of former pasture at km 13.5 of the SMA–Guanajuato libramiento, inside Fraccionamiento Águila Real. Custom eco-homes, independently off-grid."
			},
			{
				name: "Fraccionamiento Águila Real (enclosing eco-residencial)",
				role: "The gated eco-residencial Hapori sits inside. Associated geography and covenants, not the Hapori houses themselves."
			}
		],
		howItRuns: "Visit (info@hapori.com.mx), then a purchase if values match. Easier than a closed covenant, more infrastructure than a raw parcela. Confirm the Águila Real covenants and the Hapori ones, two layers, one hill. A co-created ecological neighbourhood of more than eight hectares inside the Águila Real eco-residencial, twenty minutes from San Miguel de Allende. Founders Mike (Aotearoa/New Zealand) and Pau (Mexico) met in 2010, moved to Mexico in 2018, and named the project Hapori, Māori for community. Lots and custom eco-homes are sold; each house is independently off-grid solar with batteries. A regenerative lot-sales village that actually means the off-grid part. You buy a homesite; you do not join a common purse."
	},
	"sekkan": {
		model: "consensus",
		modelLabel: "Consensus",
		unique: false,
		summary: "Founding families meeting weekly. Path: informal conversation, vision/mission/values and minutes, a tour, a letter, a group decision on philosophical fit and emotional maturity, then meetings. Open to visitors (lunch; 1–2 nights by arrangement; donation for the farm).",
		whoDecides: "Founding families meeting weekly.",
		bodies: [
			{
				name: "Six founding families",
				role: "Weekly meetings, letter-of-intent membership, independent finances, ~$300 fees, two hours a week. The residential circle."
			},
			{
				name: "Rancho Ecológico Sekkan LLC / tenancy in common",
				role: "IC.org: 38 acres of former Rancho Lacayo held by several individuals through an LLC or a TIC. Six founding families."
			},
			{
				name: "Biodynamic farm (visitor door)",
				role: "The public face for guests. Donation requested."
			}
		],
		howItRuns: "Path: informal conversation, vision/mission/values and minutes, a tour, a letter, a group decision on philosophical fit and emotional maturity, then meetings. Open to visitors (lunch; 1–2 nights by arrangement; donation for the farm). Thirty-eight acres near San Miguel de Allende held by several individuals through an LLC or a tenancy-in-common (IC.org’s wording) on the former Rancho Lacayo. Six founding families closed the purchase at the end of 2022 and registered the name Rancho Ecológico Sekkan. Members keep independent finances, pay about $300 in fees, and owe two hours a week. You write a letter."
	},
	"nuevo-san-juan": {
		model: "indigenous-assembly",
		modelLabel: "Indigenous assembly",
		unique: false,
		summary: "Asamblea every first Sunday of the month. A concejo of comuneros, former municipal presidents, former managers, and former communal authorities meets first. Autoridades comunales (Presidente del Comisariado (with secretary and treasurer) and Presidente de Vigilancia) sit three years. You join by being a comunero.",
		whoDecides: "Asamblea every first Sunday of the month.",
		bodies: [
			{
				name: "Comisariado and asamblea de comuneros",
				role: "Monthly first-Sunday asamblea; autoridades comunales on three-year terms. The governance of the 1,282 comuneros."
			},
			{
				name: "Comunidad Indígena de Nuevo San Juan Parangaricutiro (bienes comunales)",
				role: "Presidential resolution of 25 November 1991 titled 18,138.32 ha as terrenos comunales (inalienable, imprescriptible, unseizable) to 1,229 comuneros. Purépecha comunidad indígena with personalidad jurídica."
			},
			{
				name: "Community forestry enterprise",
				role: "Sawmill, furniture, resin, water, and more than twenty production lines on about 6,443 ha of pine-oak. FSC 1999."
			}
		],
		howItRuns: "A concejo of comuneros, former municipal presidents, former managers, and former communal authorities meets first. Autoridades comunales (Presidente del Comisariado (with secretary and treasurer) and Presidente de Vigilancia) sit three years. You join by being a comunero. A Purépecha comunidad indígena with personalidad jurídica. Presidential resolution of 25 November 1991 titled 18,138.32 hectares as terrenos comunales (inalienable, imprescriptible, and unseizable) to 1,229 comuneros. The community forestry enterprise dates to 1982–83 (Equator Initiative: founded 1982). You are born a comunero, or the asamblea says so."
	},
	"cedicam": {
		model: "assembly",
		modelLabel: "Village assembly",
		unique: false,
		summary: "A democratic Mixtec farmer organisation. Assemblies of promoters. You join by farming and ditching in a member village.",
		whoDecides: "A democratic Mixtec farmer organisation.",
		bodies: [
			{
				name: "Member families’ milpas and contour ditches",
				role: "Families farm their own Mixteca Alta plots. CEDICAM is the school, not the landlord of every hillside."
			},
			{
				name: "Centro de Desarrollo Integral Campesino de la Mixteca (CEDICAM)",
				role: "Mixtec campesino-to-campesino organisation co-founded 1983 by Jesús León Santos and neighbours. Training, nurseries, contour ditches."
			},
			{
				name: "Goldman Environmental Prize (Jesús León Santos)",
				role: "2008 North America prize, US$150,000. Associated recognition and money, not the title holder."
			}
		],
		howItRuns: "Assemblies of promoters. You join by farming and ditching in a member village. Centro de Desarrollo Integral Campesino de la Mixteca (CEDICAM), a Mixtec farmer organisation that Jesús León Santos and neighbours built in 1983 as a democratic campesino network. Families farm their own plots. You become a promoter in a Mixtec village."
	},
	"sierra-gorda": {
		model: "board",
		modelLabel: "Board and staff",
		unique: false,
		summary: "An institución de asistencia privada with a public-benefit board. Communities inside the reserve keep their own titles, pequeña propiedad, ejido, comunidad. The IAP is the alliance. Visit the missions and the waterfalls.",
		whoDecides: "An institución de asistencia privada with a public-benefit board.",
		bodies: [
			{
				name: "Communities inside the reserve",
				role: "Pequeña propiedad, ejido, and comunidad titles stay with the people who live in the sierra. The IAP is the alliance, not their landlord."
			},
			{
				name: "Reserva de la Biosfera Sierra Gorda",
				role: "383,567 ha gazetted in the Diario Oficial on 19 May 1997, with eleven core zones. A CONANP designation on the mountains, not the IAP’s ranch."
			},
			{
				name: "Grupo Ecológico Sierra Gorda I.A.P.",
				role: "Citizen public-benefit institution co-founded 5 December 1987 by Pati Ruiz Corzo, Roberto Pedraza Muñoz, and Jalpan neighbours. Education, carbon, trails."
			}
		],
		howItRuns: "Communities inside the reserve keep their own titles, pequeña propiedad, ejido, comunidad. The IAP is the alliance. Visit the missions and the waterfalls. Grupo Ecológico Sierra Gorda I.A.P., a Mexican institución de asistencia privada co-founded 5 December 1987 by Martha Isabel “Pati” Ruiz Corzo, Roberto Pedraza Muñoz, and Jalpan neighbours. The Reserva de la Biosfera Sierra Gorda (383,567 ha, Diario Oficial 19 May 1997) is a CONANP designation on the mountains, not the IAP’s ranch. You join the alliance or take a trail."
	},
	"la-ventanilla": {
		model: "cooperative",
		modelLabel: "Cooperative democracy",
		unique: false,
		summary: "A sociedad cooperativa of resident families. Revenue from tourism is the weekday. You are born into the village or you marry in. Visitors buy a paddle. Confirm which cooperative is taking you out, Ventanilla or Lagarto Real.",
		whoDecides: "A sociedad cooperativa of resident families.",
		bodies: [
			{
				name: "Servicios Ecoturísticos de La Ventanilla, S.C. de R.L. de C.V.",
				role: "About 25 Zapotec families on the Tonameca lagoon. Canoe tours, nurseries."
			},
			{
				name: "Uma Island nurseries (mangrove and crocodile)",
				role: "The conservation face of the tour. Associated operations."
			},
			{
				name: "Lagarto Real (second lagoon cooperative)",
				role: "Another tour cooperative on the same lagoon. Associated neighbour, not the Ventanilla S.C."
			}
		],
		howItRuns: "Revenue from tourism is the weekday. You are born into the village or you marry in. Visitors buy a paddle. Confirm which cooperative is taking you out, Ventanilla or Lagarto Real. Servicios Ecoturísticos de La Ventanilla, S.C. de R.L. de C.V., a Oaxacan cooperativa of about twenty-five Zapotec families on the lagoon east of Mazunte, formed in 1998 after the sea-turtle and crocodile trade was banned, registered as a UMA (unidad de manejo ambiental) in 2002. You take a canoe."
	},
	"punta-laguna": {
		model: "cooperative",
		modelLabel: "Cooperative democracy",
		unique: false,
		summary: "A collective of about thirty families. Guides are neighbours. You visit by booking a tour (puntalagunamx.com; 985-114-…). Joining means being of the village.",
		whoDecides: "A collective of about thirty families.",
		bodies: [
			{
				name: "Najil Tucha cooperativa",
				role: "About 30 Maya families at Punta Laguna, founded 2002, collectively running tours. Revenue divided among families."
			},
			{
				name: "Punta Laguna village lands",
				role: "The families live in the reserve in thatch houses and farm a little milpa. Village dirt under the ANP."
			},
			{
				name: "Otoch Ma’ax Yetel Kooh Área de Protección de Flora y Fauna",
				role: "5,367.42 ha CONANP designation (2002; petitions from 1967). Maya: the house of the spider monkey and the puma."
			}
		],
		howItRuns: "Guides are neighbours. You visit by booking a tour (puntalagunamx.com; 985-114-…). Joining means being of the village. Najil Tucha cooperativa, founded 2002 by about thirty Maya families at Punta Laguna, collectively running tourism in the Otoch Ma’ax Yetel Kooh Área de Protección de Flora y Fauna (5,367.42 ha; Maya: “the house of the spider monkey and the puma”). Families had petitioned for protection since 1967; the 2002 decree and the cooperativa arrived together. You take a spider-monkey walk."
	},
	"yomol-atel": {
		model: "federation",
		modelLabel: "Federation",
		unique: false,
		summary: "A federation of Tseltal cooperatives and solidarity enterprises. Dora Luisa Roblero has sat as president of Ts’umbal Xitalha’. You join by producing in a member community. Capeltic is the public door in the city.",
		whoDecides: "A federation of Tseltal cooperatives and solidarity enterprises.",
		bodies: [
			{
				name: "Yomol A’tel (group of cooperatives)",
				role: "Tseltal “working together”: the 2002 Jesuit-and-grower federation."
			},
			{
				name: "Ts’umbal Xitalha’",
				role: "341 Tseltal coffee-and-honey families. The producer cooperative."
			},
			{
				name: "Bats’il Maya and Capeltic",
				role: "Solidarity roaster and the university cafés that sell the cup. Value-add, not the landlord of Chilón."
			},
			{
				name: "Jesuit Province of Mexico (founding partner)",
				role: "2002 partnership with Tseltal growers; later Spanish-province solidarity. Associated history, not the title holder."
			}
		],
		howItRuns: "Dora Luisa Roblero has sat as president of Ts’umbal Xitalha’. You join by producing in a member community. Capeltic is the public door in the city. Yomol A’tel (“working together” in Tseltal), a group of social-solidarity cooperatives and enterprises: Ts’umbal Xitalha’ (coffee and honey families), Bats’il Maya (roaster and marketer), Capeltic (cafés in Jesuit universities), Chab’il Taste (honey), Yip Melel (soap and related). Jesuits of the Mexican Province partnered with Tseltal growers in 2002. Members farm their own plots. You join by being a socio in a member community."
	},
	"tierraluz": {
		model: "hoa",
		modelLabel: "Homeowners / body corporate",
		unique: false,
		summary: "Lot holders who are also A.C. members. Visit (tierraluzsayulita@gmail.com), then a titled purchase if values match. Easier than a closed covenant, more off-grid than a Sayulita condo. Confirm the A.C. rules and the deed. There is a lot, and they say so.",
		whoDecides: "Lot holders who are also A.C.",
		bodies: [
			{
				name: "TierraLuz Asociación Civil (commons)",
				role: "GEN: common land (~8,500 m², trails, food forest, yoga platform, garden, roads) co-owned via an A.C. of which lot-holders are members."
			},
			{
				name: "TierraLuz titled lots",
				role: "19 ocean-view lots of about 400–600 m² above Sayulita. Transferable titled property."
			},
			{
				name: "Off-grid solar and well",
				role: "Shared well, solar pump, community storage. Infrastructure of the neighbourhood."
			}
		],
		howItRuns: "members. Visit (tierraluzsayulita@gmail.com), then a titled purchase if values match. Easier than a closed covenant, more off-grid than a Sayulita condo. Confirm the A.C. rules and the deed. There is a lot, and they say so. An off-grid solar neighbourhood above Sayulita: private titled lots and common land co-owned through a Mexican asociación civil of which lot-holders are members (GEN). Nineteen lots; the site says two remain. Houses in cob, superadobe, and local brick. A covenanted freehold eco-neighbourhood that sells titled lots. You buy a homesite; you do not join a common purse."
	},
	"huerto-tlatelolco": {
		model: "board",
		modelLabel: "Board and staff",
		unique: false,
		summary: "An asociación civil of urban farmers and neighbours. Show up with compost, a workshop, or a shift. There is no residential membership and no Tlatelolco lot. The 1985 rubble is not for sale.",
		whoDecides: "An asociación civil of urban farmers and neighbours.",
		bodies: [{
			name: "Cultiva Ciudad A.C. / Huerto Tlatelolco",
			role: "The 2013 nonprofit occupying ~1,650 m² on a demolished 1985-quake tower footprint in Nonoalco-Tlatelolco. Civic garden."
		}, {
			name: "Neighbour and volunteer programme",
			role: "Workshops, compost, seed bank, edible forest. The public door."
		}],
		howItRuns: "Show up with compost, a workshop, or a shift. There is no residential membership and no Tlatelolco lot. The 1985 rubble is not for sale. Huerto Tlatelolco, run by Cultiva Ciudad A.C., a Mexico City asociación civil that in 2013 turned the vacant footprint of a Nonoalco-Tlatelolco tower, damaged in 1985 and later demolished, into one of the city’s largest community huertos (~1,650 m²). Neighbours and volunteers steward it. You bring compost."
	},
	"kuyabeh": {
		model: "hoa",
		modelLabel: "Homeowners / body corporate",
		unique: false,
		summary: "Property owners under construction and community rules. Visit the hotel or book through the site; buy a lot if the jungle covenant fits. Easier than a closed co-op, more rules than a raw Tulum parcela. Confirm services, the 7% cap, and which phase you are actually in.",
		whoDecides: "Property owners under construction and community rules.",
		bodies: [
			{
				name: "Kuyabeh commons and amenities (~25 ha)",
				role: "Amphitheatre, school, market garden, restaurant, temazcal, pool, hotel, spa, lagoon, cenote, towers. Shared amenities of a lot-sales village."
			},
			{
				name: "Kuyabeh lot holders",
				role: "375 ha at km 34 of the Tulum–Cobá road, held as ½-ha and 1-ha private lots (foreigners typically via fideicomiso). A covenanted freehold village."
			},
			{
				name: "Construction covenant (~7% buildable)",
				role: "Owners apply and accept a roughly 7% construction cap and off-grid rules. A private code."
			}
		],
		howItRuns: "Visit the hotel or book through the site; buy a lot if the jungle covenant fits. Easier than a closed co-op, more rules than a raw Tulum parcela. Confirm services, the 7% cap, and which phase you are actually in. A private off-grid ecological community of 375 hectares at km 34 of the Tulum–Cobá road. GEN and the village site: ½-ha and 1-ha lots, about 25 hectares of commons (amphitheatre, school, market garden, restaurant, temazcal, jungle gym, pool, hotel, spa, lagoon, cenote, towers), 160 owners, four phases (Balam, Huech, Sak Xikin, Turix). Construction is capped at about 7% of a lot. A covenanted jungle lot-sales village. You buy a 4,700–9,400 m² parcela; you do not join a common purse."
	},
	"kasisi": {
		model: "board",
		modelLabel: "Board and staff",
		unique: false,
		summary: "A Jesuit institutional farm with a director and professional staff. Farmers come for a course and go home to Chongwe and central Zambia.",
		whoDecides: "A Jesuit institutional farm with a director and professional staff.",
		bodies: [
			{
				name: "Jesuits of the Zambia-Malawi Province",
				role: "Parent body. Founded KATC in 1974."
			},
			{
				name: "Kasisi Agricultural Training Centre",
				role: "Jesuit training farm of the Zambia-Malawi Province at Kasisi Mission, Chongwe. Land, dairy, irrigation, and classrooms sit with the centre."
			},
			{
				name: "UNDP Equator Initiative",
				role: "Equator Prize 2014 for training more than 10,000 small-scale farmers. Recognition, not the Chongwe landlord."
			}
		],
		howItRuns: "Farmers come for a course and go home to Chongwe and central Zambia. Kasisi Agricultural Training Centre, a Jesuit training farm of the Zambia-Malawi Province, founded 1974 near Lusaka, directed for decades by Canadian Jesuit Br. Paul Desmarais SJ. Land and the dairy, irrigation, and classrooms sit with the mission centre, not with household lots."
	},
	"awra-amba": {
		model: "cooperative",
		modelLabel: "Cooperative democracy",
		unique: true,
		summary: "Awra Amba is an Ethiopian cooperative village founded in 1980 by Zumra Nuru and nineteen people who wanted a secular, egalitarian life in a landscape of Orthodox and Muslim villages. Formal committees (including women’s, education, guest, health, and elder) run the place. Ethiopian land is state-and-people title; members farm a small cooperative holding and run a weaving enterprise. A separate trading company exists because cooperatives cannot trade outside their locality.",
		whoDecides: "The cooperative’s committees and a co-chair, with membership defined by work and by the village’s rules (equality, no religious hierarchy), not by a purchase. Zumra Nuru is the founder still in the story; the committees are the government.",
		bodies: [
			{
				name: "Village cooperative",
				role: "Formalized in the early 1990s. The legal membership. No Fogera lot for sale."
			},
			{
				name: "Women’s committee",
				role: "Gender equality is a founding rule in a region where that is the scandal."
			},
			{
				name: "Education, guest, health, and elder committees",
				role: "The ordinary ministries of a village that decided to have ministries."
			},
			{
				name: "Co-chair structure",
				role: "A check on a founder-for-life pattern."
			},
			{
				name: "Trading company",
				role: "Created because Ethiopian cooperatives are geographically bounded. The weavings have to leave Fogera somehow."
			}
		],
		howItRuns: "Work is the membership. Children go to school instead of the field, a rule they advertise because their neighbours do the other thing. Guests are shown the committees. Christian and Muslim leaders have visited; World Bank consultants have written it up. There is no priesthood and no private title.",
		dive: {
			title: "A secular cooperative in a religious countryside",
			lead: "Awra Amba’s uniqueness is not that it has committees. It is that a founder in 1980s rural Amhara built a village whose constitution is: no religious hierarchy, girls in school, women in the same work, and a cooperative instead of a church or a lineage. The committees are how that constitution sits in Ethiopian cooperative law.",
			organs: [
				{
					name: "Zumra Nuru as founder, not priest",
					what: "He is in every article written about the place. The structure’s claim is that the committees can run without him. That claim is being tested as he ages."
				},
				{
					name: "Women’s committee",
					what: "The founding scandal and the founding proof. Marriage age, work, and speaking in the meeting are governance, not culture-add-ons."
				},
				{
					name: "Other committees and co-chair",
					what: "Education, health, guests, elders. A village that invented a small civil service so it would not become a big man and his kin."
				},
				{
					name: "Cooperative + trading company",
					what: "The legal split forced by Ethiopian cooperative geography. Without the company the weavings cannot be a national story; with only the company this would be a factory."
				}
			],
			path: "A weaving order: the enterprise and the trading company. A dispute between households: committees. A girl who wants to stay in school: already a rule, which is why the path is “the village versus the neighbours,” not an internal vote. A new member: being of the village and accepting the rules. There is no share price.",
			history: "Zumra Nuru’s group settled at “the top of the hill” in 1980 with nineteen people. They were accused of heresy, of insulting church and mosque, of letting women speak. The cooperative was formalized in the early 1990s. Weaving and a guest house became the surplus. International prizes and consultants arrived in the 2000s. The constitution did not become a church in response.",
			tension: "Founder succession. How a model village stays a village when it is also a tour. Relations with church and mosque neighbours who have not adopted the rules. Ethiopian land law, under which nobody here “owns” a lot in the American sense. Unique because the government they built is a secular cooperative civil service inside a religious peasant landscape, and they wrote gender into the civil service."
		}
	},
	"umoja": {
		model: "assembly",
		modelLabel: "Village assembly",
		unique: true,
		summary: "Umoja Uaso is a women-only village. Rebecca Samaria Lolosoli and about fifteen Samburu women founded it in 1990 after rape, forced marriage, and FGM in the district, and after a British-army scandal, made staying in ordinary manyattas impossible. The Umoja Uaso Women Group is the Kenyan CBO. Men do not take membership. The 14-acre campsite is the enterprise; the manyattas are homes.",
		whoDecides: "The women of the village. Lolosoli is the public matriarch; members decide. You join by being received as a woman of the village, not by buying a Samburu lot.",
		bodies: [
			{
				name: "Umoja Uaso Women Group",
				role: "The CBO. Legal face, membership, and the rule that men are not members."
			},
			{
				name: "Village assembly of the women",
				role: "The ordinary government. Homes, girls’ schooling, and who is received."
			},
			{
				name: "Rebecca Lolosoli",
				role: "Founding matriarch and public voice. The inversion is the point."
			},
			{
				name: "Campsite (twelve cottages)",
				role: "The enterprise that pays for the village. Visitors book a cottage; they do not sit the assembly."
			}
		],
		howItRuns: "A woman fleeing violence can be received. A man cannot move in as a member, including sons past a certain age, which is the hard inner rule visitors forget. The campsite, beadwork, and talking to journalists are how the village buys the space to keep that rule. Traditional Samburu male age-set government stops at the gate.",
		dive: {
			title: "A village whose membership test is sex and survival",
			lead: "No other community in this atlas makes “no men” the constitution. Umoja is a Samburu settlement invented so that women who had been raped, married by force, or cut could live without going home to the same age-set that had failed them. The CBO is the legal shell. The assembly of women is the government.",
			organs: [
				{
					name: "Women Group / CBO",
					what: "What Kenyan law can see. It holds the campsite and the name. It is also the ban on male membership written as an organisational object."
				},
				{
					name: "The assembly",
					what: "Who is housed, which girl goes to school, how a visitor journalist is handled."
				},
				{
					name: "The matriarch’s office",
					what: "Lolosoli speaks to Nairobi and to the BBC. Inside, that voice is not supposed to replace the assembly. The gap between those two facts is politics."
				},
				{
					name: "The campsite",
					what: "Twelve cottages as a foreign-exchange ministry. Without it the village is a cluster of manyattas on contested dirt; with it they can refuse men and still eat."
				}
			],
			path: "A woman arrives from Archers Post or further: the women decide whether she is received. A booking at umojawomen.or.ke: the campsite, which is not the assembly. A dispute with Samburu men about the land: the CBO, the police, and a thirty-year public story. A boy raised here who becomes a man: the constitutional crisis they have had to keep answering, because the rule is the village.",
			history: "In 1990, after years of sexual violence linked in part to British army camps in the district, Lolosoli and about fifteen women walked out of ordinary Samburu manyattas and built Umoja (“unity”) by the Uaso Nyiro. They were beaten, sued, and mocked. They stayed. The campsite and the tourist story (“the village with no men”) became both armour and a trap. The CBO formalised what the assembly was already doing.",
			tension: "Tourism that pays for autonomy and also turns the constitution into a postcard. Sons. Relations with Samburu men who are husbands, fathers, customers, or threats. Whether a founding matriarch’s international fame crowds out the assembly. Unique because exclusion of men is the government."
		}
	},
	"st-jude": {
		model: "founder",
		modelLabel: "Founder-stewarded",
		unique: false,
		summary: "An NGO board and a founding director. Farmers come for a course and go home to Masaka, Rakai, Ssembabule, and Mpigi.",
		whoDecides: "An NGO board and a founding director.",
		bodies: [{
			name: "St. Jude Family Projects",
			role: "Ugandan NGO S.5914/2000. The Busense farm is the teaching site."
		}, {
			name: "Women’s farmer groups and dried-fruit plant",
			role: "Extension, cooperatives, and a value-added plant. The public door."
		}],
		howItRuns: "Farmers come for a course and go home to Masaka, Rakai, Ssembabule, and Mpigi. St. Jude Family Projects, a Ugandan NGO registered S.5914/2000, founded by Josephine Kizza Aliddeki and her late husband John Kizza. The Busense farm is the teaching site for agroecology and integrated organic farming."
	},
	"khula-dhamma": {
		model: "consensus",
		modelLabel: "Consensus",
		unique: false,
		summary: "A small freehold farm circle. Visit, volunteer, or book a retreat. Confirm who actually holds the 180 hectares before you treat a cob room as a share.",
		whoDecides: "A small freehold farm circle.",
		bodies: [{
			name: "Khula Dharma farm, Haga Haga",
			role: "Freehold bushveld near Haga Haga bought by five friends in 2000. Just under 300 ha then; the village site now says 180 ha."
		}, {
			name: "Retreat and volunteer programme",
			role: "Self-catering cob rooms, camping, volunteer weeks, yoga and writing retreats. The visitor door."
		}],
		howItRuns: "Visit, volunteer, or book a retreat. Confirm who actually holds the 180 hectares before you treat a cob room as a share. A private off-grid farm near Haga Haga. Five friends purchased the land in 2000; living together from 1 January 2002. Houses in cob, straw bale, and thatch sit on freehold bushveld, not on a sectional-title scheme. A privately held eco-farm that hosts retreats and volunteers. You stay."
	},
	"nadeet": {
		model: "board",
		modelLabel: "Board and staff",
		unique: false,
		summary: "A nonprofit trust with a director. Book a programme. Staff and interns work here; they do not hold dune title. NamibRand remains a separate private reserve.",
		whoDecides: "A nonprofit trust with a director.",
		bodies: [{
			name: "NamibRand Nature Reserve",
			role: "Private reserve of former sheep farms, on the order of 202,000 ha, on which the Centre sits by arrangement. Associated land, not the trust’s title to the dunes."
		}, {
			name: "Namib Desert Environmental Education Trust (NaDEET)",
			role: "Namibian trust T168/2003. Runs the solar education centre."
		}],
		howItRuns: "Book a programme. Staff and interns work here; they do not hold dune title. NamibRand remains a separate private reserve. Namib Desert Environmental Education Trust (NaDEET), a Namibian nonprofit trust, Trust Certificate T168/2003. Viktoria Keding is director and co-founder; Andreas Keding is technical director. The Centre sits on NamibRand Nature Reserve by arrangement, not as the landlord of the 202,000 hectares. You come for a programme."
	},
	"kaydara": {
		model: "founder",
		modelLabel: "Founder-stewarded",
		unique: false,
		summary: "A Senegalese association with a founding president. Students come, train, and go home to Fimela villages.",
		whoDecides: "A Senegalese association with a founding president.",
		bodies: [{
			name: "Association Jardins d’Afrique",
			role: "Senegalese association; Gora Ndiaye is president. Runs Ferme-école Kaydara at Fimela."
		}, {
			name: "Kaydara Agroecology School Farm",
			role: "The farm-school itself, students, 16 villages, agroecology against salinisation. A programme of the association."
		}],
		howItRuns: "Students come, train, and go home to Fimela villages. Ferme-école Kaydara, run by Association Jardins d’Afrique, a Senegalese association of which Gora Ndiaye is president. UNESCO: project began 21 June 2006. Kaydara means “come to the school of life.” The farm-school sits in Fimela, a coastal commune where salinisation has taken more than 60% of the land. (Ndem, already in the atlas, is a different Senegalese village.)"
	},
	"otepic": {
		model: "founder",
		modelLabel: "Founder-stewarded",
		unique: false,
		summary: "A founder-led self-help project. Trainings are the public door. Orphans and gardeners live in the work; they do not hold Sabwani title as lots. PO Box 4627-30200, Kitale.",
		whoDecides: "A founder-led self-help project.",
		bodies: [
			{
				name: "OTEPIC (Organic Technology Extension and Promotion of Initiative Center)",
				role: "Kitale self-help / CBO founded 2008 by Philip Odhiambo Munyasia. Three gardens including 10 ha at Sabwani."
			},
			{
				name: "Tabasamu orphan household",
				role: "22 orphans living in the work. Care programme."
			},
			{
				name: "Tamera partnership",
				role: "Partner since 2011. Associated network, not the Kitale landlord."
			}
		],
		howItRuns: "Trainings are the public door. Orphans and gardeners live in the work; they do not hold Sabwani title as lots. PO Box 4627-30200, Kitale. OTEPIC (Organic Technology Extension and Promotion of Initiative Center), a Kenyan self-help / community-based grassroots project founded 2008 in Kitale by Philip Odhiambo Munyasia. Three gardens: Mitume in the city, Armani, and the 10-hectare Sabwani ecological peace village and permaculture school. Tamera has partnered since 2011."
	},
	"ndanifor": {
		model: "board",
		modelLabel: "Board and staff",
		unique: false,
		summary: "An NGO director and a displaced team. Trainings and international partnerships are the remaining door. Confirm whether the Bafut site is actually visitable before you treat a 2012 lodge as current.",
		whoDecides: "An NGO director and a displaced team.",
		bodies: [
			{
				name: "Ndanifor Permaculture Ecovillage site, Bafut",
				role: "About five acres of demonstration gardens and a lodge. Looted and emptied in the 2016 Anglophone crisis."
			},
			{
				name: "Better World Cameroon",
				role: "NGO Joshua Konkankoh founded after 1996 Yaoundé organising. Ran Ndanifor Permaculture Ecovillage at Bafut from 2012 until the Anglophone crisis emptied it."
			},
			{
				name: "Global Ecovillage Network / Gaia Trust",
				role: "GEN membership; Gaia Trust Excellence Award 2015. Network recognition, not the Bafut landlord."
			}
		],
		howItRuns: "Trainings and international partnerships are the remaining door. Confirm whether the Bafut site is actually visitable before you treat a 2012 lodge as current. Ndanifor Permaculture Ecovillage, the living site of Better World Cameroon (BWC), an NGO Joshua Konkankoh founded after mobilizing unemployed graduates in Yaoundé in 1996. BWC joined GEN around 2010; the Bafut ecovillage opened 2012. Gaia Trust Excellence Award 2015. In 2016 the Anglophone crisis reached Bafut; the team was expelled and the site looted."
	},
	"basaisa": {
		model: "board",
		modelLabel: "Board and staff",
		unique: false,
		summary: "A village association and a founding scientist. You visit by arrangement with the association.",
		whoDecides: "A village association and a founding scientist.",
		bodies: [
			{
				name: "Basaisa Community Development Association",
				role: "The village association that is the public face of Arafa’s Sharqiya work. Rooftop PV, biogas, a 2017 solar station on its own roof."
			},
			{
				name: "Basaisa village, Sharqiya",
				role: "An existing Nile-Delta village ~95 km northeast of Cairo. Arafa began work here in 1974."
			},
			{
				name: "New Basaisa, Ras Sudr",
				role: "Desert offshoot from 1992 in South Sinai: ~750 feddans of agriculture, 200 km from the old village. Associated holding."
			}
		],
		howItRuns: "You visit by arrangement with the association. Basaisa Community Development Association, the legal face of a Nile-Delta village that physicist Salah Arafa, of the American University in Cairo, began working in in 1974. The first rural photovoltaic systems in Egypt went onto Basaisa roofs in the late 1970s. New Basaisa, a desert offshoot at Ras Sudr in South Sinai, followed in 1992. (SEKEM, already in the atlas, is a different Egyptian project.)"
	},
	"boabeng-fiema": {
		model: "indigenous-assembly",
		modelLabel: "Indigenous assembly",
		unique: false,
		summary: "Traditional authority plus a 1975 bye-law, later a sanctuary administration. Guides are neighbours. Joining means being of Boabeng or Fiema, not buying a Bono East lot. Visitors book a walk.",
		whoDecides: "Traditional authority plus a 1975 bye-law, later a sanctuary administration.",
		bodies: [
			{
				name: "Boabeng and Fiema traditional authorities",
				role: "Twin villages that passed the 1975 bye-law. Monkeys buried as children of the gods."
			},
			{
				name: "Boabeng-Fiema Monkey Sanctuary",
				role: "4.4 km² of forest and village where ~700 monkeys live in the streets. 1975 bye-law plus older sacred-animal law."
			},
			{
				name: "Ghana Wildlife Division",
				role: "Later sanctuary frame and technical support. Associated, not the village landlord."
			}
		],
		howItRuns: "Guides are neighbours. Joining means being of Boabeng or Fiema, not buying a Bono East lot. Visitors book a walk. Boabeng-Fiema Monkey Sanctuary, a community sanctuary of two villages that, in 1975, passed a bye-law against harming the monkeys their grandparents already buried as children of the gods. Traditional law and a modern local statute sit on the same 4.4 square kilometres. You walk with a guide. (Wechiau, already in the atlas, is a different Ghanaian sanctuary.)"
	},
	"fambidzanai": {
		model: "board",
		modelLabel: "Board and staff",
		unique: false,
		summary: "A PVO board and a training campus. Farmers come for a course or a diploma and go home.",
		whoDecides: "A PVO board and a training campus.",
		bodies: [{
			name: "Fambidzanai Permaculture Centre / Zimbabwe Institute of Permaculture",
			role: "ZIP-PVO12/92. Africa’s first dedicated permaculture centre, founded 1988 by John Wilson."
		}, {
			name: "PELUM Zimbabwe",
			role: "Participatory Ecological Land Use Management network that grew in the same soil. Associated network, not the Stapleford landlord."
		}],
		howItRuns: "Farmers come for a course or a diploma and go home. Fambidzanai Permaculture Centre, a Zimbabwean private voluntary organisation, registered as a programme of the Zimbabwe Institute of Permaculture (ZIP-PVO12/92). Founded 1988 by permaculture teacher John Wilson and farmer activists after a Bill Mollison course. Africa’s first dedicated permaculture centre. (Kufunda, already in the atlas, is a different Zimbabwean village.)"
	},
	"guie": {
		model: "board",
		modelLabel: "Board and staff",
		unique: false,
		summary: "An inter-village association with a farm director. Young people train at CFAR and go home to lay hedges.",
		whoDecides: "An inter-village association with a farm director.",
		bodies: [
			{
				name: "Association Zoramb Naagtaaba (AZN)",
				role: "Inter-village association founded 27 January 1989. Holds the Guiè work with neighbouring villages."
			},
			{
				name: "Ferme pilote de Guiè",
				role: "Pilot farm launched 14 December 1989. Hosts CFAR, the bocage-builders’ school."
			},
			{
				name: "Terre Verte",
				role: "Associated French NGO (Landrecies). Publishes with AZN."
			}
		],
		howItRuns: "Young people train at CFAR and go home to lay hedges. Association Zoramb Naagtaaba (AZN), a Burkinabe inter-village association created 27 January 1989. The Ferme pilote de Guiè opened 14 December the same year, after Henri Girard, a French agricultural technician, met Guiè in 1986. Wégoubri, the Mooré word they use, is Sahelian bocage: hedges, ponds, bunds, and fields that hold water. Terre Verte, a French NGO, is the associated European face."
	},
	"chikukwa": {
		model: "indigenous-assembly",
		modelLabel: "Indigenous assembly",
		unique: false,
		summary: "Village clubs with elected heads feeding a community trust. You visit the Chitekete centre by arrangement (celuozw.org). Membership is being of the six villages.",
		whoDecides: "Village clubs with elected heads feeding a community trust.",
		bodies: [
			{
				name: "Chikukwa Ecological Land Use Organisation (CELUO)",
				role: "Successor face of CELUCT (1995). Six villages on Chimanimani communal land."
			},
			{
				name: "Chikukwa communal lands",
				role: "Six villages along ~15 km of hills. Communal tenure, not freehold plots."
			},
			{
				name: "CELUCT training centre, Chitekete",
				role: "Kitchen, dormitory, halls. The public door for trainees."
			}
		],
		howItRuns: "You visit the Chitekete centre by arrangement (celuozw.org). Membership is being of the six villages. Chikukwa Ecological Land Use Community Trust (CELUCT), now Chikukwa Ecological Land Use Organisation (CELUO), a Zimbabwean community trust of six villages in Chimanimani. Permaculture clubs from 1991; the trust formalised in 1995 after four experimental years. Eli and Ulli Westermann, a German couple teaching in the district from the mid-1980s, were catalysts; Julious Piti is a founding member. Communal land."
	},
	"il-ngwesi": {
		model: "indigenous-assembly",
		modelLabel: "Indigenous assembly",
		unique: false,
		summary: "An elected group-ranch committee and chairman for some 6,000 members. You visit by booking the lodge. Membership is being of the six villages. Confirm current conservancy and lodge arrangements before you treat a 2002 prize as a 2026 title deed.",
		whoDecides: "An elected group-ranch committee and chairman for some 6,000 members.",
		bodies: [
			{
				name: "Ranchi Ya Il Ngwesi (Il Ngwesi Group Ranch)",
				role: "Maasai group ranch of the Il Lakipiak on Mukogodo. Committee and chairman for ~6,000 members."
			},
			{
				name: "UNDP Equator Initiative",
				role: "Equator Prize 2002. Recognition, not the Mukogodo landlord."
			},
			{
				name: "Il Ngwesi Eco-Lodge",
				role: "Community-owned and community-run lodge built 1996 with USAID/KWS. Bandas on a rocky outcrop."
			}
		],
		howItRuns: "You visit by booking the lodge. Membership is being of the six villages. Confirm current conservancy and lodge arrangements before you treat a 2002 prize as a 2026 title deed. Ranchi Ya Il Ngwesi, a Kenyan Maasai group ranch of the Il Lakipiak (“people of wildlife”) on the Mukogodo escarpment. Group-ranch tenure under Kenyan land law, with a committee and chairman; not private plots. Community elders set aside 8,645 hectares (Equator Initiative) for conservation; the lodge, built 1996 with USAID through Kenya Wildlife Service, is community-owned and community-run. Equator Prize 2002. You take a bandas. (Umoja and OTEPIC, already in the atlas, are different Kenyan projects.)"
	},
	"lynedoch": {
		model: "hoa",
		modelLabel: "Homeowners / body corporate",
		unique: false,
		summary: "Every owner is a member of the Lynedoch Home Owners Association, a Section 21 company, including the development company. A code of conduct is the daily law. Visit the Institute; buy a house if one comes up. Easier than a closed co-op, more rules than a raw Stellenbosch smallholding. Confirm which units are actually affordable before you treat a 1999 vision as a 2026 price.",
		whoDecides: "Every owner is a member of the Lynedoch Home Owners Association, a Section 21 company, including the development company.",
		bodies: [
			{
				name: "Lynedoch Home Owners Association",
				role: "Section 21 company required by the municipality. Every owner is a member, including the development company."
			},
			{
				name: "Lynedoch Development Company",
				role: "Nonprofit developer. Bought 6 ha in 1999 for R3 million (old Drie Gewels Hotel)."
			},
			{
				name: "Sustainability Institute",
				role: "Teaching and research campus founded 1999 by Eve Annecke and Mark Swilling on the same 6 ha. Associated education."
			}
		],
		howItRuns: "A code of conduct is the daily law. Visit the Institute; buy a house if one comes up. Easier than a closed co-op, more rules than a raw Stellenbosch smallholding. Confirm which units are actually affordable before you treat a 1999 vision as a 2026 price. Lynedoch Development Company, a South African nonprofit (Section 21) that bought 6 hectares in 1999 for R3 million, plus the Lynedoch Home Owners Association, also a Section 21 company, which the municipality required as a condition of development rights. Eve Annecke and Mark Swilling founded the Sustainability Institute on the same campus. Freehold houses sit under an HOA code of conduct; a share of units was designed as affordable. South Africa’s first socially mixed ecological HOA, with a teaching institute in the old hotel. You may buy a house if one is for sale; you do not join a common purse. (Tlholego and Khula Dharma, already in the atlas, are different South African projects.)"
	},
	"anja": {
		model: "indigenous-assembly",
		modelLabel: "Indigenous assembly",
		unique: false,
		summary: "A village association of resident households. You must take a local guide. Joining is being of Anja. Book at the gate rather than walking the lemurs unguided.",
		whoDecides: "A village association of resident households.",
		bodies: [
			{
				name: "Association Anja Miray",
				role: "Village association founded 1999. Manages the 30-hectare reserve."
			},
			{
				name: "Anja Community Reserve",
				role: "30 ha of woodland and lake at the Three Sisters granite. UNDP 2001."
			},
			{
				name: "UNDP Equator Initiative / GEF",
				role: "UNDP helped found the reserve in 2001; Equator Prize 2012; GEF support."
			}
		],
		howItRuns: "You must take a local guide. Joining is being of Anja. Book at the gate rather than walking the lemurs unguided. Association Anja Miray, a Malagasy community association founded 1999 as the forest came down. The Anja Community Reserve opened in 2001 with UNDP and later GEF support, 30 hectares of woodland and a lake at the foot of a cliff. Equator Prize 2012. The association manages the reserve. You walk with a local guide."
	},
	"atarashiki-mura": {
		model: "common-purse",
		modelLabel: "Common purse",
		unique: false,
		summary: "A foundation holds the land. Monthly meetings; unanimity in principle. Individual houses in family units, a communal dining hall with a stage. External “members” and the Friends’ association send money.",
		whoDecides: "A foundation holds the land.",
		bodies: [
			{
				name: "Hyūga remnant",
				role: "A few members still live at the original Miyazaki site, dependent on Moroyama and external support. Same movement."
			},
			{
				name: "Atarashiki-mura (general incorporated foundation)",
				role: "Holds the Moroyama 10 ha, houses, dining hall, and farm. Saitama approved a foundation in 1948."
			},
			{
				name: "Atarashiki-mura Tomo-no-kai (Friends)",
				role: "Donor circle. FY2022 donations (~¥12m) outran farm and solar."
			}
		],
		howItRuns: "Monthly meetings; unanimity in principle. Individual houses in family units, a communal dining hall with a stage. External “members” and the Friends’ association send money. Atarashiki-mura (新しき村, “New Village”) a Japanese utopian farm founded 1918 by the Shirakaba novelist Saneatsu Mushanokōji in the mountains of Hyūga, Miyazaki. In 1939 a dam warning pushed the community onto 10 hectares at Moroyama, Saitama; Saitama Prefecture approved it as a foundation in 1948 (later a general incorporated foundation). Income is pooled; members receive pocket money; housing, food, medicine, and school are communal. Monthly meetings decide by unanimity in principle."
	},
	"anandwan": {
		model: "board",
		modelLabel: "Board and staff",
		unique: false,
		summary: "A non-bureaucratic samiti with a committee; Dr. Vikas Amte has coordinated the Warora campus. Residents work. Visitors write visitors@anandwan.in rather than arriving at the wards unannounced.",
		whoDecides: "A non-bureaucratic samiti with a committee; Dr.",
		bodies: [
			{
				name: "Maharogi Sewa Samiti, Warora",
				role: "Not-for-profit NGO founded 19 August 1949. Holds Anandwan and sister campuses."
			},
			{
				name: "Hospitals, schools, and workshops",
				role: "Two hospitals, college, schools for the blind and the deaf, orphanage, technical wing, farm industries."
			},
			{
				name: "Somnath Prakalp and Lok Biradari Prakalp",
				role: "Sister MSS campuses in Chandrapur and Hemalkasa (Gadchiroli). Same family."
			}
		],
		howItRuns: "Vikas Amte has coordinated the Warora campus. Residents work. Visitors write visitors@anandwan.in rather than arriving at the wards unannounced. Maharogi Sewa Samiti, Warora (MSS), an Indian not-for-profit NGO founded 19 August 1949 by Murlidhar Devidas “Baba” Amte and Sadhana Amte with six people who had leprosy. Anandwan (“Forest of Bliss”) is the mother campus; Somnath Prakalp (Chandrapur) and Lok Biradari Prakalp (Hemalkasa, Gadchiroli) sit in the same family. Land, hospitals, schools, and workshops sit with the samiti."
	},
	"barefoot-college": {
		model: "board",
		modelLabel: "Board and staff",
		unique: false,
		summary: "A voluntary organisation with campus staff and village committees. Trainees go home. There is no member share and no Ajmer lot. Book a look through barefootcollegetilonia.org rather than walking the workshops unannounced.",
		whoDecides: "A voluntary organisation with campus staff and village committees.",
		bodies: [
			{
				name: "Social Work and Research Centre (Barefoot College, Tilonia)",
				role: "Voluntary organisation founded 1972 by Bunker Roy. Holds the 8-acre Tilonia campus."
			},
			{
				name: "Barefoot College International",
				role: "Later international arm that carries Solar Mamas training abroad. Not the Tilonia landlord."
			},
			{
				name: "Friends of Tilonia, Inc.",
				role: "U.S. support charity."
			}
		],
		howItRuns: "Trainees go home. There is no member share and no Ajmer lot. Book a look through barefootcollegetilonia.org rather than walking the workshops unannounced. Social Work and Research Centre (SWRC), known as Barefoot College, Tilonia, an Indian voluntary organisation founded 1972 by Sanjit “Bunker” Roy. The 8-acre campus is the teaching village; Barefoot College International later carried the solar-engineer model abroad. Friends of Tilonia, Inc. is a U.S. support charity, not the Tilonia landlord."
	},
	"seongmisan": {
		model: "federation",
		modelLabel: "Federation",
		unique: false,
		summary: "A network of cooperatives and associations. You join by living in the neighbourhood and walking into a co-op, not by buying a share of Seongmisan. Easier than a closed commune, more involved than a Mapo studio listing.",
		whoDecides: "A network of cooperatives and associations.",
		bodies: [
			{
				name: "Seongmisan childcare cooperative (founding house)",
				role: "About thirty parents bought a Mapo-gu house in 1994 and opened a joint childcare co-op, the seed of the village. Occupancy by cooperation."
			},
			{
				name: "Seongmisan Village associations and co-ops",
				role: "School, consumer co-ops, cafés, kitchen. Some registered under the 2012 Framework Act on Cooperatives; a related NPO in 2018."
			},
			{
				name: "Household leases and freeholds",
				role: "Houses sit on ordinary Seoul title or lease. The village is the co-ops of Seongmisan."
			}
		],
		howItRuns: "You join by living in the neighbourhood and walking into a co-op, not by buying a share of Seongmisan. Easier than a closed commune, more involved than a Mapo studio listing. Seongmisan Village (성미산마을 / Sungmisan Maeul), a Seoul urban village that began in 1994 when about thirty dual-income parents bought a house and opened a joint childcare cooperative. Alternative school, consumer co-ops, cafés, and a village kitchen followed. Some entities later registered as cooperatives under the 2012 Framework Act on Cooperatives; a related NPO was registered in 2018. Households still sit on ordinary Seoul leases and freeholds. A dense web of co-ops in a city neighbourhood you can also just rent."
	},
	"ulpotha": {
		model: "founder",
		modelLabel: "Founder-stewarded",
		unique: false,
		summary: "A private estate and a resident farming community. Guests book a season; they do not join a co-op. Confirm dates, Ulpotha is not open every month.",
		whoDecides: "A private estate and a resident farming community.",
		bodies: [{
			name: "Resident farming community",
			role: "Local farmers work paddy and kitchen. Guests book a season."
		}, {
			name: "Ulpotha estate",
			role: "Private restored puranagama at Galgamuwa. Founders funded rehabilitation under a rajakariya compact."
		}],
		howItRuns: "Guests book a season; they do not join a co-op. Confirm dates, Ulpotha is not open every month. Ulpotha, a restored Sri Lankan puranagama in Galgamuwa, Kurunegala, brought back from an abandoned coconut estate in 1994 by Giles and Viren Perera with local partners (Mudiyanse Tennekoon, and for a time Manik Sandrasagra). Traditional rajakariya land-care was the founding compact: the founders funded rehabilitation so the tank, paddy, and wattle-and-daub houses would live again. Title sits as a private estate that opens seasonally as a yoga and Ayurveda village, not as household lots. A privately held restored village that hosts paying guests so the farm can stay. You take a hut."
	},
	"taomi": {
		model: "assembly",
		modelLabel: "Village assembly",
		unique: false,
		summary: "A community development association of resident households, plus B&B owners. You join by living in Taomi li, not by buying a share of the Paper Dome. The municipality of Puli is the planning overlay, not the landlord.",
		whoDecides: "A community development association of resident households, plus B&B owners.",
		bodies: [
			{
				name: "Taomi Community Development Association",
				role: "Founded 1996; rebuilt the li as an eco-village after 921. Tours, B&Bs, ecological story."
			},
			{
				name: "Household title in Taomi li",
				role: "Houses stay with families. The 18 km² is a village administrative area."
			},
			{
				name: "Paper Dome (Shigeru Ban)",
				role: "Relocated from Kobe in 2008 as a gift between two quake villages. A visitor landmark, not the landlord."
			}
		],
		howItRuns: "You join by living in Taomi li, not by buying a share of the Paper Dome. The municipality of Puli is the planning overlay, not the landlord. Taomi Community Development Association (桃米社區發展協會), a Taiwanese community association founded 1996 in Puli, Nantou. After the 21 September 1999 earthquake the village rebuilt as an eco-village (public relaunch 2001) with the New Homeland Foundation, frog surveys, B&Bs, and later the Paper Dome (Shigeru Ban’s relocated Takatori church). Households keep ordinary title; the association runs tours, the ecological story, and the visitor door. You walk the frogs."
	},
	"pun-pun": {
		model: "founder",
		modelLabel: "Founder-stewarded",
		unique: false,
		summary: "A family-core farm and learning centre. Volunteers are received for a fee or a labour exchange; they leave. Harder than a Chiang Mai homestay, much harder than a Mae Taeng smallholding listing.",
		whoDecides: "A family-core farm and learning centre.",
		bodies: [{
			name: "Pun Pun Center for Self-Reliance",
			role: "Private Mae Taeng farm of about 9–10 acres founded July 2003 by Jon Jandai and Peggy Reents. Seed bank, earthen houses, courses."
		}, {
			name: "Thamturakit",
			role: "Sister project that buys organic farmers’ surplus at a fair price and sells it in cities. Trading arm."
		}],
		howItRuns: "Volunteers are received for a fee or a labour exchange; they leave. Harder than a Chiang Mai homestay, much harder than a Mae Taeng smallholding listing. Pun Pun Center for Self-Reliance, a Thai organic farm, seed-saving centre, and learning village founded July 2003 by Jon Jandai and Peggy Reents on land they bought in Mae Taeng. Earthen houses, a seed bank, and courses sit on private farm title, not on a housing-cooperative map. Thamturakit, a later sister project, buys surplus from organic farmers and sells it in cities, a trading arm. You volunteer or take a course."
	},
	"bumi-langit": {
		model: "founder",
		modelLabel: "Founder-stewarded",
		unique: false,
		summary: "A family farm that hosts an institute. Guests eat; students take a course. There is no member share and no Imogiri lot. Book the warung rather than walking the terraces as a park.",
		whoDecides: "A family farm that hosts an institute.",
		bodies: [{
			name: "Bumi Langit farm title",
			role: "Family hillside at Imogiri-Mangunan KM 3, about 3 ha."
		}, {
			name: "Bumi Langit Institute",
			role: "Courses, warung, and an environmental pesantren on the same hillside. Teaching face."
		}],
		howItRuns: "Guests eat; students take a course. There is no member share and no Imogiri lot. Book the warung rather than walking the terraces as a park. Bumi Langit Institute, an Indonesian permaculture farm and environmental pesantren founded late 2006 by Iskandar Waworuntu on a dry Imogiri hillside after he embraced Islam in 2000 and left Bali. Land is private family title used as an institute: farm, warung, and courses. Islamic khalifah language frames the permaculture. You eat and train here."
	},
	"little-donkey": {
		model: "board",
		modelLabel: "Board and staff",
		unique: false,
		summary: "A social enterprise on partnered peri-urban land of equal shares. CSA members buy a season; plot-renters garden on weekends. Arrange a visit; do not treat the beds as a park.",
		whoDecides: "A social enterprise on partnered peri-urban land of equal shares.",
		bodies: [
			{
				name: "Little Donkey Citizen Farm",
				role: "China’s first CSA, April 2008, ~15 ha at Houshajian. NGO that became a social enterprise."
			},
			{
				name: "Renmin University Rural Construction Centre / Haidian Agriculture Committee",
				role: "Founding “production, study and research base.” Partners of Fenghuangling lots."
			},
			{
				name: "Shared Harvest",
				role: "Shi Yan’s later CSA (2012). A sister farm, not the Houshajian title."
			}
		],
		howItRuns: "CSA members buy a season; plot-renters garden on weekends. Arrange a visit; do not treat the beds as a park. Little Donkey Citizen Farm (小毛驴市民农园), China’s first CSA, opened April 2008 on about 15 hectares at Houshajian, Haidian, as a “production, study and research base” of the Haidian Agriculture and Forest Committee and Renmin University’s Rural Construction Centre. Shi Yan, back from a U.S. CSA apprenticeship, was the public farmer; the farm later described itself as an NGO that became a social enterprise. CSA shares and rented family plots, not household freehold. You take a box or a bed."
	},
	"gk-enchanted-farm": {
		model: "board",
		modelLabel: "Board and staff",
		unique: false,
		summary: "A foundation campus next to a GK village. Families received houses as GK beneficiaries, not as co-op shareholders. Fellows apply. Book through GK rather than arriving at the houses unannounced.",
		whoDecides: "A foundation campus next to a GK village.",
		bodies: [
			{
				name: "Encanto GK village families",
				role: "~50 families housed as GK beneficiaries beside the farm. Houses are the anti-poverty programme, not shares you can list."
			},
			{
				name: "Gawad Kalinga Community Development Foundation",
				role: "Philippine nonprofit founded 2003 by Tony Meloto. Parent of the Encanto village and the Enchanted Farm."
			},
			{
				name: "GK Enchanted Farm (campus entity)",
				role: "Social-enterprise campus on land that grew from a 2 ha gift to ~34 ha. Legally related to GK."
			}
		],
		howItRuns: "Families received houses as GK beneficiaries, not as co-op shareholders. Fellows apply. Book through GK rather than arriving at the houses unannounced. Gawad Kalinga Enchanted Farm, a platform of the Gawad Kalinga Community Development Foundation (GK), a Philippine nonprofit Tony Meloto founded in 2003. A GK village of families who had been informal settlers was built at Encanto, Angat, around 2007–10; the Enchanted Farm (social-enterprise campus, “Farm Village University”) launched 2010–11 as a legally separate but related entity on land that grew from a 2-hectare gift to about 34 hectares. Houses sit with GK families; the farm and incubators sit with the foundation. You intern or visit."
	},
	"celo": {
		model: "consensus",
		modelLabel: "Consensus",
		unique: false,
		summary: "Consensus of the members. Land is assigned, never sold. A clerk and subcommittees (property, finance) do the paperwork. New people sit a waiting list; some families settle on the periphery. Predominantly Quaker in culture, with no religious test.",
		whoDecides: "Consensus of the members.",
		bodies: [
			{
				name: "Celo Community, Inc.",
				role: "Holds ~1,100–1,200 acres in the South Toe. Assigns land to members for a modest one-time refundable fee, like a lifetime lease."
			},
			{
				name: "Arthur Morgan School",
				role: "Quaker boarding school, grades 7–9, founded 1962 by Elizabeth and Ernest Morgan on community land. Lessee, not the South Toe landlord."
			},
			{
				name: "Camp Celo",
				role: "Quaker farm camp on community land since 1948. A lease, not title."
			}
		],
		howItRuns: "Land is assigned, never sold. A clerk and subcommittees (property, finance) do the paperwork. New people sit a waiting list; some families settle on the periphery. Predominantly Quaker in culture, with no religious test. Celo Community, Inc., a North Carolina 501(c)(4) civic-league nonprofit (EIN 56-6049967, tax-exempt April 1940) that holds the land as a trust and assigns it to members for a modest one-time refundable fee, like a lifetime lease. Members may own the house; they never own the land. Consensus membership; no more than 15% dissenting. Regnery. Arthur Morgan School, Camp Celo, and a health centre lease land from CCI; they are not the landlord."
	},
	"sunrise-ranch": {
		model: "spiritual",
		modelLabel: "Spiritual order",
		unique: false,
		summary: "Trustees of the Emissaries and a spiritual director. Residents are staff and community members, not shareholders. Visit by programme. Joining is a vocational and spiritual path. Confirm current programmes; the valley is a working retreat.",
		whoDecides: "Trustees of the Emissaries and a spiritual director.",
		bodies: [{
			name: "Emissaries of Divine Light",
			role: "Spiritual network founded 1932 by Lloyd Arthur Meeker (Uranda). Trustees elected by an international congress."
		}, {
			name: "Sunrise Ranch",
			role: "123-acre Eden Valley farm bought 1945 for $6,000. Conference and retreat centre staffed by a residential community of about 85."
		}],
		howItRuns: "Residents are staff and community members, not shareholders. Visit by programme. Joining is a vocational and spiritual path. Confirm current programmes; the valley is a working retreat. Headquarters of Emissaries of Divine Light, a spiritual network Lloyd Arthur Meeker (Uranda) began in 1932. The ranch is a conference and retreat centre staffed by a residential community, held by the Emissary organization, a religious society / nonprofit. You come for a programme or to join the staff community. Trustees of the Emissaries, elected by an international congress, are the legal face. David Karchere is the current spiritual director."
	},
	"ananda-village": {
		model: "spiritual",
		modelLabel: "Spiritual order",
		unique: true,
		summary: "Ananda Village is a cooperative spiritual community of Ananda Sangha, founded by Swami Kriyananda (J. Donald Walters), a direct disciple of Paramhansa Yogananda. Non-residential land sits with Ananda Church of Self-Realization. Housing is a mix of community-owned and cooperatively held dwellings, members invest in the housing inventory, not in a speculative lot. Independent household finances; not income-sharing. A Village Council, paid community positions, and town-hall meetings sit beside the church’s spiritual directors.",
		whoDecides: "Spiritual directors and the church on the religious path; a Village Council and town halls on residential life; housing co-op rules on dwellings. Membership is spiritual and residential, with a path through courses and a stay.",
		bodies: [
			{
				name: "Ananda Church of Self-Realization",
				role: "California church corporation. Holds non-residential land. The spiritual legal person."
			},
			{
				name: "Village Council",
				role: "Elected / appointed civic layer for the settlement. Roads, neighbors, the town-hall agenda."
			},
			{
				name: "Spiritual directors / ministers",
				role: "Kriya Yoga lineage after Kriyananda. They do not sell houses; they do set the religious frame membership sits in."
			},
			{
				name: "Ananda Village housing",
				role: "Community-owned and cooperatively held dwellings. Members invest in inventory, not in a Nevada City lot market."
			},
			{
				name: "The Expanding Light Retreat / Ananda Meditation Retreat",
				role: "501(c)(3) public doors on the same land. Guests are not villagers."
			}
		],
		howItRuns: "You take courses, you stay, you may be invited into membership and into housing if a dwelling exists. Households keep their own money and often work for the community or in Nevada County. A town hall can decide a road; it cannot rewrite Yogananda. Housing demand sometimes exceeds supply; some members live nearby and still belong.",
		dive: {
			title: "A church, a council, and a housing inventory",
			lead: "Ananda is a yogic church that built a village, then had to invent a Village Council so that sewer lines would not be a ministerial question, while keeping housing off the speculative market. The unique government is that three-way split: sangha, civic council, housing inventory.",
			organs: [
				{
					name: "Church of Self-Realization",
					what: "The spiritual corporation. Lineage, vows, the name Ananda. Holds the land that is not someone’s house."
				},
				{
					name: "Spiritual directors",
					what: "Successors to Kriyananda. They can shape membership. They are a poor mechanism for a culvert."
				},
				{
					name: "Village Council and town halls",
					what: "The civic invention. Paid community positions exist because a village of this size cannot be run only in darshan."
				},
				{
					name: "Housing inventory",
					what: "Neither lots nor a commune dormitory. Members put money into dwellings the community holds, which is how they tried to have homes without having a subdivision."
				}
			],
			path: "A retreat guest: Expanding Light, which is not the council. A person who wants to live here: courses, a stay, spiritual membership, then housing if the inventory has a gap. A fence: Village Council. A teaching that changes how Sunday is run: the directors. A desire to list a house on MLS as a freehold Nevada City home: there is no path.",
			history: "Swami Kriyananda, after leaving SRF, founded Ananda in the late 1960s and the village near Nevada City in the 1970s as a cooperative spiritual community in Yogananda’s name. Wildfire (2017’s Cascade Fire damaged the village) and decades of growth forced a more civic organ chart. Kriyananda died in 2013. The church, the council, and the housing mix are the succession.",
			tension: "Lineage authority versus a council that has to fix roads. Housing shortage that pushes members into town and thins the village. Independent finances in a spiritual community. Unique because they built a real civic layer inside a guru-lineage church and still refused to become a lot-sales yoga suburb."
		}
	},
	"sandhill": {
		model: "consensus",
		modelLabel: "Consensus",
		unique: false,
		summary: "Consensus of the member-board. You visit, intern, then ask. Capacity is rooms and labour. Easier to visit than in the FEC years;. Do not confuse with Dancing Rabbit’s 501(c)(2) land trust next door.",
		whoDecides: "Consensus of the member-board.",
		bodies: [{
			name: "Sandhill Farm (FEC income-sharing era)",
			role: "1974–2019 egalitarian commune, Federation of Egalitarian Communities, famous for sorghum syrup. The common purse ended; the 168 acres did not become parcels."
		}, {
			name: "Sandhill Farm (current nonprofit land project)",
			role: "Members are the board. 168 acres of fields and forest held in common."
		}],
		howItRuns: "You visit, intern, then ask. Capacity is rooms and labour. Easier to visit than in the FEC years;. Do not confuse with Dancing Rabbit’s 501(c)(2) land trust next door. A Missouri nonprofit land project: members are the board; they collectively caretake land, houses, and infrastructure, and pay monthly contributions for taxes, utilities, and upkeep. From 1974 to 2019 this was a fully income-sharing Federation of Egalitarian Communities commune (sorghum syrup was the famous product) on the same dirt Dancing Rabbit later bought next door. In 2019 they restructured to private dwellings and financial autonomy while keeping the land in common. The FEC common purse ended; the 168 acres did not become Scotland County parcels."
	},
	"linnaea": {
		model: "board",
		modelLabel: "Board and staff",
		unique: false,
		summary: "A land-trust society and a farm society. Resident stewards and a waiting culture for people who will actually farm. Visitors come for a course or a stay. Confirm current steward openings, the farm has advertised for them. Klahoose, Tla’amin, and Homalco territory; the 1887 pre-emption is the settler origin, not the first story.",
		whoDecides: "A land-trust society and a farm society.",
		bodies: [
			{
				name: "Turtle Island Earth Stewards / Linnaea Farm Society",
				role: "No-sale land trust on 314 acres / 127 ha at Gunflint Lake. Title path: Hansen ranch → Robert Cabot 1978 → Trust for Public Land → Turtle Island Earth Stewards."
			},
			{
				name: "Trust for Public Land",
				role: "U.S. charitable land trust that took Cabot’s title in 1978 and passed it, restricted, to Turtle Island Earth Stewards."
			},
			{
				name: "The Land Conservancy of BC / Quadra Island Conservancy covenant",
				role: "1999 conservation covenant on the 127 hectares. A use restriction, not the operating farm and of house lots."
			}
		],
		howItRuns: "Resident stewards and a waiting culture for people who will actually farm. Visitors come for a course or a stay. Confirm current steward openings, the farm has advertised for them. Klahoose, Tla’amin, and Homalco territory; the 1887 pre-emption is the settler origin, not the first story. A no-sale land trust. Robert Cabot bought the Hansen family’s Lakeview Ranch in 1978, transferred title to the U.S. Trust for Public Land, which transferred it with restrictions to Turtle Island Earth Stewards, a BC society. The Land Conservancy of BC holds a conservation covenant (1999) with the Quadra Island Conservancy. Linnaea Farm Society teaches and farms. You steward, intern, or take a PDC. Named for Linnaea borealis, the twinflower."
	},
	"camphill-ontario": {
		model: "board",
		modelLabel: "Board and staff",
		unique: false,
		summary: "A charitable board and Camphill coworker culture. Villagers are residents of a care community, not shareholders. Visit by arrangement. Joining as a coworker is a vocational year or a life. Harder than a farm stay, safeguarding is what matters.",
		whoDecides: "A charitable board and Camphill coworker culture.",
		bodies: [
			{
				name: "Camphill Communities Ontario",
				role: "Registered charity #106835879 RR0001. Supports adults with intellectual and developmental disabilities in Simcoe County."
			},
			{
				name: "Camphill Foundation Canada",
				role: "Associated fundraising, not the Angus title."
			},
			{
				name: "Camphill Association of North America",
				role: "Full-member affiliation. Network, not the Nottawasaga landlord."
			}
		],
		howItRuns: "Villagers are residents of a care community, not shareholders. Visit by arrangement. Joining as a coworker is a vocational year or a life. Harder than a farm stay, safeguarding is what matters. Camphill Communities Ontario, a Canadian registered charity (charity #106835879 RR0001) supporting adults with intellectual and developmental disabilities in Simcoe County. The rural site is Camphill Nottawasaga on 290 acres; the urban site is Sophia Creek in Barrie. A Camphill. Coworkers live in; day supports and workshops (wood, pottery, biodynamic farm) are the work. Camphill Foundation Canada is associated money, not the title. Distinct from Camphill Village Copake in New York, already in this atlas."
	},
	"lost-valley": {
		model: "hybrid",
		modelLabel: "Hybrid",
		unique: false,
		summary: "A 501(c)(3) board and resident community. Interns and course students are not automatically members. Affordable housing on site is a programme of the charity. Arrange a visit; the Lane is a working campus.",
		whoDecides: "A 501(c)(3) board and resident community.",
		bodies: [
			{
				name: "Meadowsong Ecovillage",
				role: "Residential community on the same title: affordable housing and land access for staff, renters, and volunteers. A programme of the charity."
			},
			{
				name: "Shiloh Youth Revival Centers (“The Land”)",
				role: "Late-1960s builder of the Dexter site from recycled houses. Sold in the 1980s to people who wanted an eco-village."
			},
			{
				name: "Lost Valley Education Center",
				role: "Oregon 501(c)(3) on 87 acres at Dexter. Courses, Community Experience Weeks, lodging."
			}
		],
		howItRuns: "Interns and course students are not automatically members. Affordable housing on site is a programme of the charity. Arrange a visit; the Lane is a working campus. Lost Valley Education Center, an Oregon 501(c)(3) environmental nonprofit on 87 acres. Meadowsong Ecovillage is the residential community that provides affordable housing and land access on the same title. You take a course, a Community Experience Week, or a residency. The land was the Shiloh Youth Revival Centers’ “The Land” before a 1980s sale to people who wanted an eco-village."
	},
	"windsong": {
		model: "hoa",
		modelLabel: "Homeowners / body corporate",
		unique: false,
		summary: "Strata council plus a cohousing consensus process the community has used for decades. Buy a unit if one is for sale; then sit the culture. Easier than a closed co-op, more meetings than a raw Langley townhouse. Kwantlen and other Coast Salish territory; the 1996 completion is the settler cohousing date, not the first story of the creek.",
		whoDecides: "Strata council plus a cohousing consensus process the community has used for decades.",
		bodies: [{
			name: "WindSong Cohousing strata corporation",
			role: "34 individually owned townhomes on 5.8 acres in Walnut Grove, completed 19 July 1996. A condo/HOA with a cohousing common house and a consensus culture."
		}, {
			name: "Yorkson Creek setback / protected greenspace",
			role: "About 4 of 5.8 acres kept as forest, wetland, and salmon-creek setback after a year-long fight with the federal environment ministry. A use restriction."
		}],
		howItRuns: "Buy a unit if one is for sale; then sit the culture. Easier than a closed co-op, more meetings than a raw Langley townhouse. Kwantlen and other Coast Salish territory; the 1996 completion is the settler cohousing date, not the first story of the creek. A British Columbia strata corporation: a condo/HOA of 34 individually owned townhomes with a cohousing common house and a consensus culture. Homes are on the market when a household leaves. WindSong acquired a 5.8-acre field with one house, fought a year with the federal environment ministry over the salmon-creek setback, and built on about one-third of the land. The Tyee and the Globe and Mail both treat 19 July 1996 as the day Canadian cohousing became a built fact."
	},
	"yarrow": {
		model: "hybrid",
		modelLabel: "Hybrid",
		unique: false,
		summary: "YES Cooperative at the umbrella; Groundswell strata council for the 33 homes; a farm team / farm co-op on the twenty acres; a deli co-op. Buy a unit, lease farm land, or work the deli. Easier than a closed commune, more meetings than a raw Chilliwack acreage. Confirm which farm entities are current in the season you mean.",
		whoDecides: "YES Cooperative at the umbrella; Groundswell strata council for the 33 homes; a farm team / farm co-op on the twenty acres; a deli co-op.",
		bodies: [
			{
				name: "Groundswell Cohousing strata",
				role: "33 homes. A BC condo association with a cohousing culture, in place by 2013 after Durrett/McCamant."
			},
			{
				name: "Yarrow Ecovillage Society (YES) Cooperative",
				role: "Bought the 25-acre Yarrow dairy in 2002. Umbrella co-op."
			},
			{
				name: "Yarrow farm cooperative / CSA",
				role: "About 20 acres certified organic, leased to a succession of farm entities (Osprey, Ohm, Soban, Ripple Creek, Chubby Roots, The Farmacy). CSA and a food forest on Stewart Creek."
			}
		],
		howItRuns: "Buy a unit, lease farm land, or work the deli. Easier than a closed commune, more meetings than a raw Chilliwack acreage. Confirm which farm entities are current in the season you mean. Three entities under one umbrella, by design. The Yarrow Ecovillage Society (YES) Cooperative bought the 25-acre dairy in 2002. Chilliwack granted Canada’s first “Ecovillage zoning” in 2006. In 2010 Charles Durrett and Katie McCamant helped split farm, residential, and commercial. Groundswell Cohousing is a 33-home BC strata: a condo association with a cohousing culture. The farm is a cooperative that leases the organic twenty acres. A deli cooperative bought the Yarrow Deli in 2006. You may buy a Groundswell unit if one is for sale."
	},
	"ecoreality": {
		model: "cooperative",
		modelLabel: "Cooperative democracy",
		unique: false,
		summary: "A not-for-profit co-op of member-funders. Consensus culture on a small roll. Visit by arrangement with the people who answer the wiki. Joining is membership and land-debt. Harder than a Salt Spring B&B; easier than a closed commune, if they are actually taking members that year.",
		whoDecides: "A not-for-profit co-op of member-funders.",
		bodies: [{
			name: "EcoReality Co-op",
			role: "Not-for-profit agricultural co-op, tax-exempt under Income Tax Act s. 149(1)(e)."
		}, {
			name: "Adjoining 61-acre community farmland",
			role: "Neighbour site, not EcoReality’s title. The co-op’s published map puts parkland behind and this farmland beside."
		}],
		howItRuns: "Consensus culture on a small roll. Visit by arrangement with the people who answer the wiki. Joining is membership and land-debt. Harder than a Salt Spring B&B; easier than a closed commune, if they are actually taking members that year. EcoReality Co-op, a British Columbia not-for-profit agricultural cooperative, tax-exempt under Income Tax Act s. 149(1)(e). The 43-acre farm is co-op land, not strata lots. Two houses (four bedrooms in an early count), Zone-1 building cluster, water licences on two streams. You buy a co-op membership and help pay the land. Jan Steinman and Cleome Rowe have been the public faces. The adjoining 61 acres are community farmland, not EcoReality’s title."
	},
	"cabo-pulmo": {
		model: "assembly",
		modelLabel: "Village assembly",
		unique: false,
		summary: "A shore village of families plus a CONANP park director plus an A.C. You are born here, you marry in, or you work a dive shop. Visitors buy a tank. Cabo Pulmo Vivo is the civic layer that wants the town loved, not flipped.",
		whoDecides: "Resident families, ACCP, and the CONANP park director. The reef is federal; the houses are not.",
		bodies: [
			{
				name: "Parque Nacional Cabo Pulmo (CONANP)",
				role: "71.11 km² no-take marine park, decreed 5 June 1995. The water the village asked to protect."
			},
			{
				name: "Amigos para la Conservación de Cabo Pulmo A.C.",
				role: "2002 community conservation association. Patrols and education."
			},
			{
				name: "Castro family and village dive shops",
				role: "Mario Castro Lucero opened the first shop in 1990 and taught brothers and cousins. The weekday economy."
			},
			{
				name: "Cabo Pulmo Vivo",
				role: "Civic layer that wants the town lived in, not flipped."
			}
		],
		howItRuns: "A fishing town that put the nets down. Dive boats go out; ACCP talks to newcomers about the rules; CONANP holds the water. Book a tank. Confirm which shop. The park holds the water; the village holds the shore."
	},
	"baja-ecovillage": {
		model: "founder",
		modelLabel: "Founder-stewarded",
		unique: false,
		summary: "Founder-stewarded settlement plus an A.C. for the forest. Residents and visitors are invited to plant, measure, and hold the trails. Confirm current openings; this is a small hill above an estuary.",
		whoDecides: "Mark Lurie and Zonas Verdes de Punta Banda A.C. for the park; Cantú parcels for the houses.",
		bodies: [
			{
				name: "Zonas Verdes de Punta Banda, A.C.",
				role: "Manages El Rinconcito Verde from 2006. Conservation."
			},
			{
				name: "El Rinconcito Verde",
				role: "~54-acre canyon forest park protected with Cantú in 2005. Named by a schoolchild."
			},
			{
				name: "Mark Lurie",
				role: "Founder. Moved 1999, bought from Cantú 2003, planted tens of thousands of trees."
			}
		],
		howItRuns: "Planting days, trails, inventory. Houses on town parcels. The A.C. does not sell the canyon. Write through bajaecovillage.com."
	},
	"baja-biosana": {
		model: "consensus",
		modelLabel: "Consensus",
		unique: false,
		summary: "A small resident circle. New people enter when a house and a yes are both open. Retreat guests are not members. Arrange; do not treat El Chorro as a walk-in commune.",
		whoDecides: "The resident members of the 11-hectare oasis.",
		bodies: [
			{
				name: "Resident membership",
				role: "About nine people, about eleven natural-building homes. A house that opens is a membership conversation."
			},
			{
				name: "Retreat and natural-building programmes",
				role: "The public door. Guests sleep in the oasis; they do not join the roll by booking."
			},
			{
				name: "11-hectare El Chorro land",
				role: "Shared desert oasis under the Sierra de la Laguna. Off-grid."
			}
		],
		howItRuns: "Off-grid desert days, cob and a dome, retreats when they are running. GEN filmed the greening. Instagram is the current door."
	},
	"san-jose-de-la-zorra": {
		model: "indigenous-assembly",
		modelLabel: "Indigenous assembly",
		unique: false,
		summary: "Traditional Kumiai authority and an asamblea. The 2024 public-subject decree is civil personality. You do not join by buying a hectare of Guadalupe. Visit only as a guest, and only if the community is receiving. Confirm.",
		whoDecides: "Traditional Kumiai authority. The asamblea of the community.",
		bodies: [
			{
				name: "Traditional Kumiai authority",
				role: "The government of San José de la Zorra. 2024 Sujeto de Derecho Público is the civil face."
			},
			{
				name: "Comunidad Indígena Kumiai",
				role: "One of five Kumiai communities in Baja California. Ancestral membership."
			},
			{
				name: "Ejido El Porvenir",
				role: "Agrarian neighbour whose jurisdiction maps the 1,740 ha. Not the Kumiai landlord."
			}
		],
		howItRuns: "A valley people on their dirt. Basketry, language, small agriculture. Guests by arrangement. Do not arrive as if the wine route included a Kumiai tasting."
	},
	"rancho-pacifico-baja": {
		model: "founder",
		modelLabel: "Founder-stewarded",
		unique: false,
		summary: "A small host household with a published join path. Campground guests are not members. Read the PDF; write; visit. Harder than a Cerritos rental, easier than a closed commune, if they are actually taking people that season.",
		whoDecides: "The homestead hosts on the 15-acre rancho.",
		bodies: [
			{
				name: "Rancho Pacífico Baja hosts",
				role: "Off-grid homestead since 2019. Bakery, campground, and the eco-village invitation."
			},
			{
				name: "15-acre agricultural / eco-tourism parcel",
				role: "Private desert land east of El Pescadero."
			},
			{
				name: "Wood-fired bakery and campground",
				role: "The public face. Bread and beds. Guests leave."
			}
		],
		howItRuns: "Permaculture on 15 acres, pizza from the oven, vans in the campground. The PDF is the join path. Confirm."
	},
	"tateikie": {
		model: "indigenous-assembly",
		modelLabel: "Indigenous assembly",
		unique: false,
		summary: "Asamblea comunitaria. Gobernador Tradicional, agrario, and municipal delegate sit the cargos. Consensus. Visit only if the community is receiving, and never as a peyote tour.",
		whoDecides: "The asamblea comunitaria of TateiKie. Cargos are both civil and religious.",
		bodies: [
			{
				name: "Asamblea comunitaria",
				role: "Highest figure. Consensus of the comunidad."
			},
			{
				name: "Gobernador Tradicional",
				role: "Traditional authority. Political and religious cargo in one person."
			},
			{
				name: "Autoridad agraria and Delegado Municipal",
				role: "The civil wrappers that sit beside the ceremonial year."
			}
		],
		howItRuns: "A ceremonial headquarters of sixteen agencies in Mezquitic. You are Wixárika, or you are a guest. Wirikuta is a pilgrimage."
	},
	"ayotitlan": {
		model: "indigenous-assembly",
		modelLabel: "Indigenous assembly",
		unique: false,
		summary: "Consejo de Mayores and the asamblea ejidal. Comisariado for the 1963 paper. CONANP’s biosphere is a designation on the mountain, not their landlord. Visitors do not buy a hectare of Manantlán. Confirm.",
		whoDecides: "Consejo de Mayores and the asamblea of Ejido Ayotitlán.",
		bodies: [
			{
				name: "Consejo de Mayores",
				role: "Traditional Nahua-Otomí authority. The agrarian fight sits here."
			},
			{
				name: "Ejido Ayotitlán (comisariado)",
				role: "1963 presidential resolution. ~34,700 ha delivered of ~50,332 decreed."
			},
			{
				name: "Reserva de la Biosfera Sierra de Manantlán",
				role: "CONANP designation, 139,577 ha, 23 March 1987. The mountain around the ejido."
			}
		],
		howItRuns: "Milpa, forest, the undelivered hectáreas. Mining is the threat the mayores name. You are born into the ejido."
	},
	"bosque-la-primavera": {
		model: "board",
		modelLabel: "Board and staff",
		unique: false,
		summary: "A CONANP designation with a Jalisco directorate. You take a trail from Zapopan or Tala. Membership is not residential. Confirm closures in fire season.",
		whoDecides: "CONANP and SEMADET / the forest directorate. Ejidos and pequeña propiedad on the edges keep their own titles.",
		bodies: [
			{
				name: "Área de Protección de Flora y Fauna La Primavera",
				role: "30,500 ha, decreed 6 March 1980. The designation."
			},
			{
				name: "CONANP / SEMADET directorate",
				role: "Fire, trails, education. The weekday government of the lung."
			},
			{
				name: "Edge communities (Zapopan, Tala, Tlajomulco, El Arenal)",
				role: "Ejido and pequeña propiedad on the urban edge. Not the APFF’s lots."
			}
		],
		howItRuns: "Hike, do not camp where fire bans say no. Teopantli Kalpulli is a neighbour on the south pasture. The designation holds the forest."
	},
	yucun: {
		model: "board",
		modelLabel: "Board and staff",
		unique: false,
		summary: "Villagers’ committee on collective land. You walk the path they opened. You are not joining a co-op of outsiders. Homestays are the door.",
		whoDecides: "Yucun villagers’ committee and party branch.",
		bodies: [
			{
				name: "Yucun villagers’ committee",
				role: "4.86 km² collective rural land. The government of the land."
			},
			{
				name: "Village collective economy",
				role: "Bamboo, tea, tourism after the mines closed."
			},
			{
				name: "UNWTO designation",
				role: "2021 Best Tourism Village. Recognition."
			}
		],
		howItRuns: "Homestays and a path. Guests leave."
	},
	"lehe-daping": {
		model: "board",
		modelLabel: "Board and staff",
		unique: false,
		summary: "Villagers’ committee plus a reconstruction platform. Liao Xiaoyi was not the landlord. Guests of a reconstruction story do not buy a Pengzhou hectare. Confirm who is actually in the houses.",
		whoDecides: "Daping villagers’ committee. Beijing Global Village was the 2008 method.",
		bodies: [
			{
				name: "Daping villagers’ committee",
				role: "Collective mountain land. Still the government of the land."
			},
			{
				name: "Beijing Global Village",
				role: "Liao Xiaoyi’s NGO. Reconstruction platform, not the landlord of lots."
			},
			{
				name: "China Red Cross Foundation",
				role: "~¥3.6 million for houses, toilets, clinic. Money, not title."
			}
		],
		howItRuns: "You are of Daping, or you are a guest."
	},
	"shared-harvest": {
		model: "founder",
		modelLabel: "Founder-stewarded",
		unique: false,
		summary: "A social-enterprise company. Shi Yan is the public farmer. CSA members buy a season. Arrange a pickup or a farm day; do not treat the beds as a park.",
		whoDecides: "Share Harvest (Beijing) Agricultural Development Co., Ltd.",
		bodies: [
			{
				name: "Share Harvest company",
				role: "May 2012 CSA. Mafang and Shunyi. Boxes, not freehold."
			},
			{
				name: "Shi Yan",
				role: "Founder. URGENCI co-president. Public farmer."
			},
			{
				name: "CSA member households",
				role: "A season is a box."
			}
		],
		howItRuns: "Buy a season or apply to work."
	},
	"sun-commune": {
		model: "founder",
		modelLabel: "Founder-stewarded",
		unique: false,
		summary: "A company host. Guests of the pigsty are not members. Book rather than walk the pens.",
		whoDecides: "Hangzhou Sun Commune Rural Industry Development Co., Ltd. Chen Wei.",
		bodies: [
			{
				name: "Sun Commune company",
				role: "Registered 11 March 2014. Farm, CSA, classes, guesthouse."
			},
			{
				name: "Chen Wei",
				role: "Legal representative and founding host."
			},
			{
				name: "Shuangmiao village",
				role: "Collective dirt underneath a company farm."
			}
		],
		howItRuns: "Book. Eat. Leave."
	},
	qiandao: {
		model: "spiritual",
		modelLabel: "Spiritual community",
		unique: false,
		summary: "A minfei community. Visit only if they are receiving.",
		whoDecides: "The natural-farming circle at Maoliyuan.",
		bodies: [
			{
				name: "Qiandao Lake Natural Farming Ecovillage",
				role: "Minfei, 2014. The wrapper."
			},
			{
				name: "Founding monastic circle",
				role: "A Taiwanese Buddhist monk’s practice. ~20 people."
			},
			{
				name: "GENOA listing",
				role: "A network page, not the landlord."
			}
		],
		howItRuns: "Write. Natural farming."
	},
	"sunshine-ecovillage": {
		model: "board",
		modelLabel: "Board and staff",
		unique: false,
		summary: "A network host in a living village. Xuling’s committee is not GEN. Course guests leave. Arrange; do not treat terraces as a park.",
		whoDecides: "Sunshine Ecovillage Network, as guests of Xuling Village.",
		bodies: [
			{
				name: "Sunshine Ecovillage Network (三生谷)",
				role: "2015. EDE, GEN, UNESCO ESD."
			},
			{
				name: "Xuling villagers’ committee",
				role: "A thousand-year valley. The government of the land."
			},
			{
				name: "EDE courses",
				role: "The public door. Guests leave."
			}
		],
		howItRuns: "Take a course."
	},
	kitezh: {
		model: "board",
		modelLabel: "Board and staff",
		unique: false,
		summary: "A non-commercial partnership of foster parents. Morozov was the founder. Teachers are also parents. Guests of a children’s village do not walk bedrooms.",
		whoDecides: "Kitezh foster-parent partnership.",
		bodies: [
			{
				name: "Foster-parent partnership",
				role: "Holds the forest village. Houses are homes for children."
			},
			{
				name: "Experimental school",
				role: "Teachers are also parents."
			},
			{
				name: "Dmitry Morozov",
				role: "Founder, 1992. A public name, not the cadastre."
			}
		],
		howItRuns: "You foster or you teach."
	},
	"nevo-ecoville": {
		model: "board",
		modelLabel: "Board and staff",
		unique: false,
		summary: "A public association plus private plots. Goncharov was the office, not the tsar of Reuskula. Guests of Ladoga do not take a hectare. Write.",
		whoDecides: "Centre for Ecological Initiatives ‘Nevo-Ecoville’.",
		bodies: [
			{
				name: "Public association",
				role: "26 ha of organisation land. The wrapper since 1995."
			},
			{
				name: "Settlers’ private plots",
				role: "16 ha beside the association."
			},
			{
				name: "Ivan S. Goncharov",
				role: "Public executive. An office, not the landlord of Ladoga."
			}
		],
		howItRuns: "Write. Association or a private plot they will actually sell."
	},
	grishino: {
		model: "spiritual",
		modelLabel: "Spiritual community",
		unique: false,
		summary: "A small host circle in a living village. Seminar guests leave.",
		whoDecides: "The Grishino eco-circle, as guests of an older hamlet.",
		bodies: [
			{
				name: "Community izbas",
				role: "Two traditional houses. Gardens, seminars."
			},
			{
				name: "Village of Grishino",
				role: "The older hamlet at the confluence. Still the place-name."
			},
			{
				name: "Summer seminar hosts",
				role: "The public door. Guests leave."
			}
		],
		howItRuns: "Write."
	},
	tiberkul: {
		model: "spiritual",
		modelLabel: "Spiritual community",
		unique: false,
		summary: "A church. Guests of a photograph do not walk the Temple Peak.",
		whoDecides: "Church of the Last Testament. Confirm who speaks after the 2025 sentence.",
		bodies: [
			{
				name: "Church of the Last Testament",
				role: "The legal wrapper. A religious organisation."
			},
			{
				name: "Abode of Dawn",
				role: "The mountain town. Three tiers. Hand-built wood."
			},
			{
				name: "Sergey Torop (Vissarion)",
				role: "Founding teacher. Arrested 2020; twelve-year sentence reported 2025."
			}
		],
		howItRuns: "A faith. Confirm."
	},
	kovcheg: {
		model: "assembly",
		modelLabel: "Village assembly",
		unique: false,
		summary: "Existing families vote. A common house for meetings. Lazutin writes; he is not the tsar of 78 hectares. Guests come on published days.",
		whoDecides: "Member families. 75% must want a new household.",
		bodies: [
			{
				name: "Member families",
				role: "78 one-hectare plots. The vote is the filter."
			},
			{
				name: "Common house",
				role: "Meetings, school, guest days. The 2002 core."
			},
			{
				name: "Fedor Lazutin",
				role: "Public writer of the settlement. Not the landlord of every hectare."
			}
		],
		howItRuns: "Guest days or a named host. A hectare if they vote yes."
	},
	vedrussiya: {
		model: "hoa",
		modelLabel: "Homeowners association",
		unique: false,
		summary: "A settlement of family plots with a host office for excursions. Guests book.",
		whoDecides: "Vedrussiya settlement hosts and the families on their hectares.",
		bodies: [
			{
				name: "Vedrussiya settlement",
				role: "353 ha on the current count. Excursion door."
			},
			{
				name: "Family domains",
				role: "265 families, 1–2 ha plots. Worked dirt, not listings."
			},
			{
				name: "Excursion office",
				role: "The public path. Guests leave."
			}
		],
		howItRuns: "Book an excursion. Apply for a hectare."
	},
	rodnoe: {
		model: "assembly",
		modelLabel: "Village assembly",
		unique: false,
		summary: "A recognised kin’s-domain settlement of family permits. Neighbours. Festival guests leave.",
		whoDecides: "Rodnoe homesteaders, on the 2004 recognition.",
		bodies: [
			{
				name: "Rodnoe Kin Domain Settlement",
				role: "70 ha recognised June 2004. The paper."
			},
			{
				name: "Family permits",
				role: "From 2006. About 60 permanent families."
			},
			{
				name: "Festival circle",
				role: "Lake days. Guests, then the field again."
			}
		],
		howItRuns: "A permit and a hectare they will actually give."
	},
	orion: {
		model: "board",
		modelLabel: "Board and staff",
		unique: false,
		summary: "Foster parents, as at Kitezh. A children’s village is not a membership co-op of outsiders. Guests do not walk bedrooms.",
		whoDecides: "Orion foster-parent circle. Maria Pichugina was the public head.",
		bodies: [
			{
				name: "Orion children’s village",
				role: "2004 sister of Kitezh. Foster houses."
			},
			{
				name: "Maria Pichugina",
				role: "Raised at Kitezh; headed the second village."
			},
			{
				name: "Foster families",
				role: "10 families and ~40 children in Ecologia counts."
			}
		],
		howItRuns: "Foster or teach."
	},
	zdravoe: {
		model: "hoa",
		modelLabel: "Homeowners association",
		unique: false,
		summary: "A settlement of family plots with a common core. Guests of a cabin are not members. Write.",
		whoDecides: "Zdravoe settlement hosts and the families on their hectares.",
		bodies: [
			{
				name: "Zdravoe settlement",
				role: "145 ha beside Grigoryevskaya. Common core plus domains."
			},
			{
				name: "House of culture / guest core",
				role: "7 ha common. Cabins, pond, bath-house. The public door."
			},
			{
				name: "Family domains",
				role: "120 ha plots and roads. A hectare is an application."
			}
		],
		howItRuns: "Book a cabin. Apply for a hectare."
	},
	"bryn-gweled": {
		model: "board",
		modelLabel: "Board and staff",
		unique: false,
		summary: "A Homesteads meeting, usually the first Saturday after the work party and supper. Board of seven, overlapping three-year terms, a one-year president. Applicants meet families, then need an 80% yes before they may buy a house. You never own the land.",
		whoDecides: "The Homesteads meeting of member families, with a Board of seven carrying the paperwork.",
		bodies: [
			{
				name: "Homesteads meeting",
				role: "Usually first Saturday after the morning work party and covered-dish supper. The membership sits here."
			},
			{
				name: "Board of seven",
				role: "Overlapping three-year terms; one-year president. Treasurer and finance committee appointed."
			},
			{
				name: "Membership, Housing, and Nominating committees",
				role: "Elected. About 25 committees total; each member is expected to sit two."
			}
		],
		howItRuns: "Work party, supper, meeting. Houses sell after 80% membership approval. 99-year leases. No paid officers."
	},
	"the-vale": {
		model: "consensus",
		modelLabel: "Consensus",
		unique: false,
		summary: "A small membership on Community Service land-trust dirt. Houses are occupied, not sold as lots. Quiet. Distinct from Yellow Springs Home, Inc. and from Celo.",
		whoDecides: "The resident families, on trust land.",
		bodies: [{
			name: "The Vale membership",
			role: "~11 families on 40 acres. Occupancy."
		}, {
			name: "Community Service, Inc. Land Trust",
			role: "Landlord of the land under the houses since 1980."
		}],
		howItRuns: "A small Ohio hamlet. Confirm who is on the forty acres this year."
	},
	heathcote: {
		model: "consensus",
		modelLabel: "Consensus",
		unique: false,
		summary: "A small resident membership on School of Living trust land, with a wider non-resident membership. Visit by arrangement. Joining is a membership and a bed. Confirm who winters.",
		whoDecides: "Resident members on a 99-year lease from the School of Living.",
		bodies: [
			{
				name: "Heathcote Community",
				role: "A small resident circle (four resident adults on the current public count, plus non-resident members)."
			},
			{
				name: "School of Living",
				role: "The land trust."
			},
			{
				name: "Heathcote Education Center",
				role: "Fiscally sponsored SoL entity. Programs, not the landlord."
			}
		],
		howItRuns: "Consensus culture on a small roll. Education programs and a garden are the weekday. Harder than a Baltimore B&B; possible if they are actually taking residents."
	},
	"kimberton-hills": {
		model: "board",
		modelLabel: "Board and staff",
		unique: false,
		summary: "A Pennsylvania 501(c)(3) Camphill village. Board of directors holds fiduciary duty; an unpaid executive director is chosen from inside and rotates. Villagers enter through care admission. Distinct from Copake and Camphill Ontario.",
		whoDecides: "A board of directors, with an unpaid rotating executive director chosen from within.",
		bodies: [
			{
				name: "Board of directors",
				role: "Five meetings a year; March budget for an April fiscal year. Fiduciary and legal responsibility."
			},
			{
				name: "Executive director",
				role: "Chosen from inside the community, approved by the board, unpaid, rotates."
			},
			{
				name: "Admissions Group",
				role: "Villager admission. This is social care."
			},
			{
				name: "Camphill Association of North America",
				role: "Network, not the Kimberton landlord."
			}
		],
		howItRuns: "Extended-family houses, biodynamic farm, workshops. Visit by arrangement. Joining as a villager is a care admission; coworkers apply for a year or a life. Safeguarding is the point."
	},
	miccosukee: {
		model: "cooperative",
		modelLabel: "Cooperative democracy",
		unique: false,
		summary: "A Florida member-owned corporation of homesteaders. Private titles on the homesteads after the last deed in 2000; 90+ acres of common preserve. Waiting lists have existed. You join, or you buy a member's house when one is for sale.",
		whoDecides: "The membership of the Miccosukee Land Cooperative.",
		bodies: [{
			name: "Miccosukee Land Cooperative",
			role: "Member-owned corporation. Homesteads privately owned; common preserve in common."
		}],
		howItRuns: "You own a homestead if you are a member. The co-op maintains roads and the preserve."
	},
	"shannon-farm": {
		model: "consensus",
		modelLabel: "Consensus",
		unique: false,
		summary: "Consensus of the members. Housing, Land Stewardship, and Finance committees bring proposals to a monthly business meeting. Not Twin Oaks income-sharing. The trust owns land and buildings.",
		whoDecides: "The membership, by consensus, at monthly business meetings.",
		bodies: [
			{
				name: "Monthly business meeting",
				role: "Consensus of the members."
			},
			{
				name: "Housing, Land Stewardship, and Finance committees",
				role: "Standing committees that bring proposals."
			},
			{
				name: "Shannon Farm Community trust",
				role: "Owns the 520 acres and the buildings."
			}
		],
		howItRuns: "No joining fee; you need assets to rent or buy occupancy of a house. Income-based dues. Harder than a Charlottesville rental; easier than Twin Oaks' labor-credit year if they have a house."
	},
	"village-homes": {
		model: "hoa",
		modelLabel: "Homeowners / body corporate",
		unique: false,
		summary: "A California planned-unit development with a homeowners association and an architectural review board. You buy a house if one is for sale. Easier than a closed co-op, more meetings than a raw Davis tract. Lots sell.",
		whoDecides: "The homeowners association, with architectural review.",
		bodies: [{
			name: "Village Homes Homeowners Association",
			role: "Common greens, bike paths, orchards, drainage easements."
		}, {
			name: "Architectural Review Board",
			role: "Design review. Judy Corbett has sat it."
		}],
		howItRuns: "Buy a house on the open market subject to design review. HOA assessments. Patwin land; 1976 is the settler construction date, not the first story of Putah Creek. The ecological claim is the design."
	},
	songaia: {
		model: "hoa",
		modelLabel: "Homeowners / body corporate",
		unique: false,
		summary: "Cohousing consensus plus ordinary homeownership. Buy a unit if one is for sale, or intern. Confirm which properties are the core and which are the Greater Neighborhood. Coast Salish land.",
		whoDecides: "The cohousing membership, as homeowners with a common-house culture.",
		bodies: [{
			name: "Songaia Cohousing",
			role: "Core of about 13 homes on ~11 acres, common house."
		}, {
			name: "Songaia Greater Neighborhood",
			role: "Nearby houses that grew around the original cluster. Confirm the line."
		}],
		howItRuns: "Easier than a closed commune, more meals than a raw Bothell tract. Internships are a public path. Houses sell."
	},
	heartwood: {
		model: "hoa",
		modelLabel: "Homeowners / body corporate",
		unique: false,
		summary: "Cohousing consensus plus a Colorado HOA. Buy a house if one is for sale. The 350 acres of open space come with the house, not as lots. Southern Ute and other Ute lands; 2000 is the settler completion date.",
		whoDecides: "The 24-home cohousing membership, as an HOA with consensus culture.",
		bodies: [{
			name: "Heartwood Cohousing HOA",
			role: "24 privately owned homes completed in 2000."
		}, {
			name: "Open-space covenants",
			role: "About 350 of 360 acres as pasture, meadow, juniper and pine. Confirm they are waiting to happen."
		}],
		howItRuns: "Easier than a closed commune, more meetings than a raw Bayfield acreage. Houses list when one is for sale."
	},
	"bhrugu-aranya": {
		model: "spiritual",
		modelLabel: "Spiritual / ashram",
		unique: false,
		summary: "A foundation holds four organic hectares. A resident circle of families lives Agnihotra at both twilights. Occupancy is a yes from the people who winter there.",
		whoDecides: "Homa Therapy Foundation as landlord; resident families as the daily fire and garden.",
		bodies: [{
			name: "Homa Therapy Foundation in Poland",
			role: "Holds the four hectares at Wysoka / Nadlas."
		}, {
			name: "Resident circle",
			role: "Fourteen adults and four children on the GEN count."
		}],
		howItRuns: "Workshops and warm-month volunteers are the public door. Joining means being of the four hectares, not buying a chalet. Harder than a Zakopane rental."
	},
	juchowo: {
		model: "board",
		modelLabel: "Board / foundation",
		unique: false,
		summary: "An OPP foundation owns 1,900 ha; a farm company runs the Demeter dairy; therapeutic workshops sit on the same dirt. You work here or intern.",
		whoDecides: "Fundacja im. Stanisława Karłowskiego as owner; Spółka Rolnicza Juchowo as the farm.",
		bodies: [
			{
				name: "Stanisław Karłowski Foundation",
				role: "OPP public-benefit foundation. Land, animals, buildings, machinery."
			},
			{
				name: "Spółka Rolnicza Juchowo Sp. z o.o.",
				role: "Commercial arm. Dairy and shop."
			},
			{
				name: "Therapeutic workshops",
				role: "Care and education on the same land."
			}
		],
		howItRuns: "A job, an internship, or a disability-workshop placement. No member share. Harder than a farm-stay listing."
	},
	brzozowka: {
		model: "assembly",
		modelLabel: "Village assembly",
		unique: false,
		summary: "A wiec when a matter needs a voice; consensus; 23 articles from 2018. A foundation holds the centre; sixteen families hold their own plots. Guests of a hemp festival do not sit the Prawo.",
		whoDecides: "The wiec, by consensus, and the foundation as holder of the centre.",
		bodies: [
			{
				name: "Fundacja Eko-Osada Brzozówka",
				role: "Social centre, workshops, gallery."
			},
			{
				name: "Wiec / Prawo Eko-Brzozówki",
				role: "2018, 23 articles, consensus. Direct-democracy experiments under Article 4."
			},
			{
				name: "Sixteen private plots",
				role: "Household dirt. Join the osadą in the measure you choose."
			}
		],
		howItRuns: "Take a plot after talking to the foundation, or work the centre. Easier than a closed commune if a działka is open;."
	},
	"ostoja-natury": {
		model: "cooperative",
		modelLabel: "Cooperative",
		unique: false,
		summary: "A Polish agricultural cooperative of eight founding members from outside Tomaszyn. Ostaszewski is CEO. Guests of a Sunday bazar do not take a hectare.",
		whoDecides: "Spółdzielnia Ostoja Natury; Piotr Ostaszewski as public CEO.",
		bodies: [{
			name: "Spółdzielnia Ostoja Natury",
			role: "2018. Regenerative farm, BIO HUB, earthship housing."
		}, {
			name: "Village of Tomaszyn",
			role: "About 18 inhabitants. The co-op is the agricultural engine, not the municipality."
		}],
		howItRuns: "Join the spółdzielnia or work the farm. Confirm they are taking members. Harder than a Warmia agritourism listing."
	},
	osada: {
		model: "consensus",
		modelLabel: "Consensus",
		unique: false,
		summary: "A 2021 association with daily circles in season. Physical work and inner work are both the week. Guests of a month are not members on day two.",
		whoDecides: "Stowarzyszenie Osada Możliwości and the small household that actually winters there.",
		bodies: [{
			name: "Stowarzyszenie Osada Możliwości",
			role: "2021. Legal face of the regenerative centre at Prosinko."
		}, {
			name: "Seasonal circle",
			role: "ESC and month-long laboratories May–October. Confirm the winter household."
		}],
		howItRuns: "Apply for a month or come as ESC. A placement is not membership. Harder than a lake-district rental."
	},
	sunseed: {
		model: "sociocracy",
		modelLabel: "Sociocracy",
		unique: false,
		summary: "A UK charity and a sociocracy of departments in a gypsum mill hamlet. Short-stay volunteers and ESC placements do not sit the long-term coordinator circle.",
		whoDecides: "Department coordinators and the charity (a 2022 note described a Spanish-association path, confirm what is filed).",
		bodies: [
			{
				name: "Sunseed Desert Technology (UK charity no. 1098353)",
				role: "Civil face of the Los Molinos project. Still named on the current site."
			},
			{
				name: "Department coordinators",
				role: "Garden, drylands, appropriate technology, education, kitchen, maintenance. Months to a year."
			},
			{
				name: "ESC and intern circle",
				role: "Placements. Not title."
			}
		],
		howItRuns: "Apply for ESC, an internship, or a residency. Six hours, five days. Harder than an Almería rental."
	},
	"gaia-ashram": {
		model: "founder",
		modelLabel: "Founder-stewarded",
		unique: false,
		summary: "Om Sunisa Jamwiset Deiters and Tom Deiters began the ashram in 2013. Courses and two-week volunteers are not membership. Confirm who winters.",
		whoDecides: "The household and Gaia School Asia, founder-stewarded.",
		bodies: [{
			name: "Gaia Ashram / Gaia School Asia",
			role: "Learning community at Ban That. Occupancy and courses."
		}, {
			name: "Volunteer and internship programmes",
			role: "Two weeks, then maybe three months."
		}],
		howItRuns: "Email, arrive Monday, work five to six hours. Closed April–May. Harder than a Udon guesthouse."
	},
	"quail-springs": {
		model: "board",
		modelLabel: "Board and staff",
		unique: false,
		summary: "A 501(c)(3) board and a staff-community that names sociocratic practice in the work-trade brief. Work-traders do not sit the board.",
		whoDecides: "Nonprofit board and staff-community.",
		bodies: [{
			name: "Quail Springs Permaculture",
			role: "California educational 501(c)(3) on 450 acres."
		}, {
			name: "Work-trade cohort",
			role: "Four months, food and a tent. Many staff began here."
		}],
		howItRuns: "Apply in the published window. Off-grid Cuyama. Harder than a Highway 33 rental."
	},
	"camphill-minnesota": {
		model: "board",
		modelLabel: "Board and staff",
		unique: false,
		summary: "A charitable board and Camphill coworker culture. Villagers are residents of a care community, not shareholders. A six-month volunteer is not a member of the corporation. Distinct from Copake.",
		whoDecides: "Camphill Village Minnesota, Inc. board and coworker culture.",
		bodies: [
			{
				name: "Camphill Village Minnesota, Inc.",
				role: "Minnesota 501(c)(3), EIN 41-1387425. Holds the ~525 acres."
			},
			{
				name: "Lifesharing households",
				role: "Villagers, coworkers, live-in volunteers. Safeguarding is the point."
			},
			{
				name: "Camphill Association of North America",
				role: "Full-member affiliation. Network, not the Celtic Drive landlord."
			}
		],
		howItRuns: "Apply as a live-in volunteer or be placed as a villager. Vocational. Harder than a Minnesota farm-stay. Houses are homes."
	},
	"drop-city": {
		model: "founder",
		modelLabel: "Founder circle",
		unique: false,
		summary: "Four artists bought a pasture and named it Drop City. No board, no lots. The circle did not hold past the early 1970s. Historical.",
		whoDecides: "Gene and JoAnn Bernofsky, Richard Kallweit, Clark Richert, then whoever remained, then no one.",
		bodies: [{
			name: "Founder artists",
			role: "1965 purchase and the first domes."
		}, {
			name: "Open-land arrivals",
			role: "Filled the domes. Did not become a recorded membership."
		}],
		howItRuns: "It does not run. The commune emptied. This page is a record."
	},
	"morningstar-ranch": {
		model: "founder",
		modelLabel: "Open Land host",
		unique: false,
		summary: "Lou Gottlieb opened 32 acres and refused a membership filter. Sonoma County ended the residential commune. Historical. Not OAEC.",
		whoDecides: "Gottlieb as host, then the courts and the bulldozers.",
		bodies: [{
			name: "Lou Gottlieb",
			role: "Owner who tried to deed the ranch to God."
		}, {
			name: "Open Land household",
			role: "Whoever arrived, 1966–1973."
		}],
		howItRuns: "It does not run as a village. The acreage is private land."
	},
	rajneeshpuram: {
		model: "spiritual",
		modelLabel: "Theocratic city",
		unique: false,
		summary: "A municipal corporation on paper and an ashram in practice. Sheela and Rajneesh. Three years, then disincorporation. Listed as closed, not as a model to copy.",
		whoDecides: "Ma Anand Sheela’s office and the Bhagwan, with a city council on paper.",
		bodies: [{
			name: "City of Rajneeshpuram",
			role: "Oregon municipal corporation, 1982–1985."
		}, {
			name: "Rajneesh Foundation / ashram",
			role: "The parallel household that actually ran the ranch."
		}],
		howItRuns: "It does not run. The city was disincorporated in 1985."
	},	"source-family": {
		model: "spiritual",
		modelLabel: "Spiritual household",
		unique: false,
		summary: "Father Yod as founder-weight. A restaurant household, then Hawaii, then a 1975 death. Historical.",
		whoDecides: "Jim Baker / Father Yod, then no one.",
		bodies: [{
			name: "The Source Restaurant",
			role: "Till and public face, 1969–1974."
		}, {
			name: "The Family",
			role: "About 150 people at the height."
		}],
		howItRuns: "It does not run. Baker died 25 August 1975."
	},	"brook-farm": {
		model: "assembly",
		modelLabel: "Association then phalanx",
		unique: false,
		summary: "A six-year assembly of members, then a Fourierist constitution. Fire and debt. Historical.",
		whoDecides: "George Ripley and the association, then the phalanx officers, until 1847.",
		bodies: [{
			name: "Brook Farm Association",
			role: "1841 Transcendentalist start."
		}, {
			name: "Fourierist phalanx",
			role: "1844 reorganization. Ended 1847."
		}],
		howItRuns: "It does not run."
	},
	"hancock-shaker": {
		model: "board",
		modelLabel: "Museum board",
		unique: false,
		summary: "Elders and Eldresses until 1960. A museum board now. Those are not the same. Sabbathday Lake is the living society.",
		whoDecides: "Hancock Shaker Village, Inc. board, for a campus. Nobody sits a Shaker ministry here.",
		bodies: [{
			name: "United Society at Hancock (historical)",
			role: "1790–1960 living covenant."
		}, {
			name: "Hancock Shaker Village, Inc.",
			role: "1960 museum nonprofit. Holds the landmark campus."
		}],
		howItRuns: "As a museum: tickets, the Round Stone Barn, preservation. Not as a Shaker household."
	},
	"oneida-community": {
		model: "spiritual",
		modelLabel: "Perfectionist household",
		unique: false,
		summary: "John Humphrey Noyes as founder-weight, then a committee, then a company board. The religious village ended in 1881.",
		whoDecides: "Noyes, then the joint-stock conversion that ended the household.",
		bodies: [{
			name: "Oneida Community",
			role: "1848–1881 Perfectionist household."
		}, {
			name: "Oneida Community, Limited",
			role: "1881 company. Not the village."
		}],
		howItRuns: "It does not run as a village. The Mansion House is a museum and apartments."
	},	"new-harmony": {
		model: "founder",
		modelLabel: "Prophet then proprietor",
		unique: false,
		summary: "Rapp as prophetic founder, then Owen as proprietor-reformer. Two villages, both ended. The town remained.",
		whoDecides: "George Rapp until 1825; Robert Owen until 1827.",
		bodies: [{
			name: "Harmony Society",
			role: "1814–1825 Harmonie. Moved to Economy, PA."
		}, {
			name: "Owenite Preliminary Society",
			role: "1825–1827. Fractured."
		}],
		howItRuns: "Neither village runs. Historic New Harmony interprets a town."
	},
	"llano-del-rio": {
		model: "cooperative",
		modelLabel: "Cooperative colony",
		unique: false,
		summary: "A socialist company and Harriman’s founder-weight. Water ended California in 1918. Historical.",
		whoDecides: "Llano del Rio Company meetings and Job Harriman, until abandonment.",
		bodies: [{
			name: "Llano del Rio Company",
			role: "1914–1918 California colony."
		}, {
			name: "Newllano remnant",
			role: "Louisiana, failed in the 1930s."
		}],
		howItRuns: "It does not run. Ruins."
	},	lomaland: {
		model: "spiritual",
		modelLabel: "Theosophical order",
		unique: false,
		summary: "Katherine Tingley as founder-weight. A Raja Yoga city on Point Loma. Headquarters left in 1942.",
		whoDecides: "Tingley until 1929, then a decline no second founder could hold.",
		bodies: [{
			name: "Universal Brotherhood and Theosophical Society",
			role: "1897–1942 Point Loma community."
		}, {
			name: "Raja Yoga school",
			role: "The educational till of the headland."
		}],
		howItRuns: "It does not run as a village. A university occupies the headland."
	},	meltemi: {
		model: "assembly",
		modelLabel: "Commons assembly",
		unique: true,
		summary: "A 1946 Attica-coast commons of more than 200 families. Written rules from the mid-1950s. Direct participatory democracy plus a representative board described as technical more than ruling. Peer pressure does the rest. They did not buy house lots.",
		whoDecides: "Families on the plot, through assembly and a serving board. Four generations. Many seasonal.",
		bodies: [
			{
				name: "Household commons",
				role: "200+ families. The people who keep the 150 stremma."
			},
			{
				name: "Board",
				role: "Technical, more serving than ruling, in the 2013 account. Not an HOA of lots."
			},
			{
				name: "Meltemi NGO",
				role: "Registered nonprofit for sustainable development. The civil face. GEN listing."
			}
		],
		howItRuns: "Rules from the 1950s, enforced by neighbours. A Rafina beach day is not a vote. There is no lot you buy to sit the assembly.",
		dive: {
			title: "Occupation that became a four-generation commons",
			lead: "They moved in and started taking care of it. Title was not the founding act. Care was. Seventy years later the plot is still one piece of Attica coast, and the board still serves more than it rules.",
			organs: [
				{
					name: "The plot",
					what: "150 stremma outside Rafina. Not a cadastre of private houses this atlas found."
				},
				{
					name: "Written rules, mid-1950s",
					what: "Internal life and land care. Older than the word ecovillage."
				},
				{
					name: "Assembly and board",
					what: "Participatory plus representative. Peer pressure instead of a ranger."
				}
			],
			path: "A household of four generations, not a membership share. Write through the GEN listing. Do not arrive as if a room is waiting.",
			history: "1946 settlement. 1950s rules. 2013 public account as a registered ecovillage entity. GEN still lists it.",
			tension: "Seasonal density. Summer is full; winter is not the same village. Who is actually on the plot this month is the live question."
		}
	},
	tui: {
		model: "board",
		modelLabel: "Charitable trust",
		unique: false,
		summary: "Trustees hold the Wainui Bay farm. Residents run the week, contribute labour and costs. Work exchanges are not membership. The deed moved from Tui Land Trust to Tui Spiritual and Educational Trust so the objects would match the life.",
		whoDecides: "Trustees of TSET, with residents on the land.",
		bodies: [
			{
				name: "Tui Spiritual and Educational Trust",
				role: "Current deed-holder."
			},
			{
				name: "Residents",
				role: "About 30–40 people. Garden, contributions, the week."
			},
			{
				name: "Tui Land Trust",
				role: "Historical purchaser, 1984. Assets moved later."
			}
		],
		howItRuns: "A Golden Bay farm under a charitable lock. Hosted stays are booked. A guest of a week does not sit the trust."
	},
	dyssekilde: {
		model: "assembly",
		modelLabel: "Village assembly",
		unique: false,
		summary: "Four annual meetings of the whole community take the major decisions. Neighbourhood groups run heat, houses, and the week. About 80 households on 14 ha at Torup.",
		whoDecides: "The assembled village, four times a year, plus neighbourhood groups.",
		bodies: [
			{
				name: "Village meetings",
				role: "Four a year. Major decisions."
			},
			{
				name: "Household groups",
				role: "Domes, terraces, self-build, social-rent. Day-to-day."
			},
			{
				name: "Økosamfundet Dyssekilde",
				role: "Owns communal ground and the former farm building."
			}
		],
		howItRuns: "A visitor does not vote. A house in a group is the door. Social-rent stock was a political choice, not an afterthought."
	},
	"greater-world": {
		model: "hoa",
		modelLabel: "Homeowners / land users",
		unique: false,
		summary: "Fee-simple lots, a board, a Land User’s Code. About 90–115 earthships on a 630-acre mesa. A 2026 jury held Michael Reynolds, not the HOA, financially responsible for basic infrastructure. Confirm current papers.",
		whoDecides: "Lot owners through a board. Reynolds remains the origin story and, after 2026, part of the infrastructure fact.",
		bodies: [
			{
				name: "Lot owners",
				role: "Fee simple, 1–3 acres. The membership is the deed."
			},
			{
				name: "Board of directors",
				role: "Land User’s Code, published dues for roads."
			},
			{
				name: "Earthship Biotecture",
				role: "Visitor centre and academy. A business at the edge, not every house’s landlord."
			}
		],
		howItRuns: "You buy a lot and live off-grid under a code. A tour of the visitor centre is not a board meeting. Read the 2026 verdict before you join a dues structure you have not seen."
	},
	narara: {
		model: "cooperative",
		modelLabel: "Cooperative democracy",
		unique: false,
		summary: "Narara Ecovillage Co-operative Ltd. Members buy in, build under covenants on 12 residential hectares of a 63-hectare former research station. A house is the door.",
		whoDecides: "Co-operative members.",
		bodies: [
			{
				name: "Narara Ecovillage Co-operative Ltd",
				role: "Holds the station. WICA water licence. The civil face."
			},
			{
				name: "Dwelling members",
				role: "Fifty-plus homes. Covenants on what you may build."
			},
			{
				name: "Food co-operative",
				role: "Common gardens, unfenced in the published brief. Not the title of the conservation land."
			}
		],
		howItRuns: "A Central Coast co-op, not a commune. Homes turn over. Conservation hectares are not lots."
	},
	lammas: {
		model: "cooperative",
		modelLabel: "Leasehold smallholdings",
		unique: true,
		summary: "Nine original smallholdings on 1000-year agricultural leases, plus a hub, under Welsh One Planet Development monitoring. The planning condition is that households substantially live from the land. First UK ecovillage with prospective low-impact consent, 2009.",
		whoDecides: "Smallholders on their leases, plus whatever hub practice currently sits. OPD monitoring is a planning officer’s fact, not a homeowners association.",
		bodies: [
			{
				name: "Smallholders",
				role: "Originally nine holdings of about 7 acres. 1000-year agricultural leases."
			},
			{
				name: "Community hub",
				role: "Courses, open days, the public room."
			},
			{
				name: "One Planet Development",
				role: "Welsh planning condition. Livelihood test. National policy followed this project."
			}
		],
		howItRuns: "A course guest does not sit a holding. Grand Designs is not a membership path. You have to live from the land.",
		dive: {
			title: "The first One Planet village",
			lead: "Permission in 2009, after three years, made a hillside of self-built smallholdings legal in a way the UK had not quite allowed. The Welsh Government then wrote a national policy. The lock is a 1000-year agricultural lease and a livelihood test, not a freehold you flip.",
			organs: [
				{
					name: "1000-year agricultural lease",
					what: "Autonomy without a freehold market. Long enough to plant a coppice."
				},
				{
					name: "Nine original holdings",
					what: "About 7 acres each, food, fuel, income. Later peripheral households have accrued."
				},
				{
					name: "OPD monitoring",
					what: "A planning condition. You have to show the land-based life, not only the grass roof."
				}
			],
			path: "Open days and hub courses first. A holding when one is actually offered. Harder than a Pembrokeshire cottage.",
			history: "Tony Wrench, Paul Wimbush, Larch Maxey. Campaign from 2006. Permission 2009. Grand Designs 2016. Fire 2018.",
			tension: "The original nine and the later peripheral map. Residents have spoken of more than the original 76 acres. Confirm who holds which lease before you treat a documentary as a deed."
		}
	},
	tempelhof: {
		model: "cooperative",
		modelLabel: "Foundation and eG",
		unique: true,
		summary: "A nonprofit foundation owns the Kreßberg ground. Schloss Tempelhof eG holds a 99-year leasehold and runs the hamlet: one member, one vote, independent of deposit size. Farm, guesthouse, school. Seminar guests do not sit the eG.",
		whoDecides: "Cooperative members, on foundation land.",
		bodies: [
			{
				name: "Schloss Tempelhof foundation",
				role: "Owns the ground. The lock against speculation."
			},
			{
				name: "Schloss Tempelhof eG",
				role: "GnR 2585. Settlement, buildings, farm, guesthouse. One member, one vote."
			},
			{
				name: "Enterprises",
				role: "SoLaWi, shop, café, seminars, school. The earned week."
			}
		],
		howItRuns: "Kennenlernen, then membership. A guesthouse weekend is not a share. The foundation is why a departing member cannot sell the dirt.",
		dive: {
			title: "A hamlet taken off the market",
			lead: "The cleverness is the split: foundation owns the ground, cooperative lives on a 99-year lease. Deposits vary; votes do not. A Templar hamlet that cannot be flipped.",
			organs: [
				{
					name: "Foundation",
					what: "Title. 99-year leasehold out to the eG."
				},
				{
					name: "eG",
					what: "Registered cooperative. One member, one vote, whatever the deposit."
				},
				{
					name: "Farm and guesthouse",
					what: "How the hamlet eats and how strangers first arrive."
				}
			],
			path: "Book the guesthouse or a seminar. Wege in die Gemeinschaft on the site. Then the eG, if they are taking people.",
			history: "2010 founding. Earthship community room publicly costed 2015. Fifteen years counted in 2026.",
			tension: "Seminar scale (groups to 140) beside a village of 130. Which door is the course and which is a home is the ordinary compact."
		}
	},
	govardhan: {
		model: "spiritual",
		modelLabel: "Spiritual order",
		unique: false,
		summary: "ISKCON Chowpatty / temple authorities run an ashram campus at Galtare. Radhanath Swami is the published inspiration. Guests book. Disciples and staff live in. There is no members’ co-op of lots.",
		whoDecides: "Temple and ashram management under ISKCON Chowpatty.",
		bodies: [
			{
				name: "ISKCON Chowpatty / GEV",
				role: "Religious charitable trust. Holds the land."
			},
			{
				name: "Temple",
				role: "Sri Sri Radha Madanmohan, 2019. The religious centre."
			},
			{
				name: "Programmes",
				role: "Rural development, gurukula, Ayurveda, GSC. Not title."
			}
		],
		howItRuns: "A booked guest follows ashram form. A weekend is not discipleship. Confirm current officers before you treat a 2010 move as the 2026 org chart."
	},
	cambium: {
		model: "hybrid",
		modelLabel: "Association and asset pool",
		unique: false,
		summary: "A 2014 Verein lives in a barracks bought in 2019 by a Vermögenspool of 250+ investors. Residents and investors are not the same list. Aim of about 100 people in the former Hadik Kaserne at Fehring.",
		whoDecides: "The association, on land the pool purchased.",
		bodies: [
			{
				name: "Leben in Gemeinschaft (Verein)",
				role: "Founded 2014. Community face. Andreas Schindler first Obmann."
			},
			{
				name: "Vermögenspool",
				role: "Direct-credit investors. Bought the barracks May 2019."
			},
			{
				name: "Residents",
				role: "About 50 adults and 25 children in published figures."
			}
		],
		howItRuns: "Write the association. The pool is money, not automatically a bed. A seminar weekend is not membership."
	},
	arterra: {
		model: "sociocracy",
		modelLabel: "Sociocracy",
		unique: false,
		summary: "Circles, consent, roles. Asociación Arterra Bizimodu for the civil face; cooperative capital for people who integrate. Monthly contribution, about 30 hours a month of work, then an integration fee. ESC volunteers do not sit the membership circle.",
		whoDecides: "Sociocratic circles of integrated members.",
		bodies: [
			{
				name: "Asociación Arterra Bizimodu",
				role: "Spanish cultural association. Open doors, ESC, courses."
			},
			{
				name: "Cooperative capital",
				role: "For people who have integrated. Not the first-week guest."
			},
			{
				name: "Circles",
				role: "Consent decisions, roles, feedback. The week."
			}
		],
		howItRuns: "Puertas abiertas first. Trial, hours, contribution, then capital. An eight-month ESC is a placement, not a share of the Artieda house."
	},
 ...livingBatch2Governance,
 ...livingBatch3Governance,
 ...livingBatch4Governance,
 ...livingBatch5Governance,
 ...livingBatch6Governance,
 ...livingBatch7Governance,
 ...livingBatch8Governance,
 ...livingBatch9Governance,
 ...livingBatch10Governance,
 ...livingBatch11Governance,
 ...livingBatch12Governance,
 ...livingBatch13Governance,
 ...livingBatch14Governance,
 ...livingBatch15Governance,
 ...livingBatch16Governance,
 ...livingBatch17Governance,
 ...livingBatch18Governance,
 ...livingBatch19Governance,
 ...livingBatch20Governance,
 ...livingBatch21Governance,
 ...livingBatch22Governance,
 ...livingBatch23Governance,
 ...livingBatch24Governance,
 ...livingBatch25Governance,
 ...livingBatch26Governance,
 ...livingBatch27Governance,
 ...livingBatch28Governance,
 ...livingBatch29Governance,
 ...livingBatch30Governance,
 ...livingBatch31Governance,
 ...livingBatch32Governance,
 ...livingBatch33Governance,
 ...livingGlampingGovernance,
 ...sustainableEcovillageGovernance,
 ...maitreyaEcovillageGovernance,
 ...formerClosedGovernance,
}

for (const [slug, patch] of Object.entries(uniqueGovernanceAdditions)) {
 const row = governanceBySlug[slug];
 if (!row) throw new Error(`unique governance addition for unknown slug ${slug}`);
 Object.assign(row, patch);
}

for (const [slug, patch] of Object.entries(uniqueGovernanceDeepen)) {
 const row = governanceBySlug[slug];
 if (!row) throw new Error(`unique governance deepen for unknown slug ${slug}`);
 Object.assign(row, patch);
}

export const governanceModels = (Object.keys(modelLabels) as GovernanceModel[]).sort((a, b) =>
 modelLabels[a].localeCompare(modelLabels[b]),
);

export const uniqueGovernanceSlugs = Object.entries(governanceBySlug)
 .filter(([, row]) => row.unique)
 .map(([slug]) => slug);

export const uniqueGovernanceCount = uniqueGovernanceSlugs.length;

export function governanceFor(slug: string): Governance {
 const row = governanceBySlug[slug];
 if (!row) {
 throw new Error(`Missing governance data for ${slug}`);
 }
 return row;
}

export function hasUniqueGovernance(slug: string): boolean {
 return Boolean(governanceBySlug[slug]?.unique);
}
