import { ref, watch } from 'vue'
import { useQuery, useLazyQuery } from '@vue/apollo-composable'
import { GET_USERS, GET_USER } from '@/graphQl/getUsers.gql'
import { useUsersStore } from '@/stores/counter'

export default function useUsers() {
  // Store de Pinia para obtener los getters y setters
  const store = useUsersStore()

  // Estados locales (reactivos)
  const users = ref([])
  const currentUser = ref(null)

  // Se ejecuta al montarse
  // Query para ejecutar todos los users
  /* --------------------------------------
    Query para todos los USERS
  -------------------------------------- */
  const {
    result: usersResult,
    loading: usersLoading,
    error: usersError,
    refetch: refetchUsers,
  } = useQuery(GET_USERS, null, { fetchPolicy: 'network-only' })

  // Observadores
  // Las dependencias van en el primer parametro
  watch(usersLoading, (val) => store.setUsersLoading(val))
  watch(usersError, (err) => store.setUsersError(err))
  watch(usersResult, (dat) => {
    if (!dat) return

    const data = dat.users && dat.users.data ? dat.users.data : []
    users.value = data
    // Guardamos los datos en Pinia para que sean globales
    store.setUsers(data)
    store.setUsersLoading(false)
    store.setUsersError(null)
  })

  // Forzamos la recarga de la lista
  function fetchUsers() {
    store.setUsersLoading(true)
    return refetchUsers()
  }
  /* --------------------------------------
    Query para ejecutar el USER por id
  -------------------------------------- */
  const {
    load: loadUser,
    result: userResult,
    loading: userLoading,
    error: userError,
  } = useLazyQuery(GET_USER, null, { fetchPolicy: 'network-only' })

  watch(userLoading, (val) => store.setUserLoading(val))
  watch(userError, (err) => store.setUserError(err))
  watch(userResult, (dat) => {
    if (!dat) return

    const data = dat.user
    currentUser.value = data
    store.setCurrentUser(data)
  })

  function fetchUser(id) {
    store.setUserLoading(true)
    return loadUser({ id })
  }

  // Exportando los valores y funciones para usar en componentes
  return {
    // Locales
    users,
    currentUser,

    // Estados de control
    usersLoading,
    usersError,
    userLoading,
    userError,

    // Acciones
    fetchUsers,
    fetchUser,

    // Acceso directo al store
    store,
  }
}
