import { createRouter, createWebHistory } from 'vue-router';

import Home from '../pages/Home.vue';
import NewPost from '../pages/NewPost.vue';
import EditPost from '../pages/EditPost.vue';
import ShowPost from '../pages/ShowPost.vue';
import { store } from '../store/store';

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: 'ShowPost',
    path: '/posts/:id',
    component: ShowPost,
  },
  {
    name: 'NewPost',
    path: '/posts/new',
    component: NewPost,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: 'EditPost',
    path: '/posts/:id/edit',
    component: EditPost,
    meta: {
      requiresAuth: true,
    },
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

export const makeRouter = () =>
  createRouter({
    history: createWebHistory(),
    routes,
  });

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getState().authors.currentUserId) {
    next({
      name: 'Home',
    });
  } else {
    next();
  }
});
