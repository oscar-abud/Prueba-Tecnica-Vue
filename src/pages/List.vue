<script setup>
import { ref, computed, onMounted } from 'vue'

/*-- COMPONENTES --*/
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import TableHeaderGrid from '@/components/TableHeader.vue'
import TableUsersGrid from '@/components/TableUsers.vue'
import InputFilter from '@/components/InputFilter.vue'
import FormEdit from '@/components/FormEdit.vue'

/*-- STORE Y MUTACIONES --*/
import { useUsersStore } from '@/stores/counter'
import useUserMutation from '@/composables/useUserMutation'
import useUsers from '@/composables/useUsersQuerys' // Importa el composable

const store = useUsersStore()
const { deleteUser, updateUser } = useUserMutation()
const { fetchUsers } = useUsers()

// Llama a fetchUsers cuando el componente se monta
onMounted(() => {
  fetchUsers()
})

// Filtro
const search = ref('')
const filteredUsers = computed(() => {
  const val = search.value.trim().toLowerCase()
  if (!val) return store.users
  return store.users.filter(
    (u) => u.name.toLowerCase().includes(val) || u.email.toLowerCase().includes(val),
  )
})

// Editar usuario
const isEditing = ref(false)
const editingUser = ref({ id: null, name: '', email: '' })
// Abrir el form para guardar datos
function handleEdit(id) {
  const user = store.users.find((u) => Number(u.id) === id)
  if (!user) return
  editingUser.value = { id, name: user.name, email: user.email }
  isEditing.value = true
}
// Enviar los datos de la actualizacion
function submitUpdate(updatingUser) {
  const { id, name, email } = updatingUser
  updateUser(id, { name, email })
    .then(() => {
      // Cerramos el form
      isEditing.value = false
      editingUser.value = { id: null, name: '', email: '' }
    })
    .catch((err) => {
      alert(`Error al actualizar el usuario: ${err.message}`)
    })
}

// Cancelar la edicion
function cancelEdit() {
  isEditing.value = false
  editingUser.value = { id: null, name: '', email: '' }
}

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
        <h1>Error: {{ store.usersError.message }}</h1>
        <button @click="fetchUsers">Reintentar</button>
      </div>

      <div v-else>
        <InputFilter v-model="search" placeholder="Buscar usuario por nombre o email..." />

        <TableHeaderGrid />

        <!-- Formulario de edicion -->
        <div v-if="isEditing" class="edit-form">
          <div v-if="!store.userError" class="formEdit">
            <FormEdit
              :id="editingUser.id"
              :name="editingUser.name"
              :email="editingUser.email"
              @sendSubmit="submitUpdate"
              @cancel="cancelEdit"
            />
          </div>
        </div>

        <div v-if="store.users.length > 0 || filteredUsers.length > 0">
          <TableUsersGrid
            v-for="user in filteredUsers"
            :key="Number(user.id)"
            :id="Number(user.id)"
            :name="user.name"
            :email="user.email"
            @delete="handleDelete"
            @edit="handleEdit"
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

/* FormEdit */
.formEdit {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  min-height: 200px;
  min-width: 250px;
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
