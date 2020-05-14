<template>
  <div id="pwa-eu">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'PWA-EU'
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Material+Icons&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,500;0,700;1,400&display=swap');
  @import "~vue-material/dist/theme/engine";
  @include md-register-theme("default", (
    primary: md-get-palette-color(indigo, A200),
    accent: md-get-palette-color(pink, 500))
  );
  @import "~vue-material/dist/theme/all";

  body {
    background-color: white;
    font-size: 16px;
    margin: 0;
    min-height: 100vh;
    padding: 0;
  }

  #pwa-eu {
    min-height: 100vh;
  }

  p {
    font-size: 1rem;
  }

  .p-small {
    font-size: 0.75rem;
  }
</style>

