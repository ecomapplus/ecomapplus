import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { CommunityCard } from "@/components/community-card";
import { EcomapQuiz } from "@/components/ecomap-quiz";
import { Pager } from "@/components/pager";
import { Button } from "@/components/ui/button";
import { getCommunity, paginate, parsePageParam } from "@/data/communities";
import { LockedDetailsCopy } from "@/components/locked-details";
import { usePlusAccess } from "@/lib/plus-membership";
import { useCountryScope } from "@/lib/country-scope";
import {
  ecoQuizComplete,
  loadEcoQuiz,
  rankMatches,
  type EcoAnswers,
  type EcoWeights,
} from "@/data/ecomap-match";
import { readLead } from "@/lib/referral";

type SearchParams = { page?: number };

export const Route = createFileRoute("/quiz")({
  component: QuizPage,
  validateSearch: (search: Record<string, unknown>): SearchParams => ({
    page: parsePageParam(search.page),
  }),
  head: () => ({
    meta: [
      { title: "Most aligned · EcoMapPlus" },
      {
        name: "description",
        content:
          "The same seven questions as the free quiz. If you already took it, your matches are here.",
      },
    ],
  }),
});

function QuizPage() {
  const plus = usePlusAccess();
  const { page } = Route.useSearch();
  const navigate = useNavigate({ from: "/quiz" });
  const [mode, setMode] = useState<"boot" | "quiz" | "results">("boot");
  const [answers, setAnswers] = useState<EcoAnswers | null>(null);
  const [weights, setWeights] = useState<EcoWeights | null>(null);
  const [savedSlugs, setSavedSlugs] = useState<string[]>([]);

  useEffect(() => {
    const stored = loadEcoQuiz();
    if (stored && ecoQuizComplete(stored.answers)) {
      setAnswers(stored.answers);
      setWeights(stored.weights);
      setMode("results");
      return;
    }
    const lead = readLead();
    if (lead && lead.slugs.length > 0) {
      setSavedSlugs(lead.slugs);
      setMode("results");
      return;
    }
    setMode("quiz");
  }, []);

  function showResults(nextAnswers: EcoAnswers, nextWeights: EcoWeights) {
    setAnswers(nextAnswers);
    setWeights(nextWeights);
    setSavedSlugs([]);
    setMode("results");
    if ((page ?? 1) > 1) {
      void navigate({ search: {}, replace: true, resetScroll: false });
    }
  }

  if (!plus) {
    return (
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss">Most aligned</p>
        <h1 className="mt-2 font-display text-4xl leading-tight text-fg sm:text-5xl">Your matches</h1>
        <div className="mt-8">
          <LockedDetailsCopy next="/quiz" />
        </div>
      </main>
    );
  }

  if (mode === "quiz") {
    return (
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
        <EcomapQuiz
          onExit={() => {
            if (answers || savedSlugs.length > 0) setMode("results");
          }}
          onComplete={showResults}
        />
      </main>
    );
  }

  if (mode !== "results") {
    return <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 sm:py-12" />;
  }

  return (
    <QuizResults
      page={page ?? 1}
      answers={answers}
      weights={weights}
      savedSlugs={savedSlugs}
      onPage={(n) => {
        void navigate({
          search: n > 1 ? { page: n } : {},
          replace: true,
          resetScroll: false,
        });
        document.getElementById("quiz-results")?.scrollIntoView({ block: "start" });
      }}
      onRetake={() => setMode("quiz")}
    />
  );
}

function QuizResults({
  page,
  answers,
  weights,
  savedSlugs,
  onPage,
  onRetake,
}: {
  page: number;
  answers: EcoAnswers | null;
  weights: EcoWeights | null;
  savedSlugs: string[];
  onPage: (page: number) => void;
  onRetake: () => void;
}) {
  const scope = useCountryScope();
  const ranked = useMemo(() => {
    const rows =
      answers && weights
        ? rankMatches(answers, weights).map((row) => ({
            community: row.community,
            percent: Math.round(row.score * 100),
          }))
        : savedSlugs.flatMap((slug) => {
            const community = getCommunity(slug);
            return community ? [{ community, percent: null as number | null }] : [];
          });
    return scope ? rows.filter((row) => row.community.country === scope) : rows;
  }, [answers, weights, savedSlugs, scope]);
  const paged = paginate(ranked, page);

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
      <div id="quiz-results" className="max-w-2xl scroll-mt-20">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss">Most aligned</p>
        <h1 className="mt-2 font-display text-4xl leading-tight text-fg sm:text-5xl">Your matches</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          {answers
            ? "The same seven questions as the free quiz, with every village on the free map sorted by how well it fits."
            : "These are the matches from the quiz you already took."}
        </p>
      </div>
      <div className="mt-6">
        <Button type="button" variant="outline" onClick={onRetake}>
          Retake the quiz
        </Button>
      </div>
      <div className="mt-8">
        <Pager
          page={paged.page}
          pages={paged.pages}
          from={paged.from}
          to={paged.to}
          total={paged.total}
          onPage={onPage}
          noun="matches"
        />
      </div>
      <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {paged.items.map((match, i) => (
          <li key={match.community.slug} className="flex h-full flex-col">
            <div className="mb-2 flex items-baseline justify-between gap-2">
              {match.percent != null ? (
                <p className="font-display text-lg text-fg">
                  <span className="tabular-nums text-forest">{match.percent}%</span>
                  <span className="ml-1.5 font-sans text-sm font-medium text-muted">match</span>
                </p>
              ) : (
                <p className="font-display text-lg text-fg">Match</p>
              )}
              <p className="text-xs tabular-nums text-subtle">#{paged.from + i}</p>
            </div>
            <div className="min-h-0 flex-1">
              <CommunityCard community={match.community} priority={i === 0} openings />
            </div>
          </li>
        ))}
      </ul>
      {ranked.length === 0 ? <p className="mt-6 text-muted">No matches yet.</p> : null}
      <div className="mt-8">
        <Pager
          page={paged.page}
          pages={paged.pages}
          from={paged.from}
          to={paged.to}
          total={paged.total}
          onPage={onPage}
          noun="matches"
        />
      </div>
    </main>
  );
}
