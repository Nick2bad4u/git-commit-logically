# Git Commit Logically Skill Guidance

This repository packages the `git-commit-logically` Codex/open-agent skill. Keep changes focused on the root skill payload and small packaging metadata.

## Scope

- Treat `SKILL.md` as the skill entrypoint.
- Keep `agents/openai.yaml`, `assets/`, and `LICENSE.txt` synchronized with the packaged skill.
- Do not add scripts that automatically stage or commit arbitrary changes.

## Validation

Run the narrowest useful checks after edits:

```powershell
python "C:\Users\Nick\.codex\skills\.system\skill-creator\scripts\quick_validate.py" .
npm run release:verify
```

## Style

- Keep the skill procedural and concise.
- Prefer explicit git commands over vague advice.
- Preserve the hard requirements: no push, no empty commits, no destructive cleanup, and repository commit-message rules first.
