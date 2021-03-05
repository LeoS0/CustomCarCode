<template>
  <div class="wrapper">
    <Toggle @toggleLayout="collapseLayout" />
    <Preview :cars="cars" :position="position" />
    <Options :cars="cars" :position="position" v-if="show" />
  </div>
</template>

<script>
import Preview from '@/components/Preview.vue';
import Options from '@/components/Options.vue';
import Toggle from '../components/Toggle.vue';

export default {
  name: 'Customize',
  components: {
    Preview,
    Options,
    Toggle,
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
  data() {
    return {
      show: true,
    };
  },
  methods: {
    getSelected() {
      this.selectedCar = this.$route.params.name;
    },
    collapseLayout() {
      this.show = !this.show;
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
