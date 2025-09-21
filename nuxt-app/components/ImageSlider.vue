<template>
  <div class="relative z-0 overflow-hidden rounded-2xl shadow-lg bg-white/60 dark:bg-gray-800/60 md:h-[420px] touch-pan-y">
    <div 
      class="flex h-full transition-transform duration-500 ease-in-out"
      :style="{ 
        transform: `translateX(-${props.currentSlide * 100}%)`, 
        width: `${props.images.length * 100}%` 
      }"
    >
      <NuxtImg
        v-for="(image, index) in props.images"
        :key="index"
        :src="image.src"
        :alt="image.alt"
        class="w-full h-64 md:h-full object-cover flex-shrink-0"
        :style="{ 
          width: `${100 / props.images.length}%`,
          flex: `0 0 ${100 / props.images.length}%`,
          minWidth: `${100 / props.images.length}%`
        }"
        loading="eager"
        decoding="async"
        format="webp"
        @error="handleImageError(index)"
        @load="handleImageLoad(index)"
      />
    </div>

    <!-- Navigation Dots -->
    <div class="pointer-events-auto absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
      <button
        v-for="(_, index) in props.images"
        :key="index"
        @click="emit('slide-change', index)"
        :class="['w-3 h-3 rounded-full transition-all duration-200',
                 props.currentSlide === index ? 'bg-white' : 'bg-white/50 hover:bg-white/75']"
        :aria-label="`Bild ${index + 1} anzeigen`"
      />
    </div>

    <!-- Navigation Arrows -->
    <button 
      @click="emit('previous')"
      class="pointer-events-auto absolute left-4 top-1/2 -translate-y-1/2 bg-black/25 hover:bg-black/40 text-white p-2 rounded-full transition-all"
      aria-label="Vorheriges Bild"
    >
      ←
    </button>
    <button 
      @click="emit('next')"
      class="pointer-events-auto absolute right-4 top-1/2 -translate-y-1/2 bg-black/25 hover:bg-black/40 text-white p-2 rounded-full transition-all"
      aria-label="Nächstes Bild"
    >
      →
    </button>
  </div>
</template>

<script setup>
// Props definition
const props = defineProps({
  images: {
    type: Array,
    required: true
  },
  currentSlide: {
    type: Number,
    required: true
  }
})

// Emits definition
const emit = defineEmits(['next', 'previous', 'slide-change'])

// Error handling for images
const handleImageError = (index) => {
  console.error(`Failed to load image at index ${index}:`, props.images[index]?.src)
}

const handleImageLoad = (index) => {
  console.log(`Successfully loaded image at index ${index}:`, props.images[index]?.src)
}
</script>
