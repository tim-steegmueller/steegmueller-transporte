<template>
  <div>
    <!-- Hero Section -->
    <section
      class="bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 py-16"
    >
      <div class="max-w-4xl mx-auto px-4 text-center">
        <div
          class="inline-flex items-center bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-4 py-2 rounded-full text-sm font-medium mb-6"
        >
          <MapPinIcon class="h-4 w-4 mr-2" />
          Leonberg Focus
        </div>
        <h1 class="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
          <span class="text-green-600 dark:text-green-400">Spedition Leonberg</span><br />
          Express & Transport
        </h1>
        <p class="text-xl text-gray-700 dark:text-gray-200 mb-8">
          Ihre lokale Spedition in Leonberg mit direkter Anbindung nach Renningen. Werner als
          Disponent für spontane Transporte und Notfälle – kurze Wege, schnelle Lösungen.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+4971599396183"
            class="bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
          >
            <PhoneIcon class="h-5 w-5 mr-2" />
            Leonberg: 07159 / 939 61 83
          </a>
          <a
            href="#kontakt"
            class="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-8 py-4 rounded-lg font-semibold border border-gray-300 dark:border-gray-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center"
          >
            <TruckIcon class="h-5 w-5 mr-2" />
            Transport anfragen
          </a>
        </div>
      </div>
    </section>

    <!-- Leonberg Services -->
    <section class="py-16 bg-white dark:bg-gray-800">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Transport & Spedition in Leonberg
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl hover:shadow-lg transition-shadow">
            <div class="flex items-center mb-4">
              <TruckIcon class="h-8 w-8 text-green-600 mr-3" />
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Express Transport Leonberg
              </h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              Direkte Transporte in und um Leonberg. Fokus auf regionale Strecken mit kurzen
              Anfahrtswegen.
            </p>
            <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• Leonberg ↔ Renningen Express</li>
              <li>• Same-Day Delivery Leonberg</li>
              <li>• Kurze Reaktionszeiten</li>
            </ul>
          </div>

          <div class="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl hover:shadow-lg transition-shadow">
            <div class="flex items-center mb-4">
              <ClockIcon class="h-8 w-8 text-blue-600 mr-3" />
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Notfall-Service Leonberg
              </h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              Werner als Disponent für spontane Transportlösungen in Leonberg. Wenn's brennt, sind
              wir da.
            </p>
            <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• Spontane Organisation</li>
              <li>• Notfall-Transporte</li>
              <li>• Kreative Problemlösung</li>
            </ul>
          </div>

          <div class="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl hover:shadow-lg transition-shadow">
            <div class="flex items-center mb-4">
              <HomeIcon class="h-8 w-8 text-orange-600 mr-3" />
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Umzug Leonberg</h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              Umzugsservice in Leonberg und Umgebung. Von der Planung bis zur Durchführung alles aus
              einer Hand.
            </p>
            <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• Privatumzug Leonberg</li>
              <li>• Büroumzug Leonberg</li>
              <li>• Möbeltransport</li>
            </ul>
          </div>

          <div class="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl hover:shadow-lg transition-shadow">
            <div class="flex items-center mb-4">
              <BuildingOfficeIcon class="h-8 w-8 text-purple-600 mr-3" />
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                B2B Logistik Leonberg
              </h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              Firmentransporte und Logistiklösungen für Unternehmen in Leonberg mit regelmäßigen
              Routen.
            </p>
            <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• Firmen-Stammkunden</li>
              <li>• Regelmäßige Touren</li>
              <li>• Zuverlässige Partner</li>
            </ul>
          </div>

          <div class="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl hover:shadow-lg transition-shadow">
            <div class="flex items-center mb-4">
              <DocumentIcon class="h-8 w-8 text-red-600 mr-3" />
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Kurier Leonberg</h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              Kurierdienst in Leonberg für wichtige Dokumente und Eilsendungen mit garantierter
              Zustellung.
            </p>
            <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• Dokumententransport</li>
              <li>• Eilsendungen</li>
              <li>• Terminzustellung</li>
            </ul>
          </div>

          <div class="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl hover:shadow-lg transition-shadow">
            <div class="flex items-center mb-4">
              <CogIcon class="h-8 w-8 text-indigo-600 mr-3" />
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Sondertransporte</h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              Spezielle Transportlösungen für ungewöhnliche Anforderungen in und um Leonberg.
            </p>
            <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• Schwertransporte</li>
              <li>• Gefahrguttransporte</li>
              <li>• Individuallösungen</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Leonberg Advantages -->
    <section class="py-16 bg-gray-100 dark:bg-gray-900">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Warum Steegmüller für Transport in Leonberg?
        </h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Lokale Expertise
            </h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              30+ Jahre Erfahrung in der Region Leonberg-Renningen. Wir kennen jeden Winkel und die
              besten Routen.
            </p>
            <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>✓ Über 30 Jahre in der Region</li>
              <li>✓ Eingespielte lokale Strecken</li>
              <li>✓ Kurze Anfahrtswege</li>
            </ul>
          </div>

          <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Werner Disponent
            </h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              Mit Werner haben Sie einen erfahrenen Disponenten, der auch schwierige Situationen
              löst.
            </p>
            <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>✓ Spontane Organisation</li>
              <li>✓ Kreative Problemlösung</li>
              <li>✓ Direkte Kommunikation</li>
            </ul>
          </div>

          <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Schnelle Reaktion
            </h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              Durch unseren Standort in Renningen erreichen wir Leonberg in kürzester Zeit.
            </p>
            <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>✓ Kurze Anfahrtswege</li>
              <li>✓ Same-Day möglich</li>
              <li>✓ Flexible Terminplanung</li>
            </ul>
          </div>

          <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Familienbetrieb
            </h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              Als Familienbetrieb stehen wir für persönlichen Service und langfristige
              Partnerschaften.
            </p>
            <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>✓ Persönlicher Kontakt</li>
              <li>✓ Zuverlässige Partnerschaft</li>
              <li>✓ Faire Preise</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section id="kontakt" class="py-16 bg-green-600 text-white">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6">Transport in Leonberg gesucht?</h2>
        <p class="text-xl mb-8 opacity-90">
          Rufen Sie Werner an oder senden Sie eine Anfrage – wir lösen Ihr Transportproblem in
          Leonberg
        </p>
        <div class="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div class="bg-white/10 p-6 rounded-xl">
            <PhoneIcon class="h-8 w-8 mx-auto mb-3" />
            <h3 class="font-semibold mb-2">Sofort anrufen</h3>
            <a href="tel:+4971599396183" class="text-xl font-bold hover:underline">
              07159 / 939 61 83
            </a>
            <p class="text-sm opacity-80 mt-1">Mo-Fr 8-18 Uhr</p>
          </div>
          <div class="bg-white/10 p-6 rounded-xl">
            <DevicePhoneMobileIcon class="h-8 w-8 mx-auto mb-3" />
            <h3 class="font-semibold mb-2">Werner Mobil</h3>
            <a href="tel:+491727552023" class="text-xl font-bold hover:underline">
              0172 755 20 23
            </a>
            <p class="text-sm opacity-80 mt-1">Auch außerhalb</p>
          </div>
        </div>
        <div class="mt-8">
          <a
            href="mailto:wswsteegmueller@gmail.com"
            class="inline-flex items-center bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            <EnvelopeIcon class="h-5 w-5 mr-2" />
            E-Mail senden
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import {
  PhoneIcon,
  DevicePhoneMobileIcon,
  MapPinIcon,
  TruckIcon,
  ClockIcon,
  HomeIcon,
  BuildingOfficeIcon,
  DocumentIcon,
  CogIcon,
  EnvelopeIcon
} from '@heroicons/vue/24/outline'

useHead({
  title: '🚚 Spedition Leonberg ⭐ Transport • Umzug • Express Kurier | Steegmüller',
  meta: [
    {
      name: 'description',
      content:
        '🚚 #1 Spedition Leonberg ⭐ Transport • Umzug • Express Kurier ✓ Werner Disponent für Notfälle ✓ Leonberg-Renningen Express ✓ Same Day Delivery ✓ 30+ Jahre Erfahrung ☎ 07159 / 939 61 83'
    },
    {
      name: 'keywords',
      content:
        'Spedition Leonberg, Transport Leonberg, Umzug Leonberg, Kurierdienst Leonberg, Express Kurier Leonberg, Werner Disponent Leonberg, Notfall Transport Leonberg, Same Day Delivery Leonberg, Direktfahrt Leonberg, Expressversand Leonberg, Soforttransport Leonberg, Transportfirma Leonberg, Speditionsunternehmen Leonberg, Logistik Leonberg, Fracht Leonberg, Gütertransport Leonberg, Eilsendung Leonberg, B2B Transport Leonberg, Firmenkurier Leonberg, Möbeltransport Leonberg, Umzugsservice Leonberg, Privatumzug Leonberg, Büroumzug Leonberg, Kurier Leonberg, Dokumententransport Leonberg, Sondertransporte Leonberg'
    },
    { name: 'robots', content: 'index, follow' },
    { name: 'geo.region', content: 'DE-BW' },
    { name: 'geo.placename', content: 'Leonberg' },
    {
      property: 'og:title',
      content: 'Spedition Leonberg • Werner Disponent • Express Transport seit 30 Jahren'
    },
    {
      property: 'og:description',
      content:
        'Lokale Spedition in Leonberg mit direkter Anbindung nach Renningen. Werner als Disponent für spontane Transporte und Notfälle.'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'S. Steegmüller Transportdienstleistungen Leonberg',
        url: 'https://steegmuellertransporte.de/spedition-leonberg',
        description:
          'Spedition und Transportdienstleistungen in Leonberg mit direkter Anbindung nach Renningen. Werner als Disponent für spontane Transporte und Notfälle.',
        telephone: '+4971599396183',
        email: 'wswsteegmueller@gmail.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Kornblumenweg 13',
          addressLocality: 'Renningen',
          postalCode: '71272',
          addressRegion: 'Baden-Württemberg',
          addressCountry: 'DE'
        },
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
        serviceArea: {
          '@type': 'City',
          name: 'Leonberg'
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Speditions- und Transportdienstleistungen Leonberg',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Express Transport Leonberg',
                description: 'Direkte Transporte in und um Leonberg mit kurzen Anfahrtswegen'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Umzug Leonberg',
                description: 'Umzugsservice in Leonberg von der Planung bis zur Durchführung'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Kurierdienst Leonberg',
                description: 'Kurierdienst in Leonberg für wichtige Dokumente und Eilsendungen'
              }
            }
          ]
        }
      })
    }
  ]
})
</script>
