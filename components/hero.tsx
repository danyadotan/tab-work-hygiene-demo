import { CollapseVisual } from "@/components/collapse-visual"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        className="pointer-events-none absolute inset-0 grid-rule fade-bottom opacity-40"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-16 md:pb-24 md:pt-24 text-card-foreground">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
          Human Decision Load — infrastructure
        </p>

        <h1 className="mt-8 max-w-4xl text-pretty text-[2.5rem] font-semibold leading-[0.98] tracking-tight md:text-7xl">
          Agents ship more work
          <br />
          than humans can absorb.
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed md:text-xl">
          TAB is the reduction layer between agent output and the person accountable for it.
          Fewer decisions. Concentrated work units. Closed loops.
        </p>

        <div className="mt-14 rounded-lg border border-border bg-card p-6 md:p-8">
          <CollapseVisual />
        </div>
      </div>
    </section>
  )
}
