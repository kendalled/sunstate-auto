<template>
<div class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
  <!-- <svg class="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
    <defs>
      <pattern id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527" width="200" height="200" x="50%" y="-64" patternUnits="userSpaceOnUse">
        <path d="M100 200V.5M.5 .5H200" fill="none" />
      </pattern>
    </defs>
    <svg x="50%" y="-64" class="overflow-visible fill-gray-50">
      <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z" stroke-width="0" />
    </svg>
    <rect width="100%" height="100%" stroke-width="0" fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
  </svg> -->
  <div class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.red.100),white)] opacity-20"></div>
  <div class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-red-600/10 ring-1 ring-red-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
  <div class="mx-auto max-w-xl lg:max-w-4xl">
    <h2 class="text-4xl font-bold tracking-tight text-gray-900">Let’s talk about your windshield.</h2>
    <p class="mt-2 text-lg leading-8 text-gray-600">We help companies and individuals get back on the road. No spam, just a complimentary quote.</p>
    <div class="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
      <form ref="simpleQuote" id="simple-quote" action="https://formspree.io/f/xzbnvvee" name="Simple Quote" method="POST" class="lg:flex-auto">
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">First name</label>
            <div class="mt-2.5">
              <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6">
            </div>
          </div>
          <div>
            <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
            <div class="mt-2.5">
              <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6">
            </div>
          </div>
          <div>
            <label for="insurance" class="block text-sm font-semibold leading-6 text-gray-900">Insurance provider</label>
            <div class="mt-2.5">
              <input id="insurance" name="insurance" type="text" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6">
            </div>
          </div>
          <div>
            <label for="model" class="block text-sm font-semibold leading-6 text-gray-900">Vehicle model</label>
            <div class="mt-2.5">
              <input type="text" name="model" id="model" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6">
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Windshield status</label>
            <div class="mt-2.5">
              <textarea id="message" name="message" rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"></textarea>
            </div>
          </div>
        </div>
        <div class="mt-10">
          <button type="submit" class="block w-full rounded-md bg-red-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Let’s talk</button>
        </div>
        <p class="mt-4 text-sm leading-6 text-gray-500">By submitting this form, I agree to the <nuxt-link to="/privacy" title="Privacy Policy" class="font-semibold text-red-600">privacy&nbsp;policy</nuxt-link>.</p>
      </form>
      <div class="lg:mt-6 lg:w-80 lg:flex-none">
        <img class="h-24 absolute w-auto" src="/minimalfields.png" alt="">
        <figure class="mt-[7rem]">
          <blockquote class="text-lg font-semibold leading-8 text-gray-900">
            <p id="quote-status">“Sunstate AutoGlass repaired my windshield in under 2 hours, and with exceptional customer service too. Our dealership will continue to trust them with our customers.”</p>
          </blockquote>
          <figcaption class="mt-10 flex gap-x-6">
            <img src="/fake4.jpeg" alt="" class="h-12 w-12 flex-none rounded-full bg-gray-50">
            <div>
              <div class="text-base font-semibold text-gray-900">Dan Fields</div>
              <div class="text-sm leading-6 text-gray-600">CEO of Fields BMW</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    mounted () {
      var form = document.getElementById("simple-quote");
    
      async function handleSubmit(event) {
        event.preventDefault();
        var status = document.getElementById("quote-status");
        var data = new FormData(event.target);
        fetch(event.target.action, {
          method: form.method,
          body: data,
          headers: {
              'Accept': 'application/json'
          }
        }).then(response => {
          if (response.ok) {
            status.innerHTML = "Thanks for your submission!";
            form.reset()
          } else {
            response.json().then(data => {
              if (Object.hasOwn(data, 'errors')) {
                status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
              } else {
                status.innerHTML = "Oops! There was a problem submitting your form"
              }
            })
          }
        }).catch(error => {
          status.innerHTML = "Oops! There was a problem submitting your form"
        });
      }
      form.addEventListener("submit", handleSubmit)
      }
  }
</script>