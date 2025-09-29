<template>
  <div class="relative overflow-hidden rounded-2xl shadow-lg bg-white/60 dark:bg-gray-800/60 h-64 md:h-[420px]">
    <!-- Loading indicator -->
    <div v-if="isLoading" class="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 z-20">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-600"></div>
    </div>

    <!-- Image container -->
    <div class="relative h-full">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image.src"
        :alt="image.alt"
        class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
        :class="{ 'opacity-100': index === currentSlide, 'opacity-0': index !== currentSlide }"
        :loading="index === 0 ? 'eager' : 'lazy'"
        @error="handleImageError(index)"
        @load="handleImageLoad(index)"
      />
      <!-- Image overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
    </div>

    <!-- Navigation Dots -->
    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
      <button
        v-for="(_, index) in images"
        :key="index"
        @click="goToSlide(index)"
        :class="[
          'w-3 h-3 rounded-full transition-all duration-200 border-2',
          currentSlide === index 
            ? 'bg-white border-white' 
            : 'bg-white/50 border-white/50 hover:bg-white/75 border-white/75'
        ]"
        :aria-label="`Bild ${index + 1} anzeigen`"
      />
    </div>

    <!-- Navigation Arrows -->
    <button 
      @click="previousSlide"
      class="absolute left-4 top-1/2 -translate-y-1/2 bg-black/25 hover:bg-black/40 text-white p-2 rounded-full transition-all z-10 opacity-0 group-hover:opacity-100"
      aria-label="Vorheriges Bild"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
      </svg>
    </button>
    <button 
      @click="nextSlide"
      class="absolute right-4 top-1/2 -translate-y-1/2 bg-black/25 hover:bg-black/40 text-white p-2 rounded-full transition-all z-10 opacity-0 group-hover:opacity-100"
      aria-label="Nächstes Bild"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, watch, computed, onMounted, onUnmounted } from 'vue'

// Props definition
const props = defineProps({
  images: {
    type: Array,
    required: true,
    default: () => []
  },
  currentSlide: {
    type: Number,
    required: true,
    default: 0
  }
})

// Emits definition
const emit = defineEmits(['next', 'previous', 'slide-change'])

// Local reactive state
const currentSlide = ref(props.currentSlide)
const isLoading = ref(true)
const loadedImages = ref(new Set())

// Watch for prop changes
watch(() => props.currentSlide, (newValue) => {
  if (newValue >= 0 && newValue < props.images.length) {
    currentSlide.value = newValue
  }
})

// Watch for local changes and emit
watch(currentSlide, (newValue) => {
  emit('slide-change', newValue)
})

// Navigation methods
const nextSlide = () => {
  if (props.images.length === 0) return
  currentSlide.value = (currentSlide.value + 1) % props.images.length
  emit('next')
}

const previousSlide = () => {
  if (props.images.length === 0) return
  currentSlide.value = currentSlide.value === 0 ? props.images.length - 1 : currentSlide.value - 1
  emit('previous')
}

const goToSlide = (index) => {
  if (index >= 0 && index < props.images.length) {
    currentSlide.value = index
    emit('slide-change', index)
  }
}

// Image loading handling
const handleImageError = (index) => {
  loadedImages.value.add(index)
  updateLoadingState()
}

const handleImageLoad = (index) => {
  loadedImages.value.add(index)
  updateLoadingState()
}

const updateLoadingState = () => {
  if (props.images.length === 0) {
    isLoading.value = false
    return
  }
  
  // Hide loading when current slide is loaded or all images are loaded
  if (loadedImages.value.has(currentSlide.value) || loadedImages.value.size >= props.images.length) {
    isLoading.value = false
  }
}

// Keyboard navigation
const handleKeydown = (event) => {
  if (event.key === 'ArrowLeft') {
    previousSlide()
  } else if (event.key === 'ArrowRight') {
    nextSlide()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
  // Preload first few images
  if (props.images.length > 0) {
    isLoading.value = false
  }
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>
