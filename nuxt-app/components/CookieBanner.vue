<template>
  <transition name="fade">
    <div v-if="visible" class="fixed inset-x-0 bottom-0 z-50">
      <div class="mx-auto max-w-7xl px-4 pb-6">
        <div class="rounded-2xl bg-white/95 dark:bg-gray-900/95 backdrop-blur shadow-lg border border-gray-200 dark:border-gray-700 p-4 md:p-5">
          <div class="md:flex md:items-center md:justify-between gap-4">
            <p class="text-sm text-gray-700 dark:text-gray-200 md:max-w-3xl">
              Wir verwenden externe Inhalte (Google Maps) für Kartenansichten. Diese können Daten an Dritte übertragen.
              Mit „Akzeptieren“ erlauben Sie das Laden von Google Maps. Details in unserer
              <NuxtLink to="/datenschutz" class="text-brand-600 hover:text-brand-500 font-medium underline">Datenschutzerklärung</NuxtLink>.
            </p>
            <div class="mt-3 md:mt-0 flex gap-2 justify-end">
              <button @click="decline" class="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-700">
                Nur notwendige
              </button>
              <button @click="accept" class="px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-500 text-white text-sm font-semibold">
                Akzeptieren
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const STORAGE_KEY = 'consent_maps'
const visible = ref(false)

onMounted(() => {
  // Kurze Verzögerung für bessere UX
  setTimeout(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      // Banner anzeigen, wenn noch keine Entscheidung getroffen wurde
      visible.value = stored === null
    } catch (e) {
      visible.value = true
    }
  }, 1000)

  if (typeof window !== 'undefined') {
    window.addEventListener('consent:open', () => { visible.value = true })
  }
})

const accept = () => {
  try { localStorage.setItem(STORAGE_KEY, 'true') } catch(e) {}
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('consent:maps', { detail: true }))
  }
  visible.value = false
}

const decline = () => {
  try { localStorage.setItem(STORAGE_KEY, 'false') } catch(e) {}
  visible.value = false
}

// Für Testing: localStorage leeren um Banner erneut zu zeigen
const resetConsent = () => {
  try {
    localStorage.removeItem(STORAGE_KEY)
    visible.value = true
  } catch(e) {}
}

// Expose function globally for testing
if (typeof window !== 'undefined') {
  window.resetCookieBanner = resetConsent
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity .15s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
