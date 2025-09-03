import { gql } from '@apollo/client/core'

// Consulta para obtener los datos del usuario {id, name, email}
export const GET_USERS = gql`
  query {
    users {
      data {
        id
        name
        email
      }
    }
  }
`

// Consulta user por ID, donde id se le pasa un argumento
export const GET_USER = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
      email
    }
  }
`
