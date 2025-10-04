<template>
  <div
    class="group relative overflow-hidden rounded-2xl shadow-lg bg-white/60 dark:bg-gray-800/60 h-64 md:h-[420px] touch-pan-y"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    @mouseenter="pauseAutoSlide"
    @mouseleave="resumeAutoSlide"
  >
    <!-- Loading indicator -->
    <div
      v-if="isLoading"
      class="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 z-20"
    >
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-600" />
    </div>

    <!-- Image container with slide effect -->
    <div
      class="flex h-full transition-transform duration-500 ease-in-out"
      :style="{
        transform: `translateX(-${currentSlide * 100}%)`
      }"
    >
      <div
        v-for="(image, index) in images"
        :key="index"
        class="relative h-full flex-shrink-0"
        style="min-width: 100%; width: 100%"
      >
        <img
          :src="image.src"
          :alt="image.alt"
          class="w-full h-full object-cover"
          :loading="index === 0 ? 'eager' : 'lazy'"
          decoding="async"
          @error="handleImageError(index)"
          @load="handleImageLoad(index)"
        />
        <!-- Image overlay -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"
        />
      </div>
    </div>

    <!-- Navigation Dots -->
    <div
      class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10 pointer-events-auto"
    >
      <button
        v-for="(_, index) in images"
        :key="index"
        :class="[
          'w-3 h-3 rounded-full transition-all duration-200 border-2',
          currentSlide === index
            ? 'bg-white border-white scale-110'
            : 'bg-white/50 border-white/50 hover:bg-white/75 hover:border-white/75 hover:scale-105'
        ]"
        :aria-label="`Bild ${index + 1} anzeigen`"
        @click="goToSlide(index)"
      />
    </div>

    <!-- Navigation Arrows -->
    <button
      class="pointer-events-auto absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 md:p-3 rounded-full transition-all duration-200 z-10 opacity-0 group-hover:opacity-100 hover:scale-110"
      aria-label="Vorheriges Bild"
      @click="previousSlide"
    >
      <svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <button
      class="pointer-events-auto absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 md:p-3 rounded-full transition-all duration-200 z-10 opacity-0 group-hover:opacity-100 hover:scale-110"
      aria-label="Nächstes Bild"
      @click="nextSlide"
    >
      <svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'

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
const emit = defineEmits([
  'next',
  'previous',
  'slide-change',
  'pause-auto-slide',
  'resume-auto-slide'
])

// Local reactive state
const currentSlide = ref(props.currentSlide)
const isLoading = ref(true)
const loadedImages = ref(new Set())

// Touch handling
const touchStartX = ref(0)
const touchEndX = ref(0)
const minSwipeDistance = 50

// Watch for prop changes
watch(
  () => props.currentSlide,
  newValue => {
    if (newValue >= 0 && newValue < props.images.length) {
      currentSlide.value = newValue
    }
  }
)

// Watch for local changes and emit
watch(currentSlide, newValue => {
  emit('slide-change', newValue)
})

// Watch for images changes
watch(
  () => props.images,
  newImages => {
    loadedImages.value = new Set()
    if (newImages.length > 0) {
      isLoading.value = false
    }
  },
  { immediate: true }
)

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

const goToSlide = index => {
  if (index >= 0 && index < props.images.length) {
    currentSlide.value = index
    emit('slide-change', index)
  }
}

// Touch event handlers
const handleTouchStart = e => {
  touchStartX.value = e.touches[0].clientX
}

const handleTouchMove = e => {
  touchEndX.value = e.touches[0].clientX
}

const handleTouchEnd = () => {
  const swipeDistance = touchStartX.value - touchEndX.value

  if (Math.abs(swipeDistance) > minSwipeDistance) {
    if (swipeDistance > 0) {
      nextSlide()
    } else {
      previousSlide()
    }
  }
}

// Auto-slide pause/resume
const pauseAutoSlide = () => {
  emit('pause-auto-slide')
}

const resumeAutoSlide = () => {
  emit('resume-auto-slide')
}

// Image loading handling
const handleImageError = index => {
  loadedImages.value.add(index)
  updateLoadingState()
}

const handleImageLoad = index => {
  loadedImages.value.add(index)
  updateLoadingState()
}

const updateLoadingState = () => {
  if (props.images.length === 0) {
    isLoading.value = false
    return
  }

  // Hide loading when current slide is loaded or all images are loaded
  if (
    loadedImages.value.has(currentSlide.value) ||
    loadedImages.value.size >= props.images.length
  ) {
    isLoading.value = false
  }
}

// Keyboard navigation
const handleKeydown = event => {
  if (event.key === 'ArrowLeft') {
    previousSlide()
  } else if (event.key === 'ArrowRight') {
    nextSlide()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
  if (props.images.length > 0) {
    isLoading.value = false
  }
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>
