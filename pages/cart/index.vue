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
        <h1 class="text-subtitle--bold-style">Тут пусто</h1>
        <p class="text-color-gray text-subtitle-style">Наполни корзину товарами из <br> каталога</p>
        <NuxtLink to="/categories">
          <button>В каталог <img src="/public/icons/arrow-icon.svg"></button>
        </NuxtLink>
      </article>
    </div>
  </section>
</template>

<style scoped>
.cart__content--clear {
  height: 100vh;
  margin-bottom: 0;
}

.cart__text {
  margin-top: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.cart__text p {
  margin: 2px 0 var(--size-xs) 0;
}

.cart__text button {
  display: flex;
  align-items: center;
  background: var(--bg-color-main-opacity);
  border-radius: 24px;
  color: white;
  font-weight: 600;
  font-family: "Raleway", sans-serif;
  padding: var(--size-small) var(--size-base);
}

.cart__text button img {
  margin-left: var(--size-small);
}
</style>