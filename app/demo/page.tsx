import type { Metadata } from "next"
import { CleanDemo } from "@/components/clean-demo"

export const metadata: Metadata = {
  title: "TAB — Demo",
  description:
    "Ten agents produced ten documents. TAB reduces them to a single human decision, then closes the loop.",
}

export default function DemoPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">The mechanism</p>
        <h1 className="mt-4 text-balance font-serif text-3xl font-medium leading-[1.08] tracking-tight md:text-5xl">
          Ten agents wrote ten documents. One human decision closes them all.
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          TAB collapses agent output into the few points that actually need a person, then closes the
          loop once they&apos;re resolved. Approve the one open item below and watch the load drop to one.
        </p>

        <div className="mt-10">
          <CleanDemo />
        </div>

        <ol className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3">
          {[
            { n: "01", t: "Reduce", d: "10 outputs → 2 that need judgment." },
            { n: "02", t: "Concentrate", d: "One matter, one context, one screen." },
            { n: "03", t: "Close", d: "Approve once. All 10 sent and logged." },
          ].map((s) => (
            <li key={s.n} className="bg-card p-5">
              <span className="font-mono text-xs text-primary">{s.n}</span>
              <h2 className="mt-2 font-serif text-lg font-medium tracking-tight">{s.t}</h2>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </main>
  )
}
