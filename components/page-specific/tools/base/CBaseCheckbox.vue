<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Array as () => Array<string>,
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
  (e: 'update:modelValue', value: string[]): void;
}>();

function updateModelValue(event: Event, value: string) {
  const checked = (event.target as HTMLInputElement).checked;

  const currentValue = props.modelValue ?? [];

  const newValue = checked
      ? [...currentValue, value]
      : currentValue.filter((item) => item !== value);

  emit('update:modelValue', newValue);
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
        <input type="checkbox" class="checkbox" :id="`checkbox-${index}`" :value="checkbox" :checked="modelValue.includes(checkbox)" @change="(event) => updateModelValue(event, checkbox)" />
        <label :for="`checkbox-${index}`" class="checkbox-label font-notosansjp text-14px text-gray-6 flex items-center">
          <span class="checkbox-icon i-tabler:check"></span>
          {{ checkbox }}
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped>
.checkbox {
  display: none;
}

.checkbox-label {
  position: relative;
  cursor: pointer;
}

.checkbox-icon {
  display: flex;
  width: 0;
  height: 16px;
  border-radius: 5px;
  transition: width 0.3s ease;
}

.checkbox:checked + .checkbox-label .checkbox-icon {
  width: 16px;
  margin-right: 6px;
}
</style>