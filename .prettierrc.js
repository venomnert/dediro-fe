module.exports = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: "es5",
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: "always",
  endOfLine: "lf",
  // This will make Prettier ignore specific files or patterns
  overrides: [
    {
      files: [
        "src/constants/SYNTHESIS_STRUCTURE_MINI.js",
        "src/constants/SYNTHESIS_STRUCTURE.js"
      ],
      options: {
        // Completely disable formatting for these files
        parser: "babel",
        requirePragma: true,
        insertPragma: false
      }
    }
  ]
};
