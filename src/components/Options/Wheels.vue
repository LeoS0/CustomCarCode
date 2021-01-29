<template>
  <ul v-if="exteriorOptions.wheels">
    <li class="controls prev" @click="prevStep">Prev</li>
    <li v-for="wheels in exteriorOptions.wheels" :key="wheels.number" @click="changeWheels(wheels.number)">
      <img :src="wheels.image" alt="Wheels" width="60" />
      <p>{{ wheels.name }}<br /></p>
    </li>
    <li class="controls next" @click="nextStep">Complete</li>
  </ul>
  <ul v-else>
    <p>No Wheels</p>
  </ul>
</template>

<script>
export default {
  name: 'Wheels',
  props: {
    exteriorOptions: Object,
  },
  methods: {
    changeWheels(wheels) {
      this.$store.commit('changeWheels', wheels);
    },
    prevStep() {
      this.$store.commit('changeStep', 1);
    },
    nextStep() {
      this.$store.commit('changeStep', 3);
    },
  },
};
</script>

<style lang="scss" scoped>
ul li {
  transition: 0.2s ease-in-out;
  margin: 0 1.2rem;
  cursor: pointer;
}

ul li:hover {
  transform: scale(1.15);
}

ul li img {
  margin-bottom: 0.4rem;
}

ul .controls {
  text-transform: uppercase;
  position: absolute;
  color: #1c6bba;
}

ul .controls:hover {
  transform: scale(1);
  opacity: (0.8);
}

ul .prev {
  left: 2rem;
}

ul .next {
  right: 2rem;
}

p {
  font-size: 1rem;
}

p span {
  font-size: 0.8rem;
}
</style>
