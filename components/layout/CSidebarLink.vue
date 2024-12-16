<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: false,
  },
  href: {
    type: String,
    required: false,
  }
});
</script>

<template>
  <div class="">
<!--    <NuxtLink :to="href" class="font-notosansjp b-l-solid b-l-1px b-l-gray-3 pl-8px text-gray-6 text-14px py-2px transition-colors duration-100 hover:text-gray-8">{{ label }}</NuxtLink>-->
    <NuxtLink :to="href" class="font-notosansjp text-gray-6 text-14px transition-colors duration-100 hover:text-gray-8">{{ label }}</NuxtLink>
  </div>
</template>

<style scoped>

</style>