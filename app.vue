<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer/>
    <NuxtPage/>
  </NuxtLayout>
</template>

<style>
@import '@unocss/reset/tailwind.css';

@font-face {
  font-family: "Noto Sans JP";
  src: url("/fonts/NotoSansJP-VariableFont_wght.ttf") format("truetype");
}

* {
  font-family: "Noto Sans JP", sans-serif;
}
</style>