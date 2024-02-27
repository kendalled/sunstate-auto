<template>
  <div class="overflow-hidden bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      <div class="lg:pr-8 lg:pt-4">
        <div class="lg:max-w-lg">
          <h2 class="text-base font-semibold leading-7 text-red-600">{{ flavor }}</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ heading }}</p>
          <p class="mt-6 text-lg leading-8 text-gray-600">{{ subheading }}</p>
          <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
            <div v-for="point in points" class="relative pl-9">
              <dt class="inline font-semibold text-gray-900">
                <!-- <svg class="absolute left-1 top-1 h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clip-rule="evenodd" />
                </svg> -->
                <svg class="absolute left-1 top-1 h-5 w-5 text-red-600" data-slot="icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <circle cx="12" cy="12" r="6" />
                  <circle class="opacity-25" cx="12" cy="12" r="12" />
                </svg>
                {{ point.title }}:
              </dt>
              <dd class="inline">{{ point.subtext }}</dd>
            </div>
          </dl>
        </div>
      </div>
      <img :src="image" :alt="imageAlt" class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" width="2432" height="1442">
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ImageRight',
  props: {
    flavor: {
      type: String,
      default: 'This is the subheading'
    },
    heading: {
      type: String,
      default: 'This is the heading'
    },
    subheading: {
      type: String,
      default: 'This is the subheading'
    },
    image: {
      type: String,
      default: '/hondacropped.png'
    },
    imageAlt: 'Default alt text',
    points: {
      type: Array,
      default: [
        {
          title: 'Precision Craftsmanship',
          subtext: 'This is the subtext'
        }
      ]
    }
  }
}
</script>