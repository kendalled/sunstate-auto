<template>
<div class="bg-white">
  <div class="mx-auto max-w-7xl divide-y divide-gray-900/10 px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
    <h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
    <dl class="mt-10 space-y-8 divide-y divide-gray-900/10">
      <div v-for="item in questionList" class="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
        <dt class="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">{{ item.question }}</dt>
        <dd class="mt-4 lg:col-span-7 lg:mt-0">
          <p class="text-base leading-7 text-gray-600">{{ item.answer }}</p>
        </dd>
      </div>
    </dl>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      questionList: [
        {
          question: 'Who is Sunstate AutoGlass?',
          answer: 'SunState Auto Glass is a leading provider of automotive glass services, specializing in windshield replacements, side and rear window replacement, chip and crack repair, as well as commercial vehicle services. We are committed to providing quality service and customer satisfaction.'
        },
        {
          question: 'Do you work with commercial vehicles?',
          answer: 'Yes, we provide comprehensive glass services for commercial vehicles, including trucks, vans, and fleet vehicles.'
        },
        {
          question: 'How much does a windshield replacement cost?',
          answer: 'The cost of windshield replacement can vary based on make and model of the vehicle, as well as other factors. We recommend contacting us for a free quote.'
        },
        {
          question: 'Do you accept insurance?',
          answer: 'Yes, we work with most major insurance providers. Please contact us to verify your coverage.'
        },
        {
          question: 'Are your technicians certified?',
          answer: 'Absolutely. All our technicians are certified and undergo regular training to stay updated on the latest techniques and safety protocols.'
        },
        {
          question: 'What type of glass do you use for replacements?',
          answer: 'We use high-quality, OEM-equivalent glass for all our replacements to ensure durability and safety.'
        },
        {
          question: 'How long will it take to replace my windshield?',
          answer: 'Most windshield replacements take about 1-2 hours, including curing time for the adhesive. However, it\'s best to consult with our technicians for an accurate time estimate.'
        },
        {
          question: 'Do you offer mobile services?',
          answer: 'Yes, we offer mobile services for your convenience. Our technicians can come to your location to perform the required auto glass services.'
        },
        {
          question: 'What areas do you serve?',
          answer: 'We serve all of Central Florida, from Flagler to Sarasota.'
        }
      ]
    }
  }
}
</script>