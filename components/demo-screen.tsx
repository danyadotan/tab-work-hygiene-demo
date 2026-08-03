"use client"

import { useState } from "react"
import { Check, AlertTriangle, RotateCcw } from "lucide-react"
import { SectionHead } from "@/components/section-head"

const closed = [
  "Base copy matches approved version",
  "Names, dates, client details verified",
  "Stylistic changes merged",
  "Prior versions retained",
  "8 documents need no re-reading",
]

const needsHuman = [
  { c: "Client A", d: "Added a 4-hour response-time commitment." },
  { c: "Client B", d: "Direct tone diverges from approved style." },
]

export function DemoScreen() {
  const [done, setDone] = useState(false)

  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHead
          index="03"
          label="The product"
          title="10 agents wrote 10 client documents. TAB shows one screen."
        />

        <div className="mt-12 overflow-hidden rounded-lg border border-border bg-card">
          <div className="flex items-center gap-3 border-b border-border px-4 py-3">
            <span className="flex gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
            </span>
            <span className="font-mono text-xs text-muted-foreground">tab / word-processor</span>
            <span
              className={`ml-auto tnum font-mono text-xs transition-colors duration-500 ${
                done ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {done ? "10 / 10 closed" : "8 / 10 closed"}
            </span>
          </div>

          <div className="grid gap-px bg-border md:grid-cols-2">
            <div className="bg-card p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Already closed
              </p>
              <ul className="mt-5 flex flex-col gap-3">
                {closed.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm leading-relaxed">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-muted-foreground">{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card p-6">
              <p
                className={`font-mono text-xs uppercase tracking-widest transition-colors duration-500 ${
                  done ? "text-muted-foreground" : "text-primary"
                }`}
              >
                {done ? "Resolved" : "Needs a human"}
              </p>
              <ul className="mt-5 flex flex-col gap-3">
                {needsHuman.map((n) => (
                  <li
                    key={n.c}
                    className={`rounded-md border p-4 transition-colors duration-500 ${
                      done ? "border-border bg-transparent" : "border-destructive/40 bg-destructive/5"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {done ? (
                        <Check className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      ) : (
                        <AlertTriangle
                          className="h-4 w-4 shrink-0 text-destructive"
                          aria-hidden="true"
                        />
                      )}
                      <span className="font-mono text-sm font-semibold">{n.c}</span>
                    </div>
                    <p
                      className={`mt-2 text-sm leading-relaxed transition-colors duration-500 ${
                        done ? "text-muted-foreground line-through" : "text-foreground"
                      }`}
                    >
                      {n.d}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-4 border-t border-border px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <p aria-live="polite" className="text-sm leading-relaxed text-muted-foreground">
              {done ? (
                <>
                  Loop closed. All 10 documents sent, logged, and returned —{" "}
                  <span className="text-primary">Human Decision Load: 1</span>.
                </>
              ) : (
                "Approve the SLA commitment. All 10 documents are then ready to send."
              )}
            </p>
            {done ? (
              <button
                onClick={() => setDone(false)}
                className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-md border border-border px-5 font-mono text-sm font-semibold transition-colors hover:bg-secondary"
              >
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
                Replay
              </button>
            ) : (
              <button
                onClick={() => setDone(true)}
                className="inline-flex h-11 shrink-0 items-center justify-center rounded-md bg-primary px-6 font-mono text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Approve &amp; close 10
              </button>
            )}
          </div>
        </div>

        <p className="mt-6 font-mono text-sm text-muted-foreground">
          One matter. One context. One decision. One closure.
        </p>
      </div>
    </section>
  )
}
