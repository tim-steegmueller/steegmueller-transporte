<template>
  <div
    class="group bg-gradient-to-br from-gray-800 to-gray-700 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl shadow-lg hover-lift gradient-overlay border border-gray-600 dark:border-gray-600 transition-all duration-300 hover:border-brand-200 dark:hover:border-brand-500"
  >
    <div class="flex items-center mb-4">
      <div class="flex text-yellow-400">
        <StarIcon v-for="i in review.rating" :key="i" class="h-5 w-5 fill-current" />
      </div>
      <span class="ml-3 text-sm text-gray-600 dark:text-gray-400 font-medium">{{
        review.date
      }}</span>
    </div>

    <p class="text-gray-700 dark:text-gray-300 mb-4">"{{ review.text }}"</p>

    <div class="text-sm text-gray-600 dark:text-gray-400">
      <strong>{{ review.author }}</strong
      ><br />
      Rezension aus {{ review.source }}
    </div>
  </div>
</template>

<script setup>
import { StarIcon } from '@heroicons/vue/24/outline'

defineProps({
  review: {
    type: Object,
    required: true
  }
})
</script>
