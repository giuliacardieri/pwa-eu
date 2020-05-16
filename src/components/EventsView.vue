<template>
    <section class="md-layout-item md-size-100">
      <p class="md-layout-item md-size-100 p--small">Today</p>
      <md-empty-state
      class="events--empty"
      md-icon="calendar_today"
      md-label="No events today">
      <md-button class="md-primary md-raised">Include an event</md-button>
    </md-empty-state>
    </section>
</template>

<script>
export default {
  name: 'EventsView'
}
</script>

<style lang="scss">
    .events {
        flex-direction: column;
    }

    .events--empty {
        color: #757575;
    }
</style>
