<script setup lang="ts"></script>

<template>
  <section class="categories">
    <div class="categories__content">
      <base-search></base-search>
      <NuxtLayout name="categories" :type-layout="true">
        <template #header>
          <header-block name="Категории" link-back="/"></header-block>
        </template>
      </NuxtLayout>
    </div>
  </section>
</template>

<style scoped>
.for-you__header {
  background: var(--bg-color-main);
  border-radius: var(--size-base);
  margin-bottom: var(--size-xs);
}

.for-you__header-nav {
  display: flex;
  align-items: center;
  gap: 0 12px;
}
</style>
