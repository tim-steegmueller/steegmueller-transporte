<template>
  <article class="group flex h-full flex-col justify-between rounded-3xl border border-neutral-200 bg-white/80 p-8 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card dark:border-midnight-700 dark:bg-midnight-800/70">
    <div class="space-y-6">
      <div class="flex items-center gap-4">
        <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-700 transition group-hover:bg-brand-200 dark:bg-brand-500/20 dark:text-brand-200">
          <component :is="iconComponent" class="h-6 w-6" />
        </div>
        <h3 class="text-xl font-semibold text-neutral-900 dark:text-white">{{ service.title }}</h3>
      </div>

      <p class="text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
        {{ service.description }}
      </p>
    </div>

    <ul class="mt-8 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
      <li v-for="(feature, index) in service.features" :key="index" class="flex items-start gap-3">
        <CheckIcon class="mt-0.5 h-4 w-4 text-brand-500" />
        <span>{{ feature }}</span>
      </li>
    </ul>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import {
  BoltIcon,
  ChatBubbleLeftRightIcon,
  CheckIcon,
  ClipboardDocumentCheckIcon,
  CubeTransparentIcon,
  HomeModernIcon,
  MapPinIcon
} from '@heroicons/vue/24/outline'

const props = defineProps({
  service: {
    type: Object,
    required: true
  }
})

const iconMap = {
  BoltIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentCheckIcon,
  CubeTransparentIcon,
  HomeModernIcon,
  MapPinIcon
}

const iconComponent = computed(() => iconMap[props.service.icon] ?? BoltIcon)
</script>
