import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

import "./assets/appStyle.css";

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

createApp(App).use(createPinia()).use(router).use(Toast).mount("#app");
