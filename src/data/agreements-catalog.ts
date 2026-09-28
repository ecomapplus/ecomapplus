import { charterKinds, communitiesUsing } from "./charter";
import { compactFamilyOrder, compactKinds, communitiesUsingCompact } from "./compact-kinds";
import { browseGroupForForm, formBrowseGroupOrder, guideForForm } from "./legal-form-guides";

export type AgreementSide = "formal" | "informal";

export type AgreementOrigin = {
 slug: string;
 name: string;
 country: string;
};

export type AgreementRow = {
 side: AgreementSide;
 id: string;
 title: string;
 documentName: string;
 family: string;
 summary: string;
 generateTo: "/charter/$formId" | "/compacts/$kindId";
 generateParam: string;
 communities: AgreementOrigin[];
};

export const agreementFamilyOrder: string[] = [...formBrowseGroupOrder, ...compactFamilyOrder];

function originsFrom(list: { slug: string; name: string; country: string }[],): AgreementOrigin[] {
 return [...list]
.map((c) => ({ slug: c.slug, name: c.name, country: c.country }))
.sort((a, b) => a.name.localeCompare(b.name));
}

export function allAgreements(): AgreementRow[] {
 const formal: AgreementRow[] = charterKinds.map((kind) => {
 const guide = guideForForm(kind.form);
 return {
 side: "formal",
 id: kind.slug,
 title: kind.form,
 documentName: kind.documentName,
 family: browseGroupForForm(kind.form),
 summary: guide.purpose,
 generateTo: "/charter/$formId",
 generateParam: kind.slug,
 communities: originsFrom(communitiesUsing(kind.form)),
 };
 });

 const informal: AgreementRow[] = compactKinds.map((kind) => ({
 side: "informal",
 id: kind.slug,
 title: kind.title,
 documentName: kind.documentName,
 family: kind.family,
 summary: kind.summary,
 generateTo: "/compacts/$kindId",
 generateParam: kind.slug,
 communities: originsFrom(communitiesUsingCompact(kind.slug)),
 }));

 return [...formal, ...informal];
}
