<script setup lang="ts">
const runTimeConfig = useRuntimeConfig()
const products = ref<IProduct[]>()

const props = defineProps<{
  typeLayout: string
}>()

onMounted(async () => {
  const response = await $fetch<IProduct[]>(
    `${runTimeConfig.public.backendUrl}/api/v1/products`,
    {
      method: "GET",
    }
  )

  products.value = response
})
</script>

<template>
  <slot name="header"></slot>
  <ul class="products__content block-content-style" :class="{ 'split-block-style': typeLayout }">
    <products-item-product
      v-for="product in products"
      :key="product.id"
      :product="product"
    ></products-item-product>
  </ul>
</template>

<style scoped>
.products__content {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.split-block-style {
  width: 100%;
  background: var(--bg-color-main);
  border-radius: var(--size-base);
  padding: var(--size-small);
}
</style>
