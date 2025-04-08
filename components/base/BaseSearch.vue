<script lang="ts" setup></script>

<template>
  <div class="base__content">
    <input class="base-input" type="text" placeholder="Найти товар" />
    <img class="base-icon-search" src="/public/icons/search-icon.svg" />
  </div>
</template>

<style scoped>
.base__content {
  position: relative;
}

.base-input {
  width: 100%;
  border: none;
  border-radius: var(--size-base);
  margin: var(--size-xs) 0;
  padding: var(--size-base) 50px var(--size-base) var(--size-base);
  background: var(--bg-color-main);
  color: var(--text-color-main);
  font-size: var(--size-medium);
  font-weight: 500;
  font-family: "Raleway", sans-serif;
}

.base-input::placeholder {
  font-weight: 600;
}

.base-input:focus {
  outline: none;
}

.base-icon-search {
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  cursor: pointer;
}
</style>
