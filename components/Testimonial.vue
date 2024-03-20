<template>
    <div class="overflow-hidden bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
      <div class="lg:pr-4 lg:pt-4">
        <div class="lg:max-w-lg">
          <h2 class="text-base font-semibold leading-7 text-red-600">{{ flavor }}</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ heading }}</p>
          <p class="mt-6 text-lg leading-8 text-gray-600">{{ copy }}</p>
          <div class="mt-8">
            <nuxt-link to="/agent" title="Agent Form" class="inline-flex rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Get started</nuxt-link>
            <!-- todo: styling fix? arrows? -->
            <nuxt-link to="/services" title="Our services" class="text-sm ml-6 font-semibold leading-6 text-gray-800 hover:text-gray-700">Learn more <span aria-hidden="true">→</span></nuxt-link>
          </div>
          <figure class="mt-16 border-l border-gray-200 pl-8 text-gray-600">
            <blockquote class="text-base leading-7">
              <p>
								{{ test }}
							</p>
            </blockquote>
            <figcaption class="mt-6 flex gap-x-4 text-sm leading-6">
              <img src="/vanessa.png" alt="Customer image" class="h-6 w-6 flex-none rounded-full">
              <div><span class="font-semibold text-gray-900">{{ reviewer }}</span> – Marketing Manager</div>
            </figcaption>
          </figure>
        </div>
      </div>
      <img :src="img" :alt="imgAlt" class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:ml-0 h-[33.75rem]" width="2432" height="1442">
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      default: 'This is the heading'
    },
    flavor: {
      type: String,
      default: 'This is the flavor'
    },
    copy: {
      type: String,
      default: 'This is the paragraph text that will be inserted.'
    },
    test: {
      type: String,
      default: 'They did a great job.'
    },
    reviewer: {
      type: String,
      default: 'Maria Hill'
    },
    img: {
      type: String,
      default: '/broken.png'
    },
    imgAlt: {
      type: String,
      default: 'Broken Audi Windshield'
    }
  }
}
</script>