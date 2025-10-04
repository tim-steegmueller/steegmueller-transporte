# DevOps & CI/CD Documentation

Complete guide to the deployment pipeline, workflows, and infrastructure for the Steegmüller Transporte project.

## 🏗️ Infrastructure Overview

### Hosting
- **Provider**: IONOS Webspace
- **Type**: Shared hosting with SFTP/SSH access
- **Static Site**: Pre-rendered Nuxt application

### DNS & CDN
- **DNS Provider**: Cloudflare
- **CDN**: Cloudflare (orange cloud enabled)
- **SSL**: Cloudflare Universal SSL + Full Strict mode

### Domain
- **Primary**: https://steegmuellertransporte.de
- **Staging**: staging.steegmuellertransporte.de (optional)

## 🔄 CI/CD Pipeline

### GitHub Actions Workflows

#### 1. PR Validation (`.github/workflows/pr-validation.yml`)
Runs on every pull request to validate code quality.

**Triggers**: Pull requests to `main`

**Jobs**:
1. **Checkout code**
2. **Setup Node.js 20** with npm cache
3. **Install dependencies** (`npm ci`)
4. **ESLint** validation
5. **Prettier** formatting check
6. **TypeScript** type checking
7. **Test build** with dummy EmailJS config

**Outcome**: PR can only be merged if all checks pass

#### 2. Deploy to Production (`.github/workflows/deploy.yml`)
Automated deployment on push to main.

**Triggers**: 
- Push to `main` branch
- Changes in `nuxt-app/**` or workflows

**Jobs**:

##### Job 1: Validate
1. **Checkout code**
2. **Setup Node.js 20** with npm cache
3. **Install dependencies**
4. **ESLint validation**
5. **Prettier check**
6. **TypeScript check**

##### Job 2: Build and Deploy (runs after validation)
1. **Checkout code**
2. **Setup Node.js**
3. **Install dependencies**
4. **Validate EmailJS secrets** (all 3 required)
5. **Build Nuxt app** with production env vars
6. **Detect output directory** (`.output/public`)
7. **Prepare deployment files**:
   - Copy build output
   - Generate `.htaccess` with security headers
8. **Deploy via SFTP** using lftp
9. **Health check** (wait 10s, check HTTP 200)
10. **Deployment summary**

### Secrets Required

Configure in GitHub Settings → Secrets and variables → Actions:

| Secret Name | Description | Example |
|-------------|-------------|---------|
| `IONOS_HOST` | SFTP hostname | `ssh.ionos.com` |
| `IONOS_USERNAME` | SFTP username | `user123` |
| `IONOS_PASSWORD` | SFTP password | `********` |
| `IONOS_PATH` | Remote path | `/steegmuellertransporte.de` |
| `NUXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJS service ID | `service_abc123` |
| `NUXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS template ID | `template_xyz789` |
| `NUXT_PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS public key | `abc123xyz` |

## 🛡️ Security Headers

Automatically added via `.htaccess` during deployment:

```apache
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
Referrer-Policy: strict-origin-when-cross-origin
Content-Security-Policy: [strict policy]
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

### CSP Policy
- `script-src`: self, inline, eval, GTM, GA, cdn.jsdelivr.net
- `style-src`: self, inline, Google Fonts
- `img-src`: self, data, https
- `font-src`: self, Google Fonts
- `connect-src`: self, GA, EmailJS

## 📦 Build Process

### Static Site Generation
```bash
npm run generate
```

**Output**: `.output/public/` directory containing:
- Pre-rendered HTML pages
- Optimized assets (JS, CSS, images)
- Sitemap and robots.txt

### Build Optimizations
- **Vite**: Fast builds with code splitting
- **Nitro**: Optimized server-side rendering
- **Compression**: Gzip/Brotli in .htaccess
- **Caching**: Long cache for assets, no-cache for HTML

### Build Size Tracking
```bash
du -sh .output/public/
```

Typical size: 2-5 MB (varies with images)

## 🚀 Deployment Process

### Automatic Deployment
1. Push to `main` branch
2. GitHub Actions triggers
3. Validation checks run
4. Build created
5. SFTP upload to IONOS
6. Health check performed
7. Deployment summary in logs

### Manual Deployment
```bash
# 1. Validate before deployment
npm run validate:deploy

# 2. Generate static site
npm run generate

# 3. Upload to IONOS via SFTP
# Use FileZilla or command line SFTP
sftp username@host
put -r .output/public/* /path/to/webroot/
```

### Rollback Procedure
1. Revert the commit in Git
2. Push to trigger new deployment
3. OR manually upload previous build

## 🧪 Testing & Validation

### Pre-deployment Checks
```bash
# Run all checks
npm run validate:deploy
```

This script performs:
1. ✅ ESLint validation
2. ✅ Prettier check
3. ✅ TypeScript check
4. ✅ Production build test
5. ✅ Output verification
6. ✅ Size reporting

### Smoke Tests
After deployment:
```bash
# Check site is up
curl -I https://steegmuellertransporte.de

# Check specific pages
curl -s https://steegmuellertransporte.de | grep "Steegmüller"
curl -s https://steegmuellertransporte.de/impressum | grep "Impressum"

# Check sitemap
curl -s https://steegmuellertransporte.de/sitemap.xml
```

### Performance Testing
```bash
# Lighthouse CLI
npx lighthouse https://steegmuellertransporte.de --view

# Or use PageSpeed Insights
# https://pagespeed.web.dev/
```

## 📊 Monitoring

### Uptime Monitoring
Recommended: [UptimeRobot](https://uptimerobot.com)
- Monitor: `https://steegmuellertransporte.de`
- Interval: 5 minutes
- Alerts: Email/SMS on downtime

### Error Tracking
Currently: Browser console errors logged

Future considerations:
- Sentry for error tracking
- Google Analytics for traffic
- CloudFlare Analytics

### Health Checks
The deployment workflow includes a basic health check:
```bash
curl -f -s -o /dev/null -w "%{http_code}" https://steegmuellertransporte.de
```

## 🔐 Environment Management

### Development
```bash
# .env (local only, not committed)
NUXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NUXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NUXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NODE_ENV=development
```

### Production
Environment variables set via GitHub Secrets.

### .env.example
Template file for required variables (safe to commit).

## 🐛 Troubleshooting

### Deployment Fails at Build Step
**Symptom**: Build fails in CI/CD

**Solutions**:
1. Check if it builds locally: `npm run generate`
2. Review error logs in GitHub Actions
3. Verify all dependencies are in package.json
4. Check for TypeScript errors: `npm run typecheck`

### SFTP Upload Fails
**Symptom**: Deployment fails at SFTP step

**Solutions**:
1. Verify IONOS credentials in GitHub Secrets
2. Check SFTP server is accessible
3. Verify remote path exists
4. Check server disk space

### Site Shows Old Content
**Symptom**: Changes not visible after deployment

**Solutions**:
1. Clear Cloudflare cache
2. Check .htaccess cache headers
3. Hard refresh browser (Ctrl+Shift+R)
4. Verify files were uploaded (check IONOS file manager)

### Health Check Fails
**Symptom**: Deployment succeeds but health check fails

**Solutions**:
1. Wait longer (increase sleep duration)
2. Check if site is actually down
3. Verify Cloudflare is proxying correctly
4. Check IONOS server status

### EmailJS Not Working
**Symptom**: Contact form fails to send

**Solutions**:
1. Verify all 3 EmailJS secrets are set
2. Check EmailJS dashboard for API limits
3. Test with dummy values locally
4. Check browser console for errors

## 📈 Performance Optimization

### Caching Strategy
- **Static Assets**: 1 year cache
- **HTML**: No cache (always fresh)
- **API Responses**: No cache

### Image Optimization
- WebP/AVIF format
- Responsive sizes
- Lazy loading (except above-fold)
- Alt text for SEO

### Bundle Size
Monitor with:
```bash
npm run generate
ls -lh .output/public/_nuxt/
```

Keep total JS under 300KB gzipped.

## 🔄 Release Process

1. **Develop** on feature branches
2. **Create PR** to main
3. **Wait for CI checks** to pass
4. **Code review** (if team)
5. **Merge PR**
6. **Automatic deployment** triggers
7. **Monitor** deployment logs
8. **Verify** live site
9. **Smoke test** critical paths

## 📋 Checklists

### Pre-deployment Checklist
- [ ] All tests passing locally
- [ ] ESLint clean
- [ ] Code formatted with Prettier
- [ ] No TypeScript errors
- [ ] Build succeeds locally
- [ ] Environment variables set
- [ ] No secrets in code
- [ ] Changelog updated (if applicable)

### Post-deployment Checklist
- [ ] Health check passed
- [ ] Site loads correctly
- [ ] Contact form works
- [ ] No console errors
- [ ] Images load properly
- [ ] Mobile responsive
- [ ] SEO meta tags present
- [ ] Sitemap accessible

## 🎯 Future Improvements

### Short-term
- [ ] Add staging environment
- [ ] Implement preview deployments for PRs
- [ ] Add automated visual regression tests
- [ ] Set up error tracking (Sentry)
- [ ] Add deployment notifications (Slack/Discord)

### Long-term
- [ ] Migrate to edge functions for dynamic content
- [ ] Implement A/B testing
- [ ] Add performance budgets
- [ ] Set up automated lighthouse audits
- [ ] Implement blue-green deployments
- [ ] Add database for dynamic content

## 📚 Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Nuxt Deployment Guide](https://nuxt.com/docs/getting-started/deployment)
- [Cloudflare Docs](https://developers.cloudflare.com/)
- [IONOS Help Center](https://www.ionos.com/help/)

---

**Last Updated**: January 2025
**Maintained By**: Development Team
