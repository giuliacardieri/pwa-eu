<template>
  <section>
    <header>
      <md-toolbar class="md-primary">
        <router-link to="/"><h1 class="md-title">Calendar</h1></router-link>
      </md-toolbar>
    </header>

    <main class="app__main">
      <router-view></router-view>
    </main>

    <footer class="footer">
      <md-menu to="/"  md-direction="bottom-start">
        <md-button md-menu-trigger v-on:click="activeLink = 0" v-bind:class="{ active: activeLink == 0 }"><md-icon>home</md-icon>
          Home</md-button>
        <md-button to="/mydesign" md-menu-trigger v-on:click="activeLink = 1" v-bind:class="{ active:  activeLink == 1 }"><md-icon>face</md-icon>
          My Design</md-button>
      </md-menu>
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
    },
    mounted() {
      if (this.$route.name === 'events')
        this.activeLink = 0;
      else
        this.activeLink = 1;
    }
}
</script>
