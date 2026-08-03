import { CollapseVisual } from "@/components/collapse-visual"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-16 md:pb-24 md:pt-20">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          Human Decision Load — infrastructure
        </p>

        <h1 className="mt-8 max-w-4xl text-pretty font-serif text-[2.75rem] font-medium leading-[1.02] tracking-tight md:text-[5rem]">
          Agents ship more work than humans can{" "}
          <em className="italic text-primary">absorb.</em>
        </h1>

        <p className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          TAB is the reduction layer between agent output and the person accountable for it.
          Fewer decisions. Concentrated work units. Closed loops.
        </p>

        <div className="mt-14 border border-border bg-card p-6 shadow-[0_1px_0_var(--border)] md:p-8">
          <CollapseVisual />
        </div>
      </div>
    </section>
  )
}
