<template>
  <query-builder :cubejs-api="cubejsApi" :query="query">
    <template #builder="{ measures, setMeasures, availableMeasures }">
      <multiselect placeholder="Please Select" label="Title" track-by="name" multiple :customLabel="customLabel" mode="multiple"
        :value="measures" :options="availableMeasures" @input="(...args) => set(setMeasures, ...args)" />
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

const API_URL =
  "https://awesome-ecom.gcp-us-central1.cubecloudapp.dev/cubejs-api/v1";
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
      measures: [],
      timeDimensions: [
        {
          dimension: "LineItems.createdAt",
          granularity: "month",
        },
      ],
    };

    return {
      cubejsApi,
      selected: [],
      query,
    };
  },
  methods: {
    customLabel(a) {
      return a.title;
    },
    set(setMeasures, value) {
      setMeasures(value.map((e) => e.name));
    },
  },
};
</script>
<style src="@vueform/multiselect/themes/default.css">

</style>

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
