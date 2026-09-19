import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { Problem } from "@/components/problem"
import { ExternalConvergence, Pipeline } from "@/components/pipeline"
import { ExecutionMeasurement } from "@/components/execution-measurement"
import { DemoScreen } from "@/components/demo-screen"
import { Metrics } from "@/components/metrics"
import { Ask } from "@/components/ask"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Problem />
        <Pipeline />
        <div id="demo"><DemoScreen /></div>
        <div id="benchmark"><Metrics /></div>
        <ExecutionMeasurement />
        <section className="border-b border-border"><div className="mx-auto max-w-6xl px-5 py-12 md:py-16"><ExternalConvergence /></div></section>
        <Ask />
      </main>
      <SiteFooter />
    </>
  )
}
