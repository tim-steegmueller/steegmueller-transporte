<template>
  <div class="w-full bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover-lift gradient-overlay">
    <h3 class="text-lg sm:text-2xl font-bold text-center text-gray-900 dark:text-white mb-4 sm:mb-6">Anfrage senden</h3>

    <!-- Success Message -->
    <div v-if="formStatus === 'success'" class="mb-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
      <p class="text-green-800 dark:text-green-200 text-center font-medium">
        ✓ Ihre Anfrage wurde erfolgreich versendet! Wir melden uns schnellstmöglich bei Ihnen.
      </p>
    </div>

    <!-- Error Message -->
    <div v-if="formStatus === 'error'" class="mb-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
      <p class="text-red-800 dark:text-red-200 text-center font-medium">
        ✗ Fehler beim Versenden. Bitte versuchen Sie es erneut oder rufen Sie uns direkt an: 0172 755 20 23
      </p>
    </div>

    <form
      @submit.prevent="handleSubmit"
      class="space-y-4 w-full"
    >
      <!-- Name & Phone Row -->
      <div class="flex flex-col sm:grid sm:grid-cols-2 gap-3 sm:gap-4">
        <FormField
          v-model="formData.name"
          name="name"
          placeholder="Name *"
          required
          icon="UserIcon"
        />
        <FormField
          v-model="formData.phone"
          name="phone"
          placeholder="Telefon *"
          type="tel"
          required
          icon="PhoneIcon"
        />
      </div>

      <!-- Start & Destination Row -->
      <div class="flex flex-col sm:grid sm:grid-cols-2 gap-3 sm:gap-4">
        <FormField
          v-model="formData.start"
          name="start"
          placeholder="Startort"
          icon="MapPinIcon"
        />
        <FormField
          v-model="formData.ziel"
          name="ziel"
          placeholder="Zielort"
          icon="MapPinIcon"
        />
      </div>

      <!-- Date Field -->
      <FormField
        v-model="formData.termin"
        name="termin"
        type="date"
        placeholder="Terminwunsch"
        icon="CalendarIcon"
      />

      <!-- Message Field -->
      <div class="relative w-full">
        <ChatBubbleLeftRightIcon class="absolute left-3 top-3 h-5 w-5 text-gray-400 z-10" />
        <textarea
          v-model="formData.message"
          name="message"
          rows="3"
          placeholder="Kurzbeschreibung"
          class="w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-brand-500/70 text-base resize-none"
        />
      </div>

      <!-- Hidden Honeypot Field -->
      <input v-model="formData.company" name="company" class="hidden" tabindex="-1" autocomplete="off">

      <!-- Submit Button -->
      <div class="text-center">
        <button
          type="submit"
          :disabled="isSubmitting"
          class="w-full h-12 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-medium rounded-md transition-colors"
        >
          <span v-if="isSubmitting" class="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
          <span class="text-base">{{ isSubmitting ? 'Wird gesendet...' : 'Anfrage senden' }}</span>
        </button>
        <p class="text-xs text-gray-600 dark:text-gray-400 mt-2 px-2">
          Mit dem Absenden stimmen Sie der Verarbeitung laut Datenschutzhinweis zu.
        </p>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { ChatBubbleLeftRightIcon } from '@heroicons/vue/24/outline'
import FormField from '~/components/FormField.vue'
import emailjs from '@emailjs/browser'

const config = useRuntimeConfig()

const formData = reactive({
  name: '',
  phone: '',
  start: '',
  ziel: '',
  termin: '',
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
      from_start: formData.start || 'Nicht angegeben',
      from_ziel: formData.ziel || 'Nicht angegeben',
      from_termin: formData.termin || 'Nicht angegeben',
      message: formData.message || 'Keine Nachricht',
      reply_to: formData.phone
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
    formData.start = ''
    formData.ziel = ''
    formData.termin = ''
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
