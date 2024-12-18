<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Boolean,
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
  switchLabel: {
    type: String,
    required: false,
  },
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
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
    <div class="flex items-center mr-5px w-fit h-32px b-solid b-1px bg-white b-gray-3 rounded-8px transition-colors duration-100 hover:b-gray-4 px-8px">
      <input type="checkbox" id="switch" class="switch" @input="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)" />
      <label for="switch" class="switch-label font-notosansjp text-14px text-gray-7 flex items-center">
        <span class="switch-icon i-tabler:check"></span>
        {{ switchLabel }}
      </label>
    </div>
  </div>
</template>

<style scoped>
.switch {
  display: none;
}

.switch-label {
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 100%;
}

.switch-icon {
  display: flex;
  width: 0;
  height: 16px;
  border-radius: 50%;
  transition: width 0.3s ease;
  background-color: transparent;
}

.switch:checked + .switch-label .switch-icon {
  width: 16px;
  margin-right: 6px;
  background-color: #3c3c3c;
}
</style>