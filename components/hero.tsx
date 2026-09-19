"use client"

import { useEffect, useState } from "react"

export function Hero() {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setPhase((p) => (p + 1) % 7), 2500)
    return () => clearInterval(id)
  }, [])

  const phases = [
    { text: "Intent enters", align: "left" },
    { text: "→ Harness verifies", align: "left" },
    { text: "→ Hygiene reduces", align: "left" },
    { text: "→ Human judgment authorizes", align: "left" },
    { text: "→ Governed execution acts", align: "left" },
    { text: "→ Source-of-truth verification", align: "left" },
    { text: "→ Verified state returns to loop", align: "left" },
  ]

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-16 md:pb-24 md:pt-20">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          Execution Reliability — Agentic Work
        </p>

        <h1 className="mt-8 max-w-4xl text-pretty font-serif text-[2.75rem] font-medium leading-[1.02] tracking-tight md:text-[5rem]">
          AI agents are getting better at producing work.
          <br />
          <em className="italic text-primary">The harder problem is reliably finishing it.</em>
        </h1>

        <p className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          TAB@Work is a four-stage execution-reliability loop for evaluating, reducing, governing, and verifying agentic work against a unified source of truth.
        </p>

        <div className="mt-10 flex flex-col gap-4">
          <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
            Architecture
          </p>
          <p className="max-w-2xl font-serif text-2xl font-medium leading-relaxed tracking-tight md:text-3xl">
            Harness → Hygiene → Human Judgment → Governed Execution + Verified Closure
          </p>
          <p className="max-w-2xl font-mono text-xs uppercase tracking-widest text-muted-foreground">
            From model output to verified real-world state.
          </p>
        </div>

        <div className="mt-14 border border-border bg-card p-6 shadow-[0_1px_0_var(--border)] md:p-8">
          <figure className="flex flex-col gap-5" aria-label="Execution loop animation">
            <div className="flex items-end justify-between gap-4 border-b border-border pb-4">
              <div className="flex items-start gap-4">
                <span className="font-serif text-lg font-medium leading-none tracking-tight text-foreground min-w-max">
                  {phases[phase]?.text}
                </span>
              </div>
            </div>

            <div className="flex gap-1" aria-hidden="true">
              {phases.map((_, i) => (
                <span
                  key={i}
                  className={`h-px flex-1 transition-colors duration-300 ${
                    i <= phase ? "bg-primary" : "bg-border"
                  }`}
                />
              ))}
            </div>
          </figure>
        </div>
      </div>
    </section>
  )
}
