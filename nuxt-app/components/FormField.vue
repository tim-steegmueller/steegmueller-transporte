<template>
  <div class="relative w-full group">
    <component
      :is="iconComponent"
      class="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-brand-500 transition-colors duration-200 z-10"
    />
    <input
      :name="name"
      :placeholder="placeholder"
      :type="type"
      :required="required"
      :value="modelValue"
      class="w-full pl-12 pr-4 py-4 border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 rounded-xl focus:outline-none focus:ring-4 focus:ring-brand-500/20 focus:border-brand-500 dark:focus:border-brand-400 text-base transition-all duration-200 hover:border-gray-300 dark:hover:border-gray-500"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
import { UserIcon, PhoneIcon, MapPinIcon, CalendarIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text'
  },
  required: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    required: true
  },
  modelValue: {
    type: String,
    default: ''
  }
})

defineEmits(['update:modelValue'])

// Icon mapping
const iconMap = {
  UserIcon,
  PhoneIcon,
  MapPinIcon,
  CalendarIcon
}

const iconComponent = computed(() => iconMap[props.icon])
</script>
