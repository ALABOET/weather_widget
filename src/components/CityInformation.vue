<template>
  <div class="city">
    <img :src="require('/src/assets/icons/move.svg')" alt="move" />
    <div class="city__name">{{ props.city }}</div>
    <img
      :src="require('/src/assets/icons/trash_can.svg')"
      alt="delete"
      @click="emits('onDelete')"
    />
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  city: String
})
const emits = defineEmits(['onDelete'])
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
  transition: 0.5s all ease;
  &:hover {
    color: antiquewhite;
  }
  img {
    width: 20px;
    &:hover {
      cursor: pointer;
    }
  }
  &__name {
    text-align: center;
  }
}
</style>
