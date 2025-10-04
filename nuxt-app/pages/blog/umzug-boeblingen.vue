<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Blog Header -->
    <div class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-4">
      <div class="max-w-4xl mx-auto px-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <NuxtLink to="/" class="flex items-center space-x-2">
              <img
                loading="lazy"
                decoding="async"
                src="/images/logos/steegmueller-logo.png"
                alt="S. Steegmüller Logo"
                class="h-10 w-10 object-contain rounded-lg bg-white dark:bg-gray-800 p-1 shadow-sm"
              />
              <span class="text-lg font-bold text-gray-900 dark:text-white">S. Steegmüller</span>
            </NuxtLink>
          </div>
          <div class="flex items-center space-x-4">
            <NuxtLink
              to="/blog"
              class="text-gray-600 dark:text-gray-300 hover:text-brand-600 font-medium"
            >
              ← Zurück zum Blog
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Article Content -->
    <article class="max-w-4xl mx-auto px-4 py-12">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <!-- Article Header -->
        <header class="mb-8">
          <div class="flex items-center text-sm text-gray-500 mb-4">
            <ClockIcon class="h-4 w-4 mr-1" />
            <span>7 Min. Lesezeit</span>
            <span class="mx-2">•</span>
            <span>Umzug</span>
            <span class="mx-2">•</span>
            <span>10. Januar 2025</span>
          </div>
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Umzug in Böblingen: Checkliste
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Von der Planung bis zur Durchführung - mit unserer erprobten Checkliste wird Ihr Umzug
            in Böblingen zum Erfolg.
          </p>
        </header>

        <!-- Featured Image -->
        <div class="mb-8">
          <img
            loading="lazy"
            decoding="async"
            src="/images/transport/transport-service-boeblingen.webp"
            alt="Transport Service in Böblingen"
            class="w-full h-64 object-cover rounded-lg shadow-md"
          />
        </div>

        <!-- Article Content -->
        <div class="prose prose-gray dark:prose-invert max-w-none">
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Ein Umzug nach Böblingen ist aufregend, aber auch mit viel Organisation verbunden. Als
            Transportunternehmen mit langjähriger Erfahrung in der Region haben wir bereits
            zahlreiche Umzüge erfolgreich begleitet. Hier ist unsere bewährte Checkliste für Ihren
            Umzug.
          </p>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            8-12 Wochen vor dem Umzug
          </h2>
          <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-6">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Planung und Vorbereitung
            </h3>
            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Umzugstermin festlegen</li>
              <li>Transportunternehmen auswählen und beauftragen</li>
              <li>Kündigungen (Miete, Versicherungen, etc.) einreichen</li>
              <li>Neue Adresse für wichtige Stellen anmelden</li>
              <li>Umzugsversicherung abschließen</li>
            </ul>
          </div>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            4-6 Wochen vor dem Umzug
          </h2>
          <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-6">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Organisation und Bestellungen
            </h3>
            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Umzugskartons und Verpackungsmaterial bestellen</li>
              <li>Wichtige Dokumente sammeln und kopieren</li>
              <li>Wertgegenstände separat verpacken</li>
              <li>Freunde und Familie um Hilfe bitten</li>
              <li>Parkplätze für Umzugswagen reservieren</li>
            </ul>
          </div>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            2-3 Wochen vor dem Umzug
          </h2>
          <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-6">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Packing und Vorbereitung
            </h3>
            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Nicht benötigte Gegenstände aussortieren</li>
              <li>Kartons beschriften und nummerieren</li>
              <li>Küchengeräte reinigen und verpacken</li>
              <li>Kleidung nach Jahreszeiten sortieren</li>
              <li>Elektronikgeräte fotografieren (Kabelverbindungen)</li>
            </ul>
          </div>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            1 Woche vor dem Umzug
          </h2>
          <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-6">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Finale Vorbereitungen
            </h3>
            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Kühlschrank leeren und abtauen</li>
              <li>Wäsche waschen und verpacken</li>
              <li>Wichtige Telefonnummern notieren</li>
              <li>Schlüssel für neue Wohnung organisieren</li>
              <li>Letzte Einkäufe erledigen</li>
            </ul>
          </div>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Am Umzugstag</h2>
          <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-6">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Der große Tag</h3>
            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Früh aufstehen und letzte Vorbereitungen</li>
              <li>Wichtige Dokumente und Wertgegenstände bei sich tragen</li>
              <li>Transportunternehmen empfangen und einweisen</li>
              <li>Kartons kontrollieren und abzählen</li>
              <li>Alte Wohnung final reinigen</li>
            </ul>
          </div>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Nach dem Umzug</h2>
          <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-6">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Einrichtung und Anmeldung
            </h3>
            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Wichtige Möbel zuerst aufstellen</li>
              <li>Küche einrichten und funktionsfähig machen</li>
              <li>Schlafzimmer herrichten</li>
              <li>Ummeldung beim Einwohnermeldeamt</li>
              <li>Neue Adresse bei Bank, Versicherung, etc. angeben</li>
            </ul>
          </div>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Besondere Tipps für Böblingen
          </h2>
          <p class="text-gray-700 dark:text-gray-300 mb-4">
            Als lokaler Transportdienstleister kennen wir Böblingen besonders gut:
          </p>
          <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
            <li>Parkplatzsituation in der Innenstadt beachten</li>
            <li>Anlieferzeiten für bestimmte Straßen berücksichtigen</li>
            <li>Öffentliche Verkehrsmittel für Helfer nutzen</li>
            <li>Lokale Geschäfte für letzte Einkäufe kennen</li>
          </ul>

          <div
            class="bg-brand-50 dark:bg-brand-900/20 border border-brand-200 dark:border-brand-800 rounded-lg p-6 mt-8"
          >
            <h3 class="text-lg font-semibold text-brand-900 dark:text-brand-100 mb-3">
              🏠 Professioneller Umzugsservice
            </h3>
            <p class="text-brand-800 dark:text-brand-200 mb-4">
              S. Steegmüller Transportdienstleistungen unterstützt Sie bei Ihrem Umzug nach
              Böblingen. Mit unserer Erfahrung und lokalen Kenntnis wird Ihr Umzug zum Erfolg.
            </p>
            <div class="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+4971599396183"
                class="inline-flex items-center justify-center bg-brand-600 hover:bg-brand-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <PhoneIcon class="h-4 w-4 mr-2" />
                Jetzt anrufen
              </a>
              <a
                href="#kontakt"
                class="inline-flex items-center justify-center bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-brand-600 border border-brand-600 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Umzugsanfrage senden
              </a>
            </div>
          </div>
        </div>

        <!-- Article Footer -->
        <footer class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4">
              <img
                loading="lazy"
                decoding="async"
                src="/images/logos/steegmueller-logo.png"
                alt="S. Steegmüller"
                class="h-12 w-12 object-contain rounded-lg bg-white dark:bg-gray-800 p-2 shadow-sm"
              />
              <div>
                <p class="font-semibold text-gray-900 dark:text-white">S. Steegmüller</p>
                <p class="text-sm text-gray-600 dark:text-gray-400">Transportdienstleistungen</p>
              </div>
            </div>
            <div class="text-right">
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Veröffentlicht am 10. Januar 2025
              </p>
            </div>
          </div>
        </footer>
      </div>
    </article>
  </div>
</template>

<script setup>
import { ClockIcon, PhoneIcon } from '@heroicons/vue/24/outline'

useHead({
  title: 'Umzug in Böblingen: Checkliste - S. Steegmüller Transport Blog',
  meta: [
    {
      name: 'description',
      content:
        'Komplette Checkliste für Ihren Umzug nach Böblingen. Von der Planung bis zur Durchführung - mit Tipps von S. Steegmüller Transportdienstleistungen.'
    },
    {
      name: 'keywords',
      content: 'Umzug Böblingen, Umzugscheckliste, Transport Böblingen, Umzugsservice, Renningen'
    }
  ]
})
</script>
