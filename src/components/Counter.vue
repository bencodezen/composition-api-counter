<script>
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
  }
};
</script>

<template>
  <h1>#{{ counterId }}: {{ counterName }}</h1>
</template>

<style></style>
