#!/usr/bin/env python3
"""Strip spliced-in citation crumbs from listing body copy only."""

from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path("src/data")

SKIP = {
    "sources.ts",
    "geo.ts",
    "card-photos.ts",
    "quiz.ts",
    "travel-plan.ts",
    "films.ts",
    "advanced-search.ts",
    "coordinates.ts",
    "charter.ts",
    "charter-document.ts",
    "charter-regions.ts",
    "compact-document.ts",
    "compact-kinds.ts",
    "venn.ts",
    "similarity.ts",
    "agreement-draft.ts",
    "agreements-catalog.ts",
    "founder-skills.ts",
    "leader-socials.ts",
    "copy-slop.ts",
}

STRING_RE = re.compile(r'"(?:\\.|[^"\\])*"', re.S)

# Document-ish nouns only. Do not include bare "stay"/"about"/"home" —
# those jump a sentence and swallow real clauses.
DOC_TAIL = (
    r"(?:work-scholar\s+)?"
    r"(?:faqs?|pages?|sites?|listings?|lines?|directory|"
    r"history(?:\s+page)?|stay\s+page|about\s+page|home\s+page|"
    r"volunteer\s+page|careers\s+page|lodging\s+page|"
    r"farm-fellowship(?:\s+page)?|get-involved(?:\s+page)?|"
    r"origin\s+line|family\s+line|catalog(?:ue)?|"
    r"piece|campus|factsheet|account|calendar|guide|review|"
    r"census|interview|profile|inclusions|schedule|story|overview|"
    r"paper|blog|journal|instagram|coverage|case\s+study|wikipedia|"
    r"events?\s+list|hotel\s+page|hotel\s+inclusions|"
    r"estate\s+line|ranch\s+line)"
)
# One token; never a period, so the crumb cannot cross a sentence.
WORD = r"[A-Za-zÀ-ÿ0-9'’/-]+"

CRUMB_THAT = re.compile(
    rf"(?:,)?(?:\s+of\s+|\s*/\s*)(?:that|this|those)\s+(?:{WORD}\s+){{0,5}}{DOC_TAIL}"
    rf"(?:\s*/\s*(?:{WORD}\s+){{0,3}}{DOC_TAIL})?",
    re.I,
)
CRUMB_WIKI = re.compile(r"\s+(?:of|/)\s+(?:that\s+)?Wikipedia(?:\s+count)?(?:\s*/\s*[\w.-]+)?", re.I)
CRUMB_NAMED = re.compile(
    r"\s+of\s+(?:the\s+)?(?:(?:that|this|those)\s+)?(?:ic\.org(?:/[^\s,.;\"]*)?|RTPI|Construction21|Michelin Guide|Tripadvisor|Hipcamp|Airbnb)\b",
    re.I,
)
CRUMB_DOMAIN = re.compile(
    r"\s+of\s+(?:https?://)?(?:www\.)?[a-z0-9][a-z0-9.-]*\.(?:org|com|net|uk|info|edu)(?:\.[a-z]{2,})?\b(?:/[^\s,.;\"]*)?",
    re.I,
)
CRUMB_CENSUS = re.compile(r"\s+of the \d{4} census\b", re.I)

FILLER_LINES = [
    re.compile(r"\s*Three ordinary weekdays, then the thing this place is actually known for\.?", re.I),
    re.compile(
        r"\s*No named public leaders on file for this village\. The office is the door\.?",
        re.I,
    ),
]

APHORISM = re.compile(
    r"(?:^|(?<=\.))\s*A (?:hectare|kilowatt|flat|season|night|acre|cabin|yurt|pad|lote) is not [^.!?]{2,80}[.!]?",
    re.I,
)


def allowed(path: Path) -> bool:
    return path.name not in SKIP


def tidy(s: str) -> str:
    s = re.sub(r"[^\S\n]{2,}", " ", s)
    s = re.sub(r" +([,.;:])", r"\1", s)
    s = re.sub(r",\s*,+", ",", s)
    s = re.sub(r",\s*\.", ".", s)
    s = re.sub(r"\.\s*\.", ".", s)
    s = re.sub(r"\s+\.", ".", s)
    s = re.sub(r"\(\s*\)", "", s)
    s = re.sub(r"[^\S\n]{2,}", " ", s)
    return s.strip()


def looks_like_path(inner: str) -> bool:
    s = inner.strip()
    return (
        s.startswith("http")
        or s.startswith("/")
        or s.startswith("communities/")
        or s.startswith("mailto:")
        or "://" in s
    )


def clean_inner(inner: str) -> str:
    if looks_like_path(inner):
        return inner
    s = inner
    changed = False
    for pat in FILLER_LINES:
        nxt = pat.sub("", s)
        if nxt != s:
            changed = True
            s = nxt
    nxt = APHORISM.sub("", s)
    if nxt != s:
        changed = True
        s = nxt
    for _ in range(6):
        nxt = CRUMB_THAT.sub("", s)
        nxt = CRUMB_WIKI.sub("", nxt)
        nxt = CRUMB_NAMED.sub("", nxt)
        nxt = CRUMB_DOMAIN.sub("", nxt)
        nxt = CRUMB_CENSUS.sub("", nxt)
        if nxt == s:
            break
        changed = True
        s = nxt
    if not changed:
        return inner
    s = tidy(s)
    if not s or re.fullmatch(r"[\s,.;:/–—-]*", s):
        return ""
    return s


def clean_literal(lit: str) -> str:
    inner = lit[1:-1]
    cleaned = clean_inner(inner)
    if cleaned == inner:
        return lit
    return '"' + cleaned + '"'


def process(text: str) -> str:
    return STRING_RE.sub(lambda m: clean_literal(m.group()), text)


def main() -> None:
    dry = "--dry-run" in sys.argv
    changed = 0
    samples = 0
    for path in sorted(ROOT.rglob("*.ts")):
        if not allowed(path):
            continue
        before = path.read_text()
        after = process(before)
        if after == before:
            continue
        changed += 1
        if dry:
            print(f"would update {path}")
            b_strings = STRING_RE.findall(before)
            a_strings = STRING_RE.findall(after)
            if len(b_strings) == len(a_strings):
                for old, new in zip(b_strings, a_strings):
                    if old != new and samples < 80:
                        print(f"  - {old[:220]}")
                        print(f"  + {new[:220]}")
                        samples += 1
        else:
            path.write_text(after)
            print(f"updated {path}")
    print(f"files changed: {changed}")


if __name__ == "__main__":
    main()
