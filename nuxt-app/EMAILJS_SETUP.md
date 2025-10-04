# EmailJS Setup für Steegmüller Transporte

## 📧 Schritt-für-Schritt Anleitung

### 1. EmailJS Account erstellen

1. Gehe zu: https://dashboard.emailjs.com/sign-up
2. Registriere dich mit: `wswsteegmueller@gmail.com`
3. Bestätige die E-Mail

### 2. Email Service verbinden

1. Klicke auf **"Email Services"** → **"Add New Service"**
2. Wähle **"Gmail"**
3. Klicke auf **"Connect Account"**
4. Logge dich mit `wswsteegmueller@gmail.com` ein
5. Erlaube EmailJS den Zugriff
6. **Kopiere die Service ID** (z.B. `service_abc123`)

### 3. Email Template erstellen

1. Klicke auf **"Email Templates"** → **"Create New Template"**
2. Template Name: `Transportanfrage Steegmüller`

**Template Settings:**

- **To Email:** `info@steegmuellertransporte.de`
- **From Name:** `Steegmüller Transporte Webformular`
- **Reply To:** `{{reply_to}}`
- **Subject:** `🚚 Neue Transportanfrage von {{from_name}}`

**Template Content:**

- Kopiere den Inhalt aus `EMAILJS_TEMPLATE.html` in das Template
- Oder verwende die **kompakte Text-Version** unten

3. Klicke auf **"Save"**
4. **Kopiere die Template ID** (z.B. `template_xyz789`)

### 4. Public Key kopieren

1. Klicke auf **"Account"** → **"General"**
2. Finde **"Public Key"**
3. **Kopiere den Public Key** (z.B. `AbCdEfGhIjKlMnOp`)

### 5. .env Datei erstellen

Erstelle eine `.env` Datei im Root (`nuxt-app/`):

```bash
# EmailJS Configuration
NUXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NUXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NUXT_PUBLIC_EMAILJS_PUBLIC_KEY=AbCdEfGhIjKlMnOp
```

### 6. GitHub Secrets hinzufügen

1. Gehe zu: https://github.com/DEIN_USERNAME/DEIN_REPO/settings/secrets/actions
2. Klicke **"New repository secret"** für jeden Wert:
   - Name: `NUXT_PUBLIC_EMAILJS_SERVICE_ID` → Value: `service_abc123`
   - Name: `NUXT_PUBLIC_EMAILJS_TEMPLATE_ID` → Value: `template_xyz789`
   - Name: `NUXT_PUBLIC_EMAILJS_PUBLIC_KEY` → Value: `AbCdEfGhIjKlMnOp`

### 7. GitHub Actions Workflow anpassen

Die Secrets werden automatisch in die Build-Umgebung injiziert.

Stelle sicher, dass in `.github/workflows/deploy.yml` folgendes steht:

```yaml
- name: Generate static site
  run: npm run generate
  env:
    NUXT_PUBLIC_EMAILJS_SERVICE_ID: ${{ secrets.NUXT_PUBLIC_EMAILJS_SERVICE_ID }}
    NUXT_PUBLIC_EMAILJS_TEMPLATE_ID: ${{ secrets.NUXT_PUBLIC_EMAILJS_TEMPLATE_ID }}
    NUXT_PUBLIC_EMAILJS_PUBLIC_KEY: ${{ secrets.NUXT_PUBLIC_EMAILJS_PUBLIC_KEY }}
```

### 8. Testen

1. Lokal testen: `npm run dev`
2. Formular auf http://localhost:3000 ausfüllen
3. Check: Gmail `wswsteegmueller@gmail.com` → sollte E-Mail an `info@steegmuellertransporte.de` weiterleiten

---

## 📝 Alternative: Kompaktes Text-Template

Falls du kein HTML willst, nutze diese Text-Version:

```
🚚 NEUE TRANSPORTANFRAGE

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 KUNDE
Name: {{from_name}}
Telefon: {{from_phone}}

📍 ROUTE
Start: {{from_start}}
Ziel: {{from_ziel}}

📅 TERMIN
{{from_termin}}

💬 NACHRICHT
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📞 Kunde zurückrufen: {{from_phone}}

---
S. Steegmüller Transportdienstleistungen
Express- & Direktfahrten seit 1985
Eingegangen über steegmuellertransporte.de
```

---

## ✅ Fertig!

Nach dem Setup werden alle Formularanfragen direkt an:

- **info@steegmuellertransporte.de** (IONOS Weiterleitung)
- → weitergeleitet an **wswsteegmueller@gmail.com**

## 🔒 Sicherheit

- ✅ Honeypot-Feld gegen Spam-Bots
- ✅ Client-seitige Validierung
- ✅ EmailJS Rate-Limiting
- ✅ Keine Server-Secrets im Frontend
- ✅ IONOS E-Mail-Weiterleitung funktioniert

## 📊 EmailJS Free Plan

- ✅ 200 E-Mails/Monat kostenlos
- ✅ Völlig ausreichend für Anfragen
- ✅ Upgrade möglich falls mehr Bedarf
