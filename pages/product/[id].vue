<script setup lang="ts">
const runTimeConfig = useRuntimeConfig()
const route = useRoute()

const productData = ref<IProductCard>()

onMounted(async () => {
  try {
    const response = await $fetch<IProductCard>(`${ runTimeConfig.public.backendUrl }/api/v1/products/item/${ route.params.id }`)
    
    productData.value = response
    console.log(productData.value)
  }
  catch(error) {
    console.error(error)
  }
})
</script>

<template>
<base-loader v-if="!productData"></base-loader>
<section v-else class="product">
  <div class="product__content">
    <header-block :name="route.query.category" :link-back="`/categories/${ productData.categoryId }`"></header-block>
    <article class="product__info">
      <base-carousel></base-carousel>
    </article>
  </div>
</section>
</template>

<style>

</style>