<script setup lang="ts">
const runTimeConfig = useRuntimeConfig()
const route = useRoute()

const dataCategory = ref<ICategoriesFull>()

onMounted(async () => {
  try {
    const response = await $fetch<ICategoriesFull>(
      `${runTimeConfig.public.backendUrl}/api/v1/products/${route.params.id}`,
      {
        method: "GET",
      }
    )

    dataCategory.value = response
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <section class="categories-list">
    <div class="categories-list__content">
      <NuxtLayout
        name="categories-subcategories"
        :data-category="dataCategory"
      ></NuxtLayout>
    </div>
  </section>
</template>

<style scoped></style>
