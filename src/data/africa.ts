import type { Community } from "./communities";

/** Twenty African communities beyond the five already in the new-countries cluster (SEKEM, Ndem, Songhai, Tlholego, Kufunda). Oldest-founded first. */
export const africaCommunities: Community[] = [
 {
 slug: "kasisi",
 name: "Kasisi Agricultural Training Centre",
 location: "Kasisi Mission, Chongwe District, ~30 km east of Lusaka",
 region: "Lusaka Province, Zambia",
 country: "Zambia",
 foundedYear: 1974,
 foundedLabel: "1974 (Jesuits of the Zambia-Malawi Province; organic turn 1990)",
 members: 75,
 membersLabel: "~25 professionals and ~50 support staff; small-scale farmers rotate through the courses",
 acres: 198,
 acresLabel: "~80 ha under irrigation (KATC 2001; two dams); a hoped-for 160 ha was unpublished",
 legalStructure:
 "Kasisi Agricultural Training Centre, a Jesuit training farm of the Zambia-Malawi Province, founded 1974 near Lusaka, directed for decades by Canadian Jesuit Br. Paul Desmarais SJ. Land and the dairy, irrigation, and classrooms sit with the mission centre, not with household lots.",
 legalCategory: "Jesuit training centre",
 stillActive: true,
 images: [
 "/communities/kasisi-land.jpg",
    "/communities/kasisi-people.jpg",
 "/communities/kasisi-1.jpg",
 "/communities/kasisi-2.jpg",
 "/communities/kasisi-3.jpg",
 ],
 summary:
 "At Kasisi Mission east of Lusaka, the Jesuits put the mouldboard plough away. Organic since 1990, oxen instead of tractors, 80 irrigated hectares, and an Equator Prize for training more than 10,000 small-scale farmers. Brother Paul Desmarais’s Bible stayed; the plough did not.",
 businessModel:
 "Three-to-five-day and two-week courses in organic and conservation agriculture, residential and on-farm, plus study circles. A dairy herd (about 30 animals in one Jesuit account) selling milk to a cheese factory. Two dams water the 80 hectares. Course fees, Jesuit and partner support, and farm produce.",
 foundingProcess:
 "The Jesuits of the Zambia-Malawi Province opened KATC in 1974 at Kasisi Mission in Chongwe. Conventional extension was the first language. In 1990 Br. Paul Desmarais, a Canadian Jesuit who became director for decades, turned the centre organic: no-till, oxen over tractors, compost, and agroecology against drought. The UNDP Equator Initiative listed Kasisi among 25 outstanding initiatives (Equator Prize 2014) for training more than 10,000 small-scale farmers. katczm.com is the public door. Desmarais’s Bible stayed; the mouldboard plough did not.",
 governance:
 "A Jesuit institutional farm with a director and professional staff. Farmers come for a course and go home to Chongwe and central Zambia.",
 website: "https://katczm.com/",
 timeline: [
 { year: "1974", event: "Jesuits of the Zambia-Malawi Province found KATC at Kasisi Mission, Chongwe." },
 { year: "1990", event: "Br. Paul Desmarais turns the centre to organic and conservation agriculture." },
 { year: "2001", event: "About 80 ha under irrigation from two dams; a dairy herd sells milk." },
 { year: "2014", event: "UNDP Equator Prize; more than 10,000 small-scale farmers trained." },
 { year: "Present", event: "Courses, oxen, dairy, and agroecology still run on the Chongwe land." },
 ],
 },
 {
 slug: "awra-amba",
 name: "Awra Amba",
 location: "Fogera woreda, Debub Gondar, 73 km east of Bahir Dar",
 region: "Amhara, Ethiopia",
 country: "Ethiopia",
 foundedYear: 1980,
 foundedLabel: "1980 (Zumra Nuru and 19 others; vision from the 1970s)",
 members: 463,
 membersLabel: "~463 residents (Wikipedia); ~450 members in 2016; some later counts near 560",
 acres: 43,
 acresLabel: "~17.5 ha held by cooperative members, plus ~1 ha associated (a Development Agent’s figure)",
 legalStructure:
 "An Ethiopian cooperative village (Awra Amba, Amharic “top of the hill”) founded 1980 by Zumra Nuru and 19 people who shared a secular, egalitarian vision. The village cooperative was formalized in the early 1990s. Ethiopian land is state-and-people title; members farm a small cooperative holding and run a weaving enterprise. A separate company was later created because cooperatives cannot trade outside their locality (awraamba.net).",
 legalCategory: "Producer cooperative",
 stillActive: true,
 images: [
 "/communities/awra-amba-land.jpg",
 "/communities/awra-amba-1.jpg",
 "/communities/awra-amba-2.jpg",
 "/communities/awra-amba-3.jpg",
 ],
 summary:
 "Zumra Nuru and nineteen others founded a secular village in Fogera in 1980: no religion, women and men on the same wage. Neighbours drove them out; they came back weaving when the farm was gone. Awra Amba still sits on 17.5 hectares and still has no temple.",
 businessModel:
 "Weaving (traditional and modern looms) is the cash engine after neighbours took the farm land. Three grinding mills from the Regional Micro and Small Scale Enterprise Development Agency. Equal annual salary for members. Six days’ work, one day free. Visitors and study groups.",
 foundingProcess:
 "Zumra Nuru began organizing in the 1970s against gender inequality, sectarianism, and poverty in northern Ethiopia. In 1980 he and 19 others founded Awra Amba in Fogera. Neighbours called them communists; in 1989 the village was forced out for four years and survived on cotton-seed stew. They returned in 1993 after the Derg fell, without enough farm, and diversified into weaving. Committees now cover education, guests, patients, elders and children, and community health. Zumra remains co-chairman. The library and the school are the public face of a place that still has no religion.",
 governance:
 "A cooperative with formal committees and a co-chair. Membership is being of the village (work, equality, no religious hierarchy). Christian and Muslim leaders have visited; World Bank consultants have written it up.",
 website: "https://awraamba.net/",
 timeline: [
 { year: "1970s", event: "Zumra Nuru’s circle begins to organize a secular, egalitarian life." },
 { year: "1980", event: "Awra Amba founded in Fogera with 19 others." },
 { year: "1989–93", event: "Displaced as “communists”; return after the fall of the Derg." },
 { year: "1990s", event: "Village cooperative formalized; weaving replaces the lost farm." },
 { year: "Present", event: "~463 people; weaving, mills, a library, and equal wages still run the hill." },
 ],
 },
 {
 slug: "umoja",
 name: "Umoja Uaso Women’s Village",
 location: "Archers Post, Samburu County, along the Ewaso Ng’iro (Waso) River",
 region: "Samburu, Kenya",
 country: "Kenya",
 foundedYear: 1990,
 foundedLabel: "1990 (Rebecca Lolosoli and ~15 Samburu women; some accounts 1991)",
 members: 47,
 membersLabel: "A women-only village of members of Umoja Uaso Women Group and their children; founded by ~15",
 acres: 14,
 acresLabel: "A 14-acre campsite along the Waso with 12 self-contained cottages (umojawomen.or.ke)",
 legalStructure:
 "Umoja Uaso Women Group, a Kenyan community-based organization and women-only village at Archers Post. Umoja means “unity”; Uaso is the river. Founded 1990 by Rebecca Samaria Lolosoli and about fifteen Samburu women fleeing rape, forced marriage, and FGM after a British-army scandal in the district. The 14-acre campsite is the enterprise; manyattas are homes. You take a cottage.",
 legalCategory: "Women's CBO",
 stillActive: true,
 images: [
 "/communities/umoja-land.jpg",
 "/communities/umoja-1.jpg",
 "/communities/umoja-2.jpg",
 "/communities/umoja-3.jpg",
 ],
 summary:
 "Rebecca Lolosoli and fifteen women walked out and founded a Samburu village with no men on the roll. A 14-acre campsite on the Waso, beadwork, and a refuge from FGM and forced marriage. Umoja is still that village.",
 businessModel:
 "Twelve self-contained cottages on 14 acres (about 30 guests), cultural visits, beadwork and jewellery sold to visitors on the Isiolo–Marsabit road. Camp fees pay the village.",
 foundingProcess:
 "In 1990, after assault and a husband who would not intervene, Rebecca Lolosoli left and, with about fifteen other Samburu women, founded a village that men may visit in daylight and may not live in. Girls running from child marriage still arrive. Lolosoli later sat in the Samburu County Assembly. Vital Voices and the Washington Post told the story; armed relatives have also come to the gate. The manyattas and the campsite are the same 14 acres.",
 governance:
 "A women-only CBO. Lolosoli is the public matriarch; members decide. You join by being received as a woman of the village, not by buying a Samburu lot. Visitors book a cottage at umojawomen.or.ke. Men do not take membership.",
 website: "https://umojawomen.or.ke/",
 timeline: [
 { year: "1990", event: "Rebecca Lolosoli and ~15 Samburu women found Umoja Uaso at Archers Post." },
 { year: "2000s", event: "Campsite, beadwork, and international press; Lolosoli becomes the public face." },
 { year: "Later", event: "Lolosoli sits in the Samburu County Assembly; threats from male relatives continue." },
 { year: "Present", event: "14-acre campsite, 12 cottages, a women-only village still on the Waso." },
 ],
 },
 {
 slug: "st-jude",
 name: "St. Jude Family Projects",
 location: "Busense village, 12 km along Mutukura Road, Masaka",
 region: "Masaka, Uganda",
 country: "Uganda",
 foundedYear: 1997,
 foundedLabel: "1997 (farm work); NGO S.5914/2000",
 members: 20,
 membersLabel: "A family farm-and-NGO campus; 186,000 farmers trained since 1997 (Alongside Hope, 2019)",
 acres: null,
 acresLabel: "A working Busense farm whose hectare count is unpublished",
 legalStructure:
 "St. Jude Family Projects, a Ugandan NGO registered S.5914/2000, founded by Josephine Kizza Aliddeki and her late husband John Kizza. The Busense farm is the teaching site for agroecology and integrated organic farming.",
 legalCategory: "Nonprofit / NGO",
 stillActive: true,
 images: [
 "/communities/st-jude-land.jpg",
    "/communities/st-jude-people.jpg",
 "/communities/st-jude-1.jpg",
 "/communities/st-jude-2.jpg",
 "/communities/st-jude-3.jpg",
 ],
 summary:
 "“Feed the soil so that it feeds you”: Josephine Kizza’s Masaka NGO farm, registered S.5914/2000, that has trained on the order of 186,000 farmers in agroecology.",
 businessModel:
 "Courses in integrated organic farming (the centre has said 75% practical), women’s farmer groups, youth and school programmes, a dried-fruit plant, and tree nurseries. Partner support (PWRDF / Alongside Hope among them). President Museveni has visited.",
 foundingProcess:
 "Josephine and John Kizza were in Kampala when the 1985 war hit Masaka. They went home to check on family, stayed, and started from a “hopeless cause” they later named for St. Jude. The farm became a training centre in 1997; the NGO number is 2000. “Feed the land, and it will feed you” is the sentence on the gate. John died; Josephine is still executive director. IPAM lists it as a field learning site at Busense.",
 governance:
 "An NGO board and a founding director. Farmers come for a course and go home to Masaka, Rakai, Ssembabule, and Mpigi.",
 website: "https://stjudefamilyprojects.com/",
 timeline: [
 { year: "1985", event: "War in Masaka; the Kizzas leave Kampala to check on family and stay." },
 { year: "1997", event: "St. Jude Family Projects begins as a training farm." },
 { year: "2000", event: "Registered as Ugandan NGO S.5914/2000." },
 { year: "2019", event: "Alongside Hope: 186,000 farmers trained since 1997." },
 { year: "Present", event: "Agroecology courses, women’s groups, a dried-fruit plant; Josephine still directing." },
 ],
 },
 {
 slug: "khula-dhamma",
 name: "Khula Dharma",
 location: "Near Haga Haga, ~8–10 km from the sea, Wild Coast, Eastern Cape",
 region: "Eastern Cape, South Africa",
 country: "South Africa",
 foundedYear: 2002,
 foundedLabel: "Land 2000; living together 1 January 2002",
 members: 7,
 membersLabel: "7 resident members with young children (2009); a small Wild Coast farm circle since",
 acres: 445,
 acresLabel: "Just under 300 ha (~741 acres) bought in 2000; the village site now says 180 ha (~445 acres) of bushveld on the Quko River",
 legalStructure:
 "A private off-grid farm near Haga Haga. Five friends purchased the land in 2000; living together from 1 January 2002. Houses in cob, straw bale, and thatch sit on freehold bushveld, not on a sectional-title scheme. A privately held eco-farm that hosts retreats and volunteers. You stay.",
 legalCategory: "Freehold title",
 stillActive: true,
 images: [
 "/communities/khula-dhamma-land.jpg",
 "/communities/khula-dhamma-1.jpg",
 "/communities/khula-dhamma-2.jpg",
 "/communities/khula-dhamma-3.jpg",
 ],
 summary:
 "Five friends, a Wild Coast farm, cob and thatch: Khula Dharma on the Quko, GEN’s 300 hectares, the site’s 180, a 2002 village on private title, with a retreat door.",
 businessModel:
 "Self-catering earth rooms and camping, volunteer stays (the site has listed 15–20 hours a week for a bed), retreat hosting (yoga, writing, natural building). Food forests and a veggie box. Independent finances, not income-sharing, and not a published path to buying a lot.",
 foundingProcess:
 "In 2000 five friends bought rolling bushveld near Haga Haga, about eight kilometres from deserted Wild Coast beaches, bordered by the Quko. From 2000 to 2003 the land rarely had more than two people. Pioneers put in a solar pump, bees, a compost toilet, and cob houses with bottle glass and old windscreens. Seven residents in 2009. The old farmhouse became the community house; the barn a workshop. A working farm and retreat, sometimes pausing volunteers.",
 governance:
 "A small freehold farm circle. Visit, volunteer, or book a retreat. Confirm who actually holds the 180 hectares before you treat a cob room as a share.",
 website: "https://www.khuladharma.com/",
 timeline: [
 { year: "2000", event: "Five friends purchase just under 300 ha near Haga Haga." },
 { year: "2002", event: "Started living together 1 January." },
 { year: "2003–09", event: "Solar pump, cob houses, bees; seven residents by 2009." },
 { year: "Present", event: "The site says 180 ha; cob rooms, food forest, retreats on the Wild Coast." },
 ],
 },
 {
 slug: "nadeet",
 name: "NaDEET",
 location: "NaDEET Centre, NamibRand Nature Reserve, Maltahöhe; office in Swakopmund",
 region: "Hardap, Namibia",
 country: "Namibia",
 foundedYear: 2003,
 foundedLabel: "2003 (Namib Desert Environmental Education Trust T168/2003)",
 members: 15,
 membersLabel: "A staffed desert education centre; school groups rotate through",
 acres: null,
 acresLabel: "A solar education centre inside NamibRand Nature Reserve (~202,000 ha of private reserve), the centre’s own hectares unpublished",
 legalStructure:
 "Namib Desert Environmental Education Trust (NaDEET), a Namibian nonprofit trust, Trust Certificate T168/2003. Viktoria Keding is director and co-founder; Andreas Keding is technical director. The Centre sits on NamibRand Nature Reserve by arrangement, not as the landlord of the 202,000 hectares. You come for a programme.",
 legalCategory: "Charitable trust",
 stillActive: true,
 images: [
 "/communities/nadeet-land.jpg",
 "/communities/nadeet-1.jpg",
 "/communities/nadeet-2.jpg",
 "/communities/nadeet-3.jpg",
 ],
 summary:
 "A solar classroom on NamibRand: Viktoria Keding’s 2003 trust, UNESCO-Japan Prize 2018, parabolic cookers and school groups in the dunes.",
 businessModel:
 "Environmental-education programmes for Namibian school groups (biodiversity, solar cooking, waste, water), Teach for ESD, internships, outreach. Solar everything because wood is scarce. UNESCO-Japan Prize on ESD 2018; later UNESCO Sultan Qaboos Prize for Environmental Conservation. Donations, programme fees, prizes.",
 foundingProcess:
 "Viktoria Keding, passionate about the Namib, set up an environmental education centre in 2003 with a group of local women and registered the Namibian trust T168/2003. The Centre went onto NamibRand, a private reserve of former sheep farms returned to dunes and oryx. Parabolic cookers replaced firewood. School groups from across Namibia still sleep in the desert and cook on the sun. The Swakopmund office is the town face; the dunes are the classroom.",
 governance:
 "A nonprofit trust with a director. Book a programme. Staff and interns work here; they do not hold dune title. NamibRand remains a separate private reserve.",
 website: "https://nadeet.org/",
 timeline: [
 { year: "2003", event: "NaDEET trust T168/2003; Centre opens on NamibRand." },
 { year: "2018", event: "UNESCO-Japan Prize on Education for Sustainable Development." },
 { year: "Later", event: "UNESCO Sultan Qaboos Prize for Environmental Conservation." },
 { year: "Present", event: "School groups, solar cookers, and a Swakopmund office; still no desert lot." },
 ],
 },
 {
 slug: "kaydara",
 name: "Kaydara Agroecology School Farm",
 location: "Keur Samba Dia, commune of Fimela, Fatick / Sine Saloum",
 region: "Fatick, Senegal",
 country: "Senegal",
 foundedYear: 2006,
 foundedLabel: "21 June 2006 (UNESCO; Association Jardins d’Afrique; coconut grove earlier)",
 members: 9,
 membersLabel: "Association staff (~9, Agrinnovators) plus rotating agroecology students; 16 villages in the training network",
 acres: null,
 acresLabel: "A Fimela farm-school whose hectare count is unpublished, salinised Sine Saloum",
 legalStructure:
 "Ferme-école Kaydara, run by Association Jardins d’Afrique, a Senegalese association of which Gora Ndiaye is president. UNESCO: project began 21 June 2006. Kaydara means “come to the school of life.” The farm-school sits in Fimela, a coastal commune where salinisation has taken more than 60% of the land. (Ndem, already in the atlas, is a different Senegalese village.)",
 legalCategory: "Registered association",
 stillActive: true,
 images: [
 "/communities/kaydara-land.jpg",
    "/communities/kaydara-people.jpg",
 "/communities/kaydara-1.jpg",
 "/communities/kaydara-2.jpg",
 "/communities/kaydara-3.jpg",
 ],
 summary:
 "“Come to the school of life”: Gora Ndiaye’s Fimela farm-school against salinisation and the rural exodus, Association Jardins d’Afrique, 21 June 2006.",
 businessModel:
 "Agroecology training for young people who would otherwise leave for Dakar, produce sold locally, coconut and trees on land that was one coconut tree when he arrived. Sixteen villages in the training net. UNESCO Green Citizens. Course and farm income, not house sales.",
 foundingProcess:
 "Gora Ndiaye, a history teacher and self-taught farmer, planted a coconut grove at Keur Samba Dia and created the farm-school so young Senegalese would have an alternative to the city. UNESCO dates the project to 21 June 2006; some farm accounts mention 2003 as the first planting. Association Jardins d’Afrique is the legal face (Agrinnovators lists the association from 1994). FAO filmed the ten-year mark. The Sine Saloum mangroves are next door; they are not the title.",
 governance:
 "A Senegalese association with a founding president. Students come, train, and go home to Fimela villages.",
 website: "https://jardins-afrique.org/",
 timeline: [
 { year: "1994", event: "Agrinnovators: Association Jardins d’Afrique listed from this year." },
 { year: "2006", event: "UNESCO: Kaydara Agroecology School Farm begins 21 June at Fimela." },
 { year: "2010s", event: "FAO documents ten years; 16 villages in the training network." },
 { year: "Present", event: "Farm-school still teaching agroecology on salinised Sine Saloum land." },
 ],
 },
 {
 slug: "otepic",
 name: "OTEPIC",
 location: "Kitale, Trans-Nzoia, Mitume, Armani, and Sabwani gardens; Mount Elgon foothills",
 region: "Trans-Nzoia, Kenya",
 country: "Kenya",
 foundedYear: 2008,
 foundedLabel: "2008 (self-help project in Kitale; Sabwani garden from 2014)",
 members: 40,
 membersLabel: "22 orphans at Tabasamu plus staff and gardeners; 53,000 people from 25 communities in the wider count",
 acres: 25,
 acresLabel: "Sabwani ~10 ha (~25 acres), plus Mitume (441 m²) and Armani (~0.5 acre), three Kitale gardens, not one ranch",
 legalStructure:
 "OTEPIC (Organic Technology Extension and Promotion of Initiative Center), a Kenyan self-help / community-based grassroots project founded 2008 in Kitale by Philip Odhiambo Munyasia. Three gardens: Mitume in the city, Armani, and the 10-hectare Sabwani ecological peace village and permaculture school. Tamera has partnered since 2011.",
 legalCategory: "Self-help group",
 stillActive: true,
 images: [
 "/communities/otepic-land.jpg",
 "/communities/otepic-1.jpg",
 "/communities/otepic-2.jpg",
 "/communities/otepic-3.jpg",
 ],
 summary:
 "Philip Munyasia’s “real food revolution” in Kitale: three gardens, 22 orphans at Tabasamu, a 10-hectare Sabwani peace village under Mount Elgon.",
 businessModel:
 "Permaculture trainings, food for street children, clean water for about 3,000 people, tree planting, a women’s birth-competence centre in the plans, coffee and avocado experiments. Partner support (Tamera among them).",
 foundingProcess:
 "Munyasia grew up the youngest of eight, never sure of the next meal. In 2008 he started a self-help project in Kitale’s informal settlements and showed people how to feed themselves. Mitume was 441 square metres. Armani added half an acre. After working with Tamera he bought the larger Sabwani land for a conference centre, Upendo Garden, and an international permaculture school for East Africa. Twenty-two orphans live at Tabasamu. Alcohol and drugs are forbidden on site.",
 governance:
 "A founder-led self-help project. Trainings are the public door. Orphans and gardeners live in the work; they do not hold Sabwani title as lots. PO Box 4627-30200, Kitale.",
 website: "https://www.otepic.org/",
 timeline: [
 { year: "2008", event: "Philip Munyasia founds OTEPIC as a Kitale self-help project." },
 { year: "2011", event: "Partnership with Tamera begins." },
 { year: "2014", event: "Sabwani garden (10 ha peace village and permaculture school) underway." },
 { year: "Present", event: "Three gardens, 22 orphans, trainings; still no Kitale lot map." },
 ],
 },
 {
 slug: "ndanifor",
 name: "Ndanifor Permaculture Ecovillage",
 location: "Bafut, Mezam, Bamenda Grassfields, Northwest Region",
 region: "Northwest, Cameroon",
 country: "Cameroon",
 foundedYear: 2012,
 foundedLabel: "2012 (Ndanifor site; Better World Cameroon from 1996; looted in the Anglophone crisis)",
 members: 12,
 membersLabel: "A small Better World Cameroon team; the Bafut site was emptied in the Anglophone crisis",
 acres: 5,
 acresLabel: "~5 acres of the Ndanifor demonstration site at Bafut, unpublished beyond that, and later occupied in the crisis",
 legalStructure:
 "Ndanifor Permaculture Ecovillage, the living site of Better World Cameroon (BWC), an NGO Joshua Konkankoh founded after mobilizing unemployed graduates in Yaoundé in 1996. BWC joined GEN around 2010; the Bafut ecovillage opened 2012. Gaia Trust Excellence Award 2015. In 2016 the Anglophone crisis reached Bafut; the team was expelled and the site looted.",
 legalCategory: "Nonprofit / NGO",
 stillActive: true,
 images: [
 "/communities/ndanifor-land.jpg",
    "/communities/ndanifor-people.jpg",
 "/communities/ndanifor-1.jpg",
 "/communities/ndanifor-2.jpg",
 "/communities/ndanifor-3.jpg",
 ],
 summary:
 "Bafut’s permaculture “paradise,” looted: Joshua Konkankoh’s 2012 Ndanifor site, Gaia Trust 2015, emptied in the Anglophone crisis.",
 businessModel:
 "Permaculture and ecovillage-design trainings, school and community gardens, the “Spirit of Ndanifor” right-of-passage, later a Portugal peace-village conversation. Partner and GEN support. The Bafut eco-lodge was the visitor door until the war.",
 foundingProcess:
 "Konkankoh’s Better World Cameroon began in 1996 in Yaoundé slums, then moved the work to Bafut in the Grassfields. In 2012 BWC created Ndanifor Permaculture Ecovillage as a demonstration centre, five acres, gardens, a lodge. He and administrator Sonita visited Sieben Linden and Findhorn. Gaia Trust’s Excellence Award came in 2015. In 2016 a war was declared in Cameroon’s English-speaking regions; Bafut was rocked; the team was expelled from what visitors had called paradise on earth. BWC continues as an NGO and a training voice.",
 governance:
 "An NGO director and a displaced team. Trainings and international partnerships are the remaining door. Confirm whether the Bafut site is actually visitable before you treat a 2012 lodge as current.",
 website: "https://betterworld-cameroon.com/",
 timeline: [
 { year: "1996", event: "Joshua Konkankoh mobilizes Yaoundé graduates; Better World Cameroon begins." },
 { year: "2012", event: "Ndanifor Permaculture Ecovillage opens at Bafut." },
 { year: "2015", event: "Gaia Trust Excellence Award." },
 { year: "2016", event: "Anglophone crisis; team expelled; site looted." },
 { year: "Present", event: "BWC still teaches." },
 ],
 },
 {
 slug: "basaisa",
 name: "Basaisa",
 location: "Basaisa village, Zagazig district, Sharqiya / Nile Delta, ~95 km northeast of Cairo",
 region: "Sharqiya, Egypt",
 country: "Egypt",
 foundedYear: 1974,
 foundedLabel: "1974 (Salah Arafa’s village work; first rural PV in Egypt)",
 members: 80,
 membersLabel: "A Sharqiya village and its Community Development Association; New Basaisa later planted in Sinai",
 acres: null,
 acresLabel: "An existing Delta village whose feddans are unpublished; New Basaisa (1992, Ras Sudr) uses ~750 feddans (~315 ha) of desert",
 legalStructure:
 "Basaisa Community Development Association, the legal face of a Nile-Delta village that physicist Salah Arafa, of the American University in Cairo, began working in in 1974. The first rural photovoltaic systems in Egypt went onto Basaisa roofs in the late 1970s. New Basaisa, a desert offshoot at Ras Sudr in South Sinai, followed in 1992. (SEKEM, already in the atlas, is a different Egyptian project.)",
 legalCategory: "Community development association",
 stillActive: true,
 images: [
 "/communities/basaisa-land.jpg",
 "/communities/basaisa-1.jpg",
 "/communities/basaisa-2.jpg",
 "/communities/basaisa-3.jpg",
 ],
 summary:
 "Egypt’s solar village: Salah Arafa, a Sharqiya physicist, 1974, rooftop PV before it was a slogan. New Basaisa later took 750 feddans into Sinai.",
 businessModel:
 "Village enterprises, biogas from agricultural waste, solar electricity and heat, women’s training, a 2017 rooftop solar station on the association building. Partner and university support.",
 foundingProcess:
 "Arafa, from Basaisa, taught physics at AUC and went home. Ashoka: nine years of informal meetings from 1974 before the work hardened. India Today, 1978: a solar-energy project in a village 95 km northeast of Cairo. The Community Development Association became the public body; in 2017 it put a solar station on its own roof. In 1992 a group left for New Basaisa at Ras Sudr, 750 feddans of desert agriculture, 200 km from the old village. The Delta dirt stayed a village.",
 governance:
 "A village association and a founding scientist. You visit by arrangement with the association.",
 website: "https://www.ashoka.org/en/fellow/salah-arafa",
 timeline: [
 { year: "1974", event: "Salah Arafa begins village work in Basaisa, Sharqiya." },
 { year: "Late 1970s", event: "First rural photovoltaic systems in Egypt go onto Basaisa roofs." },
 { year: "1992", event: "New Basaisa planted at Ras Sudr, South Sinai, on ~750 feddans." },
 { year: "2017", event: "Solar station on the Community Development Association roof." },
 { year: "Present", event: "Association, biogas, and solar still run a Delta village raise." },
 ],
 },
 {
 slug: "boabeng-fiema",
 name: "Boabeng-Fiema Monkey Sanctuary",
 location: "Boabeng and Fiema, twin villages 22 km from Nkoranza, Bono East",
 region: "Bono East, Ghana",
 country: "Ghana",
 foundedYear: 1975,
 foundedLabel: "1975 (twin-village bye-law; sacred-monkey taboo far older)",
 members: 700,
 membersLabel: "Twin villages of Boabeng and Fiema; about 700 monkeys (Campbell’s mona and Geoffroy’s pied colobus) live in the same streets",
 acres: 1087,
 acresLabel: "4.4 km² (~1,087 acres / 440 ha) of forest and village, the monkeys’ range",
 legalStructure:
 "Boabeng-Fiema Monkey Sanctuary, a community sanctuary of two villages that, in 1975, passed a bye-law against harming the monkeys their grandparents already buried as children of the gods. Traditional law and a modern local statute sit on the same 4.4 square kilometres. You walk with a guide. (Wechiau, already in the atlas, is a different Ghanaian sanctuary.)",
 legalCategory: "Community sanctuary",
 stillActive: true,
 images: [
 "/communities/boabeng-fiema-land.jpg",
 "/communities/boabeng-fiema-1.jpg",
 "/communities/boabeng-fiema-2.jpg",
 "/communities/boabeng-fiema-3.jpg",
 ],
 summary:
 "In Boabeng and Fiema the monkeys walk the streets: about 700 Campbell’s mona and pied colobus, a 1975 bye-law, and a cemetery of small graves. Two Ghanaian villages that decided the colobus were neighbours.",
 businessModel:
 "Guided walks through the 4.4 km² forest and the village lanes. Ticket money to the sanctuary and the two communities. The monkeys take food from kitchens; the sanctuary now asks visitors not to feed them.",
 foundingProcess:
 "For generations Boabeng and Fiema held the monkeys sacred. In 1975 the two communities wrote a bye-law so the taboo would also be a statute. The Wildlife Division later helped with the sanctuary frame. A monkey that dies is still buried in a small coffin at the monkey cemetery in Fiema. About 700 animals (Campbell’s mona and the critically endangered Geoffroy’s pied colobus) live in the same trees as the houses. It is a national tourist site because the villages refused to become a hunting ground.",
 governance:
 "Traditional authority plus a 1975 bye-law, later a sanctuary administration. Guides are neighbours. Joining means being of Boabeng or Fiema, not buying a Bono East lot. Visitors book a walk.",
 website: "https://visitghana.com/attractions/boabeng-fiema-monkey-sanctuary/",
 timeline: [
 { year: "Older", event: "Boabeng and Fiema hold the monkeys as children of the gods." },
 { year: "1975", event: "The two villages pass a bye-law prohibiting harm to the monkeys." },
 { year: "Later", event: "Sanctuary frame with the Wildlife Division; monkey cemetery still used." },
 { year: "Present", event: "~700 monkeys in 4.4 km² of village forest; walks." },
 ],
 },
 {
 slug: "fambidzanai",
 name: "Fambidzanai Permaculture Centre",
 location: "Lot 4 Dovedale Road, Stapleford / Mt Hampden, Harare",
 region: "Harare, Zimbabwe",
 country: "Zimbabwe",
 foundedYear: 1988,
 foundedLabel: "1988 (John Wilson; ZIP-PVO12/92)",
 members: 20,
 membersLabel: "A staffed permaculture campus; farmers and diploma students rotate through",
 acres: null,
 acresLabel: "A Stapleford training farm whose hectare count is unpublished",
 legalStructure:
 "Fambidzanai Permaculture Centre, a Zimbabwean private voluntary organisation, registered as a programme of the Zimbabwe Institute of Permaculture (ZIP-PVO12/92). Founded 1988 by permaculture teacher John Wilson and farmer activists after a Bill Mollison course. Africa’s first dedicated permaculture centre. (Kufunda, already in the atlas, is a different Zimbabwean village.)",
 legalCategory: "Nonprofit / PVO",
 stillActive: true,
 images: [
 "/communities/fambidzanai-land.jpg",
 "/communities/fambidzanai-1.jpg",
 "/communities/fambidzanai-2.jpg",
 "/communities/fambidzanai-3.jpg",
 ],
 summary:
 "Africa’s first permaculture school: John Wilson, Stapleford 1988, ZIP-PVO12/92, a diploma in agroecology on Harare’s edge.",
 businessModel:
 "Permaculture design courses, a Diploma in Agroecology, soil analysis, seed and farmer training. PELUM Zimbabwe grew in the same soil. Course fees and partner support.",
 foundingProcess:
 "Wilson and a circle of farmer activists came back from a Mollison course and opened a centre in 1988 so Zimbabwe would not have to import the next Green Revolution as a chemical package. The Zimbabwe Institute of Permaculture took the PVO number 12/92. Stapleford, on Dovedale Road, is still the campus. Spring Prize later shortlisted it as the pioneer of climate-sensitive multifunctional agriculture in the region. The beds are the classroom.",
 governance:
 "A PVO board and a training campus. Farmers come for a course or a diploma and go home.",
 website: "https://fambidzanai.org.zw/",
 timeline: [
 { year: "1988", event: "John Wilson and farmer activists found Fambidzanai outside Harare." },
 { year: "1992", event: "Registered ZIP-PVO12/92 under the Zimbabwe Institute of Permaculture." },
 { year: "Later", event: "PELUM Zimbabwe and a regional agroecology diploma grow from the same campus." },
 { year: "Present", event: "Courses, soil labs, and a Stapleford farm-school, still no lot." },
 ],
 },
 {
 slug: "guie",
 name: "Ferme pilote de Guiè",
 location: "Guiè, near Manéga, ~60 km north of Ouagadougou",
 region: "Plateau-Central, Burkina Faso",
 country: "Burkina Faso",
 foundedYear: 1989,
 foundedLabel: "27 January 1989 (AZN); farm launched 14 December 1989",
 members: 11,
 membersLabel: "Association Zoramb Naagtaaba of Guiè and neighbouring villages (accounts of about eleven); the farm-school trains bocage builders",
 acres: 247,
 acresLabel: "Tankouri bocage perimeter 100 ha (1998) plus smaller village perimeters from 2 ha up, documented pieces of a Sahel bocage",
 legalStructure:
 "Association Zoramb Naagtaaba (AZN), a Burkinabe inter-village association created 27 January 1989. The Ferme pilote de Guiè opened 14 December the same year, after Henri Girard, a French agricultural technician, met Guiè in 1986. Wégoubri, the Mooré word they use, is Sahelian bocage: hedges, ponds, bunds, and fields that hold water. Terre Verte, a French NGO, is the associated European face.",
 legalCategory: "Village association",
 stillActive: true,
 images: [
 "/communities/guie-land.jpg",
 "/communities/guie-1.jpg",
 "/communities/guie-2.jpg",
 "/communities/guie-3.jpg",
 ],
 summary:
 "A Sahel bocage against the desert: Henri Girard and Guiè, AZN 27 January 1989, wégoubri hedges and a farm-school 60 km north of Ouaga.",
 businessModel:
 "Bocage perimeters laid out with villages, a Centre de Formation des Aménageurs Ruraux (CFAR) for young builders of the Sahel hedge, farm produce. Terre Verte and AZN raise the partner money.",
 foundingProcess:
 "Girard reached Guiè in 1986, did a feasibility study in 1987, and stayed. AZN (Zoramb Naagtaaba, the challenge the villages named) was founded 27 January 1989; the pilot farm on 14 December. A first experimental 4 hectares tested bunds, ponds, and hedges. Village perimeters followed: Kankamsin 2 ha in 1995, Zemstaaba 8 ha in 1996, Tankouri 100 ha in 1998. CFAR is the school inside the farm. Thirty years on, Terre Verte still publishes the annual report from 01 B.P. 551 Ouagadougou.",
 governance:
 "An inter-village association with a farm director. Young people train at CFAR and go home to lay hedges.",
 website: "https://eauterreverdure.org/guie/",
 timeline: [
 { year: "1986", event: "Henri Girard meets Guiè; feasibility study 1987." },
 { year: "1989", event: "AZN founded 27 January; Ferme pilote de Guiè launched 14 December." },
 { year: "1995–98", event: "Village bocage perimeters; Tankouri 100 ha." },
 { year: "Present", event: "CFAR still trains bocage builders; AZN and Terre Verte still publish from Guiè." },
 ],
 },
 {
 slug: "chikukwa",
 name: "Chikukwa Ecological Land Use Community Trust",
 location: "Chikukwa communal lands, Chitekete, Chimanimani District, Eastern Highlands",
 region: "Manicaland, Zimbabwe",
 country: "Zimbabwe",
 foundedYear: 1991,
 foundedLabel: "1991 (permaculture clubs); CELUCT official 1995; now CELUO",
 members: 1000,
 membersLabel: "Six Chikukwa villages; early accounts ~1,000 people, later counts of the wider communal area near 7,000",
 acres: null,
 acresLabel: "Six villages along ~15 km of Chimanimani hills and valleys, hectare count unpublished",
 legalStructure:
 "Chikukwa Ecological Land Use Community Trust (CELUCT), now Chikukwa Ecological Land Use Organisation (CELUO), a Zimbabwean community trust of six villages in Chimanimani. Permaculture clubs from 1991; the trust formalised in 1995 after four experimental years. Eli and Ulli Westermann, a German couple teaching in the district from the mid-1980s, were catalysts; Julious Piti is a founding member. Communal land, not freehold lots.",
 legalCategory: "Community trust",
 stillActive: true,
 images: [
 "/communities/chikukwa-land.jpg",
 "/communities/chikukwa-1.jpg",
 "/communities/chikukwa-2.jpg",
 "/communities/chikukwa-3.jpg",
 ],
 summary:
 "Six Chimanimani villages that put the springs back: 1991 clubs, CELUCT 1995, Eli and Ulli Westermann as catalysts, Julious Piti a founder.",
 businessModel:
 "Orchards, agroforestry, bees, fish, a training centre with kitchen and dormitory at Chitekete, courses for other wards. Partner support. Gift-economy labour on community works.",
 foundingProcess:
 "Springs had dried; women walked more than five kilometres for water; hillsides were bare. In 1991 permaculture clubs started in all six villages. The Westermanns, teaching in Chimanimani since the mid-1980s, helped build the centre. Villagers copied contours, vetiver, and woodlots from one another rather than waiting for a ministry. CELUCT was born in 1995. Food-processing clubs 1997; women’s groups 1998; talking circles for HIV. The training centre still sits at Chitekete. Rebranded CELUO, it claims more than thirty years of service.",
 governance:
 "Village clubs with elected heads feeding a community trust. You visit the Chitekete centre by arrangement (celuozw.org). Membership is being of the six villages.",
 website: "https://celuozw.org/",
 timeline: [
 { year: "Mid-1980s", event: "Eli and Ulli Westermann teaching in Chimanimani district." },
 { year: "1991", event: "Permaculture clubs in all six Chikukwa villages." },
 { year: "1995", event: "CELUCT formally founded after four experimental years." },
 { year: "1997–98", event: "Food-processing clubs; women’s groups; HIV talking circles." },
 { year: "Present", event: "CELUO still trains from Chitekete; six villages, still no lot." },
 ],
 },
 {
 slug: "il-ngwesi",
 name: "Il Ngwesi Group Ranch",
 location: "Mukogodo escarpment, Laikipia, neighbouring Lewa and Borana",
 region: "Laikipia, Kenya",
 country: "Kenya",
 foundedYear: 1995,
 foundedLabel: "1995 (group ranch conserved area); lodge 1996",
 members: 6000,
 membersLabel: "Equator Initiative: ~6,000–7,000 Laikipiak Maasai; 499 households in one 2002 count; six villages",
 acres: 21362,
 acresLabel: "Equator Initiative: 8,645 ha (~21,362 acres) community-conserved; the lodge site says the ranch covers 16,500 ha, record both, and the acres/hectares mix in English sources",
 legalStructure:
 "Ranchi Ya Il Ngwesi, a Kenyan Maasai group ranch of the Il Lakipiak (“people of wildlife”) on the Mukogodo escarpment. Group-ranch tenure under Kenyan land law, with a committee and chairman; not private plots. Community elders set aside 8,645 hectares (Equator Initiative) for conservation; the lodge, built 1996 with USAID through Kenya Wildlife Service, is community-owned and community-run. Equator Prize 2002. You take a bandas. (Umoja and OTEPIC, already in the atlas, are different Kenyan projects.)",
 legalCategory: "Group ranch",
 stillActive: true,
 images: [
 "/communities/il-ngwesi-land.jpg",
 "/communities/il-ngwesi-1.jpg",
 "/communities/il-ngwesi-2.jpg",
 "/communities/il-ngwesi-3.jpg",
 ],
 summary:
 "The first upmarket Maasai-owned lodge: Il Ngwesi, Mukogodo 1995–96, Equator Prize 2002, six villages and a group ranch.",
 businessModel:
 "Il Ngwesi Eco-Lodge (thatch bandas on a rocky outcrop), game walks, cultural visits. About 40% of lodge revenue to the community in the Equator Initiative account.",
 foundingProcess:
 "Il Lakipiak Maasai already held the group ranch. In 1995 they ring-fenced a conserved core; in 1996, with USAID/KWS money, they built a lodge the community would own and staff. Six villages stayed pastoralist. Lewa next door was the neighbour, not the landlord. The 2002 Equator Prize named the mix of wildlife, solar, and cash back to households. ilngwesi.com is still the door. English sources argue over 8,645 ha versus 16,500 ha and over acres versus hectares, the ranch is large.",
 governance:
 "An elected group-ranch committee and chairman for some 6,000 members. You visit by booking the lodge. Membership is being of the six villages. Confirm current conservancy and lodge arrangements before you treat a 2002 prize as a 2026 title deed.",
 website: "https://ilngwesi.com/",
 timeline: [
 { year: "1995", event: "Il Ngwesi Group Ranch sets aside a community-conserved core." },
 { year: "1996", event: "Community-owned eco-lodge built with USAID/KWS support." },
 { year: "2002", event: "UNDP Equator Prize; ~499 households in the prize account." },
 { year: "Present", event: "Lodge and six villages still on Mukogodo; still no Laikipia lot." },
 ],
 },
 {
 slug: "lynedoch",
 name: "Lynedoch EcoVillage",
 location: "Lynedoch Road at the R310 / Annandale, opposite Lynedoch station, Stellenbosch",
 region: "Western Cape, South Africa",
 country: "South Africa",
 foundedYear: 1999,
 foundedLabel: "1999 (land R3 million; Sustainability Institute); plots transferred 2004",
 members: 30,
 membersLabel: "GEN: a mixed community of 30 families; July 2004 transfer left the HOA with 35 members plus the development company",
 acres: 15,
 acresLabel: "6 ha (~15 acres) of the old Drie Gewels Hotel site, among Stellenbosch vineyards",
 legalStructure:
 "Lynedoch Development Company, a South African nonprofit (Section 21) that bought 6 hectares in 1999 for R3 million, plus the Lynedoch Home Owners Association, also a Section 21 company, which the municipality required as a condition of development rights. Eve Annecke and Mark Swilling founded the Sustainability Institute on the same campus. Freehold houses sit under an HOA code of conduct; a share of units was designed as affordable. South Africa’s first socially mixed ecological HOA, with a teaching institute in the old hotel. You may buy a house if one is for sale; you do not join a common purse. (Tlholego and Khula Dharma, already in the atlas, are different South African projects.)",
 legalCategory: "Homeowners association",
 stillActive: true,
 images: [
 "/communities/lynedoch-land.jpg",
    "/communities/lynedoch-people.jpg",
 "/communities/lynedoch-1.jpg",
 "/communities/lynedoch-2.jpg",
 "/communities/lynedoch-3.jpg",
 ],
 summary:
 "Eve Annecke and Mark Swilling built a mixed-income neighbourhood around a Sustainability Institute on 6 hectares of Stellenbosch. Lynedoch is a Section 21 association from 1999, an eco-HOA that tried to mean both the eco and the mixed-income parts.",
 businessModel:
 "House sales (including an affordable tranche), Sustainability Institute programmes with Stellenbosch University, Spark Lynedoch school, a crèche, conference use of the old hotel. Independent household finances. A house is the membership path, published as an HOA, not as a co-op share.",
 foundingProcess:
 "Annecke and Swilling bought the ruined Drie Gewels Hotel and its 6 hectares in 1999. The Sustainability Institute opened the same year. The development company took the rights; the municipality insisted on an HOA. Prefab guest rooms came down; 25 residences were planned from the hotel and houses; a child-centred precinct was the social argument. Plots transferred in July 2004. GEN still lists about 30 families of mixed race and income. The vineyards around it are the landscape, not the title.",
 governance:
 "Every owner is a member of the Lynedoch Home Owners Association, a Section 21 company, including the development company. A code of conduct is the daily law. Visit the Institute; buy a house if one comes up. Easier than a closed co-op, more rules than a raw Stellenbosch smallholding. Confirm which units are actually affordable before you treat a 1999 vision as a 2026 price.",
 website: "https://www.sustainabilityinstitute.net/eco-village/",
 timeline: [
 { year: "1999", event: "6 ha bought for R3 million; Sustainability Institute founded at Lynedoch." },
 { year: "2001", event: "Institute offices and classrooms completed in the old hotel precinct." },
 { year: "2004", event: "Sites transferred; LHOA has 35 members plus the development company." },
 { year: "Present", event: "GEN: ~30 mixed families; Institute, school, and HOA still on 6 ha." },
 ],
 },
 {
 slug: "anja",
 name: "Anja Community Reserve",
 location: "13 km south of Ambalavao on RN7, Haute Matsiatra, at the foot of the Three Sisters granite",
 region: "Haute Matsiatra, Madagascar",
 country: "Madagascar",
 foundedYear: 2001,
 foundedLabel: "1999 (Association Anja Miray); reserve 2001 with UNDP",
 members: 200,
 membersLabel: "Association Anja Miray, on the order of 200 local households in founding accounts; 85 guides in a later tourism count",
 acres: 74,
 acresLabel: "30 ha (~74 acres) in the UNDP figure; some guides say 37 ha, a granite woodland",
 legalStructure:
 "Association Anja Miray, a Malagasy community association founded 1999 as the forest came down. The Anja Community Reserve opened in 2001 with UNDP and later GEF support, 30 hectares of woodland and a lake at the foot of a cliff. Equator Prize 2012. The association manages the reserve. You walk with a local guide.",
 legalCategory: "Community association",
 stillActive: true,
 images: [
 "/communities/anja-land.jpg",
    "/communities/anja-people.jpg",
 "/communities/anja-1.jpg",
 "/communities/anja-2.jpg",
 "/communities/anja-3.jpg",
 ],
 summary:
 "Beside the RN7, Association Anja Miray took 30 hectares in 1999 and found itself hosting the densest ring-tailed lemurs on the highway. Equator Prize 2012. A village that made a reserve because the lemurs were already there.",
 businessModel:
 "Guided walks among ~300 ring-tailed lemurs, the granite, a lake. 12,000 visitors in 2011. Fees pay guides, schools, teacher salaries, aquaculture, fuelwood plantations.",
 foundingProcess:
 "The forest at the Three Sisters was going. In 1999 villagers formed Association Anja Miray. In 2001, with UNDP, they gazetted a 30-hectare reserve rather than wait for a national park. Local fady already forbade eating the lemurs; selling them to outsiders stopped. By 2011 Anja was one of Madagascar’s most-visited community sites. The 2012 Equator Prize paid $5,000 and a story. The granite is still the association’s.",
 governance:
 "A village association of resident households. You must take a local guide. Joining is being of Anja. Book at the gate rather than walking the lemurs unguided.",
 website: "https://www.equatorinitiative.org/2017/05/30/association-anja-miray/",
 timeline: [
 { year: "1999", event: "Association Anja Miray founded as the forest degraded." },
 { year: "2001", event: "Anja Community Reserve established with UNDP support, 30 ha." },
 { year: "2011", event: "12,000 visitors; one of Madagascar’s busiest community reserves." },
 { year: "2012", event: "UNDP Equator Prize." },
 { year: "Present", event: "~300 ring-tailed lemurs, association guides." },
 ],
 },
];

