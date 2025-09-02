import { createRouter, createWebHistory } from 'vue-router'
// Importando vistas
import List from '@/pages/List.vue'
import Detail from '@/pages/Detail.vue'
import NotFound from '@/pages/NotFound.vue'

const routes = [
  { path: '/posts', component: List },
  { path: '/posts/:id', component: Detail, props: true },
  { path: '/:pathMatch(.*)*', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
