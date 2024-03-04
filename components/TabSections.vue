<template>
  <!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<div class="bg-white">
  <section aria-labelledby="features-heading" class="mx-auto max-w-7xl py-32 sm:px-2 lg:px-8">
    <div class="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
      <div class="max-w-3xl sticky">
        <h2 id="features-heading" class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services &amp; Expertise</h2>
        <p class="mt-4 text-gray-500">Windshield calibrations are an essential part of the replacement or repair process. Your safety systems being in perfect condition is extremely important to us.</p>
      </div>

      <div class="mt-4">

        <div id="features-panel-1" class="space-y-16 pt-10 lg:pt-16" aria-labelledby="features-tab-1" role="tabpanel" tabindex="0">
          <div class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
            <div class="mt-6 lg:col-span-5 lg:mt-0">
              <h3 class="text-lg font-medium text-gray-900">Importance of Calibration</h3>
              <p class="mt-2 text-base text-gray-500">Windshield Calibration is the most important step in the windshield replacement process. Without proper calibration, your Adas or Advanced Driver Assistance Systems would malfunction and cause issues for your car’s essential sensory functions. The Adas in your car are small “cameras” used for functions that keep you safe on the road such as lane assistance, automatic breaking, blind spot indicators, and more of your car's quality of life features. Knowing how important these functions are to your safety, our team is fluent and certified in Adas calibration. And with our on-site calibration facility, you get nothing short of the best quality calibrations.</p>
            </div>
            <div class="lg:col-span-7">
              <div class="aspect-h-1 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:aspect-h-2 sm:aspect-w-5">
                <img src="https://i0.wp.com/nationalassessing.com/wp-content/uploads/2021/10/adas_windscreen_calibration_australia.jpg?fit=1253%2C718&ssl=1" alt="Maple organizer base with slots, supporting white polycarbonate trays of various sizes." class="object-cover object-center">
              </div>
            </div>
          </div>
        </div>
        <div id="features-panel-2" class="space-y-16 pt-10 lg:pt-16" aria-labelledby="features-tab-2" role="tabpanel" tabindex="0">
          <div class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
            <div class="mt-6 lg:col-span-5 lg:mt-0">
              <h3 class="text-lg font-medium text-gray-900">Dynamic Calibration</h3>
              <p class="mt-2 text-base text-gray-500">One process we use to ensure your calibration is set up properly is dynamic calibration. After replacing the windshield, we need to recalibrate your sensors. Following that process, we want to make sure your car’s safety systems are working correctly. Our technicians will perform a test drive to make sure your car is in proper working condition. If we find any issues, we can easily go back and recalibrate it to ensure your safety on the road.</p>
            </div>
            <div class="lg:col-span-7">
              <div class="aspect-h-1 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:aspect-h-2 sm:aspect-w-5">
                <img src="https://marvel-b1-cdn.bc0a.com/f00000000270511/s19525.pcdn.co/wp-content/uploads/2022/06/auto-body-diagnostics-1024x512.jpg" alt="Walnut organizer base with pen, sticky note, phone, and bin trays, next to modular drink coaster attachment." class="object-cover object-center">
              </div>
            </div>
          </div>
        </div>
        <div id="features-panel-3" class="space-y-16 pt-10 lg:pt-16" aria-labelledby="features-tab-3" role="tabpanel" tabindex="0">
          <div class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
            <div class="mt-6 lg:col-span-5 lg:mt-0">
              <h3 class="text-lg font-medium text-gray-900">Static recalibration</h3>
              <p class="mt-2 text-base text-gray-500">This is a stationary process performed in our facility to recalibrate your car’s safety systems after a windshield replacement. Your vehicle is positioned and aligned with specialized tools to ensure that we are getting the most precise calibrations possible. Static calibration is mainly used for your car's radar and cameras on your windshield. While this process sounds simple, it can be quite complex so make sure you are entrusting certified experts to perform this maintenance.</p>
            </div>
            <div class="lg:col-span-7">
              <div class="aspect-h-1 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:aspect-h-2 sm:aspect-w-5">
                <img src="https://www.gtglass.com/cdn/shop/products/ADASMobileuseimage3_530x@2x.png?v=1645732428" alt="Walnut organizer base with white polycarbonate trays in the kitchen with various kitchen utensils." class="object-cover object-center">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>