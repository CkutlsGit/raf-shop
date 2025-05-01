<script setup lang="ts">
const runTimeConfig = useRuntimeConfig()

const dataCart = ref<ICart>()

onMounted(async () => {
  const authToken = GetCookie('authtoken')

  if (authToken) {
    const response = await $fetch<ICart>(`${ runTimeConfig.public.backendUrl }/api/v1/cart`, {
    method: 'GET',
    headers: {
      'Authorization': authToken
    }
  })

  dataCart.value = response
  }
})
</script>

<template>
  <section class="cart">
    <div class="cart__content--clear block-style">
      <HeaderBlockUnsplit name="Корзина" link-back="/"></HeaderBlockUnsplit>
    </div>
  </section>
</template>

<style scoped>

</style>