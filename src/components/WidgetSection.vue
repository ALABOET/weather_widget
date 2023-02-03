<template>
  <div class="widget-section">
    <div class="widget-section__city-text">{{ props.city }}</div>
    <div>Temperature: {{ props.temperature }} °C</div>
    <div>Humidity: {{ props.humidity }}%</div>
    <div>Windspeed: {{ props.windSpeed }} m/s</div>
    <div>Visibility: {{ props.visibility }} km</div>
    <img class="widget-section__image" :src="props.icon" alt="image" />
    <div>{{ props.text }}</div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  humidity: Number,
  temperature: Number,
  windSpeed: Number,
  city: String,
  icon: String,
  text: String,
  visibility: Number
})
</script>

<style lang="scss" scoped>
.widget-section {
  border-bottom: 1px solid #ffffff;
  color: #ffffff;
  div {
    text-align: center;
    transition: 0.5s all ease;
    &:hover {
      color: antiquewhite;
    }
  }
  &__image {
    display: block;
    margin: auto;
  }
  &__city-text {
    font-size: 24px;
    font-weight: bolder;
  }
}
</style>
