<script setup lang="ts">
const inputStringValue = ref<string>('C');
const inputNumberValue = ref<number>(0);
const inputBooleanValue = ref<boolean>(false);
const inputArrayStringValue = ref<Array<string>>([]);
</script>

<template>
  <CTool title="開発者の遊び場" description="開発用のコンポーネントショーケース。よく見つけましたね！asffafegifygniexygniugxaufgtesteststestettesttesttest">
    <CBaseInput v-model="inputStringValue" label="テキスト" caution="テストcaution" is-required />
    <CBaseCheckbox v-model="inputArrayStringValue" label="Checkbox" caution="test" is-required :checkboxes="['test1', 'test2', 'test3', 'test4']" />
    <CBaseRadio v-model="inputStringValue" label="Radio" caution="testtest" is-required :checkboxes="['test1', 'test2', 'test3', 'test4']" />
    <CBaseSwitch v-model="inputBooleanValue" label="Switch" caution="testtesttest" is-required switch-label="label" />
    <CBaseSelect v-model="inputStringValue" label="Select" caution="testtesttest" is-required>
      <option>AAA</option>
      <option>BBB</option>
    </CBaseSelect>
    <CBaseButton label="Click" @click="() => {console.log('clicked!')}" />
  </CTool>
  <p class="mt-100px">inputStringValue: {{ inputStringValue }}</p>
  <p>inputNumberValue: {{ inputNumberValue }}</p>
  <p>inputBooleanValue: {{ inputBooleanValue }}</p>
  <p>inputArrayStringValue: {{ inputArrayStringValue }}</p>
</template>

<style scoped>

</style>