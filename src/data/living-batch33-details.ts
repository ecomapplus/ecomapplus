import type { LegalEntity } from "./legal-entities";
import type { LandOwnership } from "./land-ownership";
import type { CommunityFunding } from "./funding";
import type { VisitJoin } from "./visit-join";
import type { DailyLife } from "./daily-life";
import type { InformalAgreement } from "./informal-agreements";
import type { Governance } from "./governance";
import type { VillageLeaders } from "./leaders";
import type { Accommodations } from "./accommodations";

export const livingBatch33LegalEntities: Record<string, LegalEntity[]> = {
  "vauban": [
    { name: "Vauban", kind: "Municipal eco-district", role: "Municipal eco-district.", status: "current", layer: "enterprise", year: "1998", forms: ["Municipality"] },
    { name: "Vauban", kind: "Land", role: "Former French military base south of the city centre. Acreage of the whole district not isolated here", status: "current", layer: "land", year: "1998", forms: ["Freehold title"] },
  ],
  "marinaleda": [
    { name: "Marinaleda", kind: "Cooperative municipality", role: "Cooperative municipality.", status: "current", layer: "enterprise", year: "1979", forms: ["Municipality"] },
    { name: "Marinaleda", kind: "Land", role: "Andalusian municipal land. Acreage not isolated here", status: "current", layer: "land", year: "1979", forms: ["Freehold title"] },
  ],
  "hiware-bazar": [
    { name: "Hiware Bazar", kind: "Village-council model village", role: "Village-council model village.", status: "current", layer: "enterprise", year: "1989", forms: ["Village council"] },
    { name: "Hiware Bazar", kind: "Land", role: "Village lands. Acreage not isolated here", status: "current", layer: "land", year: "1989", forms: ["Freehold title"] },
  ],
  "khonoma": [
    { name: "Khonoma", kind: "Indigenous green village", role: "Indigenous green village.", status: "current", layer: "enterprise", year: "1998", forms: ["Village council"] },
    { name: "Khonoma", kind: "Land", role: "Village and sanctuary lands. Acreage not isolated here", status: "current", layer: "land", year: "1998", forms: ["Freehold title"] },
  ],
  "skanda-vale": [
    { name: "Skanda Vale", kind: "Religious charity", role: "Religious charity.", status: "current", layer: "enterprise", year: "1973", forms: ["Religious society"] },
    { name: "Llanpumsaint", kind: "Land", role: "22-acre Welsh smallholding. Three temples in converted farmhouses. 100 kW wind turbine. Animal sanctuary", status: "current", layer: "land", year: "1973", forms: ["Freehold title"] },
  ],
  "sunburst-sanctuary": [
    { name: "Sunburst Sanctuary", kind: "Spiritual community", role: "Spiritual community.", status: "current", layer: "enterprise", year: "1969", forms: ["Religious society"] },
    { name: "7200 S. Highway One", kind: "Land", role: "About 4,000 acres between Santa Barbara and Lompoc. Organic gardens and cattle", status: "current", layer: "land", year: "1969", forms: ["Freehold title"] },
  ],
  "tiny-timbers": [
    { name: "Tiny Timbers", kind: "Tiny-home agrihood", role: "Tiny-home agrihood.", status: "current", layer: "enterprise", year: "2023", forms: ["Company"] },
    { name: "St. Croix Falls", kind: "Land", role: "City-edge land in St. Croix Falls. Gardens, greenhouse, orchard, bees, timber pavilion", status: "current", layer: "land", year: "2023", forms: ["Freehold title"] },
  ],
  "kahumana": [
    { name: "Kahumana Organic Farms", kind: "Organic farm", role: "Organic farm.", status: "current", layer: "enterprise", year: "1974", forms: ["Company"] },
    { name: "86-660 Lualualei Homestead Road", kind: "Land", role: "Lualualei Homestead Road farm. Acreage not isolated here", status: "current", layer: "land", year: "1974", forms: ["Freehold title"] },
  ],
  "hollyhock": [
    { name: "Hollyhock", kind: "Retreat centre", role: "Retreat centre.", status: "current", layer: "enterprise", year: "1982", forms: ["Company"] },
    { name: "445 Highfield Road", kind: "Land", role: "Cortes Island campus at Mansons Landing. Acreage not isolated here", status: "current", layer: "land", year: "1982", forms: ["Freehold title"] },
  ],
  "tui-community": [
    { name: "Tui Community", kind: "Charitable trust", role: "Charitable trust.", status: "current", layer: "enterprise", year: "1984", forms: ["Charitable trust"] },
    { name: "Wainui Bay", kind: "Land", role: "50–52 hectares (~125 acres) of Wainui Bay farm", status: "current", layer: "land", year: "1984", forms: ["Freehold title"] },
  ],
  "finca-argayall": [
    { name: "Finca Argayall", kind: "Work-stay finca", role: "Work-stay finca.", status: "current", layer: "enterprise", year: "1990", forms: ["Company"] },
    { name: "Playa de Argaga", kind: "Land", role: "Coastal finca above Playa de Argaga. Acreage not isolated here", status: "current", layer: "land", year: "1990", forms: ["Freehold title"] },
  ],
  "gingerhill": [
    { name: "Gingerhill Farm Retreat", kind: "Farm retreat", role: "Farm retreat.", status: "current", layer: "enterprise", year: "2008", forms: ["Company"] },
    { name: "81-6467 Māmalahoa Highway", kind: "Land", role: "Kealakekua farm. Acreage not isolated here", status: "current", layer: "land", year: "2008", forms: ["Freehold title"] },
  ],
  "gaiayoga": [
    { name: "GaiaYoga Gardens", kind: "Intentional community", role: "Intentional community.", status: "current", layer: "enterprise", year: "1998", forms: ["Company"] },
    { name: "Puna District", kind: "Land", role: "Puna District land. Acreage not isolated here", status: "current", layer: "land", year: "1998", forms: ["Freehold title"] },
  ],
  "plenitud": [
    { name: "Plenitud PR", kind: "Teaching farm", role: "Teaching farm.", status: "current", layer: "enterprise", year: "2010", forms: ["Company"] },
    { name: "Las Marías", kind: "Land", role: "Las Marías land. Acreage not isolated here", status: "current", layer: "land", year: "2010", forms: ["Freehold title"] },
  ],
  "kul-kul-farm": [
    { name: "The Kul Kul Farm", kind: "Regenerative farm", role: "Regenerative farm.", status: "current", layer: "enterprise", year: "2012", forms: ["Company"] },
    { name: "Jl. Raya Sibang Kaja", kind: "Land", role: "Sibang Kaja farm. Acreage not isolated here", status: "current", layer: "land", year: "2012", forms: ["Freehold title"] },
  ],
  "wilgano": [
    { name: "Wilgano", kind: "Eco resort", role: "Eco resort.", status: "current", layer: "enterprise", year: "2020", forms: ["Company"] },
    { name: "Rvaši", kind: "Land", role: "Rvaši forest. Acreage not isolated here", status: "current", layer: "land", year: "2020", forms: ["Freehold title"] },
  ],
  "rio-oro": [
    { name: "Río Oro Base Camp", kind: "Work-stay base camp", role: "Work-stay base camp.", status: "current", layer: "enterprise", year: "2010", forms: ["Company"] },
    { name: "Playa Río Oro", kind: "Land", role: "Playa Río Oro. Acreage not isolated here", status: "current", layer: "land", year: "2010", forms: ["Freehold title"] },
  ],
  "carate-base-camp": [
    { name: "Carate Base Camp (Mariposa Azul)", kind: "Work-stay base camp", role: "Work-stay base camp.", status: "current", layer: "enterprise", year: "2010", forms: ["Company"] },
    { name: "Playa Carate", kind: "Land", role: "Playa Carate. Acreage not isolated here", status: "current", layer: "land", year: "2010", forms: ["Freehold title"] },
  ],
  "selahs-pig-sanctuary": [
    { name: "Selah’s Pig Sanctuary", kind: "Animal sanctuary", role: "Animal sanctuary.", status: "current", layer: "enterprise", year: "2015", forms: ["Company"] },
    { name: "Keaau", kind: "Land", role: "Keaau land. Acreage not isolated here", status: "current", layer: "land", year: "2015", forms: ["Freehold title"] },
  ],
  "skomer-island": [
    { name: "Skomer Island", kind: "Nature reserve", role: "Nature reserve.", status: "current", layer: "enterprise", year: "1959", forms: ["Charity"] },
    { name: "Skomer Island", kind: "Land", role: "Skomer Island National Nature Reserve. Island acreage of public record around 292 ha", status: "current", layer: "land", year: "1959", forms: ["Freehold title"] },
  ],
  "ananda-assisi": [
    { name: "Ananda Assisi", kind: "Yoga community", role: "Yoga community.", status: "current", layer: "enterprise", year: "1986", forms: ["Religious society"] },
    { name: "Via Montecchio 61", kind: "Land", role: "Nocera Umbra land. Acreage not isolated here", status: "current", layer: "land", year: "1986", forms: ["Freehold title"] },
  ],
  "plum-village": [
    { name: "Plum Village", kind: "Monastery", role: "Monastery.", status: "current", layer: "enterprise", year: "1982", forms: ["Religious society"] },
    { name: "437 Chemin du Pey", kind: "Land", role: "Upper Hamlet at Thénac and sister hamlets. Acreage not isolated here", status: "current", layer: "land", year: "1982", forms: ["Freehold title"] },
  ],
  "mount-madonna": [
    { name: "Mount Madonna Center", kind: "Yoga community", role: "Yoga community.", status: "current", layer: "enterprise", year: "1978", forms: ["Religious society"] },
    { name: "445 Summit Road", kind: "Land", role: "About 380 acres of redwood and meadow. Community garden, chickens, about 2 acres permaculture. Sankat Mochan Hanuman Temple", status: "current", layer: "land", year: "1978", forms: ["Freehold title"] },
  ],
  "new-vrindaban": [
    { name: "New Vrindaban", kind: "Temple community", role: "ISKCON farm community. Temple, Palace of Gold, cow sanctuary.", status: "current", layer: "enterprise", year: "1968", forms: ["Religious society"] },
    { name: "3759 McCrearys Ridge Rd", kind: "Land", role: "McCrearys Ridge near Moundsville. Palace of Gold on the ridge. Gardens and goshala.", status: "current", layer: "land", year: "1968", forms: ["Freehold title"] },
  ],
  "billen-cliffs": [
    { name: "Billen Cliffs Village", kind: "Strata village", role: "Strata village.", status: "current", layer: "enterprise", year: "1982", forms: ["Strata title"] },
    { name: "Rock Valley Road", kind: "Land", role: "Slopes of Mount Billen. About 115 parcels of about 2 acres", status: "current", layer: "land", year: "1982", forms: ["Freehold title"] },
  ],
  "glen-oro-farm": [
    { name: "Glen Oro Farm", kind: "Horse farm", role: "Horse farm.", status: "current", layer: "enterprise", year: "1967", forms: ["Company"] },
    { name: "2574 Line 10 N", kind: "Land", role: "Oro-Medonte horse farm. Acreage not isolated here", status: "current", layer: "land", year: "1967", forms: ["Freehold title"] },
  ],
  "krishna-village-nsw": [
    { name: "Krishna Village", kind: "Yoga farm", role: "Yoga farm.", status: "current", layer: "enterprise", year: "1977", forms: ["Religious society"] },
    { name: "525 Tyalgum Road", kind: "Land", role: "About 1,000 acres. Orchards, certified organic gardens, cows. Foothills of Mount Warning", status: "current", layer: "land", year: "1977", forms: ["Freehold title"] },
  ],
};

export const livingBatch33Land: Record<string, LandOwnership> = {
  "vauban": {
    owner: "Vauban",
    complexity: "simple",
    tenure: "Municipal eco-district",
    howHeld: "Former French military base south of the city centre. Acreage of the whole district not isolated here",
    narrative: "A Freiburg neighbourhood on a former French barracks, planned from 1993 as a sustainable model district.",
    divided: [{ label: "Site", holder: "Vauban", share: "Held", what: "District housing. Confirm current with the city of Freiburg." }],
  },
  "marinaleda": {
    owner: "Marinaleda",
    complexity: "simple",
    tenure: "Cooperative municipality",
    howHeld: "Andalusian municipal land. Acreage not isolated here",
    narrative: "An Andalusian municipality in the Sierra Sur de Sevilla.",
    divided: [{ label: "Site", holder: "Marinaleda", share: "Held", what: "A town. Confirm current with the municipality." }],
  },
  "hiware-bazar": {
    owner: "Hiware Bazar",
    complexity: "simple",
    tenure: "Village-council model village",
    howHeld: "Village lands. Acreage not isolated here",
    narrative: "A village in Nagar taluka, Ahilyanagar District, Maharashtra.",
    divided: [{ label: "Site", holder: "Hiware Bazar", share: "Held", what: "A village. Arrange with the panchayat before you assume a stay." }],
  },
  "khonoma": {
    owner: "Khonoma",
    complexity: "simple",
    tenure: "Indigenous green village",
    howHeld: "Village and sanctuary lands. Acreage not isolated here",
    narrative: "A Western Angami village in Kohima District, Nagaland.",
    divided: [{ label: "Site", holder: "Khonoma", share: "Held", what: "A village. Arrange locally." }],
  },
  "skanda-vale": {
    owner: "Skanda Vale",
    complexity: "simple",
    tenure: "Religious charity",
    howHeld: "22-acre Welsh smallholding. Three temples in converted farmhouses. 100 kW wind turbine. Animal sanctuary",
    narrative: "A 22-acre smallholding at Llanpumsaint, founded in 1973 by Guru Sri Subramanium.",
    divided: [{ label: "Site", holder: "Skanda Vale", share: "Held", what: "Pilgrim visits. Six daily pujas. Confirm current with the ashram." }],
  },
  "sunburst-sanctuary": {
    owner: "Sunburst Sanctuary",
    complexity: "simple",
    tenure: "Spiritual community",
    howHeld: "About 4,000 acres between Santa Barbara and Lompoc. Organic gardens and cattle",
    narrative: "Between Santa Barbara and Lompoc, about 4,000 acres.",
    divided: [{ label: "Site", holder: "Sunburst Sanctuary", share: "Held", what: "7200 S. Highway One, Lompoc." }],
  },
  "tiny-timbers": {
    owner: "Tiny Timbers",
    complexity: "simple",
    tenure: "Tiny-home agrihood",
    howHeld: "City-edge land in St. Croix Falls. Gardens, greenhouse, orchard, bees, timber pavilion",
    narrative: "A city-approved agrihood in St. Croix Falls.",
    divided: [{ label: "Site", holder: "Tiny Timbers", share: "Held", what: "St. Croix Falls. Apply for a pad lease. No short-term rentals." }],
  },
  "kahumana": {
    owner: "Kahumana Organic Farms",
    complexity: "simple",
    tenure: "Organic farm",
    howHeld: "Lualualei Homestead Road farm. Acreage not isolated here",
    narrative: "An organic farm on Lualualei Homestead Road in Waiʻanae.",
    divided: [{ label: "Site", holder: "Kahumana Organic Farms", share: "Held", what: "86-660 Lualualei Homestead Road, Waiʻanae. Confirm current with Kahumana." }],
  },
  "hollyhock": {
    owner: "Hollyhock",
    complexity: "simple",
    tenure: "Retreat centre",
    howHeld: "Cortes Island campus at Mansons Landing. Acreage not isolated here",
    narrative: "A Cortes Island retreat centre at Mansons Landing, founded in 1982 by Rex Weyler, Siobhan Robinsong, and Lee Robinsong, who had met at Greenpeace.",
    divided: [{ label: "Site", holder: "Hollyhock", share: "Held", what: "445 Highfield Road, Mansons Landing. Book a stay." }],
  },
  "tui-community": {
    owner: "Tui Community",
    complexity: "simple",
    tenure: "Charitable trust",
    howHeld: "50–52 hectares (~125 acres) of Wainui Bay farm",
    narrative: "On 50 hectares of Wainui Bay farm, between the sea and Abel Tasman, a Golden Bay community has lived under a charitable trust since 1984.",
    divided: [{ label: "Site", holder: "Tui Community", share: "Held", what: "Wainui Bay, Golden Bay. Work exchanges and hosted stays." }],
  },
  "finca-argayall": {
    owner: "Finca Argayall",
    complexity: "simple",
    tenure: "Work-stay finca",
    howHeld: "Coastal finca above Playa de Argaga. Acreage not isolated here",
    narrative: "A finca above Playa de Argaga in Valle Gran Rey, La Gomera.",
    divided: [{ label: "Site", holder: "Finca Argayall", share: "Held", what: "Playa de Argaga, Valle Gran Rey. Work-stay. Confirm current with argayall.com." }],
  },
  "gingerhill": {
    owner: "Gingerhill Farm Retreat",
    complexity: "simple",
    tenure: "Farm retreat",
    howHeld: "Kealakekua farm. Acreage not isolated here",
    narrative: "A farm retreat on Māmalahoa Highway in Kealakekua.",
    divided: [{ label: "Site", holder: "Gingerhill Farm Retreat", share: "Held", what: "81-6467 Māmalahoa Highway, Kealakekua. Work-stay. Confirm current with gingerhillfarm.com." }],
  },
  "gaiayoga": {
    owner: "GaiaYoga Gardens",
    complexity: "simple",
    tenure: "Intentional community",
    howHeld: "Puna District land. Acreage not isolated here",
    narrative: "A Puna District community near Pāhoa.",
    divided: [{ label: "Site", holder: "GaiaYoga Gardens", share: "Held", what: "Puna District, Pāhoa. Confirm current with gaiayoga.org." }],
  },
  "plenitud": {
    owner: "Plenitud PR",
    complexity: "simple",
    tenure: "Teaching farm",
    howHeld: "Las Marías land. Acreage not isolated here",
    narrative: "A permaculture education project in Las Marías, Puerto Rico.",
    divided: [{ label: "Site", holder: "Plenitud PR", share: "Held", what: "Las Marías, Puerto Rico." }],
  },
  "kul-kul-farm": {
    owner: "The Kul Kul Farm",
    complexity: "simple",
    tenure: "Regenerative farm",
    howHeld: "Sibang Kaja farm. Acreage not isolated here",
    narrative: "A regenerative farm in Sibang Kaja, Abiansemal, Bali.",
    divided: [{ label: "Site", holder: "The Kul Kul Farm", share: "Held", what: "Jl. Raya Sibang Kaja, Banjar Saren, Abiansemal. Confirm current with thekulkulfarm.com." }],
  },
  "wilgano": {
    owner: "Wilgano",
    complexity: "simple",
    tenure: "Eco resort",
    howHeld: "Rvaši forest. Acreage not isolated here",
    narrative: "A family eco resort in Rvaši, in Skadar Lake National Park, Cetinje.",
    divided: [{ label: "Site", holder: "Wilgano", share: "Held", what: "Rvaši, Cetinje. Book a bungalow at wilgano.com." }],
  },
  "rio-oro": {
    owner: "Río Oro Base Camp",
    complexity: "simple",
    tenure: "Work-stay base camp",
    howHeld: "One acre granted between Río Oro and Pejeperro.",
    narrative: "A work-stay base camp at Playa Río Oro on the Osa Peninsula, Puntarenas.",
    divided: [{ label: "Site", holder: "Río Oro Base Camp", share: "Held", what: "Playa Río Oro, Osa. Work-stay. Confirm current before you go." }],
  },
  "carate-base-camp": {
    owner: "Carate Base Camp (Mariposa Azul)",
    complexity: "simple",
    tenure: "Work-stay base camp",
    howHeld: "Playa Carate. Acreage not isolated here",
    narrative: "A work-stay base camp at Playa Carate on the Osa Peninsula, also called Mariposa Azul.",
    divided: [{ label: "Site", holder: "Carate Base Camp (Mariposa Azul)", share: "Held", what: "Playa Carate, Osa. Work-stay. Confirm current before you go." }],
  },
  "selahs-pig-sanctuary": {
    owner: "Selah’s Pig Sanctuary",
    complexity: "simple",
    tenure: "Animal sanctuary",
    howHeld: "Keaau land. Acreage not isolated here",
    narrative: "A pig sanctuary in Keaau, Hawaiʻi.",
    divided: [{ label: "Site", holder: "Selah’s Pig Sanctuary", share: "Held", what: "Keaau, Hawaiʻi. Work-stay. Confirm current before you go." }],
  },
  "skomer-island": {
    owner: "Skomer Island",
    complexity: "simple",
    tenure: "Nature reserve",
    howHeld: "Skomer Island National Nature Reserve. Island acreage of public record around 292 ha",
    narrative: "A National Nature Reserve off Martin’s Haven, Pembrokeshire.",
    divided: [{ label: "Site", holder: "Skomer Island", share: "Held", what: "Martin’s Haven, Pembrokeshire. Volunteer work-stay with the Wildlife Trust. Confirm current before you go." }],
  },
  "ananda-assisi": {
    owner: "Ananda Assisi",
    complexity: "simple",
    tenure: "Yoga community",
    howHeld: "Nocera Umbra land. Acreage not isolated here",
    narrative: "An Ananda yoga community at Via Montecchio 61, Nocera Umbra, in Umbria.",
    divided: [{ label: "Site", holder: "Ananda Assisi", share: "Held", what: "Via Montecchio 61, 06025 Nocera Umbra. Confirm current with ananda.it." }],
  },
  "plum-village": {
    owner: "Plum Village",
    complexity: "simple",
    tenure: "Monastery",
    howHeld: "Upper Hamlet at Thénac and sister hamlets. Acreage not isolated here",
    narrative: "A Buddhist practice centre at Thénac in the Dordogne, founded in 1982 by Thích Nhất Hạnh.",
    divided: [{ label: "Site", holder: "Plum Village", share: "Held", what: "437 Chemin du Pey, 24240 Thénac. Retreats and work-stay. plumvillage.org." }],
  },
  "mount-madonna": {
    owner: "Mount Madonna Center",
    complexity: "simple",
    tenure: "Yoga community",
    howHeld: "About 380 acres of redwood and meadow. Community garden, chickens, about 2 acres permaculture. Sankat Mochan Hanuman Temple",
    narrative: "A yoga village on the ridge above Watsonville.",
    divided: [{ label: "Site", holder: "Mount Madonna Center", share: "Held", what: "Retreat calendar and Weekend in Community. About 85 residents." }],
  },
  "new-vrindaban": {
    owner: "New Vrindaban",
    complexity: "simple",
    tenure: "Temple community",
    howHeld: "McCrearys Ridge near Moundsville. Palace of Gold on the ridge. Gardens and goshala.",
    narrative: "An ISKCON farm community founded in 1968. Palace of Gold, cow sanctuary, organic gardens.",
    divided: [{ label: "Site", holder: "New Vrindaban", share: "Held", what: "Temple, Palace of Gold, guest stays." }],
  },
  "billen-cliffs": {
    owner: "Billen Cliffs Village",
    complexity: "simple",
    tenure: "Strata village",
    howHeld: "Slopes of Mount Billen. About 115 parcels of about 2 acres",
    narrative: "A village on the slopes of Mount Billen, on Rock Valley Road between Larnook and Cawongla.",
    divided: [{ label: "Site", holder: "Billen Cliffs Village", share: "Held", what: "265 Martin Road, Larnook. Strata lots." }],
  },
  "glen-oro-farm": {
    owner: "Glen Oro Farm",
    complexity: "simple",
    tenure: "Horse farm",
    howHeld: "Oro-Medonte horse farm. Acreage not isolated here",
    narrative: "A horse farm in Oro-Medonte, ninety minutes north of Toronto.",
    divided: [{ label: "Site", holder: "Glen Oro Farm", share: "Held", what: "2574 Line 10 N, Oro-Medonte. Book glamping or a trail ride. glenoro.com." }],
  },
  "krishna-village-nsw": {
    owner: "Krishna Village",
    complexity: "simple",
    tenure: "Yoga farm",
    howHeld: "About 1,000 acres. Orchards, certified organic gardens, cows. Foothills of Mount Warning",
    narrative: "A Hare Krishna farm at 525 Tyalgum Road, Eungella, in the Northern Rivers.",
    divided: [{ label: "Site", holder: "Krishna Village", share: "Held", what: "525 Tyalgum Road, Eungella NSW 2484. Karma-yoga stay." }],
  },
};

export const livingBatch33Funding: Record<string, CommunityFunding> = {
  "vauban": {
    overview: "Ordinary housing, co-building groups, and a car-reducing street plan. The city of Freiburg holds the district.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Municipal eco-district",
    grants: [],
    private: [{ source: "Operations", amount: "Not isolated", year: "1998", certainty: "estimated", kind: "business", note: "Ordinary housing, co-building groups, and a car-reducing street plan. The city of Freiburg holds the district." }],
  },
  "marinaleda": {
    overview: "Municipal housing and cooperative farm work.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Cooperative municipality",
    grants: [],
    private: [{ source: "Operations", amount: "Not isolated", year: "1979", certainty: "estimated", kind: "business", note: "Municipal housing and cooperative farm work." }],
  },
  "hiware-bazar": {
    overview: "Village agriculture and the panchayat.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Village-council model village",
    grants: [],
    private: [{ source: "Operations", amount: "Not isolated", year: "1989", certainty: "estimated", kind: "business", note: "Village agriculture and the panchayat." }],
  },
  "khonoma": {
    overview: "Village agriculture and community tourism. Confirm current locally.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Indigenous green village",
    grants: [],
    private: [{ source: "Operations", amount: "Not isolated", year: "1998", certainty: "estimated", kind: "business", note: "Village agriculture and community tourism. Confirm current locally." }],
  },
  "skanda-vale": {
    overview: "Donations, the sanctuary, and pilgrim hospitality.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Religious charity",
    grants: [],
    private: [{ source: "Operations", amount: "Not isolated", year: "1973", certainty: "estimated", kind: "business", note: "Donations, the sanctuary, and pilgrim hospitality." }],
  },
  "sunburst-sanctuary": {
    overview: "Retreats, the farm, and the sanctuary.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Spiritual community",
    grants: [],
    private: [{ source: "Operations", amount: "Not isolated", year: "1969", certainty: "estimated", kind: "business", note: "Retreats, the farm, and the sanctuary." }],
  },
  "tiny-timbers": {
    overview: "Pad leases.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Tiny-home agrihood",
    grants: [],
    private: [{ source: "Operations", amount: "Not isolated", year: "2023", certainty: "estimated", kind: "business", note: "Pad leases." }],
  },
  "kahumana": {
    overview: "Farm, café, and programs. Confirm current with Kahumana.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Organic farm",
    grants: [],
    private: [{ source: "Operations", amount: "Not isolated", year: "1974", certainty: "estimated", kind: "business", note: "Farm, café, and programs. Confirm current with Kahumana." }],
  },
  "hollyhock": {
    overview: "Programs, stays, and the kitchen.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Retreat centre",
    grants: [],
    private: [{ source: "Operations", amount: "Not isolated", year: "1982", certainty: "estimated", kind: "business", note: "Programs, stays, and the kitchen." }],
  },
  "tui-community": {
    overview: "Resident contributions, hosted stays, and work exchanges.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Charitable trust",
    grants: [],
    private: [{ source: "Operations", amount: "Not isolated", year: "1984", certainty: "estimated", kind: "business", note: "Resident contributions, hosted stays, and work exchanges." }],
  },
  "finca-argayall": {
    overview: "Work-stay and courses. Confirm current with the finca.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Work-stay finca",
    grants: [],
    private: [{ source: "Operations", amount: "Not isolated", year: "1990", certainty: "estimated", kind: "business", note: "Work-stay and courses. Confirm current with the finca." }],
  },
  "gingerhill": {
    overview: "Retreat nights and work-stay. Confirm current with Gingerhill.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Farm retreat",
    grants: [],
    private: [{ source: "Operations", amount: "Not isolated", year: "2008", certainty: "estimated", kind: "business", note: "Retreat nights and work-stay. Confirm current with Gingerhill." }],
  },
  "gaiayoga": {
    overview: "Work-stay and community programs. gaiayoga.org.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Intentional community",
    grants: [],
    private: [{ source: "Operations", amount: "Not isolated", year: "1998", certainty: "estimated", kind: "business", note: "Work-stay and community programs. gaiayoga.org." }],
  },
  "plenitud": {
    overview: "Courses and work-stay. Confirm current with Plenitud.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Teaching farm",
    grants: [],
    private: [{ source: "Operations", amount: "Not isolated", year: "2010", certainty: "estimated", kind: "business", note: "Courses and work-stay. Confirm current with Plenitud." }],
  },
  "kul-kul-farm": {
    overview: "Programs, kitchen, and stays. Confirm current with the farm.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Regenerative farm",
    grants: [],
    private: [{ source: "Operations", amount: "Not isolated", year: "2012", certainty: "estimated", kind: "business", note: "Programs, kitchen, and stays. Confirm current with the farm." }],
  },
  "wilgano": {
    overview: "Bungalow nights. wilgano.com.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Eco resort",
    grants: [],
    private: [{ source: "Operations", amount: "Not isolated", year: "2020", certainty: "estimated", kind: "business", note: "Bungalow nights. wilgano.com." }],
  },
  "rio-oro": {
    overview: "Work-stay. Confirm current before you go.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Work-stay base camp",
    grants: [],
    private: [{ source: "Operations", amount: "Not isolated", year: "2010", certainty: "estimated", kind: "business", note: "Work-stay. Confirm current before you go." }],
  },
  "carate-base-camp": {
    overview: "Work-stay. Confirm current before you go.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Work-stay base camp",
    grants: [],
    private: [{ source: "Operations", amount: "Not isolated", year: "2010", certainty: "estimated", kind: "business", note: "Work-stay. Confirm current before you go." }],
  },
  "selahs-pig-sanctuary": {
    overview: "Donations and work-stay. Confirm current before you go.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Animal sanctuary",
    grants: [],
    private: [{ source: "Operations", amount: "Not isolated", year: "2015", certainty: "estimated", kind: "business", note: "Donations and work-stay. Confirm current before you go." }],
  },
  "skomer-island": {
    overview: "Landings and volunteer stays.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Nature reserve",
    grants: [],
    private: [{ source: "Operations", amount: "Not isolated", year: "1959", certainty: "estimated", kind: "business", note: "Landings and volunteer stays." }],
  },
  "ananda-assisi": {
    overview: "Courses and stays.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Yoga community",
    grants: [],
    private: [{ source: "Operations", amount: "Not isolated", year: "1986", certainty: "estimated", kind: "business", note: "Courses and stays." }],
  },
  "plum-village": {
    overview: "Retreats and monastic life. plumvillage.org.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Monastery",
    grants: [],
    private: [{ source: "Operations", amount: "Not isolated", year: "1982", certainty: "estimated", kind: "business", note: "Retreats and monastic life. plumvillage.org." }],
  },
  "mount-madonna": {
    overview: "Retreats, the school, and community programs.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Yoga community",
    grants: [],
    private: [{ source: "Operations", amount: "Not isolated", year: "1978", certainty: "estimated", kind: "business", note: "Retreats, the school, and community programs." }],
  },
  "new-vrindaban": {
    overview: "Temple, Palace of Gold visits, and guest stays.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Temple community",
    grants: [],
    private: [{ source: "Operations", amount: "Not isolated", year: "1968", certainty: "estimated", kind: "business", note: "Temple, Palace of Gold visits, and guest stays." }],
  },
  "billen-cliffs": {
    overview: "Strata lots.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Strata village",
    grants: [],
    private: [{ source: "Operations", amount: "Not isolated", year: "1982", certainty: "estimated", kind: "business", note: "Strata lots." }],
  },
  "glen-oro-farm": {
    overview: "Glamping, trail rides, lessons, boarding. glenoro.com.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Horse farm",
    grants: [],
    private: [{ source: "Operations", amount: "Not isolated", year: "1967", certainty: "estimated", kind: "business", note: "Glamping, trail rides, lessons, boarding. glenoro.com." }],
  },
  "krishna-village-nsw": {
    overview: "Retreats and karma-yoga stays.",
    grantsHeadline: "No major public construction grant isolated here",
    privateHeadline: "Yoga farm",
    grants: [],
    private: [{ source: "Operations", amount: "Not isolated", year: "1977", certainty: "estimated", kind: "business", note: "Retreats and karma-yoga stays." }],
  },
};

export const livingBatch33VisitJoin: Record<string, VisitJoin> = {
  "vauban": {
    visit: 3,
    join: 2,
    visitProcess: "District housing. Confirm current with the city of Freiburg.",
    joinProcess: "The city of Freiburg. Co-building groups and Forum Vauban in the origin story.",
  },
  "marinaleda": {
    visit: 3,
    join: 2,
    visitProcess: "A town. Confirm current with the municipality.",
    joinProcess: "The municipality. Cooperative work on the land.",
  },
  "hiware-bazar": {
    visit: 2,
    join: 1,
    visitProcess: "A village. Arrange with the panchayat before you assume a stay.",
    joinProcess: "The gram panchayat.",
  },
  "khonoma": {
    visit: 3,
    join: 1,
    visitProcess: "A village. Arrange locally.",
    joinProcess: "The village council.",
  },
  "skanda-vale": {
    visit: 4,
    join: 2,
    visitProcess: "Pilgrim visits. Six daily pujas. Confirm current with the ashram.",
    joinProcess: "The monastic community. Charity 511166.",
  },
  "sunburst-sanctuary": {
    visit: 4,
    join: 2,
    visitProcess: "7200 S. Highway One, Lompoc.",
    joinProcess: "Sunburst. Patricia Paulsen.",
  },
  "tiny-timbers": {
    visit: 3,
    join: 3,
    visitProcess: "St. Croix Falls. Apply for a pad lease. No short-term rentals.",
    joinProcess: "The founders and the city ordinance.",
  },
  "kahumana": {
    visit: 4,
    join: 2,
    visitProcess: "86-660 Lualualei Homestead Road, Waiʻanae. Confirm current with Kahumana.",
    joinProcess: "Kahumana.",
  },
  "hollyhock": {
    visit: 4,
    join: 2,
    visitProcess: "445 Highfield Road, Mansons Landing. Book a stay.",
    joinProcess: "Hollyhock Leadership Center.",
  },
  "tui-community": {
    visit: 3,
    join: 2,
    visitProcess: "Wainui Bay, Golden Bay. Work exchanges and hosted stays.",
    joinProcess: "Trustees hold the deed. Residents run the week.",
  },
  "finca-argayall": {
    visit: 3,
    join: 2,
    visitProcess: "Playa de Argaga, Valle Gran Rey. Work-stay. Confirm current with argayall.com.",
    joinProcess: "The finca.",
  },
  "gingerhill": {
    visit: 4,
    join: 2,
    visitProcess: "81-6467 Māmalahoa Highway, Kealakekua. Work-stay. Confirm current with gingerhillfarm.com.",
    joinProcess: "The farm.",
  },
  "gaiayoga": {
    visit: 3,
    join: 2,
    visitProcess: "Puna District, Pāhoa. Confirm current with gaiayoga.org.",
    joinProcess: "The community.",
  },
  "plenitud": {
    visit: 3,
    join: 2,
    visitProcess: "Las Marías, Puerto Rico.",
    joinProcess: "Plenitud.",
  },
  "kul-kul-farm": {
    visit: 4,
    join: 2,
    visitProcess: "Jl. Raya Sibang Kaja, Banjar Saren, Abiansemal. Confirm current with thekulkulfarm.com.",
    joinProcess: "The farm.",
  },
  "wilgano": {
    visit: 4,
    join: 1,
    visitProcess: "Rvaši, Cetinje. Book a bungalow at wilgano.com.",
    joinProcess: "The family.",
  },
  "rio-oro": {
    visit: 3,
    join: 2,
    visitProcess: "Playa Río Oro, Osa, Puntarenas 60702. +506 8456-9201.",
    joinProcess: "Volunteer 1–10 weeks, start Mondays. $290/week for 1–3 weeks, $250/week for 4 weeks or more. Internships $250/week, food and lodging included. Confirm current.",
  },
  "carate-base-camp": {
    visit: 3,
    join: 2,
    visitProcess: "Playa Carate, Osa. +506 8456-9201.",
    joinProcess: "Volunteer from two weeks. $290/week for 1–3 weeks, $250/week for 4 weeks or more. Internships $250/week, food and lodging included. Confirm current.",
  },
  "selahs-pig-sanctuary": {
    visit: 3,
    join: 2,
    visitProcess: "Keaau, Hawaiʻi. Work-stay. Confirm current before you go.",
    joinProcess: "The sanctuary.",
  },
  "skomer-island": {
    visit: 3,
    join: 2,
    visitProcess: "Martin’s Haven, Pembrokeshire. Volunteer work-stay with the Wildlife Trust. Confirm current before you go.",
    joinProcess: "Wildlife Trust of South and West Wales.",
  },
  "ananda-assisi": {
    visit: 4,
    join: 2,
    visitProcess: "Via Montecchio 61, 06025 Nocera Umbra. Confirm current with ananda.it.",
    joinProcess: "Ananda Assisi.",
  },
  "plum-village": {
    visit: 4,
    join: 2,
    visitProcess: "437 Chemin du Pey, 24240 Thénac. Retreats and work-stay. plumvillage.org.",
    joinProcess: "The monastic community.",
  },
  "mount-madonna": {
    visit: 4,
    join: 2,
    visitProcess: "445 Summit Road, Watsonville. Weekend in Community and the retreat calendar.",
    joinProcess: "Mount Madonna Center.",
  },
  "new-vrindaban": {
    visit: 4,
    join: 2,
    visitProcess: "3759 McCrearys Ridge Road, Moundsville. Palace of Gold tours. Confirm current with the temple.",
    joinProcess: "The temple community.",
  },
  "billen-cliffs": {
    visit: 2,
    join: 3,
    visitProcess: "265 Martin Road, Larnook. Strata lots.",
    joinProcess: "The strata village.",
  },
  "glen-oro-farm": {
    visit: 5,
    join: 1,
    visitProcess: "2574 Line 10 N, Oro-Medonte. Book glamping or a trail ride. glenoro.com.",
    joinProcess: "The family.",
  },
  "krishna-village-nsw": {
    visit: 4,
    join: 2,
    visitProcess: "525 Tyalgum Road, Eungella NSW 2484. Karma-yoga stay.",
    joinProcess: "The farm community.",
  },
};

export const livingBatch33DailyLife: Record<string, DailyLife> = {
  "vauban": {
    typical: [
      { title: "Municipal eco-district", detail: "Vauban, Freiburg im Breisgau, Baden-Württemberg" },
      { title: "Founding", detail: "Planning from 1993. Forum Vauban 1994. Construction from 1998; first residents 2001" },
      { title: "Door", detail: "City of Freiburg." },
    ],
    unique: { title: "A car-reducing street plan", detail: "Freiburg’s Stadtteil on a former French barracks. Co-building groups and Forum Vauban from 1994; construction from 1998. Ordinary housing, a car-reducing street plan, and the city still holds the district." },
  },
  "marinaleda": {
    typical: [
      { title: "Cooperative municipality", detail: "Marinaleda, Sierra Sur de Sevilla, Andalusia" },
      { title: "Founding", detail: "Land occupation from 1979. Self-build houses; sale prohibited to prevent speculation" },
      { title: "Door", detail: "The municipality." },
    ],
    unique: { title: "Houses you can live in, not sell", detail: "After farmworkers occupied land in 1979, this Andalusian municipality self-built houses with sale prohibited to keep speculation out. Cooperative farm work still sits beside that municipal housing." },
  },
  "hiware-bazar": {
    typical: [
      { title: "Village-council model village", detail: "Hiware Bazar, Nagar taluka, Ahilyanagar District, Maharashtra" },
      { title: "Founding", detail: "Village-council watershed work from 1989 under sarpanch Popatrao Pawar" },
      { title: "Door", detail: "The gram panchayat." },
    ],
    unique: { title: "Watershed work from 1989", detail: "When Popatrao Pawar became sarpanch in 1989, the gram panchayat took up watershed regeneration. Grazing rules still sit with the village council." },
  },
  "khonoma": {
    typical: [
      { title: "Indigenous green village", detail: "Khonoma, Sechü Zubza, Kohima District, Nagaland" },
      { title: "Founding", detail: "Khonoma Nature Conservation and Tragopan Sanctuary (KNCTS) 1998. India’s first green village. Western Angami" },
      { title: "Door", detail: "The village council." },
    ],
    unique: { title: "India’s first green village", detail: "In 1998 the Western Angami village declared the Khonoma Nature Conservation and Tragopan Sanctuary and put a hunt ban in place. That KNCTS rule is the public fact this atlas holds." },
  },
  "skanda-vale": {
    typical: [
      { title: "Religious charity", detail: "Llanpumsaint, Carmarthen SA33 6JT" },
      { title: "Founding", detail: "Founded 1973 by Guru Sri Subramanium. 22-acre Welsh smallholding. Charity 511166" },
      { title: "Door", detail: "The ashram. Charity 511166." },
    ],
    unique: { title: "Three temples on a Welsh farm", detail: "Guru Sri Subramanium founded the ashram in 1973 on a 22-acre smallholding at Llanpumsaint. Converted farmhouses hold three temples; six daily pujas, an animal sanctuary, and a 100 kW wind turbine. Charity 511166." },
  },
  "sunburst-sanctuary": {
    typical: [
      { title: "Spiritual community", detail: "7200 S. Highway One, Lompoc, CA 93436" },
      { title: "Founding", detail: "Norman Paulsen founded Brotherhood of the Sun in Santa Barbara in 1969. Sanctuary bought 1996" },
      { title: "Door", detail: "The sanctuary at 7200 S. Highway One." },
    ],
    unique: { title: "Highway One sanctuary", detail: "Norman Paulsen founded the Brotherhood of the Sun in Santa Barbara in 1969; the community bought this ~4,000-acre sanctuary at 7200 S. Highway One in 1996. Daily meditation, organic gardens, and cattle still run here under Patricia Paulsen." },
  },
  "tiny-timbers": {
    typical: [
      { title: "Tiny-home agrihood", detail: "St. Croix Falls, Wisconsin" },
      { title: "Founding", detail: "2023 tiny-home agrihood. Shane and Melissa Jones. City-approved. 16 pads" },
      { title: "Door", detail: "https://www.tinytimbersagrihood.com/" },
    ],
    unique: { title: "Tiny Timbers", detail: "Shane and Melissa Jones opened a city-approved agrihood of 16 tiny-home pads in St. Croix Falls in 2023; residents bring a certified house of 150–399 sq ft, lease the pad, and share gardens, a greenhouse, orchard, bees, and a timber pavilion — no short-term rentals." },
  },
  "kahumana": {
    typical: [
      { title: "Organic farm", detail: "86-660 Lualualei Homestead Road, Waiʻanae, HI 96792" },
      { title: "Founding", detail: "Kahumana Organic Farms, Waiʻanae. Organic farm and community" },
      { title: "Door", detail: "Café, farm, and community programs." },
    ],
    unique: { title: "Kahumana Organic Farms", detail: "Waiʻanae organic farm and café." },
  },
  "hollyhock": {
    typical: [
      { title: "Retreat centre", detail: "445 Highfield Road, Mansons Landing, Cortes Island, BC V0P 1K0" },
      { title: "Founding", detail: "Founded 1982 by Rex Weyler, Siobhan Robinsong, and Lee Robinsong" },
      { title: "Door", detail: "Book a stay at Mansons Landing." },
    ],
    unique: { title: "Hollyhock", detail: "Founded in 1982 by three people who had met at Greenpeace. Programs still run from Mansons Landing on Cortes Island, opened in 1982." },
  },
  "tui-community": {
    typical: [
      { title: "Charitable trust", detail: "Wainui Bay, Golden Bay, 23 km from Tākaka, edge of Abel Tasman National Park" },
      { title: "Founding", detail: "1984 Tui Land Trust purchase; assets later moved to Tui Spiritual and Educational Trust" },
      { title: "Door", detail: "https://www.tuitrust.org.nz/" },
    ],
    unique: { title: "Tui Community", detail: "Tui Land Trust bought the 50-hectare Wainui Bay farm in 1984; the assets later moved to Tui Spiritual and Educational Trust, so the land stays undivided while about forty people live there with an organic garden and work exchanges." },
  },
  "finca-argayall": {
    typical: [
      { title: "Work-stay finca", detail: "Playa de Argaga, Valle Gran Rey, La Gomera, Canary Islands" },
      { title: "Founding", detail: "Finca Argayall, Playa de Argaga, Valle Gran Rey. Work-stay of public record" },
      { title: "Door", detail: "https://www.argayall.com/" },
    ],
    unique: { title: "Finca Argayall", detail: "A finca above Playa de Argaga on La Gomera." },
  },
  "gingerhill": {
    typical: [
      { title: "Farm retreat", detail: "81-6467 Māmalahoa Highway, Kealakekua, HI 96750" },
      { title: "Founding", detail: "Gingerhill Farm Retreat, Kealakekua. Work-stay farm" },
      { title: "Door", detail: "https://gingerhillfarm.com/" },
    ],
    unique: { title: "Gingerhill Farm Retreat", detail: "Work-stay farm retreat in Kealakekua." },
  },
  "gaiayoga": {
    typical: [
      { title: "Intentional community", detail: "Puna District, Pāhoa, Island of Hawaiʻi" },
      { title: "Founding", detail: "GaiaYoga Gardens, Puna District, Pāhoa" },
      { title: "Door", detail: "https://www.gaiayoga.org/" },
    ],
    unique: { title: "GaiaYoga Gardens", detail: "Puna District permaculture community near Pāhoa." },
  },
  "plenitud": {
    typical: [
      { title: "Teaching farm", detail: "Las Marías, Puerto Rico (P.O. Box 394, Las Marías, PR 00670)" },
      { title: "Founding", detail: "Plenitud, Las Marías, Puerto Rico. Permaculture education" },
      { title: "Door", detail: "Courses and work-stay." },
    ],
    unique: { title: "Plenitud PR", detail: "Plenitud opened as a permaculture education project in Las Marías, Puerto Rico, in 2010; courses and work-stay are the public door (P.O. Box 394)." },
  },
  "kul-kul-farm": {
    typical: [
      { title: "Regenerative farm", detail: "Jl. Raya Sibang Kaja, Banjar Saren, Abiansemal, Bali" },
      { title: "Founding", detail: "The Kul Kul Farm, Sibang Kaja, Abiansemal, Bali" },
      { title: "Door", detail: "https://www.thekulkulfarm.com/" },
    ],
    unique: { title: "The Kul Kul Farm", detail: "Regenerative farm and kitchen in Sibang Kaja." },
  },
  "wilgano": {
    typical: [
      { title: "Eco resort", detail: "Rvaši, Skadar Lake National Park, Cetinje 81253" },
      { title: "Founding", detail: "Family eco resort in Rvaši, Skadar Lake National Park" },
      { title: "Door", detail: "https://www.wilgano.com/" },
    ],
    unique: { title: "Wilgano", detail: "Family eco resort in Rvaši, Skadar Lake National Park." },
  },
  "rio-oro": {
    typical: [
      { title: "Night patrol", detail: "Highest nesting stretch at Playa Río Oro." },
      { title: "Two-story rancho", detail: "Mixed dorm for staff and volunteers." },
      { title: "Permaculture and plastic upcycling", detail: "Small-scale food growing. Beach plastic recycled on camp." },
    ],
    unique: { title: "First research station", detail: "A local landowner granted one acre between Río Oro and Pejeperro; mid-2019 this became COPROT’s first research station — a two-story rancho in front of their busiest nesting stretch. They now manage over 8 km of beach and register more than 7,000 nests a season." },
  },
  "carate-base-camp": {
    typical: [
      { title: "Hatchery", detail: "Up to 300 nests. Protects nests from domestic dogs. Temperature data." },
      { title: "Playa Carate", detail: "Camp in the Carate community, close to the school and plaza." },
      { title: "Volunteer terms", detail: "From two weeks. $290/week for 1–3 weeks, $250/week for 4 weeks or more." },
    ],
    unique: { title: "Second COPROT camp", detail: "Opened December 2022. Also called Mariposa Azul." },
  },
  "selahs-pig-sanctuary": {
    typical: [
      { title: "Animal sanctuary", detail: "Keaau, Hawaiʻi 96749" },
      { title: "Founding", detail: "Selah’s Pig Sanctuary, Keaau. Work-stay" },
      { title: "Door", detail: "https://www.selahspigsanctuary.com/" },
    ],
    unique: { title: "Selah’s Pig Sanctuary", detail: "A pig sanctuary in Keaau." },
  },
  "skomer-island": {
    typical: [
      { title: "Nature reserve", detail: "Skomer Island, Martin’s Haven, Pembrokeshire SA62 3BJ" },
      { title: "Founding", detail: "National Nature Reserve. Work-stay with the Wildlife Trust of South and West Wales" },
      { title: "Door", detail: "Landings from Martin’s Haven." },
    ],
    unique: { title: "Skomer Island", detail: "A National Nature Reserve off Martin’s Haven since 1959, about 292 ha, with work-stay through the Wildlife Trust of South and West Wales." },
  },
  "ananda-assisi": {
    typical: [
      { title: "Yoga community", detail: "Via Montecchio 61, 06025 Nocera Umbra (PG)" },
      { title: "Founding", detail: "Ananda Assisi, Nocera Umbra. Ananda yoga community" },
      { title: "Door", detail: "https://www.ananda.it/" },
    ],
    unique: { title: "Ananda Assisi", detail: "Ananda yoga community in Nocera Umbra. Courses still leave from Via Montecchio 61." },
  },
  "plum-village": {
    typical: [
      { title: "Monastery", detail: "437 Chemin du Pey, 24240 Thénac (Upper Hamlet)" },
      { title: "Founding", detail: "Founded 1982 by Thích Nhất Hạnh. Upper Hamlet at Thénac" },
      { title: "Door", detail: "https://plumvillage.org/" },
    ],
    unique: { title: "Plum Village", detail: "Founded in 1982 by Thích Nhất Hạnh; Upper Hamlet at Thénac." },
  },
  "mount-madonna": {
    typical: [
      { title: "Garden and chickens", detail: "Community garden and about 2 acres of permaculture." },
      { title: "About 85 residents", detail: "Live on the mountain, plus Mount Madonna School." },
      { title: "A Watsonville week", detail: "Retreat calendar, or Weekend in Community." },
    ],
    unique: { title: "The temple Baba Hari Dass marked with his foot", detail: "A yoga village on about 380 acres of redwood and meadow above Watsonville, founded in 1978 by Baba Hari Dass’s students in the Hanuman Fellowship. In 2001 they brought a Hanuman murti from India; he wrote “It needs a Temple,” then marked the site with his foot. Prana Pratishta followed in 2003." },
  },
  "new-vrindaban": {
    typical: [
      { title: "Cow sanctuary", detail: "Protected here since 1969." },
      { title: "Organic gardens", detail: "Over 21,000 pounds of vegetables put up in 2023." },
      { title: "A Moundsville week", detail: "Temple life, or a Palace of Gold visit." },
    ],
    unique: { title: "A palace finished as a memorial shrine", detail: "Kirtanananda Swami and Hayagriva Das founded the McCrearys Ridge farm in 1968 under Prabhupada; the Palace of Gold, begun as his residence, was dedicated as a memorial shrine on 2 September 1979 after his 1977 death, and listed on the National Register in 2019." },
  },
  "billen-cliffs": {
    typical: [
      { title: "Strata village", detail: "Rock Valley Road, between Larnook and Cawongla, NSW" },
      { title: "Founding", detail: "1982 Billen Cliffs Pty Ltd. Strata title from 1990. About 115 lots of about 2 acres" },
      { title: "Door", detail: "Strata lots. Write the village." },
    ],
    unique: { title: "Billen Cliffs Village", detail: "Australia’s first strata-titled village; no dogs or cats." },
  },
  "glen-oro-farm": {
    typical: [
      { title: "Horse farm", detail: "2574 Line 10 N, Oro-Medonte, ON L0L 1T0" },
      { title: "Founding", detail: "Farm from 1841. Family owned since 1967. Glamping eco-retreat and equestrian" },
      { title: "Door", detail: "https://www.glenoro.com/" },
    ],
    unique: { title: "Glen Oro Farm", detail: "Family owned since 1967; glamping on a working horse farm." },
  },
  "krishna-village-nsw": {
    typical: [
      { title: "Yoga farm", detail: "525 Tyalgum Road, Eungella, NSW 2484" },
      { title: "Founding", detail: "Hare Krishna farm New Govardhana. Krishna Village eco yoga community. About 1,000 acres" },
      { title: "Door", detail: "Karma-yoga stay through the village." },
    ],
    unique: { title: "Krishna Village", detail: "About 1,000 acres under Mount Warning; karma-yoga three days a week." },
  },
};

export const livingBatch33Informal: Record<string, InformalAgreement[]> = {
  "vauban": [
    { kind: "land-care", why: "Built on a former French barracks named for Vauban." },
  ],
  "marinaleda": [
    { kind: "land-care", why: "Houses may be lived in, not sold for speculation." },
    { kind: "kitchen-table", why: "Houses may be lived in, not sold for speculation." },
  ],
  "hiware-bazar": [
    { kind: "land-care", why: "Watershed work from 1989 is what the village is known for." },
    { kind: "kitchen-table", why: "Watershed work from 1989 is what the village is known for." },
    { kind: "guest-stay", why: "Watershed work from 1989 is what the village is known for." },
  ],
  "khonoma": [
    { kind: "land-care", why: "KNCTS 1998 hunt ban. India’s first green village." },
    { kind: "kitchen-table", why: "KNCTS 1998 hunt ban. India’s first green village." },
  ],
  "skanda-vale": [
    { kind: "land-care", why: "Three temples in converted farmhouses; about 90,000 pilgrims a year." },
    { kind: "kitchen-table", why: "Three temples in converted farmhouses; about 90,000 pilgrims a year." },
  ],
  "sunburst-sanctuary": [
    { kind: "land-care", why: "About 4,000 acres of gardens, cattle, and oak at 7200 S. Highway One." },
    { kind: "kitchen-table", why: "Sunday brunch after meditation is the public table. Residents still eat here on Tuesday." },
    { kind: "course-host", why: "Sunday meditation, garden tours, Kriya retreats, and weekend workshops are the public door. The sanctuary is still a home when the group leaves." },
    { kind: "quiet-practice", why: "Kriya Yoga in the lineage of Yogananda and Norman Paulsen. A Sunday guest is not a resident on day one." },
  ],
  "tiny-timbers": [
    { kind: "land-care", why: "Sixteen pads; you bring the house, 150–399 sq ft." },
    { kind: "kitchen-table", why: "Sixteen pads; you bring the house, 150–399 sq ft." },
  ],
  "kahumana": [
    { kind: "land-care", why: "Waiʻanae organic farm and café." },
    { kind: "kitchen-table", why: "Waiʻanae organic farm and café." },
  ],
  "hollyhock": [
    { kind: "land-care", why: "Founded in 1982 by three people who had met at Greenpeace." },
    { kind: "kitchen-table", why: "Founded in 1982 by three people who had met at Greenpeace." },
    { kind: "guest-stay", why: "Founded in 1982 by three people who had met at Greenpeace." },
    { kind: "course-host", why: "Seventy-plus programmes a season on Cortes Island. A workshop week is not membership of the land." },
  ],
  "tui-community": [
    { kind: "land-care", why: "Land held by a charitable trust since 1984; no private subdivision of the Wainui farm." },
    { kind: "kitchen-table", why: "Land held by a charitable trust since 1984; no private subdivision of the Wainui farm." },
    { kind: "guest-stay", why: "Land held by a charitable trust since 1984; no private subdivision of the Wainui farm." },
    { kind: "volunteer-intern", why: "Two-week work-exchange and a six-week live-in term, arranged from the visit page. Closed mid-December to mid-January." },
    { kind: "membership-trial", why: "A four-to-six-week visitor or work-exchange stay is the usual door before anyone talks about living on the trust land. There is no title to buy." },
  ],
  "finca-argayall": [
    { kind: "land-care", why: "A finca above Playa de Argaga on La Gomera." },
    { kind: "volunteer-intern", why: "A finca above Playa de Argaga on La Gomera." },
    { kind: "kitchen-table", why: "A finca above Playa de Argaga on La Gomera." },
    { kind: "guest-stay", why: "A finca above Playa de Argaga on La Gomera." },
  ],
  "gingerhill": [
    { kind: "land-care", why: "Work-stay farm retreat in Kealakekua." },
    { kind: "volunteer-intern", why: "Work-stay farm retreat in Kealakekua." },
    { kind: "kitchen-table", why: "Work-stay farm retreat in Kealakekua." },
    { kind: "guest-stay", why: "Work-stay farm retreat in Kealakekua." },
  ],
  "gaiayoga": [
    { kind: "land-care", why: "Puna District permaculture community near Pāhoa." },
    { kind: "volunteer-intern", why: "Puna District permaculture community near Pāhoa." },
    { kind: "kitchen-table", why: "Puna District permaculture community near Pāhoa." },
  ],
  "plenitud": [
    { kind: "land-care", why: "Permaculture teaching farm in Las Marías." },
    { kind: "kitchen-table", why: "Permaculture teaching farm in Las Marías." },
    { kind: "course-host", why: "Monthly public farm tours and booked workshops in agroecology and bioconstruction. A tour lunch is not a residency." },
  ],
  "kul-kul-farm": [
    { kind: "land-care", why: "Regenerative farm and kitchen in Sibang Kaja." },
    { kind: "kitchen-table", why: "Regenerative farm and kitchen in Sibang Kaja." },
    { kind: "course-host", why: "Bamboo workshops, cooking classes, and hosted retreats on the farm. A workshop day is not a share of Sibang Kaja." },
  ],
  "wilgano": [
    { kind: "land-care", why: "Family eco resort in Rvaši, Skadar Lake National Park." },
    { kind: "guest-stay", why: "Family eco resort in Rvaši, Skadar Lake National Park." },
  ],
  "rio-oro": [
    { kind: "land-care", why: "Work-stay base camp at Playa Río Oro." },
    { kind: "volunteer-intern", why: "Work-stay base camp at Playa Río Oro." },
    { kind: "kitchen-table", why: "Work-stay base camp at Playa Río Oro." },
    { kind: "guest-stay", why: "Work-stay base camp at Playa Río Oro." },
  ],
  "carate-base-camp": [
    { kind: "land-care", why: "Work-stay base camp at Playa Carate, also called Mariposa Azul." },
    { kind: "volunteer-intern", why: "Work-stay base camp at Playa Carate, also called Mariposa Azul." },
    { kind: "kitchen-table", why: "Work-stay base camp at Playa Carate, also called Mariposa Azul." },
    { kind: "guest-stay", why: "Work-stay base camp at Playa Carate, also called Mariposa Azul." },
  ],
  "selahs-pig-sanctuary": [
    { kind: "land-care", why: "A pig sanctuary in Keaau." },
    { kind: "volunteer-intern", why: "A pig sanctuary in Keaau." },
    { kind: "kitchen-table", why: "A pig sanctuary in Keaau." },
    { kind: "guest-stay", why: "A pig sanctuary in Keaau." },
  ],
  "skomer-island": [
    { kind: "land-care", why: "Seabird National Nature Reserve; work-stay with the Wildlife Trust." },
    { kind: "volunteer-intern", why: "Seabird National Nature Reserve; work-stay with the Wildlife Trust." },
    { kind: "guest-stay", why: "Seabird National Nature Reserve; work-stay with the Wildlife Trust." },
  ],
  "ananda-assisi": [
    { kind: "land-care", why: "Ananda yoga community in Nocera Umbra." },
    { kind: "kitchen-table", why: "Ananda yoga community in Nocera Umbra." },
    { kind: "course-host", why: "Residential yoga and meditation courses, weekends and five-day stays. Book on corsi.ananda.it. A course bed is not citizenship of the community." },
  ],
  "plum-village": [
    { kind: "land-care", why: "Founded in 1982 by Thích Nhất Hạnh; Upper Hamlet at Thénac." },
    { kind: "volunteer-intern", why: "Founded in 1982 by Thích Nhất Hạnh; Upper Hamlet at Thénac." },
    { kind: "kitchen-table", why: "Founded in 1982 by Thích Nhất Hạnh; Upper Hamlet at Thénac." },
    { kind: "guest-stay", why: "Founded in 1982 by Thích Nhất Hạnh; Upper Hamlet at Thénac." },
  ],
  "mount-madonna": [
    { kind: "land-care", why: "Community garden, chickens, about 2 acres of permaculture." },
    { kind: "kitchen-table", why: "About 85 residents. Retreats and Weekend in Community." },
    { kind: "course-host", why: "Retreat calendar. Mount Madonna School." },
  ],
  "new-vrindaban": [
    { kind: "land-care", why: "Organic gardens. Over 21,000 pounds of vegetables in 2023." },
    { kind: "animals-stock", why: "Cow sanctuary since 1969." },
    { kind: "kitchen-table", why: "Temple community. Guest stays." },
    { kind: "course-host", why: "Guided tours of Prabhupada’s Palace of Gold every half hour in season. A palace ticket is not a room in a devotee house." },
  ],
  "billen-cliffs": [
    { kind: "land-care", why: "Australia’s first strata-titled village; no dogs or cats." },
    { kind: "kitchen-table", why: "Australia’s first strata-titled village; no dogs or cats." },
  ],
  "glen-oro-farm": [
    { kind: "land-care", why: "Family owned since 1967; glamping on a working horse farm." },
    { kind: "kitchen-table", why: "Family owned since 1967; glamping on a working horse farm." },
    { kind: "guest-stay", why: "Family owned since 1967; glamping on a working horse farm." },
  ],
  "krishna-village-nsw": [
    { kind: "land-care", why: "About 1,000 acres under Mount Warning; karma-yoga three days a week." },
    { kind: "volunteer-intern", why: "About 1,000 acres under Mount Warning; karma-yoga three days a week." },
    { kind: "kitchen-table", why: "About 1,000 acres under Mount Warning; karma-yoga three days a week." },
    { kind: "guest-stay", why: "About 1,000 acres under Mount Warning; karma-yoga three days a week." },
  ],
};

export const livingBatch33Governance: Record<string, Governance> = {
  "vauban": {
    model: "assembly",
    modelLabel: "Municipal eco-district",
    unique: false,
    summary: "The city of Freiburg. Co-building groups and Forum Vauban in the origin story.",
    whoDecides: "The city of Freiburg. Co-building groups and Forum Vauban in the origin story.",
    bodies: [
      { name: "Vauban", role: "City of Freiburg." },
    ],
    howItRuns: "District housing. Confirm current with the city of Freiburg.",
  },
  "marinaleda": {
    model: "assembly",
    modelLabel: "Cooperative municipality",
    unique: false,
    summary: "The municipality. Cooperative work on the land.",
    whoDecides: "The municipality. Cooperative work on the land.",
    bodies: [
      { name: "Marinaleda", role: "The municipality." },
    ],
    howItRuns: "A town. Confirm current with the municipality.",
  },
  "hiware-bazar": {
    model: "indigenous-assembly",
    modelLabel: "Village-council model village",
    unique: false,
    summary: "The gram panchayat.",
    whoDecides: "The gram panchayat.",
    bodies: [
      { name: "Hiware Bazar", role: "The gram panchayat." },
    ],
    howItRuns: "A village. Arrange with the panchayat before you assume a stay.",
  },
  "khonoma": {
    model: "indigenous-assembly",
    modelLabel: "Indigenous green village",
    unique: false,
    summary: "The village council.",
    whoDecides: "The village council.",
    bodies: [
      { name: "Khonoma", role: "The village council." },
    ],
    howItRuns: "A village. Arrange locally.",
  },
  "skanda-vale": {
    model: "spiritual",
    modelLabel: "Religious charity",
    unique: false,
    summary: "The monastic community. Charity 511166.",
    whoDecides: "The monastic community. Charity 511166.",
    bodies: [
      { name: "Skanda Vale", role: "The monastic community. Charity 511166." },
    ],
    howItRuns: "Pilgrim visits. Six daily pujas. Confirm current with the ashram.",
  },
  "sunburst-sanctuary": {
    model: "spiritual",
    modelLabel: "Spiritual community",
    unique: false,
    summary: "Sunburst. Patricia Paulsen.",
    whoDecides: "Sunburst. Patricia Paulsen.",
    bodies: [
      { name: "Sunburst Sanctuary", role: "The sanctuary." },
    ],
    howItRuns: "7200 S. Highway One, Lompoc.",
  },
  "tiny-timbers": {
    model: "founder",
    modelLabel: "Tiny-home agrihood",
    unique: false,
    summary: "The founders and the city ordinance.",
    whoDecides: "The founders and the city ordinance.",
    bodies: [
      { name: "Tiny Timbers", role: "Tiny-home agrihood." },
    ],
    howItRuns: "St. Croix Falls. Apply for a pad lease. No short-term rentals.",
  },
  "kahumana": {
    model: "founder",
    modelLabel: "Organic farm",
    unique: false,
    summary: "Kahumana.",
    whoDecides: "Kahumana.",
    bodies: [
      { name: "Kahumana Organic Farms", role: "Organic farm and community programs." },
    ],
    howItRuns: "86-660 Lualualei Homestead Road, Waiʻanae. Confirm current with Kahumana.",
  },
  "hollyhock": {
    model: "board",
    modelLabel: "Retreat centre",
    unique: false,
    summary: "Hollyhock Leadership Center.",
    whoDecides: "Hollyhock Leadership Center.",
    bodies: [
      { name: "Hollyhock", role: "Retreat centre." },
    ],
    howItRuns: "445 Highfield Road, Mansons Landing. Book a stay.",
  },
  "tui-community": {
    model: "board",
    modelLabel: "Charitable trust",
    unique: false,
    summary: "Trustees hold the deed. Residents run the week.",
    whoDecides: "Trustees hold the deed. Residents run the week.",
    bodies: [
      { name: "Tui Community", role: "Charitable trust." },
    ],
    howItRuns: "Wainui Bay, Golden Bay. Work exchanges and hosted stays.",
  },
  "finca-argayall": {
    model: "founder",
    modelLabel: "Work-stay finca",
    unique: false,
    summary: "The finca.",
    whoDecides: "The finca.",
    bodies: [
      { name: "Finca Argayall", role: "https://www.argayall.com/" },
    ],
    howItRuns: "Playa de Argaga, Valle Gran Rey. Work-stay. Confirm current with argayall.com.",
  },
  "gingerhill": {
    model: "founder",
    modelLabel: "Farm retreat",
    unique: false,
    summary: "The farm.",
    whoDecides: "The farm.",
    bodies: [
      { name: "Gingerhill Farm Retreat", role: "https://gingerhillfarm.com/" },
    ],
    howItRuns: "81-6467 Māmalahoa Highway, Kealakekua. Work-stay. Confirm current with gingerhillfarm.com.",
  },
  "gaiayoga": {
    model: "founder",
    modelLabel: "Intentional community",
    unique: false,
    summary: "The community.",
    whoDecides: "The community.",
    bodies: [
      { name: "GaiaYoga Gardens", role: "https://www.gaiayoga.org/" },
    ],
    howItRuns: "Puna District, Pāhoa. Confirm current with gaiayoga.org.",
  },
  "plenitud": {
    model: "founder",
    modelLabel: "Teaching farm",
    unique: false,
    summary: "Plenitud.",
    whoDecides: "Plenitud.",
    bodies: [
      { name: "Plenitud PR", role: "Permaculture education." },
    ],
    howItRuns: "Las Marías, Puerto Rico.",
  },
  "kul-kul-farm": {
    model: "founder",
    modelLabel: "Regenerative farm",
    unique: false,
    summary: "The farm.",
    whoDecides: "The farm.",
    bodies: [
      { name: "The Kul Kul Farm", role: "https://www.thekulkulfarm.com/" },
    ],
    howItRuns: "Jl. Raya Sibang Kaja, Banjar Saren, Abiansemal. Confirm current with thekulkulfarm.com.",
  },
  "wilgano": {
    model: "founder",
    modelLabel: "Eco resort",
    unique: false,
    summary: "The family.",
    whoDecides: "The family.",
    bodies: [
      { name: "Wilgano", role: "https://www.wilgano.com/" },
    ],
    howItRuns: "Rvaši, Cetinje. Book a bungalow at wilgano.com.",
  },
  "rio-oro": {
    model: "founder",
    modelLabel: "Work-stay base camp",
    unique: false,
    summary: "The camp.",
    whoDecides: "The camp.",
    bodies: [
      { name: "Río Oro Base Camp", role: "COPROT sea-turtle field camp." },
    ],
    howItRuns: "Playa Río Oro, Osa. Work-stay. Confirm current before you go.",
  },
  "carate-base-camp": {
    model: "founder",
    modelLabel: "Work-stay base camp",
    unique: false,
    summary: "Still a field camp, not a housing co-op.",
    whoDecides: "Laura Exley, Director of COPROT. Simon Frenkel, volunteer coordination.",
    bodies: [
      { name: "COPROT", role: "COPROT association." },
    ],
    howItRuns: "Volunteer terms. Confirm current with COPROT.",
  },
  "selahs-pig-sanctuary": {
    model: "founder",
    modelLabel: "Animal sanctuary",
    unique: false,
    summary: "The sanctuary.",
    whoDecides: "The sanctuary.",
    bodies: [
      { name: "Selah’s Pig Sanctuary", role: "https://www.selahspigsanctuary.com/" },
    ],
    howItRuns: "Keaau, Hawaiʻi. Work-stay. Confirm current before you go.",
  },
  "skomer-island": {
    model: "board",
    modelLabel: "Nature reserve",
    unique: false,
    summary: "Wildlife Trust of South and West Wales.",
    whoDecides: "Wildlife Trust of South and West Wales.",
    bodies: [
      { name: "Skomer Island", role: "National Nature Reserve." },
    ],
    howItRuns: "Martin’s Haven, Pembrokeshire. Volunteer work-stay with the Wildlife Trust. Confirm current before you go.",
  },
  "ananda-assisi": {
    model: "spiritual",
    modelLabel: "Yoga community",
    unique: false,
    summary: "Ananda Assisi.",
    whoDecides: "Ananda Assisi.",
    bodies: [
      { name: "Ananda Assisi", role: "https://www.ananda.it/" },
    ],
    howItRuns: "Via Montecchio 61, 06025 Nocera Umbra. Confirm current with ananda.it.",
  },
  "plum-village": {
    model: "spiritual",
    modelLabel: "Monastery",
    unique: false,
    summary: "The monastic community.",
    whoDecides: "The monastic community.",
    bodies: [
      { name: "Plum Village", role: "https://plumvillage.org/" },
    ],
    howItRuns: "437 Chemin du Pey, 24240 Thénac. Retreats and work-stay. plumvillage.org.",
  },
  "mount-madonna": {
    model: "spiritual",
    modelLabel: "Yoga community",
    unique: false,
    summary: "Mount Madonna Center.",
    whoDecides: "Mount Madonna Center.",
    bodies: [
      { name: "Mount Madonna Center", role: "Yoga community and school." },
      { name: "Hanuman Fellowship", role: "Founded the Center in 1978." },
    ],
    howItRuns: "Retreat calendar and Weekend in Community.",
  },
  "new-vrindaban": {
    model: "spiritual",
    modelLabel: "Temple community",
    unique: false,
    summary: "ISKCON farm community. Readmitted in 1998.",
    whoDecides: "The temple community.",
    bodies: [
      { name: "New Vrindaban", role: "ISKCON community since 1998 readmission." },
      { name: "Palace of Gold", role: "Memorial shrine. Dedicated 1979. NRHP 2019." },
    ],
    howItRuns: "Temple, Palace tours, guest stays.",
  },
  "billen-cliffs": {
    model: "hoa",
    modelLabel: "Strata village",
    unique: false,
    summary: "The strata village.",
    whoDecides: "The strata village.",
    bodies: [
      { name: "Billen Cliffs Village", role: "Strata village." },
    ],
    howItRuns: "265 Martin Road, Larnook. Strata lots.",
  },
  "glen-oro-farm": {
    model: "founder",
    modelLabel: "Horse farm",
    unique: false,
    summary: "The family.",
    whoDecides: "The family.",
    bodies: [
      { name: "Glen Oro Farm", role: "https://www.glenoro.com/" },
    ],
    howItRuns: "2574 Line 10 N, Oro-Medonte. Book glamping or a trail ride. glenoro.com.",
  },
  "krishna-village-nsw": {
    model: "spiritual",
    modelLabel: "Yoga farm",
    unique: false,
    summary: "The farm community.",
    whoDecides: "The farm community.",
    bodies: [
      { name: "Krishna Village", role: "Yoga stays and karma-yoga work-stay." },
    ],
    howItRuns: "525 Tyalgum Road, Eungella NSW 2484. Karma-yoga stay.",
  },
};

export const livingBatch33Leaders: Record<string, VillageLeaders> = {
  "vauban": {
    people: [],
    office: { url: "https://www.freiburg.de/", address: "Vauban, Freiburg im Breisgau, Baden-Württemberg" },
  },
  "marinaleda": {
    people: [],
    office: { url: "https://www.marinaleda.es/", address: "Marinaleda, Sierra Sur de Sevilla, Andalusia" },
  },
  "hiware-bazar": {
    people: [],
    office: { url: "https://hiwarebazar.nic.in/", address: "Hiware Bazar, Nagar taluka, Ahilyanagar District, Maharashtra" },
  },
  "khonoma": {
    people: [],
    office: { url: "https://khonoma.com/", address: "Khonoma, Sechü Zubza, Kohima District, Nagaland" },
  },
  "skanda-vale": {
    people: [],
    office: { url: "https://www.skandavale.org/", address: "Llanpumsaint, Carmarthen SA33 6JT" },
  },
  "sunburst-sanctuary": {
    people: [],
    office: { url: "https://sunburst.org/", address: "7200 S. Highway One, Lompoc, CA 93436" },
  },
  "tiny-timbers": {
    people: [],
    office: { url: "https://www.tinytimbersagrihood.com/", address: "St. Croix Falls, Wisconsin" },
  },
  "kahumana": {
    people: [],
    office: { url: "https://kahumana.org/", address: "86-660 Lualualei Homestead Road, Waiʻanae, HI 96792" },
  },
  "hollyhock": {
    people: [],
    office: { url: "https://hollyhock.ca/", address: "445 Highfield Road, Mansons Landing, Cortes Island, BC V0P 1K0" },
  },
  "tui-community": {
    people: [],
    office: { url: "https://www.tuitrust.org.nz/", address: "Wainui Bay, Golden Bay, 23 km from Tākaka, edge of Abel Tasman National Park" },
  },
  "finca-argayall": {
    people: [],
    office: { url: "https://www.argayall.com/", address: "Playa de Argaga, Valle Gran Rey, La Gomera, Canary Islands" },
  },
  "gingerhill": {
    people: [],
    office: { url: "https://gingerhillfarm.com/", address: "81-6467 Māmalahoa Highway, Kealakekua, HI 96750" },
  },
  "gaiayoga": {
    people: [],
    office: { url: "https://www.gaiayoga.org/", address: "Puna District, Pāhoa, Island of Hawaiʻi" },
  },
  "plenitud": {
    people: [],
    office: { url: "https://www.plenitudpr.org/", address: "Las Marías, Puerto Rico (P.O. Box 394, Las Marías, PR 00670)" },
  },
  "kul-kul-farm": {
    people: [],
    office: { url: "https://www.thekulkulfarm.com/", address: "Jl. Raya Sibang Kaja, Banjar Saren, Abiansemal, Bali" },
  },
  "wilgano": {
    people: [],
    office: { url: "https://www.wilgano.com/", address: "Rvaši, Skadar Lake National Park, Cetinje 81253" },
  },
  "rio-oro": {
    people: [
      { name: "Laura Exley", role: "Director of COPROT." },
      { name: "Simon Frenkel", role: "Volunteer coordination." },
    ],
    office: { url: "https://www.tortugasdeosa.org/", address: "Playa Río Oro, Osa, Puntarenas 60702", phone: "+506 8456-9201", email: "volunteer@tortugasdeosa.org" },
  },
  "carate-base-camp": {
    people: [
      { name: "Laura Exley", role: "Director of COPROT." },
      { name: "Simon Frenkel", role: "Volunteer coordination." },
    ],
    office: { url: "https://www.tortugasdeosa.org/", address: "Playa Carate, Osa, Puntarenas", phone: "+506 8456-9201", email: "volunteer@tortugasdeosa.org" },
  },
  "selahs-pig-sanctuary": {
    people: [],
    office: { url: "https://www.selahspigsanctuary.com/", address: "Keaau, Hawaiʻi 96749" },
  },
  "skomer-island": {
    people: [],
    office: { url: "https://www.welshwildlife.org/", address: "Skomer Island, Martin’s Haven, Pembrokeshire SA62 3BJ" },
  },
  "ananda-assisi": {
    people: [],
    office: { url: "https://www.ananda.it/", address: "Via Montecchio 61, 06025 Nocera Umbra (PG)" },
  },
  "plum-village": {
    people: [],
    office: { url: "https://plumvillage.org/", address: "437 Chemin du Pey, 24240 Thénac (Upper Hamlet)" },
  },
  "mount-madonna": {
    people: [
      { name: "Baba Hari Dass", role: "Founder. Students of his Hanuman Fellowship started the Center in 1978." },
    ],
    office: { url: "https://www.mountmadonna.org/", address: "445 Summit Road, Watsonville, CA 95076" },
  },
  "new-vrindaban": {
    people: [
      { name: "A. C. Bhaktivedanta Swami Prabhupada", role: "Founder-acharya. Guided the 1968 founding." },
      { name: "Kirtanananda Swami", role: "Co-founded New Vrindaban in 1968." },
      { name: "Hayagriva Das", role: "Co-founded New Vrindaban in 1968." },
    ],
    office: { url: "https://www.newvrindaban.com/", address: "3759 McCrearys Ridge Rd, Moundsville, WV 26041" },
  },
  "billen-cliffs": {
    people: [],
    office: { url: "https://billencliffs.net/", address: "Rock Valley Road, between Larnook and Cawongla, NSW" },
  },
  "glen-oro-farm": {
    people: [],
    office: { url: "https://www.glenoro.com/", address: "2574 Line 10 N, Oro-Medonte, ON L0L 1T0" },
  },
  "krishna-village-nsw": {
    people: [],
    office: { url: "https://krishnavillage-retreat.com/", address: "525 Tyalgum Road, Eungella, NSW 2484" },
  },
};

export const livingBatch33Accommodations: Record<string, Accommodations> = {
  "vauban": {
    visitor: {
      overview: "District housing. Confirm current with the city of Freiburg.",
      camping: { available: false, types: [], detail: "District housing. Confirm current with the city of Freiburg." },
      rooms: { available: true, types: [], detail: "District housing. Confirm current with the city of Freiburg." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A Freiburg Stadtteil. Headcount not isolated here",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "A Freiburg Stadtteil. Headcount not isolated here" },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "marinaleda": {
    visitor: {
      overview: "A town. Confirm current with the municipality.",
      camping: { available: false, types: [], detail: "A town. Confirm current with the municipality." },
      rooms: { available: true, types: [], detail: "A town. Confirm current with the municipality." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A municipality. Headcount not isolated in this snapshot",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "A municipality. Headcount not isolated in this snapshot" },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "hiware-bazar": {
    visitor: {
      overview: "A village. Arrange with the panchayat before you assume a stay.",
      camping: { available: false, types: [], detail: "A village. Arrange with the panchayat before you assume a stay." },
      rooms: { available: true, types: [], detail: "A village. Arrange with the panchayat before you assume a stay." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A Maharashtrian village. Headcount not isolated here",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "A Maharashtrian village. Headcount not isolated here" },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "khonoma": {
    visitor: {
      overview: "A village. Arrange locally.",
      camping: { available: false, types: [], detail: "A village. Arrange locally." },
      rooms: { available: true, types: [], detail: "A village. Arrange locally." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A Western Angami village. Headcount not isolated here",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "A Western Angami village. Headcount not isolated here" },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "skanda-vale": {
    visitor: {
      overview: "Pilgrim visits. Six daily pujas. Confirm current with the ashram.",
      camping: { available: false, types: [], detail: "Pilgrim visits. Six daily pujas. Confirm current with the ashram." },
      rooms: { available: true, types: [], detail: "Pilgrim visits. Six daily pujas. Confirm current with the ashram." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A monastic household plus pilgrims. About 90,000 pilgrims a year. Resident headcount not isolated",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "A monastic household plus pilgrims. About 90,000 pilgrims a year. Resident headcount not isolated" },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "sunburst-sanctuary": {
    visitor: {
      overview: "7200 S. Highway One, Lompoc.",
      camping: { available: false, types: [], detail: "7200 S. Highway One, Lompoc." },
      rooms: { available: true, types: [], detail: "7200 S. Highway One, Lompoc." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A living spiritual household. Headcount not isolated here",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "A living spiritual household. Headcount not isolated here" },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "tiny-timbers": {
    visitor: {
      overview: "St. Croix Falls. Apply for a pad lease. No short-term rentals.",
      camping: { available: true, types: [], detail: "St. Croix Falls. Apply for a pad lease. No short-term rentals." },
      rooms: { available: false, types: [], detail: "St. Croix Falls. Apply for a pad lease. No short-term rentals." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "16 tiny-home pads. Residents bring a certified tiny house 150–399 sq ft",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "16 tiny-home pads. Residents bring a certified tiny house 150–399 sq ft" },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "kahumana": {
    visitor: {
      overview: "86-660 Lualualei Homestead Road, Waiʻanae. Confirm current with Kahumana.",
      camping: { available: false, types: [], detail: "86-660 Lualualei Homestead Road, Waiʻanae. Confirm current with Kahumana." },
      rooms: { available: true, types: [], detail: "86-660 Lualualei Homestead Road, Waiʻanae. Confirm current with Kahumana." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Farm, café, and residential programs. Headcount not isolated here",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "Farm, café, and residential programs. Headcount not isolated here" },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "hollyhock": {
    visitor: {
      overview: "445 Highfield Road, Mansons Landing. Book a stay.",
      camping: { available: false, types: [], detail: "445 Highfield Road, Mansons Landing. Book a stay." },
      rooms: { available: true, types: [], detail: "445 Highfield Road, Mansons Landing. Book a stay." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Retreat centre staff and program guests. Headcount not isolated here",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "Retreat centre staff and program guests. Headcount not isolated here" },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "tui-community": {
    visitor: {
      overview: "Wainui Bay, Golden Bay. Work exchanges and hosted stays.",
      camping: { available: false, types: [], detail: "Wainui Bay, Golden Bay. Work exchanges and hosted stays." },
      rooms: { available: true, types: [], detail: "Wainui Bay, Golden Bay. Work exchanges and hosted stays." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "About 30–40 adults and children",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "About 30–40 adults and children" },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "finca-argayall": {
    visitor: {
      overview: "Playa de Argaga, Valle Gran Rey. Work-stay. Confirm current with argayall.com.",
      camping: { available: true, types: [], detail: "Playa de Argaga, Valle Gran Rey. Work-stay. Confirm current with argayall.com." },
      rooms: { available: false, types: [], detail: "Playa de Argaga, Valle Gran Rey. Work-stay. Confirm current with argayall.com." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A finca household plus work-stay guests. Headcount not isolated here",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "A finca household plus work-stay guests. Headcount not isolated here" },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "gingerhill": {
    visitor: {
      overview: "81-6467 Māmalahoa Highway, Kealakekua. Work-stay. Confirm current with gingerhillfarm.com.",
      camping: { available: true, types: [], detail: "81-6467 Māmalahoa Highway, Kealakekua. Work-stay. Confirm current with gingerhillfarm.com." },
      rooms: { available: false, types: [], detail: "81-6467 Māmalahoa Highway, Kealakekua. Work-stay. Confirm current with gingerhillfarm.com." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Farm retreat and work-stay. Headcount not isolated here",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "Farm retreat and work-stay. Headcount not isolated here" },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "gaiayoga": {
    visitor: {
      overview: "Puna District, Pāhoa. Confirm current with gaiayoga.org.",
      camping: { available: false, types: [], detail: "Puna District, Pāhoa. Confirm current with gaiayoga.org." },
      rooms: { available: true, types: [], detail: "Puna District, Pāhoa. Confirm current with gaiayoga.org." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A Puna household plus work-stay. Headcount not isolated here",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "A Puna household plus work-stay. Headcount not isolated here" },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "plenitud": {
    visitor: {
      overview: "Las Marías, Puerto Rico. Courses and work-stay.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: [], detail: "Work-stay. Confirm current with Plenitud." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A small teaching farm. Headcount not isolated here",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "A small teaching farm. Headcount not isolated here" },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "kul-kul-farm": {
    visitor: {
      overview: "Jl. Raya Sibang Kaja, Banjar Saren, Abiansemal. Confirm current with thekulkulfarm.com.",
      camping: { available: false, types: [], detail: "Jl. Raya Sibang Kaja, Banjar Saren, Abiansemal. Confirm current with thekulkulfarm.com." },
      rooms: { available: true, types: [], detail: "Jl. Raya Sibang Kaja, Banjar Saren, Abiansemal. Confirm current with thekulkulfarm.com." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Farm, kitchen, and programs. Headcount not isolated here",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "Farm, kitchen, and programs. Headcount not isolated here" },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "wilgano": {
    visitor: {
      overview: "Rvaši, Cetinje. Book a bungalow at wilgano.com.",
      camping: { available: true, types: [], detail: "Rvaši, Cetinje. Book a bungalow at wilgano.com." },
      rooms: { available: false, types: [], detail: "Rvaši, Cetinje. Book a bungalow at wilgano.com." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A family eco resort. Headcount not isolated here",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "A family eco resort. Headcount not isolated here" },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "rio-oro": {
    visitor: {
      overview: "Playa Río Oro, Osa. Work-stay. Confirm current before you go.",
      camping: { available: true, types: [], detail: "Playa Río Oro, Osa. Work-stay. Confirm current before you go." },
      rooms: { available: false, types: [], detail: "Playa Río Oro, Osa. Work-stay. Confirm current before you go." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Base camp plus work-stay. Headcount not isolated here",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "Base camp plus work-stay. Headcount not isolated here" },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "carate-base-camp": {
    visitor: {
      overview: "Playa Carate, Osa. Work-stay. Confirm current before you go.",
      camping: { available: true, types: [], detail: "Playa Carate, Osa. Work-stay. Confirm current before you go." },
      rooms: { available: false, types: [], detail: "Playa Carate, Osa. Work-stay. Confirm current before you go." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Base camp plus work-stay. Headcount not isolated here",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "Base camp plus work-stay. Headcount not isolated here" },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "selahs-pig-sanctuary": {
    visitor: {
      overview: "Keaau, Hawaiʻi. Work-stay. Confirm current before you go.",
      camping: { available: true, types: [], detail: "Keaau, Hawaiʻi. Work-stay. Confirm current before you go." },
      rooms: { available: false, types: [], detail: "Keaau, Hawaiʻi. Work-stay. Confirm current before you go." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Sanctuary household plus work-stay. Headcount not isolated here",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "Sanctuary household plus work-stay. Headcount not isolated here" },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "skomer-island": {
    visitor: {
      overview: "Martin’s Haven, Pembrokeshire. Volunteer work-stay with the Wildlife Trust. Confirm current before you go.",
      camping: { available: true, types: [], detail: "Martin’s Haven, Pembrokeshire. Volunteer work-stay with the Wildlife Trust. Confirm current before you go." },
      rooms: { available: false, types: [], detail: "Martin’s Haven, Pembrokeshire. Volunteer work-stay with the Wildlife Trust. Confirm current before you go." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Wardens and volunteer work-stay in season. Headcount not isolated here",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "Wardens and volunteer work-stay in season. Headcount not isolated here" },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "ananda-assisi": {
    visitor: {
      overview: "Via Montecchio 61, 06025 Nocera Umbra. Confirm current with ananda.it.",
      camping: { available: false, types: [], detail: "Via Montecchio 61, 06025 Nocera Umbra. Confirm current with ananda.it." },
      rooms: { available: true, types: [], detail: "Via Montecchio 61, 06025 Nocera Umbra. Confirm current with ananda.it." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A yoga community plus guests. Headcount not isolated here",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "A yoga community plus guests. Headcount not isolated here" },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "plum-village": {
    visitor: {
      overview: "437 Chemin du Pey, 24240 Thénac. Retreats and work-stay. plumvillage.org.",
      camping: { available: true, types: [], detail: "437 Chemin du Pey, 24240 Thénac. Retreats and work-stay. plumvillage.org." },
      rooms: { available: true, types: [], detail: "437 Chemin du Pey, 24240 Thénac. Retreats and work-stay. plumvillage.org." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Monastics plus lay retreatants. Headcount not isolated here",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "Monastics plus lay retreatants. Headcount not isolated here" },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "mount-madonna": {
    visitor: {
      overview: "Retreat rooms and Weekend in Community. Confirm current with the Center.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["retreat room"], detail: "Retreat calendar." },
      other: { available: true, types: ["temple"], detail: "Sankat Mochan Hanuman Temple." },
    },
    resident: {
      overview: "About 85 residents. Mount Madonna School and retreat calendar",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "About 85 residents. Mount Madonna School and retreat calendar" },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "new-vrindaban": {
    visitor: {
      overview: "Palace of Gold tours and guest stays. Confirm current with the temple.",
      camping: { available: false, types: [], detail: "None listed as a public campground." },
      rooms: { available: true, types: ["guest stay"], detail: "Lodge and guest rooms. Confirm current." },
      other: { available: true, types: ["palace", "temple"], detail: "Palace of Gold. Temple." },
    },
    resident: {
      overview: "A living temple community plus guests. Headcount not isolated here",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "A living temple community plus guests. Headcount not isolated here" },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "billen-cliffs": {
    visitor: {
      overview: "265 Martin Road, Larnook. Strata lots.",
      camping: { available: false, types: [], detail: "265 Martin Road, Larnook. Strata lots." },
      rooms: { available: true, types: [], detail: "265 Martin Road, Larnook. Strata lots." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A strata village. Headcount not isolated here",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "A strata village. Headcount not isolated here" },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "glen-oro-farm": {
    visitor: {
      overview: "2574 Line 10 N, Oro-Medonte. Book glamping or a trail ride. glenoro.com.",
      camping: { available: true, types: [], detail: "2574 Line 10 N, Oro-Medonte. Book glamping or a trail ride. glenoro.com." },
      rooms: { available: false, types: [], detail: "2574 Line 10 N, Oro-Medonte. Book glamping or a trail ride. glenoro.com." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "A farm family plus guests. Headcount not isolated here",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "A farm family plus guests. Headcount not isolated here" },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
  "krishna-village-nsw": {
    visitor: {
      overview: "525 Tyalgum Road, Eungella NSW 2484. Karma-yoga stay.",
      camping: { available: false, types: [], detail: "525 Tyalgum Road, Eungella NSW 2484. Karma-yoga stay." },
      rooms: { available: true, types: [], detail: "525 Tyalgum Road, Eungella NSW 2484. Karma-yoga stay." },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Temple community plus karma-yoga stays. Headcount not isolated here",
      camping: { available: false, types: [], detail: "None listed." },
      rooms: { available: false, types: [], detail: "Temple community plus karma-yoga stays. Headcount not isolated here" },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
};
