<script setup lang='ts'>
const testData: IStatus = {
  titleStatus: 'Новое',
  iconSrc: '/icons/star-icon.svg',
  status: 'new'
}
</script>

<template>
  <div class="category-item">
    <div class="category-item__img">
      <img src="/assets/img/test-img.png">
      <status-item-category-status class="category-status" :configStatus="testData"></status-item-category-status>
    </div>
    <h2>Minecraft adsasdasd</h2>
  </div>
</template>

<style scoped>
.category-item {
  text-align: center;
  cursor: pointer;
}

.category-item__img {
  position: relative;
  display: inline-block;
}

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