<script setup lang="ts">
const runTimeConfig = useRuntimeConfig()
const props = defineProps<{
  inStock: boolean,
  productId: string
}>()

const cartClick = ref<boolean>(false)
const amountProduct = ref<number>(1)

const changedAmountProduct = (type: string): any => {
  switch (type) {
    case "del":
      if (amountProduct.value > 1) return amountProduct.value--
      return (cartClick.value = !cartClick.value)
    case "add":
      return amountProduct.value++
    default:
      break
  }
}

const clickBuyButton = async (): Promise<void> => {
  try {
    const authToken = GetCookie('authtoken')

    if (authToken) {
      const response = await $fetch(`${ runTimeConfig.public.backendUrl }/api/v1/cart/${ props.productId }`, {
      method: 'POST',
      headers: {
        'Authorization': authToken
      },
      body: JSON.stringify({ quantity: amountProduct.value })
    })

    await navigateTo('/cart')
    }
  }
  catch(error) {
    console.error(error)
  }
}
</script>

<template>
  <section class="product__buttons">
    <div class="product__buttons--content">
      <article class="product__buttons--main" v-if="!inStock">
        <button @click="clickBuyButton" class="buy-btn">Купить сейчас</button>
        <button
          @click="cartClick = !cartClick"
          v-if="!cartClick"
          class="cart-btn button-bg-default"
        >
          В корзину
        </button>
        <div v-else class="product__buttons--cart">
          <button @click="changedAmountProduct('del')" class="switch-btn-del">
            -
          </button>
          <button class="amount-btn" disabled>{{ amountProduct }}</button>
          <button @click="changedAmountProduct('add')" class="switch-btn-add">
            +
          </button>
        </div>
      </article>
      <button v-else class="instock-btn button-bg-default">
        Нет в наличии
      </button>
    </div>
  </section>
</template>

<style scoped>
.product__buttons {
  width: 100%;
  background: var(--bg-color-main-opacity);
  backdrop-filter: blur(6px);
  border-radius: var(--size-base) var(--size-base) 0 0;
  position: fixed;
  z-index: 10;
  bottom: 0;
}

.button-bg-default {
  background: var(--bg-color-main-opacity);
}

.product__buttons--main {
  display: flex;
  justify-content: center;
  gap: 0 var(--size-small);
  padding: var(--size-base);
}

.product__buttons--main button {
  width: 100%;
  padding: var(--size-lg) var(--size-base);
  border-radius: var(--size-base);
  color: var(--text-color-main);
  font-size: 4vw;
  font-weight: 600;
  font-family: "Raleway", sans-serif;
  font-variant-numeric: lining-nums proportional-nums;
  cursor: pointer;
}

.buy-btn {
  background: var(--bg-color-button-submit);
}

.product__buttons--cart {
  display: flex;
  align-items: center;
  width: 100%;
}

.product__buttons--cart button {
  border-radius: 0;
  background: var(--bg-color-main-opacity);
}

.switch-btn-del {
  border-radius: var(--size-base) 0 0 var(--size-base) !important;
}

.switch-btn-add {
  border-radius: 0 var(--size-base) var(--size-base) 0 !important;
}
</style>
