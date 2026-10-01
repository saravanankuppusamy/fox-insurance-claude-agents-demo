# Demo 2 - Two Subagents in Parallel

## Teaching goal
Show two independent specialists working concurrently inside one Claude Code session.

## Important setup
Do NOT enable experimental agent teams for this demo. Start a normal Claude Code session:

```bash
claude
```

## Live prompt
```text
Delegate these two independent tasks to exactly two project subagents and run them in parallel. Do not create an agent team.

1. Use fox-ui-agent. It may edit ONLY styles.css. Improve the quote page's responsive layout, keyboard focus visibility, and readability. Do not change HTML or JavaScript.

2. Use fox-test-agent. It may edit ONLY tests/quotes.test.js. Add tests for the 10% bundle discount and at least two useful edge cases. Run npm test and report the result.

Wait for both subagents, then summarize what each changed. Do not fix src/quotes.js yet.
```

## Expected classroom result
- UI agent updates `styles.css`.
- Test agent updates `tests/quotes.test.js`.
- Both tasks can proceed independently because they own different files.
- New bundle-discount test should fail, revealing the intentional implementation defect.

## Follow-up prompt
```text
Now, as the main agent, use the two subagent reports. Fix only the bundle-discount defect in src/quotes.js, run npm test, and explain how the parallel work accelerated the task.
```

## Instructor talking point
Parallel subagents are still coordinated by the main session. They are not an autonomous team with a shared task list and peer-to-peer collaboration.
