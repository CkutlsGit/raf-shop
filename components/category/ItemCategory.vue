<script setup lang="ts">
const testData: IStatus = {
  titleStatus: "Новое",
  iconSrc: "/icons/star-icon.svg",
  status: "new",
  productStatus: false,
}
</script>

<template>
  <article class="category-item item">
    <header class="category-item__img item__img">
      <img src="/assets/img/test-img.png" />
      <status-item-status
        class="category-status"
        :configStatus="testData"
      ></status-item-status>
    </header>
    <h2 class="text-subtitle-style">Minecraft adsasdasd</h2>
  </article>
</template>

<style scoped>
.category-item {
  text-align: center;
}

.category-status {
  position: absolute;
  bottom: 0;
  left: 0;
}

.category-item__img img {
  width: 85px;
  height: 85px;
  border-radius: 6px;
}

.category-item h2 {
  margin-top: var(--size-xs);
  max-width: 85px;
}

@media screen and (max-width: 380px) {
  .category-item__img img {
    width: 75px;
    height: 75px;
  }
  .category-item h2 {
    max-width: 75px;
  }
}

@media (max-width: 355px) {
  .category-item__img img {
    width: 70px;
    height: 70px;
  }
  .category-item h2 {
    max-width: 70px;
  }
}
</style>
