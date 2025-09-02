import { ref, watch } from 'vue'
import { useQuery, useLazyQuery } from '@apollo/client'
import { GET_USERS, GET_USER } from '@/graphQl/getUsers.gql'

export default function useUsers() {
  //Lista de usuarios
  const users = ref([])
  // Guardaremos los datos que nos retorne la api en las siguientes variables
  const {
    result: usersResult,
    loading: usersLoading,
    error: usersError,
    refetch: refetchUsers, // Ejecuta la query manualmente p. ej. despues de un agregar
  } = useQuery(
    GET_USERS,
    null,
    { fetchPolicy: 'network-only' }, //Ignorara la cache y buscara siempre al servidor
  )

  // Usuario individual (lazy)
  const currentUser = ref(null)
  const {
    load: loadUser,
    result: userResult,
    loading: userLoading,
    error: userError,
  } = useLazyQuery(GET_USER, null, { fetchPolicy: 'network-only' })
}
