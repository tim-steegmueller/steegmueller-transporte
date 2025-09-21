<template>
  <div class="overflow-x-hidden">
    <!-- Hero Section (fix gegen Überschrift-im-Slider) -->
<section ref="heroSectionRef"
  class="relative isolate bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-850 dark:to-gray-800 fade-in-section overflow-hidden"
  :class="{ 'is-visible': heroIsVisible }">
  <!-- Background Pattern -->
  <div class="absolute inset-0 pattern-dots opacity-40"></div>
  <div class="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-x-10 items-center">
    <!-- Text -->
    <div class="relative z-10 max-w-xl">
      <h1 class="text-4xl md:text-6xl leading-tight font-extrabold text-gray-900 dark:text-white" style="overflow-wrap: break-word;">
        Spedition & Transport<br class="sm:hidden">
        Renningen<br>
        <span class="text-brand-600 dark:text-brand-400">S. Steegmüller</span>
      </h1>
       <p class="mt-4 text-lg text-gray-700 dark:text-gray-200">
         <strong>Express-Spedition und Notfall-Transport</strong> in Renningen-Leonberg. Mit Werner Steegmüller als erfahrenem Disponenten für spontane A-nach-B Fahrten – 40 Jahre Erfahrung, national und EU-weit verfügbar.
       </p>
       <p class="mt-2 text-gray-700 dark:text-gray-200">
         ✓ Werner: 40 Jahre Transport ✓ A-nach-B spontan ✓ National & EU-weit ✓ Geschäftsführerin Susanne ✓ Früher Magstadter Transporte
       </p>
       
       <!-- Trust Indicators -->
       <div class="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
         <div class="flex items-center">
           <CheckCircleIcon class="h-4 w-4 text-green-500 mr-1" />
           <span>Über 40 Jahre Erfahrung</span>
         </div>
         <div class="flex items-center">
           <CheckCircleIcon class="h-4 w-4 text-green-500 mr-1" />
           <span>5.0 ⭐ Bewertung</span>
         </div>
         <div class="flex items-center">
           <CheckCircleIcon class="h-4 w-4 text-green-500 mr-1" />
           <span>Kurzfristig verfügbar</span>
         </div>
       </div>
      <div class="mt-8 flex flex-col sm:flex-row gap-4">
        <a href="tel:+4971599396183"
           class="group flex items-center justify-center bg-brand-600 hover:bg-brand-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 relative overflow-hidden">
          <PhoneIcon class="h-5 w-5 mr-2" />
          Jetzt anrufen
        </a>
        <a href="#kontakt"
           class="group flex items-center justify-center bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-8 py-4 rounded-lg font-semibold border border-gray-300 dark:border-gray-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 relative overflow-hidden">
          <TruckIcon class="h-5 w-5 mr-2" />
          Anfrage senden
        </a>
      </div>
    </div>

    <!-- Slider - Mobile Fix -->
    <div class="relative z-0 overflow-hidden rounded-2xl shadow-lg bg-white/60 dark:bg-gray-800/60 md:h-[420px] touch-pan-y">
      <div class="flex h-full transition-transform duration-500 ease-in-out"
           :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
           style="width: 500%;">
        <img
          v-for="(image, index) in slideImages"
          :key="index"
          :src="image.src"
          :alt="image.alt"
          class="w-full h-64 md:h-full object-cover flex-shrink-0"
          style="width: 20%; flex: 0 0 20%;"
          loading="lazy"
          decoding="async"
        />
      </div>

      <!-- Dots -->
      <div class="pointer-events-auto absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        <button
          v-for="(_, index) in slideImages"
          :key="index"
          @click="currentSlide = index"
          :class="['w-3 h-3 rounded-full transition-all duration-200',
                   currentSlide === index ? 'bg-white' : 'bg-white/50 hover:bg-white/75']"
          aria-label="Bild wechseln"></button>
      </div>

      <!-- Arrows -->
      <button @click="previousSlide"
              class="pointer-events-auto absolute left-4 top-1/2 -translate-y-1/2 bg-black/25 hover:bg-black/40 text-white p-2 rounded-full transition-all"
              aria-label="Vorheriges Bild">←</button>
      <button @click="nextSlide"
              class="pointer-events-auto absolute right-4 top-1/2 -translate-y-1/2 bg-black/25 hover:bg-black/40 text-white p-2 rounded-full transition-all"
              aria-label="Nächstes Bild">→</button>
    </div>
  </div>
</section>

     <!-- Services - Kompakte Mikroabschnitte -->
     <section id="leistungen" ref="leistungenSectionRef" class="py-16 bg-white dark:bg-gray-800 fade-in-section" :class="{ 'is-visible': leistungenIsVisible }">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Notfall-Transport • Express • Werner Disponent</h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">Spontane Transporte und Notfälle in Renningen-Leonberg – wenn's brennt und schnell was organisiert werden muss</p>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl hover-lift gradient-overlay">
            <div class="flex justify-center mb-4">
              <div class="p-3 bg-brand-100 dark:bg-brand-900/20 rounded-full">
                <TruckIcon class="h-8 w-8 text-brand-600 dark:text-brand-400" />
              </div>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Notfall-Transport</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">Wenn's brennt und spontan was organisiert werden muss – Werner als Disponent löst auch schwierige Situationen.</p>
            <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• Notfall-Disponent Werner</li>
              <li>• Spontane Organisation</li>
              <li>• Express bei Problemen</li>
            </ul>
          </div>
          <div class="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl hover-lift gradient-overlay">
            <div class="flex justify-center mb-4">
              <div class="p-3 bg-brand-100 dark:bg-brand-900/20 rounded-full">
                <ClockIcon class="h-8 w-8 text-brand-600 dark:text-brand-400" />
              </div>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Renningen-Leonberg Express</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">Fokus auf die Region Renningen-Leonberg und Umgebung. Kurze Wege, schnelle Reaktion, lokale Expertise.</p>
            <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• Lokaler Schwerpunkt</li>
              <li>• Kurze Anfahrtswege</li>
              <li>• Regionale Expertise</li>
            </ul>
          </div>
          <div class="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl hover-lift gradient-overlay">
            <div class="flex justify-center mb-4">
              <div class="p-3 bg-brand-100 dark:bg-brand-900/20 rounded-full">
                <MapPinIcon class="h-8 w-8 text-brand-600 dark:text-brand-400" />
              </div>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Umzugsservice</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">Komplette Umzüge in Renningen-Leonberg und Umgebung. Schnell, zuverlässig und mit lokalem Know-how.</p>
            <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• <a href="/spedition-leonberg" class="text-brand-600 hover:text-brand-500">Umzug Leonberg</a></li>
              <li>• Büroumzug Renningen</li>
              <li>• <a href="/transport-leonberg-renningen" class="text-brand-600 hover:text-brand-500">Möbel Express-Route</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

     <!-- Reviews Section -->
     <section ref="reviewsSectionRef" class="py-16 bg-white dark:bg-gray-800 fade-in-section" :class="{ 'is-visible': reviewsIsVisible }">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Was unsere Kunden sagen</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover-lift gradient-overlay">
            <div class="flex items-center mb-4">
              <div class="flex text-yellow-400">
                <StarIcon v-for="i in 5" :key="i" class="h-4 w-4 fill-current" />
              </div>
              <span class="ml-2 text-sm text-gray-600 dark:text-gray-400">vor 5 Jahren</span>
            </div>
            <p class="text-gray-700 dark:text-gray-300 mb-4">"Sehr gutes Transport Unternehmen. Habe über ihn meinen Umzug gemacht tolle Helfer sehr guter Service und Leistungen."</p>
            <div class="text-sm text-gray-600 dark:text-gray-400">
              <strong>Jürgen Unselt</strong><br>
              Rezension aus Google
            </div>
          </div>

          <div class="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover-lift gradient-overlay">
            <div class="flex items-center mb-4">
              <div class="flex text-yellow-400">
                <StarIcon v-for="i in 5" :key="i" class="h-4 w-4 fill-current" />
              </div>
              <span class="ml-2 text-sm text-gray-600 dark:text-gray-400">vor 5 Jahren</span>
            </div>
            <p class="text-gray-700 dark:text-gray-300 mb-4">"Pünktlich und zuverlässig und seriös. Seit vielen Jahren."</p>
            <div class="text-sm text-gray-600 dark:text-gray-400">
              <strong>Bog Per</strong><br>
              Rezension aus Google
            </div>
          </div>

          <div class="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover-lift gradient-overlay">
            <div class="flex items-center mb-4">
              <div class="flex text-yellow-400">
                <StarIcon v-for="i in 5" :key="i" class="h-4 w-4 fill-current" />
              </div>
              <span class="ml-2 text-sm text-gray-600 dark:text-gray-400">vor 5 Jahren</span>
            </div>
            <p class="text-gray-700 dark:text-gray-300 mb-4">"Schnell und zuverlässig. Was will man mehr."</p>
            <div class="text-sm text-gray-600 dark:text-gray-400">
              <strong>M</strong><br>
              Rezension aus Google
            </div>
          </div>
        </div>

        <div class="text-center mt-8">
          <p class="text-gray-600 dark:text-gray-300 mb-6">Familienbetrieb aus Renningen mit <strong>Werner Steegmüller</strong> als Disponenten (40 Jahre Erfahrung) und <strong>Geschäftsführerin Susanne Steegmüller</strong>. Früher Magstadter Transporte, heute S. Steegmüller Transportdienstleistungen. Spezialisiert auf <a href="/spedition-leonberg" class="text-brand-600 hover:text-brand-500 font-medium">Spedition Leonberg</a>, <a href="/transport-leonberg-renningen" class="text-brand-600 hover:text-brand-500 font-medium">Express-Route Leonberg-Renningen</a> und spontane A-nach-B Fahrten national & EU-weit.</p>

          <!-- Google Maps Embed (lazy shown on demand to speed up initial load) -->
          <div class="mb-6">
            <div v-if="!showMap" class="rounded-xl border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-800">
              <p class="text-sm text-gray-600 dark:text-gray-300 mb-3">
                Karte nur bei Bedarf laden (Datenschutz & Performance). Zum Anzeigen bitte externe Inhalte erlauben.
              </p>
              <button type="button" @click="requestMap" class="bg-brand-600 hover:bg-brand-500 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Karte anzeigen
              </button>
            </div>
            <iframe v-else
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2634.8!2d8.9335!3d48.7545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799c4b6c8b8c8b8%3A0x1234567890!2sKornblumenweg%2013%2C%2071272%20Renningen!5e0!3m2!1sde!2sde!4v1234567890"
              width="100%"
              height="250"
              style="border:0; border-radius: 12px;"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="S. Steegmüller Transportdienstleistungen - Kornblumenweg 13, 71272 Renningen">
            </iframe>
          </div>

          <a
            href="https://share.google/3XZ1BJt90R8rG2E4C"
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

     <!-- Contact Section - WERNER FORMULAR FIX -->
     <section id="kontakt" ref="kontaktSectionRef" class="bg-gray-100 dark:bg-gray-800 py-16 fade-in-section overflow-x-hidden" :class="{ 'is-visible': kontaktIsVisible }">
      <div class="w-full max-w-none sm:max-w-4xl mx-auto px-1 sm:px-4" style="margin-left: 0; margin-right: 0; padding-left: 0.5rem; padding-right: 0.5rem;">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Kontakt & Anfrage</h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">Senden Sie uns Ihre Transportanfrage oder rufen Sie uns direkt an</p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <!-- Kontakt-Info -->
          <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover-lift gradient-overlay">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Direkter Kontakt</h3>
            <div class="space-y-3">
              <div class="flex items-center">
                <PhoneIcon class="h-5 w-5 text-brand-600 mr-3" />
                <div>
                  <p class="text-gray-900 dark:text-white font-medium">Büro</p>
                  <a href="tel:+4971599396183" class="text-brand-400 hover:text-brand-300">07159 / 939 61 83</a>
                </div>
              </div>
              <div class="flex items-center">
                <PhoneIcon class="h-5 w-5 text-brand-600 mr-3" />
                <div>
                  <p class="text-gray-900 dark:text-white font-medium">Mobil</p>
                  <a href="tel:+491727552023" class="text-brand-400 hover:text-brand-300">0172 755 20 23</a>
                </div>
              </div>
              <div class="flex items-center">
                <MapPinIcon class="h-5 w-5 text-brand-600 mr-3" />
                <div>
                  <p class="text-gray-900 dark:text-white font-medium">Adresse</p>
                  <p class="text-gray-600 dark:text-gray-300">Kornblumenweg 13, 71272 Renningen</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Öffnungszeiten -->
          <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover-lift gradient-overlay">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Öffnungszeiten</h3>
            <div class="space-y-2">
              <div class="flex justify-between">
                <span class="text-gray-600 dark:text-gray-300">Montag - Freitag</span>
                <span class="text-gray-900 dark:text-white font-medium">08:00 - 18:00</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600 dark:text-gray-300">Samstag - Sonntag</span>
                <span class="text-gray-900 dark:text-white font-medium">Nach Vereinbarung</span>
              </div>
            </div>
            <div class="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <p class="text-sm text-green-800 dark:text-green-200">
                <CheckCircleIcon class="h-4 w-4 inline mr-1" />
                Kurzfristige Termine möglich
              </p>
            </div>
          </div>
        </div>
        
        <!-- Formular - WERNER EDITION MAXIMALE BREITE -->
        <div class="w-full bg-white dark:bg-gray-900 p-2 sm:p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover-lift gradient-overlay overflow-hidden" :class="{ 'debug-mode': showDebug }" style="margin-left: 0; margin-right: 0; width: calc(100vw - 1rem); max-width: 100%;">
          <h3 class="text-lg sm:text-2xl font-bold text-center text-gray-900 dark:text-white mb-4 sm:mb-6">Anfrage senden</h3>
          <!-- DEBUG: Kann entfernt werden wenn alles funktioniert -->
          <!--
          <div class="text-center mb-4">
            <button @click="showDebug = !showDebug" class="text-xs bg-red-500 text-white px-2 py-1 rounded">
              Debug: {{ showDebug ? 'AN' : 'AUS' }} (v2.0 - Input-Fix)
            </button>
            <p class="text-xs mt-1 text-gray-500">Gelbe Rahmen = Input-Breite | Grün = Container</p>
          </div>
          -->
        <form action="https://formspree.io/f/xnnbejrl" method="POST" class="space-y-3 sm:space-y-4 mobile-form w-full" style="margin: 0; padding: 0;">
          <!-- IPHONE FIX: Kein Grid auf Mobile, Flexbox stattdessen -->
          <div class="flex flex-col sm:grid sm:grid-cols-2 gap-3 sm:gap-4">
            <div class="relative w-full" style="min-width: 0; flex: 1;">
              <UserIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
              <input
                name="name"
                placeholder="Name *"
                required
                class="w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-brand-500/70 text-base"
                style="width: 100%; min-width: 0; max-width: 100%; box-sizing: border-box;"
              >
            </div>
            <div class="relative w-full" style="min-width: 0; flex: 1;">
              <PhoneIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
              <input
                name="phone"
                placeholder="Telefon *"
                required
                type="tel"
                class="w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-brand-500/70 text-base"
                style="width: 100%; min-width: 0; max-width: 100%; box-sizing: border-box;"
              >
            </div>
          </div>
          <!-- IPHONE FIX: Kein Grid auf Mobile -->
          <div class="flex flex-col sm:grid sm:grid-cols-2 gap-3 sm:gap-4">
            <div class="relative w-full" style="min-width: 0; flex: 1;">
              <MapPinIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
              <input
                name="start"
                placeholder="Startort"
                class="w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-brand-500/70 text-base"
                style="width: 100%; min-width: 0; max-width: 100%; box-sizing: border-box;"
              >
            </div>
            <div class="relative w-full" style="min-width: 0; flex: 1;">
              <MapPinIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
              <input
                name="ziel"
                placeholder="Zielort"
                class="w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-brand-500/70 text-base"
                style="width: 100%; min-width: 0; max-width: 100%; box-sizing: border-box;"
              >
            </div>
          </div>
          <div class="relative w-full">
            <CalendarIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
            <input
              type="date"
              name="termin"
              placeholder="Terminwunsch"
              class="w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-brand-500/70 text-base"
            >
          </div>
          <div class="relative w-full">
            <ChatBubbleLeftRightIcon class="absolute left-3 top-3 h-5 w-5 text-gray-400 z-10" />
            <textarea
              name="message"
              rows="3"
              placeholder="Kurzbeschreibung"
              class="w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-brand-500/70 text-base resize-none"
            ></textarea>
          </div>
          <input name="company" class="hidden" tabindex="-1" autocomplete="off">
          <div class="text-center">
            <button
              type="submit"
              class="w-full h-12 flex items-center justify-center gap-2 bg-green-600 text-white font-medium rounded-md"
            >
              <span class="text-base">Anfrage senden</span>
            </button>
            <p class="text-xs text-gray-600 dark:text-gray-400 mt-2 px-2">
              Mit dem Absenden stimmen Sie der Verarbeitung laut Datenschutzhinweis zu.
            </p>
          </div>
        </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { 
  PhoneIcon, 
  MapPinIcon, 
  ClockIcon, 
  TruckIcon,
  CheckCircleIcon,
  StarIcon,
  UserIcon,
  CalendarIcon,
  ChatBubbleLeftRightIcon,
  ArrowRightIcon
} from '@heroicons/vue/24/outline'
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useIntersectionObserver } from '~/composables/useIntersectionObserver.js'

// Animation Refs
const heroSectionRef = ref(null)
const leistungenSectionRef = ref(null)
const reviewsSectionRef = ref(null)
const kontaktSectionRef = ref(null)

const { isVisible: heroIsVisible } = useIntersectionObserver(heroSectionRef)
const { isVisible: leistungenIsVisible } = useIntersectionObserver(leistungenSectionRef)
const { isVisible: reviewsIsVisible } = useIntersectionObserver(reviewsSectionRef)
const { isVisible: kontaktIsVisible } = useIntersectionObserver(kontaktSectionRef)


// Slideshow State
const currentSlide = ref(0)
const slideImages = ref([
  { src: '/images/transport/transporter-renningen-holz.jpg', alt: 'Transporter mit Holzladung in Renningen' },
  { src: '/images/transport/direktfahrt-stuttgart-material.jpg', alt: 'Direktfahrt nach Stuttgart mit Material' },
  { src: '/images/transport/transport-service-boeblingen.jpg', alt: 'Transport Service in Böblingen' },
  { src: '/images/transport/transporter-sindelfingen-tour.jpg', alt: 'Transporter auf Sindelfingen Tour' },
  { src: '/images/transport/transport-fahrzeug-beladen.jpg', alt: 'Transport Fahrzeug beim Beladen' }
])

// Lazy map state
const showMap = ref(false)

// Debug state für Werner's iPhone-Problem
const showDebug = ref(false)

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slideImages.value.length
}

const previousSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? slideImages.value.length - 1 : currentSlide.value - 1
}

let slideTimer = null
const handleConsent = () => { showMap.value = true }

const startSlider = () => {
  if (slideTimer) return
  slideTimer = setInterval(() => {
    nextSlide()
  }, 5000)
}

const stopSlider = () => {
  if (slideTimer) {
    clearInterval(slideTimer)
    slideTimer = null
  }
}

// Request to show map: only if consent given; otherwise open cookie banner
const requestMap = () => {
  try {
    if (localStorage.getItem('consent_maps') === 'true') {
      showMap.value = true
      return
    }
  } catch (e) {}
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('consent:open'))
  }
}

onMounted(() => {
  if (heroIsVisible && heroIsVisible.value) startSlider()
  try {
    if (localStorage.getItem('consent_maps') === 'true') {
      showMap.value = true
    }
  } catch (e) {}
  if (typeof window !== 'undefined') {
    window.addEventListener('consent:maps', handleConsent)
  }
})

onUnmounted(() => {
  stopSlider()
  if (typeof window !== 'undefined') {
    window.removeEventListener('consent:maps', handleConsent)
  }
})

watch(heroIsVisible, (vis) => {
  if (vis) startSlider()
  else stopSlider()
})

// Aggressive SEO für Platz 1 Rankings
useHead({
  title: '🚛 #1 Spedition Renningen ⭐ Transport • Umzug • Express Kurier Werner | Steegmüller',
  meta: [
    { name: 'description', content: '🚛 #1 Spedition Renningen ⭐ Werner Steegmüller Disponent • 40 Jahre A-nach-B Fahrten ✓ National & EU-weit ✓ Spontane Transporte ✓ Geschäftsführerin Susanne ✓ Früher Magstadter Transporte ☎ 07159 / 939 61 83' },
    { name: 'keywords', content: 'Werner Steegmüller Disponent, Spedition Renningen, Transport Renningen, 40 Jahre Erfahrung, A nach B Fahrten, nationale Transporte, EU weite Transporte, spontane Transporte, Susanne Steegmüller Geschäftsführerin, Magstadter Transporte, S Steegmüller Transportdienstleistungen, Notfall Transport, Express Kurier Renningen, Direktfahrt national, EU Transport, Spedition Leonberg, Werner Disponent Renningen, Transportfirma Baden-Württemberg, Logistik Deutschland, internationale Transporte' },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'S. Steegmüller Transportdienstleistungen' },
    { name: 'geo.region', content: 'DE-BW' },
    { name: 'geo.placename', content: 'Renningen' },
    { name: 'geo.position', content: '48.7545;8.9335' },
    { name: 'ICBM', content: '48.7545, 8.9335' },
    
    // Open Graph für Social Media Dominanz
    { property: 'og:title', content: '#1 Spedition Renningen • Werner Steegmüller Disponent • 40 Jahre A-nach-B Fahrten' },
    { property: 'og:description', content: 'Werner Steegmüller Disponent – 40 Jahre spontane A-nach-B Fahrten national & EU-weit! Geschäftsführerin Susanne Steegmüller. Früher Magstadter Transporte.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://steegmuellertransporte.de' },
    { property: 'og:site_name', content: 'S. Steegmüller Transportdienstleistungen' },
    { property: 'og:locale', content: 'de_DE' },
    { property: 'og:image', content: 'https://steegmuellertransporte.de/images/transport/transporter-renningen-holz.jpg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'S. Steegmüller Transporter in Renningen' },
    
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'S. Steegmüller Transportdienstleistungen | Direktfahrten seit 30 Jahren' },
    { name: 'twitter:description', content: 'Direktfahrten ohne Umladen – zuverlässig in Renningen, Böblingen, Sindelfingen, Leonberg und Stuttgart' },
    { name: 'twitter:image', content: 'https://steegmuellertransporte.de/images/transport/transporter-renningen-holz.jpg' },
    
    // Business
    { name: 'business:contact_data:street_address', content: 'Kornblumenweg 13' },
    { name: 'business:contact_data:locality', content: 'Renningen' },
    { name: 'business:contact_data:postal_code', content: '71272' },
    { name: 'business:contact_data:country_name', content: 'Deutschland' },
    { name: 'business:contact_data:phone_number', content: '+4971599396183' },
    { name: 'business:contact_data:email', content: 'wswsteegmueller@gmail.com' }
  ],
  link: [
    { rel: 'canonical', href: 'https://steegmuellertransporte.de' },
    { rel: 'alternate', hreflang: 'de', href: 'https://steegmuellertransporte.de' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/favicons/fast-16.png' },
    { rel: 'icon', type: 'image/png', sizes: '24x24', href: '/images/favicons/fast-24.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/favicons/fast-32.png' },
    { rel: 'icon', type: 'image/png', sizes: '64x64', href: '/images/favicons/fast-64.png' },
    { rel: 'icon', type: 'image/png', sizes: '128x128', href: '/images/favicons/fast-128.png' },
    { rel: 'icon', type: 'image/png', sizes: '256x256', href: '/images/favicons/fast-256.png' },
    { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/images/favicons/fast-512.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/favicons/fast-256.png' },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "S. Steegmüller Transportdienstleistungen",
        "alternateName": "Steegmüller Transport",
        "url": "https://steegmuellertransporte.de",
        "logo": "https://steegmuellertransporte.de/images/logos/steegmueller-logo.png",
        "image": "https://steegmuellertransporte.de/images/transport/transporter-renningen-holz.jpg",
        "description": "Professionelle Spedition und Transportdienstleistungen mit Werner Steegmüller als Disponenten. Spontane A-nach-B Fahrten national und EU-weit. 40 Jahre Erfahrung, Geschäftsführerin Susanne Steegmüller.",
        "telephone": "+4971599396183",
        "email": "wswsteegmueller@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Kornblumenweg 13",
          "addressLocality": "Renningen",
          "postalCode": "71272",
          "addressRegion": "Baden-Württemberg",
          "addressCountry": "DE"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 48.7545,
          "longitude": 8.9335
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Renningen"
          },
          {
            "@type": "City", 
            "name": "Böblingen"
          },
          {
            "@type": "City",
            "name": "Sindelfingen"
          },
          {
            "@type": "City",
            "name": "Leonberg"
          },
          {
            "@type": "City",
            "name": "Stuttgart"
          }
        ],
        "openingHours": [
          "Mo-Fr 08:00-18:00"
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "18:00"
          }
        ],
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": 48.7545,
            "longitude": 8.9335
          },
          "geoRadius": "50000"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Speditions- und Transportdienstleistungen",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Notfall-Transport mit Werner Disponent",
                "description": "Spontane Transporte und Notfälle in Renningen-Leonberg mit Werner als erfahrenem Disponenten - wenn's brennt sind wir da",
                "serviceType": "Emergency Transportation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Express und Same-Day Delivery",
                "description": "Schnelle Expresstransporte und Same-Day Delivery im Raum Stuttgart mit eingespielten regionalen Strecken",
                "serviceType": "Courier Service"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Firmentransporte und Logistik",
                "description": "Regelmäßige Firmentransporte und Logistiklösungen für Unternehmen in der Region Baden-Württemberg",
                "serviceType": "Logistics Service"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Umzugsservice",
                "description": "Komplette Umzugsdienstleistungen in Renningen, Böblingen, Sindelfingen, Leonberg und Stuttgart",
                "serviceType": "Moving Service"
              }
            }
          ]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "4",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Jürgen Unselt"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "reviewBody": "Sehr gutes Transport Unternehmen. Habe über ihn meinen Umzug gemacht tolle Helfer sehr guter Service und Leistungen."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person", 
              "name": "Bog Per"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "reviewBody": "Pünktlich und zuverlässig und seriös. Seit vielen Jahren."
          }
        ],
        "sameAs": [
          "https://maps.google.com/?q=Kornblumenweg+13,+71272+Renningen"
        ],
        "foundingDate": "1985",
        "numberOfEmployees": "1-10",
        "priceRange": "€€",
        "paymentAccepted": ["Cash", "Bank Transfer"],
        "currenciesAccepted": "EUR",
        "vatID": "DE285111838",
        "taxID": "DE285111838",
        "legalName": "S. Steegmüller Transportdienstleistungen",
        "founder": {
          "@type": "Person",
          "name": "Werner Steegmüller",
          "jobTitle": "Disponent"
        },
        "ceo": {
          "@type": "Person",
          "name": "Susanne Steegmüller",
          "jobTitle": "Geschäftsführerin"
        },
        "knowsAbout": ["Notfall-Transport", "Werner Disponent", "Spontane Transporte", "Express wenn's brennt", "Renningen-Leonberg Express", "Same Day Delivery", "Kreative Problemlösung", "Kurzfristige Verfügbarkeit"],
        "hasMap": "https://maps.google.com/?q=Kornblumenweg+13,+71272+Renningen",
        "additionalType": ["https://schema.org/DeliveryService", "https://schema.org/MovingCompany"],
        "slogan": "Werner Steegmüller - 40 Jahre spontane A-nach-B Fahrten national & EU-weit",
        "keywords": "Spedition Renningen, Transport Renningen, Werner Disponent, Notfall Transport, Kurierdienst Renningen, Spedition Leonberg, Transport Leonberg, Express Kurier"
      })
    }
  ]
})
</script>
<style scoped>
.pattern-dots {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-size: 60px 60px;
}
</style>
// Lazy map state\nconst showMap = ref(false)
