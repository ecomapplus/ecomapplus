export type LegalFormGuide = {
 name: string;
 family: string;
 purpose: string;
 meaning: string;
};

export const legalFormGuides: Record<string, LegalFormGuide> = {
 "501(c)(2)": {
 name: "501(c)(2)",
 family: "U.S. tax-exempt title-holding",
 purpose:
 "A title-holding corporation that exists only to own property for a tax-exempt parent, usually a 501(c)(3). It does not run programs of its own.",
 meaning:
 "In an ecovillage this is how a land trust can hold the land while a separate charity does the education. Residents typically lease the land; they do not own a share of the corporation.",
 },
 "501(c)(3)": {
 name: "501(c)(3)",
 family: "U.S. public charity",
 purpose:
 "A U.S. nonprofit organized for religious, educational, charitable, or scientific purposes. Donations can be tax-deductible. Profits cannot be paid out to members.",
 meaning:
 "Communities use it for land, schools, visitor programs, and fundraising. It is a poor fit for ordinary housing: a charity must serve a public purpose.",
 },
 "501(d) corporation": {
 name: "501(d) corporation",
 family: "U.S. apostolic / common-purse",
 purpose:
 "A U.S. tax status for communal religious or apostolic groups that pool income. The community files as a unit; members report their share of communal income on their own returns.",
 meaning:
 "This is the legal face of a true common purse in the United States. Twin Oaks uses it. It exists so an income-sharing group can deal with the IRS.",
 },
 "Body corporate": {
 name: "Body corporate",
 family: "Strata / community titles",
 purpose:
 "The automatic association of lot owners in an Australian (or similar) community-titles scheme. It owns and runs common property; every owner is a member by buying a lot.",
 meaning:
 "You buy a freehold house. Covenants and common land are managed by the scheme. Crystal Waters and Currumbin use this instead of a commune or land trust.",
 },
 "Charitable trust": {
 name: "Charitable trust",
 family: "Trust",
 purpose:
 "A trustee holds assets for a stated charitable purpose, not for the private benefit of members. In New Zealand and Scotland this is a common way to lock land.",
 meaning:
 "Residents may live on the land by agreement with the trustees, but they do not own it. If the community dissolves, the land must stay in charity, it cannot be split among the last members.",
 },
 "Community Benefit Society": {
 name: "Community Benefit Society",
 family: "U.K. co-operative",
 purpose:
 "A U.K. co-operative registered to benefit a community, not just its shareholders. It can issue community shares and is regulated as a society.",
 meaning:
 "Findhorn’s Park Ecovillage land sits in a CBS (Duneland). Members can hold withdrawable shares; the purpose clause stops the place being sold out from under the village.",
 },
 "Community finance": {
 name: "Community finance",
 family: "Enterprise",
 purpose:
 "A share, loan, or credit vehicle that raises money from members and supporters for community projects (shops, housing, energy) without handing control to outside banks.",
 meaning:
 "It is not the landowner. It is the wallet: Ekopia at Findhorn is the usual example. People invest, the village builds, returns are modest and mission-bound.",
 },
 "Community land trust": {
 name: "Community land trust",
 family: "Land",
 purpose:
 "A nonprofit that owns land in perpetuity and stewards it for a community. Homes on the land are sold or leased separately, usually with a resale formula so they stay affordable.",
 meaning:
 "The dirt is taken off the speculative market. Residents own or lease the building, not the land. Los Angeles Eco-Village and Dancing Rabbit both use a CLT (or a 501(c)(2) doing the same job).",
 },
 "Company limited by guarantee": {
 name: "Company limited by guarantee",
 family: "Company",
 purpose:
 "A company with no shares. Members guarantee a small amount (often £1) if it winds up. Common for charities and community groups in Ireland and the U.K.",
 meaning:
 "Cloughjordan’s village company owns the 67 acres and the district heating. Households then build on serviced plots. Control is by membership, not by who put in the most capital.",
 },
 "Concejo / recovered village": {
 name: "Concejo / recovered village",
 family: "Municipal",
 purpose:
 "In Spain, a concejo is an open local council. Abandoned villages reoccupied in the 1980s often sit on land that still belongs to the region or municipality.",
 meaning:
 "Lakabe has no private lots. People live by occupying and governing the place; title stayed with Navarre. The legal risk and the legal protection are both that the land is public.",
 },
 "Conservation covenant": {
 name: "Conservation covenant",
 family: "Covenant",
 purpose:
 "A binding restriction recorded on the land (easement, organic covenant, or conservation trust) that limits what future owners may do, even if the village is sold.",
 meaning:
 "It is a lock on use: no subdivision, no chemicals, no clear-cut. OAEC, Moora Moora, Ithaca, and The Farm all use some version of this.",
 },
 CSA: {
 name: "CSA",
 family: "Enterprise",
 purpose:
 "Community-supported agriculture: members pay in advance and share the farm’s harvest and risk. Often organized as a co-op or not-for-profit.",
 meaning:
 "It feeds the village and neighbors; it rarely holds the land. Cloughjordan’s CSA sits on company land as a member-owned farm, not as the title holder.",
 },
 "Cultural association": {
 name: "Cultural association",
 family: "Membership",
 purpose:
 "A membership nonprofit (in Spain, asociación cultural) formed for cultural or social activity. It can hold a tax ID and a bank account without being a company.",
 meaning:
 "Lakabe’s association is how the recovered village deals with the outside world (grants, invoices, a legal name) while the land itself stays public.",
 },
 "Federation of cooperatives": {
 name: "Federation of cooperatives",
 family: "Co-operative",
 purpose:
 "Several cooperatives bound by a constitution rather than merged into one company. Each co-op can own assets and trade; the federation sets the political rules.",
 meaning:
 "Damanhur works this way: land, art, farms, and tourism sit in different co-ops. No single shareholder can sell the valley. Leaving usually means leaving your share in the federation.",
 },
 "Freehold title": {
 name: "Freehold title",
 family: "Tenure",
 purpose:
 "Ordinary private ownership of a lot. The owner can sell, mortgage, and bequeath it, subject to whatever covenants run with the land.",
 meaning:
 "Used where the village wants a normal housing market plus rules, Currumbin, Crystal Waters, Cloughjordan houses. Affordability then depends on covenants, not on common ownership.",
 },
 "Ground lease": {
 name: "Ground lease",
 family: "Tenure",
 purpose:
 "A long lease of the land under a building. The resident owns (or holds) the structure and rents the land, usually from a land trust.",
 meaning:
 "Dancing Rabbit’s model: the 501(c)(2) owns the land; you own your house. If you leave, the house can be sold but the land stays in the trust. That is what matters.",
 },
 "Historic designation": {
 name: "Historic designation",
 family: "Covenant",
 purpose:
 "A listing (for example a U.S. National Historic Landmark) that restricts demolition and insensitive alteration. It does not itself own anything.",
 meaning:
 "Sabbathday Lake’s landmark status protects the Shaker village as a place. Title still sits in the Shaker nonprofit. The listing is a public lock.",
 },
 "Homeowners association": {
 name: "Homeowners association",
 family: "Membership",
 purpose:
 "A mandatory association of lot owners that enforces covenants, collects fees, and maintains common land. Membership comes with the deed.",
 meaning:
 "Earthaven’s village-scale HOA sits over smaller co-op and LLC neighborhoods. Costa Rica’s condominio (La Ecovilla) and Finca Bellavista’s Community Guidelines do the same job: you own a lot or parcel, and the association polices the commons. It is the opposite of a commune.",
 },
 "Housing cooperative": {
 name: "Housing cooperative",
 family: "Co-operative",
 purpose:
 "A co-op that owns housing (and sometimes land). Members buy a share, and get the right to occupy a unit under the co-op’s rules.",
 meaning:
 "The classic alternative to freehold. Ithaca’s neighborhoods, Moora Moora, and Sieben Linden use it so people have security of tenure without a private lot they can flip.",
 },
 "Income-sharing": {
 name: "Income-sharing",
 family: "Membership",
 purpose:
 "A common purse: wages, and often assets, are pooled. Members receive housing, food, and a small personal allowance rather than keeping what they earn.",
 meaning:
 "This is a social contract that still needs a legal shell, 501(d), an e.V., a Danish association. Twin Oaks, East Wind, Svanholm, and Niederkaufungen all live this way.",
 },
 Kibbutz: {
 name: "Kibbutz",
 family: "Co-operative settlement",
 purpose:
 "An Israeli cooperative agricultural settlement under kibbutz law. Historically, members shared production and had no private house title. Many have since privatized; some have not.",
 meaning:
 "Lotan is still closer to the classic model: the settlement is the legal community, national land sits under it, and ecology plus a remaining collective economy define daily life.",
 },
 "Limited company": {
 name: "Limited company",
 family: "Company",
 purpose:
 "A private company (Lda, Ltd, GmbH) that can own land, hire staff, and trade, with owners’ liability capped at their stake.",
 meaning:
 "Tamera’s land sits in ILOS, a Portuguese limited company run as a not-for-profit and owned by two associations. The company form holds title; the associations hold purpose.",
 },
 "Limited-equity co-op": {
 name: "Limited-equity co-op",
 family: "Co-operative",
 purpose:
 "A housing co-op whose bylaws cap the resale price of a share, so homes cannot track the open market.",
 meaning:
 "The point is permanent affordability. Los Angeles Eco-Village put the buildings in a limited-equity co-op and the land in a CLT so neither layer can be cashed out.",
 },
 LLC: {
 name: "LLC",
 family: "Company",
 purpose:
 "A U.S. limited liability company. Members write an operating agreement that can be almost anything: closed residential group, neighborhood pod, or land-owning partnership.",
 meaning:
 "OAEC’s residents own Sowing Circle LLC; Earthaven neighborhoods often sit in LLCs under the HOA. Flexible, private, and only as mission-locked as the operating agreement says.",
 },
 "Membership association": {
 name: "Membership association",
 family: "Membership",
 purpose:
 "A body of residents or supporters (incorporated or not) that speaks for the community, sets rules, and sometimes holds a minority stake in the land company.",
 meaning:
 "The New Findhorn Association, Ithaca’s village association, and Tamera’s associations are this: governance without necessarily being the title holder.",
 },
 "Mutual home ownership society": {
 name: "Mutual home ownership society",
 family: "Co-operative",
 purpose:
 "A UK housing co-operative in which members own the whole site together and pay a share of income (or a formula) for a democratic stake, rather than a mortgage on a single freehold house. Resale is controlled so homes stay affordable.",
 meaning:
 "LILAC in Leeds is the usual example: twenty straw-bale homes on an old school yard. You join the society, you do not buy a lot you can flip. The lock is the tenure.",
 },
 "Nonprofit foundation": {
 name: "Nonprofit foundation",
 family: "Foundation",
 purpose:
 "An institution that holds assets for a purpose, governed by a board or statute, not by resident-shareholders. Foundations (and ANBI-status bodies) are common in continental Europe and Latin America.",
 meaning:
 "Gaviotas is a research-and-production foundation. Damanhur’s ANBI nonprofit is the public-facing cultural arm. Residents work inside the purpose; they do not own the corpus.",
 },
 "Nonprofit gGmbH": {
 name: "Nonprofit gGmbH",
 family: "German company",
 purpose:
 "A German limited company with charitable (gemeinnützig) status. It can own land and run a seminar business while profits stay locked to the purpose.",
 meaning:
 "ZEGG’s 15 hectares sit in a gGmbH. Lebensgarten uses one for the seminar house. It is a company: ownership is in shares, but the charity lock stops a private sale of the mission.",
 },
 NPO: {
 name: "NPO",
 family: "Japanese nonprofit",
 purpose:
 "A Japanese specified nonprofit corporation. It can receive grants, run programs, and contract, without being a company that pays out profits.",
 meaning:
 "Konohana’s Green Grass NPO handles visitors and education. The household itself is not the NPO, Japanese labour law pushed the living group into a different shape.",
 },
 "Property trust": {
 name: "Property trust",
 family: "Trust",
 purpose:
 "A trust that holds neighborhood buildings or land for the people who live there, often alongside a larger community land company.",
 meaning:
 "Findhorn’s Park Ecovillage Trust holds some residential property. It is a layer between “the Foundation owns everything” and “each house is private freehold.”",
 },
 "Registered association": {
 name: "Registered association",
 family: "Verein / association",
 purpose:
 "In Germany, an eingetragener Verein (e.V.) is a registered membership association that can own property, sign contracts, and sue. Costa Rica, Guatemala, El Salvador, and Nicaragua use a close cousin: the asociación civil / ONG.",
 meaning:
 "Niederkaufungen’s e.V. owns the whole commune. Lebensgarten and Sieben Linden use Vereine for village life or education. In Central America, IMAP, IPES, and Asociación Tierra Valiente are asociaciones: members govern, there are no shares to sell, and the association can hold land or a teaching centre.",
 },
 "Religious society": {
 name: "Religious society",
 family: "Covenant",
 purpose:
 "A covenanted religious body. Membership is by vocation or confession, not by buying a lot. Property is held for the society’s life and work.",
 meaning:
 "The Sabbathday Lake Shakers still sign a covenant. Sólheimar began as a church-founded home. This is the opposite of an HOA: you join a people.",
 },
 SCIO: {
 name: "SCIO",
 family: "Scottish charity",
 purpose:
 "A Scottish Charitable Incorporated Organisation, a charity with its own legal personality, so trustees are not personally the owners of the assets.",
 meaning:
 "The Findhorn Foundation is a SCIO. It runs education and holds some property. It is a charity: the public purpose is the legal point.",
 },
 "Self-governing institution": {
 name: "Self-governing institution",
 family: "Icelandic institution",
 purpose:
 "In Iceland, a sjálfseignarstofnun is an independent institution that owns itself. There are no shareholders. A board steers it under its founding purpose.",
 meaning:
 "Sólheimar is this: the village, workshops, and land belong to the institution, not to residents as owners. People live and work inside it; they cannot divide it up.",
 },
 "Sole proprietorship": {
 name: "Sole proprietorship",
 family: "Work / tax",
 purpose:
 "An individual registered as self-employed. No separate company. Used when labour or tax law will not accept a single communal employer.",
 meaning:
 "Konohana’s members are each a sole proprietor on paper, then pool the money as one household. The legal fiction is for the tax office; the social fact is still one wallet.",
 },
 "State land": {
 name: "State land",
 family: "Tenure",
 purpose:
 "Title remains with the state, a regional government, or a national land authority. Occupants have use rights.",
 meaning:
 "Classic kibbutz land in Israel, and Lakabe’s village in Navarre. Security of tenure depends on politics and occupation, not on a co-op share certificate.",
 },
 "Statutory foundation": {
 name: "Statutory foundation",
 family: "Statute",
 purpose:
 "A body created by an act of parliament or equivalent statute. Its powers, assets, and duties are in the law, not only in a private charter.",
 meaning:
 "The Auroville Foundation Act put the township’s land in a statutory foundation. Residents do not own plots. Changing that takes politics.",
 },
 "Supporting foundation": {
 name: "Supporting foundation",
 family: "Charity",
 purpose:
 "A separate charity whose job is to support a parent community (fundraising, endowments, scholarships) without being the landowner or the membership.",
 meaning:
 "Camphill Village Foundation sits beside the Copake village. If you donate, you are funding the work, not buying a house. The village corporation still holds the land.",
 },
 "Trading company": {
 name: "Trading company",
 family: "Enterprise",
 purpose:
 "A business that sells goods or services and returns surplus to the community: tofu, hammocks, guesthouses, resin, shops, courses.",
 meaning:
 "This is usually how an ecovillage pays cash costs without each member holding a private job. It may be a co-op, a company, or an internal department, it is the engine, not the title.",
 },
 "Unincorporated community": {
 name: "Unincorporated community",
 family: "Membership",
 purpose:
 "A living group with no separate legal personality. Contracts and land sit in a trust, a company, or individuals’ names. The community itself cannot own anything.",
 meaning:
 "Riverside’s membership lives under a charitable trust. Konohana lives as one household. Simple, cheap, and fragile: when people leave, the law sees the named owners, not “the village.”",
 },
};

export const formBrowseGroupOrder = [
 "Land & tenure",
 "Co-operative",
 "Charity & nonprofit",
 "Company & enterprise",
 "Membership & governance",
 "Covenants & public law",
] as const;

export type FormBrowseGroup = (typeof formBrowseGroupOrder)[number];

const familyToBrowseGroup: Record<string, FormBrowseGroup> = {
 Land: "Land & tenure",
 Tenure: "Land & tenure",
 Trust: "Land & tenure",
 "Strata / community titles": "Land & tenure",
 "Co-operative": "Co-operative",
 "U.K. co-operative": "Co-operative",
 "Co-operative settlement": "Co-operative",
 "U.S. public charity": "Charity & nonprofit",
 "U.S. tax-exempt title-holding": "Charity & nonprofit",
 "U.S. apostolic / common-purse": "Charity & nonprofit",
 "Scottish charity": "Charity & nonprofit",
 "Japanese nonprofit": "Charity & nonprofit",
 Foundation: "Charity & nonprofit",
 Charity: "Charity & nonprofit",
 "Icelandic institution": "Charity & nonprofit",
 Statute: "Charity & nonprofit",
 Company: "Company & enterprise",
 Enterprise: "Company & enterprise",
 "German company": "Company & enterprise",
 "Work / tax": "Company & enterprise",
 Membership: "Membership & governance",
 "Verein / association": "Membership & governance",
 Covenant: "Covenants & public law",
 Municipal: "Covenants & public law",
};

export function browseGroupForForm(form: string): FormBrowseGroup {
 const family = guideForForm(form).family;
 return familyToBrowseGroup[family] ?? "Membership & governance";
}

export function guideForForm(name: string): LegalFormGuide {
 return (legalFormGuides[name] ?? {
 name,
 family: "Legal structure",
 purpose: "A legal form used by one or more communities in this atlas.",
 meaning: "Tap through to a community page to see which named entities carry this structure.",
 });
}
