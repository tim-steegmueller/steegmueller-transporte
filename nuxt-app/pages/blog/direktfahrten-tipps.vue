<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">

    <!-- Article Content -->
    <article class="max-w-4xl mx-auto px-4 py-12">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <!-- Article Header -->
        <header class="mb-8">
          <div class="flex items-center text-sm text-gray-500 mb-4">
            <ClockIcon class="h-4 w-4 mr-1" />
            <span>5 Min. Lesezeit</span>
            <span class="mx-2">•</span>
            <span>Transport Tipps</span>
            <span class="mx-2">•</span>
            <span>15. Januar 2025</span>
          </div>
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            5 Tipps für stressfreie Direktfahrten
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Direktfahrten sind dann entspannt, wenn Planung und Abstimmung stimmen. Hier sind fünf kurze Tipps aus unserem Alltag – einfach, praktisch und sofort anwendbar.
          </p>
        </header>

        <!-- Featured Image -->
        <div class="mb-8">
          <img
            src="/images/transport/direktfahrt-stuttgart-material.webp"
            alt="Direktfahrt nach Stuttgart mit Material"
            class="w-full h-64 object-cover rounded-lg shadow-md ring-1 ring-black/5 dark:ring-white/10 brightness-105 contrast-110 saturate-110"
            loading="lazy" decoding="async" />
        </div>

        <!-- Article Content -->
        <div class="prose prose-gray dark:prose-invert max-w-none">
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Als Transportunternehmen mit über 20 Jahren Erfahrung in der Region Stuttgart wissen wir, was eine erfolgreiche Direktfahrt ausmacht. In diesem Artikel teilen wir unsere bewährten Tipps, damit auch Ihre Transporte reibungslos verlaufen.
          </p>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Planung ist das A und O</h2>
          <p class="text-gray-700 dark:text-gray-300 mb-4">
            Gute Vorbereitung spart Zeit. Vor Abfahrt kurz checken:
          </p>
          <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
            <li>Verkehrszeiten und Staus</li>
            <li>Ladeflächen und Zugangsmöglichkeiten</li>
            <li>Parkmöglichkeiten am Zielort</li>
            <li>Besondere Anforderungen der Ladung</li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Kommunikation mit dem Kunden</h2>
          <p class="text-gray-700 dark:text-gray-300 mb-6">
            Kurz anrufen statt schreiben – das vermeidet Missverständnisse. Wichtig sind vor allem:
          </p>
          <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
            <li>Ankunftszeit und Kontaktdaten</li>
            <li>Besondere Anforderungen an die Ladung</li>
            <li>Mögliche Verzögerungen</li>
            <li>Zugangsvoraussetzungen</li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Sicherheit geht vor</h2>
          <p class="text-gray-700 dark:text-gray-300 mb-4">
            Die Sicherheit Ihrer Ladung und aller Beteiligten hat oberste Priorität:
          </p>
          <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
            <li>Ladungssicherung nach Vorschrift</li>
            <li>Regelmäßige Fahrzeugwartung</li>
            <li>Angemessene Fahrgeschwindigkeit</li>
            <li>Ausreichende Pausen</li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Flexibilität bei der Routenplanung</h2>
          <p class="text-gray-700 dark:text-gray-300 mb-6">
            Stau kommt vor. Wir haben immer 1–2 Alternativrouten im Kopf (Leonberg/Autobahn vs. Landstraße). Apps helfen – Erfahrung entscheidet.
          </p>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Dokumentation und Nachbereitung</h2>
          <p class="text-gray-700 dark:text-gray-300 mb-6">
            Kurze Notizen helfen beim nächsten Auftrag:
          </p>
          <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
            <li>Lieferscheine und Quittungen</li>
            <li>Fotos bei Schäden oder Problemen</li>
            <li>Kundenfeedback</li>
            <li>Lernpunkte für zukünftige Transporte</li>
          </ul>

          <div class="bg-brand-50 dark:bg-brand-900/20 border border-brand-200 dark:border-brand-800 rounded-lg p-6 mt-8">
            <h3 class="text-lg font-semibold text-brand-900 dark:text-brand-100 mb-3">
              💡 Professioneller Transportservice
            </h3>
            <p class="text-brand-800 dark:text-brand-200 mb-4">
              Benötigen Sie Unterstützung bei Ihrem Transport? S. Steegmüller Transportdienstleistungen bietet zuverlässige Direktfahrten in der Region Stuttgart.
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
                Anfrage senden
              </a>
            </div>
          </div>
        </div>

        <!-- Article Footer -->
        <footer class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4">
              <img loading="lazy" decoding="async"
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
                Veröffentlicht am 15. Januar 2025
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
  title: '5 Tipps für stressfreie Direktfahrten - S. Steegmüller Transport Blog',
  meta: [
    { name: 'description', content: 'Bewährte Tipps für erfolgreiche Direktfahrten. Planung, Kommunikation, Sicherheit und mehr von S. Steegmüller Transportdienstleistungen.' },
    { name: 'keywords', content: 'Direktfahrt, Transport Tipps, Logistik, Stuttgart, Renningen, Transportplanung' }
  ]
})
</script>
