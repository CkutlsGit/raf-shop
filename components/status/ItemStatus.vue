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
    <h2 class="text-subtitle--bold-style">{{ configStatus.titleStatus }}</h2>
  </div>
</template>

<style scoped>
.status {
  display: flex;
  align-items: center;
  padding: var(--size-xs);
}

.status h2 {
  margin-left: var(--size-xs);
}

@media (max-width: 355px) {
  .status h2 {
    font-size: 14px;
  }
}
</style>
