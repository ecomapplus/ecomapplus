import type { Community } from "./communities";

/** Ten more U.S. and Canadian communities (5 + 5), oldest-founded first. Beyond the original North America cluster (Lama, Arcosanti, Alpha Farm, Sirius, Acorn, La Cité Écologique, O.U.R., Whole Village) and the core atlas U.S. villages. */
export const usaCanadaCommunities: Community[] = [
 {
 slug: "celo",
 name: "Celo Community",
 location: "South Toe River valley, Yancey County, between Celo and Hamrick, under the Black Mountains",
 region: "North Carolina, USA",
 country: "United States",
 foundedYear: 1937,
 foundedLabel: "1937 (Celo Community, Inc. tax-exempt 1940)",
 members: 80,
 membersLabel: "~53 family units / ~80 adults",
 acres: 1200,
 acresLabel: "~1,100–1,200 acres in the South Toe",
 legalStructure:
 "Celo Community, Inc., a North Carolina 501(c)(4) civic-league nonprofit (EIN 56-6049967, tax-exempt April 1940) that holds the land as a trust and assigns it to members for a modest one-time refundable fee, like a lifetime lease. Members may own the house; they never own the land. Consensus membership; no more than 15% dissenting. Regnery. Arthur Morgan School, Camp Celo, and a health centre lease land from CCI; they are not the landlord.",
 legalCategory: "Community land trust",
 stillActive: true,
 images: [
 "/communities/celo-land.jpg",
 "/communities/celo-1.jpg",
 "/communities/celo-2.jpg",
 "/communities/celo-3.jpg",
 ],
 summary:
 "Under Mount Mitchell, Arthur Morgan’s 1937 land trust still holds about 1,200 acres of the South Toe. Fifty families live on lifetime leases. A 501(c)(4) that never sold a lot, and one of the oldest intentional communities still on the land in the United States.",
 businessModel:
 "The community does not employ its members. People work off-site, in cottage industry, at Camp Celo (1948, Quaker farm camp), or at Arthur Morgan School (1962, grades 7–9). A food co-op, a crafts store, and Cabin Fever University are the village economy. CCI leases land cheaply to the school, the camp, a preschool, a health centre, and a neighborhood organic farm.",
 foundingProcess:
 "Arthur Ernest Morgan (engineer, Antioch College president, TVA chairman) wanted a small-scale civil society in the mountains. With William H. Regnery’s money and a board that included Clarence Pickett, he founded Celo in 1937 in the South Toe valley of Yancey County. He recruited from Civilian Public Service camps in the war years. Population stabilized around 1948. Elizabeth and Ernest Morgan opened Arthur Morgan School on community land in 1962. Helene (September 2024) put seven feet of South Toe inside the Celo Inn; Celo Commons is rebuilding that building as a 501(c)(3) hub, not as a rewrite of the 1937 land trust.",
 governance:
 "Consensus of the members. Land is assigned, never sold. A clerk and subcommittees (property, finance) do the paperwork. New people sit a waiting list; some families settle on the periphery. Predominantly Quaker in culture, with no religious test.",
 website: "https://en.wikipedia.org/wiki/Celo_Community",
 timeline: [
 { year: "1937", event: "Arthur Morgan founds Celo in the South Toe valley with Regnery money." },
 { year: "1940", event: "Celo Community, Inc. tax-exempt as a 501(c)(4) (EIN 56-6049967)." },
 { year: "1948", event: "Camp Celo opens; population of the settlement has stabilized." },
 { year: "1962", event: "Elizabeth and Ernest Morgan found Arthur Morgan School on community land." },
 { year: "2024–26", event: "Helene floods the Celo Inn; Celo Commons rebuilds as a separate 501(c)(3)." },
 { year: "Present", event: "~53 family units on ~1,200 acres; lifetime leases, still no lots." },
 ],
 },
 {
 slug: "sunrise-ranch",
 name: "Sunrise Ranch",
 location: "100 Sunrise Ranch Road, Eden Valley, west of Loveland, Front Range foothills",
 region: "Colorado, USA",
 country: "United States",
 foundedYear: 1945,
 foundedLabel: "1945 (Emissaries of Divine Light 1932; ranch $6,000)",
 members: 85,
 membersLabel: "A resident staff community on the order of 85",
 acres: 123,
 acresLabel: "123-acre dry-land farm in Eden Valley (the 1945 purchase; still the published acreage)",
 legalStructure:
 "Headquarters of Emissaries of Divine Light, a spiritual network Lloyd Arthur Meeker (Uranda) began in 1932. The ranch is a conference and retreat centre staffed by a residential community, held by the Emissary organization, a religious society / nonprofit. You come for a programme or to join the staff community. Trustees of the Emissaries, elected by an international congress, are the legal face. David Karchere is the current spiritual director.",
 legalCategory: "Religious society",
 stillActive: true,
 images: [
 "/communities/sunrise-ranch-land.jpg",
    "/communities/sunrise-ranch-people.jpg",
 "/communities/sunrise-ranch-1.jpg",
 "/communities/sunrise-ranch-2.jpg",
 "/communities/sunrise-ranch-3.jpg",
 ],
 summary:
 "Lloyd Arthur Meeker bought a 123-acre Eden Valley ranch for $6,000 in 1945. Sunrise Ranch is still Emissary headquarters, a staff community of about eighty-five, and a Front Range retreat. A spiritual village that never cut the ranch into lots.",
 businessModel:
 "Retreats, conferences, and programmes in the Pavilion (1986), a geodesic dome, guest rooms, and a dining hall. Resident staff cook, farm, and host. Programme fees and gifts, not lot sales. A July 2024 fire evacuation emptied Eden Valley for days; the community returned.",
 foundingProcess:
 "Meeker founded the Emissaries of Divine Light in 1932. In 1945 he bought a barren 123-acre dry-land farm in Eden Valley, west of Loveland (a barn, two run-down houses, a few outbuildings) for $6,000. The ranch became the movement’s headquarters. By 1986 the Pavilion, residences, and a dome were up. The Emissaries remain a global trustee-led network; Sunrise is the Colorado body of the Front Range.",
 governance:
 "Trustees of the Emissaries and a spiritual director. Residents are staff and community members, not shareholders. Visit by programme. Joining is a vocational and spiritual path. Confirm current programmes; the valley is a working retreat.",
 website: "https://sunriseranch.org/",
 timeline: [
 { year: "1932", event: "Lloyd Arthur Meeker founds Emissaries of Divine Light." },
 { year: "1945", event: "123-acre Eden Valley farm purchased for $6,000; Sunrise Ranch opens." },
 { year: "1986", event: "Pavilion, residences, and a geodesic dome on the ranch." },
 { year: "2024", event: "29 July fire evacuation of Eden Valley; residents return." },
 { year: "Present", event: "~85 resident staff; retreats still the door; still 123 acres, still no lots." },
 ],
 },
 {
 slug: "ananda-village",
 name: "Ananda Village",
 location: "14618 Tyler Foote Road, Nevada City, Sierra Nevada foothills",
 region: "California, USA",
 country: "United States",
 foundedYear: 1968,
 foundedLabel: "1968 (70-acre retreat); village 1969 as Ananda Cooperative Community",
 members: 220,
 membersLabel: "~200–250 residents (village site: ~200 adults and children; Ananda.org: ~250 on 750 acres)",
 acres: 700,
 acresLabel: "~700–750 acres in the Sierra foothills (70 in 1968 + 236 in 1969 + 326 in 1974)",
 legalStructure:
 "A cooperative spiritual community of Ananda Sangha, founded by Swami Kriyananda (J. Donald Walters), a direct disciple of Paramhansa Yogananda. Non-residential land sits with Ananda Church of Self-Realization; housing is a mix of community-owned and cooperatively held dwellings, members invest in the housing inventory, not in a speculative lot. Independent household finances; not income-sharing. Expanding Light Retreat and Ananda Meditation Retreat are the public 501(c)(3) doors on the same land.",
 legalCategory: "Religious society",
 stillActive: true,
 images: [
 "/communities/ananda-village-land.jpg",
    "/communities/ananda-village-people.jpg",
 "/communities/ananda-village-1.jpg",
 "/communities/ananda-village-2.jpg",
 "/communities/ananda-village-3.jpg",
 ],
 summary:
 "In the Sierra foothills, Swami Kriyananda planted Yogananda’s world-brotherhood colony in 1968–69. Ananda Village is now about two hundred residents on seven hundred acres, with a Temple of Light. A cooperative spiritual village that took the land off the market without pretending it was a CLT.",
 businessModel:
 "Expanding Light and the Meditation Retreat (courses, guest stays), Living Wisdom School, Master’s Market, a goat dairy, an organic farm, Crystal Hermitage gardens, and scores of member businesses. Residents keep their own income; community jobs pay modestly. anandavillage.org has visiting notes; drop-in during office hours is published.",
 foundingProcess:
 "In 1968 Kriyananda bought 70 acres near Nevada City as a retreat. In 1969 he added 236 acres for Ananda Cooperative Community. Another 326 acres in 1974. Teepees, trailers, and cabins first; a school, two retreats, and the Temple of Light later. Kriyananda died in 2013. The village is one of several Ananda colonies; this one remains the headquarters landscape.",
 governance:
 "A blend of ashram, co-op, and village: a Village Council, paid community positions, town-hall meetings. Membership is spiritual and residential, with a path through courses and a stay. Housing demand sometimes exceeds supply; some members live nearby.",
 website: "https://anandavillage.org/",
 timeline: [
 { year: "1968", event: "Kriyananda buys 70 acres near Nevada City as a retreat." },
 { year: "1969", event: "236 more acres; Ananda Cooperative Community founded." },
 { year: "1974", event: "326 adjacent acres acquired; the village footprint takes shape." },
 { year: "2013", event: "Swami Kriyananda dies; the village continues." },
 { year: "2019", event: "Fiftieth anniversary; Temple of Light dedicated." },
 { year: "Present", event: "~200–250 residents on ~700 acres; retreats still the public door." },
 ],
 },
 {
 slug: "sandhill",
 name: "Sandhill Farm",
 location: "29398 County Road 203, Rutledge, Scotland County, next to Dancing Rabbit",
 region: "Missouri, USA",
 country: "United States",
 foundedYear: 1974,
 foundedLabel: "1974 (FEC income-sharing until 2019 restructure)",
 members: 6,
 membersLabel: "4 adults and 2 youth in three houses and a cabin (current published household)",
 acres: 168,
 acresLabel: "168 acres of fields and forest (older sorghum-era accounts said ~135)",
 legalStructure:
 "A Missouri nonprofit land project: members are the board; they collectively caretake land, houses, and infrastructure, and pay monthly contributions for taxes, utilities, and upkeep. From 1974 to 2019 this was a fully income-sharing Federation of Egalitarian Communities commune (sorghum syrup was the famous product) on the same dirt Dancing Rabbit later bought next door. In 2019 they restructured to private dwellings and financial autonomy while keeping the land in common. The FEC common purse ended; the 168 acres did not become Scotland County parcels.",
 legalCategory: "Nonprofit land project",
 stillActive: true,
 images: [
 "/communities/sandhill-land.jpg",
    "/communities/sandhill-people.jpg",
 "/communities/sandhill-1.jpg",
 "/communities/sandhill-2.jpg",
 "/communities/sandhill-3.jpg",
 ],
 summary:
 "The oldest farm in the Rutledge cluster. Sandhill has pressed sorghum since 1974 on 168 acres, taught Dancing Rabbit the county, and in 2019 laid down the common purse. Still a small Missouri farm, still seeking families.",
 businessModel:
 "Historically sorghum syrup, field crops, and a common purse. Now gardens, hay, forest, and monthly member contributions. Actively recruiting families with farming energy. Visitor and intern path. Dancing Rabbit’s tours are next door; Sandhill is a quieter farm.",
 foundingProcess:
 "Sandhill formed in 1974 as an egalitarian farm in Scotland County. It joined the Federation of Egalitarian Communities and became known for sorghum. Dancing Rabbit arrived in the 1990s on adjacent land; Red Earth Farms later. Three experiments, three legal forms. In 2019 Sandhill dropped income-sharing so households could have private dwellings and their own money, while the nonprofit still held the 168 acres. The membership is now small and looking for people.",
 governance:
 "Consensus of the member-board. You visit, intern, then ask. Capacity is rooms and labour. Easier to visit than in the FEC years;. Do not confuse with Dancing Rabbit’s 501(c)(2) land trust next door.",
 website: "https://sandhillfarm.org/",
 timeline: [
 { year: "1974", event: "Sandhill Farm founded as an income-sharing FEC community in Rutledge." },
 { year: "1990s", event: "Dancing Rabbit buys nearby; the Rutledge cluster takes shape." },
 { year: "2015", event: "Sorghum still the public face on about 135 acres in contemporary press." },
 { year: "2019", event: "Restructure: private dwellings, financial autonomy, land still common." },
 { year: "Present", event: "4 adults, 2 youth, 168 acres; recruiting families; still no lots." },
 ],
 },
 {
 slug: "linnaea",
 name: "Linnaea Farm",
 location: "Gunflint Lake, Cortes Island, Discovery Islands, Strathcona",
 region: "British Columbia, Canada",
 country: "Canada",
 foundedYear: 1978,
 foundedLabel: "1978 (Cabot / Trust for Public Land / Turtle Island Earth Stewards); covenant 1999",
 members: 8,
 membersLabel: "Resident stewards and seasonal farmers, interns, and course students",
 acres: 314,
 acresLabel: "314 acres / 127 ha on Gunflint Lake (TLC of BC figure)",
 legalStructure:
 "A no-sale land trust. Robert Cabot bought the Hansen family’s Lakeview Ranch in 1978, transferred title to the U.S. Trust for Public Land, which transferred it with restrictions to Turtle Island Earth Stewards, a BC society. The Land Conservancy of BC holds a conservation covenant (1999) with the Quadra Island Conservancy. Linnaea Farm Society teaches and farms. You steward, intern, or take a PDC. Named for Linnaea borealis, the twinflower.",
 legalCategory: "Charitable trust",
 stillActive: true,
 images: [
 "/communities/linnaea-land.jpg",
 "/communities/linnaea-people.jpg",
 "/communities/linnaea-1.jpg",
 "/communities/linnaea-2.jpg",
 "/communities/linnaea-3.jpg",
 ],
 summary:
 "On Cortes Island, 314 acres of farm around Gunflint Lake cannot be sold. Cabot and the Trust for Public Land did that in 1978; a TLC covenant followed in 1999. Linnaea still teaches, still milks the place as a land-trust farm.",
 businessModel:
 "CSA and farm stand, agricultural internships, family farmstays, University of Victoria permaculture, Power of Hope camps, a farmout video series. Regenerative market gardens, pasture, forest. Course and produce income, not lot sales. The farm site has visiting notes. Trails to Cortes Bay, Easter Bluff, and Hague Lake cross the farm; they are a public culture.",
 foundingProcess:
 "Michael Manson pre-empted 160 acres on Gunflint Lake in 1887, first European settler on Cortes. The Hansen family built Lakeview Ranch (dairy, guest ranch, hay). In 1978 they sold to Robert Cabot, keeping 16 acres. Cabot put the land in the Trust for Public Land; TPL passed it to Turtle Island Earth Stewards as a no-sale trust and the place was renamed Linnaea. A TLC/Quadra covenant in 1999 locked the conservation layer. Stewards have farmed and taught there since.",
 governance:
 "A land-trust society and a farm society. Resident stewards and a waiting culture for people who will actually farm. Visitors come for a course or a stay. Confirm current steward openings, the farm has advertised for them. Klahoose, Tla’amin, and Homalco territory; the 1887 pre-emption is the settler origin, not the first story.",
 website: "https://www.linnaeafarm.org/",
 timeline: [
 { year: "1887", event: "Michael Manson pre-empts 160 acres on Gunflint Lake." },
 { year: "1978", event: "Cabot buys Lakeview Ranch; TPL and Turtle Island Earth Stewards make a no-sale trust." },
 { year: "1999", event: "The Land Conservancy of BC and Quadra Island Conservancy covenant 127 ha." },
 { year: "Present", event: "314 acres, stewards, CSA, PDC; still no Cortes lot." },
 ],
 },
 {
 slug: "camphill-ontario",
 name: "Camphill Communities Ontario",
 location: "7841 4th Line, Angus, Nottawasaga farm; Sophia Creek neighbourhood in Barrie",
 region: "Ontario, Canada",
 country: "Canada",
 foundedYear: 1986,
 foundedLabel: "1986 (Nottawasaga farm; Cascadia Society in BC was 1984)",
 members: 80,
 membersLabel: "Adults with developmental disabilities, coworkers, and day-programme people across two sites (exact roll unpublished)",
 acres: 290,
 acresLabel: "290 acres of river, farmland, and forest at Nottawasaga; plus an urban neighbourhood in Barrie",
 legalStructure:
 "Camphill Communities Ontario, a Canadian registered charity (charity #106835879 RR0001) supporting adults with intellectual and developmental disabilities in Simcoe County. The rural site is Camphill Nottawasaga on 290 acres; the urban site is Sophia Creek in Barrie. A Camphill. Coworkers live in; day supports and workshops (wood, pottery, biodynamic farm) are the work. Camphill Foundation Canada is associated money, not the title. Distinct from Camphill Village Copake in New York, already in this atlas.",
 legalCategory: "Nonprofit foundation",
 stillActive: true,
 images: [
 "/communities/camphill-ontario-land.jpg",
    "/communities/camphill-ontario-people.jpg",
 "/communities/camphill-ontario-1.jpg",
 "/communities/camphill-ontario-2.jpg",
 "/communities/camphill-ontario-3.jpg",
 ],
 summary:
 "Ontario’s Camphill sits on 290 acres of the Nottawasaga, with a Barrie neighbourhood besides. A registered charity since 1986, in the Copake pattern: shared households, no Simcoe lots.",
 businessModel:
 "Provincial disability-support contracts, charity fundraising, a biodynamic farm, wood shop and pottery sold at fairs. Volunteer coworker years still exist in the Camphill way. Confirm current admission, this is social care.",
 foundingProcess:
 "Coworkers from Camphill Special School helped found Cascadia Society in Canada (1984) and Camphill Ontario (1986) on a farm at Angus. The rural community took the name Nottawasaga. A later urban neighbourhood, Sophia Creek, opened in Barrie as Simcoe grew. The charity remains a full member of the Camphill Association of North America.",
 governance:
 "A charitable board and Camphill coworker culture. Villagers are residents of a care community, not shareholders. Visit by arrangement. Joining as a coworker is a vocational year or a life. Harder than a farm stay, safeguarding is what matters.",
 website: "https://www.camphill.on.ca/",
 timeline: [
 { year: "1984", event: "Cascadia Society founded in Canada from Camphill Special School coworkers." },
 { year: "1986", event: "Camphill Ontario opens on the Nottawasaga farm at Angus." },
 { year: "Later", event: "Sophia Creek urban neighbourhood in Barrie." },
 { year: "Present", event: "290-acre farm plus Barrie; charity #106835879 RR0001; still no lots." },
 ],
 },
 {
 slug: "lost-valley",
 name: "Lost Valley Education Center",
 location: "81868 Lost Valley Lane, Dexter, 18 miles southeast of Eugene, Lane County",
 region: "Oregon, USA",
 country: "United States",
 foundedYear: 1989,
 foundedLabel: "1989 (on the old Shiloh Youth Revival Centers land; teaching centre from the mid-1990s)",
 members: 25,
 membersLabel: "Resident staff, renters, and volunteers of Meadowsong Ecovillage (varies with courses)",
 acres: 87,
 acresLabel: "87 acres of oak savanna, woodland, and mixed conifer (about 40 acres developed; some later notes say 89)",
 legalStructure:
 "Lost Valley Education Center, an Oregon 501(c)(3) environmental nonprofit on 87 acres. Meadowsong Ecovillage is the residential community that provides affordable housing and land access on the same title. You take a course, a Community Experience Week, or a residency.",
 legalCategory: "501(c)(3)",
 stillActive: true,
 images: [
 "/communities/lost-valley-land.jpg",
    "/communities/lost-valley-people.jpg",
 "/communities/lost-valley-1.jpg",
 "/communities/lost-valley-2.jpg",
 "/communities/lost-valley-3.jpg",
 ],
 summary:
 "An 87-acre teaching ecovillage in Dexter, Oregon — oak savanna, woodland, creek, and gardens about twenty minutes east of Eugene — on the old Shiloh Youth Revival Centers land. Founded in 1989 as a nonprofit educational center and intentional community; the residential side is Meadowsong Ecovillage. Sociocracy-inspired governance, nonviolent communication, and permaculture stewardship guide daily life. Courses run from a Permaculture Design Certificate and Ecovillage Design Education immersion to community experience weeks; many new residents arrive through the Holistic Sustainability Semester or an internship. Still a working school-and-village, not a spa with compost.",
 businessModel:
 "Permaculture Design Certificate, Ecovillage Design Education, Community Experience Weeks, social-forestry camps, youth programmes, lodging. Course and stay fees. Gardens supply a share of on-site food (historically 20–30%). Heart of Now (once Naka-Ima) now runs off-site in Eugene; it is lineage, not the landlord.",
 foundingProcess:
 "Shiloh Youth Revival Centers built “The Land” here from recycled houses in the late 1960s. In the 1980s Shiloh sold to a group that wanted an eco-village. Lost Valley Education Center opened in 1989; the teaching centre took shape in the mid-1990s. Meadowsong is the residential name. Lookout Point and Dexter reservoirs are the neighboring water, not the title.",
 governance:
 "A 501(c)(3) board and resident community. Interns and course students are not automatically members. Affordable housing on site is a programme of the charity. Arrange a visit; the Lane is a working campus.",
 website: "https://www.lostvalley.org/",
 timeline: [
 { year: "Late 1960s", event: "Shiloh Youth Revival Centers build “The Land” at Dexter." },
 { year: "1980s", event: "Shiloh sells to a group that wants an eco-village." },
 { year: "1989", event: "Lost Valley Education Center founded as a 501(c)(3)." },
 { year: "Mid-1990s", event: "Teaching centre (PDC, community immersion) takes shape." },
 { year: "Present", event: "Meadowsong on 87 acres; courses still the public door." },
 ],
 },
 {
 slug: "windsong",
 name: "WindSong Cohousing",
 location: "20543 96th Avenue, Walnut Grove, Langley Township, Yorkson Creek",
 region: "British Columbia, Canada",
 country: "Canada",
 foundedYear: 1996,
 foundedLabel: "Completed 19 July 1996 (Canada’s first purpose-built cohousing)",
 members: 34,
 membersLabel: "34 townhomes, individually owned, plus a 5,000 sq ft common house",
 acres: 5.8,
 acresLabel: "5.8 acres; about 4 acres kept as forest, wetland, and Yorkson Creek setback",
 legalStructure:
 "A British Columbia strata corporation: a condo/HOA of 34 individually owned townhomes with a cohousing common house and a consensus culture. Homes are on the market when a household leaves. WindSong acquired a 5.8-acre field with one house, fought a year with the federal environment ministry over the salmon-creek setback, and built on about one-third of the land. The Tyee and the Globe and Mail both treat 19 July 1996 as the day Canadian cohousing became a built fact.",
 legalCategory: "Homeowners association",
 stillActive: true,
 images: [
 "/communities/windsong-land.jpg",
    "/communities/windsong-people.jpg",
 "/communities/windsong-1.jpg",
 "/communities/windsong-2.jpg",
 "/communities/windsong-3.jpg",
 ],
 summary:
 "Thirty-four Langley townhomes opened on 19 July 1996 around a salmon creek. WindSong was Canada’s first purpose-built cohousing: a strata, 5.8 acres, and proof that the form could be built north of the border.",
 businessModel:
 "Individual mortgages and strata fees (gas, heat, Wi-Fi in later listings). A 5,000 sq ft common house with kitchen, dining, playroom, workshop, guest rooms. Community gardens. Houses sell when they sell, windsong.bc.ca lists them.",
 foundingProcess:
 "A Vancouver-area cohousing group, with Charles Durrett in the background of the Canadian wave, bought 5.8 acres in Walnut Grove. After a year-long setback fight over Yorkson Creek they clustered 34 units from 740 to 1,840 sq ft and finished on 19 July 1996. A quarter-century later BC had a stack of daughter projects. WindSong remains the first completed purpose-built one.",
 governance:
 "Strata council plus a cohousing consensus process the community has used for decades. Buy a unit if one is for sale; then sit the culture. Easier than a closed co-op, more meetings than a raw Langley townhouse. Kwantlen and other Coast Salish territory; the 1996 completion is the settler cohousing date, not the first story of the creek.",
 website: "https://windsong.bc.ca/",
 timeline: [
 { year: "Early 1990s", event: "A Vancouver-area group forms to build cohousing." },
 { year: "1995–96", event: "5.8 acres in Walnut Grove; a year-long Yorkson Creek setback fight." },
 { year: "1996", event: "34 homes completed 19 July, Canada’s first purpose-built cohousing." },
 { year: "2021", event: "The Tyee marks a quarter-century of BC cohousing from this site." },
 { year: "Present", event: "34 strata homes, 4 acres of creek and forest, still for sale when a unit turns." },
 ],
 },
 {
 slug: "yarrow",
 name: "Yarrow Ecovillage",
 location: "42312 Yarrow Central Road, Chilliwack, Fraser Valley, Stó:lō territory",
 region: "British Columbia, Canada",
 country: "Canada",
 foundedYear: 2002,
 foundedLabel: "August 2002 (YES Cooperative; ecovillage zoning 2006; Groundswell strata 2013)",
 members: 100,
 membersLabel: "~100 residents in 2015 (one third children) in Groundswell’s 33 homes, plus farm households",
 acres: 25,
 acresLabel: "25 acres / 10 ha former dairy (about 20 acres certified organic farm, plus mixed-use and cohousing)",
 legalStructure:
 "Three entities under one umbrella, by design. The Yarrow Ecovillage Society (YES) Cooperative bought the 25-acre dairy in 2002. Chilliwack granted Canada’s first “Ecovillage zoning” in 2006. In 2010 Charles Durrett and Katie McCamant helped split farm, residential, and commercial. Groundswell Cohousing is a 33-home BC strata: a condo association with a cohousing culture. The farm is a cooperative that leases the organic twenty acres. A deli cooperative bought the Yarrow Deli in 2006. You may buy a Groundswell unit if one is for sale.",
 legalCategory: "Housing cooperative",
 stillActive: true,
 images: [
 "/communities/yarrow-land.jpg",
    "/communities/yarrow-people.jpg",
 "/communities/yarrow-1.jpg",
 "/communities/yarrow-2.jpg",
 "/communities/yarrow-3.jpg",
 ],
 summary:
 "A 25-acre Chilliwack dairy became Canada’s first ecovillage zone. YES Cooperative in 2002, Groundswell strata, a 20-acre organic farm. Yarrow told the truth about strata and still kept the farm.",
 businessModel:
 "Strata homes, farm leases (Osprey, Ohm, Soban, Ripple Creek, Chubby Roots, The Farmacy over the years), a CSA, a food forest on Stewart Creek, the Yarrow Deli. Construction of timber-frame duplexes from 2008. Chilliwack Chamber Sustainability Leadership Award 2014. groundswellcohousing.ca is the residential door.",
 foundingProcess:
 "A Vancouver-area group, after the 1990s ecovillage wave and the 1995 Findhorn conference, found a disused dairy in Yarrow in 2002. YES Cooperative formed in August. Organic farming began 2003. First rezoning 2004; full ecovillage zoning July 2006. Durrett/McCamant in 2010 turned the housing into Groundswell cohousing; the strata was in place by 2013. Last residential phase mid-2014. Stó:lō territory; the dairy purchase is the settler project date.",
 governance:
 "YES Cooperative at the umbrella; Groundswell strata council for the 33 homes; a farm team / farm co-op on the twenty acres; a deli co-op. Buy a unit, lease farm land, or work the deli. Easier than a closed commune, more meetings than a raw Chilliwack acreage. Confirm which farm entities are current in the season you mean.",
 website: "https://groundswellcohousing.ca/",
 timeline: [
 { year: "2002", event: "YES Cooperative formed; 25-acre Yarrow dairy purchased." },
 { year: "2003", event: "Organic farm in operation." },
 { year: "2006", event: "Chilliwack grants Canada’s first Ecovillage zoning; Yarrow Deli purchased." },
 { year: "2010–13", event: "Durrett/McCamant split farm / residential / commercial; Groundswell becomes a strata." },
 { year: "2014–15", event: "Residential build-out; ~100 residents; Chamber sustainability award." },
 { year: "Present", event: "33 cohousing homes, ~20-acre organic farm, mixed-use road frontage." },
 ],
 },
 {
 slug: "ecoreality",
 name: "EcoReality Co-op",
 location: "2152 Fulford-Ganges Road, Salt Spring Island, south end, next to community farmland",
 region: "British Columbia, Canada",
 country: "Canada",
 foundedYear: 2005,
 foundedLabel: "1 October 2005 (43-acre farm; s. 149(1)(e) agricultural co-op)",
 members: 8,
 membersLabel: "A small member-funders’ co-op (public roll unpublished; the project has long advertised for more)",
 acres: 43,
 acresLabel: "43 acres, Class 2 soils in the ALR, beside a 61-acre community farmland site and public parkland",
 legalStructure:
 "EcoReality Co-op, a British Columbia not-for-profit agricultural cooperative, tax-exempt under Income Tax Act s. 149(1)(e). The 43-acre farm is co-op land, not strata lots. Two houses (four bedrooms in an early count), Zone-1 building cluster, water licences on two streams. You buy a co-op membership and help pay the land. Jan Steinman and Cleome Rowe have been the public faces. The adjoining 61 acres are community farmland, not EcoReality’s title.",
 legalCategory: "Housing cooperative",
 stillActive: true,
 images: [
 "/communities/ecoreality-land.jpg",
 "/communities/ecoreality-1.jpg",
 "/communities/ecoreality-2.jpg",
 "/communities/ecoreality-3.jpg",
 ],
 summary:
 "On Salt Spring, a 43-acre agricultural co-op sits in the ALR with two streams and a 61-acre neighbour of community farmland. EcoReality started in 2005 and stayed a co-op instead of going strata.",
 businessModel:
 "Organic / permaculture farm, member equity toward the land, students and visitors, right-livelihood enterprises the co-op has tried to host. ecoreality.org (a public wiki) is the unusual door. The project has sought additional member-funders for years; confirm who is actually on the land before you treat a 2005 vision as a 2026 household.",
 foundingProcess:
 "The co-op commenced 1 October 2005 on 43 acres at the south end of Salt Spring, on Fulford-Ganges Road, with parkland behind and a 61-acre community farmland site beside. Class 2 soils in the Agricultural Land Reserve were the agricultural argument. A building cluster in permaculture Zone 1, goats, gardens. Cowichan, Tsawout, and other Coast Salish territory; the co-op date is the settler project.",
 governance:
 "A not-for-profit co-op of member-funders. Consensus culture on a small roll. Visit by arrangement with the people who answer the wiki. Joining is membership and land-debt. Harder than a Salt Spring B&B; easier than a closed commune, if they are actually taking members that year.",
 website: "https://www.ecoreality.org/",
 timeline: [
 { year: "2005", event: "EcoReality Co-op commences 1 October on 43 acres, Fulford-Ganges Road." },
 { year: "2010s", event: "Farm, goats, internships, and a public wiki; still seeking member-funders." },
 { year: "Present", event: "43 acres in the ALR beside 61 acres of community farmland; still a co-op, still no lot." },
 ],
 }
];
