export function Hero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-5xl px-5 py-20 md:py-28">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">The one-liner</p>
        <h1 className="mt-6 text-pretty text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Agents ship more work than humans can absorb.
          <br className="hidden md:block" />
          <span className="text-muted-foreground"> TAB collapses it into one decision.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          TAB continuously reduces, compresses, recovers, and closes human work across AI-native
          organizations. Fewer decisions. Concentrated work units. Closed loops.
        </p>
        <div className="mt-10 grid max-w-lg grid-cols-3 gap-px overflow-hidden rounded-md border border-border bg-border font-mono">
          {[
            { k: "10 → 1", v: "decisions" },
            { k: "91%", v: "text unread" },
            { k: "0", v: "context switches" },
          ].map((s) => (
            <div key={s.v} className="bg-card px-4 py-4">
              <div className="text-xl font-semibold text-primary">{s.k}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
