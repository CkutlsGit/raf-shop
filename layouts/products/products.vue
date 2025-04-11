<script setup lang="ts">
const runTimeConfig = useRuntimeConfig()
const products = ref<IProduct[]>()

onMounted(async () => {
  const response = await $fetch<IProduct[]>(`${ runTimeConfig.public.backendUrl }/api/v1/products`, {
    method: 'GET'
  })

  products.value = response
  console.log(products.value)
})
</script>

<template>
  <slot name="header"></slot>
  <ul class="products__content block-content-style">
    <products-item-product v-for="(product, index) in products" :key="index" :product="product"></products-item-product>
  </ul>
</template>

<style scoped>
.products__content {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
</style>
