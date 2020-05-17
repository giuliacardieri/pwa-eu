<template>
    <section class="tabs-wrapper">
        <md-subheader>{{ preferencesData.label }} Selection</md-subheader>
        <md-tabs md-sync-route>
          <md-tab v-for="item in preferencesData.types" :key="item.id" :id="item.id" :md-label="item.label" :to="'/mydesign/' + preferencesData.id + '/' + item.id">
            <div class="preference-wrapper" v-for="option in item.options" :key="option.id">
              <h3>{{ option.label }}</h3>
              <div v-if="option.isMaterial">
                <div v-if="item.id === 'checkbox'" class="form-group-vertical">
                  <md-checkbox name="cat" v-model="string" value="cat">I have a cat</md-checkbox>
                  <md-checkbox name="dog" v-model="string" value="dog">I have a dog</md-checkbox>
                </div>
                <div v-if="item.id === 'datepicker'">
                  <md-datepicker v-model="selectedDate">
                    <label>Choose a date</label>
                  </md-datepicker>
                </div>
                <div v-if="item.id === 'input'">
                    <md-field>
                    <label>Name of your pet</label>
                    <md-input v-model="initial"></md-input>
                  </md-field>
                </div>
                <div v-if="item.id === 'select'">
                  <md-field>
                    <label for="pet">Which is your favorite kind of pet?</label>
                    <md-select v-model="pets" name="pets" id="pets">
                      <md-option value="cat">Cat</md-option>
                      <md-option value="dog">Dog</md-option>
                    </md-select>
                  </md-field>
                </div>
                <div v-if="item.id === 'radio'" class="form-group-vertical">
                  <p>My favorite kind of pet is...</p>
                  <md-radio v-model="radio" value="cat">Cat</md-radio>
                  <md-radio v-model="radio" value="dog">Dog</md-radio>
                </div>
              </div>
              <div v-else>
                <div v-if="item.id === 'checkbox'">
                  <div class="default-form-group checkbox">
                    <input type="checkbox" id="default-cat" name="cat">
                    <label for="default-cat">I have a cat</label>
                  </div>
                  <div class="default-form-group checkbox">
                    <input type="checkbox" id="default-dog" name="dog">
                    <label for="default-dog">I have a dog</label>
                  </div>
                </div>
                <div v-if="item.id === 'datepicker'">
                  <div class="default-form-group label-left">
                    <label for="default-date">Choose a date:</label>
                    <input type="date" name="date" id="default-date">
                  </div>
                </div>
                <div v-if="item.id === 'input'">
                    <div class="default-form-group label-left">
                    <label for="default-input">Name of your pet:</label>
                    <input class="input" type="text" id="default-input" name="pet-name">
                    </div>
                </div>
                <div v-if="item.id === 'select'">
                  <div class="default-form-group label-left">
                    <label for="default-pet">Which is your favorite kind of pet?</label>
                    <select class="select" name="pets" id="default-pets">
                      <option value="cat">Cat</option>
                      <option value="dog">Dog</option>
                    </select>
                  </div>
                </div>
                <div v-if="item.id === 'radio'">
                  <div class="radio default-form-group">
                    <input type="radio" id="radio-cat" name="radio" value="cat">
                    <label for="radio-cat">Cat</label>
                  </div>
                  <div class="radio default-form-group">
                    <input type="radio" id="radio-dog" name="radio" value="dog">
                    <label for="radio-dog">Dog</label>
                  </div>
                </div>
              </div>
              <md-button v-if="option.active" class="md-accent">This is your chosen style of {{ item.label }}</md-button>
              <md-button v-else class="md-accent md-raised">Choose this style of {{ item.label }} instead</md-button>
            </div>
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
      id: undefined,
      radio: false,
      string: null
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

    .preference-wrapper:not(:last-of-type) {
      border-bottom: 1px solid #E0E0E0;
      margin-bottom: 1.5rem;
    }

    .preference-wrapper .default-form-group {
      align-items: center;
      display: flex;
      margin-bottom: 0.5rem;
      &:last-child {
        margin-bottom: 0.75rem;
      }
    }

    .preference-wrapper .form-group-vertical {
      display: flex;
      flex-direction: column;
    }

    .preference-wrapper .checkbox label,
    .preference-wrapper .radio label {
      margin-left: 0.25rem;
    }

    .preference-wrapper .label-left label {
      margin-right: 0.25rem;
    }

    .preference-wrapper .input,
    .preference-wrapper .select {
      border: 1px solid #9E9E9E;
      flex-grow: 2;
      font-size: 1rem;
      padding: 0.25rem;
    }
</style>
