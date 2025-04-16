<script setup lang="ts">
const newStatus: IStatus = {
  titleStatus: "Новое",
  iconSrc: "/icons/star-icon.svg",
  status: "new",
  productStatus: false,
}

const props = defineProps<{
  categories: ICategories
}>()
</script>

<template>
  <NuxtLink :to="`/categories/${ categories.id }`">
    <li class="category-item item">
    <header class="category-item__img item__img">
      <img :src="categories.iconUrl" />
      <status-item-status
        v-if="categories.isNew"
        class="category-status"
        :configStatus="newStatus"
      ></status-item-status>
    </header>
    <h2 class="text-subtitle-style">{{ categories.name }}</h2>
  </li>
  </NuxtLink>
</template>

<style scoped>
.category-item {
  text-align: center;
}

.category-status {
  position: absolute;
  bottom: 0;
  left: 0;
}

.category-item h2 {
  margin: var(--size-xs) auto 0 auto;
  word-wrap: break-word;
  color: var(--text-color-main);
  font-weight: 500;
}
</style>
