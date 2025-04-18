<script setup lang="ts">
const popularStatus: IStatus = {
  titleStatus: "Популярное",
  iconSrc: "/icons/fire-icon.svg",
  status: "popular",
  productStatus: true,
}

const newStatus: IStatus = {
  titleStatus: "Новое",
  iconSrc: "/icons/star-icon.svg",
  status: "new",
  productStatus: true,
}

const props = defineProps<{
  product: IProduct
}>()

const cutDescriptionText = (categoryName: string): string => {
  return categoryName.length >= 16
    ? `${categoryName.substring(0, 16)}...`
    : `${categoryName}`
}
</script>

<template>
  <li class="product-item item">
    <header class="product-item__img item__img">
      <img :src="product.imgUrl" />
      <status-item-status
        class="product-status"
        v-if="product.isPopular"
        :configStatus="popularStatus"
      ></status-item-status>
      <status-item-status
        class="product-status"
        v-if="product.isNew"
        :configStatus="newStatus"
      ></status-item-status>
      <status-item-status
        class="product-status-sale"
        :configStatus="{
          titleStatus: `Скидка ${product.discountPercent.toFixed(0)}%`,
          iconSrc: `/icons/note-icon.svg`,
          status: 'sale',
          productStatus: true,
        }"
      ></status-item-status>
    </header>
    <div class="product-item__text">
      <h2 class="text-title-style">{{ product.name }}</h2>
      <p class="text-color-gray text-subtitle-style">
        {{ cutDescriptionText(product.categoryName) }}
      </p>
    </div>
    <footer class="product-item__price">
      <h2 class="text-title-style">{{ product.price }} ₽</h2>
      <h3 class="text-subtitle-style text-color-gray">
        {{ product.originalPrice }} ₽
      </h3>
    </footer>
  </li>
</template>

<style scoped>
.product-status {
  position: absolute;
  top: 5%;
  left: 5%;
}

.product-status + .product-status {
  margin-top: calc(4% * 4);
}

.product-item__img {
  width: 100%;
  height: 70%;
}

.product-item__img img {
  width: 100%;
  height: 100%;
  min-height: 175px;
}

.product-status-sale {
  position: absolute;
  bottom: 6%;
  left: 5%;
}

.product-item__price {
  display: flex;
  margin-top: var(--size-xs);
}

.product-item__price h2 {
  color: #42e83c;
}

.product-item__price h3 {
  text-decoration: line-through;
  margin-left: var(--size-xs);
}
</style>
