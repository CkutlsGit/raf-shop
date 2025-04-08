<script setup lang="ts">
let banners = ref<IBanner[]>([])

onMounted(async () => {
  try {
    const response = await $fetch("/api/bannerget", {
      method: "GET",
    })

    banners.value = response.banners
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <section class="main-page">
    <div class="main-page__content">
      <header class="main-page__header">
        <BaseSearch />
        <BaseSwiper :banners="banners" />
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
