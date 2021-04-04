import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import addbook from '../views/addbook.vue';
import video from '../views/video.vue';
import setting from '../views/setting.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/management',
    name: 'Management',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Management.vue'),
  },
  {
    path: '/addbook',
    name: 'addbook',
    component: addbook,
  },
  {
    path: '/video',
    name: 'video',
    component: video,
  },
  {
    path: '/setting',
    name: 'setting',
    component: setting,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
