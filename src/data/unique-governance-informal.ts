import type { InformalAgreement } from "./informal-agreements";

/** Informal compacts rewritten so they follow each unique inner constitution. */
export const uniqueGovernanceInformal: Record<string, InformalAgreement[]> = {
  "sabbathday-lake": [
    { kind: "quiet-practice", why: "Celibacy, confession, and Sunday Meeting in the 1794 Meetinghouse are the inner law, not a lifestyle add-on. Guests sit Meeting; they do not treat the dwelling houses as a B&B, and they do not vote with the Ministry of three." },
    { kind: "guest-stay", why: "A public museum, herb shop, and Open Farm Day sit beside three covenanted members. The compact is which doors are the tour and which are still a home the Elders and Eldresses actually sleep in." },
    { kind: "course-host", why: "Museum tours, herb workshops, and Maine Open Farm Day are the public door. Meeting and the dwelling houses are not a ticketed show." },
    { kind: "volunteer-intern", why: "Farm, museum, and herb-house shifts, plus dated volunteer work days. Labour is welcome; a key to a dwelling house is not." },
    { kind: "land-care", why: "Nearly 1,800 acres of farm, bog, herbs, and timber sit with the United Society corporation. The still-room is a trade. A guest does not harvest the herb garden as a souvenir." },
    { kind: "media-story", why: "The last Shakers in the world. Every journalist wants the same photograph of the remaining three. Names, Meeting, and the dwelling houses are not a press kit. The Ministry speaks, or nobody does." }
  ],
  riverside: [
    { kind: "common-purse", why: "Rent to the 1953 trust, a weekly allowance from the community fund, no private sale of houses or cars. The informal layer is what a person may actually keep when the meeting and the trustees are not the same body." },
    { kind: "labour-roster", why: "Dairy rounds, café, and charitable guest work are the week. The consensus meeting writes the roster; a guest of the café does not." },
    { kind: "membership-trial", why: "Visit, workshop, then a membership conversation. There is no title to buy. Fit and timing are the filter, and the trust will still own the house if you leave." },
    { kind: "animals-stock", why: "A dairy farm still milks. The compact is whose cow, whose dog, and who is on the morning round — a meeting question, not a private paddock." },
    { kind: "guest-stay", why: "Café, rooms, and community lunches are charitable work of the trust. Guests are not members on day two, and they do not sit the weekly meeting." }
  ],
  "camphill-copake": [
    { kind: "care-household", why: "About twenty-two lifesharing houses, not a members’ co-op. Houseparents, villagers, and coworkers under one roof. Dignity first. A guest is invited into a house, not onto a campus-as-park." },
    { kind: "volunteer-intern", why: "Residential coworkers apply, live in, take a stipend, and train through Camphill Academy. The paper they sign before they hold a key is the house agreement, not a share certificate." },
    { kind: "children-care", why: "Children of coworkers grow up in the same houses as adults with developmental disabilities. Safeguarding cannot be only informal, and yet most of the day is. The board is not a babysitter." },
    { kind: "kitchen-table", why: "Shared households eat together. Café and bakery are the public face. A café ticket is not a seat at the house table, and villagers are not a voting class in the corporation." }
  ],
  findhorn: [
    { kind: "course-host", why: "Experience Week is still the classic door, but the Findhorn Foundation ceased operations in 2023. The compact is how a programme guest relates to people who actually live in the Park, and which host now holds the course." },
    { kind: "membership-trial", why: "Living in the Park is NFA life, not automatically Foundation life, and not automatically CBS membership. A house, a job, and the civic association are three different yeses." },
    { kind: "building-code", why: "If the CBS now holds the building, the elected board sits on the drawing. If it is a privately owned dwelling, the household decides inside the Park’s covenants. A course guest does not remodel." },
    { kind: "guest-stay", why: "Guesthouses and the Universal Hall have hosted seekers for sixty years. Private dwellings still need a door that stays shut. The old Foundation council is not the path." },
    { kind: "land-care", why: "Original gardens, dunes, and a park that is also a neighbourhood. Do not pick the nature sanctuary as if it were a hotel bouquet, and do not treat Duneland as a vacant lot." }
  ],
  "twin-oaks": [
    { kind: "labour-roster", why: "A labour quota is the membership. Three planners on policy, area managers on tofu and hammocks. The three-week visitor program already works the book of hours; the compact is what counts as a credit when you live here." },
    { kind: "common-purse", why: "Income-sharing, no buy-in, no rent, 501(d) apostolic tax status. The informal layer is allowance, personal property, and what you take when you leave. There is no board of outside directors above the planners." },
    { kind: "membership-trial", why: "Three-week visitor program, interview in week two or three, then a wait for a room. Capacity is rooms, not ideology. A guest does not sit the planner table." },
    { kind: "kitchen-table", why: "Tofu, hammocks, and a dining system that has fed a commune for decades. Someone still writes the cook shift, and it is a manager, not a guest." },
    { kind: "conflict-circle", why: "A political community this old has a process, or it has a split. Twin Oaks is famous for having a process. Talk first, then the planners, then the membership if it is big enough." }
  ],
  auroville: [
    { kind: "membership-trial", why: "Newcomer, friend of Auroville, then the Entry Service and the Register. The Foundation holds the land. The informal compact is the human path the 1988 Act does not write, and a plot you cannot buy to skip it." },
    { kind: "land-care", why: "The greenbelt, the water table, and a city that was supposed to be a forest first. Informal felling and informal wells are the real politics. The Crown fight was a governance dispute, not a landscaping one." },
    { kind: "quiet-practice", why: "Matrimandir inner chamber is booked like a shift. Silence, shoes, and who does not treat the golden disc as a viewpoint. Residents have been living under other people’s cameras since the 1970s." },
    { kind: "volunteer-intern", why: "Volunteers keep kitchens, forests, and schools running. They are not Aurovilians by showing up in a language class, and a visa is a central-government instrument." },
    { kind: "media-story", why: "Every documentary wants the golden disc. Who may film children, the Register, or a protest is a Residents’ Assembly question the Governing Board also claims." }
  ],
  "the-farm": [
    { kind: "membership-trial", why: "After the 1983 Changeover, membership is a cooperative yes, still vocational. Gaskin died in 2014; the path does not go to a successor teacher. A visitor who wants 1972 is in the wrong decade." },
    { kind: "land-care", why: "About 1,700 acres, soy, mushrooms, commons woods versus household gardens. A shed on common land is the co-op. A household garden is not." },
    { kind: "children-care", why: "Midwifery is what most people still ask about first. Shared child care and a school sit beside that history. A pilgrimage is not a classroom." },
    { kind: "volunteer-intern", why: "Plenty, visitors, and a long tradition of people showing up to help. The compact is labour plus a bed, and a clinic that may be a separate nonprofit." }
  ],
  gaviotas: [
    { kind: "labour-roster", why: "A research village in the llanos runs on work, not on lots. Who does the resin, the pump, the kitchen. Lugari’s long leadership is the other fact; there is no membership share." },
    { kind: "land-care", why: "Pines, grassland, and a water table that became a story. Guests do not wander the plantation as a park, and they do not leave with a hectare." },
    { kind: "volunteer-intern", why: "Students and technicians have always been part of the experiment. They leave with notes, not with title. Centro las Gaviotas is the desk." },
    { kind: "media-story", why: "UNDP, resin, and decades of journalists. Who speaks for Gaviotas when a camera arrives is the founder-stewarded compact, not a residents’ press office." }
  ],
  "east-wind": [
    { kind: "labour-roster", why: "Labour is the membership. Managers elected once a year run the nut-butter plant, the kitchen, and the land. A recipe on the line is the manager; a change in the quota is the meeting." },
    { kind: "common-purse", why: "No buy-in, no private title, East Wind Community, Inc. holds the plant. The informal compact is allowance, the truck, and what a leaving member takes. The plant stays." },
    { kind: "membership-trial", why: "Visitor period, then a yes from the meeting. Capacity on a thousand acres of Ozark hills is still a room. FEC cousins at Twin Oaks and Acorn are the peer door, not a franchise." },
    { kind: "kitchen-table", why: "A common kitchen feeding a fluctuating membership. The roster of cook and clean is older than any website, and a guest does not write it." }
  ],
  damanhur: [
    { kind: "membership-trial", why: "Citizens, nucleos, and a living constitution cut from 130 articles to 15. The School is part of the path. A temple tour is not citizenship, and Falco is not coming back to sign your card." },
    { kind: "quiet-practice", why: "Temples of Humankind, meditation, and a federation that was secret until 1992. Guests on a temple tour are not citizens at prayer. The Game is optional; the land is not." },
    { kind: "course-host", why: "Courses and tourism to the Temples are a business of the cooperatives. The compact is how a nucleo remains a home when the Hall of Mirrors is booked." },
    { kind: "media-story", why: "Guinness temples, a complementary currency, a dead founder. Every crew wants the Hall of Mirrors. Citizens have been saying no since the temples were revealed." }
  ],
  svanholm: [
    { kind: "common-purse", why: "One of Europe’s best-known income-sharing villages. All members sit on the board. The compact is the purse, the allowance, and the farm income that feeds it — not a tip jar by the manor door." },
    { kind: "labour-roster", why: "Organic farm, dairy, and a quota. Work meetings are the politics. The all-member board writes the jobs nobody wants; a guest of the shop does not." },
    { kind: "membership-trial", why: "A large Danish collective does not take a new adult without a trial the existing adults can live with. There is no title to buy. Leaving is leaving the purse." },
    { kind: "kitchen-table", why: "A common kitchen at manor scale is a workplace. The informal rules are posted on the fridge whether or not anyone has filed them." },
    { kind: "animals-stock", why: "An organic farm and dairy at manor scale. Whose cow, whose dog, and who is on the morning round is a board question." },
    { kind: "volunteer-intern", why: "A published volunteer stay with the farm, building, or kitchen groups. Food and lodging; they leave. Membership is a separate trial." }
  ],
  lakabe: [
    { kind: "conflict-circle", why: "A recovered Navarra hamlet that began as an occupation. Concejo abierto for anything that looks like a municipality; the asociación cultural for a CIF; sociocracy petals and the whole-community meeting for inward life. Do not skip to a lawyer while pretending you are still in consensus." },
    { kind: "membership-trial", why: "You are accepted into a village that remembers being empty. There is no lot to buy. The concejo is not a B&B desk, and the Government of Navarra is the other party whether or not you meet it." },
    { kind: "land-care", why: "A hamlet brought back from empty. Wood, animals, and a mountain that is not a second-home plot. The concejo sits on anything that looks like municipal land." },
    { kind: "guest-stay", why: "Bakery guests are not automatically at the inner table. A recovered village eats as a house. Write; do not arrive as if a room is waiting." },
    { kind: "course-host", why: "Ate Irekiak open days, summer week, and facilitation courses are the public door. A workshop week is not membership in a village that began as an occupation." }
  ],
  niederkaufungen: [
    { kind: "common-purse", why: "Kommune Niederkaufungen e.V. owns land, buildings, vehicles, and tools, written so they cannot be privatized. Fourteen living groups sit under that. The informal layer is what a communard may keep, and that leaving does not peel off a house." },
    { kind: "labour-roster", why: "Work collectives — building, kitchen, seminar, horticulture — run as collectives, not as managers with staff. The members’ meeting is consensus. A seminar guest does not write the roster." },
    { kind: "membership-trial", why: "You are taken into the e.V., or you are not, after living the quota. The education Verein is not a back door into the purse." },
    { kind: "kitchen-table", why: "Breakfast politics happens in the living group before it happens in the e.V. A kitchen fight stays in the house until it cannot." },
    { kind: "conflict-circle", why: "A political commune of that size either has plenary process or it fragments. Niederkaufungen is known for plenary process. Kommuja is the peer court." }
  ],
  "ecovillage-ithaca": [
    { kind: "membership-trial", why: "You join a neighborhood first — FROG, SONG, or TREE as a housing cooperative — then the village. EVIVA sits on shared infrastructure. The 501(c)(3) sits on outer land and education. A listing in one neighborhood is not a key to all three." },
    { kind: "building-code", why: "Each neighborhood on its own houses and common house. Design covenants plus the informal “does this look like EcoVillage” conversation. A drawing that touches shared infrastructure is EVIVA." },
    { kind: "kitchen-table", why: "Three common houses, three kitchens. FROG’s table is not SONG’s. A course guest of the education nonprofit is not at the inner table." },
    { kind: "land-care", why: "CSA farm, ponds, clustered housing. Who picks the berries and who mows the path. The 501(c)(3) land is not a backyard of the nearest co-op." },
    { kind: "children-care", why: "A village that has always advertised children in the common house. Shared watching still needs a roster and a safeguarding sentence, neighborhood by neighborhood." }
  ],
  zegg: [
    { kind: "relationship-culture", why: "Forum, experimental relating, and a seminar village whose reputation travels faster than its gGmbH papers. Consent, privacy, and that a course is not a membership. The Visionsrat is not your couples counsellor." },
    { kind: "course-host", why: "The seminar centre is the economic core. Teachers and participants sleep in a village that is also about a hundred people’s home. Which buildings are the programme is the compact." },
    { kind: "conflict-circle", why: "Sociocratic circles for operations, the Visionsrat for long-term community interest, consensus still aimed at for important social and money decisions. Talk first. Do not skip to a lawyer while pretending you are still in Forum." },
    { kind: "membership-trial", why: "Living at ZEGG is not buying a Brandenburg lot. A long look, then a yes from people who already live with Forum. The gGmbH is the civil skin, not the inner yes." },
    { kind: "kitchen-table", why: "Catering for courses plus a residents’ kitchen. Two menus, one dish room. The informal rules are on the wall." }
  ],
  earthaven: [
    { kind: "membership-trial", why: "You join a pod first — a housing co-op or an LLC that owns the neighborhood land — then Earthaven Community Association. A SOIL course guest is not a pod member. Nonresident contributing members vote on a village they do not sleep in." },
    { kind: "building-code", why: "Natural building is the brand; CC&Rs recorded in Rutherford County are the lock. A compost toilet drawing goes to the pod, then the covenants, then Council if it touches commons." },
    { kind: "land-care", why: "A steep forest neighbourhood with a creek. Roads, waste, and trees are Association politics. Pods that drift into different class realities still share the same dirt." },
    { kind: "course-host", why: "School of Integrated Living tours and whole-life-skills programs. The educational charity is not the HOA. A course is not a right to walk every neighborhood." }
  ],
  konohana: [
    { kind: "common-purse", why: "The family in daily meeting. Money is a constitution, not a tip jar. What goes in, what a person may keep, the leaving package. Isadon’s long presence is a fact; the meeting is still the purse." },
    { kind: "quiet-practice", why: "Spiritual practice and a founder-led culture that sits every day. Guests on a farm stay still meet a village that sits together. Silence and substances are asked of people who live here." },
    { kind: "kitchen-table", why: "One kitchen, one family. The daily meeting is breakfast politics. A guest does not rewrite the fridge." },
    { kind: "membership-trial", why: "Joining Konohana is not buying a Shizuoka lot. The trial is living the daily meeting. There is no title to take when you leave." },
    { kind: "labour-roster", why: "A Japanese farming village that works as one. The day’s assignment is the membership. A guest on a farm stay does not write it." }
  ],
  oaec: [
    { kind: "course-host", why: "Occidental Arts & Ecology Center teaches on land Sowing Circle LLC owns. A PDC student deals with the nonprofit, not with a membership application to the Circle. Which buildings are the programme is the compact." },
    { kind: "land-care", why: "An Organic Agricultural Easement with Sonoma Land Trust keeps the gardens organic whether or not the next generation still wants a commune. A change in an orchard answers to the easement as much as the household." },
    { kind: "volunteer-intern", why: "Interns of the Center are not applicants to the LLC. Room, board, a review date, and the Circle’s door stays shut." },
    { kind: "membership-trial", why: "A new resident of Sowing Circle is consensus of a closed LLC, and there may be no vacancy. Shares are not Sonoma market lots." }
  ],
  tamera: [
    { kind: "quiet-practice", why: "Healing biotope, political love, and two associations that jointly own ILOS. Silence, substances, and what a guest of the peace research centre is expected to follow without becoming a member." },
    { kind: "membership-trial", why: "The people who live there sit community forums. The two associations own the company that holds the land. A guest of a course is not in the forum." },
    { kind: "guest-stay", why: "ILOS is not a B&B desk. Which doors stay shut, how long is too long, and that a peace-research booking is not a key to the inner household." },
    { kind: "media-story", why: "Tamera is photographed as an idea. Who may point a camera at Forum, children, or breakfast is the community, not the journalist, and not the course catalogue." }
  ],
  "dancing-rabbit": [
    { kind: "membership-trial", why: "The membership, by consensus, on village life. An Oversight Team for when the first room cannot hold it. You do not buy a Missouri lot. Capacity is still a room and a yes." },
    { kind: "building-code", why: "Natural building is the culture; village covenants are the lock. A drawing has to survive consensus, not a Pinterest board." },
    { kind: "land-care", why: "A land trust under the village. Commons, cars, and a covenant about how lightly you live. Guests stay off rows they were not asked onto." },
    { kind: "labour-roster", why: "Work is part of how Dancing Rabbit governs. What counts as a shift, who assigns the jobs nobody wants, and that the membership — not a visitor on a tour — writes the roster." }
  ],
  cloughjordan: [
    { kind: "membership-trial", why: "You join Sustainable Projects Ireland CLG to live on the commons, then you finance a house on a serviced site. About 55 of a planned 114–130 homes have been built. A CSA box from the community farm is not a site membership." },
    { kind: "building-code", why: "The company owns the roads and the district heating. A house extension is the household, then SPI’s design rules. Empty serviced sites are a political fact." },
    { kind: "land-care", why: "67 acres, district heating that makes the commons undeniable every winter, a farm that leases about 12 acres. A farm member is not automatically a site member." },
    { kind: "kitchen-table", why: "Households keep their own livelihoods and kitchens. Self-organizing groups run the week. There is no single town-meeting that can stall the boiler, and no commune fridge." },
    { kind: "course-host", why: "First-Sunday tours from Sheelagh na Gig, group education visits, and the eco-hostel sit on SPI’s public door. A tour is not a serviced site." }
  ],
  lama: [
    { kind: "quiet-practice", why: "A mountain held as a 501(c)(3). No permanent members. Residents and summer stewards sit a consensus circle for the season. Silence, substances, and what a retreat guest is expected to follow without becoming next year’s steward." },
    { kind: "volunteer-intern", why: "A season of work is not membership, because there is no such membership. Labour, room, a review, and the circle can say the season is over. The board of past residents advises; it does not usually run the kitchen." },
    { kind: "guest-stay", why: "Guests come by arrangement — Be Here Now was finished here in 1971, and the mountain still has a press history. The circle is not a B&B desk. Fire, water, and Taos County sit under every booking." },
    { kind: "land-care", why: "The charity holds the buildings and the dirt. A roof is a board question. A summer work list is a circle question. You cannot buy your way onto the mountain." }
  ],
  acorn: [
    { kind: "labour-roster", why: "FEC labour credits. Hours are the membership. The seed warehouse is a work area, not a job you take home. A seed-packet question stays in the work area; a quota change goes to the meeting." },
    { kind: "common-purse", why: "Income-sharing, no buy-in. Southern Exposure Seed Exchange is the treasury and sits with the commune, not with a founder-owner. What you take when you leave is personal. The brand stays." },
    { kind: "membership-trial", why: "Twin Oaks-family visitor period and an interview. Capacity is beds. Do not confuse this Acorn with the California 501(c)(3) of a similar name." },
    { kind: "land-care", why: "Open-pollinated and heirloom seed is the public face of a Louisa County farm. Guests stay out of the warehouse and off rows they were not asked onto." }
  ],
  "oneida-community": [
    { kind: "relationship-culture", why: "Complex marriage and stirpiculture were the sexual constitution from 1848 to 1881. Mutual criticism was the membership process and the conflict process in the same meeting. The Mansion House tour is not a surviving household." },
    { kind: "common-purse", why: "Common property while it lived; Oneida Community, Limited after 1881. Silverware outlived the covenant. The informal compact of a living village here ended when they chose a joint-stock company instead of pretending." },
    { kind: "conflict-circle", why: "While it lived: Noyes and the criticism meeting. After 1881: a shareholder meeting. Today: a museum desk. Do not skip to a lawyer while pretending you are still in the house." },
    { kind: "media-story", why: "Every documentary wants the Mansion House and the marriage. Names, children of stirpiculture, and the remaining apartments are not a press kit. The village does not sit." }
  ],
  botton: [
    { kind: "care-household", why: "Two boards, two cultures: Camphill Village Trust and Esk Valley Camphill Community. Houseparents, villagers, and coworkers under one roof. Dignity first. A guest is not a second coworker." },
    { kind: "volunteer-intern", why: "A year of work is not membership. Labour plus learning, room and board, a review date, and that CVT can say the year is over. The house is still the government at breakfast." },
    { kind: "conflict-circle", why: "A fight here does not go to a generic circle. Two boards, two cultures. Talk first in the house, then the community that actually lives there, then the Trust if the first room cannot hold it." },
    { kind: "land-care", why: "North York Moors dirt held by charity, not by a members’ co-op. Which ground is household, which is farm, who closes the gate. Villagers are not a corporate voting class." }
  ],
  limans: [
    { kind: "membership-trial", why: "Self-administration on site, the Longo Maï network for questions that bind more than one cooperative, the Swiss foundation for the land. There is no title to buy. Fit is a cooperative yes." },
    { kind: "labour-roster", why: "A European cooperative farm that works as one. The Coopérative agricole writes the roster; a guest of the network does not. Hours are the membership." },
    { kind: "land-care", why: "The European Land Fund (Swiss foundation) holds dirt so a departing person cannot peel off a Provençal field. Which ground is household, which is commons, who closes the gate." },
    { kind: "common-purse", why: "Longo Maï culture: cooperative income, not a holiday mas. What a person may keep, the leaving package, and that the Swiss foundation still holds the land." }
  ],
  sekem: [
    { kind: "labour-roster", why: "A holding, farms, schools, and a university on desert land. Work is the government. Who does the resin, the farm, the classroom. SEKEM Holding is not a village meeting with a nicer logo." },
    { kind: "land-care", why: "Biodynamic fields reclaimed from desert. Guests stay off rows they were not asked onto. The land companies and the parent are not a backyard." },
    { kind: "course-host", why: "Heliopolis University and the education arms are the public door. A course is not a farm membership, and a student is not a shareholder of the holding." },
    { kind: "membership-trial", why: "Working here is not buying a Sharqia lot. The path is a job, a school, or a long look from people who already live the initiative." },
    { kind: "volunteer-intern", why: "Internships of at least twelve months, age 22+, food and lodging. They leave. A year on the farm is not a share in the holding." }
  ],
  "awra-amba": [
    { kind: "membership-trial", why: "A cooperative village in the Ethiopian highlands with written rules on work, gender, and children. You are accepted into the association, or you are not. There is no lot to buy, and a visit is not a share." },
    { kind: "labour-roster", why: "Work is the membership. Weaving, farming, the quota the village actually runs on. A guest of the tour does not write the roster." },
    { kind: "children-care", why: "Shared care and a school are part of the founding bargain, not a side project. Who watches whom, and the line between shared care and a parent’s job." },
    { kind: "conflict-circle", why: "Written village rules plus an assembly. Talk first, then the organs the village actually sits. Do not skip to a district office while pretending you are still in the meeting." }
  ],
  umoja: [
    { kind: "conflict-circle", why: "A women’s village whose government is the women who live there. Umoja Uaso Women Group is the civil skin. A guest, a husband, or a journalist does not sit the meeting." },
    { kind: "land-care", why: "A Samburu manyatta that is also a sanctuary. Which ground is household, which is commons, who closes the gate. The village is not a cultural village for hire." },
    { kind: "children-care", why: "Girls’ safety is the founding reason the village sits. Shared watching, school, and the line between a sanctuary and a parent’s job." },
    { kind: "media-story", why: "Every correspondent wants the same photograph of a women’s village. Names, children, and ceremony are not a press kit. The women speak, or nobody does." }
  ],
  "ananda-village": [
    { kind: "quiet-practice", why: "Ananda Church of Self-Realization is the inner law. Meditation, Kriya, and what a guest of The Expanding Light is expected to follow without becoming a member. Sunday service is not a homeowners’ meeting." },
    { kind: "membership-trial", why: "Living at Ananda Village is a spiritual yes plus a lot lease, not a Nevada City freehold. The church and the land-holding entities are not the same door." },
    { kind: "building-code", why: "Houses on church-related land still have to look like they belong. What you may raise, who reviews it, and that a course guest does not remodel." },
    { kind: "land-care", why: "Sierra foothill acres held for a spiritual community. Which ground is household, which is ashram, who closes the gate. The retreat is not a private park." },
    { kind: "guest-stay", why: "The Expanding Light is the public door. Private dwellings still need a door that stays shut. A retreat booking is not a lot." }
  ],
  lammas: [
    { kind: "membership-trial", why: "Nine original smallholdings on 1000-year agricultural leases under Welsh One Planet Development. A holding when one is actually offered. Grand Designs is not a membership path. You have to live from the land." },
    { kind: "land-care", why: "The planning condition is that households substantially live from the land. Food, fuel, income on about 7 acres. A course guest of the hub does not harvest a holding." },
    { kind: "building-code", why: "Low-impact dwellings under OPD monitoring. What you may raise is a planning officer’s fact as much as a neighbours’ one. The grass roof is not the whole test." },
    { kind: "course-host", why: "The community hub: courses, open days, the public room. A hub weekend is not a lease, and a documentary is not a deed." }
  ],
  meltemi: [
    { kind: "membership-trial", why: "A household of four generations on 150 stremma, not a membership share. Written rules from the mid-1950s. There is no lot you buy to sit the assembly. Seasonal members versus year-round keepers is the live question." },
    { kind: "land-care", why: "Occupation plus care became a commons. Neighbours still enforce the 1950s rules. A Rafina beach day is not a vote, and the plot is not a cadastre of private houses." },
    { kind: "conflict-circle", why: "Assembly plus a serving board that is technical more than ruling. Peer pressure does the rest. Talk first. The Meltemi NGO is the civil face, not a deed." },
    { kind: "guest-stay", why: "Summer is full; winter is not the same village. Do not arrive as if a room is waiting. Write through the GEN listing." }
  ],
  tempelhof: [
    { kind: "membership-trial", why: "Kennenlernen, then Schloss Tempelhof eG if they are taking people. One member, one vote, whatever the deposit. The foundation owns the ground so a departing member cannot sell it. A guesthouse weekend is not a share." },
    { kind: "course-host", why: "Seminars for groups to 140 sit beside a village of about 130. Which door is the course and which is a home. Teachers sleep in a hamlet that has to remain a hamlet." },
    { kind: "kitchen-table", why: "Farm, café, shop, SoLaWi. The eG runs the week. A seminar plate is not the inner table." },
    { kind: "building-code", why: "99-year leasehold from the foundation. What you may raise is an eG question on someone else’s title. The Earthship community room is not a private conservatory." }
  ],
  "eva-lanxmeer": [
    { kind: "membership-trial", why: "You buy a house in Culemborg and you join the EVA-Lanxmeer association. Mandatory. A pond photograph is not a board seat. The municipality still sits on the wells." },
    { kind: "land-care", why: "A drinking-water field the city bought. Commons, ponds, Caetshage at the edge. Guests stay off the farm they were not asked onto, and off the wells." },
    { kind: "building-code", why: "Ordinary house title under association rules and a water-protection overlay. A drawing that touches commons or the field is the association and the municipality." },
    { kind: "kitchen-table", why: "240 owners who still act as one place. Thermo Bello is the heat company, not a dinner club, and a house kitchen is still a house kitchen." }
  ],
  hockerton: [
    { kind: "labour-roster", why: "Each of five homes owes 600 hours a year: 300 unpaid on the site, 300 paid on tours and consultancy. That is the membership." },
    { kind: "membership-trial", why: "If a house is ever offered — two have already changed hands — come to meetings and work weekends first. Five freeholds. Succession is the live question." },
    { kind: "building-code", why: "Earth-sheltered terrace, water, waste, and power on 4 ha as one co-op system. You own the dwelling." },
    { kind: "guest-stay", why: "Book a Saturday tour. The education business is the public face." }
  ],
  friland: [
    { kind: "membership-trial", why: "Save, then build, then sit the meetings. No loan on land or house, resale capped per square metre, self-employment expected. A DR-TV origin story is not a plot." },
    { kind: "building-code", why: "Foundation title on 10 ha so a bank cannot take the field. What you may raise is a consensus question without a mortgage to force the pace." },
    { kind: "kitchen-table", why: "Six meal-meetings a year are the actual government. New ideas get a first hearing at supper. The annual assembly is for the budget and the board of about five." },
    { kind: "land-care", why: "The field cannot be collateral. Which ground is household plot, which is commons, who closes the gate. Forty households still have to agree." }
  ],
  lilac: [
    { kind: "membership-trial", why: "A share in the Mutual Home Ownership Society, tied to income, not a Leeds freehold. An open day is not a closing. The formula is the inner law." },
    { kind: "building-code", why: "Low-energy houses whose drawings have to survive the MHOS, not a Pinterest board. What a household may change is a co-op question." },
    { kind: "kitchen-table", why: "Twenty households and a common house. Who cooks, who maintains, who sits the meeting. A visitor on an open day is not a member." },
    { kind: "conflict-circle", why: "Equity designed to stay affordable for the next household. Talk first in the meeting. Do not skip to a solicitor while pretending you are still in cohousing." }
  ],
  christiania: [
    { kind: "conflict-circle", why: "Area meetings, then the common plenum. Consensus culture, slow on purpose. A foundation now holds much of the civil skin with the Danish state. Pusher Street is not the constitution." },
    { kind: "land-care", why: "A former military site the kingdom never fully conceded. Self-build that was never a cadastral product. Building here is politics, not a planning portal." },
    { kind: "membership-trial", why: "Live here, sit your area, then the plenum. There is no lot you buy to sit the meeting. A tour is not membership." },
    { kind: "guest-stay", why: "A journalist who wants 1971 is not a resident. Which doors stay shut, and that a freetown walk is not a key to a house." },
    { kind: "media-story", why: "Every crew wants Pusher Street. Residential Christiania has been living under other people’s cameras for fifty years. The plenum speaks, or nobody does." }
  ],
  "kibbutz-samar": [
    { kind: "common-purse", why: "A collective kibbutz that kept the purse while the movement around it privatised. No private lots. What a person may keep, the leaving package, and that the dining hall is still the treasury’s face." },
    { kind: "labour-roster", why: "Personal hours: you choose the work rather than taking an assignment. Motivation is supposed to replace the rota. The compact is what happens when the cows still need milking." },
    { kind: "membership-trial", why: "A long look, then a yes from people who already live the purse. Do not arrive as if a southern Arava lot is for sale." },
    { kind: "kitchen-table", why: "Common dining is the government at supper. A guest in the dining hall is not a voter." }
  ],
  "la-borda": [
    { kind: "membership-trial", why: "Join the housing cooperative on municipal land in Sants. Transfer-of-use, not a Barcelona freehold. A tour of a prize-winning timber block is not a share. The city stays under the lease." },
    { kind: "building-code", why: "A cooperative section, not a condo plan. What you may change in a timber building on public land is already a political question." },
    { kind: "kitchen-table", why: "Shared kitchen, laundry, terrace. Private doors sit inside the cooperative. A pilgrim of architecture is not at the inner table." },
    { kind: "conflict-circle", why: "Assembly government of a small urban coop. Talk first. The city is a party to the lease whether or not you meet it." }
  ],

  "new-ground": [
    { kind: "membership-trial", why: "Older women’s cohousing in High Barnet. Mixed tenure on purpose — some own, some rent. A vacancy, then a long look from women who already live here. Do not send a son to the meeting." },
    { kind: "kitchen-table", why: "The common house is the week. Meals, guests, the room that keeps later life from becoming a silent cul-de-sac. A son does not sit it." },
    { kind: "children-care", why: "This is a women’s community of later life, not a family cohousing cluster. Grandchildren visit; they do not rewrite the compact. Carers are not a second voting class." },
    { kind: "conflict-circle", why: "Owner and renter interests in one meeting. Talk first. Tenure is not supposed to split the government, which is why it needs a sentence." }
  ],
  navadarshanam: [
    { kind: "membership-trial", why: "A charitable trust holds the Tamil Nadu acreage; residents sit consensus on the week. You do not buy a lot outside Bangalore. A course weekend is the public door, not the inner yes." },
    { kind: "land-care", why: "The trust is the lock against subdivision. Farming, building, a low-energy brief. Guests stay off rows they were not asked onto." },
    { kind: "quiet-practice", why: "A practice place, not a farmhouse market. What a seeker is expected to follow without becoming a trust member." },
    { kind: "guest-stay", why: "Courses and stays are how strangers first arrive. The trustees are not a B&B desk, and the meeting is not a hotel." }
  ],

  "can-masdeu": [
    { kind: "conflict-circle", why: "The assembly of people who live and garden there. Title is contested; care is not. Talk first. The city and the owner-on-paper are the other party whether or not they sit the meeting." },
    { kind: "land-care", why: "Terraces, water, a hillside masia that is worked. Guests stay off rows they were not asked onto. Occupation plus gardens is the constitution." },
    { kind: "guest-stay", why: "Social centre Sundays, workshops, a city that walks up from Nou Barris. Which rooms stay a home." },
    { kind: "course-host", why: "The PIC social centre: Sunday workshops, meals, and walks most weeks from late September to early June. A Sunday visitor does not write the house roster." },
    { kind: "labour-roster", why: "Work is the conversation. The meeting is the membership because there is no share to buy. A Sunday visitor does not write the roster." }
  ],

  "threshold-centre": [
    { kind: "membership-trial", why: "A CIC holds the commons; the residents’ meeting runs the week. Mixed tenure — ownership and rental — on purpose. A pretty mill is not a share. Write, visit, sit the meeting." },
    { kind: "guest-stay", why: "Farmhouse guest rooms they charge for. A mill weekend is not membership. Homes are not the B&B." },
    { kind: "kitchen-table", why: "Mixed ages, mixed tenure, a common house. Owner and renter at the same table is the founding bet, which is why it needs a compact." },
    { kind: "building-code", why: "What a household may change on CIC land is a community-interest question, not only a household one. Holiday-let conversions are the thing the CIC exists to stop." }
  ],

  vrijburcht: [
    { kind: "membership-trial", why: "A unit in a resident-commissioned mixed-use block on IJburg, then the VvE. A courtyard photograph is not a closing. You are buying a neighbour who works downstairs." },
    { kind: "building-code", why: "CPO origin: they were the client, not the product. What a household may change in mixed-use fabric is a VvE question, including the workshop next door." },
    { kind: "kitchen-table", why: "Courtyard and café as the public-private edge. A coffee guest is not a member; a member still has to live over a venue." },
    { kind: "guest-stay", why: "A café is not a guest room, and a workshop is not a spare bedroom. Which doors stay shut on an Amsterdam island." }
  ],

  "newton-dee": [
    { kind: "care-household", why: "Camphill in Aberdeenshire: villagers and coworkers under one roof. Dignity first. A guest is not a second coworker. Trustees hold the charity; the house holds breakfast." },
    { kind: "volunteer-intern", why: "A coworker year is not a trustee seat. Labour plus learning, safeguarding first, a review date. The bakery and creamery are workplaces, not a trial membership in the corporation." },
    { kind: "labour-roster", why: "Workshops, farm, crafts. Work is the other membership. Villagers are not a corporate voting class, and a shop visit is not a shift." },
    { kind: "kitchen-table", why: "Lifesharing houses eat together. The shop is public. A café ticket is not a seat at the house table." }
  ],
  "two-echo": [
    { kind: "membership-trial", why: "A house in the cluster, then the association, then the conservation easement’s rules. A farm walk is not a closing. You buy a house. You do not buy the fields." },
    { kind: "land-care", why: "The easement is a government that outlives the HOA. Most of the land stays unbuilt whether or not the next board still likes meadows. Guests stay off rows and pasture." },
    { kind: "building-code", why: "Clustered titles. A bigger footprint is an easement question as much as an HOA one. A listing is not a right to re-subdivide." },
    { kind: "kitchen-table", why: "The cluster is the neighbourhood. Common house as the week. The farm is a neighbour, not a private kitchen garden." }
  ],
  kersentuin: [
    { kind: "membership-trial", why: "Two doors into one courtyard: a CPO owner listing, or a housing-association rental. Then the residents’ association. Mixed tenure was designed in, not added later." },
    { kind: "kitchen-table", why: "Owners from the CPO and renters from the housing association at one table. That is the founding bet, which is why it needs a compact." },
    { kind: "conflict-circle", why: "Owner and renter interests in one association. Talk first. How a CPO origin story treats people who arrived through the housing association is the live question." },
    { kind: "land-care", why: "A Utrecht courtyard, not the whole Lunetten field. Commons the two tenures have to meet on. Guests stay off a neighbour’s garden." }
  ],
  "hameau-des-buis": [
    { kind: "membership-trial", why: "SAS coopérative admission, then a dwelling when one exists. An open day is not a share. You do not buy the hillside above the Chassezac." },
    { kind: "volunteer-intern", why: "WWOOF and European volunteers. A volunteer week is not a share, and the school is not a back door into the company." },
    { kind: "kitchen-table", why: "Shared governance of about forty inhabitants. Who cooks, who sits the meeting. A school lunch is not the inner table." },
    { kind: "land-care", why: "About 6 ha, a farm, a school. Guests stay off a neighbour’s garden and off the farm they were not asked onto." }
  ],
  "neve-shalom": [
    { kind: "membership-trial", why: "Equal membership — Jewish and Palestinian citizens as one cooperative — is the constitution, not a slogan. A waiting list is a political fact. A school day is not a share." },
    { kind: "children-care", why: "A bilingual, binational school. Equal hours, a public face more famous than the village meeting. A school parent is not automatically a village member." },
    { kind: "quiet-practice", why: "A village founded for dialogue. What a guest may film, say, and assume after 7 October. The membership speaks, or nobody does." },
    { kind: "media-story", why: "Every correspondent wants the same hill. Names, children, and remaining equal membership are the compact. A peace theme is not a press kit." }
  ],
  "den-selvforsynende": [
    { kind: "membership-trial", why: "An andel share in a self-supplying village. Expect work on the land." },
    { kind: "land-care", why: "Permaculture as the brief. Rows, animals, a farm." },
    { kind: "kitchen-table", why: "About nineteen doors. Private life inside a cooperative. Children on the lane are part of the constitution." },
    { kind: "children-care", why: "Adults and children of a small hamlet. The lane is a playground as much as a board. Shared watching still needs a sentence." }
  ],
  overdrevet: [
    { kind: "membership-trial", why: "You buy a house and you join the grundejerforening. A valley walk is not a deed. Private Danish title, which is why the association has to work harder." },
    { kind: "kitchen-table", why: "Twenty-five private doors and a common house. The week that keeps a former farm from becoming twenty-five fenced lots." },
    { kind: "land-care", why: "Kitchen garden, a former farm, a landscape that is not twenty-five backyards. Guests stay off rows they were not asked onto." },
    { kind: "children-care", why: "Adults, children and young people. The lane is a playground as much as a board. Shared watching still needs a roster." }
  ],
  "numero-zero": [
    { kind: "membership-trial", why: "A flat, then the CoAbitare compact. Eight families. A market walk is not a deed. Small enough that every adult is the meeting." },
    { kind: "building-code", why: "A refurbished historic palazzo. What a household may change in eight dwellings is already a political question, and an Open House tour is not a renovation permit." },
    { kind: "kitchen-table", why: "Common rooms, the shared floor. A guest of one household is not a guest of all eight. The stair is the government." },
    { kind: "children-care", why: "Eight families. The stair is a playground as much as a meeting. Shared watching in a historic fabric still needs a sentence." }
  ],
  lebensbogen: [
    { kind: "common-purse", why: "An income-sharing e.V. What goes in, what a person may keep, the leaving package. A seminar night is not the purse. Tax authorities still exist." },
    { kind: "membership-trial", why: "Apply via the interested page. Sit the household. A hike is not a join, and an ESC year ends." },
    { kind: "guest-stay", why: "Tagungshaus: book a seminar stay. Teachers sleep in a house that is also a commune. Homes are not the course." },
    { kind: "volunteer-intern", why: "One or two young volunteers, six to twelve months. A placement is not the purse, and the café roster is not membership." },
    { kind: "labour-roster", why: "Someone still runs the café and the house. Consensus does not empty the dish pit. A seminar guest does not write the roster." }
  ],

  nubanusit: [
    { kind: "membership-trial", why: "A unit in the farm-conservation condominium, not a farm share. An open house is not a closing. You do not buy the pasture." },
    { kind: "land-care", why: "A working farm as neighbour. Rows, pasture, a farm page that is not the HOA newsletter. Guests stay off rows they were not asked onto." },
    { kind: "kitchen-table", why: "Twenty-nine private doors and common indoor space. The week. The farm is not a private kitchen garden." },
    { kind: "animals-stock", why: "A working farm next to the cluster. Whose animal, whose dog, feed, vet bills, and that the farm has to pay its own bills." }
  ],
  "puget-ridge": [
    { kind: "membership-trial", why: "A listing in PRCA, twenty-three condo titles. If the door is Homestead Community Land Trust’s, the CLT’s rules sit beside the bylaws. A garden walk is not a closing." },
    { kind: "land-care", why: "Organic gardens on 2.4 acres of Delridge. Guests stay off rows they were not asked onto. The CLT door is not a second backyard." },
    { kind: "kitchen-table", why: "A 4,000 sq ft common house and pedways. Ages from months to ninety-nine. The week that keeps a 1995 condo a village." },
    { kind: "children-care", why: "The pedway is a playground as much as a board. Shared watching in a mixed-age cluster still needs a roster, including beside the affordable door." }
  ],

  landmatters: [
    { kind: "membership-trial", why: "Apply to the permaculture workers’ co-op. A woodland walk is not a membership. Permanent permission is a 2016 fact, not a Devon freehold." },
    { kind: "building-code", why: "Low-impact dwellings under a planning condition. What a household may change is an inspector’s question as much as a co-op one." },
    { kind: "land-care", why: "42 acres of pasture and woodland. Guests stay off rows they were not asked onto. The fight to stay is part of the constitution." },
    { kind: "labour-roster", why: "A workers’ co-op. Hours on the land. A guest of a permaculture walk does not write the roster." }
  ],

  vashon: [
    { kind: "membership-trial", why: "A unit on an island site condominium. A Bank Road walk is not a closing. You do not buy the orchard." },
    { kind: "guest-stay", why: "Three guest rooms, booked through a household. Not a public inn, and not a right of the ferry queue. The commercial kitchen is for the village, not a catering company." },
    { kind: "kitchen-table", why: "A common house with a commercial kitchen, built to cook at a scale private kitchens cannot. The week. Eighteen doors." },
    { kind: "land-care", why: "Orchard and about eight acres of natural areas. Guests stay off rows they were not asked onto. The orchard is not a U-pick." }
  ],

  "villa-locomuna": [
    { kind: "common-purse", why: "Gemeinsam Leben eG. Spiegel still found the income on one account in 2018. Confirm it holds. Leaving does not peel off a Bahn apartment. Tax authorities still exist." },
    { kind: "labour-roster", why: "Selbstverwaltung. Work collectives, the house, the roster. An eG here is a commune, not a cost-rent corridor. A guest does not write it." },
    { kind: "membership-trial", why: "eG admission, then the purse if they are taking people. A Kölnische Straße walk is not a share. KommuJa is the peer court." },
    { kind: "kitchen-table", why: "A commune kitchen in former Bahn buildings. Breakfast politics before the eG meeting. A Tannenwäldchen walk is not dinner." }
  ],

  redfield: [
    { kind: "labour-roster", why: "Sixteen hours a week: cooking, garden, buildings, animals. The quota is the government, not a chore wheel taped to a fridge. A guest does not write it." },
    { kind: "membership-trial", why: "Fully mutual coop admission. Up to seventeen adults. A Winslow walk is not a share. You do not buy Buckingham Road." },
    { kind: "guest-stay", why: "Beds for visitors, written, not a public inn. Write first. A mansion that photographs as a wedding venue is still a household." },
    { kind: "kitchen-table", why: "A single household at mansion scale. Every adult is the meeting and the table. Children are in the headcount; they are not the membership." },
    { kind: "animals-stock", why: "Animals on 17 acres. Whose animal, feed, vet bills, and that the quota does not care if you are tired of the morning round." }
  ],

  "monkton-wyld": [
    { kind: "guest-stay", why: "B&B and self-catering in an 1848 rectory. Book. A night is a booking, not a membership. Fourteen bedrooms in some counts; a small resident community still has to sleep." },
    { kind: "volunteer-intern", why: "Volunteers and long-stay residents grow the kitchen garden. Write the Court. A volunteer season is not a trustee seat, and not a share of the charity." },
    { kind: "course-host", why: "Low-impact courses of an educational charity. Which rooms are the programme and which are a home. Teachers sit as guests of the Court." },
    { kind: "kitchen-table", why: "Kitchen from the walled garden. Trustees hold the paper; residents hold the kitchen. A B&B breakfast is not the inner table." }
  ]
};
