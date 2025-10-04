<template>
  <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20">
    <h3 class="text-2xl font-bold text-white mb-6 text-center">Schnell-Anfrage senden</h3>

    <!-- Success Message -->
    <div
      v-if="formStatus === 'success'"
      class="mb-4 p-4 bg-green-500/20 border border-green-300/40 rounded-lg backdrop-blur-sm"
    >
      <p class="text-green-100 text-center font-medium">
        ✓ Ihre Notfall-Anfrage wurde versendet! Werner meldet sich schnellstmöglich.
      </p>
    </div>

    <!-- Error Message -->
    <div
      v-if="formStatus === 'error'"
      class="mb-4 p-4 bg-red-500/20 border border-red-300/40 rounded-lg backdrop-blur-sm"
    >
      <p class="text-red-100 text-center font-medium">
        ✗ Fehler beim Versenden. Bitte rufen Sie direkt an: 0172 755 20 23
      </p>
    </div>

    <form class="space-y-4" @submit.prevent="handleSubmit">
      <!-- Name & Phone in one row -->
      <div class="grid md:grid-cols-2 gap-4">
        <input
          v-model="formData.name"
          type="text"
          required
          placeholder="Name *"
          class="w-full px-4 py-3 bg-white/20 border border-white/30 text-white placeholder-white/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
        />
        <input
          v-model="formData.phone"
          type="tel"
          required
          placeholder="Telefon *"
          class="w-full px-4 py-3 bg-white/20 border border-white/30 text-white placeholder-white/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
        />
      </div>

      <!-- Message -->
      <textarea
        v-model="formData.message"
        rows="4"
        required
        placeholder="Beschreiben Sie Ihren Notfall... *"
        class="w-full px-4 py-3 bg-white/20 border border-white/30 text-white placeholder-white/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm resize-none"
      />

      <!-- Honeypot -->
      <input
        v-model="formData.company"
        type="text"
        class="hidden"
        tabindex="-1"
        autocomplete="off"
      />

      <!-- Submit Button -->
      <button
        type="submit"
        :disabled="isSubmitting"
        class="w-full bg-white text-red-600 hover:bg-gray-100 disabled:bg-gray-300 disabled:text-gray-500 font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:transform-none"
      >
        <span v-if="isSubmitting" class="flex items-center justify-center">
          <svg class="animate-spin h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24">
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            />
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Wird gesendet...
        </span>
        <span v-else>🚨 Notfall-Anfrage senden</span>
      </button>

      <p class="text-xs text-white/70 text-center">
        Mit dem Absenden stimmen Sie der Verarbeitung laut Datenschutzhinweis zu.
      </p>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import emailjs from '@emailjs/browser'

const config = useRuntimeConfig()

const formData = reactive({
  name: '',
  phone: '',
  message: '',
  company: '' // honeypot
})

const isSubmitting = ref(false)
const formStatus = ref(null) // null, 'success', 'error'

const handleSubmit = async () => {
  // Honeypot check
  if (formData.company) {
    console.warn('Spam detected')
    return
  }

  isSubmitting.value = true
  formStatus.value = null

  try {
    const templateParams = {
      from_name: formData.name,
      from_phone: formData.phone,
      message: `🚨 NOTFALL-ANFRAGE 🚨\n\n${formData.message}`,
      reply_to: formData.phone,
      from_email: '',
      from_start: '',
      from_ziel: '',
      from_termin: 'SOFORT / NOTFALL',
      from_service: 'Notfall-Transport'
    }

    await emailjs.send(
      config.public.emailjsServiceId,
      config.public.emailjsTemplateId,
      templateParams,
      config.public.emailjsPublicKey
    )

    formStatus.value = 'success'

    // Reset form
    formData.name = ''
    formData.phone = ''
    formData.message = ''

    // Auto-hide success message after 5 seconds
    setTimeout(() => {
      formStatus.value = null
    }, 5000)
  } catch (error) {
    console.error('EmailJS Error:', error)
    formStatus.value = 'error'

    // Auto-hide error message after 7 seconds
    setTimeout(() => {
      formStatus.value = null
    }, 7000)
  } finally {
    isSubmitting.value = false
  }
}
</script>
