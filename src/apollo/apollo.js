import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'

// EndPoint de la API
const httpLink = createHttpLink({
  uri: 'https://graphqlzero.almansi.me/api',
})

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})
