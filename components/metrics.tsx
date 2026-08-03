const metrics = [
  { k: "Decisions avoided", v: "Routine calls that never reached the human." },
  { k: "Context switches avoided", v: "Jumps between documents and systems saved." },
  { k: "Complete work units closed", v: "Matters fully finished, not just approved." },
]

export function Metrics() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-5xl px-5 py-20">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">The pilot</p>
        <h2 className="mt-6 max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          Three numbers prove the thesis.
        </h2>
        <div className="mt-10 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-3">
          {metrics.map((m, i) => (
            <div key={m.k} className="bg-card p-6">
              <span className="font-mono text-sm text-primary">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">{m.k}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
