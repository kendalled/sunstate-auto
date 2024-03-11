<template>
<header class="bg-gray-50 inset-x-0 relative top-0 z-50 border-b">
  <nav class="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8" aria-label="Global">
    <div class="flex lg:flex-1">
      <nuxt-link to="/" title="Home Page" class="-m-1.5 p-1.5">
        <span class="sr-only">Sunstate AutoGlass</span>
				<!-- todo: space? Size ? -->
        <img class="h-10 sm:h-[3.75rem] absolute top-[1.15rem] sm:top-3.5 w-auto" src="/logo.png" alt="">
      </nuxt-link>
    </div>
    <div class="hidden lg:flex lg:gap-x-12">
			<nuxt-link v-for="link in links" :to="link.href" :title="link.title" class="text-sm font-semibold leading-6 text-gray-800 hover:text-gray-900">{{link.text}}</nuxt-link>
    </div>
    <div class="flex flex-1 items-center justify-end gap-x-6">
				<div class="hidden lg:flex">
          <!-- todo: fix alignment issues -->
          <nuxt-link to="/agent" title="Agent Form" v-if="true" type="button" class="rounded-md bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Agent Form</nuxt-link>
					<button aria-label="Hide phone number" class="hidden xl:block ml-6 flex-shrink-0 h-9 w-9 bg-gray-200 text-gray-600 border-2 border-transparent rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 focus:bg-gray-100">
						<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-label="Closes phone number" viewBox="0 0 24 24" class="mx-auto w-6 h-6"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
					</button>
					<div class="text-base text-gray-700 font-semibold hidden xl:block">
						<a title="Sunstate AutoGlass Phone Number" href="tel:+14072652855" class="inline-block text-base leading-9 transition-colors duration-200 hover:text-gray-600 ml-2"> +1 (407) 265-2855 </a>
					</div>
				</div>
      <!-- <a href="#" class="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Get a Quote</a> -->
    </div>
    <div class="flex lg:hidden">
      <a href="tel:+14072652855" title="Sunstate AutoGlass Phone Number" class="mr-4 -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
        <span class="sr-only">Call Sunstate AutoGlass</span>
        <svg data-slot="icon" class="h-6 w-6" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"></path>
        </svg>
      </a>
      <button type="button" @click="openMobile" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
        <span class="sr-only">Open main menu</span>
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
  </nav>
  <!-- Mobile menu, show/hide based on menu open state. -->
  <div v-if="mobileOpen" class="lg:hidden" role="dialog" aria-modal="true">
    <!-- Background backdrop, show/hide based on slide-over state. -->
    <div class="fixed inset-0 z-10"></div>
    <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div class="flex items-center gap-x-6">
        <a href="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Sunstate AutoGlass</span>
          <img class="h-10 w-auto" src="/logo.png" alt="">
        </a>
        <nuxt-link to="/agent" title="Agent form" class="ml-auto rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Agent Form</nuxt-link>
        <button type="button" @click="mobileOpen = false" class="-m-2.5 rounded-md p-2.5 text-gray-700">
          <span class="sr-only">Close menu</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="mt-6 flow-root">
        <div class="-my-6 divide-y divide-gray-500/10">
          <div class="space-y-2 py-6">
						<nuxt-link v-for="link in links" :to="link.href" :title="link.title" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{link.text}}</nuxt-link>
          </div>
          <div class="py-6">
            <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
</template>

<script>
export default {
  methods: {
    openMobile () {
      if(!this.mobileOpen) {
        this.mobileOpen = true
      }
    }
  },
  watch: {
    $route(to, from) {
      this.mobileOpen = false
    },
  },
  data () {
    return {
			flyoutOpen: false,
      mobileOpen: false,
			links: [
				{
					text: 'Services',
					href: '/services',
					title: 'Overview of our company\'s services'
				},
				{
					text: 'Calibrations',
					href: '/calibrations',
					title: 'Windshield calibrations page'
				},
				{
					text: 'About us',
					href: '/about',
					title: 'About our company'
				},
				{
					text: 'Contact',
					href: '/contact',
					title: 'Contact details'
				}
			]
    }
  },
}
</script>