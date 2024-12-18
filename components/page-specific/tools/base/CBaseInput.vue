<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: String,
    required: false,
  },
  label: {
    type: String,
    required: false,
  },
  caution: {
    type: String,
    required: false
  },
  isRequired: {
    type: Boolean,
    required: false,
  },
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();
</script>

<template>
  <div class="my-5px">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <p class="font-notosansjp font-500 text-14px text-gray-6">{{ label }}</p>
        <p v-if="isRequired" class="font-notosansjp text-red-6">*</p>
      </div>
      <div class="flex items-center">
        <p class="font-notosansjp font-500 text-14px text-gray-5">{{ caution }}</p>
      </div>
    </div>
    <div>
      <input class="font-notosansjp flex w-full h-32px b-solid b-1px bg-white b-gray-3 rounded-8px transition-colors duration-100 hover:b-gray-4 px-8px" type="text" @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
    </div>
  </div>
</template>

<style scoped>

</style>