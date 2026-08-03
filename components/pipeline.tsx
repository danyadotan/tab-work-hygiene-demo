import { ArrowDown } from "lucide-react"

const steps = [
  "Agent outputs",
  "Group by client / task / outcome",
  "Semantic diff against approved version",
  "Detect material change, risk, exception",
  "Apply policy + prior decisions",
  "Only what needs human judgment",
]

const layers = [
  { n: "01", t: "Reduction", d: "Does this reach a human at all?" },
  { n: "02", t: "Compression", d: "10 docs, 7 alerts, 4 approvals → one work unit." },
  { n: "03", t: "Recovery", d: "When action is needed, deliver full context + first step ready." },
  { n: "04", t: "Closure", d: "Not just approved — sent, logged, returned, closed." },
]

export function Pipeline() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-5xl px-5 py-20">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">The solution</p>
        <h2 className="mt-6 max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          A reduction layer between agent output and the human.
        </h2>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <div className="rounded-md border border-border bg-card p-6">
            <p className="font-mono text-xs text-muted-foreground">pipeline</p>
            <ol className="mt-4 space-y-0">
              {steps.map((s, i) => (
                <li key={s}>
                  <div className="font-mono text-sm">{s}</div>
                  {i < steps.length - 1 && (
                    <ArrowDown className="my-1 h-3.5 w-3.5 text-primary" aria-hidden="true" />
                  )}
                </li>
              ))}
            </ol>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-border bg-border">
            {layers.map((l) => (
              <div key={l.n} className="bg-card p-5">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm text-primary">{l.n}</span>
                  <span className="text-lg font-semibold tracking-tight">{l.t}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{l.d}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-10 max-w-3xl text-pretty font-mono text-sm leading-relaxed text-muted-foreground">
          Identity infrastructure controls what agents <span className="text-foreground">may</span> do.
          TAB controls how much of their output is allowed to{" "}
          <span className="text-foreground">interrupt a human</span>.
        </p>
      </div>
    </section>
  )
}
