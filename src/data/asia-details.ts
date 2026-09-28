import type { LegalEntity } from "./legal-entities";
import type { LandOwnership } from "./land-ownership";
import type { CommunityFunding } from "./funding";
import type { VisitJoin } from "./visit-join";
import type { DailyLife } from "./daily-life";
import type { InformalAgreement } from "./informal-agreements";

export const asiaLegalEntities: Record<string, LegalEntity[]> = {
 "atarashiki-mura": [
 {
 name: "Atarashiki-mura (general incorporated foundation)",
 kind: "Japanese general incorporated foundation",
 role: "Holds the Moroyama 10 ha, houses, dining hall, and farm. Saitama approved a foundation in 1948.",
 status: "current",
 layer: "land",
 year: "Village 1918; Moroyama 1939; foundation 1948",
 },
 {
 name: "Hyūga remnant",
 kind: "Japanese general incorporated foundation",
 role: "A few members still live at the original Miyazaki site, dependent on Moroyama and external support. Same movement.",
 status: "current",
 layer: "membership",
 year: "1918",
 },
 {
 name: "Atarashiki-mura Tomo-no-kai (Friends)",
 kind: "Japanese nonprofit organization",
 role: "Donor circle. FY2022 donations (~¥12m) outran farm and solar. Support, not the landlord.",
 status: "associated",
 layer: "network",
 },
 ],
 anandwan: [
 {
 name: "Maharogi Sewa Samiti, Warora",
 kind: "Indian charitable society",
 role: "Not-for-profit NGO founded 19 August 1949. Holds Anandwan and sister campuses.",
 status: "current",
 layer: "land",
 year: "1949",
 },
 {
 name: "Somnath Prakalp and Lok Biradari Prakalp",
 kind: "Indian charitable society",
 role: "Sister MSS campuses in Chandrapur and Hemalkasa (Gadchiroli). Same family.",
 status: "current",
 layer: "network",
 },
 {
 name: "Hospitals, schools, and workshops",
 kind: "On-site intern and education program",
 role: "Two hospitals, college, schools for the blind and the deaf, orphanage, technical wing, farm industries.",
 status: "current",
 layer: "education",
 },
 ],
 "barefoot-college": [
 {
 name: "Social Work and Research Centre (Barefoot College, Tilonia)",
 kind: "Indian charitable society",
 role: "Voluntary organisation founded 1972 by Bunker Roy. Holds the 8-acre Tilonia campus.",
 status: "current",
 layer: "land",
 year: "1972",
 },
 {
 name: "Barefoot College International",
 kind: "Indian charitable society",
 role: "Later international arm that carries Solar Mamas training abroad. Not the Tilonia landlord.",
 status: "associated",
 layer: "network",
 },
 {
 name: "Friends of Tilonia, Inc.",
 kind: "U.S. 501(c)(3) fiscal sponsor",
 role: "U.S. support charity. Raises money; does not hold the Rajasthan dirt.",
 status: "associated",
 layer: "network",
 },
 ],
 seongmisan: [
 {
 name: "Seongmisan childcare cooperative (founding house)",
 kind: "Korean childcare cooperative",
 role: "About thirty parents bought a Mapo-gu house in 1994 and opened a joint childcare co-op. The seed of the village. Occupancy by cooperation.",
 status: "current",
 layer: "membership",
 year: "1994",
 },
 {
 name: "Seongmisan Village associations and co-ops",
 kind: "Korean village association",
 role: "School, consumer co-ops, cafés, kitchen. Some registered under the 2012 Framework Act on Cooperatives; a related NPO in 2018. Network.",
 status: "current",
 layer: "membership",
 year: "1994–2018",
 },
 {
 name: "Household leases and freeholds",
 kind: "Private residential title / tenancy",
 role: "Houses sit on ordinary Seoul title or lease. The village is the co-ops of Seongmisan.",
 status: "current",
 layer: "land",
 },
 ],
 ulpotha: [
 {
 name: "Ulpotha estate",
 kind: "Sri Lankan private estate",
 role: "Private restored puranagama at Galgamuwa. Founders funded rehabilitation under a rajakariya compact. Seasonal yoga village on the same title.",
 status: "current",
 layer: "land",
 year: "1994",
 },
 {
 name: "Resident farming community",
 kind: "On-site intern and education program",
 role: "Local farmers work paddy and kitchen. Guests book a season. Labour.",
 status: "current",
 layer: "membership",
 },
 ],
 taomi: [
 {
 name: "Taomi Community Development Association",
 kind: "Taiwan community development association",
 role: "Founded 1996; rebuilt the li as an eco-village after 921. Tours, B&Bs, ecological story.",
 status: "current",
 layer: "membership",
 year: "1996 (eco-village 2001)",
 },
 {
 name: "Household title in Taomi li",
 kind: "Private residential title / tenancy",
 role: "Houses stay with families. The 18 km² is a village administrative area.",
 status: "current",
 layer: "land",
 },
 {
 name: "Paper Dome (Shigeru Ban)",
 kind: "Associated public funder",
 role: "Relocated from Kobe in 2008 as a gift between two quake villages. A visitor landmark, not the landlord.",
 status: "associated",
 layer: "covenant",
 year: "2008",
 },
 ],
 "pun-pun": [
 {
 name: "Pun Pun Center for Self-Reliance",
 kind: "Thai private organic farm",
 role: "Private Mae Taeng farm of about 9–10 acres founded July 2003 by Jon Jandai and Peggy Reents. Seed bank, earthen houses, courses.",
 status: "current",
 layer: "land",
 year: "2003",
 },
 {
 name: "Thamturakit",
 kind: "Community trading company",
 role: "Sister project that buys organic farmers’ surplus at a fair price and sells it in cities. Trading arm.",
 status: "associated",
 layer: "enterprise",
 },
 ],
 "bumi-langit": [
 {
 name: "Bumi Langit farm title",
 kind: "Indonesian private farm title",
 role: "Family hillside at Imogiri-Mangunan KM 3, about 3 ha.",
 status: "current",
 layer: "land",
 year: "2006",
 },
 {
 name: "Bumi Langit Institute",
 kind: "Indonesian permaculture institute",
 role: "Courses, warung, and an environmental pesantren on the same hillside. Teaching face.",
 status: "current",
 layer: "education",
 year: "2006",
 },
 ],
 "little-donkey": [
 {
 name: "Little Donkey Citizen Farm",
 kind: "Chinese CSA social enterprise",
 role: "China’s first CSA, April 2008, ~15 ha at Houshajian. NGO that became a social enterprise. CSA shares and rented plots, not household freehold.",
 status: "current",
 layer: "land",
 year: "2008",
 },
 {
 name: "Renmin University Rural Construction Centre / Haidian Agriculture Committee",
 kind: "On-site intern and education program",
 role: "Founding “production, study and research base.” Partners of Fenghuangling lots.",
 status: "associated",
 layer: "education",
 year: "2008",
 },
 {
 name: "Shared Harvest",
 kind: "Chinese CSA social enterprise",
 role: "Shi Yan’s later CSA (2012). A sister farm, not the Houshajian title.",
 status: "associated",
 layer: "network",
 year: "2012",
 },
 ],
 "gk-enchanted-farm": [
 {
 name: "Gawad Kalinga Community Development Foundation",
 kind: "Philippine community development foundation",
 role: "Philippine nonprofit founded 2003 by Tony Meloto. Parent of the Encanto village and the Enchanted Farm.",
 status: "current",
 layer: "land",
 year: "Foundation 2003; farm 2010–11",
 },
 {
 name: "GK Enchanted Farm (campus entity)",
 kind: "Philippine community development foundation",
 role: "Social-enterprise campus on land that grew from a 2 ha gift to ~34 ha. Legally related to GK.",
 status: "current",
 layer: "enterprise",
 year: "2010–11",
 },
 {
 name: "Encanto GK village families",
 kind: "On-site intern and education program",
 role: "~50 families housed as GK beneficiaries beside the farm. Houses are the anti-poverty programme, not shares you can list.",
 status: "current",
 layer: "membership",
 },
 ],

 yucun: [
 {
 name: "Yucun villagers' committee",
 kind: "Chinese villagers' committee",
 role: "Collective rural land, 4.86 km², Tianhuangping, Anji. The government of the land.",
 status: "current",
 layer: "land",
 },
 {
 name: "Yucun village collective",
 kind: "Chinese rural collective",
 role: "Mines closed 2003–05. Bamboo, tea, tourism.",
 status: "current",
 layer: "membership",
 },
 {
 name: "UNWTO Best Tourism Village designation",
 kind: "Chinese social organization",
 role: "2021 recognition. A designation.",
 status: "associated",
 layer: "covenant",
 year: "2021",
 },
 ],
 "lehe-daping": [
 {
 name: "Daping villagers' committee",
 kind: "Chinese villagers' committee",
 role: "Collective mountain land at Tongji, Pengzhou. Still the government of the land.",
 status: "current",
 layer: "land",
 },
 {
 name: "Beijing Global Village (北京地球村)",
 kind: "Chinese social organization",
 role: "Liao Xiaoyi, 1996. Reconstruction platform at Daping, not the landlord of lots.",
 status: "associated",
 layer: "education",
 year: "1996; Daping 2008",
 },
 {
 name: "China Red Cross Foundation, Lehe Home",
 kind: "Chinese foundation",
 role: "~3.6 million yuan for ecological houses, dry toilets, clinic, workshop. Money, not title.",
 status: "historical",
 layer: "covenant",
 year: "2008",
 },
 ],
 "shared-harvest": [
 {
 name: "Share Harvest (Beijing) Agricultural Development Co., Ltd.",
 kind: "Chinese limited company",
 role: "Shi Yan's 2012 CSA company. Mafang, Tongzhou, and a Shunyi base. Boxes, not freehold.",
 status: "current",
 layer: "land",
 year: "May 2012",
 },
 {
 name: "CSA member households",
 kind: "Chinese CSA social enterprise",
 role: "Season shares.",
 status: "current",
 layer: "membership",
 },
 {
 name: "Little Donkey Farm",
 kind: "Chinese CSA social enterprise",
 role: "The 2008 mother CSA. A sister, not this title.",
 status: "associated",
 layer: "network",
 year: "2008",
 },
 ],
 "sun-commune": [
 {
 name: "Hangzhou Sun Commune Rural Industry Development Co., Ltd.",
 kind: "Chinese limited company",
 role: "Registered 11 March 2014 at Shuangmiao, Taiyang Town, Lin'an. Chen Wei. Farm, CSA, classes, guesthouse.",
 status: "current",
 layer: "land",
 year: "2014",
 },
 {
 name: "Shuangmiao village collective",
 kind: "Chinese rural collective",
 role: "The dirt underneath a company farm.",
 status: "associated",
 layer: "covenant",
 },
 ],
 qiandao: [
 {
 name: "Qiandao Lake Natural Farming Ecovillage",
 kind: "Chinese private non-enterprise unit",
 role: "Minfei, 2014, Maoliyuan, Jiangjia, Chun'an. Natural farming and zero waste.",
 status: "current",
 layer: "land",
 year: "2014",
 },
 {
 name: "Founding monastic circle",
 kind: "Unincorporated community association",
 role: "A Taiwanese Buddhist monk's practice. ~20 people.",
 status: "current",
 layer: "membership",
 },
 ],
 "sunshine-ecovillage": [
 {
 name: "Sunshine Ecovillage Network (三生谷)",
 kind: "Chinese social organization",
 role: "2015 base at Xuling, Jiande. GEN, UNESCO ESD, EDE courses.",
 status: "current",
 layer: "education",
 year: "2015",
 },
 {
 name: "Xuling Village",
 kind: "Chinese villagers' committee",
 role: "A 1,000-year valley. The committee sits the collective; GEN is a guest.",
 status: "current",
 layer: "land",
 },
 ]
};

export const asiaLand: Record<string, LandOwnership> = {
 "atarashiki-mura": {
 owner: "Atarashiki-mura foundation, 10 ha at Moroyama",
 complexity: "simple",
 tenure: "Nonprofit",
 howHeld: "A Japanese foundation (approved 1948) holds the Moroyama farm, houses, and dining hall. Members receive pocket money.",
 narrative: "Founded 1918 in Hyūga; moved 1939 when a dam was coming. Saitama approved the foundation in 1948. A few people still hold the Hyūga remnant.",
 divided: [],
 },
 anandwan: {
 owner: "Maharogi Sewa Samiti, Warora",
 complexity: "simple",
 tenure: "Nonprofit",
 howHeld: "The samiti holds Anandwan and sister campuses. Residents work.",
 narrative: "Founded 19 August 1949 by Baba and Sadhana Amte. About 190 ha in one case study; a 465-acre figure also circulates. Somnath and Hemalkasa are sister projects.",
 divided: [],
 },
 "barefoot-college": {
 owner: "Social Work and Research Centre, 8 acres at Tilonia",
 complexity: "simple",
 tenure: "Nonprofit",
 howHeld: "The voluntary organisation holds the rainwater-harvesting campus. Trainees rotate through; they do not buy a Tilonia condominium.",
 narrative: "Bunker Roy, 1972. Friends of Tilonia is a U.S. support charity, not the Rajasthan landlord.",
 divided: [],
 },
 seongmisan: {
 owner: "Households plus a web of Mapo-gu cooperatives",
 complexity: "split",
 tenure: "Hybrid",
 howHeld: "Ordinary Seoul leases and freeholds sit beside childcare, school, and consumer co-ops. The mountain is a park, not the title.",
 narrative: "Thirty parents bought a house in 1994. Seven hundred households later share co-ops. Honest reading: an urban village of associations in a city neighbourhood you can also just rent.",
 divided: [
 {
 label: "Houses",
 holder: "Individual owners and tenants",
 share: "Ordinary Mapo-gu title or lease",
 what: "You live here the way Seoul lives. The village is the co-ops.",
 },
 {
 label: "Village institutions",
 holder: "Childcare co-op, school, consumer co-ops, kitchen",
 share: "Buildings and enterprises, not the mountain",
 what: "The 1994 house was the seed. A related NPO registered in 2018.",
 },
 ],
 },
 ulpotha: {
 owner: "Ulpotha private estate, restored puranagama",
 complexity: "simple",
 tenure: "Freehold",
 howHeld: "A privately held restored village at Galgamuwa. Guests book a season so the farm can stay. You take a hut; you do not buy a Kurunegala parcela.",
 narrative: "Giles and Viren Perera, 1994, with local partners. Rajakariya compact: founders funded rehabilitation of tank, paddy, and wattle-and-daub. Honest reading: a private estate that hosts yoga so a village can eat.",
 divided: [],
 },
 taomi: {
 owner: "Households of Taomi li, with the Community Development Association as the visitor face",
 complexity: "split",
 tenure: "Association",
 howHeld: "The 18 km² is a village administrative area. Houses stay with families. The association runs tours and the Paper Dome story.",
 narrative: "Association 1996; eco-village 2001 after 921. New Homeland Foundation helped the rebuild. You walk the frogs; you do not buy a Sun Moon Lake parcela as membership.",
 divided: [
 {
 label: "Houses and B&Bs",
 holder: "Resident households",
 share: "Ordinary title inside Taomi li",
 what: "A B&B is a livelihood.",
 },
 {
 label: "Visitor commons",
 holder: "Taomi Community Development Association",
 share: "Tours, ecological interpretation, Paper Dome partnership",
 what: "The public door. The Dome is a gift from Kobe, not the landlord.",
 },
 ],
 },
 "pun-pun": {
 owner: "Pun Pun Center for Self-Reliance, ~9–10 acres at Mae Taeng",
 complexity: "simple",
 tenure: "Freehold",
 howHeld: "Private farm bought by Jon Jandai and Peggy Reents. Earthen houses, seed bank, and courses sit on that title. Volunteers do not take a deed.",
 narrative: "Founded July 2003. Thamturakit is a trading sister. You volunteer or take a course; you do not buy a Mae Taeng parcela as membership.",
 divided: [],
 },
 "bumi-langit": {
 owner: "Waworuntu family farm, ~3 ha at Imogiri",
 complexity: "simple",
 tenure: "Freehold",
 howHeld: "Private hillside used as an institute: farm, warung, courses. Guests eat; they do not take title.",
 narrative: "Iskandar Waworuntu, late 2006, after the Yogyakarta earthquake. Islamic permaculture on family dirt.",
 divided: [],
 },
 "little-donkey": {
 owner: "Little Donkey Citizen Farm, ~15 ha at Houshajian",
 complexity: "simple",
 tenure: "Lease / partnership",
 howHeld: "Peri-urban CSA on partnered Haidian land (Agriculture Committee + Renmin Rural Construction Centre). CSA shares and rented plots, not household freehold.",
 narrative: "Shi Yan, April 2008. China’s first CSA. An NGO that became a social enterprise. You take a box or a bed; you do not buy a Fenghuangling condominium.",
 divided: [],
 },
 "gk-enchanted-farm": {
 owner: "Gawad Kalinga Community Development Foundation, ~34 ha at Encanto",
 complexity: "split",
 tenure: "Nonprofit",
 howHeld: "Foundation land that grew from a 2 ha gift to about 34 ha by gift, purchase, and lease. GK families live in the village; the farm campus incubates enterprises.",
 narrative: "Tony Meloto’s GK (2003); Encanto village 2007–10; Enchanted Farm 2010–11. Houses are an anti-poverty programme, not shares you can list.",
 divided: [
 {
 label: "Farm campus",
 holder: "GK Enchanted Farm / GK Foundation",
 share: "Enterprises, training, commons on the expanded holding",
 what: "The visitor and intern door. You can come without buying.",
 },
 {
 label: "GK village houses",
 holder: "Beneficiary families under the GK programme",
 share: "~50 families at Encanto",
 what: "A house is the anti-poverty yes.",
 },
 ],
 },

 yucun: {
 owner: "Yucun villagers' committee, 4.86 km² collective rural land",
 complexity: "simple",
 tenure: "Cooperative (common title)",
 howHeld: "Anji administrative village on collective land. Mines closed. Tourism and bamboo. Not household freehold of a Huzhou condominium.",
 narrative: "The 2005 Two Mountains speech was given here. UNWTO 2021. You walk.",
 divided: [],
 },
 "lehe-daping": {
 owner: "Daping villagers' committee; Beijing Global Village / Red Cross rebuilt houses after 2008",
 complexity: "split",
 tenure: "Cooperative (common title)",
 howHeld: "Collective mountain land. Reconstruction money built ecological houses. The NGO is not the landlord of lots.",
 narrative: "Liao Xiaoyi's Lehe Home. Eighty to a hundred and twenty houses. Villagers still sit the committee.",
 divided: [
 { label: "Village dirt", holder: "Daping villagers' committee", share: "Collective mountain land", what: "The government of the land." },
 { label: "Reconstruction", holder: "Beijing Global Village / Red Cross Foundation", share: "Houses, clinic, workshop", what: "A 2008 method." },
 ],
 },
 "shared-harvest": {
 owner: "Share Harvest (Beijing) Agricultural Development Co., Ltd. on leased peri-urban dirt",
 complexity: "simple",
 tenure: "Lease / partnership",
 howHeld: "Company CSA at Mafang, Tongzhou (60 mu veg + 110 mu woodland) and a Shunyi base. Boxes, not freehold.",
 narrative: "Shi Yan, May 2012. Sister of Little Donkey. You take a box.",
 divided: [],
 },
 "sun-commune": {
 owner: "Hangzhou Sun Commune Rural Industry Development Co., Ltd. at Shuangmiao",
 complexity: "simple",
 tenure: "Lease / partnership",
 howHeld: "A 2014 rural-industry company on village land. Farm, CSA, guesthouse.",
 narrative: "Chen Wei, 2013–14. The pigsty is architecture. Guests leave.",
 divided: [],
 },
 qiandao: {
 owner: "Qiandao Lake Natural Farming Ecovillage (minfei) at Maoliyuan",
 complexity: "simple",
 tenure: "Nonprofit",
 howHeld: "A 2014 private non-enterprise on a Chun'an hillside. Natural farming, zero waste.",
 narrative: "A monk's practice of about twenty people. GENOA listed it. Confirm they are receiving.",
 divided: [],
 },
 "sunshine-ecovillage": {
 owner: "Xuling Village collective, with Sunshine Ecovillage Network as a guest education base",
 complexity: "split",
 tenure: "Cooperative (common title)",
 howHeld: "A thousand-year village. SEN hosts EDE courses. The committee sits the collective. GEN is not the landlord.",
 narrative: "2015 Sanshenggu. First EDE in China. You take a course.",
 divided: [
 { label: "Village", holder: "Xuling villagers' committee", share: "Collective valley", what: "The dirt." },
 { label: "Network", holder: "Sunshine Ecovillage Network", share: "EDE and education", what: "A guest of the village." },
 ],
 }
};

export const asiaFunding: Record<string, CommunityFunding> = {
 "atarashiki-mura": {
 overview: "A century-old foundation farm now paid more by Friends’ donations than by rice, solar, or a Kanda bookshop, not by Moroyama lots.",
 grantsHeadline: "No major public grant found",
 privateHeadline: "Friends’ donations ¥12m",
 grants: [
 {
 source: "No major public grant found",
 amount: "—",
 certainty: "estimated",
 kind: "other",
 note: "FY2022 published accounts show donations, farm, solar, and rent.",
 },
 ],
 private: [
 {
 source: "Atarashiki-mura Tomo-no-kai (Friends) donations",
 amount: "~¥12 million (FY2022)",
 year: "2022",
 certainty: "documented",
 kind: "donation",
 note: "Outran agriculture (~¥1.6m), solar (~¥1.9m), and rental (~¥1.8m) that year.",
 },
 {
 source: "Farm, solar, and 新村堂 bookshop rent",
 amount: "Earned income (ongoing)",
 certainty: "documented",
 kind: "business",
 note: "Rice, vegetables, shiitake, tea, eggs; a little solar; a Kanda shop.",
 },
 ],
 },
 anandwan: {
 overview: "A samiti village paid by resident workshops, farms, and a stack of prizes, Magsaysay, Templeton, Gandhi Peace.",
 grantsHeadline: "Magsaysay + Templeton",
 privateHeadline: "Workshops and farm",
 grants: [
 {
 source: "Ramon Magsaysay Award (Baba Amte)",
 amount: "Prize (1985)",
 year: "1985",
 certainty: "documented",
 kind: "award",
 note: "Recognition.",
 },
 {
 source: "Templeton Prize and Gandhi Peace Prize",
 amount: "Prizes (1990, 1999)",
 year: "1990–99",
 certainty: "documented",
 kind: "award",
 note: "Public honour. The samiti still holds the land.",
 },
 ],
 private: [
 {
 source: "Resident agriculture and small industries",
 amount: "Subsistence and crafts (ongoing)",
 certainty: "documented",
 kind: "business",
 note: "Looms, food, workshops. Residents work.",
 },
 ],
 },
 "barefoot-college": {
 overview: "A Tilonia training campus paid by solar programmes, night schools, and grants, Ashden, MacArthur, not by Ajmer lots.",
 grantsHeadline: "Ashden + MacArthur $150k",
 privateHeadline: "Training and crafts",
 grants: [
 {
 source: "Ashden Award",
 amount: "Prize (2003)",
 year: "2003",
 certainty: "documented",
 kind: "award",
 note: "For bringing solar power to rural villages.",
 },
 {
 source: "MacArthur Foundation, SWRC",
 amount: "$150,000",
 year: "2023",
 certainty: "documented",
 kind: "grant",
 note: "To the Social Work and Research Centre.",
 },
 ],
 private: [
 {
 source: "Rural training, Solar Mamas, crafts",
 amount: "Programme fees and sales (ongoing)",
 certainty: "documented",
 kind: "courses",
 note: "Grandmothers train and go home.",
 },
 ],
 },
 seongmisan: {
 overview: "An urban village paid by household wages, co-op fees, and a school.",
 grantsHeadline: "Seoul village policy",
 privateHeadline: "Co-ops and households",
 grants: [
 {
 source: "Seoul urban-village / community-support programmes",
 amount: "Policy support (2010s)",
 year: "2012–",
 certainty: "estimated",
 kind: "grant",
 note: "Seongmisan became a model after Park Won-soon’s village policy. Support for activities.",
 },
 ],
 private: [
 {
 source: "Childcare co-op, school, consumer co-ops, cafés",
 amount: "Fees and sales (ongoing)",
 year: "1994–present",
 certainty: "documented",
 kind: "business",
 note: "Households still earn in the city. The village is the co-ops.",
 },
 ],
 },
 ulpotha: {
 overview: "A restored puranagama paid by seasonal yoga and Ayurveda stays, not by Galgamuwa lots.",
 grantsHeadline: "No major public grant found",
 privateHeadline: "Seasonal retreat",
 grants: [
 {
 source: "No major public grant found",
 amount: "—",
 certainty: "estimated",
 kind: "other",
 note: "Founders funded rehabilitation. No Sri Lankan housing-lot grant of record.",
 },
 ],
 private: [
 {
 source: "Yoga and Ayurveda seasonal stays",
 amount: "Guest fees (ongoing)",
 year: "1994–present",
 certainty: "documented",
 kind: "courses",
 note: " ulpotha.com has visiting notes. Guests underwrite paddy and the kitchen.",
 },
 ],
 },
 taomi: {
 overview: "A post-quake li paid by B&Bs, frog tours, and a Paper Dome, hundreds of thousands of visitors, not Puli lots as membership.",
 grantsHeadline: "Post-921 reconstruction",
 privateHeadline: "B&Bs and tours",
 grants: [
 {
 source: "Post-921 reconstruction partners (New Homeland Foundation and others)",
 amount: "Rebuild support (2000s)",
 year: "1999–2008",
 certainty: "documented",
 kind: "grant",
 note: "Helped turn rubble toward an eco-village. The Paper Dome arrived from Kobe in 2008 as a gift.",
 },
 ],
 private: [
 {
 source: "Ecological tours, B&Bs, Paper Dome, restaurants",
 amount: "Visitor economy (hundreds of thousands of visits in a busy year)",
 certainty: "documented",
 kind: "business",
 note: "Households own houses. The association sells a walk.",
 },
 ],
 },
 "pun-pun": {
 overview: "A Mae Taeng seed farm paid by courses, volunteers, produce, and Thamturakit, not by Chiang Mai lots.",
 grantsHeadline: "No major public grant found",
 privateHeadline: "Courses and seed",
 grants: [
 {
 source: "No major public grant found",
 amount: "—",
 certainty: "estimated",
 kind: "other",
 note: "Founders bought the land. No Thai housing-lot grant of record.",
 },
 ],
 private: [
 {
 source: "Self-reliance courses, volunteer stays, organic produce, seed sharing",
 amount: "Fees and sales (ongoing)",
 year: "2003–present",
 certainty: "documented",
 kind: "courses",
 note: " punpunthailand.org has visiting notes. Thamturakit sells farmers’ surplus in cities.",
 },
 ],
 },
 "bumi-langit": {
 overview: "An Imogiri hillside paid by a warung and courses, not by Bantul lots.",
 grantsHeadline: "No major public grant found",
 privateHeadline: "Warung and farm",
 grants: [
 {
 source: "No major public grant found",
 amount: "—",
 certainty: "estimated",
 kind: "other",
 note: "Family hillside. No Indonesian housing-lot grant of record.",
 },
 ],
 private: [
 {
 source: "Warung Bumi Langit and permaculture courses",
 amount: "Meals and fees (ongoing)",
 year: "2006–present",
 certainty: "documented",
 kind: "business",
 note: "Tuesday–Sunday in published hours. The farm feeds the family and the restaurant.",
 },
 ],
 },
 "little-donkey": {
 overview: "A Haidian CSA paid by vegetable boxes, family plots, and a government-university partnership, not by Fenghuangling lots.",
 grantsHeadline: "Haidian partnership",
 privateHeadline: "CSA boxes and plots",
 grants: [
 {
 source: "Haidian Agriculture and Forest Committee / Renmin University Rural Construction Centre",
 amount: "Land partnership (2008)",
 year: "2008",
 certainty: "documented",
 kind: "other",
 note: "A “production, study and research base.” Partnership.",
 },
 ],
 private: [
 {
 source: "CSA shares and rented family garden plots",
 amount: "Season fees (ongoing)",
 year: "2008–present",
 certainty: "documented",
 kind: "business",
 note: "Hundreds of Beijing families.",
 },
 ],
 },
 "gk-enchanted-farm": {
 overview: "A Bulacan farm village paid by social enterprises, internships, and gifts of land. The first 2 ha donated, not by Angat lots as a developer product.",
 grantsHeadline: "Land gifts + King Foundation",
 privateHeadline: "Social enterprises",
 grants: [
 {
 source: "Founding land gift (long-term GK volunteer)",
 amount: "Initial ~2 ha donated",
 year: "2010",
 certainty: "documented",
 kind: "donation",
 note: "Bangor University case: the campus then grew by further gifts, purchase, and lease to ~34 ha.",
 },
 {
 source: "Angelo King Foundation, arts centre",
 amount: "Building partnership",
 certainty: "documented",
 kind: "donation",
 note: "Arch Angel–GK Centre for Arts and Culture. A hall.",
 },
 ],
 private: [
 {
 source: "Social enterprises, farm, internships, Farm Village University",
 amount: "Enterprise and programme income (ongoing)",
 year: "2011–present",
 certainty: "documented",
 kind: "business",
 note: "Fellows and visitors pay to learn. Families live. Strangers pay to learn; they do not buy a house.",
 },
 ],
 },

 yucun: {
 overview: "An Anji village that closed mines and now lives on bamboo, tea, and visitors. No published lot-sales raise.",
 grantsHeadline: "Mine closure / rural tourism",
 privateHeadline: "Bamboo, tea, homestays",
 grants: [
 {
 source: "County and village mine-closure and rural-revitalisation support",
 amount: "Not isolated as a single capital award",
 year: "2003–",
 certainty: "estimated",
 kind: "grant",
 note: "Typical of a Zhejiang administrative village after pits closed.",
 },
 ],
 private: [
 {
 source: "Bamboo, white tea, rural tourism and homestays",
 amount: "Earned (ongoing)",
 certainty: "documented",
 kind: "business",
 note: "The weekday after the mines. UNWTO 2021 is recognition, not title.",
 },
 ],
 },
 "lehe-daping": {
 overview: "A Pengzhou mountain village rebuilt after Wenchuan with a Red Cross cheque and an NGO method, not with lot sales.",
 grantsHeadline: "Red Cross ~¥3.6m",
 privateHeadline: "Village livelihood",
 grants: [
 {
 source: "China Red Cross Foundation, Lehe Home",
 amount: "~3.6 million yuan",
 year: "2008",
 certainty: "documented",
 kind: "grant",
 note: "Ecological houses, dry toilets, clinic, workshop. Reconstruction.",
 },
 ],
 private: [
 {
 source: "Ecological farming, crafts, community tourism",
 amount: "Village earned",
 certainty: "estimated",
 kind: "business",
 note: "The weekday after the NGO left a method. Not house sales to Chengdu buyers.",
 },
 ],
 },
 "shared-harvest": {
 overview: "A Tongzhou CSA company paid by vegetable shares, not by Fenghuangling or Tongzhou lots.",
 grantsHeadline: "None documented as a land grant",
 privateHeadline: "CSA boxes",
 grants: [
 {
 source: "No major public land-purchase grant found",
 amount: ", ",
 certainty: "estimated",
 kind: "other",
 note: "A leased peri-urban CSA. No published SEDATU-style grant bought Mafang for members as lots.",
 },
 ],
 private: [
 {
 source: "CSA shares, vegetables, eggs, pork, later rice",
 amount: "Season fees (ongoing)",
 year: "2012–present",
 certainty: "documented",
 kind: "business",
 note: "Hundreds of Beijing households.",
 },
 ],
 },
 "sun-commune": {
 overview: "A Lin'an rural-industry company paid by organic food, classes, and a guesthouse, not by Shuangmiao lots.",
 grantsHeadline: "None documented",
 privateHeadline: "Farm, CSA, guesthouse",
 grants: [
 {
 source: "No major public grant found",
 amount: ", ",
 certainty: "estimated",
 kind: "other",
 note: "A private company farm. No published Zhejiang housing-lot grant.",
 },
 ],
 private: [
 {
 source: "Organic produce, CSA, nature education, guesthouse",
 amount: "Earned (ongoing)",
 year: "2014–present",
 certainty: "documented",
 kind: "business",
 note: "The pigsty is the photograph. Guests are not members.",
 },
 ],
 },
 qiandao: {
 overview: "A Chun'an minfei paid by a small natural-farming community, not by Qiandao Lake lots.",
 grantsHeadline: "None documented",
 privateHeadline: "Practice and teaching",
 grants: [
 {
 source: "No major public grant found",
 amount: ", ",
 certainty: "estimated",
 kind: "other",
 note: "A private non-enterprise.",
 },
 ],
 private: [
 {
 source: "Natural-farming teaching and a community kitchen",
 amount: "Small / unpublished",
 certainty: "estimated",
 kind: "courses",
 note: "Twenty people.",
 },
 ],
 },
 "sunshine-ecovillage": {
 overview: "A Jiande village base paid by EDE courses and a network, not by Xuling lots.",
 grantsHeadline: "EDE / network",
 privateHeadline: "Courses",
 grants: [
 {
 source: "No isolated land-purchase grant of record",
 amount: ", ",
 certainty: "estimated",
 kind: "other",
 note: "Local government sat in the founding mix. The village is older than the network.",
 },
 ],
 private: [
 {
 source: "Ecovillage Design Education and public education",
 amount: "Course fees (ongoing)",
 year: "2015–present",
 certainty: "documented",
 kind: "courses",
 note: "Six EDEs in five years. Guests leave.",
 },
 ],
 }
};

export const asiaVisitJoin: Record<string, VisitJoin> = {
 "atarashiki-mura": {
 visit: 3,
 join: 2,
 visitProcess: "Moroyama, Saitama, from Bushu-Nagase station. The foundation still receives visitors who write ahead (atarashiki-mura.or.jp). A dining hall with a stage, a farm, a handful of houses.",
 joinProcess: "Historically: live, pool income, take pocket money, sit unanimous meetings. The residential circle is now tiny. External Friends’ membership is the realistic support path. Harder than a Saitama allotment. This is still a covenanted farm.",
 },
 anandwan: {
 visit: 4,
 join: 2,
 visitProcess: "About 5 km from Warora, Chandrapur. MSS receives visitors who write (visitors@anandwan.in / maharogisewasamiti.org). Hospitals, workshops, schools, a forest campus. Arrange rather than walk the wards unannounced.",
 joinProcess: "A samiti campus of equal shares. The realistic path is work, a professional posting, or a vocational yes to MSS. Harder than a tour, Anandwan is still a hospital village.",
 },
 "barefoot-college": {
 visit: 4,
 join: 2,
 visitProcess: "Tilonia, Ajmer district, about 90 km from Jaipur. Book a campus look through barefootcollegetilonia.org. Night schools, solar workshops, rainwater buildings. Used to delegations. Arrange rather than arrive at the Solar Mamas unannounced.",
 joinProcess: "An institutional training village. The realistic path is a course, a staff job, or a Solar Mama nomination from your village. Trainees go home.",
 },
 seongmisan: {
 visit: 4,
 join: 3,
 visitProcess: "Mapo-gu, Seoul, at the foot of Seongmisan, Seongsan-dong and neighbouring dong. Cafés, the consumer co-op, the school gate are the public face. A city neighbourhood. Walk the mountain trail; do not photograph children at the co-op unasked.",
 joinProcess: "Honest path: rent or buy in the neighbourhood, then walk into childcare, the school, or a co-op. Easier than a closed commune, more involved than a Mapo studio. The 2012 cooperative law made the paperwork easier; fit still matters.",
 },
 ulpotha: {
 visit: 5,
 join: 1,
 visitProcess: "Galgamuwa, Kurunegala, at the foot of Galgiriya. Book a seasonal yoga and Ayurveda stay at ulpotha.com, mud-and-thatch huts, a lotus tank, paddy. One of the easier retreat visits in this Asian ten. Confirm the open months.",
 joinProcess: "A private estate and a resident farming community. Guests book a season. Harder than a hut night.",
 },
 taomi: {
 visit: 5,
 join: 2,
 visitProcess: "Puli Township, Nantou, on the road to Sun Moon Lake. Paper Dome, frog walks, B&Bs, lotus. The Community Development Association is the desk. One of Taiwan’s easiest eco-village days. Take a guide for the wetlands; houses are homes.",
 joinProcess: "Membership is being of Taomi li, live there, perhaps run a B&B. The 18 km² is a village. Harder than a weekend, easier than a closed commune.",
 },
 "pun-pun": {
 visit: 4,
 join: 2,
 visitProcess: "Mae Taeng, about 50 km north of Chiang Mai. Book a course, a volunteer stay, or a farm look through punpunthailand.org. Earthen houses, seed bank, ponds. A working farm, arrange rather than walk the seed beds as a park.",
 joinProcess: "A family-core farm of about ten families. Volunteers come for weeks and leave. Harder than a Chiang Mai homestay.",
 },
 "bumi-langit": {
 visit: 4,
 join: 1,
 visitProcess: "Imogiri, Bantul, Jalan Mangunan KM 3, Giriloyo. Warung Bumi Langit is the public door (organic lunch; published hours Tuesday–Sunday). Courses through bumilangit.org. A hillside farm. Eat, then ask before the terraces.",
 joinProcess: "A family farm that hosts an institute. The realistic path is a course or a job with the family.",
 },
 "little-donkey": {
 visit: 3,
 join: 2,
 visitProcess: "Houshajian West Village, Haidian, at the foot of Fenghuangling, outside Beijing’s Sixth Ring. CSA pickup and family plots are the public face. Arrange a farm visit; do not treat the beds as a park. A working CSA.",
 joinProcess: "Buy a CSA season or rent a family plot. That is membership in a box. Young farmers apply to work. There is no household freehold of the 15 hectares.",
 },
 "gk-enchanted-farm": {
 visit: 4,
 join: 2,
 visitProcess: "California Street, Barangay Encanto, Angat, Bulacan. Book a farm visit, internships, or a social-enterprise look through GK (gk1world.com). Colourful houses, bamboo halls, enterprises. A working village, arrange rather than walk family yards unannounced.",
 joinProcess: "GK families received houses as beneficiaries, not as co-op shareholders. Fellows apply to the Farm Village University. Harder than a farm tour. The houses are still a poverty programme.",
 },

 yucun: {
 visit: 5,
 join: 1,
 visitProcess: "Tianhuangping, Anji, Huzhou. Bamboo paths, village museum, homestays. One of Zhejiang's easiest rural days. Houses are homes. Stay on the path they opened.",
 joinProcess: "Born into the village, or marry in, or work a homestay the committee allows. Guests leave.",
 },
 "lehe-daping": {
 visit: 2,
 join: 1,
 visitProcess: "Daping, Tongji, Pengzhou, Longmen mountains. A living village with a reconstruction story. Only if they are receiving.",
 joinProcess: "You are of Daping. The NGO left a method. Guests leave.",
 },
 "shared-harvest": {
 visit: 3,
 join: 2,
 visitProcess: "Mafang, Xiji, Tongzhou, and a Shunyi base. CSA pickup is the public door. fxshcsa.com. Arrange a farm day; do not treat the beds as a park.",
 joinProcess: "Buy a season. That is a box. Young farmers apply to work. There is no household freehold.",
 },
 "sun-commune": {
 visit: 4,
 join: 2,
 visitProcess: "Tingzibian 22, Shuangmiao, Taiyang Town, Lin'an. Organic farm, guesthouse, the photographed pigsty. Book. Do not walk the pens as a design museum you found.",
 joinProcess: "A company farm. The realistic path is a job, a CSA share, or a guest night.",
 },
 qiandao: {
 visit: 2,
 join: 2,
 visitProcess: "Maoliyuan, Jiangjia, Chun'an, beside Longchuan Bay. Only if the community is receiving. Natural farming. Write.",
 joinProcess: "A minfei practice of about twenty. Confirm.",
 },
 "sunshine-ecovillage": {
 visit: 4,
 join: 2,
 visitProcess: "Xuling Village, Jiande, about two hours from Hangzhou. EDE and public education are the door. A living village, course guests do not treat terraces as a park.",
 joinProcess: "Take an EDE. Living in Xuling is not joining GEN. Harder than a course week.",
 }
};

export const asiaDailyLife: Record<string, DailyLife> = {
 "atarashiki-mura": {
 typical: [
 {
 title: "Farm rounds",
 detail: "Rice, vegetables, shiitake, tea, eggs. The weekday that still pays a slice of a foundation now kept alive by Friends.",
 },
 {
 title: "Communal dining hall",
 detail: "Most food is eaten together, on a stage-side floor that still hosts plays. Pocket money, not wages as owners.",
 },
 {
 title: "Monthly unanimous meeting",
 detail: "In principle every decision waits until no one objects. A handful of people, a century-old rule.",
 },
 ],
 unique: {
 title: "The New Village that would not become lots",
 detail: "Atarashiki-mura is infamous as Mushanokōji’s 1918 Hyūga experiment, moved to Moroyama, still a foundation, still a common purse, a handful of residents.",
 },
 },
 anandwan: {
 typical: [
 {
 title: "Workshops and looms",
 detail: "Residents who were told they could not work run crafts, food, and a technical wing.",
 },
 {
 title: "Farm and forest",
 detail: "A barren tract that became a Forest of Bliss. Agriculture still feeds the campus.",
 },
 {
 title: "Schools and wards",
 detail: "Blind, deaf, leprosy, an orphanage, two hospitals. The weekday is care and skill.",
 },
 ],
 unique: {
 title: "The ashram that put tools in stigmatised hands",
 detail: "Anandwan is infamous as Baba Amte’s 1949 Warora village, a samiti, thousands of residents. Agriculture still feeds the campus they raised on that barren Chandrapur tract.",
 },
 },
 "barefoot-college": {
 typical: [
 {
 title: "Solar workshop",
 detail: "Grandmothers solder lanterns and regulators. Solar Mamas who will take the skill home.",
 },
 {
 title: "Night school",
 detail: "Children who work days learn after dark. Puppets carry health and rights into the villages.",
 },
 {
 title: "Rainwater campus",
 detail: "Eight acres of buildings the students raised. Water is the argument in a dry Rajasthan year.",
 },
 ],
 unique: {
 title: "The college that would not wait for a diploma",
 detail: "Barefoot is infamous as Bunker Roy’s Tilonia bet, drop-outs as engineers, Solar Mamas as the export, an 8-acre society.",
 },
 },
 seongmisan: {
 typical: [
 {
 title: "Childcare and school gate",
 detail: "The 1994 house is still the idea: parents raise children together. Seongmisan School is the later public face.",
 },
 {
 title: "Consumer co-op",
 detail: "Boxes, shelves, a village kitchen. Households still earn in Seoul; the co-op is the extra layer.",
 },
 {
 title: "Mountain trail",
 detail: "Seongmisan is a park. The village is the streets around it. Evening walks.",
 },
 ],
 unique: {
 title: "The Mapo village that started with a childcare house",
 detail: "Seongmisan is infamous as Seoul’s urban village, thirty parents in 1994, seven hundred households later, co-ops under a mountain.",
 },
 },
 ulpotha: {
 typical: [
 {
 title: "Paddy and tank",
 detail: "A restored puranagama. Water, rice, a lotus lake. The farm is why the huts exist.",
 },
 {
 title: "Kitchen of the village",
 detail: "Local cooks, Ayurveda, a guest table that is also someone’s workday.",
 },
 {
 title: "Seasonal yoga",
 detail: "When the retreat is open, mats come out. When it is not, the village is a village.",
 },
 ],
 unique: {
 title: "The estate that paid a tank to live again",
 detail: "Ulpotha is infamous as the Kurunegala puranagama Giles and Viren restored in 1994, mud huts, a lotus lake, yoga in season.",
 },
 },
 taomi: {
 typical: [
 {
 title: "Frog walks",
 detail: "The post-921 bet: amphibians instead of only bamboo. Guides, wetlands, a li that learned to speak ecology.",
 },
 {
 title: "B&B morning",
 detail: "Every guesthouse has an owner’s story. Breakfast, then the Paper Dome.",
 },
 {
 title: "Paper Dome",
 detail: "Shigeru Ban’s Kobe church, relocated 2008. A gift between two quake villages.",
 },
 ],
 unique: {
 title: "The li that rebuilt as frogs",
 detail: "Taomi is infamous as Taiwan’s post-921 eco-village, association 1996, relaunch 2001, Paper Dome 2008, a Puli neighbourhood. Scientists found unusual amphibian diversity in former bamboo, sugarcane, ginger, and mushroom country.",
 },
 },
 "pun-pun": {
 typical: [
 {
 title: "Seed bank",
 detail: "Rare and indigenous Thai plants. The reason Jandai tells the 100-foods-of-childhood story.",
 },
 {
 title: "Earthen houses",
 detail: "Clay, guests, a building class. Volunteers mix, then leave. Families stay.",
 },
 {
 title: "Ponds and forest half",
 detail: "About ten acres, half trees. Fish, fruit, a kitchen that still cooks what the beds grow.",
 },
 ],
 unique: {
 title: "The happiness farmer’s seed farm",
 detail: "Pun Pun is infamous as Jon Jandai and Peggy Reents’ Mae Taeng centre, July 2003, ten acres, ten families, a seed bank.",
 },
 },
 "bumi-langit": {
 typical: [
 {
 title: "Terraces",
 detail: "A dry Imogiri slope made to hold water. Permaculture as khalifah, not as a brochure word.",
 },
 {
 title: "Warung lunch",
 detail: "Organic plates from the same hillside. The cash that keeps the institute from becoming only a talk.",
 },
 {
 title: "Course days",
 detail: "Students, school groups, a pesantren of the soil. They eat, they leave, the family remains.",
 },
 ],
 unique: {
 title: "The hillside that would not order dinner from an app",
 detail: "Bumi Langit is infamous as Iskandar Waworuntu’s Imogiri farm, 2006, three hectares, a warung, Islamic permaculture.",
 },
 },
 "little-donkey": {
 typical: [
 {
 title: "CSA packing",
 detail: "Boxes for Beijing kitchens. The first CSA weekday in China, still a packing table.",
 },
 {
 title: "Family plots",
 detail: "Urban households rent a bed, take the Sixth Ring road, and remember soil. Guidance.",
 },
 {
 title: "Fenghuangling edge",
 detail: "Fifteen hectares under a hill the city has not yet eaten. Partnership land.",
 },
 ],
 unique: {
 title: "The CSA that sent Beijing back to a field",
 detail: "Little Donkey is infamous as Shi Yan’s 2008 Houshajian farm, China’s first CSA, 15 hectares, boxes and plots.",
 },
 },
 "gk-enchanted-farm": {
 typical: [
 {
 title: "Social-enterprise sheds",
 detail: "Food, crafts, tourism. Fellows who are supposed to stay and hire neighbours.",
 },
 {
 title: "GK village yards",
 detail: "Colourful houses of families who were informal settlers. The farm is next door.",
 },
 {
 title: "Farm Village University",
 detail: "Interns, tours, a bamboo hall. Learning is the public cash; housing is the founding yes.",
 },
 ],
 unique: {
 title: "The farm that was supposed to end poverty next door",
 detail: "Enchanted Farm is Tony Meloto’s Bulacan prototype: GK houses, 34 hectares, and social enterprises.",
 },
 },

 yucun: {
 typical: [
 { title: "Bamboo path", detail: "Tianhuangping. The pits are closed. Visitors walk where limestone used to pay." },
 { title: "White tea and homestay", detail: "280 households. The public cash after the mines." },
 { title: "Village museum", detail: "The speech, the slogan, the photographs. Houses next door are still homes." },
 ],
 unique: {
 title: "The hamlet that closed the pits and got a slogan",
 detail: "Yucun is 4.86 km² of Anji dirt, 15 August 2005, UNWTO 2021.",
 },
 },
 "lehe-daping": {
 typical: [
 { title: "Mountain houses", detail: "Ecological timber and earth after 12 May 2008. Dry toilets. A clinic." },
 { title: "Committee morning", detail: "Daping still sits its own table. The NGO left a method." },
 { title: "Longmen weather", detail: "1,500 metres. Reconstruction that had to become a weekday." },
 ],
 unique: {
 title: "The reconstruction that tried to be an ethic",
 detail: "Lehe Home is Liao Xiaoyi's Daping, a Red Cross cheque, eighty houses.",
 },
 },
 "shared-harvest": {
 typical: [
 { title: "Packing table", detail: "Tongzhou boxes for Beijing kitchens. The 2012 weekday." },
 { title: "Woodland livestock", detail: "110 mu beside the vegetables. Eggs and pork in the share." },
 { title: "Second base", detail: "Shunyi. A company with more than one field." },
 ],
 unique: {
 title: "The share that is a vegetable",
 detail: "Shared Harvest is Shi Yan's 2012 company, sister of Little Donkey.",
 },
 },
 "sun-commune": {
 typical: [
 { title: "Organic rounds", detail: "Vegetables, rice, pigs. Shuangmiao dirt. No hormone story on the label." },
 { title: "The pigsty", detail: "The photograph architects made. Animals still live in it." },
 { title: "Class and bed", detail: "Nature education, a guesthouse. Guests leave." },
 ],
 unique: {
 title: "The commune that is a company",
 detail: "Sun Commune is Chen Wei's Lin'an LLC, 2014, a famous shed.",
 },
 },
 qiandao: {
 typical: [
 { title: "Natural farming", detail: "Fukuoka language on a Chun'an hillside. No poison in the row." },
 { title: "Zero waste", detail: "The published compact. A small kitchen. Twenty people." },
 { title: "Reservoir light", detail: "Longchuan Bay is next door. The farm is not the lake hotel." },
 ],
 unique: {
 title: "A monk's hillside beside a thousand islands",
 detail: "Qiandao is a 2014 minfei, natural farming.",
 },
 },
 "sunshine-ecovillage": {
 typical: [
 { title: "EDE week", detail: "Gaia Education on a thousand-year terrace. Course guests, then the village again." },
 { title: "Spring water", detail: "Xuling valley. Mineral water, terraces, two hours from Hangzhou." },
 { title: "Network desk", detail: "Sanshenggu trying to seed other villages. The committee still sits Xuling." },
 ],
 unique: {
 title: "The school that lives in a village",
 detail: "China’s first eco-village conference sat here in October 2015; six EDE courses ran in five years.",
 },
 }
};

export const asiaInformal: Record<string, InformalAgreement[]> = {
 "atarashiki-mura": [
 { kind: "common-purse", why: "Pocket money, pooled income, a dining hall. The informal layer is what a person may actually keep." },
 { kind: "kitchen-table", why: "Communal meals with a stage. Guests still have to learn which sitting is a play and which is supper." },
 { kind: "membership-trial", why: "A handful of residents and a Friends’ circle." },
 { kind: "land-care", why: "Ten hectares, a Hyūga remnant, rice and shiitake. Guests do not treat the Moroyama dirt as a picnic site." },
 ],
 anandwan: [
 { kind: "care-household", why: "Leprosy, disability, an orphanage. The compact is dignity at work." },
 { kind: "labour-roster", why: "Workshops, farm, wards. Someone still assigns the job that pays the kitchen." },
 { kind: "guest-stay", why: "Write before you come." },
 { kind: "media-story", why: "Every camera wants Baba’s statue. Who speaks for the people who still live here." },
 ],
 "barefoot-college": [
 { kind: "course-host", why: "Solar Mamas, night school, delegations. Which workshop is the class and which is someone’s day." },
 { kind: "volunteer-intern", why: "Trainees rotate." },
 { kind: "children-care", why: "Night-school children work days." },
 { kind: "land-care", why: "Eight rainwater acres in Ajmer. Guests do not treat the campus as a sculpture garden." },
 ],
 seongmisan: [
 { kind: "children-care", why: "The village began as a childcare house. The compact is still whose child, whose shift, whose school." },
 { kind: "kitchen-table", why: "Village kitchen and co-op shelves. A café is public; a co-op fridge is not." },
 { kind: "membership-trial", why: "Rent in Mapo, then walk into a co-op. A listing is not automatic village membership." },
 { kind: "conflict-circle", why: "Seven hundred households and a stack of co-ops. Someone still has a process, or they have a split." },
 ],
 ulpotha: [
 { kind: "guest-stay", why: "Seasonal yoga in mud huts. Residents still have to live somewhere the mats are not." },
 { kind: "course-host", why: "Fortnightly yoga and Ayurveda programmes, June–August and November–March. Book the dates on the village site; the rest of the year it is a working puranagama again." },
 { kind: "land-care", why: "Tank, paddy, a restored puranagama. Guests do not treat the lotus as a hotel pool." },
 { kind: "quiet-practice", why: "Ayurveda, yoga, a village that is also a retreat. What is asked of a guest versus a farmer." },
 { kind: "labour-roster", why: "Local cooks and field work. Someone still opens the sluice." },
 ],
 taomi: [
 { kind: "guest-stay", why: "B&Bs and the Paper Dome. Houses are homes; the wetlands are the tour." },
 { kind: "land-care", why: "Frogs, lotus, 18 km² of a li. Stay on the path; do not pocket an amphibian." },
 { kind: "building-code", why: "Post-921 B&Bs still have to look like Taomi." },
 { kind: "media-story", why: "Every camera wants the Dome and a frog. Who speaks for the association." },
 ],
 "pun-pun": [
 { kind: "course-host", why: "Earthen building and seed classes. Which bed is the lesson and which is lunch." },
 { kind: "volunteer-intern", why: "Weeks of labour plus a hut." },
 { kind: "land-care", why: "Ten acres, half forest, a seed bank. Guests do not harvest the commons as a souvenir." },
 { kind: "building-code", why: "Clay houses. A new roof still has to look like Pun Pun." },
 ],
 "bumi-langit": [
 { kind: "guest-stay", why: "A warung on a family hillside. Eat, then ask." },
 { kind: "course-host", why: "Permaculture and a pesantren of the soil. Which slope is the class." },
 { kind: "quiet-practice", why: "Islamic khalifah language on a working farm. What a lunch guest is asked to follow." },
 { kind: "land-care", why: "Three dry hectares made to hold water." },
 ],
 "little-donkey": [
 { kind: "land-care", why: "Fifteen hectares of CSA beds. Plot-renters still have to learn which row is theirs." },
 { kind: "labour-roster", why: "Young farmers pack boxes. Someone still writes the harvest list." },
 { kind: "membership-trial", why: "A CSA season or a rented plot." },
 { kind: "guest-stay", why: "Weekend gardeners from the city. The farm is a workplace before it is a picnic." },
 ],
 "gk-enchanted-farm": [
 { kind: "volunteer-intern", why: "Farm Village University fellows. Labour plus learning." },
 { kind: "guest-stay", why: "Tours next to GK houses." },
 { kind: "children-care", why: "A village of families who were informal settlers. Do not photograph a child as the poverty story." },
 { kind: "land-care", why: "Thirty-four hectares of former quarry. Enterprises still have to leave soil for the next crop." },
 ],

 yucun: [
 { kind: "guest-stay", why: "Homestays and a path. Houses are homes." },
 { kind: "land-care", why: "Bamboo and tea on dirt that used to be limestone. Stay on the path." },
 { kind: "media-story", why: "Every camera wants the slogan. Who speaks for 280 households." },
 { kind: "quiet-practice", why: "A living Anji village." },
 ],
 "lehe-daping": [
 { kind: "building-code", why: "Ecological houses after an earthquake. A new wall still has to sit the mountain." },
 { kind: "land-care", why: "Longmen dirt, dry toilets, a clinic. Guests do not redesign the reconstruction." },
 { kind: "media-story", why: "Every film wants Liao Xiaoyi and a dry toilet. Who speaks for Daping." },
 { kind: "guest-stay", why: "Only if the village is receiving." },
 ],
 "shared-harvest": [
 { kind: "land-care", why: "CSA beds at Mafang. Members still have to learn which row is the share." },
 { kind: "labour-roster", why: "Packing days. Someone still writes the harvest list." },
 { kind: "membership-trial", why: "A season is a box." },
 { kind: "guest-stay", why: "Farm days. The packing table is a workplace before it is a picnic." },
 ],
 "sun-commune": [
 { kind: "guest-stay", why: "Guesthouse and pigsty." },
 { kind: "animals-stock", why: "Organic pigs in a famous shed. Whose animal, who is on the morning round." },
 { kind: "course-host", why: "Nature class. Which field is the lesson." },
 { kind: "land-care", why: "Shuangmiao dirt. Guests do not harvest the commons as a souvenir." },
 ],
 qiandao: [
 { kind: "quiet-practice", why: "A monastic natural-farming compact. Guests are not owed a ceremony." },
 { kind: "land-care", why: "A hillside beside a reservoir. Zero waste is the published rule." },
 { kind: "guest-stay", why: "Only if they are receiving. Longchuan Bay is not the farm." },
 { kind: "kitchen-table", why: "A small community kitchen. Which sitting is a class." },
 ],
 "sunshine-ecovillage": [
 { kind: "course-host", why: "EDE weeks. Which terrace is the class and which is a Xuling household." },
 { kind: "guest-stay", why: "Course guests in a living village. Houses are homes." },
 { kind: "land-care", why: "Spring water and terraces." },
 { kind: "quiet-practice", why: "A thousand-year village hosting a network. What a week-long student is asked to follow." },
 ]
};
