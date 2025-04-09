<script setup lang="ts"></script>

<template>
  <section class="main-page">
    <div class="main-page__content">
      <header class="main-page__header">
        <base-search></base-search>
        <base-carousel></base-carousel>
      </header>
      <article class="main-page__categories block-style">
        <header class="categories__header block-header-style">
          <h1>Категории</h1>
          <base-button>
            <span><img src="/public/icons/arrow-icon.svg" /></span>
          </base-button>
        </header>
        <ul class="categories__content">
          <li><category-item-category></category-item-category></li>
          <li><category-item-category></category-item-category></li>
          <li><category-item-category></category-item-category></li>
          <li><category-item-category></category-item-category></li>
        </ul>
      </article>
      <footer class="main-page__for-you block-style">
        <NuxtLayout name="products">
          <template #header>
            <header class="for-you__header block-header-style">
              <h1>Ваша подборка</h1>
              <img src="/public/icons/arrow-icon.svg" />
            </header>
          </template>
        </NuxtLayout>
      </footer>
    </div>
  </section>
</template>

<style scoped>
.main-page__header img {
  width: 100%;
  height: 100%;
  border-radius: var(--size-base);
  margin: var(--size-xs) 0;
  cursor: pointer;
}

.block-style {
  width: 100%;
  background: var(--bg-color-main);
  border-radius: var(--size-base);
  margin: var(--size-xs) 0;
}

.for-you__header img {
  cursor: pointer;
}

.block-header-style {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--size-lg) var(--size-base);
}

.block-header-style h1 {
  font-size: var(--size-medium);
  font-weight: 600;
}

.categories__content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: var(--size-small);
  gap: 20px 0;
}
</style>
