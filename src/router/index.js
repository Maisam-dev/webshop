import { createRouter, createWebHistory } from "vue-router";
import homePage from "@/views/homePage.vue";
const routes = [
  {
    name: "homePage",
    path: "/",
    component: homePage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
