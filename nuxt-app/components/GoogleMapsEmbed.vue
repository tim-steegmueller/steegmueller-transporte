<template>
  <div class="mb-6">
    <div
      v-if="!show"
      class="rounded-xl border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-800"
    >
      <p class="text-sm text-gray-600 dark:text-gray-300 mb-3">
        Karte nur bei Bedarf laden (Datenschutz & Performance). Zum Anzeigen bitte externe Inhalte
        erlauben.
      </p>
      <button
        type="button"
        class="bg-brand-600 hover:bg-brand-500 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
        @click="requestMap"
      >
        Karte anzeigen
      </button>
    </div>

    <iframe
      v-else
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2634.8!2d8.9335!3d48.7545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799c4b6c8b8c8b8%3A0x1234567890!2sKornblumenweg%2013%2C%2071272%20Renningen!5e0!3m2!1sde!2sde!4v1234567890"
      width="100%"
      height="250"
      style="border: 0; border-radius: 12px"
      allowfullscreen
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      title="S. Steegmüller Transportdienstleistungen - Kornblumenweg 13, 71272 Renningen"
    />
  </div>
</template>

<script setup>
const _props = defineProps({
  show: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['update:show'])

const requestMap = () => {
  try {
    if (localStorage.getItem('consent_maps') === 'true') {
      emit('update:show', true)
      return
    }
  } catch (e) {}

  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('consent:open'))
  }
}
</script>
