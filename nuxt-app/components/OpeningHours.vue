<template>
        <div class="bg-gradient-to-br from-gray-800 to-gray-700 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg border border-gray-600 dark:border-gray-600 hover-lift gradient-overlay transition-all duration-300 hover:border-brand-200 dark:hover:border-brand-500">
    <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
      <div class="w-2 h-8 bg-gradient-to-b from-brand-500 to-brand-600 rounded-full mr-3"></div>
      Öffnungszeiten
    </h3>
    <div class="space-y-3">
      <div class="flex justify-between items-center p-3 rounded-xl bg-gray-50 dark:bg-gray-700">
        <span class="text-gray-700 dark:text-gray-300 font-medium">Montag - Freitag</span>
        <span class="text-gray-900 dark:text-white font-bold text-lg">08:00 - 18:00</span>
      </div>
      <div class="flex justify-between items-center p-3 rounded-xl bg-gray-50 dark:bg-gray-700">
        <span class="text-gray-700 dark:text-gray-300 font-medium">Samstag - Sonntag</span>
        <span class="text-gray-900 dark:text-white font-bold text-lg">Nach Vereinbarung</span>
      </div>
    </div>
    <div class="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-700">
      <p class="text-sm text-green-800 dark:text-green-200 flex items-center">
        <CheckCircleIcon class="h-5 w-5 inline mr-2" />
        <span class="font-semibold">Kurzfristige Termine möglich</span>
      </p>
    </div>
  </div>
</template>

<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/outline'
</script>
