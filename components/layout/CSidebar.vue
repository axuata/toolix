<script setup lang="ts">

</script>

<template>
  <div class="w-250px b-r-solid b-r-1px b-r-gray-3 mr-20px max-md:w-full max-md:b-b-solid max-md:b-b-1px max-md:b-b-gray-3 max-md:b-r-none">
    <NuxtLink to="/" class="flex items-center p-12px">
      <img src="/images/logos/toolix/logo.svg" alt="/images/logos/toolix/logo.svg" class="h-40px" />
      <p class="font-inter font-600 text-20px text-gray-6">Toolix</p>
    </NuxtLink>
    <div class="px-20px">
      <CSidebarGroup label="Welcome to Toolix">
        <CSidebarLink label="ホーム" href="/" />
      </CSidebarGroup>
      <CSidebarGroup label="Generators">
        <CSidebarLink label="著作権表記生成（開発中）" href="/tools/generators/copyright-text-generator/" />
      </CSidebarGroup>
    </div>
  </div>
</template>

<style scoped>

</style>