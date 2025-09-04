import { watch } from 'vue'
import { useMutation } from '@vue/apollo-composable'
import { CREATE_USER, UPDATE_USER, DELETE_USER } from '@/graphQl/postUsers.gql'
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
  const { mutate: updateUserMutation, error: updateError } = useMutation(UPDATE_USER)
  watch(updateError, (err) => store.setUserError(err))
  function updateUser(id, input) {
    return updateUserMutation({ id, input }).then(({ data }) => {
      if (data?.updateUser) {
        store.setUsers(store.users.map((u) => (Number(u.id) === id ? data.updateUser : u)))
        alert(`Usuario con id: ${id} actualizado.`)
      }
    })
  }

  /* --------------------------------------
    Mutation para eliminar user por id
  -------------------------------------- */
  const { mutate: deleteUserMutation, error: deleteError } = useMutation(DELETE_USER)

  watch(deleteError, (err) => store.setUserError(err))

  function deleteUser(id) {
    return deleteUserMutation({ id }).then(() => {
      alert(`Usuario con ID: ${id} eliminado!`)
      store.removeUser(id)
    })
  }

  return {
    // Estados
    createError,
    deleteError,
    updateError,

    // Acciones
    createUser,
    deleteUser,
    updateUser,
  }
}
