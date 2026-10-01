# Demo 1 - One Subagent

## Teaching goal
Show that the main Claude Code session can delegate a focused task to a specialized subagent with its own context and tools, then receive only the result.

## Pre-demo check
From the repository root:

```bash
npm test
claude
```

Inside Claude Code, optionally run `/agents` to confirm the project agents are visible.

## Live prompt
Paste this prompt:

```text
Use the fox-code-reviewer subagent to review only src/quotes.js against the business rules in CLAUDE.md.
Do not edit anything. Ask the subagent to identify correctness problems and missing tests, then summarize its findings for me.
```

## What students should observe
- Main agent delegates the task.
- `fox-code-reviewer` has read-only tools.
- Reviewer works in its own context and returns a concise result.
- Main conversation does not need to carry all of the review exploration.
- The reviewer should notice the bundle rule mismatch: business rule is 10%, implementation subtracts a flat $10.

## Follow-up prompt
```text
Based on the subagent report, explain the defect to a non-developer technical lead in 3 bullets. Do not fix it yet.
```

## Instructor talking point
A subagent is ideal when a focused specialist can do isolated work and report back. The main agent remains the coordinator.
