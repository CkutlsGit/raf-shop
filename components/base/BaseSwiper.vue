<script setup lang="ts">
const containerRef = ref(null)
const swiper = useSwiper(containerRef, {
  effect: "creative",
  loop: true,
  autoplay: {
    delay: 5000,
  },
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [-400, 0, 0],
    },
    next: {
      shadow: true,
      translate: [400, 0, 0],
    },
  },
})

const props = defineProps<{
  banners: IBanner[]
}>()

const urlTransfer = (url: string): void => {
  window.open(url, "blank")
}
</script>

<template>
  <ClientOnly>
    <swiper-container ref="containerRef" :init="false">
      <swiper-slide v-for="slide in props.banners" :key="slide.id">
        <img :src="slide.imgUrl" @click="urlTransfer(slide.link)" />
      </swiper-slide>
    </swiper-container>
  </ClientOnly>
</template>

<style lang="css">
swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 140px;
}

swiper-slide img {
  width: 100%;
  height: 140px;
  border-radius: var(--size-base);
  cursor: pointer;
}
</style>
