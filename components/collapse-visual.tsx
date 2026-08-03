"use client"

import { useEffect, useState } from "react"

const COLS = 24
const ROWS = 6
const TOTAL = COLS * ROWS

// Deterministic shuffle so survivors read as organic, not striped.
const ORDER = (() => {
  const a = Array.from({ length: TOTAL }, (_, i) => i)
  let seed = 7
  for (let i = a.length - 1; i > 0; i--) {
    seed = (seed * 1103515245 + 12345) % 2147483648
    const j = seed % (i + 1)
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  const rank = new Array(TOTAL)
  a.forEach((cell, r) => (rank[cell] = r))
  return rank
})()

const PHASES = [
  { survivors: TOTAL, stage: "Agent output", note: "raw units produced" },
  { survivors: 48, stage: "Reduction", note: "reached a human at all" },
  { survivors: 6, stage: "Compression", note: "concentrated work units" },
  { survivors: 1, stage: "Closure", note: "human decision required" },
]

export function CollapseVisual() {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setPhase((p) => (p + 1) % PHASES.length), 2000)
    return () => clearInterval(id)
  }, [])

  const { survivors, stage, note } = PHASES[phase]
  const isFinal = survivors === 1

  return (
    <figure className="flex flex-col gap-5" aria-label={`Reduction stage: ${stage}`}>
      <div className="flex items-end justify-between gap-4 border-b border-border pb-3">
        <div className="flex items-baseline gap-3">
          <span
            className={`tnum text-4xl font-semibold leading-none tracking-tight transition-colors duration-500 md:text-5xl ${
              isFinal ? "text-primary" : "text-foreground"
            }`}
          >
            {survivors}
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {note}
          </span>
        </div>
        <span
          className={`font-mono text-xs uppercase tracking-widest transition-colors duration-500 ${
            isFinal ? "text-primary" : "text-muted-foreground"
          }`}
        >
          {stage}
        </span>
      </div>

      <div
        className="grid gap-[3px]"
        style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}
      >
        {Array.from({ length: TOTAL }, (_, i) => {
          const rank = ORDER[i]
          const alive = rank < survivors
          const hero = isFinal && rank === 0
          return (
            <span
              key={i}
              className={`aspect-square rounded-[1px] transition-all duration-700 ease-out ${
                hero
                  ? "scale-[1.6] bg-primary"
                  : alive
                    ? "bg-foreground/80"
                    : "scale-75 bg-foreground/10"
              }`}
              style={{ transitionDelay: `${(rank % COLS) * 18}ms` }}
            />
          )
        })}
      </div>

      <div className="flex gap-1" aria-hidden="true">
        {PHASES.map((p, i) => (
          <span
            key={p.stage}
            className={`h-px flex-1 transition-colors duration-500 ${
              i <= phase ? "bg-primary" : "bg-border"
            }`}
          />
        ))}
      </div>
    </figure>
  )
}
