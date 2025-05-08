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
  <section v-else class="product">
    <div class="product__content">
      <header-block
        :name="route.query.category"
        :link-back="`/categories/${productData.categoryId}`"
      ></header-block>
      <article class="product__info">
        <header class="product__img">
          <base-carousel-pagination
            class="carousel-product-card"
            v-if="productData.imgUrls.length >= 2"
            :img="productData.imgUrls"
          ></base-carousel-pagination>
          <img class="item__img" v-else :src="productData.imgUrls[0]" />
        </header>
        <article class="product__text-info block-style block-padding">
          <h2 class="text-title-style">{{ productData.name }}</h2>
          <footer class="product__price-rating">
            <div class="price">
              <h2 class="text-subtitle--bold-style">
                {{ productData.price }} ₽
              </h2>
              <h3
                class="text-subtitle-style text-color-gray"
                v-if="productData.originalPrice"
              >
                {{ productData.originalPrice }} ₽
              </h3>
            </div>
            <div v-if="productData.rating > 0" class="rating">
              <h2 class="text-subtitle--bold-style">
                {{ productData.rating }}
              </h2>
              <img src="@/assets/img/star-icon.svg" />
            </div>
          </footer>
        </article>
        <article class="product__text-description block-style block-padding">
          <p class="text-subtitle--bold-style">{{ productData.description }}</p>
        </article>
      </article>
      <footer class="product__footer">
        <div class="product__foter--reviews block-style">
          <header-block-forward-arrow
            name="Отзывы"
            :link-forward="`/product/reviews/${ productData.id }?category=${ route.query.category }`"
          >
            <template #amount>
              <h2 class="text-subtitle--bold-style amount-text-style">
                {{ productData.reviews.length }}
              </h2>
            </template>
          </header-block-forward-arrow>
          <template v-for="(review, index) in productData.reviews" :key="review.id">
            <ul class="product__reviews">
            <review-item-review
              v-if="index < 3"
              :review="review"
              :last="index === productData.reviews.length - 3"
            ></review-item-review>
          </ul>
          </template>
        </div>
        <div class="product__foter--for-you block-style">
          <NuxtLayout class="padding-for-buttons" name="products" :type-layout="false" :product-page-id="productData.id">
            <template #header>
              <header-block-forward-arrow
                name="Ваша подборка"
                link-forward="/for-you"
              ></header-block-forward-arrow>
            </template>
          </NuxtLayout>
        </div>
      </footer>
    </div>
  </section>
  <NuxtLayout v-if="productData" name="products-button" :in-stock="productData.inStock" :product-id="productData.id"></NuxtLayout>
</template>

<style scoped>
.product__img img {
  border-radius: var(--size-base);
}

.carousel-product-card img {
  border-bottom: var(--size-lg) solid var(--bg-color-main);
}

.block-padding {
  padding: var(--size-lg) var(--size-base);
}

.product__text-info {
  margin: 0;
}

.product__text-info h2 {
  font-size: 6vw;
}

.carousel-product-card {
  margin-bottom: var(--size-xs);
}

.product__price-rating {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price {
  display: flex;
  margin: var(--size-xs) 0;
}

.price h2 {
  color: #42e83c;
}

.price h3 {
  font-size: 5vw;
  text-decoration: line-through;
  margin-left: var(--size-xs);
}

.product__text-description p {
  font-size: 5vw;
}
</style>
