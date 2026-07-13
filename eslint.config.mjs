import { createConfig } from "eslint-config-nick2bad4u";

/** @type {import("eslint").Linter.Config[]} */
const config = [
    {
        ignores: ["tools/**/*.mjs"],
        name: "Local validation tools",
    },
    ...createConfig(),
    {
        rules: {
            "copilot/require-skill-file-location": "off",
            "repo-compliance/require-release-config-file": "off",
        },
    },
    {
        files: ["skills/**/*.md", ".github/pull_request_template.md"],
        rules: {
            "remark/remark": "off",
        },
    },
    {
        files: ["**/*.{js,mjs,cjs}"],
        rules: {
            "@typescript-eslint/no-unnecessary-boolean-literal-compare": "off",
            "@typescript-eslint/no-unnecessary-condition": "off",
            "@typescript-eslint/no-unsafe-assignment": "off",
            "@typescript-eslint/no-useless-default-assignment": "off",
            "@typescript-eslint/prefer-nullish-coalescing": "off",
            "@typescript-eslint/strict-boolean-expressions": "off",
        },
    },
];

export default config;
