export type FilmKind = "tour" | "documentary" | "explanation" | "official";

export type CommunityFilm = {
  youtubeId: string;
  title: string;
  credit: string;
  kind: FilmKind;
};

export const filmKindLabels: Record<FilmKind, string> = {
  tour: "Tour",
  documentary: "Documentary",
  explanation: "Explanation",
  official: "Official"
};

/** One representing film per village when a verified match exists. Omit rather than guess. */
export const filmsBySlug: Record<string, CommunityFilm> = {
  "aardehuis": {
    youtubeId: "IiV6YYzGFJA",
    title: "stort blok 2 Aardehuis olst",
    credit: "Floris",
    kind: "explanation"
  },
  "acorn": {
    youtubeId: "QwglTXSYMJ0",
    title: "Inside the Commune Selling Seeds to the World | Acorn Community",
    credit: "Tree & Julia",
    kind: "explanation"
  },
  "aldinga": {
    youtubeId: "yBnAk5aD7kI",
    title: "Aldinga Arts EcoVillage Street Tour 2016",
    credit: "Aldinga Ecovillage",
    kind: "tour"
  },
  "alpha-farm": {
    youtubeId: "zPRYr2O_KKo",
    title: "Alpha farm tour",
    credit: "food vlog alpha",
    kind: "tour"
  },
  "amana-colonies": {
    youtubeId: "dspIc87oR9w",
    title: "Amana Colonies, IA: Wandering Walks of Wonder Slow TV Walking Tour 4K",
    credit: "WanderingWalksofWonder",
    kind: "tour"
  },
  "ananda-village": {
    youtubeId: "G9m8yZGxCCI",
    title: "Ananda Village Tour - May 2014",
    credit: "AnandaChennai",
    kind: "tour"
  },
  "anandwan": {
    youtubeId: "PqO2YrMRjmc",
    title: "Anandwan Tour🥳🎉",
    credit: "Mahesh Amru",
    kind: "tour"
  },
  "anja": {
    youtubeId: "TGtfxGHP1Bw",
    title: "Madagascar: Anja Community Reserve",
    credit: "johnsdam",
    kind: "explanation"
  },
  "arcosanti": {
    youtubeId: "-ByQ7W4Tgz0",
    title: "Arcosanti Virtual Tour",
    credit: "Arcosanti",
    kind: "tour"
  },
  "arterra": {
    youtubeId: "xEsTiQtxRXM",
    title: "Tour of Arterra Bizimodu",
    credit: "GEN Europe",
    kind: "tour"
  },

  "atarashiki-mura": {
    youtubeId: "W0Uij4Alyug",
    title: "【文豪】武者小路実篤がつくりあげた理想郷「新しき村」の誕生ストーリー【本要約】",
    credit: "22世紀アート書籍要約チャンネル",
    kind: "explanation"
  },  "auroville": {
    youtubeId: "IGEIZOn_rjI",
    title: "Auroville India's Secret City | Matrimandir - A Detailed Guided Tour | Auroville | Pondicherry",
    credit: "Be Travellers",
    kind: "tour"
  },
  "awra-amba": {
    youtubeId: "mTWbcBwJzgg",
    title: "awra amba#Documentary film Amharic with English Subtitle አውራ አምባ ዘጋቢ ፊልም",
    credit: "Awra Amba",
    kind: "documentary"
  },
  "ayotitlan": {
    youtubeId: "D-HatHuZ9yo",
    title: "Ayotitlán, Jalisco",
    credit: "Aventuras en foto y video",
    kind: "explanation"
  },

  "baja-biosana": {
    youtubeId: "Drm2mQbV7TE",
    title: "Baja BioSana, original video version",
    credit: "Baja BioSana",
    kind: "official"
  },
  "baja-ecovillage": {
    youtubeId: "G84G1ysWeF4",
    title: "Sierra Baja EcoVillage - Tour of the Orchard",
    credit: "IveeAndLou",
    kind: "tour"
  },
  "barefoot-college": {
    youtubeId: "FhzHg62wsqk",
    title: "Barefoot College Story- DST( Department of Science and Technology, Government of India) Film",
    credit: "Barefoot College Tilonia",
    kind: "documentary"
  },
  "basaisa": {
    youtubeId: "Q1mihh5bJH0",
    title: "الفكرة بدأت من السبعينيات وتطورت حتى اليوم.. البسايسة أول قرية تعتمد على الطاقة الشمسية في مصر",
    credit: "العربية مصر",
    kind: "explanation"
  },
  "belfast-cohousing": {
    youtubeId: "48pawZ7wob0",
    title: "Introduction to Belfast Cohousing & Ecovillage",
    credit: "Jon Ippolito",
    kind: "official"
  },
  "bellingham": {
    youtubeId: "A0OSbvUuGb8",
    title: "Creating Our Own Neighborhood - Bellingham Cohousing",
    credit: "peakmoment",
    kind: "explanation"
  },
  "belterra": {
    youtubeId: "5_55kHX_188",
    title: "Cohousing Explained: \"What is a Home?\"",
    credit: "BelterraCohousing",
    kind: "official"
  },
  "bhrugu-aranya": {
    youtubeId: "2XmUoiKWnFg",
    title: "Życie w najstarszej ekowiosce w Polsce 🌿 | Agnihotra i Fundacja Homa Terapia, Bhrugu Aranya Jordanów",
    credit: "Ramsey United",
    kind: "explanation"
  },
  "biovilla": {
    youtubeId: "ChxdrACYhHs",
    title: "Faça um tour virtual pelas Biovillas",
    credit: "Biovillas - Portugal Imoveis",
    kind: "tour"
  },  "boabeng-fiema": {
    youtubeId: "sus_KS5mWuA",
    title: "Special Report: Boabeng - Fiema Monkey Sanctuary",
    credit: "UTV Ghana Online",
    kind: "explanation"
  },
  "bona-fide": {
    youtubeId: "osr8acOy9Bg",
    title: "Project Bona Fide - love is the answer",
    credit: "TheProjectBonaFide",
    kind: "official"
  },
  "bosque-la-primavera": {
    youtubeId: "lS7AE82LOD4",
    title: "Una familia comparte cómo fue su visita al Bosque La Primavera el fin de Semana Santa | JN",
    credit: "Jalisco Noticias",
    kind: "explanation"
  },
  "bosque-village": {
    youtubeId: "nf-P2sXxacQ",
    title: "Quick tour of the infrastructure of the Bosque Village - 2017",
    credit: "Bosque Village",
    kind: "tour"
  },
  "botton": {
    youtubeId: "x3zTn7llcU4",
    title: "A Walk Around Botton Village",
    credit: "AlistairLuckman",
    kind: "tour"
  },
  "brave-earth": {
    youtubeId: "vsj4PyAt1vg",
    title: "Bienvenida a Brave Earth / Tierra Valiente / Finca Luna Nueva Ecolodge",
    credit: "EcoNorada",
    kind: "explanation"
  },
  "braziers-park": {
    youtubeId: "NOVlW9hmcOU",
    title: "A tour of Braziers Park",
    credit: "Braziers Park Channel",
    kind: "tour"
  },
  "breitenbush": {
    youtubeId: "fcyoJeIAZ64",
    title: "Breitenbush Hot Springs Retreat and Conference Center",
    credit: "Breitenbush Hot Springs",
    kind: "official"
  },
  "brithdir-mawr": {
    youtubeId: "KxxmZhWjLG8",
    title: "Ros walking the Brithdir Mawr Stone Circle 30/10/2020.",
    credit: "Barry Hoon",
    kind: "explanation"
  },
  "brook-farm": {
    youtubeId: "wiWQ6kg5QZs",
    title: "Brook Farm - West Roxbury, MA",
    credit: "The Gallivanting Ginger",
    kind: "tour"
  },
  "bryn-gweled": {
    youtubeId: "snDr5sVCbHw",
    title: "Bryn Gweled Homesteads",
    credit: "abizzle3983",
    kind: "explanation"
  },
  "brzozowka": {
    youtubeId: "a8FXD-L5s5g",
    title: "Eko-osada Brzozówka - świadome życie w zgodzie z naturą.",
    credit: "Singielskie Podróże",
    kind: "explanation"
  },
  "bumi-langit": {
    youtubeId: "2u_7ZI4BzRs",
    title: "FARM TRIP -  BUMI LANGIT INSTITUTE WITH KRISNA WAWORUNTU | RAY JANSON RADIO",
    credit: "Ray Janson Radio",
    kind: "explanation"
  },
  "cabo-pulmo": {
    youtubeId: "cxPUVLtSTno",
    title: "🌎🧜‍♂️👉BAJA CALIFORNIA SUR: El Acuario del Mundo  | CABO PULMO | @sebitastrip ​",
    credit: "sebitastrip",
    kind: "explanation"
  },

  "cambium": {
    youtubeId: "g6qzyove_Y4",
    title: "La Cambium Gemeinschaft, premier éco-village d'Autriche",
    credit: "euronews (en français)",
    kind: "explanation"
  },
  "camphill-copake": {
    youtubeId: "Ejl7kgJCtCI",
    title: "Camphill Village Copake: Celebrating 60 Years",
    credit: "CamphillCopake",
    kind: "official"
  },
  "camphill-minnesota": {
    youtubeId: "N6A4-LykQrg",
    title: "Camphill Village Minnesota",
    credit: "Camphill Village Minnesota",
    kind: "official"
  },
  "camphill-ontario": {
    youtubeId: "9pXoV3sDJ7s",
    title: "I Belong - Camphill Communities Ontario",
    credit: "camphillcanada",
    kind: "official"
  },
  "can-masdeu": {
    youtubeId: "xJm_StY2b3I",
    title: "A Day at Can Masdeu",
    credit: "Clif Ross Marcy Rein",
    kind: "explanation"
  },
  "cannock-mill": {
    youtubeId: "mzxBArfMBmg",
    title: "Cannock Mill Cohousing video for Passivhaus Trust award",
    credit: "Cannock Mill Cohousing",
    kind: "official"
  },

  "cedicam": {
    youtubeId: "TuyrF1AYHeQ",
    title: "Mexico Seed Project: CEDICAM",
    credit: "Groundswell International",
    kind: "explanation"
  },
  "celo": {
    youtubeId: "_Mlf8iqOAh0",
    title: "Meet Mengfan and Anna: Building Celo Community",
    credit: "Celo",
    kind: "official"
  },  "cherry-hill": {
    youtubeId: "AbHfVZOIJ6s",
    title: "The Cohousing Model with Henry Lappen of Cherry Hill Cohousing",
    credit: "The Forest Garden",
    kind: "explanation"
  },
  "chikukwa": {
    youtubeId: "IsFwm16uZt4",
    title: "Chikukwa Ecological Land Use Community Trust (WSA, 01/08/2023)",
    credit: "The Flow Partnership",
    kind: "explanation"
  },
  "christiania": {
    youtubeId: "pzcIsXFxBHw",
    title: "Freetown Christiania | Walking Tour | Copenhagen City | Denmark Travel | RoamerRealm",
    credit: "Rahul",
    kind: "tour"
  },

  "cite-ecologique": {
    youtubeId: "OhSBeqPv-J4",
    title: "La Cité Écologique de Ham-Nord",
    credit: "visagesregionaux",
    kind: "explanation"
  },
  "cloughjordan": {
    youtubeId: "HrryhY-EVZY",
    title: "Cloughjordan Ecovillage 360 Tour",
    credit: "Cloughjordan Ecovillage",
    kind: "tour"
  },
  "cobb-hill": {
    youtubeId: "viLP--O8ipk",
    title: "Virtual Tour of Cobb Hill Cohousing, Living Tree Alliance & Rah Rah Village in Vermont, USA",
    credit: "Foundation for Intentional Community",
    kind: "tour"
  },
  "columbia-ecovillage": {
    youtubeId: "ruI5DJ0EVSc",
    title: "Raintree Nursery Tours Columbia Ecovillage!",
    credit: "Raintree Nursery",
    kind: "explanation"
  },
  "commonground": {
    youtubeId: "StvzJhwqUYw",
    title: "CommonGround Virtual Tour",
    credit: "Greiner Construction",
    kind: "tour"
  },
  "comunidad-del-sur": {
    youtubeId: "mq-yRysJHOw",
    title: "episodio 1 comunidad del Sur",
    credit: "Comunidad Del Sur TV",
    kind: "official"
  },
  "crisalium": {
    youtubeId: "u3-NlufPUTc",
    title: "Recorridos Feria de Ecotecnologías: Ecoaldea Crisalium",
    credit: "Cantaro Azul",
    kind: "explanation"
  },
  "crystal-waters": {
    youtubeId: "G3YbTMg4H-0",
    title: "Crystal Waters Documentary",
    credit: "Crystal Waters Ecovillage",
    kind: "documentary"
  },
  "currumbin": {
    youtubeId: "z9kdb0dle9g",
    title: "The Ecovillage at Currumbin on The Great South East",
    credit: "Japow Jo",
    kind: "explanation"
  },
  "damanhur": {
    youtubeId: "inFc9_zAPpA",
    title: "Damanhur Movie",
    credit: "CCC",
    kind: "documentary"
  },
  "dancing-rabbit": {
    youtubeId: "Y11ks_iT_Uo",
    title: "Kyle's Crazy House | The Inside Coming Soon Plus Dancing Rabbit Ecovillage Visitor Program",
    credit: "Hardcore Sustainable",
    kind: "explanation"
  },
  "den-selvforsynende": {
    youtubeId: "gpUE6uQCJOQ",
    title: "Den Selvforsynende Landsby - et permakulturelt bosted",
    credit: "KlimaTV",
    kind: "explanation"
  },
  "drop-city": {
    youtubeId: "jp-UyMq7rKA",
    title: "Drop City 1967",
    credit: "TeeCee Lang",
    kind: "documentary"
  },
  "dyssekilde": {
    youtubeId: "67oYtKg_wBY",
    title: "How it is Like Living in The Eco Village in Denmark | Mikkel Søllestad",
    credit: "Wisdom From North",
    kind: "explanation"
  },
  "earthaven": {
    youtubeId: "iuQkz7XRXkc",
    title: "Earthaven Ecovillage Walking Tour",
    credit: "Smith Family Videos",
    kind: "tour"
  },
  "earthsong": {
    youtubeId: "LGPrO8Rwv90",
    title: "Earthsong Eco-Neighbourhood: A Figure Eight Tour of Earthsong on a Waveboard",
    credit: "EarthsongEcoNZ",
    kind: "tour"
  },
  "east-wind": {
    youtubeId: "ekZMWrRFnUA",
    title: "Route 66 Documentary - East Wind Community (September 2017)",
    credit: "East Wind Community (Sumner's Unofficial Archives)",
    kind: "documentary"
  },
  "eco-truly": {
    youtubeId: "8dtAwxoF4Xs",
    title: "¡Conoce Eco Truly Park, un ambiente mágico cerca al mar en Huaral!",
    credit: "Gobierno Regional de Lima",
    kind: "explanation"
  },
  "ecodorp-boekel": {
    youtubeId: "faYFy8w7f4U",
    title: "Rondleiding door Ecodorp Boekel op 21-6-2020",
    credit: "Ecodorp Boekel",
    kind: "official"
  },

  "ecoreality": {
    youtubeId: "Vpuw9Hs5gwE",
    title: "EcoReality Co-op work party Dec 09.mov",
    credit: "James Cowan",
    kind: "explanation"
  },
  "ecovilla-gaia": {
    youtubeId: "B9OrOihWfOs",
    title: "Cosechar - Ecovilla Gaia - Instituto Argentino de Permacultura - HD",
    credit: "Gaia Universidad de Permacultura",
    kind: "explanation"
  },
  "ecovillage-ithaca": {
    youtubeId: "KZPCxDCXauw",
    title: "EcoVillage at Ithaca - Electric Cars",
    credit: "Thrive Ithaca EcoVillage Education Center",
    kind: "official"
  },
  "el-manzano": {
    youtubeId: "ZXlthoNyMVI",
    title: "Restauración Ecológica en Ecoescuela El Manzano, Chile (Diseño de permacultura, Zona 5)",
    credit: "Ecoherencia TV",
    kind: "explanation"
  },
  "eno-commons": {
    youtubeId: "VmMz2y1kET8",
    title: "Eno Commons Community Garden",
    credit: "enocommons",
    kind: "official"
  },
  "eva-lanxmeer": {
    youtubeId: "V538mvCUhcM",
    title: "Virtual tour Lanxmeer 2020",
    credit: "Laura B",
    kind: "tour"
  },
  "fambidzanai": {
    youtubeId: "Bk1TxBe_2Ak",
    title: "Agroecology Viability Assessment in Zimbabwe: ActionAid Zimbabwe and Fambidzanai Permaculture Centre",
    credit: "Fambidzanai Permaculture Centre",
    kind: "official"
  },
  "familistere-guise": {
    youtubeId: "50s2PvVPc8E",
    title: "Reportage sur le familistère de Guise (Aisne, France)",
    credit: "Mr OLIVEIRA Prof HG",
    kind: "explanation"
  },
  "finca-bellavista": {
    youtubeId: "qj_id2DC2ZE",
    title: "Finca Bellavista - a treehouse community",
    credit: "Finca Bellavista",
    kind: "official"
  },
  "finca-sagrada": {
    youtubeId: "KF5sQFjJtC0",
    title: "ACR on Tour 01 - Finca Sagrada",
    credit: "Árbol Conrazón",
    kind: "tour"
  },
  "findhorn": {
    youtubeId: "8SAWvMZfoUs",
    title: "The Findhorn Foundation and Ecovillage Community, a walking tour, Scotland.",
    credit: "Global Unity Consciousness",
    kind: "tour"
  },
  "friland": {
    youtubeId: "LKHztyFtOIs",
    title: "Friland - skurvognene kommer",
    credit: "The Flower Friland",
    kind: "official"
  },  "fryers-forest": {
    youtubeId: "y67sq9Z9xrM",
    title: "Building with straw (light earth) at Fryers Forest",
    credit: "AlexSulivan",
    kind: "explanation"
  },
  "gaia-ashram": {
    youtubeId: "DJ0YE4IY5l0",
    title: "Thailand - Ecovillage Design Education Course at Gaia Ashram",
    credit: "Gaia Ashram",
    kind: "official"
  },
  "gastwerke": {
    youtubeId: "Z1bPBdZYx3A",
    title: "Recommoning in Germany: gASTWERKe commune",
    credit: "Ashish Kothari",
    kind: "explanation"
  },
  "gaviotas": {
    youtubeId: "Nen9rwDNe6Y",
    title: "Las Gaviotas by Gunter Pauli mp4",
    credit: "Planet of Hope",
    kind: "documentary"
  },
  "gk-enchanted-farm": {
    youtubeId: "E4tS16M7GT4",
    title: "Farm Tour Experience at Lifebank Foundation | GK Enchanted Farm | Ella Quim",
    credit: "Ella Quim",
    kind: "tour"
  },
  "glarisegg": {
    youtubeId: "c7-46AtUx4Y",
    title: "Gemeinschaft Schloss Glarisegg",
    credit: "Gemeinschaft Schloss Glarisegg",
    kind: "official"
  },
  "govardhan": {
    youtubeId: "UwGcCM8IWNU",
    title: "Inside Govardhan Ecovillage | Iskcon Temple near Wada | Guide in Hindi | गोवर्धन ईको विलेज",
    credit: "Discover India by road",
    kind: "explanation"
  },
  "greater-world": {
    youtubeId: "B_1UZzwipVI",
    title: "GREATER WORLD EARTHSHIP COMMUNITY TOUR - Small Details - Earthship Homes Design  Styles In Progress",
    credit: "THEGREENCABBY",
    kind: "tour"
  },
  "grishino": {
    youtubeId: "Sb9VATyxjZI",
    title: "EcoVillage Grishino Presentation",
    credit: "KitsuneLisa",
    kind: "official"
  },
  "guie": {
    youtubeId: "ZMoFl-WVXMg",
    title: "Seydou Kabore - Directeur de la ferme pilote de Guiè - VostEn",
    credit: "Plateforme des Partenaires de la GMV",
    kind: "explanation"
  },
  "guneskoy": {
    youtubeId: "rKJL_MtWxBA",
    title: "YESIL BIRGUN GÜNEŞKÖY KOOPERATİFİ",
    credit: "BirGün TV",
    kind: "documentary"
  },
  "gyurufu": {
    youtubeId: "-_t5k-ZA80Y",
    title: "Gyűrűfű, az ökofalu",
    credit: "OzoneTV",
    kind: "explanation"
  },
  "hallingelille": {
    youtubeId: "DBhmc40-ESY",
    title: "Life in Hallingelille village _ Denmark",
    credit: "Safa Boussaada",
    kind: "explanation"
  },
  "hameau-des-buis": {
    youtubeId: "k3FC71LwS60",
    title: "Le Hameau des Buis : visite guidée 1/2",
    credit: "SaDunya Project",
    kind: "tour"
  },
  "hancock-shaker": {
    youtubeId: "3C6mPqp0V_A",
    title: "Tour of Hancock Shaker Village",
    credit: "vibezicle",
    kind: "tour"
  },
  "hapori": {
    youtubeId: "DP5IcQZrg5w",
    title: "Hapori EcoAldea: Sustainable Living in San Miguel |  Vive en Armonía con la Naturaleza",
    credit: "Hapori Eco Aldea",
    kind: "official"
  },
  "harmony-village": {
    youtubeId: "wUeXsJHRyGo",
    title: "Harmony Village - A Sustainable Co-Housing Community (2012 Tour)",
    credit: "GoldenSolarTour",
    kind: "tour"
  },
  "heartwood": {
    youtubeId: "VYd59w3RR_Y",
    title: "Why Heartwood Cohousing",
    credit: "Heartwood Cohousing",
    kind: "official"
  },  "hertha": {
    youtubeId: "mLo_9FE1x3g",
    title: "Life at Hertha Levefællesskab | ESC Volunteering Experience with Asia Tenaglia",
    credit: "Dansk ICYE",
    kind: "explanation"
  },
  "hjortshoj": {
    youtubeId: "gsTuuL3jOFw",
    title: "Andelssamfundet i Hjortshøj",
    credit: "KlimaTV",
    kind: "explanation"
  },
  "hockerton": {
    youtubeId: "quskPW5igWM",
    title: "Hockerton Housing Project- About Us",
    credit: "HockertonHousingProj",
    kind: "official"
  },
  "huehuecoyotl": {
    youtubeId: "9XS9rWI6J-s",
    title: "Tour of the Oldest Intentional Community in Mexico (Huehuecoyotl Ecovillage Tepoztlan)",
    credit: "New Earthlings",
    kind: "tour"
  },
  "huerto-roma-verde": {
    youtubeId: "sPyDJvdkQiA",
    title: "Huerto Roma Verde, primer lugar en el mundo",
    credit: "Huerto Roma Verde",
    kind: "official"
  },
  "huerto-tlatelolco": {
    youtubeId: "LcrE2qUs0oM",
    title: "Huerto Tlatelolco | Urbanismo Agrario en CDMX",
    credit: "Manumanuti",
    kind: "explanation"
  },

  "hurdal": {
    youtubeId: "_2SHCQ_6Tbg",
    title: "Nordic Permaculture Festival 2013 Hurdal ecovillage, Norway",
    credit: "KlimaTV",
    kind: "explanation"
  },
  "il-ngwesi": {
    youtubeId: "R3Uh_9y8TcU",
    title: "Il Ngwesi Group Ranch, Kenya - Equator Prize 2002 Winner",
    credit: "Equator Initiative",
    kind: "explanation"
  },
  "imap": {
    youtubeId: "uGxCi7e3MWY",
    title: "Instituto Mesoamericano de Permacultura IMAP",
    credit: "V- Tejaxún",
    kind: "explanation"
  },
  "inla-kesh": {
    youtubeId: "8NaRkjisPv4",
    title: "INLA KESH CHIAPAS - Biotopo de Sanación",
    credit: "Inla Kesh Chiapas Biotopo de Sanación",
    kind: "official"
  },
  "innisfree": {
    youtubeId: "xwo8VPnXrvw",
    title: "Innisfree Village: Where New Directions Begin",
    credit: "Innisfree Village",
    kind: "official"
  },
  "ipec": {
    youtubeId: "MipldiYbwRw",
    title: "Ecocentro IPEC - Reportagem Globo Repórter (Maio-2007)",
    credit: "Ecocentro IPEC",
    kind: "official"
  },
  "ipes": {
    youtubeId: "1GatJ3i81XY",
    title: "Permaculture in El Salvador",
    credit: "Ryan Wilson",
    kind: "explanation"
  },
  "jahnishausen": {
    youtubeId: "Pf9oR_hu9FQ",
    title: "Jahnishausen, Lebenstraum Gemeinschaft, Mehrgenerationen Ökodorf, Sommer autark",
    credit: "Ecovillage Finder",
    kind: "explanation"
  },
  "juchowo": {
    youtubeId: "TkrgXavXn-M",
    title: "Krótki film o farmie ekologicznej Juchowo Farm.",
    credit: "Dawid Markoff",
    kind: "documentary"
  },

  "karise-permatopia": {
    youtubeId: "Fx5ez9tG5Jc",
    title: "Karise Permatopia (collaborative housing awards 2019)",
    credit: "Nina Poret",
    kind: "explanation"
  },
  "kasisi": {
    youtubeId: "IwyMx5IBWyo",
    title: "A New Way of Farming at Kasisi Agricultural Training Centre",
    credit: "Society of Jesus (Jesuits)",
    kind: "explanation"
  },  "kaydara": {
    youtubeId: "ifT46f0pJXc",
    title: "Hopineo presents Kaydara School-Farm - AgroEcology",
    credit: "HOPINEO",
    kind: "explanation"
  },  "kersentuin": {
    youtubeId: "BJGNfX0am6w",
    title: "Eco District Kersentuin Utrecht, The Netherlands 2013 2026",
    credit: "ClimateScan #ClimateAdaptation",
    kind: "explanation"
  },
  "keuruu": {
    youtubeId: "UsRX6Bypxak",
    title: "GEN-Europe Assembly  at Keuruu Ecovillage, Finland July 2009, Kosha Joubert interview",
    credit: "lampija",
    kind: "explanation"
  },
  "khula-dhamma": {
    youtubeId: "peY9gyi7JMQ",
    title: "The Off-Grid Pear Tour: Khula Dharma, featuring Tim Wigley",
    credit: "The Off-Grid Pear",
    kind: "tour"
  },
  "kibbutz-ketura": {
    youtubeId: "F84stxfCdmw",
    title: "Travel, Israel Tour, Kibbutz Ketura...Long and winding road - Insightful magical - Negev Desert",
    credit: "Charles & Mari Adventures",
    kind: "tour"
  },
  "kibbutz-lotan": {
    youtubeId: "yI-YOjz8Ge0",
    title: "Kibbutz Lotan - Tour of the EcoCampus Neighborhood",
    credit: "Eco Center Kibbutz Lotan",
    kind: "tour"
  },
  "kibbutz-samar": {
    youtubeId: "Irl7iCwRZRQ",
    title: "Harvesting and Sorting Date Fruits in Kibbutz Samar",
    credit: "CrystalVisionSamar",
    kind: "explanation"
  },
  "kimberton-hills": {
    youtubeId: "0Xis4Y2-XKk",
    title: "A Look Inside Our Community | Camphill Village Kimberton Hills",
    credit: "CamphillKimberton",
    kind: "official"
  },
  "koinonia": {
    youtubeId: "E9mcng_H748",
    title: "Come spend a day with Caly, one of our interns at Koinonia Farm.",
    credit: "Koinonia Farm",
    kind: "official"
  },
  "konohana": {
    youtubeId: "JJhngWnHfoo",
    title: "How to be the change for a sustainable Earth - Introductory video of the Konohana family",
    credit: "木の花ファミリー（konohana family）",
    kind: "official"
  },
  "kovcheg": {
    youtubeId: "Zz3VgZegRLU",
    title: "Visiting Kovcheg, a Kin's Domain Village in Russia",
    credit: "Space of Love",
    kind: "explanation"
  },
  "krishna-valley": {
    youtubeId: "queSoLcpbLw",
    title: "Krishna valley ( Krisna völgy ), Hungary.",
    credit: "Rati Gaur",
    kind: "explanation"
  },
  "kufunda": {
    youtubeId: "JMDqsPYF7hs",
    title: "Kufunda Learning Village - Join us in Hosting Possibility",
    credit: "Kufunda",
    kind: "official"
  },
  "kuyabeh": {
    youtubeId: "8kej3pGL2jE",
    title: "Tour Virtual Kuyabeh Comunidad Sustentable Tulum",
    credit: "Kuyabeh - Sustainable Ecological Community",
    kind: "tour"
  },
  "la-borda": {
    youtubeId: "ianchywUVkQ",
    title: "Ep. 17: Tour of \"La Borda\" (in Barcelona) // The Essential Housing Campaign",
    credit: "The Housing Innovation Collaborative",
    kind: "tour"
  },
  "la-borie-noble": {
    youtubeId: "bxqiXirzrys",
    title: "Visite #2 - L'Arche de la Borie Noble",
    credit: "Vik Explore",
    kind: "tour"
  },
  "la-ventanilla": {
    youtubeId: "Exfx8-Aqeto",
    title: "Playa LA VENTANILLA - Paseo en la LAGUNA DE MANGLARES TURISMO DE OAXACA",
    credit: "Xpress SOL Mexico",
    kind: "tour"
  },
  "lakabe": {
    youtubeId: "8zOKGXiSDR4",
    title: "Lakabe  Artzibar  Nafarroa",
    credit: "Julen Zinkunegi Tolosa",
    kind: "explanation"
  },
  "lama": {
    youtubeId: "78jSF6oT7q8",
    title: "Summer Tour of Lama Foundation ~ a Spiritual Community & Retreat Center in New Mexico",
    credit: "TheLamaFoundation",
    kind: "tour"
  },
  "lammas": {
    youtubeId: "BT_78t6SdVI",
    title: "We Spent A Day At Lammas Ecovillage. Here's What We Found.",
    credit: "Kim & Lee Explore",
    kind: "explanation"
  },
  "landmatters": {
    youtubeId: "sHzTBeOiYKs",
    title: "Landmatters Video Tour - Part 2",
    credit: "United Diversity",
    kind: "tour"
  },
  "las-canadas": {
    youtubeId: "HKhxwoIvEI4",
    title: "Las Cañadas Bosque de Niebla",
    credit: "Las Cañadas Bosque de niebla",
    kind: "official"
  },
  "laurieston-hall": {
    youtubeId: "a43oX-2KgIY",
    title: "Complaints Choir Of Laurieston Hall/Scotland",
    credit: "LauriestonHall",
    kind: "official"
  },
  "lebensgarten": {
    youtubeId: "vsnp9x3FdrE",
    title: "Erfahre die Fülle der Solidarischen Landwirtschaft im Permakulturpark am Lebensgarten Steyerberg",
    credit: "Permakulturpark am Lebensgarten Steyerberg",
    kind: "official"
  },
  "lilac": {
    youtubeId: "Mh96D7zK5q4",
    title: "Permaculture and Community: LILAC Green Cohousing",
    credit: "Discover Permaculture with Geoff Lawton",
    kind: "explanation"
  },
  "lilleoru": {
    youtubeId: "gVPlMWdyghA",
    title: "Shiva Temple in Estonia, Lilleoru visit in 2024",
    credit: "Marina",
    kind: "tour"
  },
  "limans": {
    youtubeId: "fjqx_T01GJE",
    title: "Roland Perrot. Coopérative LONGO MAÏ, Limans, Alpes de Haute Provence, le 3 juin 1990. ",
    credit: "Fabrizio Porro",
    kind: "explanation"
  },
  "linnaea": {
    youtubeId: "WddB9XQSMVY",
    title: "Linnaea Farm Virtual Tour",
    credit: "FarmFolk CityFolk",
    kind: "tour"
  },
  "little-donkey": {
    youtubeId: "S2LOqeM-laI",
    title: "C015 · en · Little Donkey Farm · 小毛驴市民农园 · China",
    credit: "INTERautonomy · Projects changing the world!",
    kind: "explanation"
  },
  "living-energy-farm": {
    youtubeId: "wdSX_TIYkD4",
    title: "Living Energy Farm | ECO-COMMUNE TOUR",
    credit: "Off-Grid network",
    kind: "tour"
  },
  "llano-del-rio": {
    youtubeId: "z2__dERjeqk",
    title: "Llano del Rio Documentary",
    credit: "Madilyn Schindler",
    kind: "documentary"
  },
  "lomaland": {
    youtubeId: "9JQ1EsYhX2U",
    title: "Lomaland Theosophical Community History Tour -- Revisiting Visionary Utopia with Kenneth Small",
    credit: "The Enso Project",
    kind: "tour"
  },
  "longo-mai": {
    youtubeId: "HFsw6fZzJFE",
    title: "Longo Mai Costa Rica - Part 1",
    credit: "GreenEdge Studios",
    kind: "explanation"
  },
  "los-angeles-eco-village": {
    youtubeId: "MycjQWg_ZVg",
    title: "Los Angeles Eco-Village Sustainable Community",
    credit: "Robin Greenfield",
    kind: "explanation"
  },
  "los-horcones": {
    youtubeId: "GnAz_bF0D2I",
    title: "A DAY AT COMUNIDAD LOS HORCONES BEHAVIORAL CENTER",
    credit: "Comunidad Los Horcones",
    kind: "official"
  },
  "los-portales": {
    youtubeId: "7y3yO9hERAI",
    title: "Ecoaldeas: conociendo 'Los Portales'",
    credit: "Periódico de EUSA Cámara de Comercio",
    kind: "explanation"
  },
  "lost-valley": {
    youtubeId: "OwCGD8QDJh4",
    title: "Lost Valley Education Center and Ecovillage Highlights Reel",
    credit: "Taylor Nelson",
    kind: "explanation"
  },  "lynedoch": {
    youtubeId: "qCEdDM-c7RQ",
    title: "Building of  my adobe home @ Lynedoch EcoVillage",
    credit: "Catastrophix1",
    kind: "explanation"
  },
  "marmalade-lane": {
    youtubeId: "lo2iYqmBXxU",
    title: "Marmalade Lane, A Cohousing Community",
    credit: "Cambridge Moviemakers",
    kind: "explanation"
  },
  "matavenero": {
    youtubeId: "_YIyd4Aqa24",
    title: "2 giorni nella comunità hippie di Matavenero",
    credit: "Cesare Deserto",
    kind: "explanation"
  },
  "maya-mountain": {
    youtubeId: "ac9mQrvUI-8",
    title: "#TarHeelTakeover: Maya Mountain Research Farm",
    credit: "University of North Carolina at Chapel Hill",
    kind: "explanation"
  },
  "miccosukee": {
    youtubeId: "5050VcJMx-s",
    title: "“The Miccosukee Land Co-Op” - February 2025 Program",
    credit: "Tallahassee Historical Society",
    kind: "explanation"
  },
  "milagro-cohousing": {
    youtubeId: "9vPu9LbsiIU",
    title: "Virtual Tour: Tierra Nueva Cohousing, Milagro Cohousing and Burns Village & Farm – in USA",
    credit: "Foundation for Intentional Community",
    kind: "tour"
  },
  "moora-moora": {
    youtubeId: "HcShNkC67Wk",
    title: "Melbourne's Off-Grid Mountaintop Village: Communal Living Since 1974",
    credit: "zannonymous",
    kind: "tour"
  },
  "morningstar-ranch": {
    youtubeId: "iR2eK113DqI",
    title: "Morning-star Commune in Time-magazine 60s counter-culture",
    credit: "MysterEy1 Every1 Peter-Appleseed",
    kind: "documentary"
  },

  "muir-commons": {
    youtubeId: "tn4n5IVAOdo",
    title: "Davis Electric Vehicle Assoc DEVA Meeting 2023 August 9 (Part 2) Tour of Muir Commons & EV's",
    credit: "LiveCoolDavis",
    kind: "tour"
  },

  "nadeet": {
    youtubeId: "-AzVpHNv920",
    title: "NaDEET Promo Life in Balance",
    credit: "nadeetTube",
    kind: "official"
  },
  "nanciyaga": {
    youtubeId: "qIpdLtEGmW0",
    title: "RESERVA ECOLÓGICA NANCIYAGA",
    credit: "Ecologíaconmommy",
    kind: "explanation"
  },
  "narara": {
    youtubeId: "vcwTLwLuiE0",
    title: "Narara Ecovillage - An Introduction Video",
    credit: "Narara Ecovillage",
    kind: "official"
  },
  "nashira": {
    youtubeId: "JZ0TvHQtsCk",
    title: "Presentation of the She-EDE Nashira Ecoaldea Colombia, Nov. 2025. Video Compilation",
    credit: "Dancing Goddesses",
    kind: "explanation"
  },
  "navadarshanam": {
    youtubeId: "uQ3Bef07Xko",
    title: "Navadarshanam",
    credit: "Srinivas C",
    kind: "explanation"
  },
  "ndanifor": {
    youtubeId: "M7vVZhQE2Cc",
    title: "Ndanifor Permaculture Eco village: Permaculture the African Way",
    credit: "Better World Cameroon",
    kind: "explanation"
  },
  "ndem": {
    youtubeId: "ti7fK21NMgs",
    title: "#CroissanceVerte .. Sénégal : à la découverte de l'écovillage de Ndem",
    credit: "Medi1TV Afrique",
    kind: "documentary"
  },
  "neot-semadar": {
    youtubeId: "lFO6HS7HKsU",
    title: "LaMidbar - Masa Israel program at Kibbutz Neot Semadar",
    credit: "Lamidbar Neot Semadar",
    kind: "explanation"
  },

  "neve-shalom": {
    youtubeId: "QrZyLyVqXGI",
    title: "The Philadelphia Orchestra on Tour 2018: A Visit to Wahat al-Salam/Neve Shalom, Near Tel Aviv",
    credit: "WRTImusic",
    kind: "tour"
  },  "new-ground": {
    youtubeId: "KNtQ1PKZryo",
    title: "New Ground Cohousing  - The Way To Do It",
    credit: "Pollard Thomas Edwards",
    kind: "explanation"
  },
  "new-harmony": {
    youtubeId: "jButQ3iH72M",
    title: "New Harmony Indiana: An Attempted Utopia | NHD Group Documentary",
    credit: "Gracie T",
    kind: "documentary"
  },
  "new-lanark": {
    youtubeId: "GsfsOqy8a2c",
    title: "New Lanark World Heritage Site Virtual Tour",
    credit: "NewLanarkVisitor",
    kind: "tour"
  },
  "new-view": {
    youtubeId: "Af8YwAn4m_A",
    title: "Preparando jantar em conjunto no New View Cohousing",
    credit: "Edgar Werblowsky",
    kind: "explanation"
  },
  "newton-dee": {
    youtubeId: "IQtCIfKmjGQ",
    title: "Newton Dee: Portrait of a Community",
    credit: "Lee In Progress",
    kind: "explanation"
  },
  "niederkaufungen": {
    youtubeId: "-gNb8u92WH4",
    title: "Leben ohne Besitz - Alles teilen | doku | erlebnis hessen",
    credit: "Hessischer Rundfunk",
    kind: "documentary"
  },
    "nubanusit": {
    youtubeId: "OdIQKCGwxRE",
    title: "Nubanusit Neighborhood & Farm Kids Video",
    credit: "twocotons",
    kind: "explanation"
  },
  "nuevo-san-juan": {
    youtubeId: "zSLOc4DOt-E",
    title: "COMUNIDAD INDÍGENA DE NUEVO SAN JUAN PARANGARICUTIRO MICH.",
    credit: "Centro Pantzingo",
    kind: "explanation"
  },
  "numero-zero": {
    youtubeId: "wBbxkuTJTeE",
    title: "Cohousing Numero Zero",
    credit: "ProgettoThegate",
    kind: "explanation"
  },
  "nyland": {
    youtubeId: "BHHJg3tLnQM",
    title: "Designed for Belonging: Life at Nyland Cohousing",
    credit: "Hải-ý Lê",
    kind: "explanation"
  },
  "oaec": {
    youtubeId: "iYR6yy8ePVE",
    title: "Visual Tour of OAEC Retreat Center",
    credit: "Occidental Arts & Ecology Center OAEC",
    kind: "tour"
  },  "old-hall": {
    youtubeId: "iK6FcT5q4x0",
    title: "WWOOFing at Old Hall Community, UK",
    credit: "WWOOF UK",
    kind: "explanation"
  },
  "oneida-community": {
    youtubeId: "RjXKZP0YrnU",
    title: "Inside the Oneida Community: A Radical Social Experiment",
    credit: "Pepperbox TV",
    kind: "explanation"
  },
  "ostoja-natury": {
    youtubeId: "-3T6GqO5sCM",
    title: "Regenerative Agriculture in the making EP 1- Introduction of Ostoja Natury Cooperative in Tomaszyn",
    credit: "Ostoja Natury TV",
    kind: "official"
  },
  "otamatea": {
    youtubeId: "hMhrGFY9VJI",
    title: "Our Garden of Eden (2001) – Otamatea Eco Village Documentary 🌱 Sustainable Living in New Zealand",
    credit: "hithertoexisting",
    kind: "documentary"
  },
  "otepic": {
    youtubeId: "BrUy4-JEKoA",
    title: "OTEPIC KENYA PROJECT IMPROVING THE  COMMUNITY LIVES",
    credit: "Philip Munyasia",
    kind: "explanation"
  },
  "our-ecovillage": {
    youtubeId: "IXVLNUHqjeA",
    title: "Creating the Impossible -  O.U.R. Ecovillage",
    credit: "peakmoment",
    kind: "explanation"
  },
  "overdrevet": {
    youtubeId: "WPSUpFdirv0",
    title: "Senior i Overdrevet",
    credit: "Poul Tang",
    kind: "explanation"
  },
  "pachamama": {
    youtubeId: "zJEUx2B651A",
    title: "Everyday life in Pachamama by work exchanger",
    credit: "Bell Julia",
    kind: "explanation"
  },

  "penalolen": {
    youtubeId: "WxZS2m1GjlA",
    title: "Goplaceit On Tour: Comunidad Ecológica, Peñalolén.",
    credit: "Goplaceit (Goplaceit.com)",
    kind: "tour"
  },
  "pinakarri": {
    youtubeId: "WMGPGS0cwp0",
    title: "The Inland Sea ep. 12 | Pinakarri housing co-op",
    credit: "TheInlandSea",
    kind: "explanation"
  },
  "piracanga": {
    youtubeId: "-fLvT_amqfQ",
    title: "Conheça Unah Piracanga e a Ecovila Piracanga",
    credit: "Unah Piracanga",
    kind: "official"
  },
  "pleasant-hill-shaker": {
    youtubeId: "4iGamStAHdI",
    title: "Driving Through Shaker Village, Kentucky in 4K 🚗 | Scenic Historic Tour of Pleasant Hill",
    credit: "OCV Travel",
    kind: "tour"
  },

  "pun-pun": {
    youtubeId: "E8h4xNBadE8",
    title: "Eat Well Live Well Course at Pun Pun Center for Self Reliance, Chiangmai Thailand",
    credit: "Down to Earth Thailand - Pimjai Doungnate",
    kind: "explanation"
  },
  "punta-laguna": {
    youtubeId: "1dm1iULufm4",
    title: "Otoch Ma’Ax Yetel Kooh",
    credit: "Fernando Seriñá Garza",
    kind: "explanation"
  },
  "punta-mona": {
    youtubeId: "sao7spQUGRM",
    title: "Punta Mona Permaculture Farm Tour - May 2020",
    credit: "Spencer White Farmed & Foraged Films",
    kind: "tour"
  },
  "quail-springs": {
    youtubeId: "wrO6nB_az1E",
    title: "Quail Springs Permaculture: Seeds for the Next Generation",
    credit: "Quail Springs",
    kind: "official"
  },
  "rajneeshpuram": {
    youtubeId: "rzsulk5AaMg",
    title: "Revisiting Rajneeshpuram Part 4: Tour with Gaylord, Second Half",
    credit: "balecub",
    kind: "tour"
  },
  "rancho-la-salud": {
    youtubeId: "HOZuxzZezCk",
    title: "Rancho La Salud Village",
    credit: "Jesús Villaseñor Tenorio",
    kind: "explanation"
  },
  "rancho-mastatal": {
    youtubeId: "mqrI-tBB9eI",
    title: "A spectacular permaculture food forest tour in Costa Rica’s Rancho Mastatal",
    credit: "#Andrethefarmer",
    kind: "tour"
  },  "riverside": {
    youtubeId: "g0JQHUJt5jU",
    title: "One Day at Riverside",
    credit: "Frank - South Island Stories",
    kind: "explanation"
  },

  "rodnoe": {
    youtubeId: "9XtRYmu2otA",
    title: "Kin's domains of the Earth series. Eco-village Rodnoe. Film 1.",
    credit: "Yuri Smirnov",
    kind: "documentary"
  },
  "rosewind": {
    youtubeId: "WfaUPXYF3P0",
    title: "Geodesic dome home, Rosewind community, Port Townsend, WA",
    credit: "Jill Buhler",
    kind: "explanation"
  },
  "sabbathday-lake": {
    youtubeId: "XVzuShZCcSY",
    title: "The Shakers of Sabbathday Lake Shaker Village",
    credit: "Chilton Furniture",
    kind: "explanation"
  },
  "sadhana-forest": {
    youtubeId: "PddYhff8be8",
    title: "Sadhana Forest - A Documentary on Sadhana Forest in Auroville, India",
    credit: "Smriti Thakur",
    kind: "documentary"
  },

  "san-jose-de-la-zorra": {
    youtubeId: "0EQ7oGpkdrg",
    title: "DESDE SAN JOSÉ DE LA ZORRA (16 min. / 2007 / México)",
    credit: "TerraNostraFilms",
    kind: "explanation"
  },
  "sandhill": {
    youtubeId: "bef5oXB7GVI",
    title: "Food Forest Tour at Sandhill Farm: A Bird's Eye View",
    credit: "Pete Kanaris GreenDreamsTV",
    kind: "tour"
  },

  "schweibenalp": {
    youtubeId: "WTuPiOJEg7M",
    title: "Alpine Permaculture   ( Schweibenalp, Switzerland )",
    credit: "Vital Fair Living",
    kind: "explanation"
  },
  "sekem": {
    youtubeId: "8CHsPjwFQGY",
    title: "SEKEM · EcoRegió Tour 2023 CAP 1",
    credit: "Oriol Costa Lechuga",
    kind: "tour"
  },
  "seongmisan": {
    youtubeId: "bi9eJ1_Vs4s",
    title: "[tbsTV] tbs 창립기념리포트 '성미산 마을'",
    credit: "TBS 시민의방송",
    kind: "explanation"
  },
  "shannon-farm": {
    youtubeId: "Tj9gpB--esw",
    title: "Virtual Tour of Sandhill Farm (MO, USA), Shannon Farm (VA, USA) & Dunmire Hollow Community (TN, USA)",
    credit: "Foundation for Intentional Community",
    kind: "tour"
  },
  "shared-harvest": {
    youtubeId: "twvS4fyu-kQ",
    title: "Shared Harvest- More Than a Garden",
    credit: "Shared Harvest Community Garden",
    kind: "official"
  },
  "sieben-linden": {
    youtubeId: "Te-PsBoYvVw",
    title: "Nachhaltigkeit & Hausbau: Jürgens selbstgebautes Holzhaus im Ökodorf Sieben Linden | ARD Room Tour",
    credit: "ARD Room Tour",
    kind: "tour"
  },
  "sierra-gorda": {
    youtubeId: "ePDKsOQG78M",
    title: "Grupo Ecológico Sierra Gorda - Nikon & Waterbear",
    credit: "Grupo Ecologico Sierra Gorda",
    kind: "official"
  },
  "sirius": {
    youtubeId: "PenABn54zkM",
    title: "Sirius Introduction Tour by Bruce",
    credit: "benoitleblanc1973",
    kind: "tour"
  },
  "solheimar": {
    youtubeId: "nxjpPgR770I",
    title: "Iceland Walking Tour - Sólheimar [4K]",
    credit: "IcelandHotSpots",
    kind: "tour"
  },
  "songaia": {
    youtubeId: "Dcwy5QqdmTU",
    title: "Songaia Community Tour",
    credit: "kategirl76",
    kind: "tour"
  },
  "songhai": {
    youtubeId: "UstebJOsq00",
    title: "Songhai Tour",
    credit: "Denise Hassinger",
    kind: "tour"
  },
  "source-family": {
    youtubeId: "O3gxf7IzRxM",
    title: "the source family/ya ho wha13 - breathe hawaii film 1974",
    credit: "puresandoz 25",
    kind: "documentary"
  },
  "spreefeld": {
    youtubeId: "1gqZH0PbajQ",
    title: "Spreefeld | Berlin",
    credit: "Atlas of Post Carbon Architecture",
    kind: "explanation"
  },
  "st-jude": {
    youtubeId: "FcbOXPP2XkI",
    title: "Welcome to St. Jude Family Projects",
    credit: "Alongside Hope",
    kind: "explanation"
  },
  "suderbyn": {
    youtubeId: "C9ZCopmvJOU",
    title: "Guided Tour Suderbyn Ecovillage!",
    credit: "Yanuar Pahlevi",
    kind: "tour"
  },
  "sunrise-ranch": {
    youtubeId: "tSTJgxl0-zs",
    title: "Welcome to Sunrise Ranch",
    credit: "Sunrise Ranch",
    kind: "official"
  },
  "sunseed": {
    youtubeId: "xjFdEHFIdDM",
    title: "Sunseed Desert Technology - A path towards sustainability",
    credit: "The Great Relation",
    kind: "explanation"
  },
  "sunshine-ecovillage": {
    youtubeId: "qsa-lcFTNis",
    title: "Sunshine Ecovillage ，la ville de Hangzhou",
    credit: "Eddy WANG",
    kind: "explanation"
  },

  "svanholm": {
    youtubeId: "exJjVokOJ9s",
    title: "Svanholm storkollektiv, hvad nu? Film fra 2001.",
    credit: "BudowskiFilm",
    kind: "documentary"
  },
  "tamarindos": {
    youtubeId: "YVBMqacilhE",
    title: "EcoClub Tamarindos HD",
    credit: "EcoAldea Tamarindos",
    kind: "official"
  },
  "tamera": {
    youtubeId: "e61LYdlKSic",
    title: "30 Years Tamera - Community, the Adventure of our Times – Gemeinschaft, das Abenteuer unserer Zeit",
    credit: "Tamera - Healing Biotope 1",
    kind: "documentary"
  },
  "taomi": {
    youtubeId: "4ibwUUjDBsA",
    title: "Morning walking in Taomi Ecovillage, central TAIWAN",
    credit: "AJ life",
    kind: "explanation"
  },
  "tempelhof": {
    youtubeId: "wGFUwMhK1U8",
    title: "Schloss Tempelhof Gemeinschaft in Deutschland, BW",
    credit: "Ecovillage Finder",
    kind: "explanation"
  },
  "teopantli-kalpulli": {
    youtubeId: "g8OFK4Gbh_I",
    title: "Teopantli Kalpulli",
    credit: "The Esperanza Project",
    kind: "explanation"
  },
  "the-farm": {
    youtubeId: "XiHuTgN2Jrk",
    title: "THE FARM Intentional Community TOUR in 4K | Summertown, TN",
    credit: "aPlantBasedDiet.org",
    kind: "tour"
  },
  "tiberkul": {
    youtubeId: "0AkL_rSlEWs",
    title: "An Autumn Walk in the Abode of Dawn (Community of Vissarion) - Part I",
    credit: "Bogdan Tzvetkov",
    kind: "tour"
  },
  "tierra-nueva": {
    youtubeId: "9vPu9LbsiIU",
    title: "Virtual Tour: Tierra Nueva Cohousing, Milagro Cohousing and Burns Village & Farm – in USA",
    credit: "Foundation for Intentional Community",
    kind: "tour"
  },
  "tinkers-bubble": {
    youtubeId: "FmjsuPCjskc",
    title: "Tinkers Bubble Documentary (2015)",
    credit: "Harvey Quirke",
    kind: "documentary"
  },
  "tlholego": {
    youtubeId: "A0oxe9aTyM0",
    title: "Tlholego Ecovillage, Holistic Resource Management Capacity Building Workshop",
    credit: "Paul Cohen",
    kind: "explanation"
  },
  "tonndorf": {
    youtubeId: "UfY-Eur2Pcg",
    title: "Biohonig-Herstellung hautnah erleben - Honigschleuderfest auf Schloss Tonndorf",
    credit: "schlossimkerei",
    kind: "official"
  },
  "torri-superiore": {
    youtubeId: "zi4_nlh6G4c",
    title: "Torri Superiore Casa Vacanze Sostenibili",
    credit: "Ecovillaggio Torri Superiore",
    kind: "official"
  },
  "tosepan": {
    youtubeId: "OpNIfrP1_Lk",
    title: "Video Institucional de la Cooperativa Tosepan Titataniske",
    credit: "TosepanTitataniske",
    kind: "official"
  },

  "tui": {
    youtubeId: "wKbHv6RQ3e8",
    title: "Tui Community",
    credit: "Tui Balms",
    kind: "official"
  },
  "tuntable-falls": {
    youtubeId: "1jlil6wi8yk",
    title: "Tuntable Falls Community 35th Birthday, Nimbin NSW.",
    credit: "Peter Wise",
    kind: "official"
  },
  "twin-oaks": {
    youtubeId: "Pxjrwvfes_s",
    title: "Review of Twin Oaks Community after my tour!",
    credit: "April Poland",
    kind: "tour"
  },
  "two-echo": {
    youtubeId: "6EAXGbUQoaM",
    title: "Two Echo Cohousing in Brunswick",
    credit: "Bangor Daily News",
    kind: "explanation"
  },
  "u-yits-kaan": {
    youtubeId: "Ceu6za43Oqc",
    title: "Escuela U Yits Ka'an - Documental",
    credit: "CLPA UADY",
    kind: "documentary"
  },
  "ufa-fabrik": {
    youtubeId: "bBfH739Ofi0",
    title: "Culture, Community & Sustainability: A Tour of the ufaFabrik | Urban Eco-Village in Berlin, Germany",
    credit: "Rides and Strides",
    kind: "tour"
  },
  "ulpotha": {
    youtubeId: "86NQAj1zmrs",
    title: "A Day At Ulpotha",
    credit: "Ulpotha Yoga & Ayurveda Retreat",
    kind: "official"
  },
  "umoja": {
    youtubeId: "69yI0cDygv0",
    title: "African History Class: Umoja Uaso Women’s village in Kenya",
    credit: "3FM 92.7",
    kind: "explanation"
  },

  "urupia": {
    youtubeId: "rRKWKUuFgvo",
    title: "Urupia: La Comune Libertaria",
    credit: "Viaggiare con Lentezza",
    kind: "explanation"
  },
  "valdepielagos": {
    youtubeId: "ODCLQA9YBO8",
    title: "How life in VALDEPIÉLAGOS ECOHOUSING looks like",
    credit: "Asociación Cultural Sol y Tierra",
    kind: "explanation"
  },
  "vashon": {
    youtubeId: "Q62cihY2koE",
    title: "Celebrating 30 Years of Vashon Cohousing",
    credit: "James Schaberg",
    kind: "explanation"
  },
  "vedrussiya": {
    youtubeId: "f1ok4rSCbZg",
    title: "Eco-settlement of Kin's domains Vedrussiya in 2016",
    credit: "Mystery of Sacred (Vedic) Russia",
    kind: "explanation"
  },
  "via-organica": {
    youtubeId: "ML7CTO02AmA",
    title: "Tour Vía Orgánica",
    credit: "SACRA mx",
    kind: "tour"
  },
  "vicente-guerrero": {
    youtubeId: "fZ2AtIAXOU0",
    title: "Visita Vermicultura del Grupo Vicente Guerrero",
    credit: "Compumaxx Studios",
    kind: "explanation"
  },
  "villa-locomuna": {
    youtubeId: "v18dnrX2DxA",
    title: "Me:Fragementa - Präsentation 3 - In der Villa Locomuna",
    credit: "Restless Wheels Syndrome",
    kind: "explanation"
  },
  "village-homes": {
    youtubeId: "NJcftLoGtXw",
    title: "Village Homes: A Radical Plan",
    credit: "UC Davis Design",
    kind: "documentary"
  },
  "vrijburcht": {
    youtubeId: "vyGd7VLkma8",
    title: "Fotoboek 2012 Vrijburcht",
    credit: "Jaap Luif",
    kind: "explanation"
  },

    "whole-village": {
    youtubeId: "SwtUCRnlS0s",
    title: "Virtual Tour: The Farm Community, Whole Village Ecovillage, and GaiaYoga Gardens",
    credit: "Foundation for Intentional Community",
    kind: "tour"
  },
  "windsong": {
    youtubeId: "sMc-HR33kMQ",
    title: "WindSong Cohousing Community",
    credit: "WindSong Cohousing",
    kind: "official"
  },
  "winslow-cohousing": {
    youtubeId: "WZVn8xmYmOA",
    title: "Gingerbread Winslow Cohousing Tour",
    credit: "Leif Utne",
    kind: "tour"
  },
  "wongsanit": {
    youtubeId: "N60UDNuExJ8",
    title: "Wongsanit Ashram (Nakhon Nayok, Thailand)",
    credit: "Life Journey",
    kind: "explanation"
  },
  "yarrow": {
    youtubeId: "BaOh8CssjvM",
    title: "YARROW ECO-VILLAGE",
    credit: "Sustainability Television",
    kind: "explanation"
  },
  "yomol-atel": {
    youtubeId: "NKFKblufXyU",
    title: "Fiesta de San Ignacio at Yomol A’tel:  leading Indigenous Cooperative in Chiapas Mexico",
    credit: "Francesco Collaborative",
    kind: "explanation"
  },
  "yucun": {
    youtubeId: "OaGACNwV8Ms",
    title: "Turning green into gold: Yucun village's emergence as a popular tourist attraction",
    credit: "CGTN Africa",
    kind: "explanation"
  },

  "zajezova": {
    youtubeId: "9GdoNk_8BHc",
    title: "At home in Nature - Sekier, Zaježová",
    credit: "Falusi Fortélyok Iskolája",
    kind: "explanation"
  },
  "zegg": {
    youtubeId: "HJVfxVvOMXQ",
    title: "ZEGG – Geländerundgang (2007)",
    credit: "ZEGG Gemeinschaft und Bildungszentrum",
    kind: "tour"
  },
  "zoar": {
    youtubeId: "V76qxwetW9g",
    title: "Zoar Virtual Tour Part 3",
    credit: "Historic Zoar Village",
    kind: "tour"
  }
};

export function filmFor(slug: string): CommunityFilm | undefined {
  return filmsBySlug[slug];
}
