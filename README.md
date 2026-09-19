# TAB@Work — Execution Reliability

### OpenAI Pioneers Demo

AI can generate work faster than humans can review it.

But generation is not completion.

As agents take on longer, cross-system workplace missions, the critical question becomes whether they can preserve intent, retrieve the right context, respect authority boundaries, recover from interruption, and reach a state that can actually be verified as complete.

TAB@Work explores this as an **execution-reliability problem**.

The goal is not to benchmark whether a model produced a good answer.

The goal is to evaluate whether an agentic workflow reached the intended real-world state — without turning the employee into the permanent reviewer, editor, verifier, and approval queue for AI-generated work.

---

## The Execution Reliability Loop

TAB@Work models reliable agentic execution as a four-stage closed loop:

**Harness → Hygiene → Human Judgment → Governed Execution + Verified Closure**

Each stage addresses a different failure surface.

### 1. Harness — Verify the work

Before generated work consumes human attention, it should be tested against the mission, available evidence, expected state, and relevant source of truth.

The Harness produces evidence.

It can include:

- task and workflow evals
- model benchmarking
- specification checks
- source-of-truth comparison
- browser or system verification
- expected-state validation
- evidence of successful execution

**Question:** Is the work correct, grounded, and sufficiently verified to proceed?

---

### 2. Hygiene — Protect human attention

Verified output can still create enormous amounts of work for the employee.

Ten agents completing ten tasks should not automatically create ten new documents, alerts, approvals, and decisions for a human to process.

The Hygiene Layer consumes verification evidence and determines what actually deserves human attention.

It can:

- auto-pass approved low-risk changes
- suppress redundant review work while preserving traceability
- surface material changes
- identify exceptions
- distinguish attention from authority
- require explicit approval where policy demands it
- escalate uncertainty rather than silently guessing

**Question:** Does a human actually need to see or decide this?

> Reduced attention does not mean invisible automation.

Every decision remains traceable, and Hygiene can never remove an approval that policy or authority requires.

**Open-source reference implementation:**  
[Execution Hygiene Agent](https://github.com/danyadotan/execution-hygiene-agent)

---

### 3. Human Judgment — Preserve authority

Human-in-the-loop should not mean making the human review the whole loop.

The employee retains the decisions where human judgment, accountability, preference, risk acceptance, or explicit authority genuinely matters.

Instead of receiving the entire body of agent-generated work, the human receives a concentrated decision surface with the relevant context and evidence already attached.

**Question:** What decision genuinely requires human judgment or authority?

---

### 4. Governed Execution + Verified Closure

Approval is not completion.

Once authority is granted, the system must execute only what was authorized, preserve state across handoffs and interruptions, prevent duplicate actions, and verify the final result against the source of truth.

The loop closes only when the intended state is verified.

**Question:** Did the authorized work actually happen — correctly, once, and completely?

---

## A Unified Source of Truth

Reliable execution requires more than model memory or conversational context.

The workflow needs a recoverable representation of:

- original intent
- current mission state
- approved baselines
- policies and permissions
- prior decisions
- dependencies
- actions already completed
- unresolved actions
- evidence
- final expected state

This allows agents, models, tools, and humans to operate against a shared execution state rather than reconstructing reality from fragmented conversations.

---

## Execution Reliability Eval

TAB@Work proposes evaluating agentic systems at the level of the **completed mission**, not only the individual model response.

A useful execution eval should test whether a workflow:

1. preserved the original intent
2. retrieved and maintained the required context
3. respected approval and permission boundaries
4. survived handoffs and interruptions
5. avoided duplicate or premature actions
6. surfaced only the human decisions that were actually necessary
7. verified the final state against a source of truth

### Primary metric: Verified Completion Reliability (VCR)

**VCR** measures whether a workflow reaches its intended state, verifies that state against the relevant source of truth, and does so without unresolved permission, context, handoff, duplication, or completion failures.

This creates a benchmark for something different from answer quality:

**Did the system actually finish the work reliably?**

---

## Why Hygiene Matters

The promise of workplace AI is that agents will close mundane daily open loops.

But there is another possible outcome:

AI produces faster than humans can absorb, and every completed agent task returns to the employee as another artifact to inspect, edit, reconcile, approve, or authorize.

The employee's task list never gets shorter.

They simply acquire a second job: **reviewing AI.**

The Hygiene Layer is the attention frontier in the execution loop.

It exists to prevent “keeping the human in the loop” from quietly becoming **making the human the bottleneck of every loop**.

---

## Demo Scenario

One mission produces ten agent-generated client documents.

Rather than sending all ten back to the employee for re-reading:

**10 agent outputs**  
↓  
**verification against evidence and approved state**  
↓  
**Hygiene reduction**  
↓  
**8 require no human re-reading**  
↓  
**2 material items reach human attention**  
↓  
**1 requires explicit human authority**  
↓  
**authorized execution**  
↓  
**source-of-truth verification**  
↓  
**verified closure**

The objective is not fewer humans.

It is fewer unnecessary human decisions.

---

## Failure Modes

The current execution-reliability framework focuses on five recurring failure modes:

### Context loss
The workflow loses information required to preserve the original mission.

### Approval-boundary failure
The system acts without required authority, or unnecessarily asks for approval where authority already exists.

### Handoff failure
State, responsibility, or context is lost when work moves between models, agents, tools, or humans.

### False completion
The system reports success without verifying that the intended external state was actually reached.

### Recovery failure
An interruption causes duplication, lost work, inconsistent state, or an unsafe restart.

These are workflow failures, not merely model-answer failures.

---

## Architecture

```text
             ┌──────────────────────────────┐
             │          HARNESS             │
             │ Verification • Evals         │
             │ Evidence • Benchmarking      │
             └──────────────┬───────────────┘
                            │
                            ▼
             ┌──────────────────────────────┐
             │          HYGIENE             │
             │ Reduction • Materiality      │
             │ Exceptions • Authority       │
             └──────────────┬───────────────┘
                            │
                            ▼
             ┌──────────────────────────────┐
             │       HUMAN JUDGMENT         │
             │ Intent • Decision • Approval │
             └──────────────┬───────────────┘
                            │
                            ▼
             ┌──────────────────────────────┐
             │    GOVERNED EXECUTION        │
             │ Recovery • Verification      │
             │     VERIFIED CLOSURE         │
             └──────────────┬───────────────┘
                            │
                            └──────► Source of truth
                                      │
                                      └────► next verified state


___

**Harness** produces evidence.
**Hygiene** consumes evidence.
**Human authority** is preserved without requiring human inspection of every micro-action.
**Completion** is a verified state, not a model claim.

___

**The Thesis**

Human-in-command, without the human-as-bottleneck.

TAB@Work asks what changes when we evaluate AI systems not by how convincingly they respond, but by how reliably they carry human intent through a real workflow to verified completion.

___
