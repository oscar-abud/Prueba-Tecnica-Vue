<script setup>
import { ref } from 'vue'
/*-- IMPORTANDO COMPONENTES -- */
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import useUserMutation from '@/composables/useUserMutation'

//Estados locales
const name = ref('')
const email = ref('')
const username = ref('')

const { createUser } = useUserMutation()
const handleSubmit = async () => {
  if (!name.value || !email.value || !username.value) return alert('Completa los campos')

  try {
    const { data, error } = await createUser({
      name: name.value,
      email: email.value,
      username: username.value,
    })

    // Alert del usuario creado
    if (error) {
      console.error(errors)
      return alert('Error al crear usuario')
    }

    if (data?.createUser) {
      const user = data.createUser
      alert(
        `Usuario creado:\nNombre: ${user.name}\nEmail: ${user.email}\nUsername: ${user.username}`,
      )
    }

    name.value = ''
    email.value = ''
    username.value = ''
  } catch (err) {
    console.log(err.message)
  }
}
</script>

<template>
  <Header />
  <main>
    <form @submit.prevent="handleSubmit">
      <div class="input">
        <p>Nombre:</p>
        <input type="text" v-model="name" />
      </div>
      <div class="input">
        <p>Email:</p>
        <input type="text" v-model="email" />
      </div>
      <div class="input">
        <p>Username:</p>
        <input type="text" v-model="username" />
      </div>
      <button type="submit">Crear usuario</button>
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
  justify-content: space-between;
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
