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
  const {
    result: usersResult,
    loading: usersLoading,
    error: usersError,
    refetch: refetchUsers,
  } = useQuery(GET_USERS, null, { fetchPolicy: 'network-only' })

  // Query para ejecutar el user por id
  const {
    load: loadUser,
    result: userResult,
    loading: userLoading,
    error: userError,
  } = useLazyQuery(GET_USER, null, { fetchPolicy: 'network-only' })

  // Observadores
  // Las dependencias van en el primer parametro
  watch(usersLoading, (val) => store.setUsersLoading(val))

  watch(usersError, (err) => (error ? store.setUsersError(err) : null))

  watch(usersResult, (dat) => {
    if (!dat) return

    const data = dat.users && dat.users.data ? dat.users.data : []
    users.value = data
    // Guardamos los datos en Pinia para que sean globales
    store.setUsers(data)
    // Limpiamos posibles errores
    store.resetUsersState(null)
  })

  // Forzamos la recarga de la lista
  function fetchUsers() {
    store.setUsersLoading(true)
    return refetchUsers()
  }

  // Exportando los valores y funciones para usar en componentes
  return {
    // Locales
    users,

    // Estados de control
    usersLoading,
    usersError,

    // Acciones
    fetchUsers,

    // Acceso directo al store
    store,
  }
}
