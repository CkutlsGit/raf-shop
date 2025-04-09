<script setup lang="ts">
const testData: IStatus = {
  titleStatus: "Популярное",
  iconSrc: "/icons/fire-icon.svg",
  status: "popular",
  productStatus: true,
}

const testDataTwo: IStatus = {
  titleStatus: "Новое",
  iconSrc: "/icons/star-icon.svg",
  status: "new",
  productStatus: true,
}

const testDataThree: IStatus = {
  titleStatus: "Скидка 15%",
  iconSrc: "/icons/note-icon.svg",
  status: "sale",
  productStatus: true,
}

const descriptionTest = ref<string>("Майнкрафт категория йоу")

const cutDescriptionText = computed((): string => {
  return descriptionTest.value.length >= 16
    ? `${descriptionTest.value.substring(0, 16)}...`
    : `${descriptionTest.value}`
})
</script>

<template>
  <article class="product-item item">
    <header class="product-item__img item__img">
      <img src="/assets/img/test-img-product.png" />
      <status-item-status
        class="product-status"
        :configStatus="testData"
      ></status-item-status>
      <status-item-status
        class="product-status"
        :configStatus="testDataTwo"
      ></status-item-status>
      <status-item-status
        class="product-status-sale"
        :configStatus="testDataThree"
      ></status-item-status>
    </header>
    <div class="product-item__text">
      <h2>Ключ MINECRAFT</h2>
      <p class="text-color-gray">{{ cutDescriptionText }}</p>
    </div>
    <footer class="product-item__price">
      <h2>42 000 ₴</h2>
      <h3 class="text-color-gray">42 000 ₴</h3>
    </footer>
  </article>
</template>

<style scoped>
.product-status {
  position: absolute;
  top: var(--size-small);
  left: var(--size-small);
}

.product-status + .product-status {
  margin-top: calc(var(--size-small) * 4);
}

.product-status-sale {
  position: absolute;
  bottom: var(--size-small);
  left: var(--size-small);
}

.product-item__img img {
  width: 165px;
  height: 165px;
  border-radius: 6px;
}

.product-item__text {
  max-width: 165px;
}

.product-item__text h2 {
  font-size: 18px;
  font-weight: 600;
}

.product-item__text p {
  font-size: var(--size-base);
  font-weight: 500;
}

.product-item__price {
  display: flex;
  margin-top: var(--size-xs);
}

.product-item__price h2 {
  color: #42e83c;
  font-size: var(--size-medium);
  font-weight: 600;
}

.product-item__price h3 {
  font-size: var(--size-base);
  font-weight: 500;
  text-decoration: line-through;
  margin-left: var(--size-xs);
}
</style>
