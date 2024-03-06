<template>
  <div>
    <DarkBanner />
    <Navigation />
    <head>
      <Meta name="cache-control" content="no-cache, no-store, must-revalidate" />
      <Meta name="pragma" content="no-cache" />
      <Meta name="expires" content="0" />
    </head>
    <slot />
    <LightFooter />
  </div>
</template>
