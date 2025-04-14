<script lang="ts" setup>

</script>

<template>
  <section class="for-you">
    <div class="for-you__content">
      <NuxtLayout name="products" :type-layout="'header-products'">
          <template #header>
            <header class="for-you__header block-header-style block-header-img-style">
              <h1 class="text-title-style">Ваша подборка</h1>
              <NuxtLink to="/for-you"
                ><img src="/public/icons/arrow-icon.svg"
              /></NuxtLink>
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
</style>