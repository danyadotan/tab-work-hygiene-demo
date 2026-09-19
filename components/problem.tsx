import { SectionHead } from "@/components/section-head"

const failures = [
  ["Context loss", "Required state or prior decisions disappear between steps."],
  ["Approval-boundary failure", "The system acts without authority — or asks unnecessarily when authority already exists."],
  ["Handoff failure", "State or responsibility breaks when work moves between agents, tools, systems, or humans."],
  ["False completion", "The system reports success without verifying the external state."],
  ["Recovery failure", "An interruption causes duplication, lost work, inconsistent state, or unsafe restart."],
]

export function Problem() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHead index="01" label="The failure surface" title="A good model response is not the same as a completed workflow." />
        <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-5">
          {failures.map(([title, description], i) => (
            <div key={title} className="flex min-h-48 flex-col justify-between bg-background p-5">
              <span className="tnum font-mono text-xs text-primary">0{i + 1}</span>
              <div className="mt-10">
                <h3 className="font-serif text-xl font-medium leading-tight tracking-tight">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-12 max-w-3xl border-l-2 border-primary pl-4 font-serif text-xl italic leading-relaxed md:text-2xl">
          The unit of evaluation should be the completed mission — not only the individual response.
        </p>
        <p className="mt-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Model quality ≠ workflow reliability
        </p>
      </div>
    </section>
  )
}
