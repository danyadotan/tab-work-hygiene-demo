import { SectionHead } from "@/components/section-head"

const metrics = [
  { n: "01", k: "Decisions avoided", v: "Routine calls that never reached the human." },
  { n: "02", k: "Context switches avoided", v: "Jumps between documents and systems saved." },
  { n: "03", k: "Work units closed", v: "Matters fully finished, not merely approved." },
]

export function Metrics() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHead index="04" label="The pilot" title="Three numbers prove the thesis." />

        <div className="mt-12 grid md:grid-cols-3 md:gap-px md:bg-border">
          {metrics.map((m) => (
            <div key={m.n} className="border-t border-border bg-background p-0 md:border-t-0 md:p-6">
              <div className="py-6 md:py-0">
                <span className="tnum font-mono text-xs text-primary">{m.n}</span>
                <h3 className="mt-4 text-balance text-xl font-semibold tracking-tight md:text-2xl">
                  {m.k}
                </h3>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{m.v}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
