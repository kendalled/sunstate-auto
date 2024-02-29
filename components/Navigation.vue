<template>
<header class="bg-gray-50 inset-x-0 relative top-0 z-50 border-b">
  <nav class="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8" aria-label="Global">
    <div class="flex lg:flex-1">
      <nuxt-link to="/" title="Home Page" class="-m-1.5 p-1.5">
        <span class="sr-only">Sunstate AutoGlass</span>
				<!-- todo: space? -->
        <img class="h-10 sm:h-[3.25rem] absolute top-[1.15rem] sm:top-4 w-auto" src="/logo.png" alt="">
      </nuxt-link>
    </div>
    <div class="hidden lg:flex lg:gap-x-12">
			<nuxt-link v-for="link in links" :to="link.href" :title="link.title" class="text-sm font-semibold leading-6 text-gray-800 hover:text-gray-900">{{link.text}}</nuxt-link>
    </div>
    <div class="flex flex-1 items-center justify-end gap-x-6">
				<div class="hidden xl:flex">
					<button aria-label="Hide phone number" class="flex-shrink-0 p-1 bg-red-500 text-red-50 border-2 border-transparent rounded-full hover:text-red-200 focus:outline-none focus:text-gray-500 focus:bg-gray-100">
						<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-label="Closes phone number" viewBox="0 0 24 24" class="w-6 h-6"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
					</button>
					<div class="ml-2 text-base text-gray-700 font-semibold">
						<a title="Sunstate AutoGlass Phone Number" href="tel:+14072652855" class="inline-block text-base leading-9 transition-colors duration-200 hover:text-gray-600 ml-2"> +1 (407) 265-2855 </a>
					</div>
				</div>
      <!-- <a href="#" class="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Get a Quote</a> -->
    </div>
    <div class="flex lg:hidden">
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
        <a href="#" class="ml-auto rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Sign up</a>
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
					text: 'About Us',
					href: '/about',
					title: 'About our company'
				},
				{
					text: 'Agent Form',
					href: '/agent',
					title: 'Contact details'
				}
			]
    }
  },
}
</script>