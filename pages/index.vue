<script setup lang="ts"></script>

<template>
  <section class="main-page">
    <div class="main-page__content">
      <header class="main-page__header">
        <base-search></base-search>
        <base-carousel></base-carousel>
      </header>
      <article class="main-page__categories block-style">
        <NuxtLayout name="categories" :type-layout="false">
          <template #header>
            <header class="categories__header block-header-style">
              <h1 class="text-title-style">Категории</h1>
              <NuxtLink to="/categories">
                <base-button class="icon-arrow">
                  <span><img src="/public/icons/arrow-icon.svg" /></span>
                </base-button>
              </NuxtLink>
            </header>
          </template>
        </NuxtLayout>
      </article>
      <footer class="main-page__for-you block-style">
        <NuxtLayout name="products" :type-layout="false">
          <template #header>
            <header
              class="for-you__header block-header-style block-header-img-style"
            >
              <h1 class="text-title-style">Ваша подборка</h1>
              <NuxtLink to="/for-you"
                ><img src="/public/icons/arrow-icon.svg"
              /></NuxtLink>
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
</style>
