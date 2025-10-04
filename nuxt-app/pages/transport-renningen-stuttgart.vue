<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-brand-600 to-brand-700 text-white py-20">
      <div class="absolute inset-0 bg-black/20" />
      <div class="relative max-w-6xl mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-4xl md:text-5xl font-bold mb-6">
              Transport von Renningen nach Stuttgart
            </h1>
            <p class="text-xl mb-8 text-brand-100">
              Direktfahrten ohne Umladen • Express-Service • Same-Day-Delivery
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+4971599396183"
                class="bg-white text-brand-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                <PhoneIcon class="h-5 w-5 mr-2" />
                Jetzt anrufen: 07159 / 939 61 83
              </a>
              <a
                href="#angebot"
                class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-brand-600 transition-colors flex items-center justify-center"
              >
                Angebot anfordern
              </a>
            </div>
          </div>
          <div class="relative">
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 class="text-2xl font-semibold mb-4">🚛 Ihre Route im Überblick</h3>
              <div class="space-y-4">
                <div class="flex items-center">
                  <div class="w-4 h-4 bg-green-400 rounded-full mr-4" />
                  <span class="text-lg">Start: Renningen (71272)</span>
                </div>
                <div class="w-px h-8 bg-white/30 ml-2" />
                <div class="flex items-center">
                  <div class="w-4 h-4 bg-red-400 rounded-full mr-4" />
                  <span class="text-lg">Ziel: Stuttgart (70xxx)</span>
                </div>
              </div>
              <div class="mt-6 pt-6 border-t border-white/20">
                <div class="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div class="text-2xl font-bold">~25km</div>
                    <div class="text-sm text-brand-100">Entfernung</div>
                  </div>
                  <div>
                    <div class="text-2xl font-bold">~30min</div>
                    <div class="text-sm text-brand-100">Fahrzeit</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Vorteile Section -->
    <section class="py-16">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Warum S. Steegmüller für Ihre Transporte Renningen → Stuttgart?
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <div
              class="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6"
            >
              <TruckIcon class="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Direktfahrt ohne Umladen
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Ihre Sendung bleibt im gleichen Fahrzeug von Renningen bis Stuttgart. Kein Umladen,
              kein Risiko, maximale Sicherheit für Ihre Güter.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <div
              class="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6"
            >
              <ClockIcon class="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Express & Same-Day
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Kurzfristige Transporte am gleichen Tag möglich. Bei Anruf bis 14 Uhr noch am selben
              Tag in Stuttgart.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <div
              class="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-6"
            >
              <MapPinIcon class="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Lokale Expertise
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Über 30 Jahre Erfahrung auf der Strecke Renningen-Stuttgart. Wir kennen jeden Weg und
              jede Abkürzung.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Details -->
    <section class="py-16 bg-white dark:bg-gray-800">
      <div class="max-w-6xl mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
              Unsere Transport-Services Renningen → Stuttgart
            </h2>
            <div class="space-y-6">
              <div class="flex items-start">
                <CheckCircleIcon class="h-6 w-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">Pakete & Päckchen</h4>
                  <p class="text-gray-600 dark:text-gray-300">
                    Express-Kurierdienst für Dokumente, Pakete bis 31,5kg
                  </p>
                </div>
              </div>
              <div class="flex items-start">
                <CheckCircleIcon class="h-6 w-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">Paletten-Transport</h4>
                  <p class="text-gray-600 dark:text-gray-300">
                    Europaletten, Sonderpaletten, Industriegüter
                  </p>
                </div>
              </div>
              <div class="flex items-start">
                <CheckCircleIcon class="h-6 w-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">Firmen-Logistik</h4>
                  <p class="text-gray-600 dark:text-gray-300">
                    Regelmäßige B2B-Transporte, Produktionslogistik
                  </p>
                </div>
              </div>
              <div class="flex items-start">
                <CheckCircleIcon class="h-6 w-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">Umzugs-Service</h4>
                  <p class="text-gray-600 dark:text-gray-300">
                    Komplette Haushalte, Büroumzüge, Lagerräumungen
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8">
            <h3 class="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              Stuttgart Stadtteile die wir anfahren:
            </h3>
            <div class="grid grid-cols-2 gap-3 text-sm">
              <div class="flex items-center">
                <MapPinIcon class="h-4 w-4 text-brand-600 mr-2" />
                <span class="text-gray-700 dark:text-gray-300">Stuttgart-Mitte</span>
              </div>
              <div class="flex items-center">
                <MapPinIcon class="h-4 w-4 text-brand-600 mr-2" />
                <span class="text-gray-700 dark:text-gray-300">Bad Cannstatt</span>
              </div>
              <div class="flex items-center">
                <MapPinIcon class="h-4 w-4 text-brand-600 mr-2" />
                <span class="text-gray-700 dark:text-gray-300">Feuerbach</span>
              </div>
              <div class="flex items-center">
                <MapPinIcon class="h-4 w-4 text-brand-600 mr-2" />
                <span class="text-gray-700 dark:text-gray-300">Zuffenhausen</span>
              </div>
              <div class="flex items-center">
                <MapPinIcon class="h-4 w-4 text-brand-600 mr-2" />
                <span class="text-gray-700 dark:text-gray-300">Weilimdorf</span>
              </div>
              <div class="flex items-center">
                <MapPinIcon class="h-4 w-4 text-brand-600 mr-2" />
                <span class="text-gray-700 dark:text-gray-300">Vaihingen</span>
              </div>
              <div class="flex items-center">
                <MapPinIcon class="h-4 w-4 text-brand-600 mr-2" />
                <span class="text-gray-700 dark:text-gray-300">Degerloch</span>
              </div>
              <div class="flex items-center">
                <MapPinIcon class="h-4 w-4 text-brand-600 mr-2" />
                <span class="text-gray-700 dark:text-gray-300">Alle anderen</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Preise & Angebot -->
    <section id="angebot" class="py-16">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Angebot für Ihren Transport Renningen → Stuttgart
        </h2>
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                💰 Transparente Preise
              </h3>
              <div class="space-y-4">
                <div
                  class="flex justify-between py-3 border-b border-gray-200 dark:border-gray-600"
                >
                  <span class="text-gray-700 dark:text-gray-300">Pakete bis 31,5kg</span>
                  <span class="font-semibold text-gray-900 dark:text-white">ab 25€</span>
                </div>
                <div
                  class="flex justify-between py-3 border-b border-gray-200 dark:border-gray-600"
                >
                  <span class="text-gray-700 dark:text-gray-300">Europalette</span>
                  <span class="font-semibold text-gray-900 dark:text-white">ab 45€</span>
                </div>
                <div
                  class="flex justify-between py-3 border-b border-gray-200 dark:border-gray-600"
                >
                  <span class="text-gray-700 dark:text-gray-300">Express Same-Day</span>
                  <span class="font-semibold text-gray-900 dark:text-white">ab 65€</span>
                </div>
                <div class="flex justify-between py-3">
                  <span class="text-gray-700 dark:text-gray-300">Komplettladung</span>
                  <span class="font-semibold text-gray-900 dark:text-white">auf Anfrage</span>
                </div>
              </div>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                📞 Sofort-Kontakt
              </h3>
              <div class="space-y-4">
                <div class="flex items-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <PhoneIcon class="h-6 w-6 text-green-600 mr-3" />
                  <div>
                    <div class="font-semibold text-gray-900 dark:text-white">Hotline</div>
                    <a
                      href="tel:+4971599396183"
                      class="text-green-600 dark:text-green-400 hover:underline"
                    >
                      07159 / 939 61 83
                    </a>
                  </div>
                </div>
                <div class="flex items-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <DevicePhoneMobileIcon class="h-6 w-6 text-blue-600 mr-3" />
                  <div>
                    <div class="font-semibold text-gray-900 dark:text-white">Mobil</div>
                    <a
                      href="tel:+491727552023"
                      class="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      0172 755 20 23
                    </a>
                  </div>
                </div>
                <div class="flex items-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <EnvelopeIcon class="h-6 w-6 text-purple-600 mr-3" />
                  <div>
                    <div class="font-semibold text-gray-900 dark:text-white">E-Mail</div>
                    <a
                      href="mailto:wswsteegmueller@gmail.com"
                      class="text-purple-600 dark:text-purple-400 hover:underline"
                    >
                      wswsteegmueller@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Häufige Fragen zu Transporten Renningen → Stuttgart
        </h2>
        <div class="space-y-6">
          <details class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <summary class="text-lg font-semibold cursor-pointer text-gray-900 dark:text-white">
              Wie schnell kommt meine Sendung in Stuttgart an?
            </summary>
            <p class="mt-4 text-gray-600 dark:text-gray-300">
              Bei Standard-Transport am gleichen oder nächsten Werktag. Bei Express-Service
              innerhalb von 2-4 Stunden nach Abholung in Renningen.
            </p>
          </details>
          <details class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <summary class="text-lg font-semibold cursor-pointer text-gray-900 dark:text-white">
              Transportieren Sie auch am Wochenende?
            </summary>
            <p class="mt-4 text-gray-600 dark:text-gray-300">
              Ja, nach Vereinbarung sind auch Samstag-Transporte möglich. Sonntags nur in absoluten
              Notfällen mit Aufschlag.
            </p>
          </details>
          <details class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <summary class="text-lg font-semibold cursor-pointer text-gray-900 dark:text-white">
              Kann ich meine Sendung verfolgen?
            </summary>
            <p class="mt-4 text-gray-600 dark:text-gray-300">
              Ja, Sie erhalten SMS-Updates bei Abholung und Zustellung. Bei Bedarf auch
              Live-Tracking während der Fahrt.
            </p>
          </details>
          <details class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <summary class="text-lg font-semibold cursor-pointer text-gray-900 dark:text-white">
              Gibt es Mengenrabatte für regelmäßige Transporte?
            </summary>
            <p class="mt-4 text-gray-600 dark:text-gray-300">
              Absolut! Bei regelmäßigen Transporten zwischen Renningen und Stuttgart bieten wir
              attraktive Rahmenverträge mit reduzierten Preisen.
            </p>
          </details>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="py-16 bg-brand-600 text-white">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6">Bereit für Ihren Transport Renningen → Stuttgart?</h2>
        <p class="text-xl mb-8 text-brand-100">
          Rufen Sie jetzt an oder senden Sie uns Ihre Anfrage. Kostenvoranschlag innerhalb von 10
          Minuten!
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+4971599396183"
            class="bg-white text-brand-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            📞 Sofort anrufen: 07159 / 939 61 83
          </a>
          <NuxtLink
            to="/#kontakt"
            class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-brand-600 transition-colors"
          >
            💌 Angebot anfordern
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import {
  PhoneIcon,
  TruckIcon,
  ClockIcon,
  MapPinIcon,
  CheckCircleIcon,
  DevicePhoneMobileIcon,
  EnvelopeIcon
} from '@heroicons/vue/24/outline'

// SEO für diese spezifische Route
useHead({
  title: 'Transport Renningen → Stuttgart | Express-Kurier | S. Steegmüller',
  meta: [
    {
      name: 'description',
      content:
        '🚛 Transport von Renningen nach Stuttgart ✓ Direktfahrt ohne Umladen ✓ Same-Day Delivery ✓ Express-Kurier ✓ 30+ Jahre Erfahrung ☎ 07159 / 939 61 83'
    },
    {
      name: 'keywords',
      content:
        'Transport Renningen Stuttgart, Kurier Renningen Stuttgart, Spedition Renningen Stuttgart, Direktfahrt, Express Transport, Same Day Delivery, Paketversand, Palettentransport'
    },
    { name: 'robots', content: 'index, follow' },
    { name: 'geo.region', content: 'DE-BW' },
    { name: 'geo.placename', content: 'Renningen, Stuttgart' },

    // Open Graph
    {
      property: 'og:title',
      content: 'Transport Renningen → Stuttgart | Direktfahrt ohne Umladen | S. Steegmüller'
    },
    {
      property: 'og:description',
      content:
        'Express-Transport von Renningen nach Stuttgart. Direktfahrt ohne Umladen, Same-Day Delivery möglich. 30+ Jahre Erfahrung.'
    },
    { property: 'og:type', content: 'website' },
    {
      property: 'og:url',
      content: 'https://steegmuellertransporte.de/transport-renningen-stuttgart'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Transport Renningen Stuttgart',
        description:
          'Direktfahrt-Transport von Renningen nach Stuttgart ohne Umladen. Express-Service und Same-Day Delivery verfügbar.',
        provider: {
          '@type': 'LocalBusiness',
          name: 'S. Steegmüller Transportdienstleistungen',
          telephone: '+4971599396183',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Kornblumenweg 13',
            addressLocality: 'Renningen',
            postalCode: '71272',
            addressCountry: 'DE'
          }
        },
        serviceType: 'Freight Transportation',
        areaServed: [
          { '@type': 'City', name: 'Renningen' },
          { '@type': 'City', name: 'Stuttgart' }
        ],
        offers: {
          '@type': 'Offer',
          description: 'Transport von Renningen nach Stuttgart',
          priceRange: '€25-€200',
          availability: 'Mo-Sa'
        }
      })
    }
  ]
})
</script>
