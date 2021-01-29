<template>
  <ul>
    <li v-for="car in cars" :key="car.model">
      <router-link :to="'/car/' + car.model">
        <img :src="car.exterior.img_list" alt="Car" />
        <span>{{ car.model }}</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Models',
  props: {
    cars: Array,
    position: Number,
  },
};
</script>

<style lang="scss" scoped>
ul li a {
  transition: opacity 0.25s ease-in-out;
  text-transform: uppercase;
  display: inline-grid;
  opacity: 0.8;
}

ul li a:hover {
  opacity: 1;
}

ul li a span {
  margin-top: 0.25rem;
}

img {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}
</style>
