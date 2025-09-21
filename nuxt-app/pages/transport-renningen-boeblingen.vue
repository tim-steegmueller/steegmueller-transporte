<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-brand-600 to-brand-700 text-white py-20">
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="relative max-w-6xl mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-4xl md:text-5xl font-bold mb-6">
              Transport Renningen → Böblingen
            </h1>
            <p class="text-xl mb-8 text-brand-100">
              Direktfahrten ohne Umladen • Daily Express • Same-Day möglich
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <a href="tel:+4971599396183"
                 class="bg-white text-brand-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                <PhoneIcon class="h-5 w-5 mr-2" />
                Sofort: 07159 / 939 61 83
              </a>
              <a href="#preise"
                 class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-brand-600 transition-colors flex items-center justify-center">
                Preis anfragen
              </a>
            </div>
          </div>
          <div class="relative">
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 class="text-2xl font-semibold mb-4">🚛 Route Renningen ↔ Böblingen</h3>
              <div class="space-y-4">
                <div class="flex items-center">
                  <div class="w-4 h-4 bg-green-400 rounded-full mr-4"></div>
                  <span class="text-lg">Start: Renningen</span>
                </div>
                <div class="w-px h-8 bg-white/30 ml-2"></div>
                <div class="flex items-center">
                  <div class="w-4 h-4 bg-blue-400 rounded-full mr-4"></div>
                  <span class="text-lg">Ziel: Böblingen</span>
                </div>
              </div>
              <div class="mt-6 pt-6 border-t border-white/20">
                <div class="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div class="text-2xl font-bold">~15km</div>
                    <div class="text-sm text-brand-100">Entfernung</div>
                  </div>
                  <div>
                    <div class="text-2xl font-bold">~20min</div>
                    <div class="text-sm text-brand-100">Fahrzeit</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Warum diese Route -->
    <section class="py-16">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Warum wir die Strecke Renningen → Böblingen perfekt kennen
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg text-center">
            <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6 mx-auto">
              <MapPinIcon class="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Nachbarstädte</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Renningen und Böblingen sind direkte Nachbarstädte.
              Wir kennen jeden Weg, jede Abkürzung und alle Besonderheiten.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg text-center">
            <div class="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6 mx-auto">
              <ClockIcon class="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Täglich unterwegs</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Wir fahren diese Strecke fast täglich für verschiedene Kunden.
              Dadurch können wir oft mehrere Sendungen effizient kombinieren.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg text-center">
            <div class="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-6 mx-auto">
              <TruckIcon class="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Direktfahrt</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Kurze Strecke bedeutet: Ihre Sendung bleibt im gleichen Fahrzeug
              und kommt schnell und sicher am Ziel an.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Böblingen Highlights -->
    <section class="py-16 bg-white dark:bg-gray-800">
      <div class="max-w-6xl mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
              Böblingen: Unsere Zielgebiete
            </h2>
            <div class="space-y-6">
              <div class="flex items-start">
                <CheckCircleIcon class="h-6 w-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">Böblingen Innenstadt</h4>
                  <p class="text-gray-600 dark:text-gray-300">Geschäfte, Büros, Arztpraxen im Zentrum</p>
                </div>
              </div>
              <div class="flex items-start">
                <CheckCircleIcon class="h-6 w-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">Industriegebiet Böblingen</h4>
                  <p class="text-gray-600 dark:text-gray-300">Firmen, Produktionsstätten, Lager</p>
                </div>
              </div>
              <div class="flex items-start">
                <CheckCircleIcon class="h-6 w-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">Wohngebiete</h4>
                  <p class="text-gray-600 dark:text-gray-300">Private Zustellungen in alle Böblinger Stadtteile</p>
                </div>
              </div>
              <div class="flex items-start">
                <CheckCircleIcon class="h-6 w-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">Umland Böblingen</h4>
                  <p class="text-gray-600 dark:text-gray-300">Auch angrenzende Gewerbegebiete</p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8">
            <h3 class="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">⚡ Express-Service</h3>
            <div class="space-y-4">
              <div class="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-600">
                <span class="text-gray-700 dark:text-gray-300">Anruf bis:</span>
                <span class="font-bold text-green-600">14:00 Uhr</span>
              </div>
              <div class="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-600">
                <span class="text-gray-700 dark:text-gray-300">Zustellung:</span>
                <span class="font-bold text-green-600">Gleicher Tag</span>
              </div>
              <div class="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-600">
                <span class="text-gray-700 dark:text-gray-300">Notfall:</span>
                <span class="font-bold text-red-600">2 Stunden</span>
              </div>
              <div class="flex justify-between items-center py-3">
                <span class="text-gray-700 dark:text-gray-300">Standard:</span>
                <span class="font-bold text-blue-600">Nächster Tag</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Preise -->
    <section id="preise" class="py-16">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Preise Transport Renningen → Böblingen
        </h2>
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-xl font-semibold mb-6 text-gray-900 dark:text-white">💰 Günstige Kurz-Strecke</h3>
              <div class="space-y-4">
                <div class="flex justify-between py-3 border-b border-gray-200 dark:border-gray-600">
                  <span class="text-gray-700 dark:text-gray-300">Paket bis 31,5kg</span>
                  <span class="font-semibold text-gray-900 dark:text-white">ab 18€</span>
                </div>
                <div class="flex justify-between py-3 border-b border-gray-200 dark:border-gray-600">
                  <span class="text-gray-700 dark:text-gray-300">Europalette</span>
                  <span class="font-semibold text-gray-900 dark:text-white">ab 35€</span>
                </div>
                <div class="flex justify-between py-3 border-b border-gray-200 dark:border-gray-600">
                  <span class="text-gray-700 dark:text-gray-300">Express Same-Day</span>
                  <span class="font-semibold text-gray-900 dark:text-white">ab 45€</span>
                </div>
                <div class="flex justify-between py-3">
                  <span class="text-gray-700 dark:text-gray-300">Regelmäßig (Rahmenvertrag)</span>
                  <span class="font-semibold text-green-600">-20%</span>
                </div>
              </div>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-6 text-gray-900 dark:text-white">📞 Direkt-Kontakt</h3>
              <div class="space-y-4">
                <div class="flex items-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <PhoneIcon class="h-6 w-6 text-green-600 mr-3" />
                  <div>
                    <div class="font-semibold text-gray-900 dark:text-white">Hotline</div>
                    <a href="tel:+4971599396183" class="text-green-600 dark:text-green-400 hover:underline">
                      07159 / 939 61 83
                    </a>
                  </div>
                </div>
                <div class="flex items-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <DevicePhoneMobileIcon class="h-6 w-6 text-blue-600 mr-3" />
                  <div>
                    <div class="font-semibold text-gray-900 dark:text-white">Werner mobil</div>
                    <a href="tel:+491727552023" class="text-blue-600 dark:text-blue-400 hover:underline">
                      0172 755 20 23
                    </a>
                  </div>
                </div>
                <div class="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                  <p class="text-sm text-yellow-800 dark:text-yellow-400">
                    💡 <strong>Tipp:</strong> Bei regelmäßigen Transporten zwischen Renningen und Böblingen
                    gibt es attraktive Mengenrabatte!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Kundenstimmen -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Was Kunden über unsere Renningen-Böblingen Strecke sagen
        </h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <div class="flex items-center mb-4">
              <div class="flex text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
              <span class="ml-2 text-gray-600 dark:text-gray-400">Firma in Böblingen</span>
            </div>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              "Wir bekommen täglich Lieferungen aus Renningen.
              S. Steegmüller ist immer pünktlich und zuverlässig.
              Super Service!"
            </p>
            <p class="text-sm text-gray-500 dark:text-gray-500">- Geschäftsführer, Metallbau GmbH</p>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <div class="flex items-center mb-4">
              <div class="flex text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
              <span class="ml-2 text-gray-600 dark:text-gray-400">Privatkunde</span>
            </div>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              "Umzug von Renningen nach Böblingen war stressfrei.
              Alles kam heil an, faire Preise, nette Leute."
            </p>
            <p class="text-sm text-gray-500 dark:text-gray-500">- Familie Müller</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="py-16 bg-brand-600 text-white">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6">
          Transport Renningen → Böblingen gesucht?
        </h2>
        <p class="text-xl mb-8 text-brand-100">
          Rufen Sie jetzt an für ein sofortiges Angebot. Bei der kurzen Strecke
          können wir oft sehr günstige Preise anbieten!
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+4971599396183"
             class="bg-white text-brand-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            📞 Sofort anrufen: 07159 / 939 61 83
          </a>
          <NuxtLink to="/#kontakt"
                    class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-brand-600 transition-colors">
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
  DevicePhoneMobileIcon
} from '@heroicons/vue/24/outline'

// SEO für Renningen-Böblingen Route
useHead({
  title: 'Transport Renningen → Böblingen | Günstig & Schnell | S. Steegmüller',
  meta: [
    {
      name: 'description',
      content: '🚛 Transport Renningen nach Böblingen ✓ Ab 18€ ✓ Same-Day möglich ✓ Direktfahrt ohne Umladen ✓ Täglich unterwegs ☎ 07159 / 939 61 83'
    },
    {
      name: 'keywords',
      content: 'Transport Renningen Böblingen, Kurier Renningen Böblingen, Spedition Böblingen, Direktfahrt, Express Transport, Paketversand, günstig'
    },
    { name: 'robots', content: 'index, follow' },
    { name: 'geo.region', content: 'DE-BW' },
    { name: 'geo.placename', content: 'Renningen, Böblingen' },

    // Open Graph
    { property: 'og:title', content: 'Transport Renningen → Böblingen | Günstig ab 18€ | S. Steegmüller' },
    { property: 'og:description', content: 'Günstiger Transport von Renningen nach Böblingen. Direktfahrt ohne Umladen, Same-Day möglich. Kurze Strecke, faire Preise.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://steegmuellertransporte.de/transport-renningen-boeblingen' },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Transport Renningen Böblingen",
        "description": "Günstiger Transport von Renningen nach Böblingen. Direktfahrt ohne Umladen, täglich verfügbar.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "S. Steegmüller Transportdienstleistungen",
          "telephone": "+4971599396183"
        },
        "serviceType": "Local Freight Transportation",
        "areaServed": [
          { "@type": "City", "name": "Renningen" },
          { "@type": "City", "name": "Böblingen" }
        ],
        "offers": {
          "@type": "Offer",
          "description": "Transport Renningen nach Böblingen",
          "priceRange": "€18-€100",
          "availability": "Mo-Sa"
        }
      })
    }
  ]
})
</script>