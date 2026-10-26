import type { Metadata } from "next"
import { CleanDemo } from "@/components/clean-demo"

export const metadata: Metadata = {
  title: "Bridge-iT Bouncer — Five-minute demo",
  description: "An interactive simulation: ten agent outputs, two exceptions, one explicit authorization, and receipt-checked closure. Synthetic data, not customer results.",
}

export default function DemoPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-5xl px-5 py-8 md:py-12">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">Bridge-iT Bouncer · TAB@Work demo</p>
        <h1 className="mt-3 text-balance font-serif text-3xl font-medium leading-tight tracking-tight md:text-4xl">AI produced ten outputs. The Bouncer keeps the review work off your desk.</h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">The Bouncer checks and routes AI output before it consumes your attention. Ten documents should not become ten new review tasks. Follow one mission from evidence checks to focused human judgment, authorized execution and verified closure.</p>
        <div className="mt-7"><CleanDemo /></div>
        <p className="mt-5 text-sm text-muted-foreground">All counts describe this synthetic scenario. They are not measured customer outcomes or a claim of live integrations.</p>
      </div>
    </main>
  )
}
