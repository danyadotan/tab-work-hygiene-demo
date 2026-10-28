# Bridge-iT Bouncer — Fulcrum five-minute demo
Updated: 26 October 2026

## Scope and positioning

Lead with **Bridge-iT Bouncer**: check, reconcile and route AI output before it becomes human review work. TAB@Work remains the existing demonstration environment. This is a focused presentation of the existing mechanism, not a new product build or a claim that TAB@Work is now deployed infrastructure.

The installed Bouncer is a skills-based ChatGPT plugin (Hygiene Gate and Closure Gate). Its instructions guide source verification, routing, authority boundaries and closure. The `/demo` web page does **not** invoke that plugin. It is a browser-local, deterministic illustration of the same workflow. Do not present the website as a live agent run.

## One route

Open `/demo` on the PR preview or `http://localhost:3000/demo` after `npm install` and `npm run dev`. Reset before recording. Recommended recording setup: desktop browser, 1440×900 or 1920×1080, readable zoom, microphone on, notifications off. These are rehearsal defaults, not EF technical requirements. Record one continuous take; do not expose accounts or customer information.

| Time | Screen/action | Suggested English narration |
| --- | --- | --- |
| 0:00–0:40 | Mission and synthetic-data banner | “AI can generate work faster than people can review it. The employee gets a second job: checking what AI did. Bridge-iT Bouncer sits before that review queue. It checks the evidence, resolves routine issues and brings forward only what needs attention or authority. This is an interactive simulation with synthetic documents, not customer results.” |
| 0:40–1:25 | Click **Check ten outputs**; expand evidence | “One mission has produced ten client documents. Eight fixture records match the approved baseline. They remain inspectable, but do not need another human rereading. These are supplied evidence records; this page is not running a language model or reading real client documents.” |
| 1:25–2:15 | Client B; click **Restore approved wording** | “Two exceptions remain. Client B has a tone change. The approved wording is already available, so restoring it uses existing authority. In the production workflow the agent should correct this without making the employee decide again. Here I click to expose that transition.” |
| 2:15–3:05 | Client A; click **Authorize Client A SLA** | “Client A is different: the draft creates a new four-hour response commitment. That changes an obligation. Bouncer must not hide it or treat it as a stylistic edit. This authorization applies only to this client and mission. One explicit human approval is recorded. Nothing has been delivered yet.” |
| 3:05–3:45 | Click **Run authorized delivery simulation** | “Approval is permission to act, not proof of completion. The browser now writes ten simulated delivery receipts. No real emails are sent. This separates the decision from execution.” |
| 3:45–4:25 | Click **Compare fixture receipts**; open run record | “Closure happens only after the expected document IDs, sent status and approved version match the fixture record. We can inspect every step. If the last receipt is pending, this same comparison blocks closure. A successful animation is not enough.” |
| 4:25–5:00 | Leave verified result visible | “The current Bouncer plugin applies these verification and routing instructions in ChatGPT. This website illustrates the interaction and checks synthetic state. Live delivery adapters, durable execution and independent source-of-truth verification are not implemented here. Next we need to measure how much unnecessary rereading it removes and whether real tasks finish correctly, while preserving every required approval.” |

The narration is a rehearsal script, not a claim of a timed recording. Practice once and adjust pauses to end within five minutes. Avoid a second use case, architecture tour, investor deck or homepage scroll.

## What actually runs

| Capability | Current evidence |
| --- | --- |
| Inspectable baseline classifications | Synthetic records included in `components/clean-demo.tsx`; browser filters them. No semantic analysis. |
| Separate attention and authority | Tone exception uses existing baseline; SLA has an explicit scoped action. |
| Execution gated behind resolution and approval | React state transitions; delivery action unavailable before authorization. |
| Receipt comparison and mismatch block | Expected IDs/status/version compared against an in-memory fixture ledger. |
| Replay | Reset clears all state. Refresh also clears state. |
| Real agents / plugin invocation | Not connected to the web page. Installed plugin is a separate skills-based workflow. |
| Sending / CRM / external verification | Not implemented. |
| Durable audit, cross-refresh recovery, production idempotency | Not implemented. No such guarantees should be claimed. |
| 10 → 8 + 2 → 1 | Scenario counts only; no measured customer outcome, ROI or benchmark. |

## Failure rehearsal (separate from main five-minute take)

Reset. Check outputs. Restore tone. Authorize SLA. Expand **Run record and verification drill**, select missing receipt, run delivery, compare. Expect **Closure blocked: 9 / 10** and DOC-10 pending. No resend is attempted. Reset again before the main take.

## Automated smoke test

`scripts/demo-smoke.cjs` drives `/demo` with Playwright, which is deliberately not an application dependency. Install it outside the app, start the production build, then run the script:

```bash
npm install --prefix /tmp/pw playwright && npx --prefix /tmp/pw playwright install chromium
npm run build && npm start   # separate shell
NODE_PATH=/tmp/pw/node_modules node scripts/demo-smoke.cjs   # DEMO_URL overrides http://localhost:3000/demo
```

## Fulcrum requirements verified

Acceptance email dated 26 October (also a matching 22 October email) requires:
- One short video update each day for seven days.
- A few minutes reviewing other participants' updates.
- A five-minute demo at the end.
- Typical effort: one to three hours daily.
- Sign into https://app.efstart.com using the invited Google account and complete profile.
- Join Discord and book a 15-minute conversation with Jim using the links in the acceptance email.

Sources: acceptance email https://mail.google.com/mail/u/?authuser=dotandanya%40gmail.com#all/1a178988ebc136ac ; public FAQ https://fulcrum.efstart.com/faq ; sign-in page https://app.efstart.com .

The public FAQ does not specify codec, file size, aspect ratio, hosting, upload-vs-link, final deadline or whether the final demo is live. The platform is behind Google sign-in; authenticated submission requirements and profile completion remain unverified. Do not invent these. A five-minute screen recording is a preparation default only. Check the final-demo form before exporting/uploading. Nothing was submitted or published to EF.

Scheduling: email says kickoff 09:00 PDT and following stand-ups 08:30 PDT. The invitation in Gmail says 26 October 18:00–18:45 Israel and daily stand-ups 27–31 October 17:30–18:00. This extends beyond the initial 27–30 summary. Check the current calendar invite for exact cohort dates, especially across daylight-saving changes; no calendar changes made here.

## Deployment finding

On 26 October, https://tab-at-work.com/demo returned Vercel 404. Vercel lists the existing hygiene project's latest production deployment as `efaf665`, branch `v0/execution-reliability-eval`, at https://tab-at-work-harj0rtu0-danya-dotans-projects.vercel.app . The deployment URL redirects unauthenticated visitors to Vercel login and is not verified as publicly playable. Recent GitHub notification emails describe separate `tab-film` work serving a Desk on the custom domain. Do not repoint that domain or claim this PR fixes its routing. Use this PR's preview for rehearsals after verifying it, or the tested local route. Main branch and the production branch differ, so merging to main alone may not deploy this page.

## Optional actual plugin demonstration (not part of this recording route)

For a later live-plugin take, supply synthetic documents and baseline evidence to the installed Bridge-iT Bouncer, explicitly invoke Hygiene Gate then Closure Gate, and show the returned evidence packet. Do not claim the deterministic website is that run. Live model results and timing must be verified in that separate rehearsal first.
