<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: false,
  }
});
</script>

<template>
  <div class="mb-14px">
    <p class="font-inter font-500 text-gray-6 text-14px">{{ label }}</p>
    <div class="pl-8px">
      <slot />
    </div>
  </div>
</template>

<style scoped>

</style>