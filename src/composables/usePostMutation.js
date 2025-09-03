import { ref, watch } from 'vue'
import { useMutation } from '@vue/apollo-composable'
import { DELETE_USER } from '@/graphQl/postUsers.gql'
import { useUsersStore } from '@/stores/counter'

export default function usePostMutation() {
  const store = useUsersStore()

  /* --------------------------------------
    Mutation para eliminar user por id
  -------------------------------------- */
  const { mutate: deleteUserMutation, error: deleteError, onDone } = useMutation(DELETE_USER)

  // Observadores
  watch(deleteError, (err) => store.setUserError(err))
  //CallBack cuando la mutation termina
  onDone(({ data }) => {
    // Referenciando al mutation deleteUser(id: $id)
    if (data?.deleteUser) {
      store.setUsers(store.users.filter((u) => u.id !== data.deleteUser.id))
    }
  })

  function deleteUser(id) {
    return deleteUserMutation({ id })
  }

  return {
    // Estados
    deleteError,

    // Acciones
    deleteUser,
  }
}
