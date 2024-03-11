<template>
  <div v-if="shown" class="hidden sm:flex items-center gap-x-6 bg-gray-900 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
  <p class="text-sm leading-6 text-white">
    <a href="tel:+18884671788" title="Toll Free Number">
      <strong class="font-semibold">Toll Free: </strong>(888) 467-1788&nbsp;
    </a>
    <svg viewBox="0 0 2 2" class="mx-2 inline h-0.5 w-0.5 fill-current -mt-0.5" aria-hidden="true"><circle cx="1" cy="1" r="1" /></svg>
    <a href="tel:+14072652855" title="Orlando Number">
      <strong class="font-semibold">Orlando: </strong>(407) 265-2855&nbsp;
    </a>
    <svg viewBox="0 0 2 2" class="mx-2 inline h-0.5 w-0.5 fill-current -mt-0.5" aria-hidden="true"><circle cx="1" cy="1" r="1" /></svg>
    <a href="tel:+18134252092" title="Tampa Number">
      <strong class="font-semibold">Tampa: </strong>(813) 425-2092&nbsp;
    </a>
  </p>
  <div class="flex flex-1 justify-end">
    <button @click="shown = false" type="button" class="-m-3 p-3 focus-visible:outline-offset-[-4px]">
      <span class="sr-only">Dismiss</span>
      <svg class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
      </svg>
    </button>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      shown: true
    }
  }
}
</script>