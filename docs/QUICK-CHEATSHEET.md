# Claude Code Agent Demo - Quick Cheat Sheet

| Pattern | Mental model | Best fit in this repo | Coordination |
|---|---|---|---|
| One subagent | Main agent -> specialist -> report | Review `src/quotes.js` | Main agent controls task |
| Two parallel subagents | Main agent -> worker A + worker B | UI styling + quote tests | Main agent launches/waits/synthesizes |
| Agent team | Team lead <-> multiple teammates | Claims feature across logic/UI/tests | Shared tasks + direct teammate messaging |

## Demo 1 prompt
```text
Use the fox-code-reviewer subagent to review only src/quotes.js against the business rules in CLAUDE.md. Do not edit anything. Ask the subagent to identify correctness problems and missing tests, then summarize its findings for me.
```

## Demo 2 prompt
```text
Delegate these two independent tasks to exactly two project subagents and run them in parallel. Do not create an agent team.
1) fox-ui-agent: edit ONLY styles.css for responsive layout, focus visibility, readability.
2) fox-test-agent: edit ONLY tests/quotes.test.js; add bundle-discount and edge-case tests; run npm test.
Wait for both, summarize each result, and do not fix src/quotes.js yet.
```

## Demo 3 start command
macOS/Linux/WSL:
```bash
CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1 claude
```

Windows PowerShell:
```powershell
$env:CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS="1"
claude
```

Then use the full team prompt in `demo-prompts/03-agent-team.md`.

## Key class message
**More agents != automatically better.**
Use one subagent for focused isolated work, parallel subagents for independent workstreams, and a team when workers genuinely benefit from coordination and peer communication.
