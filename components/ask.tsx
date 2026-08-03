import { SectionHead } from "@/components/section-head"

export function Ask() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHead
          index="05"
          label="The ask"
          title={
            <>
              Stop dozens of agents from turning one person into{" "}
              <span className="text-primary">the new bottleneck.</span>
            </>
          }
        />

        <blockquote className="mt-12 max-w-4xl border-l-2 border-primary pl-6 text-pretty font-serif text-xl font-medium italic leading-snug tracking-tight md:text-[1.75rem]">
          AI agents produce more work than organizations can absorb. TAB reduces their output into
          fewer human decisions, concentrated work units, and closed operational loops.
        </blockquote>

        <div className="mt-12 flex flex-wrap gap-3">
          <a
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-7 font-mono text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Book the demo
          </a>
          <a
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-sm border border-border px-7 font-mono text-sm font-semibold transition-colors hover:bg-secondary"
          >
            Read the memo
          </a>
        </div>
      </div>
    </section>
  )
}
