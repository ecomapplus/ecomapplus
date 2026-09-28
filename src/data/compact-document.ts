import type { CharterDoc, CharterSection } from "./charter";
import { jurisdictionFor } from "./charter-regions";
import type { CompactKind, CompactValues } from "./compact-kinds";

function v(values: CompactValues, key: keyof CompactValues, fallback: string) {
 const raw = (values[key] || "").trim();
 return raw || fallback;
}

function nameOf(values: CompactValues) {
 return v(values, "communityName", "«Community Name»");
}

function placeOf(values: CompactValues) {
 const place = v(values, "place", "«Place»");
 const country = v(values, "country", "«Country»");
 if (place.includes(country)) return place;
 return `${place}, ${country}`;
}

function dateOf(values: CompactValues) {
 const raw = v(values, "date", new Date().toISOString().slice(0, 10));
 const d = new Date(raw);
 if (Number.isNaN(d.getTime())) return raw;
 return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

function partyList(values: CompactValues) {
 return v(values, "parties", "the resident circle\nthe guest or newcomer named below")
.split(/\n/)
.map((s) => s.trim())
.filter(Boolean);
}

function partiesOf(values: CompactValues) {
 const lines = partyList(values);
 if (lines.length === 0) return "the people who live at" + nameOf(values);
 if (lines.length === 1) return lines[0];
 if (lines.length === 2) return `${lines[0]} and ${lines[1]}`;
 return `${lines.slice(0, -1).join("; ")}; and ${lines[lines.length - 1]}`;
}

function hoursOf(values: CompactValues, fallback: string) {
 return v(values, "hours", fallback);
}

function durationOf(values: CompactValues, fallback: string) {
 return v(values, "duration", fallback);
}

function contributionOf(values: CompactValues, fallback: string) {
 return v(values, "contribution", fallback);
}

function meetingOf(values: CompactValues, fallback: string) {
 return v(values, "meeting", fallback);
}

function guestCapOf(values: CompactValues) {
 return v(values, "guestCap", "a number the resident circle can house without crowding the people who live here");
}

function localSection(values: CompactValues): CharterSection | null {
 const clause = (values.localClause || "").trim();
 if (!clause) return null;
 return {
 heading: "Particular to this place",
 body: clause,
 };
}

function preamble(kind: CompactKind, values: CompactValues): CharterSection {
 return {
 heading: "1. Parties and nature of this compact",
 body: `This compact is made on ${dateOf(values)} at ${placeOf(values)} between ${partiesOf(values)} (together, the Parties).\n\nIt is a private working agreement for how people live, work, visit, or learn at ${nameOf(values)}. It is not articles of association. Those instruments, if they exist, remain in force. Where this compact and a filed instrument conflict, the filed instrument wins on title, money that must be reported, and anything a court would read. This compact wins on the dishes, the roster, the guest room, and the conversation after supper.\n\nThe Parties sign because most of village life is never in a solicitor’s drawer. They intend to be taken at their word.`,
 };
}

function purpose(kind: CompactKind, values: CompactValues): CharterSection {
 return {
 heading: "2. Purpose",
 body: `The purpose of this ${kind.documentName} is to make one slice of life at ${nameOf(values)} speakable and repairable: ${kind.summary}\n\nNobody is required to pretend this is the law of ${v(values, "country", "the country")}. It is the house rule the Parties are willing to read aloud when someone new arrives.`,
 };
}

function decide(values: CompactValues): CharterSection {
 return {
 heading: "How we decide, and how we change this",
 body: `Day-to-day questions under this compact are decided by the people actually affected, in person, before they are decided in a meeting. If that fails, the matter goes to the circle that already governs ${nameOf(values)}, sitting ${meetingOf(values, "at the next regular meeting, or within seven days if the matter cannot wait")}.\n\nThis compact may be amended in writing, dated, and signed by the same classes of Party who signed it, or by the resident circle if a guest or intern has already left. A change that would contradict a filed legal instrument is void unless that instrument is also changed through its own process.\n\nSilence is not consent to a change. A WhatsApp message is not an amendment.`,
 };
}

function breach(values: CompactValues): CharterSection {
 return {
 heading: "Breach, repair, and leaving",
 body: `A breach is first a conversation, then a repair (apology, restitution, a changed roster, a shortened stay), then, if the pattern holds, an ending of the stay, the trial, or the role this compact describes.\n\nThis compact does not authorise anyone to lock a person in, hold a passport, withhold wages that are legally due, or seize property that is not the community’s. It does not replace child-protection, labour, tenancy, or criminal law of ${v(values, "country", "the country")}.\n\nA person who leaves under this compact takes what is theirs. They do not take a share of land they never bought, a house they never held title to, or a story they have no right to tell about people who remain.`,
 };
}

function legalRelation(values: CompactValues): CharterSection {
 return {
 heading: "Relationship to legal entities",
 body: `${nameOf(values)} may be a company, a cooperative, an association, a trust, a foundation, a religious society, or several of those at once. Those entities hold land, employ people, take gifts, and file accounts. This compact does not appoint directors, issue shares, create a tenancy, or bind a board that has not signed it.\n\nIf a Party needs a tenancy, an employment contract, a volunteer agreement that a visa office will read, or a waiver an insurer will accept, they still need that document, drafted for ${v(values, "country", "the country")}. This is the document people actually live by between meetings.`,
 };
}

function signatures(values: CompactValues): CharterSection {
 const lines = partyList(values)
.map((n) => `${n}\nName: ________________________ Signature: ________________________ Date: ________`)
.join("\n\n");
 return {
 heading: "Signatures",
 body: `Signed at ${placeOf(values)} on ${dateOf(values)}.\n\n${lines || "«Party»\nName: ________________________ Signature: ________________________ Date: ________"}\n\nA witness is welcome and not required unless a local practitioner says otherwise. This compact may be signed in counterparts and by a named role (“resident circle convenor”) if the circle has minuted that person to sign.`,
 };
}

function disclaimer(values: CompactValues): CharterSection {
 const country = v(values, "country", "the relevant country");
 const desk = jurisdictionFor(country)?.filingDesk;
 const note = jurisdictionFor(country)?.nativeNote;
 return {
 heading: "Working draft, not legal advice",
 body: `This is a working draft generated for a conversation at ${nameOf(values)}. It is not legal advice, not a filed instrument, and not a substitute for a solicitor, notary, or licensed attorney admitted in ${country}. It does not create a legal person. Have a local practitioner adapt it if you want a contract a court would enforce.${desk ? ` Filings that actually move land or money still go to ${desk}.`: ""}${note ? `\n\n${note}`: ""}\n\necocommunitymap.com is a reference atlas. The real compact is whatever the people who live here actually do.`,
 };
}

function wrap(kind: CompactKind, values: CompactValues, middle: CharterSection[]): CharterDoc {
 const local = localSection(values);
 const sections = [
 preamble(kind, values),
 purpose(kind, values),
    ...middle,
...(local ? [local] : []),
 decide(values),
 breach(values),
 legalRelation(values),
 signatures(values),
 disclaimer(values),
 ];
 const country = v(values, "country", "«Country»");
 return {
 title: kind.documentName,
 subtitle: `${nameOf(values)} · ${placeOf(values)} · ${dateOf(values)}`,
 form: "Informal compact",
 country,
 languageNote: jurisdictionFor(country)?.nativeNote,
 sections,
 };
}

function rulesFor(kind: CompactKind, values: CompactValues): CharterSection[] {
 const n = nameOf(values);
 switch (kind.slug) {
 case "guest-stay":
 return [
 {
 heading: "3. Who is a guest",
 body: `A guest is a person who sleeps at ${n} without being a resident, member, coworker, or paying tenant under a separate written tenancy. Day visitors who never sleep here are guests for the kitchen, the paths, and photography, but not for a bed.\n\nThe resident circle may host up to ${guestCapOf(values)}. A guest does not become a resident by staying late, being useful, or falling in love with the place.`,
 },
 {
 heading: "4. Booking, length, and contribution",
 body: `Stays are booked in advance through the person the circle names for guests. The ordinary length is ${durationOf(values, "a few nights to two weeks")}. Longer stays need a fresh yes, not a shrug.\n\nThe contribution is ${contributionOf(values, "a fair mix of labour, a stated donation, or the published guesthouse rate")}. Contribution is not rent that creates a tenancy, unless a separate tenancy is signed. A guest who cannot pay in money may be asked to work; a guest who will not work and will not contribute may be asked to leave at the next reasonable transport.`,
 },
 {
 heading: "5. Houses, paths, and private doors",
 body: `Guesthouse, course rooms, and marked paths are for guests. Dwelling houses, bedrooms, offices, and any building the circle has not opened are not. Knock. Do not tour the land with a camera as if it were a park concession.\n\nChildren of guests stay with their adults. Animals of guests come only if the circle said yes in the booking. Fires, swimming, tools, and vehicles follow the same rules residents use, plus the extra care of someone who does not yet know the land.`,
 },
 ];
 case "volunteer-intern":
 return [
 {
 heading: "3. Role",
 body: `A volunteer or intern at ${n} gives labour and receives learning, lodging, food, and a place in the day’s work. They are not an employee unless a separate employment contract says so. They are not a member. They do not accrue a right to stay, a right to a house, or a right to a share of land.\n\nThe term is ${durationOf(values, "a season or a stated number of weeks")}, with a conversation halfway through. Hours of work are ${hoursOf(values, "the ordinary working day of the village, with one rest day in seven")}.`,
 },
 {
 heading: "4. What is provided, what is asked",
 body: `The community provides a bed, meals with the house, orientation, and a named person to go to. The volunteer provides the labour of the roster, care of tools, and the same quiet-hours and kitchen rules as residents.\n\nContribution beyond labour: ${contributionOf(values, "none required beyond the work, unless a programme fee is published in advance")}. Any fee is for board and teaching, not a purchase of membership.`,
 },
 {
 heading: "5. Safety, visas, and ending",
 body: `Dangerous work (chainsaws, chemicals, livestock, heights, night driving) is taught before it is assigned. The volunteer says no to a task they have not been shown. ${n} does not hold passports. A person whose visa, insurance, or health cannot support the work must say so before arrival.\n\nEither Party may end the stay with enough notice to reach the next bus, plus a conversation that is not a humiliation. A volunteer who is asked to leave is owed a clear reason and help to the gate. They are not owed a reference that pretends the stay went well if it did not.`,
 },
 ];
 case "course-host":
 return [
 {
 heading: "3. The course and the village",
 body: `Courses, seminars, Experience Weeks, EDEs, and retreats at ${n} are a public face of the place, not a takeover of it. Teaching rooms, the dining hall during course hours, and booked lodging are for the course. Residents’ houses, the inner garden, and any sanctuary the circle has closed remain closed.\n\nOrdinary length: ${durationOf(values, "the published length of the course")}. Guest numbers: ${guestCapOf(values)}.`,
 },
 {
 heading: "4. What the fee covers",
 body: `The fee or contribution is ${contributionOf(values, "the published course fee, covering teaching, meals, and a bed")}. It does not buy membership, a say in the resident circle, or a right to return uninvited.\n\nTeachers and facilitators are guests of the village with a job. They follow guest rules when they are not teaching. They do not reorganise the kitchen to suit a brand.`,
 },
 {
 heading: "5. Care of the people who live here",
 body: `Participants do not wander into private conversations, photograph residents at breakfast, or treat the village as a backdrop. If a course uses Forum, ceremony, or bodywork, that work is opt-in, explained in advance, and never a condition of a bed.\n\nWhen the course ends, the village is a village again. Leftover food, lost property, and leftover feelings are dealt with before the bus leaves.`,
 },
 ];
 case "labour-roster":
 return [
 {
 heading: "3. The quota",
 body: `Living at ${n} includes a labour contribution of ${hoursOf(values, "the published weekly quota of the community")}. Work that keeps the place alive (kitchen, land, buildings, guests, bookkeeping, care of people) counts. Work that only serves a private business counts only if the circle has said so.\n\nIllness, menstruation, injury, and the care of a child or an elder reduce the quota without a trial. Chronic inability to meet the quota is a membership conversation, not a shaming.`,
 },
 {
 heading: "4. Who assigns, and what is refused",
 body: `A named person or labour manager publishes the roster. People may swap. A person may refuse a task they have not been trained for, a task that injures, or a task that conflicts with a written care plan.\n\nNobody is assigned sexual labour, political canvassing, or unpaid work for a private company of another member under this compact.`,
 },
 {
 heading: "5. Records and fairness",
 body: `Hours are recorded in the ordinary book or app of the community, visible to the person they concern. The circle reviews the roster ${meetingOf(values, "at least monthly")}. A pattern of missing work is first a repair (catch-up, a different job, a rest), then a conversation about staying.`,
 },
 ];
 case "common-purse":
 return [
 {
 heading: "3. What goes in",
 body: `At ${n} the common purse receives ${contributionOf(values, "income from work done in the community’s name, gifts given to the community, and any allowance the circle has set")}. Personal gifts from family, government benefits that belong to a named person, and property brought in at joining stay with that person unless they have written otherwise.\n\nThis compact does not make ${n} an employer, a bank, or a tax-exempt body. Pay-as-you-earn, social insurance, and gift reporting still follow the law of ${v(values, "country", "the country")}.`,
 },
 {
 heading: "4. What a person may keep and spend",
 body: `Each member receives the allowance or drawing right the circle has published, enough for ordinary personal life, not a second household off-site. Large personal purchases, vehicles, and travel that the purse will fund go through the same meeting that funds a roof.\n\nA person does not secretly run a side business on community time. A person does not lend the commons to a relative.`,
 },
 {
 heading: "5. Leaving",
 body: `A person who leaves takes their personal property, their papers, and any leaving grant the circle has published. They do not take a calculated share of land, livestock, or accumulated surplus unless a filed instrument (cooperative share, employment contract, or written loan) says so.\n\nDebts to the purse are spoken and scheduled before the person goes. Debts are not a reason to trap anyone.`,
 },
 ];
 case "membership-trial":
 return [
 {
 heading: "3. The path",
 body: `Nobody arrives at ${n} as a full member. The ordinary path is visit → ${durationOf(values, "a stated visitor or provisional period")} → a conversation with the circle → yes, wait, or not now.\n\nA trial is not a tenancy. Sleeping in a room during the trial does not create a right to that room. Work during the trial does not create a wage claim beyond what was offered in writing.`,
 },
 {
 heading: "4. Who decides",
 body: `The resident circle (or the membership body named in the community’s legal papers) decides. The decision sits ${meetingOf(values, "in a membership meeting called for that purpose")}. A single charismatic founder does not override a published process, and a romantic partner of a member does not skip the trial.\n\nA “not now” is a complete sentence. It should come with a reason the person can use, not a rumour.`,
 },
 {
 heading: "5. Housing, money, and exit during trial",
 body: `During the trial the person pays or works as agreed in the visitor / intern compact, if there is one. They may attend open meetings. They do not vote on land, money, or other people’s membership.\n\nThey may leave at any time. The circle may end the trial with enough notice to pack and reach transport, plus a conversation. Belongings go with the person. Stories about the trial stay kind and specific.`,
 },
 ];
 case "conflict-circle":
 return [
 {
 heading: "3. The ladder",
 body: `At ${n} a conflict is first a direct conversation between the people involved, in private, within a few days. If that fails or is unsafe, a third resident the Parties both accept sits with them. If that fails, the matter goes to the circle ${meetingOf(values, "within seven days, or at the next regular meeting if nobody is at risk")}.\n\nAnonymous notes, late-night group chats, and campaigning for a side are not the process.`,
 },
 {
 heading: "4. What the circle may do",
 body: `The circle may ask for a repair, a pause in a working relationship, a change of room, a rest from a role, or, after a pattern, an ending of membership or of a stay. It may not invent a punishment that a court would call assault, false imprisonment, or a fine it has no legal power to levy.\n\nMinutes of the outcome are kept. Minutes of every raw feeling are not.`,
 },
 {
 heading: "5. Safety and confidentiality",
 body: `Violence, sexual harm, and harm to children leave this compact and go to the people and institutions the law of ${v(values, "country", "the country")} names. The circle does not sit as a criminal court.\n\nWhat is said in a conflict meeting is not retold as entertainment. It may be retold to the extent needed to keep people safe and to explain an outcome.`,
 },
 ];
 case "kitchen-table":
 return [
 {
 heading: "3. Meals",
 body: `Common meals at ${n} are part of membership, not a restaurant. Cooks follow the roster. Dietary needs that are medical or religious are honoured if they are spoken in time. Fashions in diet are honoured if they do not double the cook’s work.\n\nHours of the kitchen and common house: ${hoursOf(values, "the posted hours of the common house")}. After hours the kitchen is for people who live here, left as they found it.`,
 },
 {
 heading: "4. Food, fridges, and waste",
 body: `Food from the garden and bulk stores is commons unless labelled. A named shelf or fridge may be personal. Taking labelled food is a conflict, not a joke.\n\nGuests eat with the house when invited. They do not finish a ferment they did not start. Waste, compost, and recycling follow the posted system even when it is tedious.`,
 },
 {
 heading: "5. The common house is a home",
 body: `The common house is a living room that many people share, not a lobby. Noise, laptops, wet boots, and visiting relatives follow the same courtesy. Overnight sleeping in the common house happens only if the circle has said that is what the sofa is for.`,
 },
 ];
 case "quiet-practice":
 return [
 {
 heading: "3. Silence and hours",
 body: `Quiet hours at ${n} are ${hoursOf(values, "posted quiet hours, typically late evening until morning work")}. Practice times (worship, meditation, Meeting, puja, Forum, or the community’s ordinary silence) are published. A person who lives here treats them as part of the house, not as optional décor.\n\nGuests follow the same hours. A guest who needs a different rhythm books a stay that can hold it, or does not book.`,
 },
 {
 heading: "4. Substances",
 body: `Alcohol, cannabis, and other intoxicants follow the rule the circle has actually adopted, which may be none on the land, none in common rooms, or none at all. Illegal drugs are not a house experiment. Smoking, if allowed, is outdoors and away from children and drying herbs.\n\nA person in active addiction is a care conversation, not a moral trial. A person who deals on the land is asked to leave.`,
 },
 {
 heading: "5. What is asked, what is free",
 body: `A religious or spiritual practice that is the reason the place exists (a Shaker Meeting, an ashram’s sitting, a kibbutz Shabbat, a Camphill morning) may be asked of residents as part of membership. It is explained before the trial begins. It is not imposed on a day visitor who came for the museum, the garden, or a course that did not advertise it.`,
 },
 ];
 case "care-household":
 return [
 {
 heading: "3. Who lives in the house",
 body: `${n} houses people with and without disabilities, coworkers, volunteers, and sometimes children, as one household rather than a clinic with a farm attached. Each person has a name, a room or a bed that is theirs, and a say in the day’s rhythm proportional to their capacity, not a status that erases them.\n\nHours of shared household work: ${hoursOf(values, "the ordinary house day, with rest built in")}.`,
 },
 {
 heading: "4. Roles",
 body: `Houseparents, coworkers, and support workers have a role; they do not own the people they live with. Intimate care, money of a villager, and medical decisions follow the legal instruments that already exist (power of attorney, statutory care plan, family). This compact does not replace those.\n\nThe household sits ${meetingOf(values, "at a regular house meeting")} so that complaints do not have to wait for a crisis.`,
 },
 {
 heading: "5. Dignity and reverse integration",
 body: `The house adapts to the people who live here, including those with disabilities, rather than requiring them to pass as staff. Visitors follow the house’s pace. Photography of people in care is off unless they, and whoever the law names, have said yes.\n\nA coworker’s burnout is a roster and rest problem. It is not a reason to become unkind.`,
 },
 ];
 case "relationship-culture":
 return [
 {
 heading: "3. Consent and privacy",
 body: `At ${n} every sexual or intimate contact is adult, enthusiastic, and free to stop. A membership, a bunk, a course fee, or a role in the kitchen is never payment for intimacy.\n\nOther people’s relationships are not public property. Gossip dressed as “transparency” is still gossip. What is spoken in a Forum, sharing circle, or similar practice stays in that room except as needed for safety.`,
 },
 {
 heading: "4. The practice, if any",
 body: `If this community uses Forum, transparent relating, a defined free-love or poly practice, or a teaching about gender and pair-bonds, that practice is described to newcomers in words, in advance, and is opt-in. It is not a surprise on the third night.\n\nThe circle sits ${meetingOf(values, "when someone asks, and at a regular social meeting")} to hear harm without turning the village into a tribunal of desire.`,
 },
 {
 heading: "5. Children, guests, and leaving",
 body: `Adult culture stays out of the children’s spaces. Guests are not recruited into the village’s intimate practice. A person may leave a relationship, a practice, or the community without being owed a campaign.\n\nThis compact does not settle custody, marriage, or property of a couple. Those remain under the law of ${v(values, "country", "the country")}.`,
 },
 ];
 case "children-care":
 return [
 {
 heading: "3. Parents and the village",
 body: `Children at ${n} are first the responsibility of their parents or legal guardians. The village may share watching, meals, a kindergarten, or a school. Shared care is a gift with a roster, not a transfer of parental rights.\n\nHours of shared watching: ${hoursOf(values, "the posted childcare hours, plus the informal village eye")}.`,
 },
 {
 heading: "4. School and visitors’ children",
 body: `If there is a school, its admissions, fees, and safeguarding follow its own papers. Village membership is not automatic enrolment, and enrolment is not automatic membership.\n\nVisitors’ children stay with their adults unless a named resident has agreed to watch them. The land is a working farm or a building site as often as it is a playground.`,
 },
 {
 heading: "5. Safeguarding",
 body: `Concerns about a child’s safety leave this compact and go to the people the law of ${v(values, "country", "the country")} names. The circle does not sit as a child-protection agency. Adults who work with children follow whatever check the community and the law already require.\n\nThe circle talks about children ${meetingOf(values, "in a parents’ and carers’ meeting, not as entertainment in the common house")}.`,
 },
 ];
 case "land-care":
 return [
 {
 heading: "3. Commons and household ground",
 body: `At ${n} the fields, forest, water, and paths that feed everyone are commons. A household may have a garden, a terrace, or a strip the circle has recognised. Commons are not a private farm; household ground is not a dumping place for the commons.\n\nHarvest of commons food is for the kitchen and the published CSA or stall, not for a private freezer first.`,
 },
 {
 heading: "4. What may be done to the land",
 body: `Chemicals, clear-felling, new tracks, ponds, and fences go through the circle. Trees of stature are not firewood without a yes. Seed, water, and soil leave the place only as the circle has agreed.\n\nThe land meeting sits ${meetingOf(values, "in season, and whenever a new structure or a saw is proposed")}.`,
 },
 {
 heading: "5. Guests and tools",
 body: `Guests walk where they are invited. They do not pick, prune, or “improve” the forest. Tools live in the shed, come back sharp, and are not borrowed off-site. Fire follows the posted rule, which is stricter than a camper would like.`,
 },
 ];
 case "building-code":
 return [
 {
 heading: "3. What you may raise",
 body: `A new structure, a substantial alteration, or a change of use at ${n} is proposed in drawing or a clear sketch before anyone digs. The circle, and any design panel it has named, says yes, yes-with-conditions, or not this. Building without that yes is a breach, even if the mud is beautiful.\n\nMunicipal building codes, fire rules, and sanitation of ${v(values, "country", "the country")} still apply. This compact is in addition to them, not a waiver.`,
 },
 {
 heading: "4. Materials and look",
 body: `Materials follow the ecological rule the village has actually adopted (often natural, salvaged, or low-energy) and the look that keeps the place one place rather than a suburb of experiments. Straw, earth, timber, and reused windows are welcome when they are built to last and to dry.\n\nThe design conversation sits ${meetingOf(values, "before purchase of materials, not after the walls are up")}.`,
 },
 {
 heading: "5. Money, labour, and leaving a building",
 body: `Who pays, who builds, and what happens to a house when a person leaves must be said in writing before the foundation. A sweat-equity hut is not automatically a title. A house on commons land stays with the commons unless a filed instrument says otherwise.`,
 },
 ];
 case "animals-stock":
 return [
 {
 heading: "3. Whose animal",
 body: `Livestock of ${n} is commons unless a written note says a flock or a hive is a household’s. Dogs, cats, and other companions are household animals. They are numbered, named, and not increased by surprise.\n\nContribution for feed, vet, and fencing: ${contributionOf(values, "commons animals from the common purse; household animals from the household")}.`,
 },
 {
 heading: "4. Care",
 body: `Every animal has a person who is responsible that day. Illness is a vet, not a Facebook debate. Slaughter, if it happens, is skilled, legal, and not a spectacle for guests.\n\nGuests do not feed, chase, or open gates. Children are with animals only as the responsible adult allows.`,
 },
 {
 heading: "5. Arrival and leaving",
 body: `A new animal arrives only with a yes. A person who leaves takes household animals and does not abandon them to the commons. Commons animals stay.`,
 },
 ];
 case "media-story":
 return [
 {
 heading: "3. What may be photographed",
 body: `At ${n} the land from a public path, a published tour, and a person’s own face with their yes may be photographed. Children, people in care, ceremonies, temples, inner rooms, and anyone who has said no may not, even if the light is perfect.\n\nDrones are a no unless the circle has said yes for a stated hour.`,
 },
 {
 heading: "4. Journalists, students, and social media",
 body: `A journalist, researcher, or filmmaker writes in advance, names the outlet, and accepts that some doors will stay shut. Students on a course follow the same rule as guests.\n\nSocial media of a stay does not tag residents who have not asked to be tagged, does not map private buildings, and does not turn a conflict into content. The circle may ask for a post to be taken down. That ask is not a court order; it is the house rule.`,
 },
 {
 heading: "5. Stories that outlast a stay",
 body: `A book, a thesis, a podcast, or a long article about ${n} is shown to the circle in draft if it names living people or inner practice. The circle cannot censor a person’s own memoir of their own life; it can ask for names to be changed and for children to disappear from the story.\n\nThe conversation sits ${meetingOf(values, "before publication, with enough time to read")}.`,
 },
 ];
 default:
 return [
 {
 heading: "3. The practice",
 body: `The Parties will spell out, in this space, how ${kind.title.toLowerCase()} actually works at ${n}. Until they do, they treat one another as adults who live together on purpose.`,
 },
 ];
 }
}

export function generateCompact(kind: CompactKind, values: CompactValues): CharterDoc {
 return wrap(kind, values, rulesFor(kind, values));
}
