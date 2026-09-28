import { asiaDailyLife } from "./asia-details";
import { russiaDailyLife } from "./russia-details";
import { usaMoreDailyLife } from "./usa-details";
import { polandDailyLife } from "./poland-details";
import { volunteerBatchDailyLife } from "./volunteer-batch-details";
import { formerDailyLife } from "./former-details";
import { formerMoreDailyLife } from "./former-more-details";
import { formerClosedDailyLife } from "./former-closed-details";
import { livingMoreDailyLife } from "./living-more-details";
import { livingBatch2DailyLife } from "./living-batch2-details";
import { livingBatch3DailyLife } from "./living-batch3-details";
import { livingBatch4DailyLife } from "./living-batch4-details";
import { livingBatch5DailyLife } from "./living-batch5-details";
import { livingBatch6DailyLife } from "./living-batch6-details";
import { livingBatch7DailyLife } from "./living-batch7-details";
import { livingBatch8DailyLife } from "./living-batch8-details";
import { livingBatch9DailyLife } from "./living-batch9-details";
import { livingBatch10DailyLife } from "./living-batch10-details";
import { livingBatch11DailyLife } from "./living-batch11-details";
import { livingBatch12DailyLife } from "./living-batch12-details";
import { livingBatch13DailyLife } from "./living-batch13-details";
import { livingBatch14DailyLife } from "./living-batch14-details";
import { livingBatch15DailyLife } from "./living-batch15-details";
import { livingBatch16DailyLife } from "./living-batch16-details";
import { livingBatch17DailyLife } from "./living-batch17-details";
import { livingBatch18DailyLife } from "./living-batch18-details";
import { livingBatch19DailyLife } from "./living-batch19-details";
import { livingBatch20DailyLife } from "./living-batch20-details";
import { livingBatch21DailyLife } from "./living-batch21-details";
import { livingBatch22DailyLife } from "./living-batch22-details";
import { livingBatch23DailyLife } from "./living-batch23-details";
import { livingBatch24DailyLife } from "./living-batch24-details";
import { livingBatch25DailyLife } from "./living-batch25-details";
import { livingBatch26DailyLife } from "./living-batch26-details";
import { livingBatch27DailyLife } from "./living-batch27-details";
import { livingBatch28DailyLife } from "./living-batch28-details";
import { livingBatch29DailyLife } from "./living-batch29-details";
import { livingBatch30DailyLife } from "./living-batch30-details";
import { livingBatch31DailyLife } from "./living-batch31-details";
import { livingBatch32DailyLife } from "./living-batch32-details";
import { livingBatch33DailyLife } from "./living-batch33-details";
import { livingGlampingDailyLife } from "./living-glamping-details";
import { sustainableEcovillageDailyLife } from "./sustainable-ecovillage";
import { maitreyaEcovillageDailyLife } from "./maitreya-ecovillage";
import { knownForBySlug } from "./known-for";

export type Activity = {
 title: string;
 detail: string;
};

export type DailyLife = {
 typical: [Activity, Activity, Activity];
 unique: Activity;
};

export const dailyLifeBySlug: Record<string, DailyLife> = {
 "sabbathday-lake": {
 typical: [
 {
 title: "Herb garden and still-room",
 detail:
 "Tending culinary and medicinal herbs, drying them, and packing tins for the museum shop, a trade the Shakers have run here since the 19th century.",
 },
 {
 title: "Museum and farm chores",
 detail:
 "Opening the store, walking visitors through the historic buildings, and ordinary farm and tree-lot work on the 1,800 acres.",
 },
 {
 title: "Sunday Meeting",
 detail:
 "Public worship in the 1794 Meetinghouse. Outsiders are welcome; the three remaining covenanted Shakers still sit the benches.",
 },
 ],
 unique: {
 title: "A 19th-century herb trade still packing tins",
 detail:
 "Culinary and medicinal herbs, dried in the still-room and packed for the museum shop, a trade the Shakers have run here since the 19th century. The last active Shaker village in the world still works those rows. Organized in 1794 after a 1782–83 founding, it still holds about 1,800 acres; as of 2025 three covenanted members remain.",
 },
 },

 solheimar: {
 typical: [
 {
 title: "Greenhouse and horticulture",
 detail:
 "Geothermal-heated houses grow vegetables and ornamentals that feed the village, the café, and visitors.",
 },
 {
 title: "Craft workshops",
 detail:
 "Candle-making, weaving, ceramics, and woodwork shared by residents with and without disabilities, Sólheimar’s ordinary workday.",
 },
 {
 title: "Guesthouse and café",
 detail:
 "Checking in tour groups, plating lunch, and walking people through Sesseljuhús, the turf-roofed environmental centre.",
 },
 ],
 unique: {
 title: "Reverse integration",
 detail:
 "Sesselja Sigmundsdóttir’s rule, still in force: people without disabilities adapt to those with, not the other way around. Staff, villagers, and volunteers live and work as one village rather than a clinic with a farm attached. She pitched tents for the first five foster children on 5 July 1930 after the Church of Iceland bought Hverakot that March.",
 },
 },

 riverside: {
 typical: [
 {
 title: "Dairy and farm rounds",
 detail:
 "Milking, pasture, and the fresh-milk vending that still pays a slice of the trust’s bills on 200 hectares of Lower Moutere.",
 },
 {
 title: "Café and guest stays",
 detail:
 "Feeding visitors, turning over rooms, and keeping the gallery and cultural centre open as charitable work.",
 },
 {
 title: "Weekly consensus",
 detail:
 "Members sit a meeting that runs the farm, the roster, and the general fund. No private sale of houses or cars.",
 },
 ],
 unique: {
 title: "Pacifist common purse",
 detail:
 "Founded by Methodist conscientious objectors who spent World War II on a prison farm while their families held the land. Residents still pay rent to the trust and take a weekly allowance instead of a wage, a wartime experiment that never switched off.",
 },
 },

 koinonia: {
 typical: [
 {
 title: "Pecan packing",
 detail:
 "Sorting, roasting, and mailing pecans, still the farm’s largest earned stream, and the work that kept the place alive when local stores would not buy.",
 },
 {
 title: "Bakery and fields",
 detail:
 "Fruitcake, grapes, blueberries, vegetables, and grass-fed cattle. Interns and partners work the same rows.",
 },
 {
 title: "Hospitality and prayer",
 detail:
 "Meals with guests, internships, and a Christian common life that is quieter now than in Clarence Jordan’s day but still the daily frame.",
 },
 ],
 unique: {
 title: "Shipping the nuts out of Georgia",
 detail:
 "When the Klan dynamited the roadside stand and local buyers boycotted an interracial farm, Koinonia invented a mail-order pecan catalog, slogan: “Help us ship the nuts out of Georgia.” The same farm later built 194 no-interest houses that became Habitat for Humanity.",
 },
 },

 "camphill-copake": {
 typical: [
 {
 title: "House community breakfast",
 detail:
 "Extended-family houses where coworkers and villagers with developmental disabilities cook, eat, and start the day together, the Camphill “lifesharing” unit.",
 },
 {
 title: "Workshops and farm",
 detail:
 "Weavery, bakery, woodshop, candleshop, Healing Plant Garden, and a small dairy still milked by hand. Turtle Tree Seed packs open-pollinated seed.",
 },
 {
 title: "Village festivals",
 detail:
 "Seasonal anthroposophic festivals, music, and the coffee shop, ordinary Camphill culture.",
 },
 ],
 unique: {
 title: "Lifesharing",
 detail:
 "Coworkers move into the same houses as the people they support, with no shift-change. New York pays for disability services; the village insists the real product is a household. That model (loved by families, argued over by regulators) is what Copake is known for.",
 },
 },

 findhorn: {
 typical: [
 {
 title: "Garden attunement",
 detail:
 "A pause at the start of work in the Park’s gardens and food systems: a circle, a silence, then the day’s tasks.",
 },
 {
 title: "Guest programme",
 detail:
 "Cooking, cleaning, and hosting Experience Week and workshops, the education engine that paid the Foundation for decades.",
 },
 {
 title: "Park enterprises",
 detail:
 "Phoenix Shop, the visitor centre, and community-owned buildings now held by the Community Benefit Society after the 2023 collapse.",
 },
 ],
 unique: {
 title: "Talking to the garden",
 detail:
 "Dorothy Maclean’s conversations with plant “devas,” and the 40-pound cabbages that followed, made Findhorn world-famous and easy to mock. Residents still begin work with an attunement to the place. Whether you call it nature spirits or just paying attention, it is the Park’s original scandal and its brand.",
 },
 },

 "twin-oaks": {
 typical: [
 {
 title: "Labor credits",
 detail:
 "About 38–42 hours a week, logged as credits. Cooking, childcare, tofu, and indexing all count. Members take a small stipend (~$100/month) and everything else from the common purse.",
 },
 {
 title: "Tofu and seeds",
 detail:
 "Twin Oaks Community Foods and work with Southern Exposure Seed Exchange are the weekday factory floor.",
 },
 {
 title: "Communal meals",
 detail:
 "A dining hall, a weekly meeting, and the planner-manager committees that replaced Walden Two’s behaviorism but kept the labor system.",
 },
 ],
 unique: {
 title: "The hammock shop",
 detail:
 "For decades Twin Oaks hammocks hung in Pier 1 stores across America while the people who wove them owned nothing privately. The hammock line made a Virginia commune solvent, and made “income-sharing hippies with a factory” a national punchline and a model. Eight founders leased a 123-acre tobacco farm in 1967; members still work about 38.5–42 hours a week for housing, food, healthcare, and a small stipend.",
 },
 },

 auroville: {
 typical: [
 {
 title: "Unit work",
 detail:
 "Farms, crafts, guesthouses, schools, and services. Residents do not own plots; they work in units whose surplus stays in the Foundation’s orbit.",
 },
 {
 title: "Forest and land care",
 detail:
 "The once-barren plateau is now a planted forest. Water, paths, and the unfinished city plan are daily labor.",
 },
 {
 title: "Matrimandir concentration",
 detail:
 "Sitting in silence under the 70 cm crystal in the inner chamber, Auroville’s scheduled inner work, booked like a shift.",
 },
 ],
 unique: {
 title: "The golden globe",
 detail:
 "The Matrimandir: a gold-disc sphere in a red-earth crater, conceived as the “soul of the city.” Visitors queue for a silent minute under the crystal. It is the most photographed object in the atlas, and the most argued-over, a meditation hall that became a geopolitical fact.",
 },
 },

 "the-farm": {
 typical: [
 {
 title: "Soy dairy and gardens",
 detail:
 "Tofu, soymilk, vegetables, and the mushroom and solar shops that replaced the 1970s common purse after the Changeover.",
 },
 {
 title: "Plenty and books",
 detail:
 "Plenty International’s office work, Book Publishing Company, and the ordinary maintenance of a 1,700-acre village that is no longer a commune.",
 },
 {
 title: "Second-generation households",
 detail:
 "Private houses, a monthly meeting, and kids who grew up here running the place their parents caravanned into.",
 },
 ],
 unique: {
 title: "Spiritual midwifery",
 detail:
 "Ina May Gaskin and The Farm Midwives catching babies on a Tennessee commune, then writing the book that restarted American home birth. Women still travel here to birth and to train. It is the Farm’s most famous export, and the practice outsiders still lower their voices to ask about. About 300 people left Haight-Ashbury in a caravan of buses in 1971; the 1983 Changeover turned the commune into a cooperative village that still holds the land in common.",
 },
 },

 gaviotas: {
 typical: [
 {
 title: "Resin tapping",
 detail:
 "Walking the Caribbean pine plantation, stripping a finger of bark, and stapling a bag under the wound. The factory distills colofonia for paints and adhesives, about 80% of later revenue.",
 },
 {
 title: "Appropriate technology",
 detail:
 "Building and maintaining sleeve pumps, solar kettles, and windmills that UNDP once toured as a model for the tropics.",
 },
 {
 title: "Hospital and water",
 detail:
 "The clinic that treated combatants from every side of Colombia’s war, and the water-purification plant that replaced it when the fighting eased.",
 },
 ],
 unique: {
 title: "Planting a rainforest on savanna",
 detail:
 "Gaviotas planted millions of Caribbean pines on the barren llanos (half paid by Japanese carbon money, half by solar-heater savings) and a biodiverse understory grew in the shade. A village in a war zone reforested a landscape nobody thought would take trees, then lived off the resin.",
 },
 },

 "moora-moora": {
 typical: [
 {
 title: "Work bees",
 detail:
 "Co-op work days on the mountain: firebreaks, common buildings, and the jobs no household can do alone.",
 },
 {
 title: "Own-house life",
 detail:
 "Members own their dwellings on co-op land. Mornings look suburban-alternative: kids, wood stoves, and a drive down Mount Toolebewong.",
 },
 {
 title: "Meetings and fire prep",
 detail:
 "The co-op’s monthly business, plus the year-round work of living in the Dandenongs’ bushfire country.",
 },
 ],
 unique: {
 title: "A village that stays for the fire",
 detail:
 "Moora Moora is known among Australian alternative communities for remaining on a bushfire ridge, defending the mountain together rather than selling out after the bad seasons. Work bees double as a fire crew. The co-op is the shelter.",
 },
 },

 "east-wind": {
 typical: [
 {
 title: "Nut-butter line",
 detail:
 "Roasting, milling, and packing peanut, almond, cashew, and sesame butters. Almost every member works the plant. It is the weekday.",
 },
 {
 title: "Gardens and orchard",
 detail:
 "Food for the common kitchen on 1,000-plus Ozark acres, around the factory that pays for them.",
 },
 {
 title: "Labor meeting",
 detail:
 "Direct democracy, elected managers, and a modest stipend on top of food, shelter, and medical care.",
 },
 ],
 unique: {
 title: "Grocery-aisle communism",
 detail:
 "East Wind Nut Butters sits on ordinary American supermarket shelves while the people who make it own the factory in common and live on a commune stipend. Shoppers who have never heard of an income-sharing village have eaten its product. That split (radical kitchen, mainstream jar) is the joke and the point.",
 },
 },

 damanhur: {
 typical: [
 {
 title: "Damanhur Crea",
 detail:
 "Shops, olive oil, art, and the commercial centre that keeps euros circulating alongside the internal Credito.",
 },
 {
 title: "Nucleo life",
 detail:
 "Small residential houses (nuclei) with their own kitchens and chores, federated into the larger Damanhur.",
 },
 {
 title: "Courses and guests",
 detail:
 "Teaching, temple visits, and the New Life programmes that bring outsiders in for a month.",
 },
 ],
 unique: {
 title: "Digging a temple in secret",
 detail:
 "From 1978, Damanhurians excavated the Temples of Humankind under a mountain (in secret) until the Italian authorities found them in 1992. Hand-carved halls 100 feet down, later a Guinness record. The Federation is still best known for the thing it tried not to show anyone.",
 },
 },

 svanholm: {
 typical: [
 {
 title: "Organic estate work",
 detail:
 "Field crops, dairy, and forestry on 414 hectares. Svanholm farms at a scale most ecovillages only talk about.",
 },
 {
 title: "Outside jobs, common purse",
 detail:
 "Members who work in Copenhagen put their wages in; the collective pays everyone the same living. Cooking and childcare are on the roster.",
 },
 {
 title: "Common dinner",
 detail:
 "A manor kitchen feeding about a hundred adults and their children, the daily proof that the 1978 purchase still holds.",
 },
 ],
 unique: {
 title: "Buying a manor with a hat",
 detail:
 "In 1978 about a hundred adults pooled savings and bank loans (30 million DKK) and bought Svanholm Gods. A hippie collective taking a Danish estate, then income-sharing on it for fifty years, is still the story other Nordic communes measure themselves against. A 1977 newspaper ad for a storkollektiv drew the group; the manor is mentioned as early as 1346, rebuilt in 1744.",
 },
 },

 lakabe: {
 typical: [
 {
 title: "Bakery and cheese",
 detail:
 "The village oven and dairy that feed residents and sell to the valley. Work starts early.",
 },
 {
 title: "Rebuilding stone",
 detail:
 "Forty-five years on, people are still pulling houses out of ruin: lime, timber, and the next roof.",
 },
 {
 title: "Assemblies",
 detail:
 "The concejo’s open meeting. Title stayed with Navarre; the village governs itself as if it had always been theirs.",
 },
 ],
 unique: {
 title: "Occupying a dead village",
 detail:
 "In 1980 a handful of people walked into an abandoned Navarre hamlet and squatted it. No purchase price. They rebuilt the ruins, fought eviction, and became the template for Spain’s recovered villages. Lakabe’s founding activity was trespass that turned into a town.",
 },
 },

 "kibbutz-lotan": {
 typical: [
 {
 title: "Date work",
 detail:
 "Irrigation, harvest, and packing in the Arava heat, the classic kibbutz agricultural day.",
 },
 {
 title: "Center for Creative Ecology",
 detail:
 "Teaching permaculture, mud building, and desert ecology to course groups who live on campus for weeks.",
 },
 {
 title: "Kibbutz dining hall",
 detail:
 "A Reform Jewish communal table in a landscape that hits 45 °C. Shabbat is still a stop in the week.",
 },
 ],
 unique: {
 title: "Mud buildings in the Arava",
 detail:
 "Lotan is known in the desert for earthbag, straw, and mud classrooms and EcoCampus huts that look like they grew out of the wadi. Students build them in the heat as the course. The architecture is the pedagogy.",
 },
 },

 lebensgarten: {
 typical: [
 {
 title: "Seminar hosting",
 detail:
 "Lebensgarten as a learning place: cooking for courses, turning over rooms, and teaching ecology in the old settlement.",
 },
 {
 title: "House retrofit",
 detail:
 "Passive-house and energy work on former munitions-worker flats that residents bought and keep upgrading.",
 },
 {
 title: "Neighbourhood life",
 detail:
 "A village of owners more than a commune: gardens, kids, and the e.V. that holds the common ground.",
 },
 ],
 unique: {
 title: "An eco-village in a munitions works",
 detail:
 "Lebensgarten occupies a Third Reich munitions-worker settlement. The fact is the site: people bought the houses of a weapons factory and turned the grid into a solar neighbourhood. The conversion is the activity, living inside the contradiction on purpose.",
 },
 },

 niederkaufungen: {
 typical: [
 {
 title: "Kommune businesses",
 detail:
 "Internal collectives (building, food, workshops) trading as the factory site’s weekday economy.",
 },
 {
 title: "Outside jobs, inside purse",
 detail:
 "Members with city wages pay them in. Cooking, kids, and maintenance are on the common roster.",
 },
 {
 title: "Plenum",
 detail:
 "The political meeting. Niederkaufungen is a Kommune: decisions are collective and long.",
 },
 ],
 unique: {
 title: "The Einlage",
 detail:
 "You join by putting a capital contribution (Einlage) on the table and then your entire wage. A former factory, bought not granted, run as a left political household. Outsiders call it extreme; the Kommune calls it ordinary solidarity. That all-in joining ritual is what they are known for.",
 },
 },

 "crystal-waters": {
 typical: [
 {
 title: "Lot and garden",
 detail:
 "Household permaculture on a freehold homesite: food forest, tanks, and the house you financed yourself.",
 },
 {
 title: "Body corporate",
 detail:
 "Ranger work, common-land care, and the committee that runs 80% of the 640 acres kept undeveloped.",
 },
 {
 title: "Courses and visitors",
 detail:
 "Permaculture Design Courses and farm-gate life, Crystal Waters as demonstration more than commune.",
 },
 ],
 unique: {
 title: "The first permaculture village",
 detail:
 "In 1988 Max Lindegger and partners sold 83 lots as a purpose-designed permaculture settlement, and won the 1996 World Habitat Award for it. Entirely self-funded. The move was treating an ecovillage as a rural subdivision that actually kept the bush. On the Conondale side of the Sunshine Coast hinterland, Max Lindegger’s garden is still a pilgrimage stop.",
 },
 },

 "ecovillage-ithaca": {
 typical: [
 {
 title: "Common dinner",
 detail:
 "Each neighborhood cooks several nights a week. You eat with the people who share your pedestrian spine, then walk home.",
 },
 {
 title: "West Haven farm",
 detail:
 "CSA work, the 10-acre organic farm, and the open land that sits in a Finger Lakes Land Trust easement.",
 },
 {
 title: "Cohousing chores",
 detail:
 "Work hours on buildings, kids, and committees. Three neighborhoods (FROG, SONG, TREE) on one hill, each with its own kitchen.",
 },
 ],
 unique: {
 title: "Three villages on one hill",
 detail:
 "Ithaca stacked three cohousing neighborhoods (FROG, SONG, and TREE) on a single 175-acre site so that 100 households share farms and paths but cook in three dining rooms. It is the American cohousing project other groups still visit to copy, and to argue with.",
 },
 },

 zegg: {
 typical: [
 {
 title: "Seminar kitchen",
 detail:
 "Cooking and hosting the courses and festivals that pay for a former Stasi training ground.",
 },
 {
 title: "Garden and wetland",
 detail:
 "Site care, the constructed wetland, and woodchip heat, the ecological plant behind the teaching.",
 },
 {
 title: "Sociocratic circles",
 detail:
 "Team meetings, a management circle, and a Visionsrat. Community work is expected, not optional.",
 },
 ],
 unique: {
 title: "The Forum",
 detail:
 "ZEGG’s social technology: a person stands in a circle and speaks an unfiltered inner life (desire, jealousy, rage) while the others witness without debate. Born from the same German experiments that later founded Tamera, the Forum is still taught here. Visitors come for it. Neighbours have opinions.",
 },
 },

 "los-angeles-eco-village": {
 typical: [
 {
 title: "Bike kitchen",
 detail:
 "Fixing bikes at Relámpago / the Bicycle Kitchen lineage, the most public daily work on the two blocks.",
 },
 {
 title: "Co-op chores",
 detail:
 "Limited-equity building work, courtyard gardens, and the meetings of Urban Soil–Tierra Urbana.",
 },
 {
 title: "Hub and workshops",
 detail:
 "Energy-outreach nights, tours, and the Community Hub in the old auto shop at First and Bimini.",
 },
 ],
 unique: {
 title: "Car-free Koreatown",
 detail:
 "Two blocks next to a subway trying to live as if Los Angeles were not built for cars: no household parking culture, a bike kitchen, and an Ecological Revolving Loan Fund of neighbour-loans.",
 },
 },

 earthaven: {
 typical: [
 {
 title: "Natural building",
 detail:
 "Cob, timber, and site work. Houses are cash or personal loans, banks generally will not mortgage here.",
 },
 {
 title: "Council and neighborhood",
 detail:
 "Earthaven Community Association business, plus the smaller neighborhood that holds your site lease.",
 },
 {
 title: "Forest and garden",
 detail:
 "Permaculture on a 329-acre mountain, off-grid power, and the common kitchen when one is running.",
 },
 ],
 unique: {
 title: "Building where banks won’t lend",
 detail:
 "Earthaven is known in American ecovillage circles for a mountain of handmade houses that conventional lenders will not touch. You lease a site, pay $3,900 plus $6,500 to join, and build with cash, friends, and whatever the neighborhood allows. After Hurricane Helene, NPR’s Climate Solutions Week used the village as a case for neighbor-knowing-neighbor resilience.",
 },
 },

 konohana: {
 typical: [
 {
 title: "Field and harvest",
 detail:
 "Pesticide-free vegetables, rice, and fruit (they report growing on the order of 99% of what they eat) then the daily farmers’ market.",
 },
 {
 title: "One kitchen",
 detail:
 "A hundred people eating as one household. Tofu, miso, soy sauce, bakery, and the two cafés (including Lotus Land) are the same wallet.",
 },
 {
 title: "Morning meeting",
 detail:
 "Daily consensus as a family, with Isadon as spiritual elder. A household that scaled.",
 },
 ],
 unique: {
 title: "One wallet, one family",
 detail:
 "About a hundred unrelated people live as a single family and pool every yen. Japanese labor law would not accept a communal employer, so each member is a sole proprietor who still puts the money in. Outsiders reach for the word “cult”. The activity is the total pool, including the spiritual agriculture talks that come with dinner.",
 },
 },

 oaec: {
 typical: [
 {
 title: "Courses and retreats",
 detail:
 "Teaching permaculture, water, and organizing to the groups who sleep in the former commune’s rooms.",
 },
 {
 title: "Mother Garden and nursery",
 detail:
 "Seed, scion, and the plant nursery that is both research plot and earned income.",
 },
 {
 title: "Wildlands work",
 detail:
 "Fire-resilience, creek, and forest on the 80 acres, the Fuels to Flows work that now draws public grants.",
 },
 ],
 unique: {
 title: "A closed household that teaches the world",
 detail:
 "Seven friends’ LLC (Sowing Circle) owns the land; a 501(c)(3) runs a famous education centre on it; almost nobody new can move in. OAEC is known among California land projects for that split: a village that stopped being a village and became a school, on purpose, with the original households still in the houses.",
 },
 },

 tamera: {
 typical: [
 {
 title: "Water landscape",
 detail:
 "Care of the retention lakes, planting, and the solar and ecology research that sit on former dry hills.",
 },
 {
 title: "Seminar kitchen",
 detail:
 "Feeding guests and students. Courses and donations are how the three legal bodies turn over about €1.2 million a year.",
 },
 {
 title: "Peace research",
 detail:
 "Institute for Global Peacework, study, and the community forums that descended from the Black Forest experiment.",
 },
 ],
 unique: {
 title: "Love as a political practice",
 detail:
 "Tamera’s Love School trains jealousy, truth, and non-monogamy as peace work, not as lifestyle. The same German experiment that produced ZEGG’s Forum came here and doubled down. Visitors come for the lakes and stay for an argument about whether a village can end war by telling the truth about desire. That is the curriculum. They bought undeveloped Monte do Cerro in 1995 with private donations; the name Tamera came to Lichtenfels at a spring, an old word for land of water.",
 },
 },

 "dancing-rabbit": {
 typical: [
 {
 title: "Natural building",
 detail:
 "Straw, cob, and salvage on leased plots. You own the house; the land trust owns the land.",
 },
 {
 title: "Village systems",
 detail:
 "The car co-op, common meals when they happen, and the Conservancy’s habitat work on the prairie.",
 },
 {
 title: "Visitor program",
 detail:
 "Hosting the two-week Sustainable Living program that is how most people first land in Rutledge.",
 },
 ],
 unique: {
 title: "The no-fossil-fuel covenant",
 detail:
 "Dancing Rabbit is known for asking members to live without personal cars and with an internal currency (the ELM), on a covenant that treats fossil energy as a moral problem. Prairie cob houses, a vehicle co-op, and a reputation for being the strictest low-impact village in the Midwest, admired, and joked about, in equal measure.",
 },
 },

 "sieben-linden": {
 typical: [
 {
 title: "Straw-bale building",
 detail:
 "Construction and repair of the houses the housing co-op (WoGe) owns. Labor hours are part of the buy-in.",
 },
 {
 title: "Seminar centre",
 detail:
 "Cooking and teaching. Visitors are a financial pillar; the village is a showcase as much as a home.",
 },
 {
 title: "Commons round",
 detail:
 "SiGe’s daily tasks, the ~€120 monthly levy, and the kitchen that feeds ~145 people in the Altmark.",
 },
 ],
 unique: {
 title: "A straw-bale town",
 detail:
 "Sieben Linden built a village of load-bearing straw-bale houses in former East Germany and cut its ecological footprint to about a quarter of the German average. World Habitat noticed. The image is a thatched, straw-walled street that looks medieval and meets code, a German eco-village that actually looks like one. Talks began in 1989; the housing cooperative formed in 1993; they bought the site in 1997.",
 },
 },

 cloughjordan: {
 typical: [
 {
 title: "Community farm",
 detail:
 "CSA shifts on the village farm: beds, harvest, and the weekly veg that members eat.",
 },
 {
 title: "Eco-house life",
 detail:
 "Self-built or architect-built homes on serviced plots, heated by the village’s biomass district system.",
 },
 {
 title: "Education and WeCreate",
 detail:
 "Climate-education programmes, the enterprise centre, and the work of being Ireland’s demonstration village.",
 },
 ],
 unique: {
 title: "A boiler for the whole village",
 detail:
 "Cloughjordan put in Ireland’s largest renewable district-heating system for an eco-village (a wood-chip network that feeds the houses) then spent a decade as the country’s proof that a purpose-built green village could exist outside Dublin. The boiler house is the pilgrimage stop. Empty plots next door are the argument.",
 },
 },

 currumbin: {
 typical: [
 {
 title: "Rainwater house",
 detail:
 "Living on tanks and a recycled-sewerage system under a strict building code. Many households report little or no grid-electricity bill.",
 },
 {
 title: "Body corporate",
 detail:
 "Principal and subsidiary committees, design review, and the RRR Centre. Gold Coast hinterland life with extra by-laws.",
 },
 {
 title: "Village centre",
 detail:
 "GROUND produce, the café, the bath house, and the shared garden that supplies OzHarvest.",
 },
 ],
 unique: {
 title: "Selling the view to keep the bush",
 detail:
 "A developer sold 147 freehold lots on the Gold Coast hinterland and locked 80% of 270 acres as open space. Premium prices paid for the rainforest. Currumbin is, among purists, the eco-village that is also a real-estate product, and among planners as the one that actually kept the trees.",
 },
 },

 "longo-mai": {
 typical: [
 {
 title: "Coffee, cane, and the milpa",
 detail:
 "Cassava, beans, corn, rice, plantain, and banana for the table; coffee and sugarcane for the market. Milk, eggs, and fruit stay close to the finca.",
 },
 {
 title: "Committees",
 detail:
 "Infrastructure, visitors, and UNAPROA’s environmental work are run by village committees.",
 },
 {
 title: "Hosting researchers and volunteers",
 detail:
 "People from European Longo Maï and from everywhere else stay weeks to a year, work the land, and learn communitarian life.",
 },
 ],
 unique: {
 title: "The pineapple wall",
 detail:
 "Longo Maï is known in Costa Rica as the Salvadoran cooperative that stood in front of the country’s pineapple monoculture, defending water and food on 2,200 acres while Dole-scale plantations tried to expand. Pupusas in a UN-born village is the everyday face of that fight.",
 },
 },

 "maya-mountain": {
 typical: [
 {
 title: "Cacao under the canopy",
 detail:
 "Fine-flavor cacao and coffee in a 25-acre multi-strata food forest of fruit, legume, medicinal, and timber trees.",
 },
 {
 title: "Intern workday",
 detail:
 "Farm systems, solar, animals, and the kitchen. Interns, students, and visiting groups are the extra hands.",
 },
 {
 title: "Biochar and carbon farming",
 detail:
 "Pyrolized biomass back into the hillside soils above the Columbia River, climate work as farm chore.",
 },
 ],
 unique: {
 title: "A chocolate company as the middle chapter",
 detail:
 "Christopher Nesbitt spent 1997–2004 at Green & Black’s, then registered the hillside as a Belizean NGO. Maya Mountain is, among cacao people, the farm that treated a British chocolate job as research for a 70-acre forest.",
 },
 },

 pachamama: {
 typical: [
 {
 title: "Meditation hall",
 detail:
 "Silent sittings and Osho-inspired practice in a hall the village built on former cattle pasture.",
 },
 {
 title: "Retreat kitchen and lodging",
 detail:
 "Feeding and housing visitors who come for workshops and silence. Income is supposed to go back into the land.",
 },
 {
 title: "Reforestation",
 detail:
 "Twenty-five years of planting a Guanacaste valley that arrived as grassland. Residents still plant.",
 },
 ],
 unique: {
 title: "A guru and a 500-acre garden",
 detail:
 "PachaMama is, among Costa Rica expats, the spiritual eco-village you either melt into or bounce off, Tyohar’s transmission. People come for silence and some never book the return flight. Tyohar founded it in 1999 with fellow travellers on a Guanacaste cattle farm; about 500 acres have been reforested since.",
 },
 },

 imap: {
 typical: [
 {
 title: "Seed bank",
 detail:
 "Saving, cataloguing, and handing out native Mesoamerican seed on the south shore of Atitlán.",
 },
 {
 title: "Farmer workshops",
 detail:
 "Agroecology, Maya cosmovision, and food sovereignty for smallholders from the lake basin and beyond.",
 },
 {
 title: "Amaranth kitchen",
 detail:
 "Cooking and teaching the crop IMAP uses against malnutrition, recipes as extension work.",
 },
 ],
 unique: {
 title: "Seed as post-war repair",
 detail:
 "IMAP is the Kaqchikel institute that treated native seed as the reconstruction project after 36 years of war. More than 10,000 farmers trained.",
 },
 },

 "rancho-mastatal": {
 typical: [
 {
 title: "Natural building",
 detail:
 "Bamboo, earth, lime, and timber, lodges and classrooms the ranch is known for teaching.",
 },
 {
 title: "Farm-to-table kitchen",
 detail:
 "Ferments, the garden, and meals for course weeks. The kitchen is a classroom.",
 },
 {
 title: "Refuge trails",
 detail:
 "More than 10 kilometres of trail, rivers, and swimming holes on a private wildlife refuge against La Cangreja.",
 },
 ],
 unique: {
 title: "The bamboo cathedral in a village of 200",
 detail:
 "Rancho Mastatal is, among natural builders, the Peace Corps couple who put a world-class earthen-and-bamboo campus in Mastatal (a tiny Puriscal village) and made the PDC pilgrimage go through a dirt road. They founded it in 2001; about 10 acres are in active farm and housing, the rest of 300-plus acres is a private wildlife refuge against La Cangreja.",
 },
 },

 "bona-fide": {
 typical: [
 {
 title: "Multi-strata farm rounds",
 detail:
 "Cacao, coconut, water systems, and the 26-acre food forest on volcanic soil.",
 },
 {
 title: "Intern projects",
 detail:
 "Each intern takes a farm system for three months, the teaching method.",
 },
 {
 title: "Spanish and Balgüe",
 detail:
 "Weekly language lessons and the walk into the island town. Ometepe life.",
 },
 ],
 unique: {
 title: "Permaculture between two volcanoes",
 detail:
 "Bona Fide is the U.S. charity farm on Ometepe that ran some of Nicaragua’s first PDCs in the shadow of Concepción. Interns come for cacao and leave talking about the ferry, the volcano, and three months without a lot to buy.",
 },
 },

 ipes: {
 typical: [
 {
 title: "Hillside demonstration",
 detail:
 "A stony hectare above Suchitoto: compost, contour, thatch, and the crops that still grow on war-tired soil.",
 },
 {
 title: "Campesino-a-campesino visits",
 detail:
 "Farmers teaching farmers in their own milpas, the institute’s real campus is other people’s land.",
 },
 {
 title: "Volunteer Spanish and outreach",
 detail:
 "A handful of paid staff and a larger volunteer bench doing communications, workshops, and field days.",
 },
 ],
 unique: {
 title: "Permaculture after the death squads",
 detail:
 "IPES is the institute Juan Rojas built after studying with Bill Mollison in Australian exile, a campesino network on a hectare, in a town that organized through a civil war. The thatch roof is the monument.",
 },
 },

 "finca-bellavista": {
 typical: [
 {
 title: "Canopy walkways",
 detail:
 "Moving between treehouses without coming down to a suburban street. The circulation is the architecture.",
 },
 {
 title: "Building in the trees",
 detail:
 "Solar, local materials, and the Community Guidelines. Parcels of a quarter-acre to three acres, garden or riverfront or forest.",
 },
 {
 title: "Rainforest chores",
 detail:
 "Trails, wildlife, two whitewater rivers, and the organic gardens that feed a canopy neighborhood.",
 },
 ],
 unique: {
 title: "The timber sale that became a treehouse town",
 detail:
 "Finca Bellavista is the couple who bought 62 acres headed for the mill and invented a freehold treehouse HOA. Purists call it real estate in the canopy. Owners call it the only way the trees are still standing. Both are true. Walkways still thread the octagon houses they put up after walking that mill sale.",
 },
 },

 "la-ecovilla": {
 typical: [
 {
 title: "Food forest and geodesic commons",
 detail:
 "Shared gardens, domes, and the Machuca river edge that 48 families actually use, not just photograph.",
 },
 {
 title: "Condominio life",
 detail:
 "Lot, house, reglamento, assembly. Costa Rican property law with extra fruit trees.",
 },
 {
 title: "Neighbors from everywhere",
 detail:
 "Forty-eight families, many nationalities, kids in the paths. The original 42 acres are a small town now.",
 },
 ],
 unique: {
 title: "Zac Efron came to dinner",
 detail:
 "La Ecovilla is the Costa Rican condominio Netflix put on Down to Earth. Critics say it is eco-real-estate with a geodesic hat. The village says 48 families turned a cattle farm into an edible forest and then had to build a second one (San Mateo, 220 hectares) because the first filled up. The cameras did not buy the lots. The lots bought the cameras.",
 },
 },

 "brave-earth": {
 typical: [
 {
 title: "Gaia Domes and tambos",
 detail:
 "Checking in retreat guests, turning over jungle huts, and feeding people who came for healing arts.",
 },
 {
 title: "Regenerative farm",
 detail:
 "The 80-acre commons between Arenal and the Children’s Eternal Rainforest, food for the kitchen and for Micelia’s mutual aid.",
 },
 {
 title: "Shareholder village",
 detail:
 "Private living structures on communal land. Up to 40 shares; not everyone who stays a week is building a house.",
 },
 ],
 unique: {
 title: "A commons on Maleku land, with a U.S. fiscal sponsor",
 detail:
 "Brave Earth is the Arenal healing-arts lab that will not take volunteers, sells shares not lots, and routes U.S. donations through Amigos de Costa Rica while naming the Maleku as the people of the territory. Cacao ceremonies in a Gaia Dome sit on that legal sandwich. Ma Earth’s $32,602 is the public receipt.",
 },
 },

 lama: {
 typical: [
 {
 title: "Kitchen and dome",
 detail:
 "The octagonal kitchen and the dome complex that survived the 1996 fire are still the social heart, meals, practice, and the next visitor.",
 },
 {
 title: "Land care at 8,600 feet",
 detail:
 "A thin growing season beside Carson National Forest. Firewood, water, snow, and the rebuild that never really ended after the Hondo Fire.",
 },
 {
 title: "Retreats and summer stewards",
 detail:
 "Hosting community camp and residencies. There are no permanent members; a circle of people who are here now holds the mountain.",
 },
 ],
 unique: {
 title: "Be Here Now, then the fire",
 detail:
 "Lama is the mountain where Ram Dass finished Be Here Now, and the community the 5 May 1996 Hondo Fire almost erased, taking about 20 of 29 buildings and leaving the dome and kitchen as the miracle. Prayer flags hang on a burn scar. The 501(c)(3) never sold lots to pay for the rebuild.",
 },
 },

 arcosanti: {
 typical: [
 {
 title: "Foundry and ceramics apse",
 detail:
 "Pouring bronze and pulling ceramic bells in Soleri’s apses. Every bell sold is a day of the Foundation’s budget.",
 },
 {
 title: "Tours on the mesa",
 detail:
 "Walking visitors through concrete vaults, guest rooms, and the unfinished town that still occupies only about 25 acres of a 4,060-acre preserve.",
 },
 {
 title: "Workshop and maintenance",
 detail:
 "The arcology was built by students with their hands. Keeping silt-cast concrete alive in the high desert is the ordinary workday.",
 },
 ],
 unique: {
 title: "A city that refused to sprawl",
 detail:
 "Arcosanti is Paolo Soleri’s arcology prototype: a compact city for thousands that never grew past a few dozen residents on a mesa, funded by windbells, while Phoenix sprawled 70 miles south. Critics call it a beautiful fragment. The Foundation still gives daily tours of the fragment.",
 },
 },

 "alpha-farm": {
 typical: [
 {
 title: "Garden and farm rounds",
 detail:
 "A 280-acre Coast Range farm that still feeds a common table. Rural, wet, and an hour from the grocery.",
 },
 {
 title: "Common purse",
 detail:
 "Work on the land, a mail route, a stipend. Outside earnings come home to the cooperative. No private house sale.",
 },
 {
 title: "Quaker consensus",
 detail:
 "Meetings in the Caroline Estes style: sit it out until the sense of the meeting appears. Peacemaking is the bylaw.",
 },
 ],
 unique: {
 title: "The revelation in Philadelphia",
 detail:
 "Alpha is the Oregon commune that started because Caroline Estes heard a call in a Quaker meeting in 1971, put up most of the money, and ran consensus until she died in hospice at the farm in 2022. The Alpha-Bit Café in Mapleton was the public myth. The farm is still there. She is not.",
 },
 },

 sirius: {
 typical: [
 {
 title: "Gardens and oak forest",
 detail:
 "Food and firewood on 90 acres of Shutesbury hilltown. Berry harvest, woodpile, and a handful of households in a corner of the woods.",
 },
 {
 title: "Attunement",
 detail:
 "Meditative consensus in the Findhorn lineage (a stone circle, a labyrinth, a Celtic cross) before the agenda.",
 },
 {
 title: "Interns and exploring members",
 detail:
 "A dormitory for the season, a path from visitor to resident, and a community center that has seen tens of thousands of people since 1978.",
 },
 ],
 unique: {
 title: "Findhorn in Massachusetts",
 detail:
 "Sirius is the American Findhorn: Corinne McLaughlin and Gordon Davidson came home from Scotland in 1978 to plant attunement, a stone circle, and a 501(c)(3) in a hilltown, and then just… stayed. A quiet 90-acre rebuttal to the idea that New Age communities cannot last. They took 90 acres of oak forest in Shutesbury at about 1,200 feet.",
 },
 },

 huehuecoyotl: {
 typical: [
 {
 title: "Five acres in the Tepozteco",
 detail:
 "A small mountain village above Tepoztlán, gardens, buildings, and a hall with murals.",
 },
 {
 title: "Programs and guests",
 detail:
 "Courses, gatherings, and visiting groups in the bioregional and GEN circuit. Culture is the cash, not cheese.",
 },
 {
 title: "Asociación life",
 detail:
 "About twenty people deciding together. No lot assembly. No ejido meeting. A household-scale village.",
 },
 ],
 unique: {
 title: "The old coyote and the elephants",
 detail:
 "Huehuecoyotl is Mexico’s first ecovillage, named for a Nahuatl trickster and founded by Alberto Ruz Buenfil (El Coyote) and the Illuminated Elephants theatre commune after years on the road. GEN’s Latin American origin story starts on five acres. Ruz died in 2023. The coyote name stayed.",
 },
 },

 "cite-ecologique": {
 typical: [
 {
 title: "The school",
 detail:
 "Kindergarten through graduation on the same 700 acres where people live. Children are the reason the village exists.",
 },
 {
 title: "Farm and greenhouses",
 detail:
 "About 100 acres in crops, chemical-free for more than 35 years, plus maple and a boutique of what the land and Kheops make.",
 },
 {
 title: "Enterprise shifts",
 detail:
 "Kheops, RespecTerre, the farm, a hundred people employed inside the village’s own businesses rather than commuting to Victoriaville.",
 },
 ],
 unique: {
 title: "A school with a bankruptcy in the files",
 detail:
 "The Cité is the Quebec village that put a school at the centre, survived a 1990 bankruptcy of its first legal shell, shook off 1980s cult-scare headlines (investigations found no irregularities), and kept Kheops and the farm going. Critics still google the old name. The greenhouses are still there.",
 },
 },

 acorn: {
 typical: [
 {
 title: "Seed packing",
 detail:
 "Southern Exposure Seed Exchange on the dining-room table and in the packing room, heirlooms for the Southeast, the reason the common purse works.",
 },
 {
 title: "Organic fields",
 detail:
 "About 50 of 72 acres certified organic: food for the table and seed for the catalogue. Louisa County dirt.",
 },
 {
 title: "Income-sharing meetings",
 detail:
 "Labor credits, consensus, FEC culture. One bank account. Twenty-odd people who mean it.",
 },
 ],
 unique: {
 title: "The commune that sells seed to the world",
 detail:
 "Acorn is the Twin Oaks daughter that took over Southern Exposure Seed Exchange in 1999 and turned an income-sharing farm into one of the better-known cooperative seed houses in the United States. Gardeners who have never heard of the FEC have the catalogue on the fridge.",
 },
 },

 "las-canadas": {
 typical: [
 {
 title: "Milpa and dairy",
 detail:
 "Maize, beans, cloud-forest cheese, and silvopasture where cattle used to be the whole story.",
 },
 {
 title: "Seed bank and nursery",
 detail:
 "A living catalogue of the canopy and the garden. Students leave with more than notes.",
 },
 {
 title: "Courses in the cloud forest",
 detail:
 "Permaculture, agroecology, bioconstruction. The ranch teaches so the ranch can stay out of the next pasture conversion.",
 },
 ],
 unique: {
 title: "Cattle ranch, then 50,000 trees",
 detail:
 "Las Cañadas is the Veracruz inheritance that refused to stay a cattle ranch: Ricardo Romero planted 50,000 native trees in 1995 and built a cooperativa under one of Mexico’s rarest canopies. They make cheese under a cloud-forest canopy. The 306 hectares are the project.",
 },
 },

 "our-ecovillage": {
 typical: [
 {
 title: "Cob and gardens",
 detail:
 "Natural-building sites, a labyrinth, food, and the 25-acre demonstration that students came to see.",
 },
 {
 title: "PDC and internships",
 detail:
 "Permaculture design courses and seasonal residents. Teaching is the weekday.",
 },
 {
 title: "Sociocracy",
 detail:
 "Circles. A small adult membership deciding how a community-services co-op runs.",
 },
 ],
 unique: {
 title: "One United Resource",
 detail:
 "O.U.R. is the Shawnigan Lake co-op that people mix up with Nova Scotia’s Treehouse Village Ecohousing. It is not that. It is a 25-acre sociocratic community-services cooperative on unceded Cowichan land that teaches cob and PDC instead of selling lots.",
 },
 },

 "whole-village": {
 typical: [
 {
 title: "Greenhaven kitchen",
 detail:
 "Eleven families sharing one 15,000 sq ft house: a common kitchen, private quarters, and the ordinary friction of that idea.",
 },
 {
 title: "CSA harvest",
 detail:
 "Young farmers on 191 acres packing shares for the GTA. Wetland, hardwood, pasture, and the field the easement says must stay a field.",
 },
 {
 title: "Co-op consensus",
 detail:
 "Whole Village Property Co-operative Inc. sitting a meeting. A share is a household.",
 },
 ],
 unique: {
 title: "Eleven families, one house, 999 years",
 detail:
 "Whole Village is the Caledon experiment that put eleven families in a single ‘single-family’ ecoresidence and then locked the rest of the farm with a 999-year conservation easement. Greenhaven comes up a lot at cohousing conferences. The Escarpment Biosphere Conservancy holds the paper that says the wetland stays.",
 },
 },

 botton: {
 typical: [
 {
 title: "Biodynamic farms and bakery",
 detail:
 "Four or five farms in Danby Dale, a bakery, a café, and workshops. People with and without learning disabilities share the workday.",
 },
 {
 title: "Shared households",
 detail:
 "Esk Valley houses still live as coworkers and villagers: meals, seasons, no employment contracts. The Trust side runs a more standardised care service on the same dale.",
 },
 {
 title: "Café and Moors paths",
 detail:
 "Visitors eat, walk the North York Moors, and buy from the shop. Households are homes.",
 },
 ],
 unique: {
 title: "Jenga, then a split charity",
 detail:
 "Botton is the first Camphill village (and as the dale that made the first Jenga sets) then split in the 2010s between a professionalised charity and Esk Valley’s Shared Lives households. Two boards still share 600 acres. The game left; the argument about care did not.",
 },
 },

 limans: {
 typical: [
 {
 title: "Sheep, gardens, cereals",
 detail:
 "A Provençal cooperative farm: flocks, fields, and the work of keeping 270-odd hectares in production without wages.",
 },
 {
 title: "Wool and solidarity",
 detail:
 "A sister site at Briançon processes wool. People and goods move among Longo Maï farms, including to Finca Sonador in Costa Rica.",
 },
 {
 title: "Self-administration",
 detail:
 "No HOA bylaws, no salaries. The Swiss land foundation holds title; the cooperative lives the land.",
 },
 ],
 unique: {
 title: "No wages, Swiss dirt",
 detail:
 "Limans is the 1973 mother of Longo Maï: May ’68 militants who bought three derelict hamlets, put the land in a Swiss foundation so it could not be split, and still live without wages. Donations through Pro Longo Maï have historically been half the budget. The Costa Rican finca in this atlas is the sister, not this title.",
 },
 },

 "los-portales": {
 typical: [
 {
 title: "Organic fields in the Sierra Morena",
 detail:
 "A handful of buildings on 200 hectares; most of the finca stays jara, holm oak, deer and boar. The cultivated strip is the weekday.",
 },
 {
 title: "Courses and ESC hosts",
 detail:
 "Volunteers and students in the white farm north of Seville. Guests are not members.",
 },
 {
 title: "Association meetings",
 detail:
 "El Espacio Cooperativo sitting a small consensus. About thirty people. Lots are not for sale.",
 },
 ],
 unique: {
 title: "Dreams as seriously as compost",
 detail:
 "Los Portales is known for taking dream work as a community practice. A Brussels circle took an Andalusian finca in 1984 and still treats the night as part of the farm. RIE lists it; visitors remember the dreams.",
 },
 },

 "torri-superiore": {
 typical: [
 {
 title: "Guesthouse in the stone stack",
 detail:
 "Turning over rooms in a 14th-century Ligurian hamlet a few kilometres from Ventimiglia. Meals with residents. Solar on the roof.",
 },
 {
 title: "Lime, timber, restoration",
 detail:
 "The village was emptied by emigration. Decades of lime and timber brought the stacked houses back. Apartment owners restore their own floors.",
 },
 {
 title: "Consensus, twice a week",
 detail:
 "Association, social cooperative, and resident circle. About twenty people deciding the public half and the common table.",
 },
 ],
 unique: {
 title: "A mule-track hamlet, reoccupied",
 detail:
 "Torri Superiore is the abandoned medieval stack that an association and a social cooperative brought back to life. A vertical stone village on the French-Italian border, half guesthouse, half private apartments, all consensus. Piero Caffaratti and Gianna Ballestra founded the cultural association in 1989; Ture Nirvane cooperative followed in 1999.",
 },
 },

 "krishna-valley": {
 typical: [
 {
 title: "Organic farm and cow protection",
 detail:
 "A 300-hectare Vaishnava farm: gardens, oxen, and the cowshed that visitors walk through after the temple.",
 },
 {
 title: "Temple and kirtan",
 detail:
 "Radha-Syamsundara at the centre. Daily worship, festivals, and a village of monks and families.",
 },
 {
 title: "Guesthouse and tickets",
 detail:
 "Guided visits, a shop of community products, and beds for pilgrims and tourists south of Lake Balaton.",
 },
 ],
 unique: {
 title: "New Vraja-dhama on a Hungarian auction",
 detail:
 "Krishna Valley is Europe’s large Krishna-conscious eco-farm: 120 hectares bought at auction in 1993, a temple in local style with an Indian interior, and cow protection as theology rather than a hobby. About 150 people on church land.",
 },
 },

 "brithdir-mawr": {
 typical: [
 {
 title: "Off-grid farm under Carningli",
 detail:
 "Woodland, coppice, pasture, and a small resident economy on about 80 acres in the National Park.",
 },
 {
 title: "Co-op meetings",
 detail:
 "A housing cooperative on a lease, historically from Julian Orbach. Consensus among a handful of members.",
 },
 {
 title: "Low-impact buildings",
 detail:
 "The eco-buildings that planners once called a ‘lost tribe of Wales.’ Ordinary days are firewood and water.",
 },
 ],
 unique: {
 title: "That Roundhouse, then a sale",
 detail:
 "Brithdir Mawr is known for Tony Wrench and Jane Faith’s 1997 turf-roofed roundhouse, which forced Pembrokeshire to invent Low Impact Development, and, in 2024–25, for a sale to a retreat-centre buyer while some of the co-op still occupied the farm. The house is the symbol. The dispute is the present.",
 },
 },

 keuruu: {
 typical: [
 {
 title: "Organic fields and forest",
 detail:
 "About 25 hectares of arable and 17 of forest on a 53-hectare farm in the Finnish lake district.",
 },
 {
 title: "Sauna and wooden houses",
 detail:
 "The ordinary Finnish village plant: wood heat, a sauna, snow, and a small association living through the dark months.",
 },
 {
 title: "Talkoot",
 detail:
 "The work bee. Members and friends show up to do a job in a day that would take a contractor a week.",
 },
 ],
 unique: {
 title: "Talkoot instead of a lot market",
 detail:
 "Keuruu is the GEN Finland village that is simply a registered association owning a farm. No housing cooperative of apartments, no developer. Hosted a GEN-Europe assembly in 2009. The Finnish version is unpaid collective work in the snow.",
 },
 },

 hurdal: {
 typical: [
 {
 title: "Timber houses and winter gardens",
 detail:
 "Active houses with solar and glass: the later aesthetic that replaced the first straw-bale cluster at Gjøding.",
 },
 {
 title: "Common house and shop",
 detail:
 "Neighbourhood commons in a realsameie. Households own dwellings; streets and internals are joint.",
 },
 {
 title: "Oslo-commute økolandsby",
 detail:
 "Eighty kilometres north of Oslo. People go to work; the village is a neighbourhood.",
 },
 ],
 unique: {
 title: "The co-op that sold houses",
 detail:
 "Hurdal is the Nordic case of an ecovillage that scaled. Straw-bale on a rented rectory farm became, via Filago AS, a 70-house eco-neighbourhood with ENOVA money and mortgages. Academic papers record debt and identity conflict. The houses are still lived in.",
 },
 },

 suderbyn: {
 typical: [
 {
 title: "Permaculture gardens",
 detail:
 "Five hectares of old farm at Västerhejde: beds, oaks, and experimental cob and timber.",
 },
 {
 title: "Green Skills and ESC",
 detail:
 "RELEARN hosts year-long volunteers from across Europe. English is a working language. Volunteers are not automatically members.",
 },
 {
 title: "Meetings of three entities",
 detail:
 "Cooperative, NGO, foundation. Participatory practice on a small scale. Someone still has to do the biogas feed.",
 },
 ],
 unique: {
 title: "A micro-biogas digester on Gotland",
 detail:
 "Suderbyn is the 5-hectare teaching lab whose kitchen waste becomes cooking gas. EAFRD paid for infrastructure; RELEARN pays for the volunteer years. A Baltic experiment that other European projects come to copy. Ingrid Gustafsson and Robert Hall bought the farm at Västerhejde in 2008 after two years of preparation.",
 },
 },

 aardehuis: {
 typical: [
 {
 title: "Earthship households",
 detail:
 "Twenty-three tire-and-earth houses plus a common house on 1.2 hectares at Olst. Solar, water, and the ordinary friction of a neighbourhood.",
 },
 {
 title: "Vereniging and sociocracy",
 detail:
 "The association of the households. Private houses, common rules, circles for different patches of the site.",
 },
 {
 title: "Garden and adopted hectare",
 detail:
 "Food close in; an extra hectare the municipality let them use. Edable Olst-Wijhe later took a nearby garden and pear orchard.",
 },
 ],
 unique: {
 title: "Tires, 2,000 volunteers, 1.2 hectares",
 detail:
 "Aardehuis is the Netherlands’ first ecovillage of record: Michael Reynolds earthships self-built with some two thousand volunteers, three social-housing units, and a total bill around €5 million. They wanted five hectares and got just over one. It remains a neighbourhood.",
 },
 },

 "comunidad-del-sur": {
 typical: [
 {
 title: "Press and workshops",
 detail:
 "Nordan titles, Tryckop graphics, CODEUCA education, the living work of a collective that is now a small urban household plus cooperatives.",
 },
 {
 title: "Self-management",
 detail:
 "Rotation of work, common decisions, ‘to each according to need’ inside the collective’s means. The 1955 compact, still the grammar.",
 },
 {
 title: "Agrarian co-op days",
 detail:
 "ECOSUR is the land arm.",
 },
 ],
 unique: {
 title: "Dictatorship exile, then a press",
 detail:
 "Comunidad del Sur is Latin America’s oldest living intentional community that survived a coup by leaving: Peru, then Sweden, where they founded Nordan, and came home as an eco-community rather than disappearing into ordinary Montevideo.",
 },
 },

 penalolen: {
 typical: [
 {
 title: "Hillside sitios",
 detail:
 "Adobe, water, and a forest on the old Lo Hermida slope. Households live on parcels inside a copropiedad.",
 },
 {
 title: "Junta de Vecinos",
 detail:
 "Neighborhood law, not sociocracy. The civic face of an urban-edge eco-neighborhood under the Andes.",
 },
 {
 title: "Paths through the precordillera",
 detail:
 "Trails and shared ground among the twenty-odd parcels. Santiago is below; the hillside is what matters.",
 },
 ],
 unique: {
 title: "The 2003 toma next door",
 detail:
 "Peñalolén is the copropiedad eco-neighborhood whose neighboring land occupation became a well-studied urban conflict. Forty-five years of hillside life, and a public argument about who the mountain is for. In spring 1980 a group of young founders bought into the barren Lo Hermida hillside with no water or services.",
 },
 },

 "eco-truly": {
 typical: [
 {
 title: "Cone-house mornings",
 detail:
 "‘Trulys’ on sand at 2.5 m above sea level. Gardens that used to be desert. A small resident group and a large visitor path from Lima.",
 },
 {
 title: "Kirtan and temple",
 detail:
 "Vaishnava religious life is the ordinary day. Volunteers cook and sweep; devotees hold the covenant.",
 },
 {
 title: "Guided walks for day-trippers",
 detail:
 "Tickets, a simple guesthouse, and tens of thousands of visitors over the years. The beach is the public door.",
 },
 ],
 unique: {
 title: "Hare Krishna cones on a desert beach",
 detail:
 "Eco Truly is the 1994 cone village that grew gardens out of sand an hour north of Lima, a tiny resident group and a spiritual day-trip that looks like nowhere else on the Peruvian coast.",
 },
 },

 "ecovilla-gaia": {
 typical: [
 {
 title: "Cob and thatch",
 detail:
 "The ruined Lactona dairy rebuilt: Casa de los Búhos, wind, solar, and pampas mud. A small resident group on 20.5 hectares.",
 },
 {
 title: "PDC and bioconstruction",
 detail:
 "Course weeks are the public rhythm. Students are not members. The Universidad de Permacultura is the current face.",
 },
 {
 title: "Association meetings",
 detail:
 "Asociación Gaia holds the land. A board and members, no private sale of the dairy.",
 },
 ],
 unique: {
 title: "Argentina’s demonstration dairy",
 detail:
 "Ecovilla Gaia is the pioneer permaculture village that bought a wrecked Navarro dairy in 1996 and spent twenty-three years as the country’s largest demonstration ecovillage, then said the teaching cycle was complete and kept the land.",
 },
 },

 ipec: {
 typical: [
 {
 title: "Cob in the Cerrado",
 detail:
 "Natural buildings and solar on what was silent cattle pasture. Twenty-five hectares at Pirenópolis.",
 },
 {
 title: "Ecoversidade",
 detail:
 "PDCs, bioconstruction, volunteers. Students come and go. The institute is the landlord.",
 },
 {
 title: "Reforestation",
 detail:
 "Lucy Legan planted. Volunteers still plant. The point of buying degraded land was to leave a positive footprint.",
 },
 ],
 unique: {
 title: "Buying the ruined pasture on purpose",
 detail:
 "IPEC is the teaching ecovillage whose founders refused intact forest and bought cow-trodden Cerrado instead, so the restoration would be the curriculum.",
 },
 },

 piracanga: {
 typical: [
 {
 title: "River-meets-sea",
 detail:
 "The Rio Piracanga at the Atlantic on the Maraú Peninsula. Palms, dry toilets, hammocks. About forty houses.",
 },
 {
 title: "Retreat weeks",
 detail:
 "Unah and other programmes. Thousands of visitors a year. Local employment. Not income-sharing.",
 },
 {
 title: "Inkiri and private houses",
 detail:
 "A nonprofit community, a retreat enterprise, and dwellings that are simply owned. Three doors on one beach.",
 },
 ],
 unique: {
 title: "Three legal doors on one peninsula",
 detail:
 "Piracanga is Bahia’s river-and-sea village that looks like one spiritual ecovillage and is legally three things at once: Inkiri, Unah, and private houses, which is why joining is not a single co-op application.",
 },
 },

 aldeafeliz: {
 typical: [
 {
 title: "Bamboo and forest",
 detail:
 "A mountain valley at San Francisco de Cundinamarca. About ten families. Geodesic and bamboo buildings in the trees.",
 },
 {
 title: "Sociocratic circles",
 detail:
 "Adopted in 2013. A convivencia manual by consent. The association owns most of the land so it outlives the founders.",
 },
 {
 title: "Workshops",
 detail:
 "Permaculture, NVC, sociocracy, natural building. About a thousand visitors a year. Visitors are not members.",
 },
 ],
 unique: {
 title: "Colombia’s first sociocratic ecoaldea, now closed to members",
 detail:
 "Aldeafeliz is the mountain village that wrote sociocracy into a Colombian asociación and then stopped taking new members. The land lock is the association. They still say they were the first Colombian village to take sociocracy, in 2013.",
 },
 },

 nashira: {
 typical: [
 {
 title: "Eleven núcleos",
 detail:
 "Food, recycling, a restaurant, crafts. A coordinator and the women of that cluster. Mothers run the economy, in their own words.",
 },
 {
 title: "Houses on three hectares",
 detail:
 "Eighty-eight dwellings in sugarcane country at Palmira. Recycled brick. Title in the woman’s name.",
 },
 {
 title: "Neighbourhood care",
 detail:
 "A matriarchal ecoaldea of women who survived domestic violence or displacement, plus their families.",
 },
 ],
 unique: {
 title: "1,200 hours for a house in a woman’s name",
 detail:
 "Nashira is the Palmira project that traded 1,200 labour hours for a house titled to a woman head of household, 88 houses, 3 hectares, municipal land money, and a World Habitat finalist that is freehold.",
 },
 },

 "el-manzano": {
 typical: [
 {
 title: "Farm in a sea of pine",
 detail:
 "One hundred and twenty hectares at Cabrero: mixed forest, pasture, blueberries, gardens. The plantations around it are the landscape, not the ethic.",
 },
 {
 title: "Eco-school days",
 detail:
 "PDCs and apprenticeships. About seven hours of guided work a day in season. The limited company books the course; the family holds the land.",
 },
 {
 title: "Natural buildings",
 detail:
 "The 2007 generation came home and built. ERES, with Gaia University, later became the regional teaching nonprofit.",
 },
 ],
 unique: {
 title: "Latin America’s first Transition Town, on inherited land",
 detail:
 "El Manzano is the family farm that became a Transition Town without ever becoming a co-op: 1930 title, 2007 return, blueberries in a sea of pine, and no published path to buy in.",
 },
 },

 "finca-sagrada": {
 typical: [
 {
 title: "Biodynamic farm",
 detail:
 "Twenty irrigated acres of pasture, food forest, and gardens. A handful of residents. Cows, compost, and the river.",
 },
 {
 title: "Mountain lock",
 detail:
 "About eight hundred acres of mountain stay mountain. About 800 acres stay mountain.",
 },
 {
 title: "Valley association work",
 detail:
 "Reforestation on Kuntur Wachana, a community garden in Tumianuma, a watershed bioregion. The asociación is the legal face.",
 },
 ],
 unique: {
 title: "Seven people, eight hundred acres of mountain",
 detail:
 "Finca Sagrada is the Vilcabamba biodynamic farm whose resident group would fit in one van while the mountain title would swallow a town, a private holding plus an association.",
 },
 },

 sekem: {
 typical: [
 {
 title: "Biodynamic farm rounds",
 detail:
 "Tree belt, compost, and desert-edge fields on the original 70 hectares at Belbeis. Farmers in the network bring cotton, herbs, and produce into the companies.",
 },
 {
 title: "Company work",
 detail:
 "ISIS Organic, ATOS Pharma, NatureTex, and the produce arms. Trading-company days.",
 },
 {
 title: "School and university",
 detail:
 "Waldorf-inspired classes and Heliopolis University for Sustainable Development. The foundation’s work, paid by the companies.",
 },
 ],
 unique: {
 title: "Desert farm that became a holding",
 detail:
 "SEKEM is the 1977 desert purchase that turned 70 hectares of Sharqia sand into a biodynamic oasis, a holding company, and a Right Livelihood prize, a social enterprise with a cultural core.",
 },
 },

 wongsanit: {
 typical: [
 {
 title: "Ashram quiet and sitting",
 detail:
 "Quiet hours, no alcohol, no indoor smoking. An engaged-Buddhist day on donated paddies beside Khlong 15.",
 },
 {
 title: "Earthen buildings and herbs",
 detail:
 "Natural-dye and earthen-building workshops, herbal products, the canal and the former rice fields.",
 },
 {
 title: "Study visits and EDE",
 detail:
 "Guesthouse stays and Gaia Education’s Ecovillage Design Education since 2007. Students come; the foundation holds the land.",
 },
 ],
 unique: {
 title: "Sulak’s ashram on a 34-rai gift",
 detail:
 "Wongsanit is the Bangkok-adjacent ashram that sits on land a princess-line donor gave to Sulak Sivaraksa’s foundation, so nobody can sell the paddies as lots, and membership is unanimous rather than a purchase.",
 },
 },

 ndem: {
 typical: [
 {
 title: "Village gardens",
 detail:
 "Agroecology in the peanut basin: water, trees, and food so people can stay instead of leaving for Dakar.",
 },
 {
 title: "Maam Samba workshop",
 detail:
 "Craft at the centre that became a label, sold as far as Spain, Italy, and the US. Baobab powder and a village market sit beside it.",
 },
 {
 title: "ONG days in neighbouring villages",
 detail:
 "Solar, school, and GIEs. The NGO’s map is about twenty villages / ~10,000 people; the core is still a Sahel village.",
 },
 ],
 unique: {
 title: "Bayfall village that became an ONG",
 detail:
 "Ndem is the peanut-basin village that answered rural exodus with an artisan brand and an ONG, rather than with a developer eco-suburb, and no plot for sale.",
 },
 },

 songhai: {
 typical: [
 {
 title: "Zero-waste farm loops",
 detail:
 "Crops, livestock, fish, and processing on more than 22 hectares at Porto-Novo. Each waste is another unit’s input.",
 },
 {
 title: "Aquaculture tanks",
 detail:
 "Fish in the circuit that made the campus famous. Production funds training.",
 },
 {
 title: "Rural-entrepreneur classes",
 detail:
 "People come to learn the Songhai method and leave to farm. Sister sites at Savalou, Parakou, and Kinwedji.",
 },
 ],
 unique: {
 title: "One acre that became Africa’s farm school",
 detail:
 "Songhai is the Dominican priest’s 1985 experiment that grew from about one acre into a UN Centre of Excellence, a teaching campus whose point is that trainees leave, not that they buy a Porto-Novo condominium. Sister sites followed at Savalou, Parakou, and Kinwedji; the UN named it a Centre of Excellence for Agriculture in 2008.",
 },
 },

 tlholego: {
 typical: [
 {
 title: "Food garden",
 detail:
 "Vegetables and restoration on 150 hectares of former neglected cattle farm. Bushveld and savanna on the Magaliesberg’s western slopes.",
 },
 {
 title: "Courses and eco-venue stays",
 detail:
 "Rucore’s public door. People come for a camp or a learning week.",
 },
 {
 title: "Lekgotla and land care",
 detail:
 "Gathering, restoration, and the ordinary work of a post-apartheid learning village that never became a lot map.",
 },
 ],
 unique: {
 title: "Creation with nature, and no buy-in",
 detail:
 "Tlholego is the Setswana-named village that took a run-down cattle farm after apartheid and kept it as a nonprofit learning site: 150 hectares, about 25 people, and no published path to buy a piece of the Magaliesberg.",
 },
 },

 lilleoru: {
 typical: [
 {
 title: "Flower of Life garden",
 detail:
 "The permaculture pattern you can see from the air. Weeding, planting, and the landscape that people photograph.",
 },
 {
 title: "Practical Consciousness",
 detail:
 "Ingvar Villido’s courses. Students fill the buildings; about 30 people actually live on the 30 hectares.",
 },
 {
 title: "MTÜ work",
 detail:
 "A registered association with a board. Residents are a subset of members. Voluntary work and donations keep the place.",
 },
 ],
 unique: {
 title: "A yoga village you can see from a plane",
 detail:
 "Lilleoru is the Estonian ashram whose garden is a Flower of Life visible on satellite, 30 residents, a much larger NGO membership, and an ordinary MTÜ that holds the land so nobody sells it as Harju lots.",
 },
 },

 zmag: {
 typical: [
 {
 title: "Straw-bale and tire experiments",
 detail:
 "Natural building on the Recycled Estate at Vukomerić. Green roofs, a common garden, and the houses members built to learn.",
 },
 {
 title: "Seed library and workshops",
 detail:
 "Education for children and adults. The Croatian National Foundation has treated it as a knowledge centre in sustainable living.",
 },
 {
 title: "Association meetings",
 detail:
 "ZMAG the udruga decides. Some members live in houses on nearby village plots. Guests book a workshop.",
 },
 ],
 unique: {
 title: "Zagreb’s recycled estate",
 detail:
 "ZMAG is the activist association that turned a Zagreb-county village into a permaculture school of straw and tires, an ekoselo of workshops.",
 },
 },

 guneskoy: {
 typical: [
 {
 title: "CSA vegetables",
 detail:
 "Organic crates since 2009 on about two cultivable hectares of former stony steppe. Members of the box scheme are not automatically co-op members.",
 },
 {
 title: "Straw-bale mandala",
 detail:
 "The 2007 building that the cooperative saved through negotiation when a high-speed railway cut a hectare in the 2010s.",
 },
 {
 title: "Volunteer years",
 detail:
 "Including European Voluntary Service from 2018. A handful of cooperative members; many more hands in season.",
 },
 ],
 unique: {
 title: "The railway that ate a hectare",
 detail:
 "Güneşköy is the tiny Ankara-region environmental cooperative that bought 7.5 hectares from the Turkish state, built a straw-bale mandala, and then spent years arguing with a high-speed line that expropriated 10,000 m², and kept the mandala. CSA crates still leave from the two hectares they kept after the railway.",
 },
 },

 kufunda: {
 typical: [
 {
 title: "Biodynamic fields",
 detail:
 "An explicit turn since 2019: produce and preparations on the Ruwa farm. About fifteen families live and work here.",
 },
 {
 title: "Hosting conversations",
 detail:
 "Art of Hosting, Oasis Game, Young Women are Medicine. People come from the rest of Zimbabwe; the village holds the room.",
 },
 {
 title: "Waldorf-inspired school",
 detail:
 "Children of the resident families, on the same land. A school.",
 },
 ],
 unique: {
 title: "To learn, on a mother’s farm",
 detail:
 "Kufunda is the Shona-named learning village that sits on part of the founder’s mother’s farm at Ruwa: a Danish-Zimbabwean return, thatched dormitories, and no published lot offer on family title.",
 },
 },

 glarisegg: {
 typical: [
 {
 title: "Seminar-centre days",
 detail:
 "The castle earns its keep as a venue. EDE courses, the Academy for Community Education (2023), garden days on Lake Constance.",
 },
 {
 title: "Circle culture",
 detail:
 "Outer circle and inner circle inside the Verein. About 37 adults and 20 children. Meetings in a castle.",
 },
 {
 title: "Park, forest, and shore",
 detail:
 "Five hectares of castle, permaculture garden (from 2012), forest, and lake. The AG is the landlord of record.",
 },
 ],
 unique: {
 title: "A castle bought at auction",
 detail:
 "Schloss Glarisegg is the Thurgau castle an intentional community bought at auction in October 2003: an AG owns the stones, a Verein lives in them, a seminar centre pays the roof, and joining is a year-plus path with a fee.",
 },
 },

 "los-horcones": {
 typical: [
 {
 title: "Desert farm rounds",
 detail:
 "Cattle, gardens, honey, and the km 63 parcel, a producer cooperativa that still feeds itself in the Sonoran dry season.",
 },
 {
 title: "Autism programme",
 detail:
 "Children and young people in the dining hall and yards. The 1971 Hermosillo work never left.",
 },
 {
 title: "Cultural-design experiments",
 detail:
 "Planner-manager meetings that treat cooperation, non-violence, and equality as behaviors to measure, not slogans on a gate.",
 },
 ],
 unique: {
 title: "The last Walden Two",
 detail:
 "Los Horcones is the community that still claims Skinner’s novel as an operating system: behaviorology since 1974, a TIBA convention in the desert, and a village Skinner himself mentioned in 1983. A laboratory with cows.",
 },
 },

 tosepan: {
 typical: [
 {
 title: "Coffee, pepper, and milpa",
 detail:
 "Shade-grown organic coffee, pimienta gorda, backyard gardens, and a nursery that has put out on the order of a million plants a year.",
 },
 {
 title: "Caja, school, and radio",
 detail:
 "Tosepantomin savings, Tosepan Kalnemachtiloyan from preschool through music, and community radio, the union as a daily state.",
 },
 {
 title: "Kali cabins and temazcal",
 detail:
 "Bamboo lodging at Nahuiogpan, plantation walks, and a cooperative kitchen that is tourism for socios.",
 },
 ],
 unique: {
 title: "Sugar on horseback, then the Supreme Court",
 detail:
 "Tosepan is the union that started because Nahua campesinos could not buy sugar at a fair price in 1977, and that in 2022 helped get open-pit mining concessions covering about 745,000 hectares around Cuetzalan invalidated. Fifty-three thousand socios still work that same stubborn math: keep the harvest, and the mountain, in local hands.",
 },
 },

 "teopantli-kalpulli": {
 typical: [
 {
 title: "Milpa on former grassland",
 detail:
 "Organic maize, beans, squash on dry pasture the ashram reforested at the edge of Bosque La Primavera.",
 },
 {
 title: "Ceremony and practice",
 detail:
 "A kalpulli that still carries an ashram lineage: Mexica ceremony, visiting abuelos, and a household spiritual timetable.",
 },
 {
 title: "Twenty-two families",
 detail:
 "Internal lots, a common reserve, and decisions that sit with the people who actually live at San Isidro Mazatepec.",
 },
 ],
 unique: {
 title: "Ashram that became a kalpulli",
 detail:
 "Teopantli Kalpulli is the Hindu ashram that turned into a Mexica clan on the Primavera edge and then hosted the 2015 Consejo de Visiones, five hundred people, CASA Latina’s origin story, on 37 hectares that began as nothing but grass. Founded 7 March 1983; the A.C. marked 43 years in March 2026.",
 },
 },

 litibu: {
 typical: [
 {
 title: "Solar and cisterns",
 detail:
 "Eight casas catching roof water, pushing surplus power to the grid, and running a common blackwater system in the beach forest.",
 },
 {
 title: "Food forest and greywater gardens",
 detail:
 "Compost and greywater feeding the common ground between the casas. The jungle and mangrove are the fence.",
 },
 {
 title: "Membership work hours",
 detail:
 "Dues and a couple of hours a week. A beach village that still asks labour of people who hold a casa through a fideicomiso.",
 },
 ],
 unique: {
 title: "Eight casas beside a FONATUR master plan",
 detail:
 "Litibú EcoVillage is the 1990 beach community that is not the golf-and-condo Litibú on the same bay: eight solar houses in the forest, a coastal fideicomiso, and a membership visit, while the tourist board sells a Greg Norman course next door.",
 },
 },

 "u-yits-kaan": {
 typical: [
 {
 title: "Milpa and seed bank",
 detail:
 "Maya milpa, Cuxtal maize, and Ch'iil Kaaj, a living library of criollo seed on the Maní–Dzán road.",
 },
 {
 title: "Xunán kab",
 detail:
 "Melipona beecheii in inherited jobones. Honey as medicine, food, and a fair-trade product. The stingless bee is the curriculum.",
 },
 {
 title: "Campesino-a-campesino",
 detail:
 "Families teaching families. Promotores in parishes across southern and eastern Yucatán.",
 },
 ],
 unique: {
 title: "School on the ashes of the Auto de Fe",
 detail:
 "U Yits Ka'an is the internado priests planted in Maní (the town where Diego de Landa burned Maya codices in 1562) with German MISEREOR money, so that milpa and melipona would be the answer to a bonfire. Dew that falls from the sky, on purpose.",
 },
 },

 "tierra-del-sol": {
 typical: [
 {
 title: "Dry-tropics agroforestry",
 detail:
 "Four hectares in the Valles Centrales: compost, herbs, and (since 2019) syntropic rows where hugelkultur used to be.",
 },
 {
 title: "Guided visits and the kitchen",
 detail:
 "Groups walking the villa, then eating what the land grew. The published price list is the weekday.",
 },
 {
 title: "Apprentice shifts",
 detail:
 "Ferments, eco-building, natural dyes, ecological sanitation. Young Oaxacans and international volunteers on a founder’s farm.",
 },
 ],
 unique: {
 title: "A pilot’s cambio de vida",
 detail:
 "Tierra del Sol is the dry-tropics villa a Mexico City aviator bought so he could stop flying: neighbours once treated the title as a rumour, hugelkultur gave way to Ernst Götsch, and the four hectares still teach regeneration instead of selling lots.",
 },
 },

 "bosque-village": {
 typical: [
 {
 title: "Food forest in pine and oak",
 detail:
 "Eighty-three acres of highland trees, chickens, cob, composting toilets, and a small solar system above Lake Pátzcuaro.",
 },
 {
 title: "Participant labour",
 detail:
 "Interns and visitors who applied with skills. The founder is the invested member; everyone else is passing through or earning a stay.",
 },
 {
 title: "Documenting the experiment",
 detail:
 "YouTube, Quora, and a domain that got hijacked. The village has always published itself as a cultural experiment.",
 },
 ],
 unique: {
 title: "The forest whose website became a casino",
 detail:
 "Bosque Village is Brian Fey’s off-grid 83-acre laboratory (three thousand visitors, one invested member, cob and sauna in the madrone) whose official domain was eaten by online slots. The pine is still there. Use Facebook, not the gambling URL.",
 },
 },

 "via-organica": {
 typical: [
 {
 title: "Ranch-to-restaurant",
 detail:
 "Vegetables, herbs, seed, and animals walking fifteen kilometres into a plate in San Miguel. The 80 hectares are the menu.",
 },
 {
 title: "School groups and campesinos",
 detail:
 "Thousands of visitors a year: agronomy students, activist delegations, and farmers walking rotational grazing and olla irrigation.",
 },
 {
 title: "Agave and mesquite",
 detail:
 "The Billion Agave Project on former overgrazed pasture, fermented fodder, companion trees, soil that is supposed to hold water again.",
 },
 ],
 unique: {
 title: "The shop that became a climate ranch",
 detail:
 "Vía Orgánica is the organic corner store that grew an 80-hectare Jalpa-valley school, hosted the first Ecosystem Restoration Camp in the Americas, and put San Miguel on the GMO-corn fight, with OCA in the wings and no lot on the gate.",
 },
 },

 crisalium: {
 typical: [
 {
 title: "Forest care in El Encuentro",
 detail:
 "Five hectares of pine-oak inside a 143-hectare private park: rainwater, composting toilets, greywater, a native nursery.",
 },
 {
 title: "Workshops in the trees",
 detail:
 "Permaculture, bioconstruction, eco-technologies, nonviolent communication. The public weekday. The houses stay houses.",
 },
 {
 title: "Family consensus",
 detail:
 "About ten family nuclei deciding together. GEN: visitors yes, new members no.",
 },
 ],
 unique: {
 title: "Chrysalis plus Rhizobium, with an easement",
 detail:
 "Crisalium is the San Cristóbal A.C. that named itself for a pupa and a nitrogen-fixing bacterium, then wired five hectares into a private park with a 2020 ecological easement, a legal hybrid almost nobody else in this atlas has.",
 },
 },

 "inla-kesh": {
 typical: [
 {
 title: "Highland biotopo days",
 detail:
 "Two hectares at Chichihuistán: food, land care, and a residential circle of about ten adults and five children.",
 },
 {
 title: "EDE and puertas abiertas",
 detail:
 "A Gaia Education month when the course is on; community-experience weeks when it is not. Teaching is the public door.",
 },
 {
 title: "Meta-relational practice",
 detail:
 "Tamera-lineage work on how people actually live together. Unlearning modernity as a timetable.",
 },
 ],
 unique: {
 title: "In Lak'ech in the Altos",
 detail:
 "Inla Kesh is the Tamera-inspired healing biotope that took a Maya ethics formula (I am another you) as its name and planted it on two highland hectares, then ran a certified EDE as if community itself were the curriculum.",
 },
 },

 "vicente-guerrero": {
 typical: [
 {
 title: "Milpa and criollo maize",
 detail:
 "Family plots in Españita. Soil, water, and the seed the fairs exist to keep.",
 },
 {
 title: "Campesino-a-campesino days",
 detail:
 "Promoters teaching promoters. Guatemala in the 1970s is still in the method: family to family, not faculty to campus.",
 },
 {
 title: "Maize fairs",
 detail:
 "From 1998: seed, food, forums. The public weekday of the A.C.",
 },
 ],
 unique: {
 title: "Guatemala slept in the village",
 detail:
 "Grupo Vicente Guerrero is the Tlaxcala committee that put Katoque Ketzal campesinos in its houses from 1979 to 1984, took the method to Sandinista Nicaragua, then notarized an A.C. so Pan para el Mundo could pay the fairs.",
 },
 },

 nanciyaga: {
 typical: [
 {
 title: "Lagoon and jungle rounds",
 detail:
 "Docks, howler monkeys, a path that is a tour until it is not. Twelve hectares of selva behind two of cabins.",
 },
 {
 title: "Cabin and restaurant",
 detail:
 "The public weekday. Temazcal, limpia, a plate. Tourism that is supposed to pay the macaw.",
 },
 {
 title: "Recovery work",
 detail:
 "UNAM and scarlet macaws. Carlos Rodríguez Mouriño’s biology.",
 },
 ],
 unique: {
 title: "Sean Connery’s jungle, still privately owned",
 detail:
 "Nanciyaga is the Catemaco reserve a teenager’s father bought at auction, that later hosted Medicine Man and Apocalypto, and that still splits two hectares of visitors from twelve of jungle, a family title inside a biosphere.",
 },
 },

 "pueblo-sacbe": {
 typical: [
 {
 title: "Off-grid house days",
 detail:
 "Solar, wind, biodigesters, rounded roofs. Fifty families who still have to cook when the listing photographer has left.",
 },
 {
 title: "Jungle and cenotes",
 detail:
 "Resident water. Bylaws against the grid. The conserved rest of 54 hectares.",
 },
 {
 title: "Lot conversations",
 detail:
 "Houses change hands. A fideicomiso, a covenant, a portal. The weekday of a freehold village.",
 },
 ],
 unique: {
 title: "The jungle that became a listing category",
 detail:
 "Pueblo Sacbé is the 1998 off-grid settlement that told CFE no, built houses without glass so hurricanes could pass through, and then watched Playa del Carmen grow around it until a jungle lot was a product, fifty families, still no grid.",
 },
 },

 ixixtlan: {
 typical: [
 {
 title: "Vegetarian kitchen and garden",
 detail:
 "Fruit and vegetables grown on the hill. The table looks at two volcanoes.",
 },
 {
 title: "Retreat days",
 detail:
 "Workshops, camps, PeregrinArte, ceremony. Sacred-geometry cabins as the classroom.",
 },
 {
 title: "Founder-led circle",
 detail:
 "Beleni Kumara Inti’s family and the people who came to stay. GEN: twenty.",
 },
 ],
 unique: {
 title: "Cabins aimed at both volcanoes",
 detail:
 "Ixixtlán is the Atlixco sanctuary a Montessori dancer built on a hill in 2006, named SanArte, and pointed at Popocatépetl and Iztaccíhuatl, sacred geometry, a vegetarian table, and no Puebla lot on the gate.",
 },
 },

 "huerto-roma-verde": {
 typical: [
 {
 title: "Compost and market",
 detail:
 "Jalapa 234 on a weekday: stalls, a punto limpio, neighbours walking in from Roma Sur.",
 },
 {
 title: "Workshops in the lot",
 detail:
 "Urban permaculture as a class. The rubble is now a curriculum.",
 },
 {
 title: "Volunteer shifts",
 detail:
 "The 2012 clearing never really ended. A shift.",
 },
 ],
 unique: {
 title: "The lot that would not stay rubble",
 detail:
 "Huerto Roma Verde is the Roma Sur laboratory neighbours planted on 1985 earthquake wreckage, then ran as a command post when the earth shook again on the same date in 2017, 19 September, twice.",
 },
 },

 "rancho-la-salud": {
 typical: [
 {
 title: "Common-house evenings",
 detail:
 "Monthly dinners, a sharing circle, a 3,000 sq ft house with guest rooms. Cohousing as a timetable.",
 },
 {
 title: "Pool and palapa",
 detail:
 "A 52-foot salt-water lap pool at 86–90°F, year round. The lakeshore amenity that is also in the deed.",
 },
 {
 title: "Hacienda-style building",
 detail:
 "Bóveda brick, Talavera, miradors. Garden Homes, Villas, Townhomes going up one purchase at a time.",
 },
 ],
 unique: {
 title: "Mexico’s first cohousing, on a condominio",
 detail:
 "Rancho La Salud is the Ajijic village that put Jalisco condominio law under a cohousing common house, called it salud, and sold hacienda-style homes to Mexicans, Americans, English, and Palestinians, thirteen people, a lap pool, honest deeds.",
 },
 },

 tamarindos: {
 typical: [
 {
 title: "River and cabin days",
 detail:
 "Río Jamapa, temazcal, a plate, a zip-line. The hospitality weekday.",
 },
 {
 title: "EcoClub",
 detail:
 "Courses and workshops on a demonstration site that is also selling lots.",
 },
 {
 title: "Lot conversations",
 detail:
 "500 m² and up. The membership path published on the village’s own site.",
 },
 ],
 unique: {
 title: "The ecoaldea that lists its own lots",
 detail:
 "Tamarindos is the Camarón de Tejeda village that put cabins, a zip-line, and a 500 m² lot offer on the same website, then had to rebuild after a 2023 flood. Tourism and real estate on the Jamapa, without treating the river as a commons share. An EcoClub and cabin project took shape at Mata de Agua in the mid-2010s, on Totonac archaeological ground.",
 },
 },

 hapori: {
 typical: [
 {
 title: "Off-grid house days",
 detail:
 "Every home a standalone solar-and-battery system.",
 },
 {
 title: "Swales and natives",
 detail:
 "Former pasture, rain held on the hill, mature trees kept. Regeneration as a site plan.",
 },
 {
 title: "Palapa and temazcal",
 detail:
 "Common house, biopool, orchard. The neighbourhood face of a lot map.",
 },
 ],
 unique: {
 title: "A Māori word on a Guanajuato hill",
 detail:
 "Hapori is the San Miguel neighbourhood a New Zealander and a Mexican named for community in Māori, then nested inside a gated eco-residencial, and actually took off-grid, eight hectares, two covenant layers, honest homesites.",
 },
 },

 sekkan: {
 typical: [
 {
 title: "Biodynamic farm rounds",
 detail:
 "Thirty-eight acres of former Rancho Lacayo. Visitors pay a donation. Members owe two hours a week.",
 },
 {
 title: "Weekly family meetings",
 detail:
 "Six founding families. Letters, minutes, a group yes. The Covid-era timetable that survived the purchase.",
 },
 {
 title: "Independent finances",
 detail:
 "About $300 in fees. Your own income. No common purse and no lot portal.",
 },
 ],
 unique: {
 title: "The teenager’s SMA idea, closed in 2022",
 detail:
 "Sekkan is the San Miguel ecovillage a Mexican teenager imagined, a Covid Zoom circle bought as Rancho Lacayo, and six families started living on in 2026, 38 acres, an LLC-or-TIC, a letter instead of a listing.",
 },
 },

 "nuevo-san-juan": {
 typical: [
 {
 title: "Forest enterprise rounds",
 detail:
 "Sawmill, furniture, resin, water. About 900 permanent jobs on 18,138 ha of pine-oak. FSC is the weekday certificate.",
 },
 {
 title: "First-Sunday asamblea",
 detail:
 "Comuneros, concejo first, autoridades on three-year terms. The 1991 resolution is still the deed they sit under.",
 },
 {
 title: "Lava and volcano visits",
 detail:
 "The buried church of old San Juan, Parícutin itself. The public door of a working indigenous town.",
 },
 ],
 unique: {
 title: "The town a volcano moved, then titled",
 detail:
 "Nuevo San Juan is the Purépecha comunidad that outlived Parícutin, took 18,138 hectares as bienes comunales in 1991, FSC-certified the pine, and won the Equator Prize without ever listing a lot on the lava.",
 },
 },

 cedicam: {
 typical: [
 {
 title: "Contour ditches",
 detail:
 "The A-frame level, retention walls, pre-Hispanic lamabordos. Rain held on the Mixteca Alta instead of taking the next metre of soil.",
 },
 {
 title: "Ocote nurseries",
 detail:
 "Native pine, a million trees in the Goldman-era count, more since. Families plant; CEDICAM teaches.",
 },
 {
 title: "Milpa",
 detail:
 "Maize, beans, squash on hills that had gone to gullies. The harvest stays with the household.",
 },
 ],
 unique: {
 title: "Five metres of topsoil, then the Goldman",
 detail:
 "CEDICAM is the Mixtec school Jesús León Santos built in 1983 so the Mixteca Alta would be green again, contour ditches, ocote, a US$150,000 prize.",
 },
 },

 "sierra-gorda": {
 typical: [
 {
 title: "Reserve days",
 detail:
 "Trails, waterfalls, eleven core zones on 383,567 ha. A public mountain with a citizen IAP behind it.",
 },
 {
 title: "Nuestra Tierra",
 detail:
 "Radio from 1990. The sierra talking to itself about the decree it asked for.",
 },
 {
 title: "Carbon and schools",
 detail:
 "Payments for conservation, classrooms, the unglamorous week that keeps a biosphere from being only a sign.",
 },
 ],
 unique: {
 title: "The Jalpan IAP that gazetted a mountain",
 detail:
 "Sierra Gorda is the 1987 citizen group that talked 383,567 hectares into a 1997 biosphere, then collected Wangari Maathai and UNEP prizes without ever selling the sierra as lots. Nuestra Tierra radio has spoken from the sierra since 1990.",
 },
 },

 "la-ventanilla": {
 typical: [
 {
 title: "Canoe tours",
 detail:
 "Mangroves on the Tonameca, three kilometres from Mazunte. Twenty-five families. Confirm whose cooperative is paddling.",
 },
 {
 title: "Nurseries on Uma Island",
 detail:
 "Mangrove seedlings, crocodiles for release, some deer. The conservation face of a ticket.",
 },
 {
 title: "Beach village days",
 detail:
 "Thatch, the rock window that named the place, a lagoon that used to be a hunt.",
 },
 ],
 unique: {
 title: "The lagoon that replaced a hunt",
 detail:
 "La Ventanilla is the 1998 Zapotec cooperativa that turned a closed turtle-and-crocodile trade into canoes and a UMA, twenty-five families, two cooperatives on one water.",
 },
 },

 "punta-laguna": {
 typical: [
 {
 title: "Spider-monkey walks",
 detail:
 "Otoch Ma’ax Yetel Kooh: the house of the spider monkey and the puma. Thirty families dividing the ticket.",
 },
 {
 title: "Howlers and the lagoon",
 detail:
 "A second primate, a water body, a guide who lives in thatch. Stay on the path.",
 },
 {
 title: "Village milpa",
 detail:
 "Chiclero descendants still farm a little maize. The ANP is the designation; the weekday is still the village.",
 },
 ],
 unique: {
 title: "Thirty-five years of asking, then a cooperativa",
 detail:
 "Punta Laguna is the Maya village that petitioned from 1967, got a 5,367-hectare monkey reserve and a 2002 cooperativa in the same year, and still divides tour money among thirty families instead of listing a Cobá lot.",
 },
 },

 "yomol-atel": {
 typical: [
 {
 title: "Coffee harvest",
 detail:
 "Tseltal gardens in Chilón / Yajalón. 341 families in Ts’umbal Xitalha’. The federation is the roast, not the landlord.",
 },
 {
 title: "Capeltic cups",
 detail:
 "University cafés as the retail bridge. The public door in the city.",
 },
 {
 title: "Honey and soap",
 detail:
 "Chab’il Taste, Yip Melel. Value-add that stays in Tseltal hands. Lequil cuxlejalil as a balance sheet.",
 },
 ],
 unique: {
 title: "Working together, against the middleman",
 detail:
 "Yomol A’tel is the 2002 Jesuit-and-Tseltal federation that took coffee out of the intermediary’s hands, poured it in Capeltic, and still has no Chilón lot on a portal, 341 families, a congress every three years, a cup instead of a listing.",
 },
 },

 tierraluz: {
 typical: [
 {
 title: "Off-grid house days",
 detail:
 "Independent solar, a shared well with a solar pump. Cob, superadobe, local brick.",
 },
 {
 title: "Commons and food forest",
 detail:
 "8,500 m² of A.C. land: trails, mango and papaya, yoga platform, garden. The neighbourhood face of a lot map.",
 },
 {
 title: "Sayulita surf",
 detail:
 "Twenty minutes’ walk, five minutes’ drive. The hill is quiet; the beach is not. Two populations, one dirt road.",
 },
 ],
 unique: {
 title: "Nineteen titled lots, and they say so",
 detail:
 "TierraLuz is the 2009 Sayulita hill that put private deeds and an A.C. commons in the same GEN listing, built cob and earthbag off-grid, and still has two of nineteen lots for sale, ordinary real estate with a food forest.",
 },
 },

 "huerto-tlatelolco": {
 typical: [
 {
 title: "Beds on a tower’s grave",
 detail:
 "1,650 m² of Nonoalco-Tlatelolco. Vegetables, an edible forest, a seed bank. The 1985 footprint is the weekday.",
 },
 {
 title: "Compost",
 detail:
 "On the order of 700 kg of organic waste a month. Worms. Neighbours bringing the city’s leftovers.",
 },
 {
 title: "Workshops",
 detail:
 "A civic hall that also grows food. Metro and walkable. The easiest urban shift in this Mexican ten.",
 },
 ],
 unique: {
 title: "The baldío that became a huerto",
 detail:
 "Huerto Tlatelolco is the 2013 Cultiva Ciudad garden planted on a 1985-quake tower’s grave, 1,650 square metres, a seed bank., next to the Plaza de las Tres Culturas.",
 },
 },

 kuyabeh: {
 typical: [
 {
 title: "Jungle lot days",
 detail:
 "½-ha and 1-ha parcels, about 7% buildable, off-grid. 160 owners, some still drawing the house. The Tulum–Cobá weekday.",
 },
 {
 title: "Commons amenities",
 detail:
 "Cenote, lagoon, temazcal, hotel, restaurant, jungle gym, towers. Twenty-five hectares of the brochure.",
 },
 {
 title: "Phase conversations",
 detail:
 "Balam, Huech, Sak Xikin, Turix. From about US$108,000. The membership path published on the village’s own site.",
 },
 ],
 unique: {
 title: "The 375-hectare lot that tells the truth",
 detail:
 "Kuyabeh is the km-34 Tulum–Cobá eco-residencial that put a cenote, a 7% cap, and a US$108,000 ½-hectare listing on the same website, 160 owners, four animal-named phases, jungle real estate without the commons.",
 },
 },

 "cabo-pulmo": {
 typical: [
 {
 title: "Dive boats",
 detail:
 "Cabo Pulmo Divers and the shops that followed. Tanks, briefings, the reef that replaced the nets.",
 },
 {
 title: "Park rules",
 detail:
 "No-take since 1995. ACCP and CONANP still have to tell the newcomer who brought a spear.",
 },
 {
 title: "Shore village",
 detail:
 "Bungalows, a restaurant, family yards on the East Cape. About a hundred people. The dirt road in is the weekday.",
 },
 ],
 unique: {
 title: "The fishing town that put the nets down",
 detail:
 "Mario Castro came home with a Divemaster card in 1990. The families petitioned. Zedillo signed. Fish biomass up 462%. Cabo Pulmo is the village that saved a 20,000-year reef instead of selling it.",
 },
 },

 "baja-ecovillage": {
 typical: [
 {
 title: "Tree planting",
 detail:
 "More than 55,000 trees since 1989, most from Lurie’s pocket. Seedlings in the canyon still need water and a cage.",
 },
 {
 title: "Forest inventory",
 detail:
 "Trails, benches, erosion control, measuring the park. El Rinconcito Verde is the work.",
 },
 {
 title: "Estuary hill",
 detail:
 "Cantú between the estero and the peninsula. Houses on town parcels. La Bufadora traffic below, a quiet canyon above.",
 },
 ],
 unique: {
 title: "A 200-year plan for a Cantú canyon",
 detail:
 "Schoolchildren named the park. The A.C. holds the trees. The founder is still planting. Punta Banda’s eco-village is a forest first.",
 },
 },

 "baja-biosana": {
 typical: [
 {
 title: "Natural building",
 detail:
 "Cob, earthbag, ferrocement, a dome. Each house a different method. The oasis is the curriculum.",
 },
 {
 title: "Greening the desert",
 detail:
 "Eleven hectares at El Chorro. Greywater, trees, the Sierra de la Laguna behind. GEN filmed it.",
 },
 {
 title: "Retreat weeks",
 detail:
 "When they are running, the living-and-learning centre hosts the world. Residents still have a door that stays shut.",
 },
 ],
 unique: {
 title: "A dome in a desert oasis",
 detail:
 "Nine people, eleven homes, off-grid under the laguna. A house opens as a membership, not as a Cabo listing.",
 },
 },

 "san-jose-de-la-zorra": {
 typical: [
 {
 title: "Juncus and pine-needle work",
 detail:
 "Kumiai basketry INPI still documents. Fibre is a weekday.",
 },
 {
 title: "Language at the table",
 detail:
 "Kumiai keepers in the Ojeda family and neighbours. The valley still has speakers to teach.",
 },
 {
 title: "Valley agriculture",
 detail:
 "A small community on ~1,740 ha inland from Ensenada. The wine route is next door; it is not this dirt.",
 },
 ],
 unique: {
 title: "A Sujeto de Derecho Público that was already a people",
 detail:
 "The 2024 decree gave civil personality. The Kumiai were here before the missions, the ranchos, and the tasting rooms. You are a guest, or you are not here.",
 },
 },

 "rancho-pacifico-baja": {
 typical: [
 {
 title: "Wood-fired bake",
 detail:
 "Sourdough and pizza from the oven. The fermentary. The public face of 15 desert acres.",
 },
 {
 title: "Off-grid campground",
 detail:
 "Van, tent, glamping, 7 km toward the sierra from El Pescadero. Guests water what they used.",
 },
 {
 title: "Permaculture rounds",
 detail:
 "Water, food, shelter, energy on Baja dirt. A forming village that still has to prove it.",
 },
 ],
 unique: {
 title: "The bakery that will not pretend it is already a commune",
 detail:
 "2019, 15 acres, a PDF invite. Rancho Pacífico is an eco-village in formation with bread on the table. Hosts began the rancho 7 km east of El Pescadero toward the Sierra de la Laguna in 2019; the wood-fired bakery is the public face.",
 },
 },

 tateikie: {
 typical: [
 {
 title: "Ceremonial year",
 detail:
 "Cargos that are political and religious in the same week. The asamblea is also a temple calendar.",
 },
 {
 title: "Sierra milpa",
 detail:
 "1,950 metres in Mezquitic. Sixteen agencies look to this cabecera. Livestock and plots.",
 },
 {
 title: "Pilgrimage",
 detail:
 "Wirikuta and the other sacred places. A duty.",
 },
 ],
 unique: {
 title: "A headquarters that is a prayer",
 detail:
 "TateiKie is the principal Wixárika community in Jalisco. You are a guest, or you are not here.",
 },
 },

 ayotitlan: {
 typical: [
 {
 title: "Ejido rounds",
 detail:
 "Eighty-eight localities. Coffee, milpa, forest. The 34,700 ha that actually arrived.",
 },
 {
 title: "Consejo de Mayores",
 detail:
 "The traditional table. Mining, the undelivered hectáreas, the biosphere next door.",
 },
 {
 title: "Sierra of Manantlán",
 detail:
 "Cloud forest, rare woods, a mountain that is also an iron claim. The weekday is staying on it.",
 },
 ],
 unique: {
 title: "A República that outlived its hectares",
 detail:
 "1963 paper on dirt the colony already named Ayotitlán. Seven thousand people still waiting for the rest of the decree.",
 },
 },

 "bosque-la-primavera": {
 typical: [
 {
 title: "Trail morning",
 detail:
 "Oak and pine on a caldera. Zapopan on one side. Hikers before the heat.",
 },
 {
 title: "Fire season",
 detail:
 "The weekday that decides whether the lung survives Guadalajara’s edge. Closures, crews, the wind.",
 },
 {
 title: "Edge politics",
 detail:
 "Cattle, subdivisions, Tala and Tlajomulco. The decree is 30,500 ha. The city wants the next hectare.",
 },
 ],
 unique: {
 title: "A forest the city still has to stop eating",
 detail:
 "6 March 1980. Forty-six years of APFF on a Pleistocene massif. Teopantli is a neighbour.",
 },
 },

 kasisi: {
 typical: [
 {
 title: "Oxen, not tractors",
 detail:
 "No-till, compost, a span of oxen. The 1990 turn against the mouldboard plough is still the weekday on 80 irrigated hectares.",
 },
 {
 title: "Course weeks",
 detail:
 "Three-to-five-day and two-week residential classes. Small-scale farmers from Chongwe and central Zambia. The dairy in the next field.",
 },
 {
 title: "Two dams",
 detail:
 "Irrigation that was supposed to go to 160 hectares and stayed at 80. Water is the argument in a drying season.",
 },
 ],
 unique: {
 title: "The Jesuit who put the plough away",
 detail:
 "Kasisi is the Chongwe training farm where Br. Paul Desmarais kept his Bible, dropped the tractor, trained more than 10,000 farmers, and took an Equator Prize, a school on mission land.",
 },
 },

 "awra-amba": {
 typical: [
 {
 title: "Weaving sheds",
 detail:
 "Traditional and modern looms. The cash that replaced the farm neighbours took. Equal annual salary. Six days, one free.",
 },
 {
 title: "School and library",
 detail:
 "A mud-walled classroom with posters and a globe. The library is the public room of a village with no religion.",
 },
 {
 title: "Guest committee",
 detail:
 "Bishops, consultants, journalists. Someone still decides which door is the tour and which is someone’s house.",
 },
 ],
 unique: {
 title: "The hill that would not take a priest or a husband as boss",
 detail:
 "Awra Amba is Zumra Nuru’s secular Fogera village, women and men on the same wage, displaced as communists, returned to weave, about 463 people on 17.5 hectares.",
 },
 },

 umoja: {
 typical: [
 {
 title: "Manyattas on the Waso",
 detail:
 "A women-only village of thatch and cow-dung walls. Men may visit in daylight. Girls running from marriage still arrive.",
 },
 {
 title: "Cottages and beads",
 detail:
 "Twelve self-contained rooms, about 30 guests, jewellery sold on the Isiolo–Marsabit road. The campsite pays the refuge.",
 },
 {
 title: "River and livestock",
 detail:
 "The Ewaso Ng’iro at the edge of the 14 acres. Goats, children, the weekday.",
 },
 ],
 unique: {
 title: "The village that would not take a husband as landlord",
 detail:
 "Umoja is Rebecca Lolosoli’s Samburu refuge, fifteen women, a 14-acre campsite, no men on the roll, still a CBO.",
 },
 },

 "st-jude": {
 typical: [
 {
 title: "Beds and mangoes",
 detail:
 "Integrated organic farming, 75% practical. Nurseries, compost, the sentence on the gate: feed the soil so that it feeds you.",
 },
 {
 title: "Women’s groups",
 detail:
 "Farmer cooperatives, youth, schools. Masaka, Rakai, Ssembabule, Mpigi. Extension is the weekday.",
 },
 {
 title: "Dried fruit",
 detail:
 "A plant that adds value so a mango is not just a mango. The cash.",
 },
 ],
 unique: {
 title: "The hopeless cause named for St. Jude",
 detail:
 "St. Jude Family Projects is Josephine Kizza’s Masaka NGO farm (S.5914/2000, 186,000 farmers trained, a president on the visitors’ book) a school. The farm became a training centre in 1997; the NGO number is 2000. Josephine is still executive director.",
 },
 },

 "khula-dhamma": {
 typical: [
 {
 title: "Cob and thatch",
 detail:
 "Houses of clay, sand, straw, bottle glass, old windscreens. The old farmhouse is the community house; the barn is a workshop.",
 },
 {
 title: "Food forest and Quko",
 detail:
 "Personal gardens, bees, a solar pump. Eight kilometres to deserted Wild Coast beaches. The river is the border.",
 },
 {
 title: "Retreat weeks",
 detail:
 "Yoga, writing, natural building, when the site is receiving. Volunteers 15–20 hours for a bed. Confirm; they pause.",
 },
 ],
 unique: {
 title: "The 180-hectare cob farm that is",
 detail:
 "Khula Dharma is five friends’ Wild Coast freehold, just under 300 hectares then, the site’s 180, cob rooms, a retreat door, and no sectional title on the Quko.",
 },
 },

 nadeet: {
 typical: [
 {
 title: "Parabolic cookers",
 detail:
 "No firewood in the Namib. School groups cook on the sun. Waste, water, and energy are the curriculum because they have to be.",
 },
 {
 title: "Dune programmes",
 detail:
 "Biodiversity walks, internships, Teach for ESD. The Centre sleeps children who have never seen this desert.",
 },
 {
 title: "Swakopmund office, Maltahöhe classroom",
 detail:
 "Two addresses. The town face books; the reserve teaches. NamibRand’s oryx are next door, not in a zoo.",
 },
 ],
 unique: {
 title: "The solar classroom on someone else’s dunes",
 detail:
 "NaDEET is Viktoria Keding’s 2003 Namibian trust, T168/2003, UNESCO-Japan Prize 2018, a centre on NamibRand that never pretended the 202,000 hectares were its lot.",
 },
 },

 kaydara: {
 typical: [
 {
 title: "School of life",
 detail:
 "Agroecology for young people who would otherwise leave for Dakar. Sixteen Fimela villages. Trees against the salt.",
 },
 {
 title: "Coconut and baobab",
 detail:
 "Land that was one coconut tree when Gora Ndiaye arrived. Produce sold locally. The Sine Saloum mangroves in the next frame.",
 },
 {
 title: "Salinised fields",
 detail:
 "More than 60% of the commune gone to salt. The weekday is still planting anyway.",
 },
 ],
 unique: {
 title: "The farm-school against the rural exodus",
 detail:
 "Kaydara is Gora Ndiaye’s Fimela classroom (21 June 2006, Association Jardins d’Afrique, come to the school of life) a training farm.",
 },
 },

 otepic: {
 typical: [
 {
 title: "Three gardens",
 detail:
 "Mitume 441 m² in town, Armani half an acre, Sabwani 10 ha under Mount Elgon. The real food revolution is still beds.",
 },
 {
 title: "Tabasamu",
 detail:
 "Twenty-two orphans in the work. Street-child food, water for about 3,000. Alcohol and drugs off the land.",
 },
 {
 title: "Trainings",
 detail:
 "Permaculture for Kitale and East Africa. Tamera on the partner list since 2011. A peace village in process.",
 },
 ],
 unique: {
 title: "The self-help project that bought a larger garden",
 detail:
 "OTEPIC is Philip Munyasia’s Kitale answer to hunger (slum beds, then 10 hectares at Sabwani, 22 orphans, a Tamera friendship) still a self-help group.",
 },
 },

 ndanifor: {
 typical: [
 {
 title: "What the photographs still show",
 detail:
 "Five acres, gardens, a lodge, the Spirit of Ndanifor. Bafut, 2012–16. The weekday that ended when the war arrived.",
 },
 {
 title: "Trainings elsewhere",
 detail:
 "Better World Cameroon still teaches permaculture and ecovillage design. The classroom is no longer reliably the original dirt.",
 },
 {
 title: "Grassfields road",
 detail:
 "Bamenda highlands, a Fon’s palace next door, a Ring Road that is also a front. Confirm before you go.",
 },
 ],
 unique: {
 title: "The paradise the war emptied",
 detail:
 "Ndanifor is Joshua Konkankoh’s Bafut demonstration, Gaia Trust 2015, looted in the Anglophone crisis, an NGO that still speaks for five acres you cannot currently move into.",
 },
 },

 basaisa: {
 typical: [
 {
 title: "Rooftop sun",
 detail:
 "Panels on village roofs since the late 1970s, a 2017 station on the association building. The weekday Arafa wanted instead of a diesel hour.",
 },
 {
 title: "Biogas and fields",
 detail:
 "Agricultural waste to gas, a Delta village’s crops. The association is the public room; the lanes are homes.",
 },
 {
 title: "Women’s training",
 detail:
 "Work compatible with the way the village already lived. Ashoka named it; the association still runs it.",
 },
 ],
 unique: {
 title: "The physicist who went home",
 detail:
 "Basaisa is Egypt’s solar village: Salah Arafa, 1974, rooftop PV before it was a slogan, a Community Development Association, and New Basaisa later a Sinai offshoot of 750 feddans.",
 },
 },

 "boabeng-fiema": {
 typical: [
 {
 title: "Monkeys in the lane",
 detail:
 "Campbell’s mona and Geoffroy’s pied colobus in the same trees as the houses. About 700. Kitchens still lose a mango.",
 },
 {
 title: "Guided forest",
 detail:
 "4.4 km² of village woodland. A local guide, a ticket, a walk. Visitors are asked not to feed.",
 },
 {
 title: "Small graves",
 detail:
 "A monkey that dies is buried in a coffin at Fiema. Children of the gods, still.",
 },
 ],
 unique: {
 title: "The bye-law that buried a colobus",
 detail:
 "Boabeng-Fiema is the twin villages that wrote a 1975 statute over an older taboo, 700 monkeys in the streets, a cemetery of small graves, a sanctuary.",
 },
 },

 fambidzanai: {
 typical: [
 {
 title: "Beds as classroom",
 detail:
 "Permaculture design, soil labs, seed. A Stapleford farm that has been teaching since 1988.",
 },
 {
 title: "Diploma weeks",
 detail:
 "Agroecology students on Dovedale Road. Farmers come from the wards and go home.",
 },
 {
 title: "PELUM soil",
 detail:
 "The network that grew from the same campus. A PVO.",
 },
 ],
 unique: {
 title: "Africa’s first permaculture school",
 detail:
 "Fambidzanai is John Wilson’s 1988 answer to the chemical package, ZIP-PVO12/92, a diploma on Harare’s edge, a campus.",
 },
 },

 guie: {
 typical: [
 {
 title: "Hedges against the wind",
 detail:
 "Wégoubri: bunds, ponds, living fences. The Sahel holding water instead of giving it to the dust.",
 },
 {
 title: "CFAR class",
 detail:
 "Young bocage builders at the farm-school. They go home to Kankamsin and Tankouri and dig.",
 },
 {
 title: "Perimeter round",
 detail:
 "From a 4-hectare experiment to Tankouri’s 100. Someone still walks the hedge.",
 },
 ],
 unique: {
 title: "The French technician who stayed",
 detail:
 "Guiè is Henri Girard’s Sahel bocage, AZN 27 January 1989, a farm-school 60 km north of Ouaga. Young builders still go home from CFAR to walk the Tankouri hedge.",
 },
 },

 chikukwa: {
 typical: [
 {
 title: "Contours and springs",
 detail:
 "Vetiver, woodlots, water that no longer asks a five-kilometre walk. Six villages copied one another’s designs.",
 },
 {
 title: "Chitekete centre",
 detail:
 "Kitchen, dormitory, halls. Trainees from other wards. Gift-economy labour on community works.",
 },
 {
 title: "Talking circles",
 detail:
 "Women’s groups, food-processing clubs, HIV circles from the late 1990s. The social layer the contours needed.",
 },
 ],
 unique: {
 title: "The hills that got their water back",
 detail:
 "Chikukwa is six Chimanimani villages that put the springs back, 1991 clubs, CELUCT 1995, Westermanns as catalysts, communal land.",
 },
 },

 "il-ngwesi": {
 typical: [
 {
 title: "Bandas on the rock",
 detail:
 "Thatch, a pool in the trees, the Mukogodo drop. Community-owned since 1996.",
 },
 {
 title: "Six villages below",
 detail:
 "Il Lakipiak pastoralists, cattle and wildlife on the same ranch. The lodge is the cash, not the title.",
 },
 {
 title: "Ranger round",
 detail:
 "Conserved core, neighbouring Lewa, solar on the ridge. Someone still walks the 8,645 hectares.",
 },
 ],
 unique: {
 title: "The lodge the Maasai own",
 detail:
 "Il Ngwesi is the first upmarket community-owned lodge in Kenya, group ranch 1995, bandas 1996, Equator Prize 2002, six villages.",
 },
 },

 lynedoch: {
 typical: [
 {
 title: "Institute campus",
 detail:
 "The old Drie Gewels Hotel as classrooms. Stellenbosch University programmes, a conference urn, vineyards out the window.",
 },
 {
 title: "School run",
 detail:
 "Spark Lynedoch, a crèche, a child-centred precinct. The social argument the HOA was built around.",
 },
 {
 title: "HOA weekday",
 detail:
 "Freehold houses, a code of conduct, mixed incomes on 6 ha. Someone still sits the Section 21.",
 },
 ],
 unique: {
 title: "The eco-village that is an HOA",
 detail:
 "Eve Annecke and Mark Swilling bought the ruined Drie Gewels Hotel and its 6 Stellenbosch hectares in 1999, founded the Sustainability Institute on the same campus, and built a mixed-income eco-HOA the municipality required as a Section 21 association.",
 },
 },

 anja: {
 typical: [
 {
 title: "Lemur troop",
 detail:
 "About 300 ring-tails on granite. Highest density on the island. A local guide required.",
 },
 {
 title: "RN7 gate",
 detail:
 "Thirteen kilometres south of Ambalavao. A ticket, a path, a lake at the cliff. 12,000 visitors in a peak year.",
 },
 {
 title: "School from the gate",
 detail:
 "Fees to teachers, aquaculture, fuelwood lots. The association is the village’s cash register.",
 },
 ],
 unique: {
 title: "The densest ring-tails on the south road",
 detail:
 "Anja is Madagascar’s model community reserve, Association Anja Miray 1999, 30 hectares, Equator Prize 2012, a granite woodland. Guides still walk the ring-tails they gazetted at the Three Sisters in 2001.",
 },
 },

 celo: {
 typical: [
 {
 title: "Assigned land",
 detail:
 "A modest refundable fee, a house you may own, dirt that stays with Celo Community, Inc. Fifty-odd families under the Black Mountains.",
 },
 {
 title: "School, camp, food co-op",
 detail:
 "Arthur Morgan School on a lease, Camp Celo since 1948, a crafts store, Cabin Fever University. The community does not employ you.",
 },
 {
 title: "South Toe after Helene",
 detail:
 "Seven feet of river in the Celo Inn, September 2024. Celo Commons is rebuilding the hub; the 1937 land trust did not wash out.",
 },
 ],
 unique: {
 title: "Morgan’s 1937 mountain trust",
 detail:
 "Celo is Arthur Morgan’s South Toe land trust, 1,200 acres, a 501(c)(4) from 1940, lifetime leases.",
 },
 },

 "sunrise-ranch": {
 typical: [
 {
 title: "Pavilion and dome",
 detail:
 "1986 hospitality hall, a geodesic dome, guest rooms. Resident staff cook and host in Eden Valley.",
 },
 {
 title: "Attunement culture",
 detail:
 "Emissaries of Divine Light since 1932. A programme. Trustees sit the legal face.",
 },
 {
 title: "Fire week, 2024",
 detail:
 "29 July evacuation of the valley. They came back. The 123 acres did not become lots while they were gone.",
 },
 ],
 unique: {
 title: "A $6,000 dry-land farm",
 detail:
 "Sunrise Ranch is the Emissary headquarters Meeker bought for $6,000 in 1945, 123 acres, about eighty-five resident staff, a retreat. A July 2024 fire evacuation emptied Eden Valley for days; the community returned. Still 123 acres, still no lots.",
 },
 },

 "ananda-village": {
 typical: [
 {
 title: "Expanding Light",
 detail:
 "The public retreat on the same 700 acres. Courses, guest stays, Crystal Hermitage gardens. Office hours are published as drop-in.",
 },
 {
 title: "Master’s Market and school",
 detail:
 "A village store, Living Wisdom School, a goat dairy, member businesses. Households keep their own income.",
 },
 {
 title: "Temple of Light",
 detail:
 "Dedicated around the fiftieth anniversary. Yoga. Housing demand sometimes spills to nearby rentals.",
 },
 ],
 unique: {
 title: "Yogananda’s Sierra colony",
 detail:
 "Ananda Village is Kriyananda’s 1968–69 world-brotherhood colony, 700 acres, two hundred residents, cooperative housing without a lot market.",
 },
 },

 sandhill: {
 typical: [
 {
 title: "Four adults, two youth",
 detail:
 "Three houses and a cabin on 168 acres. Monthly contributions. They are recruiting families who will actually farm.",
 },
 {
 title: "Sorghum memory",
 detail:
 "The FEC years made syrup famous. Field crops and a common purse until 2019. The mill is lineage; the purse is not.",
 },
 {
 title: "Next door to Dancing Rabbit",
 detail:
 "Same county, different legal form. DR is a 501(c)(2) land trust. Sandhill is a small nonprofit that used to share income. Do not confuse the pins.",
 },
 ],
 unique: {
 title: "The oldest farm in the Rutledge cluster",
 detail:
 "Sandhill is the 1974 FEC sorghum commune that dropped the common purse in 2019 and kept 168 acres in common. It is still seeking people. Four adults and two youth now live in three houses and a cabin.",
 },
 },

 linnaea: {
 typical: [
 {
 title: "Gunflint Lake farm",
 detail:
 "314 acres, twinflower, a CSA and a farm stand. Stewards, interns, a PDC. Trails to Hague Lake and Easter Bluff.",
 },
 {
 title: "No-sale trust",
 detail:
 "Cabot, the Trust for Public Land, Turtle Island Earth Stewards, a 1999 TLC covenant.",
 },
 {
 title: "Island courses",
 detail:
 "University of Victoria permaculture, Power of Hope, farmstays. The ferry from Quadra.",
 },
 ],
 unique: {
 title: "The twinflower farm",
 detail:
 "Linnaea is Cortes Island’s 314-acre no-sale farm, 1978 trust, 1999 covenant, Gunflint Lake, a teaching ranch.",
 },
 },

 "lost-valley": {
 typical: [
 {
 title: "PDC on oak savanna",
 detail:
 "87 acres, about 40 developed. Permaculture Design Certificate, EDE, Community Experience Weeks. Gardens historically 20–30% of on-site food.",
 },
 {
 title: "Meadowsong residencies",
 detail:
 "Affordable housing for staff, renters, volunteers. A programme of the 501(c)(3).",
 },
 {
 title: "Shiloh bones",
 detail:
 "The Land was a Youth Revival site of recycled houses. Lost Valley opened 1989. Lookout Point is the neighboring reservoir, not the title.",
 },
 ],
 unique: {
 title: "The Dexter teaching centre",
 detail:
 "Shiloh Youth Revival Centers built The Land here in the late 1960s; Lost Valley opened as a 501(c)(3) in 1989, and Meadowsong is the residential name on the same 87 Dexter acres.",
 },
 },

 windsong: {
 typical: [
 {
 title: "Common house supper",
 detail:
 "5,000 sq ft kitchen, dining, playroom, workshop, guest rooms. 34 townhomes around two atria.",
 },
 {
 title: "Yorkson Creek setback",
 detail:
 "Four of 5.8 acres left as forest, wetland, salmon. They fought Ottawa for a year over the line.",
 },
 {
 title: "A unit on the market",
 detail:
 "When a household leaves, windsong.bc.ca lists the townhome. Strata fees, consensus meetings, an honest HOA.",
 },
 ],
 unique: {
 title: "Canada’s first purpose-built cohousing",
 detail:
 "WindSong is the Langley strata finished 19 July 1996, 34 homes, a salmon creek, the HOA that proved cohousing could be built north of the border.",
 },
 },

 "camphill-ontario": {
 typical: [
 {
 title: "Nottawasaga farm day",
 detail:
 "Biodynamic fields, a wood shop, pottery, extended-family houses. 290 acres of river, farm, and forest at Angus.",
 },
 {
 title: "Sophia Creek",
 detail:
 "The Barrie neighbourhood. Same charity, a city street. Day supports and coworker years.",
 },
 {
 title: "Safeguarding first",
 detail:
 "Adults with developmental disabilities. Visit by arrangement. This is social care.",
 },
 ],
 unique: {
 title: "Ontario’s Camphill",
 detail:
 "Camphill Communities Ontario is the 1986 Nottawasaga charity, 290 acres, a Barrie neighbourhood, charity #106835879, the Copake pattern without Simcoe lots.",
 },
 },

 yarrow: {
 typical: [
 {
 title: "Groundswell common house",
 detail:
 "33 strata homes, timber-frame duplexes from 2008, a cohousing kitchen. About a hundred residents at the 2015 count, a third of them children.",
 },
 {
 title: "Twenty organic acres",
 detail:
 "A farm team, a CSA, a food forest on Stewart Creek. Lessees, not lot owners. Names of the farm entities have changed; the twenty acres have not.",
 },
 {
 title: "Yarrow Deli",
 detail:
 "A small co-op bought the road-front store in 2006. Mixed-use was always in the master plan. The zoning is the municipal famous part.",
 },
 ],
 unique: {
 title: "Canada’s first ecovillage zone",
 detail:
 "Yarrow is the 25-acre Chilliwack dairy that got Ecovillage zoning in 2006, YES Cooperative, a Groundswell strata, a 20-acre farm.",
 },
 },

 ecoreality: {
 typical: [
 {
 title: "ALR class-2 soils",
 detail:
 "43 acres on Fulford-Ganges Road, two stream licences, a Zone-1 building cluster. Goats have been the public photo.",
 },
 {
 title: "The wiki door",
 detail:
 "ecoreality.org is a public MediaWiki. Unusual, and useful: read who is actually on the land before you treat 2005 as this year.",
 },
 {
 title: "Neighbour farmland",
 detail:
 "61 acres of community farmland beside, parkland behind. Those titles are not EcoReality’s. Do not flatten the map.",
 },
 ],
 unique: {
 title: "The Salt Spring co-op that stayed a co-op",
 detail:
 "EcoReality is the 43-acre 2005 agricultural co-op that did not go strata, s. 149(1)(e), ALR, member-funders.",
 },
 },
  ...asiaDailyLife,
  ...russiaDailyLife,
  ...usaMoreDailyLife,
  ...polandDailyLife,
  ...volunteerBatchDailyLife,
  ...formerDailyLife,
  ...formerMoreDailyLife,
  ...formerClosedDailyLife,
  ...livingMoreDailyLife,
  ...livingBatch2DailyLife,
  ...livingBatch3DailyLife,
  ...livingBatch4DailyLife,
  ...livingBatch5DailyLife,
  ...livingBatch6DailyLife,
  ...livingBatch7DailyLife,
  ...livingBatch8DailyLife,
  ...livingBatch9DailyLife,
  ...livingBatch10DailyLife,
  ...livingBatch11DailyLife,
  ...livingBatch12DailyLife,
  ...livingBatch13DailyLife,
  ...livingBatch14DailyLife,
  ...livingBatch15DailyLife,
  ...livingBatch16DailyLife,
  ...livingBatch17DailyLife,
  ...livingBatch18DailyLife,
  ...livingBatch19DailyLife,
  ...livingBatch20DailyLife,
  ...livingBatch21DailyLife,
  ...livingBatch22DailyLife,
  ...livingBatch23DailyLife,
  ...livingBatch24DailyLife,
  ...livingBatch25DailyLife,
  ...livingBatch26DailyLife,
  ...livingBatch27DailyLife,
  ...livingBatch28DailyLife,
  ...livingBatch29DailyLife,
  ...livingBatch30DailyLife,
  ...livingBatch31DailyLife,
  ...livingBatch32DailyLife,
  ...livingBatch33DailyLife,
  ...livingGlampingDailyLife,
  ...sustainableEcovillageDailyLife,
  ...maitreyaEcovillageDailyLife,
};

const fallback: DailyLife = {
 typical: [
 { title: "Shared meals", detail: "A common table is the default weekday." },
 { title: "Land care", detail: "Gardens, buildings, and the roster nobody escaped." },
 { title: "Meetings", detail: "Consensus, sociocracy, or a board, someone has to decide." },
 ],
 unique: {
 title: "Not assembled",
 detail: "A signature practice was not recorded for this community.",
 }
};

export function dailyLifeFor(slug: string): DailyLife {
 const row = dailyLifeBySlug[slug] ?? fallback;
 const known = knownForBySlug[slug];
 if (!known) return row;
 return { ...row, unique: known };
}
