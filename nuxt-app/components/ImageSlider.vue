<template>
  <div
    class="relative z-0 overflow-hidden rounded-2xl shadow-lg bg-white/60 dark:bg-gray-800/60 md:h-[420px] h-64 touch-pan-y"
    role="img"
    :aria-label="`Bildergalerie: ${images[currentSlide]?.alt || 'Transport Bilder'}`"
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

    <div
      class="flex h-full transition-transform duration-500 ease-in-out"
      :style="{
        transform: `translateX(-${currentSlide * 100}%)`,
        width: `${images.length * 100}%`
      }"
    >
      <div
        v-for="(image, index) in images"
        :key="index"
        class="relative h-full flex-shrink-0"
        :style="{
          width: `${100 / images.length}%`,
          flex: `0 0 ${100 / images.length}%`
        }"
      >
        <img
          :ref="el => setImageRef(el, index)"
          :src="image.src"
          :alt="image.alt"
          class="w-full h-full object-cover"
          loading="eager"
          decoding="async"
          @error="handleImageError(index)"
          @load="handleImageLoad(index)"
        />
        <!-- Image overlay for better text readability -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
    </div>

    <!-- Navigation Dots -->
    <div
      class="pointer-events-auto absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10"
    >
      <button
        v-for="(_, index) in images"
        :key="index"
        :class="[
          'w-3 h-3 rounded-full transition-all duration-200 border-2',
          currentSlide === index
            ? 'bg-white border-white'
            : 'bg-white/50 border-white/50 hover:bg-white/75 border-white/75'
        ]"
        :aria-label="`Bild ${index + 1} anzeigen`"
        @click="goToSlide(index)"
      />
    </div>

    <!-- Navigation Arrows -->
    <button
      class="pointer-events-auto absolute left-4 top-1/2 -translate-y-1/2 bg-black/25 hover:bg-black/40 text-white p-2 rounded-full transition-all z-10 opacity-0 group-hover:opacity-100"
      aria-label="Vorheriges Bild"
      @click="previousSlide"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <button
      class="pointer-events-auto absolute right-4 top-1/2 -translate-y-1/2 bg-black/25 hover:bg-black/40 text-white p-2 rounded-full transition-all z-10 opacity-0 group-hover:opacity-100"
      aria-label="Nächstes Bild"
      @click="nextSlide"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
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

const images = computed(() => props.images ?? [])

// Local reactive state
const currentSlide = ref(props.currentSlide)
const isLoading = ref(true)
const loadedImages = ref(new Set())
const imageElements = ref([])

// Touch handling
const touchStartX = ref(0)
const touchEndX = ref(0)
const minSwipeDistance = 50

// Auto-slide control
const isAutoSlidePaused = ref(false)

// Watch for prop changes
watch(
  () => props.currentSlide,
  newValue => {
    if (!images.value.length) return
    currentSlide.value = Math.min(Math.max(newValue, 0), images.value.length - 1)
  }
)

// Watch for local changes and emit
watch(currentSlide, newValue => {
  if (!images.value.length) return
  emit('slide-change', newValue)
})

watch(
  images,
  newImages => {
    loadedImages.value = new Set()
    isLoading.value = newImages.length > 0
    imageElements.value = []
    if (newImages.length === 0) {
      currentSlide.value = 0
      isLoading.value = false
    } else if (currentSlide.value >= newImages.length) {
      currentSlide.value = 0
    }
  },
  { immediate: true }
)

// Navigation methods
const nextSlide = () => {
  if (!images.value.length) return
  currentSlide.value = (currentSlide.value + 1) % images.value.length
  emit('next')
}

const previousSlide = () => {
  if (!images.value.length) return
  currentSlide.value = currentSlide.value === 0 ? images.value.length - 1 : currentSlide.value - 1
  emit('previous')
}

const goToSlide = index => {
  if (!images.value.length) return
  currentSlide.value = index
  emit('slide-change', index)
}

// Error handling for images
const updateLoadingState = () => {
  if (!images.value.length) {
    isLoading.value = false
    return
  }

  // Hide loading when all images are loaded or at least the current slide is loaded
  if (
    loadedImages.value.size >= images.value.length ||
    loadedImages.value.has(currentSlide.value)
  ) {
    isLoading.value = false
  }
}

const handleImageError = index => {
  // Silently handle image loading errors
  loadedImages.value.add(index)
  updateLoadingState()
}

const handleImageLoad = index => {
  loadedImages.value.add(index)
  updateLoadingState()
}

const setImageRef = (el, index) => {
  if (!el) return
  imageElements.value[index] = el
  if (el.complete) {
    // ensure cached images update loading state instantly
    handleImageLoad(index)
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
  isAutoSlidePaused.value = true
  emit('pause-auto-slide')
}

const resumeAutoSlide = () => {
  isAutoSlidePaused.value = false
  emit('resume-auto-slide')
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>
