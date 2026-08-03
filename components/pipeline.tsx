import { SectionHead } from "@/components/section-head"

const steps = [
  "Agent outputs arrive",
  "Group by client / task / outcome",
  "Semantic diff against approved version",
  "Detect material change, risk, exception",
  "Apply policy and prior decisions",
  "Only what needs human judgment",
]

const layers = [
  { n: "01", t: "Reduction", d: "Does this reach a human at all?" },
  { n: "02", t: "Compression", d: "10 docs, 7 alerts, 4 approvals become one work unit." },
  { n: "03", t: "Recovery", d: "When action is needed: full context, first step ready." },
  { n: "04", t: "Closure", d: "Not just approved — sent, logged, returned, closed." },
]

export function Pipeline() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHead
          index="02"
          label="The solution"
          title="A reduction layer between agent output and the human."
        />

        <div className="mt-14 grid gap-12 md:grid-cols-5">
          <ol className="relative flex flex-col md:col-span-2">
            <span className="absolute bottom-3 left-[5px] top-3 w-px bg-border" aria-hidden="true" />
            {steps.map((s, i) => {
              const last = i === steps.length - 1
              return (
                <li key={s} className="relative flex gap-4 pb-6 last:pb-0">
                  <span
                    className={`relative z-10 mt-1.5 h-[11px] w-[11px] shrink-0 rounded-full border-2 ${
                      last ? "border-primary bg-primary" : "border-border bg-background"
                    }`}
                    aria-hidden="true"
                  />
                  <span
                    className={`font-mono text-sm leading-snug ${
                      last ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {s}
                  </span>
                </li>
              )
            })}
          </ol>

          <div className="flex flex-col md:col-span-3">
            {layers.map((l) => (
              <div
                key={l.n}
                className="group flex items-baseline gap-6 border-t border-border py-6 last:border-b"
              >
                <span className="tnum font-mono text-sm text-primary">{l.n}</span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-xl font-semibold tracking-tight md:text-2xl">{l.t}</h3>
                  <p className="text-pretty leading-relaxed text-muted-foreground">{l.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-12 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Identity infrastructure controls what agents{" "}
          <span className="text-foreground">may</span> do. TAB controls how much of their output is
          allowed to <span className="text-primary">interrupt a human</span>.
        </p>
      </div>
    </section>
  )
}
