<script setup>
import Nav from '@/components/Nav.vue'
</script>

<template>
  <header>
    <h1>Prueba técnica de Vue</h1>
    <Nav />
  </header>
</template>

<style scoped>
header {
  width: 100%;
  background-color: var(--green-color);
  color: var(--white-color);
  min-height: 120px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 10px 8%;
}

header h1 {
  text-align: center;
}
</style>
