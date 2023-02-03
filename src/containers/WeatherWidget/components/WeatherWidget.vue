<template>
  <div class="weather_widget" :style="{ top: props.top, left: props.left }">
    <img
      class="weather_widget__gear-icon"
      :src="require('/src/assets/icons/gear.svg')"
      alt="gear"
      @click="store.toggleWeatherTab"
    />
    <div v-if="dataIsPresent" class="weather_widget__no-data">
      No data yet loaded
    </div>
    <WidgetInformation v-if="store.weatherInformationIsShown" />
    <WidgetConfiguration v-if="!store.weatherInformationIsShown" />
  </div>
</template>

<script setup>
import WidgetInformation from '@/containers/WeatherWidget/components/WidgetInformation'
import WidgetConfiguration from '@/containers/WeatherWidget/components/WidgetConfiguration'
import { onMounted, defineProps, computed } from 'vue'
import { useWeatherStore } from '@/containers/WeatherWidget/stores/Weather'
const store = useWeatherStore()
const props = defineProps({
  top: String,
  left: String
})

const dataIsPresent = computed(() => {
  return store.weatherReports.length === 0
})

onMounted(() => {
  navigator.geolocation.getCurrentPosition(store.getInitialWeatherData)
})
</script>

<style lang="scss" scoped>
.weather_widget {
  position: absolute;
  width: 300px;
  background: grey;
  border-radius: 20px;
  &__no-data {
    text-align: center;
    font-size: 22px;
    color: #ffffff;
  }
  &__gear-icon {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 5px;
    right: 20px;
    z-index: 2;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
