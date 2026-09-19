import { SectionHead } from "@/components/section-head"

export function Ask() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHead index="06" label="The thesis" title="Human-in-command, without the human-as-bottleneck." />
        <blockquote className="mt-12 max-w-4xl border-l-2 border-primary pl-6 text-pretty font-serif text-xl font-medium italic leading-snug tracking-tight md:text-[1.75rem]">
          TAB@Work asks what changes when we evaluate AI systems not by how convincingly they respond, but by how reliably they carry human intent through a real workflow to verified completion.
        </blockquote>
        <div className="mt-10 flex flex-col gap-2 font-mono text-sm text-muted-foreground">
          <p>Harness produces evidence.</p>
          <p>Hygiene consumes evidence.</p>
          <p>Completion is a verified state, not a model claim.</p>
        </div>
        <div className="mt-10 flex flex-col gap-3 font-mono text-sm">
          <a className="w-fit text-primary underline-offset-4 hover:underline" href="https://github.com/danyadotan/execution-hygiene-agent">View Execution Hygiene Agent →</a>
          <a className="w-fit text-primary underline-offset-4 hover:underline" href="https://github.com/danyadotan/tab-work-hygiene-demo">View this demo on GitHub →</a>
        </div>
      </div>
    </section>
  )
}
