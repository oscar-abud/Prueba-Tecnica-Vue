<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <Header />
  <main>
    <form>
      <div class="input">
        <p>Nombre:</p>
        <input type="text" />
      </div>
      <div class="input">
        <p>Email:</p>
        <input type="text" />
      </div>
      <button>Crear usuario</button>
    </form>
  </main>
  <Footer />
</template>

<style scoped>
main {
  max-width: 1280px;
  display: grid;
  place-items: center;
}

form {
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px 8%;
  border-radius: 4px;
  height: 300px;
  align-items: center;
  justify-content: space-evenly;
}

.input {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
}

.input input {
  padding: 5px;
  font-size: 1.2rem;
}

button {
  padding: 10px;
  border: none;
  background-color: var(--green-color);
  color: var(--white-color);
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 5px;
}
</style>
