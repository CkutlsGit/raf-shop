<script setup lang="ts">
interface IApiCategories {
  categories: ICategories[]
}

const runTimeConfig = useRuntimeConfig()
const categories = ref<ICategories[]>()

onMounted(async () => {
  const response = await $fetch<IApiCategories>(
    `${runTimeConfig.public.backendUrl}/api/v1/categories`,
    {
      method: "GET",
    }
  )

  categories.value = response.categories
})
</script>

<template>
  <section class="main-page">
    <div class="main-page__content">
      <header class="main-page__header">
        <base-search></base-search>
        <base-carousel></base-carousel>
      </header>
      <article class="main-page__categories block-style">
        <header class="categories__header block-header-style">
          <h1 class="text-title-style">Категории</h1>
          <base-button>
            <span><img src="/public/icons/arrow-icon.svg" /></span>
          </base-button>
        </header>
        <ul class="categories__content block-content-style">
          <template v-for="(category, index) in categories" :key="category.id">
            <category-item-category
              v-if="index < 8"
              :is-new="category.isNew"
              :icon-url="category.iconUrl"
              :name="category.name"
            ></category-item-category>
          </template>
        </ul>
      </article>
      <footer class="main-page__for-you block-style">
        <NuxtLayout name="products">
          <template #header>
            <header class="for-you__header block-header-style">
              <h1 class="text-title-style">Ваша подборка</h1>
              <NuxtLink to="/for-you"
                ><img src="/public/icons/arrow-icon.svg"
              /></NuxtLink>
            </header>
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

.categories__content {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.for-you__header img {
  display: flex;
  cursor: pointer;
}
</style>
