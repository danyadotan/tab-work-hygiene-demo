"use client"

import { useMemo, useState } from "react"
import { SectionHead } from "@/components/section-head"

const initial = {
  workflowsAttempted: 1,
  workflowsVerifiedClosed: 1,
  modelCalls: 20,
  averageModelCallCost: 0.02,
  toolCalls: 10,
  averageToolCallCost: 0.04,
  retries: 1,
  averageRetryCost: 0.06,
  recoveryOperations: 0,
  averageRecoveryCost: 0.1,
  duplicateActions: 0,
  averageDuplicateCost: 0.05,
  humanReviewMinutes: 8,
  humanHourlyCost: 75,
  elapsedMinutesToVerifiedClosure: 14,
}

type Assumptions = typeof initial
type Field = { key: keyof Assumptions; label: string; step?: string }

const fields: Field[] = [
  { key: "workflowsAttempted", label: "Workflows attempted", step: "1" },
  { key: "workflowsVerifiedClosed", label: "Verified closed", step: "1" },
  { key: "modelCalls", label: "Model calls", step: "1" },
  { key: "averageModelCallCost", label: "Avg model call cost", step: "0.01" },
  { key: "toolCalls", label: "Tool calls", step: "1" },
  { key: "averageToolCallCost", label: "Avg tool call cost", step: "0.01" },
  { key: "retries", label: "Retries", step: "1" },
  { key: "averageRetryCost", label: "Avg retry cost", step: "0.01" },
  { key: "recoveryOperations", label: "Recovery operations", step: "1" },
  { key: "averageRecoveryCost", label: "Avg recovery cost", step: "0.01" },
  { key: "duplicateActions", label: "Duplicate actions", step: "1" },
  { key: "averageDuplicateCost", label: "Avg duplicate cost", step: "0.01" },
  { key: "humanReviewMinutes", label: "Human review minutes", step: "0.5" },
  { key: "humanHourlyCost", label: "Human hourly cost", step: "1" },
  { key: "elapsedMinutesToVerifiedClosure", label: "Minutes to verified closure", step: "0.5" },
]

const money = (value: number | null) => value === null ? "N/A" : `$${value.toFixed(2)}`

function formatVcr(value: number | null) {
  if (value === null) return "N/A"
  const percentage = value * 100
  if (percentage === 100) return "100%"
  if (percentage === 0) return "0%"
  return `${percentage.toFixed(1)}%`
}

export function ExecutionMeasurement() {
  const [values, setValues] = useState<Assumptions>(initial)
  const result = useMemo(() => {
    const vcr = values.workflowsAttempted > 0 ? values.workflowsVerifiedClosed / values.workflowsAttempted : null
    const model = values.modelCalls * values.averageModelCallCost
    const tools = values.toolCalls * values.averageToolCallCost
    const retries = values.retries * values.averageRetryCost
    const recovery = values.recoveryOperations * values.averageRecoveryCost
    const duplicates = values.duplicateActions * values.averageDuplicateCost
    const technical = model + tools + retries + recovery + duplicates
    const human = values.humanReviewMinutes / 60 * values.humanHourlyCost
    const total = technical + human
    const closureCost = values.workflowsVerifiedClosed > 0 ? total / values.workflowsVerifiedClosed : null
    return { vcr, technical, human, total, closureCost, wasted: retries + recovery + duplicates, humanMinutes: values.workflowsVerifiedClosed > 0 ? values.humanReviewMinutes / values.workflowsVerifiedClosed : null }
  }, [values])

  function update(key: keyof Assumptions, raw: string) {
    const number = Math.max(0, Number(raw) || 0)
    setValues((current) => {
      if (key === "workflowsAttempted") {
        return {
          ...current,
          workflowsAttempted: number,
          workflowsVerifiedClosed: Math.min(current.workflowsVerifiedClosed, number),
        }
      }

      if (key === "workflowsVerifiedClosed") {
        return {
          ...current,
          workflowsVerifiedClosed: Math.min(number, current.workflowsAttempted),
        }
      }

      return { ...current, [key]: number }
    })
  }

  return (
    <section id="measurement" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHead index="05" label="Execution measurement" title="Three ways to measure reliable completion." />
        <div className="mt-8 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          <p>A reliable agentic system should be measurable at three levels:</p>
          <p>Did the mission reach verified completion? What did that completion cost the technical system? What did that completion cost the human?</p>
        </div>

        <div className="mt-12 grid gap-px border border-border bg-border lg:grid-cols-[1.2fr_0.8fr]">
          <article className="bg-card p-6 md:p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">RELIABILITY — VERIFIED CLOSURE</p>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              <Metric label="VCR" value={formatVcr(result.vcr)} />
              <Metric label="Verified closed" value={`${values.workflowsVerifiedClosed} / ${values.workflowsAttempted}`} />
              <Metric label="Human decisions" value="1" />
            </div>
            <p className="mt-8 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">Verified Completion Reliability asks whether the mission reached its intended external state and verified that state against the relevant source of truth.</p>
          </article>
          <article className="bg-background p-6 md:p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">MEASUREMENT MODEL</p>
            <div className="mt-6 flex flex-col gap-3 font-mono text-xs uppercase tracking-wide">
              <span className="border border-primary px-3 py-2 text-center text-primary">VERIFIED_CLOSURE</span>
              <span className="text-center text-primary">↓</span>
              <span className="grid grid-cols-3 gap-2 text-center"><span className="border border-border px-2 py-3">Reliability</span><span className="border border-border px-2 py-3">System efficiency</span><span className="border border-border px-2 py-3">Human load</span></span>
            </div>
          </article>
        </div>

        <div className="mt-8 grid gap-8 border-t border-border pt-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">SYSTEM EFFICIENCY — COST OF VERIFIED CLOSURE</p>
            <h3 className="mt-3 font-serif text-2xl leading-tight tracking-tight md:text-3xl">Measure the cost of finishing the work, not the cost of generating it.</h3>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">Cost per verified closure includes model, tool, retry, recovery, duplicate-action, and human-review cost required to produce one verified workflow.</p>
            <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-4 border-t border-border pt-5 font-mono text-xs">
              <Metric label="Cost / closure" value={money(result.closureCost)} accent />
              <Metric label="Technical cost" value={money(result.technical)} />
              <Metric label="Wasted execution" value={money(result.wasted)} />
              <Metric label="Time to closure" value={`${values.elapsedMinutesToVerifiedClosure.toFixed(1)} min`} />
              <Metric label="Human cost" value={money(result.human)} />
              <Metric label="Human min / closure" value={result.humanMinutes === null ? "N/A" : `${result.humanMinutes.toFixed(1)} min`} />
            </div>
          </div>
          <div className="border border-border bg-card p-5 md:p-6">
            <div className="flex items-baseline justify-between gap-4"><p className="font-mono text-xs uppercase tracking-widest text-primary">DEMO_ASSUMPTIONS</p><p className="font-mono text-[10px] text-muted-foreground">editable inputs</p></div>
            <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-3">
              {fields.map((field) => <label key={field.key} className="flex min-w-0 flex-col gap-1 font-mono text-[10px] uppercase tracking-wide text-muted-foreground"><span className="truncate">{field.label}</span><input aria-label={field.label} type="number" min="0" max={field.key === "workflowsVerifiedClosed" ? values.workflowsAttempted : undefined} step={field.step} value={values[field.key]} onChange={(event) => update(field.key, event.target.value)} className="min-h-11 w-full border border-input bg-background px-2 text-base text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary" /></label>)}
            </div>
            <div className="mt-6 grid gap-2 border-t border-border pt-4 font-mono text-xs"><span>Total workflow cost <strong className="float-right font-normal text-primary">{money(result.total)}</strong></span><span>VCR <strong className="float-right font-normal text-primary">{formatVcr(result.vcr)}</strong></span></div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 border-t border-border pt-8 lg:grid-cols-2">
          <div><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">HUMAN LOAD — SECONDARY OUTCOME HYPOTHESIS</p><h3 className="mt-3 font-serif text-2xl leading-tight tracking-tight">If the loop really closes, the load should not simply move back to the employee.</h3><p className="mt-4 text-sm leading-relaxed text-muted-foreground">We should be able to test whether reductions in Human Decision Load correlate with changes in cognitive and physiological load over time.</p></div>
          <div className="grid gap-3 text-xs leading-relaxed text-muted-foreground"><p className="border-l border-primary pl-4"><span className="font-mono text-primary">WORK SYSTEM:</span> open loops, decisions, approvals, interruptions, recovery time, unfinished work.</p><p className="border-l border-border pl-4"><span className="font-mono text-primary">SELF REPORT:</span> perceived cognitive load and stress recovery rating.</p><p className="border-l border-border pl-4"><span className="font-mono text-primary">PHYSIOLOGICAL IF AVAILABLE:</span> heart rate trend, HRV trend, blood pressure trend, sleep recovery indicators.</p><p className="font-mono text-[10px] uppercase tracking-wide text-primary">Hypothesis to test — not a causal health claim.</p></div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground"><p><span className="font-mono text-primary">Model cost per output</span> is a production metric. <span className="font-mono text-primary">Cost per verified closure</span> is an execution metric.</p><p className="mt-2">A cheaper model is not necessarily a cheaper workflow. The optimization target is reliable closure with the minimum unnecessary machine work and minimum unnecessary human load.</p></div>
      </div>
    </section>
  )
}

function Metric({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return <div><p className="text-[10px] uppercase tracking-wide text-muted-foreground">{label}</p><p className={`mt-1 text-lg ${accent ? "text-primary" : "text-foreground"}`}>{value}</p></div>
}
