import { createRouter, createWebHistory } from 'vue-router'
import PageOne from '../views/PageOne'
import PageTwo from '../views/PageTwo'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PageOne,
  },
  {
    path: '/p2',
    name: 'About',
    component: PageTwo,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL) || "/",
  // history: createWebHashHistory(),
  routes,
});

export default router
