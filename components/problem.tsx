import { SectionHead } from "@/components/section-head"

const bloat = [
  "more drafts",
  "more versions",
  "more reviews",
  "more exceptions",
  "more approvals",
  "more jumps between systems",
]

const bars = [
  { label: "Enterprise AI adoption", value: 47 },
  { label: "Actual employee engagement", value: 31 },
]

export function Problem() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHead
          index="01"
          label="The problem"
          title={
            <>
              Adoption went up. <span className="text-muted-foreground">The workday didn&apos;t.</span>
            </>
          }
        />

        <div className="mt-14 grid gap-10 md:grid-cols-5">
          <div className="flex flex-col gap-8 md:col-span-3">
            <div className="flex flex-col gap-6">
              {bars.map((b) => (
                <div key={b.label} className="flex flex-col gap-2">
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      {b.label}
                    </span>
                    <span className="tnum text-2xl font-semibold tracking-tight">{b.value}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-border">
                    <div className="h-full bg-primary" style={{ width: `${b.value}%` }} />
                  </div>
                </div>
              ))}
            </div>

            <p className="text-pretty leading-relaxed text-muted-foreground">
              The bottleneck moved. One human still arrives every morning to read, compare, approve,
              and click. More agents means a longer approval queue — not freedom.
            </p>

            <p className="border-l-2 border-primary pl-4 text-sm leading-relaxed text-muted-foreground">
              The metric nobody measures:{" "}
              <span className="font-serif text-base italic text-primary">Human Decision Load</span>{" "}
              — decisions, checks, and approvals needed to close one unit of work.
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              What agents actually produce
            </p>
            <ul className="mt-5 flex flex-col">
              {bloat.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-3 border-b border-border py-2.5 font-mono text-sm"
                >
                  <span className="text-destructive">+</span>
                  <span className="text-muted-foreground">{b}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Every version and exception lands on one person. Safe permissions build a safer system
              — not a better workday.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
