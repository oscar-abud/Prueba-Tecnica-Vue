import { gql } from '@vue/apollo-composable'

// Eliminamos al usuario por ID
export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
    }
  }
`
