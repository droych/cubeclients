<template>
  <h1>Vue Cube.js ECharts</h1>
  <div class="dashboard">
    <div class="cards-container">
      <query-builder :cubejs-api="cubejsApi" :query="TownsQuery">
        <template v-slot="{ loading, resultSet }">
          <div v-if="loading" class="loading">Loading...</div>
          <div v-if="!loading && resultSet !== undefined">
            <BarChartComp v-if="!loading" title="Town Counts" :resultSet="resultSet" />
          </div>
        </template>
      </query-builder>
    </div>
  </div>
</template>

<script>
import cubejs from "@cubejs-client/core";
import { QueryBuilder } from "@cubejs-client/vue3";
import BarChartComp from "../components/BarChartComp";
const cubejsApi = cubejs(
  "1bea38a48b6e92af20a7026bdb29893ce6fadb1d76edad085121f326acb7ccf0c5077ff7242af7cf8f7afc0ba5420bcb464e384c4721aeb94d54e05ed1975f30",
  {
    apiUrl: "http://ec2-18-221-237-147.us-east-2.compute.amazonaws.com/cubejs-api/v1",
  }
);

export default {
  name: "EchartQueryBuilder",
  components: {
    QueryBuilder,
    BarChartComp,
  },
  data() {
    const query = {
      measures: ["Towns.count"],
      timeDimensions: [
        {
          dimension: "Towns.createdAt",
          granularity: "month",
        },
      ],
    };

    return {
      value: [],
      cubejsApi,
      selected: [],
      query,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0 3rem;
  margin-top: 30px;
}
.dashboard {
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
}
.cards-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
}
.card-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
  min-width: 250px;
  min-height: 100px;
  padding: 2rem;
  border-radius: 5px;
  background-color: #fafafa;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}
.card-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
}
.card-content {
  font-size: 2.5rem;
  font-weight: bold;
  color: #42b983;
  padding-top: 6px;
}
</style>
