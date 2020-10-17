<script>
import { ref } from "vue";

export default {
  props: {
    counterBgColor: {
      type: String,
      default: "#fff"
    },
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
    const changeCountAmount = ref(1);

    const incrementCount = () => {
      currentCount.value += changeCountAmount.value;
    };

    const resetCount = () => {
      currentCount.value = 0;
    };

    return {
      changeCountAmount,
      currentCount,
      incrementCount,
      resetCount
    };
  }
};
</script>

<template>
  <section
    class="counter-wrapper"
    :style="`background-color: ${counterBgColor}`"
  >
    <h1>#{{ counterId }}: {{ counterName }}</h1>
    <p class="current-count">Count: {{ currentCount }}</p>
    <form class="counter-form" @submit.prevent>
      <label for="change-count-amount">Change Count Amount</label>
      <input
        type="number"
        id="change-count-amount"
        v-model.number="changeCountAmount"
      />
    </form>
    <button @click="incrementCount">Increment Count</button>
    <button @click="resetCount">Reset Count</button>
  </section>
</template>

<style>
.counter-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  margin: 0 auto;
  padding: 1rem 1rem 1.25rem;
}

.counter-form * {
  margin-bottom: 1rem;
}

.counter-wrapper {
  border: 5px solid #222;
  padding: 2rem;
  margin-bottom: 2rem;
}

.current-count {
  font-size: 1.5rem;
}
</style>
