# GitHub Secrets Setup für IONOS Deployment

Nach dem Merge dieses Feature-Branches in `main` müssen folgende GitHub Secrets gesetzt werden:

## 📋 Benötigte Secrets

Gehe zu: **GitHub Repo → Settings → Secrets and variables → Actions → New repository secret**

### EmailJS Secrets
```
Name: NUXT_PUBLIC_EMAILJS_SERVICE_ID
Value: service_d1apr7q
```

```
Name: NUXT_PUBLIC_EMAILJS_TEMPLATE_ID
Value: template_2qjqj64
```

```
Name: NUXT_PUBLIC_EMAILJS_PUBLIC_KEY
Value: ZSw-u5Om2Yu9lL2TA
```

### IONOS SFTP Secrets
```
Name: IONOS_HOST
Value: [Dein IONOS SFTP Host, z.B. access123456789.webspace-data.io]
```

```
Name: IONOS_USERNAME
Value: [Dein IONOS SFTP Username]
```

```
Name: IONOS_PASSWORD
Value: [Dein IONOS SFTP Passwort]
```

## ✅ Verification

Nach dem Setzen der Secrets:
1. Push auf `main` Branch
2. GitHub Actions laufen automatisch
3. Check: Actions Tab im GitHub Repo
4. Bei Erfolg: Website ist live auf https://steegmuellertransporte.de

## 🚨 Wichtig

- **NIEMALS** die `.env` Datei committen (ist in `.gitignore`)
- Secrets sind nur in GitHub Actions verfügbar
- Deployment erfolgt **NUR** bei Push auf `main`
- Feature-Branches werden **NUR** gebaut & getestet (kein Deploy)
