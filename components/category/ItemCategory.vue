<script setup lang="ts">
const testData: IStatus = {
  titleStatus: "Новое",
  iconSrc: "/icons/star-icon.svg",
  status: "new",
  productStatus: false,
}
</script>

<template>
  <li class="category-item item">
    <header class="category-item__img item__img">
      <img src="/assets/img/test-img.png" />
      <status-item-status
        class="category-status"
        :configStatus="testData"
      ></status-item-status>
    </header>
    <h2>Minecraft adsasdasd</h2>
  </li>
</template>

<style scoped>
.category-item {
  text-align: center;
}

.category-item__img {
  width: 100%;
}

.category-status {
  position: absolute;
  bottom: 0;
  left: 0;
}

.category-item__img img {
  width: 100%;
  border-radius: 6px;
}

.category-item h2 {
  font-size: 4vw;
  font-weight: 500;
  margin: var(--size-xs) auto 0 auto;
}
</style>
