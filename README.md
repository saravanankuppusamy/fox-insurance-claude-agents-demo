# Fox Insurance - Claude Code Agent Demo

A small vanilla JavaScript application designed specifically for classroom demonstrations of Claude Code subagents, parallel subagents, and agent teams.

## What is included

```text
.
├── .claude/
│   ├── agents/
│   │   ├── fox-code-reviewer.md
│   │   ├── fox-feature-agent.md
│   │   ├── fox-test-agent.md
│   │   └── fox-ui-agent.md
│   └── settings.team-demo.example.json
├── demo-prompts/
│   ├── 01-single-subagent.md
│   ├── 02-two-parallel-subagents.md
│   └── 03-agent-team.md
├── docs/
│   └── INSTRUCTOR-GUIDE.md
├── src/
│   ├── app.js
│   └── quotes.js
├── tests/
│   └── quotes.test.js
├── CLAUDE.md
├── index.html
├── package.json
├── server.js
└── styles.css
```

## Prerequisites
- Node.js 18+
- Claude Code installed and authenticated
- Current Claude Code version recommended

Check your installation:

```bash
claude --version
claude doctor
```

## Run the app

```bash
npm start
```

Open `http://localhost:3000`.

## Run tests

```bash
npm test
```

## Demo sequence

### 1. One subagent
Use `demo-prompts/01-single-subagent.md`.

Concept: focused specialist, isolated context, result returned to main agent.

### 2. Two subagents in parallel
Use `demo-prompts/02-two-parallel-subagents.md`.

Concept: main agent launches two independent workers concurrently. File ownership keeps the work conflict-free.

### 3. Agent team with lead + workers
Use `demo-prompts/03-agent-team.md`.

Concept: independent teammates, leader coordination, shared tasks, and peer messaging.

## Important: agent teams are experimental
Do not enable agent teams until Demo 3. Anthropic currently requires `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1`. Once enabled, ordinary delegation behavior may differ, so a separate Claude Code session is recommended for the team demo.

## Agent configuration format
Project subagents live in `.claude/agents/` and are Markdown files with YAML frontmatter. This repo uses role definitions that can also be referenced when spawning agent-team teammates.

Example:

```yaml
---
name: fox-code-reviewer
description: Reviews Fox Insurance JavaScript for business-rule bugs and missing tests.
tools: Read, Grep, Glob
model: sonnet
---
```

The Markdown body below the frontmatter is the subagent's role/system instruction.

## Recommended class narrative

```text
Start simple -> delegate one specialty -> parallelize independent work -> form a coordinated team only when collaboration is valuable.
```

That progression helps students understand that more agents are not automatically better; the coordination model should match the task.

## Official references
- Claude Code subagents: https://code.claude.com/docs/en/sub-agents
- Claude Code agent teams: https://code.claude.com/docs/en/agent-teams
- Claude Code CLI: https://docs.anthropic.com/en/docs/claude-code/cli-usage
