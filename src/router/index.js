import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';
import Home from '../views/Home.vue';
const Login = () => import('../views/Login.vue');

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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});
router.beforeEach(async (to, from) => {
  await store.dispatch('getUser');
  if (to.meta.requiresAuth && !store.state.auth) {
    router.push('/login');
  }
  if(to.meta.hideForAuth && store.state.auth){
    router.push('/');
  }
})

export default router
