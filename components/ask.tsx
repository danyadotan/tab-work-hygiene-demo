import { SectionHead } from "@/components/section-head"

export function Ask() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHead index="05" label="The ask" title="Build agents that can finish what they start." />
        <blockquote className="mt-12 max-w-4xl border-l-2 border-primary pl-6 text-pretty font-serif text-xl font-medium italic leading-snug tracking-tight md:text-[1.75rem]">
          TAB@Work makes execution reliability measurable: preserve intent, respect authority, recover safely, and verify closure against a unified source of truth.
        </blockquote>
        <div className="mt-12 flex flex-wrap gap-3">
          <a href="#demo" className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-7 font-mono text-sm font-semibold text-primary-foreground hover:opacity-90">Run the eval</a>
          <a href="#benchmark" className="inline-flex h-12 items-center justify-center rounded-sm border border-border px-7 font-mono text-sm font-semibold hover:bg-secondary">Read the framework</a>
        </div>
      </div>
    </section>
  )
}
