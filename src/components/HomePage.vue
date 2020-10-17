<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p v-if="counterList.length === 0">No counters exist.</p>
    <Counter
      v-else
      v-for="({ bgColor, id, name }, index) in counterList"
      :key="`counter-${index}`"
      :counterId="id"
      :counterName="name"
      :counterBgColor="bgColor"
    />
    <form class="counter-form" @submit.prevent>
      <label for="new-counter-name">New Counter Name</label>
      <input type="text" id="new-counter-name" v-model="newCounterName" />
      <label for="new-counter-bgcolor">New Counter Background Color</label>
      <input
        type="color"
        id="new-counter-bgcolor"
        v-model="newCounterBgColor"
      />
      <button @click="createCounter">Create Counter</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";

import Counter from "./Counter";

export default {
  name: "HomePage",
  components: {
    Counter
  },
  props: {
    msg: String
  },
  setup() {
    const counterList = ref([]);
    const newCounterName = ref("");
    const newCounterBgColor = ref("");

    const generateId = () => {
      return Math.floor(Math.random() * Math.floor(1000000));
    };

    const checkUniqueId = id => {
      return counterList.value.includes(id);
    };

    const createCounter = () => {
      // Generate a random id
      let newCounterId = generateId();

      // Verify that it is a unique id
      if (checkUniqueId(newCounterId)) {
        // TODO: Need to create loop to make sure it's actually unique
        newCounterId = generateId();
      } else {
        counterList.value.push({
          id: newCounterId,
          name: newCounterName.value,
          bgColor: newCounterBgColor.value
        });
      }
    };

    return {
      counterList,
      createCounter,
      newCounterName,
      newCounterBgColor
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
.counter-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  margin: 0 auto;
  border: 2px solid #222;
  padding: 2rem 1rem 1.25rem;
}

.counter-form * {
  margin-bottom: 1rem;
}
</style>
