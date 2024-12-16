<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
@import '@unocss/reset/tailwind.css';

@font-face {
  font-family: 'inter';
  src: url('/fonts/Inter-VariableFont_opsz,wght.ttf') format('truetype');
}

@font-face {
  font-family: 'notosansjp';
  src: url('/fonts/NotoSansJP-VariableFont_wght.ttf') format('truetype');
}

.font-inter {
  font-family: 'inter', system-ui;
}

.font-notosansjp {
  font-family: 'notosansjp', system-ui;
}
</style>