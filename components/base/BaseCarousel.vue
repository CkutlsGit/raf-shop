<script setup lang="ts">
const props = defineProps<{
  img: any
  typeProduct?: boolean
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
    <slide v-for="(slide, index) of img" :key="index">
      <img
        v-if="!typeProduct"
        :src="slide.imgUrl"
        @click="urlTransfer(slide.link)"
      />
      <img class="product-img" v-else :src="slide" />
    </slide>
  </carousel>
</template>

<style scoped>
.carousel {
  margin-top: var(--size-xs);
}

carousel {
  width: 100%;
  height: 100%;
}

img {
  width: 100%;
  height: 100%;
  border-radius: var(--size-base);
  cursor: pointer;
}

.product-img {
  border-bottom: var(--size-lg) solid var(--bg-color-main);
}
</style>