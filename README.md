# Git Commit Logically Skill

[![npm version.](https://flat.badgen.net/npm/v/git-commit-logically-skill?color=cyan)](https://www.npmjs.com/package/git-commit-logically-skill) [![npm license.](https://flat.badgen.net/npm/license/git-commit-logically-skill?color=purple)](https://github.com/Nick2bad4u/git-commit-logically/blob/main/LICENSE) [![npm total downloads.](https://flat.badgen.net/npm/dt/git-commit-logically-skill?color=pink)](https://www.npmjs.com/package/git-commit-logically-skill) [![latest GitHub release.](https://flat.badgen.net/github/release/Nick2bad4u/git-commit-logically?color=cyan)](https://github.com/Nick2bad4u/git-commit-logically/releases) [![GitHub stars.](https://flat.badgen.net/github/stars/Nick2bad4u/git-commit-logically?color=yellow)](https://github.com/Nick2bad4u/git-commit-logically/stargazers) [![GitHub forks.](https://flat.badgen.net/github/forks/Nick2bad4u/git-commit-logically?color=green)](https://github.com/Nick2bad4u/git-commit-logically/forks) [![GitHub open issues.](https://flat.badgen.net/github/open-issues/Nick2bad4u/git-commit-logically?color=red)](https://github.com/Nick2bad4u/git-commit-logically/issues) [![GitHub PRs.](https://flat.badgen.net/github/open-prs/Nick2bad4u/git-commit-logically?color=orange)](https://github.com/Nick2bad4u/git-commit-logically/pulls?q=sort%3Aupdated-desc+is%3Apr+is%3Aopen) [![GitHub Dependabot](https://flat.badgen.net/github/dependabot/Nick2bad4u/git-commit-logically?color=blue)](https://github.com/Nick2bad4u/git-commit-logically/network/updates)

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
