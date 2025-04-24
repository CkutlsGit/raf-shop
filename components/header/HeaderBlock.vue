<script setup lang="ts">
const props = defineProps<{
  linkBack: string
  name: string | any
}>()
</script>

<template>
  <header class="header-block  block-header-img-style">
    <nav class="header-block__nav block-header-style">
      <div class="block-header--text">
        <NuxtLink :to="linkBack">
        <base-button class="icon-arrow-back">
          <span><img src="/public/icons/arrow-back-icon.svg" /></span>
        </base-button>
      </NuxtLink>
      <h1 class="text-title-style">{{ name }}</h1>
      <slot name="amount"></slot>
      </div>
      <slot name="rating"></slot>
    </nav>
  </header>
</template>

<style scoped>
.header-block {
  background: var(--bg-color-main);
  border-radius: var(--size-base);
  margin: var(--size-xs) 0;
}

.block-header--text h1 {
  margin-left: var(--size-lg);
}
</style>
