# Git Commit Logically Skill

An open-agent skill for committing outstanding git changes into coherent local commits.

This repository provides:

- a reusable `git-commit-logically` skill (`SKILL.md`)
- OpenAI-compatible display metadata in `agents/openai.yaml`
- package metadata for local validation and installation through `npx skills`

## What This Skill Does

The skill guides Codex to inspect the current worktree, read repository commit-message rules, split outstanding changes by purpose, create local commits, and report the final status. It explicitly avoids pushing, reverting user changes, or creating empty commits.

## Repository Layout

```text
SKILL.md
agents/
  openai.yaml
assets/
  git-commit-logically-small.svg
  git-commit-logically.svg
README.md
CONTRIBUTING.md
SECURITY.md
CHANGELOG.md
```

## Installation

Install from a local checkout:

```powershell
npx skills add . -g --agent universal -y
```

Install from GitHub after publishing the repository:

```powershell
npx skills add Nick2bad4u/git-commit-logically -g --agent universal -y
```

## Validation

```powershell
python "C:\Users\Nick\.codex\skills\.system\skill-creator\scripts\quick_validate.py" .
npm run release:verify
```
