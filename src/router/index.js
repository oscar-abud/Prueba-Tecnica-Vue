import { createRouter, createWebHistory } from 'vue-router'
// Importando vistas
import List from '@/pages/List.vue'
import NotFound from '@/pages/NotFound.vue'
import Create from '@/pages/Create.vue'

const routes = [
  { path: '/users', component: List },
  { path: '/users/create', component: Create, props: true },
  { path: '/:pathMatch(.*)*', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
