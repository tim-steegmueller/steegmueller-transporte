<template>
  <div class="min-h-screen bg-red-100 p-4">
    <h1 class="text-2xl font-bold mb-8 text-center">iPhone Kontaktformular Test für Werner</h1>

    <!-- Diagnose Info -->
    <div class="bg-yellow-100 p-4 rounded mb-8">
      <h2 class="font-bold mb-2">📱 Geräte-Info:</h2>
      <p><strong>Viewport Breite:</strong> <span id="viewport-width">-</span>px</p>
      <p><strong>Screen Breite:</strong> <span id="screen-width">-</span>px</p>
      <p><strong>User Agent:</strong> <span id="user-agent" class="text-xs">-</span></p>
      <p><strong>Touch Support:</strong> <span id="touch-support">-</span></p>
      <p><strong>iOS Safari:</strong> <span id="ios-safari">-</span></p>
    </div>

    <!-- Test Formulare -->
    <div class="space-y-8">
      <!-- Version 1: Standard -->
      <div class="bg-white p-4 rounded border-2 border-blue-500">
        <h3 class="font-bold mb-4">Version 1: Standard (wie aktuell)</h3>
        <form class="space-y-4 mobile-form">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" placeholder="Name *" class="w-full p-3 border rounded">
            <input type="tel" placeholder="Telefon *" class="w-full p-3 border rounded">
          </div>
          <input type="text" placeholder="Startort" class="w-full p-3 border rounded">
          <input type="text" placeholder="Zielort" class="w-full p-3 border rounded">
          <button type="button" class="w-full bg-green-600 text-white p-3 rounded">Test Button</button>
        </form>
      </div>

      <!-- Version 2: 100vw -->
      <div class="bg-white p-4 rounded border-2 border-red-500" style="width: 100vw; margin-left: calc(-50vw + 50%);">
        <h3 class="font-bold mb-4">Version 2: 100vw Container</h3>
        <form class="space-y-4" style="padding: 0 1rem;">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" placeholder="Name *" class="w-full p-3 border rounded">
            <input type="tel" placeholder="Telefon *" class="w-full p-3 border rounded">
          </div>
          <input type="text" placeholder="Startort" class="w-full p-3 border rounded">
          <input type="text" placeholder="Zielort" class="w-full p-3 border rounded">
          <button type="button" class="w-full bg-red-600 text-white p-3 rounded">Test Button</button>
        </form>
      </div>

      <!-- Version 3: Flexbox -->
      <div class="bg-white p-4 rounded border-2 border-green-500">
        <h3 class="font-bold mb-4">Version 3: Flexbox Fix</h3>
        <form class="space-y-4">
          <div class="flex flex-col sm:flex-row gap-4">
            <input type="text" placeholder="Name *" class="flex-1 p-3 border rounded min-w-0">
            <input type="tel" placeholder="Telefon *" class="flex-1 p-3 border rounded min-w-0">
          </div>
          <input type="text" placeholder="Startort" class="w-full p-3 border rounded">
          <input type="text" placeholder="Zielort" class="w-full p-3 border rounded">
          <button type="button" class="w-full bg-green-600 text-white p-3 rounded">Test Button</button>
        </form>
      </div>

      <!-- Version 4: Pure CSS Grid -->
      <div class="bg-white p-4 rounded border-2 border-purple-500">
        <h3 class="font-bold mb-4">Version 4: CSS Grid Native</h3>
        <form class="space-y-4" style="display: grid; grid-template-columns: 1fr; gap: 1rem;">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <input type="text" placeholder="Name *" class="p-3 border rounded" style="width: 100%; box-sizing: border-box;">
            <input type="tel" placeholder="Telefon *" class="p-3 border rounded" style="width: 100%; box-sizing: border-box;">
          </div>
          <input type="text" placeholder="Startort" class="p-3 border rounded" style="width: 100%; box-sizing: border-box;">
          <input type="text" placeholder="Zielort" class="p-3 border rounded" style="width: 100%; box-sizing: border-box;">
          <button type="button" class="w-full bg-purple-600 text-white p-3 rounded">Test Button</button>
        </form>
      </div>

      <!-- Version 5: No Grid auf Mobile -->
      <div class="bg-white p-4 rounded border-2 border-orange-500">
        <h3 class="font-bold mb-4">Version 5: Kein Grid auf Mobile</h3>
        <form class="space-y-4">
          <div class="hidden sm:grid sm:grid-cols-2 sm:gap-4 space-y-4 sm:space-y-0">
            <input type="text" placeholder="Name *" class="w-full p-3 border rounded">
            <input type="tel" placeholder="Telefon *" class="w-full p-3 border rounded">
          </div>
          <div class="sm:hidden space-y-4">
            <input type="text" placeholder="Name *" class="w-full p-3 border rounded">
            <input type="tel" placeholder="Telefon *" class="w-full p-3 border rounded">
          </div>
          <input type="text" placeholder="Startort" class="w-full p-3 border rounded">
          <input type="text" placeholder="Zielort" class="w-full p-3 border rounded">
          <button type="button" class="w-full bg-orange-600 text-white p-3 rounded">Test Button</button>
        </form>
      </div>
    </div>

    <!-- Diagnose Output -->
    <div class="mt-8 bg-gray-100 p-4 rounded">
      <h3 class="font-bold mb-2">📊 Live Diagnose:</h3>
      <div id="diagnose-output" class="text-sm font-mono bg-white p-2 rounded"></div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'iPhone Kontaktformular Test - Diagnostik für Werner',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' }
  ]
})

onMounted(() => {
  // Geräte-Info sammeln
  document.getElementById('viewport-width').textContent = window.innerWidth
  document.getElementById('screen-width').textContent = window.screen.width
  document.getElementById('user-agent').textContent = navigator.userAgent
  document.getElementById('touch-support').textContent = 'ontouchstart' in window ? 'JA' : 'NEIN'

  // iOS Safari Detection
  const isIOSSafari = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
  document.getElementById('ios-safari').textContent = isIOSSafari ? 'JA' : 'NEIN'

  // Live Diagnose
  const diagnoseElement = document.getElementById('diagnose-output')

  function updateDiagnose() {
    const forms = document.querySelectorAll('form')
    let output = `Viewport: ${window.innerWidth}x${window.innerHeight}\n`
    output += `Screen: ${window.screen.width}x${window.screen.height}\n\n`

    forms.forEach((form, index) => {
      const rect = form.getBoundingClientRect()
      const inputs = form.querySelectorAll('input')
      output += `Form ${index + 1}: ${rect.width.toFixed(1)}px breit\n`

      inputs.forEach((input, inputIndex) => {
        const inputRect = input.getBoundingClientRect()
        output += `  Input ${inputIndex + 1}: ${inputRect.width.toFixed(1)}px\n`
      })
      output += '\n'
    })

    diagnoseElement.textContent = output
  }

  updateDiagnose()
  window.addEventListener('resize', updateDiagnose)

  // Touch Events für Debugging
  document.addEventListener('touchstart', () => {
    // Touch detected on iPhone test page
  })
})
</script>

<style scoped>
/* Alle CSS Fixes hier testen */
@supports (-webkit-touch-callout: none) {
  .mobile-form {
    background-color: rgba(255, 0, 0, 0.1) !important;
  }
}
</style>