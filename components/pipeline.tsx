"use client"

import { useState } from "react"
import { SectionHead } from "@/components/section-head"

const stages = [
  {
    n: "01",
    title: "Harness",
    description: "Verify before attention. Runs workflow evals, model checks, specification tests, browser/system verification, expected-state validation, and source-of-truth comparison before generated work consumes human attention.",
    insight: {
      title: "INSIGHT — Evidence before attention",
      text: "Model output should not consume human attention merely because it exists. Before work reaches the person accountable for it, the system should produce evidence that the work matches the mission, expected state, and relevant source of truth.",
      consequence: "Verification moves upstream.",
      invariant: "Harness produces evidence.",
    },
  },
  {
    n: "02",
    title: "Hygiene",
    description: "Reduce before interruption. Consumes evidence and applies policy, materiality, prior decisions, and authority boundaries to determine what actually deserves human attention.",
    insight: {
      title: "INSIGHT — Generation creates review debt",
      text: "AI can reduce production effort while simultaneously increasing the amount of work a human must inspect, compare, edit, reconcile, and approve. If every generated artifact returns to the employee, the task list does not shrink.",
      consequence: "Human attention needs its own control layer.",
      invariant: "Hygiene consumes evidence.",
      link: "https://github.com/danyadotan/execution-hygiene-agent",
    },
  },
  {
    n: "03",
    title: "Human Judgment",
    description: "Preserve authority. Only decisions requiring genuine judgment, accountability, preference, risk acceptance, or explicit authority reach the human.",
    insight: {
      title: "INSIGHT — Attention is not authority",
      text: "Human-in-the-loop should not mean human-review-the-whole-loop. Some changes deserve visibility without approval. Some actions require explicit authority. These are different boundaries.",
      consequence: "Preserve human judgment without making the human the throughput bottleneck.",
      invariant: "Human authority can never be removed by attention reduction.",
    },
  },
  {
    n: "04",
    title: "Governed Execution + Verified Closure",
    description: "Execute, recover, verify. Perform only authorized actions, preserve state across handoffs and interruptions, prevent duplicate execution, and verify the final external state against the source of truth.",
    insight: {
      title: "INSIGHT — Approval is not completion",
      text: "A workflow is not complete when a human clicks approve. The authorized action must execute correctly, survive interruption, avoid duplication, and be verified against the external source of truth.",
      consequence: "Completion becomes a verified state rather than a model claim.",
      invariant: "Verified closure is the terminal condition.",
    },
  },
]

function InsightBubble({ insight }: { insight: (typeof stages)[number]["insight"] }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="mt-5">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className="min-h-11 border-b border-dashed border-primary/60 pb-1 text-left font-mono text-[10px] uppercase tracking-[0.16em] text-primary transition-colors hover:border-primary hover:text-foreground"
      >
        {open ? "Close design insight" : "Open design insight"}
      </button>
      {open && (
        <div className="mt-3 border-l-2 border-primary/60 bg-background/70 p-4" role="note">
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-primary">{insight.title}</p>
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{insight.text}</p>
          <p className="mt-3 font-serif text-base leading-tight">{insight.consequence}</p>
          <p className="mt-3 border-t border-border pt-3 font-mono text-[10px] leading-relaxed text-muted-foreground">Invariant: {insight.invariant}</p>
          {insight.link && (
            <a className="mt-3 inline-block text-xs text-primary underline underline-offset-4" href={insight.link} target="_blank" rel="noreferrer">
              Inspect the open-source primitive →
            </a>
          )}
          <button type="button" onClick={() => setOpen(false)} className="mt-4 block min-h-11 font-mono text-[10px] uppercase tracking-widest text-muted-foreground underline underline-offset-4">
            Dismiss
          </button>
        </div>
      )}
    </div>
  )
}

export function Pipeline() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHead index="02" label="The architecture" title="A loop designed for execution reliability." />
        <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-4">
          {stages.map((stage) => (
            <article key={stage.title} className="flex min-h-72 flex-col justify-between bg-background p-6">
              <span className="tnum font-mono text-xs text-primary">{stage.n}</span>
              <div className="mt-14">
                <h3 className="font-serif text-2xl font-medium leading-tight tracking-tight">{stage.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{stage.description}</p>
                <InsightBubble insight={stage.insight} />
              </div>
            </article>
          ))}
        </div>
        <p className="mt-12 max-w-3xl font-serif text-xl leading-relaxed tracking-tight md:text-2xl">
          This is the bridge between model capability and organizational trust.
        </p>

        <UnifiedSourceOfTruth />
        <ReliabilityLoop />
        <ConceptEvolution />
      </div>
    </section>
  )
}

function ConceptEvolution() {
  const steps = [
    ["Bouncer", "What should come back to the human at all?", "Early exploration of attention filtering: generated work should not automatically become human work."],
    ["Attention filtering", "The system can reduce review debt", "Separate generated output from the attention it would otherwise consume."],
    ["Hygiene", "Human attention needs a control layer", "Evidence is filtered before interruption."],
    ["Attention ≠ Authority", "What deserves visibility versus approval?", "Some changes need attention without authorization; others require explicit authority."],
    ["VIP Bouncer", "What requires explicit human authority?", "A later prototype separating attention filtering from the authorization boundary."],
    ["Governed execution", "Approval is not completion", "Authorized actions must execute, recover, and verify against external state."],
    ["Verified closure", "What counts as actually finished?", "The final condition is a verified state, not a model claim."],
  ]

  return (
    <aside className="mt-12 border-t border-border pt-8" aria-labelledby="concept-evolution-title">
      <div className="flex flex-col gap-6 md:flex-row md:gap-12">
        <div className="max-w-xs shrink-0">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">Provenance · concept evolution</p>
          <h2 id="concept-evolution-title" className="mt-3 font-serif text-2xl leading-tight tracking-tight">The loop emerged by separating attention, authority, and completion.</h2>
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-px border border-border bg-border">
            {steps.map(([label, question, meaning], index) => (
              <div key={label} className="grid gap-2 bg-background p-4 md:grid-cols-[9rem_1fr_1.2fr] md:items-baseline md:gap-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-primary">{String(index + 1).padStart(2, "0")} · {label}</p>
                <p className="font-serif text-base leading-tight">{question}</p>
                <p className="text-xs leading-relaxed text-muted-foreground">{meaning}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 max-w-2xl text-xs leading-relaxed text-muted-foreground">The loop was not designed as four abstract boxes. It emerged from repeatedly separating what the system can verify, what deserves human attention, what requires human authority, and what counts as actually finished.</p>
        </div>
      </div>
    </aside>
  )
}

export function ExternalConvergence() {
  const pattern = [
    "Context",
    "Detect relevant change",
    "Decide whether to intervene",
    "Select the next best action",
    "Act within authority",
    "Escalate when human judgment is required",
    "Observe the result",
    "Adapt",
  ]

  return (
    <aside className="mt-12 border-t border-border pt-8" aria-labelledby="external-convergence-title">
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
        <div className="max-w-sm shrink-0">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
            External convergence · selective intervention
          </p>
          <h2 id="external-convergence-title" className="mt-3 font-serif text-2xl leading-tight tracking-tight md:text-3xl">
            AI is moving from answering questions to deciding when intervention is actually useful.
          </h2>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
            Independent signals of the same direction — not competitors, and not proof of TAB efficacy.
          </p>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
            {pattern.map((step, index) => (
              <span key={step} className="inline-flex items-center gap-2">
                <span className={index === 0 || index === pattern.length - 1 ? "text-primary" : ""}>{step}</span>
                {index < pattern.length - 1 && <span className="text-primary">→</span>}
              </span>
            ))}
          </div>

          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            This is the same fundamental shift explored by JITAI-style systems: not “What answer should the model give?” but “Should the system intervene now, what is the smallest useful intervention, and what happens next?”
          </p>

          <div className="mt-6 grid gap-px border border-border bg-border md:grid-cols-2">
            <article className="bg-background p-4">
              <p className="font-mono text-xs text-primary">RadiantGraph — Care Guidance Agents</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Continuous, condition-aware healthcare support using patient context, clinical need, and next-best-action logic to guide proactive intervention.
              </p>
            </article>
            <article className="bg-background p-4">
              <p className="font-mono text-xs text-primary">ARPA-H — ADVOCATE</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Patient-facing clinical AI agents designed for continuous cardiovascular support, bounded autonomous action, monitoring, escalation to clinicians, and formal safety/evaluation protocols.
              </p>
            </article>
          </div>

          <div className="mt-6 grid gap-3 border-l border-primary pl-4 text-xs leading-relaxed md:grid-cols-2 md:gap-x-8">
            <p><span className="font-mono text-primary">JITAI / SEA:</span> When should the human receive support?</p>
            <p><span className="font-mono text-primary">Hygiene:</span> When should the human receive work?</p>
            <p><span className="font-mono text-primary">Harness:</span> Is the evidence sufficient to act?</p>
            <p><span className="font-mono text-primary">Governed execution:</span> What may the system do without returning the whole loop to the human?</p>
          </div>

          <p className="mt-8 font-serif text-lg leading-relaxed tracking-tight md:text-xl">
            “The common architecture is selective intervention: observe continuously, interrupt selectively, preserve human authority.”
          </p>
        </div>
      </div>
    </aside>
  )
}

function UnifiedSourceOfTruth() {
  const state = ["Intent", "Current mission state", "Approved baselines", "Policies + permissions", "Prior decisions", "Dependencies", "Completed actions", "Open actions", "Evidence", "Expected final state"]

  return (
    <div className="mt-10 border border-primary/40 bg-card p-6 md:p-8">
      <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">Unified source of truth</p>
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">persistent · stateful · recoverable</p>
      </div>
      <div className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-5">
        {state.map((item) => <span key={item} className="border-l border-border pl-3 text-xs leading-relaxed text-muted-foreground">{item}</span>)}
      </div>
      <p className="mt-6 border-t border-border pt-4 font-mono text-xs text-muted-foreground">All four stages read from and write to this shared state. Verified state becomes the next recoverable state.</p>
    </div>
  )
}

export function ReliabilityLoop() {
  return (
    <div className="mt-14 border border-border bg-card p-6 md:p-8">
      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Reliability loop</p>
      <div className="mt-8 flex flex-col gap-3 font-mono text-sm md:flex-row md:items-center md:justify-between">
        {[
          "Intent enters",
          "Harness verifies",
          "Hygiene reduces",
          "Human judgment authorizes",
          "Governed execution acts",
          "Source-of-truth verification",
        ].map((label, i) => (
          <div key={label} className="flex items-center gap-3">
            <span className="flex size-7 items-center justify-center rounded-full border border-primary text-xs text-primary">{i + 1}</span>
            <span className="text-muted-foreground">{label}</span>
            {i < 5 && <span className="hidden text-primary md:inline">→</span>}
          </div>
        ))}
      </div>
    </div>
  )
} 
