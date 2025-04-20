<script setup lang="ts">
interface IApiBanner {
  banners: IBanner[]
}

const runTimeConfig = useRuntimeConfig()
let banners = useState<IBanner[]>("banners", () => [])

onMounted(async () => {
  if (!banners.value.length) {
    try {
      const response = await $fetch<IApiBanner>(
        `${runTimeConfig.public.backendUrl}/api/v1/banners`,
        {
          method: "GET",
        }
      )
      banners.value = response.banners
    } catch (error) {
      console.error(error)
    }
  }
})
</script>

<template>
  <section class="main-page">
    <div class="main-page__content">
      <header class="main-page__header">
        <base-search></base-search>
        <base-carousel :img="banners"></base-carousel>
      </header>
      <article class="main-page__categories block-style">
        <NuxtLayout name="categories" :type-layout="false">
          <template #header>
            <header-block-forward-arrow name="Категории" link-forward="/categories"></header-block-forward-arrow>
          </template>
        </NuxtLayout>
      </article>
      <footer class="main-page__for-you block-style">
        <NuxtLayout name="products" :type-layout="false">
          <template #header>
            <header-block-forward-arrow name="Ваша подборка" link-forward="/for-you"></header-block-forward-arrow>
          </template>
        </NuxtLayout>
      </footer>
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
