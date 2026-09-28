import { useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { CommunityCard } from "@/components/community-card";
import { Pager } from "@/components/pager";
import { Button } from "@/components/ui/button";
import { paginate } from "@/data/communities";
import { useCountryScope } from "@/lib/country-scope";
import {
  DEFAULT_IMPORTANCE,
  IMPORTANCE_VALUES,
  MAX_ANSWER_LENGTH,
  defaultAnswers,
  defaultRanks,
  hasWrittenAnswers,
  importanceLabels,
  loadStoredQuiz,
  quizQuestions,
  scoreQuiz,
  storeQuiz,
  type Importance,
  type QuizAnswers,
  type QuizQuestionId,
  type QuizRanks,
} from "@/data/quiz";

const RESULTS_ID = "quiz-results";

export function QuizPanel({ page: pageFromUrl }: { page?: number }) {
  const navigate = useNavigate({ from: "/quiz" });
  const [ranks, setRanks] = useState<QuizRanks>(defaultRanks);
  const [answers, setAnswers] = useState<QuizAnswers>(defaultAnswers);
  const [submitted, setSubmitted] = useState((pageFromUrl ?? 1) > 1);
  const [page, setPage] = useState(pageFromUrl ?? 1);
  const [pendingScroll, setPendingScroll] = useState(false);
  const [needAnswer, setNeedAnswer] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const ready = useRef(false);

  useEffect(() => {
    const stored = loadStoredQuiz();
    if (stored) {
      setRanks(stored.ranks);
      setAnswers(stored.answers);
      if (stored.submitted) setSubmitted(true);
    }
    if ((pageFromUrl ?? 1) > 1) setSubmitted(true);
    ready.current = true;
    setHydrated(true);
  }, [pageFromUrl]);

  const written = hasWrittenAnswers(answers);
  const scope = useCountryScope();
  const matches = useMemo(() => {
    const rows = scoreQuiz(answers, ranks);
    return scope ? rows.filter((row) => row.community.country === scope) : rows;
  }, [answers, ranks, scope]);
  const paged = paginate(matches, submitted ? page : 1);

  useEffect(() => {
    if (submitted && page !== paged.page) setPage(paged.page);
  }, [submitted, page, paged.page]);

  useEffect(() => {
    if (!hydrated) return;
    storeQuiz({ ranks, answers, submitted });
  }, [ranks, answers, submitted, hydrated]);

  useEffect(() => {
    if (!pendingScroll || !submitted) return;
    setPendingScroll(false);
    scrollToResults();
  }, [pendingScroll, submitted]);

  function goPage(n: number) {
    setPage(n);
    void navigate({
      search: n > 1 ? { page: n } : {},
      replace: true,
      resetScroll: false,
    });
    scrollToResults();
  }

  function persist(next: { ranks?: QuizRanks; answers?: QuizAnswers; submitted?: boolean }) {
    if (!ready.current) return;
    storeQuiz({
      ranks: next.ranks ?? ranks,
      answers: next.answers ?? answers,
      submitted: next.submitted ?? submitted,
    });
  }

  function bumpList() {
    setPage(1);
    if (submitted && (pageFromUrl ?? 1) > 1) {
      void navigate({ search: {}, replace: true, resetScroll: false });
    }
  }

  function setRank(id: QuizQuestionId, value: Importance) {
    const next = { ...ranks, [id]: value };
    setRanks(next);
    persist({ ranks: next });
    bumpList();
  }

  function setAnswer(id: QuizQuestionId, value: string) {
    const next = { ...answers, [id]: value.slice(0, MAX_ANSWER_LENGTH) };
    setAnswers(next);
    setNeedAnswer(false);
    persist({ answers: next });
    bumpList();
  }

  function resetQuiz() {
    const ranksNext = defaultRanks();
    const answersNext = defaultAnswers();
    setRanks(ranksNext);
    setAnswers(answersNext);
    setNeedAnswer(false);
    setSubmitted(false);
    setPage(1);
    storeQuiz({ ranks: ranksNext, answers: answersNext, submitted: false });
    if ((pageFromUrl ?? 1) > 1) {
      void navigate({ search: {}, replace: true, resetScroll: false });
    }
  }

  function readAnswers(): QuizAnswers {
    const next = { ...answers };
    if (typeof document === "undefined") return next;
    for (const question of quizQuestions) {
      const el = document.getElementById(`quiz-answer-${question.id}`);
      if (el instanceof HTMLTextAreaElement) {
        next[question.id] = el.value.slice(0, MAX_ANSWER_LENGTH);
      }
    }
    return next;
  }

  function seeMatches() {
    const nextAnswers = readAnswers();
    setAnswers(nextAnswers);
    if (!hasWrittenAnswers(nextAnswers)) {
      setNeedAnswer(true);
      return;
    }
    setNeedAnswer(false);
    setSubmitted(true);
    setPage(1);
    storeQuiz({ ranks, answers: nextAnswers, submitted: true });
    if ((pageFromUrl ?? 1) > 1) {
      void navigate({ search: {}, replace: true, resetScroll: false });
    }
    setPendingScroll(true);
  }

  const changed =
    written || quizQuestions.some((question) => ranks[question.id] !== DEFAULT_IMPORTANCE);

  return (
    <div>
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss">Matching quiz</p>
        <h1 className="mt-2 font-display text-4xl leading-tight text-fg sm:text-5xl">
          What do you want from an Eco-community?
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Twelve questions. Write your answer in each box you care about, then mark how much that
          answer matters, from 1 (unimportant) to 5 (very important). Blank questions are skipped.
          We score the villages still going in this atlas and list the closest matches, ten per
          page.
        </p>
      </div>

      <ol className="mt-8 space-y-4">
        {quizQuestions.map((question, index) => (
          <li key={question.id} className="rounded-lg bg-surface p-4 shadow-border sm:p-5">
            <p className="text-xs font-medium uppercase tracking-wide text-moss">
              Question {index + 1} of {quizQuestions.length}
            </p>
            <label htmlFor={`quiz-answer-${question.id}`} className="mt-1.5 block font-medium text-fg">
              {question.prompt}
            </label>
            <p className="mt-1 text-sm text-muted">{question.hint}</p>
            <textarea
              id={`quiz-answer-${question.id}`}
              name={question.id}
              rows={3}
              value={answers[question.id]}
              onChange={(event) => setAnswer(question.id, event.target.value)}
              placeholder={question.placeholder}
              maxLength={MAX_ANSWER_LENGTH}
              className="mt-3 w-full resize-y rounded-md bg-bg px-3 py-2.5 text-sm leading-relaxed text-fg shadow-border placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
            />
            <ImportanceScale
              name={question.prompt}
              value={ranks[question.id]}
              onChange={(value) => setRank(question.id, value)}
            />
          </li>
        ))}
      </ol>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Button type="button" onClick={seeMatches}>
          See my matches
        </Button>
        <Button type="button" variant="outline" onClick={resetQuiz} disabled={!changed && !submitted}>
          Reset
        </Button>
        {needAnswer ? (
          <p className="text-sm text-danger" role="alert">
            Write at least one answer first. The 1–5 scale only weights what you write.
          </p>
        ) : null}
      </div>

      {submitted && written ? (
        <div id={RESULTS_ID} className="scroll-mt-20">
          <div className="mt-10 max-w-2xl">
            <h2 className="font-display text-2xl text-fg">Closest matches</h2>
            <p className="mt-2 text-muted">
              Ranked by how well each village fits the answers you wrote, weighted by the 1–5 you
              gave each question. Change an answer or a weight and this list reshuffles.
            </p>
          </div>
          <div className="mt-8">
            <Pager
              page={paged.page}
              pages={paged.pages}
              from={paged.from}
              to={paged.to}
              total={paged.total}
              onPage={goPage}
              noun="matches"
            />
          </div>
          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {paged.items.map((match, i) => (
              <li key={match.community.slug} className="flex h-full flex-col">
                <div className="mb-2 flex items-baseline justify-between gap-2">
                  <p className="font-display text-lg text-fg">
                    <span className="tabular-nums text-forest">{match.percent}%</span>
                    <span className="ml-1.5 font-sans text-sm font-medium text-muted">match</span>
                  </p>
                  <p className="text-xs tabular-nums text-subtle">#{paged.from + i}</p>
                </div>
                <div className="min-h-0 flex-1">
                  <CommunityCard community={match.community} priority={i === 0} openings />
                </div>
                {match.reasons.length > 0 ? (
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {match.reasons.map((reason) => (
                      <li
                        key={reason}
                        className="rounded-full bg-forest/10 px-2.5 py-1 text-xs text-forest-deep"
                      >
                        {reason}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Pager
              page={paged.page}
              pages={paged.pages}
              from={paged.from}
              to={paged.to}
              total={paged.total}
              onPage={goPage}
              noun="matches"
            />
          </div>
        </div>
      ) : (
        <p className="mt-8 text-sm text-muted">
          Write what you want. Leave a question blank if it does not matter. Then see matches.
        </p>
      )}
    </div>
  );
}

function ImportanceScale({
  name,
  value,
  onChange,
}: {
  name: string;
  value: Importance;
  onChange: (value: Importance) => void;
}) {
  return (
    <div className="mt-4">
      <p className="text-xs font-medium uppercase tracking-wide text-moss">
        How much this answer matters
      </p>
      <div className="mb-2 mt-2 flex justify-between text-xs text-subtle">
        <span>Unimportant</span>
        <span>Very important</span>
      </div>
      <div
        role="radiogroup"
        aria-label={`How much this answer matters: ${name}`}
        className="grid grid-cols-5 gap-1.5"
      >
        {IMPORTANCE_VALUES.map((n) => {
          const selected = value === n;
          return (
            <button
              key={n}
              type="button"
              role="radio"
              aria-checked={selected}
              aria-label={`${n}, ${importanceLabels[n]}`}
              onClick={() => onChange(n)}
              className={`inline-flex min-h-11 items-center justify-center rounded-md px-1 text-sm font-medium tabular-nums transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40 ${
                selected
                  ? "bg-forest text-cream"
                  : "bg-bg text-fg shadow-border hover:shadow-border-hover"
              }`}
            >
              {n}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function scrollToResults() {
  const el = document.getElementById(RESULTS_ID);
  if (!el) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
}
