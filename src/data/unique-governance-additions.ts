import type { Governance } from "./governance";

/** Ten further villages whose inner constitution is not a generic meeting plus a board. */
export const uniqueGovernanceAdditions: Record<string, Partial<Governance>> = {
  riverside: {
    unique: true,
    whoDecides:
      "The weekly residential meeting, by consensus, with no chair and no casting vote. Trustees hold the 1953 deed. Nobody holds a private title to a house or a car.",
    bodies: [
      {
        name: "Weekly consensus meeting",
        role: "The living constitution. A dairy round, a guest, a conflict: the meeting. No leader.",
      },
      {
        name: "Religious Charitable Riverside Community Trust",
        role: "Owns land, houses, and major assets since 1953. Trustees administer the deed; they are not a town council.",
      },
      {
        name: "Community fund and allowance",
        role: "Rent goes to the trust. A weekly allowance comes back. The informal layer is what a person may actually keep.",
      },
    ],
    howItRuns:
      "You do not buy in. You visit, work, and sit a membership conversation. Cars and houses stay with the trust when you leave. The café and guest rooms are charitable work, not a back door into the meeting.",
    dive: {
      title: "A trust that owns the cars, and a meeting that owns the week",
      lead: "Riverside split the usual village problem in two: a charitable trust holds every house and every car, and a residential meeting runs the week by consensus with no leader. You do not buy in. You pay rent to the trust and live on an allowance from the community fund. That is the government.",
      organs: [
        {
          name: "Weekly consensus meeting",
          what: "The living constitution. No chair with a casting vote. A dairy round, a guest, a conflict: the meeting.",
        },
        {
          name: "Religious Charitable Riverside Community Trust (1953)",
          what: "Owns land, houses, and major assets. There is no private title to a house or a car. Trustees administer the deed; they are not a town council.",
        },
        {
          name: "Community fund and allowance",
          what: "Rent goes to the trust. A weekly allowance comes back. The informal layer is what a person may actually keep.",
        },
      ],
      path: "A broken fence: the meeting, then whoever holds the tools. A new household: visit, workshop, a membership conversation — there is no title to buy. A car: the trust. A journalist: the meeting, which has heard the pacifist-village story since the 1940s.",
      history: "Pacifist Christians gathered in New Zealand after the war and put the land in trust in 1953 so no later generation could subdivide it. The residential community later became more secular and pluralist under the same deed. The uniqueness is that the trust and the meeting were designed not to be the same body.",
      tension: "Trustees who hold the deed versus members who milk the cows. A weekly allowance in a country of mortgages. How a consensus meeting of a small farm decides when the world wants a quicker yes.",
    },
  },
  "camphill-copake": {
    unique: true,
    whoDecides:
      "The board of Camphill Village U.S.A., Inc. holds legal government. About twenty-two lifesharing houses run breakfast, dignity, and most conflict. Villagers are not a corporate voting class; coworkers are not shareholders.",
    bodies: [
      {
        name: "Lifesharing houses",
        role: "About 22 extended-family households. The house, not a members’ co-op, is where the week actually happens.",
      },
      {
        name: "Camphill Village U.S.A., Inc.",
        role: "501(c)(3) that owns land, houses, and workshops. Tax-exempt since 1963. Nobody here buys a lot.",
      },
      {
        name: "Board of directors",
        role: "Legal government. Coworkers are not shareholders. Villagers are not a voting class in the corporate sense.",
      },
      {
        name: "Camphill Academy and the Association",
        role: "Training and a lateral movement of 100+ Camphills. Copake is a village in a practice, not a franchise with a head office.",
      },
    ],
    howItRuns:
      "A houseparent question stays in the house, then village management. A building goes to the board. A coworker year goes through Camphill Academy and safeguarding. A guest is invited into a house, not onto a campus-as-park.",
    dive: {
      title: "Twenty-two houses, no members’ co-op",
      lead: "Camphill Copake is not a housing co-op that happens to care for people. It is an anthroposophical lifesharing village: coworker families and adults with developmental disabilities live in extended-family houses, a nonprofit owns the dirt, and a board sits where a membership meeting would sit in Twin Oaks.",
      organs: [
        {
          name: "Lifesharing houses",
          what: "About 22 households. The house, not the general meeting, is where breakfast, dignity, and most conflict actually happen.",
        },
        {
          name: "Camphill Village U.S.A., Inc.",
          what: "The 501(c)(3) that owns land, houses, and workshops. Nobody here buys a lot.",
        },
        {
          name: "Board of directors",
          what: "Legal government. Coworkers are not shareholders. Villagers are not a voting class in the corporate sense.",
        },
        {
          name: "Camphill Academy and the Association",
          what: "Training and a lateral movement of 100+ Camphills. Copake is a village in a practice, not a franchise with a head office.",
        },
      ],
      path: "A houseparent question: the house, then village management. A building: the board. A coworker year: Camphill Academy and the village, with safeguarding first. A guest: the house you were invited into, not the campus as a park.",
      history: "Camphill began with Karl König’s work in Scotland. Copake is the oldest and largest Camphill in North America, tax-exempt since 1963, later renaming itself to the place-name custom of other Camphills. Lifesharing houses, workshops, and a farm are the week; the corporate form is charity, not co-op.",
      tension: "Who speaks for a villager in a board meeting they do not sit. Labour of coworkers versus labour of a job. Photography, families, and a charity that must look like a professional service to New York State without becoming a hospital that forgot it is a village.",
    },
  },
  "east-wind": {
    unique: true,
    whoDecides:
      "The community meeting on policy. Managers elected once a year on the nut-butter plant, the kitchen, and the land. There is no Skinner table of three planners, and no private title.",
    bodies: [
      {
        name: "Community meeting",
        role: "Direct democracy. Policy lives here, not in a founder’s kitchen.",
      },
      {
        name: "Annually elected managers",
        role: "The plant, the kitchen, the land. Elected, not hereditary, not a planner table of three.",
      },
      {
        name: "East Wind Community, Inc.",
        role: "Holds the Tecumseh County land, houses, and East Wind Nut Butters. Members are not shareholders of a brand they can sell.",
      },
      {
        name: "Federation of Egalitarian Communities",
        role: "The peer court. Acorn and Twin Oaks sit in the same labour-credit family.",
      },
    ],
    howItRuns:
      "A recipe on the line goes to the manager. A change in the labour deal goes to the meeting. A visitor sits the visitor period, then the membership. A person leaving takes what is personal. The plant stays.",
    dive: {
      title: "Direct democracy with a nut-butter plant",
      lead: "East Wind is Twin Oaks’ Ozark cousin without copying the three-planner diagram. Members share income, hold no private title, elect managers once a year, and decide the rest in meeting. The nut-butter plant is the treasury. Labour is the membership. There is no Skinner table of three, and no founder with a casting vote.",
      organs: [
        {
          name: "Community meeting",
          what: "Direct democracy. Policy lives here, not in a founder’s kitchen. The meeting can take all evening; the plant still has to ship.",
        },
        {
          name: "Annually elected managers",
          what: "The plant, the kitchen, the land. Elected, not hereditary, not a Skinner planner table of three.",
        },
        {
          name: "East Wind Community, Inc.",
          what: "Holds the Tecumseh County land, houses, and East Wind Nut Butters. Members are not shareholders of a brand they can sell.",
        },
        {
          name: "Federation of Egalitarian Communities",
          what: "The peer court. Acorn and Twin Oaks sit in the same labour-credit family.",
        },
      ],
      path: "A recipe on the line: the manager. A change in the labour deal: the meeting. A visitor who wants to stay: the visitor period, then the membership. A person leaving takes what is personal. The plant stays.",
      history: "East Wind was founded in 1974 in the Missouri Ozarks as an FEC income-sharing farm. Nut butters became the cash engine around 1981. The bet was that a meeting plus elected managers could run a factory without becoming a boss-and-wage shop.",
      tension: "A food plant that must ship on time versus a meeting that can take all evening. How close the culture stays to Twin Oaks when the org chart is different. Isolation, turnover, and a product the grocery world understands better than the commune.",
    },
  },
  niederkaufungen: {
    unique: true,
    whoDecides:
      "Members of Kommune Niederkaufungen e.V., by consensus. The common purse is the membership. Fourteen living groups and the work collectives sit under that, and the property is written so it cannot be privatized.",
    bodies: [
      {
        name: "Members’ meeting (consensus)",
        role: "The common purse is the membership. Consensus, not a board of outside directors.",
      },
      {
        name: "Living groups",
        role: "About fourteen households inside the commune. Breakfast politics happens here before it happens in the e.V.",
      },
      {
        name: "Work collectives",
        role: "Each enterprise (building, kitchen, seminar, horticulture) runs as a collective, not as a manager with staff.",
      },
      {
        name: "Two Vereine",
        role: "Kommune Niederkaufungen e.V. holds the means of production. Verein für Ökologie, Gesundheit und Bildung e.V. runs the seminar house, kindergarten, and horticulture that face the town.",
      },
    ],
    howItRuns:
      "A kitchen fight stays in the living group, then the meeting. A new enterprise goes through the collectives and the e.V. A seminar guest deals with the education Verein, which is not a back door into the purse. Leaving means leaving the association; you do not peel off a house.",
    dive: {
      title: "An e.V. that cannot be turned back into houses",
      lead: "Niederkaufungen made communal property a German association fact: Kommune Niederkaufungen e.V. owns the land, buildings, vehicles, and tools, every communard is a member, and the property is written so it cannot be privatized even if membership fell below the seven people a Verein needs to found. Fourteen living groups and work collectives sit under that.",
      organs: [
        {
          name: "Members’ meeting (consensus)",
          what: "The common purse is the membership. Consensus, not a board of outside directors.",
        },
        {
          name: "Living groups",
          what: "About fourteen households inside the commune. Breakfast politics happens here before it happens in the e.V.",
        },
        {
          name: "Work collectives",
          what: "Each enterprise (building, kitchen, seminar, horticulture) runs as a collective, not as a manager with staff.",
        },
        {
          name: "Two Vereine",
          what: "Kommune Niederkaufungen e.V. holds the means of production. Verein für Ökologie, Gesundheit und Bildung e.V. runs the seminar house, kindergarten, and horticulture that face the town.",
        },
      ],
      path: "A kitchen fight: the living group, then the meeting. A new enterprise: the collectives and the e.V. A guest on a seminar: the education Verein, which is not a back door into the purse. Leaving: you leave the association; you do not peel off a house.",
      history: "West German political communards built Niederkaufungen in the mid-1980s as a left, income-sharing answer to both the nuclear household and the guru commune. Kommuja, the network of political communes, is the peer group. The e.V. form was chosen so the next generation could not quietly become landlords.",
      tension: "Consensus at the scale of dozens of adults. Two Vereine so the seminar business does not own the commune. German association law, tax, and a purse that still has to buy heating oil.",
    },
  },
  earthaven: {
    unique: true,
    whoDecides:
      "You join a pod first — a housing co-op or an LLC that owns the neighborhood land — then Earthaven Community Association on the roads, Council Hall, and CC&Rs. Modified consensus in Council. A course guest is not a pod member.",
    bodies: [
      {
        name: "Pods (co-ops and LLCs)",
        role: "The membership that actually houses you. Each pod writes its own documents. A co-op pod makes you a shareholder with a site; an LLC pod uses company membership.",
      },
      {
        name: "Earthaven Community Association",
        role: "Village-level membership, including nonresident contributing members. HOA board for commons. Modified consensus in Council.",
      },
      {
        name: "CC&Rs",
        role: "Sustainability building and land-use rules recorded in Rutherford County. They outlive a friendly Council vote.",
      },
      {
        name: "School of Integrated Living",
        role: "Tours and whole-life-skills programs. The educational charity is not the HOA, and a course guest is not a pod member.",
      },
    ],
    howItRuns:
      "A compost toilet drawing goes to the pod, then the CC&Rs, then Council if it touches commons. A new resident sits the pod’s membership process first. A road is the Association. A SOIL course is the school, then whoever is hosting — not a right to walk every neighborhood.",
    dive: {
      title: "Pods own the neighborhoods; the Association owns the roads",
      lead: "Earthaven is not one HOA of house lots. Residential “pods” — housing cooperatives or LLCs — own neighborhood land and define their own membership. Earthaven Community Association owns the common land, Council Hall, and roads, and records CC&Rs that run with the dirt in Rutherford County. You join a pod, then the village.",
      organs: [
        {
          name: "Pods (co-ops and LLCs)",
          what: "The membership that actually houses you. A co-op pod makes you a shareholder with a site; an LLC pod uses company membership. Each pod writes its own documents.",
        },
        {
          name: "Earthaven Community Association",
          what: "Village-level membership, including nonresident contributing members. HOA board for commons. Modified consensus in Council.",
        },
        {
          name: "CC&Rs",
          what: "Sustainability building and land-use rules recorded in the county. They outlive a friendly Council vote.",
        },
        {
          name: "School of Integrated Living",
          what: "Tours and whole-life-skills programs. The educational charity is not the HOA, and a course guest is not a pod member.",
        },
      ],
      path: "A compost toilet drawing: the pod, then CC&Rs, then Council if it touches commons. A new resident: the pod’s membership process first. A road: the Association. A visitor on a SOIL course: the school, then whoever is hosting, not a right to walk every neighborhood.",
      history: "Earthaven formed in the mid-1990s in the southern Appalachians as a permaculture village that refused both a single commune purse and a conventional subdivision. Pods were the device that let neighborhoods choose co-op or LLC without splitting the common land.",
      tension: "Modified consensus that can stall a building. Pods that drift into different class realities. CC&Rs versus a culture that likes experiments. Nonresident contributing members who vote on a village they do not sleep in.",
    },
  },
  oaec: {
    unique: true,
    whoDecides:
      "Sowing Circle LLC, by consensus, on who lives on the 80 acres. Occidental Arts & Ecology Center’s nonprofit board on the public school of land. An Organic Agricultural Easement with Sonoma Land Trust on whether the gardens stay organic. Shares are not market lots.",
    bodies: [
      {
        name: "Sowing Circle LLC",
        role: "The residential intentional community. Consensus. Closed. They hold the land and buildings.",
      },
      {
        name: "OAEC nonprofit board",
        role: "Public education, seed, and advocacy. Course students and interns deal with the Center, not with a membership application to the LLC.",
      },
      {
        name: "Organic Agricultural Easement",
        role: "Sonoma Land Trust and the Warsh-Mott Legacy. The gardens stay organic in perpetuity. That is government by covenant.",
      },
    ],
    howItRuns:
      "A new resident of the Circle is a consensus of the LLC, and there may be no vacancy. A PDC student deals with OAEC. A change in an orchard answers to the easement as much as the household. A journalist who wants the kitchen gets the Center’s public face, then the Circle’s door.",
    dive: {
      title: "A closed circle that owns a public school of land",
      lead: "Sowing Circle LLC is a small consensus household that owns the 80 acres. Occidental Arts & Ecology Center is a separate 501(c)(3) that teaches on the same dirt. An Organic Agricultural Easement with Sonoma Land Trust keeps the gardens organic whether or not the next generation still wants a commune. Shares are not market lots.",
      organs: [
        {
          name: "Sowing Circle LLC",
          what: "The residential intentional community. Consensus. Closed. They hold the land and buildings.",
        },
        {
          name: "OAEC nonprofit board",
          what: "Public education, seed, and advocacy. Course students and interns deal with the Center, not with a membership application to the LLC.",
        },
        {
          name: "Organic Agricultural Easement",
          what: "Sonoma Land Trust and the Warsh-Mott Legacy. The gardens stay organic in perpetuity. That is government by covenant.",
        },
      ],
      path: "A new resident of the Circle: consensus of the LLC, and there may be no vacancy. A PDC student: OAEC. A change in an orchard: the easement as much as the household. A journalist who wants the kitchen: the Center’s public face, then the Circle’s door.",
      history: "Friends bought the Occidental ranch and split the problem: a small group would live here; a nonprofit would teach here; an easement would outlive both. One of the country’s first organic agricultural easements is the scar of that design.",
      tension: "A public calendar on private residential land. LLC shares that are not supposed to become Sonoma real estate. How small a consensus circle can stay while the Center’s reputation grows.",
    },
  },
  cloughjordan: {
    unique: true,
    whoDecides:
      "Sustainable Projects Ireland CLG owns the 67-acre site, the roads, and the district heating. Member households finance their own eco-homes on serviced sites and sit as company members. You join the company to live on the commons; you do not buy the village.",
    bodies: [
      {
        name: "Sustainable Projects Ireland CLG",
        role: "Educational charity on co-operative principles. Owns the site and shared infrastructure. A board of directors oversees the company. Members have a say.",
      },
      {
        name: "Member households",
        role: "Deposits into the land and services, then a house they finance. Livelihoods stay with households. About 55 of a planned 114–130 homes have been built.",
      },
      {
        name: "Self-organizing groups",
        role: "Mutual-agreement culture for the week. Not a single town-meeting that can stall the boiler.",
      },
      {
        name: "Cloughjordan Community Farm",
        role: "CSA that leases about 12 acres from the ecovillage plus off-site ground. A farm member is not automatically a site member.",
      },
    ],
    howItRuns:
      "A heating outage is SPI. A house extension is the household, then the company’s design rules. A new resident is membership of the CLG and a site. A CSA box is the farm, which is a neighbor on the same map.",
    dive: {
      title: "The company owns the heat; you own the house",
      lead: "Cloughjordan put the Irish land-and-services problem into a company limited by guarantee. Sustainable Projects Ireland CLG owns the 67-acre site, the roads, and the district heating. Member households finance their own eco-homes on serviced sites. You join the company to live on the commons; you do not buy the village.",
      organs: [
        {
          name: "Sustainable Projects Ireland CLG",
          what: "Educational charity on co-operative principles. Owns the site and shared infrastructure. A board of directors oversees the company. Members have a say.",
        },
        {
          name: "Member households",
          what: "Deposits into the land and services, then a house they finance. Livelihoods stay with households. About 55 of a planned 114–130 homes have been built.",
        },
        {
          name: "Self-organizing groups",
          what: "Mutual-agreement culture for the week. Not a single town-meeting that can stall the boiler.",
        },
        {
          name: "Cloughjordan Community Farm",
          what: "CSA that leases about 12 acres from the ecovillage plus off-site ground. A farm member is not automatically a site member.",
        },
      ],
      path: "A heating outage: SPI. A house extension: the household, then the company’s design rules. A new resident: membership of the CLG and a site. A CSA box: the farm, which is a neighbor on the same map.",
      history: "The project spent the 2000s assembling a Tipperary site as a co-operative eco-village rather than a developer HOA. SPI as a CLG was the Irish vehicle that could hold commons, take members, and stay a charity. District heating is the piece that makes the commons undeniable every winter.",
      tension: "A company board versus a culture of mutual agreement. Empty serviced sites. Households that own houses on land they do not own. How an educational charity explains itself to a bank that wants lots.",
    },
  },
  lama: {
    unique: true,
    whoDecides:
      "Whoever is actually on the mountain this season sits a consensus circle. A 501(c)(3) board of mostly past residents holds legal authority and treats itself as advisors. There are no permanent members and no private lots.",
    bodies: [
      {
        name: "Resident and summer-steward circle",
        role: "The living government for whoever is actually on the land. Consensus. Seasonal on purpose.",
      },
      {
        name: "501(c)(3) board",
        role: "EIN 85-0202741. Ultimate legal authority. Chooses to advise rather than to manage the kitchen. Mostly people who already did a season.",
      },
      {
        name: "The mountain programs",
        role: "Retreats, practice, and the press history (Ram Dass finished Be Here Now here in 1971). Guests come by arrangement.",
      },
    ],
    howItRuns:
      "A summer work list is the circle. A roof is the board, because the charity holds the buildings. A visitor comes by arrangement, not a drop-in. A person who wants to “join” is told there is no such membership: there is a season, then another season if the circle and the mountain still fit.",
    dive: {
      title: "No permanent members, a board that refuses to rule",
      lead: "Lama Foundation holds a mountain as a 501(c)(3). There are no permanent members and no private lots. A board of mostly past residents holds legal authority and treats itself as advisors. Residents and summer stewards sit a circle for the season. You cannot buy your way onto the mountain.",
      organs: [
        {
          name: "Resident and summer-steward circle",
          what: "The living government for whoever is actually on the land. Consensus. Seasonal on purpose.",
        },
        {
          name: "501(c)(3) board",
          what: "EIN 85-0202741. Ultimate legal authority. Chooses to advise rather than to manage the kitchen. Mostly people who already did a season.",
        },
        {
          name: "The mountain programs",
          what: "Retreats, practice, and the press history (Ram Dass finished Be Here Now here in 1971). Guests come by arrangement.",
        },
      ],
      path: "A summer work list: the circle. A roof: the board, because the charity holds the buildings. A visitor: by arrangement, not a drop-in. A person who wants to “join”: there is no such membership; there is a season, then another season if the circle and the mountain still fit.",
      history: "Steve Durkee and others founded Lama in 1967 as a spiritual practice place rather than a land-owning village. The board-and-circle split is how they kept a 501(c)(3) from becoming either a guru’s private ranch or a homeowners’ mountain.",
      tension: "Seasonal people governing a permanent land trust. A board that can legally overrule a circle it does not want to overrule. Fire, water, and Taos County. The reputation of Be Here Now versus the quiet of whoever is there this August.",
    },
  },
  acorn: {
    unique: true,
    whoDecides:
      "Members in consensus. Smaller than Twin Oaks, so the meeting is the planner table. Southern Exposure Seed Exchange is the treasury, not a founder-owned brand. Labour credits are the membership.",
    bodies: [
      {
        name: "Members in consensus",
        role: "The government. Smaller than Twin Oaks, so the meeting is the planner table.",
      },
      {
        name: "Labour-credit culture",
        role: "FEC inheritance. Hours are the membership. The seed warehouse is a work area, not a job you take home.",
      },
      {
        name: "Southern Exposure Seed Exchange",
        role: "Open-pollinated and heirloom seed. The income engine. Assets sit with the commune, not with a founder-owner.",
      },
      {
        name: "Federation of Egalitarian Communities",
        role: "Twin Oaks is the parent culture. Visitors often arrive through that door.",
      },
    ],
    howItRuns:
      "A seed-packet question stays in the work area. A labour-quota change goes to the meeting. A visitor sits the Twin Oaks-family visitor period and an interview. Capacity is beds. Do not confuse this Acorn with the California 501(c)(3) of a similar name.",
    dive: {
      title: "A seed company that is the commune",
      lead: "Acorn is Twin Oaks’ Virginia spin-off: income-sharing, labour credits, no buy-in, FEC process. Consensus of the members is the meeting. Southern Exposure Seed Exchange, taken on in 1999, is the treasury and the public face. Rooms, not lots, are the limit.",
      organs: [
        {
          name: "Members in consensus",
          what: "The government. Smaller than Twin Oaks, so the meeting is the planner table.",
        },
        {
          name: "Labour-credit culture",
          what: "FEC inheritance. Hours are the membership. The seed warehouse is a work area, not a job you take home.",
        },
        {
          name: "Southern Exposure Seed Exchange",
          what: "Open-pollinated and heirloom seed. The income engine. Assets sit with the commune, not with a founder-owner.",
        },
        {
          name: "Federation of Egalitarian Communities",
          what: "Twin Oaks is the parent culture. Visitors often arrive through that door.",
        },
      ],
      path: "A seed-packet question: the work area. A labour-quota change: the meeting. A visitor: the Twin Oaks-family visitor period and an interview. Capacity is beds. Do not confuse this Acorn with the California 501(c)(3) of a similar name.",
      history: "Members from Twin Oaks founded Acorn in 1993 in Louisa County as a second FEC farm. Taking on Southern Exposure in 1999 gave the commune a trade the outside world already understood. The structure is Twin Oaks without the three-planner overlay.",
      tension: "A mail-order seed season that does not wait for consensus. A small membership carrying a known brand. How close to keep to Twin Oaks when people chose Acorn in order to be smaller.",
    },
  },
  "oneida-community": {
    unique: true,
    whoDecides:
      "While it lived: John Humphrey Noyes and the criticism meeting. After 1881: shareholders of Oneida Community, Limited. Today: a museum desk. The Mansion House tour is not a surviving household.",
    bodies: [
      {
        name: "Noyes and the inner circle",
        role: "Founder-weight. Theological and sexual authority sat with the same person until the house would not carry it.",
      },
      {
        name: "Mutual criticism",
        role: "The membership process and the conflict process were the same meeting. Not a HOA fine.",
      },
      {
        name: "Complex marriage and stirpiculture",
        role: "The sexual constitution. Unique in this atlas. It is also why the house had to end in public.",
      },
      {
        name: "Oneida Community, Limited (1881)",
        role: "The joint-stock conversion. Silverware outlived the covenant. The Mansion House is a museum and apartments. The village does not sit.",
      },
    ],
    howItRuns:
      "While it lived, a spiritual and sexual question went to Noyes and the criticism meeting; a workshop question went to the industries. After 1881, a shareholder meeting. Today, a museum desk. Do not treat the Mansion House tour as a surviving household.",
    dive: {
      title: "Complex marriage, then a joint-stock company",
      lead: "Oneida did not fail as a vague hippie house. It was a Perfectionist household under John Humphrey Noyes: complex marriage, mutual criticism, stirpiculture, and common property from 1848 to 1881. The unique inner government is that the religious experiment ended by turning itself into Oneida Community, Limited — a company — rather than into a church or a town.",
      organs: [
        {
          name: "Noyes and the inner circle",
          what: "Founder-weight. Theological and sexual authority sat with the same person until the house would not carry it.",
        },
        {
          name: "Mutual criticism",
          what: "The membership process and the conflict process were the same meeting. Not a HOA fine.",
        },
        {
          name: "Complex marriage and stirpiculture",
          what: "The sexual constitution. Unique in this atlas. It is also why the house had to end in public.",
        },
        {
          name: "Oneida Community, Limited (1881)",
          what: "The joint-stock conversion. Silverware outlived the covenant. The Mansion House is a museum and apartments. The village does not sit.",
        },
      ],
      path: "While it lived: a spiritual and sexual question went to Noyes and the criticism meeting; a workshop question went to the industries. After 1881: a shareholder meeting. Today: a museum desk. Do not treat the Mansion House tour as a surviving household.",
      history: "Noyes’s Perfectionists moved from Putney to Oneida in 1848. For a generation the house held industries, a newspaper, and a sexual order the rest of America would not. Facing law and internal revolt, they dissolved the community in 1881 into a company. That conversion is the constitution’s last act.",
      tension: "A founder who was the government. A sexual order that could not be made ordinary. The honesty of ending as a company instead of pretending the covenant still sat. Unique because the inner law was theological, sexual, and industrial at once — and because they knew when to stop.",
    },
  },
};
