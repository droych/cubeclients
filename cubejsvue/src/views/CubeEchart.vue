<script setup>
import EchartQueryBuilder from "../components/EchartQueryBuilder.vue";
</script>
<template>
  <div>
    <main>
      <EchartQueryBuilder />
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
