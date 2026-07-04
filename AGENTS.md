# Git Commit Logically Skill Guidance

This repository packages the `git-commit-logically` Codex/open-agent skill. Keep changes focused on `skills/git-commit-logically` and small packaging metadata.

## Scope

- Treat `skills/git-commit-logically/SKILL.md` as the skill entrypoint.
- Keep `skills/git-commit-logically/agents/openai.yaml`, `skills/git-commit-logically/assets/`, and `skills/git-commit-logically/LICENSE.txt` synchronized with the packaged skill.
- Do not add scripts that automatically stage or commit arbitrary changes.

## Validation

Run the narrowest useful checks after edits:

```powershell
python "C:\Users\Nick\.codex\skills\.system\skill-creator\scripts\quick_validate.py" .\skills\git-commit-logically
npm run release:verify
```

## Style

- Keep the skill procedural and concise.
- Prefer explicit git commands over vague advice.
- Preserve the hard requirements: no push, no empty commits, no destructive cleanup, and repository commit-message rules first.
