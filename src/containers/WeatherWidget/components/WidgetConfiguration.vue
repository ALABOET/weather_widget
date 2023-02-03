<template>
  <div class="widget_configuration">
    <div class="widget_configuration__text">Settings</div>
    <input class="widget_configuration__input" type="text" v-model="city" />
    <button @click="addCityHandler" :style="buttonStyles">Add Location</button>
    <div class="widget_configuration__city_list city_list">
      <vuedraggable
        :list="weatherReports"
        class="city_list__city"
        ghost-class="ghost"
      >
        <template #item="{ element }">
          <CityInformation
            :city="element.city"
            @onDelete="deleteReport(element.city)"
          />
        </template>
      </vuedraggable>
    </div>
  </div>
</template>

<script>
import CityInformation from '@/components/CityInformation'
import { mapActions, mapState } from 'pinia'
import { useWeatherStore } from '@/containers/WeatherWidget/stores/Weather'
import vuedraggable from 'vuedraggable'
export default {
  name: 'WidgetConfiguration',
  components: { CityInformation, vuedraggable },
  data () {
    return {
      city: ''
    }
  },
  computed: {
    ...mapState(useWeatherStore, ['weatherReports']),
    buttonStyles () {
      return {
        'pointer-events': !this.city ? 'none' : '',
        opacity: !this.city ? '0.4' : '1',
        display: 'block',
        margin: '5px auto'
      }
    }
  },
  methods: {
    ...mapActions(useWeatherStore, [
      'getWeatherReport',
      'toggleWeatherTab',
      'deleteReport'
    ]),
    addCityHandler () {
      this.getWeatherReport(this.city)
    }
  }
}
</script>

<style lang="scss">
.widget_configuration {
  padding: 10px 20px;
  &__text {
    padding-top: 5px;
    color: #ffffff;
  }
  .city_list {
    margin-top: 20px;
  }
  &__input {
    width: 100%;
    padding: 0;
    border: 0;
  }
}
</style>
