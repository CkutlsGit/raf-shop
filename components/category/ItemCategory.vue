<script setup lang='ts'>
const testData: IStatus = {
  titleStatus: 'Новое',
  iconSrc: '/icons/star-icon.svg',
  status: 'new',
  productStatus: false
}
</script>

<template>
  <article class="category-item item">
    <header class="category-item__img item__img">
      <img src="/assets/img/test-img.png">
      <status-item-status class="category-status" :configStatus="testData"></status-item-status>
    </header>
    <h2>Minecraft adsasdasd</h2>
  </article>
</template>

<style scoped>
.category-status {
  position: absolute;
  bottom: 0;
  left: 0;
}

.category-item__img img {
  width: 75px;
  height: 75px;
  border-radius: 6px;
}

.category-item h2 {
  font-size: var(--size-base);
  font-weight: 500;
  margin-top: var(--size-xs);
  max-width: 75px;
}
</style>