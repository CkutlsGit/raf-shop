<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'

import 'swiper/css';

const props = defineProps<{
  img: any
}>()

const urlTransfer = (url: string): void => {
  window.open(url, "blank")
}
</script>

<template>
  <swiper
  class="carousel-style"
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
      <img :src="slide.imgUrl">
    </swiper-slide>
  </swiper>
</template>

<style scoped>
.swiper-slide img {
  cursor: pointer;
}
</style>