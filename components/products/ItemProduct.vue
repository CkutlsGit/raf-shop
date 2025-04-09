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
  <li class="product-item item">
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
      <h2 class="text-title-style">Ключ MINECRAFT</h2>
      <p class="text-color-gray text-subtitle-style">{{ cutDescriptionText }}</p>
    </div>
    <footer class="product-item__price">
      <h2 class="text-title-style">42 000 Ƶ</h2>
      <h3 class="text-subtitle-style text-color-gray">42 000 Ƶ</h3>
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

.product-status-sale {
  position: absolute;
  bottom: 5%;
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
