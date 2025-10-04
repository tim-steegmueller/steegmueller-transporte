# 🚀 SEO & Performance Checklist - Steegmüller Transporte

## ✅ Bereits implementiert

### 📊 Technical SEO
- ✅ **Meta Tags**: robots, googlebot, author, generator
- ✅ **Open Graph**: og:site_name, og:locale, og:type
- ✅ **Twitter Cards**: twitter:site, twitter:creator
- ✅ **Canonical URLs**: https://steegmuellertransporte.de
- ✅ **Hreflang**: de
- ✅ **Sitemap**: @nuxtjs/sitemap module aktiv
- ✅ **Robots.txt**: @nuxtjs/robots module aktiv
- ✅ **Structured Data**: Schema.org LocalBusiness (sollte vorhanden sein)

### ⚡ Performance
- ✅ **Image Optimization**: WebP Format (alle Bilder konvertiert)
- ✅ **Code Splitting**: CSS & JS chunks
- ✅ **Compression**: Gzip/Deflate aktiv
- ✅ **Caching Headers**: .htaccess mit 1 year für Assets
- ✅ **DNS Prefetch**: fonts.googleapis.com, google-analytics.com
- ✅ **Lazy Loading**: Bilder außer erstem Slide

### 🔒 Security Headers
- ✅ **CSP**: Content-Security-Policy gesetzt
- ✅ **X-Frame-Options**: DENY
- ✅ **X-Content-Type-Options**: nosniff
- ✅ **Referrer-Policy**: strict-origin-when-cross-origin

## 🎯 Empfohlene Verbesserungen

### 1. **Google Search Console einrichten**
```
1. Gehe zu: https://search.google.com/search-console
2. Property hinzufügen: steegmuellertransporte.de
3. Sitemap einreichen: https://steegmuellertransporte.de/sitemap.xml
4. Index-Status überwachen
```

### 2. **Google Business Profile**
```
- Erstelle/Optimiere Google My Business
- Adresse: Kornblumenweg 13, 71272 Renningen
- Kategorien: Transportunternehmen, Kurierdienst, Umzugsunternehmen
- Öffnungszeiten: Mo-Fr 08:00-18:00
- Fotos: LKW, Transporter, Team
- Rezensionen sammeln!
```

### 3. **Local SEO Keywords** (bereits gut, noch optimieren)
Haupt-Keywords:
- ✅ Transport Renningen
- ✅ Direktfahrt Stuttgart
- ✅ Express Lieferung Böblingen
- ✅ Same-Day Delivery Leonberg
- ✅ Notfall Transport Sindelfingen

Noch ergänzen:
- Kurierdienst Renningen
- Spedition Leonberg
- Eilzustellung Stuttgart
- Transportunternehmen Böblingen

### 4. **Performance Optimierungen**
```javascript
// nuxt.config.ts - noch hinzufügen:
experimental: {
  payloadExtraction: true,
  renderJsonPayloads: true,
  treeshakeClientOnly: true
}
```

### 5. **Favicon & App Icons fehlen!**
```
Erstellen:
- favicon.ico (32x32)
- apple-touch-icon.png (180x180)
- favicon-16x16.png
- favicon-32x32.png
- android-chrome-192x192.png
- android-chrome-512x512.png
```

### 6. **Structured Data erweitern**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "S. Steegmüller Transportdienstleistungen",
  "image": "https://steegmuellertransporte.de/logo.png",
  "@id": "https://steegmuellertransporte.de",
  "url": "https://steegmuellertransporte.de",
  "telephone": "+491727552023",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Kornblumenweg 13",
    "addressLocality": "Renningen",
    "postalCode": "71272",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 48.7667,
    "longitude": 8.9333
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "08:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.facebook.com/steegmuellertransporte",
    "https://www.instagram.com/steegmuellertransporte"
  ]
}
</script>
```

### 7. **Meta Description überprüfen**
Jede Seite sollte unique Meta Description haben (max 155 Zeichen):
```javascript
// Beispiel für index.vue
useHead({
  meta: [
    {
      name: 'description',
      content: 'Express-Transporte & Direktfahrten in Renningen, Stuttgart, Böblingen, Leonberg. Same-Day Delivery ✓ Notfall-Service ✓ Seit 1985 ☎ 0172 755 20 23'
    }
  ]
})
```

### 8. **Bildoptimierung weiter verbessern**
```javascript
// @nuxt/image module nutzen:
<NuxtImg
  src="/images/transport/transporter.webp"
  alt="Transport Renningen"
  format="webp,avif"
  width="800"
  height="600"
  loading="lazy"
  quality="85"
/>
```

### 9. **Lighthouse Score Ziel**
Vor Deployment testen:
```bash
npm run build
npm run preview
# Dann Lighthouse in Chrome DevTools
```

**Ziel-Scores:**
- Performance: >90
- Accessibility: >95
- Best Practices: >95
- SEO: 100

### 10. **Social Media einrichten**
- Facebook Business Seite
- Instagram Business
- Google My Business
- Verlinkungen in Footer & Structured Data

## 🔍 Tools zum Testen

1. **Google PageSpeed Insights**
   https://pagespeed.web.dev/?url=steegmuellertransporte.de

2. **Google Search Console**
   https://search.google.com/search-console

3. **Screaming Frog SEO Spider**
   Crawle die Seite nach Fehlern

4. **GTmetrix**
   https://gtmetrix.com/

5. **Lighthouse in Chrome DevTools**
   F12 → Lighthouse Tab

## 📈 Tracking einrichten

```javascript
// Google Analytics 4
// In nuxt.config.ts oder als Plugin
{
  head: {
    script: [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX',
        async: true
      }
    ]
  }
}
```

## 🎯 Quick Wins nach Deployment

1. ✅ Google Search Console Property erstellen
2. ✅ Sitemap einreichen
3. ✅ Google My Business optimieren
4. ✅ Backlinks von Branchenverzeichnissen:
   - gelbeseiten.de
   - meinestadt.de
   - 11880.com
   - marktplatz-mittelstand.de

## 📝 Content SEO Tipps

1. **Blog regelmäßig updaten** (min. 1x/Monat)
2. **Lokale Keywords verwenden**: "Transport Renningen", "Kurier Böblingen"
3. **FAQ erweitern**: Oft gestellte Fragen = Featured Snippets
4. **Kundenbewertungen** auf Google My Business sammeln
5. **Case Studies** von erfolgreichen Transporten

---

✅ **Priorität 1 (sofort):**
- Google Search Console
- Google My Business
- Meta Descriptions checken

✅ **Priorität 2 (diese Woche):**
- Favicons erstellen
- Structured Data erweitern
- Lighthouse Test

✅ **Priorität 3 (nächsten 2 Wochen):**
- Social Media aufbauen
- Backlinks generieren
- Content Marketing starten
