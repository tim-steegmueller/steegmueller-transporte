# Development Setup & Quick Start

Quick reference guide for developers working on the Steegmüller Transporte website.

## 🚀 Quick Start

### First Time Setup

```bash
# 1. Clone the repository
git clone https://github.com/tim-steegmueller/steegmueller-transporte.git
cd steegmueller-transporte/nuxt-app

# 2. Install dependencies
npm ci

# 3. Set up environment variables
cp .env.example .env
# Edit .env with your EmailJS credentials

# 4. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📋 Common Commands

### Development
```bash
npm run dev          # Start dev server with hot reload
npm run build        # Build for production
npm run generate     # Generate static site (SSG)
npm run preview      # Preview production build
```

### Code Quality
```bash
npm run lint         # Check for ESLint issues
npm run lint:fix     # Auto-fix ESLint issues
npm run format       # Format code with Prettier
npm run format:check # Check if code is formatted
npm run typecheck    # Run TypeScript type checking
```

### Validation
```bash
npm run validate        # Quick: lint + format + typecheck
npm run validate:deploy # Full: validation + build test
```

### Cleanup
```bash
npm run clean        # Remove build artifacts and cache
```

## 🔄 Git Workflow

### Create a Feature Branch
```bash
git checkout -b feature/my-feature
```

### Make Changes
1. Write your code
2. Pre-commit hooks will automatically:
   - Run ESLint and auto-fix
   - Format code with Prettier
   - Prevent commit if errors exist

### Before Pushing
```bash
# Validate everything
npm run validate:deploy
```

### Push Changes
```bash
git push origin feature/my-feature
```

### Create Pull Request
- Go to GitHub and create PR
- Wait for CI checks to pass:
  - ✅ ESLint
  - ✅ Prettier
  - ✅ TypeScript
  - ✅ Build test

## 🛠️ Tools Overview

### ESLint
- **Purpose**: Find and fix code issues
- **Config**: `eslint.config.mjs`
- **Auto-fix**: Runs on commit
- **Current Status**: 0 errors, 104 warnings

### Prettier
- **Purpose**: Consistent code formatting
- **Config**: `.prettierrc`
- **Format**: Single quotes, no semicolons, 100 char width
- **Auto-format**: Runs on commit

### TypeScript
- **Purpose**: Type safety
- **Config**: `tsconfig.json`
- **Type Check**: `npm run typecheck`

### Husky + Lint-staged
- **Purpose**: Pre-commit validation
- **Config**: `.husky/pre-commit`
- **Runs**: ESLint + Prettier on staged files

## 📁 Project Structure

```
steegmueller-transporte/
├── .github/
│   └── workflows/         # CI/CD workflows
│       ├── pr-validation.yml
│       └── deploy.yml
├── nuxt-app/              # Main application
│   ├── components/        # Vue components
│   ├── pages/            # Route pages
│   ├── layouts/          # Layout templates
│   ├── assets/           # CSS, images
│   ├── public/           # Static files
│   ├── plugins/          # Nuxt plugins
│   └── composables/      # Vue composables
├── CONTRIBUTING.md        # Contribution guidelines
├── CODE_QUALITY.md        # Code quality standards
├── DEVOPS.md             # CI/CD documentation
└── README.md             # Main documentation
```

## 🐛 Troubleshooting

### Pre-commit hooks not running?
```bash
cd nuxt-app
npm run prepare
```

### Build failing?
```bash
# Clean and rebuild
npm run clean
npm ci
npm run generate
```

### Type errors?
```bash
# Type checking is informational during development
npm run typecheck
```

### Format issues?
```bash
# Auto-format all files
npm run format
```

## 📚 Documentation

- **[CONTRIBUTING.md](CONTRIBUTING.md)** - How to contribute
- **[CODE_QUALITY.md](CODE_QUALITY.md)** - Code standards
- **[DEVOPS.md](DEVOPS.md)** - CI/CD and deployment
- **[CLOUD.md](CLOUD.md)** - Cloud infrastructure
- **[README.md](README.md)** - Project overview

## 🎯 Code Quality Standards

### File Checklist
- [ ] ESLint clean (no errors)
- [ ] Prettier formatted
- [ ] TypeScript types correct
- [ ] No console.log (use console.warn/error)
- [ ] Components use Composition API (`<script setup>`)
- [ ] Images optimized (WebP/AVIF)
- [ ] Alt text on images
- [ ] Proper semantic HTML

### Component Checklist
- [ ] Single responsibility
- [ ] Props properly typed
- [ ] Emits declared
- [ ] Accessible (ARIA labels)
- [ ] Responsive design
- [ ] Performance optimized

## 🚀 Deployment

### Automatic (Recommended)
1. Push to `main` branch
2. CI/CD automatically:
   - Validates code
   - Builds site
   - Deploys to IONOS
   - Runs health check

### Manual
```bash
# 1. Validate
npm run validate:deploy

# 2. Build
npm run generate

# 3. Upload .output/public/ to IONOS via SFTP
```

## ⚡ Performance Tips

- Use `<NuxtImg>` for images
- Lazy load components: `defineAsyncComponent()`
- Keep bundle size under 300KB
- Use static generation (SSG)
- Optimize images before committing

## 🔒 Security

- Never commit secrets
- Use environment variables
- Follow CSP headers
- Sanitize user input
- Use HTTPS only

## 📞 Getting Help

1. Check [CONTRIBUTING.md](CONTRIBUTING.md)
2. Search closed issues
3. Ask in discussions
4. Contact maintainers

---

**Last Updated**: January 2025
**Quick Setup Time**: ~5 minutes
**Happy Coding!** 🎉
