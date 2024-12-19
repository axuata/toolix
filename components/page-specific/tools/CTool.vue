<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  }
});
</script>

<template>
  <div class="max-md:px-10px">
    <div class="mt-20px mb-10px max-w-600px">
      <p class="font-notosansjp text-26px font-600">{{ title }}</p>
      <p class="font-notosansjp text-14px font-500 text-gray-5">{{ description }}</p>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<style scoped>

</style>