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

const slug = "sustainable-ecovillage";

export const sustainableEcovillageCommunities: Community[] = [
  {
    slug,
    name: "Sustainable Ecovillage",
    location: "Gasquet, Del Norte County, California",
    region: "California, USA",
    country: "United States",
    foundedYear: 2008,
    foundedLabel: "2008",
    members: 1,
    membersLabel: "Dan Schultz holds the land. A published resident count is not on the site",
    acres: 160,
    acresLabel: "160 acres, off-grid, in the mountains above Gasquet",
    legalStructure: "Private land held by Dan Schultz. Visitors apply. There is no published cooperative or land trust.",
    legalCategory: "Private ecovillage",
    stillActive: true,
    images: [],
    summary:
      "An off-grid place on 160 acres in the mountains at Gasquet, California, started in 2008. Permaculture and agroforestry, goats, chickens, and wildcrafting, with Six Rivers National Forest around the fence. The Smith River Complex Fire took the property on 16 August 2023 and most of the orchard. Work-trade, internships, and paid rustic beds are still the public door.",
    businessModel:
      "Work-trade and internships through an application. Paid rustic lodging on Hipcamp (4WD required). Free stays in the Hobbit Hole, treehouse, or earthship have been offered to people who help after the fire. Text 707-954-7743. Mail: Dan Schultz, PO Box 246, Gasquet, CA 95543.",
    foundingProcess:
      "Dan Schultz has worked the land since 2008. The public story is a relationship with the place: permaculture, animals, and wildcrafting, not a bought-in cohousing plan. The 2023 fire reset the orchard. Membership still starts with the apply page.",
    governance:
      "Dan Schultz holds the land and the rare hard calls. The published house rule is no smoking and no chemical dependencies on the land. Day-to-day life is the farm, not a posted bylaws circle.",
    website: "https://sustainableecovillage.com/",
    timeline: [
      { year: "2008", event: "Work on the Gasquet land begins." },
      { year: "2017", event: "Hipcamp listing opens for rustic beds." },
      { year: "2023", event: "Smith River Complex Fire, 16 August. Most orchard trees lost." },
      { year: "Present", event: "Apply for work-trade, an internship, or a visit. Text 707-954-7743." },
    ],
  },
];

export const sustainableEcovillageLand: Record<string, LandOwnership> = {
  [slug]: {
    owner: "Dan Schultz",
    complexity: "simple",
    tenure: "Private land. A visit or a work-trade is not a share",
    howHeld: "160 acres at Gasquet. The exact forestry-road address is sent after a booking or an accepted application.",
    narrative:
      "Dan Schultz holds Sustainable Ecovillage. The site asks you to read it and apply before you come. You do not buy a lot from the public page.",
    divided: [
      {
        label: "The 160 acres",
        holder: "Dan Schultz",
        share: "Private",
        what: "PO Box 246, Gasquet, CA 95543. Confirm the current holding with him.",
      },
    ],
  },
};

export const sustainableEcovillageFunding: Record<string, CommunityFunding> = {
  [slug]: {
    overview: "Hipcamp nights, and help after the 2023 fire. No membership dues are published.",
    grantsHeadline: "No public grant isolated here",
    privateHeadline: "Guest beds and a GoFundMe after the fire",
    grants: [],
    private: [
      {
        source: "Hipcamp guests",
        amount: "Nightly",
        year: "Present",
        certainty: "estimated",
        kind: "business",
        note: "Rustic lodging. 4WD required. Rates change; confirm on Hipcamp.",
      },
      {
        source: "GoFundMe",
        amount: "Not isolated",
        year: "2023",
        certainty: "estimated",
        kind: "business",
        note: "A public fundraiser after the Smith River Complex Fire. gofund.me/c2157994.",
      },
    ],
  },
};

export const sustainableEcovillageVisitJoin: Record<string, VisitJoin> = {
  [slug]: {
    visit: 4 as Ease,
    join: 2 as Ease,
    visitProcess:
      "Work-trade (two weeks minimum), a longer work-trade, or an internship from 15 May to 15 October: copy the form at sustainableecovillage.com/apply and email permaculturedanny@gmail.com, or mail PO Box 246, Gasquet, CA 95543. Paid rustic beds are on Hipcamp. Text 707-954-7743. He rarely answers the phone.",
    joinProcess:
      "Long-term membership is on the same application. After you have lived the mountain farm, he asks how you would fit, whether you would stay part time or full time, and whether you would build, bring a tiny home, or take a shared cabin. There is no published buy-in.",
  },
};

export const sustainableEcovillageDailyLife: Record<string, DailyLife> = {
  [slug]: {
    typical: [
      { title: "The land", detail: "Permaculture, agroforestry, goats, chickens, and wildcrafting on 160 off-grid acres." },
      { title: "The road", detail: "A forestry road. Hipcamp says 4WD is required to reach the beds." },
      { title: "The rule", detail: "No smoking, and no chemical dependencies, on the land." },
    ],
    unique: {
      title: "After the 2023 fire",
      detail:
        "The Smith River Complex Fire took the property on 16 August 2023. Most of the orchard is gone. The public door is still the apply page, a text to 707-954-7743, and the rustic beds.",
    },
  },
};

export const sustainableEcovillageInformal: Record<string, InformalAgreement[]> = {
  [slug]: [
    {
      kind: "volunteer-intern",
      why: "Work-trade from two weeks, or an internship 15 May–15 October. Apply at sustainableecovillage.com/apply.",
    },
    {
      kind: "guest-stay",
      why: "Hipcamp lodging, and free stays in the Hobbit Hole, treehouse, or earthship offered to people who help. Text first.",
    },
    {
      kind: "land-care",
      why: "Orchard, goats, chickens, and wildcrafting. The 2023 fire took most of the trees.",
    },
    {
      kind: "quiet-practice",
      why: "Published agreement: no smoking and no chemical dependencies on the land.",
    },
  ],
};

export const sustainableEcovillageGovernance: Record<string, Governance> = {
  [slug]: {
    model: "founder",
    modelLabel: "Landholder",
    unique: false,
    summary:
      "Dan Schultz holds the land. He writes that the rare dangerous jobs and the liability stay with him, and that those calls come every few years.",
    whoDecides: "Dan Schultz",
    bodies: [
      { name: "The landholder", role: "Holds the acres, the liability, and the rare hard decisions." },
      { name: "The house rule", role: "No smoking and no chemical dependencies on the land." },
    ],
    howItRuns: "Read the site, apply, then talk. Text 707-954-7743. He rarely answers a voice call.",
  },
};

export const sustainableEcovillageLeaders: Record<string, VillageLeaders> = {
  [slug]: {
    people: [{ name: "Dan Schultz", role: "Landholder. permaculturedanny@gmail.com. Text 707-954-7743." }],
    office: {
      url: "https://sustainableecovillage.com/apply",
      address: "PO Box 246, Gasquet, CA 95543",
    },
  },
};

export const sustainableEcovillageAccommodations: Record<string, Accommodations> = {
  [slug]: {
    visitor: {
      overview:
        "Rustic beds named on the site and on Hipcamp: Hobbit Hole, treehouse, earthship solarium, and cabins. 4WD. After the fire, a tent, an RV, or a cabin you build may be the only bed.",
      camping: {
        available: true,
        types: ["tent", "RV"],
        detail: "The apply page says car camping, tents, or an RV when a cabin is not free. Confirm before you go.",
      },
      rooms: {
        available: true,
        types: ["Hobbit Hole", "treehouse", "earthship solarium", "cabin"],
        detail: "Book on Hipcamp, or ask about a free stay if you are helping. Text 707-954-7743.",
      },
      other: { available: false, types: [], detail: "None listed." },
    },
    resident: {
      overview: "Long-term membership can mean building, a tiny home, an RV, a yurt, shared space, or buying one of the cabins. That is a conversation after a stay, not a listing.",
      camping: { available: false, types: [], detail: "Not a published resident campsite." },
      rooms: {
        available: false,
        types: [],
        detail: "A resident cabin is part of the membership conversation, not an open bed.",
      },
      other: { available: false, types: [], detail: "None listed." },
    },
  },
};

export const sustainableEcovillageEco: Record<string, EcologicalProfile> = {
  [slug]: {
    overview:
      "Off-grid permaculture and agroforestry on 160 acres beside Six Rivers National Forest. The 2023 fire took most of the orchard.",
    items: [
      {
        theme: "food",
        title: "Orchard and animals",
        detail: "Food forest, goats, and chickens. Most orchard trees were lost on 16 August 2023. Three were reported still standing.",
      },
      {
        theme: "energy",
        title: "Off-grid",
        detail: "The site and the Hipcamp listing describe an off-grid setup. A published power system is not isolated here.",
      },
      {
        theme: "restoration",
        title: "After the Smith River Complex Fire",
        detail: "The fire took the property on 16 August 2023. Replanting and scion wood are part of the public ask.",
      },
    ],
  },
};

export const sustainableEcovillageFarms: Record<string, FarmProfile> = {
  [slug]: {
    hasFarm: true,
    grows: ["Orchard fruit", "Food forest", "Wildcrafted plants"],
    animals: ["Goats", "Chickens"],
  },
};

export const sustainableEcovillageUnderstood: Record<string, Ease> = {
  [slug]: 3 as Ease,
};
