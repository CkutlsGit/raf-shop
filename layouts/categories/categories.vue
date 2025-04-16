<script setup lang="ts">
interface IApiCategories {
  categories: ICategories[]
}

const runTimeConfig = useRuntimeConfig()
const categories = useState<ICategories[]>("categories", () => [])

const props = defineProps<{
  typeLayout: boolean
}>()

onMounted(async () => {
  if (!categories.value.length) {
    try {
      const response = await $fetch<IApiCategories>(
        `${runTimeConfig.public.backendUrl}/api/v1/categories`,
        {
          method: "GET",
        }
      )

      categories.value = response.categories
    } catch (error) {
      console.error(error)
    }
  }
})
</script>

<template>
  <slot name="header"></slot>
  <ul
    class="categories__content block-content-style"
    :class="{ 'split-block-style': typeLayout }"
  >
    <template v-for="(category, index) in categories" :key="category.id">
      <category-item-category
        v-if="typeLayout ? true : index < 8"
        :categories="category"
      ></category-item-category>
    </template>
  </ul>
</template>

<style scoped>
.categories__content {
  grid-template-columns: repeat(4, minmax(0, 1fr));
  padding: 12px var(--size-small);
}
</style>
