import type { Community } from "./communities";

/** Ten living villages, oldest founding first: a Galloway housing co-op in a Victorian hall, a Berlin film-studio occupation, Sweden’s first eco-village, Fremantle mixed-equity cohousing, America’s first new-build cohousing, a Salento libertarian farm, a Somerset woodland with a 2023 planning win, Stockholm’s first eco-co-op, a Zealand plot village, and a Missouri land-trust of homesteads next to Dancing Rabbit. */
export const livingBatch4Communities: Community[] = [
 {
  slug: "laurieston-hall",
  name: "Laurieston Hall",
  location: "Laurieston, near Castle Douglas, Dumfries and Galloway",
  region: "Dumfries and Galloway, Scotland",
  country: "United Kingdom",
  foundedYear: 1972,
  foundedLabel: "1972 (commune); housing co-operative from 1987",
  members: 23,
  membersLabel: "About 19–23 adults plus children (Diggers and Dreamers / FIC; the community has not been recruiting)",
  acres: 180,
  acresLabel: "About 180 acres of woods, pasture, and wetland around a Victorian hall (Diggers and Dreamers); another host page has said 135 acres",
  legalStructure:
   "Laurieston Hall Housing Co-operative Ltd. Eight adults bought the hall in 1972 with a sealed bid of £25,500. In 1987 the commune reconstituted as a housing co-operative. People live in and around a huge Victorian house, a walled organic garden, stables, and cottages. There is no published map of private lots. Diggers and Dreamers and the UK Co-op directory list it. lauriestonhall.org.uk is the door. The community has said it is not currently looking for more members.",
  legalCategory: "Housing cooperative",
  stillActive: true,
  images: [
   "/communities/laurieston-hall-land.jpg",
   "/communities/laurieston-hall-1.jpg",
   "/communities/laurieston-hall-2.jpg",
   "/communities/laurieston-hall-3.jpg"
  ],
  summary:
   "In Galloway, about twenty people share a Victorian hall and a long piece of wood and wetland. They bought it as a commune in 1972. In 1987 they became a housing co-operative. Guest weeks still happen. A sealed bid is not how you join now.",
  businessModel:
   "Co-op housing costs, guest weeks, and the work of keeping a large house and garden. There is no lot catalogue. Confirm current guest dates on lauriestonhall.org.uk.",
  foundingProcess:
   "Eight adults with children put in a sealed bid in 1972 and won the hall. Fifteen years of commune, then a co-op on paper. Fifty years is the proof.",
  governance:
   "Housing co-operative meeting. Guest weeks are bookings. Membership is a long conversation, and they have said they are not recruiting.",
  website: "https://www.lauriestonhall.org.uk/",
  timeline: [
   { year: "1972", event: "Sealed bid of £25,500. Commune begins in the hall." },
   { year: "1987", event: "Reconstituted as Laurieston Hall Housing Co-operative Ltd." },
   { year: "Present", event: "About twenty adults, woods and wetland, guest weeks. Not currently recruiting." }
  ]
 },
 {
  slug: "ufa-fabrik",
  name: "ufaFabrik",
  location: "Viktoriastraße 10–18, Tempelhof, Berlin",
  region: "Berlin, Germany",
  country: "Germany",
  foundedYear: 1979,
  foundedLabel: "June 1979 (occupation of the former UFA film laboratory)",
  members: 30,
  membersLabel: "About 30 residents; more than 180 people work on the site",
  acres: 4.6,
  acresLabel: "18,500 m² (about 4.6 acres), a former UFA film lab leased as an urban village",
  legalStructure:
   "International Culture Centre ufaFabrik Berlin is a self-governing work-and-life project on a former Universal Film studio laboratory in Tempelhof. About a hundred people occupied the 18,500 m² tract in June 1979 when the historic buildings were slated for demolition. The site is leased from the city in published accounts. Roughly thirty people live there. More than 180 work there: theatre, circus, café, organic bakery, neighbourhood projects.",
  legalCategory: "Urban cultural cooperative / lease",
  stillActive: true,
  images: [
   "/communities/ufa-fabrik-land.jpg",
   "/communities/ufa-fabrik-1.jpg",
   "/communities/ufa-fabrik-2.jpg",
   "/communities/ufa-fabrik-3.jpg"
  ],
  summary:
   "In Tempelhof, a film laboratory that was going to be demolished became an urban village in 1979. Thirty people live on four and a half acres. A hundred and eighty work there. You buy a ticket to a show. You do not buy a Berlin lote on the old UFA lot.",
  businessModel:
   "Culture, café, bakery, courses, city lease. Residents are a small household inside a large workplace. A concert ticket is not a key.",
  foundingProcess:
   "Young people occupied the bankrupt UFA lab in June 1979 and stayed long enough that the city had to bargain. The occupation became a lease and a cultural centre.",
  governance:
   "Self-governing project on city ground. Confirm the current civil wrapper with the centre. A circus matinee is not a members’ meeting.",
  website: "https://www.ufafabrik.de/en/",
  timeline: [
   { year: "1921–1970s", event: "UFA film laboratory on the Tempelhof site." },
   { year: "1979", event: "Occupation in June. International Culture Centre begins." },
   { year: "Present", event: "About 30 residents, 180+ workers, 18,500 m² urban village." }
  ]
 },
 {
  slug: "tuggelite",
  name: "Tuggelite",
  location: "About 10 km from Karlstad centre, Värmland, on a city bus",
  region: "Värmland, Sweden",
  country: "Sweden",
  foundedYear: 1984,
  foundedLabel: "Early 1980s (research group in the 1970s; Sweden’s first completed eco-village)",
  members: 50,
  membersLabel: "16 households in five apartment houses (resident headcount unpublished; this atlas uses households as scale)",
  acres: null,
  acresLabel: "A small cluster of five low-energy apartment houses on the Karlstad edge (published hectare figure not isolated)",
  legalStructure:
   "Tuggelite is Sweden’s first completed eco-village: sixteen households in five apartment houses, built with municipal help after a Gothenburg research group spent the 1970s on the idea. Karlstad backed compost toilets, wood-pellet heat, and triple glazing when those were still arguments. Households hold ordinary Swedish housing tenure inside a village that was meant to be copied. WWF wrote it up as an urban eco-village. There is no single public lot catalogue.",
  legalCategory: "Housing association / eco-village",
  stillActive: true,
  images: [
   "/communities/tuggelite-land.jpg",
   "/communities/tuggelite-1.jpg",
   "/communities/tuggelite-2.jpg",
   "/communities/tuggelite-3.jpg"
  ],
  summary:
   "Ten kilometres from Karlstad, sixteen households in five apartment houses were Sweden’s first eco-village. Wood pellets, compost toilets, triple glass, a municipality that said yes. You live in a flat. You do not buy a pioneer lote on a 1970s drawing.",
  businessModel:
   "Ordinary Swedish housing costs in a purpose-built cluster. The innovation was the kit and the city’s permits, not a share offer.",
  foundingProcess:
   "University of Gothenburg researchers and a Karlstad that would sign off compost toilets. Built in the early 1980s so later Swedish eco-villages would have something to point at.",
  governance:
   "Housing association of the five houses. A bus ride from the centre is not a membership interview.",
  website: "https://www.ekoby.org/cs1.html",
  timeline: [
   { year: "1970s", event: "Gothenburg research group designs a resource-light housing cluster." },
   { year: "Early 1980s", event: "Five houses, 16 households, municipal backing. First completed Swedish eco-village." },
   { year: "Present", event: "Still lived in. Cited as the first generation of Swedish eco-villages." }
  ]
 },
 {
  slug: "pinakarri",
  name: "Pinakarri Community",
  location: "Hamilton Hill, next to Fremantle, Western Australia",
  region: "Western Australia, Australia",
  country: "Australia",
  foundedYear: 1991,
  foundedLabel: "1991 (community formed); mixed-equity cohousing later built on about 1 ha",
  members: 35,
  membersLabel: "About 35 people in 12–14 dwellings",
  acres: 2.5,
  acresLabel: "About 1 hectare (roughly 2.5 acres) of suburban cohousing next to Fremantle",
  legalStructure:
   "Pinakarri is a suburban cohousing co-operative in Hamilton Hill: twelve architect-designed dwellings plus a common house, combining a private-equity co-operative with a public rental co-operative so some households buy in and some rent through the state. Founding year 1991. An award-winning intentional cohousing co-operative of about two dozen to thirty-five people. It is a Fremantle neighbourhood, not a bush lote map.",
  legalCategory: "Housing cooperative (mixed equity / rental)",
  stillActive: true,
  images: [
   "/communities/pinakarri-land.jpg",
   "/communities/pinakarri-1.jpg",
   "/communities/pinakarri-2.jpg",
   "/communities/pinakarri-3.jpg"
  ],
  summary:
   "Beside Fremantle, about thirty-five people share a hectare of cohousing. Some bought in. Some rent through a public co-op. Twelve houses and a common house. A state partnership, not a weekend earthship.",
  businessModel:
   "Mixed equity and affordable rental. Households pay according to the tenure they hold.",
  foundingProcess:
   "A Fremantle group formed in 1991 and built a mixed-equity cluster with the state so the street would not be only those who could raise a full deposit.",
  governance:
   "Co-op of resident households. A rental unit and an equity share sit under the same common house. A photograph of the courtyard is not an application.",
  website: "https://pinakarri.org.au/",
  timeline: [
   { year: "1991", event: "Pinakarri Community formed in Fremantle." },
   { year: "1990s–2000s", event: "Twelve dwellings and a common house; mixed equity with public rental." },
   { year: "Present", event: "About 35 people. Still a suburban co-op, not a lot sale." }
  ]
 },
 {
  slug: "muir-commons",
  name: "Muir Commons",
  location: "Davis, California",
  region: "California, USA",
  country: "United States",
  foundedYear: 1991,
  foundedLabel: "1991 (move-in; groundbreaking November 1990). First new-construction cohousing in the United States",
  members: 80,
  membersLabel: "26 homes; about 45 adults and 35 children on the community’s own count",
  acres: 3,
  acresLabel: "Just under three acres; houses 808–1,381 sq ft plus a 3,668 sq ft common house",
  legalStructure:
   "Muir Commons is a cohousing homeowners association: twenty-six privately owned houses and equally shared common areas, designed by Charles Durrett after Danish cohousing. Groundbreaking November 1990. Residents moved in in summer 1991. It was the first newly built cohousing community in the United States. Units are wheelchair-accessible. Parking is on the edge so the middle is for walking. Consensus for community decisions. A house sale is ordinary California title plus the cohousing covenants.",
  legalCategory: "Cohousing / homeowners association",
  stillActive: true,
  images: [
   "/communities/muir-commons-land.jpg",
   "/communities/muir-commons-1.jpg",
   "/communities/muir-commons-2.jpg",
   "/communities/muir-commons-3.jpg"
  ],
  summary:
   "In Davis, twenty-six houses face a common house on three acres. Charles Durrett drew it after Denmark. People moved in in 1991. It was the first new-build cohousing in the country. You buy a house. You also inherit the meals and the workshop.",
  businessModel:
   "Private house sales plus HOA dues for the common house, orchard, and shop. Davis prices. A listing is the membership door.",
  foundingProcess:
   "A Davis group spent the late 1980s on Danish cohousing. Durrett designed it. They broke ground in November 1990 because the city would permit it.",
  governance:
   "Homeowners association and consensus for shared decisions. A walk through the orchard is not a board meeting.",
  website: "https://muircommons.org/",
  timeline: [
   { year: "Late 1980s", event: "Planning group in Davis; Charles Durrett design after Danish cohousing." },
   { year: "1990–91", event: "Groundbreaking November 1990. Move-in summer 1991. First US new-build cohousing." },
   { year: "2011–16", event: "Twentieth and twenty-fifth anniversary coverage in the Davis Enterprise." }
  ]
 },
 {
  slug: "urupia",
  name: "Urupia",
  location: "Contrada Cistonaro, Francavilla Fontana, Alto Salento, between Brindisi and Taranto",
  region: "Apulia, Italy",
  country: "Italy",
  foundedYear: 1993,
  foundedLabel: "September 1993 (first consensual points of the commune)",
  members: 15,
  membersLabel: "A small residential core plus people who pass through for assemblies, harvests, and camps (headcount unpublished)",
  acres: null,
  acresLabel: "A masseria and fields in Alto Salento (published hectare figure not isolated in the sources this atlas used)",
  legalStructure:
   "Urupia is an open libertarian agricultural commune on a Salento masseria. The first consensual points were written in September 1993. Società Cooperativa La Petrosa is the published civil wrapper for the farm. People who stay join assemblies and daily work rather than buy a plot. Wine, oil, ovens, phytodepuration, solar thermal and photovoltaic. Festival delle Terre is the public week. urupia.wordpress.com and comune.urupia@gmail.com are the door. A harvest camp is not a Puglian lote.",
  legalCategory: "Libertarian commune / agricultural cooperative",
  stillActive: true,
  images: [
   "/communities/urupia-land.jpg",
   "/communities/urupia-1.jpg",
   "/communities/urupia-2.jpg",
   "/communities/urupia-3.jpg"
  ],
  summary:
   "In Alto Salento, a libertarian farm commune has been assembling since 1993. A masseria, a co-operative on paper, wine and oil, a festival on the land. You write, you work, you sit the meeting. You do not buy a trullo as a share.",
  businessModel:
   "Agricultural produce, GAS solidarity buying, camps and the festival. The co-operative holds the farm. Confirm current stays by email.",
  foundingProcess:
   "Salento anarchists and the magazine Senza Patria wrote the first points in 1993 and took a masseria. Thirty years of assemblies is the structure.",
  governance:
   "Assemblies of whoever is living the place. La Petrosa is the farm paper. A festival ticket is not a vote.",
  website: "https://urupia.wordpress.com/",
  timeline: [
   { year: "1993", event: "First consensual points of the commune, September." },
   { year: "1990s–present", event: "Masseria farm, co-operative La Petrosa, Festival delle Terre." },
   { year: "2025–26", event: "Thirtieth and thirty-first birthdays marked on the commune’s own pages." }
  ]
 },
 {
  slug: "tinkers-bubble",
  name: "Tinkers Bubble",
  location: "Norton-sub-Hamdon, Somerset",
  region: "Somerset, United Kingdom",
  country: "United Kingdom",
  foundedYear: 1994,
  foundedLabel: "1 January 1994 (moved onto the land); permanent planning permission 2023",
  members: 12,
  membersLabel: "A small low-impact household (published headcount drifts; residency is by trial and a Residents Agreement)",
  acres: 40,
  acresLabel: "About 40 acres of woodland, orchard, and field, worked without fossil fuel as the founding brief",
  legalStructure:
   "Tinkers Bubble is a low-impact woodland community. A group moved onto forty acres on New Year’s Day 1994 to live off-grid, horse-powered, and local. They fought planning for decades and were awarded permanent planning permission in 2023. There is no buy-in. Long-term people sign a Residents Agreement. Communal expenses have been published at about £120 a month plus three days’ communal work a fortnight. tinkersbubble.org is the door. The Landworkers’ Alliance marked thirty-one years in 2025. A yurt photograph is not a Somerset lote.",
  legalCategory: "Low-impact / unincorporated community",
  stillActive: true,
  images: [
   "/communities/tinkers-bubble-land.jpg",
   "/communities/tinkers-bubble-1.jpg",
   "/communities/tinkers-bubble-2.jpg",
   "/communities/tinkers-bubble-3.jpg"
  ],
  summary:
   "In Somerset, a small household has lived on forty acres without the fossil-fuel brief since 1994. Horses, woodland, orchard. Permanent planning in 2023, after a long fight. You volunteer, then you maybe stay. You do not buy a roundhouse.",
  businessModel:
   "Communal expenses, woodland and orchard produce, volunteer labour. No plot sales. Confirm current contributions on tinkersbubble.org.",
  foundingProcess:
   "Landworkers moved onto the field on 1 January 1994. Planning was the second founding, finished in 2023.",
  governance:
   "Residents Agreement and a small meeting. A volunteer week is a trial. Membership is fit, not a deposit.",
  website: "https://tinkersbubble.org/",
  timeline: [
   { year: "1994", event: "Move onto 40 acres, New Year’s Day. Low-impact woodland community begins." },
   { year: "1990s–2020s", event: "Long planning fight. Horse work, orchard, woodland." },
   { year: "2023", event: "Permanent planning permission. 2025: thirty-one years marked by the Landworkers’ Alliance." }
  ]
 },

 {
  slug: "hallingelille",
  name: "Hallingelille",
  location: "Near Ringsted, Zealand, about 70 km from Copenhagen",
  region: "Zealand, Denmark",
  country: "Denmark",
  foundedYear: 2004,
  foundedLabel: "c. 2004 (old chicken-and-pig farm; LØS-listed eco-village)",
  members: 70,
  membersLabel: "More than 50 adults and about 20 children on a 2019 visitor account; 20 ordinary plots plus two collectives",
  acres: null,
  acresLabel: "A former livestock farm: plots, two collectives, lake, peace forest, willow treatment, community house (hectare figure not isolated)",
  legalStructure:
   "Økosamfundet Hallingelille is a Danish eco-village of twenty ordinary plots, a small hill, and two collectives, plus a community house, peace forest, lake, animal enclosures, and a willow wastewater system. It grew on an old chicken-and-pig farm in the mid-2000s. Landsforeningen for Økosamfund lists it. Households hold their own plots; the commons are the village. GEN Europe has used the site for youth exchanges. A plot here is a house in a village, not a Copenhagen investment lote.",
  legalCategory: "Eco-village (plots + collectives)",
  stillActive: true,
  images: [
   "/communities/hallingelille-land.jpg",
   "/communities/hallingelille-1.jpg",
   "/communities/hallingelille-2.jpg",
   "/communities/hallingelille-3.jpg"
  ],
  summary:
   "On Zealand, an old farm became a village of twenty plots and two collectives. Lake, willow cleaning, a peace forest, more than fifty adults. You live in a house. You also inherit the commons work. Copenhagen is seventy kilometres, not a commute for a weekend cabin.",
  businessModel:
   "Household plots plus shared commons costs. Confirm current openings with the village. WWOOF stays have been advertised; they are work, not a plot.",
  foundingProcess:
   "A group took a livestock farm in the mid-2000s and turned pasture into forest, lake, gardens, and plots. LØS listing is the network stamp.",
  governance:
   "Village of plot-holders and two collectives. A youth exchange week is a visit. Plot tenure is a slower conversation.",
  website: "https://www.hallingelille.dk/",
  timeline: [
   { year: "c. 2004", event: "Eco-village begins on a former chicken-and-pig farm near Ringsted." },
   { year: "2010s", event: "Plots, collectives, lake, willow treatment, LØS listing." },
   { year: "2019", event: "Visitor account: 50+ adults, about 20 children, 20 plots and two collectives." }
  ]
 },
 {
  slug: "red-earth-farms",
  name: "Red Earth Farms",
  location: "Scotland County, northeast Missouri, a short walk from Dancing Rabbit Ecovillage",
  region: "Missouri, USA",
  country: "United States",
  foundedYear: 2005,
  foundedLabel: "2005 (community); community land trust 2007; land purchase early 2008",
  members: 15,
  membersLabel: "Seven households on fully leased land",
  acres: 76,
  acresLabel: "76-acre community land trust in the rolling hills of northeast Missouri",
  legalStructure:
   "Red Earth Farms is a community land trust of homesteads. Founded 2005 by people who had lived at Dancing Rabbit and Sandhill. Incorporated as a CLT with a board and bylaws in 2007. Land bought from Aron Heintz in early 2008 (a 2024 report has also given $90,000 for 76 acres). Three parcels leased by 2011; fully leased by 2013. Seven households. Members lease from the trust rather than buy a fee-simple farmette. Consensus, nonviolence, and making land accessible to people with fewer means are the published brief. Neighbour to Dancing Rabbit, already in this atlas, not a second copy of it.",
  legalCategory: "Community land trust",
  stillActive: true,
  images: [
   "/communities/red-earth-farms-land.jpg",
   "/communities/red-earth-farms-1.jpg",
   "/communities/red-earth-farms-2.jpg",
   "/communities/red-earth-farms-3.jpg"
  ],
  summary:
   "In Scotland County, seven households lease homesteads on a 76-acre land trust. Founded 2005, trust 2007, land 2008. Next door to Dancing Rabbit, with more elbow room on purpose. You lease. You do not buy the hill.",
  businessModel:
   "Ground leases, homestead production, a loan from a friend of the community at purchase. No speculative lot book. Confirm current openings by writing.",
  foundingProcess:
   "Four founding members, some from Dancing Rabbit and Sandhill, named the place in 2005, incorporated a CLT in 2007, and closed on the land in 2008.",
  governance:
   "Community land trust board and consensus among leaseholders. A walk over from Dancing Rabbit is neighbourliness, not an application.",
  website: "http://redearthfarms.org/",
  timeline: [
   { year: "2005", event: "Community founded; name and vision. Some founders from Dancing Rabbit and Sandhill." },
   { year: "2007–08", event: "Incorporated as a community land trust. Land purchased from Aron Heintz." },
   { year: "2013", event: "Fully leased. Seven households." }
  ]
 }
];
