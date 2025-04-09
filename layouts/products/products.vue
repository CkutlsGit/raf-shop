<script setup lang="ts"></script>

<template>
  <slot name="header"></slot>
  <ul class="products__content">
    <li><products-item-product></products-item-product></li>
    <li><products-item-product></products-item-product></li>
    <li><products-item-product></products-item-product></li>
    <li><products-item-product></products-item-product></li>
  </ul>
</template>

<style scoped>
.products__content {
  display: flex;
  padding: var(--size-small);
  gap: 10px var(--size-xs);
  flex-wrap: wrap;
  justify-content: space-between;
}

@media (max-width: 360px) {
  .products__content {
    justify-content: center;
  }
}
</style>
