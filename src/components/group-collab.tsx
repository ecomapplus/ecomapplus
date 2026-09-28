import { useEffect, useState, type ReactNode } from "react";
import { GroupAgreements } from "@/components/group-agreements";
import { GroupTasks } from "@/components/group-tasks";
import { GroupVotes } from "@/components/group-votes";
import { Button } from "@/components/ui/button";

type Tool = "agreements" | "tasks" | "votes";

const tools: { id: Tool; title: string; blurb: string }[] = [
 {
 id: "agreements",
 title: "Agreement generator",
 blurb: "Any member can propose a charter or compact. Signatures are public in the group and kept on the record.",
 },
 {
 id: "tasks",
 title: "Task list",
 blurb: "Add your own work and check it off. Others can see it, not edit it. Log hours; totals are tracked per person.",
 },
 {
 id: "votes",
 title: "Voting",
 blurb: "Any member can put a question. Every vote is public and recorded. You can limit a vote to the first three members.",
 },
];

export function GroupCollab({
 roomId,
 roomName,
 members,
 meId,
 onOpenPerson,
}: {
 roomId: string;
 roomName: string;
 members: { id: string; name: string }[];
 meId: string;
 onOpenPerson: (userId: string) => void;
}) {
 const [tool, setTool] = useState<Tool | null>(null);

 useEffect(() => {
 setTool(null);
 }, [roomId]);

 if (tool === "agreements") {
 return (<ToolShell title="Agreement generator" onBack={() => setTool(null)}>
 <GroupAgreements
 roomId={roomId}
 roomName={roomName}
 members={members}
 meId={meId}
 onOpenPerson={onOpenPerson}
 />
 </ToolShell>);
 }
 if (tool === "tasks") {
 return (<ToolShell title="Task list" onBack={() => setTool(null)}>
 <GroupTasks roomId={roomId} meId={meId} onOpenPerson={onOpenPerson} />
 </ToolShell>);
 }
 if (tool === "votes") {
 return (<ToolShell title="Voting" onBack={() => setTool(null)}>
 <GroupVotes roomId={roomId} meId={meId} onOpenPerson={onOpenPerson} />
 </ToolShell>);
 }

 return (<div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-4 py-4">
 <h3 className="font-display text-xl text-fg">Collaboration tools</h3>
 <p className="mt-1 text-sm text-muted">
 Work the group can see. Votes and signatures stay on the record.
 </p>
 <ul className="mt-4 space-y-2">
 {tools.map((row) => (<li key={row.id}>
 <button
 type="button"
 onClick={() => setTool(row.id)}
 className="flex min-h-14 w-full flex-col rounded-md border border-border bg-bg px-3 py-3 text-left hover:border-forest/40"
 >
 <span className="text-sm font-medium text-fg">{row.title}</span>
 <span className="mt-1 text-xs leading-relaxed text-muted">{row.blurb}</span>
 </button>
 </li>))}
 </ul>
 </div>);
}

function ToolShell({
 title,
 onBack,
 children,
}: {
 title: string;
 onBack: () => void;
 children: ReactNode;
}) {
 return (<div className="flex min-h-0 flex-1 flex-col">
 <div className="flex items-center justify-between gap-2 border-b border-border px-4 py-2">
 <h3 className="font-display text-lg text-fg">{title}</h3>
 <Button type="button" size="sm" variant="ghost" onClick={onBack}>
 All tools
 </Button>
 </div>
 <div className="flex min-h-0 flex-1 flex-col">{children}</div>
 </div>);
}
