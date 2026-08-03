import { Check, AlertTriangle } from "lucide-react"

const closed = [
  "Base copy matches approved version",
  "Names, dates, client details verified",
  "Stylistic changes merged",
  "Prior versions retained",
  "8 documents need no re-reading",
]

const needsHuman = [
  { c: "Client A", d: "Added a 4-hour response-time commitment." },
  { c: "Client B", d: "Direct tone diverges from previously approved style." },
]

export function DemoScreen() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-5xl px-5 py-20">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">The product</p>
        <h2 className="mt-6 max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          10 agents wrote 10 client documents. TAB shows one screen.
        </h2>

        <div className="mt-10 overflow-hidden rounded-lg border border-border bg-card">
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">tab / word-processor</span>
          </div>

          <div className="grid gap-px bg-border md:grid-cols-2">
            <div className="bg-card p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Already closed
              </p>
              <ul className="mt-4 space-y-3">
                {closed.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm leading-relaxed">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-muted-foreground">{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-primary">
                Needs a human
              </p>
              <ul className="mt-4 space-y-4">
                {needsHuman.map((n) => (
                  <li key={n.c} className="rounded-md border border-destructive/40 bg-destructive/5 p-4">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-destructive" aria-hidden="true" />
                      <span className="font-mono text-sm font-semibold">{n.c}</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-foreground">{n.d}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-border px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              Approve the SLA commitment. All 10 documents are then ready to send.
            </p>
            <button className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 font-mono text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
              Approve &amp; close 10
            </button>
          </div>
        </div>

        <p className="mt-6 font-mono text-sm text-muted-foreground">
          One matter. One context. One decision. One closure.
        </p>
      </div>
    </section>
  )
}
