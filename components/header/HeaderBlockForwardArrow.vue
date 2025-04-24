<script setup lang="ts">
const props = defineProps<{
  name: string | undefined
  linkForward: string
}>()
</script>

<template #header>
  <header class="block-header-style">
    <nav class="block-header--text">
      <h1 class="text-title-style">{{ name }}</h1>
      <slot name="amount"></slot>
    </nav>
    <NuxtLink :to="linkForward">
      <base-button class="icon-arrow">
        <span><img src="/public/icons/arrow-icon.svg" /></span>
      </base-button>
    </NuxtLink>
  </header>
</template>

<style scoped>

</style>
