<template>
  <div class="wrapper">
    <Preview :cars="cars" :position="position" />
    <Options :cars="cars" :position="position" />
  </div>
</template>

<script>
import Preview from '@/components/Preview.vue';
import Options from '@/components/Options.vue';

export default {
  name: 'Customize',
  components: {
    Preview,
    Options,
  },
  created() {
    this.$store.dispatch('getData');
    // Check if user has selected a car directly from the url
    if (this.$route.params.name !== undefined) {
      this.$store.commit('changePosition', -1);
      this.$store.commit('changeStep', 1);
    }
  },
  computed: {
    cars() {
      return this.$store.state.data;
    },
    position() {
      return this.$store.state.position;
    },
  },
  methods: {
    getSelected() {
      this.selectedCar = this.$route.params.name;
    },
  },
  watch: {
    // Check if user has selected a car from options
    $route(to, from) {
      this.getSelected();
      if (from.path === '/car/' || to.path === '/car/' + this.selectedCar) {
        this.$store.dispatch('getData');
        this.$store.commit('changeStep', 1);
      } else {
        this.$store.commit('changePosition', -1);
        this.$store.commit('changeStep', 0);
      }
    },
  },
};
</script>
