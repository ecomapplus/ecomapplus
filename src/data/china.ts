import type { Community } from "./communities";

/** Ten Chinese communities beyond Little Donkey Farm already in the Asia cluster. Oldest eco-founding first. */
export const chinaCommunities: Community[] = [
 {
  slug: "yucun",
  name: "Yucun",
  location: "Tianhuangping Town, Anji County, Huzhou, northern foot of the Tianmu range, Zhejiang",
  region: "Zhejiang, China",
  country: "China",
  foundedYear: 2005,
  foundedLabel: "Ancestral village; mines closed 2003–05; ‘Two Mountains’ speech 15 August 2005",
  members: 1050,
  membersLabel: "280 households, 1,050 people (2018 village count)",
  acres: 1201,
  acresLabel: "4.86 km² (~1,201 acres / 486 ha) of village territory",
  legalStructure:
   "Yucun (余村), an Anji administrative village on collective rural land. Villagers’ committee and party branch. Three limestone mines and a cement plant were the cash until they closed in 2003–05. On 15 August 2005 Xi Jinping, then Zhejiang party secretary, said here that lucid waters and lush mountains are invaluable assets. UNWTO Best Tourism Village 2021. Bamboo, white tea, and day-trippers whose tickets sit with the committee.",
  legalCategory: "Housing cooperative",
  stillActive: true,
  images: [
   "/communities/yucun-land.jpg",
   "/communities/yucun-1.jpg",
   "/communities/yucun-2.jpg",
   "/communities/yucun-3.jpg"
  ],
  summary:
   "Anji County closed the limestone mines that had paid, and sickened, Yucun. On 15 August 2005 Xi Jinping, then Zhejiang party secretary, stood here and said lucid waters and lush mountains are invaluable assets. Two decades later the slogan is national, and the village lives on bamboo, white tea, and day-trippers.",
  businessModel:
   "Rural tourism, bamboo, and white tea. The mines are closed. Homestays and ticketed paths are how the village is paid now.",
  foundingProcess:
   "Yucun is an old Tianhuangping village. Mines paid, then sickened the valley. Closures came in 2003–05. The August 2005 visit made the slogan. Two decades of bamboo and visitors followed. A natural village that changed how it earns a living.",
  governance:
   "A villagers’ committee on collective land. You walk the path they opened; you are not joining a co-op of outsiders. Homestays are how visitors stay. The land stays with the village.",
  website: "https://en.wikipedia.org/wiki/Anji_County",
  timeline: [
   { year: "Ancestral", event: "Yucun at the foot of Tianmu; later limestone mines and a cement plant." },
   { year: "2003–05", event: "Mines and plant close." },
   { year: "2005", event: "15 August: ‘lucid waters and lush mountains are invaluable assets,’ spoken here." },
   { year: "2021", event: "UNWTO Best Tourism Village." },
   { year: "Present", event: "280 households; bamboo, tea, and visitors on 4.86 km²." }
  ],
 },
 {
  slug: "lehe-daping",
  name: "Lehe Home · Daping",
  location: "Daping Village, Tongji Town, Pengzhou, Longmen Mountains ~1,500 m, Sichuan",
  region: "Sichuan, China",
  country: "China",
  foundedYear: 2008,
  foundedLabel: "2008 (post-Wenchuan reconstruction; Beijing Global Village 1996)",
  members: 240,
  membersLabel: "~80–120 ecological houses in Red Cross / Global Village accounts; village roll unpublished as a 2026 census",
  acres: null,
  acresLabel: "Daping Village on the Longmen range; the published figure is houses",
  legalStructure:
   "Lehe Home (乐和家园) at Daping Village, Pengzhou. Beijing Global Village (北京地球村), the environmental NGO Liao Xiaoyi founded in 1996, and the China Red Cross Foundation rebuilt a mountain village after 12 May 2008. About 3.6 million yuan for ecological houses, dry toilets, clinics, a workshop. The villagers’ committee still governs collective land. The NGO is a reconstruction platform. You are of Daping, or you are a guest.",
  legalCategory: "Nonprofit foundation",
  stillActive: true,
  images: [
   "/communities/lehe-daping-land.jpg",
   "/communities/lehe-daping-1.jpg",
   "/communities/lehe-daping-2.jpg",
   "/communities/lehe-daping-3.jpg"
  ],
  summary:
   "After the 12 May 2008 Wenchuan earthquake, Liao Xiaoyi’s Beijing Global Village and the China Red Cross Foundation rebuilt Daping on the Longmen range: ecological houses, dry toilets, a clinic, a workshop. About 3.6 million yuan. A reconstruction that tried to leave a rural ethic, not just a row of new roofs.",
  businessModel:
   "Ecological farming, crafts, and community tourism. Reconstruction money built the houses. The week is still a mountain village’s week.",
  foundingProcess:
   "Liao Xiaoyi, an Olympic environment adviser, went home to Sichuan after 12 May 2008. Daping, Tongji, Pengzhou, 1,500 metres, houses down. The Red Cross Foundation funded Lehe Home: green livelihood, dry toilets, a clinic, a workshop, a villagers’ council. Eighty to a hundred and twenty ecological houses. The NGO left a method; the committee still governs the village.",
  governance:
   "A villagers’ committee plus a reconstruction platform. Liao Xiaoyi was not the landlord. Guests of a reconstruction story do not buy a Pengzhou hectare. Ask who is actually in the houses.",
  website: "https://www.chinadevelopmentbrief.org.cn/news/detail/10591.html",
  timeline: [
   { year: "1996", event: "Liao Xiaoyi founds Beijing Global Village." },
   { year: "2008", event: "12 May Wenchuan earthquake. Lehe Home begins at Daping with Red Cross funds." },
   { year: "2009–12", event: "Ecological houses, dry toilets, clinic, workshop." },
   { year: "Present", event: "A mountain village with a reconstruction method; the committee is still the government of the land." }
  ],
 },
 {
  slug: "shared-harvest",
  name: "Shared Harvest",
  location: "Mafang Village, Xiji Town, Tongzhou, Beijing (second base: Liuzhuanghu, Longwantun, Shunyi)",
  region: "Beijing, China",
  country: "China",
  foundedYear: 2012,
  foundedLabel: "May 2012 (Shi Yan; after Little Donkey 2008)",
  members: 30,
  membersLabel: "A small farm crew; hundreds of CSA member households in Beijing",
  acres: 28,
  acresLabel: "Tongzhou founding: 60 mu vegetables + 110 mu woodland (~11.3 ha / 28 acres); Shunyi and a Heilongjiang rice base sit beside it",
  legalStructure:
   "Share Harvest (Beijing) Agricultural Development Co., Ltd. (分享收获（北京）农业发展有限公司), Shi Yan’s CSA after Little Donkey. A social-enterprise company on leased peri-urban land at Mafang, Tongzhou, and a second base at Liuzhuanghu, Shunyi. CSA boxes, not household freehold. Little Donkey remains the 2008 mother farm; this is the 2012 company. You take a box.",
  legalCategory: "CSA",
  stillActive: true,
  images: [
   "/communities/shared-harvest-land.jpg",
   "/communities/shared-harvest-1.jpg",
   "/communities/shared-harvest-2.jpg",
   "/communities/shared-harvest-3.jpg"
  ],
  summary:
   "Shi Yan left Little Donkey, China’s first CSA, and in 2012 registered a company that packs vegetable boxes for Beijing kitchens. Shared Harvest is woodland pigs, a Tongzhou field, a Shunyi sister base, and later Wuchang rice. You subscribe to a season; you do not buy a house.",
  businessModel:
   "CSA vegetable shares, eggs, pork, later rice. fxshcsa.com takes the subscriptions.",
  foundingProcess:
   "Shi Yan left the 2008 Haidian CSA and in May 2012 registered Share Harvest as a Beijing agricultural company. Mafang in Tongzhou was the first ground; Shunyi followed; Wuchang rice later. She became URGENCI co-president and a Young Global Leader in 2016. A company that packs boxes.",
  governance:
   "A social-enterprise company. Shi Yan is the public farmer. CSA members buy a season. Arrange a pickup or a farm day; do not treat the beds as a park.",
  website: "https://fxshcsa.com/about/intro.html",
  timeline: [
   { year: "2008", event: "Shi Yan helps open Little Donkey, China’s first CSA." },
   { year: "2012", event: "May: Share Harvest (Beijing) Agricultural Development Co., Ltd. at Mafang, Tongzhou." },
   { year: "2010s", event: "Shunyi base; CSA membership in the hundreds." },
   { year: "2016", event: "Shi Yan named a Young Global Leader; URGENCI co-president." },
   { year: "Present", event: "Tongzhou and Shunyi still pack boxes. A company." }
  ],
 },
 {
  slug: "sun-commune",
  name: "Sun Commune",
  location: "Tingzibian 22, Shuangmiao Village, Taiyang Town, Lin’an District, Hangzhou, Zhejiang",
  region: "Zhejiang, China",
  country: "China",
  foundedYear: 2013,
  foundedLabel: "2013 site; company 11 March 2014",
  members: 20,
  membersLabel: "A host farm and education crew; guest and CSA counts unpublished as a village roll",
  acres: null,
  acresLabel: "A Shuangmiao village farm; no single published hectare count of record",
  legalStructure:
   "Hangzhou Sun Commune Rural Industry Development Co., Ltd. (杭州太阳公社农村产业发展有限公司), registered 11 March 2014 at Shuangmiao, Taiyang Town, Lin’an. Legal representative Chen Wei. A private company on village land: organic farm, CSA, nature education, guesthouse. The LINE+ “most beautiful pigsty” is architecture on a farm. You eat, stay, or take a class.",
  legalCategory: "LLC",
  stillActive: true,
  images: [
   "/communities/sun-commune-land.jpg",
   "/communities/sun-commune-1.jpg",
   "/communities/sun-commune-2.jpg",
   "/communities/sun-commune-3.jpg"
  ],
  summary:
   "Chen Wei spent 2013 looking for a site and landed on Shuangmiao, in Taiyang Town, Lin’an. Sun Commune is a rural-industry company: organic vegetables, rice, pigs in a shed the design press photographed, a guesthouse, and nature class. A commune in the name; an LLC on the papers.",
  businessModel:
   "Organic produce, CSA, nature education, a guesthouse. The pigsty is the photograph everyone wants. You book a class or a room; you do not buy a Shuangmiao lot.",
  foundingProcess:
   "Chen Wei spent 2013 choosing a site and landed on Shuangmiao in Taiyang Town. The company registered in March 2014. Organic vegetables, rice, pigs, a guesthouse, classes. Architects made a pig house the city photographed. A rural-industry LLC.",
  governance:
   "A company hosts. Guests of the pigsty are not members. Book rather than walk the pens.",
  website: "https://baike.baidu.com/item/杭州太阳公社农村产业发展有限公司/16156616",
  timeline: [
   { year: "2013", event: "Chen Wei chooses Shuangmiao, Taiyang Town, Lin’an." },
   { year: "2014", event: "11 March: Hangzhou Sun Commune Rural Industry Development Co., Ltd." },
   { year: "2010s", event: "Organic farm, CSA, nature education; the pigsty becomes a design-press photograph." },
   { year: "Present", event: "The company farm is still at Tingzibian 22. Confirm hours before you drive out from Hangzhou." }
  ],
 },
 {
  slug: "qiandao",
  name: "Qiandao Natural Farming Ecovillage",
  location: "Maoliyuan, Jiangjia Town, Chun’an County, Qiandao Lake (Longchuan Bay), Hangzhou, Zhejiang",
  region: "Zhejiang, China",
  country: "China",
  foundedYear: 2014,
  foundedLabel: "2014 (minfei / private non-enterprise)",
  members: 20,
  membersLabel: "~20 in GEN counts",
  acres: null,
  acresLabel: "A Maoliyuan hillside next to Changlie Village; no published hectare map",
  legalStructure:
   "Qiandao Lake Natural Farming Ecovillage (千岛湖自然农法生态村), a Hangzhou minfei (民办非企业, private non-enterprise unit) founded 2014 in Maoliyuan, Jiangjia, Chun’an. A Taiwanese Buddhist monk’s natural-farming and zero-waste community. GENOA lists it. You farm and sit; the hillside is not for sale.",
  legalCategory: "Registered association",
  stillActive: true,
  images: [
   "/communities/qiandao-land.jpg",
   "/communities/qiandao-1.jpg",
   "/communities/qiandao-2.jpg",
   "/communities/qiandao-3.jpg"
  ],
  summary:
   "On a Maoliyuan hillside beside Thousand-Island Lake, a Taiwanese Buddhist monk registered a private non-enterprise in 2014 and started a Fukuoka-style farm. Twenty people, zero waste, Taoist and Buddhist language at the same table as the beds.",
  businessModel:
   "Natural-farming teaching and a small community kitchen.",
  foundingProcess:
   "A Taiwanese Buddhist monk took a Chun’an hillside in 2014 and registered a private non-enterprise. Fukuoka-style farming, zero garbage, Taoist and Buddhist language. Local Futures and GENOA wrote it up. Twenty people. A practice, not a resort.",
  governance:
   "A minfei community. Visit only if they are receiving; write first.",
  website: "https://www.localfutures.org/programs/global-to-local/planet-local/eco-communities/qiandao-ecovillage/",
  timeline: [
   { year: "2014", event: "Minfei registered at Maoliyuan, Jiangjia; natural-farming community begins." },
   { year: "2010s", event: "GENOA and Local Futures list the hillside. ~20 people." },
   { year: "Present", event: "A small practice beside the reservoir. Confirm they are receiving before you go." }
  ],
 },
 {
  slug: "sunshine-ecovillage",
  name: "Sunshine Ecovillage · Sanshenggu",
  location: "Xuling Village, Jiande, Hangzhou, Zhejiang (~two hours from the city; postcode 311602)",
  region: "Zhejiang, China",
  country: "China",
  foundedYear: 2015,
  foundedLabel: "2015 (Sunshine Ecovillage Network / 三生谷 at Xuling)",
  members: 30,
  membersLabel: "~30 residents; EDE courses bring more for a week",
  acres: null,
  acresLabel: "A 1,000-year Xuling Village valley of terraces and spring water; the network sits in the village",
  legalStructure:
   "Sunshine Ecovillage Network (三生谷), based at Xuling Village, Jiande. GEN partner, UNESCO ESD working-committee partner, China Ecovillage Network. First to bring GEN’s EDE to China (six courses in five years). Local government plus a private company in the founding mix; counted as bottom-up, not one of the 107 certified top-down eco-villages. You take a course in an old village.",
  legalCategory: "Registered association",
  stillActive: true,
  images: [
   "/communities/sunshine-ecovillage-land.jpg",
   "/communities/sunshine-ecovillage-1.jpg",
   "/communities/sunshine-ecovillage-2.jpg",
   "/communities/sunshine-ecovillage-3.jpg"
  ],
  summary:
   "Two hours from Hangzhou, in a thousand-year valley of terraces and spring water, Sunshine Ecovillage Network set a base at Xuling in 2015 and brought GEN’s Ecovillage Design Education to China, six courses in five years. A school that lives in a village, not the other way around.",
  businessModel:
   "EDE and public education; a community that hosts courses. Xuling’s terraces are not for sale.",
  foundingProcess:
   "In 2015, a base in Xuling, two hours from Hangzhou. Terraces, mineral water, a village older than the republic. Sunshine Ecovillage Network set out to seed a hundred Chinese eco-villages by 2020. China’s first eco-village conference, in October 2015, sat here (Anji/Huzhou write-ups also attach the conference). The EDE is how most outsiders arrive.",
  governance:
   "A network hosts inside a living village. Xuling’s committee is not GEN. Course guests leave. Arrange a visit; do not treat the terraces as a park.",
  website: "https://ecovillage.org/map/community/sunshine-ecovillage/",
  timeline: [
   { year: "2015", event: "Sunshine Ecovillage Network founds a base at Xuling; first major Chinese eco-village conference." },
   { year: "2015–20", event: "Six EDE courses; GEN and UNESCO ESD partnership." },
   { year: "Present", event: "Still the public Chinese home for GEN education. Confirm the season before you come." }
  ],
 }
];
