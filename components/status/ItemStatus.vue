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
    <h2>{{ configStatus.titleStatus }}</h2>
  </div>
</template>

<style scoped>
.status {
  display: flex;
  align-items: center;
  padding: var(--size-xs) var(--size-small);
}

.status img {
  width: 3vw;
}

.status h2 {
  font-size: 4vw;
  font-weight: 600;
  margin-left: var(--size-small);
}
</style>
