<script setup lang="ts">
const testData: IStatus = {
  titleStatus: "Новое",
  iconSrc: "/icons/star-icon.svg",
  status: "new",
  productStatus: false,
}

const props = defineProps<{
  isNew: boolean
  iconUrl: string
  name: string
}>()
</script>

<template>
  <li class="category-item item">
    <header class="category-item__img item__img">
      <img :src="iconUrl" />
      <status-item-status
        v-if="isNew"
        class="category-status"
        :configStatus="testData"
      ></status-item-status>
    </header>
    <h2 class="text-subtitle-style">{{ name }}</h2>
  </li>
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
}
</style>
