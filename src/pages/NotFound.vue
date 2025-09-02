<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <Header />
  <main>
    <h1>ERROR 404</h1>
  </main>
  <Footer />
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
}

main h1 {
  font-size: 3.5rem;
  font-weight: 800;
}
</style>
