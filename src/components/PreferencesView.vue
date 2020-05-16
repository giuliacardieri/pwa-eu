<template>
    <section class="tabs-wrapper">
        <md-subheader>{{ preferencesData.label }} Selection</md-subheader>
        <md-tabs md-sync-route>
          <md-tab v-for="item in preferencesData.types" :key="item.id" :id="item.id" :md-label="item.label" :to="'/mydesign/' + preferencesData.id + '/' + item.id">
            <h1>this is {{ item.label }}</h1>
          </md-tab>
        </md-tabs>
    </section>
</template>

<script>
 import { preferences } from '../../data/preferences.json'
export default {
  name: 'PreferencesView',
  data() {
    return {
      allPreferences: preferences,
      preferencesData: undefined,
      id: undefined
    }
  },
  mounted () {
    this.id = this.$route.params.id
    let preference = undefined

    this.allPreferences.map((item) => {
      if (item.id === this.id) {
        preference = item
      }
    })
    this.preferencesData = preference
  }
}
</script>
<style lang="scss">
    .tabs-wrapper {
        width: 100%;
    }

    .tabs-wrapper .md-tabs-navigation {
        overflow-x: scroll;
    }

    .md-tabs-navigation .md-button {
        max-width: 100%;
        min-width: min-content;
    }
</style>
