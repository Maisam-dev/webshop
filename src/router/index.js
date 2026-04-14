import { createRouter, createWebHistory } from "vue-router";
import homePage from "@/views/homePage.vue";
import cartPage from "@/views/cartPage.vue";
import productPage from "@/views/productPage.vue";
import abautPage from "@/views/abautPage.vue";
const routes = [
  {
    name: "homePage",
    path: "/",
    component: homePage,
  },
  {
    name: "cartPage",
    path: "/cart",
    component: cartPage,
  },
  {
    name: "productPage",
    path: "/product",
    component: productPage,
  },
  {
    name: "abautPage",
    path: "/abaut",
    component: abautPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
