import type { Community } from "./communities";

/** Mexican communities, oldest-founded first within batches. Huehuecoyotl and Las Cañadas already sit in the North America cluster. A second ten follow after Inla Kesh. A third ten follow after Sekkan. Five Baja California peninsula communities follow Kuyabeh. Five Jalisco communities follow Rancho Pacífico Baja. */
export const mexicoCommunities: Community[] = [
 {
 slug: "los-horcones",
 name: "Los Horcones",
 location: "Carretera a Tecoripa km 63, La Colorada, ~40 miles from Hermosillo",
 region: "Sonora, Mexico",
 country: "Mexico",
 foundedYear: 1973,
 foundedLabel: "October 1973 (cooperativa 1977; 100 ha parcel 1981)",
 members: 10,
 membersLabel: "A small family-core cooperativa (founded by 7; ~13 in 1999; later counts as few as 6)",
 acres: 247,
 acresLabel: "~100 ha (~247 acres) of Sonoran desert at km 63; some accounts cite ~110 ha",
 legalStructure:
 "Comunidad de los Horcones, organized as a Sonoran Sociedad Cooperativa de Producción in November 1977. The village began in October 1973 on a smaller parcel outside Hermosillo and moved to the present ~100-hectare desert tract in October 1981. Land, houses, and enterprises are held by the cooperative, not individual title. Members live the Walden Two experiment.",
 legalCategory: "Producer cooperative",
 stillActive: true,
 images: [
 "/communities/los-horcones-land.jpg",
 "/communities/los-horcones-1.jpg",
 "/communities/los-horcones-2.jpg",
 ],
 summary:
 "Mexico’s Walden Two: a Sonoran desert cooperativa de producción that has used behavior analysis since 1973 to run a small common-purse village, a convention hall, and a centre for children with autism.",
 businessModel:
 "A producer cooperative: farm and workshop income, a decades-long autism and special-education programme (the 1971 Centro para Niños con Déficit Conductual is the precursor), crafts, summer camps, and livestock. The community has said it is self-financed, with no external land-purchase grant found. Visitors are received in the cooler months (October–March).",
 foundingProcess:
 "Inspired by B. F. Skinner’s Walden Two, psychologists and teachers from a 1971 Hermosillo centre for children with behavioral deficits founded Los Horcones in October 1973 as a “social laboratory.” They applied experimental analysis of behavior to daily life (cooperation, non-violence, equality, ecological self-sufficiency) and in 1974 began using the word “behaviorology.” The cooperative was formalized in November 1977. Industrial-zone pressure forced a move, in October 1981, to about 100 hectares at km 63 of the Hermosillo–Chihuahua highway. The International Behaviorology Association held its second convention here in January 1990. Skinner mentioned the village in 1983. Children were homeschooled, then often audited university courses in Tucson.",
 governance:
 "A planner-manager experimental cooperativa in the Walden Two lineage: members design experiments, measure results, and may write successful behaviors into a community code. No private title. Open to new members in principle; growth has been slow and family-centered. Visitors come in the cool season, weekdays preferred. Contact is the village and the autism programme.",
 website: "https://www.loshorcones.org.mx/",
 timeline: [
 { year: "1971", event: "Centro para Niños con Déficit Conductual opens in Hermosillo, the precursor." },
 { year: "1973", event: "Los Horcones founded in October as a Walden Two community." },
 { year: "1977", event: "Sociedad Cooperativa de Producción formalized (November)." },
 { year: "1981", event: "Community moves to the ~100 ha desert parcel at km 63 (October)." },
 { year: "1990", event: "Second TIBA convention on site; hall and houses built." },
 { year: "Present", event: "A small desert cooperativa; autism programme and farm continue." },
 ],
 },
 {
 slug: "tosepan",
 name: "Tosepan Titataniske",
 location: "Cuetzalan del Progreso, Sierra Nororiental, Puebla (Tosepan Kali campus)",
 region: "Puebla, Mexico",
 country: "Mexico",
 foundedYear: 1977,
 foundedLabel: "1977 (unión de pequeños productores; cooperativa 1980; unión de cooperativas 2007)",
 members: 53000,
 membersLabel: "~53,000 socios across ~39 municipalities in Puebla and Veracruz (El País, April 2025)",
 acres: null,
 acresLabel: "A union across 38 communities in 29 municipalities; Tosepan Kali is the visitable Cuetzalan campus",
 legalStructure:
 "Mexico’s oldest indigenous cooperative movement: Sociedad Cooperativa Agropecuaria Regional Tosepan Titataniske (Nahuatl: “united we will overcome”), formalized in 1980 after a 1977 sugar-and-pepper organizing drive, then the Unión de Cooperativas Tosepan (2007) holding about nine cooperatives and several asociaciones civiles (Yeknemilis, Fundación Tosepan). Tosepantomin is the savings-and-credit cooperative. Tosepan Kali (2004) is the ecotourism cooperative. Members live in their own villages.",
 legalCategory: "Federation of cooperatives",
 stillActive: true,
 images: [
 "/communities/tosepan-land.jpg",
    "/communities/tosepan-people.jpg",
 "/communities/tosepan-1.jpg",
 "/communities/tosepan-2.jpg",
 "/communities/tosepan-3.jpg",
 ],
 summary:
 "The largest indigenous cooperative union in Mexico: fifty thousand Nahua and Tutunaku socios, organic coffee and pepper, a caja, a school, and Tosepan Kali cabins in Cuetzalan, built to beat the middleman, not to sell lots.",
 businessModel:
 "Organic coffee and pimienta gorda (Certimex; Europe, Japan, Mexico, U.S.), milpa and backyard gardens, stingless-bee (pisilnekmej) honey, bamboo, a nursery of about a million plants a year, Tosepantomin savings and credit, Tosepan Kali ecotourism (hotel, hostel, cabins), a school (Tosepan Kalnemachtiloyan: preschool through secondary plus music), and community health (Tosepan Pajti). Income stays in the union.",
 foundingProcess:
 "In 1977 about 700 Nahua campesinos in Cuetzalan organized as the Unión de Pequeños Productores de la Sierra, first for sugar at a fair price, then nine tonnes of pepper sold outside the region at triple the intermediary’s rate, then coffee in 1978. In 1980 they formed the Sociedad Cooperativa Agropecuaria Regional Tosepan Titataniske and ran 32 cooperative stores. A nursery at Xiloxochico (1984), organic coffee (2000), the A.C. Yeknemilis (2002), the training centre Kaltaixpetaniloyan (2003), Tosepan Kali (2004), the school (2006), and the Unión de Cooperativas (2007) followed. In 2010 the union helped defeat a Walmart/Bodega Aurrerá in Cuetzalan by plebiscite.",
 governance:
 "A federation of cooperatives, each administratively autonomous, with a Nahuatl-and-Totonac membership democracy. Yeknemilis A.C. trains; Fundación Tosepan takes donations. You join by being a socio in a member community (coffee, pepper, savings, school) not by buying a sierra lot on a portal.",
 website: "https://tosepan.coop/",
 timeline: [
 { year: "1977", event: "~700 campesinos organize for sugar and pepper; Tosepan Titataniske begins." },
 { year: "1980", event: "Sociedad Cooperativa Agropecuaria Regional Tosepan Titataniske formed; 32 cooperative stores." },
 { year: "2003–04", event: "Kaltaixpetaniloyan training centre; Tosepan Kali ecotourism cooperative opens." },
 { year: "2007", event: "Unión de Cooperativas Tosepan binds the family of co-ops." },
 { year: "2010", event: "Citizen plebiscite, with Tosepan, rejects Walmart/Bodega Aurrerá in Cuetzalan." },
 { year: "2022", event: "Supreme Court invalidates open-pit mining concessions covering ~745,000 ha around Cuetzalan." },
 { year: "Present", event: "~53,000 socios; coffee, caja, school, Kali cabins, stingless-bee honey." },
 ],
 },
 {
 slug: "teopantli-kalpulli",
 name: "Teopantli Kalpulli",
 location: "San Isidro Mazatepec, municipality of Tala, edge of Bosque La Primavera",
 region: "Jalisco, Mexico",
 country: "Mexico",
 foundedYear: 1983,
 foundedLabel: "7 March 1983 (ashram; later a kalpulli / A.C.)",
 members: 70,
 membersLabel: "~22 families; locality counts drift",
 acres: 91,
 acresLabel: "~37 ha (~91 acres): ~30 ha farm and reserve, ~7 ha residential internally parceled",
 legalStructure:
 "Teopantli Kalpulli A.C. Founded 7 March 1983 as an Ananda Marga ashram outside Guadalajara, later living as a Mexican kalpulli (Nahuatl for a clan/community) of about 22 families at San Isidro Mazatepec. About 37 hectares, of which roughly 7 have been internally parceled (~55 lots of ~500 m²) with the rest farm and reserve. A cultural and spiritual membership community on private land. Hosted the 14th Consejo de Visiones – Guardianes de la Tierra (“Llamado de la Salvia”) in November 2015.",
 legalCategory: "Religious society",
 stillActive: true,
 images: [
 "/communities/teopantli-kalpulli-land.jpg",
 "/communities/teopantli-kalpulli-1.jpg",
 "/communities/teopantli-kalpulli-2.jpg",
 ],
 summary:
 "A Jalisco kalpulli that began as an Ananda Marga ashram in 1983: twenty-two families, permaculture on dry pasture beside Bosque La Primavera, and the 2015 Consejo de Visiones that CASA Latina still traces itself to.",
 businessModel:
 "Permaculture, ceremonies, and gatherings rather than a cash crop at Tosepan scale. The 2015 Vision Council brought about 500 people onto the land for a week. Teaching, festivals, and a resident village of families are the economy.",
 foundingProcess:
 "Ananda Marga practitioners founded an ashram on dry grassland at San Isidro Mazatepec on 7 March 1983, west of Guadalajara at the southern edge of Bosque La Primavera. Over three decades the ashram became a kalpulli of about 22 families, mixing Hindu-derived practice with Mexican indigenous ceremony. Levi Ríos has been a public voice. Internal lots (~55 of ~500 m²) sit inside the A.C. In November 2015 the 14th Consejo de Visiones, “Llamado de la Salvia,” met here; Alberto Ruz of Huehuecoyotl reported it as a seed of CASA Latina. The A.C. marked 43 years in March 2026.",
 governance:
 "A small spiritual-and-family kalpulli. Decisions sit with the families who live there. Visitors come for ceremonies, festivals, and councils by arrangement, not by buying in.",
 website: "https://esperanzaproject.com/2014/sustainability/ecovillages/a-new-humanity-on-the-move-31-years-of-community-in-teopantli-kalpulli/",
 timeline: [
 { year: "1983", event: "Ashram founded 7 March on dry pasture at San Isidro Mazatepec." },
 { year: "1990s–2000s", event: "The ashram becomes a kalpulli of families; permaculture on former grassland." },
 { year: "2014", event: "About 22 families; alternative-living festival documented by the Esperanza Project." },
 { year: "2015", event: "14th Consejo de Visiones – Llamado de la Salvia hosted on site (~500 people)." },
 { year: "Present", event: "A small Jalisco kalpulli still at the edge of Bosque La Primavera." },
 ],
 },
 {
 slug: "litibu",
 name: "Litibú EcoVillage",
 location: "Playa Litibú, 2 km from Higuera Blanca, Riviera Nayarit",
 region: "Nayarit, Mexico",
 country: "Mexico",
 foundedYear: 1990,
 foundedLabel: "1990 (eighteen pioneers; eight casas)",
 members: 20,
 membersLabel: "Eight eco casas; founding Mexican families plus later multicultural residents",
 acres: 3,
 acresLabel: "~1.2 ha (~3 acres) of Pacific beach forest, jungle, and mangrove edge",
 legalStructure:
 "Eight privately managed eco casas on a small beach-forest parcel at Playa Litibú. Because the site sits in Mexico’s coastal restricted zone, foreign beneficial ownership typically runs through a bank fideicomiso and an LLC rather than direct title. Most houses are privately held inside that wrapper; membership is a separate path (application, fee, visit, associate period, dues, work).",
 legalCategory: "Freehold title",
 stillActive: true,
 images: [
 "/communities/litibu-land.jpg",
    "/communities/litibu-people.jpg",
 "/communities/litibu-1.jpg",
 "/communities/litibu-2.jpg",
 ],
 summary:
 "Eight solar casas in the Litibú forest, two kilometres from Higuera Blanca: a 1990 beach village that still treats membership as a visit-and-work path.",
 businessModel:
 "Private casas, shared solar and rainwater, a common blackwater system, greywater gardens, and a food forest. Workaway-style stays and membership dues.",
 foundingProcess:
 "In 1990 eighteen social pioneers (including four Mexican families who had worked on village-development projects abroad) began planning an intentional community on Playa Litibú, two kilometres from Higuera Blanca, midway between Sayulita and Punta de Mita. They built eight eco casas with solar, roof-catchment cisterns, and composting. The village sits in jungle-and-mangrove forest beside a beach the tourist board now markets as a FONATUR master plan; the eight casas are the older, smaller project.",
 governance:
 "Community agreements among casa households. Joining is an application, a nonrefundable fee, a required visit, mentorship, an associate period, dues, and work. Houses are mostly private; you do not automatically buy the forest. Confirm availability with the village, this is not an open beach subdivision.",
 website: "https://www.litibuecovillage.org/",
 timeline: [
 { year: "1990", event: "Eighteen pioneers, including four Mexican families, begin Litibú EcoVillage at Playa Litibú." },
 { year: "1990s–2010s", event: "Eight eco casas, solar, cisterns, blackwater, and a food forest take shape." },
 { year: "Present", event: "A small multicultural village of eight casas beside Higuera Blanca; membership still by visit." },
 ],
 },
 {
 slug: "u-yits-kaan",
 name: "U Yits Ka'an",
 location: "Maní, southern Yucatán (subsites across the peninsula)",
 region: "Yucatán, Mexico",
 country: "Mexico",
 foundedYear: 1996,
 foundedLabel: "11 January 1996 (first plots 1994; Misereor)",
 members: 40,
 membersLabel: "A campesino school and network: promotores and Maya farming families across southern and eastern Yucatán",
 acres: 37,
 acresLabel: "~15 ha (~37 acres) campus on the Maní–Dzán road, plus milpas and sedes across the peninsula",
 legalStructure:
 "Escuela de Agricultura Ecológica U Yits Ka'an A.C. (“the dew that falls from the sky” in Yucatec Maya), founded 11 January 1996 by diocesan priests of the Pastoral de la Tierra. About 15 hectares were purchased for the internado at Maní. MISEREOR financed the founding; after that grant ended (2005) and a 2008 rupture with the hierarchy, the school constituted itself as an independent asociación civil. SEMARNAT’s Premio Nacional al Mérito Ecológico in 2014.",
 legalCategory: "Nonprofit foundation",
 stillActive: true,
 images: [
 "/communities/u-yits-kaan-land.jpg",
    "/communities/u-yits-kaan-people.jpg",
 "/communities/u-yits-kaan-1.jpg",
 "/communities/u-yits-kaan-2.jpg",
 ],
 summary:
 "A Maya campesino school on the ground where Diego de Landa burned the codices: milpa, xunán-kab bees, a native-seed bank, and thirty years of family-to-family agroecology from Maní, paid by Misereor at the start, not by lots.",
 businessModel:
 "Campesino-a-campesino teaching, fair-trade honey and produce (from 2002), tianguis, a seed bank (Ch'iil Kaaj), a medicinal garden, Cuxtal maize, photovoltaic water, and grants (Misereor, Kellogg, Spore, PPD/GEF, Panta Rhea, Adveniat). Tours of the meliponario and milpa.",
 foundingProcess:
 "In 1994 priests and campesinos laid demonstration plots in 13 communities to leave agrochemicals. On 11 January 1996, with Misereor, they opened the internado at Maní (the town of the 1562 Auto de Fe) as a school to recover Maya agricultural memory. Fair trade (2002), a Chapingo peasant-school encuentro (2003), ecological farms (2006), biodigesters (2011), tianguis (2013), the SEMARNAT prize (2014), and a Vatican water-care selection (2024) mark the years. The method is family to family.",
 governance:
 "A pastoral-and-campesino school with promotores in parishes across southern and eastern Yucatán. Visitors book a school-day tour. There is no membership share and no house title. Joining means becoming a farming family in the network, or a volunteer at the internado, not buying in.",
 website: "https://uyitskaan.com/",
 timeline: [
 { year: "1994", event: "First agroecological plots in 13 communities; first workshop at Maní." },
 { year: "1996", event: "11 January: Escuela U Yits Ka'an opens as an internado with Misereor support." },
 { year: "2002–13", event: "Fair trade, ecological farms, biodigesters, and community tianguis." },
 { year: "2014", event: "SEMARNAT Premio Nacional al Mérito Ecológico." },
 { year: "2024–26", event: "Vatican water-care selection; 30th anniversary." },
 ],
 },
 {
 slug: "tierra-del-sol",
 name: "Tierra del Sol",
 location: "Paraje Langueche, San Jerónimo Tlacochahuaya, Valles Centrales",
 region: "Oaxaca, Mexico",
 country: "Mexico",
 foundedYear: 2001,
 foundedLabel: "2001 (land); farm commenced May 2002",
 members: 10,
 membersLabel: "A small resident-and-apprentice farm; workshops draw many more",
 acres: 10,
 acresLabel: "4 ha (~10 acres) of dry-tropics regenerative farm (was ~2.5 ha in early years)",
 legalStructure:
 "A privately held regenerative farm and teaching villa founded by Pablo Ruiz Lavalle, a former Mexico City pilot who bought about two hectares in 2001 and grew the place to four or five. Run as a self-managed agroecological centre. Courses, guided visits, apprenticeships, and stays sit on family-scale title. You learn dry-tropics regeneration.",
 legalCategory: "Private farm",
 stillActive: true,
 images: [
 "/communities/tierra-del-sol-land.jpg",
 "/communities/tierra-del-sol-1.jpg",
 ],
 summary:
 "A four-hectare dry-tropics villa in the Valles Centrales: a Mexico City pilot’s cambio de vida that became Oaxaca’s best-known regenerative teaching farm, ferments, milpa, and eco-technologies.",
 businessModel:
 "Guided visits (from MXN $250), thematic days with lunch, volunteer stays, an apprentice programme, workshops (ferments, organic fertilizers, eco-building, natural dyes, indigenous cooking), and immersive courses. The farm feeds the kitchen. Teaching is the cash engine.",
 foundingProcess:
 "Pablo Ruiz Lavalle left aviation and Mexico City, bought about two hectares at Paraje Langueche, San Jerónimo Tlacochahuaya, in 2001, and commenced the farm in May 2002. The work was recovering dry-tropics cycles on land damaged by Green-Revolution habits, then teaching neighbouring farmers. The holding grew to four or five hectares. Julio Abimael has managed the farm. NCSU and other university groups have visited.",
 governance:
 "A founder-led teaching farm, self-managed, with apprentices and volunteers on a private title. Visitors book. There is no co-op share and no published membership. Harder than a course fee, much harder than an Oaxaca vacation rental.",
 website: "https://www.tierradelsol.org.mx/",
 timeline: [
 { year: "2001", event: "Pablo Ruiz Lavalle buys ~2 ha at Tlacochahuaya and begins the cambio de vida." },
 { year: "2002", event: "Farm commenced (May); permaculture and dry-tropics restoration start." },
 { year: "2010s", event: "The holding grows to 4–5 ha; university groups and workshops." },
 { year: "Present", event: "A self-managed regenerative villa: visits, apprentices, ferments, eco-building." },
 ],
 },
 {
 slug: "bosque-village",
 name: "Bosque Village",
 location: "Forest near Yotatiro / Erongarícuaro, highlands above Lake Pátzcuaro",
 region: "Michoacán, Mexico",
 country: "Mexico",
 foundedYear: 2004,
 foundedLabel: "2004 (1 January living together)",
 members: 8,
 membersLabel: "A small resident core (GEN has listed as few as 2); 3,000+ visitors historically",
 acres: 83,
 acresLabel: "83 acres of pine, oak, and madrone forest",
 legalStructure:
 "A registered Mexican nonprofit running an off-grid permaculture farm and retreat in the Michoacán highlands. Founded in 2004 by Brian Fey. Land is held for the project rather than as subdivided lots. Interns and visitors come first; residents are people who can support themselves.",
 legalCategory: "Nonprofit foundation",
 stillActive: true,
 images: [
 "/communities/bosque-village-land.jpg",
 "/communities/bosque-village-1.jpg",
 ],
 summary:
 "An off-grid 83-acre pine-and-oak laboratory above Lake Pátzcuaro: composting toilets, a food forest, solar, and three thousand visitors since 2004, a Michoacán nonprofit.",
 businessModel:
 "Retreats, events, Workaway/HelpX internships, a campground, and online publishing (YouTube, Quora). A small solar system, chickens, and a food forest. Visitors have always been the public door. Lots are not for sale.",
 foundingProcess:
 "Brian Fey began Bosque Village in 2004 on 83 acres of pine, oak, and madrone near Yotatiro / Erongarícuaro, in a stretch of highland forest above Lake Pátzcuaro. The project mixed campground, eco-retreat, permaculture farm, and a hoped-for intentional community. People started living together that year. The nonprofit registered; thousands of short-term visitors and interns came through. A small resident core remained.",
 governance:
 "A founder-led nonprofit. Potential residents intern or participate first. GEN has listed the village as open to new members who can support themselves, retirees, digital nomads, people starting small businesses on site.",
 website: "https://ecovillage.org/map/community/bosque-village/",
 timeline: [
 { year: "2004", event: "Brian Fey founds Bosque Village on 83 acres of highland forest; people start living together." },
 { year: "2000s–10s", event: "Campground, retreats, food forest, solar, composting toilets; thousands of visitors." },
 { year: "Present", event: "Off-grid nonprofit still hosting interns and visitors above Lake Pátzcuaro." },
 ],
 },
 {
 slug: "via-organica",
 name: "Vía Orgánica",
 location: "Rancho in the Jalpa valley, El Membrillo, 15 km from San Miguel de Allende",
 region: "Guanajuato, Mexico",
 country: "Mexico",
 foundedYear: 2009,
 foundedLabel: "2009 (store/A.C.); ranch school 2012–13",
 members: 60,
 membersLabel: "~60 full-time staff (2019); agronomy students and a network of 200+ growers",
 acres: 198,
 acresLabel: "80 ha (~198 acres) demonstration ranch in the semi-arid highlands",
 legalStructure:
 "Vía Regenerativa y Orgánica, Asociación Civil, a Mexican nonprofit (Rosana Álvarez Martínez) whose mission is organic agriculture, fair trade, and public nutrition. The 80-hectare Jalpa-valley ranch is the demonstration school (from 2012–13); a store and restaurant opened in San Miguel de Allende in 2009. A project in partnership with the U.S. Organic Consumers Association and Regeneration International. You tour and train here.",
 legalCategory: "Registered association",
 stillActive: true,
 images: [
 "/communities/via-organica-land.jpg",
    "/communities/via-organica-people.jpg",
 "/communities/via-organica-1.jpg",
 "/communities/via-organica-2.jpg",
 "/communities/via-organica-3.jpg",
 ],
 summary:
 "An 80-hectare regenerative ranch in the Jalpa valley: agave, rotational grazing, a restaurant that actually serves the farm, and a Mexican A.C. built with the Organic Consumers Association, a school for campesinos.",
 businessModel:
 "Organic vegetables, herbs, fruit, seed, and animal products for the Vía Orgánica restaurant, market, and store; workshops; school and delegation visits; restoration camps; the Billion Agave Project (agave plus mesquite, fermented fodder, soil carbon). Local employment and agronomy-student training. Teaching and food sales, not house sales.",
 foundingProcess:
 "In 2009 Mexican activist Rosana Álvarez, with Carmina Navarrete and Organic Consumers Association co-founders Ronnie Cummins and Rose Welch, opened an organic shop in San Miguel de Allende. The Jalpa-valley demonstration ranch followed in 2012–13 on degenerated pasture, as a training hub for campesinos, students, and activists. Regeneration International later listed it as an Ecosystem Restoration Community, the first Restoration Camp in the Americas. The Billion Agave Project (agave plus mesquite, fermented fodder, soil carbon) is the later climate face. OCA is the U.S. partner, not the Mexican landowner.",
 governance:
 "A Mexican asociación civil with a ranch, a store, and a restaurant. The board of the A.C. is the legal face. Visitors book tours. There is no residential membership share. Interns and students come and go. Joining means a job, a course, or a donation.",
 website: "https://viaorganica.org/",
 timeline: [
 { year: "2009", event: "Organic store and restaurant open in San Miguel; Vía Orgánica A.C. begins." },
 { year: "2012–13", event: "80 ha Jalpa-valley demonstration ranch established as a farm school." },
 { year: "2010s", event: "80 ha restoration; Regenerative International / ERC listing; Billion Agave work." },
 { year: "Present", event: "Ranch, restaurant, and school still 15 km from San Miguel; thousands of visitors a year." },
 ],
 },
 {
 slug: "crisalium",
 name: "Ecoaldea Crisalium",
 location: "Parque Natural Encuentro, San Cristóbal de las Casas",
 region: "Chiapas, Mexico",
 country: "Mexico",
 foundedYear: 2012,
 foundedLabel: "2012 (asociación civil)",
 members: 20,
 membersLabel: "~15 GEN residents; a 2023 local report counted ~17 adults and 10 children in ~10 family nuclei",
 acres: 12,
 acresLabel: "5 ha (~12 acres) of forest inside Parque Natural Encuentro, a voluntary reserve",
 legalStructure:
 "Crisalium, educación, naturaleza y transición A.C. Families inhabit and steward five hectares of forest inside Parque Natural El Encuentro (~143 ha, private park from 2002) near San Cristóbal de las Casas. A 2020 notarial servidumbre ecológica (ecological easement) zones conservation, restoration, and limited building. Consensus among resident families. GEN lists the village as open to visitors and not currently open to new members.",
 legalCategory: "Registered association",
 stillActive: true,
 images: [
 "/communities/crisalium-land.jpg",
 "/communities/crisalium-1.jpg",
 ],
 summary:
 "Five hectares of pine-oak forest in Parque Natural Encuentro: a 2012 A.C. of families who named themselves for a chrysalis and a nitrogen-fixing bacterium, teaching permaculture and nonviolent communication in the San Cristóbal watershed.",
 businessModel:
 "Workshops and courses in permaculture, natural building, eco-technologies, nonviolent communication, and popular education; guided visits from the park; camps. Conservation of the Encuentro forest is the land work.",
 foundingProcess:
 "A collective of families formed the A.C. in San Cristóbal de las Casas in 2012, taking the name Crisalium from crisálida (chrysalis) and Rhizobium (the bacterium that feeds roots). They settled five hectares inside Parque Natural Encuentro, a voluntary reserve that protects part of the city’s watershed: rainwater catchment, composting toilets, greywater, agroforestry, low-impact building. GEN lists 15 people.",
 governance:
 "Consensus among resident families inside an asociación civil. GEN: open to visitors, not currently open to new members. Courses are the public door.",
 website: "https://crisalium.org/",
 timeline: [
 { year: "2012", event: "Crisalium A.C. formed in San Cristóbal; families begin inhabiting Encuentro forest." },
 { year: "2010s–20s", event: "Permaculture, bioconstruction, NVC, and forest-conservation teaching take shape." },
 { year: "Present", event: "~15 people on 5 ha inside Parque Natural Encuentro; visits and courses, not new members." },
 ],
 },
 {
 slug: "inla-kesh",
 name: "Inla Kesh",
 location: "Chichihuistán, Los Altos de Chiapas",
 region: "Chiapas, Mexico",
 country: "Mexico",
 foundedYear: 2012,
 foundedLabel: "2012 (2 ha at Chichihuistán; Tamera-inspired biotopo)",
 members: 15,
 membersLabel: "~10 adults and 5 children (Chuffed campaign); collaborators in a joining phase",
 acres: 5,
 acresLabel: "2 ha (~5 acres) in the highlands community of Chichihuistán",
 legalStructure:
 "A Tamera-inspired healing biotope (biotopo de sanación) on about two hectares at Chichihuistán in the Chiapas highlands. A small intentional community and EDE (Ecovillage Design Education) host in coordination with Gaia Education. Private community land under a residential circle. In Lak'ech: “I am another you.” You take an EDE.",
 legalCategory: "Membership association",
 stillActive: true,
 images: [
 "/communities/inla-kesh-land.jpg",
 "/communities/inla-kesh-people.jpg",
 "/communities/inla-kesh-1.jpg",
 ],
 summary:
 "A two-hectare Tamera-inspired biotopo in the Chiapas highlands: ten adults, five children, and a Gaia Education EDE that treats community as the curriculum, In Lak'ech.",
 businessModel:
 "Ecovillage Design Education (month-long, Gaia Education certified), community-experience weeks, and donations (including a Chuffed campaign to grow the biotope). A small highland farm. Teaching is the public cash.",
 foundingProcess:
 "Since 2012 a group has lived on two hectares at Chichihuistán, in Los Altos de Chiapas, building a healing biotope in the Tamera lineage: socio-ecological and “meta-relational” practice, decolonial education, and a peace-village culture. They hosted community-experience weeks by 2019 and run EDE courses with Gaia Education. The Mayan phrase In Lak'ech (“I am another you”) is the name.",
 governance:
 "A small residential circle on private highland land. Courses have a public door; membership is relational and currently tiny. Contact the community about an EDE or a stay; do not treat Chichihuistán as a listing.",
 website: "https://www.inlakeshchiapas.org/",
 timeline: [
 { year: "2012", event: "Community begins on 2 ha at Chichihuistán, Altos de Chiapas." },
 { year: "2010s", event: "Healing-biotope practice in the Tamera lineage; community-experience weeks." },
 { year: "Present", event: "~10 adults and 5 children; Gaia Education EDE hosted on the highland land." },
 ],
 },
 {
 slug: "vicente-guerrero",
 name: "Grupo Vicente Guerrero",
 location: "Comunidad Vicente Guerrero, municipality of Españita, and neighbouring villages",
 region: "Tlaxcala, Mexico",
 country: "Mexico",
 foundedYear: 1973,
 foundedLabel: "1973 (Comité de Servicio de los Amigos; A.C. December 1997)",
 members: 40,
 membersLabel: "A campesino-promoter A.C.; maize-fair and campesino-a-campesino network across Españita and neighbouring municipalities",
 acres: null,
 acresLabel: "A union of milpas and promoter villages",
 legalStructure:
 "Proyecto de Desarrollo Rural Integral Vicente Guerrero A.C., formalized in December 1997 by promoters from the village of Vicente Guerrero, Españita. The work is older: a 1973 Comité de Servicio de los Amigos (Quaker-linked) for roads and drinking water, agroecological training from 1976, and a campesino-a-campesino exchange with Guatemala’s Katoque Ketzal from 1978. Members farm their own plots. You become a promoter in a village.",
 legalCategory: "Registered association",
 stillActive: true,
 images: [
 "/communities/vicente-guerrero-land.jpg",
 "/communities/vicente-guerrero-1.jpg",
 "/communities/vicente-guerrero-2.jpg",
 "/communities/vicente-guerrero-3.jpg",
 ],
 summary:
 "Tlaxcala’s campesino-a-campesino school: a 1973 village committee that became an A.C., taught soil and water to its neighbours, hosted Guatemalan promoters, and still holds maize fairs, Pan para el Mundo money.",
 businessModel:
 "Campesino-a-campesino training, criollo maize fairs and seed funds, soil-and-water conservation, and project grants (Pan para el Mundo / Brot für die Welt from 1998; Rockefeller for promoter formation). Families keep their harvest. Teaching and seed, not house sales.",
 foundingProcess:
 "In 1973 neighbours in Vicente Guerrero, Españita, formed a Comité de Servicio de los Amigos to build roads and potable water. Quaker promoters taught intensive biodynamic horticulture from 1976. In 1978 four campesinos from Katoque Ketzal, Chimaltenango, arrived (Vecinos Mundiales); some stayed 1979–84 and the Mexican hosts later took the method to Sandinista Nicaragua. The group passed through SEDEPAC (1980–88), then volunteered on its own. Relations with Pan para el Mundo began in 1993. In December 1997 the promoters notarized Proyecto de Desarrollo Rural Integral Vicente Guerrero A.C. Maize fairs started in 1998.",
 governance:
 "An asociación civil of community promoters (Gabriel Sánchez, Teodoro Juárez, Delfino Sánchez, and Roque Sánchez in the founding layer) teaching family to family. Assemblies and fairs. You join by farming and promoting in a member village.",
 website: "https://gvgtlaxcala.org/",
 timeline: [
 { year: "1973", event: "Comité de Servicio de los Amigos forms in Vicente Guerrero for roads and water." },
 { year: "1976–78", event: "Quaker agroecology training; Katoque Ketzal campesinos arrive from Guatemala." },
 { year: "1980–88", event: "Work inside SEDEPAC, then a voluntary exit; CaC method carried to Nicaragua." },
 { year: "1997", event: "Proyecto de Desarrollo Rural Integral Vicente Guerrero A.C. notarized (December)." },
 { year: "1998", event: "First maize fair; first triennial Pan para el Mundo project." },
 { year: "Present", event: "A.C. still trains promoters in Españita and neighbouring municipalities; fairs continue." },
 ],
 },
 {
 slug: "nanciyaga",
 name: "Reserva Ecológica Nanciyaga",
 location: "Carretera Catemaco–Coyame km 7, shore of Laguna Catemaco",
 region: "Veracruz, Mexico",
 country: "Mexico",
 foundedYear: 1986,
 foundedLabel: "late 1980s (family purchase; tourist reserve thereafter)",
 members: 15,
 membersLabel: "A family-run reserve and eco-tourism staff (Carlos Rodríguez Mouriño, director)",
 acres: 35,
 acresLabel: "14 ha (~35 acres) on the lagoon; ~2 ha tourist face, the rest jungle",
 legalStructure:
 "A privately held ecological reserve on the Catemaco shore, inside the Los Tuxtlas biosphere. Carlos Rodríguez Mouriño’s father bought deforested land at auction when Carlos was thirteen; the family became guardians rather than subdividers. Carlos, a biologist, now directs. About fourteen hectares, of which two are the tourist face. You take a cabin, a limpia, or a jungle walk.",
 legalCategory: "Private farm",
 stillActive: true,
 images: [
 "/communities/nanciyaga-land.jpg",
 "/communities/nanciyaga-1.jpg",
 "/communities/nanciyaga-2.jpg",
 "/communities/nanciyaga-3.jpg",
 ],
 summary:
 "Fourteen hectares of Tuxtlas jungle on Laguna Catemaco: a family reserve that turned an auction parcel into scarlet-macaw recovery, Hollywood backlot, and the most visited eco-lodge on the lake, two hectares of cabins, the rest selva.",
 businessModel:
 "Cabin stays, jungle walks, temazcal, limpias, a restaurant, and film location fees (Medicine Man / El Curandero de la selva with Sean Connery; Mel Gibson’s Apocalypto). UNAM collaboration on macaw recovery. Conservation is the land work; tourism pays it.",
 foundingProcess:
 "After cattle and logging had stripped most of the Catemaco shore, a Rodríguez family purchase at auction put a remnant jungle in private hands. Carlos was thirteen. His father pioneered a low-impact tourist face with leftover film-set materials; Carlos studied biology and later sharks, then came home when his father fell ill. The Los Tuxtlas biosphere (1998) wrapped the region; Nanciyaga stayed a private reserve inside it. Two hectares of visitors, twelve of jungle.",
 governance:
 "A family reserve with a biologist-director. Staff and guides. Book a cabin.",
 website: "https://www.facebook.com/reservananciyaga/",
 timeline: [
 { year: "Late 1980s", event: "Rodríguez family buys deforested Catemaco-shore land at auction; the reserve begins." },
 { year: "1992", event: "Medicine Man (El Curandero de la selva) films on the lagoon." },
 { year: "1998", event: "Los Tuxtlas declared a biosphere reserve; Nanciyaga sits inside it." },
 { year: "2006", event: "Apocalypto films in the jungle." },
 { year: "2023", event: "14 ha, 2 ha tourist, UNAM macaw work; Carlos Rodríguez Mouriño directing." },
 ],
 },
 {
 slug: "pueblo-sacbe",
 name: "Pueblo Sacbé",
 location: "Jungle west of Playa del Carmen, Quintana Roo",
 region: "Quintana Roo, Mexico",
 country: "Mexico",
 foundedYear: 1998,
 foundedLabel: "1998 (54 ha off-grid jungle settlement)",
 members: 150,
 membersLabel: "~50 families (Forum Natura, 2020); lots still change hands",
 acres: 133,
 acresLabel: "54 ha (~133 acres) of protected jungle; listings also say 134 acres",
 legalStructure:
 "A private off-grid jungle settlement of about 54 hectares west of Playa del Carmen. Bylaws (as published by residents) forbid connecting to the electrical grid, require biodigesters, and treat the jungle and the water system as the thing to conserve. Houses are privately held (typically pequeña propiedad, with foreigners often in a bank fideicomiso in the coastal zone) and lots are listed on ordinary Riviera Maya portals. A covenanted freehold village that still sells lots, with better jungle rules than the condos on Fifth Avenue.",
 legalCategory: "Freehold title",
 stillActive: true,
 images: [
 "/communities/pueblo-sacbe-land.jpg",
 "/communities/pueblo-sacbe-1.jpg",
 "/communities/pueblo-sacbe-2.jpg",
 "/communities/pueblo-sacbe-3.jpg",
 ],
 summary:
 "Fifty-four hectares of off-grid jungle fifteen minutes from Playa centro: fifty families, solar and wind, rounded hurricane houses, cenotes for residents, a 1998 covenanted settlement that still sells lots.",
 businessModel:
 "Private houses and lots. Solar and wind instead of CFE. Biodigesters. Some houses are short-term rentals and retreats (Jungle Sanctuary Lodge and others). The cash engine is real estate plus stays. Not income-sharing.",
 foundingProcess:
 "In 1998 a group laid out a 54-hectare jungle settlement west of what was then a smaller Playa del Carmen, on Maya land, and wrote bylaws against the grid. Houses were built round, without glass, to pass hurricane wind. About fifty families were living there by 2020. As Playa densified, Sacbé became the city’s best-known ecological enclave, and a listing category for jungle lots.",
 governance:
 "Resident bylaws and a village of lot owners. Decisions sit with people who hold parcels, not with a common-purse circle. Joining means buying or renting a house or lot that comes with the covenants. Confirm the fideicomiso and the bylaws before you treat a portal listing as membership.",
 website: "https://jaguarnegroartcenter.com/pueblo-sacbe/",
 timeline: [
 { year: "1998", event: "Pueblo Sacbé established as a 54 ha off-grid jungle settlement west of Playa del Carmen." },
 { year: "2000s–10s", event: "Rounded houses, solar and wind, biodigesters, cenotes reserved for residents." },
 { year: "2020", event: "About 50 families; Forum Natura cites Sacbé as the Riviera Maya’s known ecoaldea." },
 { year: "Present", event: "Lots and houses still listed; bylaws still say no grid. A covenanted freehold." },
 ],
 },
 {
 slug: "ixixtlan",
 name: "Ixixtlán",
 location: "Hill above Atlixco, facing Popocatépetl and Iztaccíhuatl",
 region: "Puebla, Mexico",
 country: "Mexico",
 foundedYear: 2006,
 foundedLabel: "1 January 2006 (GEN: started living together)",
 members: 20,
 membersLabel: "GEN lists 20; a founder-led family and retreat circle",
 acres: null,
 acresLabel: "A hill sanctuary of sacred-geometry cabins above Atlixco; hectare figure not in public sources reviewed",
 legalStructure:
 "Ecoaldea Ixixtlán SanArte, a founder-led spiritual-and-retreat community on a hill at Atlixco, Puebla, facing the two volcanoes. Beleni Kumara Inti (Beleni DuArte Kumara Inti Alonso) founded it. Named Mexican moral person not in public sources reviewed; GEN lists it as an ecovillage open to visitors and new members. Private community land. You take a retreat.",
 legalCategory: "Membership association",
 stillActive: true,
 images: [
 "/communities/ixixtlan-land.jpg",
 "/communities/ixixtlan-1.jpg",
 "/communities/ixixtlan-2.jpg",
 "/communities/ixixtlan-3.jpg",
 ],
 summary:
 "A sacred-geometry hill above Atlixco: twenty people, vegetarian harvest, and cabins aimed at the two volcanoes, Beleni Kumara Inti’s 2006 sanctuary, on the GEN map.",
 businessModel:
 "Retreats, workshops, camps, therapies, ceremonies, and a vegetarian kitchen fed by the garden. PeregrinArte and astrology-and-health retreats are the public door. Teaching and stays, not house sales.",
 foundingProcess:
 "Beleni Kumara Inti (dancer, choreographer, Montessori guide, mother of five) founded the sanctuary on a hill at Atlixco in 2006, naming it Ixixtlán SanArte. Cabins went up in sacred geometry with local materials. GEN records living-together from 1 January 2006. The public face is recreational education: art, ecology, and a vegetarian table looking at Popocatépetl and Iztaccíhuatl.",
 governance:
 "A founder-led family and retreat circle. GEN: open to visitors and new members. Courses have a public door; living there is relational.",
 website: "https://ixixtlan.com/",
 timeline: [
 { year: "2006", event: "Beleni Kumara Inti founds Ixixtlán SanArte on a hill at Atlixco; GEN: living together 1 January." },
 { year: "2000s–10s", event: "Sacred-geometry cabins, garden, vegetarian kitchen, retreat calendar." },
 { year: "Present", event: "GEN lists 20 people; open to visitors and members; volcanoes still in the window." },
 ],
 },
 {
 slug: "huerto-roma-verde",
 name: "Huerto Roma Verde",
 location: "Jalapa 234, Roma Sur, Cuauhtémoc, Mexico City",
 region: "Mexico City, Mexico",
 country: "Mexico",
 foundedYear: 2012,
 foundedLabel: "2012 (La Cuadra A.C. and neighbours clear a 1985 rubble lot)",
 members: 40,
 membersLabel: "A volunteer-and-neighbour A.C. on a city lot",
 acres: null,
 acresLabel: "An urban lot at Jalapa 234, Roma Sur, former Multifamiliar Juárez rubble",
 legalStructure:
 "An urban biosocial laboratory run with La Cuadra A.C. and neighbours on a lot left empty for 27 years after the 1985 earthquake brought down buildings of the Multifamiliar Juárez. A Mexican nonprofit community space. You compost, market, and organize here.",
 legalCategory: "Registered association",
 stillActive: true,
 images: [
 "/communities/huerto-roma-verde-land.jpg",
    "/communities/huerto-roma-verde-people.jpg",
 "/communities/huerto-roma-verde-1.jpg",
 "/communities/huerto-roma-verde-2.jpg",
 "/communities/huerto-roma-verde-3.jpg",
 ],
 summary:
 "Mexico City’s best-known urban permaculture lot: neighbours and La Cuadra A.C. turned 1985 earthquake rubble at Jalapa 234 into a biosocial laboratory (and a 19 September 2017 solidarity hub).",
 businessModel:
 "Markets, workshops, compost, a punto limpio, cultural events, and donations. The 2017 earthquake made it a neighbourhood command post. Teaching and civic space, not house sales.",
 foundingProcess:
 "The Multifamiliar Juárez went up in 1950. On 19 September 1985 ten of its buildings came down. The Jalapa 234 lot sat empty for 27 years. In 2012 La Cuadra A.C., neighbours, activists, and volunteers cleared it and planted Huerto Roma Verde. Verónica María Galicia Guzmán has been a public voice. On 19 September 2017 the earth shook again and the huerto became a regenerative solidarity post. It is now a flagship of urban permaculture in the capital.",
 governance:
 "A neighbourhood A.C. and volunteer circle on a city lot. Open hours (historically Tuesday–Saturday). There is no residential membership and no title to sell. You join by showing up with compost, a stall, or a shift.",
 website: "https://www.huertoromaverde.org/",
 timeline: [
 { year: "1950", event: "Multifamiliar Juárez built; Jalapa 234 will later sit on its damaged edge." },
 { year: "1985", event: "19 September earthquake; ten buildings collapse; the lot is abandoned for 27 years." },
 { year: "2012", event: "La Cuadra A.C. and neighbours clear the rubble and found Huerto Roma Verde." },
 { year: "2017", event: "19 September earthquake; the huerto becomes a neighbourhood solidarity hub." },
 { year: "Present", event: "Urban permaculture lab, market, and punto limpio still at Jalapa 234, Roma Sur." },
 ],
 },
 {
 slug: "rancho-la-salud",
 name: "Rancho La Salud Village",
 location: "Carretera Poniente Chapala–Jocotepec 1259, three miles west of Ajijic",
 region: "Jalisco, Mexico",
 country: "Mexico",
 foundedYear: 2014,
 foundedLabel: "2014 (Mexico’s first cohousing; condominio under Jalisco law)",
 members: 13,
 membersLabel: "13 residents in 6 completed homes (2024); 37 units planned from 120 m²; Mexican, U.S., English, and Palestinian members",
 acres: 4,
 acresLabel: "~3½-acre founding parcel (~1.4 ha); 2–5 acres in cohousing listings",
 legalStructure:
 "A Jalisco condominio, Mexico’s first cohousing community, on paper. Each home is deeded (and can pass to beneficiaries); a percentage of ownership includes the common ground. Founding member Jaime Navarro holds the 3½-acre parcel the village sits on. Official bylaws require an annual budget meeting; monthly business meetings run by modified consensus in the cohousing style. You buy a Garden Home, Villa, or Townhome; you do not join a common purse.",
 legalCategory: "Homeowners association",
 stillActive: true,
 images: [
 "/communities/rancho-la-salud-land.jpg",
 "/communities/rancho-la-salud-people.jpg",
 "/communities/rancho-la-salud-1.jpg",
 ],
 summary:
 "Mexico’s first cohousing: a Jalisco condominio on Lake Chapala with a 3,000-square-foot common house, a salt-water lap pool, and thirteen people in six hacienda-style homes, lots.",
 businessModel:
 "Members buy a lot-and-home package (Garden Homes, Villas, Townhomes). Hacienda-style construction: bóveda brick, Talavera, miradors. Two completed homes have been offered for sale; the village has begun building before purchase. Common house, palapa, garden, pool. Not income-sharing.",
 foundingProcess:
 "Jaime Navarro and partners founded Rancho La Salud Village in 2014 on a lakeshore parcel three miles west of Ajijic, community, sustainability, ‘multiversity’ (lifelong learning), and longevity (salud). The legal wrapper is a condominio under Jalisco law, the social wrapper cohousing: common house, monthly dinners, a sharing circle. By 2024 six homes housed thirteen people; 37 units from 120 m² were on the plan.",
 governance:
 "Condominio bylaws plus cohousing practice. Annual budget meeting as required by Jalisco law; monthly modified-consensus business meetings the rest of the year. ‘Somos comunidad.’ Joining is a purchase plus a visit. Easier than a closed covenant, more neighbour than a gated Ajijic condo.",
 website: "https://rancholasaludvillage.com/",
 timeline: [
 { year: "2014", event: "Rancho La Salud Village founded as Mexico’s first cohousing, condominio under Jalisco law." },
 { year: "2010s–20s", event: "Common house, palapa, salt-water lap pool, hacienda-style homes go up." },
 { year: "2024", event: "Six homes, 13 residents, 37 units planned; two homes offered for sale." },
 { year: "Present", event: "A lakeshore condominio that still holds monthly consensus meetings." },
 ],
 },
 {
 slug: "tamarindos",
 name: "EcoAldea Tamarindos",
 location: "Camino a las Cabañas, Mata de Agua, Camarón de Tejeda, Río Jamapa",
 region: "Veracruz, Mexico",
 country: "Mexico",
 foundedYear: 2015,
 foundedLabel: "c. 2015 (EcoClub and cabins; lots offered later)",
 members: 20,
 membersLabel: "A small resident-and-cabin community; lots from 500 m² still offered",
 acres: null,
 acresLabel: "Selva baja caducifolia on the Río Jamapa; lots from 500 m²; total hectare figure not in public sources reviewed",
 legalStructure:
 "A Veracruz intentional community and eco-tourism site on the Jamapa at Mata de Agua, Camarón de Tejeda. Lots from 500 m² are offered for sale on the village’s own site, pequeña propiedad. Cabins, a restaurant, temazcal, zip-line, camping, an observatory, and an EcoClub sit on the same land. A lot-sales ecoaldea with a demonstration and hospitality face. You can buy a lot; you can also just take a cabin.",
 legalCategory: "Freehold title",
 stillActive: true,
 images: [
 "/communities/tamarindos-land.jpg",
 "/communities/tamarindos-people.jpg",
 "/communities/tamarindos-1.jpg",
 ],
 summary:
 "A Jamapa-river ecoaldea an hour from Córdoba: cabins, temazcal, an EcoClub, and lots from 500 m² in selva baja caducifolia, a Veracruz village that sells parcels and also feeds visitors, and does not pretend otherwise.",
 businessModel:
 "Cabin stays, restaurant, camping, temazcal, zip-line, observatory, EcoClub courses, and lot sales from 500 m². Tourism and real estate. Not income-sharing.",
 foundingProcess:
 "An EcoClub and cabin project took shape at Mata de Agua, Camarón de Tejeda, on the Río Jamapa in the mid-2010s, on Totonac archaeological ground an hour-plus from Córdoba and about an hour from the port of Veracruz. The public face is a demonstration eco-site; the membership path published on the village site is a lot. A 2023 flood (“mucho por reconstruir”) is in the record.",
 governance:
 "A founder-led ecoaldea that sells lots and hosts visitors. Contact 271 140 7788. Confirm what a lot actually includes (access, services, the river) before you treat a 500 m² listing as a commons share.",
 website: "https://www.ecoaldeatamarindos.com.mx/",
 timeline: [
 { year: "c. 2015", event: "EcoClub and cabins take shape at Mata de Agua on the Río Jamapa." },
 { year: "2010s–20s", event: "Restaurant, temazcal, zip-line, observatory, camping; lots from 500 m² offered." },
 { year: "2023", event: "Flood damage; public appeal to rebuild." },
 { year: "Present", event: "A visitable Veracruz ecoaldea that still sells parcels and still takes guests." },
 ],
 },
 {
 slug: "hapori",
 name: "Hapori Eco Aldea",
 location: "Km 13.5 Nuevo Libramiento SMA–Guanajuato, Fraccionamiento Águila Real",
 region: "Guanajuato, Mexico",
 country: "Mexico",
 foundedYear: 2018,
 foundedLabel: "2018 (founders move to Mexico; GEN living-together 2021)",
 members: 8,
 membersLabel: "GEN listed 8; founders Mike and Pau plus early lot-holders; more homesites offered",
 acres: 20,
 acresLabel: "8+ ha (~20 acres) of regenerating former pasture inside Águila Real",
 legalStructure:
 "A co-created ecological neighbourhood of more than eight hectares inside the Águila Real eco-residencial, twenty minutes from San Miguel de Allende. Founders Mike (Aotearoa/New Zealand) and Pau (Mexico) met in 2010, moved to Mexico in 2018, and named the project Hapori, Māori for community. Lots and custom eco-homes are sold; each house is independently off-grid solar with batteries. A regenerative lot-sales village that actually means the off-grid part. You buy a homesite; you do not join a common purse.",
 legalCategory: "Freehold title",
 stillActive: true,
 images: [
 "/communities/hapori-land.jpg",
 "/communities/hapori-1.jpg",
 ],
 summary:
 "Eight hectares of former pasture twenty minutes from San Miguel: off-grid solar on every house, swales, biodigesters, a Māori name, and a lot map, Mike and Pau’s regenerative neighbourhood.",
 businessModel:
 "Lot and home packages, custom eco-building, a common house, palapa, biopool, temazcal, orchard, workshop. Independent finances. Not income-sharing. GEN: looking for founding members via land-and-home purchase; rentals later; investors sought.",
 foundingProcess:
 "Mike and Pau spent years in sustainability work, moved to Mexico in 2018, and opened Hapori inside Águila Real, km 13.5 of the SMA–Guanajuato libramiento. GEN records living-together from 1 January 2021. The land was overgrazed pasture; they planted natives, kept mature trees, and designed for rain. Every house is a standalone solar-and-battery system.",
 governance:
 "A co-created neighbourhood of lot holders. Visit (info@hapori.com.mx), then a purchase if values match. Easier than a closed covenant, more infrastructure than a raw parcela. Confirm the Águila Real covenants and the Hapori ones, two layers, one hill.",
 website: "https://www.hapori.com.mx/",
 timeline: [
 { year: "2010", event: "Mike (Aotearoa) and Pau (Mexico) meet; sustainability work precedes the land." },
 { year: "2018", event: "The founders move to Mexico and begin Hapori inside Águila Real." },
 { year: "2021", event: "GEN: started living together 1 January; land-and-home packages offered." },
 { year: "Present", event: "8+ ha, off-grid houses, homesites still available 20 minutes from San Miguel." },
 ],
 },
 {
 slug: "sekkan",
 name: "Rancho Ecológico Sekkan",
 location: "Former Rancho Lacayo, countryside near San Miguel de Allende",
 region: "Guanajuato, Mexico",
 country: "Mexico",
 foundedYear: 2021,
 foundedLabel: "2021 (planning); land 2022; living together 2026",
 members: 16,
 membersLabel: "Six founding families (GEN ~7–16 people) on the former Rancho Lacayo",
 acres: 38,
 acresLabel: "38 acres (~15 ha) of countryside near SMA, Chichimec ancestral land",
 legalStructure:
 "Thirty-eight acres near San Miguel de Allende held by several individuals through an LLC or a tenancy-in-common (IC.org’s wording) on the former Rancho Lacayo. Six founding families closed the purchase at the end of 2022 and registered the name Rancho Ecológico Sekkan. Members keep independent finances, pay about $300 in fees, and owe two hours a week. You write a letter.",
 legalCategory: "LLC",
 stillActive: true,
 images: [
 "/communities/sekkan-land.jpg",
 "/communities/sekkan-1.jpg",
 ],
 summary:
 "Thirty-eight acres of former Rancho Lacayo: six families, a biodynamic farm, an LLC-or-TIC wrapper, and a letter-of-intent membership path, a Covid-era SMA ecovillage that started living together in 2026.",
 businessModel:
 "Independent finances, member fees (~$300), two hours a week of labour, a biodynamic farm that asks a donation of visitors. Backgrounds in natural health, education, art, engineering, and business. Buying a lot is not the published path; you write a letter.",
 foundingProcess:
 "The only Mexican founder had family near SMA and conceived a community there as a teenager. In January 2021, during Covid, a small group began talking it into being. By January 2022 six families offered on Rancho Lacayo; the sale closed by the end of 2022 and the Sekkan name was registered. Weekly meetings followed. GEN/IC.org record living-together from 1 January 2026. The listing acknowledges Chichimec ancestral land.",
 governance:
 "Founding families meeting weekly. Path: informal conversation, vision/mission/values and minutes, a tour, a letter, a group decision on philosophical fit and emotional maturity, then meetings. Open to visitors (lunch; 1–2 nights by arrangement; donation for the farm).",
 website: "https://www.ic.org/directory/community/rancho-ecologico-sekkan/",
 timeline: [
 { year: "2021", event: "January: independent group begins planning a San Miguel ecovillage." },
 { year: "2022", event: "Six families offer on Rancho Lacayo (January); sale closes; Sekkan name registered." },
 { year: "2026", event: "GEN/IC.org: started living together 1 January." },
 { year: "Present", event: "38 acres, six families, biodynamic farm, letter-of-intent membership." },
 ],
 },
 {
 slug: "nuevo-san-juan",
 name: "Comunidad Indígena de Nuevo San Juan Parangaricutiro",
 location: "Nuevo San Juan Parangaricutiro, Meseta Purépecha, on the Parícutin lava",
 region: "Michoacán, Mexico",
 country: "Mexico",
 foundedYear: 1982,
 foundedLabel: "1982 (community forestry enterprise; presidential title 25 Nov 1991)",
 members: 1282,
 membersLabel: "1,282 comuneros activos (community site); 1,229 in the 1991 resolution; ~7,500 indigenous community members (Equator Initiative)",
 acres: 44821,
 acresLabel: "18,138.32 ha (~44,821 acres) of bienes comunales, inalienable, imprescriptible, unseizable (DOF 25 Nov 1991)",
 legalStructure:
 "A Purépecha comunidad indígena with personalidad jurídica. Presidential resolution of 25 November 1991 titled 18,138.32 hectares as terrenos comunales (inalienable, imprescriptible, and unseizable) to 1,229 comuneros. The community forestry enterprise dates to 1982–83 (Equator Initiative: founded 1982). You are born a comunero, or the asamblea says so.",
 legalCategory: "Producer cooperative",
 stillActive: true,
 images: [
 "/communities/nuevo-san-juan-land.jpg",
 "/communities/nuevo-san-juan-people.jpg",
 "/communities/nuevo-san-juan-1.jpg",
 "/communities/nuevo-san-juan-2.jpg",
 "/communities/nuevo-san-juan-3.jpg",
 ],
 summary:
 "Eighteen thousand hectares of Purépecha pine on the Parícutin lava: a 1982 community forest, FSC in 1999, Equator Prize in 2004, a sawmill and a furniture shop, bienes comunales.",
 businessModel:
 "Sustainable timber and more than twenty lines of non-timber production: resin, furniture, water, guided walks to the buried church and the volcano. Equator Initiative: about 900 permanent and 300 temporary jobs. FSC certification since 1999. Income stays with the comunidad.",
 foundingProcess:
 "Parícutin buried old San Juan Parangaricutiro in 1943; the town rebuilt as Nuevo San Juan. Colonial títulos primordiales already named the comunidad. In 1982–83 comuneros built a community forestry enterprise on about 6,443 ha of pine-oak (roughly 30% of the communal territory) to stop illegal logging from the edges. Ten years of communal exploitation later, the 25 November 1991 Diario Oficial resolution titled 18,138.32 ha to 1,229 comuneros. FSC followed in 1999. The Equator Prize in 2004 made the sawmill famous.",
 governance:
 "Asamblea every first Sunday of the month. A concejo of comuneros, former municipal presidents, former managers, and former communal authorities meets first. Autoridades comunales (Presidente del Comisariado (with secretary and treasurer) and Presidente de Vigilancia) sit three years. You join by being a comunero.",
 website: "https://www.comunidadindigena.com.mx/",
 timeline: [
 { year: "1943", event: "Parícutin buries San Juan Parangaricutiro; the town rebuilds as Nuevo San Juan." },
 { year: "1982", event: "Community forestry enterprise begins on the pine-oak (Equator Initiative founding year)." },
 { year: "1991", event: "Presidential resolution (DOF 25 November) titles 18,138.32 ha of bienes comunales to 1,229 comuneros." },
 { year: "1999", event: "FSC certification of the forest." },
 { year: "2004", event: "Equator Prize. Sawmill, furniture, resin, water, and volcano tours continue." },
 { year: "Present", event: "1,282 comuneros; monthly Sunday asamblea; 18,138 ha still inalienable." },
 ],
 },
 {
 slug: "cedicam",
 name: "CEDICAM",
 location: "Mixteca Alta, around Tilantongo / Nochixtlán, Oaxaca",
 region: "Oaxaca, Mexico",
 country: "Mexico",
 foundedYear: 1983,
 foundedLabel: "1983 (Jesús León Santos and Mixtec farmers; Goldman Prize 2008)",
 members: 80,
 membersLabel: "A Mixtec campesino-to-campesino network across the Mixteca Alta",
 acres: null,
 acresLabel: "A union of milpas, contour ditches, and nurseries across the Mixteca Alta",
 legalStructure:
 "Centro de Desarrollo Integral Campesino de la Mixteca (CEDICAM), a Mixtec farmer organisation that Jesús León Santos and neighbours built in 1983 as a democratic campesino network. Families farm their own plots. You become a promoter in a Mixtec village.",
 legalCategory: "Registered association",
 stillActive: true,
 images: [
 "/communities/cedicam-land.jpg",
    "/communities/cedicam-people.jpg",
 "/communities/cedicam-1.jpg",
 "/communities/cedicam-2.jpg",
 "/communities/cedicam-3.jpg",
 ],
 summary:
 "The Mixteca Alta’s answer to five metres of lost topsoil: a 1983 campesino school that put contour ditches, ocote pines, and milpa back on the hills, Goldman Prize 2008, a million trees.",
 businessModel:
 "Campesino-a-campesino training, native-tree nurseries (sources cite one to four million trees), pre-Hispanic contour ditches and retention walls, seed saving, milpa. Families keep their harvest. Goldman Prize (US$150,000, 2008) and later solidarity grants. Teaching and trees, not house sales.",
 foundingProcess:
 "Spanish livestock and logging stripped the Mixteca Alta; up to five metres of topsoil went in five centuries. In the early 1980s Mixtec farmer Jesús León Santos, taught contour work by Guatemalan promoters, organised neighbours. SFGate dates the co-founding of CEDICAM to 1983. Greenhouses, native ocote pine, the A-frame level, and revived lamabordos followed. In 2008 Santos won the Goldman Environmental Prize for North America. The hills are greener.",
 governance:
 "A democratic Mixtec farmer organisation. Assemblies of promoters. You join by farming and ditching in a member village.",
 website: "https://www.goldmanprize.org/recipient/jesus-leon-santos/",
 timeline: [
 { year: "Early 1980s", event: "Jesús León Santos and Mixtec farmers begin reforestation and contour work." },
 { year: "1983", event: "CEDICAM co-founded as a campesino-to-campesino organisation (SFGate)." },
 { year: "2008", event: "Goldman Environmental Prize (US$150,000) to Jesús León Santos." },
 { year: "Present", event: "Nurseries, milpa, and ditches continue across the Mixteca Alta;." },
 ],
 },
 {
 slug: "sierra-gorda",
 name: "Grupo Ecológico Sierra Gorda",
 location: "Jalpan de Serra, Sierra Gorda Biosphere Reserve",
 region: "Querétaro, Mexico",
 country: "Mexico",
 foundedYear: 1987,
 foundedLabel: "5 December 1987 (IAP); biosphere decree 19 May 1997",
 members: 100,
 membersLabel: "A citizen IAP and community alliance across the Sierra",
 acres: null,
 acresLabel: "The biosphere is 383,567 ha (DOF 19 May 1997); the IAP does not hold that title",
 legalStructure:
 "Grupo Ecológico Sierra Gorda I.A.P., a Mexican institución de asistencia privada co-founded 5 December 1987 by Martha Isabel “Pati” Ruiz Corzo, Roberto Pedraza Muñoz, and Jalpan neighbours. The Reserva de la Biosfera Sierra Gorda (383,567 ha, Diario Oficial 19 May 1997) is a CONANP designation on the mountains, not the IAP’s ranch. You join the alliance or take a trail.",
 legalCategory: "Nonprofit foundation",
 stillActive: true,
 images: [
 "/communities/sierra-gorda-land.jpg",
 "/communities/sierra-gorda-1.jpg",
 "/communities/sierra-gorda-2.jpg",
 "/communities/sierra-gorda-3.jpg",
 ],
 summary:
 "Querétaro’s citizen biosphere: a 1987 Jalpan IAP that talked 383,567 hectares into a 1997 decree, then paid the sierra with carbon, radio, and prizes, Wangari Maathai 2014.",
 businessModel:
 "Community conservation, environmental education, Nuestra Tierra radio (from 1990), ecotourism in the reserve, and nature-based climate work including carbon. UNEP Champion of the Earth (2013) and the Collaborative Partnership on Forests’ Wangari Maathai Forest Champion Award (2014) to Pati Ruiz Corzo. Donations to the IAP.",
 foundingProcess:
 "In 1987 the sierra was under threat. Pati Ruiz Corzo, her family, and Jalpan citizens formed Grupo Ecológico Sierra Gorda. Ten years of local organising produced the 19 May 1997 biosphere decree, 383,567 hectares, eleven core zones. UNESCO later listed the Franciscan missions. The IAP kept doing the unglamorous work: schools, radio, payments for conservation, trails. The mountain is a public reserve. The IAP is the citizen wrapper, not the landlord of 383,000 hectares.",
 governance:
 "An institución de asistencia privada with a public-benefit board. Communities inside the reserve keep their own titles, pequeña propiedad, ejido, comunidad. The IAP is the alliance. Visit the missions and the waterfalls.",
 website: "https://sierragorda.net/",
 timeline: [
 { year: "1987", event: "Grupo Ecológico Sierra Gorda founded in Jalpan de Serra (5 December)." },
 { year: "1990", event: "Nuestra Tierra radio begins as the sierra’s public voice." },
 { year: "1997", event: "DOF 19 May: Reserva de la Biosfera Sierra Gorda, 383,567 ha." },
 { year: "2013–14", event: "UNEP Champion of the Earth; Wangari Maathai Forest Champion Award to Pati Ruiz Corzo." },
 { year: "Present", event: "IAP still runs education, carbon, and trails across a citizen biosphere." },
 ],
 },
 {
 slug: "la-ventanilla",
 name: "La Ventanilla",
 location: "Playa La Ventanilla, Santa María Tonameca, ~3 km from Mazunte",
 region: "Oaxaca, Mexico",
 country: "Mexico",
 foundedYear: 1998,
 foundedLabel: "1998 (cooperativa); UMA 2002",
 members: 100,
 membersLabel: "~25 Zapotec families in the cooperativa Servicios Ecoturísticos de La Ventanilla",
 acres: null,
 acresLabel: "A mangrove lagoon on the Tonameca River and a beach village",
 legalStructure:
 "Servicios Ecoturísticos de La Ventanilla, S.C. de R.L. de C.V., a Oaxacan cooperativa of about twenty-five Zapotec families on the lagoon east of Mazunte, formed in 1998 after the sea-turtle and crocodile trade was banned, registered as a UMA (unidad de manejo ambiental) in 2002. You take a canoe.",
 legalCategory: "Producer cooperative",
 stillActive: true,
 images: [
 "/communities/la-ventanilla-land.jpg",
    "/communities/la-ventanilla-people.jpg",
 "/communities/la-ventanilla-1.jpg",
 "/communities/la-ventanilla-2.jpg",
 "/communities/la-ventanilla-3.jpg",
 ],
 summary:
 "Twenty-five Zapotec families, a mangrove lagoon, and a canoe: the 1998 cooperativa that turned a closed turtle trade into crocodile nurseries and tours, UMA 2002.",
 businessModel:
 "Canoe tours of the mangroves, crocodile and mangrove nurseries on Uma Island, deer, and a beach village that lives on the tours. A second cooperative (Lagarto Real) also works the lagoon. Ticket money, not house sales.",
 foundingProcess:
 "La Ventanilla is named for a rock window on the beach. When Mexico closed the turtle and crocodile trade, the families on the Tonameca lagoon had to invent another living. In 1998 they formed the cooperativa; in 2002 it registered as a UMA. Canoes replaced the old hunt. Mazunte is three kilometres west. The lagoon is the commons they tour they sell.",
 governance:
 "A sociedad cooperativa of resident families. Revenue from tourism is the weekday. You are born into the village or you marry in. Visitors buy a paddle. Confirm which cooperative is taking you out, Ventanilla or Lagarto Real.",
 website: "https://laventanilla.com.mx/",
 timeline: [
 { year: "1990s", event: "Turtle and crocodile trade closes; families on the lagoon need another living." },
 { year: "1998", event: "Servicios Ecoturísticos de La Ventanilla cooperativa formed." },
 { year: "2002", event: "Registered as a UMA (El Universal Oaxaca)." },
 { year: "Present", event: "~25 families, canoes, nurseries; Mazunte three kilometres west." },
 ],
 },
 {
 slug: "punta-laguna",
 name: "Punta Laguna",
 location: "Km 27.5 Nuevo Xcan–Cobá, Otoch Ma’ax Yetel Kooh ANP",
 region: "Yucatán / Quintana Roo, Mexico",
 country: "Mexico",
 foundedYear: 2002,
 foundedLabel: "2002 (Najil Tucha cooperativa; ANP decree the same year; petitions from 1967)",
 members: 120,
 membersLabel: "~30 Maya families in the Najil Tucha cooperativa; tourism revenue divided among them",
 acres: 13262,
 acresLabel: "Otoch Ma’ax Yetel Kooh Flora and Fauna Protection Area: 5,367.42 ha (~13,262 acres), CONANP designation",
 legalStructure:
 "Najil Tucha cooperativa, founded 2002 by about thirty Maya families at Punta Laguna, collectively running tourism in the Otoch Ma’ax Yetel Kooh Área de Protección de Flora y Fauna (5,367.42 ha; Maya: “the house of the spider monkey and the puma”). Families had petitioned for protection since 1967; the 2002 decree and the cooperativa arrived together. You take a spider-monkey walk.",
 legalCategory: "Producer cooperative",
 stillActive: true,
 images: [
 "/communities/punta-laguna-land.jpg",
 "/communities/punta-laguna-1.jpg",
 "/communities/punta-laguna-2.jpg",
 "/communities/punta-laguna-3.jpg",
 ],
 summary:
 "Thirty Maya families, a 5,367-hectare monkey reserve, and a 2002 cooperativa: Otoch Ma’ax Yetel Kooh (the house of the spider monkey and the puma) tours that pay the village.",
 businessModel:
 "Guided walks for spider and howler monkeys, a lagoon, a zip-line in some packages, and village life that still cooks on open fires. Tourism revenue is divided among the families.",
 foundingProcess:
 "Chiclero families settled the lagoon. They asked the government for protection as early as 1967. Thirty-five years later, in 2002, Mexico gazetted Otoch Ma’ax Yetel Kooh and the village founded Najil Tucha to run the visits. The ANP is CONANP geography; the cooperativa. Descendants of the chicleros still live in thatch and still farm a little milpa. The monkeys are the cash engine.",
 governance:
 "A collective of about thirty families. Guides are neighbours. You visit by booking a tour (puntalagunamx.com; 985-114-…). Joining means being of the village.",
 website: "https://puntalagunamx.com/",
 timeline: [
 { year: "1967", event: "Families begin petitioning for protection of the lagoon forest." },
 { year: "2002", event: "Otoch Ma’ax Yetel Kooh ANP gazetted; Najil Tucha cooperativa founded." },
 { year: "Present", event: "~30 families still divide tour revenue; spider and howler monkeys on the trail." },
 ],
 },
 {
 slug: "yomol-atel",
 name: "Yomol A’tel",
 location: "Chilón / Yajalón, northern Tseltal jungle of Chiapas",
 region: "Chiapas, Mexico",
 country: "Mexico",
 foundedYear: 2002,
 foundedLabel: "2002 (Jesuits + Tseltal coffee growers; “working together”)",
 members: 341,
 membersLabel: "Ts’umbal Xitalha’: 341 Tseltal coffee-and-honey families; Yomol A’tel as a whole ~300 families across nine regions in some counts",
 acres: null,
 acresLabel: "A federation of Tseltal milpas and coffee gardens",
 legalStructure:
 "Yomol A’tel (“working together” in Tseltal), a group of social-solidarity cooperatives and enterprises: Ts’umbal Xitalha’ (coffee and honey families), Bats’il Maya (roaster and marketer), Capeltic (cafés in Jesuit universities), Chab’il Taste (honey), Yip Melel (soap and related). Jesuits of the Mexican Province partnered with Tseltal growers in 2002. Members farm their own plots. You join by being a socio in a member community.",
 legalCategory: "Federation of cooperatives",
 stillActive: true,
 images: [
 "/communities/yomol-atel-land.jpg",
 "/communities/yomol-atel-1.jpg",
 "/communities/yomol-atel-2.jpg",
 "/communities/yomol-atel-3.jpg",
 ],
 summary:
 "Tseltal “working together”: a 2002 Jesuit-and-grower federation that took coffee, honey, and soap out of the middleman’s hands, Capeltic cafés, 341 families, lequil cuxlejalil.",
 businessModel:
 "Organic coffee (Bats’il Maya roast; Capeltic cafés as the retail bridge), honey, soap, embroidery. Families keep production on their own land; the group adds value. Jesuit and Spanish-province solidarity has helped; the published story is that Bats’il Maya runs without private or government operating funds.",
 foundingProcess:
 "Tseltal coffee growers in the northern Chiapas jungle were losing to intermediaries. In 2002 they asked Jesuits in the Mexican Province for a different game. Yomol A’tel followed: a cooperative of families (Ts’umbal Xitalha’), a toaster (Bats’il Maya), cafés that sell the cup to university Mexico (Capeltic), honey and soap around them. A general congress sits every three years. The 2024 MIYA plans are a meeting house.",
 governance:
 "A federation of Tseltal cooperatives and solidarity enterprises. Dora Luisa Roblero has sat as president of Ts’umbal Xitalha’. You join by producing in a member community. Capeltic is the public door in the city.",
 website: "https://www.yomolatel.org/",
 timeline: [
 { year: "2002", event: "Jesuits and Tseltal growers begin Yomol A’tel, “working together.”" },
 { year: "2010s", event: "Bats’il Maya, Capeltic cafés, honey and soap enterprises join the family." },
 { year: "2024", event: "Triennial congress; MIYA meeting-house plans presented to the cooperatives." },
 { year: "Present", event: "341 families in Ts’umbal Xitalha’; coffee, honey, soap; no lot map." },
 ],
 },
 {
 slug: "tierraluz",
 name: "TierraLuz Eco Community",
 location: "Hill above Sayulita, a 20-minute walk or 5-minute drive from the beach",
 region: "Nayarit, Mexico",
 country: "Mexico",
 foundedYear: 2009,
 foundedLabel: "2009 (GEN: living together 1 January; titled lots + A.C. commons)",
 members: 19,
 membersLabel: "GEN listed 14 adults and 5 children; 19 titled lots, two remaining on the village site",
 acres: 4,
 acresLabel: "19 lots of ~400–600 m² plus ~8,500 m² of A.C. commons (trails, food forest, yoga platform, garden), a small hillside",
 legalStructure:
 "An off-grid solar neighbourhood above Sayulita: private titled lots and common land co-owned through a Mexican asociación civil of which lot-holders are members (GEN). Nineteen lots; the site says two remain. Houses in cob, superadobe, and local brick. A covenanted freehold eco-neighbourhood that sells titled lots. You buy a homesite; you do not join a common purse.",
 legalCategory: "Freehold title",
 stillActive: true,
 images: [
 "/communities/tierraluz-land.jpg",
 "/communities/tierraluz-1.jpg",
 "/communities/tierraluz-2.jpg",
 "/communities/tierraluz-3.jpg",
 ],
 summary:
 "Nineteen titled lots on a Sayulita hill: off-grid solar, 8,500 square metres of A.C. commons, cob and earthbag houses, and two lots still for sale, a 2009 eco-neighbourhood.",
 businessModel:
 "Ocean-view titled lots (the site has listed from about US$185,000) and occasional house sales. Independent finances. Shared well, solar pump, food forest, yoga platform. Not income-sharing. A casa key is a purchase.",
 foundingProcess:
 "GEN records living-together from 1 January 2009: an off-grid cohousing-style neighbourhood of private lots plus A.C. commons, a twenty-minute walk from Sayulita surf. Early count: 17 lots, seven houses, 14 adults and five children. The village site later says 19 lots, two remaining. The well is solar; the houses are not on a CFE meter as a lifestyle choice.",
 governance:
 "Lot holders who are also A.C. members. Visit (tierraluzsayulita@gmail.com), then a titled purchase if values match. Easier than a closed covenant, more off-grid than a Sayulita condo. Confirm the A.C. rules and the deed. There is a lot, and they say so.",
 website: "https://www.tierraluz.org/",
 timeline: [
 { year: "2009", event: "GEN: started living together 1 January; private lots plus A.C. commons." },
 { year: "2010s", event: "Cob, superadobe, and brick houses; food forest and solar well." },
 { year: "Present", event: "19 titled lots, two remaining; off-grid hill twenty minutes from the beach." },
 ],
 },
 {
 slug: "huerto-tlatelolco",
 name: "Huerto Tlatelolco",
 location: "Nonoalco-Tlatelolco, site of a 1985-quake housing tower, Mexico City",
 region: "Mexico City, Mexico",
 country: "Mexico",
 foundedYear: 2013,
 foundedLabel: "2013 (Cultiva Ciudad A.C. on the ~1,650 m² tower footprint)",
 members: 40,
 membersLabel: "A volunteer-and-neighbour urban garden",
 acres: null,
 acresLabel: "~1,650 m² on the footprint of a demolished 1985-earthquake housing tower",
 legalStructure:
 "Huerto Tlatelolco, run by Cultiva Ciudad A.C., a Mexico City asociación civil that in 2013 turned the vacant footprint of a Nonoalco-Tlatelolco tower, damaged in 1985 and later demolished, into one of the city’s largest community huertos (~1,650 m²). Neighbours and volunteers steward it. You bring compost.",
 legalCategory: "Registered association",
 stillActive: true,
 images: [
 "/communities/huerto-tlatelolco-land.jpg",
    "/communities/huerto-tlatelolco-people.jpg",
 "/communities/huerto-tlatelolco-1.jpg",
 "/communities/huerto-tlatelolco-2.jpg",
 "/communities/huerto-tlatelolco-3.jpg",
 ],
 summary:
 "A 1,650-square-metre huerto on a 1985-quake tower’s grave: Cultiva Ciudad’s Tlatelolco garden (seed bank, edible forest, a tonne of compost) civic dirt.",
 businessModel:
 "Workshops, community compost (on the order of 700 kg of organic waste a month; one partner cites 1,500 kg of food waste a year into soil), produce, education. Alliance with the borough. Donations and volunteer labour.",
 foundingProcess:
 "The 1985 earthquake emptied a Tlatelolco tower. The footprint sat as a baldío until 2013, when Cultiva Ciudad and neighbours made a garden of it, vegetables, an edible forest of some 45 tree varieties, a seed bank, biointensive beds, worms. SEDEMA filmed it as an oasis. It is still a huerto in a housing unit, next to the Plaza de las Tres Culturas.",
 governance:
 "An asociación civil of urban farmers and neighbours. Show up with compost, a workshop, or a shift. There is no residential membership and no Tlatelolco lot. The 1985 rubble is not for sale.",
 website: "https://cultivaciudad.org/huerto-tlatelolco/",
 timeline: [
 { year: "1985", event: "Earthquake damages a Nonoalco-Tlatelolco tower; the footprint later sits empty." },
 { year: "2013", event: "Cultiva Ciudad A.C. and neighbours open Huerto Tlatelolco on ~1,650 m²." },
 { year: "Present", event: "Seed bank, edible forest, compost; still a civic garden." },
 ],
 },
 {
 slug: "kuyabeh",
 name: "Kuyabeh",
 location: "Km 34 Tulum–Cobá highway, Tumum, Quintana Roo",
 region: "Quintana Roo, Mexico",
 country: "Mexico",
 foundedYear: 2015,
 foundedLabel: "2015 (375 ha jungle lot-sales community)",
 members: 160,
 membersLabel: "GEN: 160 property owners, some still designing houses; owners from 20+ countries",
 acres: 927,
 acresLabel: "375 ha (~927 acres) of jungle; ~25 ha commons; ~7% of each lot buildable",
 legalStructure:
 "A private off-grid ecological community of 375 hectares at km 34 of the Tulum–Cobá road. GEN and the village site: ½-ha and 1-ha lots, about 25 hectares of commons (amphitheatre, school, market garden, restaurant, temazcal, jungle gym, pool, hotel, spa, lagoon, cenote, towers), 160 owners, four phases (Balam, Huech, Sak Xikin, Turix). Construction is capped at about 7% of a lot. A covenanted jungle lot-sales village. You buy a 4,700–9,400 m² parcela; you do not join a common purse.",
 legalCategory: "Freehold title",
 stillActive: true,
 images: [
 "/communities/kuyabeh-land.jpg",
 "/communities/kuyabeh-1.jpg",
 "/communities/kuyabeh-2.jpg",
 "/communities/kuyabeh-3.jpg",
 ],
 summary:
 "Three hundred and seventy-five hectares of Tulum–Cobá jungle, 7% buildable, 160 owners, lots from US$108,000: a 2015 eco-residencial that sells ½-hectare parcels.",
 businessModel:
 "Residential lots from about US$108,000 (½ ha and 1 ha), a boutique hotel and restaurant as the visitor door, amenities on 25 ha of commons. Independent finances. Owners apply and accept construction rules. Not income-sharing. A lot is the membership path, published on kuyabeh.com and on Riviera Maya portals.",
 foundingProcess:
 "Kuyabeh opened in 2015 on the Tulum–Cobá highway, twenty minutes from Tulum and ten from Cobá. The pitch is preserved jungle, off-grid houses, and a long amenity list. Phases are named for animals, jaguar, armadillo, margay, dragonfly. GEN lists 160 owners. The 7% buildable rule is the conservation sentence. It is a masterplan with a cenote.",
 governance:
 "Property owners under construction and community rules. Visit the hotel or book through the site; buy a lot if the jungle covenant fits. Easier than a closed co-op, more rules than a raw Tulum parcela. Confirm services, the 7% cap, and which phase you are actually in.",
 website: "https://kuyabeh.com/",
 timeline: [
 { year: "2015", event: "Kuyabeh founded at km 34 of the Tulum–Cobá highway on 375 ha." },
 { year: "2010s–20s", event: "Phases Balam, Huech, Sak Xikin; lots listed from US$108,000." },
 { year: "Present", event: "GEN: 160 owners, 25 ha commons, ½-ha and 1-ha lots still offered." },
 ],
 },
 {
 slug: "cabo-pulmo",
 name: "Cabo Pulmo",
 location: "Cabo Pulmo, East Cape, Municipio de Los Cabos, Sea of Cortez shore",
 region: "Baja California Sur, Mexico",
 country: "Mexico",
 foundedYear: 1995,
 foundedLabel: "5 June 1995 (national park); Cabo Pulmo Divers 1990; ACCP 2002",
 members: 100,
 membersLabel: "~100 people in the coastal village (Smithsonian; families who petitioned the park)",
 acres: 17570,
 acresLabel: "71.11 km² / 7,111 ha (~17,570 acres) of national marine park; the village itself is a small shore settlement",
 legalStructure:
 "A fishing village that asked the Mexican state for a no-take marine park. Parque Nacional Cabo Pulmo (decreed 5 June 1995, IUCN II, CONANP) sits on 71.11 km² of reef and water; UNESCO World Heritage (Islands and Protected Areas of the Gulf of California, 2005) and Ramsar (2008) sit on the same water. Amigos para la Conservación de Cabo Pulmo A.C. (2002) is the community conservation face. Dive shops (Cabo Pulmo Divers, 1990, Mario Castro Lucero) are family enterprises. Houses in the village are pequeña propiedad.",
 legalCategory: "Nonprofit foundation",
 stillActive: true,
 images: [
 "/communities/cabo-pulmo-land.jpg",
 "/communities/cabo-pulmo-1.jpg",
 "/communities/cabo-pulmo-2.jpg",
 "/communities/cabo-pulmo-3.jpg",
 ],
 summary:
 "On the East Cape, a Castro-family dive village put the nets down in 1995 and watched a CONANP park follow. Fish came back, a published 462 percent. Cabo Pulmo is a fishing town that saved a reef instead of selling it.",
 businessModel:
 "Scuba and snorkel tourism replaced commercial fishing. Cabo Pulmo Divers and later shops, restaurants, and bungalows. ACCP organises patrols and education. Ticket money and beds, not house sales. Confirm which shop is taking you; the park is the commons they dive.",
 foundingProcess:
 "Cabo Pulmo was a fishing village for about a century. Mario Castro left for Cabo San Lucas, learned scuba, came home in 1990 and opened Cabo Pulmo Divers, then taught brothers and cousins. The families petitioned; President Zedillo decreed Parque Nacional Cabo Pulmo on 5 June 1995. José Luis “Pepe” Murrieta was the first volunteer park director (1997). ACCP formed in 2002. UNESCO 2005, Ramsar 2008. Fish biomass reported up 462% by 2010. The village still lives on the reef it stopped harvesting.",
 governance:
 "A shore village of families plus a CONANP park director plus an A.C. You are born here, you marry in, or you work a dive shop. Visitors buy a tank. Cabo Pulmo Vivo is the civic layer that wants the town loved, not flipped.",
 website: "https://www.cabopulmo.com/",
 timeline: [
 { year: "1990", event: "Mario Castro Lucero opens Cabo Pulmo Divers, the first shop." },
 { year: "1995", event: "Parque Nacional Cabo Pulmo decreed 5 June (71.11 km², no-take)." },
 { year: "2002", event: "Amigos para la Conservación de Cabo Pulmo A.C. founded." },
 { year: "2005–08", event: "UNESCO World Heritage (Gulf islands) and Ramsar listing." },
 { year: "2010", event: "Reported 462% increase in total fish abundance." },
 { year: "Present", event: "~100 residents; dive tourism; the reef is still the commons." },
 ],
 },
 {
 slug: "baja-ecovillage",
 name: "Baja Ecovillage",
 location: "Cantú, Punta Banda peninsula, southern end of Bahía de Todos Santos, Ensenada",
 region: "Baja California, Mexico",
 country: "Mexico",
 foundedYear: 2003,
 foundedLabel: "2003 (land from Cantú); forest protection 2005; Zonas Verdes A.C. 2006",
 members: 12,
 membersLabel: "A small founder-stewarded settlement plus neighbours in Cantú (roll unpublished)",
 acres: 54,
 acresLabel: "El Rinconcito Verde forest park ~54 acres; residential parcels purchased from the town of Cantú beside the estuary",
 legalStructure:
 "A Punta Banda eco-settlement Mark Lurie began by buying land from the town of Cantú in 2003. El Rinconcito Verde (“little green corner”), a ~54-acre experimental botanical forest park in a branching canyon, was protected from development with Cantú’s leaders in 2005 and is managed by Zonas Verdes de Punta Banda, A.C., a Mexican nonprofit conservation group (2006–present). Houses sit on parcels from the town, not on a single communal deed.C.; Baja Montecito (~27 acres) is a neighbouring private eco-community.",
 legalCategory: "Registered association",
 stillActive: true,
 images: [
 "/communities/baja-ecovillage-land.jpg",
 "/communities/baja-ecovillage-1.jpg",
 "/communities/baja-ecovillage-2.jpg",
 "/communities/baja-ecovillage-3.jpg",
 ],
 summary:
 "Mark Lurie, a Santa Barbara builder, bought into a Cantú canyon at Punta Banda and planted on the order of 55,000 trees. A 54-acre forest park now sits with an A.C. An estuary village that planted a park instead of flipping the hill.",
 businessModel:
 "Tree-planting, trail work, and a 200-year forest plan are the public work. Residents build earth-friendly houses on Cantú parcels. Visitors join planting and inventory days.C. bajaecovillage.com has visiting notes.",
 foundingProcess:
 "Mark Lurie, a Santa Barbara designer-builder, moved to Punta Banda in 1999, a place he had visited as a child. In 2003 he began buying land from Cantú, between the estero, the beach, and the peninsula. With town leaders he locked the canyon from development in 2005. Zonas Verdes de Punta Banda A.C. took the park in 2006. Schoolchildren named it El Rinconcito Verde. He has planted more than 55,000 trees since 1989, most from his own pocket. The tallest sapling in the park is now about 30 feet.",
 governance:
 "Founder-stewarded settlement plus an A.C. for the forest. Residents and visitors are invited to plant, measure, and hold the trails. Confirm current openings; this is a small hill above an estuary.",
 website: "https://bajaecovillage.com/",
 timeline: [
 { year: "1999", event: "Mark Lurie moves from Santa Barbara to Punta Banda." },
 { year: "2003", event: "Begins purchasing land from the town of Cantú." },
 { year: "2005", event: "Canyon / forest park protected from development with Cantú leaders." },
 { year: "2006", event: "Zonas Verdes de Punta Banda A.C. formed; El Rinconcito Verde named." },
 { year: "Present", event: "~54-acre park, tree work, small settlement above the estero." },
 ],
 },
 {
 slug: "baja-biosana",
 name: "Baja BioSana",
 location: "El Chorro, foothills of the Sierra de la Laguna, inland from the East Cape / San Antonio corridor",
 region: "Baja California Sur, Mexico",
 country: "Mexico",
 foundedYear: 2006,
 foundedLabel: "2006 (living-and-learning centre / natural-building village)",
 members: 9,
 membersLabel: "A small resident membership (about nine people in about eleven homes in public descriptions; roll unpublished)",
 acres: 27,
 acresLabel: "11 hectares (~27 acres) of oasis in the desert, backing onto Sierra de la Laguna wildland",
 legalStructure:
 "A small off-grid intentional community and living-and-learning centre at El Chorro. Public descriptions call Baja BioSana a nonprofit / retreat-centre project: members occupy natural-building homes (cob, earthbag, ferrocement, a dome among them) on a shared 11-hectare oasis; a home that comes open is offered as a membership transfer. GEN and Común Tierra filmed it as an ecoaldea greening the desert. Confirm the current civil wrapper (A.C. vs informal) before you treat a 2014 video as a 2026 deed.",
 legalCategory: "Registered association",
 stillActive: true,
 images: [
 "/communities/baja-biosana-land.jpg",
 "/communities/baja-biosana-1.jpg",
 "/communities/baja-biosana-2.jpg",
 "/communities/baja-biosana-3.jpg",
 ],
 summary:
 "Eleven hectares at El Chorro: cob, a dome, nine people greening the desert. GEN filmed Baja BioSana in 2006. When a house opens, a membership is offered inside the project, not on a public lot board.",
 businessModel:
 "Retreats, natural-building workshops, and a resident oasis that hosts the world while keeping the houses private. Off-grid. When a member leaves, the home is offered inside the project. bajabiosana.com / @bajabiosana.",
 foundingProcess:
 "Several members gathered in 2006 at El Chorro, at the base of the Sierra de la Laguna, to build a living-and-learning centre: natural building, sustainability education, community, spiritual practice. Común Tierra mapped it; GEN published the “greening the desert” film in 2014. Instagram still shows the cob, the dome, the oasis. Membership has stayed small. The biosphere is the neighbour, not the landlord.",
 governance:
 "A small resident circle. New people enter when a house and a yes are both open. Retreat guests are not members. Arrange; do not treat El Chorro as a walk-in commune.",
 website: "https://www.instagram.com/bajabiosana/",
 timeline: [
 { year: "2006", event: "Baja BioSana gathers at El Chorro as a living-and-learning centre." },
 { year: "2014", event: "Común Tierra / GEN film the desert-greening ecoaldea." },
 { year: "2010s–20s", event: "Natural-building homes, retreats, a small resident roll; occasional membership transfer." },
 { year: "Present", event: "11 ha, cob and dome, still off-grid under the Sierra de la Laguna." },
 ],
 },
 {
 slug: "san-jose-de-la-zorra",
 name: "San José de la Zorra",
 location: "San José de la Zorra, Valle de Guadalupe hinterland, ~7 miles from Ejido El Porvenir, Municipio de Ensenada",
 region: "Baja California, Mexico",
 country: "Mexico",
 foundedYear: 2024,
 foundedLabel: "Ancestral Kumiai territory; Sujeto de Derecho Público 2024",
 members: 80,
 membersLabel: "A small Kumiai community (roll unpublished; one of five Kumiai communities in Baja California)",
 acres: 4300,
 acresLabel: "~1,740 ha (~4,300 acres) of Kumiai territory, described as sitting inside/adjacent to Ejido El Porvenir",
 legalStructure:
 "Comunidad Indígena Kumiai de San José de la Zorra, one of five Kumiai (Kámia / Kumeyaay) communities on the Baja California side of the border. Traditional authority; in 2024 a decree recognized the community as a Sujeto de Derecho Público. Agrarian sources describe about 1,740 hectares whose surface sits in the jurisdiction of Ejido El Porvenir, communal/indigenous territory. You are Kumiai here, or you are a guest.",
 legalCategory: "Housing cooperative",
 stillActive: true,
 images: [
 "/communities/san-jose-de-la-zorra-land.jpg",
 "/communities/san-jose-de-la-zorra-1.jpg",
 "/communities/san-jose-de-la-zorra-2.jpg",
 "/communities/san-jose-de-la-zorra-3.jpg",
 ],
 summary:
 "An hour north of Ensenada, a Kumiai valley of ancestral territory received a 2024 public-subject decree. Baskets, language work, and a people still on their land. San José de la Zorra is not a new eco-village; it is older than the atlas.",
 businessModel:
 "Juncus and pine-needle basketry (INPI documents the fibre work), small agriculture, cultural visits by arrangement. sanjosedelazorra.com is the community door. Guests do not buy in.",
 foundingProcess:
 "Kumiai people have lived this valley since before the missions. Displacement by ranchos and, later, the wine valley is the settler story; the community’s own story is continuity. San José de la Zorra is one of five Baja Kumiai communities (with La Huerta, San Antonio Necua, Santa Catarina, Juntas de Neji). In 2024 the Mexican state recognized it as a Sujeto de Derecho Público. Language keepers (the Ojeda family among them) are still teaching Kumiai in the valley.",
 governance:
 "Traditional Kumiai authority and an asamblea. The 2024 public-subject decree is civil personality. You do not join by buying a hectare of Guadalupe. Visit only as a guest, and only if the community is receiving. Confirm.",
 website: "https://sanjosedelazorra.com/",
 timeline: [
 { year: "Ancestral", event: "Kumiai ranchería in the valley later mapped as San José de la Zorra." },
 { year: "Ranchos–wine valley", event: "Settler displacement around the community; Ejido El Porvenir is the agrarian neighbour." },
 { year: "2010s–20s", event: "Language and basketry work; INPI documents the fibre crafts." },
 { year: "2024", event: "Recognized as Sujeto de Derecho Público." },
 { year: "Present", event: "A living Kumiai community on ~1,740 ha; guests by arrangement only." },
 ],
 },
 {
 slug: "rancho-pacifico-baja",
 name: "Rancho Pacífico Baja",
 location: "7 km east of El Pescadero toward the Sierra de la Laguna, 15 minutes from Todos Santos",
 region: "Baja California Sur, Mexico",
 country: "Mexico",
 foundedYear: 2019,
 foundedLabel: "2019 (15-acre permaculture rancho; eco-village in formation)",
 members: 8,
 membersLabel: "A small off-grid household and hosts (roll unpublished; the project invites eco-village members)",
 acres: 15,
 acresLabel: "15 acres of Baja desert, zoned agriculture and eco-tourism",
 legalStructure:
 "A 15-acre private permaculture rancho east of El Pescadero, in formation as an eco-village since 2019. Zoned for agriculture and eco-tourism. The land is a working homestead with a wood-fired bakery/pizzeria, a fermentary, and an off-grid campground (RV, trailer, van, tent, glamping). Membership in the eco-village is a published path (a PDF on the ranch site). Confirm who holds title this year.",
 legalCategory: "Freehold title",
 stillActive: true,
 images: [
 "/communities/rancho-pacifico-baja-land.jpg",
 "/communities/rancho-pacifico-baja-1.jpg",
 "/communities/rancho-pacifico-baja-2.jpg",
 "/communities/rancho-pacifico-baja-3.jpg",
 ],
 summary:
 "Fifteen desert acres in Pescadero, a wood-fired loaf, a campground. Rancho Pacífico has been trying to become an eco-village since 2019 and will not pretend it already is a hundred-person commune. Come for the bread.",
 businessModel:
 "Sourdough and pizza from the wood oven, fermentary, off-grid campground and glamping, desert walks, and a published invitation to join the eco-village. Independent homestead finances plus guest bread.",
 foundingProcess:
 "Hosts began developing the 15-acre rancho in 2019, 7 km toward the Sierra de la Laguna from El Pescadero (45 minutes north of Cabo San Lucas, an hour from La Paz, 15 minutes from Todos Santos). Permaculture design, water, food, shelter, and energy on desert land. The bakery is the public face; the eco-village is the stated direction, still in formation.",
 governance:
 "A small host household with a published join path. Campground guests are not members. Read the PDF; write; visit. Harder than a Cerritos rental, easier than a closed commune, if they are actually taking people that season.",
 website: "https://www.ranchopacificobaja.com/",
 timeline: [
 { year: "2019", event: "15-acre rancho east of El Pescadero begins as a permaculture homestead / eco-village." },
 { year: "2020s", event: "Wood-fired bakery and pizzeria, fermentary, off-grid campground." },
 { year: "Present", event: "15 acres, still forming; bread and beds are the door." },
 ],
 },
 {
 slug: "tateikie",
 name: "TateiKie · San Andrés Cohamiata",
 location: "San Andrés Cohamiata (TateiKie), Municipio de Mezquitic, Sierra Madre Occidental, ~1,950 m",
 region: "Jalisco, Mexico",
 country: "Mexico",
 foundedYear: 1964,
 foundedLabel: "Ancestral Wixárika; comunidad indígena TateiKie (mid-century agrarian recognition; 60th-anniversary claims in the 2020s)",
 members: 1300,
 membersLabel: "Locality ~800–1,317 (Wikipedia / INEGI 2010); the comunidad is the ceremonial headquarters of 16 agencies, with larger Wixárika counts unpublished here",
 acres: null,
 acresLabel: "Communal Wixárika territory in Mezquitic; TateiKie is the ceremonial headquarters",
 legalStructure:
 "Comunidad Indígena Wixárika de San Andrés Cohamiata (TateiKie). Political and religious cargos are the same government: Gobernador Tradicional, autoridad agraria, Delegado Municipal, and the asamblea comunitaria as the highest figure. Decisions by community consensus. You are Wixárika here, or you are a guest.",
 legalCategory: "Housing cooperative",
 stillActive: true,
 images: [
 "/communities/tateikie-land.jpg",
 "/communities/tateikie-1.jpg",
 "/communities/tateikie-2.jpg",
 "/communities/tateikie-3.jpg",
 ],
 summary:
 "TateiKie is the principal Wixárika community in Jalisco, a ceremonial headquarters at 1,950 metres in Mezquitic. The asamblea is also a temple calendar. A people on their sierra, not a project that started last decade.",
 businessModel:
 "Milpa, livestock, artisan work, and the ceremonial year. Pilgrimage to Wirikuta and other sacred sites is the political-religious weekday. Guests do not buy in.",
 foundingProcess:
 "Wixárika people have lived this sierra since before the colony. TateiKie (San Andrés Cohamiata) is the ceremonial and communal headquarters of sixteen agencies in Mezquitic, one of four principal Wixárika centres in Jalisco with Tuapurie, Waut+a, and Tutsipa. Mid-century agrarian recognition made a civil wrapper; the asamblea is older. A 2020s 60th-anniversary claim marks that wrapper, not the first fire. Wirikuta, Teakata, and the other sacred places are the geography the cargos serve.",
 governance:
 "Asamblea comunitaria. Gobernador Tradicional, agrario, and municipal delegate sit the cargos. Consensus. Visit only if the community is receiving, and never as a peyote tour.",
 website: "https://es.wikipedia.org/wiki/San_Andr%C3%A9s_Cohamiata",
 timeline: [
 { year: "Ancestral", event: "Wixárika rancherías in the Sierra Madre Occidental; TateiKie as a ceremonial centre." },
 { year: "Mid-20th c.", event: "Agrarian recognition of the comunidad indígena; cargos sit both civil and religious offices." },
 { year: "2010", event: "INEGI locality count 1,317; Wikipedia later lists ~806 in the cabecera." },
 { year: "2020s", event: "60th-anniversary claims for the civil comunidad; asamblea still the highest figure." },
 { year: "Present", event: "Ceremonial headquarters of 16 agencies; guests by arrangement only." },
 ],
 },
 {
 slug: "ayotitlan",
 name: "Ayotitlán",
 location: "Sierra de Manantlán, Municipio de Cuautitlán de García Barragán, southern Jalisco (ejido of ~88 localities)",
 region: "Jalisco, Mexico",
 country: "Mexico",
 foundedYear: 1963,
 foundedLabel: "Ancestral Nahua-Otomí; presidential ejido resolution August 1963",
 members: 7400,
 membersLabel: "~7,168 (INEGI 2005) to ~7,400 people in about 88 localities of the ejido (Cuartoscuro)",
 acres: 85700,
 acresLabel: "~34,700 ha delivered of ~50,332 ha decreed (1963); a 10,000 ha ampliación still unpublished as delivered",
 legalStructure:
 "Ejido Ayotitlán, a Nahua-Otomí indigenous community in the Sierra de Manantlán. A 1696 colonial “República de Ayotitlán” once described hundreds of thousands of hectares; August 1963 a presidential resolution created the ejido at a little more than 50,000 ha, of which about 34,700 ha were actually delivered. Consejo de Mayores is the traditional authority beside the comisariado ejidal. Most of Cuzalapa’s land sits in the biosphere buffer. The iron-mining and dispossession fight is part of the title story.",
 legalCategory: "Housing cooperative",
 stillActive: true,
 images: [
 "/communities/ayotitlan-land.jpg",
 "/communities/ayotitlan-1.jpg",
 "/communities/ayotitlan-2.jpg",
 "/communities/ayotitlan-3.jpg",
 ],
 summary:
 "Some seven thousand Nahua people in eighty-eight localities hold a sierra the República de Ayotitlán already had when 1963 ejido paper arrived. A Consejo de Mayores still sits. The hectares the decree named are, in too many cases, still a wait.",
 businessModel:
 "Milpa, coffee, forest, and the fight to keep iron mines off the mountain. Ecotourism is a side door in the biosphere. You are born into the ejido or the asamblea says so.",
 foundingProcess:
 "Ayotitlán is an old Nahua-Otomí sierra. Colonial títulos spoke of a República of tens to hundreds of thousands of hectares. In August 1963 a presidential resolution created Ejido Ayotitlán at a little over 50,000 ha; about 34,700 were delivered. A later ampliación of some 10,000 ha remains a paper. The 1987 biosphere (139,577 ha) sits on the same mountain. Consejo de Mayores and the comisariado still sit the agrarian fight, including against iron mining.",
 governance:
 "Consejo de Mayores and the asamblea ejidal. Comisariado for the 1963 paper. CONANP’s biosphere is a designation on the mountain, not their landlord. Visitors do not buy a hectare of Manantlán. Confirm.",
 website: "https://adondevanlosdesaparecidos.org/2023/10/02/sierra-de-manantlan-territorio-indigena-marcado-por-la-mineria-de-hierro-y-el-narcotrafico/",
 timeline: [
 { year: "1696", event: "Colonial sources describe a República de Ayotitlán of hundreds of thousands of hectares." },
 { year: "1963", event: "Presidential resolution creates Ejido Ayotitlán (~50,332 ha on paper; ~34,700 delivered)." },
 { year: "1969–", event: "Legal fight for the undelivered hectares and against mining." },
 { year: "1987", event: "Reserva de la Biosfera Sierra de Manantlán decreed on 139,577 ha." },
 { year: "Present", event: "~7,400 people in ~88 localities; Consejo de Mayores still sitting the land." },
 ],
 },
 {
 slug: "bosque-la-primavera",
 name: "Bosque La Primavera",
 location: "West of Guadalajara, municipalities of Zapopan, Tala, Tlajomulco de Zúñiga, and El Arenal",
 region: "Jalisco, Mexico",
 country: "Mexico",
 foundedYear: 1980,
 foundedLabel: "6 March 1980 (APFF decree, DOF)",
 members: 50,
 membersLabel: "CONANP / SEMADET staff, researchers, fire crews, and volunteer guardians",
 acres: 75366,
 acresLabel: "30,500 ha (~75,366 acres) of Área de Protección de Flora y Fauna",
 legalStructure:
 "Área de Protección de Flora y Fauna La Primavera, decreed 6 March 1980 (DOF). 30,500 hectares on the volcanic massif west of Guadalajara, in Zapopan, Tala, Tlajomulco de Zúñiga, and El Arenal. CONANP holds the designation; Jalisco’s SEMADET and a forest directorate manage the day-to-day. Ejidos, pequeña propiedad, and the city sit on the edges. Teopantli Kalpulli is a neighbour at San Isidro Mazatepec, not the landlord of the 30,500 ha. You hike.",
 legalCategory: "Nonprofit foundation",
 stillActive: true,
 images: [
 "/communities/bosque-la-primavera-land.jpg",
 "/communities/bosque-la-primavera-1.jpg",
 "/communities/bosque-la-primavera-2.jpg",
 "/communities/bosque-la-primavera-3.jpg",
 ],
 summary:
 "Thirty thousand five hundred hectares of oak and pine sit on a 140,000-year caldera at Guadalajara’s edge. Bosque La Primavera was decreed an APFF on 6 March 1980. The forest is the city’s lung, and the city still has to stop eating it.",
 businessModel:
 "Public trails, environmental education, fire management, research. Donations and public budgets, not house sales.",
 foundingProcess:
 "The massif is a Pleistocene caldera. Urban Guadalajara walked west. On 6 March 1980 a presidential decree made Área de Protección de Flora y Fauna La Primavera, 30,500 hectares, in Tala, Zapopan, El Arenal, and Tlajomulco. CONANP and the state still have to hold the edge against fire, cattle, and subdivisions. Teopantli Kalpulli founded an ashram on the southern pasture in 1983; that kalpulli is a neighbour, not this title.",
 governance:
 "A CONANP designation with a Jalisco directorate. You take a trail from Zapopan or Tala. Membership is not residential. Confirm closures in fire season.",
 website: "https://bosquelaprimavera.jalisco.gob.mx/",
 timeline: [
 { year: "Pleistocene", event: "Caldera; the oak-pine massif that became La Primavera." },
 { year: "1980", event: "6 March: APFF La Primavera decreed, 30,500 ha (DOF)." },
 { year: "1983", event: "Teopantli Kalpulli founds an ashram on the southern edge, a neighbour, not this deed." },
 { year: "Present", event: "Guadalajara’s lung; fire, trails, and the edge still the politics." },
 ],
 },
];

