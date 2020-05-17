<template>
  <section class="md-layout-item md-size-100">
    <p>On this section you may choose the appearance and behavior of different set of preferences from this app. Please browse through the sections below to check the preferences availability.</p>
    <div class="list">
      <md-list :md-expand-single="true">
        <md-list-item md-expand v-for="types in allPreferences" :key="types.id">
          <span class="md-list-item-text">{{ types.label }}</span>

          <div class="list-content-wrapper" slot="md-expand">
            <div class="list-icons-wrapper">
              <md-icon v-for="icon in types.icons" :key="icon.name" class="md-size-2x">{{ icon.name }}</md-icon>
            </div>
            <p>{{ types.description }}</p>
            <md-button :to="'/mydesign/' + types.id + '/' + types.types[0].id" class="md-accent md-raised">Change {{ types.label }}</md-button>
          </div>
        </md-list-item>
       </md-list>
    </div>
  </section>
</template>

<script>
import { preferences } from '../../data/preferences.json'
export default {
  name: 'MyDesignView',
  data() {
    return {
      allPreferences: preferences,
      preferencesData: undefined,
    }
  }
}
</script>

<style lang="scss">
  .list .list-icons-wrapper {
    display: flex;
    justify-content: center;
  } 

  .list .list-content-wrapper {
    margin: 1rem 0 1.5rem 0;
    text-align: center;
  }

  .list .md-list-item-text {
    margin-left: 0.75rem;
  } 

  .list p {
    white-space: normal;
  }
</style>
