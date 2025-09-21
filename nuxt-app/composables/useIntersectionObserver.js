import { onMounted, onUnmounted, ref } from 'vue'

export function useIntersectionObserver(elementRef, options = { root: null, rootMargin: '0px', threshold: 0.1 }) {
  const isVisible = ref(false)

  let observer = null

  onMounted(() => {
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          // Optional: stop observing after it's visible
          observer.unobserve(elementRef.value)
        }
      }, options)

      if (elementRef.value) {
        observer.observe(elementRef.value)
      }
    }
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return { isVisible }
}
