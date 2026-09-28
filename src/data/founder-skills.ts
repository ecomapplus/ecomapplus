export type FounderSkill = {
 id: string;
 label: string;
 detail: string;
};

/** Skills that actually move a new ecovillage from talk to dirt. */
export const founderSkills: readonly FounderSkill[] = [
 { id: "farming", label: "Growing food", detail: "Gardens, orchards, market crops" },
 { id: "permaculture", label: "Permaculture design", detail: "Zones, water, perennial systems" },
 { id: "water", label: "Water systems", detail: "Wells, catchment, greywater, irrigation" },
 { id: "building", label: "Building and carpentry", detail: "Timber, natural plaster, repair" },
 { id: "energy", label: "Renewable energy", detail: "Solar, micro-hydro, batteries" },
 { id: "planning", label: "Land and site planning", detail: "Maps, soils, access, clustering" },
 { id: "legal", label: "Law and cooperatives", detail: "Entities, titles, filings" },
 { id: "books", label: "Bookkeeping and taxes", detail: "Ledgers, payroll, filings" },
 { id: "fundraising", label: "Fundraising and grants", detail: "Donors, agencies, member shares" },
 { id: "facilitation", label: "Meetings and consensus", detail: "Agendas, circles, minutes" },
 { id: "education", label: "Children and teaching", detail: "Homeschool, forest school, care" },
 { id: "health", label: "Health and first aid", detail: "Clinic skills, trauma, public health" },
 { id: "kitchen", label: "Cooking and preserving", detail: "Community meals, canning, stores" },
 { id: "mechanics", label: "Machines and vehicles", detail: "Tractors, tools, pumps" },
 { id: "sanitation", label: "Sanitation and compost", detail: "Toilets, waste, soil" },
 { id: "livestock", label: "Animals and pasture", detail: "Fencing, herd, dairy, poultry" },
 { id: "comms", label: "Web and communications", detail: "Sites, lists, neighbors, press" },
 { id: "mediation", label: "Conflict mediation", detail: "Restorative process, hard talks" },
 { id: "construction", label: "Project management", detail: "Schedules, crews, permits" },
 { id: "ecology", label: "Habitat restoration", detail: "Fire, wildlife, native plants" },
];

export const skillIds = new Set(founderSkills.map((s) => s.id));

export type ContributionId =
 | "time"
 | "under-1k"
 | "1k-10k"
 | "10k-50k"
 | "50k-250k"
 | "250k-plus"
 | "unsure";

export const contributions: { id: ContributionId; label: string; hint: string }[] = [
 { id: "time", label: "Time and skills, little or no cash", hint: "Labor, tools, knowledge" },
 { id: "under-1k", label: "Under $1,000", hint: "A starter share or expenses" },
 { id: "1k-10k", label: "$1,000–$10,000", hint: "A member share at many places" },
 { id: "10k-50k", label: "$10,000–$50,000", hint: "A serious founding stake" },
 { id: "50k-250k", label: "$50,000–$250,000", hint: "Land, infrastructure, or both" },
 { id: "250k-plus", label: "$250,000 or more", hint: "Can carry a site" },
 { id: "unsure", label: "Not sure yet", hint: "You’ll know more after you look" },
];

export const contributionIds = new Set(contributions.map((c) => c.id));
