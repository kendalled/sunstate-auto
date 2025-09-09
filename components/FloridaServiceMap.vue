<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Header Section -->
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Our Service Areas
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          We proudly serve 18 counties across Central and West-Central Florida, bringing professional auto glass services directly to your location.
        </p>
      </div>

      <!-- Map Section -->
      <div class="mt-16 sm:mt-20">
        <div ref="overlayContainer" class="relative mx-auto max-w-5xl">
          <!-- Map Container -->
          <div ref="mapWrapper" class="relative overflow-hidden rounded-3xl bg-gray-50 border border-gray-200 shadow-md">
            <!-- Light layered card accents -->
            <div class="pointer-events-none absolute -inset-px rounded-3xl ring-1 ring-gray-200"></div>
            <div class="pointer-events-none absolute inset-3 rounded-2xl border border-gray-200/70"></div>
            <div class="p-8">
              <div class="florida-map-container" v-if="floridaSvg" v-html="floridaSvg"></div>
              <div v-else class="florida-map-container flex items-center justify-center h-64">
                <div class="text-center">
                  <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
                  <p class="text-gray-600">Loading Florida service map...</p>
                </div>
              </div>
            </div>
          </div>

          <!-- County Info Popup -->
          <div 
            v-if="tooltip.visible"
            class="absolute z-20 max-w-xs rounded-lg bg-white shadow-lg ring-1 ring-black/10 p-4 text-sm"
            :style="{ left: tooltip.x + 'px', top: tooltip.y + 'px' }"
          >
            <div class="flex items-start justify-between gap-4">
              <div>
                <p class="text-xs uppercase tracking-wide text-gray-500">Service area</p>
                <p class="mt-1 text-base font-semibold text-gray-900">{{ formatCountyName(tooltip.county) }} County</p>
              </div>
              <button @click="hideTooltip" class="text-gray-400 hover:text-gray-600">&times;</button>
            </div>
            <div class="mt-3 grid grid-cols-2 gap-3">
              <div>
                <p class="text-xs text-gray-500">Jobs completed</p>
                <p class="mt-0.5 font-medium text-gray-900">{{ tooltip.stats.jobs.toLocaleString() }}</p>
              </div>
              <div>
                <p class="text-xs text-gray-500">Avg response</p>
                <p class="mt-0.5 font-medium text-gray-900">{{ tooltip.stats.avgResponse }}</p>
              </div>
              <div>
                <p class="text-xs text-gray-500">ADAS calibrations</p>
                <p class="mt-0.5 font-medium text-gray-900">{{ tooltip.stats.calibrations }}</p>
              </div>
              <div>
                <p class="text-xs text-gray-500">Mobile repairs</p>
                <p class="mt-0.5 font-medium text-gray-900">{{ tooltip.stats.mobileRepairs }}</p>
              </div>
            </div>
            <div class="mt-3">
              <NuxtLink 
                to="/agent" 
                class="inline-flex items-center justify-center rounded-md bg-red-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 transition-colors"
                @click="hideTooltip"
              >
                Get a fast quote
              </NuxtLink>
            </div>
          </div>

          <!-- Legend -->
          <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-8">
            <div class="flex items-center gap-3">
              <div class="h-4 w-4 rounded border border-red-600 bg-red-600"></div>
              <span class="text-sm font-medium text-gray-900">Service Areas</span>
            </div>
            <div class="flex items-center gap-3">
              <div class="h-4 w-4 rounded border border-gray-300 bg-white"></div>
              <span class="text-sm font-medium text-gray-900">Other Counties</span>
            </div>
          </div>
        </div>

        <!-- Service Counties List -->
        <div class="mt-16">
          <div class="mx-auto max-w-2xl text-center">
            <h3 class="text-xl font-semibold text-gray-900 mb-8">
              Counties We Serve
            </h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
              <div 
                v-for="county in serviceCounties" 
                :key="county"
                class="bg-red-50 rounded-lg px-5 py-2 text-sm font-medium text-red-800 border border-red-200 whitespace-nowrap"
              >
                {{ formatCountyName(county) }}
              </div>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="mt-16 text-center">
          <p class="text-lg text-gray-600 mb-6">
            Located in one of our service areas? Get your quote today!
          </p>
          <NuxtLink 
            to="/agent" 
            class="inline-flex items-center justify-center rounded-md bg-red-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 transition-colors"
          >
            Get Free Quote
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, onBeforeUnmount } from 'vue'
// Counties that SunState Auto serves (using Title Case to match SVG IDs)
const serviceCounties = [
  'Sarasota',
  'Manatee', 
  'Pinellas',
  'Hillsborough',
  'Polk',
  'Osceola',
  'Brevard',
  'Seminole',
  'Orange',
  'Lake',
  'Sumter',
  'Hernando',
  'Pasco',
  'Citrus',
  'Marion',
  'Putnam',
  'Flagler',
  'Volusia'
]

// Format county names for display
const formatCountyName = (county) => {
  return county.split('_').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ')
}

// Load and process the Florida SVG
const floridaSvg = ref('')
const overlayContainer = ref(null)
const mapWrapper = ref(null)

// Tooltip state
const tooltip = ref({
  visible: false,
  x: 0,
  y: 0,
  county: '',
  stats: { jobs: 0, avgResponse: 'Same-day', calibrations: '0%', mobileRepairs: '0%' }
})

const hideTooltip = () => {
  tooltip.value.visible = false
}

const showTooltipForCounty = (county, anchorRect) => {
  const containerBox = overlayContainer.value.getBoundingClientRect()
  const popupWidth = 280
  const offset = 10
  let x = anchorRect.left + anchorRect.width / 2 - popupWidth / 2 - containerBox.left
  x = Math.max(8, Math.min(x, containerBox.width - popupWidth - 8))
  let y = anchorRect.top - containerBox.top - offset
  if (y < 8) y = anchorRect.bottom - containerBox.top + offset
  tooltip.value = {
    visible: true,
    x,
    y,
    county,
    stats: countyStats[county] || { jobs: 120, avgResponse: 'Same-day', calibrations: '30%', mobileRepairs: '65%' }
  }
}

// chip click removed per request

// Simple per-county stats (placeholder numbers tailored for marketing context)
const countyStats = serviceCounties.reduce((acc, county, index) => {
  const base = 140 + index * 18
  acc[county] = {
    jobs: base,
    avgResponse: index % 3 === 0 ? 'Same-day' : index % 3 === 1 ? 'Next-day' : '1-2 days',
    calibrations: `${28 + (index % 7) * 2}%`,
    mobileRepairs: `${60 + (index % 5) * 4}%`
  }
  return acc
}, {})

onMounted(async () => {
  // Register global listeners on client only
  if (typeof document !== 'undefined') {
    document.addEventListener('keydown', onKeydown)
    document.addEventListener('click', onDocClick)
  }
  try {
    const response = await fetch('/named-florida-counties.svg')
    const svgText = await response.text()

    // Parse SVG and update target counties regardless of attribute order
    const parser = new DOMParser()
    const svgDoc = parser.parseFromString(svgText, 'image/svg+xml')

    serviceCounties.forEach(county => {
      const el = svgDoc.getElementById(county)
      if (el) {
        // Set styles directly so they override existing inline style attributes
        el.style.fill = '#dc2626'
        el.style.stroke = '#991b1b'
        el.style.strokeWidth = '1'
      }
    })

    // Set label font to Inter for all county labels and default color to gray-600
    Array.from(svgDoc.querySelectorAll('text, tspan')).forEach(node => {
      node.style.fontFamily = 'Inter, sans-serif'
      node.style.fill = '#4b5563' // Tailwind gray-600
    })

    // Also color label text for service counties to Tailwind's text-red-50 (#fef2f2)
    const serviceSet = new Set(serviceCounties.map(c => c.toLowerCase()))
    const labelNodes = Array.from(svgDoc.querySelectorAll('text, tspan'))
    labelNodes.forEach(node => {
      const label = (node.textContent || '').trim().toLowerCase()
      if (serviceSet.has(label)) {
        // Apply to the node and its parent <text> (if applicable) for robustness
        ;[node, node.parentElement].forEach(target => {
          if (target && (target.tagName && (target.tagName.toLowerCase() === 'text' || target.tagName.toLowerCase() === 'tspan'))) {
            target.style.fill = '#fef2f2'
          }
        })
      }
    })

    const serializer = new XMLSerializer()
    floridaSvg.value = serializer.serializeToString(svgDoc.documentElement)

    // After SVG is injected, attach click handlers to service counties
    await nextTick()
    const svgEl = overlayContainer.value?.querySelector('svg')
    if (svgEl) {
      // Improve clickability: pointer events on labels, prevent text selection
      svgEl.style.userSelect = 'none'
      Array.from(svgEl.querySelectorAll('text, tspan')).forEach(node => {
        node.style.pointerEvents = 'none'
      })

      serviceCounties.forEach(county => {
        const el = svgEl.getElementById(county)
        if (el) {
          el.style.pointerEvents = 'auto'
          el.addEventListener('click', (event) => {
            const targetEl = event.currentTarget
            const countyBox = targetEl.getBoundingClientRect()
            showTooltipForCounty(county, countyBox)
          })
        }
      })
    }
  } catch (error) {
    console.error('Failed to load Florida map:', error)
    floridaSvg.value = '<p class="text-red-600">Failed to load map</p>'
  }
})

// Close tooltip on escape or outside click
const onKeydown = (e) => { if (e.key === 'Escape') hideTooltip() }
const onDocClick = (e) => {
  if (!overlayContainer.value) return
  if (tooltip.value.visible && !overlayContainer.value.contains(e.target)) {
    hideTooltip()
  }
}

onBeforeUnmount(() => {
  if (typeof document !== 'undefined') {
    document.removeEventListener('keydown', onKeydown)
    document.removeEventListener('click', onDocClick)
  }
})
</script>

<style scoped>
.florida-map-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.florida-map-container :deep(svg) {
  max-width: 100%;
  height: auto;
  width: 100%;
  max-height: 620px;
}

/* Hover effects for counties */
.florida-map-container :deep(path) {
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}

.florida-map-container :deep(path:hover) {
  opacity: 0.8;
  stroke-width: 1.5;
}

/* Service counties styling */
.florida-map-container :deep(path[fill="#dc2626"]) {
  stroke: #991b1b;
  stroke-width: 1;
}

.florida-map-container :deep(path[fill="#dc2626"]:hover) {
  fill: #ef4444;
  stroke-width: 2;
}

/* Non-service counties styling */
.florida-map-container :deep(path[fill="#ffffff"]) {
  stroke: #6b7280;
  stroke-width: 0.5;
}

.florida-map-container :deep(path[fill="#ffffff"]:hover) {
  fill: #f9fafb;
  stroke: #374151;
  stroke-width: 1;
}
</style>