import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue'),
  },
  {
    path: '/itemMusic',
    name: 'ItemMusic',
    component: () => import('../views/ItemMusic.vue'),
  },
  {
    path:'/search',
    name:'Search',
    component: () => import('../views/Search.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
