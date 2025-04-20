<script setup lang="ts">
const props = defineProps<{
  review: IReview,
  last: boolean
}>()
</script>

<template>
  <li>
    <header class="review">
      <div class="review__user">
        <img :src="review.avatarUrl" />
        <h2 class="text-subtitle--bold-style">{{ review.name }}</h2>
      </div>
      <div class="review__rating">
        <h2 class="text-subtitle--bold-style">{{ review.rating }}</h2>
        <img src="@/assets/img/star-icon.svg" />
      </div>
    </header>
    <article class="review__description" :class="{ 'review__end': last }">
      <p>
        {{ review.comment }}
      </p>
    </article>
    <footer v-if="!last" class="review__footer">
      <div class="review__line"></div>
    </footer>
  </li>
</template>

<style scoped>
.review {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--size-base) var(--size-lg) var(--size-base);
}

.review__user {
  display: flex;
  align-items: center;
}

.review__user img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}

.review__user h2 {
  font-size: 5vw;
  margin-left: 8px;
}

.review__rating {
  display: flex;
  align-items: center;
}

.review__rating h2 {
  font-size: 5vw;
  margin-right: var(--size-xs);
}

.review__description {
  padding: 0 var(--size-base);
}

.review__description p {
  font-size: 5vw;
}

.review__footer {
  width: 100%;
  padding: 0 16px;
  margin: 12px 0;
}

.review__line {
  width: 100%;
  height: 1px;
  background: var(--text-color-main);
  opacity: 0.2;
}

.review__end {
  padding-bottom: 12px;
}
</style>
