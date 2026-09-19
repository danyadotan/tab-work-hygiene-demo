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
    <>
      <SiteNav />
      <main>
        <Hero />
        <Problem />
        <Pipeline />
        <div id="demo"><DemoScreen /></div>
        <div id="benchmark"><Metrics /></div>
        <Ask />
      </main>
      <SiteFooter />
    </>
  )
}
