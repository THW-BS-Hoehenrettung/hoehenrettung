module.exports = {
  extends: ["plugin:astro/recommended", "prettier"],
  plugins: ["prettier"],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      // If using TypeScript
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
        project: "tsconfig.json",
        tsconfigRootDir: __dirname,
      },
    },
  ],
  rules: {
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
  },
};
