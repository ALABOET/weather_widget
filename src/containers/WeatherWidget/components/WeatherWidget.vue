<template>
  <div class="weather_widget" :style="{ top: props.top, left: props.left }">
    <img
      class="weather_widget__gear-icon"
      :src="require('/src/assets/icons/gear.svg')"
      alt="gear"
      @click="store.toggleWeatherTab"
    />
    <div v-if="store.dataIsPresent && store.weatherInformationIsShown" class="weather_widget__no-data">
      No data present
    </div>
    <WidgetInformation v-if="store.weatherInformationIsShown" />
    <WidgetConfiguration v-if="!store.weatherInformationIsShown" />
  </div>
</template>

<script setup>
import WidgetInformation from '@/containers/WeatherWidget/components/WidgetInformation'
import WidgetConfiguration from '@/containers/WeatherWidget/components/WidgetConfiguration'
import { onMounted, defineProps } from 'vue'
import { useWeatherStore } from '@/containers/WeatherWidget/stores/Weather'
const store = useWeatherStore()
const props = defineProps({
  top: String,
  left: String
})

onMounted(() => {
  navigator.geolocation.getCurrentPosition(store.getInitialWeatherData)
})
</script>

<style lang="scss" scoped>
.weather_widget {
  max-height: 300px;
  overflow-y: auto;
  position: absolute;
  width: 300px;
  background: no-repeat url("/src/assets/pics/background_sky.webp");
  border-radius: 20px;
  &__no-data {
    text-align: center;
    font-size: 22px;
    color: #ffffff;
    margin-top: 40px;
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
