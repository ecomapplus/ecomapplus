/** Twenty villages whose origin is unusual enough to walk scene by scene. */

export const uniqueFoundingTag = "Unique founding story";

export type FoundingScene = {
  name: string;
  what: string;
};

export type UniqueFounding = {
  title: string;
  lead: string;
  scenes: FoundingScene[];
  aftermath: string;
  tension: string;
};

export const uniqueFoundingBySlug: Record<string, UniqueFounding> = {
  findhorn: {
    title: "A caravan on a rubbish dump, then the cabbages",
    lead: "Peter and Eileen Caddy, their three sons, and Dorothy Maclean arrived at the Findhorn Bay Caravan Park on 17 November 1962 with nowhere else to go. They planted vegetables in sand and compost. The story that followed — guidance, “devas,” cabbages the size of a boast — is why seekers have been turning up for sixty years.",
    scenes: [
      {
        name: "The caravan, 17 November 1962",
        what: "Peter had lost his hotel job. Eileen sat in the public toilets to hear inner guidance without the children listening. Dorothy, a former stenographer for the British secret service in New York, began a practice of listening to the intelligence of plants. The park was a trailer park, not a commune."
      },
      {
        name: "Growing in sand",
        what: "They mixed kitchen waste into dune sand beside the caravans. The garden should not have worked. Photographs of forty-pound cabbages and roses in sand went around the esoteric press, then the Sunday papers. Whether you call it nature spirits or compost, the harvest is what made the place famous."
      },
      {
        name: "The Foundation",
        what: "First buildings and the Findhorn Trust in 1968. The Findhorn Foundation replaced the Trust in 1972 and ran Experience Week for decades. The Park filled with ecological houses, a community company, and a UN Best Practice listing. The caravan is still on the origin story; it is not how the Park is held now."
      },
      {
        name: "Buying the Park back",
        what: "After Foundation financial strain in the 2020s, residents formed a Community Benefit Society and began buying land and buildings into community ownership. First stages completed November 2024. The founding family is gone. The argument about who owns a miracle garden is not."
      }
    ],
    aftermath:
      "Findhorn is no longer a family in a caravan. It is a settlement of ecological houses, education, and enterprises on Findhorn Bay, with a Foundation that still teaches and a CBS that is trying to hold the dirt in common. The garden attunement at the start of work is the surviving ritual of 1962.",
    tension:
      "The myth is larger than the village. Newcomers arrive for talking plants and find a Scottish housing economy, a collapsed charity, and a meeting. How much of Dorothy’s practice is still the weekday, and how much is branding, is the live argument."
  },

  "the-farm": {
    title: "Three hundred people, a caravan of buses",
    lead: "Stephen Gaskin’s Monday Night Class filled San Francisco halls at the end of the Sixties. In 1971 about 300 people left Haight-Ashbury in a caravan of school buses, spent months on the road, and bought a thousand acres of Lewis County, Tennessee, at seventy dollars an acre. It became America’s best-known commune.",
    scenes: [
      {
        name: "Monday Night Class",
        what: "Gaskin taught a mix of Zen, acid, and Christian language to crowds that outgrew the halls. The class was not yet a village. It was a travelling congregation looking for land."
      },
      {
        name: "The caravan",
        what: "Dozens of buses — the number in memory is usually sixty-plus — crossed the country as a rolling household. Local papers treated it as an invasion. The group was looking for cheap dirt and a county that would not run them off on the first night."
      },
      {
        name: "Lewis County, $70 an acre",
        what: "They bought about 1,064 acres, later expanded, and named it The Farm. Population peaked near 1,500. Soy dairy, midwifery, a gate, a common purse, and Plenty International’s relief work were the weekday. Ina May Gaskin’s Spiritual Midwifery came out of the same births."
      },
      {
        name: "The Changeover, 1983",
        what: "The 1980s recession, infrastructure strain, and a living-standard revolt ended the commune. The Changeover turned The Farm into a cooperative village of private households on land still held in common. The buses rusted. The midwives did not leave."
      }
    ],
    aftermath:
      "The Farm is still there: a cooperative village, Book Publishing Company, Plenty, and a midwifery culture outsiders still lower their voices to ask about. The founding caravan is the origin myth. The 1983 meeting is the second founding.",
    tension:
      "Second-generation households live in private houses on land their parents caravanned into. How much of Gaskin’s authority survived the Changeover, and how much of the Farm is now a Tennessee neighbourhood with a famous name, is the question the gate still has to answer."
  },

  koinonia: {
    title: "A demonstration plot the Klan tried to bomb out",
    lead: "Clarence and Florence Jordan and Martin and Mabel England bought 400 acres in Sumter County, Georgia, in 1942 as a “demonstration plot for the Kingdom of God”: interracial, pacifist, common-purse. Jim Crow Georgia answered with dynamite, a boycott, and a 70-car motorcade. The farm answered by mailing pecans out of the state.",
    scenes: [
      {
        name: "Four hundred acres, 1942",
        what: "Jordan, a Southern Baptist with a doctorate in Greek New Testament, wanted a live parable, not a sermon. Equal pay for Black and white workers broke local custom on day one. The roadside stand sold produce to whoever stopped."
      },
      {
        name: "The Klan years",
        what: "In the 1950s the Ku Klux Klan dynamited the stand, fired shots into the farm, and led a 70-car motorcade. The local Chamber of Commerce asked them to sell and leave. Neighbour stores would not buy. Membership later collapsed to two families."
      },
      {
        name: "Ship the nuts out of Georgia",
        what: "Koinonia invented a mail-order pecan catalog so the farm could sell past the boycott. The slogan — “Help us ship the nuts out of Georgia” — is the founding joke that kept the place solvent. The same trees still pack."
      },
      {
        name: "Partnership Housing",
        what: "No-interest houses for neighbours became Habitat for Humanity. Millard Fuller worked the idea here before Americus. The farm’s social export outgrew the pecan shed; the pecan shed is why there was a farm left to export from."
      }
    ],
    aftermath:
      "Koinonia is a 501(c)(3) farm of pecans, grapes, blueberries, cattle, and internships. Habitat is the child that became more famous than the parent. The founding act is still the same: stay on the land after the county asked you to go.",
    tension:
      "A Christian interracial farm in rural Georgia is easier to admire than to join. How much of Jordan’s common purse is left, and how much is a hospitality nonprofit with a legend, is the live question for partners and interns."
  },

  auroville: {
    title: "Soil from 124 countries in a red-earth urn",
    lead: "Mirra Alfassa, “the Mother,” invited the world to build a city dedicated to human unity. On 28 February 1968, delegates from 124 countries poured soil into an urn at the centre of a barren Tamil plateau. Auroville was inaugurated as an experimental township before it had streets.",
    scenes: [
      {
        name: "The invitation, 1965",
        what: "The Sri Aurobindo Society had resolved in 1964 to found a city for Sri Aurobindo’s vision. The Mother wrote the Auroville Charter: a place of unending education, the living embodiment of an actual human unity. People were asked to come as servants of the Divine Consciousness, not as owners of plots."
      },
      {
        name: "28 February 1968",
        what: "Children of the first settlers and young people from the attending nations placed soil from 124 countries in a marble-clad urn. The gesture is the founding. The Matrimandir — a gold-disc sphere in a crater — was conceived as the soul of a city that did not yet exist."
      },
      {
        name: "After the Mother, 1973",
        what: "Early assets sat with the Sri Aurobindo Society in Pondicherry. After her death, a fight over control of land and money split the Society from the residents. The Government of India stepped in."
      },
      {
        name: "An Act of Parliament",
        what: "The Auroville Emergency Provisions Act 1980 put the township under government administration. The Auroville Foundation Act 1988 created a statutory foundation; assets vested in 1992. No resident owns a plot. That was the founding rule, written into Indian law after a crisis."
      }
    ],
    aftermath:
      "Auroville is an international township of farms, forests, guesthouses, and the unfinished city plan, held by a foundation created by Parliament. The urn is still there. The gold sphere is the most photographed object in this atlas.",
    tension:
      "A city dedicated to human unity is also a Tamil landscape with neighbours, a Governing Board, and a Residents’ Assembly that do not always agree. Who the Mother actually left in charge is the argument that has never closed."
  },

  damanhur: {
    title: "Sixteen years of digging before the state found the temples",
    lead: "Oberto Airaudi — later Falco Tarassaco — and about a dozen friends founded Damanhur in 1975 and settled the Valchiusella in 1979. They excavated a subterranean temple complex in secret. Italian authorities discovered it in 1992. Guinness later listed the Temples of Humankind among the world’s largest underground temples.",
    scenes: [
      {
        name: "A dozen friends, 1975",
        what: "Airaudi had been a spiritual teacher and pranotherapist in the Turin area. The first Damanhur was a community project before it was a place. In 1979 they took land in a Piedmont valley and began to live as a federation of nucleos."
      },
      {
        name: "Digging at night",
        what: "From the late 1970s they carved halls, stained glass, and mosaic under the mountain without planning permission. The cover story was a game, a storage cellar, a private hobby. Residents hauled rock in silence so the valley would not hear a temple being born."
      },
      {
        name: "1992",
        what: "A former member talked. Magistrates arrived. The question was illegal excavation, not theology. After legal resolution the Temples opened to visitors, which is how the rest of the world learned that a federation had been building a cathedral underground for sixteen years."
      },
      {
        name: "After Falco, 2013",
        what: "Airaudi’s death forced the Federation onto a constitution, cooperatives, a local currency, and a more public face. The Temples remain the founding fact. The nucleos are how people actually live."
      }
    ],
    aftermath:
      "Damanhur is a constitution-based federation of cooperatives and households in the Valchiusella, with a visitor economy built on the thing they once hid. The self-sufficiency, the art, and the Credito currency are the weekday. The Temples are why anyone has heard of the weekday.",
    tension:
      "A secret is a strong founding and a weak government. How much of Falco’s authority passed to the constitution, and how much of the Federation is a tour of halls that were never meant to be toured, is the strain under the mountain."
  },

  gaviotas: {
    title: "An empty savanna seen from a 1966 flight",
    lead: "Paolo Lugari looked out of a plane over the Colombian Llanos in 1966 and saw a landscape nobody wanted. In 1971 he staked about 10,000 hectares around abandoned buildings with tropical geographers and university students. Guahibo people helped build the first houses. The village planted a forest that was not supposed to grow there.",
    scenes: [
      {
        name: "The flight",
        what: "Lugari’s argument: if we can live well on the worst land, the rest of the tropics has no excuse. The Llanos Orientales — acid soil, flood, drought — was the test, not a scenic backdrop."
      },
      {
        name: "1971, twenty people",
        what: "Students, engineers, and Guahibo neighbours assembled a research village, not a commune with a guru. Population grew toward 200 by the late 1970s. Dual-action water pumps, solar kettles, and a hospital that ran on the designs were the product."
      },
      {
        name: "The pump and the pines",
        what: "A 1978 water pump won Colombia’s National Science Prize. A 1979 UNDP visit extended grants. First Caribbean pines went in in 1983; mycorrhizal fungi let them take, and a forest floor of native species followed under the canopy. Thousands of hectares later, the “empty” savanna is not empty."
      },
      {
        name: "Neutrality",
        what: "Gaviotas declared itself outside the war. That limited growth and kept the experiment from being taken. The village funds itself as a nonprofit on resin, water technology, and the forest, not as a co-op selling lots."
      }
    ],
    aftermath:
      "Gaviotas is still a tropical-research village on the Llanos: pumps, solar hospital kit, a planted forest, a small resident group. Lugari’s bet — that the worst land could teach the rest — is the founding, and the pines are the proof he left in the ground.",
    tension:
      "A founder’s vision on 10,000 hectares is hard to inherit. Who lives there in a given year, how much of the technology shipped, and whether a planted pine forest is restoration or a plantation, are the arguments the place has to keep answering."
  },

  solheimar: {
    title: "Five foster children in tents, 5 July 1930",
    lead: "Sesselja Sigmundsdóttir believed children with disabilities should live in nature, not in a ward. The Church of Iceland bought Hverakot on 31 March 1930 for 8,000 krónur. She leased it. The first five foster children arrived on 5 July and slept in tents in a geothermal valley. Sólheimar grew from that camp.",
    scenes: [
      {
        name: "Sesselja’s rule",
        what: "Inspired by Steiner, she inverted the clinic: people without disabilities adapt to those with, not the other way around. Reverse integration is the founding law. It is still in force."
      },
      {
        name: "Tents in a hot valley",
        what: "The first summer was canvas on geothermal ground. Parliament later funded the first purpose-built house. After World War II almost all of the children at Sólheimar had disabilities. Workers, villagers, and volunteers became one household rather than a staff and a caseload."
      },
      {
        name: "Greenhouses and craft",
        what: "The heat in the ground paid for horticulture. Candle-making, weaving, ceramics, and a guesthouse became the ordinary workday — shared, not therapeutic theatre with a farm attached."
      },
      {
        name: "Sesseljuhús",
        what: "A turf-roofed environmental centre named for her. The village is Iceland’s oldest ecovillage by any honest count, because the tents went up in 1930, decades before the word."
      }
    ],
    aftermath:
      "Sólheimar is a mixed village of greenhouses, craft shops, a café, and a guesthouse in a geothermal valley. Residents with and without disabilities still work the same day. The founding tents are gone. The rule is not.",
    tension:
      "A charity village that is also a home has to keep the clinic from returning through the funding door. Who is a villager and who is staff, and whether reverse integration survives professionalisation, is the strain Sesselja left them."
  },

  riverside: {
    title: "A prison farm, and the families who held the land",
    lead: "Methodist pacifists in wartime New Zealand chose a common life instead of a competitive one. Hubert Holdaway put 30 acres of Lower Moutere farm and orchard under the experiment in 1941. Several founding men spent the war as conscientious objectors on a prison farm in Taranaki. Their families held Riverside until they came home.",
    scenes: [
      {
        name: "1941, Holdaway’s acres",
        what: "Archibald Barrington and a small Christian-pacifist circle wanted a village that would not wait for the war to end to start living differently. The first dirt was a gift, not a share issue."
      },
      {
        name: "Taranaki",
        what: "Conscientious objectors were sent to prison farms. The men who would have built Riverside were locked up for the principle the village was named for. Women and children kept the Moutere place working. That split — prison and kitchen — is the actual founding."
      },
      {
        name: "The 1953 trust",
        what: "After the war they formed the Religious Charitable Riverside Community Trust, bought hill country, and cleared scrub. About 200 hectares now. No private lots. A dairy, a café, a gallery, weekly consensus."
      },
      {
        name: "The allowance",
        what: "Residents still pay rent to the trust and take a weekly allowance instead of a wage. A wartime common purse that never switched off. New Zealand’s oldest intentional community by continuous life on the same land."
      }
    ],
    aftermath:
      "Riverside is a charitable-trust farm in the Moutere: dairy, café, guest stays, consensus. The prison-farm generation is gone. The rule they came home to — land in common, money in common — is the village.",
    tension:
      "A Christian-pacifist origin in a country that is no longer at that war. How a trust of 200 hectares stays a village when members want a life that looks like their neighbours’, without selling the hill, is the meeting they still sit."
  },

  "los-horcones": {
    title: "Walden Two in the Sonoran desert",
    lead: "Psychologists and teachers from a 1971 Hermosillo centre for children with behavioral deficits read B. F. Skinner and decided a novel was not enough. In October 1973 they founded Los Horcones as a “social laboratory”: experimental analysis of behavior applied to a whole village, not a classroom.",
    scenes: [
      {
        name: "The clinic first",
        what: "The Hermosillo centre came before the commune. People who already used behavior analysis with children asked what the same tools would do to property, labour, and praise if you lived together."
      },
      {
        name: "October 1973",
        what: "Los Horcones opened as a social laboratory on cooperation, non-violence, equality, ecological self-sufficiency. In 1974 they began using the word “behaviorology.” This is not a metaphor. They took data on the culture they were building."
      },
      {
        name: "Cooperativa, 1977",
        what: "The cooperativa de producción was formalized in November 1977 so Mexican law would have a face for a Walden Two. Industrial-zone pressure later forced a move."
      },
      {
        name: "The 1981 parcel",
        what: "In October 1981 they took about 100 hectares of Sonoran desert. A convention hall, a centre for children with autism, a common purse, and a desert farm are the weekday. Skinner visited in his mind; the dirt is Mexican."
      }
    ],
    aftermath:
      "Los Horcones is still Mexico’s Walden Two: a production cooperative, a small common-purse village, and a behaviour-analysis centre. It is one of the few Skinner experiments that outlived the book’s fashion.",
    tension:
      "A laboratory that is also a home has to decide when the data stops. Who is a subject and who is a member, and whether a founding theory can survive the people who did not read Skinner, is the strain on the cooperativa."
  },

  "awra-amba": {
    title: "Nineteen people, then four years of exile",
    lead: "Zumra Nuru began organizing in the 1970s against gender inequality, sectarianism, and poverty in northern Ethiopia. In 1980 he and 19 others founded Awra Amba in Fogera: no temple, women and men on the same wage. Neighbours called them communists and drove them out. They came back weaving.",
    scenes: [
      {
        name: "The 1970s argument",
        what: "Zumra’s brief was local and specific: girls in school, no dowry, work shared, no priest as landlord. He did not import a European commune. He started a village that refused the surrounding rules."
      },
      {
        name: "1980, twenty founders",
        what: "Awra Amba sat on a small Fogera holding. Equal work and a secular meeting were enough to make enemies of churches and of the local political weather."
      },
      {
        name: "1989–1993",
        what: "The village was forced out for four years. They survived on cotton-seed stew. When the Derg fell they returned in 1993 without enough farm and diversified into weaving so the idea would have an income that did not depend on land they no longer had."
      },
      {
        name: "Committees, not a temple",
        what: "Education, guests, patients, elders and children, community health. Zumra remains co-chairman. 17.5 hectares. Still no temple. The founding refusal is the government."
      }
    ],
    aftermath:
      "Awra Amba is a secular Ethiopian village of weaving, a guest house, and the same wage for women and men. Development prizes found it. The cotton-seed years are why the prizes did not have to invent a story.",
    tension:
      "A founder who is still co-chairman after forty years. How a village that was punished for refusing religion stays a village when NGOs, tours, and the next generation want different things from Fogera, is the live test."
  },

  christiania: {
    title: "Soldiers left. People moved in.",
    lead: "On 26 September 1971, slum-stormers and neighbours proclaimed a Freetown on the abandoned Bådsmandsstræde barracks in Copenhagen. Jacob Ludvigsen’s article in Hovedbladet had invited the city to take the empty military land. Defence spent forty years trying to take it back. In 2012 a foundation wrote a cheque.",
    scenes: [
      {
        name: "The barracks",
        what: "Bådsmandsstræde, Christianshavn: a decommissioned military site the state had not yet sold. People had already been slipping the fence. The proclamation made a city of the squat."
      },
      {
        name: "26 September 1971",
        what: "Ludvigsen’s piece framed it as a gift: take the land, build a life. The name Christiania stuck. Pusher Street, the painted walls, the no-cars rule, and a Plenum that could last all night were the early government."
      },
      {
        name: "Forty years with Defence",
        what: "Eviction threats, normalisation plans, police actions, and negotiations with the Ministry of Defence were the second founding, stretched over a generation. Christiania survived by being too inhabited to bulldoze cleanly and too famous to erase quietly."
      },
      {
        name: "The 2012 cheque",
        what: "The Foundation Freetown Christiania bought the dirt. About nine hundred people. Half a million visitors a year. You walk in. You do not buy a house. The occupation became a title, which is the strangest ending a squat can have."
      }
    ],
    aftermath:
      "Christiania is a freetown on a foundation title: workshops, music, residences, a hash market the state still fights, a Plenum. The founding is the open gate. The 2012 purchase is how the gate stayed open.",
    tension:
      "An occupation that bought itself has to decide whether it is still a freetown or a very strange neighbourhood. Pusher Street, housing assignments, and the tourists who treat the founding as a costume are the weekly argument."
  },

  "oneida-community": {
    title: "Perfectionists, complex marriage, then silverware",
    lead: "John Humphrey Noyes’s Putney, Vermont, circle moved to Oneida Creek in 1848 and built a Perfectionist household: common property, mutual criticism, and complex marriage. Industries paid the Mansion House. In 1879 Noyes fled to Canada. In 1881 the village became a joint-stock company. The religious household was over. The silverware was not.",
    scenes: [
      {
        name: "Putney to Oneida Creek",
        what: "Noyes taught that the Second Coming had already happened and that a holy community could live without sin. Putney grew too hot. In 1848 they took land at Oneida, New York, and raised a brick Mansion House for a single household of dozens, then hundreds."
      },
      {
        name: "Complex marriage",
        what: "Every man married to every woman, under Noyes’s regulation, with stirpiculture — planned breeding — later on. Mutual criticism sessions were the inner court. Outsiders called it free love. Inside it was a discipline, and a scandal that never stopped feeding the newspapers."
      },
      {
        name: "The industries",
        what: "Traps, silk, then silverware paid the house. Oneida Community, Limited, outlived the theology. The brand is how most people have heard the name."
      },
      {
        name: "1879–1881",
        what: "Facing statutory-rape charges, Noyes left for Canada. Complex marriage ended. The household converted to a joint-stock company in 1881. Members became shareholders. The Mansion House still stands. The village as a religious body does not."
      }
    ],
    aftermath:
      "Oneida is a closed chapter: a Mansion House, a silverware company, a literature of complex marriage. It is in this atlas because the founding — a Perfectionist household that ran factories — is one of the American originals every later commune is measured against.",
    tension:
      "The story is famous for sex and for forks. The harder fact is a theocratic founder who left in the night, and a joint-stock conversion that saved the brand while ending the village. That ending is part of the founding, not a footnote."
  },

  "morningstar-ranch": {
    title: "Open Land, and a deed God could not record",
    lead: "Lou Gottlieb, bassist of the Limeliters, opened his 32-acre Occidental ranch in 1966 and turned no one away. He called it Open Land. Hundreds passed through. Sonoma County treated it as an illegal camp. Gottlieb tried to deed the ranch to God. California would not record the grant. By 1973 the county had demolished the place.",
    scenes: [
      {
        name: "The Limeliter’s ranch",
        what: "Gottlieb bought the Occidental acres and, after a conversion of his own, stopped locking the gate. Morningstar was hospitality as land use: if you arrived, you could stay."
      },
      {
        name: "Open Land, 1966",
        what: "No membership, no rent, no plan. Diggers, runaways, musicians, and people with nowhere else went up the drive. Neighbours counted heads. The county counted code violations."
      },
      {
        name: "A deed to God",
        what: "Gottlieb’s legal move was theological and tactical: if the owner is the Almighty, the health department has no defendant. Recorders refused the instrument. Courts did not find a divine grantee. The joke is remembered because it was filed."
      },
      {
        name: "Bulldozers, 1973",
        what: "Demolition ended the residential village. Wheeler Ranch and other Open Land experiments picked up the idea. Morningstar itself is gone as a place you can join. The founding remains the most literal version of “the land is open.”"
      }
    ],
    aftermath:
      "Morningstar is inactive on this atlas: a ranch that was a village for seven years, then a court case, then a clearing. Gottlieb’s bet — that hospitality could be a title — lost. The story is why later land trusts write the owner’s name more carefully.",
    tension:
      "Open Land without a membership is indistinguishable, to a county, from a camp. The founding virtue and the founding defect were the same sentence. Later communities kept the welcome and added a list."
  },

  "nuevo-san-juan": {
    title: "A volcano buried the town. The forest became the village.",
    lead: "Parícutin came up in a Michoacán cornfield in 1943 and buried San Juan Parangaricutiro. The town rebuilt as Nuevo San Juan. In 1982 comuneros built a community forestry enterprise on the pine-oak that was left, so the edges would not be logged out from under them. The volcano is the founding. The sawmill is the second.",
    scenes: [
      {
        name: "1943",
        what: "Parícutin, the volcano that grew in a field, took the old town. Church towers still stand in the lava. The people moved and kept the name. Colonial títulos primordiales already named the comunidad; the disaster did not invent the commons, it forced a rebuild."
      },
      {
        name: "Nuevo San Juan",
        what: "A relocated Purépecha town on the edge of the lava. Communal territory of pine and oak, around 18,000 hectares in the later title, with a town that had to eat from something other than the buried milpas."
      },
      {
        name: "1982–83, the enterprise",
        what: "Comuneros stood up a community forestry operation on about 6,443 hectares — roughly 30 percent of the communal territory — to stop illegal logging from the edges. Ten years of communal exploitation followed."
      },
      {
        name: "Title, FSC, Equator Prize",
        what: "The 25 November 1991 Diario Oficial resolution titled 18,138.32 hectares to 1,229 comuneros. FSC certification in 1999. The Equator Prize in 2004. A sawmill and a furniture shop. Bienes comunales, not lots."
      }
    ],
    aftermath:
      "Nuevo San Juan Parangaricutiro is a comunidad indígena with a forest enterprise, FSC pine, furniture, and a town that exists because a volcano erased the last one. The founding is geological. The governance is communal on purpose.",
    tension:
      "A community forest on a volcano’s shoulder has to keep the mill from eating the commons and the commons from starving the mill. Who is a comunero on the 1991 list, and who is a neighbour with a chainsaw, is the edge they already founded against."
  },

  "can-masdeu": {
    title: "Eleven people, a hundred police, three days",
    lead: "International activists occupied a Collserola masia in December 2001 while looking for a site around a climate conference. The building had been a Sant Pau leper hospital, empty for about fifty-three years. In April 2002 more than a hundred police tried to take it back. Eleven squatters held for three days. The eviction did not stick.",
    scenes: [
      {
        name: "The empty hospital",
        what: "Can Masdeu sits on Sant Pau land in the Collserola hills above Barcelona. A masia, a former lazaretto, abandoned. The dirt is still the hospital’s. The occupation did not buy it and has not pretended to."
      },
      {
        name: "December 2001",
        what: "A climate-camp search became a home. Gardens, a social centre, Sunday open days grew from the first winter. The founding was not a land trust. It was a lock and a kitchen."
      },
      {
        name: "April 2002",
        what: "A siege: more than a hundred police, eleven people inside, three days. Neighbours and the city watched. The eviction failed in the only way that matters — they were still there when the vans left."
      },
      {
        name: "Still Sant Pau’s",
        what: "Two decades on, the masia is gardens, a social centre, and a household. Title has not moved. You write. You do not buy it. The founding fight is the tenure."
      }
    ],
    aftermath:
      "Can Masdeu is a squatted social centre and garden on a hillside the hospital still owns. Open Sundays, community gardens, a resident group. The three days in 2002 are why there is a place to visit.",
    tension:
      "An occupation that becomes a beloved neighbour still sits on someone else’s deed. A future eviction, a deal, or a slow normalisation — any of the three would be a second founding. None has arrived yet."
  },

  lammas: {
    title: "They met on Lammas Street, then they fought planning for three years",
    lead: "Tony Wrench, Paul Wimbush, and Larch Maxey met — the story goes — on Lammas Street in Carmarthen. Tao Wimbush and partner joined in 2006. Three years of planning produced the first One Planet Development village in Wales: nine smallholdings on a Pembrokeshire hillside, a thousand-year agricultural lease, grass roofs, a 27 kW hydro. Grand Designs came. The planning fight was the point.",
    scenes: [
      {
        name: "Lammas Street",
        what: "The name is a street before it is a village. Low-impact builders and One Planet campaigners who already knew the Welsh policy window, looking for a site that could test it as a settlement rather than a single roundhouse."
      },
      {
        name: "2006–2009",
        what: "Application, objection, inquiry, permission. Tir y Gafel, Glandwr. The Welsh One Planet Development policy asked households to prove a land-based livelihood. Lammas made the proof a village of nine."
      },
      {
        name: "Timber, straw, cob",
        what: "Households built their own places. One house burned in January 2018, uninsured; the original build had cost about £27,000. Peripheral development has added households since the original nine. The hydro is 27 kW. The roofs are grass."
      },
      {
        name: "A thousand-year lease",
        what: "Not a freehold. An agricultural lease long enough to think in centuries, short enough that nobody flips a Pembrokeshire hillside as holiday cottages. The tenure is the founding, as much as the street the founders named it for."
      }
    ],
    aftermath:
      "Lammas / Tir y Gafel is a living One Planet village: smallholdings, a mill, courses, a planning precedent other Welsh projects still cite. The TV segment is how most of Britain heard. The 2009 permission is how the village exists.",
    tension:
      "A precedent has to keep passing its own test. Livelihood numbers, new households, and a planning system that can always ask again are the second founding, renewed every monitoring year."
  },

  arcosanti: {
    title: "A compact city on a mesa, prototyped at twenty-five acres",
    lead: "Paolo Soleri settled in Paradise Valley in 1955 and earth-cast Cosanti as a studio. He founded The Cosanti Foundation in 1965, published Arcology: The City in the Image of Man in 1969, and in 1970 bought 860 acres seventy miles north of Phoenix to prototype a city that would not sprawl. Construction began that year. The built cluster still occupies about 25 acres.",
    scenes: [
      {
        name: "Cosanti first",
        what: "Soleri, an Italian architect who had spent time with Wright, silt-cast concrete apses in Scottsdale and sold bronze bells to fund the work. The studio was a test of a denser way to live in the desert, not yet a town."
      },
      {
        name: "The book, 1969",
        what: "Arcology named the idea: architecture plus ecology, a compact city against the automobile suburb. Students and workshoppers were the labour model from the start. You came, you poured concrete, you left or you stayed."
      },
      {
        name: "1970, the mesa",
        what: "860 acres owned, the rest of a 4,060-acre preserve leased from the state against Agua Fria National Monument. Arcosanti’s apses, foundry, and vaults went up as a fragment of a drawing that showed thousands of residents."
      },
      {
        name: "The fragment",
        what: "Fifty-plus years later the prototype is still a prototype. A 501(c)(3) owns the land. Workshops still pour. The bells still sell. The city of 5,000 did not arrive. The founding drawing is larger than the place."
      }
    ],
    aftermath:
      "Arcosanti is a concrete village and a foundry on an Arizona mesa, run by the Cosanti Foundation, teaching Soleri’s brief to whoever will workshop. The bells are the livelihood. The arcology is the unfinished founding.",
    tension:
      "A city that stays a workshop has to decide whether the prototype is the achievement or the failure. Soleri died in 2013. The mesa still has to choose between completing a drawing and inhabiting a ruin of intention."
  },

  tosepan: {
    title: "Seven hundred campesinos, then the middleman lost the pepper",
    lead: "In 1977 about 700 Nahua small producers in Cuetzalan, Puebla, organized as a unión so sugar would pay a fair price. Then they sold nine tonnes of pepper outside the region at triple the intermediary’s rate. Then coffee. In 1980 they became Tosepan Titataniske — “together we will win” — a cooperative, then a union of cooperatives. Fifty thousand socios later, the founding is still the same fight.",
    scenes: [
      {
        name: "1977, sugar",
        what: "Nahua campesinos in the Sierra Norte were tired of the coyote’s price. The Unión de Pequeños Productores de la Sierra was a buying-and-selling argument before it was an institution. Fair sugar was the first product."
      },
      {
        name: "Nine tonnes of pepper",
        what: "They took pepper out of the region themselves and got three times the intermediary’s rate. The lesson was portable: skip the middleman, keep the margin, build the next trade on the last one. Coffee followed in 1978."
      },
      {
        name: "Cooperativa, 1980",
        what: "Sociedad Cooperativa Agropecuaria Regional Tosepan Titataniske. Thirty-two cooperative stores. A nursery at Xiloxochico in 1984. Organic coffee from 2000. The A.C. Yeknemilis, the training centre Kaltaixpetaniloyan, Tosepan Kali cabins for visitors."
      },
      {
        name: "A union, not lots",
        what: "By the 2000s Tosepan was a unión de cooperativas: caja, school, coffee, pepper, tourism, tens of thousands of Nahua and Tutunaku members. The largest indigenous cooperative union in Mexico on most honest counts. Nobody founded a village of lots. They founded a way not to sell the harvest cheap."
      }
    ],
    aftermath:
      "Tosepan Titataniske is a cooperative union in Cuetzalan: organic coffee and pepper, a savings caja, a school, cabins, a region acting as one seller. The 1977 unión is the founding. The 50,000 socios are the proof.",
    tension:
      "A movement that wins at this scale has to stay a campesinos’ union and not become the next intermediary. Who sits the caja, who grows the coffee, and whether Tosepan Kali is hospitality or a brand, is the argument the 1977 price fight turned into."
  }
};

export function uniqueFoundingFor(slug: string): UniqueFounding | undefined {
  return uniqueFoundingBySlug[slug];
}

export function hasUniqueFounding(slug: string): boolean {
  return slug in uniqueFoundingBySlug;
}
