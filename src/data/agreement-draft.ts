import { allAgreements, type AgreementSide } from "./agreements-catalog";
import { emptyCharterValues, kindBySlug } from "./charter";
import { documentToText, generateCharter } from "./charter-document";
import { generateCompact } from "./compact-document";
import { compactKindBySlug, emptyCompactValues } from "./compact-kinds";

export type AgreementDraft = {
 templateId: string;
 templateTitle: string;
 side: AgreementSide;
 title: string;
 body: string;
};

export function draftFromTemplate(templateId: string,
 ctx: { roomName: string; memberNames: string[] },): AgreementDraft | null {
 const row = allAgreements().find((a) => a.id === templateId);
 if (!row) return null;
 const members = ctx.memberNames.filter(Boolean).join("\n") || "the members of this group";
 if (row.side === "formal") {
 const kind = kindBySlug(row.id);
 if (!kind) return null;
 const values = emptyCharterValues();
 values.communityName = ctx.roomName;
 values.founders = members;
 const doc = generateCharter(kind, values);
 return {
 templateId: row.id,
 templateTitle: row.title,
 side: "formal",
 title: doc.title,
 body: documentToText(doc),
 };
 }
 const kind = compactKindBySlug(row.id);
 if (!kind) return null;
 const values = emptyCompactValues();
 values.communityName = ctx.roomName;
 values.parties = members;
 const doc = generateCompact(kind, values);
 return {
 templateId: row.id,
 templateTitle: row.title,
 side: "informal",
 title: doc.title,
 body: documentToText(doc),
 };
}
