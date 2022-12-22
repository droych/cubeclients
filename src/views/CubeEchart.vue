<script setup>
import EchartQueryBuilder from "../components/EchartQueryBuilder.vue";
import EchartMongo from "../components/EchartMongo.vue";
</script>
<template>
  <div>
    <main>
      <!-- <EchartQueryBuilder />-->
      <EchartMongo />
    </main>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
