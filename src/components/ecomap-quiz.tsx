import * as Slider from "@radix-ui/react-slider";
import { useId, useState } from "react";
import { LocationPicker } from "@/components/location-picker";
import { Button } from "@/components/ui/button";
import {
  FARM_OPTIONS,
  GOVERNANCE_OPTIONS,
  MEMBER_OPTIONS,
  PHILOSOPHY_OPTIONS,
  RESULT_COUNT,
  STAY_OPTIONS,
  TOGETHER_OPTIONS,
  defaultEcoAnswers,
  defaultEcoWeights,
  rankMatches,
  storeEcoQuiz,
  validEmail,
  type EcoAnswers,
  type EcoQuestionKey,
  type EcoWeights,
} from "@/data/ecomap-match";
import { closestCommunity } from "@/data/geo";
import {
  PIONEER_CODE,
  PIONEER_LIMIT,
  PLUS_PIONEER_PRICE_LABEL,
  rememberReferralCode,
  readReferralCode,
  saveLead,
  type PioneerStatus,
} from "@/lib/referral";
import { saveWeeklyLead } from "@/lib/weekly-leads";
import { cn } from "@/lib/utils";

type Step = 1 | 2 | 3 | 4 | 5 | 6 | 7 | "email" | "sent";

const STEP_KEYS: Record<number, EcoQuestionKey> = {
  1: "location",
  2: "stay",
  3: "farm",
  4: "together",
  5: "philosophy",
  6: "governance",
  7: "members",
};

function pinCaption(point: { lat: number; lng: number }): string {
  const near = closestCommunity(point);
  if (near && near.km < 2500) return `Near ${near.community.name}`;
  return `${point.lat.toFixed(1)}°, ${point.lng.toFixed(1)}°`;
}

function hasAnswer(step: number, answers: EcoAnswers): boolean {
  switch (step) {
    case 1:
      return Boolean(answers.location);
    case 2:
      return Boolean(answers.stay);
    case 3:
      return Boolean(answers.farm);
    case 4:
      return Boolean(answers.together);
    case 5:
      return Boolean(answers.philosophy);
    case 6:
      return Boolean(answers.governance);
    case 7:
      return Boolean(answers.members);
    default:
      return false;
  }
}

export function EcomapQuiz({
  onExit,
  onComplete,
}: {
  onExit: () => void;
  /** Plus uses this so question 7 opens the match list instead of the email step. */
  onComplete?: (answers: EcoAnswers, weights: EcoWeights) => void;
}) {
  const [step, setStep] = useState<Step>(1);
  const [answers, setAnswers] = useState<EcoAnswers>(defaultEcoAnswers);
  const [weights, setWeights] = useState<EcoWeights>(defaultEcoWeights);
  const [email, setEmail] = useState("");
  const [referralCode, setReferralCode] = useState(() => (typeof window === "undefined" ? "" : readReferralCode()));
  const [emailError, setEmailError] = useState("");
  const [sending, setSending] = useState(false);
  const [pioneer, setPioneer] = useState<PioneerStatus>("none");

  const questionNumber = typeof step === "number" ? step : 7;
  const weightKey = typeof step === "number" ? STEP_KEYS[step] : null;
  const importance = weightKey ? weights[weightKey] : 50;
  const ready = typeof step === "number" ? hasAnswer(step, answers) && importance !== 50 : true;

  function setImportance(value: number) {
    if (!weightKey) return;
    setWeights((prev) => ({ ...prev, [weightKey]: value }));
  }

  function goNext() {
    if (step === 7) {
      if (onComplete) {
        storeEcoQuiz(answers, weights);
        onComplete(answers, weights);
        return;
      }
      setStep("email");
      return;
    }
    if (typeof step === "number") setStep((step + 1) as Step);
  }

  function goBack() {
    if (step === 1) {
      onExit();
      return;
    }
    if (step === "email") {
      setStep(7);
      return;
    }
    if (typeof step === "number") setStep((step - 1) as Step);
  }

  async function submitEmail() {
    if (!validEmail(email)) {
      setEmailError("Enter a working email so we can send the result.");
      return;
    }
    const savedEmail = email.trim();
    const savedCode = referralCode.trim();
    setEmailError("");
    setSending(true);
    const ranked = rankMatches(answers, weights).slice(0, RESULT_COUNT);
    const slugs = ranked.map((row) => row.community.slug);
    storeEcoQuiz(answers, weights);
    saveLead(savedEmail, slugs, savedCode);
    rememberReferralCode(savedCode);
    try {
      const result = await saveWeeklyLead({
        data: { email: savedEmail, answers, weights, matchSlugs: slugs, referralCode: savedCode },
      });
      if (!result?.id) {
        setEmailError(result?.error || "Could not save that email. Try again.");
        return;
      }
      setPioneer(result.pioneer ?? "none");
      setStep("sent");
    } catch (err) {
      setEmailError(err instanceof Error && err.message ? err.message : "Could not save that email. Try again.");
    } finally {
      setSending(false);
    }
  }

  const progress = step === "sent" || step === "email" ? 100 : Math.round((questionNumber / 7) * 100);

  return (
    <section id="ecomap-quiz" className="mx-auto w-full max-w-2xl scroll-mt-24">
      <div
        className="ecomap-progress"
        style={{ ["--ecomap-progress" as string]: `${progress}%` }}
        aria-hidden
      >
        <div className="ecomap-progress-bar" />
      </div>

      {step === "sent" ? (
        <SentNotice
          email={email}
          pioneer={pioneer}
          onHome={onExit}
          onRestart={() => {
            setAnswers(defaultEcoAnswers());
            setWeights(defaultEcoWeights());
            setEmail("");
            setReferralCode("");
            setPioneer("none");
            setStep(1);
          }}
        />
      ) : step === "email" ? (
        <EmailStep
          email={email}
          referralCode={referralCode}
          error={emailError}
          busy={sending}
          onChangeEmail={setEmail}
          onChangeReferral={setReferralCode}
          onBack={goBack}
          onSubmit={submitEmail}
        />
      ) : (
        <div key={step} className="ecomap-enter mt-6">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss">
            Question {questionNumber} of 7
          </p>
          <QuestionBody step={step} answers={answers} onAnswers={setAnswers} />
          <ImportanceSlider value={importance} onChange={setImportance} />
          <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={goBack}
              className="inline-flex min-h-11 items-center px-2 text-sm font-medium text-muted transition-colors duration-150 hover:text-fg"
            >
              Back
            </button>
            <Button type="button" size="lg" disabled={!ready} onClick={goNext}>
              Continue
            </Button>
          </div>
          {!ready ? (
            <p className="mt-3 text-sm text-muted">
              {importance === 50
                ? "Choose an answer, then move the importance slider off 50."
                : "Choose an answer to continue."}
            </p>
          ) : null}
        </div>
      )}
    </section>
  );
}

function QuestionBody({
  step,
  answers,
  onAnswers,
}: {
  step: number;
  answers: EcoAnswers;
  onAnswers: (next: EcoAnswers) => void;
}) {
  if (step === 1) {
    return (
      <fieldset className="mt-3">
        <legend className="font-display text-3xl tracking-tight text-fg sm:text-4xl">
          Where is your ideal location?
        </legend>
        <p className="mt-2 text-base text-muted">Click the map. We will look for villages near that pin.</p>
        <div className="mt-5">
          <LocationPicker
            value={answers.location}
            onChange={(location) => onAnswers({ ...answers, location })}
          />
        </div>
        {answers.location ? (
          <p className="mt-3 text-sm font-medium text-forest">{pinCaption(answers.location)}</p>
        ) : (
          <p className="mt-3 text-sm text-muted">Tap the map to drop a pin.</p>
        )}
      </fieldset>
    );
  }

  if (step === 2) {
    return (
      <ChoiceList
        legend="What type of stay are you looking for?"
        options={STAY_OPTIONS}
        value={answers.stay}
        onChange={(stay) => onAnswers({ ...answers, stay })}
      />
    );
  }

  if (step === 3) {
    return (
      <ChoiceList
        legend="What type of farm?"
        options={FARM_OPTIONS}
        value={answers.farm}
        onChange={(farm) => onAnswers({ ...answers, farm })}
      />
    );
  }

  if (step === 4) {
    return (
      <ChoiceList
        legend="How much time should the people in the eco-community spend together?"
        options={TOGETHER_OPTIONS}
        value={answers.together}
        onChange={(together) => onAnswers({ ...answers, together })}
      />
    );
  }

  if (step === 5) {
    return (
      <ChoiceList
        legend="Philosophy"
        hint="Secular, spiritual, or religious."
        options={PHILOSOPHY_OPTIONS}
        value={answers.philosophy}
        onChange={(philosophy) => onAnswers({ ...answers, philosophy })}
      />
    );
  }

  if (step === 6) {
    return (
      <ChoiceList
        legend="Governance"
        options={GOVERNANCE_OPTIONS}
        value={answers.governance}
        onChange={(governance) => onAnswers({ ...answers, governance })}
      />
    );
  }

  if (step === 7) {
    return (
      <ChoiceList
        legend="How many members in the eco-community?"
        hint="Resident people, not a yearly guest count."
        options={MEMBER_OPTIONS}
        value={answers.members}
        onChange={(members) => onAnswers({ ...answers, members })}
      />
    );
  }

  return <p className="mt-4 text-muted">Choose an answer to continue.</p>;
}

function ChoiceList<T extends string>({
  legend,
  hint,
  options,
  value,
  onChange,
}: {
  legend: string;
  hint?: string;
  options: { id: T; label: string; hint?: string }[];
  value: T | null;
  onChange: (id: T) => void;
}) {
  return (
    <fieldset className="mt-3">
      <legend className="font-display text-3xl tracking-tight text-fg sm:text-4xl">{legend}</legend>
      {hint ? <p className="mt-2 text-base text-muted">{hint}</p> : null}
      <div className="mt-5 flex flex-col gap-2">
        {options.map((option) => {
          const selected = option.id === value;
          return (
            <button
              key={option.id}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange(option.id)}
              className={cn(
                "flex min-h-11 w-full flex-col items-start justify-center rounded-md px-4 py-3 text-left transition-[transform,background-color,color] duration-150 ease-out active:scale-[0.96]",
                selected ? "bg-forest text-cream" : "bg-surface text-fg shadow-border hover:bg-panel",
              )}
            >
              <span className="text-base font-medium">{option.label}</span>
              {option.hint ? (
                <span className={cn("mt-0.5 text-sm", selected ? "text-cream/80" : "text-muted")}>
                  {option.hint}
                </span>
              ) : null}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

function ImportanceSlider({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: number) => void;
}) {
  const id = useId();
  const atMiddle = value === 50;
  return (
    <div className="mt-8">
      <div className="flex items-end justify-between gap-3">
        <label htmlFor={id} className="text-sm font-medium text-fg">
          How important is this?
        </label>
        <p className={cn("text-sm tabular-nums", atMiddle ? "text-subtle" : "font-medium text-forest")}>
          {value}
        </p>
      </div>
      <Slider.Root
        id={id}
        className="relative mt-3 flex h-11 w-full touch-none items-center"
        value={[value]}
        min={0}
        max={100}
        step={1}
        onValueChange={(next) => onChange(next[0] ?? 50)}
      >
        <Slider.Track className="relative h-1.5 grow rounded-full bg-panel">
          <Slider.Range className="absolute h-full rounded-full bg-forest" />
        </Slider.Track>
        <Slider.Thumb
          className="block size-5 rounded-full bg-forest shadow-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
          aria-label="Importance"
        />
      </Slider.Root>
      <div className="flex justify-between text-xs text-subtle">
        <span>Less</span>
        <span>More</span>
      </div>
      <p className="mt-2 text-sm text-muted">
        {atMiddle
          ? "Move the slider off the middle. It cannot stay at 50."
          : value < 50
            ? "This question will count less than the others."
            : "This question will count more than the others."}
      </p>
    </div>
  );
}

function EmailStep({
  email,
  referralCode,
  error,
  busy,
  onChangeEmail,
  onChangeReferral,
  onBack,
  onSubmit,
}: {
  email: string;
  referralCode: string;
  error: string;
  busy: boolean;
  onChangeEmail: (value: string) => void;
  onChangeReferral: (value: string) => void;
  onBack: () => void;
  onSubmit: () => void;
}) {
  return (
    <div className="ecomap-enter mt-6">
      <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss">Your result</p>
      <h2 className="mt-3 font-display text-3xl tracking-tight text-fg sm:text-4xl">
        Enter your email to see the results
      </h2>
      <p className="mt-2 text-base text-muted">
        We’ll send you your most aligned eco-community and community member
      </p>
      <label className="mt-6 block" htmlFor="quiz-result-email">
        <span className="text-sm font-medium text-fg">Email</span>
        <input
          id="quiz-result-email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => onChangeEmail(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              onSubmit();
            }
          }}
          className="mt-2 h-11 w-full rounded-md bg-surface px-3 text-fg shadow-border outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
        />
      </label>
      <label className="mt-4 block" htmlFor="quiz-referral-code">
        <span className="text-sm font-medium text-fg">Share code</span>
        <span className="ml-2 text-xs text-subtle">optional</span>
        <input
          id="quiz-referral-code"
          name="referral-code"
          type="text"
          autoComplete="off"
          spellCheck={false}
          value={referralCode}
          onChange={(event) => onChangeReferral(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              onSubmit();
            }
          }}
          className="mt-2 h-11 w-full rounded-md bg-surface px-3 text-fg shadow-border outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
        />
      </label>
      {error ? <p className="mt-2 text-sm text-danger">{error}</p> : null}
      <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex min-h-11 items-center px-2 text-sm font-medium text-muted transition-colors duration-150 hover:text-fg"
        >
          Back
        </button>
        <Button type="button" size="lg" disabled={busy} onClick={onSubmit}>
          {busy ? "Saving…" : "See my results"}
        </Button>
      </div>
    </div>
  );
}

function SentNotice({
  email,
  pioneer,
  onHome,
  onRestart,
}: {
  email: string;
  pioneer: PioneerStatus;
  onHome: () => void;
  onRestart: () => void;
}) {
  const pioneerYear = pioneer === "claimed" || pioneer === "already";
  return (
    <div className="ecomap-enter mt-6">
      <p className="text-sm font-medium uppercase tracking-[0.16em] text-moss">On the weekly list</p>
      <h2 className="mt-3 font-display text-3xl tracking-tight text-fg sm:text-4xl">You’re on the list</h2>
      <p className="mt-4 text-lg leading-relaxed text-fg">
        We’ll send you your most aligned eco-community and community member
      </p>
      <p className="mt-3 text-base text-muted">Saved for {email}.</p>
      {pioneerYear ? (
        <p className="mt-3 text-base text-forest">
          You’re one of the first {PIONEER_LIMIT}. EcoMapPlus is {PLUS_PIONEER_PRICE_LABEL} when you join.
        </p>
      ) : pioneer === "full" ? (
        <p className="mt-3 text-base text-muted">{PIONEER_CODE} is fully claimed. EcoMapPlus stays $24 a year.</p>
      ) : null}
      <div className="mt-8 flex flex-wrap gap-3">
        {pioneerYear ? (
          <a
            href="/plus"
            className="inline-flex h-12 items-center rounded-md bg-forest px-5 text-base font-medium text-cream transition-[transform,background-color] duration-150 ease-out hover:bg-forest-deep active:scale-[0.96]"
          >
            Open EcoMapPlus
          </a>
        ) : (
          <Button type="button" size="lg" onClick={onHome}>
            Back to the map
          </Button>
        )}
        <Button type="button" variant="outline" onClick={onRestart}>
          Start over
        </Button>
      </div>
    </div>
  );
}
