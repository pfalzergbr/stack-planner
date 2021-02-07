import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/profile',
    name: 'UserProfile',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/UserProfile.vue'),
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../views/Projects.vue'),
  },
  {
    path: '/projects/:id',
    name: 'ProjectDetails',
    component: () => import('../views/ProjectDetails.vue'),
  },
  {
    path: '/new-project',
    name: 'NewProject',
    component: () => import('../views/NewProject.vue'),
  },
  // {
  //   path: '*',
  //   name: 'NotFound',
  //   component: () => import('../views/NotFound.vue'),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
