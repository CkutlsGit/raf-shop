<script setup lang="ts"></script>

<template>
  <section class="for-you">
    <div class="for-you__content">
      <NuxtLayout name="products" :type-layout="true">
        <template #header>
          <header-block name="Ваша подборка" link-back="/"></header-block>
        </template>
      </NuxtLayout>
    </div>
  </section>
</template>

<style scoped></style>
