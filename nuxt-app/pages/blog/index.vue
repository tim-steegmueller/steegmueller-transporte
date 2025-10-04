<template>
  <div>
    <!-- Blog Header -->
    <div class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-4">
      <div class="max-w-4xl mx-auto px-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <NuxtLink
              to="/"
              class="text-gray-600 dark:text-gray-300 hover:text-brand-600 font-medium"
            >
              ← Zurück zur Startseite
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Hero Section -->
    <section class="relative isolate bg-gradient-to-r from-brand-600 to-brand-500 text-white py-16">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6 text-white">Transport Blog</h1>
        <p class="text-xl opacity-90">
          Tipps, Erfahrungen und Wissenswertes rund um Transport und Logistik in der Region
          Stuttgart
        </p>
      </div>
    </section>

    <!-- Blog Posts Grid -->
    <section class="py-16">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-8">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Blog-Artikel</h2>
          <p class="text-gray-600 dark:text-gray-300">Alle Artikel sind verfügbar</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Blog Post 1 -->
          <article
            class="group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1"
          >
            <NuxtLink to="/blog/direktfahrten-tipps">
              <img
                src="/images/transport/direktfahrt-stuttgart-material.webp"
                alt="Direktfahrt Stuttgart"
                class="w-full h-48 object-cover"
                loading="lazy"
                decoding="async"
              />
            </NuxtLink>
            <div class="p-6">
              <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                <ClockIcon class="h-4 w-4 mr-1.5" aria-hidden="true" />
                <span>5 Min. Lesezeit</span>
                <span class="mx-2">•</span>
                <span>Transport Tipps</span>
              </div>
              <h3
                class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-brand-600 transition-colors"
              >
                <NuxtLink to="/blog/direktfahrten-tipps"
                  >5 Tipps für stressfreie Direktfahrten</NuxtLink
                >
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                Wie Sie Ihre Transportaufträge optimal planen und dabei Zeit und Nerven sparen.
                Unsere bewährten Strategien aus 20 Jahren Erfahrung.
              </p>
            </div>
          </article>

          <!-- Blog Post 2 -->
          <article
            class="group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1"
          >
            <NuxtLink to="/blog/regionale-transporte">
              <img
                src="/images/transport/transporter-renningen-holz.webp"
                alt="Transport Renningen"
                class="w-full h-48 object-cover"
                loading="lazy"
                decoding="async"
              />
            </NuxtLink>
            <div class="p-6">
              <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                <ClockIcon class="h-4 w-4 mr-1.5" aria-hidden="true" />
                <span>3 Min. Lesezeit</span>
                <span class="mx-2">•</span>
                <span>Regional</span>
              </div>
              <h3
                class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-brand-600 transition-colors"
              >
                <NuxtLink to="/blog/regionale-transporte"
                  >Warum regionale Transporte wichtig sind</NuxtLink
                >
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                Lokale Transportdienstleister kennen die Region, sparen Wege und bieten persönlichen
                Service. Erfahren Sie mehr über die Vorteile.
              </p>
            </div>
          </article>

          <!-- Blog Post 3 -->
          <article
            class="group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1"
          >
            <NuxtLink to="/blog/umzug-boeblingen">
              <img
                src="/images/transport/transport-service-boeblingen.webp"
                alt="Transport Service"
                class="w-full h-48 object-cover"
                loading="lazy"
                decoding="async"
              />
            </NuxtLink>
            <div class="p-6">
              <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                <ClockIcon class="h-4 w-4 mr-1.5" aria-hidden="true" />
                <span>7 Min. Lesezeit</span>
                <span class="mx-2">•</span>
                <span>Umzug</span>
              </div>
              <h3
                class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-brand-600 transition-colors"
              >
                <NuxtLink to="/blog/umzug-boeblingen">Umzug in Böblingen: Checkliste</NuxtLink>
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                Von der Planung bis zur Durchführung - mit unserer erprobten Checkliste wird Ihr
                Umzug in Böblingen zum Erfolg.
              </p>
            </div>
          </article>

          <!-- Blog Post 4 -->
          <article
            class="group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1"
          >
            <NuxtLink to="/blog/transportkosten-sparen">
              <img
                src="/images/transport/transporter-laderaum-offen.webp"
                alt="Transportkosten sparen"
                class="w-full h-48 object-cover"
                loading="lazy"
                decoding="async"
              />
            </NuxtLink>
            <div class="p-6">
              <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                <ClockIcon class="h-4 w-4 mr-1.5" aria-hidden="true" />
                <span>8 Min. Lesezeit</span>
                <span class="mx-2">•</span>
                <span>Kosten</span>
              </div>
              <h3
                class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-brand-600 transition-colors"
              >
                <NuxtLink to="/blog/transportkosten-sparen"
                  >Transportkosten sparen: 7 bewährte Strategien</NuxtLink
                >
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                Praktische Tipps für Unternehmen und Privatpersonen, um Transportkosten effektiv zu
                reduzieren und zu optimieren.
              </p>
            </div>
          </article>

          <!-- Blog Post 5 -->
          <article
            class="group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1"
          >
            <NuxtLink to="/blog/verpackung-transport">
              <img
                src="/images/transport/transport-fahrzeug-beladen.webp"
                alt="Verpackung Transport"
                class="w-full h-48 object-cover"
                loading="lazy"
                decoding="async"
              />
            </NuxtLink>
            <div class="p-6">
              <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                <ClockIcon class="h-4 w-4 mr-1.5" aria-hidden="true" />
                <span>6 Min. Lesezeit</span>
                <span class="mx-2">•</span>
                <span>Verpackung</span>
              </div>
              <h3
                class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-brand-600 transition-colors"
              >
                <NuxtLink to="/blog/verpackung-transport"
                  >Verpackung für Transport: Der ultimative Guide</NuxtLink
                >
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                Alles über sichere und kosteneffiziente Verpackung für Transporte. Materialien,
                Techniken und Best Practices.
              </p>
            </div>
          </article>

          <!-- Blog Post 6 -->
          <article
            class="group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1"
          >
            <NuxtLink to="/blog/logistik-trends-2025">
              <img
                src="/images/transport/direktfahrt-leonberg-kurz.webp"
                alt="Logistik Trends 2025"
                class="w-full h-48 object-cover"
                loading="lazy"
                decoding="async"
              />
            </NuxtLink>
            <div class="p-6">
              <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                <ClockIcon class="h-4 w-4 mr-1.5" aria-hidden="true" />
                <span>10 Min. Lesezeit</span>
                <span class="mx-2">•</span>
                <span>Trends</span>
              </div>
              <h3
                class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-brand-600 transition-colors"
              >
                <NuxtLink to="/blog/logistik-trends-2025"
                  >Logistik-Trends 2025: Was kommt auf uns zu?</NuxtLink
                >
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                Die wichtigsten Trends in der Logistik- und Transportbranche für 2025. KI,
                Nachhaltigkeit und Digitalisierung.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Newsletter Signup -->
    <section class="bg-gray-100 dark:bg-gray-800 py-12">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Bleiben Sie informiert
        </h2>
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          Erhalten Sie neue Transport-Tipps und regionale Neuigkeiten direkt in Ihr Postfach
        </p>
        <div class="flex max-w-md mx-auto">
          <input
            type="email"
            placeholder="Ihre E-Mail Adresse"
            class="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
          <button
            class="bg-brand-600 hover:bg-brand-500 text-white px-6 py-3 rounded-r-lg font-semibold transition-colors"
          >
            Anmelden
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ClockIcon } from '@heroicons/vue/24/outline'

useHead({
  title: 'Transport Blog - S. Steegmüller Transportdienstleistungen',
  meta: [
    {
      name: 'description',
      content:
        'Tipps, Erfahrungen und Wissenswertes rund um Transport und Logistik in der Region Stuttgart von S. Steegmüller'
    }
  ]
})
</script>
