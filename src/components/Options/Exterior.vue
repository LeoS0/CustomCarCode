<template>
  <ul v-if="exteriorOptions.colors">
    <li class="controls prev"><router-link :to="'/car/'">Prev</router-link></li>
    <li v-for="colors in exteriorOptions.colors.solid" :key="colors.number" @click="changeColor(colors.number)">
      <div class="color" :id="'C' + colors.number"></div>
      <p>{{ colors.name }}<br /><span>Solid</span></p>
    </li>
    <li v-for="colors in exteriorOptions.colors.metallic" :key="colors.number" @click="changeColor(colors.number)">
      <div class="color" :id="'C' + colors.number"></div>
      <p>{{ colors.name }}<br /><span>Metallic</span></p>
    </li>
    <li class="controls next" @click="nextStep">Next</li>
  </ul>
  <ul v-else>
    <p>No Colors</p>
  </ul>
</template>

<script>
export default {
  name: 'Exterior',
  props: {
    exteriorOptions: Object,
  },
  methods: {
    changeColor(color) {
      this.$store.commit('changeColor', color);
    },
    nextStep() {
      this.$store.commit('changeStep', 2);
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

.color {
  margin-bottom: 0.4rem;
  display: inline-flex;
  border-radius: 50%;
  height: 42px;
  width: 42px;
}

// Black Stone
#C01900 {
  background: rgb(16, 24, 32);
}

// Ice White
#C61400 {
  background: rgb(208, 211, 212);
}

// Onyx Black
#C71700 {
  background: rgb(45, 41, 38);
}

// Thunder Grey
#C72800 {
  background: rgb(89, 95, 102);
}

// Glacier Silver
#C72900 {
  background: rgb(197, 201, 202);
}

// Osmiun Grey
#C71400 {
  background: rgb(16, 24, 32);
}

// Luminous Sand
#C71900 {
  background: rgb(203, 196, 188);
}

// Maple Brown
#C72200 {
  background: rgb(87, 69, 66);
}

// Denim Blue
#C72300 {
  background: rgb(62, 78, 95);
}

// Pine Grey
#C72400 {
  background: rgb(70, 76, 70);
}

// Fusion Red
#C72500 {
  background: rgb(188, 61, 58);
}

// Savile Grey
#C49200 {
  background: rgb(51, 63, 72);
}

// Bright Silver
#C71100 {
  background: rgb(167, 168, 169);
}

// Birch Light
#C72600 {
  background: rgb(206, 205, 193);
}

// Pebble Grey
#C72700 {
  background: rgb(140, 133, 123);
}

// Thunder Grey
#C72800 {
  background: rgb(89, 95, 102);
}
</style>
