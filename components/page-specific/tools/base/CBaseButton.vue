<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: false,
  },
  icon: {
    type: String,
    required: false,
  }
});
</script>

<template>
  <button class="font-notosansjp font-500 color-gray-7 text-14px flex items-center justify-center h-32px w-64px bg-white rounded-10px b-solid b-1px b-gray-3 transition-colors duration-100 hover:b-gray-4">{{ label }}</button>
</template>

<style scoped>

</style>