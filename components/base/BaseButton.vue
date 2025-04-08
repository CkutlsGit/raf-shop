<script setup lang="ts"></script>

<template>
  <button class="base-button">
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  display: flex;
  justify-content: center;
  width: 48px;
  height: 48px;
  padding: var(--size-base);
  border-radius: var(--size-base);
  background: var(--bg-color-main);
  backdrop-filter: 6px;
  cursor: pointer;
}
</style>
