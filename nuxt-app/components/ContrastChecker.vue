<template>
  <div
    class="fixed top-4 right-4 z-50 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border max-w-sm"
  >
    <h3 class="font-bold mb-2">Kontrast-Checker</h3>
    <div class="space-y-2 text-sm">
      <div class="flex justify-between">
        <span>Text auf Weiß:</span>
        <span :class="getContrastClass('#333333', '#ffffff')">
          {{ getContrastRatio('#333333', '#ffffff').toFixed(1) }}:1
        </span>
      </div>
      <div class="flex justify-between">
        <span>Text auf Grau:</span>
        <span :class="getContrastClass('#667085', '#f5f5f5')">
          {{ getContrastRatio('#667085', '#f5f5f5').toFixed(1) }}:1
        </span>
      </div>
      <div class="flex justify-between">
        <span>Brand auf Weiß:</span>
        <span :class="getContrastClass('#1f8a6e', '#ffffff')">
          {{ getContrastRatio('#1f8a6e', '#ffffff').toFixed(1) }}:1
        </span>
      </div>
      <div class="flex justify-between">
        <span>Weiß auf Brand:</span>
        <span :class="getContrastClass('#ffffff', '#1f8a6e')">
          {{ getContrastRatio('#ffffff', '#1f8a6e').toFixed(1) }}:1
        </span>
      </div>
    </div>
    <div class="mt-2 text-xs text-gray-600">WCAG AA: ≥4.5:1 (Normal), ≥3:1 (Groß)</div>
  </div>
</template>

<script setup>
// Kontrast-Berechnung
const getContrastRatio = (color1, color2) => {
  const getLuminance = hex => {
    const rgb = Number.parseInt(hex.slice(1), 16)
    const r = (rgb >> 16) & 0xff
    const g = (rgb >> 8) & 0xff
    const b = (rgb >> 0) & 0xff

    const [rs, gs, bs] = [r, g, b].map(c => {
      c = c / 255
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
    })

    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
  }

  const lum1 = getLuminance(color1)
  const lum2 = getLuminance(color2)
  const brightest = Math.max(lum1, lum2)
  const darkest = Math.min(lum1, lum2)

  return (brightest + 0.05) / (darkest + 0.05)
}

const getContrastClass = (color1, color2) => {
  const ratio = getContrastRatio(color1, color2)
  if (ratio >= 7) return 'text-green-600 font-bold'
  if (ratio >= 4.5) return 'text-green-500'
  if (ratio >= 3) return 'text-yellow-500'
  return 'text-red-500 font-bold'
}
</script>
