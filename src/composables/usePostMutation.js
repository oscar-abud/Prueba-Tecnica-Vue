import { ref, watch } from 'vue'
import { useMutation } from '@vue/apollo-composable'
import { DELETE_USER } from '@/graphQl/postUsers.gql'
import { useUsersStore } from '@/stores/counter'

export default function usePostMutation() {
  const store = useUsersStore()

  const deleteResult = ref(null)

  /* --------------------------------------
    Mutation para eliminar user por id
  -------------------------------------- */
  const {
    mutate: deleteUserMutation,
    loading: deleteLoading,
    error: deleteError,
    onDone,
  } = useMutation(DELETE_USER)

  // Observadores
  watch(deleteLoading, (val) => store.setUserLoading(val))
  watch(deleteError, (err) => store.setUserError(err))
  //CallBack cuando la mutation termina
  onDone(({ data }) => {
    // Referenciando al mutation deleteUser(id: $id)
    if (data?.deleteUser) {
      deleteResult.value = data.deleteUser
      store.setUsers(store.users.filter((u) => u.id !== data.deleteUser.id))
    }
  })

  function deleteUser(id) {
    return deleteUserMutation({ id })
  }

  return {
    // Estados
    deleteResult,
    deleteLoading,
    deleteError,

    // Acciones
    deleteUser,
  }
}
