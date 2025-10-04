<template>
  <section
    ref="heroSectionRef"
    class="relative isolate overflow-hidden bg-gradient-to-br from-brand-50 via-white to-white pb-24 pt-20 transition-all duration-700 dark:from-midnight-900 dark:via-midnight-900/95 dark:to-midnight-900"
    :class="{
      'opacity-100 translate-y-0': heroIsVisible,
      'opacity-0 translate-y-12': !heroIsVisible
    }"
  >
    <div
      class="absolute inset-0 -z-10 bg-subtle-grid bg-[length:22px_22px] opacity-40 dark:opacity-20"
    />
    <div class="absolute inset-x-0 top-0 -z-20 h-48 bg-hero-gradient opacity-60 blur-3xl" />

    <div
      class="mx-auto flex max-w-6xl flex-col gap-16 px-6 md:flex-row md:items-center md:gap-12 lg:px-8"
    >
      <div class="w-full max-w-xl space-y-8 text-left">
        <p class="text-sm font-semibold uppercase tracking-[0.35em] text-brand-600">
          Direktfahrten seit 1985
        </p>
        <h1 class="text-4xl font-bold text-neutral-900 md:text-5xl lg:text-6xl dark:text-white">
          S. Steegmüller Transportdienstleistungen
          <span
            class="mt-2 block text-2xl font-semibold text-brand-700 md:text-3xl dark:text-brand-400"
          >
            Express- & Direktfahrten aus Renningen
          </span>
        </h1>
        <p class="text-lg leading-relaxed text-neutral-700 dark:text-neutral-200">
          Familienbetrieb mit fester Ansprechpartnerin, eingespielter Disposition und verlässlicher
          Ankunftszeit. Wir fahren ohne Umladen direkt von A nach B – regional rund um Böblingen,
          Sindelfingen, Leonberg und Stuttgart sowie europaweit auf Anfrage.
        </p>

        <dl class="grid gap-4 sm:grid-cols-2">
          <div
            class="rounded-2xl border border-neutral-200 bg-white/70 p-4 shadow-sm backdrop-blur dark:border-midnight-700 dark:bg-midnight-800/80 dark:shadow-none"
          >
            <dt
              class="flex items-center gap-2 text-sm font-medium text-neutral-500 dark:text-neutral-300"
            >
              <BoltIcon class="h-5 w-5 text-brand-600 dark:text-brand-400" />
              Express & Same-Day
            </dt>
            <dd class="mt-1 text-base font-semibold text-neutral-900 dark:text-white">
              Start innerhalb von 90 Minuten
            </dd>
          </div>
          <div
            class="rounded-2xl border border-neutral-200 bg-white/70 p-4 shadow-sm backdrop-blur dark:border-midnight-700 dark:bg-midnight-800/80 dark:shadow-none"
          >
            <dt
              class="flex items-center gap-2 text-sm font-medium text-neutral-500 dark:text-neutral-300"
            >
              <ShieldCheckIcon class="h-5 w-5 text-brand-600 dark:text-brand-400" />
              Persönliche Betreuung
            </dt>
            <dd class="mt-1 text-base font-semibold text-neutral-900 dark:text-white">
              Direkte Abstimmung mit Werner Steegmüller
            </dd>
          </div>
          <div
            class="rounded-2xl border border-neutral-200 bg-white/70 p-4 shadow-sm backdrop-blur dark:border-midnight-700 dark:bg-midnight-800/80 dark:shadow-none"
          >
            <dt
              class="flex items-center gap-2 text-sm font-medium text-neutral-500 dark:text-neutral-300"
            >
              <MapIcon class="h-5 w-5 text-brand-600 dark:text-brand-400" />
              Region Stuttgart
            </dt>
            <dd class="mt-1 text-base font-semibold text-neutral-900 dark:text-white">
              Renningen · Böblingen · Sindelfingen · Leonberg
            </dd>
          </div>
          <div
            class="rounded-2xl border border-neutral-200 bg-white/70 p-4 shadow-sm backdrop-blur dark:border-midnight-700 dark:bg-midnight-800/80 dark:shadow-none"
          >
            <dt
              class="flex items-center gap-2 text-sm font-medium text-neutral-500 dark:text-neutral-300"
            >
              <TruckIcon class="h-5 w-5 text-brand-600 dark:text-brand-400" />
              Transporte ohne Umladen
            </dt>
            <dd class="mt-1 text-base font-semibold text-neutral-900 dark:text-white">
              Fahrzeuge bis 1.5 t Nutzlast
            </dd>
          </div>
        </dl>

        <div class="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <a
            href="tel:+491727552023"
            class="group relative flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-8 py-4 text-base font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 sm:w-auto"
          >
            <PhoneIcon class="h-5 w-5" />
            0172 755 20 23
            <span
              class="absolute inset-0 rounded-full border border-white/20 opacity-0 transition group-hover:opacity-100"
            />
          </a>
          <NuxtLink
            to="#kontakt"
            class="flex w-full items-center justify-center gap-2 rounded-full border border-transparent bg-white px-8 py-4 text-base font-semibold text-brand-700 shadow-sm transition hover:border-brand-200 hover:bg-brand-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 dark:bg-midnight-800 dark:text-neutral-100 dark:hover:bg-midnight-700 sm:w-auto"
          >
            <EnvelopeIcon class="h-5 w-5 text-brand-600 dark:text-brand-400" />
            Anfrage senden
          </NuxtLink>
        </div>

        <div class="flex flex-wrap gap-x-6 gap-y-3 text-sm text-neutral-600 dark:text-neutral-300">
          <div class="flex items-center gap-2">
            <CheckCircleIcon class="h-5 w-5 text-brand-500" />
            Lückenlose Statusmeldungen
          </div>
          <div class="flex items-center gap-2">
            <CheckCircleIcon class="h-5 w-5 text-brand-500" />
            Fester Ansprechpartner
          </div>
          <div class="flex items-center gap-2">
            <CheckCircleIcon class="h-5 w-5 text-brand-500" />
            Versicherung inklusive
          </div>
        </div>
      </div>

      <div class="relative w-full max-w-xl self-stretch">
        <!-- Image Slider -->
        <SimpleImageSlider
          :images="slideImages"
          :current-slide="currentSlide"
          @next="nextSlide"
          @previous="previousSlide"
          @slide-change="handleSlideChange"
          @pause-auto-slide="stopSlider"
          @resume-auto-slide="startSlider"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useIntersectionObserver } from '~/composables/useIntersectionObserver.js'
import {
  CheckCircleIcon,
  EnvelopeIcon,
  BoltIcon,
  MapIcon,
  PhoneIcon,
  ShieldCheckIcon,
  TruckIcon
} from '@heroicons/vue/24/outline'
import SimpleImageSlider from '~/components/SimpleImageSlider.vue'

const heroSectionRef = ref(null)
const { isVisible } = useIntersectionObserver(heroSectionRef, { threshold: 0.25 })
const heroIsVisible = isVisible

// Slideshow State
const currentSlide = ref(0)
const slideImages = ref([
  {
    src: '/images/transport/transporter-renningen-holz.webp',
    alt: 'Transporter mit Holzladung in Renningen',
    title: 'Transport von Holz und Baumaterialien'
  },
  {
    src: '/images/transport/direktfahrt-stuttgart-material.webp',
    alt: 'Direktfahrt nach Stuttgart mit Material',
    title: 'Express-Lieferungen nach Stuttgart'
  },
  {
    src: '/images/transport/transport-service-boeblingen.webp',
    alt: 'Transport Service in Böblingen',
    title: 'Regelmäßige Touren nach Böblingen'
  },
  {
    src: '/images/transport/direktfahrt-leonberg-kurz.webp',
    alt: 'Direktfahrt nach Leonberg',
    title: 'Zuverlässiger Service nach Leonberg'
  },
  {
    src: '/images/transport/transport-fahrzeug-beladen.webp',
    alt: 'Transport Fahrzeug beim Beladen',
    title: 'Professionelle Ladungssicherung'
  }
])

// Slider Controls
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slideImages.value.length
}

const previousSlide = () => {
  currentSlide.value =
    currentSlide.value === 0 ? slideImages.value.length - 1 : currentSlide.value - 1
}

const handleSlideChange = index => {
  currentSlide.value = index
}

// Simple auto-slide functionality
let slideTimer = null

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

onMounted(() => {
  if (heroIsVisible && heroIsVisible.value) {
    startSlider()
  }
})

onUnmounted(() => {
  stopSlider()
})

watch(heroIsVisible, vis => {
  if (vis) {
    startSlider()
  } else {
    stopSlider()
  }
})
</script>
