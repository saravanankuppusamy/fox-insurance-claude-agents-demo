# Instructor Guide - Claude Code Agents with Fox Insurance

## Learning objectives
By the end of the demo, students should be able to distinguish:

1. **Single subagent** - one specialist performs a focused task and reports to the main agent.
2. **Parallel subagents** - multiple specialists work on independent tasks concurrently, still coordinated by the main agent.
3. **Agent team** - a lead coordinates separate Claude Code teammates with independent context, shared task coordination, and direct teammate communication.

## Suggested 35-45 minute flow

| Segment | Time | Instructor action |
|---|---:|---|
| App orientation | 5 min | Run app, show quote logic and tests |
| Single subagent | 8 min | Read-only code review of quote logic |
| Two parallel subagents | 10 min | UI + test work concurrently |
| Agent team | 15 min | Lead + 3 workers build Claims Status |
| Compare approaches | 5 min | Discuss context, coordination, cost, and best-fit scenarios |

## Mental model

```text
Demo 1: Single subagent

User -> Main Claude
          |
          +--> fox-code-reviewer
                 |
                 +--> report
          |
          +--> Main Claude explains result

Demo 2: Parallel subagents

User -> Main Claude
          |\
          | +--> fox-ui-agent ------> styles.css
          |
          +----> fox-test-agent ----> tests/quotes.test.js
          |
          +--> combines reports / integrates next step

Demo 3: Agent team

User -> Team Lead
          |-- shared tasks / coordination
          |--> claims-feature <---->
          |--> claims-ui      <----> peer messages
          |--> claims-tests   <---->
          |
          +--> integration + final synthesis
```

## Why the starter has an intentional defect
The quote calculator says bundled policies get 10% off, but starter code subtracts a flat $10. This gives the reviewer something concrete to find and gives the parallel test worker a useful failing test to create.

## Reset strategy
For a live class, keep a clean Git commit before each demo:

```bash
git init
git add .
git commit -m "starter for Claude Code agent demos"
```

Before repeating a demo, restore the starter with your preferred Git workflow. Avoid destructive reset commands in front of students unless you have already explained them.

## Discussion questions
- Why use a read-only reviewer instead of letting the main agent inspect everything?
- What makes two tasks safe to run in parallel?
- What happens if two parallel agents edit the same file?
- When would a shared task list help?
- Why are agent teams more expensive than subagents?
- Which approach is best for a small one-file bug? A cross-layer feature? A security + performance + test review?

## Expected answers
- Read-only specialization isolates context and reduces accidental edits.
- Parallel tasks should have minimal dependencies and preferably separate file ownership.
- Same-file editing increases conflict and coordination risk.
- Shared tasks help a team track ownership, dependencies, and status.
- Each teammate has its own independent context/model activity, increasing token use.
- Small bug: main agent or one subagent. Independent reviews: parallel subagents. Cross-layer coordinated work: agent team.
