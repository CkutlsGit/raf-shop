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
      <article class="cart__text">
        <h1>Тут пусто</h1>
        <p>Наполни корзину товарами из каталога</p>
        <div class="cart__button">
          <button>В каталог <span><img src="/public/icons/arrow-icon.svg"></span></button>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.cart__content--clear {
  height: 100%;
}

.cart__text {
  margin-top: 60%;
  text-align: center;
}

.cart__text p {
  margin: 2px 0 var(--size-xs) 0;
}

.cart__button {
  padding-bottom: 110%;
}
</style>