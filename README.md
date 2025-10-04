# 🚛 S. Steegmüller Transportdienstleistungen

> **Moderne, performante Website für Transportdienstleistungen aus Renningen**  
> *Direktfahrten ohne Umladen • Feste Touren • Schnelle Terminabstimmung*

[![Nuxt 4](https://img.shields.io/badge/Nuxt-4.1.2-00DC82?style=flat&logo=nuxt.js)](https://nuxt.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.0-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Vue 3](https://img.shields.io/badge/Vue-3.5.21-4FC08D?style=flat&logo=vue.js)](https://vuejs.org/)
[![License](https://img.shields.io/badge/License-Private-red?style=flat)](#)

---

## 📚 Quick Links

- **[🚀 Quick Start & Setup](SETUP.md)** - Get started in 5 minutes
- **[🤝 Contributing Guidelines](CONTRIBUTING.md)** - How to contribute
- **[✅ Code Quality Standards](CODE_QUALITY.md)** - ESLint, Prettier, TypeScript
- **[🔧 DevOps & CI/CD](DEVOPS.md)** - Deployment and workflows
- **[☁️ Cloud Infrastructure](CLOUD.md)** - IONOS, Cloudflare, DNS

---

## 🎯 **Projektübersicht**

Diese Website ist die digitale Visitenkarte für **S. Steegmüller Transportdienstleistungen** aus Renningen. Sie bietet eine moderne, schnelle und SEO-optimierte Präsentation der Transportdienstleistungen mit Fokus auf lokale Sichtbarkeit in der Region Böblingen, Sindelfingen, Leonberg und Stuttgart.

### ✨ **Features**

- 🚀 **Blazing Fast** - Statischer Export mit Nuxt 4 (SSG)
- 📱 **Responsive Design** - Optimiert für alle Geräte
- 🎨 **Modern UI** - Tailwind CSS mit Custom Brand Colors
- 🔍 **SEO Optimiert** - Structured Data, Sitemap, Meta Tags
- 📧 **Kontaktformular** - EmailJS Integration
- 🍪 **DSGVO Konform** - Cookie Banner, Datenschutz
- 🖼️ **Performance** - WebP/AVIF Bilder, Lazy Loading
- ♿ **Barrierefrei** - WCAG 2.1 AA Standards
- ✅ **Code Quality** - ESLint, Prettier, TypeScript, Husky

---

## 🛠️ **Tech Stack**

| Technologie | Version | Zweck |
|-------------|---------|-------|
| **Nuxt 4** | 4.1.2 | Vue.js Framework mit SSG |
| **Vue 3** | 3.5.21 | Progressive JavaScript Framework |
| **Tailwind CSS** | 3.4.0 | Utility-First CSS Framework |
| **@nuxt/image** | 1.11.0 | Optimierte Bilder |
| **@nuxtjs/sitemap** | 7.4.7 | Automatische Sitemap |
| **@heroicons/vue** | 2.2.0 | SVG Icons |

---

## 📁 **Projektstruktur**

```
steegmueller-transporte/
├── 📄 README.md                 # Diese Datei
├── 📄 CLOUD.md                  # Deployment & Hosting Anleitung
├── 📄 AGENTS.md                 # AI Agent Konfiguration
├── 🖼️ logo.png                  # Firmenlogo
├── 📁 nuxt-app/                 # Hauptanwendung
│   ├── 📄 nuxt.config.ts        # Nuxt Konfiguration
│   ├── 📄 package.json          # Dependencies & Scripts
│   ├── 📄 tailwind.config.js    # Tailwind Konfiguration
│   ├── 📁 pages/                # Vue Pages (Routing)
│   │   ├── 📄 index.vue         # Startseite
│   │   ├── 📄 impressum.vue     # Impressum
│   │   ├── 📄 datenschutz.vue   # Datenschutz
│   │   ├── 📁 blog/             # Blog Artikel
│   │   └── 📁 transport-*/      # Regionale Transportseiten
│   ├── 📁 components/           # Vue Komponenten
│   │   └── 📄 CookieBanner.vue  # DSGVO Cookie Banner
│   ├── 📁 layouts/              # Layout Templates
│   │   └── 📄 default.vue       # Standard Layout
│   ├── 📁 assets/               # CSS, Fonts, etc.
│   │   └── 📁 css/
│   │       └── 📄 main.css      # Hauptstyles
│   ├── 📁 public/               # Statische Assets
│   │   ├── 📁 images/           # Bilder & Fotos
│   │   │   ├── 📁 transport/    # Transport Fotos
│   │   │   ├── 📁 logos/        # Logos
│   │   │   └── 📁 favicons/     # Favicons
│   │   └── 📄 robots.txt        # SEO Robots
│   └── 📁 composables/          # Vue Composables
└── 📄 .gitignore                # Git Ignore Rules
```

---

## 🚀 **Quick Start**

### **Voraussetzungen**
- Node.js 20+
- pnpm 9+
- Git

### **Installation**

```bash
# Repository klonen
git clone https://github.com/tim-steegmueller/steegmueller-transporte.git
cd steegmueller-transporte/nuxt-app

# Dependencies installieren
npm ci

# Environment Variables einrichten
cp .env.example .env
# Bearbeite .env mit deinen EmailJS Credentials

# Entwicklungsserver starten
npm run dev
```

Die Website ist dann unter `http://localhost:3000` erreichbar.

### **Build & Deploy**

```bash
# Statischen Build erstellen
npm run generate

# Build testen
npm run preview

# Output liegt in: .output/public/
```

### **Code Quality**

```bash
# Linting
npm run lint          # ESLint prüfen
npm run lint:fix      # ESLint auto-fix

# Formatting
npm run format        # Code formatieren
npm run format:check  # Formatierung prüfen

# Type Checking
npm run typecheck     # TypeScript prüfen

# Alles zusammen
npm run validate      # Lint + Format + Typecheck

# Pre-Deployment Validation
npm run validate:deploy  # Vollständige Prüfung inkl. Build
```

---

## 🎨 **Design System**

### **Brand Colors**
```css
--brand-500: #2fae8b  /* Hauptfarbe */
--brand-600: #1f8a6e  /* Dunklere Variante */
--gray-900: #333333   /* Text */
--gray-700: #667085   /* Sekundärer Text */
--gray-100: #f5f5f5   /* Hintergrund */
```

### **Typography**
- **Headings**: System Font Stack
- **Body**: System Font Stack
- **Font Display**: `swap` für Performance

### **Breakpoints**
- `xs`: 320px
- `sm`: 640px  
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `xxl`: 1536px

---

## 📄 **Seitenübersicht**

| Seite | Route | Beschreibung |
|-------|-------|--------------|
| **Startseite** | `/` | Hero, Services, Kontakt |
| **Impressum** | `/impressum` | Rechtliche Angaben |
| **Datenschutz** | `/datenschutz` | DSGVO Informationen |
| **Blog** | `/blog` | Transport-Tipps & News |
| **Regionale Transporte** | `/transport-*` | Spezifische Routen |

---

## 🔧 **Konfiguration**

### **Umgebungsvariablen**
```bash
# .env (nicht im Repo)
NUXT_PUBLIC_SITE_URL=https://steegmuellertransporte.de
NUXT_PUBLIC_FORMSPREE_ID=your_formspree_id
```

### **Nuxt Config Highlights**
- ✅ **SSG**: Alle Seiten werden statisch generiert
- ✅ **Image Optimization**: WebP/AVIF mit Lazy Loading
- ✅ **SEO**: Automatische Sitemap & Meta Tags
- ✅ **Performance**: Code Splitting & Compression

---

## 📈 **Performance**

### **Lighthouse Scores** (Ziel)
- 🟢 **Performance**: 95+
- 🟢 **Accessibility**: 100
- 🟢 **Best Practices**: 100
- 🟢 **SEO**: 100

### **Optimierungen**
- Statischer Export (SSG)
- Bildoptimierung (WebP/AVIF)
- Code Splitting
- Lazy Loading
- Gzip/Brotli Compression

---

## 🚀 **Deployment**

### **Automatisches Deployment via GitHub Actions**

Bei jedem Push auf `main` wird automatisch deployed:
1. ✅ Code Quality Checks (ESLint, Prettier, TypeScript)
2. ✅ Build erstellen
3. ✅ Upload zu IONOS via SFTP
4. ✅ Health Check

### **Manuelles Deployment**

```bash
# Build erstellen
npm run generate

# Upload via rsync
rsync -avz .output/public/ user@ionos:/path/www/
```

### **GitHub Actions** (Automatisch)
Siehe `.github/workflows/deploy.yml` für automatisches Deployment.

### **Cloudflare** (DNS & SSL)
- Proxy aktiviert (orange Wolke)
- SSL/TLS: Full Strict
- Performance Optimierungen

---

## 📊 **SEO & Marketing**

### **Structured Data**
- LocalBusiness Schema
- Contact Information
- Service Areas
- Opening Hours

### **Lokale SEO**
- NAP Konsistenz (Name, Adresse, Telefon)
- Google Business Profil
- Lokale Verzeichnisse
- Regionale Keywords

### **Content Strategy**
- Blog für Transport-Tipps
- Regionale Landing Pages
- FAQ Section
- Kundenstimmen

---

## 🔒 **Sicherheit & DSGVO**

### **Datenschutz**
- ✅ Cookie Banner
- ✅ Datenschutzerklärung
- ✅ Formspree Integration
- ✅ Keine Analytics ohne Einwilligung

### **Sicherheit**
- ✅ HTTPS Only
- ✅ Security Headers
- ✅ CSP (Content Security Policy)
- ✅ Form Validation

---

## 🛠️ **Development**

### **Scripts**
```bash
pnpm dev          # Entwicklungsserver
pnpm build        # Production Build
pnpm generate     # Statischer Export
pnpm preview      # Build Preview
pnpm clean        # Cache löschen
```

### **Code Quality**
- ✅ ESLint mit Vue/Nuxt Rules
- ✅ Prettier für Code Formatting
- ✅ TypeScript Type Checking
- ✅ Husky Pre-commit Hooks
- ✅ Lint-staged für staged files

---

## 📞 **Kontakt & Support**

### **Projekt Owner**
- **Name**: Tim
- **GitHub**: [@tim-steegmueller](https://github.com/tim-steegmueller)

### **Transport Service**
- **Firma**: S. Steegmüller Transportdienstleistungen
- **Telefon**: +49 172 7552023
- **Adresse**: Kornblumenweg 13, 71272 Renningen
- **Website**: [steegmuellertransporte.de](https://steegmuellertransporte.de)

---

## 📝 **Changelog**

### **v1.0.0** - Initial Release
- ✅ Nuxt 4 + Tailwind Setup
- ✅ Responsive Design
- ✅ SEO Optimierung
- ✅ Kontaktformular
- ✅ Blog System
- ✅ Regionale Landing Pages

---

## 📄 **Lizenz**

Dieses Projekt ist **privat** und gehört S. Steegmüller Transportdienstleistungen.  
Keine Weitergabe oder kommerzielle Nutzung ohne Erlaubnis.

---

<div align="center">

**🚛 Made with ❤️ for S. Steegmüller Transportdienstleistungen**

*Direktfahrten aus Renningen • Schnell • Zuverlässig • Professionell*

</div>
