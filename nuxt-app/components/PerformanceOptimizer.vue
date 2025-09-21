<template>
  <aside
    class="fixed bottom-6 right-6 z-50 hidden lg:flex w-80 flex-col gap-3 rounded-2xl border border-neutral-200 bg-white/95 p-4 text-sm shadow-2xl shadow-black/10 backdrop-blur dark:border-neutral-700 dark:bg-midnight-800/90"
  >
    <header class="flex items-center justify-between text-neutral-600 dark:text-neutral-200">
      <span class="font-semibold">Build Helper</span>
      <button
        type="button"
        class="rounded-full p-1 text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-700 dark:hover:bg-midnight-700"
        @click="isOpen = !isOpen"
        aria-label="Panel ein- oder ausblenden"
      >
        <component :is="isOpen ? MinusIcon : PlusIcon" class="h-4 w-4" />
      </button>
    </header>

    <Transition name="fade">
      <div v-if="isOpen" class="space-y-3 text-neutral-600 dark:text-neutral-200">
        <p class="leading-snug">
          <span class="font-medium text-neutral-900 dark:text-white">Status:</span>
          {{ statusText }}
        </p>
        <ul class="space-y-1">
          <li class="flex items-center gap-2">
            <CheckCircleIcon class="h-4 w-4 text-brand-500" />
            Lighthouse Profil: statisch
          </li>
          <li class="flex items-center gap-2">
            <ArrowPathIcon class="h-4 w-4 text-brand-500" />
            Cache leeren: <code class="rounded bg-neutral-100 px-1.5 py-0.5 text-xs dark:bg-midnight-700">pnpm dev --force</code>
          </li>
          <li class="flex items-center gap-2">
            <BoltIcon class="h-4 w-4 text-brand-500" />
            Live testen: <code class="rounded bg-neutral-100 px-1.5 py-0.5 text-xs dark:bg-midnight-700">pnpm generate</code>
          </li>
        </ul>
      </div>
    </Transition>
  </aside>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ArrowPathIcon, BoltIcon, CheckCircleIcon, MinusIcon, PlusIcon } from '@heroicons/vue/24/outline'

const isOpen = ref(true)
const statusText = computed(() => process.dev ? 'Entwicklungsmodus aktiv' : 'Produktionsbuild')
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
