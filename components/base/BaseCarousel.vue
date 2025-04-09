<script setup lang="ts">
let banners = useState<IBanner[]>("banners", () => [])

onMounted(async () => {
  if (!banners.value.length) {
    try {
      const response = await $fetch("/api/bannerget", {
        method: "GET",
      })

      banners.value = response.banners
    } catch (error) {
      console.log(error)
    }
  }
})

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
  height: 100%;
}

img {
  width: 100%;
  height: 100%;
  border-radius: var(--size-base);
  cursor: pointer;
}
</style>
