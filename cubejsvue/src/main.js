import { createApp } from "vue";
import { createPinia } from "pinia";
import VueChartkick from "vue-chartkick";
import Chart from "chart.js";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use.config.productionTip = false;
app.use.use(VueChartkick, { adapter: Chart });
app.mount("#app");
