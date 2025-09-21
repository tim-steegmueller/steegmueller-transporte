<template>
  <nav class="flex items-center space-x-2 text-sm" aria-label="Breadcrumb">
    <ol class="flex items-center space-x-2">
      <li v-for="(item, index) in breadcrumbs" :key="index" class="flex items-center">
        <!-- Separator -->
        <ChevronRightIcon 
          v-if="index > 0" 
          class="h-4 w-4 text-gray-400 mx-2" 
          aria-hidden="true"
        />
        
        <!-- Breadcrumb Item -->
        <component
          :is="item.href ? 'NuxtLink' : 'span'"
          :to="item.href"
          :class="[
            'flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200',
            item.href 
              ? 'text-gray-600 hover:text-brand-600 hover:bg-brand-50 dark:text-gray-300 dark:hover:text-brand-400 dark:hover:bg-brand-900/20' 
              : 'text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 font-medium'
          ]"
          :aria-current="!item.href ? 'page' : undefined"
        >
          <!-- Icon -->
          <component 
            v-if="item.icon" 
            :is="item.icon" 
            class="h-4 w-4"
            :class="item.href ? 'text-gray-400' : 'text-brand-600 dark:text-brand-400'"
          />
          
          <!-- Text -->
          <span>{{ item.label }}</span>
        </component>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { 
  HomeIcon, 
  ChevronRightIcon,
  TruckIcon,
  MapPinIcon,
  DocumentTextIcon,
  UserGroupIcon,
  PhoneIcon
} from '@heroicons/vue/24/outline'

// Props
const props = defineProps({
  items: {
    type: Array,
    default: () => []
  },
  showHome: {
    type: Boolean,
    default: true
  }
})

// Icon mapping
const iconMap = {
  home: HomeIcon,
  transport: TruckIcon,
  location: MapPinIcon,
  blog: DocumentTextIcon,
  about: UserGroupIcon,
  contact: PhoneIcon
}

// Computed breadcrumbs with home
const breadcrumbs = computed(() => {
  const items = [...props.items]
  
  if (props.showHome && items.length > 0) {
    items.unshift({
      label: 'Start',
      href: '/',
      icon: 'home'
    })
  }
  
  return items.map(item => ({
    ...item,
    icon: item.icon ? iconMap[item.icon] : null
  }))
})
</script>

<style scoped>
/* Smooth transitions */
nav {
  animation: slideInFromTop 0.3s ease-out;
}

@keyframes slideInFromTop {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Hover effects */
nav a:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Active state */
nav span[aria-current="page"] {
  position: relative;
}

nav span[aria-current="page"]::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 2px;
  background: linear-gradient(90deg, #1f8a6e, #2fae8b);
  border-radius: 1px;
}
</style>
