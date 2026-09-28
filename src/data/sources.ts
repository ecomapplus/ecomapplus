/** Published pages this atlas was checked against. Official sites live on each
 * Community.website; this file adds encyclopedias, directories, museums, and reporting.
 * Figures drift. Confirm with the community before you travel.
 */

export type SourceKind =
  | "official"
  | "wikipedia"
  | "gen"
  | "fic"
  | "news"
  | "museum"
  | "archive"
  | "org";

export type Source = {
  title: string;
  url: string;
  kind: SourceKind;
  note?: string;
};

export const sourceKindLabels: Record<SourceKind, string> = {
  official: "Official site",
  wikipedia: "Encyclopedia",
  gen: "Directory",
  fic: "Directory",
  news: "Reporting",
  museum: "Museum / historic site",
  archive: "Archive",
  org: "Organization"
};

const wikiBySlug: Record<string, { title: string; url: string }> = {
  "acorn": { title: "Acorn Community", url: "https://en.wikipedia.org/wiki/Acorn_Community" },
  "ananda-village": { title: "Ananda Village", url: "https://en.wikipedia.org/wiki/Ananda_Village" },
  "anandwan": { title: "Anandwan", url: "https://en.wikipedia.org/wiki/Anandwan" },
  "arcosanti": { title: "Arcosanti", url: "https://en.wikipedia.org/wiki/Arcosanti" },
  "atarashiki-mura": { title: "Atarashiki-mura", url: "https://en.wikipedia.org/wiki/Atarashiki-mura" },
  "auroville": { title: "Auroville", url: "https://en.wikipedia.org/wiki/Auroville" },
  "awra-amba": { title: "Awra Amba", url: "https://en.wikipedia.org/wiki/Awra_Amba" },
  "barefoot-college": { title: "Barefoot College", url: "https://en.wikipedia.org/wiki/Barefoot_College" },
  "boabeng-fiema": { title: "Boabeng-Fiema Monkey Sanctuary", url: "https://en.wikipedia.org/wiki/Boabeng-Fiema_Monkey_Sanctuary" },
  "breitenbush": { title: "Breitenbush, Oregon", url: "https://en.wikipedia.org/wiki/Breitenbush,_Oregon" },
  "bosque-la-primavera": { title: "Bosque de la Primavera", url: "https://en.wikipedia.org/wiki/Bosque_de_la_Primavera" },
  "botton": { title: "Botton village", url: "https://en.wikipedia.org/wiki/Botton,_North_Yorkshire" },
  "brithdir-mawr": { title: "Brithdir Mawr", url: "https://en.wikipedia.org/wiki/Brithdir_Mawr" },
  "brook-farm": { title: "Brook Farm", url: "https://en.wikipedia.org/wiki/Brook_Farm" },
  "cabo-pulmo": { title: "Cabo Pulmo National Park", url: "https://en.wikipedia.org/wiki/Cabo_Pulmo_National_Park" },
  "camphill-copake": { title: "Camphill movement", url: "https://en.wikipedia.org/wiki/Camphill_movement" },
  "camphill-minnesota": { title: "Camphill movement", url: "https://en.wikipedia.org/wiki/Camphill_movement" },
  "camphill-ontario": { title: "Camphill movement", url: "https://en.wikipedia.org/wiki/Camphill_movement" },
  "newton-dee": { title: "Camphill movement", url: "https://en.wikipedia.org/wiki/Camphill_movement" },
  overdrevet: { title: "Overdrevet (Danish Wikipedia)", url: "https://da.wikipedia.org/wiki/Overdrevet" },
  "celo": { title: "Celo Community", url: "https://en.wikipedia.org/wiki/Celo_Community" },
  "cloughjordan": { title: "Cloughjordan Ecovillage", url: "https://en.wikipedia.org/wiki/Cloughjordan_Ecovillage" },
  "comunidad-del-sur": { title: "Comunidad del Sur", url: "https://en.wikipedia.org/wiki/Comunidad_del_Sur" },
  "crystal-waters": { title: "Crystal Waters", url: "https://en.wikipedia.org/wiki/Crystal_Waters,_Queensland" },
  "currumbin": { title: "Currumbin Ecovillage", url: "https://en.wikipedia.org/wiki/Currumbin_Ecovillage" },
  "damanhur": { title: "Federation of Damanhur", url: "https://en.wikipedia.org/wiki/Federation_of_Damanhur" },
  "dancing-rabbit": { title: "Dancing Rabbit Ecovillage", url: "https://en.wikipedia.org/wiki/Dancing_Rabbit_Ecovillage" },
  "drop-city": { title: "Drop City", url: "https://en.wikipedia.org/wiki/Drop_City" },
  "earthaven": { title: "Earthaven Ecovillage", url: "https://en.wikipedia.org/wiki/Earthaven_Ecovillage" },
  "east-wind": { title: "East Wind Community", url: "https://en.wikipedia.org/wiki/East_Wind_Community" },
  "finca-bellavista": { title: "Finca Bellavista", url: "https://en.wikipedia.org/wiki/Finca_Bellavista" },
  "findhorn": { title: "Findhorn Foundation", url: "https://en.wikipedia.org/wiki/Findhorn_Foundation" },
  "gaviotas": { title: "Gaviotas", url: "https://en.wikipedia.org/wiki/Gaviotas" },
  "gk-enchanted-farm": { title: "Gawad Kalinga", url: "https://en.wikipedia.org/wiki/Gawad_Kalinga" },
  "hancock-shaker": { title: "Hancock Shaker Village", url: "https://en.wikipedia.org/wiki/Hancock_Shaker_Village" },
  "heathcote": { title: "Heathcote Community", url: "https://en.wikipedia.org/wiki/Heathcote_Community" },
  "huehuecoyotl": { title: "Alberto Ruz Buenfil (Huehuecoyotl founder)", url: "https://en.wikipedia.org/wiki/Alberto_Ruz_Buenfil" },
  "kibbutz-lotan": { title: "Kibbutz Lotan", url: "https://en.wikipedia.org/wiki/Lotan,_Israel" },
  "kibbutz-ketura": { title: "Ketura, Israel", url: "https://en.wikipedia.org/wiki/Ketura,_Israel" },
  "kimberton-hills": { title: "Camphill movement", url: "https://en.wikipedia.org/wiki/Camphill_movement" },
  "koinonia": { title: "Koinonia Farm", url: "https://en.wikipedia.org/wiki/Koinonia_Farm" },
  "krishna-valley": { title: "Krishna Valley", url: "https://en.wikipedia.org/wiki/Krishna_Valley" },
  "the-farm": { title: "The Farm (Tennessee)", url: "https://en.wikipedia.org/wiki/The_Farm_(Tennessee)" },
  solheimar: { title: "Sólheimar", url: "https://en.wikipedia.org/wiki/S%C3%B3lheimar" },
  "ecovillage-ithaca": { title: "EcoVillage at Ithaca", url: "https://en.wikipedia.org/wiki/EcoVillage_at_Ithaca" },
  "los-angeles-eco-village": { title: "Los Angeles Eco-Village", url: "https://en.wikipedia.org/wiki/Los_Angeles_Eco-Village" },
  "village-homes": { title: "Village Homes", url: "https://en.wikipedia.org/wiki/Village_Homes" },
  "new-harmony": { title: "New Harmony, Indiana", url: "https://en.wikipedia.org/wiki/New_Harmony,_Indiana" },
  "oneida-community": { title: "Oneida Community", url: "https://en.wikipedia.org/wiki/Oneida_Community" },
  "new-lanark": { title: "New Lanark", url: "https://en.wikipedia.org/wiki/New_Lanark" },
  "amana-colonies": { title: "Amana Colonies", url: "https://en.wikipedia.org/wiki/Amana_Colonies" },
  "pleasant-hill-shaker": { title: "Pleasant Hill, Kentucky", url: "https://en.wikipedia.org/wiki/Pleasant_Hill,_Kentucky" },
  rajneeshpuram: { title: "Rajneeshpuram", url: "https://en.wikipedia.org/wiki/Rajneeshpuram" },
  "llano-del-rio": { title: "Llano del Rio", url: "https://en.wikipedia.org/wiki/Llano_del_Rio" },
  sekem: { title: "SEKEM", url: "https://en.wikipedia.org/wiki/SEKEM" },
  "eva-lanxmeer": { title: "Lanxmeer", url: "https://en.wikipedia.org/wiki/Lanxmeer" },
  "neot-semadar": { title: "Neot Smadar", url: "https://en.wikipedia.org/wiki/Neot_Smadar" },
  hockerton: { title: "Hockerton Housing Project", url: "https://en.wikipedia.org/wiki/Hockerton_Housing_Project" },
  lammas: { title: "Lammas Ecovillage", url: "https://en.wikipedia.org/wiki/Lammas_(ecovillage)" },
  "greater-world": { title: "Earthship", url: "https://en.wikipedia.org/wiki/Earthship" },
  zoar: { title: "Zoar, Ohio", url: "https://en.wikipedia.org/wiki/Zoar,_Ohio" },
  lomaland: { title: "Lomaland", url: "https://en.wikipedia.org/wiki/Lomaland" },
  "familistere-guise": { title: "Familistère de Guise", url: "https://en.wikipedia.org/wiki/Familist%C3%A8re_de_Guise" },

  "living-energy-farm": { title: "Living Energy Farm", url: "https://en.wikipedia.org/wiki/Living_Energy_Farm" },
  "la-borie-noble": { title: "Community of the Ark", url: "https://en.wikipedia.org/wiki/Community_of_the_Ark" },
  "muir-commons": { title: "Muir Commons", url: "https://en.wikipedia.org/wiki/Muir_Commons" },
  "canon-frome": { title: "Canon Frome", url: "https://en.wikipedia.org/wiki/Canon_Frome" },
  hertha: { title: "Hertha Levefællesskab (Danish Wikipedia)", url: "https://da.wikipedia.org/wiki/Hertha_Levef%C3%A6llesskab" },
  "braziers-park": { title: "Braziers Park", url: "https://en.wikipedia.org/wiki/Braziers_Park" },
  christiania: { title: "Freetown Christiania", url: "https://en.wikipedia.org/wiki/Freetown_Christiania" },
  "kibbutz-samar": { title: "Samar, Israel", url: "https://en.wikipedia.org/wiki/Samar,_Israel" },
  "cobb-hill": { title: "Cobb Hill", url: "https://en.wikipedia.org/wiki/Cobb_Hill" },

  "can-masdeu": { title: "Can Masdeu", url: "https://en.wikipedia.org/wiki/Can_Masdeu" },

  "neve-shalom": { title: "Neve Shalom", url: "https://en.wikipedia.org/wiki/Neve_Shalom" },
  "den-selvforsynende": { title: "Den selvforsynende landsby (Danish Wikipedia)", url: "https://da.wikipedia.org/wiki/Den_selvforsynende_landsby" },
  "hidden-villa": { title: "Hidden Villa", url: "https://en.wikipedia.org/wiki/Hidden_Villa" },
  "shelburne-farms": { title: "Shelburne Farms", url: "https://en.wikipedia.org/wiki/Shelburne_Farms" },
  hawkwood: { title: "Hawkwood College", url: "https://en.wikipedia.org/wiki/Hawkwood_College" },
  yogaville: { title: "Yogaville", url: "https://en.wikipedia.org/wiki/Yogaville" },
  djanbung: { title: "Robyn Francis (Djanbung Gardens)", url: "https://en.wikipedia.org/wiki/Robyn_Francis" }
};

const ficBySlug: Record<string, string> = {
  acorn: "https://www.ic.org/directory/community/acorn-community/",
  "dancing-rabbit": "https://www.ic.org/directory/community/dancing-rabbit-ecovillage/",
  earthaven: "https://www.ic.org/directory/community/earthaven-ecovillage/",
  "east-wind": "https://www.ic.org/directory/community/east-wind-community/",
  heartwood: "https://www.ic.org/directory/community/heartwood-cohousing/",
  heathcote: "https://www.ic.org/directory/community/heathcote-community/",
  lama: "https://www.ic.org/directory/community/lama-foundation/",
  "los-angeles-eco-village": "https://www.ic.org/directory/community/los-angeles-eco-village/",
  "lost-valley": "https://www.ic.org/directory/community/lost-valley-education-and-event-center/",
  miccosukee: "https://www.ic.org/directory/community/miccosukee-land-cooperative/",
  oaec: "https://www.ic.org/directory/community/occidental-arts-and-ecology-center/",
  "our-ecovillage": "https://www.ic.org/directory/community/o-u-r-ecovillage/",
  "quail-springs": "https://www.ic.org/directory/community/quail-springs-permaculture/",
  sandhill: "https://www.ic.org/directory/community/sandhill-farm/",
  sekkan: "https://www.ic.org/directory/community/rancho-ecologico-sekkan/",
  "shannon-farm": "https://www.ic.org/directory/community/shannon-farm-community/",
  sirius: "https://www.ic.org/directory/community/sirius-community/",
  songaia: "https://www.ic.org/directory/community/songaia-cohousing-community/",
  "the-farm": "https://www.ic.org/directory/community/the-farm/",
  "the-vale": "https://www.ic.org/directory/community/the-vale/",
  "twin-oaks": "https://www.ic.org/directory/community/twin-oaks/",
  "village-homes": "https://www.ic.org/directory/community/village-homes/",
  "whole-village": "https://www.ic.org/directory/community/whole-village/",
  windsong: "https://www.ic.org/directory/community/windsong-cohousing/",
  "living-energy-farm": "https://www.ic.org/directory/community/living-energy-farm/",
  "kibbutz-ketura": "https://www.ic.org/directory/community/kibbutz-ketura/",
  breitenbush: "https://www.ic.org/directory/community/breitenbush-hot-springs/",
  "laurieston-hall": "https://www.ic.org/directory/community/laurieston-hall/",
  pinakarri: "https://www.ic.org/directory/community/pinakarri-community/",
  "tinkers-bubble": "https://www.ic.org/directory/community/tinkers-bubble/",
  "red-earth-farms": "https://www.ic.org/directory/community/red-earth-farms/",
  innisfree: "https://www.ic.org/directory/community/innisfree-village/",
  "cherry-hill": "https://www.ic.org/directory/community/cherry-hill-cohousing-formerly-pioneer-valley/",
  "cobb-hill": "https://www.ic.org/directory/community/cobb-hill/",

  "monkton-wyld": "https://www.ic.org/directory/community/monkton-wyld-court/",
  keveral: "https://www.ic.org/directory/community/keveral-farm/"
};

const extraBySlug: Record<string, Source[]> = {
  "awra-amba": [
    { kind: "official", title: "Awra Amba", url: "https://awraamba.net/" }
  ],
  "barefoot-college": [
    { kind: "official", title: "Barefoot College Tilonia", url: "https://www.barefootcollegetilonia.org/", note: "Founded 1972 by Bunker Roy." }
  ],
  "basaisa": [
    { kind: "org", title: "Ashoka: Salah Arafa / Basaisa", url: "https://www.ashoka.org/en/fellow/salah-arafa" }
  ],  "brook-farm": [
    { kind: "museum", title: "National Park Service: Brook Farm", url: "https://www.nps.gov/places/brook-farm.htm", note: "Founded 1841; closed 1847 after the Phalanstery fire." },
    { kind: "org", title: "Massachusetts Brook Farm brochure", url: "https://www.mass.gov/doc/brook-farm-brochure/download" }
  ],
  "cabo-pulmo": [
    { kind: "org", title: "Cabo Pulmo National Park context", url: "https://www.cabopulmo.com/", note: "No-take marine park decreed 5 June 1995; village families run dive shops." }
  ],
  "camphill-copake": [
    { kind: "org", title: "Camphill Association of North America: Copake", url: "https://camphill.org/communities/camphill-copake/", note: "About 250 people, including over 100 adults with developmental disabilities." }
  ],  "cedicam": [
    { kind: "org", title: "Goldman Prize: Jesús León Santos / CEDICAM", url: "https://www.goldmanprize.org/recipient/jesus-leon-santos/" }
  ],
  "celo": [
    { kind: "wikipedia", title: "Celo Community", url: "https://en.wikipedia.org/wiki/Celo_Community", note: "Arthur Morgan, 1937, Yancey County, North Carolina." }
  ],  "cloughjordan": [
    { kind: "official", title: "Cloughjordan Ecovillage (The Village)", url: "https://www.thevillage.ie/" }
  ],
  "comunidad-del-sur": [
    { kind: "wikipedia", title: "Comunidad del Sur", url: "https://en.wikipedia.org/wiki/Comunidad_del_Sur" }
  ],
  "damanhur": [
    { kind: "official", title: "Federation of Damanhur", url: "https://damanhur.org" }
  ],
  "dancing-rabbit": [
    { kind: "official", title: "Dancing Rabbit history", url: "https://www.dancingrabbit.org/about-dancing-rabbit-ecovillage/history/", note: "Group formed at Stanford in 1993; 280 acres purchased 1 October 1997." }
  ],
  "drop-city": [
    { kind: "wikipedia", title: "Drop City", url: "https://en.wikipedia.org/wiki/Drop_City", note: "Wikipedia infobox dates the art project to 1960; the Colorado land purchase and commune are 1965. Dissolved 1979." }
  ],
  "lost-valley": [
    { kind: "official", title: "About Lost Valley", url: "https://www.lostvalley.org/about", note: "87-acre teaching ecovillage, Dexter. Meadowsong. Founded 1989." }
  ],
  "earthaven": [
    { kind: "official", title: "Earthaven Ecovillage", url: "https://www.earthaven.org/" },
    { kind: "news", title: "North Carolina community uses teamwork as climate change solution", url: "https://www.npr.org/2025/06/10/nx-s1-5340713", note: "NPR Climate Solutions Week, 10 June 2025. Hurricane Helene. Hydro, backup solar, chainsaws and tractors, kitchens." }
  ],
  "eco-truly": [
    { kind: "gen", title: "GEN map: Eco Truly Park", url: "https://ecovillage.org/map/community/eco-truly-park-eco-village/" }
  ],
  "findhorn": [
    { kind: "wikipedia", title: "Findhorn Ecovillage", url: "https://en.wikipedia.org/wiki/Findhorn_Ecovillage" },
    { kind: "news", title: "GEN Europe, 2025: community ownership after the Foundation closed", url: "https://gen-europe.org/a-new-chapter-of-community-ownership-spirit-and-celebration-in-findhorn/", note: "Findhorn Foundation ceased operations in November 2023. Ecovillage Findhorn CBS completed first land purchases on 18 November 2024." },
    { kind: "org", title: "Ecovillage Findhorn Community Benefit Society", url: "https://www.ecovillagefindhorn.uk/" }
  ],  "gaviotas": [
    { kind: "wikipedia", title: "Gaviotas", url: "https://en.wikipedia.org/wiki/Gaviotas", note: "Paolo Lugari’s experiment in Vichada; no separate official English site." }
  ],
  "hancock-shaker": [
    { kind: "museum", title: "Hancock Shaker Village", url: "https://hancockshakervillage.org/", note: "Living Shaker community ended 1960; museum nonprofit since 1960–61." }
  ],
  "huehuecoyotl": [
    { kind: "official", title: "Huehuecoyotl ecovillage", url: "http://www.huehuecoyotl.net/", note: "Mexico’s first ecovillage; Alberto Ruz Buenfil died 2023." }
  ],  lammas: [
    { kind: "official", title: "Lammas Ecovillage", url: "https://lammas.org.uk/" },
    { kind: "org", title: "Lowimpact: One Planet Development and Lammas", url: "https://www.lowimpact.org/posts/wales-unique-one-planet-planning-policy-lammas-ecovillage/" }
  ],
  tempelhof: [
    { kind: "official", title: "Schloss Tempelhof", url: "https://www.schloss-tempelhof.de/" },
    { kind: "news", title: "ComResp, 2018: foundation owns the ground, eG holds a 99-year lease", url: "http://comresp.com/unity/2018/09/24/a-growing-community-in-southern-germany/" }
  ],
  govardhan: [
    { kind: "official", title: "Govardhan Ecovillage", url: "https://www.ecovillage.org.in/about-govardhan-ecovillage", note: "Land 2003; village named and scaled from 2010." }
  ],
  cambium: [
    { kind: "official", title: "Cambium · Leben in Gemeinschaft", url: "https://www.cambium.at/en/" },
    { kind: "org", title: "HOUSEFUL: Cambium Community Center", url: "https://houseful.eu/demos/cambium-community-center/", note: "Rented 2017; bought May 2019 through a Vermögenspool of 250+ investors." }
  ],
  arterra: [
    { kind: "official", title: "Arterra Bizimodu", url: "https://arterrabizimodu.org/" },
    { kind: "org", title: "European Youth Portal: Arterra Bizimodu (ESC)", url: "https://youth.europa.eu/volunteering/organisation/50242_en" }
  ],
  meltemi: [
    { kind: "news", title: "Resilience: Meltemi, the jewel of the commons (2013)", url: "https://www.resilience.org/stories/2013-09-10/meltemi-the-jewel-of-the-commons/", note: "Written rules from the mid-1950s; occupation that became a four-generation commons." }
  ],  "pleasant-hill-shaker": [
    { kind: "museum", title: "Shaker Village of Pleasant Hill", url: "https://shakervillageky.org/", note: "Living covenant ended 1910; museum campus from 1961." }
  ],
  "amana-colonies": [
    { kind: "museum", title: "Amana Colonies Convention & Visitors Bureau", url: "https://amanacolonies.com/", note: "Communal Inspiration ended at the Great Change, 1932." }
  ],
  "new-lanark": [
    { kind: "museum", title: "New Lanark World Heritage Site", url: "https://www.newlanark.org/" }
  ],
  "familistere-guise": [
    { kind: "museum", title: "Familistère de Guise", url: "https://www.familistere.com/" }
  ],
  zoar: [
    { kind: "museum", title: "Ohio History Connection: Zoar Village", url: "https://www.ohiohistory.org/visit/browse-historical-sites/zoar-village/", note: "Society of Separatists divided property in 1898." }
  ],  hjortshoj: [
    { kind: "official", title: "Andelssamfundet i Hjortshøj", url: "https://www.andelssamfundet.dk/en" },
    { kind: "gen", title: "GEN map: AIH Andelssamfundet i Hjortshøj", url: "https://ecovillage.org/map/community/aih-andelssamfundet-i-hjortshoj/" },
    { kind: "org", title: "The Ecovillage Experience: Hjortshøj", url: "http://www.theecovillageexperience.net/?HjortshoJ", note: "1986 vision, 1992 first move-in, eight groups, ~300 people, 20 ha farm lease." }
  ],
  "neot-semadar": [
    { kind: "official", title: "Kibbutz Neot Semadar", url: "https://neot-semadar.com/en/" },
    { kind: "wikipedia", title: "Neot Smadar", url: "https://en.wikipedia.org/wiki/Neot_Smadar", note: "Founded 1989; 80 ha; CBS population 273 in 2024." },
    { kind: "news", title: "Times of Israel: UN Tourism Best Tourism Village 2025", url: "https://www.timesofisrael.com/liveblog_entry/kibbutz-neot-semadar-named-one-of-worlds-best-tourism-villages-by-un-tourism/" },
    { kind: "org", title: "Volunteer page (official)", url: "https://neot-semadar.com/en/school/a-meaningful-volunteering-experience-at-kibbutz-neot-semadar/" }
  ],
  "eva-lanxmeer": [
    { kind: "official", title: "EVA-Lanxmeer / lanxmeer.nl", url: "https://lanxmeer.nl/" },
    { kind: "wikipedia", title: "Lanxmeer", url: "https://en.wikipedia.org/wiki/Lanxmeer", note: "240 houses, 1994–2009, Marleen Kaptein, Culemborg." },
    { kind: "org", title: "Urban Green-Blue Grids: EVA-Lanxmeer living lab", url: "https://urbangreenbluegrids.com/projects/eva-lanxmeer-living-lab/" }
  ],
  earthsong: [
    { kind: "official", title: "Earthsong Eco-Neighbourhood", url: "https://www.earthsong.org.nz/" },
    { kind: "org", title: "World Habitat Awards: Earthsong", url: "https://world-habitat.org/awards/winners/earthsong-eco-neighbourhood/", note: "32 homes; construction 2000–2008; Cohousing New Zealand Ltd." },
    { kind: "org", title: "GENOA: Earthsong after 24 years (Robin Allison)", url: "https://genoaecovillage.org/ecovillage-talk-ep-10-earthsong/" }
  ],
  munksoegaard: [
    { kind: "official", title: "Munksøgård", url: "https://www.munksoegaard.dk/en/about.html", note: "100 row houses, ~225 people, five groups, mixed tenure." },
    { kind: "gen", title: "GEN map: Munksøgård", url: "https://ecovillage.org/map/community/munkesoegaard/" }
  ],
  hockerton: [
    { kind: "official", title: "Hockerton Housing Project", url: "https://www.hockertonhousingproject.org.uk/" },
    { kind: "wikipedia", title: "Hockerton Housing Project", url: "https://en.wikipedia.org/wiki/Hockerton_Housing_Project" },
    { kind: "org", title: "Saturday sustainable-living tours", url: "https://www.hockertonhousingproject.org.uk/visit/sustainable-living-tours/" }
  ],
  aldinga: [
    { kind: "official", title: "Aldinga Arts Ecovillage", url: "https://aldingaartsecovillage.com/" },
    { kind: "official", title: "About us (2021 village figures)", url: "https://aldingaartsecovillage.com/about-us/", note: "310 residents, 181 lots, 78% owner-occupied in the 2021 account." },
    { kind: "news", title: "The Fifth Estate: eco villages and cost of living (2022)", url: "https://thefifthestate.com.au/innovation/residential-2/a-better-way-of-doing-suburbs-how-eco-villages-can-help-the-cost-of-living/" }
  ],
  friland: [
    { kind: "official", title: "About Friland", url: "https://start.friland.org/about-friland/", note: "Foundation land, no mortgage, ~40 households, 75 adults and 40 children." },
    { kind: "news", title: "The Guardian, 2023: eco homes on Djursland", url: "https://www.theguardian.com/travel/2023/jun/26/eco-homes-and-a-michelin-green-star-sustainable-living-on-denmarks-djursland-peninsula" },
    { kind: "org", title: "Permateachers case study (10 ha, 105 people)", url: "https://permateachers.eu/case-study-friland-denmark" }
  ],
  tonndorf: [
    { kind: "official", title: "Schloss Tonndorf", url: "https://www.schloss-tonndorf.de/", note: "About 65 people, 15 ha, e.G. since 2005." },
    { kind: "org", title: "Thuringia: Tonndorf Castle", url: "https://www.thueringen-entdecken.de/en/w/opendata/poi/tonndorf-castle", note: "Genossenschaft auf Schloss Tonndorf e.G., August 2005." },
    { kind: "gen", title: "GEN: Schloss Tonndorf", url: "https://ecovillage.org/project/schloss-tonndorf/" }
  ],
  lilac: [
    { kind: "official", title: "LILAC", url: "https://www.lilac.coop/" },
    { kind: "news", title: "BBC, 2013: straw bale homes for LILAC", url: "https://www.bbc.com/news/uk-england-leeds-22625757" },
    { kind: "org", title: "Housing International: LILAC MHOS", url: "https://www.housinginternational.coop/resources/lilac-mutual-home-ownership-community-in-leeds-england/" },
    { kind: "fic", title: "FIC directory: LILAC", url: "https://www.ic.org/directory/community/lilac/" }
  ],
  "kibbutz-ketura": [
    { kind: "official", title: "Kibbutz Ketura", url: "https://www.ketura.org.il/en/" },
    { kind: "org", title: "Arava Institute: life on the kibbutz", url: "https://arava.org/academics/campus-life/life-on-the-kibbutz/", note: "About 180 members and candidates and more than 155 children in the Institute’s published figures." },
    { kind: "news", title: "Hadassah Magazine: Ketura’s first 50 years (2023)", url: "https://www.hadassahmagazine.org/2023/05/24/kibbutz-keturas-first-50-years/" }
  ],
  "old-hall": [
    { kind: "official", title: "Old Hall Community", url: "https://www.oldhall.org.uk/" },
    { kind: "news", title: "BBC, 2023: the Suffolk manor where 60 people live together", url: "https://www.bbc.com/news/uk-england-suffolk-64153693", note: "Former friary, about 65 acres, founded 1974." },
    { kind: "news", title: "The Guardian, 2024: fifty years of Old Hall", url: "https://www.theguardian.com/lifeandstyle/2024/feb/20/everybody-looks-after-each-other-fifty-years-of-the-commune-that-began-with-a-guardian-ad" },
    { kind: "org", title: "Diggers and Dreamers: Old Hall Community", url: "https://diggersanddreamers.org.uk/community/old-hall-community" }
  ],
  commonground: [
    { kind: "official", title: "Commonground", url: "https://www.common-ground.org.au/commonground", note: "95 acres near Seymour purchased 1984; venue and intentional community." },
    { kind: "official", title: "What the community is", url: "https://www.common-ground.org.au/what-is-it" }
  ],
  breitenbush: [
    { kind: "official", title: "Breitenbush Hot Springs", url: "https://breitenbush.com/" },
    { kind: "official", title: "About: worker-owned cooperative", url: "https://breitenbush.com/about-retired", note: "Land purchased 1985; cooperative corporation 1989; 154 acres." }
  ],
  gyurufu: [
    { kind: "official", title: "Gyűrűfű", url: "http://gyurufu.hu" },
    { kind: "gen", title: "GEN map: Gyürüfü Ecovillage", url: "https://ecovillage.org/map/community/gyurufu-ecovillage/" },
    { kind: "news", title: "Euronews, 2019: Hungary’s first eco-village", url: "https://www.euronews.com/2019/04/05/inside-hungary-s-first-eco-village-of-gyurufu", note: "About 175 ha in that account; guesthouse Lovastanya Vendégház." }
  ],

  "living-energy-farm": [
    { kind: "official", title: "Living Energy Farm", url: "https://livingenergyfarm.org/", note: "Off-grid farm and appropriate-technology centre, Louisa County, Virginia." },
    { kind: "official", title: "Living and working with us", url: "https://livingenergyfarm.org/living-and-working-with-us-at-living-energy-farm/", note: "Residential volunteers two weeks to three months." }
  ],
  "ecodorp-boekel": [
    { kind: "official", title: "Ecodorp Boekel", url: "https://www.ecodorpboekel.nl/", note: "36 climate-positive rental homes. VrijCoop finance." },
    { kind: "gen", title: "GEN Europe: Boekel named most sustainable organisation in the Netherlands", url: "https://gen-europe.org/boekel-ecovillage-awarded-most-sustainable-organisation-in-the-netherlands/" },
    { kind: "org", title: "Collective ownership case: Ecodorp Boekel", url: "https://collectiefeigendom.nl/en/housing/ecodorp-boekel" }
  ],
  "la-borie-noble": [
    { kind: "official", title: "Association of Friends of Lanza del Vasto", url: "https://www.lanzadelvasto.com/en/" },
    { kind: "archive", title: "Mark Shepard: Island of Peace (1979 visit)", url: "https://www.markshep.com/peace/Ark.html", note: "Companions bought mountain land and rebuilt La Borie Noble; peak household of record over 100." }
  ],
  "tuntable-falls": [
    { kind: "official", title: "Co-ordination Co-operative: about", url: "https://coco.org.au/coordination-cooperative/about/", note: "About 1,700 acres in common, about 280 shareholders, about 120 resident adult shareholders." },
    { kind: "wikipedia", title: "Rural Landsharing Communities", url: "https://en.wikipedia.org/wiki/Rural_Landsharing_Communities", note: "Tuntable Falls Co-ordination Co-operative as the first of the Nimbin multiple occupancies after Aquarius 1973." }
  ],
  schweibenalp: [
    { kind: "official", title: "Zentrum der Einheit Schweibenalp", url: "https://schweibenalp.ch/" },
    { kind: "org", title: "Alpine Permaculture Schweibenalp", url: "https://www.alpine-permakultur.ch/?lang=en", note: "Largest alpine permaculture project in Switzerland of that account; terraces at 1,100 m." }
  ],
  matavenero: [
    { kind: "wikipedia", title: "Matavenero (German Wikipedia)", url: "https://de.wikipedia.org/wiki/Matavenero" },
    { kind: "news", title: "National Geographic, 2015: Matavenero", url: "https://www.nationalgeographic.com/photography/article/tired-of-the-bustle-of-modern-life-virtually-visit-this-eco-village", note: "Kevin Faingnaert photographs. Uli named as a 1989 founder. Geodesic hall." }
  ],
  jahnishausen: [
    { kind: "official", title: "Lebenstraum Gemeinschaft Jahnishausen", url: "https://ltgj.de/", note: "Seven women bought the Rittergut in 2001. Gut Jahnishausen eG. About 50 people in 2025 community figures." },
    { kind: "gen", title: "GEN Deutschland: Lebenstraum Gemeinschaft Jahnishausen", url: "https://gen-deutschland.de/projekt/lebenstraum-gemeinschaft-jahnishausen/", note: "34 adults and 9 children in that listing." }
  ],
  biovilla: [
    { kind: "official", title: "Biovilla", url: "https://biovilla.org/" },
    { kind: "org", title: "Goparity: Biovilla is growing", url: "https://goparity.com/project/biovilla-is-growing-175", note: "Eleven members and eight employees; 55 ha in Arrábida Natural Park." }
  ],
  "karise-permatopia": [
    { kind: "official", title: "Karise Permatopia (English)", url: "https://permatopia.dk/english/", note: "90 houses, 29.2 ha, 141 adults and about 90 children, KP-Ejer / KP-Andel / KP-Almen / KP-amba." },
    { kind: "org", title: "Euroheat & Power: Permatopia geothermal village", url: "https://www.euroheat.org/dhc/knowledge-hub/eco-village-permatopia-rolling-out-a-sustainable-future" }
  ],
  "laurieston-hall": [
    { kind: "official", title: "Laurieston Hall", url: "https://www.lauriestonhall.org.uk/" },
    { kind: "org", title: "UK Co-op directory", url: "https://www.uk.coop/directory/laurieston-hall-housing-co-operative", note: "About 18–22 adults; housing co-operative from 1987." },
    { kind: "org", title: "Diggers and Dreamers: Laurieston Hall", url: "https://www.diggersanddreamers.org.uk/communities/existing/laurieston-hall" }
  ],
  "ufa-fabrik": [
    { kind: "official", title: "ufaFabrik", url: "https://www.ufafabrik.de/en/" },
    { kind: "wikipedia", title: "ufaFabrik (German Wikipedia)", url: "https://de.wikipedia.org/wiki/UfaFabrik", note: "About 40 residents, ~200 workplaces, 18,566 m² former UFA lab, occupied June 1979." }
  ],
  tuggelite: [
    { kind: "org", title: "Ekoby.org: Tuggelite", url: "https://www.ekoby.org/cs1.html", note: "Sweden’s first completed eco-village; 16 households in five houses." },
    { kind: "org", title: "WWF: Karlstad Tuggelite eco-village", url: "https://wwf.panda.org/wwf_news/?204432/Karlstad-Tuggelite-eco-village" }
  ],
  pinakarri: [
    { kind: "official", title: "Pinakarri Community", url: "https://pinakarri.org.au/" },
    { kind: "news", title: "Fremantle Shipping News, 2025: Pinakarri", url: "https://fremantleshippingnews.com.au/2025/05/05/a-way-to-go-living-the-dream-in-intentional-communities/", note: "About 20 people in 12 houses, Hamilton Hill." }
  ],
  "muir-commons": [
    { kind: "official", title: "Muir Commons", url: "https://muircommons.org/", note: "26 homes; first new-construction cohousing in the United States, 1991." }
  ],
  urupia: [
    { kind: "official", title: "Comune Urupia", url: "https://urupia.wordpress.com/" },
    { kind: "news", title: "Altreconomia, 2015: twenty years of Urupia", url: "https://altreconomia.it/urupia-una-comune-libertaria-nel-salento/", note: "About 20 ha farmed; ~25 people a day including guests in that account." }
  ],
  "tinkers-bubble": [
    { kind: "official", title: "Tinkers Bubble", url: "https://tinkersbubble.org/" },
    { kind: "official", title: "Volunteering / joining", url: "https://tinkersbubble.org/Joining" },
    { kind: "org", title: "Landworkers’ Alliance, 2025: 31 years", url: "https://landworkersalliance.org.uk/celebrating-31-years-of-tinkers-bubble/" },
    { kind: "org", title: "Diggers and Dreamers: Tinkers Bubble", url: "https://diggersanddreamers.org.uk/community/tinkers-bubble" }
  ],

  hallingelille: [
    { kind: "official", title: "Økosamfundet Hallingelille", url: "https://www.hallingelille.dk/" }
  ],
  "red-earth-farms": [
    { kind: "official", title: "Red Earth Farms", url: "http://redearthfarms.org/" },
    { kind: "news", title: "Nation of Change, 2024: community land trust", url: "https://www.nationofchange.org/2024/06/27/red-earth-farms-is-proof-that-intentional-communities-can-succeed/", note: "76 acres, 99-year leases, seven households of record." }
  ],
  innisfree: [
    { kind: "official", title: "Innisfree Village", url: "https://www.innisfreevillage.org/", note: "501(c)(3) lifesharing farm, 550 acres, Crozet, Virginia, 1971." },
    { kind: "official", title: "Apply as a volunteer", url: "https://www.innisfreevillage.org/apply", note: "Year-long residential volunteer door." }
  ],
  "canon-frome": [
    { kind: "official", title: "Canon Frome Court", url: "https://www.canonfromecourt.org.uk/", note: "Windflower Housing Association, 999-year leases, 40-acre farm." },
    { kind: "org", title: "Diggers and Dreamers: Canon Frome Court", url: "https://diggersanddreamers.org.uk/community/canon-frome-court" },
    { kind: "official", title: "Volunteer here", url: "https://www.canonfromecourt.org.uk/volunteer-here/", note: "WWOOF-style farm stays. A week is not a lease." }
  ],

  "winslow-cohousing": [
    { kind: "official", title: "Winslow Cohousing", url: "https://winslowcohousing.org/", note: "30 homes on five acres, Bainbridge Island. First US cohousing built by the co-owners, 1992." },
    { kind: "org", title: "Cohousing Alliance: Winslow", url: "https://cohousingalliance.org/communities/winslow-cohousing/" }
  ],
  "cherry-hill": [
    { kind: "official", title: "Cherry Hill Cohousing", url: "https://web.cohousing.com/", note: "32 households, North Amherst. Formerly Pioneer Valley; renamed October 2022." }
  ],
  hertha: [
    { kind: "official", title: "Hertha Levefællesskab", url: "https://hertha.dk/", note: "Reverse-integration living community, Herskind, about 150 people." },
    { kind: "gen", title: "GEN: Hertha Levefællesskab", url: "https://ecovillage.org/map/community/hertha-levefaellesskab/", note: "Founded 1996; about 150 people including adults with developmental disabilities." }
  ],
  gastwerke: [
    { kind: "official", title: "gASTWERKe", url: "https://gastwerke.de/" },
    { kind: "org", title: "Zukunftskommunen: gASTWERKe Lebensgemeinschaft", url: "https://zukunftskommunen.de/kommunen/gastwerke-lebensgemeinschaft/", note: "About 5 ha on the Escherode forestry site from 2007; Bioland garden." },
    { kind: "gen", title: "GEN Deutschland: gASTWERKe portrait, 2022", url: "https://gen-deutschland.de/2022/04/04/gastwerke-ein-portrait-der-solidarischen-lebensgemeinschaft-bei-kassel/" }
  ],
  valdepielagos: [
    { kind: "official", title: "Ecoaldea Valdepiélagos", url: "https://www.ecoaldeavaldepielagos.org/", note: "Housing cooperative 1996; thirty bioclimatic houses from 2008." },
    { kind: "org", title: "Red Ibérica de Ecoaldeas: Valdepiélagos", url: "https://ecoaldeas.org/valdepielagos/" },
    { kind: "news", title: "El Mundo, 2019: an eco-village 50 km from Madrid", url: "https://planetainteligente.elmundo.es/2019/comprometidos/valdepielagos-una-ecoaldea-a-menos-de-50-km-de-madrid.html" }
  ],

  "braziers-park": [
    { kind: "official", title: "Braziers Park", url: "https://www.braziers.org.uk/", note: "Community and educational charity, Ipsden, Grade II* house, 1950." },
    { kind: "org", title: "Diggers and Dreamers: Braziers Community", url: "https://diggersanddreamers.org.uk/community/braziers-community", note: "Founded 1950; about 50 acres in that listing." }
  ],
  christiania: [
    { kind: "official", title: "Christiania", url: "https://www.christiania.org/" },
    { kind: "news", title: "Copenhagen Post, 2025: how the Freetown works", url: "https://cphpost.dk/2025-02-14/general/enter-christiania-how-the-freetown-works/" }
  ],
  "kibbutz-samar": [
    { kind: "official", title: "Kibbutz Samar", url: "https://kibbutz-samar.com/", note: "Collective kibbutz, 1976. Dates and dairy. The site has said ~60 families / ~350 people; CBS 2024 is 254." }
  ],
  nyland: [
    { kind: "official", title: "Nyland Cohousing", url: "https://www.nylandcohousing.org/", note: "42 homes, 135 residents, 36 acres, Lafayette, Colorado." },
    { kind: "org", title: "Cohousing Alliance: Nyland", url: "https://cohousingalliance.org/communities/nyland-cohousing/" }
  ],
  otamatea: [
    { kind: "official", title: "Otamatea Eco Village", url: "https://otamatea.info/" },
    { kind: "official", title: "Land / titles", url: "https://www.otamatea.org.nz/land/", note: "102 ha purchased 1997; 15 titles originally, ~72 ha common." },
    { kind: "org", title: "Housing Innovation Society: Otamatea", url: "https://thehousinginnovationsociety.com/directory-of-collective-housing/otamatea", note: "About 50 adults, ~20 dwellings; some lots later subdivided." }
  ],
  "fryers-forest": [
    { kind: "org", title: "Holmgren Design: Fryers Forest", url: "https://holmgren.com.au/fryers-forest/", note: "11 one-acre titles in 300 acres of common forest; lots 1998–2006." },
    { kind: "news", title: "ABC News, 2022: timber from the common forest", url: "https://www.abc.net.au/news/2022-08-10/eco-living-in-central-victoria-village-energy-efficient-houses/101318668" }
  ],

  "cobb-hill": [
    { kind: "official", title: "Cobb Hill CoHousing", url: "http://www.cobbhill.org/", note: "23 households, ~50 people, 270 acres, Hartland, Vermont." },
    { kind: "org", title: "NOFA Vermont: visiting Cobb Hill", url: "https://www.nofavt.org/node/11264", note: "Farms including Cedar Mountain; development rights sold in that account." }
  ],
  "la-borda": [
    { kind: "official", title: "La Borda", url: "https://www.laborda.coop/", note: "Housing cooperative, 28 dwellings, Can Batlló, 75-year grant of use." },
    { kind: "org", title: "Lacol: La Borda housing cooperative", url: "https://lacol.coop/en/projectes/la-borda/", note: "First transfer-of-use cooperative housing built on public land in Barcelona. Finished 2018." },
    { kind: "news", title: "ArchDaily: La Borda / Lacol", url: "https://www.archdaily.com/922184/la-borda-lacol" }
  ],

  "belfast-cohousing": [
    { kind: "org", title: "OPAL Architecture: Belfast Cohousing and Ecovillage", url: "https://www.opalarch.us/belfast-cohousing-and-ecovillage/", note: "42 acres; buildings clustered on about 6. Passive House-level cohousing. GO Logic." }
  ],
  "new-ground": [
    { kind: "org", title: "OWCH history / structure", url: "https://www.owch.org.uk/history/", note: "Company limited by guarantee; Housing for Women holds the freehold. 999-year head lease." },
    { kind: "news", title: "Guardian, 2023: the happy home shared by 26 women", url: "https://www.theguardian.com/lifeandstyle/2023/aug/24/we-have-brothers-sons-lovers-but-they-cant-live-here-the-happy-home-shared-by-26-women" },
    { kind: "org", title: "Diggers and Dreamers: New Ground", url: "https://diggersanddreamers.org.uk/community/new-ground-cohousing", note: "26 women aged 50+ in 25 flats, mixed tenure." },
    { kind: "org", title: "UK Cohousing Network: New Ground / OWCH", url: "https://cohousing.org.uk/case-study/new-ground-older-womens-cohousing-community-owch-high-barnet/", note: "17 leasehold, 8 social rent. Housing for Women is landlord for eight units." }
  ],
  "marmalade-lane": [
    { kind: "org", title: "TOWN: Marmalade Lane", url: "https://www.town.co.uk/marmalade-lane/", note: "42-home cohousing, Orchard Park. TOWN, Trivselhus, city-council land." },
    { kind: "org", title: "Cambridge K1", url: "http://www.cambridge-k1.co.uk/", note: "Original community site for the K1 / Cambridge Cohousing group." }
  ],

  navadarshanam: [
    { kind: "official", title: "Who We Are – Navadarshanam", url: "https://navadarshanam.org/who-we-are-2/", note: "Public charitable trust, 1990. No individual ownership. Board of trustees plus community consensus." },
    { kind: "news", title: "The Mooknayak, 2023: 100-acre food forest", url: "https://en.themooknayak.com/environment/navadarshanam-building-community-through-agro-ecology", note: "About 100 acres, Gumlapuram, Krishnagiri. Figures on the acres drift in other accounts." },
    { kind: "org", title: "Vikalp Sangam: Navadarshanam", url: "https://vikalpsangam.org/article/navadarshanam-an-example-of-true-development-right-outside-bengaluru/", note: "Small community, 50 km from Bengaluru, adjoining a reserve forest." }
  ],

  "can-masdeu": [
    { kind: "official", title: "Vall de Can Masdeu", url: "https://canmasdeu.net/", note: "Occupied winter 2001. Social centre, community gardens, community." },
    { kind: "wikipedia", title: "Can Masdeu", url: "https://en.wikipedia.org/wiki/Can_Masdeu", note: "Hospital-owned former leper hospital. Occupied 2001, eviction attempt 2002. 24 adults and 5 children in a 2018 count." }
  ],
  "columbia-ecovillage": [
    { kind: "official", title: "Columbia Ecovillage", url: "https://columbiaecovillage.org/", note: "37 condominiums, Cully, renovated 2008 from a 1970s complex." },
    { kind: "official", title: "FAQ", url: "https://columbiaecovillage.org/faq", note: "HOA dues $300–482. About two meals a week. No waiting list, an email list." },
    { kind: "org", title: "Cohousing Alliance: Columbia Ecovillage", url: "https://cohousingalliance.org/communities/columbia-ecovillage/", note: "Move-in 2009. 3.73 acres. Sociocracy. Guest rooms, 1912 farmhouse." }
  ],

  spreefeld: [
    { kind: "org", title: "Building Social Ecology: Spreefeld", url: "https://www.buildingsocialecology.org/projects/spreefeld-berlin/", note: "Spreefeld Berlin eG. 2012–14. 64 apartments, about 140 residents, cluster flats 600 and 800 m²." },
    { kind: "org", title: "ArchDaily: Coop Housing at River Spreefeld", url: "https://www.archdaily.com/587590/coop-housing-project-at-the-river-spreefeld-carpaneto-architekten-fatkoehl-architekten-bararchitekten", note: "Guest rooms, cluster apartments, three buildings on the Spree." }
  ],
  "cannock-mill": [
    { kind: "official", title: "Cannock Mill Cohousing", url: "https://cannockmillcohousing.co.uk/", note: "Passivhaus cohousing, Grade II mill as common house, Colchester." },
    { kind: "official", title: "Homes", url: "https://cannockmillcohousing.co.uk/homes/", note: "23 homes late 2019, three more flats 2023. First phase certified Passivhaus." },
    { kind: "org", title: "Diggers and Dreamers: Cannock Mill", url: "https://diggersanddreamers.org.uk/community/cannock-mill-cohousing", note: "35 people over 18. Seeking members. Company limited by guarantee of the founding story." },
    { kind: "org", title: "communityled.homes: Cannock Mill", url: "https://communityled.homes/project/cannock-mill/", note: "Company limited by guarantee 2009. 26 homes after the 2023 extension." }
  ],

  "threshold-centre": [
    { kind: "official", title: "Threshold Centre", url: "http://www.thresholdcentre.org.uk/", note: "CIC holds the freehold. 14 homes plus farmhouse rooms. Cole Street Farm, Gillingham." },
    { kind: "org", title: "UK Cohousing Network: Threshold Centre", url: "https://cohousing.org.uk/members-directory/the-threshold-centre/", note: "Established 2009. Up to 20 members. Seven affordable homes. Biomass, biodigester, 1-acre garden." },
    { kind: "org", title: "Diggers and Dreamers: Threshold Centre", url: "https://diggersanddreamers.org.uk/community/threshold-centre", note: "14 properties. Charge visitors. Guest rooms in the farmhouse." }
  ],

  "milagro-cohousing": [
    { kind: "official", title: "Milagro Cohousing", url: "https://www.milagrocohousing.org/", note: "28 homes on 43 acres, Tucson Mountain foothills. Common house, pool, six hours of work a month." },
    { kind: "org", title: "Terrain.org UnSprawl: Milagro", url: "https://www.terrain.org/unsprawl/16/", note: "Initiated 1994; fully occupied August 2003. About 80 residents. Arizona Planning Association Best Project 2001 of that account." }
  ],
  vrijburcht: [
    { kind: "official", title: "Vrijburcht", url: "https://vrijburcht.nl/", note: "Steigereiland. Marks 2026 as twenty years. vve@vrijburcht.nl." },
    { kind: "org", title: "Climate-ADAPT: Vrijburcht courtyard garden", url: "https://climate-adapt.eea.europa.eu/en/metadata/case-studies/vrijburcht-a-privately-funded-climate2013proof-collective-garden-in-amsterdam", note: "52 apartments, two guest rooms, care home for six youths, theatre, café. Completed 2007." }
  ],

  "newton-dee": [
    { kind: "official", title: "Newton Dee Camphill Community", url: "https://www.newtondee.co.uk/", note: "36 unique households, 180 acres, 120-acre biodynamic farm. Charity SC043417, company limited by guarantee SC427688." },
    { kind: "news", title: "BBC: Inside Scotland’s ‘village of dreams’", url: "https://www.bbc.com/news/uk-scotland-north-east-orkney-shetland-44439615", note: "11 June 2018. Documentary Village of Dreams. Camphill’s Aberdeen origin." },
    { kind: "org", title: "Camphill Aberdeen: Newton Dee", url: "https://camphillaberdeen.com/newton-dee/", note: "Estate bought 1945. Officially an adult community 1960." }
  ],
  "harmony-village": [
    { kind: "official", title: "Harmony Village Cohousing", url: "https://harmonyvillage.org/", note: "27 townhomes on 5.5 acres, Golden, Colorado. Tours by resident volunteers." },
    { kind: "news", title: "Denver Post: Co-housing dwellers share dinners, lives", url: "https://www.denverpost.com/2010/06/18/co-housing-dwellers-share-dinners-lives/", note: "18 June 2010. Golden’s first cohousing of that line. Third in Colorado of that account." }
  ],
  "two-echo": [
    { kind: "official", title: "Two Echo Cohousing", url: "https://twoecho.org/", note: "21 houses and 3 duplexes, 27 households. Acreage drifts 95 / 97. Conservation easement of about 70–72 acres." },
    { kind: "org", title: "Cohousing Alliance: Two Echo", url: "https://cohousingalliance.org/communities/two-echo-cohousing-community/", note: "Idea 1991. LLC bought land 1996. First residents fall 1998. Consensus." },
    { kind: "fic", title: "FIC directory: Two Echo Cohousing", url: "https://www.ic.org/directory/community/two-echo-cohousing/", note: "92 rural acres of that listing. Started living together 1998." }
  ],

  kersentuin: [
    { kind: "official", title: "De Kersentuin", url: "https://kersentuin.nl/", note: "94 dwellings: 28 sociale huur, 66 koop. Occupied 2003. Initiative summer 1996. info@kersentuin.nl." },
    { kind: "org", title: "De Witte Wolf: Op bezoek bij de Kersentuin", url: "https://dewittewolf.org/op-bezoek-bij-de-kersentuin-in-leidsche-rijn/", note: "8 July 2023. Roof garden, orchard, 6–7 tonnes of subsidy of that visit note." }
  ],
  "hameau-des-buis": [
    { kind: "official", title: "Hameau des Buis", url: "https://hameaudesbuis.org/", note: "43 inhabitants on 6 hectares. SAS coopérative. Occupied 2011 of their history page. SAS constituted 28 January 2023." },
    { kind: "org", title: "European Youth Portal: La Ferme des Enfants", url: "https://youth.europa.eu/volunteering/organisation/57137_en", note: "Association 1999, Sophie Rabhi-Bouquet. About 20 bioclimatic dwellings, school and farm of that account." }
  ],
  "neve-shalom": [
    { kind: "official", title: "Wahat al-Salam – Neve Shalom", url: "https://wasns.org/", note: "Equal Jewish and Palestinian membership of the village’s own line. A bilingual school and the School for Peace." },
    { kind: "news", title: "The New Yorker: How a Palestinian/Jewish village changed after October 7th", url: "https://www.newyorker.com/magazine/2024/06/17/wahat-al-salam-neve-shalom-israel-gaza-october-7th", note: "Masha Gessen, 10 June 2024 / magazine 17 June. Fully bilingual school. A walk is not a 1970 lease." }
  ],
  "den-selvforsynende": [
    { kind: "official", title: "Den Selvforsynende Landsby", url: "https://selvforsyning.dk/", note: "Permaculture farm and houses, Hundstrup, Funen. Guided tours of record." },
    { kind: "org", title: "bofaellesskab.dk: Den Selvforsynende Landsby", url: "https://bofaellesskab.dk/bofaellesskaber/bofaellesskaber/375-den-selvforsynende-landsby", note: "19 dwellings. About 30 adults and a few more children. Andelsforening. Headcount drifts with Instagram." }
  ],

  overdrevet: [
    { kind: "official", title: "Overdrevet", url: "https://www.overdrev.dk/", note: "25 ejerboliger, grundejerforening. About 65 people in 2023 of that page." },
    { kind: "org", title: "bofaellesskab.dk: Overdrevet", url: "https://bofaellesskab.dk/bofaellesskaber/bofaellesskaber/592-overdrevet", note: "2.5 hectares, 25 dwellings, about 70 people of that directory." }
  ],
  bellingham: [
    { kind: "official", title: "Bellingham Cohousing", url: "https://www.bellcoho.com/", note: "33 households, 2614 Donovan Avenue. Washington condominium." },
    { kind: "news", title: "Bellingham Herald on nearby cohousing", url: "https://www.bellinghamherald.com/news/local/article315188481.html", note: "26 March 2026. Founded 2000, 33 homes in 10 buildings." }
  ],
  "numero-zero": [
    { kind: "official", title: "CoAbitare: Numerozero", url: "https://www.coabitare.org/coabitazione/numerozero/", note: "Porta Palazzo. Eight dwellings, 440 m² of land." },
    { kind: "org", title: "Open House Torino: Cohousing Numero Zero", url: "https://www.openhousetorino.it/edifici/cohousing-numero-zero/", note: "Eight families refurbished a historic building." }
  ],
  lebensbogen: [
    { kind: "official", title: "Lebensbogen", url: "https://lebensbogen.org/", note: "Auf dem Dörnberg 13, Zierenberg. Community, café, Tagungshaus." },
    { kind: "org", title: "EU Youth: Projekt-Lebensbogen e.V.", url: "https://youth.europa.eu/volunteering/organisation/75746_en", note: "Moved into a former youth hotel, August 2015. Consensus, income-sharing." }
  ],
  rosewind: [
    { kind: "official", title: "RoseWind Cohousing", url: "https://rosewind.org/", note: "3121 Haines Street, Port Townsend. 26 member families of that page." },
    { kind: "fic", title: "FIC directory: RoseWind Cohousing", url: "https://www.ic.org/directory/community/rosewind-cohousing/", note: "Founded about thirty years ago of that listing." }
  ],

  nubanusit: [
    { kind: "official", title: "Nubanusit Neighborhood & Farm", url: "https://www.nhcohousing.com/", note: "29 households, 113 acres, Peterborough. Occupied 2007." },
    { kind: "news", title: "Harvard Magazine: Greener Pastures", url: "https://www.harvardmagazine.com/2010/07/greener-pastures", note: "July 2010. Site bought 2004. About 4.5 acres clustered of the former Salzburg Inn." }
  ],

  "puget-ridge": [
    { kind: "official", title: "Puget Ridge Cohousing", url: "https://sites.google.com/view/prcacohousing/home", note: "Delridge, West Seattle. 23 homes of the Homestead CLT / SeattleMet line." },
    { kind: "news", title: "Seattle Times: Puget Ridge's family spirit", url: "https://www.seattletimes.com/pacific-nw-magazine/puget-ridges-family-spirit-co-op-living-in-w-seattle/", note: "1 October 2011. Built 1994 of that piece. Around 50 people in 23 homes." },
    { kind: "org", title: "Homestead CLT: PRCA partnership", url: "https://www.homesteadclt.org/prca-homesteadstory", note: "2.4 acres, 23 cedar homes, about 60 residents. One permanently affordable door of that page." }
  ],

  landmatters: [
    { kind: "official", title: "Landmatters Permaculture Community", url: "https://landmatters.wixsite.com/devon", note: "Rural permaculture co-operative, South Devon. Diggers and Dreamers official of that listing." },
    { kind: "news", title: "BBC: Landmatters wins fight to remain", url: "https://www.bbc.com/news/uk-england-devon-36887555", note: "27 July 2016. Land 2003. Permanent permission after ten years. 16 adults and 7 children of that piece." }
  ],
  belterra: [
    { kind: "official", title: "Belterra Cohousing", url: "https://www.belterracohousing.ca/", note: "Bowen Island. 30 townhouses of the Canadian Cohousing directory line." },
    { kind: "org", title: "Canadian Cohousing: Belterra", url: "https://cohousing.ca/directory/communities/belterra-cohousing/", note: "Completed 2014. 30 homes. Guest rooms in a 3,700 sq ft common house of that listing." }
  ],

  vashon: [
    { kind: "official", title: "Vashon Cohousing", url: "https://vashoncohousing.com/", note: "18 households on 12 acres. Site condominium of that page." },
    { kind: "org", title: "Cohousing Alliance: Vashon Island Cohousing", url: "https://cohousingalliance.org/communities/vashon-island-cohousing/", note: "10421 SW Bank Road. Three guest rooms, orchard of that listing." }
  ],
  "new-view": [
    { kind: "official", title: "New View Cohousing", url: "https://www.newview.org/", note: "24 households, Acton. Founded 1996 of that page." },
    { kind: "news", title: "Acton Exchange: 30th year", url: "https://www.actonexchange.org/new-view-cohousing-on-half-moon-hill-celebrates-its-30th-year/", note: "1 August 2026. First of 16 Massachusetts cohousing of that piece. Group from 1989." }
  ],
  "tierra-nueva": [
    { kind: "official", title: "Tierra Nueva Cohousing", url: "https://tncoho.com/about-tierra-nueva/", note: "27 units on 5 acres, Oceano. Completed February 1999. HOA holds land in common of that page." },
    { kind: "fic", title: "FIC directory: Tierra Nueva, Oceano", url: "https://www.ic.org/directory/community/tierra-nueva-oceano/", note: "Founding year 1988 of that listing — confirm against the 1999 completion." }
  ],

  "eno-commons": [
    { kind: "official", title: "Eno Commons", url: "https://www.enocommons.org/", note: "22 homes on 11.2 acres, 1 Indigo Creek Trail, Durham. Multi-generational of the about page." },
    { kind: "fic", title: "FIC directory: Eno Commons", url: "https://www.ic.org/directory/community/eno-commons/", note: "Founding year 1992. Started living 1 January 1998. 22 houses on 11 acres of that listing." },
    { kind: "org", title: "2026 National Cohousing Open House: Eno Commons", url: "https://www.bullcitycommons.com/national-open-house", note: "Sunday dinners, work days, organic garden and barn of that listing." }
  ],

  "villa-locomuna": [
    { kind: "official", title: "Villa Locomuna", url: "https://www.villa-locomuna.de/", note: "Politische Stadtkommune, Kölnische Straße 183, Kassel. Gemeinsam Leben eG of that Genossenschaft page." },
    { kind: "news", title: "Spiegel: In der Villa Locomuna teilen alle ihr Geld", url: "https://www.spiegel.de/start/kassel-in-der-villa-locomuna-teilen-alle-bewohner-ihr-geld-a-00000000-0003-0001-0000-000002324043", note: "2 May 2018. Income on a common account of that piece." },
    { kind: "org", title: "GEN Deutschland: Villa Locomuna", url: "https://gen-deutschland.de/projekt/villa-locomuna/", note: "KommuJa and Interkomm. Headcount drifts against Wohnprojekte-Portal." },
    { kind: "org", title: "Wohnprojekte-Portal: Villa Locomuna", url: "https://www.wohnprojekte-portal.de/wohnprojekte-entdecken/wohnprojekt/villa-locomuna/", note: "13 adults and 6 children of that listing. First residents December 2000." }
  ],

  redfield: [
    { kind: "official", title: "Redfield Community", url: "https://redfieldcommunity.org.uk/", note: "Fully mutual housing co-operative, North Buckinghamshire. Founded 1978. Up to 17 adults of that page." },
    { kind: "org", title: "Diggers and Dreamers: Redfield", url: "https://diggersanddreamers.org.uk/community/redfield", note: "Founded 1978. 17 acres of gardens of that listing. Buckingham Road, Winslow." },
    { kind: "org", title: "UK.coop: Redfield Community", url: "https://www.uk.coop/directory/redfield-community", note: "Trading address: Redfield, Buckingham Road, Winslow MK18 3LZ." }
  ],

  "la-querencia": [
    { kind: "official", title: "La Querencia Cohousing", url: "https://www.laqcoho.org/", note: "2658 E Alluvial Avenue, Fresno. 28 homes. Own site: since 2009." },
    { kind: "news", title: "ABC30: New Fresno co-housing community", url: "https://abc30.com/archive/6046891/", note: "14 April 2008. Valley’s first. 28 private homes of that piece." },
    { kind: "org", title: "Cohousing Alliance: Fresno Cohousing / La Querencia", url: "https://cohousingalliance.org/communities/fresno-cohousing-a-k-a-la-querencia/", note: "Move-in 2008. 2.8 acres. Guest room, pool, gym of that listing." }
  ],

  "hidden-villa": [
    { kind: "official", title: "Hidden Villa hostel catalog", url: "https://www.hiddenvilla.org/programs/catalog/70-hostel/region-HV/", note: "Nine rustic cabins, 37 beds. Available September–May. Summer is camp, not a drop-in inn." },
    { kind: "official", title: "Hidden Villa", url: "https://www.hiddenvilla.org/", note: "26870 Moody Road, Los Altos Hills. Teaching farm, hostel, camp. Phone (650) 949-8650." }
  ],
  "mount-madonna": [
    { kind: "official", title: "Our History", url: "https://www.mountmadonna.org/about/our-history/", note: "Hanuman Fellowship founded Mount Madonna Center in 1978. In 2001 students brought a Hanuman murti from India; Baba Hari Dass wrote “It needs a Temple,” and marked the site with his foot. Prana Pratishta 2003." }
  ],
  "new-vrindaban": [
    { kind: "official", title: "Winter update", url: "https://www.newvrindaban.com/post/winter-update", note: "In 2023 gardens produced over 21,000 lbs of vegetables." },
    { kind: "official", title: "Cows", url: "https://www.newvrindaban.com/cows", note: "Goshala established in 1969." },
    { kind: "official", title: "Palace of Gold", url: "https://www.newvrindaban.com/palace-of-gold", note: "Prabhupada’s Palace of Gold on the ridge." },
    { kind: "wikipedia", title: "New Vrindaban", url: "https://en.wikipedia.org/wiki/New_Vrindaban", note: "Founded 1968 by Kirtanananda Swami and Hayagriva Das. Palace dedicated 2 September 1979 as a memorial shrine. Readmitted to ISKCON 1998. NRHP 28 August 2019." }
  ],
  "journeys-end": [
    { kind: "official", title: "Journey’s End Farm", url: "https://www.journeysendfarm.org/", note: "364 Sterling Road, Newfoundland, PA. Farm camp 1939–2020 of that page. Cabins and tent sites remain." }
  ],
  "monkton-wyld": [
    { kind: "official", title: "Monkton Wyld Court", url: "https://monktonwyldcourt.co.uk/", note: "Charmouth, Bridport DT6 6DQ. Educational charity, resident community, B&B and courses of that page." },
    { kind: "official", title: "About the Court", url: "https://monktonwyldcourt.co.uk/about-the-court", note: "1848 Grade II rectory. Richard Cromwell Carpenter. Educational charity for sustainable living." }
  ],
  "shelburne-farms": [
    { kind: "official", title: "Shelburne Farms", url: "https://shelburnefarms.org/", note: "Nonprofit education centre, 1972. About 1,400 acres on Lake Champlain of that site." },
    { kind: "official", title: "History of the property", url: "https://shelburnefarms.org/about/history-property", note: "Webb estate 1886–87. Nonprofit 1972. Bequest 1986 of that history." },
    { kind: "official", title: "Staff & Board", url: "https://shelburnefarms.org/about/staff-and-board", note: "Alec Webb, President." }
  ],
  "willow-witt": [
    { kind: "official", title: "Willow-Witt Ranch", url: "https://willowwittranch.com/", note: "658 Shale City Road, Ashland. 445 acres from 1985. Wall tents, tent sites, farmhouse of that farm-stay page." },
    { kind: "official", title: "Pack goats", url: "https://willowwittranch.com/activities/pack-goats/", note: "Hand-raised goats carry 25–30% of body weight, about 30–65 pounds." }
  ],
  "punta-mona": [
    { kind: "official", title: "Punta Mona tours", url: "https://www.puntamona.org/tours", note: "Wednesday and Saturday farm tours. Boat from Manzanillo or a hike. Confirm current rates." },
    { kind: "org", title: "Ecoversity campus: Punta Mona", url: "https://www.ecoversity.org/our-campus-punta-mona", note: "Off-grid permaculture farm on the Caribbean. Confirm the current relationship with puntamona.org." }
  ],
  zaytuna: [
    { kind: "official", title: "Zaytuna Farm", url: "https://www.zaytunafarm.com/", note: "1158 Pinchin Road, The Channon. Permaculture demonstration. Camping and PDC of that site." }
  ],
  "juneberry-ridge": [
    { kind: "official", title: "Juneberry Ridge farm stays", url: "https://juneberry.com/farmstay/", note: "Wooded cabins. All-inclusive stays on scheduled weekends of that page, not a nightly inn. 40120 Old Cottonville Road, Norwood." },
    { kind: "official", title: "About Juneberry Ridge", url: "https://juneberry.com/about/", note: "Judy Carpenter, a national champion clay shooter, was told to find her own place for competitive shooting. She built Lucky Clays five-stand on the land that became Juneberry Ridge." },
    { kind: "org", title: "VisitNC: regenerative farm stay", url: "https://www.visitnc.com/itinerary/your-guide-3-day-regenerative-farm-stay-juneberry-ridge", note: "Cabin itinerary. Confirm current calendar with juneberry.com." }
  ],
  henbant: [
    { kind: "official", title: "Henbant Permaculture", url: "https://www.henbant.org/", note: "Tain Lon, Clynnog-fawr, LL54 5DF. Agriwilding farm, camp and venue of that page." }
  ],
  "on-the-hill": [
    { kind: "official", title: "On The Hill — Oxen Park Farm", url: "https://onthehill.camp/regenerative-organic-farm-in-devon-oxen-park-farm/", note: "55 acres, organic and biodynamic of that page. Family camps of onthehill.camp." },
    { kind: "org", title: "Social Farms & Gardens: Oxen Park Farm", url: "https://www.farmgarden.org.uk/org/public-profile/85465", note: "On the Hill C.I.C. on Oxen Park Farm, Lower Ashton EX6 7QW. Volunteer days of that listing." }
  ],
  hawkwood: [
    { kind: "official", title: "Hawkwood accommodation", url: "https://www.hawkwoodcollege.co.uk/venue-hire/accommodation", note: "27 bedrooms, up to 47 guests. B&B and venue hire. Confirm current with 01453 759034." },
    { kind: "official", title: "Hawkwood history", url: "https://www.hawkwoodcollege.co.uk/history/", note: "Lily Whincop and Margaret Bennell. Opened as Hawkwood College 1949." },
    { kind: "official", title: "Meet the Team", url: "https://www.hawkwoodcollege.co.uk/about-us/meet-the-team", note: "Alicia Carey, Chief Executive Officer. Lord Michael Bichard, Chair of Trustees." }
  ],
  keveral: [
    { kind: "org", title: "Diggers and Dreamers: Keveral Farm Community", url: "https://diggersanddreamers.org.uk/community/keveral-farm-community", note: "Founded 1973. Currently 10 members, 30 acres, Soil Association, weekly veg boxes since 1997. Camping. keveralfarm@yahoo.co.uk of that listing." }
  ],
  "lower-shaw": [
    { kind: "official", title: "Lower Shaw Farm", url: "https://www.lowershawfarm.co.uk/", note: "Old Shaw Lane, West Swindon SN5 5PJ. Weekend courses and family breaks of that site. 01793 771080." }
  ],
  "liberty-hill": [
    { kind: "official", title: "Liberty Hill Farm & Inn", url: "https://www.libertyhillfarm.com/", note: "511 Liberty Hill, Rochester, VT 05767. Seven rooms, dinner and breakfast of that inn page. Two-night minimum. (802) 767-3926." }
  ],
  djanbung: [
    { kind: "official", title: "Permaculture College Australia / Djanbung Gardens", url: "https://permaculture.com.au/", note: "74 Cecil Street, Nimbin. Guided tours and courses of that visit page. Hipcamp of that listing." }
  ],
  "luna-nueva": [
    { kind: "official", title: "Finca Luna Nueva Lodge", url: "https://fincalunanuevalodge.com/", note: "Chachagua, about 25 minutes from La Fortuna of that page. 127-acre regenerative farm. Casitas of that rooms page. SimpleBooking of that reserve line." }
  ],
  "la-loma": [
    { kind: "official", title: "La Loma Jungle Lodge", url: "https://www.thejunglelodge.com/", note: "Bahía Honda, Isla Bastimentos. Boat only of that getting-here page. Cacao tour in the stay of that experience page." }
  ],
  "rancho-margot": [
    { kind: "official", title: "Rancho Margot", url: "https://www.ranchomargot.com/", note: "El Castillo, Lake Arenal. About 400 acres of that story page. Nineteen bungalows and twenty bunks of that lodging line. Cloudbeds of that check-availability line." }
  ],
  "fat-sheep": [
    { kind: "official", title: "Fat Sheep Farm & Cabins", url: "https://www.fatsheepfarmvermont.com/", note: "122 Best Road, Hartland, VT 05089. Five cabins of that page. ThinkReservations of that book line. (802) 436-4696." }
  ],
  wonderfield: [
    { kind: "official", title: "Wonderfield Farm stay", url: "https://wonderfieldfarm.com/stay", note: "10707 E Gobbler Drive, Floral City, FL 34436. Glamping tents, cottages, farmhouse of that stay page. 66 acres of wonderfieldfarm.com." }
  ],
  "ballymaloe": [
    { kind: "official", title: "Ballymaloe Cookery School", url: "https://www.ballymaloecookeryschool.ie/", note: "Kinoith, Shanagarry. 100-acre organic farm. Courses and cottages of that site." }
  ],
  "embercombe": [
    { kind: "official", title: "Embercombe", url: "https://www.embercombe.org/", note: "Higher Ashton, Devon EX6 7QQ. Educational charity 1116793. 50-acre rewilding. Yurts and courses of that site." }
  ],
  "serenbe": [
    { kind: "official", title: "The Inn at Serenbe", url: "https://www.serenbeinn.com/", note: "10950 Hutcheson Ferry Road, Chattahoochee Hills, GA 30268. 36-acre inn farm. Book of that site." },
    { kind: "official", title: "The Inn at Serenbe — grounds", url: "https://www.serenbeinn.com/", note: "Serenbe’s 2,000 acres: preserved forest, wildflower meadows, 20 miles of trails, two waterfalls, animal village." }
  ],
  "vale-da-lama": [
    { kind: "official", title: "Quinta Vale da Lama", url: "https://www.valedalama.net/", note: "Odiáxere, Lagos. 43 hectares. Camps, internships, Tuesdays of Regen of that site." }
  ],
  "eumelia": [
    { kind: "official", title: "Eumelia", url: "https://eumelia.com/en/", note: "Gouves, Laconia 23055. Organic agritourism. Eco-houses and harvest retreats of that site." }
  ],
  "playa-viva": [
    { kind: "official", title: "Playa Viva", url: "https://www.playaviva.com/", note: "Juluchuca, Guerrero. Regenerative hotel, 20-acre farm, turtle sanctuary of that site." }
  ],
  "babylonstoren": [
    { kind: "official", title: "Babylonstoren", url: "https://babylonstoren.com/", note: "Simondium, Franschhoek. Farm hotel, garden, 33 rooms of that site." },
    { kind: "official", title: "About our Garden", url: "https://babylonstoren.com/visit-our-garden/about-our-garden", note: "In 2007 Karen Roos commissioned French architect Patrice Taravella. The layout takes a cue from Cape Town’s Company’s Garden." }
  ],
  "la-donaira": [
    { kind: "official", title: "Finca La Donaira", url: "https://www.ladonaira.com/", note: "Montecorto, Málaga. Organic farm, Lusitanos, nine rooms of that site." }
  ],
  "copal-tree": [
    { kind: "official", title: "Copal Tree Lodge", url: "https://www.copaltreelodge.com/", note: "Big Falls Village, Toledo. 3,000-acre farm lodge of that site / Michelin Guide." }
  ],
  "the-newt": [
    { kind: "official", title: "The Newt in Somerset", url: "https://thenewtinsomerset.com/", note: "Hadspen, Bruton BA7 7NG. Estate hotel, gardens, farm, cyder of that site." }
  ],
  polyface: [
    { kind: "official", title: "Polyface Farm apprenticeship", url: "https://polyfacefarm.com/apprenticeship", note: "43 Pure Meadows Lane, Swoope, VA 24479. Five-month summer stewardship of that page." },
    { kind: "official", title: "The Story of Polyface Farms", url: "https://polyfacefarm.com/about-us", note: "William and Lucille Salatin bought the most worn-out, eroded farm near Staunton in 1961. Daily cow moves, ponds, portable shelters, perennial prairie." }
  ],
  yogaville: [
    { kind: "official", title: "Yogaville", url: "https://www.yogaville.org/", note: "108 Yogaville Way, Buckingham, VA 23921. (800) 858-9642. Farm Yogi and residential volunteer." },
    { kind: "official", title: "Leadership", url: "https://www.yogaville.org/about/leadership/", note: "Karuna Marcotte, Executive Director." },
    { kind: "wikipedia", title: "Yogaville", url: "https://en.wikipedia.org/wiki/Yogaville", note: "Integral Yoga ashram, Buckingham, Virginia." }
  ],
  "rio-oro": [
    { kind: "official", title: "Río Oro Base Camp", url: "https://www.tortugasdeosa.org/riooro", note: "First research station, mid 2019. Two-story rancho dorm a few hundred metres from Playa Río Oro." },
    { kind: "official", title: "COPROT history", url: "https://www.tortugasdeosa.org/history", note: "COPROT founded August 2018." },
    { kind: "official", title: "Volunteer projects", url: "https://www.tortugasdeosa.org/volunteerprojects", note: "$290/week for 1–3 weeks, $250/week for 4 weeks or more. 1–10 weeks, start Mondays." },
    { kind: "official", title: "Internships", url: "https://www.tortugasdeosa.org/internships", note: "$250/week, food and lodging included." },
    { kind: "official", title: "Contact", url: "https://www.tortugasdeosa.org/contact", note: "Laura Exley, Director of COPROT. Simon Frenkel, volunteer coordination. volunteer@tortugasdeosa.org." }
  ],
  "carate-base-camp": [
    { kind: "official", title: "Carate Base Camp", url: "https://www.tortugasdeosa.org/carate", note: "December 2022. Also called Mariposa Azul. Hatchery up to 300 nests." },
    { kind: "official", title: "Volunteer projects", url: "https://www.tortugasdeosa.org/volunteerprojects", note: "$290/week for 1–3 weeks, $250/week for 4 weeks or more." },
    { kind: "official", title: "Contact", url: "https://www.tortugasdeosa.org/contact", note: "Laura Exley, Director of COPROT. Simon Frenkel, volunteer coordination." }
  ],
  "riverside-oasis": [
    { kind: "official", title: "Riverside Oasis Farm", url: "https://riversideoasisfarm.ca/", note: "6696 Canborough Road, West Lincoln. 21-acre Welland River farm. Founded 2020 by the Carltons. Reilly family now." },
    { kind: "official", title: "Yurts", url: "https://riversideoasisfarm.ca/yurts/", note: "Three Mongolian yurts — Kandy, Lyla, Caspian — sourced through Groovy Yurts. From about $249 a night. Farm tour with the stay." }
  ],
  wilderland: [
    { kind: "official", title: "Wilderland volunteer", url: "https://www.wilderland.org.nz/volunteer/", note: "Kaimarama, Coromandel. Free four-week volunteer terms of that page." }
  ],
  "good-life-farm": [
    { kind: "official", title: "Stay overnight", url: "https://www.fingerlakesciderhouse.com/pages/stay-overnight", note: "Walnut Grove and Maple Grove creek yurts. Maple Grove Yurt completed May 2025 as an all-season creekside cabin in the farm’s maple grove." }
  ],
  "green-gulch": [
    { kind: "official", title: "Green Gulch Farm apprenticeship", url: "https://www.sfzc.org/locations/green-gulch-farm/about-green-gulch/farm-garden-programs/farm-land-steward-apprenticeship", note: "Muir Beach. Farm and Land Steward apprenticeship of that page." }
  ],
  "hawthorne-valley": [
    { kind: "official", title: "Hawthorne Valley Farm apprenticeship", url: "https://farm.hawthornevalley.org/apprentice-program/", note: "Ghent, NY. One-year apprenticeship of that page." }
  ],
  triform: [
    { kind: "official", title: "Triform volunteer apply", url: "https://www.triform.org/volunteer-apply", note: "20 Triform Road, Hudson, NY 12534. Twelve-month volunteer year of that short-term-volunteers page." }
  ],
  "full-belly": [
    { kind: "official", title: "Full Belly Farm internships", url: "https://fullbellyfarm.com/about-us/internships/", note: "Capay Valley, Guinda. One-year internships of that page." }
  ],
  glynwood: [
    { kind: "official", title: "Glynwood apprenticeship", url: "https://www.glynwood.org/apprenticeship", note: "362 Glynwood Road, Cold Spring, NY 10516. Hudson Valley Apprenticeship of that page." }
  ],
  "camphill-california": [
    { kind: "official", title: "Camphill California volunteer", url: "https://camphillca.org/volunteer-inquiry/", note: "3920 Fairway Drive, Soquel, CA 95073. Six-to-twelve-month live-in volunteers; apply on this inquiry form." }
  ],
  "deck-family": [
    { kind: "official", title: "Deck Family Farm intern program", url: "https://www.deckfamilyfarm.com/intern-program", note: "25362 High Pass Road, Junction City, OR. One-year internships of that page." }
  ],
  "hungry-world": [
    { kind: "official", title: "Hungry World Farm internships", url: "https://hungryworldfarm.com/interns-volunteers/", note: "19183 Plow Creek Road, Tiskilwa, IL. Summer internships of that page." }
  ],
  kalani: [
    { kind: "official", title: "Kalani lodging", url: "https://kalani.com/lodging/", note: "12-6870 Kalapana Kapoho Road, Pāhoa, HI 96778. Cottages of that page. (808) 756-9530." }
  ],
  "philo-apple-farm": [
    { kind: "official", title: "The Apple Farm stay", url: "https://www.philoapplefarm.com/just-stay", note: "18501 Greenwood Road, Philo, CA 95466. Orchard cottages of that page. (707) 895-2333." }
  ],
  milia: [
    { kind: "official", title: "Milia Mountain Retreat", url: "https://milia.gr/", note: "Vlatos, Kissamos, Chania. Stone eco-rooms of that reserve-online line." }
  ],
  "flora-farms": [
    { kind: "official", title: "Flora Farms stay", url: "https://stay.florafarms.com/", note: "Las Animas, San José del Cabo. Cottages and Haylofts on the 25-acre organic farm of flora-farms.com." }
  ],
  "los-poblanos": [
    { kind: "official", title: "Los Poblanos Inn & Organic Farm", url: "https://lospoblanos.com/accommodations/rooms", note: "4803 Rio Grande Boulevard NW, Los Ranchos de Albuquerque. About 46 rooms on 25 acres of lavender of that site." }
  ],
  "cedar-ridge": [
    { kind: "official", title: "Cedar Ridge Ranch", url: "https://www.cedarridgeranch.com/", note: "3059 County Road 103, Carbondale, CO. Yurts, safari tents, farmhouse of that site. (970) 963-3507." }
  ],
  "leaping-lamb": [
    { kind: "official", title: "Leaping Lamb Farm stay", url: "https://www.leapinglambfarm.com/farm-stay", note: "20368 Honey Grove Road, Alsea, OR. Cottage of that page. (541) 487-4966." }
  ],
  "les-amanins": [
    { kind: "official", title: "Les Amanins farm stays", url: "https://www.lesamanins.com/nos-sejours-a-la-ferme/", note: "1324 route de Crest, La Roche-sur-Grane. Cabins, lodges, camping of that page. 04 75 43 75 05." }
  ],
  "our-native-village": [
    { kind: "official", title: "Our Native Village", url: "https://www.ournativevillage.com/", note: "Hesaraghatta Village, Bengaluru. 12-acre organic farm eco-resort of that about page." }
  ],
  blisswood: [
    { kind: "official", title: "BlissWood Bed and Breakfast Ranch", url: "https://www.blisswood.net/", note: "13597 Frantz Road, Cat Spring, TX. Cabins and wagon of that site. (713) 301-3235." }
  ]

};

export function isDirectoryUrl(url: string): boolean {
  let host = url.toLowerCase();
  try {
    host = new URL(url).hostname.toLowerCase();
  } catch {
    host = url.toLowerCase();
  }
  return (
    host === "ecovillage.org"
    || host.endsWith(".ecovillage.org")
    || host === "gen-europe.org"
    || host.endsWith(".gen-europe.org")
    || host === "gen-deutschland.de"
    || host.endsWith(".gen-deutschland.de")
    || host === "ic.org"
    || host.endsWith(".ic.org")
  );
}

function kindForUrl(url: string): SourceKind {
  if (url.toLowerCase().includes("wikipedia.org")) return "wikipedia";
  if (isDirectoryUrl(url)) return "gen";
  return "official";
}

function titleForOfficial(url: string, name: string): string {
  if (url.toLowerCase().includes("wikipedia.org")) return name + " on Wikipedia";
  return name;
}

export function sourcesFor(slug: string, website: string, name: string): Source[] {
  const seen = new Set<string>();
  const out: Source[] = [];
  const add = (source: Source) => {
    const key = source.url.replace(/\/$/, "").toLowerCase();
    if (!source.url || seen.has(key)) return;
    seen.add(key);
    out.push(source);
  };

  if (website && !isDirectoryUrl(website)) {
    add({
      kind: kindForUrl(website),
      title: titleForOfficial(website, name),
      url: website
    });
  }
  const wiki = wikiBySlug[slug];
  if (wiki) add({ kind: "wikipedia", title: wiki.title, url: wiki.url });
  for (const extra of extraBySlug[slug] ?? []) {
    if (extra.kind === "gen" || extra.kind === "fic") continue;
    if (isDirectoryUrl(extra.url)) continue;
    add(extra);
  }
  return out.filter((source) => source.kind !== "gen" && source.kind !== "fic");
}
