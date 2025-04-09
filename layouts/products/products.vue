<script setup lang="ts"></script>

<template>
  <slot name="header"></slot>
  <ul class="products__content block-content">
    <li><products-item-product></products-item-product></li>
    <li><products-item-product></products-item-product></li>
    <li><products-item-product></products-item-product></li>
    <li><products-item-product></products-item-product></li>
  </ul>
</template>

<style scoped>
@media (max-width: 335px) {
  .products__content {
    justify-content: center;
  }
}
</style>
