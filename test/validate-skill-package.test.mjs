import assert from "node:assert/strict";
import { describe, it } from "node:test";

import {
    frontmatterValue,
    linesOf,
    skillRelative,
    stripCurrentDirectoryPrefix,
    stripMatchingQuotes,
    yamlStringValue,
} from "../tools/validate-skill-package.mjs";

describe("skill package validator helpers", () => {
    it("normalizes lines from every supported newline style", () => {
        assert.deepStrictEqual(linesOf("one\r\ntwo\rthree\nfour"), [
            "one",
            "two",
            "three",
            "four",
        ]);
    });

    it("removes only matching quote pairs", () => {
        assert.equal(stripMatchingQuotes('"double"'), "double");
        assert.equal(stripMatchingQuotes("'single'"), "single");
        assert.equal(stripMatchingQuotes("'mismatch\""), "'mismatch\"");
        assert.equal(stripMatchingQuotes("plain"), "plain");
    });

    it("normalizes package-relative paths", () => {
        assert.equal(stripCurrentDirectoryPrefix("./asset.svg"), "asset.svg");
        assert.equal(stripCurrentDirectoryPrefix("asset.svg"), "asset.svg");
        assert.equal(
            skillRelative("SKILL.md"),
            "skills/git-commit-logically/SKILL.md"
        );
    });

    it("reads quoted frontmatter values and rejects malformed documents", () => {
        const markdown = [
            "---",
            "ignored line",
            'name: "git-commit-logically"',
            "description: useful: description",
            "---",
            "body",
        ].join("\n");

        assert.equal(
            frontmatterValue(markdown, "name"),
            "git-commit-logically"
        );
        assert.equal(
            frontmatterValue(markdown, "description"),
            "useful: description"
        );
        assert.equal(frontmatterValue(markdown, "missing"), undefined);
        assert.equal(frontmatterValue("body only", "name"), undefined);
        assert.equal(
            frontmatterValue("---\n---\nname: late", "name"),
            undefined
        );
    });

    it("reads YAML string values without matching longer keys", () => {
        const yaml = [
            "interface:",
            "  icon_small_extra: ignored.svg",
            "  icon_small: './assets/small.svg'",
        ].join("\n");

        assert.equal(yamlStringValue(yaml, "icon_small"), "./assets/small.svg");
        assert.equal(yamlStringValue(yaml, "icon_large"), undefined);
    });
});
