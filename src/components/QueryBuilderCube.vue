<template>
  <query-builder :cubejs-api="cubejsApi" :query="query">
    <template #builder="{ measures, setMeasures, availableMeasures }">
      <Multiselect
        placeholder="Please Select"
        label="Title"
        track-by="name"
        multiple
        :customLabel="customLabel"
        mode="tags"
        v-model="value"
        :value="measures"
        :options="availableMeasures"
        @input="(...args) => set(setMeasures, ...args)"
      />
    </template>

    <template #default="{ resultSet }">
      <chart-renderer v-if="resultSet" :result-set="resultSet" />
    </template>

    <template #empty>Loading...</template>
  </query-builder>
</template>

<script>
import cubejs from "@cubejs-client/core";
//import Multiselect from "@suadelabs/vue3-multiselect";
import Multiselect from "@vueform/multiselect";
import { QueryBuilder } from "@cubejs-client/vue3";
import ChartRenderer from "./ChartRenderer.vue";

const API_URL = "http://ec2-18-221-237-147.us-east-2.compute.amazonaws.com/cubejs-api/v1";
const CUBEJS_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTQ2NjY4OTR9.0fdi5cuDZ2t3OSrPOMoc3B1_pwhnWj4ZmM3FHEX7Aus";

const cubejsApi = cubejs(CUBEJS_TOKEN, { apiUrl: API_URL });

export default {
  name: "QueryBuilderCube",
  components: {
    Multiselect,
    QueryBuilder,
    ChartRenderer,
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
  methods: {
    customLabel(a) {
      return a.name;
    },
    set(setMeasures, value) {
      console.log(setMeasures, value);
      setMeasures(value.map((e) => e.name));
    },
  },
};
</script>
<style src="@vueform/multiselect/themes/default.css"></style>

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
