"use client"

import { useState } from "react"

type Stage = "ready" | "review" | "authorized" | "executed" | "verified" | "blocked"
const documents = Array.from({ length: 10 }, (_, i) => ({
  id: `DOC-${String(i + 1).padStart(2, "0")}`,
  client: i === 8 ? "Client B" : i === 9 ? "Client A" : `Client ${i + 1}`,
  baseline: "approved-v3",
  finding: i === 8 ? "tone" : i === 9 ? "authority" : "match",
}))
const buttonClass = "inline-flex min-h-11 items-center justify-center rounded-sm bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 disabled:opacity-40"

export function CleanDemo() {
  const [stage, setStage] = useState<Stage>("ready")
  const [toneResolved, setToneResolved] = useState(false)
  const [mismatch, setMismatch] = useState(false)
  const [record, setRecord] = useState<string[]>([])
  const [events, setEvents] = useState<string[]>([])
  const checked = stage !== "ready"
  const authorized = ["authorized", "executed", "verified", "blocked"].includes(stage)
  const executed = ["executed", "verified", "blocked"].includes(stage)
  const passed = documents.filter(d => d.finding === "match")
  const expected = documents.map(d => `${d.id}:sent:approved-v3`)
  const addEvent = (event: string) => setEvents(previous => [...previous, event])
  function reset() {
    setStage("ready"); setToneResolved(false); setMismatch(false); setRecord([]); setEvents([])
  }
  function execute() {
    if (stage !== "authorized") return
    setRecord(expected.map((entry, i) => mismatch && i === 9 ? entry.replace("sent", "pending") : entry))
    addEvent("Fixture send executed once under approval A-001. No external messages sent.")
    setStage("executed")
  }
  function verify() {
    if (stage !== "executed") return
    const matches = expected.every((entry, i) => record[i] === entry) && record.length === expected.length
    addEvent(matches ? "10 fixture receipts match expected document IDs, sent status and approved version." : "DOC-10 receipt is pending. Closure blocked; no resend attempted.")
    setStage(matches ? "verified" : "blocked")
  }
  return (
    <div className="overflow-hidden rounded-sm border border-border bg-card shadow-lg">
      <div className="border-b border-border p-5">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">Interactive simulation · synthetic data</p>
        <p className="mt-2 text-sm text-muted-foreground">Rules and state transitions run in this browser. Agents, baseline evidence and delivery receipts are fixtures. No email, CRM or live AI is connected. Refresh resets the run.</p>
      </div>
      <div className="p-5 md:p-7">
        <p className="font-mono text-xs uppercase text-primary">Mission M-001</p>
        <h2 className="mt-2 font-serif text-2xl">Prepare and deliver ten client documents.</h2>
        <p className="mt-2 text-sm text-muted-foreground">Preserve approved copy v3. Surface material tone changes. A new SLA requires explicit authority before any delivery.</p>
        <ol className="my-5 grid grid-cols-2 gap-2 text-xs sm:grid-cols-4" aria-label="Execution stages">
          {["1 · Check", "2 · Human judgment", "3 · Execute", "4 · Verify"].map(label => <li key={label} className="rounded-sm border border-border p-3">{label}</li>)}
        </ol>
        <div role="status" aria-live="polite" className="mb-5 rounded-sm bg-secondary p-4 text-sm font-semibold">
          {stage === "ready" && "10 outputs waiting. No checks or delivery performed."}
          {stage === "review" && "8 need no rereading · 2 require attention · 1 requires authority. Nothing sent."}
          {stage === "authorized" && "SLA authorized for this mission. Execution still pending."}
          {stage === "executed" && "Simulated delivery recorded. Closure awaits receipt comparison."}
          {stage === "verified" && "Verified closure in simulation: 10 / 10 fixture receipts match."}
          {stage === "blocked" && "Closure blocked: 9 / 10 fixture receipts match. DOC-10 is still pending."}
        </div>
        {checked && <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-sm border border-border p-4">
            <h3 className="font-semibold">8 pass the fixture checks</h3>
            <p className="mt-2 text-sm text-muted-foreground">DOC-01–08: baseline v3, client details and allowed edits match the supplied evidence.</p>
            <details className="mt-3 text-sm"><summary className="cursor-pointer">Inspect evidence and rules</summary>
              <ul className="mt-3 space-y-2">{passed.map(d => <li key={d.id}>{d.id} · {d.client} · {d.baseline} · match</li>)}</ul>
              <p className="mt-3 text-muted-foreground">These classifications are supplied fixtures, not semantic document analysis. The browser filters the fixture records by finding type.</p>
            </details>
          </div>
          <div className="space-y-3">
            <div className="rounded-sm border border-border p-4">
              <h3 className="font-semibold">Client B · tone exception</h3>
              <p className="mt-2 text-sm">Draft: “You must respond today.” Approved v3: “Could you confirm by Friday?”</p>
              <p className="mt-2 text-sm text-muted-foreground">Restore approved wording. This uses existing authority; it does not authorize a new obligation.</p>
              {!toneResolved ? <button className={`${buttonClass} mt-3`} onClick={() => { setToneResolved(true); addEvent("Client B: approved wording restored in fixture state.") }}>Restore approved wording</button> : <p className="mt-3 text-sm text-primary">Approved wording restored in simulation.</p>}
            </div>
            <div className="rounded-sm border border-destructive/40 p-4">
              <h3 className="font-semibold">Client A · authority required</h3>
              <p className="mt-2 text-sm">Approved: no guaranteed response time. Draft adds: “We guarantee a response within 4 hours.”</p>
              <p className="mt-2 text-sm text-muted-foreground">Scope: authorize this exact commitment for Client A in M-001 only. No blanket permission for future SLAs.</p>
              {stage === "review" ? <button disabled={!toneResolved} className={`${buttonClass} mt-3`} onClick={() => { if (!toneResolved) return; setStage("authorized"); addEvent("A-001: presenter explicitly authorized Client A 4-hour SLA for M-001 only.") }}>Authorize Client A SLA</button> : <p className="mt-3 text-sm text-primary">{authorized ? "A-001 recorded in this run." : "Authorization pending."}</p>}
              {!toneResolved && <p className="mt-2 text-xs text-muted-foreground">Resolve the tone exception first.</p>}
            </div>
          </div>
        </div>}
        <div className="mt-5 flex flex-wrap items-center gap-3">
          {stage === "ready" && <button className={buttonClass} onClick={() => {setStage("review"); addEvent("Fixture rules: 8 baseline matches, 1 tone exception, 1 authority exception.")}}>Check ten outputs</button>}
          {stage === "authorized" && <button className={buttonClass} onClick={execute}>Run authorized delivery simulation</button>}
          {stage === "executed" && <button className={buttonClass} onClick={verify}>Compare fixture receipts</button>}
          <button className="min-h-11 rounded-sm border border-border px-4 text-sm focus-visible:outline-2" onClick={reset}>Reset demo</button>
        </div>
        <details className="mt-5 border-t border-border pt-4 text-sm">
          <summary className="cursor-pointer">Run record and verification drill</summary>
          <label className="mt-4 flex items-start gap-2"><input type="checkbox" checked={mismatch} disabled={executed} onChange={e => setMismatch(e.target.checked)} /> Simulate a missing final receipt (set before delivery).</label>
          <p className="mt-2 text-muted-foreground">Failure blocks closure. Reset before the next rehearsal. This run is memory-only; refresh does not provide durable recovery or production duplicate protection.</p>
          <ol className="mt-4 list-decimal space-y-2 pl-5">{events.map((event, i) => <li key={i}>{event}</li>)}</ol>
          {record.length > 0 && <pre className="mt-4 overflow-x-auto rounded-sm bg-secondary p-3 text-xs" aria-label="Fixture delivery record">{record.join("\n")}</pre>}
        </details>
      </div>
    </div>
  )
}
