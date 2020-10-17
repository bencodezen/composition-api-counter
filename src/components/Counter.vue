<script>
import { ref } from "vue";

export default {
  props: {
    counterId: {
      type: Number,
      required: true
    },
    counterName: {
      type: String,
      required: true
    }
  },
  setup() {
    const currentCount = ref(0);

    const incrementCount = () => {
      currentCount.value++;
    };

    return {
      currentCount,
      incrementCount
    };
  }
};
</script>

<template>
  <section class="counter-wrapper">
    <h1>#{{ counterId }}: {{ counterName }}</h1>
    <p class="current-count">Count: {{ currentCount }}</p>
    <button @click="incrementCount">Increment Count</button>
  </section>
</template>

<style>
.counter-wrapper {
  border: 5px solid #222;
  padding: 2rem;
  margin-bottom: 2rem;
}

.current-count {
  font-size: 1.5rem;
}
</style>
