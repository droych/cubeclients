import { createApp } from "vue";
import { createPinia } from "pinia";
import VueChartkick from "vue-chartkick";
import { Chart,registerables  } from "chart.js";
import 'chartjs-adapter-moment';
import App from "./App.vue";
import router from "./router";
import ECharts from 'vue-echarts'
import { use } from "echarts/core"


import {
  CanvasRenderer
} from 'echarts/renderers'
import {
  BarChart
} from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent
} from 'echarts/components'

use([
  CanvasRenderer,
  BarChart,
  GridComponent,
  TooltipComponent
])



import "./assets/main.css";
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.config.productionTip = false;
Chart.register(...registerables);
app.use(VueChartkick, { adapter: Chart });
app.component('v-chart', ECharts)
app.mount("#app");
