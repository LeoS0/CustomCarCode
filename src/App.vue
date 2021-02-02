<template>
  <div id="app">
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
export default {
  name: 'App',
  data() {
    return {
      online: true,
    };
  },
  created() {
    this.getOnlineStatus().then((isOnline) => {
      if (isOnline === 'Online') {
        this.status = true;
      } else {
        this.status = false;
      }
    });
  },
  methods: {
    async getOnlineStatus() {
      if (navigator.onLine) {
        return fetch(location.origin, { method: 'HEAD' })
          .then(() => true)
          .catch(() => false);
      }

      return new Promise((resolve) => resolve(false));
    },
  },
};
</script>
