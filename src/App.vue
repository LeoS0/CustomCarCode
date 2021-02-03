<template>
  <div id="app">
    <GlobalEvents @offline="setOffline" @online="setOnline" />
    <div class="status" v-if="!online">
      <p>You are currently offline.</p>
    </div>
    <nav>
      <img v-if="this.$route.name !== 'Home'" src="https://www.volvocars.com/static/shared/images/volvo-wordmark-black.svg" alt="Logo" width="200" />
    </nav>
    <router-view />
  </div>
</template>

<script>
import GlobalEvents from 'vue-global-events';

export default {
  name: 'App',
  components: { GlobalEvents },
  data() {
    return {
      online: true,
    };
  },
  methods: {
    setOnline() {
      console.log('Online');
      this.online = true;
    },
    setOffline() {
      console.log('Offline');
      this.online = false;
    },
  },
};
</script>
