<template>
  <!-- Team section -->
  <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our team</h2>
          <p class="mt-6 text-lg leading-8 text-gray-600">Sit facilis neque ab nulla vel. Cum eos in laudantium. Temporibus eos totam in dolorum. Nemo vel facere repellendus ut eos dolores similique.</p>
        </div>
        <ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6">
          <li v-for="person in team">
            <img class="mx-auto h-24 w-24 rounded-full" :src="person.image" alt="">
            <h3 class="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{{ person.name }}</h3>
            <p class="text-sm leading-6 text-gray-600">{{ person.role }}</p>
          </li>

          <!-- More people... -->
        </ul>
      </div>
</template>

<script>
export default {
  data () {
    return {
      team: [
        {
          name: 'Marybel R.',
          image: '/team/marybel.png',
          role: 'Office Manager'
        },
        {
          name: 'Eldora M.',
          image: '/team/eldora.png',
          role: 'Customer Support'
        },
        {
          name: 'Vanessa D.',
          image: '/team/vanessa.png',
          role: 'Customer Support'
        },
        {
          name: 'Bobby C.',
          image: '/team/joe.png',
          role: 'Field Manager'
        },
        {
          name: 'Kyle R.',
          image: '/fake4.jpeg',
          role: 'Calibrations Expert'
        },
        {
          name: 'Joe T.',
          image: '/team/bobby.png',
          role: 'Lead Technician'
        }
      ]
    }
  }
}
</script>