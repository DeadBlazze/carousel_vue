import { createRouter, createWebHistory} from 'vue-router'
import About from '../views/AboutView.vue'
import ListExamples from '../views/ListExamples.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ListExamples,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
})

export default router
