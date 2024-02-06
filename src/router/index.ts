import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import SimpleView from '../views/SimpleView.vue'
import FormkitView from '../views/FormkitView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',      name: 'home',       component: HomeView},
    { path: '/about', name: 'about',      component: AboutView},
    { path: '/simple', name: 'simple',    component: SimpleView},
    { path: '/formkit', name: 'formkit',  component: FormkitView}
  ]
})

export default router
