#!/bin/bash

# This script will fix Prettier formatting issues in your project
# while ignoring the problematic files that are already excluded in .prettierignore

echo "🔍 Starting Prettier auto-fix process..."

# Format all JavaScript and TypeScript files
echo "✨ Formatting JavaScript and TypeScript files..."
pnpm prettier --write "src/**/*.{js,jsx,ts,tsx}" --loglevel warn

# Format all JSON files
echo "✨ Formatting JSON files..."
pnpm prettier --write "**/*.json" --loglevel warn

# Format all CSS files
echo "✨ Formatting CSS files..."
pnpm prettier --write "src/**/*.{css,scss}" --loglevel warn

echo "✅ Prettier formatting completed!"
echo "🚀 You can now run 'pnpm build' to check if all issues are resolved."
