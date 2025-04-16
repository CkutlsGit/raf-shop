<script setup lang="ts"></script>

<template>
  <section class="categories">
    <div class="categories__content">
      <base-search></base-search>
      <NuxtLayout name="categories" :type-layout="true">
        <template #header>
          <header
            class="for-you__header block-header-style block-header-img-style"
          >
            <nav class="for-you__header-nav">
              <base-button class="icon-arrow-back">
                <span><img src="/public/icons/arrow-back-icon.svg" /></span>
              </base-button>
              <h1 class="text-title-style">Категории</h1>
            </nav>
            <NuxtLink>
              <base-button class="icon-search">
                <img src="/public/icons/search-icon.svg"
              </base-button>
            </NuxtLink>
          </header>
        </template>
      </NuxtLayout>
    </div>
  </section>
</template>

<style scoped>
.for-you__header {
  background: var(--bg-color-main);
  border-radius: var(--size-base);
  margin: var(--size-xs) 0;
}

.for-you__header-nav {
  display: flex;
  align-items: center;
  gap: 0 12px;
}
</style>
