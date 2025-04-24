<script setup lang="ts">
const runTimeConfig = useRuntimeConfig()
const route = useRoute()

const productData = ref<IProductCard>()

onMounted(async () => {
  try {
    const response = await $fetch<IProductCard>(
      `${runTimeConfig.public.backendUrl}/api/v1/products/item/${route.params.id}`
    )

    productData.value = response
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <base-loader v-if="!productData"></base-loader>
  <section v-else class="reviews-product">
    <div class="reviews-product__content">
      <header-block name="Отзывы" :link-back="`/product/${ route.params.id }?category=${ route.query.category }`">
        <template #amount>
          <h2 class="text-subtitle--bold-style amount-text-style">
            {{ productData.reviews.length }}
          </h2>
        </template>
        <template #rating>
          <div class="rating">
              <h2 class="text-subtitle--bold-style">
                {{ productData.rating }}
              </h2>
              <img src="@/assets/img/star-icon.svg" />
            </div>
        </template>
      </header-block>
      <article v-if="productData.reviews.length > 0" class="reviews-product__main block-style">
        <ul class="product__reviews">
            <review-item-review
              v-for="(review, index) in productData.reviews"
              :key="review.id"
              :review="review"
              :last="index === productData.reviews.length - 1"
            ></review-item-review>
          </ul>
      </article>
    </div>
  </section>
</template>

<style scoped>
.reviews-product__main {
  padding: var(--size-lg) 0;
}
</style>