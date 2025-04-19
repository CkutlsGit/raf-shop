<script setup lang="ts">
const props = defineProps<{
  dataCategory: ICategoriesFull
}>()
</script>

<template>
  <BaseLoader v-if="!dataCategory"></BaseLoader>
  <div v-else>
    <article
      v-if="dataCategory.products.length > 0"
      class="categories-subcategories__main"
    >
      <header-block
        :name="dataCategory.name"
        link-back="/categories"
      ></header-block>
      <ul class="products__content block-content-style split-block-style">
        <products-item-product
          v-for="product in dataCategory.products"
          :key="product.id"
          :product="product"
        ></products-item-product>
      </ul>
    </article>
    <header-block
      v-else
      :name="dataCategory.name"
      link-back="/categories"
    ></header-block>
    <article
      v-for="subCategory in dataCategory.subCategories"
      :key="subCategory.id"
      class="categories-subcategories__submain block-style"
    >
    <div v-if="subCategory.products.length > 0">
      <header-block-forward-arrow :name="subCategory.name" :link-forward="`/sub/${ subCategory.id }?category=${ dataCategory.id }`"></header-block-forward-arrow>
      <ul
        class="products__content block-content-style"
        v-if="subCategory.products"
      >
      <template v-for="(product, index) in subCategory.products" :key="product.id">
        <products-item-product
          v-if="index < 2"
          :product="product"
        ></products-item-product>
      </template>
      </ul>
    </div>
    </article>
  </div>
</template>

<style scoped>
.products__content {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
</style>
