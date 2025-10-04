<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Header -->
    <header
      class="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700"
    >
      <div class="max-w-4xl mx-auto px-4 py-6">
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
            <button
              class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              @click="toggleDarkMode"
            >
              <span v-if="isDark">☀️</span>
              <span v-else>🌙</span>
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Article Content -->
    <article class="max-w-4xl mx-auto px-4 py-8">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <!-- Hero Image -->
        <div class="relative h-64 bg-gradient-to-r from-brand-600 to-brand-500">
          <div class="absolute inset-0 bg-black bg-opacity-20" />
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-center text-white">
              <h1 class="text-4xl font-bold mb-4">Transportkosten sparen: 7 bewährte Strategien</h1>
              <p class="text-xl opacity-90">Praktische Tipps für Unternehmen und Privatpersonen</p>
            </div>
          </div>
        </div>

        <!-- Article Meta -->
        <div class="p-6 border-b border-gray-200 dark:border-gray-700">
          <div class="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
            <div class="flex items-center space-x-4">
              <span>📅 15. Januar 2025</span>
              <span>⏱️ 8 Min. Lesezeit</span>
              <span>🏷️ Transport, Kosten, Tipps</span>
            </div>
            <div class="flex items-center space-x-2">
              <span>👁️ 1.2k Aufrufe</span>
            </div>
          </div>
        </div>

        <!-- Article Body -->
        <div class="p-6 prose prose-lg max-w-none dark:prose-invert">
          <p class="text-xl text-gray-700 dark:text-gray-300 mb-6">
            Transportkosten können schnell zu einem erheblichen Posten werden. Ob für Unternehmen
            oder Privatpersonen – mit den richtigen Strategien lassen sich erhebliche Einsparungen
            erzielen. Hier sind 7 bewährte Methoden.
          </p>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            1. Konsolidierung von Sendungen
          </h2>
          <p class="text-gray-700 dark:text-gray-300 mb-4">
            Statt mehrere kleine Sendungen zu versenden, sammeln Sie diese und senden sie gemeinsam.
            Dies reduziert nicht nur die Anzahl der Fahrten, sondern ermöglicht auch bessere
            Frachtraten.
          </p>
          <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-6">
            <p class="text-blue-800 dark:text-blue-200 font-medium">
              💡 Tipp: Planen Sie wöchentliche oder monatliche Sammelversendungen ein.
            </p>
          </div>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            2. Optimale Routenplanung
          </h2>
          <p class="text-gray-700 dark:text-gray-300 mb-4">
            Eine durchdachte Routenplanung kann bis zu 30% der Transportkosten einsparen. Moderne
            GPS-Systeme und Routenplanungssoftware helfen dabei, die effizientesten Wege zu finden.
          </p>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            3. Feste Transportpartner
          </h2>
          <p class="text-gray-700 dark:text-gray-300 mb-4">
            Langfristige Partnerschaften mit zuverlässigen Transportunternehmen führen zu besseren
            Konditionen. Regelmäßige Aufträge werden oft mit Rabatten belohnt.
          </p>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            4. Verpackungsoptimierung
          </h2>
          <p class="text-gray-700 dark:text-gray-300 mb-4">
            Leichtere und kompaktere Verpackungen reduzieren das Gewicht und Volumen, was sich
            direkt auf die Transportkosten auswirkt. Investieren Sie in hochwertige,
            wiederverwendbare Verpackungen.
          </p>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            5. Zeitfenster flexibel gestalten
          </h2>
          <p class="text-gray-700 dark:text-gray-300 mb-4">
            Flexible Lieferzeiten ermöglichen es Transportunternehmen, Touren besser zu optimieren.
            Dies führt zu günstigeren Preisen für Sie.
          </p>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            6. Regionale Anbieter nutzen
          </h2>
          <p class="text-gray-700 dark:text-gray-300 mb-4">
            Lokale Transportunternehmen kennen die Region besser und haben oft niedrigere
            Kostenstrukturen. Sie bieten zudem persönlicheren Service und schnellere
            Reaktionszeiten.
          </p>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            7. Technologie nutzen
          </h2>
          <p class="text-gray-700 dark:text-gray-300 mb-4">
            Tracking-Systeme, digitale Frachtbriefe und automatisierte Abrechnungen reduzieren
            Verwaltungsaufwand und Fehlerquellen, was langfristig Kosten spart.
          </p>

          <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mt-8">
            <h3 class="text-xl font-bold text-green-800 dark:text-green-200 mb-3">Fazit</h3>
            <p class="text-green-700 dark:text-green-300">
              Mit diesen Strategien können Sie Ihre Transportkosten deutlich reduzieren. Wichtig
              ist, die Maßnahmen langfristig und systematisch umzusetzen.
            </p>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="p-6 bg-gray-50 dark:bg-gray-700">
          <div class="text-center">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Benötigen Sie Hilfe bei der Transportoptimierung?
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              Wir beraten Sie gerne zu kostensparenden Transportlösungen in der Region.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+4971599396183"
                class="inline-flex items-center justify-center bg-brand-600 hover:bg-brand-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                📞 Jetzt anrufen
              </a>
              <a
                href="/#kontakt"
                class="inline-flex items-center justify-center bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-6 py-3 rounded-lg font-semibold border border-gray-300 dark:border-gray-600 transition-colors"
              >
                📝 Anfrage senden
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Dark Mode State
const isDark = ref(false)

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  // Load saved theme
  const savedTheme = localStorage.getItem('theme')
  if (
    savedTheme === 'dark' ||
    (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }
})

// SEO
useHead({
  title: 'Transportkosten sparen: 7 bewährte Strategien | S. Steegmüller Blog',
  meta: [
    {
      name: 'description',
      content:
        'Erfahren Sie, wie Sie Transportkosten effektiv reduzieren können. 7 praktische Strategien für Unternehmen und Privatpersonen.'
    },
    {
      name: 'keywords',
      content:
        'Transportkosten sparen, Transport optimieren, Frachtkosten reduzieren, Transportstrategien'
    }
  ]
})
</script>
