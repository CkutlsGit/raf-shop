<script setup lang="ts">
interface iBanner {
  id: string
  imgUrl: string
  link: string
}

let banners = reactive([{} as iBanner])

onMounted(async () => {
  const response = await $fetch("/api/bannerget", {
    method: "GET",
  })

  banners = response.banners
})
</script>

<template>
  <section class="main-page">
    <div class="main-page__content">
      <header class="main-page__header">
        <BaseSearch />
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
