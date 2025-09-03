import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUsersStore = defineStore('users', () => {
  // Variables de estado reactivo
  const users = ref([])
  const currentUser = ref(null)

  // Usuarios
  const usersLoading = ref(true)
  const usersError = ref(null)

  // Usuario
  const userLoading = ref(true)
  const userError = ref(null)

  // Getters de funciones derivadas
  const userCount = computed(() => users.value.length)
  const hasUsers = computed(() => users.value && users.value.length > 0)
  const isAnyLoading = computed(() => usersLoading.value || userLoading.value)

  // Setters
  function setUsers(payload) {
    users.value = Array.isArray(payload) ? payload : []
  }

  function setCurrentUser(payload) {
    currentUser.value = payload ?? null
  }

  function addUser(user) {
    users.value.push(user)
  }

  function removeUser(id) {
    users.value = users.value.filter((u) => u.id !== id)
  }

  function setUsersLoading(flag) {
    usersLoading.value = flag ? true : false
  }

  function setUsersError(err) {
    usersError.value = err ? err : null
  }

  function setUserLoading(flag) {
    userLoading.value = flag ? true : false
  }

  function setUserError(err) {
    userError.value = err ? err : null
  }

  // Resetea todos los estados a sus valores iniciales
  function resetUsersState() {
    users.value = []
    currentUser.value = null
    usersLoading.value = false
    usersError.value = null
    userLoading.value = false
    userError.value = null
  }

  return {
    // Estados
    users,
    currentUser,
    usersLoading,
    usersError,
    userLoading,
    userError,

    // Getters
    userCount,
    hasUsers,
    isAnyLoading,

    // Setters / Actions
    setUsers,
    setCurrentUser,
    setUsersLoading,
    setUsersError,
    setUserLoading,
    setUserError,
    resetUsersState,
    addUser,
    removeUser,
  }
})
