<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-brand-600 to-brand-700 text-white py-20">
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="relative max-w-6xl mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-4xl md:text-5xl font-bold mb-6">
              Transport Renningen → Leonberg
            </h1>
            <p class="text-xl mb-8 text-brand-100">
              Direkter Nachbar • Täglich unterwegs • Express möglich
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <a href="tel:+4971599396183"
                 class="bg-white text-brand-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                <PhoneIcon class="h-5 w-5 mr-2" />
                Sofort: 07159 939 61 83
              </a>
              <a href="#nachbar"
                 class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-brand-600 transition-colors flex items-center justify-center">
                Nachbar-Service
              </a>
            </div>
          </div>
          <div class="relative">
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 class="text-2xl font-semibold mb-4">🏘️ Direkte Nachbarstädte</h3>
              <div class="space-y-4">
                <div class="flex items-center">
                  <div class="w-4 h-4 bg-green-400 rounded-full mr-4"></div>
                  <span class="text-lg">Start: Renningen</span>
                </div>
                <div class="w-px h-8 bg-white/30 ml-2"></div>
                <div class="flex items-center">
                  <div class="w-4 h-4 bg-orange-400 rounded-full mr-4"></div>
                  <span class="text-lg">Ziel: Leonberg</span>
                </div>
              </div>
              <div class="mt-6 pt-6 border-t border-white/20">
                <div class="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div class="text-2xl font-bold">~8km</div>
                    <div class="text-sm text-brand-100">Entfernung</div>
                  </div>
                  <div>
                    <div class="text-2xl font-bold">~12min</div>
                    <div class="text-sm text-brand-100">Fahrzeit</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Nachbar-Vorteil -->
    <section id="nachbar" class="py-16">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Renningen ↔ Leonberg: Beste Nachbarn!
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg text-center">
            <div class="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mb-6 mx-auto">
              <MapPinIcon class="h-8 w-8 text-orange-600 dark:text-orange-400" />
            </div>
            <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Kürzeste Strecke</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Nur 8km zwischen Renningen und Leonberg.
              Perfekt für schnelle Transporte und günstige Preise.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg text-center">
            <div class="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6 mx-auto">
              <ClockIcon class="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Mehrmals täglich</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Wir fahren oft mehrmals am Tag zwischen den Nachbarstädten.
              Dadurch sehr flexible Abholzeiten.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg text-center">
            <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6 mx-auto">
              <TruckIcon class="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Kombinierte Touren</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Oft können wir mehrere Sendungen in einer Tour kombinieren.
              Das macht es günstiger für alle Kunden.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Leonberg Bereiche -->
    <section class="py-16 bg-white dark:bg-gray-800">
      <div class="max-w-6xl mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
              Leonberg: Alle Bereiche abgedeckt
            </h2>
            <div class="space-y-6">
              <div class="flex items-start">
                <CheckCircleIcon class="h-6 w-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">Leonberg Innenstadt</h4>
                  <p class="text-gray-600 dark:text-gray-300">Marktplatz, Fußgängerzone, alle Geschäfte und Büros</p>
                </div>
              </div>
              <div class="flex items-start">
                <CheckCircleIcon class="h-6 w-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">Gewerbegebiete</h4>
                  <p class="text-gray-600 dark:text-gray-300">Alle Industriegebiete und Gewerbeparks in Leonberg</p>
                </div>
              </div>
              <div class="flex items-start">
                <CheckCircleIcon class="h-6 w-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">Leonberg-Eltingen</h4>
                  <p class="text-gray-600 dark:text-gray-300">Ortsteil Eltingen und alle angrenzenden Bereiche</p>
                </div>
              </div>
              <div class="flex items-start">
                <CheckCircleIcon class="h-6 w-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">Wohngebiete</h4>
                  <p class="text-gray-600 dark:text-gray-300">Private Zustellungen in alle Leonberger Stadtteile</p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8">
            <h3 class="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">🚀 Nachbar-Express</h3>
            <div class="space-y-4">
              <div class="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-600">
                <span class="text-gray-700 dark:text-gray-300">Express (2h):</span>
                <span class="font-bold text-red-600">Jederzeit</span>
              </div>
              <div class="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-600">
                <span class="text-gray-700 dark:text-gray-300">Same-Day:</span>
                <span class="font-bold text-orange-600">Bis 16 Uhr</span>
              </div>
              <div class="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-600">
                <span class="text-gray-700 dark:text-gray-300">Standard:</span>
                <span class="font-bold text-green-600">3-4x täglich</span>
              </div>
              <div class="flex justify-between items-center py-3">
                <span class="text-gray-700 dark:text-gray-300">Rücktransport:</span>
                <span class="font-bold text-blue-600">Gleiche Tour</span>
              </div>
            </div>
            <div class="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <p class="text-sm text-green-800 dark:text-green-400">
                💡 <strong>Nachbar-Bonus:</strong> Bei Hin- und Rückfahrt am gleichen Tag
                gibt's oft 30% Rabatt auf den zweiten Transport!
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
          Preise Transport Renningen → Leonberg
        </h2>
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-xl font-semibold mb-6 text-gray-900 dark:text-white">💰 Nachbar-Preise</h3>
              <div class="space-y-4">
                <div class="flex justify-between py-3 border-b border-gray-200 dark:border-gray-600">
                  <span class="text-gray-700 dark:text-gray-300">Paket bis 31,5kg</span>
                  <span class="font-semibold text-gray-900 dark:text-white">ab 14€</span>
                </div>
                <div class="flex justify-between py-3 border-b border-gray-200 dark:border-gray-600">
                  <span class="text-gray-700 dark:text-gray-300">Europalette</span>
                  <span class="font-semibold text-gray-900 dark:text-white">ab 28€</span>
                </div>
                <div class="flex justify-between py-3 border-b border-gray-200 dark:border-gray-600">
                  <span class="text-gray-700 dark:text-gray-300">Express 2h</span>
                  <span class="font-semibold text-gray-900 dark:text-white">ab 35€</span>
                </div>
                <div class="flex justify-between py-3 border-b border-gray-200 dark:border-gray-600">
                  <span class="text-gray-700 dark:text-gray-300">Hin + Rück gleicher Tag</span>
                  <span class="font-semibold text-green-600">-30%</span>
                </div>
                <div class="flex justify-between py-3">
                  <span class="text-gray-700 dark:text-gray-300">Regelmäßig (wöchentlich)</span>
                  <span class="font-semibold text-green-600">-40%</span>
                </div>
              </div>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-6 text-gray-900 dark:text-white">📞 Nachbar-Hotline</h3>
              <div class="space-y-4">
                <div class="flex items-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <PhoneIcon class="h-6 w-6 text-green-600 mr-3" />
                  <div>
                    <div class="font-semibold text-gray-900 dark:text-white">Standard Transport</div>
                    <a href="tel:+4971599396183" class="text-green-600 dark:text-green-400 hover:underline">
                      07159 939 61 83
                    </a>
                  </div>
                </div>
                <div class="flex items-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <DevicePhoneMobileIcon class="h-6 w-6 text-orange-600 mr-3" />
                  <div>
                    <div class="font-semibold text-gray-900 dark:text-white">Express & Notfall</div>
                    <a href="tel:+491727552023" class="text-orange-600 dark:text-orange-400 hover:underline">
                      0172 755 20 23 (Werner)
                    </a>
                  </div>
                </div>
                <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-2">🏘️ Nachbar-Service</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    Kurze Wege, faire Preise! Als direkte Nachbarstädte können wir
                    besonders günstige und schnelle Transporte anbieten.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Kundenstimme -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Zufriedene Nachbarn
        </h2>
        <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <div class="flex items-center mb-6">
            <div class="flex text-yellow-400 text-xl">
              ⭐⭐⭐⭐⭐
            </div>
            <span class="ml-4 text-gray-600 dark:text-gray-400">Handwerksbetrieb Leonberg</span>
          </div>
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-4">
            "Wir sind Handwerker in Leonberg und bekommen regelmäßig Material aus Renningen.
            S. Steegmüller ist unser Stammtransporteur - super zuverlässig und faire Preise
            für die kurze Strecke. Manchmal bringt Werner sogar mehrere Lieferungen am Tag!"
          </p>
          <p class="text-gray-500 dark:text-gray-500">
            - Meister Zimmerei Holzbau, Leonberg
          </p>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="py-16 bg-brand-600 text-white">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6">
          Transport zwischen Nachbarn: Renningen ↔ Leonberg
        </h2>
        <p class="text-xl mb-8 text-brand-100">
          Kurze Wege, faire Preise, mehrmals täglich! Der ideale Service
          für unsere direkten Nachbarstädte.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+4971599396183"
             class="bg-white text-brand-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            📞 Anrufen: 07159 939 61 83
          </a>
          <a href="tel:+491727552023"
             class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-brand-600 transition-colors">
            📱 Werner: 0172 755 20 23
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
  CheckCircleIcon,
  DevicePhoneMobileIcon
} from '@heroicons/vue/24/outline'

// SEO für Renningen-Leonberg Route
useHead({
  title: 'Transport Renningen → Leonberg | Nachbarstädte ab 14€ | S. Steegmüller',
  meta: [
    {
      name: 'description',
      content: '🏘️ Transport Renningen → Leonberg ✓ Direkte Nachbarn ✓ Ab 14€ ✓ Mehrmals täglich ✓ Express 2h möglich ☎ 07159 939 61 83'
    },
    {
      name: 'keywords',
      content: 'Transport Renningen Leonberg, Kurier Nachbarstädte, günstig Leonberg, Express Leonberg, Nachbar Transport, kurze Strecke'
    },
    { name: 'robots', content: 'index, follow' },
    { name: 'geo.region', content: 'DE-BW' },
    { name: 'geo.placename', content: 'Renningen, Leonberg' },

    // Open Graph
    { property: 'og:title', content: 'Transport Renningen → Leonberg | Nachbarstädte günstig ab 14€' },
    { property: 'og:description', content: 'Günstiger Transport zwischen Nachbarstädten Renningen und Leonberg. Mehrmals täglich, Express möglich, faire Preise.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://steegmuellertransporte.de/transport-renningen-leonberg' },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Transport Renningen Leonberg",
        "description": "Günstiger Transport zwischen den Nachbarstädten Renningen und Leonberg. Kurze Strecke, faire Preise.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "S. Steegmüller Transportdienstleistungen",
          "telephone": "+4971599396183"
        },
        "serviceType": "Local Freight Transportation",
        "areaServed": [
          { "@type": "City", "name": "Renningen" },
          { "@type": "City", "name": "Leonberg" }
        ],
        "offers": {
          "@type": "Offer",
          "description": "Transport zwischen Nachbarstädten",
          "priceRange": "€14-€80",
          "availability": "Mo-Sa"
        }
      })
    }
  ]
})
</script>