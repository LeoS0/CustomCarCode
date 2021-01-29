<template>
  <div class="options">
    <Models v-if="currentStep === 0" :cars="this.cars" :position="this.position" />
    <Exterior v-else-if="currentStep === 1" :exteriorOptions="getExterior" />
    <Wheels v-else-if="currentStep === 2" :exteriorOptions="getExterior" />
    <div class="completed" v-else-if="currentStep === 3">
      <BIconCheck2Circle font-scale="3" />
      <p>Looking Good</p>
    </div>
  </div>
</template>

<script>
import { BIconCheck2Circle } from 'bootstrap-vue';
import Models from '@/components/Options/Models.vue';
import Exterior from './Options/Exterior.vue';
import Wheels from './Options/Wheels.vue';

export default {
  name: 'Options',
  components: { Models, Exterior, Wheels, BIconCheck2Circle },
  computed: {
    currentStep() {
      return this.$store.state.step;
    },
    getExterior() {
      if (this.position !== -1) {
        return this.$store.state.data[this.position].exterior;
      }
      return {};
    },
  },
  props: {
    cars: Array,
    position: Number,
  },
};
</script>

<style lang="scss">
.options {
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background: #fafafa;
  text-align: center;
  height: 20vh;
  width: 100%;
}

.options ul,
.completed {
  justify-content: center;
  align-items: center;
  list-style: none;
  display: flex;
  height: 100%;
}

.options ul li {
  display: inline;
}

.completed {
  flex-direction: column;
}

.completed p {
  margin-top: 0.5rem;
}
</style>
