import { createRouter, createWebHistory } from 'vue-router'

// Lazy-loaded pages
const Home = () => import('../views/HomeView.vue')
const About = () => import('../views/AboutView.vue')

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
