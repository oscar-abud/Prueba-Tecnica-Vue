<script setup>
import { ref, computed, onMounted } from 'vue'

/*-- COMPONENTES --*/
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import TableHeaderGrid from '@/components/TableHeader.vue'
import TableUsersGrid from '@/components/TableUsers.vue'
import InputFilter from '@/components/InputFilter.vue'

/*-- STORE Y MUTACIONES --*/
import { useUsersStore } from '@/stores/counter'
import useUserMutation from '@/composables/useUserMutation'
import useUsers from '@/composables/useUsersQuerys' // Importa el composable

const store = useUsersStore()
const { deleteUser } = useUserMutation()
const { fetchUsers } = useUsers() // Importa la función fetchUsers

// Llama a fetchUsers cuando el componente se monta
onMounted(() => {
  fetchUsers()
})

console.log(store.users) // Esto seguirá saliendo vacío en la primera carga, pero se actualizará después.

// Filtro
const search = ref('')
const filteredUsers = computed(() => {
  const val = search.value.trim().toLowerCase()
  if (!val) return store.users
  return store.users.filter(
    (u) => u.name.toLowerCase().includes(val) || u.email.toLowerCase().includes(val),
  )
})

// Eliminar usuario
function handleDelete(id) {
  const confirmed = confirm('¿Estás seguro de eliminar al usuario?')
  if (!confirmed) return

  deleteUser(id).catch((err) => {
    alert(`Error al eliminar al usuario con id ${id}: ${err.message}`)
  })
}
</script>

<template>
  <Header />
  <main>
    <div class="user-table-container">
      <h1 class="title">Listado de Usuarios</h1>

      <div v-if="store.usersLoading" id="loading">
        <h1>Cargando...</h1>
      </div>

      <div v-else-if="store.usersError">
        <h1>Error: {{ store.usersError }}</h1>
      </div>

      <div v-else>
        <InputFilter v-model="search" placeholder="Buscar usuario por nombre o email..." />

        <TableHeaderGrid />

        <div v-if="store.users.length > 0 || filteredUsers.length > 0">
          <TableUsersGrid
            v-for="user in filteredUsers"
            :key="Number(user.id)"
            :id="Number(user.id)"
            :name="user.name"
            :email="user.email"
            @delete="handleDelete"
          />
        </div>
        <div v-else>
          <h1>No hay usuarios por mostrar</h1>
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>

<style scoped>
.user-table-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  font-family: Arial, sans-serif;
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

/* Botones */
.actions button {
  padding: 0.5rem 0.8rem;
  margin-right: 0.3rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.edit-btn {
  background-color: var(--green-color);
  color: white;
  opacity: 0.8;
  transition: ease 0.2s;
}

.edit-btn:hover {
  opacity: 1;
}

.delete-btn {
  background-color: #ff4d4f;
  color: white;
}

.delete-btn:hover {
  background-color: #d9363e;
}

/* Loading */
#loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
}

#loading h1 {
  font-size: 3rem;
}
</style>
