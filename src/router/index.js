import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';
import Home from '../views/Home.vue';
import Login from '../views/Login';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      hideForAuth: true,
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      requiresAuth: true,
    },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});
router.beforeEach(async (to, from) => {
  await store.dispatch('getUser');
  if (to.meta.requiresAuth && !store.state.auth) {
    return { path: '/login' };
  }
  if(to.meta.hideForAuth && store.state.auth){
    return{ path: '/' };
  }
})

export default router
