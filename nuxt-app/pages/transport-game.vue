<template>
  <div
    class="min-h-screen bg-gradient-to-br from-blue-400 via-green-400 to-yellow-400 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700"
  >
    <div class="container mx-auto px-4 py-8">
      <div class="max-w-4xl mx-auto">
        <!-- Game Header -->
        <div class="text-center mb-8">
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            🚛 Transport Tycoon 🚛
          </h1>
          <p class="text-xl text-white/90 mb-6">Manage Steegmüller's transport empire!</p>
        </div>

        <!-- Game Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div
            class="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center border border-white/30"
          >
            <div class="text-2xl mb-2">💰</div>
            <div class="text-white font-bold text-xl">{{ money }}€</div>
            <div class="text-white/80 text-sm">Geld</div>
          </div>
          <div
            class="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center border border-white/30"
          >
            <div class="text-2xl mb-2">🚛</div>
            <div class="text-white font-bold text-xl">{{ trucks.length }}</div>
            <div class="text-white/80 text-sm">LKWs</div>
          </div>
          <div
            class="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center border border-white/30"
          >
            <div class="text-2xl mb-2">📦</div>
            <div class="text-white font-bold text-xl">{{ completedJobs }}</div>
            <div class="text-white/80 text-sm">Aufträge</div>
          </div>
          <div
            class="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center border border-white/30"
          >
            <div class="text-2xl mb-2">⭐</div>
            <div class="text-white font-bold text-xl">{{ reputation }}</div>
            <div class="text-white/80 text-sm">Ruf</div>
          </div>
        </div>

        <!-- Game Area -->
        <div class="grid lg:grid-cols-2 gap-6">
          <!-- Available Jobs -->
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
            <h2 class="text-2xl font-bold text-white mb-4 flex items-center">
              📋 Verfügbare Aufträge
            </h2>
            <div class="space-y-3 max-h-64 overflow-y-auto">
              <div
                v-for="job in availableJobs"
                :key="job.id"
                class="bg-white/20 rounded-xl p-4 hover:bg-white/30 transition-all cursor-pointer"
                @click="selectJob(job)"
              >
                <div class="flex justify-between items-start mb-2">
                  <span class="text-white font-semibold">{{ job.from }} → {{ job.to }}</span>
                  <span class="text-green-300 font-bold">{{ job.reward }}€</span>
                </div>
                <div class="text-white/80 text-sm mb-2">{{ job.cargo }}</div>
                <div class="flex justify-between text-xs text-white/70">
                  <span>⏱️ {{ job.time }}h</span>
                  <span>📏 {{ job.distance }}km</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Truck Fleet -->
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
            <h2 class="text-2xl font-bold text-white mb-4 flex items-center justify-between">
              🚛 Fuhrpark
              <button
                :disabled="money < truckPrice"
                class="bg-green-600 hover:bg-green-500 disabled:bg-gray-500 disabled:opacity-50 text-white px-4 py-2 rounded-lg text-sm transition-all"
                @click="buyTruck"
              >
                LKW kaufen ({{ truckPrice }}€)
              </button>
            </h2>
            <div class="space-y-3 max-h-64 overflow-y-auto">
              <div v-for="truck in trucks" :key="truck.id" class="bg-white/20 rounded-xl p-4">
                <div class="flex justify-between items-center mb-2">
                  <span class="text-white font-semibold">{{ truck.name }}</span>
                  <span
                    :class="truck.status === 'available' ? 'text-green-300' : 'text-yellow-300'"
                  >
                    {{ truck.status === 'available' ? '✅ Verfügbar' : '🚛 Unterwegs' }}
                  </span>
                </div>
                <div v-if="truck.currentJob" class="text-white/80 text-sm">
                  {{ truck.currentJob.from }} → {{ truck.currentJob.to }}
                  <div class="w-full bg-white/20 rounded-full h-2 mt-1">
                    <div
                      class="bg-green-400 h-2 rounded-full transition-all duration-1000"
                      :style="`width: ${truck.progress}%`"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Game Controls -->
        <div class="mt-8 text-center">
          <button
            class="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold text-lg transition-all hover:scale-105 mr-4"
            @click="generateNewJobs"
          >
            🔄 Neue Aufträge generieren
          </button>
          <button
            class="bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-xl font-semibold text-lg transition-all hover:scale-105"
            @click="resetGame"
          >
            🔄 Spiel zurücksetzen
          </button>
        </div>

        <!-- Game Messages -->
        <div v-if="messages.length > 0" class="mt-6">
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
            <h3 class="text-white font-bold mb-2">📢 Nachrichten</h3>
            <div class="space-y-1 max-h-32 overflow-y-auto">
              <div
                v-for="(message, index) in messages"
                :key="index"
                class="text-white/90 text-sm fade-in"
              >
                {{ message }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

useHead({
  title: 'Transport Tycoon - Kostenloses Logistik-Spiel | S. Steegmüller',
  meta: [
    {
      name: 'description',
      content:
        'Spiele Transport Tycoon - das kostenlose Logistik-Spiel von S. Steegmüller. Baue dein Transportunternehmen auf, kaufe LKWs und manage Lieferungen in der Region Stuttgart.'
    },
    {
      name: 'keywords',
      content:
        'Transport Spiel, Logistik Game, LKW Simulator, Transport Tycoon, Stuttgart Transport, Steegmüller Spiel, Browser Game, kostenlos'
    },
    { property: 'og:title', content: 'Transport Tycoon - Kostenloses Logistik-Spiel' },
    {
      property: 'og:description',
      content:
        'Baue dein eigenes Transportunternehmen auf! Kaufe LKWs, nimm Aufträge an und erobere die Region Stuttgart.'
    },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'Transport Tycoon - Kostenloses Logistik-Spiel' },
    {
      name: 'twitter:description',
      content:
        'Baue dein eigenes Transportunternehmen auf! Kaufe LKWs, nimm Aufträge an und erobere die Region Stuttgart.'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'VideoGame',
        name: 'Transport Tycoon',
        description: 'Ein kostenloses Browser-Spiel zum Aufbau eines Transportunternehmens',
        genre: 'Simulation',
        gamePlatform: 'Web Browser',
        operatingSystem: 'Any',
        applicationCategory: 'Game',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'EUR'
        },
        publisher: {
          '@type': 'Organization',
          name: 'S. Steegmüller Transportdienstleistungen'
        }
      })
    }
  ]
})

// Game State
const money = ref(10000)
const reputation = ref(50)
const completedJobs = ref(0)
const truckPrice = ref(15000)

const trucks = ref([{ id: 1, name: 'LKW-001', status: 'available', currentJob: null, progress: 0 }])

const availableJobs = ref([])
const messages = ref([])

// Cities in the region
const cities = [
  'Stuttgart',
  'Renningen',
  'Böblingen',
  'Leonberg',
  'Sindelfingen',
  'Calw',
  'Pforzheim',
  'Karlsruhe',
  'Heilbronn',
  'Tübingen'
]

// Cargo types
const cargoTypes = [
  'Möbel',
  'Baumaterial',
  'Maschinen',
  'Elektrogeräte',
  'Büroausstattung',
  'Industrieteile',
  'Werkzeuge',
  'Umzugsgut',
  'Baustoffe',
  'Ersatzteile'
]

// Game intervals
let jobInterval = null
let truckInterval = null

// Generate random job
const generateJob = () => {
  const from = cities[Math.floor(Math.random() * cities.length)]
  let to = cities[Math.floor(Math.random() * cities.length)]
  while (to === from) {
    to = cities[Math.floor(Math.random() * cities.length)]
  }

  const cargo = cargoTypes[Math.floor(Math.random() * cargoTypes.length)]
  const distance = Math.floor(Math.random() * 80) + 20
  const time = Math.floor(distance / 50) + 1
  const baseReward = distance * (10 + Math.random() * 20)
  const reward = Math.floor(baseReward * (1 + reputation.value / 100))

  return {
    id: Date.now() + Math.random(),
    from,
    to,
    cargo,
    distance,
    time,
    reward
  }
}

// Generate new jobs
const generateNewJobs = () => {
  const newJobs = []
  for (let i = 0; i < 3; i++) {
    newJobs.push(generateJob())
  }
  availableJobs.value = [...availableJobs.value, ...newJobs].slice(0, 6)
  addMessage('📋 Neue Transportaufträge verfügbar!')
}

// Select job for available truck
const selectJob = job => {
  const availableTruck = trucks.value.find(t => t.status === 'available')
  if (!availableTruck) {
    addMessage('❌ Kein LKW verfügbar!')
    return
  }

  // Start job
  availableTruck.status = 'busy'
  availableTruck.currentJob = job
  availableTruck.progress = 0

  // Remove job from available
  availableJobs.value = availableJobs.value.filter(j => j.id !== job.id)

  addMessage(`🚛 ${availableTruck.name} transportiert ${job.cargo} von ${job.from} nach ${job.to}`)
}

// Buy new truck
const buyTruck = () => {
  if (money.value < truckPrice.value) return

  money.value -= truckPrice.value
  const newTruck = {
    id: trucks.value.length + 1,
    name: `LKW-${String(trucks.value.length + 1).padStart(3, '0')}`,
    status: 'available',
    currentJob: null,
    progress: 0
  }
  trucks.value.push(newTruck)
  truckPrice.value = Math.floor(truckPrice.value * 1.2)

  addMessage(`🚛 Neuer LKW gekauft: ${newTruck.name}`)
}

// Add message
const addMessage = message => {
  messages.value.unshift(message)
  if (messages.value.length > 5) {
    messages.value = messages.value.slice(0, 5)
  }
}

// Update truck progress
const updateTrucks = () => {
  trucks.value.forEach(truck => {
    if (truck.status === 'busy' && truck.currentJob) {
      truck.progress += 2

      if (truck.progress >= 100) {
        // Job completed
        money.value += truck.currentJob.reward
        completedJobs.value++
        reputation.value += Math.floor(Math.random() * 3) + 1

        addMessage(
          `✅ ${truck.name} hat ${truck.currentJob.cargo} erfolgreich geliefert! +${truck.currentJob.reward}€`
        )

        truck.status = 'available'
        truck.currentJob = null
        truck.progress = 0
      }
    }
  })
}

// Reset game
const resetGame = () => {
  money.value = 10000
  reputation.value = 50
  completedJobs.value = 0
  truckPrice.value = 15000
  trucks.value = [{ id: 1, name: 'LKW-001', status: 'available', currentJob: null, progress: 0 }]
  availableJobs.value = []
  messages.value = []
  generateNewJobs()
  addMessage('🎮 Spiel wurde zurückgesetzt!')
}

// Initialize game
onMounted(() => {
  generateNewJobs()
  addMessage('🎮 Willkommen bei Transport Tycoon!')

  // Start intervals
  jobInterval = setInterval(generateNewJobs, 30000) // New jobs every 30s
  truckInterval = setInterval(updateTrucks, 1000) // Update trucks every second
})

onUnmounted(() => {
  if (jobInterval) clearInterval(jobInterval)
  if (truckInterval) clearInterval(truckInterval)
})
</script>

<style scoped>
.fade-in {
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Truck animation */
.truck-moving {
  animation: truckMove 2s ease-in-out infinite;
}

@keyframes truckMove {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
}

/* Hover effects */
.hover\\:scale-105:hover {
  transform: scale(1.05);
}

/* Scrollbar styling */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}
</style>
