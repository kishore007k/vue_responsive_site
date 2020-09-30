import { createRouter, createWebHistory } from "vue-router";
import About from "../pages/About.vue";
import Home from '../pages/Home.vue';

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: About
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
