<script setup lang="ts">
const props = defineProps<{
  configStatus: IStatus
}>()
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
  padding: var(--size-xs);
}

.status h2 {
  font-weight: 600;
  font-size: var(--size-base);
  margin-left: var(--size-xs);
}
</style>
