<script setup lang="ts"></script>

<template>
  <section class="main-page">
    <div class="main-page__content">
      <header class="main-page__header">
        <base-search></base-search>
        <base-carousel :banners="banners"></base-carousel>
      </header>
      <article class="main-page__categories">
        <header class="categories__header">
          <h1>Категории</h1>
          <base-button>
          <span><img src="/public/icons/arrow-icon.svg"></span>
          </base-button>
        </header>
        <div class="categories__content">
          <category-item-category></category-item-category>
          <category-item-category></category-item-category>
          <category-item-category></category-item-category>
          <category-item-category></category-item-category>
        </div>
      </article>
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

.main-page__categories {
  width: 100%;
  background: var(--bg-color-main);
  border-radius: var(--size-base);
  margin: var(--size-xs) 0;
}

.categories__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--size-base);
}

.categories__header h1 {
  font-size: var(--size-medium);
  font-weight: 600;
}

.categories__content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 8px;
  gap: 10px 0;
}
</style>
