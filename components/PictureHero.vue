<template>
  <div class="bg-gray-900">
      <!-- todo: do smarter -mt-7 og spacing -->
    <div class="relative isolate overflow-hidden -mt-12">
      <!-- &auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply -->
      <picture>
        <!-- WebP format source -->
        <source srcset="/cracked-optim.webp" type="image/webp">
        <!-- PNG format source (fallback for browsers that don't support WebP) -->
        <source srcset="/cracked-optim.png" type="image/png">
        <!-- Image element with fallback -->
        <img src="/cracked-optim.png" alt="Cracked Windshield" class="absolute inset-0 -z-10 h-full w-full object-cover mix-blend-multiply">
      </picture>
      <div class="absolute inset-0 -z-10 h-full w-full object-cover bg-gray-900 opacity-85 mix-blend-multiply" />
      <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-15 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
      </div>
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 px-6 sm:px-0">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
            No cost windshield replacement with insurance. <nuxt-link to="/services" title="Overview of services" class="font-semibold text-white"><span class="absolute inset-0" aria-hidden="true"></span>Learn more <span aria-hidden="true">&rarr;</span></nuxt-link>
          </div>
        </div>
        <!-- og was no -mt-4 and no mt-2 -->
        <div class="text-center -mt-4">
          <span class="text-2xl font-bold tracking-tight text-gray-100/90 sm:text-3xl">Orlando - Tampa</span>
          <h1 class="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl">Windshield repair has never been easier.</h1>
          <p class="mt-6 text-lg leading-8 text-gray-300">Get seamless windshield repair & replacement with SunState AutoGlass. Our swift, same-day service ensures your auto glass is restored properly. Trust us for a hassle-free solution to get you back on the road with a clear view.</p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <!-- <nuxt-link to="/agent" class="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400">Online Submission</nuxt-link> -->
            <nuxt-link to="/agent" title="Agent Submission" class="inline-flex items-center gap-x-2 rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
              Online Submission
              <svg class="-mr-0.5 h-5 w-5" data-slot="icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path clip-rule="evenodd" fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"></path>
              </svg>
            </nuxt-link>
            <nuxt-link to="/services" title="Overview of services" class="text-sm font-semibold leading-6 text-white">Learn more <span aria-hidden="true">→</span></nuxt-link>
          </div>
        </div>
      </div>
      <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-15 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
      </div>
    </div>
  </div>
</template>
