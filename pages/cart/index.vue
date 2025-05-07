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
    console.log(dataCart.value.items.length)
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
          <li>
            <div class="item__main">
              <div class="item__main--content">
                <div class="item__img">
                  <img src="@/assets/img/test-img-product.png" />
                </div>
                <div class="item__text">
                  <h2 class="text-title-style">Ключ</h2>
                <h2 class="text-subtitle--bold-style price-text">42 000 P</h2>
                <div class="product__buttons--cart">
                  <button class="switch-btn-del">-</button>
                  <button class="amount-btn" disabled>
                    2
                  </button>
                  <button class="switch-btn-add">+</button>
                </div>
                </div>
              </div>
              <div class="item__main--buttons">
                <h2 class="text-subtitle--bold-style text-color-gray">2x</h2>
                <div class="button__delete">
                  <button><img src="@/assets/img/trash-icon.svg"></button>
                </div>
              </div>
            </div>
            <div class="line"></div>
          </li>
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

.item__main {
  display: flex;
  justify-content: space-between;
}

.item__main img {
  width: 30vw;
  height: 30vw;
  margin-bottom: var(--size-xs);
}

.item__main--content {
  display: flex;
  margin: var(--size-small) 0 0 var(--size-lg);
}

.item__text {
  margin-left: var(--size-lg);
}

.price-text {
  color: var(--text-color-green);
  margin: 2px 0 var(--size-small) 0;
}

.product__buttons--cart {
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
  font-size: 4vw;
  font-weight: 600;
}

.product__buttons--cart button {
  padding: var(--size-lg) var(--size-base);
  background: var(--bg-color-main-opacity);
  color: var(--text-color-main);
  font-family: "Raleway", sans-serif;
  font-variant-numeric: lining-nums proportional-nums;
  text-align: center;
  min-width: 10vw;
}

.switch-btn-del {
  border-radius: var(--size-base) 0 0 var(--size-base);
}

.switch-btn-add {
  border-radius: 0 var(--size-base) var(--size-base) 0;
}

.item__main--buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--size-lg) var(--size-base);
}

.item__main--buttons button {
  width: 10vw;
  height: 10vw;
  background: var(--bg-color-main-opacity);
  border-radius: var(--size-lg);
}

.item__main--buttons button img {
  width: 18px;
  height: 18px;
}

.button__delete {
  margin-top: 3.5vh;
}

.line {
  width: 100%;
  height: 2px;
  background: var(--bg-color-main-opacity);
  margin-top: -5px;
}
</style>
