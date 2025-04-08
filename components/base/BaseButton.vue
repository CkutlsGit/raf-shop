<script setup lang="ts"></script>

<template>
  <button class="base-button">
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  width: 40px;
  height: 40px;
  padding: 14px var(--size-base);
  border-radius: var(--size-base);
  background: var(--bg-color-main);
  backdrop-filter: 6px;
  cursor: pointer;
}
</style>
