// Security Headers Plugin
export default defineNuxtPlugin(() => {
  if (process.server) {
    const event = useRequestEvent()
    
    // Security Headers
    event.node.res.setHeader('X-Content-Type-Options', 'nosniff')
    event.node.res.setHeader('X-Frame-Options', 'DENY')
    event.node.res.setHeader('X-XSS-Protection', '1; mode=block')
    event.node.res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin')
    event.node.res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')
    
    // Content Security Policy
    event.node.res.setHeader('Content-Security-Policy', [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https: blob:",
      "connect-src 'self' https://www.google-analytics.com https://formspree.io",
      "frame-src 'self' https://www.google.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self' https://formspree.io"
    ].join('; '))
    
    // HSTS (only in production)
    if (process.env.NODE_ENV === 'production') {
      event.node.res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload')
    }
  }
})
