<script setup lang="ts">
const isLoading = ref<boolean>(false)

const changeStatusLoading = (): void => {
  isLoading.value = !isLoading.value
}
</script>

<template>
  <div v-show="!isLoading" class="loader__content">
    <BaseLoader />
    <h2>Подгрузка данных</h2>
  </div>
  <main v-show="isLoading" class="main">
    <header-the-header @is-loading="changeStatusLoading()"></header-the-header>
    <slot />
  </main>
</template>

<style scoped>
.loader__content {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.loader__content h2 {
  margin-top: 50px;
  font-size: var(--size-medium);
  color: var(--text-color-main);
}
</style>
