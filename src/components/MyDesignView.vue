<template>
  <div>
    <p>On this section you may choose the appearance and behavior of the UI elements, interaction methods and content formats from this app.</p>
    <div class="list">
      <md-list :md-expand-single="expandSingle">
        <md-list-item md-expand :md-expanded.sync="expandNews">
          <span class="md-list-item-text">UI Elements</span>

          <div slot="md-expand">
            <div class="list-icons-wrapper">
              <md-icon>event</md-icon>
              <md-icon>check_box</md-icon>
              <md-icon>access_time</md-icon>
            </div>
            <p>UI elements are checkboxes, datepicker, text input, select and timepicker.</p>
            <md-button to="/mydesign/interfaceelements" data-type="0" class="md-inset">Change UI elements</md-button>
          </div>
        </md-list-item>

        <md-list-item md-expand :md-expanded.sync="expandNews">
          <span class="md-list-item-text">Interaction Methods</span>

          <div slot="md-expand">
            <div class="list-icons-wrapper">
              <md-icon>mic</md-icon>
              <md-icon>touch_app</md-icon>
              <md-icon>volume_up</md-icon>
            </div>
            <p>Interaction methods such as swipe movement, voice recognition and voice synthesis may be activated or deactivated.</p>
            <md-button to="/mydesign/modalities" data-type="1" class="md-inset">Change interaction methods</md-button>
          </div>
        </md-list-item>

        <md-list-item md-expand :md-expanded.sync="expandNews">
          <span class="md-list-item-text">Content display format</span>

          <div slot="md-expand">
            <div class="list-icons-wrapper">
              <md-icon>image</md-icon>
              <md-icon>view_module</md-icon>
              <md-icon>list</md-icon>
            </div>
            <p>The content display format of images and events may be changed.</p>
            <md-button to="/mydesign/displayformat" data-type="2" class="md-inset">Change content display format</md-button>
          </div>
        </md-list-item>
       </md-list>
    </div>
  </div>
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

  .list .md-list-item-text {
    margin-left: 0.75rem;
  } 
</style>
