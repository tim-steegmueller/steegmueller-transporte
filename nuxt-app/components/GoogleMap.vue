<template>
  <div class="w-full h-full relative">
    <!-- Map Container -->
    <div v-if="mapsConsent" class="w-full h-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.8765432109876!2d8.9876543210987654!3d48.7654321098765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799db1234567890%3A0x1234567890abcdef!2sKornblumenweg%2013%2C%2071272%20Renningen%2C%20Germany!5e0!3m2!1sen!2sde!4v1234567890123!5m2!1sen!2sde"
        width="100%"
        height="100%"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="rounded-b-2xl"
      />
    </div>

    <!-- Consent Required Message -->
    <div
      v-else
      class="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-b-2xl"
    >
      <div class="text-center p-8">
        <div class="mb-4">
          <MapPinIcon class="h-16 w-16 text-gray-400 mx-auto" />
        </div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          Google Maps nicht verfügbar
        </h3>
        <p class="text-gray-600 dark:text-gray-300 mb-4 max-w-sm">
          Um die Karte anzuzeigen, müssen Sie externe Inhalte zulassen.
        </p>
        <button
          class="bg-brand-600 hover:bg-brand-500 text-white px-4 py-2 rounded-lg font-medium transition-colors"
          @click="requestConsent"
        >
          Karte aktivieren
        </button>
        <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">
          Alternative:
          <a
            href="https://maps.google.com/?q=Kornblumenweg+13,+71272+Renningen"
            target="_blank"
            rel="noopener noreferrer"
            class="text-brand-600 hover:text-brand-500 underline"
          >
            In Google Maps öffnen
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { MapPinIcon } from '@heroicons/vue/24/outline'

const mapsConsent = ref(false)

// Check current consent status
const updateConsent = () => {
  try {
    const consent = localStorage.getItem('consent_maps')
    mapsConsent.value = consent === 'true'
  } catch (e) {
    mapsConsent.value = false
  }
}

// Request consent
const requestConsent = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('consent:open'))
  }
}

onMounted(() => {
  updateConsent()

  if (typeof window !== 'undefined') {
    window.addEventListener('consent:maps', updateConsent)
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('consent:maps', updateConsent)
  }
})
</script>
