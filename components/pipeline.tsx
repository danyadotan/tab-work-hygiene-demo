import { SectionHead } from "@/components/section-head"

const stages = [
  ["01", "Harness", "Defines the task, permitted tools, checkpoints, and success conditions."],
  ["02", "Hygiene", "Preserves intent, context, provenance, and the minimal state needed to continue."],
  ["03", "Human Judgment", "Routes only consequential decisions to the right person with enough context to act."],
  ["04", "Governed Execution + Verified Closure", "Executes within authority, verifies the external state, and returns the result to the source of truth."],
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
      </div>
    </section>
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
