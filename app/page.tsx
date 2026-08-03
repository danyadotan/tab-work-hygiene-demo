import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { Problem } from "@/components/problem"
import { Pipeline } from "@/components/pipeline"
import { DemoScreen } from "@/components/demo-screen"
import { Metrics } from "@/components/metrics"
import { Ask } from "@/components/ask"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <SiteNav />
      <Hero />
      <Problem />
      <Pipeline />
      <DemoScreen />
      <Metrics />
      <Ask />
      <SiteFooter />
    </main>
  )
}
