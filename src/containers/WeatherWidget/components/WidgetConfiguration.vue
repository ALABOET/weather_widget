<template>
  <div class="widget_configuration">
    <div class="widget_configuration__text">Settings</div>
    <input type="text" v-model="city">
    <button
      @click="addCityHandler"
      :style="buttonStyles"
    >Add Location</button>
    <div class="widget_configuration__city_list city_list">
      <div
        v-for="location in store.weatherReports"
        :key="location"
        class="city_list__city"
      >
      <CityInformation
        :city="location.city"
        @onDelete="store.deleteReport(location.city)"
      />
    </div>
    </div>
  </div>
</template>

<script setup>
import { useWeatherStore } from '@/containers/WeatherWidget/stores/Weather'
import { computed, ref } from 'vue'
import CityInformation from '@/components/CityInformation'
const store = useWeatherStore()
const city = ref()
const buttonStyles = computed(() => {
  return { 'pointer-events': !city.value ? 'none' : '', opacity: !city.value ? '0.4' : '1' }
})
const addCityHandler = () => {
  store.getWeatherReport(city.value)
  store.toggleWeatherTab()
}
</script>

<style lang="scss">
.widget_configuration {
  &__text {
    padding-top: 5px;
    color: #FFFFFF;
  }
  .city_list {
    margin-top: 20px;
  }
}
</style>
