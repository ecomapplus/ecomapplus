import { formerClosedLeaders } from "./former-closed-details";
import { livingBatch2Leaders } from "./living-batch2-details";
import { livingBatch3Leaders } from "./living-batch3-details";
import { livingBatch4Leaders } from "./living-batch4-details";
import { livingBatch5Leaders } from "./living-batch5-details";
import { livingBatch6Leaders } from "./living-batch6-details";
import { livingBatch7Leaders } from "./living-batch7-details";
import { livingBatch8Leaders } from "./living-batch8-details";
import { livingBatch9Leaders } from "./living-batch9-details";
import { livingBatch10Leaders } from "./living-batch10-details";
import { livingBatch11Leaders } from "./living-batch11-details";
import { livingBatch12Leaders } from "./living-batch12-details";
import { livingBatch13Leaders } from "./living-batch13-details";
import { livingBatch14Leaders } from "./living-batch14-details";
import { livingBatch15Leaders } from "./living-batch15-details";
import { livingBatch16Leaders } from "./living-batch16-details";
import { livingBatch17Leaders } from "./living-batch17-details";
import { livingBatch18Leaders } from "./living-batch18-details";
import { livingBatch19Leaders } from "./living-batch19-details";
import { livingBatch20Leaders } from "./living-batch20-details";
import { livingBatch21Leaders } from "./living-batch21-details";
import { livingBatch22Leaders } from "./living-batch22-details";
import { livingBatch23Leaders } from "./living-batch23-details";
import { livingBatch24Leaders } from "./living-batch24-details";
import { livingBatch25Leaders } from "./living-batch25-details";
import { livingBatch26Leaders } from "./living-batch26-details";
import { livingBatch27Leaders } from "./living-batch27-details";
import { livingBatch28Leaders } from "./living-batch28-details";
import { livingBatch29Leaders } from "./living-batch29-details";
import { livingBatch30Leaders } from "./living-batch30-details";
import { livingBatch31Leaders } from "./living-batch31-details";
import { livingBatch32Leaders } from "./living-batch32-details";
import { livingBatch33Leaders } from "./living-batch33-details";
import { livingGlampingLeaders } from "./living-glamping-details";
import { sustainableEcovillageLeaders } from "./sustainable-ecovillage";
import { maitreyaEcovillageLeaders } from "./maitreya-ecovillage";

export type LeaderPerson = {
 name: string;
 role: string;
 email?: string;
 phone?: string;
 url?: string;
 note?: string;
};

export type VillageOffice = {
 email?: string;
 phone?: string;
 address?: string;
 url?: string;
};

export type VillageLeaders = {
 people: LeaderPerson[];
 office?: VillageOffice;
};

/** Public names and office contacts the villages, press, or official sites have published. */
export const leadersBySlug: Record<string, VillageLeaders> =
{
	"sabbathday-lake": {
		people: [
			{
				name: "Brother Arnold Hadd",
				role: "Elder; last remaining brother",
				note: "Public voice of the United Society at Sabbathday Lake."
			},
			{
				name: "Sister June Carpenter",
				role: "Eldress"
			},
			{
				name: "Sister April Baxter",
				role: "Covenanted member",
				note: "Joined the society in 2025."
			}
		],
		office: {
			phone: "+1 207-926-4597",
			address: "707 Shaker Road, New Gloucester, ME 04260",
			url: "https://www.maineshakers.com/"
		}
	},
	"solheimar": {
		people: [{
			name: "Sesselja Sigmundsdóttir",
			role: "Founder",
			note: "Founded Sólheimar in 1930; died 1974."
		}],
		office: { url: "https://www.solheimar.is" }
	},
	"riverside": {
		people: [{
			name: "Hubert Holdaway",
			role: "Founding family",
			note: "Gifted the land for the Christian pacifist community in 1941."
		}],
		office: {
			email: "volunteer@riverside.org.nz",
			url: "https://www.riverside.org.nz/"
		}
	},
	"koinonia": {
		people: [
			{
				name: "Bren Dubay",
				role: "Executive director",
				note: "Director since 2004."
			},
			{
				name: "Clarence Jordan",
				role: "Co-founder",
				note: "1912–1969. Wrote the Cotton Patch Gospel."
			},
			{
				name: "Florence Jordan",
				role: "Co-founder"
			}
		],
		office: {
			email: "internship@koinoniafarm.org",
			phone: "+1 229-924-0391",
			address: "1324 GA Highway 49 South, Americus, GA 31719",
			url: "https://koinoniafarm.org/"
		}
	},
	"camphill-copake": {
		people: [{
			name: "Karl König",
			role: "Camphill founder",
			note: "Founded the Camphill movement in Scotland, 1939; died 1966."
		}],
		office: {
			email: "cvinfo@camphillvillage.org",
			phone: "+1 518-329-4851",
			address: "84 Camphill Road, Copake, NY 12516",
			url: "https://camphillvillage.org/contact-us/"
		}
	},
	"findhorn": {
		people: [
			{
				name: "Eileen Caddy",
				role: "Co-founder",
				note: "1917–2006."
			},
			{
				name: "Peter Caddy",
				role: "Co-founder",
				note: "1917–1994."
			},
			{
				name: "Dorothy Maclean",
				role: "Co-founder",
				note: "1920–2020."
			}
		],
		office: {
			email: "nfa.admin@findhorn.cc",
			phone: "+44 1309 690311",
			address: "The Park, Findhorn, Moray, Scotland IV36 3TZ",
			url: "https://www.ecovillagefindhorn.uk/"
		}
	},
	"twin-oaks": {
		people: [{
			name: "Kat Kinkade",
			role: "Co-founder",
			note: "1930–2008. Wrote A Walden Two Experiment."
		}, {
			name: "Internship program",
			role: "Two-to-six-month internships",
			email: "internship@twinoaks.org"
		}],
		office: {
			email: "visittwinoaks@gmail.com",
			phone: "+1 540-894-5126",
			address: "138 Twin Oaks Road, Louisa, VA 23093",
			url: "https://www.twinoaks.org/contact-us"
		}
	},
	"auroville": {
		people: [
			{
				name: "Mirra Alfassa (The Mother)",
				role: "Founder",
				note: "1878–1973. Inaugurated Auroville in 1968."
			},
			{
				name: "Sri Aurobindo",
				role: "Spiritual source",
				note: "1872–1950."
			},
			{
				name: "Admissions & Terminations Registry",
				role: "Joining Auroville",
				email: "atr@auroville.org.in",
				note: "First step is a volunteer stay of at least three months."
			}
		],
		office: {
			email: "avfoundation@auroville.org",
			phone: "+91 413 222 2007",
			address: "Auroville Foundation Bhavan, Town Hall, Auroville 605101, Tamil Nadu, India",
			url: "https://aurovillefoundation.org.in/contact-us/"
		}
	},
	"the-farm": {
		people: [
			{
				name: "Vickie",
				role: "Welcome Center",
				email: "vickie@thefarmcommunity.com",
				phone: "+1 931-964-3574"
			},
			{
				name: "Ina May Gaskin",
				role: "Co-founder; The Farm Midwifery Center"
			},
			{
				name: "Stephen Gaskin",
				role: "Co-founder",
				note: "1935–2014."
			}
		],
		office: {
			email: "vickie@thefarmcommunity.com",
			phone: "+1 931-964-3574",
			address: "100 Farm Road, Summertown, TN 38483",
			url: "https://thefarmcommunity.com/"
		}
	},
	"gaviotas": {
		people: [{
			name: "Paolo Lugari",
			role: "Founder"
		}],
		office: { url: "https://en.wikipedia.org/wiki/Gaviotas" }
	},
	"moora-moora": {
		people: [{
			name: "Bill Mollison",
			role: "Early permaculture influence",
			note: "Taught at Moora Moora."
		}],
		office: { url: "https://mooramoora.org.au/" }
	},
	"east-wind": {
		people: [{
			name: "Kat Kinkade",
			role: "Federation of Egalitarian Communities link",
			note: "East Wind was founded in 1974 on Twin Oaks' model."
		}],
		office: { url: "https://www.eastwind.org/" }
	},
	"damanhur": {
		people: [{
			name: "Esperide Ananas Ametista",
			role: "Spokesperson; long-time resident",
			email: "esperide@damanhur.org"
		}, {
			name: "Oberto Airaudi (Falco Tarassaco)",
			role: "Founder",
			note: "1950–2013."
		}],
		office: { url: "https://damanhur.org" }
	},
	"svanholm": {
		people: [{
			name: "Svanholm collective",
			role: "Income-sharing storkollektiv",
			note: "No single director; the collective meeting is the authority."
		}],
		office: { url: "https://svanholm.dk/english/" }
	},
	"lakabe": {
		people: [{
			name: "Original squatting group",
			role: "Founders, 1980",
			note: "Abandoned village reoccupied; decisions by assembly."
		}],
		office: { url: "https://www.lakabe.org/" }
	},
	"kibbutz-lotan": {
		people: [{
			name: "Lotan secretariat",
			role: "Kibbutz secretariat"
		}],
		office: {
			email: "volunteer@kibbutzlotan.com",
			url: "https://kibbutzlotan.com/en/"
		}
	},
	"lebensgarten": {
		people: [{
			name: "Lebensgarten association",
			role: "Resident association"
		}],
		office: { url: "https://www.lebensgarten.de" }
	},
	"niederkaufungen": {
		people: [{
			name: "Kommune plenary",
			role: "Consensus assembly"
		}],
		office: { url: "https://www.kommune-niederkaufungen.de/" }
	},
	"crystal-waters": {
		people: [
			{
				name: "Max Lindegger",
				role: "Principal designer; resident teacher"
			},
			{
				name: "Robert Tap",
				role: "Co-designer"
			},
			{
				name: "Barry Goodman",
				role: "Co-designer"
			},
			{
				name: "Geoff Young",
				role: "Co-designer"
			},
			{
				name: "Robin Clayfield",
				role: "Resident permaculture educator"
			}
		],
		office: {
			email: "ecopark@crystalwaters.org.au",
			phone: "+61 7 5494 4550",
			url: "https://crystalwaters.org.au/"
		}
	},
	"ecovillage-ithaca": {
		people: [{
			name: "Liz Walker",
			role: "Co-founder; long-time director of the Center for Transformative Action / EVI"
		}, {
			name: "Joan Bokaer",
			role: "Co-founder"
		}],
		office: { url: "https://ecovillageithaca.org/" }
	},
	"zegg": {
		people: [{
			name: "ZEGG seminar house team",
			role: "Current campus operators",
			note: "The community separated from Dieter Duhm's earlier project; Tamera is the later sister site."
		}],
		office: { url: "https://www.zegg.de/en/" }
	},
	"los-angeles-eco-village": {
		people: [{
			name: "Lois Arkin",
			role: "Co-founder; CRSP / L.A. Eco-Village Institute",
			email: "crsp@igc.org",
			phone: "+1 213-738-1254"
		}],
		office: {
			email: "crsp@igc.org",
			phone: "+1 213-738-1254",
			url: "https://laecovillage.org/"
		}
	},
	"earthaven": {
		people: [{
			name: "Diana Leafe Christian",
			role: "Long-time resident; author of Creating a Life Together",
			email: "diana@ic.org",
			phone: "+1 828-575-3205"
		}],
		office: {
			email: "information@earthaven.org",
			phone: "+1 828-669-7271",
			address: "5 Consensus Circle, Black Mountain, NC 28711",
			url: "https://www.earthaven.org/contact-us/"
		}
	},
	"konohana": {
		people: [{
			name: "Isadon",
			role: "Spiritual founder / family head",
			note: "Public name used by the Konohana Family founder."
		}],
		office: {
			email: "intl@konohana-family.org",
			url: "https://konohana-family.org/en/"
		}
	},
	"oaec": {
		people: [
			{
				name: "Dave Henson",
				role: "Co-founder; long-time executive director"
			},
			{
				name: "Brock Dolman",
				role: "Co-founder; WATER Institute"
			},
			{
				name: "Adam Wolpert",
				role: "Co-founder"
			}
		],
		office: {
			email: "oaec@oaec.org",
			phone: "+1 707-874-1557",
			url: "https://oaec.org/who-we-are/contact-directions/"
		}
	},
	"tamera": {
		people: [
			{
				name: "Sabine Lichtenfels",
				role: "Co-founder; peace activist"
			},
			{
				name: "Dieter Duhm",
				role: "Co-founder"
			},
			{
				name: "Charly Rainer Ehrenpreis",
				role: "Co-founder"
			}
		],
		office: {
			email: "office@tamera.org",
			address: "Monte do Cerro, 7630-392 Relíquias, Portugal",
			url: "https://www.tamera.org"
		}
	},
	"dancing-rabbit": {
		people: [{
			name: "Dancing Rabbit Land Trust board",
			role: "Land-holding nonprofit"
		}],
		office: {
			email: "hello@dancingrabbit.org",
			phone: "+1 660-883-5511",
			address: "1 Dancing Rabbit Lane, Rutledge, MO",
			url: "https://www.dancingrabbit.org/contact-dancing-rabbit/"
		}
	},
	"sieben-linden": {
		people: [{
			name: "Sieben Linden office",
			role: "Visitor and membership desk"
		}],
		office: {
			email: "info@siebenlinden.de",
			phone: "+49 39000 51235",
			url: "https://siebenlinden.org/en/"
		}
	},
	"cloughjordan": {
		people: [{
			name: "Davie Philip",
			role: "Early organizer; Cultivate / village education"
		}, {
			name: "Rhiannon Carey Bates",
			role: "EU project officer (public contact)"
		}],
		office: {
			email: "office@thevillage.ie",
			phone: "+353 505 42833",
			address: "North Tipperary Green Enterprise Park, Cloughjordan, Co. Tipperary, E53 VP86, Ireland",
			url: "https://www.thevillage.ie/contact/"
		}
	},
	"currumbin": {
		people: [{
			name: "Currumbin Ecovillage body corporate",
			role: "Community title / body corporate"
		}],
		office: { url: "https://theecovillage.com.au/" }
	},
	"longo-mai": {
		people: [{
			name: "Roland Perrot",
			role: "Early Longo Maï figure"
		}, {
			name: "Pierre Pellegrin",
			role: "Longo Maï network"
		}],
		office: { url: "https://www.longomaicostarica.org/" }
	},
	"maya-mountain": {
		people: [{
			name: "Christopher Nesbitt",
			role: "Founder; farm director"
		}],
		office: { url: "https://www.mmrfbz.org/" }
	},
	"pachamama": {
		people: [{
			name: "Elsa Pataky / village hosts",
			role: "Retreat centre operators",
			note: "PachaMama is run as a teaching/retreat village; contact the centre, not private hosts."
		}],
		office: { url: "https://www.pachamama.com/" }
	},
	"imap": {
		people: [{
			name: "IMAP teaching team",
			role: "Instituto Mesoamericano de Permacultura"
		}],
		office: { url: "https://imapermaculture.org/" }
	},
	"rancho-mastatal": {
		people: [{
			name: "Tim and Robin O’Donoghue",
			role: "Founders; ranch hosts"
		}],
		office: { url: "https://ranchomastatal.com/" }
	},
	"bona-fide": {
		people: [{
			name: "Michael Becker",
			role: "Founder, Project Bona Fide"
		}],
		office: {
			email: "probonafide@gmail.com",
			url: "https://projectbonafide.com/"
		}
	},
	"ipes": {
		people: [{
			name: "Karen Inwood",
			role: "Co-founder, Permaculture Institute of El Salvador"
		}],
		office: { url: "https://www.facebook.com/PermacultureElSalvador/" }
	},
	"finca-bellavista": {
		people: [{
			name: "Erica and Matt Hogan",
			role: "Founders of the treehouse community"
		}],
		office: { url: "https://www.fincabellavistacommunity.com/" }
	},
	"la-ecovilla": {
		people: [{
			name: "La Ecovilla Original board",
			role: "Community association"
		}],
		office: { url: "https://laecovilla.com/" }
	},
	"brave-earth": {
		people: [{
			name: "Michael Steinholt and Ryan Risso",
			role: "Founders / operators of Tierra Valiente"
		}],
		office: { url: "https://www.braveearth.com/" }
	},
	"lama": {
		people: [
			{
				name: "Steve Durkee (Nooruddeen Durkee)",
				role: "Co-founder"
			},
			{
				name: "Barbara Durkee (Asha Greer)",
				role: "Co-founder"
			},
			{
				name: "Jonathan Altman",
				role: "Co-founder"
			}
		],
		office: {
			email: "registrar@lamafoundation.org",
			phone: "+1 575-586-1269",
			address: "PO Box 240, San Cristobal, NM 87564",
			url: "https://www.lamafoundation.org/contact/"
		}
	},
	"arcosanti": {
		people: [{
			name: "Paolo Soleri",
			role: "Founder",
			note: "1919–2013."
		}],
		office: {
			email: "volunteer@arcosanti.org",
			phone: "+1 928-632-6217",
			address: "13555 S Cross L Road, Mayer, AZ 86333",
			url: "https://www.arcosanti.org/contact/"
		}
	},
	"alpha-farm": {
		people: [{
			name: "Caroline Estes",
			role: "Founder; Quaker facilitator"
		}, {
			name: "Jim Estes",
			role: "Co-founder"
		}],
		office: { url: "https://www.ic.org/directory/community/alpha-farm/" }
	},
	"sirius": {
		people: [{
			name: "Corinne McLaughlin",
			role: "Co-founder"
		}, {
			name: "Gordon Davidson",
			role: "Co-founder"
		}],
		office: {
			email: "intern.program@siriuscommunity.org",
			url: "https://siriuscommunity.org/"
		}
	},
	"huehuecoyotl": {
		people: [{
			name: "Alberto Ruz Buenfil (El Coyote)",
			role: "Co-founder",
			note: "1945–2023."
		}, {
			name: "Jan Svante Vanbart",
			role: "Co-founder"
		}],
		office: { url: "https://huehuecoyotl.net" }
	},
	"cite-ecologique": {
		people: [{
			name: "Michel Deunov Cornellier",
			role: "Founder"
		}],
		office: {
			email: "info@citeecologique.org",
			url: "https://www.citeecologique.org/"
		}
	},
	"acorn": {
		people: [{
			name: "Ira Wallace",
			role: "Long-time member; Southern Exposure Seed Exchange"
		}],
		office: { url: "https://www.southernexposure.com/acorn-community-farm/" }
	},
	"las-canadas": {
		people: [{
			name: "Ricardo Romero",
			role: "Founder; agronomist"
		}, {
			name: "Tania de Alba",
			role: "Co-founder"
		}],
		office: { url: "https://bosquedeniebla.com.mx/" }
	},
	"our-ecovillage": {
		people: [{
			name: "Brandy Gallagher",
			role: "Founder; O.U.R. Ecovillage"
		}],
		office: { url: "https://ourecovillage.org/" }
	},
	"whole-village": {
		people: [{
			name: "Whole Village founding eight families",
			role: "Purchased the Caledon land in 2002"
		}],
		office: { url: "https://www.wholevillage.org/" }
	},
	"botton": {
		people: [{
			name: "Karl König",
			role: "Camphill founder"
		}, {
			name: "Alistair Macmillan",
			role: "Macmillan family offered Botton Hall"
		}],
		office: { url: "https://www.eskvalleycamphill.org/" }
	},
	"limans": {
		people: [{
			name: "Roland Perrot",
			role: "Early Longo Maï figure"
		}],
		office: { url: "https://www.prolongomai.ch/" }
	},
	"los-portales": {
		people: [{
			name: "Resident assembly",
			role: "Asociación / espacio cooperativo"
		}],
		office: { url: "https://losportales.net/" }
	},
	"torri-superiore": {
		people: [
			{
				name: "Piero Caffaratti",
				role: "Co-founder of the cultural association"
			},
			{
				name: "Gianna Ballestra",
				role: "Co-founder"
			},
			{
				name: "Ture Nirvane",
				role: "Long-time resident / public voice"
			}
		],
		office: { url: "https://www.torri-superiore.org/" }
	},
	"krishna-valley": {
		people: [{
			name: "Sivarama Swami",
			role: "Founding spiritual figure"
		}],
		office: { url: "https://www.krishnavalley.com/" }
	},
	"brithdir-mawr": {
		people: [
			{
				name: "Julian Orbach",
				role: "Co-founder"
			},
			{
				name: "Emma Orbach",
				role: "Co-founder; later Tir Ysbrydol"
			},
			{
				name: "Tony Wrench",
				role: "That Roundhouse"
			},
			{
				name: "Jane Faith",
				role: "That Roundhouse"
			}
		],
		office: { url: "https://brithdirmawr.co.uk/" }
	},
	"keuruu": {
		people: [{
			name: "Keuruun ekokylä ry",
			role: "Registered association that holds the land"
		}],
		office: { url: "https://www.keuruunekokyla.fi/en/" }
	},
	"hurdal": {
		people: [{
			name: "Kilden founders",
			role: "First straw-bale cluster, 2002–03"
		}, {
			name: "Gaia Architects",
			role: "Huldra Økogrend master plan"
		}],
		office: { url: "https://hurdalecovillage.org/" }
	},
	"suderbyn": {
		people: [{
			name: "Ingrid Gustafsson",
			role: "Co-founder"
		}, {
			name: "Robert Hall",
			role: "Co-founder"
		}],
		office: { url: "https://suderbyn.se/" }
	},
	"aardehuis": {
		people: [{
			name: "Michael Reynolds",
			role: "Earthship designer (inspiration)"
		}, {
			name: "Vereniging Aardehuis Oost-Nederland",
			role: "Resident association"
		}],
		office: { url: "https://aardehuis.nl/" }
	},
	"comunidad-del-sur": {
		people: [{
			name: "Founding anarchist circle",
			role: "Montevideo, 1955"
		}],
		office: { url: "https://en.wikipedia.org/wiki/Comunidad_del_Sur" }
	},
	"penalolen": {
		people: [{
			name: "Original Lo Hermida purchasers",
			role: "Founding households, 1980"
		}],
		office: { url: "https://comunidadecologicadepenalolen.cl/" }
	},
	"eco-truly": {
		people: [{
			name: "Hare Krishna founding devotees",
			role: "Chacra y Mar, 1994"
		}],
		office: { url: "https://ecovillage.org/map/community/eco-truly-park-eco-village/" }
	},
	"ecovilla-gaia": {
		people: [{
			name: "Gustavo Ramírez",
			role: "Asociación Gaia / early resident"
		}, {
			name: "Silvia",
			role: "Asociación Gaia founding circle"
		}],
		office: { url: "https://www.gaia.org.ar/" }
	},
	"ipec": {
		people: [{
			name: "André Soares",
			role: "Founder; bought the degraded Cerrado site"
		}, {
			name: "Lucy Legan",
			role: "Co-founder; planted the site"
		}],
		office: { url: "https://ecocentro.org/" }
	},
	"piracanga": {
		people: [{
			name: "Angelina Ataíde",
			role: "Founder of the Piracanga / Inkiri centre"
		}],
		office: { url: "https://inkiri.com/the-inkiri-center/" }
	},
	"aldeafeliz": {
		people: [{
			name: "Aldeafeliz association",
			role: "Nonprofit that holds the land"
		}],
		office: { url: "https://aldeafeliz.org/" }
	},
	"nashira": {
		people: [{
			name: "Ángela Cuevas Dolmetsch",
			role: "Founder; led the four-woman start in 2003"
		}],
		office: { url: "https://www.nashira-ecoaldea.org/" }
	},
	"el-manzano": {
		people: [{
			name: "Carrión Raby siblings",
			role: "Returned to the family farm around 2007"
		}],
		office: { url: "https://elmanzano.org/" }
	},
	"finca-sagrada": {
		people: [{
			name: "Walter Davis Moora",
			role: "Co-founder; biodynamic farmer"
		}, {
			name: "Susan Davis Moora",
			role: "Co-founder"
		}],
		office: { url: "https://www.fincasagrada.org/" }
	},
	"sekem": {
		people: [{
			name: "Helmy Abouleish",
			role: "CEO, SEKEM Initiative"
		}, {
			name: "Ibrahim Abouleish",
			role: "Founder",
			note: "1937–2017. Right Livelihood Award."
		}],
		office: { url: "https://sekem.com/en/about/" }
	},
	"wongsanit": {
		people: [{
			name: "Sulak Sivaraksa",
			role: "Founder of the ashram project; SNF"
		}, {
			name: "Saisawatdee Svasti",
			role: "Early ashram figure"
		}],
		office: { url: "https://wongsanit-ashram.org/" }
	},
	"ndem": {
		people: [{
			name: "Serigne Babacar Mbow",
			role: "Public face of ONG Ndem / Maam Samba"
		}, {
			name: "Fallou Mbow",
			role: "Association founding family"
		}],
		office: { url: "https://ong-ndem.org/nous-connaitre/" }
	},
	"songhai": {
		people: [{
			name: "Father Godfrey Nzamujo",
			role: "Founder, Songhai Centre"
		}],
		office: { url: "https://www.songhai.org/apropos?lang=en" }
	},
	"tlholego": {
		people: [{
			name: "Paul Cohen",
			role: "Founder; Rucore"
		}],
		office: { url: "https://rucore.org.za/tlholego-village/" }
	},
	"lilleoru": {
		people: [{
			name: "Ingvar Villido",
			role: "Founder; yoga teacher"
		}],
		office: { url: "https://www.lilleoru.ee/en/" }
	},
	"zmag": {
		people: [{
			name: "ZMAG association",
			role: "Founded 2002; Recycled Estate"
		}],
		office: { url: "https://www.zmag.hr/en/about-us/recycled-estate.html" }
	},
	"guneskoy": {
		people: [
			{
				name: "Ali Gökmen",
				role: "Co-founder"
			},
			{
				name: "İnci Gökmen",
				role: "Co-founder"
			},
			{
				name: "Atila Koç",
				role: "Co-founder"
			},
			{
				name: "Claire Özel",
				role: "Co-founder"
			},
			{
				name: "Yavuz Ataman",
				role: "Co-founder"
			}
		],
		office: { url: "https://www.guneskoy.org.tr/en/guneskoy/about-guneskoy-2" }
	},
	"kufunda": {
		people: [{
			name: "Maaianne Knuth",
			role: "Founder"
		}],
		office: { url: "https://www.kufunda.org/about-us" }
	},
	"glarisegg": {
		people: [{
			name: "Gemeinschaft Schloss Glarisegg",
			role: "Residential association (from 2009)"
		}],
		office: { url: "https://schloss-glarisegg.ch/" }
	},
	"los-horcones": {
		people: [{
			name: "Los Horcones founding family",
			role: "Walden Two / behavior-analysis community, 1973"
		}],
		office: { url: "https://www.loshorcones.org.mx/" }
	},
	"tosepan": {
		people: [{
			name: "Tosepan Titataniske cooperative leadership",
			role: "Indigenous cooperative union, Cuetzalan"
		}],
		office: { url: "https://tosepan.coop/" }
	},
	"teopantli-kalpulli": {
		people: [{
			name: "Levi Ríos",
			role: "Public voice of the kalpulli"
		}],
		office: { url: "https://esperanzaproject.com/2014/sustainability/ecovillages/a-new-humanity-on-the-move-31-years-of-community-in-teopantli-kalpulli/" }
	},
	"litibu": {
		people: [{
			name: "Litibú EcoVillage developers / HOA",
			role: "Lot community on the Nayarit coast"
		}],
		office: { url: "https://www.litibuecovillage.org/" }
	},
	"u-yits-kaan": {
		people: [{
			name: "U Yits Ka'an school team",
			role: "Maya agroecology school, Maní"
		}],
		office: { url: "https://uyitskaan.com/" }
	},
	"tierra-del-sol": {
		people: [{
			name: "Tierra del Sol teaching farm",
			role: "Oaxaca"
		}],
		office: { url: "https://www.tierradelsol.org.mx/" }
	},
	"bosque-village": {
		people: [{
			name: "Beau and the Bosque circle",
			role: "Michoaćan experimental village"
		}],
		office: { url: "https://ecovillage.org/map/community/bosque-village/" }
	},
	"via-organica": {
		people: [{
			name: "Rancho San Miguel / Vía Orgánica team",
			role: "San Miguel de Allende"
		}],
		office: { url: "https://viaorganica.org/" }
	},
	"crisalium": {
		people: [{
			name: "Crisalium founders",
			role: "Mexican ecoaldea"
		}],
		office: { url: "https://crisalium.org/" }
	},
	"inla-kesh": {
		people: [{
			name: "Inla Kesh circle",
			role: "Chiapas ecoaldea"
		}],
		office: { url: "https://www.inlakeshchiapas.org/" }
	},
	"vicente-guerrero": {
		people: [{
			name: "Grupo Vicente Guerrero campesino promoters",
			role: "Españita, Tlaxcala"
		}],
		office: { url: "https://gvgtlaxcala.org/" }
	},
	"nanciyaga": {
		people: [{
			name: "Nanciyaga reserve hosts",
			role: "Catemaco, Veracruz"
		}],
		office: { url: "https://www.facebook.com/reservananciyaga/" }
	},
	"pueblo-sacbe": {
		people: [{
			name: "Pueblo Sacbé / Jaguar Negro circle",
			role: "Yucatán"
		}],
		office: { url: "https://jaguarnegroartcenter.com/pueblo-sacbe/" }
	},
	"ixixtlan": {
		people: [{
			name: "Ixixtlán hosts",
			role: "Tepoztlán area"
		}],
		office: { url: "https://ixixtlan.com/" }
	},
	"huerto-roma-verde": {
		people: [{
			name: "Huerto Roma Verde collective",
			role: "Mexico City"
		}],
		office: { url: "https://www.huertoromaverde.org/" }
	},
	"rancho-la-salud": {
		people: [{
			name: "Rancho La Salud Village hosts",
			role: "Morelos"
		}],
		office: { url: "https://rancholasaludvillage.com/" }
	},
	"tamarindos": {
		people: [{
			name: "EcoAldea Tamarindos association",
			role: "Veracruz"
		}],
		office: { url: "https://www.ecoaldeatamarindos.com.mx/" }
	},
	"hapori": {
		people: [{
			name: "Hapori Eco Aldea hosts",
			role: "Mexico"
		}],
		office: { url: "https://www.hapori.com.mx/" }
	},
	"sekkan": {
		people: [{
			name: "Rancho Ecológico Sekkan hosts",
			role: "Mexico"
		}],
		office: { url: "https://www.ic.org/directory/community/rancho-ecologico-sekkan/" }
	},
	"nuevo-san-juan": {
		people: [{
			name: "Comunidad Indígena de Nuevo San Juan Parangaricutiro",
			role: "Communal authorities / comuneros"
		}],
		office: { url: "https://www.comunidadindigena.com.mx/" }
	},
	"cedicam": {
		people: [{
			name: "Jesús León Santos",
			role: "Director; Goldman Environmental Prize 2008"
		}],
		office: { url: "https://www.goldmanprize.org/recipient/jesus-leon-santos/" }
	},
	"sierra-gorda": {
		people: [{
			name: "Martha Isabel Ruiz Corzo (Pati)",
			role: "Founder, Grupo Ecológico Sierra Gorda"
		}, {
			name: "Roberto Pedraza Muñoz",
			role: "Co-founder"
		}],
		office: { url: "https://sierragorda.net/" }
	},
	"la-ventanilla": {
		people: [{
			name: "Servicios Ecoturísticos La Ventanilla",
			role: "Family cooperative"
		}],
		office: { url: "https://laventanilla.com.mx/" }
	},
	"punta-laguna": {
		people: [{
			name: "Najil Tucha cooperative",
			role: "Village tourism cooperative for Otoch Ma'ax Yetel Kooh"
		}],
		office: { url: "https://puntalagunamx.com/" }
	},
	"yomol-atel": {
		people: [{
			name: "Dora Luisa Roblero",
			role: "Cooperative public figure"
		}],
		office: { url: "https://www.yomolatel.org/" }
	},
	"tierraluz": {
		people: [{
			name: "TierraLuz Eco Community association",
			role: "Sayulita-area lots + A.C."
		}],
		office: { url: "https://www.tierraluz.org/" }
	},
	"huerto-tlatelolco": {
		people: [{
			name: "Cultiva Ciudad",
			role: "Garden organizers at Tlatelolco"
		}],
		office: { url: "https://cultivaciudad.org/huerto-tlatelolco/" }
	},
	"kuyabeh": {
		people: [{
			name: "Kuyabeh development hosts",
			role: "Tulum–Cobá highway"
		}],
		office: { url: "https://kuyabeh.com/" }
	},
	"cabo-pulmo": {
		people: [{
			name: "Mario Castro Lucero",
			role: "Founder, Cabo Pulmo Divers (1990)"
		}, {
			name: "David Castro",
			role: "PADI instructor, Cabo Pulmo Divers"
		}],
		office: { url: "https://www.cabopulmo.com/" }
	},
	"baja-ecovillage": {
		people: [{
			name: "Mark Lurie",
			role: "Founder; Zonas Verdes de Punta Banda A.C."
		}],
		office: { url: "https://bajaecovillage.com/" }
	},
	"baja-biosana": {
		people: [{
			name: "Baja BioSana resident members",
			role: "El Chorro living-and-learning centre"
		}],
		office: { url: "https://www.instagram.com/bajabiosana/" }
	},
	"san-jose-de-la-zorra": {
		people: [{
			name: "Traditional Kumiai authority",
			role: "San José de la Zorra"
		}],
		office: { url: "https://sanjosedelazorra.com/" }
	},
	"rancho-pacifico-baja": {
		people: [{
			name: "Rancho Pacífico Baja hosts",
			role: "El Pescadero homestead",
			phone: "+52 612 233 7631"
		}],
		office: {
			phone: "+52 612 233 7631",
			url: "https://www.ranchopacificobaja.com/"
		}
	},
	"tateikie": {
		people: [{
			name: "Gobernador Tradicional of TateiKie",
			role: "Political and religious cargo; asamblea comunitaria",
			note: "Cargos rotate. The asamblea is the highest figure. No single published mayor of lots."
		}],
		office: { url: "https://es.wikipedia.org/wiki/San_Andr%C3%A9s_Cohamiata" }
	},
	"ayotitlan": { people: [{
		name: "Consejo de Mayores of Ejido Ayotitlán",
		role: "Traditional Nahua-Otomí authority, Sierra de Manantlán",
		note: "Sits beside the comisariado. The agrarian and mining fight is the weekday."
	}] },
	"bosque-la-primavera": {
		people: [{
			name: "Gabriel Vázquez",
			role: "Director, OPD Bosque La Primavera",
			note: "Public director of the APFF. Consejo Asesor sits beside the directorate. A forest job."
		}],
		office: { url: "https://bosquelaprimavera.jalisco.gob.mx/" }
	},
	"kasisi": {
		people: [{
			name: "Jesuit brothers of Kasisi",
			role: "Kasisi Agricultural Training Centre"
		}],
		office: { url: "https://katczm.com/" }
	},
	"awra-amba": {
		people: [{
			name: "Zumra Nuru",
			role: "Founder; co-chairman"
		}],
		office: { url: "https://awraamba.net/" }
	},
	"umoja": {
		people: [{
			name: "Rebecca Lolosoli",
			role: "Founder, Umoja Uaso Women's Village"
		}],
		office: { url: "https://umojawomen.or.ke/" }
	},
	"st-jude": {
		people: [{
			name: "St. Jude Family Projects hosts",
			role: "Masaka, Uganda"
		}],
		office: { url: "https://stjudefamilyprojects.com/" }
	},
	"khula-dhamma": {
		people: [{
			name: "Khula Dhamma residents",
			role: "Eastern Cape Buddhist community"
		}],
		office: { url: "https://www.khuladharma.com/" }
	},
	"nadeet": {
		people: [{
			name: "Viktoria Keding",
			role: "Director, NaDEET"
		}],
		office: {
			email: "admin@nadeet.org",
			url: "https://nadeet.org/"
		}
	},
	"kaydara": {
		people: [{
			name: "Pierre Rabhi influence / Jardins d'Afrique",
			role: "Agroecology school farm, Senegal"
		}],
		office: { url: "https://jardins-afrique.org/" }
	},
	"otepic": {
		people: [{
			name: "OTEPIC organizers",
			role: "Kitale, Kenya"
		}],
		office: { url: "https://www.otepic.org/" }
	},
	"ndanifor": {
		people: [{
			name: "Better World Cameroon team",
			role: "Ndanifor Permaculture Ecovillage"
		}],
		office: { url: "https://betterworld-cameroon.com/" }
	},
	"basaisa": {
		people: [{
			name: "Salah Arafa",
			role: "Founder; Ashoka fellow"
		}],
		office: { url: "https://www.ashoka.org/en/fellow/salah-arafa" }
	},
	"boabeng-fiema": {
		people: [{
			name: "Boabeng and Fiema traditional authorities",
			role: "Monkey sanctuary communities"
		}],
		office: { url: "https://visitghana.com/attractions/boabeng-fiema-monkey-sanctuary/" }
	},
	"fambidzanai": {
		people: [{
			name: "Fambidzanai Permaculture Centre staff",
			role: "Harare"
		}],
		office: { url: "https://fambidzanai.org.zw/" }
	},
	"guie": {
		people: [{
			name: "AZN / Eau Vive Verte team",
			role: "Ferme pilote de Guiè"
		}],
		office: { url: "https://eauterreverdure.org/guie/" }
	},
	"chikukwa": {
		people: [{
			name: "Chikukwa Ecological Land Use Community Trust",
			role: "CELUCT, Chimanimani"
		}],
		office: { url: "https://celuozw.org/" }
	},
	"il-ngwesi": {
		people: [{
			name: "Il Ngwesi Group Ranch committee",
			role: "Laikipia Maasai group ranch"
		}],
		office: { url: "https://ilngwesi.com/" }
	},
	"lynedoch": {
		people: [{
			name: "Lynedoch / Sustainability Institute",
			role: "Stellenbosch"
		}],
		office: { url: "https://www.sustainabilityinstitute.net/eco-village/" }
	},
	"anja": {
		people: [{
			name: "Association Anja Miray",
			role: "Anja Community Reserve"
		}],
		office: { url: "https://www.equatorinitiative.org/2017/05/30/association-anja-miray/" }
	},
	"atarashiki-mura": {
		people: [{
			name: "Mushanokōji Saneatsu",
			role: "Founder",
			note: "1885–1976. White Birch (Shirakaba) writer."
		}],
		office: { url: "http://www.atarashiki-mura.or.jp/" }
	},
	"anandwan": {
		people: [
			{
				name: "Murlidhar Devidas Amte (Baba Amte)",
				role: "Founder",
				note: "1914–2008."
			},
			{
				name: "Sadhana Amte",
				role: "Co-founder"
			},
			{
				name: "Vikas Amte",
				role: "Maharogi Sewa Samiti leadership"
			},
			{
				name: "Prakash Amte",
				role: "Lok Biradari Prakalp"
			}
		],
		office: { url: "https://www.maharogisewasamiti.org/" }
	},
	"barefoot-college": {
		people: [{
			name: "Bunker Roy",
			role: "Founder, Social Work and Research Centre / Barefoot College"
		}, {
			name: "Meagan Fallone",
			role: "Barefoot College International (public leadership)"
		}],
		office: { url: "https://www.barefootcollegetilonia.org/" }
	},
	"seongmisan": {
		people: [{
			name: "Seongmisan Maeul parents' cooperative",
			role: "Childcare co-op that started the village, 1994"
		}],
		office: { url: "https://world.seoul.go.kr/policy/key-policies/city-initiatives/2-town-community/" }
	},
	"ulpotha": {
		people: [
			{
				name: "Giles",
				role: "Co-restorer, 1994"
			},
			{
				name: "Viren Perera",
				role: "Co-restorer"
			},
			{
				name: "Mudiyanse Tennekoon",
				role: "Local partner"
			},
			{
				name: "Manik Sandrasagra",
				role: "Local partner"
			}
		],
		office: { url: "https://www.ulpotha.com/" }
	},
	"taomi": {
		people: [{
			name: "Taomi Community Development Association",
			role: "Post-921 reconstruction"
		}],
		office: { url: "http://tao-mi.com.tw/" }
	},
	"pun-pun": {
		people: [{
			name: "Jon Jandai",
			role: "Co-founder"
		}, {
			name: "Peggy Reents",
			role: "Co-founder"
		}],
		office: {
			email: "punpunvolunteers@gmail.com",
			url: "https://punpunthailand.org/"
		}
	},
	"bumi-langit": {
		people: [{
			name: "Iskandar Waworuntu",
			role: "Founder, Bumi Langit Institute"
		}],
		office: { url: "https://www.bumilangit.org/" }
	},
	"little-donkey": {
		people: [{
			name: "Shi Yan",
			role: "Founder, Little Donkey Farm (CSA)"
		}],
		office: { url: "https://chinadevelopmentbrief.org/ngos/little-donkey-farm/" }
	},
	"gk-enchanted-farm": {
		people: [{
			name: "Tony Meloto",
			role: "Gawad Kalinga founder"
		}],
		office: { url: "https://www.gk1world.com/" }
	},
	yucun: {
		people: [{
			name: "Yucun villagers' committee",
			role: "Tianhuangping, Anji"
		}],
		office: { url: "https://en.wikipedia.org/wiki/Anji_County" }
	},
	"lehe-daping": {
		people: [{
			name: "Liao Xiaoyi",
			role: "Founder, Beijing Global Village; Lehe Home at Daping"
		}],
		office: { url: "https://www.chinadevelopmentbrief.org.cn/news/detail/10591.html" }
	},
	"shared-harvest": {
		people: [{
			name: "Shi Yan",
			role: "Founder, Shared Harvest CSA"
		}],
		office: { url: "https://fxshcsa.com/about/intro.html" }
	},
	"sun-commune": {
		people: [{
			name: "Chen Wei",
			role: "Legal representative, Sun Commune"
		}],
		office: { url: "https://baike.baidu.com/item/杭州太阳公社农村产业发展有限公司/16156616" }
	},
	qiandao: {
		people: [{
			name: "Founding monastic circle",
			role: "Qiandao Lake Natural Farming Ecovillage"
		}],
		office: { url: "https://www.localfutures.org/programs/global-to-local/planet-local/eco-communities/qiandao-ecovillage/" }
	},
	"sunshine-ecovillage": {
		people: [{
			name: "Sunshine Ecovillage Network hosts",
			role: "Xuling Village, Jiande"
		}],
		office: {
			phone: "+86 181 6714 2660",
			url: "https://ecovillage.org/map/community/sunshine-ecovillage/"
		}
	},
	kitezh: {
		people: [{
			name: "Dmitry Morozov",
			role: "Founder, Kitezh children’s community (1992)"
		}],
		office: { url: "http://www.kitezh.org/" }
	},
	"nevo-ecoville": {
		people: [{
			name: "Ivan S. Goncharov",
			role: "Executive director, Centre for Ecological Initiatives"
		}],
		office: { url: "https://nevo-ecoville.narod.ru/my.html" }
	},
	grishino: {
		people: [{
			name: "Grishino eco-circle",
			role: "Vazhinka hamlet hosts"
		}],
		office: { url: "https://ecovillage.org/map/community/ecovillage-grishino/" }
	},
	tiberkul: {
		people: [{
			name: "Sergey Torop (Vissarion)",
			role: "Founder, Church of the Last Testament (arrested 2020; sentence reported 2025)"
		}],
		office: { url: "https://en.wikipedia.org/wiki/Vissarion" }
	},
	kovcheg: {
		people: [{
			name: "Fedor Lazutin",
			role: "Public writer and founding voice, Kovcheg"
		}],
		office: { url: "https://www.eco-kovcheg.ru/keyfacts.html" }
	},
	vedrussiya: {
		people: [{
			name: "Vedrussiya settlement hosts",
			role: "Seversky District, Krasnodar Krai"
		}],
		office: { url: "https://prpvedrussia.ru/" }
	},
	rodnoe: {
		people: [{
			name: "Rodnoe Kin Domain Settlement",
			role: "Sudogodsky District, Vladimir Oblast"
		}],
		office: { url: "https://vmegre.com/en/kin-domain/vladimir-oblast-region-rodnoe/" }
	},
	orion: {
		people: [{
			name: "Maria Pichugina",
			role: "Head of Orion children’s village; raised at Kitezh"
		}],
		office: { url: "https://celebratingoneincrediblefamily.org/kitezh-childrens-community-in-russia" }
	},
	zdravoe: {
		people: [{
			name: "Zdravoe settlement hosts",
			role: "Stanitsa Grigoryevskaya, Seversky District"
		}],
		office: { url: "https://vk.com/zdravoe_info" }
	},
	"celo": {
		people: [{
			name: "Arthur Morgan influence / Celo founders",
			role: "Celo Community, 1937, Burnsville NC"
		}],
		office: { url: "https://en.wikipedia.org/wiki/Celo_Community" }
	},
	"sunrise-ranch": {
		people: [{
			name: "Lloyd Arthur Meeker (Uranda)",
			role: "Founder of Emissaries of Divine Light, 1945"
		}],
		office: { url: "https://sunriseranch.org/" }
	},
	"ananda-village": {
		people: [{
			name: "Swami Kriyananda (J. Donald Walters)",
			role: "Founder",
			note: "1926–2013. Direct disciple of Paramhansa Yogananda."
		}],
		office: { url: "https://anandavillage.org/" }
	},
	"sandhill": {
		people: [{
			name: "Sandhill Farm members",
			role: "Federation of Egalitarian Communities; Missouri"
		}],
		office: { url: "https://sandhillfarm.org/" }
	},
	"linnaea": {
		people: [{
			name: "Linnaea Farm stewards",
			role: "Cortes Island land trust"
		}],
		office: { url: "https://www.linnaeafarm.org/" }
	},
	"camphill-ontario": {
		people: [{
			name: "Camphill Communities Ontario",
			role: "Canadian Camphill"
		}],
		office: {
			email: "info@camphill.on.ca",
			url: "https://www.camphill.on.ca/"
		}
	},
	"lost-valley": {
		people: [],
		office: {
			email: "volunteer@lostvalley.org",
			url: "https://www.lostvalley.org/"
		}
	},
	"windsong": {
		people: [{
			name: "WindSong Cohousing members",
			role: "Langley, BC"
		}],
		office: { url: "https://windsong.bc.ca/" }
	},
	"yarrow": {
		people: [{
			name: "Yarrow Ecovillage / Groundswell Cohousing",
			role: "Chilliwack, BC"
		}],
		office: { url: "https://groundswellcohousing.ca/" }
	},
	"ecoreality": {
		people: [{
			name: "EcoReality Co-op members",
			role: "Salt Spring Island"
		}],
		office: { url: "https://www.ecoreality.org/" }
	},
	"bryn-gweled": {
		people: [{
			name: "Bryn Gweled Homesteads membership",
			role: "Upper Southampton, Bucks County"
		}],
		office: {
			email: "bryngweledmembership@gmail.com",
			url: "https://bryngweled.org/"
		}
	},
	"the-vale": {
		people: [{
			name: "Jane and Griscom Morgan",
			role: "Founders"
		}],
		office: { url: "https://www.ic.org/directory/community/the-vale/" }
	},
	heathcote: {
		people: [{
			name: "Mildred Loomis",
			role: "School of Living"
		}, {
			name: "Bill Anacker",
			role: "Land that became Heathcote Center"
		}],
		office: { url: "https://heathcote.org/" }
	},
	"kimberton-hills": {
		people: [{
			name: "Karin Myrin",
			role: "Gave the estate"
		}, {
			name: "Helen Zipperlen",
			role: "Co-founder"
		}],
		office: { url: "https://www.camphillkimberton.org/" }
	},
	miccosukee: {
		people: [{
			name: "James Clement van Pelt and Anna Coble van Pelt",
			role: "Founders"
		}, {
			name: "Chris and Carol Headley",
			role: "Founders"
		}],
		office: { url: "http://miccosukeelandcoop.net/" }
	},
	"shannon-farm": {
		people: [{
			name: "Shannon Farm Community members",
			role: "Afton, Rockfish Valley"
		}],
		office: { url: "https://www.ic.org/directory/community/shannon-farm-community/" }
	},
	"village-homes": {
		people: [{
			name: "Michael Corbett",
			role: "Designer and co-founder"
		}, {
			name: "Judy Corbett",
			role: "Co-founder; has lived there since 1976"
		}],
		office: { url: "https://villagehomes.hoaspace.com/" }
	},
	songaia: {
		people: [{
			name: "Songaia Cohousing members",
			role: "Bothell, Washington"
		}],
		office: { url: "http://www.songaia.com/" }
	},
	heartwood: {
		people: [{
			name: "Heartwood Cohousing members",
			role: "Bayfield, Colorado"
		}],
		office: {
			email: "community@heartwoodcohousing.com",
			url: "https://www.heartwoodcohousing.com/"
		}
	},
	"bhrugu-aranya": {
		people: [{
			name: "Homa Therapy Foundation in Poland",
			role: "Holds the four hectares"
		}],
		office: {
			email: "info@agnihotra.pl",
			phone: "+48 502 347 898",
			address: "Nadlas / Wysoka 151, 34-240 Jordanów, Poland",
			url: "https://agnihotra.pl/en/our-ecovillage/"
		}
	},
	juchowo: {
		people: [{
			name: "Stanisław Karłowski",
			role: "Namesake; Polish biodynamic pioneer (1879–1939)"
		}],
		office: {
			email: "info@juchowo.org",
			phone: "+48 94 375 3821",
			address: "Juchowo 54 A, 78-446 Silnowo, Poland",
			url: "https://www.juchowo.org/en/about-us.html"
		}
	},
	brzozowka: {
		people: [{
			name: "Zasadźca of Eko-Osada Brzozówka",
			role: "Marked the social centre in 2015"
		}],
		office: {
			phone: "+48 574 407 699",
			address: "Brzozówka 24d, 96-214 Cielądz, Poland",
			url: "https://eko-brzozowka.pl/"
		}
	},
	"ostoja-natury": {
		people: [{
			name: "Piotr Ostaszewski",
			role: "Founder and CEO of Spółdzielnia Ostoja Natury"
		}],
		office: {
			email: "piotr.ostaszewski@ostojanatury.pl",
			address: "Tomaszyn, gmina Olsztynek, Poland",
			url: "https://ostojanatury.pl/en/"
		}
	},
	osada: {
		people: [{
			name: "Stowarzyszenie Osada Możliwości",
			role: "Association established 2021"
		}],
		office: {
			email: "osada@osada.earth",
			phone: "+48 791 742 387",
			address: "Prosinko 28, 78-552, Poland",
			url: "https://www.osada.earth/"
		}
	},
	sunseed: {
		people: [],
		office: {
			email: "sunseed@sunseed.org.uk",
			phone: "+34 680 599 431",
			address: "Los Molinos del Río Aguas, Sorbas, Almería, Spain",
			url: "https://www.sunseed.org.uk/"
		}
	},
	"gaia-ashram": {
		people: [{
			name: "Om Sunisa Jamwiset Deiters",
			role: "Co-founder and programme director; previously a facilitator at Wongsanit Ashram"
		}, {
			name: "Tom Deiters",
			role: "Co-founder"
		}],
		office: {
			email: "gaiaschoolasia@gmail.com",
			phone: "+66 80 849 8582",
			address: "149 M.1 Ban That, Phen District, Udon Thani 41150, Thailand",
			url: "https://gaiaschoolasia.com/"
		}
	},
	"quail-springs": {
		people: [{
			name: "Warren Brush",
			role: "Wilderness Youth Project co-founder; origin story of the Cuyama site"
		}, {
			name: "Cyndi Harvan",
			role: "Wilderness Youth Project co-founder; origin story of the Cuyama site"
		}],
		office: {
			email: "info@quailsprings.org",
			phone: "+1 805-886-7239",
			address: "35070 Highway 33, Maricopa, CA 93252",
			url: "https://www.quailsprings.org/"
		}
	},
	"camphill-minnesota": {
		people: [],
		office: {
			email: "outreach@camphillmn.org",
			phone: "+1 320-732-6365",
			address: "15136 Celtic Drive, Sauk Centre, MN 56378",
			url: "https://www.camphillmn.org/"
		}
	},
	"drop-city": { people: [
		{
			name: "Gene Bernofsky",
			role: "Co-founder (historical)"
		},
		{
			name: "JoAnn Bernofsky",
			role: "Co-founder (historical)"
		},
		{
			name: "Richard Kallweit",
			role: "Co-founder (historical)"
		},
		{
			name: "Clark Richert",
			role: "Co-founder (historical)"
		}
	] },
	"morningstar-ranch": { people: [{
		name: "Lou Gottlieb",
		role: "Owner; opened Open Land, 1966 (historical)"
	}] },
	rajneeshpuram: { people: [{
		name: "Bhagwan Shree Rajneesh (Osho)",
		role: "Spiritual founder (historical)"
	}, {
		name: "Ma Anand Sheela",
		role: "Personal secretary; ran the ranch-city day to day (historical)"
	}] },	"source-family": {
		people: [{
			name: "Jim Baker (Father Yod / Ya Ho Wha)",
			role: "Founder; died 1975 (historical)"
		}],
		office: { url: "https://www.thesourcefamily.com/" }
	},	"brook-farm": {
		people: [
			{
				name: "George Ripley",
				role: "Co-founder (historical)"
			},
			{
				name: "Sophia Ripley",
				role: "Co-founder (historical)"
			},
			{
				name: "Nathaniel Hawthorne",
				role: "Early member; left before the end (historical)"
			}
		],
		office: { url: "https://www.nps.gov/places/brook-farm.htm" }
	},
	"hancock-shaker": {
		people: [],
		office: {
			phone: "+1 413-443-0188",
			address: "1843 West Housatonic Street, Pittsfield, MA 01201",
			url: "https://hancockshakervillage.org/"
		}
	},
	"oneida-community": {
		people: [{
			name: "John Humphrey Noyes",
			role: "Founder of the Perfectionist community (historical)"
		}],
		office: { url: "https://www.oneidacommunity.org/" }
	},	"new-harmony": {
		people: [
			{
				name: "George Rapp",
				role: "Harmony Society founder at Harmonie (historical)"
			},
			{
				name: "Robert Owen",
				role: "Purchaser; Owenite community 1825–1827 (historical)"
			},
			{
				name: "William Maclure",
				role: "Education partner of the Owen years (historical)"
			}
		],
		office: { url: "https://www.visitnewharmony.com/" }
	},
	"llano-del-rio": { people: [{
		name: "Job Harriman",
		role: "Founder of the socialist colony (historical)"
	}] },	lomaland: { people: [{
		name: "Katherine Tingley",
		role: "Founder of the Point Loma Theosophical community; died 1929 (historical)"
	}] },	meltemi: {
		people: [],
		office: { url: "https://ecovillage.org/map/community/meltemi/" }
	},
	tui: {
		people: [{
			name: "Robina McCurdy",
			role: "Co-founder, resident, trustee",
			note: "Published as co-founder of Tui Land Trust / Tui Community and of the Institute for Earthcare Education Aotearoa."
		}],
		office: { url: "https://www.tuitrust.org.nz/" }
	},
	dyssekilde: {
		people: [],
		office: { url: "https://dyssekilde.dk/" }
	},
	"greater-world": {
		people: [{
			name: "Michael Reynolds",
			role: "Founder of Greater World and Earthship Biotecture",
			note: "Took on the mesa in 1992. A 2026 jury held him financially responsible for basic infrastructure of the community."
		}],
		office: { url: "https://earthship.com/" }
	},
	narara: {
		people: [],
		office: { url: "https://nararaecovillage.com/" }
	},
	lammas: {
		people: [
			{
				name: "Paul (Tao) Wimbush",
				role: "Founding smallholder; public voice",
				note: "Joined the campaign in 2006. Grand Designs 2016."
			},
			{
				name: "Tony Wrench",
				role: "Origin meeting; low-impact pioneer",
				note: "Named with Wimbush and Larch Maxey as the three who manifested the project."
			},
			{
				name: "Larch Maxey",
				role: "Origin meeting"
			}
		],
		office: { url: "https://lammas.org.uk/" }
	},
	tempelhof: {
		people: [],
		office: {
			email: "info@schloss-tempelhof.de",
			phone: "+49 7957 92390-30",
			address: "Tempelhof 3, 74594 Kreßberg, Germany",
			url: "https://www.schloss-tempelhof.de/"
		}
	},
	govardhan: {
		people: [{
			name: "Radhanath Swami",
			role: "Inspiration; ISKCON guru (Richard Slavin)",
			note: "Asked young men from Chowpatty to move to Galtare in 2010 and scale the farm into a named ecovillage."
		}],
		office: {
			phone: "+91 99200 55993",
			address: "Galtare, P.O. Hamrapur, Wada Taluka, Palghar 421 303, Maharashtra, India",
			url: "https://www.ecovillage.org.in/"
		}
	},
	cambium: {
		people: [{
			name: "Andreas Schindler",
			role: "First Obmann of the Verein (2014)",
			note: "Published farewell as chair after ten years."
		}],
		office: {
			email: "info@cambium.at",
			phone: "+43 3155 28501",
			address: "Kasernenstraße 2, 8350 Fehring, Austria",
			url: "https://www.cambium.at/"
		}
	},
	arterra: {
		people: [],
		office: {
			phone: "+34 626 940 441",
			address: "C/ Abajo 1, Artieda, Navarra, Spain",
			url: "https://arterrabizimodu.org/"
		}
	},
 ...livingBatch2Leaders,
 ...livingBatch3Leaders,
 ...livingBatch4Leaders,
 ...livingBatch5Leaders,
 ...livingBatch6Leaders,
 ...livingBatch7Leaders,
 ...livingBatch8Leaders,
 ...livingBatch9Leaders,
 ...livingBatch10Leaders,
 ...livingBatch11Leaders,
 ...livingBatch12Leaders,
 ...livingBatch13Leaders,
 ...livingBatch14Leaders,
 ...livingBatch15Leaders,
 ...livingBatch16Leaders,
 ...livingBatch17Leaders,
 ...livingBatch18Leaders,
 ...livingBatch19Leaders,
 ...livingBatch20Leaders,
 ...livingBatch21Leaders,
 ...livingBatch22Leaders,
 ...livingBatch23Leaders,
 ...livingBatch24Leaders,
 ...livingBatch25Leaders,
 ...livingBatch26Leaders,
 ...livingBatch27Leaders,
 ...livingBatch28Leaders,
 ...livingBatch29Leaders,
 ...livingBatch30Leaders,
 ...livingBatch31Leaders,
 ...livingBatch32Leaders,
 ...livingBatch33Leaders,
 ...livingGlampingLeaders,
 ...sustainableEcovillageLeaders,
 ...maitreyaEcovillageLeaders,
 ...formerClosedLeaders,
}

export function leadersFor(slug: string): VillageLeaders | undefined {
 return leadersBySlug[slug];
}
