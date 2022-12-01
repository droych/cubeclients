<template>
  <div class="chart-renderer">
    <line-chart :data="series"></line-chart>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { onMounted, onRenderTriggered } from "vue";
const props = defineProps({
    resultSet: {
      type: Object,
      required: true,
    },
});





  computed: {
    series() {
      const seriesNames = this.resultSet.seriesNames();
      const pivot = this.resultSet.chartPivot();
      const series = [];
      seriesNames.forEach((e) => {
        const data = pivot.map((p) => [p.x, p[e.key]]);
        series.push({ name: e.key, data });
      });
      return series;
    },
  },
};
</script>
