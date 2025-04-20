<script setup lang="ts">
const runTimeConfig = useRuntimeConfig()
const route = useRoute()

const dataCategory = ref<ISubCategories>()

onMounted(async () => {
  try {
    const response = await $fetch<ICategoriesFull>(
      `${runTimeConfig.public.backendUrl}/api/v1/products/${route.query.category}`,
      {
        method: "GET",
      }
    )

    dataCategory.value = response.subCategories.find(
      (subCategory) => subCategory.id === route.params.id
    )
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <section class="subcategories-main">
    <BaseLoader v-if="!dataCategory"></BaseLoader>
    <div v-else class="sub-categories-main__content">
      <header-block
        :name="dataCategory?.name"
        :link-back="`/categories/${route.query.category}`"
      ></header-block>
      <article class="sub-categories__products">
        <ul class="products__content block-content-style split-block-style">
          <products-item-product
            v-for="product in dataCategory.products"
            :key="product.id"
            :product="product"
          ></products-item-product>
        </ul>
      </article>
    </div>
  </section>
</template>

<style scoped>
.products__content {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
</style>
