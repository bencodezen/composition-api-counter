<script>
import { computed } from "vue";
import useStore from "../features/useStore";

export default {
  setup() {
    const { counterList } = useStore;

    const totalCount = computed(() => {
      return counterList.value.reduce((acc, currentValue) => {
        return acc + currentValue.count;
      }, 0);
    });

    const numberOfCounters = computed(() => {
      return counterList.value.length;
    });

    const averageCount = totalCount.value / numberOfCounters.value;

    return {
      averageCount,
      counterList,
      totalCount
    };
  }
};
</script>

<template>
  <h1>User Stats</h1>
  <p>Total Count: {{ totalCount }}</p>
  <p>Average Count: {{ averageCount }}</p>
</template>

<style></style>
