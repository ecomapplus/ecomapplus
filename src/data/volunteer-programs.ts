/**
 * Dedicated volunteer / internship / work-exchange pages on a village’s own
 * website. Conservative: a village is listed only when we found a real signup
 * page (not a WWOOF listing, Experience Week, “you can volunteer” aside, or
 * an invented URL). Unlisted slugs have no such page in this atlas.
 */
export type VolunteerProgram = {
 /** Official page where a stranger can apply or sign up. */
 url: string;
 note: string;
};

export const volunteerPrograms: Record<string, VolunteerProgram> = {
 "camphill-copake": {
 url: "https://camphillvillage.org/apply-as-a-volunteer/",
 note: "Live-in coworker volunteers stay months to years in shared households. Apply on this page or through the Camphill Association.",
 },
 auroville: {
 url: "https://auroville.org/page/joining-auroville-the-process",
 note: "Official first step: volunteer at least three months. Apply through the Admissions & Terminations Registry at atr@auroville.org.in. Units such as AuroOrchard also run their own volunteer forms.",
 },
 "twin-oaks": {
 url: "https://www.twinoaks.org/internship/internship-intro",
 note: "Two-to-six-month internship after the required three-week visitor program. Email internship@twinoaks.org for the application.",
 },
 tamera: {
 url: "https://www.tamera.org/learn/community-service-work-and-study/",
 note: "Community-service work-and-study in the guest-centre kitchen (about seven weeks). Sign up on the program page for the current dates.",
 },
 "dancing-rabbit": {
 url: "https://www.dancingrabbit.org/work-exchange/",
 note: "Seasonal work-exchange and internships (typically April–October). Apply on the work-exchange page; hosts cover food and living costs.",
 },
 koinonia: {
 url: "https://koinoniafarm.org/internship/",
 note: "Three-month or year-long internship of work, prayer, and study. Fill the interest form on this page or email internship@koinoniafarm.org.",
 },
 oaec: {
 url: "https://oaec.org/who-we-are/internships/",
 note: "Eleven-month residential internships (garden, facilities, or program administration). Applications usually open in September for the following year.",
 },
 earthaven: {
 url: "https://www.earthaven.org/live-and-work-at-earthaven/",
 note: "Live-and-work / work-exchange arranged with individual member hosts (typically 24 hours a week for camping, food, and a roof).",
 },
 "sieben-linden": {
 url: "https://siebenlinden.org/en/european-voluntary-service/",
 note: "European Solidarity Corps (formerly EVS) placements in education, garden, and kitchen. Apply through the questionnaire on this page.",
 },
 "kibbutz-lotan": {
 url: "https://kibbutzlotan.com/en/volunteer/",
 note: "Three-to-six-month volunteers (typically 18–25) in dates, gardens, dairy, kitchen, and tourism. Room, board, and a small stipend. Email volunteer@kibbutzlotan.com.",
 },
 "lost-valley": {
 url: "https://www.lostvalley.org/volunteer",
 note: "On-site volunteer, internship, and work-trade openings (garden, maintenance, intern coordinator). Email volunteer@lostvalley.org.",
 },
 nadeet: {
 url: "https://nadeet.org/opportunities-nadeet",
 note: "Internships for Namibian students, plus shorter volunteer stays (minimum three months) by arrangement. Contact admin@nadeet.org.",
 },
 "pun-pun": {
 url: "https://punpunthailand.org/learning-center/",
 note: "Volunteer stays of two weeks to two months on the Mae Taeng seed farm. Email punpunvolunteers@gmail.com with who you are and the dates you hope to come.",
 },
 riverside: {
 url: "https://www.riverside.org.nz/join-in",
 note: "Seasonal volunteering with the trust (farm, education) or the community gardens. Email volunteer@riverside.org.nz; you sign a volunteer agreement.",
 },
 "bona-fide": {
 url: "https://projectbonafide.com/support/internships/",
 note: "Three-month internships on Finca Bona Fide, Ometepe (orientation, room and board, Spanish lessons, a farm project). Email probonafide@gmail.com. Shorter volunteer stays are on the volunteers page.",
 },
 zegg: {
 url: "https://www.zegg.de/de/angebote/mitwirken/als-freiwillige-r",
 note: "Bundesfreiwilligendienst and other Freiwillige places on the ZEGG campus (start in spring or autumn). Apply through the Mitwirken page.",
 },
 sirius: {
 url: "https://siriuscommunity.org/internship-program/",
 note: "Residential internship in community life at Shutesbury. intern.program@siriuscommunity.org.",
 },
 "sunrise-ranch": {
 url: "https://sunriseranch.org/become-a-volunteer/",
 note: "Volunteer and internship openings (kitchen, events, media, seasonal support) on the Colorado ranch.",
 },
 "ananda-village": {
 url: "https://anandavillage.org/visit-us/experience-community-life/",
 note: "Karma Yoga service program at The Expanding Light: two weeks to three months of daily service, yoga, and meditation. Contact the Karma Yoga director from this page.",
 },
 "camphill-ontario": {
 url: "https://www.camphill.on.ca/volunteer",
 note: "In-person volunteer opportunities at Camphill Communities Ontario. Email info@camphill.on.ca. They are not currently housing foreign live-in volunteers.",
 },
 arcosanti: {
 url: "https://www.arcosanti.org/careers/",
 note: "Volunteer openings (agriculture, archives, events, maintenance, and more) for workshop alumni or people with a needed skill. Email volunteer@arcosanti.org.",
 },
 findhorn: {
 url: "https://parkecovillagetrust.co.uk/support/volunteer/",
 note: "Park Ecovillage Trust’s volunteer program (practical tasks, caring, gardens) with an online application form. The Hinterland Trust also posts Wednesday land-steward shifts.",
 },
 suderbyn: {
 url: "https://suderbyn.se/greenskills/",
 note: "Green Skills European Solidarity Corps year on Gotland: food, lodging, and travel covered. Apply for the current cohort.",
 },
 "rancho-mastatal": {
 url: "https://ranchomastatal.com/internship",
 note: "Two-month permaculture internship (and a separate year-long apprenticeship) at the Costa Rican ranch. Fill the internship application on this page.",
 },
 "our-ecovillage": {
 url: "https://ourecovillage.org/volunteer/",
 note: "Volunteer application for the Shawnigan Lake teaching site. Fill the form on this page.",
 },
 songaia: {
 url: "http://www.songaia.com/internships.html",
 note: "Internships in community life at the Bothell cohousing cluster.",
 },
 linnaea: {
 url: "https://www.linnaeafarm.org/services-4",
 note: "Seasonal agricultural internships on the Cortes Island land trust (typically May–October). Apply from the internships page.",
 },
 lama: {
 url: "https://www.lamafoundation.org/engage/summer-steward/",
 note: "Summer Stewardship Program: live as part of Lama’s core summer community. Apply through the online steward application on this page.",
 },
 "cite-ecologique": {
 url: "https://www.en.citeecologique.org/internships",
 note: "Summer farm internships (board and lodging) at Ham-Nord. Contact info@citeecologique.org.",
 },
 konohana: {
 url: "https://konohana-family.org/en/visit/",
 note: "Volunteer stay of at least three days: live as family, farm and cook; meals and lodging free. Mark volunteer on the visitor application (intl@konohana-family.org).",
 },
 ndanifor: {
 url: "https://betterworld-cameroon.com/regenerative-education/volunteer-program/",
 note: "Better World Cameroon volunteer program at Ndanifor Permaculture Ecovillage: short stays (4 weeks–6 months) and long stays (1–2 years).",
 },
 "tierra-del-sol": {
 url: "https://www.tierradelsol.org.mx/aplicacin-para-voluntariado-o-programa-de-aprendices",
 note: "Volunteer and apprentice application for the Oaxaca teaching farm. Complete the form on this page.",
 },
 "bhrugu-aranya": {
 url: "https://agnihotra.pl/en/our-ecovillage/",
 note: "Warm-month volunteer stays in exchange for accommodation and meals on the four-hectare Homa farm. Write info@agnihotra.pl.",
 },
 osada: {
 url: "https://www.osada.earth/invitation-2024",
 note: "Month-long stays May–October, and European Solidarity Corps placements for under-31 EU citizens. Apply from the invitation.",
 },
 sunseed: {
 url: "https://www.sunseed.org.uk/european-solidarity-corps",
 note: "Six-month European Solidarity Corps (18–30, EU residents): food, lodging, insurance. Short stays and internships are separate doors.",
 },
 "gaia-ashram": {
 url: "https://gaiaschoolasia.com/volunteering-thailand-gaia-ashram/",
 note: "Volunteer stays of at least two weeks (5,600 THB for the first 14 nights, then a nightly contribution). Email gaiaschoolasia@gmail.com; arrive Monday before noon. Internships of three months or more are a separate door.",
 },
 "quail-springs": {
 url: "https://www.quailsprings.org/about-us/opportunities/work-trade/",
 note: "Four-month work-trade (food and a canvas tent, no stipend) on the 450-acre Cuyama ranch. Applications open on a published window; interviews follow. Read the work-trade page before writing.",
 },
 "camphill-minnesota": {
 url: "https://www.camphillmn.org/volunteerwithus",
 note: "Live-in volunteers typically stay six months to a year with room and board in lifesharing households. Apply from this page (English, without AI). outreach@camphillmn.org / +1 320-732-6365.",
 },
 "neot-semadar": {
 url: "https://neot-semadar.com/en/school/a-meaningful-volunteering-experience-at-kibbutz-neot-semadar/",
 note: "Write volunteers@neot-semadar.com first. Coordinators (Alex or Inbal of record) must approve before any third-party form. Typical stays from two months.",
 },
 "sadhana-forest": {
 url: "https://sadhanaforest.org/",
 note: "Vegan reforestation camp near Auroville. Volunteers year-round; published minimums about 10 days (Indian) / 20 days (international). Seva about 25–35 hours a week. Confirm current intake on the site before you travel.",
 },
 "living-energy-farm": {
 url: "https://livingenergyfarm.org/living-and-working-with-us-at-living-energy-farm/",
 note: "Residential volunteers two weeks to three months, 30–35 hours a week on an off-grid farm. Write first. Tours are a separate monthly door.",
 },
 "tinkers-bubble": {
 url: "https://tinkersbubble.org/Joining",
 note: "2–3 week residential volunteering for food and board, or winter woodland weekends. Longer stays start with a trial. Email tinkersbubble@riseup.net from the joining page.",
 },
 innisfree: {
 url: "https://www.innisfreevillage.org/apply",
 note: "Year-long residential volunteers live in mixed houses with coworkers (adults with intellectual disabilities) on the 550-acre Crozet farm. Apply on this page.",
 },
 "canon-frome": {
 url: "https://www.canonfromecourt.org.uk/volunteer-here/",
 note: "WWOOF-style farm volunteering at the Herefordshire court. A week in the fields is not a 999-year lease. Read the volunteer page before writing.",
 },
 polyface: {
 url: "https://polyfacefarm.com/apprenticeship",
 note: "Five-month summer stewardship (May 1–September 30): room and most board, $150 a month. U.S. citizens. Application window opens for a few days each August. Wendy@polyfacefarm.com.",
 },
 wilderland: {
 url: "https://www.wilderland.org.nz/volunteer/",
 note: "Four-week volunteer terms are free again (20 hours a week). Shorter stays ask $10 a day. Fill the form on this page; visit@wilderland.org.nz.",
 },
 "green-gulch": {
 url: "https://www.sfzc.org/locations/green-gulch-farm/about-green-gulch/farm-garden-programs/farm-land-steward-apprenticeship",
 note: "Residential Farm and Land Steward apprenticeship. Sitting is part of the week. Applications for 2026 on this page.",
 },
 "hawthorne-valley": {
 url: "https://farm.hawthornevalley.org/apprentice-program/",
 note: "One-year biodynamic apprenticeship: housing, farm food, $1,500 a month. Apply on the apply page; the window for a season opens in November.",
 },
 triform: {
 url: "https://www.triform.org/volunteer-apply",
 note: "Twelve-month live-in volunteer year, typically from the last week of August, with full room and board. volunteer@triform.org / 518-851-9320.",
 },
 "full-belly": {
 url: "https://fullbellyfarm.com/about-us/internships/",
 note: "One-year live-in internships on the Capay Valley farm. Rolling applications; short terms are not currently offered. Fill the internship application on this site.",
 },
 glynwood: {
 url: "https://www.glynwood.org/apprenticeship",
 note: "Hudson Valley Apprenticeship, including a residential livestock season with housing. Confirm current terms with Glynwood: 845-265-3338 / info@glynwood.org.",
 },
 "camphill-california": {
 url: "https://camphillca.org/volunteer-inquiry/",
 note: "Live-in volunteers six to twelve months, private room and board. Apply on this inquiry page or write coworker@camphillca.org.",
 },
 "deck-family": {
 url: "https://www.deckfamilyfarm.com/intern-program",
 note: "One-year internships with room, board, and a $10,000 stipend. Start with a call to Christine Deck.",
 },
 "hungry-world": {
 url: "https://hungryworldfarm.com/interns-volunteers/",
 note: "Summer internships (about ten weeks): housing and about $400 a month. Email applications@hungryworldfarm.com with a resume and a short letter.",
 },
  "white-oak-pastures": { url: "https://whiteoakpastures.com/pages/careers", note: "Twelve-week intern / apprenticeship courses. Send application or resume to brandi.hilton@whiteoakpastures.com." },
  esalen: { url: "https://www.esalen.org/learn/work-scholar-program", note: "Three-month residential Work Scholar season (kitchen, cabins, Farm & Garden)." },
  "sivananda-yoga-farm": { url: "https://sivanandayogafarm.org/study/karma-yoga/", note: "Karma Yoga seva-study of one to three months, first week on trial. yogafarm@sivananda.org / (530) 272-9322." },
  yogaville: { url: "https://www.yogaville.org/programs/residential-programs/residential-volunteer-program/", note: "Residential volunteer one week to three months, 33 hours a week, dorm included. Farm Yogi is a separate farm-hours door." },
  "panya-project": { url: "https://www.panyaproject.org/get-involved/", note: "Volunteer stays of at least one week (3,000 THB first week, then 400 THB a day). Email panyaproject@gmail.com first; they close intake during courses." },
  laakea: { url: "https://permaculture-hawaii.com/live-learn-here/farm-support-program/", note: "One-month farm-support term, $12 a day. Apply from this page. (808) 443-4076." },
  "isabella-freedman": { url: "https://adamah.org/isabella-freedman/farm-fellowship/", note: "Three-month Adamah Farm Fellowship with housing. Request the application from this page." },
  svanholm: {
    url: "https://svanholm.dk/english/visit-svanholm/volunteering/",
    note: "Work-stay with the farm, building, or kitchen groups about 30 hours a week. Food and lodging. Write guestgroup@svanholm.dk a month or two ahead. No Christmas intake.",
  },
  sekem: {
    url: "https://sekem.com/en/contact/contact-hr/",
    note: "Internships of at least twelve months, age 22+. Food and lodging, sometimes a stipend. Apply from the HR page.",
  },
  "sabbathday-lake": {
    url: "https://maineshakers.com/volunteer-2/",
    note: "Museum, farm, and herb-house volunteer shifts, plus dated work days. Sign up from the volunteer page. Dwelling houses stay a home.",
  },
  "krishna-valley": {
    url: "https://ecovalley.hu/volunteer/",
    note: "Full-day volunteer service: shared guesthouse bed and meals for about seven hours a day, up to three months. Register on the Eco Valley form; English applicants use this page.",
  },
  "skanda-vale": {
    url: "https://www.skandavale.org/visit-skanda-vale/accommodation/",
    note: "Free ashram stay of at least four nights with daily Seva and temple pujas. Apply at least a week ahead on this page. Shorter nights are the Hafan guesthouse, a separate door.",
  },
  "tui-community": {
    url: "https://www.tuitrust.org.nz/visit-us",
    note: "Two-week work-exchange (six hours a day, four days a week, shared room and vegetarian food) and a six-week live-in learn-and-work term. Closed 15 December–15 January. Arrange from the visit page.",
  },
  "sustainable-ecovillage": {
    url: "https://sustainableecovillage.com/apply",
    note: "Work-trade from two weeks, a longer work-trade, or an internship 15 May–15 October. Email the form to permaculturedanny@gmail.com or mail PO Box 246, Gasquet, CA 95543. Text 707-954-7743.",
  },
  "hidden-villa": {
    url: "https://www.hiddenvilla.org/ways-to-give/volunteer/region-HV/cat-61/",
    note: "Farm Team is Wednesdays and Saturdays, 9am–noon. Education guides, animal chores, and trail work are on the same page. Fill the volunteer application.",
  },
  "rancho-margot": {
    url: "https://www.ranchomargot.com/volunteering",
    note: "Work exchange: six hours a day, six days a week, for room and board. Minimum four weeks. Apply on the volunteering page.",
  },
  "sunburst-sanctuary": {
    url: "https://sunburst.org/get-involved/",
    note: "Karma yoga service exchange: live, work, and meditate with the community for up to two weeks (garden, kitchen, housekeeping). Contact the sanctuary from this page to apply.",
  },
  "mount-madonna": {
    url: "https://mountmadonna.org/about/volunteer-opportunities/",
    note: "Residential volunteer sessions of three or six months. About 28 hours a week, a private room, and meals. No fee. Winter session 8 December 2026–7 March 2027. Inquiry form on the volunteer page.",
  },
};

export function volunteerFor(slug: string): VolunteerProgram | undefined {
 return volunteerPrograms[slug];
}

export function hasVolunteerProgram(slug: string): boolean {
 return Boolean(volunteerPrograms[slug]);
}

export const volunteerProgramCount = Object.keys(volunteerPrograms).length;
