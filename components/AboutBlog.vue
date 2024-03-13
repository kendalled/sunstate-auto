<template>
  <!-- Blog section -->
  <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8 mb-12">
        <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
          <p class="mt-2 text-lg leading-8 text-gray-600">As industry leaders in everything auto glass, we are here to help with expert advice.</p>
        </div>
        <div class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <!-- todo: better hover animation, implement blog page -->
          <article v-for="post in blogPosts" class="group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
            <img :src="post.image" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover lg:group-hover:opacity-75 transition-opacity">
            <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>

            <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              <time datetime="2020-03-16" class="mr-8">{{ post.date }}</time>
              <div class="-ml-4 flex items-center gap-x-4">
                <svg viewBox="0 0 2 2" class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                  <circle cx="1" cy="1" r="1" />
                </svg>
                <div class="flex gap-x-2.5">
                  <img src="/team/vanessa.png" alt="" class="h-6 w-6 flex-none rounded-full bg-white/10">
                  Vanessa D.
                </div>
              </div>
            </div>
            <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
              <a href="#">
                <span class="absolute inset-0"></span>
                {{ post.title }}
              </a>
            </h3>
          </article>

          <!-- More posts... -->
        </div>
      </div>
</template>

<script>
export default {
  data () {
    return {
      blogPosts: [
        {
          title: 'From a small crack to a shattered windshield - when to get repairs',
          image: '/glassrepair.jpg',
          date: 'Feb 16, 2024'
        },
        {
          title: 'Can hail damage your windshield? A 5 minute guide to weather damage',
          image: '/cracked.png',
          date: 'Jan 3, 2024'
        },
        {
          title: 'Auto glass for luxury vehicles - 10 tips to keep your windshield safe',
          image: '/broken.png',
          date: 'Feb 19, 2024'
        }


      ]
    }
  }
  }
</script>