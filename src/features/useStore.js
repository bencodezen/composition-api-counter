import { ref } from "vue";

const counterList = ref([]);

const updateCount = ({ id, count }) => {
  const targetIndex = counterList.value.findIndex(counter => counter.id === id);
  let targetCounter = counterList.value[targetIndex];

  targetCounter.count = count;

  counterList.value[targetIndex] = targetCounter;
};

export default {
  counterList,
  updateCount
};
