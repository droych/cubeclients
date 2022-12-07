import { createApp } from "vue";
import { createPinia } from "pinia";
import VueChartkick from "vue-chartkick";
import { Chart,registerables  } from "chart.js";
import 'chartjs-adapter-moment';
import App from "./App.vue";
import router from "./router";
import "echarts";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.config.productionTip = false;
Chart.register(...registerables);
app.use(VueChartkick, { adapter: Chart });
app.mount("#app");
