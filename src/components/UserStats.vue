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

    return {
      counterList,
      totalCount
    };
  }
};
</script>

<template>
  <h1>User Stats</h1>
  <p>Total Count: {{ totalCount }}</p>
  <p>Average Count:</p>
</template>

<style></style>
