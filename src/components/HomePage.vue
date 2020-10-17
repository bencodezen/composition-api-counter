<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p v-if="counterList.length === 0">No counters exist.</p>
    <Counter
      v-else
      v-for="(counter, index) in counterList"
      :key="`counter-${index}`"
      :counterId="counter"
    />
    <button @click="createCounter">Create Counter</button>
  </div>
</template>

<script>
import { ref } from 'vue'

import Counter from './Counter'

export default {
  name: 'HomePage',
  components: {
    Counter
  },
  props: {
    msg: String
  },
  setup() {
    const counterList = ref([])

    const generateId = () => {
      return Math.floor(Math.random() * Math.floor(1000000))
    }

    const checkUniqueId = id => {
      return counterList.value.includes(id)
    }

    const createCounter = () => {
      // Generate a random id
      let newCounterId = generateId()

      // Verify that it is a unique id
      if (checkUniqueId(newCounterId)) {
        // TODO: Need to create loop to make sure it's actually unique
        newCounterId = generateId()
      } else {
        counterList.value.push(newCounterId)
      }
    }

    return {
      counterList,
      createCounter
    }
  }
}
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
</style>
