<template>
  <div class="container">
    <router-view />
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100dvh;
}
</style>
