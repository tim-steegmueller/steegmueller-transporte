#!/usr/bin/env bash
# Pre-deployment validation script
# Run this before deploying to catch issues early

set -e

echo "🔍 Starting pre-deployment validation..."
echo ""

# Change to nuxt-app directory
cd "$(dirname "$0")/.."

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
  echo "❌ node_modules not found. Run 'npm install' first."
  exit 1
fi

# Run linting
echo "1️⃣  Running ESLint..."
npm run lint || {
  echo "❌ Linting failed. Fix errors before deploying."
  exit 1
}
echo "✅ Linting passed"
echo ""

# Check formatting
echo "2️⃣  Checking code formatting..."
npm run format:check || {
  echo "❌ Code formatting issues found. Run 'npm run format' to fix."
  exit 1
}
echo "✅ Formatting check passed"
echo ""

# Type checking
echo "3️⃣  Running TypeScript type check..."
npm run typecheck || {
  echo "❌ Type checking failed. Fix type errors before deploying."
  exit 1
}
echo "✅ Type checking passed"
echo ""

# Test build
echo "4️⃣  Testing production build..."
export NUXT_PUBLIC_EMAILJS_PUBLIC_KEY="${NUXT_PUBLIC_EMAILJS_PUBLIC_KEY:-test_key}"
export NUXT_PUBLIC_EMAILJS_SERVICE_ID="${NUXT_PUBLIC_EMAILJS_SERVICE_ID:-test_service}"
export NUXT_PUBLIC_EMAILJS_TEMPLATE_ID="${NUXT_PUBLIC_EMAILJS_TEMPLATE_ID:-test_template}"

npm run generate || {
  echo "❌ Build failed. Fix build errors before deploying."
  exit 1
}
echo "✅ Build successful"
echo ""

# Verify output exists
if [ ! -f ".output/public/index.html" ]; then
  echo "❌ Build output missing index.html"
  exit 1
fi
echo "✅ Build output verified"
echo ""

# Check output size
OUTPUT_SIZE=$(du -sh .output/public | cut -f1)
echo "📦 Build output size: $OUTPUT_SIZE"
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ All pre-deployment checks passed!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Ready to deploy 🚀"
