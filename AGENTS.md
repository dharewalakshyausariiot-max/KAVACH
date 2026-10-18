<!-- entire-graph:begin -->
This repo has the entire-graph code graph installed. Before exploring code with
grep/find/whole-file reads, read .entire/graph-agent.md — resolution-first guidance
for using graph retrieval, focused source inspection, and verification.
@.entire/graph-agent.md
<!-- entire-graph:end -->

# HerGuard project rules

- Work only in C:\dev\herguard. Environment: Windows PowerShell. Use forensics\.venv\Scripts\python.exe. Ports: Next.js 3000, forensics service 8000.
- Never print or commit secrets; .env files stay untracked. Never run "entire doctor".
- Do not commit or push; propose a commit message at the end.
- Honesty: never claim something works unless you ran it; mark it "Unverified". Never fabricate results, traces, numbers, prices or status. Mock output carries source:"mock" and is visibly labelled MOCK in the UI. No random values anywhere.
- Safety invariants: consent is explicit and never defaulted to true; face matching is only 1:1 between the user's own verified photo and a candidate (no face-search engines, no scraping of social media or people-search sites); candidate or offending images are never stored or displayed (only URL, domain, scores, hashes); legal documents are drafts and nothing is ever sent automatically; no third-party personal data is stored; deepfake, ELA, DINOv2, TruFor and GenD outputs are indicators, capped at medium confidence.
- UI copy must be true: privacy and status claims come from real config and /api/health.
- Efficiency gate: after each task run lint, tests and build, plus pytest for forensics, and report exact pass/fail counts. While iterating, run only the relevant tests.
