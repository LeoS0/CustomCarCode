<template>
  <b-container class="mt-5">
    <b-card
      title="Volvo Cars"
      img-src="https://www.bildepot.se/wp-content/uploads/2020/07/Volvo_originalservice_q1_2021.jpg"
      img-alt="Image"
      img-top
      style="max-width: 25rem;"
    >
      <b-card-text style="font-size:1rem;margin-bottom:1rem;">
        Build your Volvo exactly the way you want it. Discover new car models from Volvo and design it in the configurator.
      </b-card-text>
      <router-link :to="'/car/'"><b-button variant="primary">Build Car</b-button></router-link>
    </b-card>
  </b-container>
</template>

<script>
import { BContainer } from 'bootstrap-vue';
import { BCard } from 'bootstrap-vue';

export default {
  components: { BContainer, BCard },
};
</script>
