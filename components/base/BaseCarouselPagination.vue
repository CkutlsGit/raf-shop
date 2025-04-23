<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/pagination';

const props = defineProps<{
  img: any
}>()
</script>

<template>
  <swiper
  class="carousel-style carousel-pagination"
  :centered-slides="true"
  :modules="[Autoplay, Pagination]"
  :slides-per-view="1"
  :autoplay="{
    delay: 2500,
    disableOnInteraction: false,
    
  }"
  :pagination="{
    clickable: true
  }"
  :space-between="30"
  >
    <swiper-slide v-for="(slide, index) of img" :key="index">
      <img :src="slide" class="product-img">
    </swiper-slide>
  </swiper>
</template>

<style>
.carousel-pagination .swiper-pagination {
  bottom: -2px !important;
}

.carousel-pagination .swiper-pagination-bullet-active {
  background: var(--text-color-main);
}

.carousel-pagination .swiper-pagination-bullet {
  background: var(--text-color-main);
}

.carousel-pagination .swiper-slide .product-img {
  border-bottom: var(--size-lg) solid var(--bg-color-main);
}
</style>