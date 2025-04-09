<script setup lang="ts">
const props = defineProps<{
  configStatus: IStatus
}>()

// todo: grid заебашить + padding поменять font-variant-numeric: lining-nums proportional-nums;
</script>

<template>
  <div
    class="status"
    :class="[
      `${configStatus.status}-status-bg`,
      configStatus.productStatus ? 'status-item' : 'status-category',
    ]"
  >
    <img :src="configStatus.iconSrc" />
    <h2 class="text-subtitle--bold-style">{{ configStatus.titleStatus }}</h2>
  </div>
</template>

<style scoped>
.status {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--size-xs) var(--size-small);
}

.status img {
  width: 3vw;
}

.status h2 {
  font-variant-numeric: lining-nums proportional-nums;
  margin-left: var(--size-xs);
}
</style>
