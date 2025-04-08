<script setup lang="ts">

</script>

<template>
  <div class="status">
    <img src="/public/icons/star-icon.svg">
    <h2>Новое</h2>
  </div>
</template>

<style scoped>
.status {
  display: flex;
  align-items: center;
  padding: var(--size-xs);
  background: linear-gradient(90deg, #3C53E8 0%, #7DB3F6 100%);
  border-radius: 0 0 6px 6px;
  width: 75px;
}

.status h2 {
  font-weight: 600;
  font-size: var(--size-base);
  margin-left: var(--size-xs);
}
</style>