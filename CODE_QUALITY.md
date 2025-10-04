# Code Quality Standards

This document outlines the code quality standards and tooling used in the Steegmüller Transporte project.

## 🎯 Overview

We maintain high code quality standards through:
- **ESLint**: Static code analysis for Vue, TypeScript, and JavaScript
- **Prettier**: Consistent code formatting
- **TypeScript**: Type safety and better developer experience
- **Husky**: Git hooks for automated quality checks
- **Lint-staged**: Run linters on staged files only

## 📋 ESLint Configuration

### Rules
- Vue 3 and Nuxt 4 best practices
- TypeScript recommended rules
- No console statements (except warn/error)
- Prefer const over let
- Proper error handling

### Running ESLint
```bash
npm run lint           # Check for issues
npm run lint:fix       # Auto-fix issues
```

### Configuration File
`nuxt-app/eslint.config.mjs` - Flat config format for ESLint 9+

### Key Rules
```javascript
{
  'vue/multi-word-component-names': 'off',
  'vue/no-v-html': 'warn',
  '@typescript-eslint/no-explicit-any': 'warn',
  'no-console': ['warn', { allow: ['warn', 'error'] }],
  'prefer-const': 'error'
}
```

## 🎨 Prettier Configuration

### Settings
- **Quote Style**: Single quotes
- **Semicolons**: No
- **Tab Width**: 2 spaces
- **Print Width**: 100 characters
- **Trailing Commas**: None
- **Arrow Parens**: Avoid
- **End of Line**: LF

### Running Prettier
```bash
npm run format         # Format all files
npm run format:check   # Check formatting without changing
```

### Configuration File
`nuxt-app/.prettierrc`

### Ignored Files
`.prettierignore` excludes:
- node_modules
- dist
- .output
- .nuxt
- Build artifacts

## 🔷 TypeScript

### Configuration
- TypeScript strict mode: Disabled (for gradual migration)
- Type checking: Disabled during build (run separately)
- Node types included

### Running Type Checks
```bash
npm run typecheck
```

### Best Practices
- Use proper type definitions
- Avoid `any` when possible
- Use interfaces for component props
- Leverage type inference

## 🪝 Git Hooks (Husky)

### Pre-commit Hook
Automatically runs on every commit:
1. Runs ESLint with auto-fix on staged JS/TS/Vue files
2. Runs Prettier on staged files
3. Blocks commit if errors exist

### Hook Location
`nuxt-app/.husky/pre-commit`

### Bypass (Not Recommended)
```bash
git commit --no-verify
```

## 📦 Lint-staged

Runs linters only on files staged for commit, improving performance.

### Configuration
```json
{
  "lint-staged": {
    "*.{js,ts,vue}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{css,md,json}": [
      "prettier --write"
    ]
  }
}
```

## ✅ Quality Checks

### Manual Checks
```bash
npm run validate          # Run lint + format + typecheck
npm run validate:deploy   # Full validation including build
```

### CI/CD Checks
Every pull request automatically runs:
- ESLint validation
- Prettier formatting check
- TypeScript type checking
- Build test

### Deployment Checks
Every deployment to main runs:
- All PR checks
- Full build generation
- EmailJS config validation
- Health check after deployment

## 🔧 Editor Integration

### VS Code
Recommended extensions:
- ESLint
- Prettier - Code formatter
- Vue - Official
- TypeScript Vue Plugin (Volar)

Settings (`.vscode/settings.json`):
```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

### WebStorm
- Enable ESLint integration
- Enable Prettier integration
- Set Prettier as default formatter
- Enable "Run prettier on save"

## 📊 Code Quality Metrics

### Current Status
- ✅ ESLint: 0 errors, 7 warnings (acceptable)
- ✅ Prettier: All files formatted
- ✅ TypeScript: Build successful
- ✅ Pre-commit hooks: Active

### Warnings
Acceptable warnings:
- `vue/no-v-html`: Security reminder for v-html usage
- `vue/no-required-prop-with-default`: Component API patterns
- `vue/require-explicit-emits`: Event declaration best practices

## 🎯 Goals

### Short-term
- ✅ ESLint configuration
- ✅ Prettier setup
- ✅ Pre-commit hooks
- ✅ CI/CD validation
- [ ] Fix remaining ESLint warnings
- [ ] Add custom ESLint rules for project-specific patterns

### Long-term
- [ ] Enable TypeScript strict mode
- [ ] Add unit tests with Vitest
- [ ] Add E2E tests with Playwright
- [ ] Increase test coverage to 80%+
- [ ] Add performance budgets
- [ ] Implement visual regression testing

## 🚨 Common Issues

### Issue: Pre-commit hooks not running
**Solution**: Reinstall Husky
```bash
cd nuxt-app
npm run prepare
```

### Issue: ESLint errors on existing code
**Solution**: Auto-fix where possible
```bash
npm run lint:fix
```

### Issue: Prettier conflicts with ESLint
**Solution**: We use `eslint-config-prettier` to disable conflicting rules

### Issue: TypeScript errors
**Solution**: Type checking is currently non-blocking during build. Run separately:
```bash
npm run typecheck
```

## 📚 Resources

- [ESLint Documentation](https://eslint.org/)
- [Prettier Documentation](https://prettier.io/)
- [Nuxt ESLint Module](https://github.com/nuxt/eslint)
- [Husky Documentation](https://typicode.github.io/husky/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

## 🤝 Contributing

When contributing:
1. Follow the existing code style
2. Run `npm run validate` before committing
3. Let pre-commit hooks auto-fix issues
4. Fix any remaining errors manually
5. Write meaningful commit messages

See [CONTRIBUTING.md](CONTRIBUTING.md) for full guidelines.
