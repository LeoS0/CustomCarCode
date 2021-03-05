<template>
  <div class="options">
    <Models v-if="currentStep === 0" :cars="this.cars" :position="this.position" />
    <Exterior v-else-if="currentStep === 1" :exteriorOptions="getExterior" />
    <Wheels v-else-if="currentStep === 2" :exteriorOptions="getExterior" />
    <div class="completed" v-else-if="currentStep === 3">
      <p>Enter name to save as configuration</p>
      <form>
        <b-form-input id="input-1" v-model="name" placeholder="Name..."></b-form-input>
        <b-button variant="outline-primary" @click="nextStep">Save</b-button>
      </form>
    </div>
    <div class="completed" v-else-if="currentStep === 4">
      <BIconCheck2Circle font-scale="3" />
      <p>
        Looking Good, Saved as <strong>{{ name }}</strong>
      </p>
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
  data() {
    return {
      name: '',
    };
  },
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
  methods: {
    nextStep() {
      this.$store.commit('changeStep', 4);
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

  ul,
  .completed {
    justify-content: center;
    align-items: center;
    list-style: none;
    display: flex;
    height: 100%;
  }

  ul li {
    display: inline;
  }

  form {
    align-items: baseline;
    display: flex;
  }

  input {
    margin-top: 0.5rem;
    border-radius: 0;
  }

  button {
    border-radius: 0;
  }

  .completed {
    flex-direction: column;
  }

  .completed p {
    margin-top: 0.5rem;
  }
}
</style>
