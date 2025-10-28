import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'
import LoginPage from '@/views/LoginPage.vue'
import SignUpPage from '@/views/SignupPage.vue'
import TickePage from '@/views/TicketPage.vue'
import HomePage from '@/views/DashboardPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage,
    },
    {
      path: '/login',
      name: 'login-page',
      component: LoginPage,
    },
    {
      path: '/signup',
      name: 'sign-up',
      component: SignUpPage,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: HomePage,
    },
    {
      path: '/tickets',
      name: 'tickets',
      component: TickePage,
    },
  ],
})

export default router
