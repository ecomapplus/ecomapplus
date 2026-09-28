/**
 * Official overnight booking pages on a village’s own site (or its inn / stay
 * catalog). Conservative: listed only when a stranger can actually book a bed
 * from that URL — not a volunteer year, not “write us about visiting,” not an
 * invented path. Unlisted slugs have no such page in this atlas.
 */
export type BookingStay = {
  /** Official page where a stranger can book an overnight stay. */
  url: string;
  note: string;
};

export const bookingStayTag = "Overnight booking";

export const bookingStays: Record<string, BookingStay> = {
  "hidden-villa": {
    url: "https://www.hiddenvilla.org/programs/catalog/70-hostel/region-HV/",
    note: "Hostel cabins September–May. Nine rustic cabins, 37 beds. Summer is camp, not a drop-in inn.",
  },
  "journeys-end": {
    url: "https://www.journeysendfarm.org/",
    note: "Two cabins in the farm hub, plus tent sites. Book from the farm site / Hipcamp.",
  },
  "monkton-wyld": {
    url: "https://monktonwyldcourt.co.uk/",
    note: "B&B and self-catering in the Charmouth rectory. Confirm current rooms with the Court.",
  },
  "shelburne-farms": {
    url: "https://shelburnefarms.org/",
    note: "Inn on Inn Road, in season. A night in the inn is not membership.",
  },
  "willow-witt": {
    url: "https://willowwittranch.com/",
    note: "Wall tents, tent sites, and the farmhouse. ReservationKey.",
  },
  "punta-mona": {
    url: "https://www.puntamona.org/",
    note: "Bamboo cabins and casitas. Boat from Manzanillo or a hike. Confirm current rates.",
  },
  zaytuna: {
    url: "https://www.zaytunafarm.com/",
    note: "Camping on the demonstration farm. Courses are a separate door.",
  },
  "juneberry-ridge": {
    url: "https://juneberry.com/farmstay/",
    note: "All-inclusive farm-stay weekends in wooded cabins. Scheduled weekends.",
  },
  henbant: {
    url: "https://www.henbant.org/",
    note: "Camping via Hipcamp. Cabins can be full.",
  },
  "on-the-hill": {
    url: "https://onthehill.camp/",
    note: "Family camps on Oxen Park Farm. Jotform. A camp is not a share.",
  },
  hawkwood: {
    url: "https://www.hawkwoodcollege.co.uk/venue-hire/accommodation",
    note: "27 bedrooms, up to 47 guests. B&B and venue hire. Confirm current with 01453 759034.",
  },
  "lower-shaw": {
    url: "https://www.lowershawfarm.co.uk/",
    note: "Weekend courses and family breaks on Old Shaw Lane. 01793 771080.",
  },
  "liberty-hill": {
    url: "https://www.libertyhillfarm.com/",
    note: "Seven rooms, dinner and breakfast. Two-night minimum. (802) 767-3926.",
  },
  djanbung: {
    url: "https://permaculture.com.au/",
    note: "Courses, tours, and Hipcamp. Confirm current camping with the college.",
  },
  "luna-nueva": {
    url: "https://fincalunanuevalodge.com/",
    note: "Casitas on the Chachagua regenerative farm. SimpleBooking.",
  },
  "la-loma": {
    url: "https://www.thejunglelodge.com/",
    note: "Jungle lodge on Isla Bastimentos. Boat only. Cacao tour in the stay.",
  },
  "rancho-margot": {
    url: "https://www.ranchomargot.com/",
    note: "Bungalows and bunks on Lake Arenal. Cloudbeds.",
  },
  "fat-sheep": {
    url: "https://www.fatsheepfarmvermont.com/",
    note: "Five cabins on Best Road. ThinkReservations. (802) 436-4696.",
  },
  wonderfield: {
    url: "https://wonderfieldfarm.com/stay",
    note: "Glamping tents, cottages, and the farmhouse on 66 acres.",
  },
  ballymaloe: {
    url: "https://www.ballymaloecookeryschool.ie/",
    note: "Cottages in converted farm buildings. Courses are a separate door.",
  },
  embercombe: {
    url: "https://www.embercombe.org/",
    note: "Yurts and courses on the Devon rewilding land. Confirm current stays with the charity.",
  },
  serenbe: {
    url: "https://www.serenbeinn.com/",
    note: "The Inn at Serenbe. Book.",
  },
  "vale-da-lama": {
    url: "https://www.valedalama.net/",
    note: "Camps on the Odiáxere restoration farm. Confirm current dates with Vale da Lama.",
  },
  eumelia: {
    url: "https://eumelia.com/en/",
    note: "Eco-houses and harvest stays on the Laconian olive farm.",
  },
  "playa-viva": {
    url: "https://www.playaviva.com/",
    note: "Regenerative beach lodge at Juluchuca. Farm and turtle sanctuary.",
  },
  babylonstoren: {
    url: "https://babylonstoren.com/",
    note: "Farm hotel and garden rooms at Simondium. Book.",
  },
  "la-donaira": {
    url: "https://www.ladonaira.com/",
    note: "Nine rooms on the Montecorto horse farm. Confirm current with the finca.",
  },
  "copal-tree": {
    url: "https://www.copaltreelodge.com/",
    note: "Farm lodge at Big Falls Village, Toledo. Book.",
  },
  "the-newt": {
    url: "https://thenewtinsomerset.com/",
    note: "Estate hotel, gardens, farm, and cyder at Hadspen. Book.",
  },
  kalani: {
    url: "https://kalani.com/lodging/",
    note: "Cottages on the Puna rainforest land. Book. (808) 756-9530.",
  },
  "philo-apple-farm": {
    url: "https://www.philoapplefarm.com/just-stay",
    note: "Orchard cottages. Two-night minimum. (707) 895-2333.",
  },
  milia: {
    url: "https://miliamountainretreat.reserve-online.net/",
    note: "Stone eco-rooms in the restored Vlatos settlement. Reserve-online.",
  },
  "flora-farms": {
    url: "https://stay.florafarms.com/",
    note: "Culinary Cottages and Haylofts on the 25-acre organic farm.",
  },
  "los-poblanos": {
    url: "https://lospoblanos.com/accommodations/rooms",
    note: "About 46 rooms on the lavender farm. (505) 985-5000.",
  },
  "cedar-ridge": {
    url: "https://guest.rezstream.com/search/cedar-ridge-ranch",
    note: "Yurts, safari tents, farmhouse, and cabin. (970) 963-3507.",
  },
  "leaping-lamb": {
    url: "https://www.leapinglambfarm.com/farm-stay",
    note: "Cottage on the Alsea sheep farm. ResNexus. (541) 487-4966.",
  },
  "les-amanins": {
    url: "https://www.lesamanins.com/nos-sejours-a-la-ferme/",
    note: "Farm stays, cabins, lodges, and camping. 04 75 43 75 05.",
  },
  "our-native-village": {
    url: "https://www.ournativevillage.com/",
    note: "Eco-resort rooms on the 12-acre organic farm. +91 95912 35007.",
  },
  blisswood: {
    url: "https://www.blisswood.net/",
    note: "Cabins, farmhouses, and a covered wagon on the Cat Spring ranch. ThinkReservations. (713) 301-3235.",
  },
  "dawn-ranch": {
    url: "https://dawnranch.com/stay/",
    note: "Cabins, chalets, and glamping tents on the 22-acre Russian River orchard. (707) 869-0656.",
  },
  "langdon-hall": {
    url: "https://langdonhall.ca/",
    note: "Country-house rooms among vegetable and flower gardens. 519.740.2100.",
  },
  wharekauhau: {
    url: "https://wharekauhau.co.nz/",
    note: "Cottages on the 3,000-acre Palliser Bay sheep station. Confirm current with the lodge.",
  },
  "farm-san-benito": {
    url: "https://www.thefarmatsanbenito.com/",
    note: "Villas on the Lipa organic spa farm. +63 917 572 2222.",
  },
  segera: {
    url: "https://segera.com/",
    note: "Villas in the botanical garden on the 50,000-acre Laikipia ranch. Confirm current with the retreat.",
  },
  "rock-creek-ranch": {
    url: "https://be.synxis.com/?chain=24447&hotel=101153",
    note: "Lodge rooms, homes, and canvas cabins on the 6,600-acre Philipsburg ranch. (877) 786-1545.",
  },
  "hacienda-bambusa": {
    url: "https://hotels.cloudbeds.com/reservation/9l8TOv",
    note: "Eight rooms on the Quindío working farm. +57 300 7788897.",
  },
  "satoyama-jujo": {
    url: "https://en.satoyama-jujo.com/",
    note: "Satoyama inn rooms in Minamiuonuma rice country. Confirm current with the inn.",
  },
  "vira-vira": {
    url: "https://www.andbeyond.com/our-lodges/south-america/chile/lake-district/andbeyond-vira-vira/",
    note: "Lodge suites on the Pucón working farm. Confirm current with the lodge.",
  },
  "wildflower-farms": {
    url: "https://auberge.com/wildflower-farms/",
    note: "Cabins beside the six-acre regenerative farm in Gardiner. (855) 472-3188.",
  },
  "hacienda-zuleta": {
    url: "https://zuleta.com/booking/",
    note: "Twenty-one rooms on the Angochagua working farm. Book 72 hours ahead.",
  },
  "rancho-la-puerta": {
    url: "https://rancholapuerta.com/reservations/",
    note: "Casitas on the Tecate spa ranch. Synxis. (800) 443-7565.",
  },
  "gibbs-farm": {
    url: "https://www.gibbsfarm.com/",
    note: "Seventeen cottages on the Karatu coffee farm. +255 272 970 438.",
  },
  "blackberry-farm": {
    url: "https://www.blackberryfarm.com/stay",
    note: "Cottages and houses on the Walland farm. (800) 557-8864.",
  },
  "four-seasons-chiang-mai": {
    url: "https://www.fourseasons.com/chiangmai/",
    note: "Lanna pavilions among working rice paddies in Mae Rim. +66 (53) 298 181.",
  },
  "bambu-indah": {
    url: "https://www.bambuindah.com/stay",
    note: "Javanese houses and bamboo rooms on the Sayan permaculture hillside.",
  },
  "borgo-santo-pietro": {
    url: "https://borgosantopietro.com/",
    note: "Suites on the Chiusdino organic estate. +39 0577 75 1222.",
  },
  "inkaterra-urubamba": {
    url: "https://www.inkaterra.com/inkaterra/inkaterra-hacienda-urubamba/",
    note: "Casitas beside the Sacred Valley organic farm. +51 1 610-0400.",
  },
  "chable-yucatan": {
    url: "https://yucatan.chablehotels.com/",
    note: "Jungle casitas on the Chocholá hacienda farm.",
  },
  "lodge-at-blue-sky": {
    url: "https://auberge.com/blue-sky/",
    note: "Suites on the Wanship ranch beside Gracie’s Farm. (866) 296-8998.",
  },
  "heckfield-place": {
    url: "https://www.heckfieldplace.com/",
    note: "Rooms on the Hampshire Home Farm estate. +44 (0) 118 932 6868.",
  },
  barrocal: {
    url: "https://barrocal.pt/reservations/",
    note: "Rooms and cottages on the Monsaraz working farm. +351 266 247 140.",
  },
  "brush-creek-ranch": {
    url: "https://www.brushcreekranch.com/lodge-and-spa#/booking/step-1",
    note: "Lodge cabins, homestead, and glamping on the Saratoga cattle ranch. (307) 327-5284.",
  },
  "hidden-vale": {
    url: "https://www.worldsapart.club/spicers/hidden-vale",
    note: "Cottages on the Grandchester cattle station. 1300 179 413.",
  },
  "tea-trails": {
    url: "https://www.resplendentceylon.com/resort/ceylon-tea-trails/",
    note: "Five planters' bungalows on working Dilmah tea. Confirm current with Resplendent Ceylon.",
  },
  "awasi-mendoza": {
    url: "https://awasi.com/mendoza/",
    note: "Seventeen villas in the Agrelo vineyard. +(54-9) 2615-335203.",
  },
  "winvian-farm": {
    url: "https://be.synxis.com/?Hotel=22911&Chain=8565&locale=en-US&adult=2",
    note: "Eighteen cottages on the Morris organic farm. (860) 567-9600.",
  },
  "cape-kidnappers": {
    url: "https://www.rosewoodhotels.com/en/cape-kidnappers",
    note: "Suites on the 6,000-acre Hawke's Bay sheep station. +64 6 875 1900.",
  },
  "fellah-hotel": {
    url: "https://www.fellah-hotel.com/",
    note: "Villa rooms on the Ourika farm. +212 5243-84300.",
  },
  "hacienda-altagracia": {
    url: "https://reserve.auberge.com/?chain=16237&hotel=67313&level=chain&config=initial",
    note: "Fifty casitas on the Pérez Zeledón coffee farm. (855) 812-2212.",
  },
  "white-oak-pastures": { url: "https://whiteoakpastures.com/pages/wop-lodging", note: "Four cabins, a Pond House, and downtown Bluffton houses. (229) 641-2081." },
  "isabella-freedman": { url: "https://adamah.org/isabella-freedman/", note: "Retreat lodges on the Falls Village campus. Farm-to-table kosher kitchen." },
  esalen: { url: "https://www.esalen.org/visit/accommodations-and-tuition", note: "Workshop lodging on the Big Sur cliff. (831) 667-3000. Confirm road access." },
  "sivananda-yoga-farm": { url: "https://sivanandayogafarm.org/vacation/yoga-vacation/", note: "Yoga vacation rooms and tents. (530) 272-9322." },
  yogaville: { url: "https://www.yogaville.org/visit/info/", note: "Retreat rooms at Satchidananda Ashram. (800) 858-9642." },
  laakea: { url: "https://permaculture-hawaii.com/visiting-us/", note: "Tours and farmstays. Write first. (808) 443-4076." },
  "finca-tierra": { url: "https://fincatierra.com/costa-rica-nature-retreat", note: "Eight bamboo cabinas a week on the Puerto Viejo food forest." },
  "oz-farm": { url: "https://www.ozfarm.com/the-domes", note: "Geodesic double-dome over the Garcia River, June–October. (707) 882-3046." },
  "cherokee-valley-bison": { url: "https://www.cherokeevalleybisonranch.com/agritourism", note: "22-foot tipi beside the bison pasture. (740) 403-3763." },
  "good-life-farm": { url: "https://www.fingerlakesciderhouse.com/pages/stay-overnight", note: "Walnut Grove and Maple Grove creek yurts. (607) 351-3313." },
  "zigzag-mountain-farm": { url: "https://www.zigzagmountainfarm.com/", note: "Eight yurts May 1–September 30. (503) 922-3162." },
  "blue-pepper-farm": { url: "https://www.bluepepperfarm.com/farm-stay", note: "30-foot pasture yurt with Whiteface views. (518) 524-1482." },
  "bodhi-farms": { url: "https://www.bodhi-farms.com/glamping-tipis", note: "Nine Nordic tipis May–September. (406) 201-1324." },
  "the-farm-texas": { url: "https://thefarmtexas.com/booking", note: "Three geodesic domes on the San Marcos farm." },
  "riverside-oasis": { url: "https://riversideoasisfarm.ca/yurts", note: "Three Mongolian yurts on the Welland River farm." },
  bereishis: { url: "https://bereishis.us/pages/stay", note: "One luxury yurt among the Ellijay trees. (470) 358-4075." },
  "north-star-farm": { url: "https://www.northstarfarm.com/", note: "Four geodesic domes on the blueberry farm. info@northstarfarm.com." },
  "wildcat-ridge-farm": { url: "https://www.wildcatridgefarm.com/about-us-1", note: "Yin Yurt above the peony rows. (828) 246-7542." },
  "tirrito-farm": { url: "https://www.tirritofarm.com/glamping", note: "Six geodesic glamping domes. (520) 200-7270." },
  "dancing-moose-farm": { url: "https://www.dancingmoosefarmut.com/yurt-rentals", note: "Three 20-foot overnight yurts. (801) 633-7254." },
  "come-spring-farm": { url: "https://comespringfarm.holidayfuture.com/", note: "Geodesic domes on the Union alpaca farm." },
  "howling-wolf-farm": { url: "https://www.airbnb.com/rooms/25939944", note: "Hillside yurt on the 88-acre farm. Seasonal." },
  "humble-bee-farm": { url: "https://humblebeefarm.co.uk/nomadic-yurts", note: "Four nomadic yurts on the Yorkshire Wolds farm. 01723 890437." },
  "the-tipi-ranch": { url: "https://tipis.holidayfuture.com/", note: "Canvas tipis on the 60-acre Thermopolis farm." },
  "windy-goat-acres": { url: "https://www.hipcamp.com/en-US/land/iowa-windy-goat-acres-ex9hre0r", note: "24-foot yurt. Instant book. (319) 573-0799." },
  "quarter-spring-farm": { url: "https://www.hipcamp.com/en-US/land/tennessee-quarter-spring-farm-y0zhzl6e", note: "Thunder Dome geodesic. Instant book." },
  "kaluna-farm": { url: "https://kalunafarm.com/en/wooden-yurt-at-kaluna-farm-retreat", note: "Wooden yurt with sky dome. Book Now calendar. (828) 772-4206." },
  "the-yurtfarm": { url: "https://www.hipcamp.com/en-AU/land/new-south-wales-the-yurtfarm-wz6hvowq", note: "Teachers Yurt and yurt village on 500 acres. Check dates." },
  "verdon-yourte": { url: "https://www.verdonyourte.com/reservation/", note: "Six Mongolian yurts on the Angles farm. May–September. Online reservation." },
  "mudita-camel-dairy": { url: "https://www.hipcamp.com/en-US/land/colorado-mudita-camel-s-yurt-49mxh99n", note: "Hard-sided yurt beside the camel paddock. Instant book. Two-night minimum." },
  "our-farm-strasburg": { url: "https://www.hipcamp.com/en-US/land/virginia-our-farm-in-strasburg-va-ex9h819w", note: "Full-Moon 30-foot geodesic dome. Instant book." },
  "sun-farm-hawaii": { url: "https://www.hipcamp.com/en-US/land/hawaii-sun-farm-hawaii-koko-head-1xmholl8", note: "Canvas yurts on the Koko Head farm. Instant book." },
  "blooming-bus-farms": { url: "https://www.hipcamp.com/en-US/land/michigan-blooming-bus-farms-5x5h7m1x", note: "15-foot yurts on the Niles flower farm. Instant book." },
  "creekside-tipis": { url: "https://www.hipcamp.com/en-US/land/new-mexico-creekside-glamping-tipis-on-off-grid-70-acre-working-ranch-nelh0z6z", note: "18-foot tipis on the 70-acre ranch. Instant book." },
  "andelyn-farm": { url: "https://andelynfarm.com/glamping/", note: "Luxury yurts on 100 acres. Two-night minimum. (518) 240-4104." },
  "harmony-taos": { url: "https://www.hipcamp.com/en-US/land/new-mexico-harmonytaos-regenerative-farm-2ejh0862", note: "Yurt lodging on the 4-acre permaculture farm. Check dates." },
  "living-circle-farms": { url: "https://www.hipcamp.com/en-US/land/hawaii-living-circle-farms-hawaii-mxvhqmqe", note: "Park Pick & Play Yurt. Instant book." },
  "crystal-waters": {
    url: "https://crystalwaters.org.au/booking/",
    note: "EcoPark camping, bunkhouse rooms, and a small cabin on the village’s own booking page. No cats or dogs.",
  },
  "finca-bellavista": {
    url: "https://fincabellavista.checkfront.com/reserve/",
    note: "Treehouses and cabinas, two-night minimum, no Sunday check-in. Book on the community calendar.",
  },
  glarisegg: {
    url: "https://seminare-glarisegg.ch/seminarzentrum/preise-und-infos/",
    note: "Seminar-centre rooms, dorm, and tent meadow on the castle grounds. Book lodging with the stay, not as a drop-in inn.",
  },
  "krishna-valley": {
    url: "https://vendeghaz.krisnavolgy.hu/en/",
    note: "Guesthouse rooms, dorms, and camping at New Vraja Dhama. Online booking; breakfast and an entry ticket sit in the rate.",
  },
  ulpotha: {
    url: "https://www.ulpotha.com/",
    note: "Mud-hut stays inside the booked yoga and Ayurveda fortnights, June–August and November–March. Not a drop-in inn outside those dates.",
  },
  hollyhock: {
    url: "https://hollyhock.ca/rates/",
    note: "Oceanfront rooms, cabins, and tent sites on Cortes Island, meals included. Holiday retreats and programmes book the same beds.",
  },
  "skanda-vale": {
    url: "https://www.skanda-hafan.com/",
    note: "Skanda Hafan, the ashram’s volunteer-run guesthouse twenty minutes from the temples. Ensuite rooms from £55 a night, book online. Ashram beds are the Seva door.",
  },
  "kul-kul-farm": {
    url: "https://www.kulkulfarmbali.com/stay-with-us",
    note: "Bamboo cottages and a mud yurt on the Sibang Kaja farm. Short stays when a retreat has not taken the campus.",
  },
  "ufa-fabrik": {
    url: "https://ufafabrik.de/en/14780/booking-and-directions.html",
    note: "Guesthouse on the Tempelhof courtyard: singles, doubles, and multi-bed rooms. Call +49 30 75503 170 or write gaestehaus@ufafabrik.de.",
  },
  "new-vrindaban": {
    url: "https://www.palacelodge.com/",
    note: "Palace Lodge cabins and rooms beside Prabhupada’s Palace of Gold. Book on the lodge site.",
  },
  "glen-oro-farm": {
    url: "https://www.glenoro.com/glamping",
    note: "Explorer tents and stargazer domes on the Oro-Medonte horse farm. Two-night minimum; calendar through 2026.",
  },
  wilgano: {
    url: "https://www.wilgano.com/bungalows",
    note: "Five wooden bungalows at Rvaši, Skadar Lake. Breakfast included. Book the bungalow page.",
  },
  "hallstead-farm-yurt": {
    url: "https://www.hipcamp.com/en-US/land/pennsylvania-canvas-private-glamping-yurt-9mxh8k8w",
    note: "Private yurt on a 460-acre Hallstead farm. Instant book.",
  },
  "cowabunga-yurt": {
    url: "https://www.airbnb.com/rooms/1596597558386524792",
    note: "Yurt on a Priest River farm. Highland cow, pig, and ponies.",
  },
  "mesa-verde-lavender": {
    url: "https://www.hipcamp.com/en-US/land/colorado-lavender-farm-bed-and-breakfast-r57h20v5",
    note: "Wagon on a 50-acre lavender farm. Breakfast and a farm tour.",
  },
  "forest-grove-yurt": {
    url: "https://www.hipcamp.com/en-US/land/oregon-yurt-camp-on-farm-kk9hjm69",
    note: "Yurt above the pond on a Forest Grove horse farm.",
  },
  "rooper-ranch": {
    url: "https://www.hipcamp.com/en-US/land/oregon-rooper-ranch-nelhr2dn",
    note: "Solar yurt on an organic vegetable farm outside Redmond.",
  },
  "cariad-bach": {
    url: "https://www.hipcamp.com/en-US/land/vermont-cariad-bach-yurt-6p0hxw7w",
    note: "Off-grid yurt on a Poultney sheep farm. No running water.",
  },
  "trollhaugen-farm": {
    url: "https://www.hipcamp.com/en-US/land/vermont-green-gem-yurt-farm-stay-v1qh0y6e",
    note: "Green Gem yurt on Trollhaugen Farm. Sheep, pigs, and a brook.",
  },
  "wright-homestead": {
    url: "https://www.hipcamp.com/en-US/land/maine-the-wright-homestead-zwjh11l2",
    note: "Off-grid tipi and yurt on a 28-acre Holden farm.",
  },
  "rising-sun-farm": {
    url: "https://www.hipcamp.com/en-US/land/wisconsin-rising-sun-farm-and-orchard-dw9h7n7m",
    note: "Yurt on an organic orchard and vegetable farm in River Falls.",
  },
  "harvest-moon-homestead": {
    url: "https://www.hipcamp.com/en-US/land/california-harvest-moon-homestead-zwjheojr",
    note: "12-foot yurt beside the flower fields of a Willow Creek vineyard.",
  },
  "pheasant-creek-yurt": {
    url: "https://www.hipcamp.com/en-US/land/oregon-pheasant-creek-yurt-1xmhe55e",
    note: "20-foot yurt on a 55-acre Cottage Grove farm. Sheep, a donkey, and pigs.",
  },
  "milford-farm-yurt": {
    url: "https://www.hipcamp.com/en-US/land/connecticut-glamping-yurt-on-a-farm-47rvhnjj",
    note: "Yurt on an 18-acre New Milford homestead. Goats, cows, and horses.",
  },
  "camp-farm-hope": {
    url: "https://www.hipcamp.com/en-US/land/alaska-camp-farm-1-06yhzr9d",
    note: "16-foot off-grid yurt on an organic homestead in Hope, Alaska. Bring water.",
  },
  "bristol-farm-yurt": {
    url: "https://www.hipcamp.com/en-US/land/vermont-cozy-yurt-in-the-woods-06yhoyqq",
    note: "Wood-stove yurt on a 90-acre vegetable and flower farm outside Bristol.",
  },
  "good-things-farm": {
    url: "https://www.hipcamp.com/en-US/land/california-good-things-farm-yurt-flower-farm-5x5hkxq5",
    note: "Yurt in the orchard of a Fort Bragg flower farm.",
  },
  "autenrieth-farm": {
    url: "https://www.hipcamp.com/en-US/land/michigan-autenrieth-family-farm-mxvh8eqz",
    note: "Furnished tent on a regenerative farm in Elmira. Cows, pigs, and poultry.",
  },
  "yellowstone-farm-yurt": {
    url: "https://www.hipcamp.com/en-US/land/montana-yellowstone-yurt-eco-farm-stay-5x5hvyro",
    note: "Prairie yurt outside Livingston. Emus, sheep, and chickens.",
  },
  "tip-top-orchard": {
    url: "https://www.hipcamp.com/en-US/land/north-carolina-tip-top-orchard-2ejhz8km",
    note: "Off-grid yurt on a 17-acre mountaintop above Lake Toxaway.",
  },
  "terra-cultura": {
    url: "https://www.hipcamp.com/en-US/land/california-terra-cultura-r57hw7yp",
    note: "Furnished yurts on a 5-acre educational farm in Aromas.",
  },
  "cherry-plain-farm": {
    url: "https://www.hipcamp.com/en-US/land/new-york-cherry-plain-sanctuary-farm-1-dw9h10dm",
    note: "Furnished tipi on a 150-acre horse farm near Cherry Plain State Park.",
  },
  "port-orchard-yurt": {
    url: "https://www.hipcamp.com/en-US/land/washington-secluded-forest-yurt-7rvhopw8",
    note: "24-foot yurt on a 22-acre Port Orchard farm. Goats, chickens, and ducks.",
  },
  elkenmist: {
    url: "https://www.hipcamp.com/en-US/land/washington-elkenmist-2ejh0e8n",
    note: "Yurt on a regenerative farm in Skamokawa. Sheep, orchard, and shiitake.",
  },
  "beehive-bison-yurt": {
    url: "https://www.hipcamp.com/en-US/land/nebraska-beehive-yurt-v1qhz8m0",
    note: "27-foot yurt on a 320-acre bison ranch outside Broken Bow.",
  },
  "chickamauga-farm": {
    url: "https://www.hipcamp.com/en-US/land/georgia-farm-chickamauga-battlefield-06yh8e2k",
    note: "Wood-stove yurt on a 20-acre permaculture farm beside the battlefield.",
  },
  "quail-run-yurt": {
    url: "https://www.hipcamp.com/en-US/land/tennessee-quail-run-farm-06yhr0d8",
    note: "Canvas yurt on a working farm outside Chattanooga.",
  },
  "suncatcher-homestead": {
    url: "https://www.hipcamp.com/en-US/land/oregon-suncatcher-homestead-kk9hzw98",
    note: "Yurt on a 3-acre Azalea homestead. Orchard, gardens, and a pond.",
  },
  "mariaville-goats": {
    url: "https://www.hipcamp.com/en-US/land/new-york-escape-to-mariaville-goat-farm-j29h9qyz",
    note: "Off-grid yurt on an 8-acre goat farm near Pattersonville.",
  },
  "gossman-goats": {
    url: "https://www.hipcamp.com/en-US/land/minnesota-gossman-goat-grazing-ranch-wz6he85p",
    note: "Log cabin on a 42-acre goat ranch outside Preston. More than 80 goats.",
  },
  "jubilee-homestead": {
    url: "https://www.hipcamp.com/en-US/land/minnesota-the-jubilee-homestead-wz6h6yod",
    note: "Bell tent on a 5-acre homestead. Goats, chickens, and elderberries.",
  },
  "tuttle-alpacas": {
    url: "https://www.hipcamp.com/en-US/land/oklahoma-alpaca-camping-dw9h5d09",
    note: "Bell tent on an alpaca farm in Tuttle. Herd of about seventeen.",
  },
  "new-milford-yurt": {
    url: "https://www.hipcamp.com/en-US/land/connecticut-glamping-yurt-on-a-farm-47rvhnjj",
    note: "Yurt on an 18-acre farm. Goats, cows, and horses.",
  },
  "stone-ridge-microgreens": {
    url: "https://www.hipcamp.com/en-US/land/new-york-on-farm-container-building-glamping-ozxh1yv8",
    note: "Cabin or tent on a 30-acre organic microgreen farm.",
  },
  "handsfull-farm": {
    url: "https://www.hipcamp.com/en-US/land/oregon-creek-side-retreat-handsfull-farm-xryhk8zk",
    note: "Creek-side tent on a 50-acre gorge farm. Alpacas and goats.",
  },
  "gazelle-free-range": {
    url: "https://www.hipcamp.com/en-US/land/california-free-range-farm-2ejhorz5",
    note: "Canvas tents on a certified organic farm near Mount Shasta.",
  },
  "rwh-farm": {
    url: "https://www.hipcamp.com/en-US/land/illinois-rwh-farm-1xmho5lm",
    note: "Yurt-style tent on a 150-year farm in Jo Daviess County.",
  },
  "wolftrap-farm": {
    url: "https://www.hipcamp.com/en-US/land/virginia-wolftrap-farm-qeohk7x5",
    note: "Bell tents on a 600-acre horse and cattle farm.",
  },
  "waymeet-homestead": {
    url: "https://www.hipcamp.com/en-US/land/michigan-waymeet-homestead-kk9hy0pj",
    note: "Bell tent and yurt on a 10-acre yak homestead.",
  },
  "kalamazoo-haven": {
    url: "https://www.hipcamp.com/en-US/land/michigan-kalamazoo-haven-pw1hz152",
    note: "Bell tent on a horse farm outside Kalamazoo.",
  },
  "denton-farm-tipi": {
    url: "https://www.hipcamp.com/en-US/land/texas-farm-tipi-with-sauna-mxvhy80x",
    note: "Bell tent with a sauna on a small Denton farm.",
  },
  "intrepid-acres": {
    url: "https://www.hipcamp.com/en-US/land/north-carolina-intrepid-acres-1-r57h9vre",
    note: "Farm glamping on 32 acres near Clyde. Horses, sheep, and emus.",
  },
  "featherstone-farm": {
    url: "https://www.hipcamp.com/en-US/land/kentucky-featherstone-farm-y0zh8djp",
    note: "Lotus bell tent on a 13-acre farm. Ponies, sheep, and chickens.",
  },
  "echo-valley-farm": {
    url: "https://www.hipcamp.com/en-US/land/wisconsin-echo-valley-farm-nelhl9x1",
    note: "Glamping and cabins on a 46-acre Driftless farm. Sheep and an apple orchard.",
  },
  "glynraven-gardens": {
    url: "https://www.hipcamp.com/en-US/land/california-glynraven-gardens-nelhk0on",
    note: "Lotus belle tent in the orchard of a Hopland cannabis farm.",
  },
  "kz-farm": {
    url: "https://www.hipcamp.com/en-US/land/new-york-kz-farm-in-the-adirondacks-dw9hkmpo",
    note: "Bell tent on a Westport farm. Cattle, chickens, and a garden.",
  },
  "wellton-date-farm": {
    url: "https://www.hipcamp.com/en-US/land/arizona-brewery-on-an-organic-date-farm-5x5h95m7",
    note: "Furnished bell tents under the palms of an organic date farm.",
  },
  "black-brook-acres": {
    url: "https://www.hipcamp.com/en-US/land/maine-black-brook-acres-y0zheexz",
    note: "Yurt on a farm between Pleasant Mountain and Pleasant Pond.",
  },
  "yorkie-acres": {
    url: "https://www.hipcamp.com/en-US/land/maryland-yorkie-acres-goat-farm-6p0h2z6d",
    note: "Yurt on a mountain farm. Highland cattle, sheep, and goats.",
  },
  "opulent-acres": {
    url: "https://www.hipcamp.com/en-US/land/south-dakota-opulent-acres-j29hx6r0",
    note: "Glamping units on a 60-acre farm outside Custer.",
  },
  "north-hollow-yurt": {
    url: "https://www.hipcamp.com/en-US/land/maine-old-apple-yurt-at-north-hollow-kk9hqx95",
    note: "Pine yurt in an old apple orchard outside Buckfield.",
  },
  "dancing-bee-farm": {
    url: "https://www.hipcamp.com/en-US/land/tennessee-alpaca-farm-and-forested-area-mxvh022j",
    note: "Tent sites on a 26-acre alpaca and bee farm near Bolivar.",
  },
  "sustainable-ecovillage": {
    url: "https://www.hipcamp.com/en-US/land/california-sustainable-ecovillage-4nelhey8",
    note: "Rustic beds at Gasquet: Hobbit Hole, treehouse, earthship solarium, and cabins. 4WD. A night is not membership. Work-trade is the apply page.",
  },
  "maitreya-ecovillage": {
    url: "https://www.airbnb.com/rooms/1237843626627706845",
    note: "One tiny house by the pond, hosted by Rob. A night is not a room in a shared house. Tours: maitreyamembership@yahoo.com.",
  },
  solheimar: {
    url: "https://stayinsolheimar.is/",
    note: "Brekkukot and Veghús guesthouse rooms in the village. Reserve on the guesthouse site.",
  },
  auroville: {
    url: "https://guesthouses.auroville.org/",
    note: "Accredited Auroville guesthouses. A night goes through that list, not a walk-in house.",
  },
  cloughjordan: {
    url: "https://www.djangoshostel.com/",
    note: "Django’s Eco Hostel at the entrance to the ecovillage. Private rooms and apartments.",
  },
  "torri-superiore": {
    url: "https://www.torri-superiore.org/en/holidays/booking-room/",
    note: "Eco-guesthouse rooms in the stone hamlet, half board. Closed January and February.",
  },
  "sieben-linden": {
    url: "https://siebenlinden.org/en/accomodation/",
    note: "Guest beds in the seminar houses, plus camping. A night is not only for people on a course. Call the office to book.",
  },
  arcosanti: {
    url: "https://arcosanti.org/visit/overnight-stays/",
    note: "Sky Suite, Sun Suite, and Greenhouse guest rooms. Book on the overnight page.",
  },
  "pleasant-hill-shaker": {
    url: "https://shakervillageky.org/the-inn/",
    note: "The Inn: 72 rooms, suites, and cottages in the historic buildings. Book on the village site.",
  },
  breitenbush: {
    url: "https://breitenbush.com/personal-retreats",
    note: "Personal-retreat nights: cabins, lodge rooms, yurt. Meals and the springs are included.",
  },
  govardhan: {
    url: "https://www.ecovillage.org.in/govardhan-ecovillage-rooms",
    note: "Ashram guesthouse rooms at Wada. Book through the ecovillage, not a member’s house.",
  },
  "new-lanark": {
    url: "https://newlanarkhotel.co.uk/",
    note: "New Lanark Mill Hotel in the mill. A night is the hotel, not a mill-worker’s room.",
  },
  "finca-rosa-blanca": {
    url: "https://fincarosablanca.com/en/",
    note: "Villas and suites on the coffee farm. Book on the inn site. +506 2269 9392.",
  },
  spannocchia: {
    url: "https://www.spannocchia.com/",
    note: "Farmhouse and B&B rooms on the estate. Reservations on the Tenuta site.",
  },
  zegg: {
    url: "https://www.zegg.de/en/events/accommodation-meals",
    note: "Guest dorms, a few single and double rooms, and summer tents. Book with a stay; bring a sleeping bag for the dorm.",
  },
  "brave-earth": {
    url: "https://www.braveearth.com/bookings",
    note: "Gaia Dome, Earth Tambo, jungle hut, or garden cabina. Book on the site. A night includes meals.",
  },
};

export function bookingFor(slug: string): BookingStay | undefined {
  return bookingStays[slug];
}

export function hasBookableStay(slug: string): boolean {
  return Boolean(bookingStays[slug]);
}

export function bookingHost(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export function openBookingStay(slug: string): boolean {
  const stay = bookingFor(slug);
  if (!stay || typeof window === "undefined") return false;
  window.open(stay.url, "_blank", "noopener,noreferrer");
  return true;
}

export const bookingStayCount = Object.keys(bookingStays).length;
