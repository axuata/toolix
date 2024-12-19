<script setup lang="ts">
const firstCreatedYear = ref<string>('');
const lastUpdatedYear = ref<string>('');
const ownerName = ref<string>('');
const isAllRightsReserved = ref<boolean>(false);

let resultParagraphElement: HTMLParagraphElement | null = null;

onMounted(() => {
  resultParagraphElement = document.getElementById('result-paragraph') as HTMLParagraphElement;
});

function generate(): void {
  if (resultParagraphElement) {
    if (isAllRightsReserved.value) {
      resultParagraphElement.textContent = `© ${firstCreatedYear.value} - ${lastUpdatedYear.value} ${ownerName.value} - All Rights Reserved.`;
    } else {
      resultParagraphElement.textContent = `© ${firstCreatedYear.value} - ${lastUpdatedYear.value} ${ownerName.value}`;
    }
  }
}
</script>

<template>
  <CTool title="著作権表記生成" description="著作権表記を生成するツール。© 2024 Axuata. This project is licensed under the MIT License.のようなテキストを生成することができます。">
    <CBaseInput v-model="firstCreatedYear" label="最初に作られた年（西暦）" caution="年を入力してください" is-required />
    <CBaseInput v-model="lastUpdatedYear" label="最後に更新された年（西暦）" caution="年を入力してください" is-required />
    <CBaseInput v-model="ownerName" label="著作者名" caution="名前を入力してください" is-required />
    <CBaseSwitch v-model="isAllRightsReserved" label="All Rights Reserved" caution="" is-required switch-label="ON/OFF" />
    <CBaseHorizontalLine />
    <CBaseButton label="生成" @click="generate" />
    <CBaseHorizontalLine />
    <div class="flex items-center justify-center text-center text-gray-7 text-22px font-600">
      <p id="result-paragraph" class="font-notosansjp"></p>
    </div>
  </CTool>
</template>

<style scoped>

</style>