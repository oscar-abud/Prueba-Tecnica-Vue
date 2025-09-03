import { watch } from 'vue'
import { useMutation } from '@vue/apollo-composable'
import { CREATE_USER, DELETE_USER } from '@/graphQl/postUsers.gql'
import { useUsersStore } from '@/stores/counter'

export default function usePostMutation() {
  const store = useUsersStore()

  /* --------------------------------------
    Mutation para crear user
  -------------------------------------- */
  const {
    mutate: createUserMutation,
    error: createError,
    onDone: onCreateDone,
  } = useMutation(CREATE_USER)

  watch(createError, (err) => store.setUserError(err))

  onCreateDone(({ data }) => {
    if (data?.createUser) {
      store.addUser(data.createUser)
    }
  })

  function createUser(input) {
    return createUserMutation({ input })
  }
  /* --------------------------------------
    Mutation para eliminar user por id
  -------------------------------------- */
  const { mutate: deleteUserMutation, error: deleteError } = useMutation(DELETE_USER)

  watch(deleteError, (err) => store.setUserError(err))

  function deleteUser(id) {
    return deleteUserMutation({ id }).then(() => {
      store.removeUser(id)
    })
  }

  return {
    // Estados
    createError,
    deleteError,

    // Acciones
    createUser,
    deleteUser,
  }
}
