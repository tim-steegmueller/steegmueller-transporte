<template>
  <div class="w-full bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover-lift gradient-overlay">
    <h3 class="text-lg sm:text-2xl font-bold text-center text-gray-900 dark:text-white mb-4 sm:mb-6">Anfrage senden</h3>
    
    <form 
      action="https://formspree.io/f/xnnbejrl" 
      method="POST" 
      class="space-y-4 w-full"
    >
      <!-- Name & Phone Row -->
      <div class="flex flex-col sm:grid sm:grid-cols-2 gap-3 sm:gap-4">
        <FormField
          name="name"
          placeholder="Name *"
          required
          icon="UserIcon"
        />
        <FormField
          name="phone"
          placeholder="Telefon *"
          type="tel"
          required
          icon="PhoneIcon"
        />
      </div>
      
      <!-- Start & Destination Row -->
      <div class="flex flex-col sm:grid sm:grid-cols-2 gap-3 sm:gap-4">
        <FormField
          name="start"
          placeholder="Startort"
          icon="MapPinIcon"
        />
        <FormField
          name="ziel"
          placeholder="Zielort"
          icon="MapPinIcon"
        />
      </div>
      
      <!-- Date Field -->
      <FormField
        name="termin"
        type="date"
        placeholder="Terminwunsch"
        icon="CalendarIcon"
      />
      
      <!-- Message Field -->
      <div class="relative w-full">
        <ChatBubbleLeftRightIcon class="absolute left-3 top-3 h-5 w-5 text-gray-400 z-10" />
        <textarea
          name="message"
          rows="3"
          placeholder="Kurzbeschreibung"
          class="w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-brand-500/70 text-base resize-none"
        />
      </div>
      
      <!-- Hidden Fields -->
      <input name="company" class="hidden" tabindex="-1" autocomplete="off">
      
      <!-- Submit Button -->
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
</template>

<script setup>
import { ChatBubbleLeftRightIcon } from '@heroicons/vue/24/outline'
import FormField from '~/components/FormField.vue'
</script>
