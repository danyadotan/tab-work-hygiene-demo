"use client"

import { useState } from "react"
import { Check, AlertTriangle, RotateCcw } from "lucide-react"
import { SectionHead } from "@/components/section-head"

const closed = ["10 generated outputs checked against the approved baseline", "Relevant source of truth compared", "8 / 10 require no human rereading", "2 items reach the human attention set", "Final state verified and returned to the work record"]
const needsHuman = [
  ["CLIENT B", "SURFACE", "SURFACED", "Direct tone diverges materially from approved client style."],
  ["CLIENT A", "REQUIRE APPROVAL", "AUTHORIZED", "Added a 4-hour response-time commitment, creating a new commercial obligation."],
]

export function DemoScreen() {
  const [done, setDone] = useState(false)
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHead index="03" label="The product" title="A reliability evaluation surface for agentic workflows." />
        <div className="mt-12 overflow-hidden rounded-sm border border-border bg-card shadow-[0_1px_0_var(--border),0_12px_32px_-16px_rgb(0_0_0/0.18)]">
          <div className="flex items-center gap-3 border-b border-border px-4 py-3">
            <span className="flex gap-1.5" aria-hidden="true"><span className="size-2.5 rounded-full bg-border" /><span className="size-2.5 rounded-full bg-border" /><span className="size-2.5 rounded-full bg-border" /></span>
            <span className="font-mono text-xs text-muted-foreground">tab@work / reliability-eval</span>
            <span className="ml-auto tnum font-mono text-xs text-primary">{done ? "verified" : "in review"}</span>
          </div>
          <div className="grid gap-px bg-border md:grid-cols-2">
            <div className="bg-card p-6"><p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Verified path</p><ul className="mt-5 flex flex-col gap-3">{closed.map((item) => <li key={item} className="flex items-start gap-3 text-sm leading-relaxed"><Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" /><span className="text-muted-foreground">{item}</span></li>)}</ul></div>
            <div className="bg-card p-6"><p className={`font-mono text-xs uppercase tracking-widest ${done ? "text-muted-foreground" : "text-primary"}`}>{done ? "Resolved" : "Human judgment required"}</p><ul className="mt-5 flex flex-col gap-3">{needsHuman.map(([title, decision, resolvedDecision, detail]) => <li key={title} className={`rounded-sm border p-4 ${done ? "border-border" : "border-destructive/40 bg-destructive/5"}`}><div className="flex items-center gap-2">{done ? <Check className="size-4 text-primary" aria-hidden="true" /> : <AlertTriangle className="size-4 text-destructive" aria-hidden="true" />}<span className="font-mono text-sm font-semibold">{title}</span><span className="ml-auto font-mono text-[10px] uppercase tracking-wider text-primary">{done ? resolvedDecision : decision}</span></div><p className={`mt-2 text-sm leading-relaxed ${done ? "text-muted-foreground line-through" : "text-foreground"}`}>{detail}</p></li>)}</ul></div>
          </div>
          <div className="border-t border-border px-6 py-5"><p aria-live="polite" className="text-sm leading-relaxed text-muted-foreground">{done ? <>10 / 10 <span className="text-primary">VERIFIED CLOSED</span> · Human Decision Load: 1</> : "2 items deserve human attention. Only 1 requires human authority."}</p>{done && <div className="mt-5 grid gap-2 font-mono text-xs text-primary sm:grid-cols-4"><span>AUTHORIZED</span><span>↓ EXECUTED</span><span>↓ SOURCE OF TRUTH CHECKED</span><span>↓ VERIFIED CLOSED</span></div>}<div className="mt-5 flex justify-end">{done ? <button onClick={() => setDone(false)} className="inline-flex h-11 items-center justify-center gap-2 rounded-sm border border-border px-5 font-mono text-sm font-semibold hover:bg-secondary"><RotateCcw className="size-4" aria-hidden="true" />Replay</button> : <button onClick={() => setDone(true)} className="inline-flex h-11 items-center justify-center rounded-sm bg-primary px-6 font-mono text-sm font-semibold text-primary-foreground hover:opacity-90">Approve SLA Commitment</button>}</div></div>
        </div>
        <p className="mt-6 font-mono text-sm text-muted-foreground">One mission. One source of truth. One verified outcome.</p>
      </div>
    </section>
  )
}
