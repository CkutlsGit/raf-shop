<script setup lang="ts"></script>

<template>
  <slot name="header"></slot>
  <ul class="products__content block-content-style">
    <products-item-product></products-item-product>
  </ul>
</template>

<style scoped>
.products__content {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
</style>
