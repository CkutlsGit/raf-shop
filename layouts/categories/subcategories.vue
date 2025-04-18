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
      <header class="for-you__header block-header-style block-header-img-style">
        <h1 class="text-title-style">{{ subCategory.name }}</h1>
        <NuxtLink>
          <base-button class="icon-arrow">
            <span><img src="/public/icons/arrow-icon.svg" /></span>
          </base-button>
        </NuxtLink>
      </header>
      <ul
        class="products__content block-content-style"
        v-if="subCategory.products"
      >
        <products-item-product
          v-for="product in subCategory.products"
          :key="product.id"
          :product="product"
        ></products-item-product>
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
