const bloat = [
  "more drafts",
  "more versions",
  "more reviews",
  "more exceptions",
  "more approvals",
  "more jumps between systems",
]

export function Problem() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-5xl gap-12 px-5 py-20 md:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-primary">The problem</p>
          <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            AI adoption went up. The workday didn&apos;t get better.
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            Enterprise AI adoption rose to 47%. Engagement stayed flat at 31%. The bottleneck moved:
            one human still arrives every morning to read, compare, approve, and click. More agents
            means a longer approval queue — not freedom.
          </p>
          <p className="mt-6 font-mono text-sm text-foreground">
            Metric that matters: <span className="text-primary">Human Decision Load</span> — decisions,
            checks, and approvals needed to close one unit of work.
          </p>
        </div>
        <div className="rounded-md border border-border bg-card p-6">
          <p className="font-mono text-xs text-muted-foreground">what agents actually produce</p>
          <ul className="mt-4 space-y-2 font-mono text-sm">
            {bloat.map((b) => (
              <li key={b} className="flex items-center gap-3 border-b border-border/60 pb-2">
                <span className="text-destructive">+</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Every version, exception, and update lands on one person. Safe permissions build a safer
            system — not a better workday.
          </p>
        </div>
      </div>
    </section>
  )
}
