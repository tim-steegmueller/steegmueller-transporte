# Contributing to Steegmüller Transporte

Thank you for your interest in contributing! This document outlines the development workflow and code quality standards for this project.

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm (comes with Node.js)
- Git

### Initial Setup

1. Clone the repository:
```bash
git clone https://github.com/tim-steegmueller/steegmueller-transporte.git
cd steegmueller-transporte/nuxt-app
```

2. Install dependencies:
```bash
npm ci
```

3. Copy environment variables:
```bash
cp .env.example .env
# Edit .env with your EmailJS credentials
```

4. Start development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`.

## 🛠️ Development Workflow

### Available Commands

```bash
# Development
npm run dev          # Start dev server with hot reload
npm run build        # Build for production
npm run generate     # Generate static site
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint checks
npm run lint:fix     # Auto-fix ESLint issues
npm run format       # Format code with Prettier
npm run format:check # Check if code is formatted
npm run typecheck    # Run TypeScript type checking
npm run validate     # Run all checks (lint + format + typecheck)

# Pre-deployment
npm run validate:deploy  # Run full validation including build test

# Cleanup
npm run clean        # Remove build artifacts and cache
```

### Code Quality Standards

This project enforces strict code quality standards:

#### 1. ESLint
- Vue 3 and Nuxt 4 best practices
- TypeScript rules
- Auto-fixes on commit via Husky

#### 2. Prettier
- Consistent code formatting
- Single quotes, no semicolons
- 100 character line length
- Auto-formats on commit via Husky

#### 3. TypeScript
- Type checking enabled
- Proper type definitions required
- No implicit `any` types

#### 4. Git Hooks
Pre-commit hooks will automatically:
- Run ESLint and auto-fix issues
- Format code with Prettier
- Block commits if errors exist

## 📝 Commit Guidelines

### Before Committing

1. **Run validation**:
```bash
npm run validate
```

2. **Test your changes**:
```bash
npm run generate
npm run preview
```

3. **Write clear commit messages**:
```bash
git commit -m "feat: add new contact form validation"
git commit -m "fix: resolve mobile navigation issue"
git commit -m "docs: update deployment guide"
```

### Commit Message Format

Follow conventional commits:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

## 🔄 Pull Request Process

1. **Create a feature branch**:
```bash
git checkout -b feature/my-new-feature
```

2. **Make your changes** following code quality standards

3. **Validate before pushing**:
```bash
npm run validate:deploy
```

4. **Push to GitHub**:
```bash
git push origin feature/my-new-feature
```

5. **Create Pull Request** on GitHub

6. **Wait for CI checks** to pass:
   - ✅ ESLint validation
   - ✅ Prettier formatting check
   - ✅ TypeScript type checking
   - ✅ Build test

## 🐛 Reporting Issues

When reporting issues, please include:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Browser/device information

## 💡 Best Practices

### Vue Components
- Use composition API with `<script setup>`
- Keep components small and focused
- Use TypeScript for props and emits
- Follow Vue style guide

### Performance
- Optimize images (use WebP/AVIF)
- Lazy load components when appropriate
- Minimize bundle size
- Use static generation (SSG)

### Accessibility
- Use semantic HTML
- Include proper ARIA labels
- Ensure keyboard navigation
- Maintain color contrast

### SEO
- Set proper meta tags
- Use structured data
- Optimize page titles
- Include alt text for images

## 🔒 Security

- Never commit secrets or API keys
- Use environment variables for sensitive data
- Follow OWASP security best practices
- Report security issues privately

## 📚 Resources

- [Nuxt 4 Documentation](https://nuxt.com)
- [Vue 3 Documentation](https://vuejs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [ESLint Rules](https://eslint.org/docs/rules/)
- [Prettier Options](https://prettier.io/docs/en/options.html)

## ❓ Questions?

If you have questions, please:
1. Check existing documentation
2. Search closed issues
3. Open a new discussion

---

**Thank you for contributing!** 🎉
