<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Blog Header -->
    <div class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-4">
      <div class="max-w-4xl mx-auto px-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <NuxtLink to="/" class="flex items-center space-x-2">
              <img
                src="/images/logos/steegmueller-logo.png"
                alt="S. Steegmüller Logo"
                class="h-10 w-10 object-contain rounded-lg bg-white dark:bg-gray-800 p-1 shadow-sm"
                loading="lazy" decoding="async" />
              <span class="text-lg font-bold text-gray-900 dark:text-white">S. Steegmüller</span>
            </NuxtLink>
          </div>
          <div class="flex items-center space-x-4">
            <NuxtLink to="/blog" class="text-gray-600 dark:text-gray-300 hover:text-brand-600 font-medium">
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
            <span>3 Min. Lesezeit</span>
            <span class="mx-2">•</span>
            <span>Regional</span>
            <span class="mx-2">•</span>
            <span>12. Januar 2025</span>
          </div>
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Warum regionale Transporte wichtig sind
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Wir sind jeden Tag zwischen Renningen, Böblingen, Sindelfingen, Leonberg und Stuttgart unterwegs. Diese kurzen Wege und unsere Ortskenntnis sparen Zeit – und oft auch Nerven. Hier erkläre ich, warum regionale Transporte in der Praxis so gut funktionieren.
          </p>
        </header>

        <!-- Featured Image -->
        <div class="mb-8">
          <img
            src="/images/transport/transporter-renningen-holz.jpg"
            alt="Transporter mit Holzladung in Renningen"
            class="w-full h-64 object-cover rounded-lg shadow-md ring-1 ring-black/5 dark:ring-white/10 brightness-105 contrast-110 saturate-110"
            loading="lazy" decoding="async" />
        </div>

        <!-- Article Content -->
        <div class="prose prose-gray dark:prose-invert max-w-none">
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Aus unserer Erfahrung gilt: Je näher der Dienstleister dran ist, desto reibungsloser läuft der Auftrag. Kurze Abstimmungen, bekannte Anfahrten, weniger Überraschungen – das zahlt direkt auf Pünktlichkeit und Qualität ein.
          </p>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Lokale Expertise und Ortskenntnis</h2>
          <p class="text-gray-700 dark:text-gray-300 mb-6">
            Regionale Transportunternehmen kennen ihre Region wie ihre Westentasche. Wir wissen, wo die besten Routen verlaufen, welche Straßen zu bestimmten Zeiten zu meiden sind und wo sich versteckte Hindernisse befinden. Diese Ortskenntnis spart nicht nur Zeit, sondern reduziert auch das Risiko von Verzögerungen.
          </p>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Kürzere Wege, weniger Emissionen</h2>
          <p class="text-gray-700 dark:text-gray-300 mb-6">
            Kürzere Strecken bedeuten weniger Fahrzeit und Emissionen. Oft lassen sich Touren sinnvoll bündeln – zum Beispiel eine Abholung in Sindelfingen und eine Rückfahrt über Leonberg. Das ist effizient und schont die Umwelt.
          </p>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Persönlicher Service und Flexibilität</h2>
          <p class="text-gray-700 dark:text-gray-300 mb-4">
            Als Familienbetrieb sind wir direkt erreichbar. Wenn etwas kurzfristig dazwischenkommt, finden wir schnell eine Lösung:
          </p>
          <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
            <li>Direkter Kontakt zu den Fahrern</li>
            <li>Flexible Terminabstimmung</li>
            <li>Kurzfristige Änderungen möglich</li>
            <li>Persönliche Betreuung</li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Wirtschaftliche Vorteile für die Region</h2>
          <p class="text-gray-700 dark:text-gray-300 mb-6">
            Regionale Transportunternehmen stärken die lokale Wirtschaft. Wir beschäftigen Mitarbeiter aus der Region, arbeiten mit lokalen Partnern zusammen und investieren in die örtliche Infrastruktur. Das Geld bleibt in der Region und kommt allen zugute.
          </p>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Zuverlässigkeit durch kurze Reaktionszeiten</h2>
          <p class="text-gray-700 dark:text-gray-300 mb-6">
            Bei Problemen oder unvorhergesehenen Situationen können regionale Anbieter schnell reagieren. Wir sind vor Ort und können bei Bedarf kurzfristig Ersatzfahrzeuge oder zusätzliche Kapazitäten bereitstellen.
          </p>

          <div class="bg-brand-50 dark:bg-brand-900/20 border border-brand-200 dark:border-brand-800 rounded-lg p-6 mt-8">
            <h3 class="text-lg font-semibold text-brand-900 dark:text-brand-100 mb-3">
              🚚 Ihr regionaler Transportpartner
            </h3>
            <p class="text-brand-800 dark:text-brand-200 mb-4">
              S. Steegmüller Transportdienstleistungen - Ihr zuverlässiger Partner für regionale Transporte in Renningen, Böblingen, Sindelfingen, Leonberg und Stuttgart.
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
                Veröffentlicht am 12. Januar 2025
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
  title: 'Warum regionale Transporte wichtig sind - S. Steegmüller Transport Blog',
  meta: [
    { name: 'description', content: 'Erfahren Sie, warum regionale Transportdienstleister wie S. Steegmüller wichtige Vorteile bieten: Ortskenntnis, Nachhaltigkeit und persönlicher Service.' },
    { name: 'keywords', content: 'regionale Transporte, lokaler Service, Renningen, Böblingen, Sindelfingen, Transportdienstleister' }
  ]
})
</script>
