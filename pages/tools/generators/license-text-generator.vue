<script setup lang="ts">
import {Logger} from "@axuata/logica";

const logger = new Logger();
const firstCreatedYear = ref<string>('');
const lastUpdatedYear = ref<string>('');
const ownerName = ref<string>('');
const selectedLicense = ref<string>('');

let resultTextareaElement: HTMLTextAreaElement | null = null;

onMounted(() => {
  resultTextareaElement = document.getElementById('result-textarea') as HTMLTextAreaElement;
});

function generate(): void {
  if (resultTextareaElement) {
    switch (selectedLicense.value) {
      case "MIT License":
        resultTextareaElement.textContent = `MIT License
Copyright (c) ${firstCreatedYear.value} - ${lastUpdatedYear.value} ${ownerName.value}

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
        break;
      case "Apache License 2.0":
        resultTextareaElement.textContent = `Copyright ${firstCreatedYear.value} - ${lastUpdatedYear.value} ${ownerName.value}

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`
        break;
    }

    logger.addStatus('info', 'primary').addMessage('正常に生成されました！').out('info');
  }
}
</script>

<template>
  <CTool title="ライセンス生成" description="ライセンスのテキストを生成するツール。">
    <CBaseInput v-model="firstCreatedYear" label="最初に作られた年（西暦）" caution="年を入力してください" is-required />
    <CBaseInput v-model="lastUpdatedYear" label="最後に更新された年（西暦）" caution="年を入力してください" is-required />
    <CBaseInput v-model="ownerName" label="著作者名" caution="名前を入力してください" is-required />
    <CBaseRadio v-model="selectedLicense" label="ライセンス" caution="どれか一つだけ選んでください" is-required :checkboxes="['MIT License', 'Apache License 2.0']" />
    <CBaseHorizontalLine />
    <CBaseButton label="生成" @click="generate" />
    <CBaseHorizontalLine />
    <div class="flex w-full items-center justify-center text-center text-gray-7 text-14px font-600">
      <textarea readonly id="result-textarea" class="font-notosansjp w-full h-400px"></textarea>
    </div>
  </CTool>
</template>

<style scoped>

</style>