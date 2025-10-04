<template>
  <div>
    <!-- Hero Section -->
    <section
      class="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 py-16"
    >
      <div class="max-w-4xl mx-auto px-4 text-center">
        <div
          class="inline-flex items-center bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 px-4 py-2 rounded-full text-sm font-medium mb-6"
        >
          <ExclamationTriangleIcon class="h-4 w-4 mr-2" />
          Notfall-Service verfügbar
        </div>
        <h1 class="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
          <span class="text-red-600 dark:text-red-400">Notfall-Transport</span><br />
          Werner Disponent
        </h1>
        <p class="text-xl text-gray-700 dark:text-gray-200 mb-8">
          Wenn's brennt und spontan was organisiert werden muss – Disponent Werner löst auch
          schwierige Situationen in Renningen-Leonberg
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+4971599396183"
            class="bg-red-600 hover:bg-red-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
          >
            <PhoneIcon class="h-5 w-5 mr-2" />
            Notfall: 07159 / 939 61 83
          </a>
          <a
            href="tel:+491727552023"
            class="bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
          >
            <DevicePhoneMobileIcon class="h-5 w-5 mr-2" />
            Mobil Werner: 0172 755 20 23
          </a>
        </div>
      </div>
    </section>

    <!-- Notfall Situationen -->
    <section class="py-16 bg-white dark:bg-gray-800">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Notfall-Situationen die Werner löst
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
            <div class="flex items-center mb-4">
              <ClockIcon class="h-8 w-8 text-red-600 mr-3" />
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Spontane Lieferung
              </h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300">
              Kurzfristige Transporte wenn der reguläre Service ausfällt oder dringend was bewegt
              werden muss.
            </p>
          </div>

          <div class="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
            <div class="flex items-center mb-4">
              <ExclamationTriangleIcon class="h-8 w-8 text-orange-600 mr-3" />
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Ersatzteile Express
              </h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300">
              Wenn Maschinen stillstehen und dringend Ersatzteile benötigt werden – Werner
              organisiert den Express-Transport.
            </p>
          </div>

          <div class="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
            <div class="flex items-center mb-4">
              <TruckIcon class="h-8 w-8 text-blue-600 mr-3" />
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Produktionsausfall
              </h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300">
              Bei Produktionsausfällen schnell alternative Transportlösungen organisieren und
              umsetzen.
            </p>
          </div>

          <div class="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
            <div class="flex items-center mb-4">
              <MapPinIcon class="h-8 w-8 text-green-600 mr-3" />
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Same-Day Notfall</h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300">
              Noch heute abholen und liefern – auch wenn andere sagen "geht nicht", Werner findet
              einen Weg.
            </p>
          </div>

          <div class="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
            <div class="flex items-center mb-4">
              <Cog6ToothIcon class="h-8 w-8 text-purple-600 mr-3" />
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Sonderanfragen</h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300">
              Ungewöhnliche Transportanfragen oder komplizierte Logistikprobleme kreativ lösen.
            </p>
          </div>

          <div class="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
            <div class="flex items-center mb-4">
              <LightBulbIcon class="h-8 w-8 text-yellow-600 mr-3" />
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Kreative Lösungen</h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300">
              Mit 30+ Jahren Erfahrung findet Werner auch für schwierige Situationen pragmatische
              Lösungen.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Werner Profil -->
    <section class="py-16 bg-gray-100 dark:bg-gray-900">
      <div class="max-w-4xl mx-auto px-4">
        <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
          <div class="grid md:grid-cols-3 gap-8 items-center">
            <div class="md:col-span-1">
              <div
                class="bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900/30 dark:to-green-900/30 p-8 rounded-xl text-center"
              >
                <UserIcon class="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Werner</h3>
                <p class="text-blue-600 dark:text-blue-400 font-medium">Disponent & Problemlöser</p>
              </div>
            </div>
            <div class="md:col-span-2">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Der Mann für schwierige Fälle
              </h3>
              <p class="text-gray-700 dark:text-gray-300 mb-4">
                Werner ist unser erfahrener Disponent mit über 30 Jahren in der Transportbranche. Er
                kennt jeden Winkel in Renningen-Leonberg und weiß, wie man auch in schwierigen
                Situationen schnelle Lösungen findet.
              </p>
              <div class="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <strong class="text-gray-900 dark:text-white">Expertise:</strong>
                  <ul class="text-gray-700 dark:text-gray-300 mt-1">
                    <li>• Spontane Organisation</li>
                    <li>• Notfall-Disposition</li>
                    <li>• Regionale Vernetzung</li>
                  </ul>
                </div>
                <div>
                  <strong class="text-gray-900 dark:text-white">Stärken:</strong>
                  <ul class="text-gray-700 dark:text-gray-300 mt-1">
                    <li>• Kreative Problemlösung</li>
                    <li>• Schnelle Entscheidungen</li>
                    <li>• Zuverlässige Umsetzung</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Schnell-Kontakt -->
    <section class="py-16 bg-red-600 text-white">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-8">
          <h2 class="text-3xl font-bold mb-6">Notfall? Werner ist da!</h2>
          <p class="text-xl mb-8 opacity-90">
            Egal ob Wochenende oder Feiertag – bei echten Notfällen erreichen Sie Werner
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 mb-8">
          <!-- Phone Cards -->
          <div class="space-y-4">
            <div class="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
              <PhoneIcon class="h-8 w-8 mx-auto mb-3" />
              <h3 class="font-semibold mb-2">Büro-Hotline</h3>
              <a href="tel:+4971599396183" class="text-xl font-bold hover:underline block">
                07159 / 939 61 83
              </a>
              <p class="text-sm opacity-80 mt-1">Mo-Fr 8-18 Uhr</p>
            </div>
            <div class="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
              <DevicePhoneMobileIcon class="h-8 w-8 mx-auto mb-3" />
              <h3 class="font-semibold mb-2">Werner Mobil</h3>
              <a href="tel:+491727552023" class="text-xl font-bold hover:underline block">
                0172 755 20 23
              </a>
              <p class="text-sm opacity-80 mt-1">Notfall auch außerhalb</p>
            </div>
          </div>

          <!-- Quick Contact Form -->
          <QuickContactForm />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import {
  PhoneIcon,
  DevicePhoneMobileIcon,
  ExclamationTriangleIcon,
  ClockIcon,
  TruckIcon,
  MapPinIcon,
  Cog6ToothIcon,
  LightBulbIcon,
  UserIcon
} from '@heroicons/vue/24/outline'
import QuickContactForm from '~/components/QuickContactForm.vue'

useHead({
  title: 'Notfall-Transport Werner Disponent | Spontane Transporte Renningen-Leonberg',
  meta: [
    {
      name: 'description',
      content:
        "🚨 Notfall-Transport Werner Disponent ⚡ Spontane Transporte wenn's brennt ✓ Renningen-Leonberg Express ✓ Same-Day Delivery ✓ Kreative Problemlösung ☎ 0172 755 20 23"
    },
    {
      name: 'keywords',
      content:
        'Notfall Transport Renningen, Werner Disponent, spontane Transporte, Express Lieferung Leonberg, Same Day Delivery, Ersatzteile Transport, Produktionsausfall, Emergency Transport, schnelle Lösung, Notfall Kurier, Sofort Transport'
    },
    {
      property: 'og:title',
      content: "Notfall-Transport Werner Disponent | Wenn's brennt - wir sind da!"
    },
    {
      property: 'og:description',
      content:
        'Spontane Transporte und Notfälle in Renningen-Leonberg. Werner als erfahrener Disponent löst auch schwierige Situationen.'
    }
  ]
})
</script>
