<template>
  <section class="md-layout-item md-size-100">
    <p>On this section you may choose the appearance and behavior of the UI elements, interaction methods and content formats from this app.</p>
    <div class="list">
      <md-list :md-expand-single="expandSingle">
        <md-list-item md-expand :md-expanded.sync="expandNews">
          <span class="md-list-item-text">UI Elements</span>

          <div class="list-content-wrapper" slot="md-expand">
            <div class="list-icons-wrapper">
              <md-icon class="md-size-2x">event</md-icon>
              <md-icon class="md-size-2x">check_box</md-icon>
              <md-icon class="md-size-2x">access_time</md-icon>
            </div>
            <p>UI elements are checkboxes, datepicker, text input, select and timepicker.</p>
            <md-button to="/mydesign/interfaceelements" data-type="0" class="md-accent md-raised">Change UI elements</md-button>
          </div>
        </md-list-item>

        <md-list-item md-expand :md-expanded.sync="expandNews">
          <span class="md-list-item-text">Interaction Methods</span>

          <div class="list-content-wrapper" slot="md-expand">
            <div class="list-icons-wrapper">
              <md-icon class="md-size-2x">mic</md-icon>
              <md-icon class="md-size-2x">touch_app</md-icon>
              <md-icon class="md-size-2x">volume_up</md-icon>
            </div>
            <p>Interaction methods such as swipe movement, voice recognition and voice synthesis may be activated or deactivated.</p>
            <md-button to="/mydesign/modalities" data-type="1" class="md-accent md-raised">Change interaction methods</md-button>
          </div>
        </md-list-item>

        <md-list-item md-expand :md-expanded.sync="expandNews">
          <span class="md-list-item-text">Content display format</span>

          <div class="list-content-wrapper" slot="md-expand">
            <div class="list-icons-wrapper">
              <md-icon class="md-size-2x">image</md-icon>
              <md-icon class="md-size-2x">view_module</md-icon>
              <md-icon class="md-size-2x">list</md-icon>
            </div>
            <p>The content display format of images and events may be changed.</p>
            <md-button to="/mydesign/displayformat" data-type="2" class="md-accent md-raised">Change content display format</md-button>
          </div>
        </md-list-item>
       </md-list>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MyDesignView'
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
