<template>
  <button @click="collapseLayout">Toggle Options</button>
</template>

<script>
export default {
  methods: {
    collapseLayout() {
      this.$emit('toggleLayout');
    },
  },
};
</script>

<style scoped>
button {
  background: #fafafa;
  padding: 0.5rem 1rem;
  position: absolute;
  right: 1.5rem;
  top: 5.5rem;
  color: #666;
  border-radius: 10px;
  border: 0;
}

button:hover {
  transition: ease-in-out 0.35s;
  background: #222222;
  color: #fafafa;
}
</style>
