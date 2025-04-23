<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css';

const props = defineProps<{
  img: any
  typeProduct?: boolean
}>()

const urlTransfer = (url: string): void => {
  window.open(url, "blank")
}
</script>

<template>
  <swiper
  class="carousel"
  :centered-slides="true"
  :modules="[Autoplay]"
  :slides-per-view="1"
  :autoplay="{
    delay: 2500,
    disableOnInteraction: false,
    
  }"
  :space-between="30"
  >
    <swiper-slide v-for="(slide, index) of img" :key="index" @click="urlTransfer(slide.link)">
      <img v-if="!typeProduct" :src="slide.imgUrl">
      <img :src="slide" class="product-img" v-else>
    </swiper-slide>
  </swiper>
</template>

<style scoped>
.carousel {
  margin-top: var(--size-xs);
}

.carousel {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  height: unset !important;
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