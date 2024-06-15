<template>
  <div>
    <DarkBanner />
    <Navigation />
    <slot />
    <LightFooter />
  </div>
</template>

<script setup>
const route = useRoute()
useHead(() => ({
  link: [
    {
      rel: 'canonical',
      href: 'https://sunstateautoglass.com' + route.path,
    },
  ],
}))
</script>
