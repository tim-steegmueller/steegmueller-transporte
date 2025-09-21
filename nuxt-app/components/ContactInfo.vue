<template>
        <div class="bg-gradient-to-br from-gray-800 to-gray-700 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg border border-gray-600 dark:border-gray-600 hover-lift gradient-overlay transition-all duration-300 hover:border-brand-200 dark:hover:border-brand-500">
    <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
      <div class="w-2 h-8 bg-gradient-to-b from-brand-500 to-brand-600 rounded-full mr-3"></div>
      Direkter Kontakt
    </h3>
    <div class="space-y-4">
      <div class="flex items-center p-3 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200">
        <div class="p-2 bg-brand-100 dark:bg-brand-900/30 rounded-lg mr-4">
          <PhoneIcon class="h-5 w-5 text-brand-600 dark:text-brand-400" />
        </div>
        <div>
          <p class="text-gray-900 dark:text-white font-semibold">Mobil</p>
          <a href="tel:+491727552023" class="text-brand-600 hover:text-brand-500 font-medium transition-colors">0172 755 20 23</a>
        </div>
      </div>
      <div class="flex items-center p-3 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200">
        <div class="p-2 bg-brand-100 dark:bg-brand-900/30 rounded-lg mr-4">
          <MapPinIcon class="h-5 w-5 text-brand-600 dark:text-brand-400" />
        </div>
        <div>
          <p class="text-gray-900 dark:text-white font-semibold">Adresse</p>
          <p class="text-gray-600 dark:text-gray-300">Kornblumenweg 13, 71272 Renningen</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { PhoneIcon, MapPinIcon } from '@heroicons/vue/24/outline'
</script>
