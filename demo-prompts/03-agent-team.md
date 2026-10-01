# Demo 3 - Agent Team: Leader + Worker Agents

## Teaching goal
Show a team lead coordinating multiple independent Claude Code teammates that can own tasks, communicate, and contribute to a shared goal.

## Reset recommendation
Run this demo from a fresh clone or after restoring the starter files so students can clearly see the team build the enhancement.

## Enable agent teams
Agent teams are experimental and disabled by default.

### macOS / Linux / WSL
```bash
CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1 claude
```

### Windows PowerShell
```powershell
$env:CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS="1"
claude
```

For a persistent example, see `.claude/settings.team-demo.example.json`. Do not rename it to `settings.json` until you are ready for the team demo, because enabling teams can change ordinary delegation behavior.

## Live prompt
```text
Create an AGENT TEAM for this Fox Insurance enhancement. You are the team lead.

Goal: add a small Claims Status feature without changing the quote feature behavior.

Create exactly three worker teammates with predictable names and use these project agent types:

- claims-feature: use fox-feature-agent. Own new file src/claims.js. Implement a small in-memory list of claims and functions to list claims and get a claim by id.
- claims-ui: use fox-ui-agent. Own new file src/claimsView.js and add only the minimum required claims section to index.html. Coordinate with claims-feature on the function contract before integrating.
- claims-tests: use fox-test-agent. Own new file tests/claims.test.js. Coordinate with claims-feature on expected behavior and write tests for found/not-found claim lookup.

Requirements:
- Use a shared task list.
- Workers should communicate directly when they need interface details.
- Avoid editing the same file except claims-ui may edit index.html.
- The lead should monitor progress, resolve questions, and synthesize the result.
- After all workers report completion, run npm test and summarize the team's work.
```

## What students should observe
- One session acts as team lead.
- Three teammates run with separate context windows.
- Teammates have stable names you can address.
- Team coordination uses shared tasks where available.
- Teammates can message each other directly rather than routing every detail through the lead.
- The lead waits for workers and synthesizes final results.

## Optional interaction during the demo
Use the teammate panel to select a teammate, open its transcript, and send a direct message such as:

```text
Keep the claims API very small: listClaims() and getClaimById(id) only.
```

Then return to the lead and ask:

```text
Give me a status summary: completed tasks, active tasks, blockers, and which teammate owns each item.
```

## Instructor talking point
Use agent teams when workers need coordination, shared ownership visibility, or direct peer communication. They cost more tokens and add coordination overhead, so they are not the default for every coding task.
