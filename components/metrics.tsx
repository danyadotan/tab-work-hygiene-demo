import { SectionHead } from "@/components/section-head"

const metrics = [
  ["Task success rate", "Did the workflow complete the intended task?"],
  ["Human Decision Load", "How many approvals, checks, and interventions were required?"],
  ["Verification rate", "How often was completion confirmed against the external source of truth?"],
  ["Recovery rate", "How often did the system resume safely after interruption or failure?"],
  ["Traceability", "Can every action, decision, and state transition be explained?"],
]

export function Metrics() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHead index="04" label="The benchmark" title="What TAB@Work evaluates." />
        <div className="mt-14 flex flex-col border-t border-border">
          {metrics.map(([title, description], i) => (
            <div key={title} className="grid gap-4 border-b border-border py-6 md:grid-cols-[5rem_1fr_1.5fr] md:items-baseline">
              <span className="tnum font-mono text-xs text-primary">0{i + 1}</span>
              <h3 className="font-serif text-xl font-medium tracking-tight">{title}</h3>
              <p className="leading-relaxed text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
