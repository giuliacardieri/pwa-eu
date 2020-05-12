<template>
  <section class="pwa-eu-container">
    <header>
      <md-toolbar class="md-primary">
        <router-link to="/"><h1 class="md-title">Calendar</h1></router-link>
      </md-toolbar>
    </header>

    <main class="main">
      <router-view></router-view>
    </main>

    <footer class="footer">
      <md-bottom-bar md-sync-route="true" md-type="fixed">
        <md-bottom-bar-item id="home" exact to="/" md-label="Home" md-icon="home"></md-bottom-bar-item>
        <md-bottom-bar-item id="mydesign" exact to="/mydesign" md-icon="face" md-label="My Design"></md-bottom-bar-item>
      </md-bottom-bar>
    </footer>
  </section>
</template>

<script>
export default {
    name: 'HomeView',
    data() {
      return {
        activeLink: 0
      }
    }
}
</script>

<style lang="scss">
  .pwa-eu-container {
    min-height: 100vh;
  }

  .main {
    padding: 0 0.75rem;
  }

  .footer {
    border-top: 1px solid #eee;
    bottom: 0;
    position: fixed;
    width: 100%;
  }

  .footer .md-bottom-bar>.md-ripple {
    justify-content: space-evenly;
  }
</style>
