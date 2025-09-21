<template>
  <section 
    id="kontakt" 
    ref="contactSectionRef" 
    class="bg-gray-100 dark:bg-gray-800 py-16 fade-in-section overflow-x-hidden" 
    :class="{ 'is-visible': contactIsVisible }"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Kontakt & Anfrage</h2>
        <p class="text-lg text-gray-600 dark:text-gray-300">Senden Sie uns Ihre Transportanfrage oder rufen Sie uns direkt an</p>
      </div>
      
      <div class="grid md:grid-cols-2 gap-8 mb-12">
        <!-- Contact Info -->
        <ContactInfo />
        
        <!-- Opening Hours -->
        <OpeningHours />
      </div>
      
      <!-- Contact Form -->
      <ContactForm />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useIntersectionObserver } from '~/composables/useIntersectionObserver.js'
import ContactInfo from '~/components/ContactInfo.vue'
import OpeningHours from '~/components/OpeningHours.vue'
import ContactForm from '~/components/ContactForm.vue'

// Animation Refs
const contactSectionRef = ref(null)
const { isVisible: contactIsVisible } = useIntersectionObserver(contactSectionRef)
</script>
