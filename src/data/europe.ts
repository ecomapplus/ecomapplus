import type { Community } from "./communities";

/** Ten European communities, oldest-founded first. Appended after the North America cluster. */
export const europeCommunities: Community[] = [
 {
 slug: "botton",
 name: "Botton Village",
 location: "Danby Dale, North York Moors, near Whitby",
 region: "North Yorkshire, UK",
 country: "United Kingdom",
 foundedYear: 1955,
 foundedLabel: "1955 (Camphill Village Trust 1954)",
 members: 120,
 membersLabel: "~80–120 across Esk Valley Camphill and Camphill Village Trust (peak 300–400)",
 acres: 600,
 acresLabel: "~600 acres; four to five biodynamic farms in the North York Moors",
 legalStructure:
 "Two charities on one dale. Camphill Village Trust Ltd, a company limited by guarantee and registered charity, holds most of the land and still runs part of the village as a social-care service. Esk Valley Camphill Community, formed after a 2010s split, runs about 19 households on the original Camphill pattern (shared lives, no employment contracts) as a recognised Shared Lives scheme. The National Park is a planning overlay, not the owner.",
 legalCategory: "Charity (Camphill)",
 stillActive: true,
 images: [
 "/communities/botton-land.jpg",
 "/communities/botton-2.jpg",
 "/communities/botton-5.jpg",
 "/communities/botton-3.jpg",
 "/communities/botton-1.jpg",
 ],
 summary:
 "The first Camphill village: a 600-acre biodynamic dale in the North York Moors where people with and without learning disabilities share households, now split between the Camphill Village Trust and Esk Valley Camphill Community.",
 businessModel:
 "Biodynamic farms, a bakery, a café, workshops, and (for the Trust) local-authority social-care contracts. Esk Valley households pool life rather than wages. Historically Botton made the first Jenga sets. Visitors come for the café and the dale, not for a house lot.",
 foundingProcess:
 "Karl König’s Camphill movement, begun in Scotland in 1939, was asked by parents to found a village for adults. The Camphill Village Trust was incorporated in October 1954. In 1955 the Macmillan family offered Botton at the head of Danby Dale (Alistair Macmillan, who had a learning disability, later lived there). The village grew to several hundred people, five farms, a Steiner school, church, and concert hall. In the 2010s the Trust professionalised care; most coworkers formed Esk Valley Camphill Community and, after a legal fight, kept 19 households on Camphill terms.",
 governance:
 "Two boards, two cultures. The Trust is a charity with staff and service-users. Esk Valley households live as coworkers and villagers under Shared Lives, with consensus inside the community. Neither sells title.",
 website: "https://www.eskvalleycamphill.org/",
 timeline: [
 { year: "1954", event: "Camphill Village Trust incorporated as a company limited by guarantee." },
 { year: "1955", event: "Botton Village founded on Macmillan land in Danby Dale." },
 { year: "1960s–90s", event: "Peak of 300–400 people; farms, bakery, workshops, Steiner school." },
 { year: "2010s", event: "Trust reforms; Esk Valley Camphill Community splits off and keeps 19 households." },
 { year: "Present", event: "Two organisations still share the 600-acre dale inside the National Park." },
 ],
 },
 {
 slug: "limans",
 name: "Longo Maï Limans",
 location: "Le Pigeonnier / Grange Neuve, Limans, near Forcalquier",
 region: "Alpes-de-Haute-Provence, France",
 country: "France",
 foundedYear: 1973,
 foundedLabel: "1973 (July)",
 members: 100,
 membersLabel: "~80–100 on the Limans farms; ~250 across the European Longo Maï network",
 acres: 690,
 acresLabel: "~270–290 ha (~670–720 acres) at Limans",
 legalStructure:
 "The mother cooperative of the Longo Maï network. Land and means of production sit in a Swiss foundation (the European Land Fund), a lock against private sale. Pro Longo Maï, an association founded in 1974, pools donations. Daily life is a self-managed agricultural cooperative: no wages, no private lots. The Costa Rican finca in this atlas is a later sister.",
 legalCategory: "Agricultural cooperative",
 stillActive: true,
 images: [
 "/communities/limans-land.jpg",
    "/communities/limans-people.jpg",
 "/communities/limans-2.jpg",
 "/communities/limans-1.jpg",
 ],
 summary:
 "The original Longo Maï: a 1973 Provençal cooperative on about 280 hectares, still without wages or private title, whose Swiss land foundation and donor association keep the farm off the market.",
 businessModel:
 "Sheep, gardens, cereals, wool (a sister site at Briançon processes tonnes a year), and solidarity. Donations through Pro Longo Maï have historically been about half the budget. European Longo Maï farms send people and goods among themselves, including to Finca Sonador in Costa Rica.",
 foundingProcess:
 "Young people from May ’68 (Austrian Spartakus Marxists and Swiss Hydra anarcho-syndicalists, with Roland Perrot as an early ideological figure) bought unproductive land and three derelict hamlets at Limans in July 1973 for 450,000 francs, found with help from Pierre Pellegrin, Jean Giono’s shepherd. The Provençal name means “may it last long.” A Swiss European Land Fund was used so the land could not be subdivided. The network later spread to France, Germany, Switzerland, Austria, Ukraine, and Costa Rica.",
 governance:
 "Self-administration, no written bylaws of the HOA kind, no salaries. The foundation holds title; the cooperative lives the land. Pro Longo Maï is the donor face, not the village council.",
 website: "https://www.prolongomai.ch/",
 timeline: [
 { year: "1972", event: "Circle gathers in Basel; the name Longo Maï is chosen." },
 { year: "1973", event: "Limans land purchased (~270 ha); first cooperative founded in July." },
 { year: "1974", event: "Pro Longo Maï association founded to pool donations." },
 { year: "1979", event: "Sister project Finca Sonador founded in Costa Rica (separate atlas entry)." },
 { year: "Present", event: "~100 people at Limans; ~250 across ten cooperatives in the network." },
 ],
 },
 {
 slug: "los-portales",
 name: "Los Portales",
 location: "Finca Los Portales, Castilblanco de los Arroyos, Sierra Morena",
 region: "Seville, Spain",
 country: "Spain",
 foundedYear: 1984,
 foundedLabel: "1984 (Brussels circle; Andalusian finca thereafter)",
 members: 30,
 membersLabel: "~30 residents in a handful of buildings on the finca",
 acres: 494,
 acresLabel: "200 ha (~494 acres); most left as jara, holm oak, deer and boar",
 legalStructure:
 "A Spanish asociación (El Espacio Cooperativo, sede Los Portales) on a privately held 200-hectare finca. Members of the Iberian Ecovillage Network (RIE) and GEN. The land is a farm held for the association’s work (agriculture, education, dream research), not subdivided title.",
 legalCategory: "Cultural association",
 stillActive: true,
 images: [
 "/communities/los-portales-land.jpg",
 "/communities/los-portales-1.jpg",
 "/communities/los-portales-2.jpg",
 "/communities/los-portales-3.jpg",
 "/communities/los-portales-5.jpg",
 ],
 summary:
 "A 200-hectare Sierra Morena ecoaldea north of Seville: a small resident group, organic fields, and a cooperative association famous (fairly or not) for taking dreams as seriously as compost.",
 businessModel:
 "Organic agriculture, ESC/volunteer hosting, courses, and the association’s educational work. Most of the finca stays wild. Lots are not for sale. European Solidarity Corps has used the site as a quality-labelled host.",
 foundingProcess:
 "The community traces itself to a Brussels circle in 1984 that wanted a different life; they took the finca in the Sierra Morena foothills about 50 km north of Seville, at Castilblanco de los Arroyos. A wide white farm and a few houses sit in 200 hectares of jara and encinas. RIE and GEN membership followed as the Iberian ecovillage network grew.",
 governance:
 "Asociación / espacio cooperativo. Consensus among a small resident group. Guests and ESC volunteers are not members. No private sale of the commons.",
 website: "https://losportales.net/",
 timeline: [
 { year: "1984", event: "Brussels circle founds the project; the Andalusian finca becomes home." },
 { year: "1980s–90s", event: "Farm, buildings, and a dream-work practice take shape on 200 ha." },
 { year: "Present", event: "About 30 people; RIE and GEN member; ESC host; most land still wild." },
 ],
 },
 {
 slug: "torri-superiore",
 name: "Torri Superiore",
 location: "Bevera valley, Ventimiglia hinterland, Ligurian Alps",
 region: "Liguria, Italy",
 country: "Italy",
 foundedYear: 1989,
 foundedLabel: "1989 (association; cooperative 1999)",
 members: 20,
 membersLabel: "~20 permanent residents (including children); guests in the restored hamlet",
 acres: null,
 acresLabel: "A stacked 14th-century stone hamlet; association owns half, ~20 private apartments the rest",
 legalStructure:
 "Three overlapping bodies. The Associazione Culturale Torri Superiore (1989) owns the public half of the medieval village (guesthouse). Ture Nirvane Società Cooperativa Sociale di Comunità (1999) runs eco-tourism, courses, and the guesthouse. About twenty apartments in the other half are privately owned and restored by members, freehold inside a stone stack or Italian condominio of suburban lots. The resident community decides by consensus.",
 legalCategory: "Cultural association + cooperative",
 stillActive: true,
 images: [
 "/communities/torri-superiore-land.jpg",
    "/communities/torri-superiore-people.jpg",
 "/communities/torri-superiore-2.jpg",
 "/communities/torri-superiore-1.jpg",
 ],
 summary:
 "A 14th-century Ligurian hamlet brought back from abandonment: an association owns the guesthouse half, a social cooperative runs the stays, and about twenty people live in restored stone apartments by consensus.",
 businessModel:
 "Eco-guesthouse, courses, workshops, and organic gardens. The cooperative is in Legacoop Liguria and Banca Etica. Visitors book rooms in the medieval stack a few kilometres from Ventimiglia and the French border. Residents share meals.",
 foundingProcess:
 "Emigration and a mule-track had emptied Torri Superiore. In 1989 Piero Caffaratti and Gianna Ballestra founded the cultural association to restore and repopulate it. The current resident group coalesced around 2000. In 1999 members created Ture Nirvane to run the public cultural and tourist face. Restoration of the stone village took decades of lime, timber, and solar on the roof.",
 governance:
 "Association (public half), social cooperative (enterprise), resident community (consensus, twice-weekly meetings). Apartment owners in the private half are members of the village.",
 website: "https://www.torri-superiore.org/",
 timeline: [
 { year: "1989", event: "Associazione Culturale Torri Superiore founded to restore the abandoned hamlet." },
 { year: "1999", event: "Ture Nirvane community social cooperative founded for guesthouse and courses." },
 { year: "c. 2000", event: "Current resident group takes shape; restoration continues." },
 { year: "Present", event: "~20 residents; guesthouse open." },
 ],
 },
 {
 slug: "krishna-valley",
 name: "Krishna Valley / Krisna-völgy",
 location: "Gauranga tér 1, Somogyvámos, Somogy County",
 region: "Somogy, Hungary",
 country: "Hungary",
 foundedYear: 1993,
 foundedLabel: "1993 (groundbreaking February 1994)",
 members: 150,
 membersLabel: "~130–150 monks and families (plus devotees in nearby villages)",
 acres: 740,
 acresLabel: "~266–300 ha (~660–740 acres) organic farm and temple village",
 legalStructure:
 "An ISKCON / Hungarian Krishna-conscious religious community (Magyarországi Krisna-tudatú Hívők Közössége and related church entities) holding a large organic farm as New Vraja-dhama. Title sits with the religious organisation, not with household lots. Visitors walk a temple village; members live a Vaishnava religious life.",
 legalCategory: "Religious society",
 stillActive: true,
 images: [
 "/communities/krishna-valley-land.jpg",
    "/communities/krishna-valley-people.jpg",
 "/communities/krishna-valley-2.jpg",
 "/communities/krishna-valley-1.jpg",
 "/communities/krishna-valley-4.jpg",
 "/communities/krishna-valley-5.jpg",
 ],
 summary:
 "One of Europe’s largest ecovillage-farms: a 300-hectare Krishna-conscious organic settlement in Somogy, with a temple at the centre, cow protection, and about 150 residents on land the church holds.",
 businessModel:
 "Organic farming, cow protection, a guesthouse, visitor tickets and festivals, and donations. The Radha-Syamsundara temple is the public face. Self-sufficiency and education in Vaishnava culture are the stated purpose.",
 foundingProcess:
 "Devotees moved to Somogyvámos in the early 1990s. In 1993 they bought about 120 hectares at auction with Hungarian donations; Sivarama Swami is the founding spiritual figure. Groundbreaking was February 1994. The holding grew toward 266–300 hectares. A temple in local style with an Indian interior became the village centre.",
 governance:
 "ISKCON / Hungarian Krishna-conscious church structure (GBC) plus village organisation. Residential membership is religious.",
 website: "https://www.krishnavalley.com/",
 timeline: [
 { year: "Early 1990s", event: "Devotees settle in Somogyvámos." },
 { year: "1993", event: "About 120 ha bought at auction; Krishna Valley established." },
 { year: "1994", event: "Groundbreaking (February); farm and temple village begin." },
 { year: "Present", event: "~150 residents on ~300 ha; one of Europe’s largest eco-farms of this kind." },
 ],
 },
 {
 slug: "brithdir-mawr",
 name: "Brithdir Mawr",
 location: "Cilgwyn Road, Newport, Pembrokeshire Coast National Park",
 region: "Pembrokeshire, Wales",
 country: "United Kingdom",
 foundedYear: 1993,
 foundedLabel: "1993",
 members: 12,
 membersLabel: "~10–17 residents; occupancy contested after a 2024 sale",
 acres: 80,
 acresLabel: "~80 acres now (originally ~160 acres before a split with Tir Ysbrydol)",
 legalStructure:
 "Julian Orbach retained about 80 acres and the farmyard after a split with Emma Orbach (Tir Ysbrydol took woodland; the Roundhouse later sat in its own trust). The farm was leased to the Brithdir Mawr Housing Co-op. That is a housing cooperative on leased land. In 2024 the farm was sold to a buyer who wants a retreat centre; as of 2025 the community was still occupying and in dispute. National Park planning, is the overlay that made the roundhouse famous.",
 legalCategory: "Housing cooperative",
 stillActive: true,
 images: [
 "/communities/brithdir-mawr-land.jpg",
    "/communities/brithdir-mawr-people.jpg",
 "/communities/brithdir-mawr-1.jpg",
 ],
 summary:
 "An 80-acre off-grid farm under Carningli whose turf-roofed roundhouse forced Welsh planning to invent Low Impact Development, now living through a sale dispute after three decades as a housing co-op on leased land.",
 businessModel:
 "Woodland, coppice, pasture, and a small resident economy. The roundhouse (Tony Wrench and Jane Faith, 1997) became a media object. Courses and visits by arrangement. Lots are not for sale.",
 foundingProcess:
 "Architectural historian Julian Orbach and Emma Orbach set up on a rundown farm in 1993, without planning permission, in the Pembrokeshire Coast National Park. The ‘lost tribe of Wales’ story broke when planners found the eco-buildings. The roundhouse’s ten-year fight helped put Low Impact Development into Pembrokeshire policy. The original 160 acres split; the co-op leased the farmyard half. In 2024 a sale put that lease in question.",
 governance:
 "Housing co-op on a lease, plus a separate Roundhouse Trust for the famous house. Consensus among a small membership. The 2024–25 dispute is about who the landlord is, not about converting to freehold lots.",
 website: "https://brithdirmawr.co.uk/",
 timeline: [
 { year: "1993", event: "Julian and Emma Orbach found the community on ~160 acres near Newport." },
 { year: "1997", event: "Tony Wrench and Jane Faith build That Roundhouse." },
 { year: "2002–08", event: "Split of the land; planning fight; Low Impact Development policy follows." },
 { year: "2024–25", event: "Farm sold; community occupies and disputes the new retreat-centre plan." },
 ],
 },
 {
 slug: "keuruu",
 name: "Keuruu Ecovillage",
 location: "Near the town of Keuruu, Central Finland",
 region: "Central Finland",
 country: "Finland",
 foundedYear: 1997,
 foundedLabel: "1997",
 members: 32,
 membersLabel: "~30–35 inhabitants",
 acres: 131,
 acresLabel: "53 ha (~131 acres): ~25 ha organic arable and ~17 ha forest",
 legalStructure:
 "Keuruun ekokylä ry, a Finnish registered association (rekisteröity yhdistys), owns the 53-hectare farm. Politically and religiously unaffiliated. Members of GEN Finland (SKEY) and GEN. You join the association.",
 legalCategory: "Registered association",
 stillActive: true,
 images: [
 "/communities/keuruu-land.jpg",
 "/communities/keuruu-2.jpg",
 "/communities/keuruu-3.jpg",
 "/communities/keuruu-1.jpg",
 ],
 summary:
 "A 53-hectare GEN Finland village in the lake country: an ordinary registered association that owns the farm, about thirty people, organic fields, forest, and talkoot (the Finnish work bee) instead of a lot market.",
 businessModel:
 "Organic farming, association membership, courses, and communal work. Hosted a GEN-Europe assembly (2009).",
 foundingProcess:
 "A group of eco-minded people founded the village in 1997 in the countryside near Keuruu, in the Finnish lake district. The association bought and still holds the 53-hectare farm. Wooden houses, sauna, fields, and forest are the physical plant.",
 governance:
 "Registered-association democracy (one member, one vote) plus the practical culture of talkoot. No private title to the fields.",
 website: "https://www.keuruunekokyla.fi/en/",
 timeline: [
 { year: "1997", event: "Founders create Keuruu Ecovillage and the association that holds the farm." },
 { year: "2009", event: "GEN-Europe assembly hosted on the land." },
 { year: "Present", event: "~30–35 people on 53 ha; SKEY / GEN member." },
 ],
 },
 {
 slug: "hurdal",
 name: "Hurdal Ecovillage",
 location: "Huldra Økogrend, Gjøding, Hurdal, 80 km north of Oslo",
 region: "Akershus, Norway",
 country: "Norway",
 foundedYear: 2002,
 foundedLabel: "2002 (group late 1990s; Huldra cluster 2010s)",
 members: 150,
 membersLabel: "~150 residents in ~64–70 dwellings",
 acres: null,
 acresLabel: "Former Gjøding rectory farm; ~70 houses in Huldra Økogrend (total acres unpublished as one holding)",
 legalStructure:
 "Two eras, two forms. Phase one (from 2002): Kilden eco-community cooperative rented Gjøding from the municipality and built straw-bale houses; members held equal shares. Phase two: Filago AS developed Huldra Økogrend as a larger eco-housing project, households own dwellings, and Huldra Økogrend Fellesareal is a realsameie (joint ownership of roads and commons). That later layer is closer to a homeowners association plus freehold than to a housing cooperative. The scale-up brought debt and identity conflict; the place is still lived in.",
 legalCategory: "Freehold + joint commons",
 stillActive: true,
 images: [
 "/communities/hurdal-land.jpg",
 "/communities/hurdal-1.jpg",
 "/communities/hurdal-2.jpg",
 ],
 summary:
 "Norway’s best-known økolandsby: straw-bale co-op on a rented rectory farm that scaled, via a developer, into a 70-house eco-neighbourhood of privately owned timber houses and shared streets.",
 businessModel:
 "House sales and household mortgages in the later phase; a village shop and common house; the original cooperative’s self-sufficiency dream did not fully survive the scale-up. You can buy a dwelling when one comes up. Not income-sharing.",
 foundingProcess:
 "Hurdal municipality invited an ecovillage onto Gjøding farm around 2001–02. Founders formed Kilden, rented the farm, and built nine straw-bale houses in 2002–03. Filago later master-planned Huldra Økogrend (Gaia Architects and others); a 2013 step included a documented 12.9 million NOK first-stage package. Active houses with solar and glass winter-gardens replaced the first aesthetic. Academic papers record financial strain and a shift from spiritual co-op to market eco-housing.",
 governance:
 "Early: cooperative consensus. Later: homeowners plus the realsameie for internals. Filago was the developer, not the village council. This is the Nordic case of an ecovillage that scaled by selling houses.",
 website: "https://hurdalecovillage.org/",
 timeline: [
 { year: "Late 1990s", event: "Group forms; municipality later offers Gjøding farm." },
 { year: "2002–03", event: "Kilden cooperative rents the farm; nine straw-bale houses go up." },
 { year: "2010s", event: "Filago / Huldra Økogrend scale-up; timber active-houses; 12.9 MNOK first-stage note." },
 { year: "Present", event: "~150 people in ~70 dwellings; realsameie commons; houses can change hands." },
 ],
 },
 {
 slug: "suderbyn",
 name: "Suderbyn Permaculture Ecovillage",
 location: "Toftavägen, Västerhejde, Gotland, south of Visby",
 region: "Gotland, Sweden",
 country: "Sweden",
 foundedYear: 2008,
 foundedLabel: "2008 (preparations 2006–07)",
 members: 20,
 membersLabel: "~15–25 residents from many countries",
 acres: 12,
 acresLabel: "~5 ha (~12 acres) of old farm, gardens, and experimental buildings",
 legalStructure:
 "Three Swedish entities on one small farm: the cooperative Suderbyn People-Care (membership and housing), the NGO RELEARN Suderbyn (education, ESC volunteers, advocacy), and the foundation Suderbyn Earth-Care (land/ecology). You join the cooperative; RELEARN is the public education face.",
 legalCategory: "Cooperative + NGO + foundation",
 stillActive: true,
 images: [
 "/communities/suderbyn-land.jpg",
 "/communities/suderbyn-2.jpg",
 "/communities/suderbyn-1.jpg",
 "/communities/suderbyn-3.jpg",
 "/communities/suderbyn-4.jpg",
 ],
 summary:
 "A 5-hectare permaculture lab on Gotland: a cooperative, an NGO that hosts European volunteers, and a land foundation, biogas, gardens, and English as the working language of a Baltic experiment.",
 businessModel:
 "Volunteer and ESC hosting, courses, a little rent, gardens, and grants (including EAFRD / EU rural-development support for buildings and wastewater). A micro-biogas digester is the famous kit.",
 foundingProcess:
 "Ingrid Gustafsson and Robert Hall bought an old farm across from a quiet military area in 2008 after two years of preparation. RELEARN was already in motion (2007) as the education NGO. The place grew into a multilingual intentional community of about twenty, with cob and timber experiments in the oaks.",
 governance:
 "Cooperative membership plus NGO board plus foundation. Participatory / sociocratic practice on a small scale. Volunteers are not automatically members.",
 website: "https://suderbyn.se/",
 timeline: [
 { year: "2006–07", event: "Preparations; RELEARN NGO takes shape." },
 { year: "2008", event: "Farm bought at Västerhejde; Suderbyn Ecovillage starts." },
 { year: "2010s", event: "EAFRD-backed buildings and wastewater; biogas experiment; GEN Europe node." },
 { year: "Present", event: "15–25 people on 5 ha; cooperative + NGO + foundation still in force." },
 ],
 },
 {
 slug: "aardehuis",
 name: "Aardehuis Olst",
 location: "Boskamp, outskirts of Olst, Overijssel",
 region: "Overijssel, Netherlands",
 country: "Netherlands",
 foundedYear: 2012,
 foundedLabel: "2012–15 (first houses; group from ~2006)",
 members: 70,
 membersLabel: "23 households / ~70 people",
 acres: 3,
 acresLabel: "1.2 ha (~3 acres) for 23 earthships and a common house; a nearby food forest/garden is separate",
 legalStructure:
 "Vereniging Aardehuis Oost-Nederland is the Dutch association that holds the common life. Households privately financed 23 earthships (three with a social-housing partner) on municipal land found after a long search. Occupancy is closer to freehold plus an association / VvE than to a housing cooperative share. The municipality of Olst-Wijhe was a partner, not the landlord of the houses.",
 legalCategory: "Association + freehold",
 stillActive: true,
 images: [
 "/communities/aardehuis-land.jpg",
 "/communities/aardehuis-1.jpg",
 "/communities/aardehuis-2.jpg",
 "/communities/aardehuis-3.jpg",
 ],
 summary:
 "The Netherlands’ first ecovillage of record: 23 earthships and a common house, self-built with 2,000 volunteers on 1.2 hectares at Olst, tires, earth, solar, and a vereniging instead of a commune.",
 businessModel:
 "Household mortgages and savings built the houses. Three units involved a social-housing provider. A recycling firm supplied materials. The association runs the common house and gardens. Edable Olst-Wijhe (a foundation) later took a nearby garden and pear orchard. Houses can change hands; this is the open-ish Dutch door in the atlas.",
 foundingProcess:
 "A group tied to Transition Town Deventer spent years looking for land. Olst’s municipality partnered; between 2012 and 2015 some seventy people and about 2,000 volunteers raised 23 earthships inspired by Michael Reynolds, plus a community building, on just over a hectare (they had wanted five). Orio Architecten documented the cluster. It remains a neighbourhood.",
 governance:
 "Vereniging (association) of the households. Private houses, common rules, a common house. No income-sharing and no CLT ground lease.",
 website: "https://aardehuis.nl/",
 timeline: [
 { year: "c. 2006", event: "Group forms around Transition Town Deventer / sustainable building." },
 { year: "2012–15", event: "23 earthships and a common house built at Olst with ~2,000 volunteers." },
 { year: "Present", event: "~70 people; association plus private houses; nearby food-forest project." },
 ],
 },
];
