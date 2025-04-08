<script setup lang="ts">
const props = defineProps<{
  banners: IBanner[]
}>()

const carouselConfig = {
  itemToShow: 1,
  autoplay: 5000,
  wrapAround: true,
  transition: 500,
}

const urlTransfer = (url: string): void => {
  window.open(url, "blank")
}
</script>

<template>
  <carousel class="carousel" v-bind="carouselConfig">
    <slide v-for="slide of banners" :key="slide.id">
      <img :src="slide.imgUrl" @click="urlTransfer(slide.link)" />
    </slide>
  </carousel>
</template>

<style scoped>
carousel {
  width: 100%;
  height: 140px;
}

img {
  width: 100%;
  height: 140px;
  border-radius: var(--size-base);
}
</style>
