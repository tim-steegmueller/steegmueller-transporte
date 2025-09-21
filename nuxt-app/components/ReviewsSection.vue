<template>
  <section 
    ref="reviewsSectionRef" 
    class="py-16 bg-white dark:bg-gray-800 fade-in-section" 
    :class="{ 'is-visible': reviewsIsVisible }"
  >
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
        Was unsere Kunden sagen
      </h2>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ReviewCard
          v-for="review in reviews"
          :key="review.id"
          :review="review"
        />
      </div>

      <!-- Company Info & Map -->
      <div class="text-center mt-8">
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          Familienbetrieb aus Renningen mit <strong>Werner Steegmüller</strong> als Disponenten (40 Jahre Erfahrung) und <strong>Geschäftsführerin Susanne Steegmüller</strong>. Früher Magstadter Transporte, heute S. Steegmüller Transportdienstleistungen. Spezialisiert auf <NuxtLink to="/spedition-leonberg" class="text-brand-600 hover:text-brand-500 font-medium">Spedition Leonberg</NuxtLink>, <NuxtLink to="/transport-leonberg-renningen" class="text-brand-600 hover:text-brand-500 font-medium">Express-Route Leonberg-Renningen</NuxtLink> und spontane A-nach-B Fahrten national & EU-weit.
        </p>

        <!-- Google Maps Embed -->
        <GoogleMapsEmbed v-model:show="showMap" />

        <a
          href="https://share.google.com/3XZ1BJt90R8rG2E4C"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center text-brand-600 hover:text-brand-500 font-medium"
        >
          <MapPinIcon class="h-4 w-4 mr-2" />
          Alle Bewertungen auf Google ansehen
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { MapPinIcon } from '@heroicons/vue/24/outline'
import { useIntersectionObserver } from '~/composables/useIntersectionObserver.js'
import ReviewCard from '~/components/ReviewCard.vue'
import GoogleMapsEmbed from '~/components/GoogleMapsEmbed.vue'

// Animation Refs
const reviewsSectionRef = ref(null)
const { isVisible: reviewsIsVisible } = useIntersectionObserver(reviewsSectionRef)

// Map state
const showMap = ref(false)

// Reviews Data
const reviews = ref([
  {
    id: 1,
    rating: 5,
    text: "Sehr gutes Transport Unternehmen. Habe über ihn meinen Umzug gemacht tolle Helfer sehr guter Service und Leistungen.",
    author: "Jürgen Unselt",
    source: "Google",
    date: "vor 5 Jahren"
  },
  {
    id: 2,
    rating: 5,
    text: "Pünktlich und zuverlässig und seriös. Seit vielen Jahren.",
    author: "Bog Per",
    source: "Google",
    date: "vor 5 Jahren"
  },
  {
    id: 3,
    rating: 5,
    text: "Schnell und zuverlässig. Was will man mehr.",
    author: "M",
    source: "Google",
    date: "vor 5 Jahren"
  }
])
</script>
