<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-brand-600 to-brand-700 text-white py-20">
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="relative max-w-6xl mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-4xl md:text-5xl font-bold mb-6">
              Transport Renningen → Sindelfingen
            </h1>
            <p class="text-xl mb-8 text-brand-100">
              Mercedes-Benz Standort • B2B Express • Automotive-Logistik
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <a href="tel:+4971599396183"
                 class="bg-white text-brand-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                <PhoneIcon class="h-5 w-5 mr-2" />
                Sofort: 07159 939 61 83
              </a>
              <a href="#automotive"
                 class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-brand-600 transition-colors flex items-center justify-center">
                Mercedes Service
              </a>
            </div>
          </div>
          <div class="relative">
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 class="text-2xl font-semibold mb-4">🏭 Route zur Mercedes-Stadt</h3>
              <div class="space-y-4">
                <div class="flex items-center">
                  <div class="w-4 h-4 bg-green-400 rounded-full mr-4"></div>
                  <span class="text-lg">Start: Renningen</span>
                </div>
                <div class="w-px h-8 bg-white/30 ml-2"></div>
                <div class="flex items-center">
                  <div class="w-4 h-4 bg-silver-400 rounded-full mr-4"></div>
                  <span class="text-lg">Ziel: Sindelfingen (Mercedes)</span>
                </div>
              </div>
              <div class="mt-6 pt-6 border-t border-white/20">
                <div class="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div class="text-2xl font-bold">~12km</div>
                    <div class="text-sm text-brand-100">Entfernung</div>
                  </div>
                  <div>
                    <div class="text-2xl font-bold">~18min</div>
                    <div class="text-sm text-brand-100">Fahrzeit</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mercedes/Automotive Focus -->
    <section id="automotive" class="py-16">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          🚗 Sindelfingen: Mercedes-Benz Automotive Hub
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg text-center">
            <div class="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-6 mx-auto">
              <span class="text-2xl">🏭</span>
            </div>
            <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Mercedes-Benz Werk</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Direkter Transport zum Mercedes-Werk Sindelfingen.
              Automotive-Teile, Zulieferer-Logistik, JIT-Lieferungen.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg text-center">
            <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6 mx-auto">
              <ClockIcon class="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Just-in-Time</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Pünktliche Lieferungen für Produktionslinien.
              Express-Service wenn's in der Produktion klemmt.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg text-center">
            <div class="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6 mx-auto">
              <TruckIcon class="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">B2B Spezialist</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Langjährige Erfahrung mit Automotive-Logistik.
              Kennen alle Anlieferungsstellen und Prozesse.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Sindelfingen Bereiche -->
    <section class="py-16 bg-white dark:bg-gray-800">
      <div class="max-w-6xl mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
              Sindelfingen: Unsere Zielgebiete
            </h2>
            <div class="space-y-6">
              <div class="flex items-start">
                <CheckCircleIcon class="h-6 w-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">Mercedes-Benz Werk</h4>
                  <p class="text-gray-600 dark:text-gray-300">Alle Werkstore, Anlieferungsstellen, Zulieferer-Bereiche</p>
                </div>
              </div>
              <div class="flex items-start">
                <CheckCircleIcon class="h-6 w-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">Automotive-Zulieferer</h4>
                  <p class="text-gray-600 dark:text-gray-300">Bosch, Continental, ZF und andere Automotive-Partner</p>
                </div>
              </div>
              <div class="flex items-start">
                <CheckCircleIcon class="h-6 w-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">Sindelfingen Innenstadt</h4>
                  <p class="text-gray-600 dark:text-gray-300">Geschäfte, Büros, private Zustellungen</p>
                </div>
              </div>
              <div class="flex items-start">
                <CheckCircleIcon class="h-6 w-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">Gewerbegebiete</h4>
                  <p class="text-gray-600 dark:text-gray-300">Alle Industriegebiete rund um Sindelfingen</p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8">
            <h3 class="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">🏭 Mercedes-Express</h3>
            <div class="space-y-4">
              <div class="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-600">
                <span class="text-gray-700 dark:text-gray-300">Produktions-Notfall:</span>
                <span class="font-bold text-red-600">2 Stunden</span>
              </div>
              <div class="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-600">
                <span class="text-gray-700 dark:text-gray-300">JIT-Lieferung:</span>
                <span class="font-bold text-orange-600">Termingenau</span>
              </div>
              <div class="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-600">
                <span class="text-gray-700 dark:text-gray-300">Same-Day:</span>
                <span class="font-bold text-green-600">Bis 14 Uhr</span>
              </div>
              <div class="flex justify-between items-center py-3">
                <span class="text-gray-700 dark:text-gray-300">Standard:</span>
                <span class="font-bold text-blue-600">Overnight</span>
              </div>
            </div>
            <div class="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <p class="text-sm text-yellow-800 dark:text-yellow-400">
                💡 <strong>Werner-Tipp:</strong> Bei Mercedes-Produktionsstopps organisieren wir auch
                nachts und am Wochenende Express-Transporte!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Preise -->
    <section class="py-16">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Preise Transport Renningen → Sindelfingen
        </h2>
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-xl font-semibold mb-6 text-gray-900 dark:text-white">💰 Automotive-Logistik</h3>
              <div class="space-y-4">
                <div class="flex justify-between py-3 border-b border-gray-200 dark:border-gray-600">
                  <span class="text-gray-700 dark:text-gray-300">Kleinteile/Dokumente</span>
                  <span class="font-semibold text-gray-900 dark:text-white">ab 16€</span>
                </div>
                <div class="flex justify-between py-3 border-b border-gray-200 dark:border-gray-600">
                  <span class="text-gray-700 dark:text-gray-300">KLT-Behälter</span>
                  <span class="font-semibold text-gray-900 dark:text-white">ab 28€</span>
                </div>
                <div class="flex justify-between py-3 border-b border-gray-200 dark:border-gray-600">
                  <span class="text-gray-700 dark:text-gray-300">Europalette</span>
                  <span class="font-semibold text-gray-900 dark:text-white">ab 32€</span>
                </div>
                <div class="flex justify-between py-3 border-b border-gray-200 dark:border-gray-600">
                  <span class="text-gray-700 dark:text-gray-300">Produktions-Notfall</span>
                  <span class="font-semibold text-red-600">ab 85€</span>
                </div>
                <div class="flex justify-between py-3">
                  <span class="text-gray-700 dark:text-gray-300">Rahmenvertrag B2B</span>
                  <span class="font-semibold text-green-600">-25%</span>
                </div>
              </div>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-6 text-gray-900 dark:text-white">📞 Automotive-Hotline</h3>
              <div class="space-y-4">
                <div class="flex items-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <PhoneIcon class="h-6 w-6 text-red-600 mr-3" />
                  <div>
                    <div class="font-semibold text-gray-900 dark:text-white">Produktions-Notfall</div>
                    <a href="tel:+491727552023" class="text-red-600 dark:text-red-400 hover:underline">
                      0172 755 20 23 (Werner)
                    </a>
                  </div>
                </div>
                <div class="flex items-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <PhoneIcon class="h-6 w-6 text-blue-600 mr-3" />
                  <div>
                    <div class="font-semibold text-gray-900 dark:text-white">Standard-Transport</div>
                    <a href="tel:+4971599396183" class="text-blue-600 dark:text-blue-400 hover:underline">
                      07159 939 61 83
                    </a>
                  </div>
                </div>
                <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-2">🚗 Mercedes-Service</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    Wir kennen alle Anlieferungsstellen bei Mercedes-Benz Sindelfingen.
                    Langjährige Erfahrung mit Automotive-Logistik.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Erfolgsgeschichte Mercedes -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          🏆 Erfolg bei Mercedes-Benz Sindelfingen
        </h2>
        <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <div class="flex items-center mb-6">
            <span class="text-4xl mr-4">🚗</span>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Produktionslinie gerettet!</h3>
          </div>
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-4">
            <strong>Die Situation:</strong> Freitag 15:30 Uhr - kritisches Bauteil fehlt bei Mercedes.
            Produktionslinie für S-Klasse steht. Jede Minute kostet Tausende Euro.
          </p>
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-4">
            <strong>Werner's Lösung:</strong> Bauteil in Stuttgart lokalisiert, Sofort-Transport organisiert.
            Um 17:15 Uhr war das Teil in Sindelfingen - Produktion lief wieder!
          </p>
          <p class="text-lg text-green-600 dark:text-green-400 font-semibold">
            ✅ Ergebnis: 200+ Fahrzeuge konnten termingerecht produziert werden.
            Mercedes-Benz: "Ohne Werner hätten wir massive Probleme gehabt!"
          </p>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="py-16 bg-brand-600 text-white">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6">
          Mercedes-Benz Sindelfingen Transport gesucht?
        </h2>
        <p class="text-xl mb-8 text-brand-100">
          Von Automotive-Teilen bis Produktions-Notfällen - wir kennen Sindelfingen
          und Mercedes wie unsere Westentasche!
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+491727552023"
             class="bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-400 transition-colors">
            🚨 NOTFALL: 0172 755 20 23
          </a>
          <a href="tel:+4971599396183"
             class="bg-white text-brand-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            📞 Standard: 07159 939 61 83
          </a>
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
  CheckCircleIcon
} from '@heroicons/vue/24/outline'

// SEO für Renningen-Sindelfingen Route
useHead({
  title: 'Transport Renningen → Sindelfingen Mercedes | Automotive-Logistik | S. Steegmüller',
  meta: [
    {
      name: 'description',
      content: '🚗 Transport Renningen → Sindelfingen Mercedes-Benz ✓ Automotive-Logistik ✓ JIT-Lieferung ✓ Produktions-Notfall Express ☎ 07159 939 61 83'
    },
    {
      name: 'keywords',
      content: 'Transport Renningen Sindelfingen, Mercedes Transport, Automotive Logistik, JIT Lieferung, Produktionsnotfall, KLT Behälter, Just in Time'
    },
    { name: 'robots', content: 'index, follow' },
    { name: 'geo.region', content: 'DE-BW' },
    { name: 'geo.placename', content: 'Renningen, Sindelfingen' },

    // Open Graph
    { property: 'og:title', content: 'Transport Renningen → Sindelfingen Mercedes | Automotive-Logistik' },
    { property: 'og:description', content: 'Spezialist für Mercedes-Benz Sindelfingen Transport. Automotive-Logistik, JIT-Lieferungen, Produktions-Notfälle.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://steegmuellertransporte.de/transport-renningen-sindelfingen' },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Transport Renningen Sindelfingen Mercedes",
        "description": "Spezieller Transport-Service für Mercedes-Benz Sindelfingen. Automotive-Logistik, JIT-Lieferungen.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "S. Steegmüller Transportdienstleistungen",
          "telephone": "+4971599396183"
        },
        "serviceType": "Automotive Logistics",
        "areaServed": [
          { "@type": "City", "name": "Renningen" },
          { "@type": "City", "name": "Sindelfingen" }
        ],
        "offers": {
          "@type": "Offer",
          "description": "Mercedes-Benz Sindelfingen Transport",
          "priceRange": "€16-€200",
          "availability": "Mo-Sa"
        }
      })
    }
  ]
})
</script>