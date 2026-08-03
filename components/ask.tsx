export function Ask() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-5xl px-5 py-24">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">The ask</p>
        <blockquote className="mt-8 max-w-3xl text-balance text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
          &ldquo;AI agents produce more work than organizations can absorb. TAB reduces their output
          into fewer human decisions, concentrated work units, and closed operational loops.&rdquo;
        </blockquote>
        <p className="mt-8 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          We&apos;re not solving &ldquo;what happens when a worker gets stuck.&rdquo; We&apos;re
          solving the bigger question: how to stop dozens of agents from turning one person into the
          organization&apos;s new bottleneck.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#"
            className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 font-mono text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Book the demo
          </a>
          <a
            href="#"
            className="inline-flex h-11 items-center justify-center rounded-md border border-border px-6 font-mono text-sm font-semibold transition-colors hover:bg-secondary"
          >
            Read the memo
          </a>
        </div>
      </div>
    </section>
  )
}
