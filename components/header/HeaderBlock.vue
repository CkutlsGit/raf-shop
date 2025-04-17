<script setup lang="ts">
const props = defineProps<{
  linkBack: string,
  name: string
}>()
</script>

<template>
  <header class="header-block block-header-style block-header-img-style">
    <nav class="header-block__nav">
      <NuxtLink :to="linkBack">
        <base-button class="icon-arrow-back">
          <span><img src="/public/icons/arrow-back-icon.svg" /></span>
        </base-button>
      </NuxtLink>
      <h1 class="text-title-style">{{ name }}</h1>
    </nav>
  </header>
</template>

<style scoped>
.header-block {
  background: var(--bg-color-main);
  border-radius: var(--size-base);
  margin: var(--size-xs) 0;
}

.header-block__nav {
  display: flex;
  align-items: center;
  gap: 0 12px;
}
</style>
