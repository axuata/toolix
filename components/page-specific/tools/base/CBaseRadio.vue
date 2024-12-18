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
  checkboxes: {
    type: Array as () => Array<string>,
    required: false,
  }
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

function updateModelValue(value: string) {
  emit('update:modelValue', value);
}
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
    <div class="flex items-center">
      <div v-for="(checkbox, index) in checkboxes" :key="index" class="flex items-center mr-5px h-32px b-solid b-1px bg-white b-gray-3 rounded-8px transition-colors duration-100 hover:b-gray-4 px-8px">
        <input
            type="radio"
            class="radio"
            :id="`radio-${index}`"
            :value="checkbox"
            :checked="modelValue === checkbox"
            @change="() => updateModelValue(checkbox)"
            name="custom-radio-group"
        />
        <label :for="`radio-${index}`" class="radio-label font-notosansjp text-14px text-gray-6 flex items-center">
          <span class="radio-icon i-tabler:check"></span>
          {{ checkbox }}
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped>
.radio {
  display: none;
}

.radio-label {
  position: relative;
  cursor: pointer;
}

.radio-icon {
  display: flex;
  width: 0;
  height: 16px;
  border-radius: 50%;
  transition: width 0.3s ease;
  background-color: transparent;
}

.radio:checked + .radio-label .radio-icon {
  width: 16px;
  margin-right: 6px;
  background-color: #4caf50;
}
</style>
