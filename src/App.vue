<template>
  <div id="app">
    <nav>
      <img src="https://www.volvocars.com/static/shared/images/volvo-wordmark-black.svg" alt="Logo" width="200" />
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  padding: 0;
  margin: 0;
}

html,
body {
  @import url(//db.onlinewebfonts.com/c/25cb6845cb99afb2f536ee7861d32413?family=Volvo+Novum);
  font-family: Volvo Novum, Helvetica, Arial, sans-serif;
  color: #222222;
}

a {
  text-decoration: none;
  color: #1c6bba;
}

h1 {
  font-size: 1.7rem;
}

p {
  font-size: 1.2rem;
  color: #666;
}

nav {
  background: #fafafa;
  text-align: center;
  height: 10vh;
  width: 100%;

  img {
    height: 100%;
  }
}
</style>
