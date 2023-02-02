<template>
  <div class="city">
    <img :src="require('/src/assets/icons/move.svg')" alt="move"/>
    <div>{{props.city}}</div>
    <img
      :src="require('/src/assets/icons/trash_can.svg')"
      alt="delete"
      @click="$emit('onDelete')"
    />
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  city: String
})
</script>

<style scoped lang="scss">
.city {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: blueviolet;
  color: white;
  align-items: center;
  margin: 10px 0;
  border-radius: 10px;
  padding: 10px;
  transition: .5s all ease;
  &:hover {
    color: antiquewhite;
  }
  img {
    width: 20px;
    &:hover {
      cursor:pointer;
    }
  }
}
</style>
