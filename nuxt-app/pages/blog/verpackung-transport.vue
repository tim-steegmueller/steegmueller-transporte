<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Header -->
    <header class="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div class="max-w-4xl mx-auto px-4 py-6">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <NuxtLink to="/" class="flex items-center space-x-2">
              <img loading="lazy" decoding="async"
                src="/images/logos/steegmueller-logo.png"
                alt="S. Steegmüller Logo"
                class="h-10 w-10 object-contain rounded-lg bg-white dark:bg-gray-800 p-1 shadow-sm"
              />
              <span class="text-lg font-bold text-gray-900 dark:text-white">S. Steegmüller</span>
            </NuxtLink>
          </div>
          <div class="flex items-center space-x-4">
            <NuxtLink to="/blog" class="text-gray-600 dark:text-gray-300 hover:text-brand-600 font-medium">
              ← Zurück zum Blog
            </NuxtLink>
            <button @click="toggleDarkMode" class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
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
        <div class="relative h-64 bg-gradient-to-r from-green-600 to-green-500">
          <div class="absolute inset-0 bg-black bg-opacity-20"></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-center text-white">
              <h1 class="text-4xl font-bold mb-4">Verpackung für Transport: Der ultimative Guide</h1>
              <p class="text-xl opacity-90">Sicher, kosteneffizient und umweltfreundlich verpacken</p>
            </div>
          </div>
        </div>

        <!-- Article Meta -->
        <div class="p-6 border-b border-gray-200 dark:border-gray-700">
          <div class="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
            <div class="flex items-center space-x-4">
              <span>📅 12. Januar 2025</span>
              <span>⏱️ 6 Min. Lesezeit</span>
              <span>🏷️ Verpackung, Transport, Sicherheit</span>
            </div>
            <div class="flex items-center space-x-2">
              <span>👁️ 890 Aufrufe</span>
            </div>
          </div>
        </div>

        <!-- Article Body -->
        <div class="p-6 prose prose-lg max-w-none dark:prose-invert">
          <p class="text-xl text-gray-700 dark:text-gray-300 mb-6">
            Die richtige Verpackung ist entscheidend für sichere und kosteneffiziente Transporte. 
            Hier erfahren Sie alles über Materialien, Techniken und Best Practices.
          </p>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">1. Verpackungsmaterialien im Überblick</h2>
          
          <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">Kartonagen</h3>
          <p class="text-gray-700 dark:text-gray-300 mb-4">
            Wellpappe ist der Klassiker für die meisten Transporte. Wählen Sie die richtige Wellenart:
          </p>
          <ul class="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
            <li><strong>E-Welle:</strong> Für leichte bis mittlere Güter</li>
            <li><strong>B-Welle:</strong> Für empfindliche Elektronik</li>
            <li><strong>BC-Welle:</strong> Für schwere und wertvolle Güter</li>
          </ul>

          <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">Polstermaterialien</h3>
          <p class="text-gray-700 dark:text-gray-300 mb-4">
            Schutz vor Stößen und Vibrationen ist essentiell:
          </p>
          <ul class="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
            <li><strong>Luftpolsterfolie:</strong> Universell einsetzbar</li>
            <li><strong>Schaumstoff:</strong> Für empfindliche Oberflächen</li>
            <li><strong>Papier:</strong> Umweltfreundliche Alternative</li>
            <li><strong>Styropor:</strong> Für zerbrechliche Güter</li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">2. Verpackungstechniken</h2>
          
          <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-6">
            <h3 class="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">Die 5-S-Regel</h3>
            <ol class="list-decimal pl-6 text-blue-700 dark:text-blue-300">
              <li><strong>Sicher:</strong> Gegen Stöße und Feuchtigkeit schützen</li>
              <li><strong>Sauber:</strong> Saubere, unbeschädigte Verpackung verwenden</li>
              <li><strong>Stabil:</strong> Ausreichende Stabilität gewährleisten</li>
              <li><strong>Sparsam:</strong> Material effizient einsetzen</li>
              <li><strong>Sichtbar:</strong> Klare Kennzeichnung anbringen</li>
            </ol>
          </div>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">3. Spezielle Anforderungen</h2>
          
          <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">Elektronik</h3>
          <p class="text-gray-700 dark:text-gray-300 mb-4">
            Elektronische Geräte benötigen besonderen Schutz vor elektrostatischen Entladungen (ESD) 
            und Feuchtigkeit. Verwenden Sie antistatische Verpackungen und Silicagel-Trockenmittel.
          </p>

          <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">Lebensmittel</h3>
          <p class="text-gray-700 dark:text-gray-300 mb-4">
            Lebensmittel müssen hygienisch und temperaturstabil verpackt werden. 
            Kühlketten dürfen nicht unterbrochen werden.
          </p>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">4. Umweltaspekte</h2>
          <p class="text-gray-700 dark:text-gray-300 mb-4">
            Nachhaltige Verpackung wird immer wichtiger:
          </p>
          <ul class="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
            <li>Recyclingfähige Materialien bevorzugen</li>
            <li>Wiederverwendbare Verpackungen nutzen</li>
            <li>Verpackungsmenge minimieren</li>
            <li>Biologisch abbaubare Alternativen wählen</li>
          </ul>

          <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mt-8">
            <h3 class="text-xl font-bold text-green-800 dark:text-green-200 mb-3">Fazit</h3>
            <p class="text-green-700 dark:text-green-300">
              Die richtige Verpackung schützt nicht nur Ihre Güter, sondern spart auch Kosten 
              und schont die Umwelt. Investieren Sie in qualitativ hochwertige Verpackungen 
              und lassen Sie sich bei speziellen Anforderungen beraten.
            </p>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="p-6 bg-gray-50 dark:bg-gray-700">
          <div class="text-center">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Benötigen Sie Hilfe bei der Verpackung?
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              Wir beraten Sie gerne zu optimalen Verpackungslösungen für Ihre Transporte.
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
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }
})

// SEO
useHead({
  title: 'Verpackung für Transport: Der ultimative Guide | S. Steegmüller Blog',
  meta: [
    { name: 'description', content: 'Alles über sichere und kosteneffiziente Verpackung für Transporte. Materialien, Techniken und Best Practices.' },
    { name: 'keywords', content: 'Verpackung Transport, Verpackungsmaterialien, Transportverpackung, Verpackungstechniken' }
  ]
})
</script>
