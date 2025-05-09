<script setup lang="ts">
const props = defineProps<{
  cartItem: ICartItem,
  last: boolean
}>()
</script>

<template>
  <li>
    <div class="item__main">
      <div class="item__main--content">
        <div class="item__img">
          <img :src="cartItem.product.imgUrl" />
        </div>
        <div class="item__text">
          <h2 class="text-title-style item-title">{{ cartItem.product.name }}</h2>
          <h2 class="text-subtitle--bold-style price-text">{{ cartItem.product.price }} P</h2>
          <div class="product__buttons--cart">
            <button class="switch-btn-del">-</button>
            <button class="amount-btn" disabled>{{ cartItem.quantity }}</button>
            <button class="switch-btn-add">+</button>
          </div>
        </div>
      </div>
      <div class="item__main--buttons">
        <h2 class="text-subtitle--bold-style text-color-gray">{{ cartItem.quantity }}x</h2>
        <div class="button__delete">
          <button><img src="@/assets/img/trash-icon.svg" /></button>
        </div>
      </div>
    </div>
    <div v-if="!last" class="line"></div>
  </li>
</template>

<style scoped>
.item__main {
  display: flex;
  justify-content: space-between;
  margin: 6px 4px 12px 4px;
}

.item__main img {
  width: 25vw;
  height: 25vw;
}

.item__main--content {
  display: flex;
  margin: var(--size-small) 0 0 var(--size-lg);
}

.item__text {
  margin-left: var(--size-lg);
}

.item-title {
  width: 40vw;
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
}

.product__buttons--cart button {
  padding: var(--size-lg) var(--size-base);
  background: var(--bg-color-main-opacity);
  color: var(--text-color-main);
  font-family: "Raleway", sans-serif;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 4vw;
  font-weight: 600;
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
  width: 90%;
  height: 2px;
  background: var(--bg-color-main-opacity);
  margin: -5px auto 0 auto;
}
</style>
