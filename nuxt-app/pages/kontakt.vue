<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Page Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Kontakt
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Nehmen Sie Kontakt mit uns auf. Werner Steegmüller und sein Team sind für Sie da.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div class="space-y-8">
          <!-- Contact Cards -->
          <div class="grid gap-6">
            <!-- Phone Card -->
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
              <div class="flex items-center mb-4">
                <div class="bg-brand-100 dark:bg-brand-900/30 p-3 rounded-xl">
                  <PhoneIcon class="h-6 w-6 text-brand-600 dark:text-brand-400" />
                </div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white ml-4">Telefon</h3>
              </div>
              <div class="space-y-2">
                <div>
                  <p class="text-sm text-gray-500 dark:text-gray-400">Büro</p>
                  <a href="tel:+4971599396183" class="text-lg font-semibold text-brand-600 hover:text-brand-500 transition-colors">
                    07159 939 61 83
                  </a>
                </div>
                <div>
                  <p class="text-sm text-gray-500 dark:text-gray-400">Mobil (Werner)</p>
                  <a href="tel:+491727552023" class="text-lg font-semibold text-brand-600 hover:text-brand-500 transition-colors">
                    0172 755 20 23
                  </a>
                </div>
              </div>
            </div>

            <!-- Email Card -->
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
              <div class="flex items-center mb-4">
                <div class="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl">
                  <EnvelopeIcon class="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white ml-4">E-Mail</h3>
              </div>
              <a href="mailto:wswsteegmueller@gmail.com"
                 class="text-lg font-semibold text-blue-600 hover:text-blue-500 transition-colors">
                wswsteegmueller@gmail.com
              </a>
            </div>

            <!-- WhatsApp Card -->
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
              <div class="flex items-center mb-4">
                <div class="bg-green-100 dark:bg-green-900/30 p-3 rounded-xl">
                  <svg class="h-6 w-6 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white ml-4">WhatsApp</h3>
              </div>
              <a href="https://wa.me/491727552023?text=Hallo%20Werner%2C%20ich%20hätte%20gerne%20eine%20Anfrage%20für%20einen%20Transport."
                 target="_blank" rel="noopener noreferrer"
                 class="inline-flex items-center bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                <span>Nachricht senden</span>
                <ArrowTopRightOnSquareIcon class="h-4 w-4 ml-2" />
              </a>
            </div>

            <!-- Address Card -->
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
              <div class="flex items-center mb-4">
                <div class="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-xl">
                  <MapPinIcon class="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white ml-4">Adresse</h3>
              </div>
              <div class="text-gray-700 dark:text-gray-300">
                <p class="font-semibold">S. Steegmüller Transportdienstleistungen</p>
                <p>Kornblumenweg 13</p>
                <p>71272 Renningen</p>
                <p>Deutschland</p>
                <a href="https://maps.google.com/?q=Kornblumenweg+13,+71272+Renningen"
                   target="_blank" rel="noopener noreferrer"
                   class="inline-flex items-center text-purple-600 hover:text-purple-500 mt-2 text-sm font-medium transition-colors">
                  <MapPinIcon class="h-4 w-4 mr-1" />
                  Auf Google Maps anzeigen
                </a>
              </div>
            </div>

            <!-- Opening Hours -->
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
              <div class="flex items-center mb-4">
                <div class="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-xl">
                  <ClockIcon class="h-6 w-6 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white ml-4">Öffnungszeiten</h3>
              </div>
              <div class="space-y-2 text-gray-700 dark:text-gray-300">
                <div class="flex justify-between">
                  <span>Mo - Fr:</span>
                  <span class="font-semibold">08:00 - 18:00</span>
                </div>
                <div class="flex justify-between">
                  <span>Sa - So:</span>
                  <span class="font-semibold">Nach Vereinbarung</span>
                </div>
                <div class="mt-3 text-sm text-gray-500 dark:text-gray-400">
                  <p>🚨 Notfall-Transporte auch außerhalb der Geschäftszeiten</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form and Map -->
        <div class="space-y-8">
          <!-- Contact Form -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Anfrage senden
            </h2>
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    v-model="form.name"
                    required
                    class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    v-model="form.email"
                    required
                    class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                    placeholder="ihre@email.de"
                  />
                </div>
              </div>

              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    v-model="form.phone"
                    class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                    placeholder="Ihre Telefonnummer"
                  />
                </div>
                <div>
                  <label for="service" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Service
                  </label>
                  <select
                    id="service"
                    v-model="form.service"
                    class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                  >
                    <option value="">Service auswählen</option>
                    <option value="direktfahrt">Direktfahrt</option>
                    <option value="umzug">Umzug</option>
                    <option value="notfall">Notfall-Transport</option>
                    <option value="regelmaessig">Regelmäßiger Transport</option>
                    <option value="sonstiges">Sonstiges</option>
                  </select>
                </div>
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nachricht *
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="5"
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors resize-none"
                  placeholder="Beschreiben Sie Ihren Transportbedarf..."
                ></textarea>
              </div>

              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="privacy"
                  v-model="form.privacy"
                  required
                  class="h-4 w-4 text-brand-600 focus:ring-brand-500 border-gray-300 rounded"
                />
                <label for="privacy" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  Ich habe die <NuxtLink to="/datenschutz" class="text-brand-600 hover:text-brand-500 underline">Datenschutzerklärung</NuxtLink> gelesen und akzeptiert. *
                </label>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full bg-brand-600 hover:bg-brand-500 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
              >
                <span v-if="!isSubmitting">Anfrage senden</span>
                <span v-else>Wird gesendet...</span>
              </button>

              <div v-if="submitMessage" class="text-center p-4 rounded-lg"
                   :class="submitSuccess ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'">
                {{ submitMessage }}
              </div>
            </form>
          </div>

          <!-- Google Maps -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
            <div class="p-6 border-b border-gray-100 dark:border-gray-700">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
                Unser Standort
              </h2>
              <p class="text-gray-600 dark:text-gray-300 mt-1">
                Kornblumenweg 13, 71272 Renningen
              </p>
            </div>
            <div class="h-80">
              <GoogleMap />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/vue/24/outline'
import { ref } from 'vue'
import GoogleMap from '~/components/GoogleMap.vue'

useHead({
  title: 'Kontakt - S. Steegmüller Transportdienstleistungen',
  meta: [
    { name: 'description', content: 'Kontaktieren Sie Werner Steegmüller für Ihre Transportanfragen. Telefon, E-Mail, WhatsApp und Kontaktformular verfügbar.' },
    { name: 'keywords', content: 'Kontakt, Transport Anfrage, Werner Steegmüller, Renningen, Telefon, E-Mail' }
  ]
})

// Form state
const form = ref({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
  privacy: false
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)

// Submit form
const submitForm = async () => {
  isSubmitting.value = true
  submitMessage.value = ''

  try {
    // Simulate form submission - replace with actual API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    // For now, just show success message
    submitMessage.value = 'Vielen Dank für Ihre Anfrage! Werner Steegmüller wird sich schnellstmöglich bei Ihnen melden.'
    submitSuccess.value = true

    // Reset form
    form.value = {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
      privacy: false
    }
  } catch (error) {
    submitMessage.value = 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.'
    submitSuccess.value = false
  } finally {
    isSubmitting.value = false
  }
}
</script>