<script setup lang="ts">
const testData: IStatus = {
  titleStatus: 'Популярное',
  iconSrc: '/icons/fire-icon.svg',
  status: 'popular',
  productStatus: true
}

const testDataTwo: IStatus = {
  titleStatus: 'Новое',
  iconSrc: '/icons/star-icon.svg',
  status: 'new',
  productStatus: true
}
</script>

<template>
  <article class="product-item item">
    <header class="product-item__img item__img">
      <img src="/assets/img/test-img-product.png">
      <status-item-status class="product-status" :configStatus="testData"></status-item-status>
      <status-item-status class="product-status" :configStatus="testDataTwo"></status-item-status>
    </header>
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

.product-item__img img {
  width: 180px;
  height: 180px;
  border-radius: 6px;
}
</style>