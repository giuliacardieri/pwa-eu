<template>
  <section class="pwa-eu-container">
    <header>
      <md-toolbar class="md-primary">
        <router-link to="/"><h1 class="md-title">Calendar</h1></router-link>
      </md-toolbar>
    </header>

    <main class="main md-layout">
      <router-view></router-view>
      <md-button v-on:click="showForm()" class="button-add md-icon-button md-accent md-raised">
        <md-icon>add</md-icon>
      </md-button>
      <section class="form" v-if="form">
        <form novalidate class="md-layout">
          <md-card class="md-layout-item md-size-50 md-small-size-100">
            <md-card-header>
              <div class="md-title">Add new event</div>
            </md-card-header>

            <md-card-content>
              <div class="md-layout md-gutter">
                <div class="md-layout-item md-small-size-100">
                  <md-field>
                    <label for="title">Event Title*</label>
                    <md-input name="title" id="title" />
                    <span class="md-error">The title is required</span>
                    <span class="md-error">Invalid event title</span>
                  </md-field>
                </div>
              </div>
              <div class="md-layout md-gutter">
                <div class="md-layout-item md-small-size-100">    
                  <md-datepicker>
                    <label>Event Date*</label>
                  </md-datepicker>
                </div>
              </div>
            </md-card-content>


            <md-card-actions>
              <md-button type="submit" class="md-primary">Create event</md-button>
            </md-card-actions>
          </md-card>

          <md-snackbar :md-active.sync="userSaved">The event was created with success!</md-snackbar>
        </form>
      </section>
    </main>

    <footer class="footer">
      <md-bottom-bar md-sync-route="true" md-type="fixed">
        <md-bottom-bar-item id="home" exact to="/" md-label="Home" md-icon="home"></md-bottom-bar-item>
        <md-bottom-bar-item id="mydesign" to="/mydesign" md-icon="face" md-label="My Design"></md-bottom-bar-item>
      </md-bottom-bar>
    </footer>
  </section>
</template>

<script>
export default {
    name: 'HomeView',
    data() {
      return {
        form: false
      }
    },
    methods: {
      showForm: function() {
        console.log('formouuu')
        this.form = true
      }
    }
}
</script>

<style lang="scss">
  .pwa-eu-container {
    min-height: 100vh;
  }

  .main {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .button-add {
    bottom: calc(1rem + 56px);
    position: absolute;
    right: 1rem;
  }

  .form {
    height: 100%;
    position: absolute;
    width: 100%;
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
