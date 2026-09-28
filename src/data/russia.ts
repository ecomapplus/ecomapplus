import type { Community } from "./communities";

/** Ten Russian communities. Oldest eco-founding first. No Crimea. */
export const russiaCommunities: Community[] = [
 {
  slug: "kitezh",
  name: "Kitezh",
  location: "Baryatinsky District, Kaluga Oblast (~10 km from the village of Baryatino; ~250 km from Moscow)",
  region: "Kaluga, Russia",
  country: "Russia",
  foundedYear: 1992,
  foundedLabel: "1992 (Dmitry Morozov; Perestroika foster village)",
  members: 50,
  membersLabel: "11 foster families in a 2018 count; ~36 schoolchildren plus preschoolers. Over ninety children have lived here since 1992",
  acres: 173,
  acresLabel: "~70 ha (~173 acres) of forest clearing (2018 village account)",
  legalStructure:
   "Kitezh (Китеж) is a non-commercial partnership of foster parents in Baryatinsky District, Kaluga. In 1992 Dmitry Morozov left a Moscow radio job and started building a wooden village so children from institutions could grow up in houses, not wards. An experimental school stands among the homes. Ecologia Youth Trust in Scotland funded the work and sent volunteers from 1995 until 2022, when the international programme paused.",
  legalCategory: "Nonprofit foundation",
  stillActive: true,
  images: [
   "/communities/kitezh-land.jpg",
   "/communities/kitezh-1.jpg",
   "/communities/kitezh-2.jpg",
   "/communities/kitezh-3.jpg"
  ],
  summary:
   "In a Kaluga forest clearing, foster families raise children who would otherwise have grown up in institutions. Dmitry Morozov started Kitezh in 1992 with wooden houses and a school; more than ninety children have lived here since.",
  businessModel:
   "The village runs on foster stipends, the school, and gifts. Ecologia Youth Trust in Scotland was the main foreign supporter until 2022, when international volunteering stopped. There is no housing market here; the houses are homes for children.",
  foundingProcess:
   "Morozov and a handful of volunteer foster families took an empty Kaluga clearing in 1992. Liza Hollingshead came from Findhorn in 1994; Ecologia Youth Trust followed. They put up twelve wooden houses, a school, a sawmill, and a church. The first children grew up. The partnership is still in the trees.",
  governance:
   "Foster parents run the partnership; many of the teachers are parents too. Morozov founded it. Guests are welcome by arrangement, but this is a children’s village, not a guesthouse: bedrooms stay private.",
  website: "http://www.kitezh.org/",
  timeline: [
   { year: "1992", event: "Dmitry Morozov founds Kitezh in Baryatinsky District." },
   { year: "1994–95", event: "Findhorn visitors; Ecologia Youth Trust begins support." },
   { year: "2004", event: "Sister village Orion begins, with Maria Pichugina." },
   { year: "2022", event: "International volunteer programme pauses after the invasion of Ukraine." },
   { year: "Present", event: "The school and foster houses are still in the forest. Ask before treating an old photograph as this year’s household." }
  ],
 },
 {
  slug: "nevo-ecoville",
  name: "Nevo-Ecoville",
  location: "Reuskula, Sortavala District, Republic of Karelia (NW shore of Lake Ladoga; ~20 km from Sortavala and Lakhdenpokhya)",
  region: "Karelia, Russia",
  country: "Russia",
  foundedYear: 1993,
  foundedLabel: "Idea 1987; first work 1993; construction 1994; public association 1995",
  members: 40,
  membersLabel: "~40 people / 10 families in a published count; ~17 year-round. Ask who is actually wintering there this year",
  acres: 104,
  acresLabel: "26 ha held by the organisation + 16 ha in settlers’ private hands (~42 ha / 104 acres)",
  legalStructure:
   "Centre for Ecological Initiatives ‘Nevo-Ecoville’ (Центр экологических инициатив «Нево-Эковиль») is a Karelian public association at Reuskula on Lake Ladoga. The idea dates to 1987; people started working the site in 1993, building houses from 1994, and registered in 1995. Ivan S. Goncharov has been the public executive. Some land sits with the organisation, some in settlers’ private hands, so a household here is either of the association, on its own hectare, or a guest of the lake.",
  legalCategory: "Registered association",
  stillActive: true,
  images: [
   "/communities/nevo-ecoville-land.jpg",
   "/communities/nevo-ecoville-1.jpg",
   "/communities/nevo-ecoville-2.jpg",
   "/communities/nevo-ecoville-3.jpg"
  ],
  summary:
   "On the northwest shore of Lake Ladoga, a handful of families have been gardening among the skerries since 1993. Nevo-Ecoville is one of Russia’s oldest eco-settlements: a public association, about forty names on a good count, and weather that comes off the water.",
  businessModel:
   "Gardens and crafts feed the place; a little teaching work brings visitors. Families already hold some private plots, but this is not a developer selling hectares off a website.",
  foundingProcess:
   "A small circle first looked at the Karelian Isthmus, then settled on Ladoga. They started in a three-family house. In 1995 they registered as a public association: architects, forest engineers, teachers. GEN-Russia still lists the centre. Published counts say about forty people; the skerries have not gone anywhere.",
  governance:
   "The association and the private plots sit side by side. Goncharov has been the public office, not a landlord of Reuskula. Write first; guests of the lake do not arrive and claim a hectare.",
  website: "https://nevo-ecoville.narod.ru/my.html",
  timeline: [
   { year: "1987", event: "Idea of Nevo-Ecoville." },
   { year: "1993–94", event: "First work and construction at Reuskula." },
   { year: "1995", event: "Public association registered." },
   { year: "Present", event: "Organisation land and private plots are still on Ladoga. Ask who winters there before you plan a January visit." }
  ],
 },
 {
  slug: "grishino",
  name: "Grishino",
  location: "Historical village of Grishino, at the confluence of two rivers (~300 km NE of St Petersburg; Vazhinka country, Leningrad Oblast)",
  region: "Leningrad Oblast, Russia",
  country: "Russia",
  foundedYear: 1994,
  foundedLabel: "1994 (eco-settlement in an older hamlet)",
  members: 7,
  membersLabel: "Seven people living year-round. Summer seminars bring more. Ask for the current winter count",
  acres: null,
  acresLabel: "A living hamlet with two community izbas, gardens, a wildflower field, and surrounding forest; no published hectare map",
  legalStructure:
   "Grishino (Гришино) is an ecological village and spiritual-education centre folded into an older Leningrad hamlet on the Vazhinka. GEN lists it. Two community houses stand in traditional Russian style, with some log houses beside them. People of different spiritual paths, folk arts, and Ivan Chai tea work share the place. You come for a seminar, or you already live in the hamlet.",
  legalCategory: "Unincorporated community",
  stillActive: true,
  images: [
   "/communities/grishino-land.jpg",
   "/communities/grishino-1.jpg",
   "/communities/grishino-2.jpg",
   "/communities/grishino-3.jpg"
  ],
  summary:
   "An old hamlet on the Vazhinka, about 300 km northeast of St Petersburg, where a 1994 eco-settlement kept the izbas and planted gardens. Seven people winter here; summer seminars fill the two community houses.",
  businessModel:
   "Summer seminars, herbs, and a small kitchen keep the place going. Nobody is selling village lots; guests come to learn and eat, then leave.",
  foundingProcess:
   "Grishino was already a village when a small circle arrived in the mid-1990s. They added community houses and gardens at the edge of the forest. GEN Europe still lists it. Seven people in winter; the write-ups mention bears and beavers, which is the sort of neighbour you get this far into Vazhinka country.",
  governance:
   "A small host circle in a living village. Seminar guests eat, sleep, and go home; they do not join the winter seven by staying an extra night.",
  website: "https://ecovillage.org/map/community/ecovillage-grishino/",
  timeline: [
   { year: "Ancestral", event: "Grishino as a historical village at a river confluence." },
   { year: "1994", event: "Eco-settlement and education centre takes root." },
   { year: "Present", event: "Still GEN-listed. Seven year-round on the last published count. Write ahead." }
  ],
 },
 {
  slug: "tiberkul",
  name: "Tiberkul · Abode of Dawn",
  location: "Kuraginsky District, Krasnoyarsk Krai, near Lake Tiberkul; Petropavlovka and Cheremshanka sit beside the mountain settlement (~53.87°N 94.08°E)",
  region: "Krasnoyarsk, Russia",
  country: "Russia",
  foundedYear: 1994,
  foundedLabel: "Church of the Last Testament 1991; taiga settlement 1994",
  members: 4000,
  membersLabel: "On the order of 4,000 people across linked villages in published counts; the mountain town itself is smaller. Numbers are less certain after the 2020 arrests",
  acres: 618,
  acresLabel: "Original Tiberkul settlement ~2.5 km² (~618 acres / 250 ha); later expanded into neighbouring villages",
  legalStructure:
   "Tiberkul (Тиберкуль) is the taiga settlement of the Church of the Last Testament (Церковь Последнего Завета), founded by Sergey Torop, who teaches as Vissarion. Wooden houses climb a three-tier mountain town (Abode of Dawn, Heavenly Abode, Temple Peak), with vegan rules, solar, and wind. It is a registered religious organisation’s village, not an open eco-settlement. Vissarion and two aides were arrested in September 2020; in June 2025 he was sentenced to twelve years. The settlements did not vanish with the sentence. Who speaks for the land now is a question worth asking before you treat an old photograph as a current invitation.",
  legalCategory: "Religious society",
  stillActive: true,
  images: [
   "/communities/tiberkul-land.jpg",
   "/communities/tiberkul-1.jpg",
   "/communities/tiberkul-2.jpg",
   "/communities/tiberkul-3.jpg"
  ],
  summary:
   "A wooden town in the Minusinsk-basin taiga, begun in 1994 around Lake Tiberkul. Followers of Sergey Torop, who teaches as Vissarion, built churches, houses, and a three-tier mountain settlement. Published counts run to about four thousand people across linked villages. It is a faith community, and its founder is in prison.",
  businessModel:
   "A religious commune: gardens, hand-built wood, and internal labour. There is no public housing market; you live here by belonging to the church.",
  foundingProcess:
   "Torop began teaching in 1991. Followers took taiga at Lake Tiberkul in 1994 and later spread into Petropavlovka and Cheremshanka. They built in wood, kept vegan tables, and ran an internal economy with little cash. Photographers came for the mountain town. The FSB came in 2020. A twelve-year sentence followed in 2025. The houses are still in the trees. That last fact is not the same as an invitation.",
  governance:
   "A church governs the settlement. A photograph of Temple Peak is not a visiting pass; the mountain town is not a museum.",
  website: "https://en.wikipedia.org/wiki/Vissarion",
  timeline: [
   { year: "1991", event: "Church of the Last Testament founded; first public teaching." },
   { year: "1994", event: "Tiberkul settlement established on ~2.5 km² of taiga." },
   { year: "2020", event: "22 September: Vissarion, Vadim Redkin, and Vladimir Vedernikov arrested." },
   { year: "2025", event: "30 June: twelve-year sentence reported." },
   { year: "Present", event: "The villages are still there. After the 2020 arrests and the 2025 sentence, ask who actually governs before you plan a visit." }
  ],
 },
 {
  slug: "kovcheg",
  name: "Kovcheg",
  location: "Village of Kovcheg, rural settlement Ilyinskoye, Maloyaroslavets District, Kaluga Oblast (140 km SW of Moscow; ~30 km from Maloyaroslavets and Medyn)",
  region: "Kaluga, Russia",
  country: "Russia",
  foundedYear: 2001,
  foundedLabel: "2001 (initiative); first houses 2002; village of Kovcheg on the map",
  members: 200,
  membersLabel: "On the order of 79 families / ~200 people in settlement accounts; 82 in the 2010 census of the village. Winter numbers may be smaller",
  acres: 299,
  acresLabel: "121 ha (~299 acres): 78 one-hectare family plots, 7 ha common (pond), 21 ha common farmland, 15 ha roads",
  legalStructure:
   "Kovcheg (Ковчег, ‘the Ark’) is a Kaluga eco-settlement that became a mapped village in rural settlement Ilyinskoye. In spring 2001 a small circle asked Maloyaroslavets district for land and received 121 hectares. Fedor Lazutin is the public writer. Each family holds about one hectare; 75% of existing members must want a new household. Guest days only, since 2008. Ringing Cedars “kin’s-domain” language sits beside a real membership vote. Plots are family holdings: you are voted in, or you come as a seminar guest.",
  legalCategory: "Housing cooperative",
  stillActive: true,
  images: [
   "/communities/kovcheg-land.jpg",
   "/communities/kovcheg-1.jpg",
   "/communities/kovcheg-2.jpg",
   "/communities/kovcheg-3.jpg"
  ],
  summary:
   "On a Kaluga field with forest on three sides, about seventy-nine families each keep a hectare of the Ark. Kovcheg has light-adobe houses, a school, and a rule that three-quarters of the neighbours have to want you before you join.",
  businessModel:
   "Family homesteads, a common house, seminars, honey, and a choir. Hectares pass by membership vote, not by an open listings page.",
  foundingProcess:
   "Seven people asked the district for land in 2001 and were given a field with forest on three sides. The common house went up in 2002; a primary school in 2007. Meetings of living Russian ecovillages have sat here. The 75% neighbour vote is still the filter.",
  governance:
   "Existing families vote. They meet in the common house. Lazutin writes about the place; he does not own the seventy-eight family hectares. Guests come on published days, not whenever the road looks open.",
  website: "https://www.eco-kovcheg.ru/keyfacts.html",
  timeline: [
   { year: "2001", event: "Initiative group; Maloyaroslavets district land conversation." },
   { year: "2002", event: "Common house and first private houses." },
   { year: "2007", event: "Primary school founded." },
   { year: "2008", event: "Guest visits restricted to guest days, seminars, or a named host." },
   { year: "Present", event: "Still a mapped village of Kovcheg. Ask for the winter roll if you are thinking of more than a guest day." }
  ],
 },
 {
  slug: "vedrussiya",
  name: "Vedrussiya",
  location: "Seversky District, Krasnodar Krai (~44.83°N 38.59°E; Caucasus-foothill country west of Krasnodar)",
  region: "Krasnodar, Russia",
  country: "Russia",
  foundedYear: 2003,
  foundedLabel: "2003 (among the first large kin’s-domain settlements; some accounts say 2005)",
  members: 265,
  membersLabel: "265 families on the settlement’s own count; 275 plots of 1–2 ha. Not all plots are wintered",
  acres: 872,
  acresLabel: "353 ha on the current site (~872 acres); older Ringing Cedars write-ups also say ~554 ha, confirm the cadastre",
  legalStructure:
   "Vedrussiya (Ведруссия) is a settlement of kin’s domains in Seversky District, one of the first and largest Ringing Cedars settlements in Russia. Families hold plots of one to two hectares. The public site books excursions; a hectare here belongs to a family if they are accepted and they work it, not to a passer-by with a deposit.",
  legalCategory: "Housing cooperative",
  stillActive: true,
  images: [
   "/communities/vedrussiya-land.jpg",
   "/communities/vedrussiya-1.jpg",
   "/communities/vedrussiya-2.jpg",
   "/communities/vedrussiya-3.jpg"
  ],
  summary:
   "West of Krasnodar, hundreds of families keep one- and two-hectare homesteads on the Caucasus foothills. Vedrussiya is one of Russia’s largest kin’s-domain settlements; you visit by booking an excursion, not by answering a classified ad.",
  businessModel:
   "Family homesteads and gardens; excursions are how strangers see the place.",
  foundingProcess:
   "Readers of Vladimir Megre’s Ringing Cedars books started taking land in the Kuban in the mid-2000s. Hundreds of families followed. The site still offers the idea of a family hectare; how many plots are actually built and wintered is worth asking. The weather is the Caucasus foothills, which is milder than Kaluga and not the same as the Black Sea.",
  governance:
   "A settlement of family plots with a host office for excursions. Guests book; they do not wander the hectares.",
  website: "https://prpvedrussia.ru/",
  timeline: [
   { year: "2003", event: "Vedrussiya founded as a kin’s-domain settlement in Seversky District." },
   { year: "2010s", event: "Hundreds of families; one of the largest such settlements in the country." },
   { year: "Present", event: "353 ha and 265 families on the public count. Excursions by arrangement." }
  ],
 },
 {
  slug: "rodnoe",
  name: "Rodnoe",
  location: "Konyaevo / Ilyino, Sudogodsky District, Vladimir Oblast (55.92°N 40.55°E; ~180–200 km from Moscow)",
  region: "Vladimir, Russia",
  country: "Russia",
  foundedYear: 2004,
  foundedLabel: "Land search 2001; first parcels 2003; official recognition June 2004",
  members: 60,
  membersLabel: "About 60 families permanently resident on settlement accounts. Two hundred families were said to be moving onto 300 ha in 2009; far fewer stayed",
  acres: 741,
  acresLabel: "70 ha communal recognised in June 2004; later write-ups ~300 ha (~741 acres) of family homesteads",
  legalStructure:
   "Rodnoe (Родное) is a kin’s-domain settlement in Sudogodsky District, Vladimir. Readers of the Ringing Cedars books bought shares in 2002, marked parcels in 2003, and in June 2004 had 70 hectares officially recognised as the Rodnoe Kin Domain Settlement, among the first such recognitions, alongside Ladnoe, Zavetnoe, and Solnechnoe. Homestead permits followed from 2006. Family plots: you receive a permit, and then you work a hectare.",
  legalCategory: "Housing cooperative",
  stillActive: true,
  images: [
   "/communities/rodnoe-land.jpg",
   "/communities/rodnoe-1.jpg",
   "/communities/rodnoe-2.jpg",
   "/communities/rodnoe-3.jpg"
  ],
  summary:
   "In Vladimir Oblast, about sixty families winter on family hectares that the district recognised in 2004. Rodnoe was among the first Russian kin’s-domain settlements to get that paper; the field is quieter than the 2009 talk of two hundred households.",
  businessModel:
   "Family homesteads, and festivals at the lake. Strangers do not buy in off a listing; they come to a festival or they already have a permit.",
  foundingProcess:
   "In March 2001 they stood on a road and chose the field. Shares in 2002; three blockhouses that first winter. The official name came in 2004, permits in 2006. Write-ups mention people from Russia, Kazakhstan, Germany, and Poland. How many of those names are still on the land is a fair question.",
  governance:
   "A recognised kin’s-domain settlement of family permits. Neighbours decide the texture of the week. Festival guests go home.",
  website: "https://vmegre.com/en/kin-domain/vladimir-oblast-region-rodnoe/",
  timeline: [
   { year: "2001", event: "Circle searches for land in Vladimir Oblast." },
   { year: "2003", event: "First parcels marked; first blockhouses that winter." },
   { year: "2004", event: "June: 70 ha officially recognised as Rodnoe Kin Domain Settlement." },
   { year: "2006–09", event: "Land permits; a 2009 count of families moving onto ~300 ha." },
   { year: "Present", event: "About 60 permanent families on settlement accounts. Ask who is actually there if you are not coming for a festival." }
  ],
 },
 {
  slug: "orion",
  name: "Orion",
  location: "Kaluga Oblast, sister village to Kitezh in Baryatinsky foster country (building from 2004)",
  region: "Kaluga, Russia",
  country: "Russia",
  foundedYear: 2004,
  foundedLabel: "2004 (Maria Pichugina; second Kitezh village)",
  members: 50,
  membersLabel: "10 foster families and ~40 children. Ask for the current roll",
  acres: null,
  acresLabel: "A second wooden foster village; published as families and reedbeds",
  legalStructure:
   "Orion (Орион) is the second Kitezh children’s village. Building started in 2004. Maria Pichugina, who had been a teenager at Kitezh, headed it. Like Kitezh, it is a non-profit community of foster families. DEFRA and the British Council paid for reed-bed wastewater at both villages. Ecologia’s volunteer path closed in 2022. The work is fostering and teaching, not hosting tourists.",
  legalCategory: "Nonprofit foundation",
  stillActive: true,
  images: [
   "/communities/orion-land.jpg",
   "/communities/orion-1.jpg",
   "/communities/orion-2.jpg",
   "/communities/orion-3.jpg"
  ],
  summary:
   "Kitezh outgrew its method, so Maria Pichugina, who had been a teenager there, opened a second forest village in 2004. Orion is ten foster families, about forty children, and reed-bed wastewater in the Kaluga woods. Still a children’s house.",
  businessModel:
   "Foster stipends, a school, and the foreign gifts that used to come through Ecologia. The houses are for children; they are not for sale.",
  foundingProcess:
   "Kitezh had a method and not enough beds. Pichugina, raised there, opened a second village. Reed-beds were the British gift. Forty children in the published count. A sister, not a franchise.",
  governance:
   "Foster parents, as at Kitezh. Guests do not walk bedrooms; write if you have a reason to come.",
  website: "https://celebratingoneincrediblefamily.org/kitezh-childrens-community-in-russia",
  timeline: [
   { year: "2004", event: "Building starts on Orion; Maria Pichugina heads the sister village." },
   { year: "2000s", event: "Reed-bed wastewater funded with Kitezh." },
   { year: "2022", event: "International volunteer path pauses." },
   { year: "Present", event: "Still the public sister of Kitezh. Ask who is in the houses before you treat an old volunteer snapshot as this year’s village." }
  ],
 },
 {
  slug: "zdravoe",
  name: "Zdravoe",
  location: "Grigoryevskoye rural settlement, Seversky District, Krasnodar Krai, by stanitsa Grigoryevskaya (~40 km from Krasnodar, ~70 km from the Black Sea; Afiips forest to the west)",
  region: "Krasnodar, Russia",
  country: "Russia",
  foundedYear: 2013,
  foundedLabel: "Spring 2013 (tenth year marked 2023)",
  members: 40,
  membersLabel: "A settlement of family hectares; early accounts of a handful of founding families. Ask for the current household count",
  acres: 358,
  acresLabel: "145 ha (~358 acres) in a later count: 7 ha common, 15 ha organic fields / horse school, 120 ha family domains and roads (an earlier plan was 110 ha)",
  legalStructure:
   "Zdravoe (Здравое) is a kin’s-domain settlement founded in spring 2013 next to stanitsa Grigoryevskaya. Private family hectares sit around a 7 ha common (ponds, a house of culture) and 15 ha of organic fields. Guest cabins and a bath-house are how visitors arrive. You apply for a hectare, or you stay a night.",
  legalCategory: "Housing cooperative",
  stillActive: true,
  images: [
   "/communities/zdravoe-land.jpg",
   "/communities/zdravoe-1.jpg",
   "/communities/zdravoe-2.jpg",
   "/communities/zdravoe-3.jpg"
  ],
  summary:
   "Beside stanitsa Grigoryevskaya, young families marked out hectares in 2013 and dug a Holzer-style pond on the common. Zdravoe now has a house of culture, guest cabins, and a bath-house: a Kuban settlement that will put you up for a night while it decides whether you belong on a hectare.",
  businessModel:
   "Family homesteads, guest stays, a bath-house, and organic beds. You can apply for a hectare; you cannot click-to-buy one off a developer map.",
  foundingProcess:
   "Spring 2013, empty ground, young families. They dug a Holzer-style pond on the common and later a house of culture. Aerial films go up each May. They marked a tenth year in 2023. How many hectares are actually lived on is worth asking; founding enthusiasm and a winter household are different numbers.",
  governance:
   "A settlement of family plots around a common core. Guests of a cabin are not members. Write if you want more than a bath-house night.",
  website: "https://vk.com/zdravoe_info",
  timeline: [
   { year: "2013", event: "Spring: Zdravoe founded beside stanitsa Grigoryevskaya." },
   { year: "2015–", event: "Ponds, house of culture, organic fields, guest stays." },
   { year: "2023", event: "Tenth year marked with an aerial film." },
   { year: "Present", event: "145 ha on the later count. Ask for the household roll if you are thinking of staying." }
  ],
 }
];
