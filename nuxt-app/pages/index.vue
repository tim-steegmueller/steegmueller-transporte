<template>
  <div class="overflow-x-hidden bg-neutral-50 text-neutral-800 dark:bg-midnight-900 dark:text-neutral-100">
    <HeroSection />
    <ServicesSection />
    <ReviewsSection />
    <ContactSection />

    <div v-if="isDev" class="pointer-events-none">
    </div>
  </div>
</template>

<script setup>
const isDev = process.dev

import HeroSection from '~/components/HeroSection.vue'
import ServicesSection from '~/components/ServicesSection.vue'
import ReviewsSection from '~/components/ReviewsSection.vue'
import ContactSection from '~/components/ContactSection.vue'

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'S. Steegmüller Transportdienstleistungen',
  url: 'https://steegmuellertransporte.de',
  telephone: '+49 172 755 20 23',
  email: 'kontakt@steegmuellertransporte.de',
  description: 'Direktfahrten ohne Umladen, feste Touren und Express-Transporte in Renningen, Böblingen, Sindelfingen, Leonberg und Stuttgart.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Kornblumenweg 13',
    addressLocality: 'Renningen',
    postalCode: '71272',
    addressRegion: 'Baden-Württemberg',
    addressCountry: 'DE'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.7545,
    longitude: 8.9335
  },
  areaServed: ['Renningen', 'Böblingen', 'Sindelfingen', 'Leonberg', 'Stuttgart'],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00'
    }
  ],
  sameAs: ['https://maps.google.com/?q=Kornblumenweg+13,+71272+Renningen'],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '4'
  },
  offerCatalog: {
    '@type': 'OfferCatalog',
    name: 'Transport- und Speditionsleistungen',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Direkt- und Sonderfahrten',
          serviceType: 'CourierService'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Regelmäßige Firmentouren',
          serviceType: 'LogisticsService'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Umzüge im Großraum Stuttgart',
          serviceType: 'MovingService'
        }
      }
    ]
  }
}

useHead({
  title: 'S. Steegmüller Transportdienstleistungen | Direktfahrten aus Renningen',
  meta: [
    {
      name: 'description',
      content: 'Direktfahrten ohne Umladen, Express-Kurier und verlässliche Touren: S. Steegmüller Transportdienstleistungen aus Renningen für Böblingen, Sindelfingen, Leonberg und Stuttgart.'
    },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'S. Steegmüller Transportdienstleistungen' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Direktfahrten & Kurier aus Renningen | S. Steegmüller' },
    {
      property: 'og:description',
      content: 'Familiengeführter Transportdienstleister seit über 30 Jahren. Direktfahrten, feste Touren und Express-Lösungen für Unternehmen in der Region Stuttgart.'
    },
    { property: 'og:url', content: 'https://steegmuellertransporte.de' },
    { property: 'og:image', content: 'https://steegmuellertransporte.de/images/transport/transporter-renningen-holz.jpg' },
    { property: 'og:locale', content: 'de_DE' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'S. Steegmüller Transportdienstleistungen' },
    {
      name: 'twitter:description',
      content: 'Direktfahrten und Express-Kurier aus Renningen – Böblingen – Sindelfingen – Leonberg – Stuttgart.'
    }
  ],
  link: [
    { rel: 'canonical', href: 'https://steegmuellertransporte.de' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/favicons/fast-32.png' },
    { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/images/favicons/fast-256.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/favicons/fast-256.png' }
  ],
  script: [
    { type: 'application/ld+json', children: JSON.stringify(businessSchema) }
  ]
})
</script>
