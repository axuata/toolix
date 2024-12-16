<script setup lang="ts">

</script>

<template>
  <div class="flex h-100vh bg-axugray max-md:block">
    <CSidebar />
    <div class="h-100vh">
      <slot />
      <CFooter />
    </div>
  </div>
</template>

<style scoped>

</style>