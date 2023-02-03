<template>
  <div class="widget_information">
    <div
      class="widget_information__widget"
      v-for="elem in store.weatherReports"
      :key="elem"
    >
      <WidgetSection
        :city="elem.city"
        :humidity="elem.humidity"
        :temperature="elem.temp_c"
        :wind-speed="elem.wind_kph"
        :icon="elem.image"
        :text="elem.text"
        :visibility="elem.visibility"
      />
    </div>
  </div>
</template>

<script setup>
import { useWeatherStore } from '@/containers/WeatherWidget/stores/Weather'
import WidgetSection from '@/components/WidgetSection'
const store = useWeatherStore()
</script>

<style lang="scss" scoped>
.widget_information {
  max-height: 500px;
  overflow-y: auto;
  padding: 20px;
}
</style>
