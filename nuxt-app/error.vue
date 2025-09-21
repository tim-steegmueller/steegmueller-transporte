<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 flex items-center justify-center px-4">
    <!-- Background Animation -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-brand-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>

    <div class="relative z-10 text-center max-w-2xl mx-auto">
      <!-- 404 Number -->
      <div class="mb-8">
        <h1 class="text-9xl md:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600 animate-pulse">
          404
        </h1>
        <div class="absolute inset-0 text-9xl md:text-[12rem] font-black text-brand-500/10 blur-sm">
          404
        </div>
      </div>

      <!-- Error Message -->
      <div class="mb-8 space-y-4">
        <h2 class="text-3xl md:text-4xl font-bold text-white">
          Ups! Diese Seite ist abgefahren 🚛
        </h2>
        <p class="text-lg text-gray-300 leading-relaxed">
          Die gesuchte Seite wurde wahrscheinlich von Werner auf eine Direktfahrt mitgenommen. 
          Aber keine Sorge – wir bringen Sie sicher zurück!
        </p>
      </div>

      <!-- Fun Facts -->
      <div class="mb-8 p-6 bg-gray-800/50 rounded-2xl border border-gray-700 backdrop-blur">
        <h3 class="text-xl font-semibold text-brand-400 mb-4">Wussten Sie schon?</h3>
        <div class="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
          <div class="flex items-center gap-2">
            <TruckIcon class="h-5 w-5 text-brand-500" />
            <span>Werner fährt seit 40 Jahren ohne Unfall</span>
          </div>
          <div class="flex items-center gap-2">
            <MapIcon class="h-5 w-5 text-brand-500" />
            <span>Über 10.000 erfolgreiche Direktfahrten</span>
          </div>
          <div class="flex items-center gap-2">
            <ClockIcon class="h-5 w-5 text-brand-500" />
            <span>Durchschnittlich 15 Minuten früher da</span>
          </div>
          <div class="flex items-center gap-2">
            <StarIcon class="h-5 w-5 text-brand-500" />
            <span>5.0 ⭐ Bewertung bei Google</span>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink
          to="/"
          class="group flex items-center justify-center gap-2 bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-700 hover:to-brand-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          <HomeIcon class="h-5 w-5" />
          Zurück zur Startseite
        </NuxtLink>
        
        <a
          href="tel:+4971599396183"
          class="group flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-xl font-semibold border border-gray-600 hover:border-brand-500 transition-all duration-300"
        >
          <PhoneIcon class="h-5 w-5" />
          07159 / 939 61 83
        </a>
      </div>

      <!-- Search Suggestion -->
      <div class="mt-8 p-4 bg-gray-800/30 rounded-xl border border-gray-700">
        <p class="text-sm text-gray-400 mb-2">Oder suchen Sie nach:</p>
        <div class="flex flex-wrap gap-2 justify-center">
          <NuxtLink to="/transport-renningen-boeblingen" class="px-3 py-1 bg-gray-700 hover:bg-brand-600 text-gray-300 hover:text-white rounded-full text-sm transition-colors">
            Transport Renningen → Böblingen
          </NuxtLink>
          <NuxtLink to="/transport-renningen-stuttgart" class="px-3 py-1 bg-gray-700 hover:bg-brand-600 text-gray-300 hover:text-white rounded-full text-sm transition-colors">
            Transport Renningen → Stuttgart
          </NuxtLink>
          <NuxtLink to="/notfall-transport" class="px-3 py-1 bg-gray-700 hover:bg-brand-600 text-gray-300 hover:text-white rounded-full text-sm transition-colors">
            Notfall-Transport
          </NuxtLink>
        </div>
      </div>

      <!-- Footer -->
      <div class="mt-12 text-center">
        <p class="text-gray-500 text-sm">
          © 2025 S. Steegmüller Transportdienstleistungen • 
          <NuxtLink to="/impressum" class="text-brand-400 hover:text-brand-300">Impressum</NuxtLink> • 
          <NuxtLink to="/datenschutz" class="text-brand-400 hover:text-brand-300">Datenschutz</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { 
  TruckIcon, 
  MapIcon, 
  ClockIcon, 
  StarIcon, 
  HomeIcon, 
  PhoneIcon 
} from '@heroicons/vue/24/outline'

// SEO für 404-Seite
useHead({
  title: '404 - Seite nicht gefunden | S. Steegmüller Transport',
  meta: [
    { name: 'description', content: 'Die gesuchte Seite wurde nicht gefunden. Zurück zur Startseite oder rufen Sie uns direkt an: 07159 / 939 61 83' },
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})

// 404 Status Code setzen
setResponseStatus(404)
</script>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style>
