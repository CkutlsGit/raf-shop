<script setup lang="ts"></script>

<template>
  <section class="categories">
    <div class="categories__content">
      <base-search></base-search>
      <NuxtLayout name="categories" :type-layout="true">
        <template #header>
          <header-block name="Категории" link-back="/"></header-block>
        </template>
      </NuxtLayout>
    </div>
  </section>
</template>

<style scoped></style>
