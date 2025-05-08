<script setup lang="ts">
const runTimeConfig = useRuntimeConfig()

const dataCart = ref({} as ICart)

onMounted(async () => {
  const authToken = GetCookie("authtoken")

  if (authToken) {
    const response = await $fetch<ICart>(
      `${runTimeConfig.public.backendUrl}/api/v1/cart`,
      {
        method: "GET",
        headers: {
          Authorization: authToken,
        },
      }
    )

    dataCart.value = response
  }
})
</script>

<template>
  <section class="cart">
    <div
      v-if="dataCart?.items?.length <= 0"
      class="cart__content--clear block-style"
    >
      <HeaderBlockUnsplit name="Корзина" link-back="/"></HeaderBlockUnsplit>
      <article class="cart__text">
        <h1 class="text-subtitle--bold-style">Тут пусто</h1>
        <p class="text-color-gray text-subtitle-style">
          Наполни корзину товарами из <br />
          каталога
        </p>
        <NuxtLink to="/categories">
          <button>В каталог <img src="/public/icons/arrow-icon.svg" /></button>
        </NuxtLink>
      </article>
    </div>
    <div v-else class="cart__content">
      <HeaderBlock name="Корзина" link-back="/">
        <template #amount>
          <h2 class="text-subtitle--bold-style amount-text-style">
            {{ dataCart.items?.length }}
          </h2>
        </template>
      </HeaderBlock>
      <article class="cart__items block-style">
        <ul class="cart__items--list">
          <CartItemCart v-for="(item, index) in dataCart.items" :cart-item="item" :key="item.product.id" :last="index === dataCart.items.length - 1"></CartItemCart>
        </ul>
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

.cart__items--list {
  padding-top: 6px;
}
</style>
