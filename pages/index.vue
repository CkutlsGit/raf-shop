<script setup lang="ts">
interface iBanner {
  id: string
  imgUrl: string
  link: string
}

let banners = reactive([{} as iBanner])
const bannerUrlIcon = ref<string>("")
const bannerUrl = ref<string>("")

let intervalChangedBanner: ReturnType<typeof setInterval> | null = null

onMounted(async () => {
  const response = await $fetch("/api/bannerget", {
    method: "GET",
  })

  banners = response.banners
  changedBanner(banners)
})

onUnmounted(() => {
  if (intervalChangedBanner) {
    clearInterval(intervalChangedBanner)
  }
})

const changedBanner = (banners: iBanner[]): void => {
  if (banners.length === 0) return

  let currentIndex: number = 0

  const updateBanner = () => {
    const currentBanner = banners[currentIndex]
    bannerUrlIcon.value = currentBanner.imgUrl
    bannerUrl.value = currentBanner.link

    currentIndex = (currentIndex + 1) % banners.length
  }

  updateBanner()
  intervalChangedBanner = setInterval(updateBanner, 20000)
}

const urlTransfer = (url: string): void => {
  window.open(url, "blank")
}
</script>

<template>
  <section class="main-page">
    <div class="main-page__content">
      <header class="main-page__header">
        <BaseSearch />
        <img :src="bannerUrlIcon" @click="urlTransfer(bannerUrl)" />
      </header>
    </div>
  </section>
</template>

<style scoped>
.main-page__header img {
  width: 100%;
  height: 100%;
  border-radius: var(--size-base);
  margin: var(--size-xs) 0;
  cursor: pointer;
}
</style>
