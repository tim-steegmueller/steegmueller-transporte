# Steegmüller Transporte · CLOUD.md

Ziel: Statische, schnelle Website mit Nuxt 4 und Tailwind. Hosting bei IONOS Webspace, DNS über Cloudflare. Fokus auf saubere Technik, lokale Sichtbarkeit, sichere Mailzustellung und einfache Wartung.

---

## 1) Projektüberblick

- Stack: Nuxt 4 + Tailwind, statischer Export (SSG).
- Hoster: IONOS Webspace.
- DNS: Cloudflare Proxy aktiv.
- Domain: steegmuellertransporte.de.
- Zielregion: Renningen, Böblingen, Sindelfingen, Leonberg, Stuttgart.

Empfohlene Seiten: Start, Leistungen, Über uns, Kontakt, Impressum, Datenschutz.

---

## 2) Voraussetzungen

- Node 20, npm.
- GitHub Repo mit Branch „main“.
- IONOS Webspace Zugang via SSH oder SFTP.
- Cloudflare Account mit Domain eingebunden, Proxy an (kleine Wolke orange).

---

## 3) Lokale Einrichtung

```bash
npx nuxi@latest init steegmueller
cd steegmueller
npm install
npm install -D tailwindcss postcss autoprefixer @nuxt/image @nuxtjs/sitemap @nuxtjs/robots
npx tailwindcss init -p
```

**Wichtig:** Bei bestehenden Repositories immer zuerst `cd nuxt-app` vor `npm run dev`!

`nuxt.config.ts`

```ts
export default defineNuxtConfig({
  modules: ['@nuxt/image','@nuxtjs/sitemap','@nuxtjs/robots'],
  routeRules: { '/**': { prerender: true } },
  image: { format: ['webp','avif'] },
  sitemap: { siteUrl: 'https://steegmuellertransporte.de' },
  robots: { groups: [{ userAgent: '*', allow: '/' }], sitemap: ['https://steegmuellertransporte.de/sitemap.xml'] }
})
```

`tailwind.config.ts`

```ts
export default {
  content: ['app.vue','pages/**/*.{vue,js,ts}','components/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        brand: { 500: '#2fae8b', 600: '#1f8a6e' },
        gray: { 900: '#333333', 700: '#667085', 100: '#f5f5f5' }
      }
    }
  }
}
```

`package.json`

```json
{
  "scripts": {
    "dev": "nuxt dev",
    "build": "nuxt build",
    "generate": "nuxt generate",
    "preview": "nuxt preview"
  }
}
```

---

## 4) Inhalte und Design

* H1 Startseite: „S. Steegmüller Transportdienstleistungen, Direktfahrten aus Renningen“.
* Telefon als klickbarer Button oben sichtbar.
* Drei Kurzvorteile: Direktfahrt ohne Umladen, feste Touren, schnelle Terminabstimmung.
* Echte Fahrzeugfotos verwenden, Dateien sprechend benennen, z. B. `direktfahrt-renningen-holz.jpg`.
* Alt-Texte mit Ortsbezug, z. B. „Transporter mit Holzladung in Renningen“.

---

## 5) Formular

**Formspree Startlösung**

```html
<form action="https://formspree.io/f/DEIN_ID" method="POST" class="space-y-4">
  <input name="name" required>
  <input name="phone" required>
  <input name="start" placeholder="Startort">
  <input name="ziel"  placeholder="Zielort">
  <input type="date" name="termin">
  <textarea name="message" rows="4" placeholder="Kurzbeschreibung"></textarea>
  <input name="company" class="hidden" tabindex="-1" autocomplete="off">
  <button>Anfrage senden</button>
  <p class="text-xs">Mit dem Absenden stimmen Sie der Verarbeitung laut Datenschutzhinweis zu.</p>
</form>
```

Absender: `kontakt@steegmuellertransporte.de`. Zustellsicherheit siehe Abschnitt E-Mail.

---

## 6) E-Mail, SPF, DKIM, DMARC

DNS bei Cloudflare:

* SPF
  `TXT @  v=spf1 include:_spf.perfora.net include:_spf.kundenserver.de ~all`
* DKIM
  Im IONOS Postfach aktivieren und die angezeigten CNAME/TXT-Einträge in Cloudflare übernehmen.
* DMARC
  `TXT _dmarc  v=DMARC1; p=quarantine; rua=mailto:postmaster@steegmuellertransporte.de`

Danach Testmail an einen externen Account senden und im Header prüfen, ob SPF, DKIM und DMARC „pass“ melden.

---

## 7) DNS und SSL mit Cloudflare

* Cloudflare Proxy an (orange).
* SSL/TLS Modus: **Full strict**.
* Universal SSL aktiv lassen.
* Optional Origin Certificate in IONOS hochladen für Ende-zu-Ende TLS.
* HSTS erst aktivieren, wenn alles stabil läuft.

Keine kostenpflichtigen IONOS-Zertifikate nötig.

---

## 8) Build und Deployment

**Entwicklungsserver starten:**
```bash
cd nuxt-app
npm run dev
# Website läuft unter http://localhost:3000
```

Statischer Export:

```bash
cd nuxt-app
npm run generate
# Output: .output/public
```

Upload nach IONOS, Beispiel rsync:

```bash
cd nuxt-app
rsync -avz .output/public/ user@ionos:/path/www/
```

SFTP geht auch. Danach Seite prüfen:

```bash
curl -I https://steegmuellertransporte.de | grep -E "HTTP|server|cf-ray"
```

---

## 9) Staging Umgebung (empfohlen)

* Subdomain: `staging.steegmuellertransporte.de` in Cloudflare anlegen, Proxy an.
* Separates Verzeichnis auf IONOS, gleicher Upload-Prozess.
* Robots für Staging sperren:

  ```
  User-agent: *
  Disallow: /
  ```

---

## 10) SEO Grundlagen

* Ein Title und eine Description pro Seite, lokal formuliert.
* Nur eine H1 pro Seite, klare URL-Struktur.
* Interne Verlinkung: Start → Leistungen → Kontakt.
* Sitemap und robots werden durch Nuxt Module erzeugt.
* Structured Data auf Startseite:

```html
<script type="application/ld+json">
{
 "@context":"https://schema.org",
 "@type":"LocalBusiness",
 "name":"S. Steegmüller Transportdienstleistungen",
 "url":"https://steegmuellertransporte.de",
 "telephone":"+49 172 7552023",
 "address":{"@type":"PostalAddress","streetAddress":"Kornblumenweg 13","addressLocality":"Renningen","postalCode":"71272","addressCountry":"DE"},
 "areaServed":["Renningen","Böblingen","Sindelfingen","Leonberg","Stuttgart"],
 "openingHours":"Mo-Fr 08:00-18:00"
}
</script>
```

Google Search Console: Domain-Property verifizieren und Sitemap einreichen.
Google Business Profil: Name exakt, Kategorien „Kurierdienst“ und „Transportunternehmen“, Telefonnummer, Öffnungszeiten, eigene Fotos, Bewertungen beantworten.

---

## 11) Rechtliches

* Impressum unter `/impressum` mit Inhaberin, Anschrift, Kontakt, USt-IdNr.
* Datenschutz unter `/datenschutz` mit Hinweis auf das Kontaktformular, Zweck, Rechtsgrundlage Art. 6 Abs. 1 lit. b DSGVO, Empfänger Formspree, Speicherdauer, Widerruf.

---

## 12) Performance

* `<NuxtImg>` für Bilder, Hero vorladen, übrige Bilder lazy laden.
* Maximalbreite der Bilder 1600 px, WebP oder AVIF ausspielen.
* Keine schweren Slider, Systemschriften oder Inter mit `font-display: swap`.
* Prüfen:

```bash
cd nuxt-app
npx @lhci/cli autorun --collect.url=https://steegmuellertransporte.de || true
```

---

## 13) Healthcheck und Monitoring

Aktuell ist auf der Domain noch kein Inhalt. Der Healthcheck wird erst sinnvoll, wenn die generierte Seite liegt.

**Sobald deployed:**

* einfache Health-Datei anlegen: `public/health.txt` mit dem Inhalt `OK`.
* Smoke Test:

  ```bash
  curl -I https://steegmuellertransporte.de | grep "200"
  curl -s https://steegmuellertransporte.de/health.txt | grep "OK"
  ```
* UptimeRobot Monitor anlegen:

    * Typ: HTTPS.
    * URL: `https://steegmuellertransporte.de/health.txt`
    * Intervall: 5 Minuten.
* Optional Security Header schnell prüfen:

  ```bash
  curl -sI https://steegmuellertransporte.de | grep -E "strict-transport|content-type-options|referrer-policy|x-frame-options"
  ```

---

## 14) Backlinks und lokale NAP-Konsistenz

* NAP in Footer und auf jeder Seite identisch: Name, Adresse, Telefon.
* Profile aktualisieren und Domain ergänzen: Das Örtliche, Das Telefonbuch, 11880, GoLocal, Cylex, KennstDuEinen.
* E-Mail Signatur und Rechnungen mit „https://steegmuellertransporte.de“.

---

## 15) Wartung

* Änderungen optional als Markdown via `@nuxt/content`.
* Quartalsweise: Preise, Öffnungszeiten, Bilder, Search Console Performance prüfen.
* Antworten auf Google Bewertungen kurz und sachlich.

---

## 16) Optional CI/CD mit GitHub Actions

`.github/workflows/deploy.yml`

```yaml
name: build-and-deploy
on:
  push: { branches: [main] }
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v3
        with: { version: 9 }
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: 'pnpm' }
      - run: cd nuxt-app && npm install
      - run: cd nuxt-app && npm run generate
      - name: rsync to ionos
        uses: burnett01/rsync-deployments@7.0.1
        with:
          switches: -avz --delete
          path: nuxt-app/.output/public/
          remote_path: ${{ secrets.IONOS_PATH }}
          remote_host: ${{ secrets.IONOS_HOST }}
          remote_user: ${{ secrets.IONOS_USER }}
          remote_key:  ${{ secrets.SSH_PRIVATE_KEY }}
      - name: smoke test
        run: curl -I https://steegmuellertransporte.de | grep "200"
```

---

## 17) Release Checkliste

1. DNS in Cloudflare gesetzt, Proxy an, SSL Modus Full strict.
2. SPF, DKIM, DMARC aktiv. Testheader „pass“.
3. Build erzeugt und auf IONOS hochgeladen.
4. `/health.txt` vorhanden, UptimeRobot aktiv.
5. robots.txt und sitemap.xml erreichbar.
6. Search Console verifiziert, Sitemap eingereicht.
7. Impressum und Datenschutz verlinkt.
8. Hero-Bild klein genug, LCP unter 2,5 s.
9. Telefonbutton klickbar, Formular sendet, Bestätigungsseite vorhanden.
10. Google Business Profil aktualisiert.

Hinweis zum Healthcheck: solange die Domain leer ist, zeigt der Test natürlich keinen 200 auf `/health.txt`. Lege die Datei einfach zusammen mit dem ersten Upload ab, dann funktionieren UptimeRobot und die curl-Checks sofort.