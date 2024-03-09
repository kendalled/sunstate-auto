<template>
  <div class="w-full h-screen bg-gray-50">
    <ThanksModal :message="'Your message has been received by our team. We will contact you as soon as possible to get you back on the road.'" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'blank'
})
</script>
