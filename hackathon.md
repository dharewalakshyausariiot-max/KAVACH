# Hackathon development log

Dates use Asia/Kolkata. These entries describe work observed in this session; no earlier development dates, sponsor dashboard usage or successful checkpoints have been invented.

## 2026-10-12 — Architecture and evidence

- Reviewed the existing working-tree implementation and replaced the stale placeholder README with the actual Next.js/FastAPI architecture, Windows setup, environment inventory, models/tools, responsible use and limitations.
- Installed official entire-graph v0.4.0 through Entire CLI 0.11.4. Ran working-tree search, capabilities and disambiguated caller/callee queries. Saved raw output and a source-checked request/tool/service map in `docs/evidence/entire-graph.md`.
- Found UI API → runInvestigation → backend → forensic endpoint flow. Documented that domain OSINT and passive SpiderFoot currently execute on the Node side; Python's guarded OSINT endpoints are separate.
- Recorded neatlogs implementation and its verification limits: no hosted dashboard test, no explicit outbound traceparent injection in the forensic fetch, and TS content masking not established by Python's masking.
- Documented cfo.ai as manual cost export/entry. No CFO API or authenticated upload/result was used. Configured rates remain unknown until the operator supplies actual prices.
- Wrote `docs/DEMO_SCRIPT.md`: an exactly 180-second filming script explicitly covering neatlogs, Entire and cfo.ai. A completed video is not claimed.

## 2026-10-12 — Validation and repairs

- Initial sandbox lint invocation misreported missing TypeScript dependencies and attempted a registry install that failed with ENOTFOUND. Confirmed installed TypeScript/type packages; ESLint was missing.
- Installed ESLint 8.57.1 and eslint-config-next 14.2.5, added `.eslintrc.json` extending next/core-web-vitals. Lint then passed with no warnings/errors.
- First production build failed because `src/app/page.tsx` contained three invalid Windows punctuation bytes mixed with otherwise valid UTF-8. An initial repair failed and accidentally emptied the file; recovered the pre-existing version from Entire local snapshot `6cb2636`, then converted only those three invalid bytes to UTF-8. A whitespace-insensitive diff confirmed only the three punctuation encoding changes. Application logic and all prior UI additions were retained. Preserved failure output in `docs/evidence/build-initial.txt`.
- Final `npm run build`: passed compilation, lint/type checks, all five static pages and route/build tracing. Dependency bundling warnings remain for neatlogs/protobufjs dynamic imports. `npm run test:agent`: 7 files / 46 tests passed. Output is saved under `docs/evidence/`.
- Dependency installation reported 35 audit findings (13 moderate, 19 high, 3 critical), plus peer/deprecation warnings. No broad dependency upgrade was made as part of documentation/lint setup; security remediation remains separate work.

## 2026-10-12 — Recovery evidence

Entire’s existing local development snapshot preserved the uncommitted UI needed for recovery. This is observed snapshot use, not a claim that the current session successfully created a checkpoint. `docs/evidence/page-encoding.txt` records the restored source length and converted bytes.
