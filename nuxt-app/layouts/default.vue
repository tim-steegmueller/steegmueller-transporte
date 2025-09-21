<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <header class="site-header">
      <!-- Aufbau-Hinweis Banner -->
      <div
        v-if="showBuildBanner"
        class="relative z-50 border-b border-amber-200/70 dark:border-amber-700/60 bg-amber-50/95 dark:bg-amber-900/30 backdrop-blur"
        role="status"
        aria-live="polite"
      >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center gap-3 text-amber-900 dark:text-amber-100">
          <svg class="h-5 w-5 text-amber-600 dark:text-amber-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.72-1.36 3.485 0l6.518 11.595c.75 1.335-.213 2.991-1.742 2.991H3.481c-1.53 0-2.492-1.656-1.742-2.99L8.257 3.1zM11 14a1 1 0 10-2 0 1 1 0 002 0zm-1-2a.75.75 0 01-.75-.75V7.25a.75.75 0 011.5 0v3.999A.75.75 0 0110 12z" clip-rule="evenodd" />
          </svg>
          <p class="text-sm sm:text-[15px]">
            Hinweis: Diese Website befindet sich im Aufbau. Inhalte werden laufend ergänzt.
            Bei Anfragen bitte direkt anrufen: <a class="font-semibold underline decoration-amber-500/60 hover:decoration-amber-500" href="tel:+4971599396183">07159 939 61 83</a>
          </p>
          <button
            type="button"
            class="ml-auto inline-flex items-center rounded-full px-3 py-1 text-xs font-medium text-amber-900/80 dark:text-amber-100/80 hover:text-amber-900 dark:hover:text-white hover:bg-amber-200/60 dark:hover:bg-amber-700/40 transition"
            @click="dismissBuildBanner"
            aria-label="Banner schließen"
          >
            Schließen
          </button>
        </div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between gap-4 py-6">
          <NuxtLink to="/" class="flex items-center gap-6 group">
            <div class="logo-shell">
              <img
                src="/images/logos/steegmueller-logo.png"
                alt="S. Steegmüller Transportdienstleistungen Logo"
                class="logo-image"
                loading="eager"
                decoding="async"
              />
            </div>
            <div class="hidden sm:flex flex-col leading-tight">
              <span class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-brand-600 transition-colors">S. Steegmüller</span>
              <span class="text-base text-gray-600 dark:text-gray-300 font-medium">Transportdienstleistungen</span>
            </div>
          </NuxtLink>

          <nav class="hidden md:flex items-center gap-1 lg:gap-2">
            <NuxtLink
              v-for="link in navLinks"
              :key="link.to"
              :to="link.to"
              class="nav-link"
              :prefetch="false"
            >
              {{ link.label }}
            </NuxtLink>
          </nav>

          <div class="flex items-center gap-2">
            <button
              @click="toggleDarkMode()"
              class="dark-toggle"
              :aria-label="darkToggleLabel"
              type="button"
            >
              <MoonIcon v-if="!isDark.value" class="h-5 w-5" />
              <SunIcon v-else class="h-5 w-5" />
            </button>

            <div class="hidden md:flex items-center gap-2 lg:gap-3">
              <a
                href="tel:+4971599396183"
                class="cta-button call"
              >
                <PhoneIcon class="h-5 w-5" aria-hidden="true" />
                <span>Jetzt anrufen</span>
              </a>
              <a
                href="https://wa.me/491727552023?text=Hallo, ich hätte gerne eine Anfrage für einen Transport."
                target="_blank"
                rel="noopener noreferrer"
                class="cta-button whatsapp"
              >
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                <span class="hidden lg:inline">WhatsApp</span>
              </a>
            </div>

            <button
              @click="toggleMobileMenu"
              class="inline-flex md:hidden mobile-toggle"
              :aria-label="isMobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'"
              type="button"
            >
              <span class="sr-only">Menü öffnen</span>
              <div class="relative h-6 w-6">
                <span class="mobile-bar" :class="{ 'translate-y-[10px] rotate-45': isMobileMenuOpen }"></span>
                <span class="mobile-bar" :class="{ 'opacity-0': isMobileMenuOpen }"></span>
                <span class="mobile-bar" :class="{ '-translate-y-[10px] -rotate-45': isMobileMenuOpen }"></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <transition name="mobile-fade">
        <div v-if="isMobileMenuOpen" class="mobile-nav">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
            <nav class="flex flex-col gap-2">
              <NuxtLink
                v-for="link in navLinks"
                :key="`mobile-${link.to}`"
                :to="link.to"
                class="mobile-nav-link"
                @click="closeMobileMenu"
                :prefetch="false"
              >
                {{ link.label }}
              </NuxtLink>
            </nav>

            <div class="flex items-center justify-between rounded-2xl bg-gray-100 dark:bg-gray-800 px-4 py-3">
              <div>
                <p class="text-sm font-semibold text-gray-700 dark:text-gray-200">Darstellung</p>
                <p class="text-xs text-gray-500 dark:text-gray-400">{{ isDark.value ? 'Dunkler Modus aktiv' : 'Heller Modus aktiv' }}</p>
              </div>
              <button @click="toggleDarkMode()" class="dark-toggle" type="button" :aria-label="darkToggleLabel">
                <MoonIcon v-if="!isDark.value" class="h-5 w-5" />
                <SunIcon v-else class="h-5 w-5" />
              </button>
            </div>

            <div class="grid gap-3">
              <a
                href="tel:+4971599396183"
                @click="closeMobileMenu"
                class="cta-button call justify-center"
              >
                <PhoneIcon class="h-5 w-5" aria-hidden="true" />
                <span>Jetzt anrufen</span>
              </a>
              <a
                href="https://wa.me/491727552023?text=Hallo, ich hätte gerne eine Anfrage für einen Transport."
                target="_blank"
                @click="closeMobileMenu"
                class="cta-button whatsapp justify-center"
              >
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </transition>
    </header>

    <main>
      <!-- Breadcrumbs -->
      <div v-if="$route.path !== '/'" class="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs :items="breadcrumbItems" />
        </div>
      </div>
      
      <slot />
    </main>

    <footer class="bg-gray-900 text-white py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-lg font-semibold mb-4">S. Steegmüller Transportdienstleistungen</h3>
            <p class="text-gray-300">
              Kornblumenweg 13<br />
              71272 Renningen<br />
              Deutschland
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Kontakt</h3>
            <p class="text-gray-300 mb-4">
              Telefon: <a href="tel:+491727552023" class="text-brand-400 hover:text-brand-500">0172 755 20 23</a><br />
              Büro: <a href="tel:+4971599396183" class="text-brand-400 hover:text-brand-500">07159 939 61 83</a><br />
              E-Mail: <a href="mailto:wswsteegmueller@gmail.com" class="text-brand-400 hover:text-brand-500">wswsteegmueller@gmail.com</a>
            </p>
            <a
              href="https://maps.google.com/?q=Kornblumenweg+13,+71272+Renningen"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center text-brand-400 hover:text-brand-500 text-sm"
            >
              <MapPinIcon class="h-4 w-4 mr-1" />
              Auf Google Maps anzeigen
            </a>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Öffnungszeiten</h3>
            <p class="text-gray-300">
              Mo-Fr: 08:00-18:00<br />
              Sa-So: Nach Vereinbarung
            </p>
          </div>
        </div>
        <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p class="mb-2">&copy; 2025 S. Steegmüller Transportdienstleistungen. Alle Rechte vorbehalten.</p>
          <div class="flex items-center justify-center gap-4">
            <NuxtLink to="/datenschutz" class="hover:text-white">Datenschutz</NuxtLink>
            <button type="button" @click="openConsent" class="underline hover:text-white">Cookie‑Einstellungen</button>
            <span v-if="mapsConsent !== null"
                  class="inline-flex items-center rounded-full px-2 py-0.5 text-xs"
                  :class="mapsConsent ? 'bg-green-600/20 text-green-200 ring-1 ring-green-500/40' : 'bg-yellow-600/20 text-yellow-200 ring-1 ring-yellow-500/40'">
              {{ mapsConsent ? 'Externe Karten: erlaubt' : 'Externe Karten: blockiert' }}
            </span>
          </div>
        </div>
      </div>
    </footer>

    <div class="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      <a
        href="https://wa.me/491727552023?text=Hallo, ich hätte gerne eine Anfrage für einen Transport."
        target="_blank"
        rel="noopener noreferrer"
        class="floating-button whatsapp"
        title="WhatsApp Nachricht senden"
      >
        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
        </svg>
      </a>
      <a
        href="tel:+4971599396183"
        class="floating-button call"
        title="Jetzt anrufen"
      >
        <PhoneIcon class="h-6 w-6" />
      </a>
    </div>
  </div>
  <CookieBanner />
</template>

<script setup>
import { PhoneIcon, MapPinIcon, MoonIcon, SunIcon } from '@heroicons/vue/24/outline'
import { ref, inject, computed, onMounted, onUnmounted } from 'vue'
import CookieBanner from '~/components/CookieBanner.vue'
import Breadcrumbs from '~/components/Breadcrumbs.vue'

const route = useRoute()

const isDark = inject('isDark', ref(false))
const toggleDarkMode = inject('toggleDarkMode', () => {})

// Breadcrumb items based on current route
const breadcrumbItems = computed(() => {
  const path = route.path
  const items = []
  
  if (path.startsWith('/blog')) {
    items.push({ label: 'Blog', href: '/blog', icon: 'blog' })
    
    if (path !== '/blog') {
      // Extract blog post title from path
      const slug = path.replace('/blog/', '')
      const title = slug.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ')
      items.push({ label: title })
    }
  } else if (path.startsWith('/transport-')) {
    items.push({ label: 'Transport', href: '/#leistungen', icon: 'transport' })
    
    if (path.includes('renningen-boeblingen')) {
      items.push({ label: 'Renningen → Böblingen' })
    } else if (path.includes('renningen-stuttgart')) {
      items.push({ label: 'Renningen → Stuttgart' })
    } else if (path.includes('renningen-leonberg')) {
      items.push({ label: 'Renningen → Leonberg' })
    } else if (path.includes('renningen-sindelfingen')) {
      items.push({ label: 'Renningen → Sindelfingen' })
    } else if (path.includes('notfall')) {
      items.push({ label: 'Notfall-Transport' })
    }
  } else if (path === '/impressum') {
    items.push({ label: 'Impressum' })
  } else if (path === '/datenschutz') {
    items.push({ label: 'Datenschutz' })
  }
  
  return items
})

const navLinks = [
  { label: 'Leistungen', to: '/#leistungen' },
  { label: 'Kontakt', to: '/#kontakt' },
  { label: 'Blog', to: '/blog' },
  { label: 'Impressum', to: '/impressum' }
]

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const darkToggleLabel = computed(() =>
  isDark.value ? 'Hellmodus aktivieren' : 'Dunkelmodus aktivieren'
)

// Open cookie banner programmatically
const openConsent = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('consent:open'))
  }
}

// Reflect current consent state in footer
const mapsConsent = ref(null)
const updateConsent = () => {
  try {
    const v = localStorage.getItem('consent_maps')
    mapsConsent.value = v === null ? false : v === 'true'
  } catch (e) { mapsConsent.value = false }
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

// Under construction banner state
const showBuildBanner = ref(true)
const BANNER_KEY = 'buildBanner:dismissed:v1'
const dismissBuildBanner = () => {
  showBuildBanner.value = false
  try { localStorage.setItem(BANNER_KEY, 'true') } catch (e) {}
}
onMounted(() => {
  try { showBuildBanner.value = localStorage.getItem(BANNER_KEY) !== 'true' } catch (e) {}
})
</script>

<style scoped>
.site-header {
  @apply sticky top-0 z-40 border-b border-gray-100/70 dark:border-gray-800/70 bg-white/95 dark:bg-gray-900/90 backdrop-blur;
}

.logo-shell {
  @apply h-20 w-20 rounded-3xl bg-white dark:bg-gray-800 shadow-xl shadow-gray-200/80 dark:shadow-black/40 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-105;
}

.logo-image {
  @apply h-20 w-20 object-contain;
}

.nav-link {
  @apply relative px-4 py-2 rounded-full font-medium text-gray-600 dark:text-gray-200 transition-colors duration-200 hover:text-brand-600 dark:hover:text-brand-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/70;
}

.nav-link::after {
  content: '';
  position: absolute;
  inset-inline: 18px;
  bottom: 8px;
  height: 2px;
  border-radius: 9999px;
  background: linear-gradient(90deg, #1f8a6e, #34d399);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 150ms ease-in-out;
}

.nav-link:hover::after,
.nav-link[aria-current='page']::after {
  transform: scaleX(1);
}

.dark-toggle {
  @apply inline-flex items-center justify-center h-10 w-10 rounded-full border border-gray-200/80 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 shadow-sm hover:border-brand-400 hover:text-brand-600 dark:hover:text-brand-400 transition;
}

.cta-button {
  @apply inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-semibold text-sm shadow-md transition-all duration-300 hover:-translate-y-0.5;
}

.cta-button.call {
  @apply bg-brand-600 text-white hover:bg-brand-500;
}

.cta-button.whatsapp {
  @apply bg-green-600 text-white hover:bg-green-500;
}

.mobile-toggle {
  @apply inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-gray-200/80 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm transition;
}

.mobile-bar {
  @apply absolute left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-gray-700 dark:bg-gray-200 transition;
}

.mobile-bar:nth-child(1) {
  top: 8px;
}

.mobile-bar:nth-child(2) {
  top: 16px;
}

.mobile-bar:nth-child(3) {
  top: 24px;
}

.mobile-nav {
  @apply md:hidden border-t border-gray-100 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur;
}

.mobile-nav-link {
  @apply flex items-center justify-between rounded-2xl bg-gray-100/80 dark:bg-gray-800/80 px-4 py-4 text-base font-semibold text-gray-700 dark:text-gray-200 transition hover:bg-gray-100 dark:hover:bg-gray-700;
}

.mobile-fade-enter-active,
.mobile-fade-leave-active {
  transition: opacity 150ms ease, transform 200ms ease;
}

.mobile-fade-enter-from,
.mobile-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

.floating-button {
  @apply inline-flex items-center justify-center rounded-full p-3 shadow-lg shadow-gray-300/60 dark:shadow-black/40 transition-all duration-300 hover:scale-110;
}

.floating-button.call {
  @apply bg-brand-600 hover:bg-brand-500 text-white;
}

.floating-button.whatsapp {
  @apply bg-green-500 hover:bg-green-600 text-white;
}
</style>
