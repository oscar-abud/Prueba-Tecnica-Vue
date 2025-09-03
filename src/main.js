import { createApp, provide, h } from 'vue'
import { createPinia } from 'pinia'
import { DefaultApolloClient } from '@vue/apollo-composable'

import App from './App.vue'
import router from './router'
import { apolloClient } from './apollo' // tu cliente Apollo

const app = createApp({
  setup() {
    // Proveer Apollo a todos los composables
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App),
})

app.use(createPinia())
app.use(router)

app.mount('#app')
