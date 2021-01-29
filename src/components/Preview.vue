<template>
  <div v-if="position !== -1" class="preview">
    <BIconChevronLeft font-scale="1.5" @click="previousAngle" />
    <img class="car" :src="previewImage" alt="Car" />
    <BIconChevronRight font-scale="1.5" @click="nextAngle" />
  </div>
  <div v-else class="preview preview-text">
    <h1>Build your own car</h1>
    <p>Select a car model to start</p>
  </div>
</template>

<script>
import { BIconChevronRight, BIconChevronLeft } from 'bootstrap-vue';

export default {
  name: 'Preview',
  components: {
    BIconChevronLeft,
    BIconChevronRight,
  },
  computed: {
    previewImage() {
      return (
        this.firstBuild + this.$store.state.defaultColor + '/' + this.$store.state.defaultWheels + '/' + this.secondBuild + '?angle=' + this.angle
      );
    },
    firstBuild() {
      return this.cars[this.position].exterior.img_build_one;
    },
    secondBuild() {
      return this.cars[this.position].exterior.img_build_two;
    },
    angle() {
      return this.$store.state.carAngle;
    },
  },
  props: {
    cars: Array,
    position: Number,
  },
  methods: {
    previousAngle() {
      this.$store.commit('previousAngle');
    },
    nextAngle() {
      this.$store.commit('nextAngle');
    },
  },
};
</script>

<style lang="scss" scroped>
.preview {
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  height: 70vh;
}

.preview-text {
  flex-direction: column;
}

.preview h1 {
  text-transform: uppercase;
}

.preview svg {
  cursor: pointer;
}

.preview .car {
  width: 60%;
}

@media (max-width: 992px) {
  .preview .car {
    width: 80%;
  }
}

@media (max-width: 768px) {
  .preview .car {
    width: 100%;
  }
}

@media (max-width: 576px) {
  .preview .car {
    width: 100%;
  }
}
</style>
