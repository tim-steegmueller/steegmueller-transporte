<template>
  <div>
    <!-- Hero Section -->
    <section
      class="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 py-16"
    >
      <div class="max-w-4xl mx-auto px-4 text-center">
        <div
          class="inline-flex items-center bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-4 py-2 rounded-full text-sm font-medium mb-6"
        >
          <ArrowPathIcon class="h-4 w-4 mr-2" />
          Express Route
        </div>
        <h1 class="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
          Transport<br />
          <span class="text-orange-600 dark:text-orange-400">Leonberg ↔ Renningen</span>
        </h1>
        <p class="text-xl text-gray-700 dark:text-gray-200 mb-8">
          Die schnellste Verbindung zwischen Leonberg und Renningen. Mit Werner als Disponenten für
          spontane Transporte und kurze Reaktionszeiten auf der Express-Strecke.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+4971599396183"
            class="bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
          >
            <PhoneIcon class="h-5 w-5 mr-2" />
            Express: 07159 / 939 61 83
          </a>
          <a
            href="#streckeninfo"
            class="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-8 py-4 rounded-lg font-semibold border border-gray-300 dark:border-gray-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center"
          >
            <MapIcon class="h-5 w-5 mr-2" />
            Streckeninfo
          </a>
        </div>
      </div>
    </section>

    <!-- Route Information -->
    <section id="streckeninfo" class="py-16 bg-white dark:bg-gray-800">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Express-Strecke Leonberg ↔ Renningen
        </h2>
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div
              class="bg-gradient-to-br from-orange-100 to-yellow-100 dark:from-orange-900/30 dark:to-yellow-900/30 p-8 rounded-2xl"
            >
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Strecken-Details
              </h3>
              <div class="space-y-4">
                <div class="flex items-center">
                  <MapPinIcon class="h-6 w-6 text-orange-600 mr-3" />
                  <div>
                    <p class="font-semibold text-gray-900 dark:text-white">Entfernung</p>
                    <p class="text-gray-700 dark:text-gray-300">Ca. 8 km • 12-15 Minuten</p>
                  </div>
                </div>
                <div class="flex items-center">
                  <ClockIcon class="h-6 w-6 text-blue-600 mr-3" />
                  <div>
                    <p class="font-semibold text-gray-900 dark:text-white">Fahrzeit</p>
                    <p class="text-gray-700 dark:text-gray-300">Express in unter 20 Minuten</p>
                  </div>
                </div>
                <div class="flex items-center">
                  <TruckIcon class="h-6 w-6 text-green-600 mr-3" />
                  <div>
                    <p class="font-semibold text-gray-900 dark:text-white">Fahrzeuge</p>
                    <p class="text-gray-700 dark:text-gray-300">Transporter bis 3,5t verfügbar</p>
                  </div>
                </div>
                <div class="flex items-center">
                  <CalendarIcon class="h-6 w-6 text-purple-600 mr-3" />
                  <div>
                    <p class="font-semibold text-gray-900 dark:text-white">Verfügbarkeit</p>
                    <p class="text-gray-700 dark:text-gray-300">
                      Mo-Fr 8-18 Uhr • Notfall auch außerhalb
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Optimale Route kennen wir auswendig
            </h3>
            <p class="text-gray-700 dark:text-gray-300 mb-6">
              Über 30 Jahre Erfahrung auf der Strecke Leonberg-Renningen. Werner kennt jeden Winkel,
              jede Abkürzung und die beste Tageszeit für Ihre Transporte.
            </p>
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                <p class="text-2xl font-bold text-orange-600">8km</p>
                <p class="text-sm text-gray-600 dark:text-gray-300">Direkter Weg</p>
              </div>
              <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                <p class="text-2xl font-bold text-blue-600">15min</p>
                <p class="text-sm text-gray-600 dark:text-gray-300">Durchschnitt</p>
              </div>
              <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                <p class="text-2xl font-bold text-green-600">30+</p>
                <p class="text-sm text-gray-600 dark:text-gray-300">Jahre Erfahrung</p>
              </div>
              <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                <p class="text-2xl font-bold text-purple-600">24/7</p>
                <p class="text-sm text-gray-600 dark:text-gray-300">Notfall verfügbar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Transport Services -->
    <section class="py-16 bg-gray-100 dark:bg-gray-900">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Transport-Services auf der Strecke
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div class="flex items-center mb-4">
              <BoltIcon class="h-8 w-8 text-yellow-600 mr-3" />
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Express Same-Day</h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              Heute abholen in Leonberg, heute liefern in Renningen (oder umgekehrt). Perfekt für
              eilige Sendungen.
            </p>
            <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• Abholung binnen 2 Stunden</li>
              <li>• Direktfahrt ohne Umwege</li>
              <li>• Zustellung noch am selben Tag</li>
            </ul>
          </div>

          <div
            class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div class="flex items-center mb-4">
              <DocumentIcon class="h-8 w-8 text-blue-600 mr-3" />
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Kurier-Express</h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              Wichtige Dokumente oder kleine Pakete zwischen Leonberg und Renningen in unter einer
              Stunde.
            </p>
            <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• Dokumente sicher verpackt</li>
              <li>• Persönliche Übergabe</li>
              <li>• Empfangsbestätigung</li>
            </ul>
          </div>

          <div
            class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div class="flex items-center mb-4">
              <HomeIcon class="h-8 w-8 text-green-600 mr-3" />
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Möbel-Transport</h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              Einzelstücke oder komplette Wohnungseinrichtungen zwischen Leonberg und Renningen
              transportieren.
            </p>
            <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• Professionelle Verpackung</li>
              <li>• Montage/Demontage Service</li>
              <li>• Versicherungsschutz</li>
            </ul>
          </div>

          <div
            class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div class="flex items-center mb-4">
              <BuildingOfficeIcon class="h-8 w-8 text-indigo-600 mr-3" />
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Firmen-Shuttle</h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              Regelmäßige Transporte für Unternehmen zwischen Leonberg und Renningen. Feste Termine,
              zuverlässig.
            </p>
            <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• Wöchentliche Routen</li>
              <li>• Feste Abholzeiten</li>
              <li>• Stammkunden-Konditionen</li>
            </ul>
          </div>

          <div
            class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div class="flex items-center mb-4">
              <ExclamationTriangleIcon class="h-8 w-8 text-red-600 mr-3" />
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Notfall-Service</h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              Wenn's brennt und spontan was zwischen Leonberg und Renningen bewegt werden muss –
              Werner organisiert's.
            </p>
            <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• Sofortige Verfügbarkeit</li>
              <li>• Auch außerhalb der Zeiten</li>
              <li>• Kreative Problemlösung</li>
            </ul>
          </div>

          <div
            class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div class="flex items-center mb-4">
              <CogIcon class="h-8 w-8 text-purple-600 mr-3" />
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Sonder-Transporte</h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              Ungewöhnliche Fracht oder spezielle Anforderungen auf der Strecke Leonberg-Renningen.
            </p>
            <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• Individuelle Lösungen</li>
              <li>• Speziell-Equipment</li>
              <li>• Beratung inklusive</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Info -->
    <section class="py-16 bg-white dark:bg-gray-800">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Faire Preise für kurze Strecke
        </h2>
        <div
          class="bg-gradient-to-r from-orange-100 to-yellow-100 dark:from-orange-900/30 dark:to-yellow-900/30 p-8 rounded-2xl"
        >
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Warum faire Preise bei uns?
              </h3>
              <ul class="space-y-3 text-gray-700 dark:text-gray-300">
                <li class="flex items-center">
                  <CheckIcon class="h-5 w-5 text-green-600 mr-2" />
                  Kurze Anfahrtswege = niedrige Kosten
                </li>
                <li class="flex items-center">
                  <CheckIcon class="h-5 w-5 text-green-600 mr-2" />
                  Keine Leerfahrten durch optimale Routen
                </li>
                <li class="flex items-center">
                  <CheckIcon class="h-5 w-5 text-green-600 mr-2" />
                  Lokaler Anbieter ohne hohe Overheads
                </li>
                <li class="flex items-center">
                  <CheckIcon class="h-5 w-5 text-green-600 mr-2" />
                  Familienbetrieb mit fairen Preisen
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Kostenvoranschlag anfordern
              </h3>
              <p class="text-gray-700 dark:text-gray-300 mb-4">
                Rufen Sie Werner an und beschreiben Sie Ihren Transport. Sie erhalten sofort einen
                fairen Preis für die Strecke Leonberg-Renningen.
              </p>
              <div class="flex gap-4">
                <a
                  href="tel:+4971599396183"
                  class="bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center"
                >
                  <PhoneIcon class="h-4 w-4 mr-2" />
                  Preis erfragen
                </a>
                <a
                  href="tel:+491727552023"
                  class="bg-gray-600 hover:bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center"
                >
                  <DevicePhoneMobileIcon class="h-4 w-4 mr-2" />
                  Werner Mobil
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="py-16 bg-orange-600 text-white">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6">Transport Leonberg ↔ Renningen</h2>
        <p class="text-xl mb-8 opacity-90">
          Die Express-Verbindung mit Werner als Disponenten – wenn's schnell gehen muss
        </p>
        <div class="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div class="bg-white/10 p-6 rounded-xl">
            <PhoneIcon class="h-8 w-8 mx-auto mb-3" />
            <h3 class="font-semibold mb-2">Express-Hotline</h3>
            <a href="tel:+4971599396183" class="text-xl font-bold hover:underline">
              07159 / 939 61 83
            </a>
            <p class="text-sm opacity-80 mt-1">Sofort verfügbar</p>
          </div>
          <div class="bg-white/10 p-6 rounded-xl">
            <DevicePhoneMobileIcon class="h-8 w-8 mx-auto mb-3" />
            <h3 class="font-semibold mb-2">Werner direkt</h3>
            <a href="tel:+491727552023" class="text-xl font-bold hover:underline">
              0172 755 20 23
            </a>
            <p class="text-sm opacity-80 mt-1">Auch Notfall & Wochenende</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import {
  PhoneIcon,
  DevicePhoneMobileIcon,
  ArrowPathIcon,
  MapIcon,
  MapPinIcon,
  ClockIcon,
  TruckIcon,
  CalendarIcon,
  BoltIcon,
  DocumentIcon,
  HomeIcon,
  BuildingOfficeIcon,
  ExclamationTriangleIcon,
  CogIcon,
  CheckIcon
} from '@heroicons/vue/24/outline'

useHead({
  title: '🚛 Transport Leonberg Renningen ⚡ Express Route Werner Disponent | Steegmüller',
  meta: [
    {
      name: 'description',
      content:
        '🚛 Express Transport Leonberg ↔ Renningen ⚡ 8km in 15min ✓ Werner Disponent ✓ Same-Day Delivery ✓ Notfall-Service ✓ 30+ Jahre Strecken-Expertise ☎ 07159 / 939 61 83'
    },
    {
      name: 'keywords',
      content:
        'Transport Leonberg Renningen, Express Leonberg Renningen, Kurier Leonberg Renningen, Transport Renningen Leonberg, Same Day Delivery Leonberg Renningen, Direktfahrt Leonberg Renningen, Werner Disponent, Notfall Transport Leonberg Renningen, Spedition Leonberg Renningen, Umzug Leonberg Renningen, Möbeltransport Leonberg Renningen, Firmentransport Leonberg Renningen, Express Route, kurze Strecke, 8km Transport, schneller Transport, lokaler Transport, regionale Spedition'
    },
    { name: 'robots', content: 'index, follow' },
    { name: 'geo.region', content: 'DE-BW' },
    { name: 'geo.placename', content: 'Leonberg,Renningen' },
    {
      property: 'og:title',
      content: 'Express Transport Leonberg ↔ Renningen • Werner Disponent • 8km in 15min'
    },
    {
      property: 'og:description',
      content:
        'Die schnellste Verbindung zwischen Leonberg und Renningen. Mit Werner als Disponenten für spontane Transporte und kurze Reaktionszeiten.'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Transport Leonberg Renningen Express Route',
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
        description:
          'Express Transport zwischen Leonberg und Renningen. 8km Strecke in 15 Minuten mit Werner als erfahrenem Disponenten.',
        areaServed: [
          {
            '@type': 'City',
            name: 'Leonberg'
          },
          {
            '@type': 'City',
            name: 'Renningen'
          }
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Transport Services Leonberg Renningen',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Express Same-Day Transport',
                description: 'Same-Day Transport zwischen Leonberg und Renningen mit Direktfahrt'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Kurier Express Service',
                description:
                  'Kurierdienst für Dokumente zwischen Leonberg und Renningen in unter einer Stunde'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Notfall Transport Service',
                description:
                  'Notfall-Transporte zwischen Leonberg und Renningen auch außerhalb der Geschäftszeiten'
              }
            }
          ]
        }
      })
    }
  ]
})
</script>
