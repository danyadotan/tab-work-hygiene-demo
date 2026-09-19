import { SectionHead } from "@/components/section-head"

const metrics = [
  ["Intent Preservation", "Did the workflow preserve the original goal across steps?"],
  ["Approval Precision", "Did the system request and respect human authority at the correct boundary?"],
  ["Handoff Integrity", "Did execution state survive transitions across models, agents, tools, systems, and humans?"],
  ["Safe Recovery", "Could execution resume after interruption without duplication, lost state, or unsafe replay?"],
  ["Verified Completion", "Did the intended external state actually occur and get verified?"],
]

export function Metrics() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHead index="04" label="The benchmark" title="Verified Completion Reliability." />
        <div className="mt-10 border border-primary/40 bg-card p-6 md:p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Verified Completion Reliability · VCR</p>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-muted-foreground">The percentage of workflows that reach their intended state, verify that state against the relevant source of truth, and complete without unresolved context, permission, handoff, duplication, recovery, or completion failures.</p>
          <div className="mt-6 grid gap-3 border-t border-border pt-5 font-mono text-xs sm:grid-cols-2"><span>DEMO RUN</span><span className="text-primary">VCR: 1 / 1 workflow verified</span><span>Human Decision Load</span><span className="text-primary">1</span></div>
        </div>
        <div className="mt-14 flex flex-col border-t border-border">
          {metrics.map(([title, description], i) => (
            <div key={title} className="grid gap-4 border-b border-border py-6 md:grid-cols-[5rem_1fr_1.5fr] md:items-baseline">
              <span className="tnum font-mono text-xs text-primary">0{i + 1}</span>
              <h3 className="font-serif text-xl font-medium tracking-tight">{title}</h3>
              <p className="leading-relaxed text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 border-l border-primary pl-4 text-sm leading-relaxed text-muted-foreground"><p><span className="font-mono text-primary">Human Decision Load</span> is the number of human decisions, checks, and approvals required to close one unit of work.</p><p className="mt-2">VCR measures whether the mission completed reliably. Human Decision Load measures how much human attention that completion consumed.</p></div>
      </div>
    </section>
  )
}
