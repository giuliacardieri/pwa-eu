<template>
  <div class="md-layout-item md-layout md-alignment-center-center events events--empty">
    <md-icon class="md-size-2x">calendar_today</md-icon>
    <p>No events today.</p>
  </div>
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

	.events--empty p {
		color: #757575;
	}
</style>
