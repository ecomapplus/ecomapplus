import type { Accommodations } from "./accommodations";
import type { Community } from "./communities";
import type { DailyLife } from "./daily-life";
import type { EcologicalProfile } from "./ecological-initiatives";
import type { FarmProfile } from "./farms";
import type { CommunityFunding } from "./funding";
import type { Governance } from "./governance";
import type { InformalAgreement } from "./informal-agreements";
import type { LandOwnership } from "./land-ownership";
import type { VillageLeaders } from "./leaders";
import type { Ease, VisitJoin } from "./visit-join";

const slug = "maitreya-ecovillage";

export const maitreyaEcovillageCommunities: Community[] = [
  {
    slug,
    name: "Maitreya Ecovillage",
    location: "Eugene, Oregon",
    region: "Oregon, USA",
    country: "United States",
    foundedYear: 2002,
    foundedLabel: "Named in 2002. The lots were bought in 1991",
    members: 32,
    membersLabel: "About 30 to 35 people (GEN-US, 2018). A current headcount is not on the site",
    acres: 1.25,
    acresLabel: "About 1.25 acres at 882 Almaden Street",
    legalStructure: "Shared houses on city lots. Openings are filled by the housemates in that house. No published cooperative or land trust.",
    legalCategory: "Urban ecovillage",
    stillActive: true,
    images: [],
    summary:
      "A compact ecovillage about a mile west of downtown Eugene, on roughly 1.25 acres at 882 Almaden Street. Robert Bolman bought five city lots in 1991. The place was named Maitreya EcoVillage in 2002, when a triplex and a meditation group were already there. GEN-US later counted about 30 to 35 people, gardens, a cob guest cottage, a strawbale common space, and a tiny house by the pond.",
    businessModel:
      "Shared-house rents decided by the people in each house. One tiny house is listed on Airbnb. Tours and membership questions go to maitreyamembership@yahoo.com. A published dues schedule is not on the site.",
    foundingProcess:
      "In 1991 Robert Bolman sold a house in San Francisco and bought five contiguous lots in Eugene. Green building and permaculture followed. The name came in 2002. Some residents later bought an adjoining property.",
    governance:
      "Each shared house decides who moves in. The site says openings depend on the existing housemates. Robert Bolman is the founder and still the public voice in the GEN account.",
    website: "http://www.maitreya-ecovillage.org/",
    timeline: [
      { year: "1991", event: "Robert Bolman buys five city lots about a mile west of downtown Eugene." },
      { year: "2002", event: "A triplex is finished and the place is named Maitreya EcoVillage." },
      { year: "2018", event: "GEN-US describes about 30 to 35 people on 1.25 acres." },
      { year: "Present", event: "Email maitreyamembership@yahoo.com for a tour or a room. One tiny house is on Airbnb." },
    ],
  },
];

export const maitreyaEcovillageLand: Record<string, LandOwnership> = {
  [slug]: {
    owner: "Shared houses on city lots",
    complexity: "split",
    tenure: "City lots. A room is a housemate decision, not a share you buy from a public page",
    howHeld: "882 Almaden Street, Eugene, OR 97402. About 1.25 acres after an adjoining purchase. Confirm the current parcels with the village.",
    narrative:
      "Robert Bolman bought the first five lots in 1991. GEN-US later wrote that some residents had bought an adjoining property. The public site does not publish a trust or a co-op.",
    divided: [
      {
        label: "882 Almaden Street",
        holder: "The houses",
        share: "Private lots",
        what: "Shared houses. Who moves in is decided by the people already in that house.",
      },
    ],
  },
};

export const maitreyaEcovillageFunding: Record<string, CommunityFunding> = {
  [slug]: {
    overview: "Shared-house living. One tiny house is rented by the night. No dues figure is published.",
    grantsHeadline: "No public grant isolated here",
    privateHeadline: "House rents and one Airbnb",
    grants: [],
    private: [
      {
        source: "The tiny house",
        amount: "Nightly",
        year: "Present",
        certainty: "estimated",
        kind: "business",
        note: "An Airbnb listing hosted by Rob, in the village beside the pond. A night is not membership.",
      },
    ],
  },
};

export const maitreyaEcovillageVisitJoin: Record<string, VisitJoin> = {
  [slug]: {
    visit: 4 as Ease,
    join: 2 as Ease,
    visitProcess:
      "Email maitreyamembership@yahoo.com and ask for a tour. One tiny house by the pond is bookable on Airbnb. The street address used in public listings is 882 Almaden Street, Eugene, OR 97402.",
    joinProcess:
      "Write the same address and say how you want to live. Openings are shared houses, and the people already in that house decide. The site says they generally cannot take pets.",
  },
};

export const maitreyaEcovillageDailyLife: Record<string, DailyLife> = {
  [slug]: {
    typical: [
      { title: "The gardens", detail: "Food gardens, a koi pond, and a cob guest cottage on a little more than an acre." },
      { title: "The houses", detail: "About ten dwellings, including a triplex, strawbale common space, and tiny rooms." },
      { title: "The city", detail: "A walk to Martin Luther King Jr. Park. Downtown Eugene is a short drive." },
    ],
    unique: {
      title: "An ecovillage on city lots",
      detail:
        "Five Eugene lots bought in 1991, named Maitreya in 2002. GEN-US counted about 30 to 35 people on 1.25 acres, with a workshop, a sauna, and a tiny house by the pond.",
    },
  },
};

export const maitreyaEcovillageInformal: Record<string, InformalAgreement[]> = {
  [slug]: [
    {
      kind: "guest-stay",
      why: "Email maitreyamembership@yahoo.com for a tour. One tiny house is on Airbnb. A night is not a room in a shared house.",
    },
    {
      kind: "land-care",
      why: "Gardens, a pond, cob and strawbale buildings, and a food-growing yard on city lots.",
    },
    {
      kind: "quiet-practice",
      why: "A meditation group was part of the 2002 naming. An octagonal meditation room was under construction in the 2018 account.",
    },
  ],
};

export const maitreyaEcovillageGovernance: Record<string, Governance> = {
  [slug]: {
    model: "hybrid",
    modelLabel: "Houses decide",
    unique: false,
    summary:
      "The site says each opening is filled only if the people already in that shared house want you there. There is no published village-wide consensus rule.",
    whoDecides: "The housemates in the house with an opening",
    bodies: [
      { name: "Each shared house", role: "Decides who moves in." },
      { name: "The founder", role: "Robert Bolman bought the first lots in 1991 and still appears as the public builder." },
    ],
    howItRuns: "Email maitreyamembership@yahoo.com. Say what kind of living situation you want. Then the house decides.",
  },
};

export const maitreyaEcovillageLeaders: Record<string, VillageLeaders> = {
  [slug]: {
    people: [
      { name: "Robert Bolman", role: "Founder. Bought the lots in 1991. Hosts the tiny house as Rob." },
    ],
    office: {
      url: "http://www.maitreya-ecovillage.org/message-maitreya.html",
      address: "882 Almaden Street, Eugene, OR 97402",
    },
  },
};

export const maitreyaEcovillageAccommodations: Record<string, Accommodations> = {
  [slug]: {
    visitor: {
      overview: "A cob guest cottage is part of the village story. The bookable bed is one tiny house by the pond, on Airbnb.",
      camping: { available: false, types: [], detail: "No public campsite listed." },
      rooms: {
        available: true,
        types: ["tiny house"],
        detail: "One tiny house, loft bed, shower, and kitchenette, booked on Airbnb. Email for a tour of the rest.",
      },
      other: {
        available: true,
        types: ["cob guest cottage"],
        detail: "A cob guest cottage is described in the GEN-US account. Ask by email. It is not a public booking page.",
      },
    },
    resident: {
      overview: "Shared houses. About ten dwellings in the 2018 account, including a triplex. A room opens only when that house says yes.",
      camping: { available: false, types: [], detail: "Not a camp." },
      rooms: {
        available: false,
        types: [],
        detail: "Resident rooms are shared houses, not a listing.",
      },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
};

export const maitreyaEcovillageEco: Record<string, EcologicalProfile> = {
  [slug]: {
    overview: "Natural building and permaculture on city lots in Eugene: cob, strawbale, gardens, a pond, and a rainwater cistern in the 2018 account.",
    items: [
      { theme: "building", title: "Cob, strawbale, and a triplex", detail: "Natural-building experiments from the 1990s, including a living roof on a bike garage." },
      { theme: "food", title: "Gardens on an acre", detail: "Food gardens and a pond on about 1.25 acres." },
      { theme: "water", title: "Rainwater", detail: "A 4,000-gallon rainwater cistern was under construction in the 2018 GEN-US account." },
    ],
  },
};

export const maitreyaEcovillageFarms: Record<string, FarmProfile> = {
  [slug]: {
    hasFarm: true,
    grows: ["Kitchen gardens"],
    animals: [],
  },
};

export const maitreyaEcovillageUnderstood: Record<string, Ease> = {
  [slug]: 4 as Ease,
};
