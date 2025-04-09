<script setup lang="ts"></script>

<template>
  <slot name="header"></slot>
  <ul class="products__content block-content">
    <products-item-product></products-item-product>
    <products-item-product></products-item-product>
    <products-item-product></products-item-product>
    <products-item-product></products-item-product>
  </ul>
</template>

<style scoped>
.products__content {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--size-small);
  padding: 0 var(--size-small) var(--size-small) var(--size-small);
}
</style>
