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
        <div class="relative h-64 bg-gradient-to-r from-purple-600 to-purple-500">
          <div class="absolute inset-0 bg-black bg-opacity-20" />
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-center text-white">
              <h1 class="text-4xl font-bold mb-4">Logistik-Trends 2025: Was kommt auf uns zu?</h1>
              <p class="text-xl opacity-90">Die Zukunft der Transport- und Logistikbranche</p>
            </div>
          </div>
        </div>

        <!-- Article Meta -->
        <div class="p-6 border-b border-gray-200 dark:border-gray-700">
          <div class="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
            <div class="flex items-center space-x-4">
              <span>📅 10. Januar 2025</span>
              <span>⏱️ 10 Min. Lesezeit</span>
              <span>🏷️ Logistik, Trends, Zukunft</span>
            </div>
            <div class="flex items-center space-x-2">
              <span>👁️ 2.1k Aufrufe</span>
            </div>
          </div>
        </div>

        <!-- Article Body -->
        <div class="p-6 prose prose-lg max-w-none dark:prose-invert">
          <p class="text-xl text-gray-700 dark:text-gray-300 mb-6">
            Die Logistikbranche steht vor einem tiefgreifenden Wandel. Digitalisierung,
            Nachhaltigkeit und neue Geschäftsmodelle prägen die Zukunft. Hier sind die wichtigsten
            Trends für 2025.
          </p>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            1. Künstliche Intelligenz und Automatisierung
          </h2>
          <p class="text-gray-700 dark:text-gray-300 mb-4">
            KI wird die Logistik revolutionieren. Von prädiktiver Wartung über optimierte
            Routenplanung bis hin zu automatisierten Lagerprozessen – die Technologie macht
            Transporte effizienter und kostengünstiger.
          </p>
          <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-6">
            <p class="text-blue-800 dark:text-blue-200 font-medium">
              💡 Beispiel: Intelligente LKWs, die sich selbst optimieren und vorausschauend
              Wartungen planen.
            </p>
          </div>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            2. Nachhaltigkeit und Green Logistics
          </h2>
          <p class="text-gray-700 dark:text-gray-300 mb-4">
            Der Druck für umweltfreundliche Transporte wächst. Elektrofahrzeuge, alternative
            Kraftstoffe und CO2-neutrale Lieferketten werden zum Standard.
          </p>
          <ul class="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
            <li><strong>E-LKWs:</strong> Immer mehr Hersteller bieten elektrische Nutzfahrzeuge</li>
            <li><strong>Wasserstoff:</strong> Als Alternative für schwere Transporte</li>
            <li><strong>Carbon Footprint Tracking:</strong> Transparente CO2-Bilanzierung</li>
            <li><strong>Kreislaufwirtschaft:</strong> Wiederverwendung von Verpackungen</li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            3. Last-Mile Innovation
          </h2>
          <p class="text-gray-700 dark:text-gray-300 mb-4">
            Die letzte Meile wird immer wichtiger. Drohnen, autonome Fahrzeuge und Mikro-Depots
            revolutionieren die Zustellung.
          </p>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            4. Blockchain in der Lieferkette
          </h2>
          <p class="text-gray-700 dark:text-gray-300 mb-4">
            Blockchain-Technologie sorgt für Transparenz und Sicherheit in komplexen Lieferketten.
            Jeder Schritt wird dokumentiert und nachvollziehbar.
          </p>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            5. On-Demand Logistik
          </h2>
          <p class="text-gray-700 dark:text-gray-300 mb-4">
            Flexible, bedarfsgerechte Transportlösungen gewinnen an Bedeutung. Plattformen verbinden
            Angebot und Nachfrage in Echtzeit.
          </p>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            6. Robotik und Cobots
          </h2>
          <p class="text-gray-700 dark:text-gray-300 mb-4">
            Roboter arbeiten zunehmend mit Menschen zusammen. In Lagern, bei der Kommissionierung
            und sogar beim Be- und Entladen von Fahrzeugen.
          </p>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            7. Datengetriebene Optimierung
          </h2>
          <p class="text-gray-700 dark:text-gray-300 mb-4">
            Big Data und Analytics ermöglichen präzise Vorhersagen und Optimierungen. Von der
            Nachfrageprognose bis zur Wartungsplanung.
          </p>

          <div class="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg mt-8">
            <h3 class="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-3">
              Herausforderungen
            </h3>
            <p class="text-yellow-700 dark:text-yellow-300 mb-3">
              Mit den neuen Möglichkeiten kommen auch Herausforderungen:
            </p>
            <ul class="list-disc pl-6 text-yellow-700 dark:text-yellow-300">
              <li>Investitionen in neue Technologien</li>
              <li>Schulung der Mitarbeiter</li>
              <li>Cybersicherheit</li>
              <li>Regulatorische Anforderungen</li>
            </ul>
          </div>

          <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mt-8">
            <h3 class="text-xl font-bold text-green-800 dark:text-green-200 mb-3">Fazit</h3>
            <p class="text-green-700 dark:text-green-300">
              Die Logistikbranche steht vor spannenden Zeiten. Unternehmen, die frühzeitig in neue
              Technologien investieren und ihre Prozesse digitalisieren, werden langfristig
              erfolgreich sein.
            </p>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="p-6 bg-gray-50 dark:bg-gray-700">
          <div class="text-center">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Bereit für die Zukunft der Logistik?
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              Wir helfen Ihnen dabei, Ihre Transportprozesse zu modernisieren und zu optimieren.
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
  title: 'Logistik-Trends 2025: Was kommt auf uns zu? | S. Steegmüller Blog',
  meta: [
    {
      name: 'description',
      content:
        'Die wichtigsten Trends in der Logistik- und Transportbranche für 2025. KI, Nachhaltigkeit und Digitalisierung.'
    },
    {
      name: 'keywords',
      content:
        'Logistik Trends 2025, Transport Zukunft, KI Logistik, Green Logistics, Digitalisierung Transport'
    }
  ]
})
</script>
