<template>
  <div id="card" class="relative mx-auto sm:m-4">
    <!--outline background maybe match height idk -->
    <div id="outline" class="bg-gradient-to-tr from-red-500 h-full w-full to-red-700 absolute rounded-md -right-3 -bottom-3"></div>
    <!-- content -->
    <div id="content" class="p-8 bg-gray-50 rounded-md shadow-lg relative space-y-4">
      <!-- <div class="bg-gradient-to-tr from-red-400 to-red-600 h-3 w-16 ml-auto"></div> -->
      <slot></slot>
      <span class="text-2xl font-bold text-gray-800">{{ heading }}</span>
      <div class="h-0.5 rounded-md w-16 bg-red-600/65" />
      <p class="text-gray-600">
        {{ copy }}
      </p>
      <nuxt-link class="flex items-center" title="Overview of services" to="/services">
        <span>Learn More </span>
        <svg class="w-4 h-4 ml-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewCard',
  props: {
    heading: {
      type: String,
      default: 'This is the heading'
    },
    copy: {
      type: String,
      default: 'This is the paragraph text that will be inserted.'
    }
  }
}
</script>