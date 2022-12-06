<template>
  <div class="charts-wrapper">
    <div>Kuch bhi dcdcdccdddddddddddddddddddddddddddddddddddddddddddddddddddcdcdc cdcdcd dcdcdc dccdcdccdcdc cdcdcd cdcdlwsjlw</div>
    <v-chart class="chart" :option="option" />
  </div>
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref } from "vue";
import * as moment from 'moment';

use([
  CanvasRenderer,
  BarChart,
  GridComponent,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

export default {
  name: "BarChartComp",
  components: {
    VChart,
  },
  props: {
    title: String,
    resultSet: Object,
  },
  provide: {
    [THEME_KEY]: "light",
  },
  setup(props) {
    const headers = props.resultSet.rawData().map((item) => moment(Object.values(item)[0]).format("MMM YY"));
    const data = props.resultSet.rawData().map((item) => {
      const currentItem = Object.values(item);
      return parseInt(currentItem[2]);
    });


    const option = ref({
      title: {
        text: "Towns Count",
        left: "center",
      },

      xAxis: {
        type: "category",
        data: headers,
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "Towns counts",
          type: "bar",
          showBackground: true,
          backgroundStyle: {
            color: "rgba(180, 180, 180, 0.2)",
          },
          data: data,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    });

    return { option };
  },
};
</script>
<style scoped>
.chart {
  height: 400px;
  width: auto;
}
</style>
