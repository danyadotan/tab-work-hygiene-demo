import { SectionHead } from "@/components/section-head"

const stages = [
  ["01", "Harness", "Verify before attention. Runs workflow evals, model checks, specification tests, browser/system verification, expected-state validation, and source-of-truth comparison before generated work consumes human attention."],
  ["02", "Hygiene", "Reduce before interruption. Consumes evidence and applies policy, materiality, prior decisions, and authority boundaries to determine what actually deserves human attention."],
  ["03", "Human Judgment", "Preserve authority. Only decisions requiring genuine judgment, accountability, preference, risk acceptance, or explicit authority reach the human."],
  ["04", "Governed Execution + Verified Closure", "Execute, recover, verify. Perform only authorized actions, preserve state across handoffs and interruptions, prevent duplicate execution, and verify the final external state against the source of truth."],
]

export function Pipeline() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHead index="02" label="The architecture" title="A loop designed for execution reliability." />
        <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-4">
          {stages.map(([n, title, description]) => (
            <article key={title} className="flex min-h-72 flex-col justify-between bg-background p-6">
              <span className="tnum font-mono text-xs text-primary">{n}</span>
              <div className="mt-14">
                <h3 className="font-serif text-2xl font-medium leading-tight tracking-tight">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-12 max-w-3xl font-serif text-xl leading-relaxed tracking-tight md:text-2xl">
          This is the bridge between model capability and organizational trust.
        </p>

        <UnifiedSourceOfTruth />
        <ReliabilityLoop />
        <ExternalConvergence />
      </div>
    </section>
  )
}

function ExternalConvergence() {
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
          "Hygiene preserves",
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
