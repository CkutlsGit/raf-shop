<script setup lang="ts">
const navArray: Array<string> = ["search", "cart"];

onMounted(() => {
  waitForTelegramWebApp();
});

const waitForTelegramWebApp = (): void => {
  const intervalId = setInterval(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      clearInterval(intervalId);
      checkTelegramWebApp();
    }
  }, 100);
};

const checkTelegramWebApp = async (): Promise<void> => {
  const webApp = window.Telegram.WebApp;

  if (webApp) {
    console.log("Есть");
    const initData = webApp.initData;

    console.log(initData);

    try {
      const data = await useFetch("/api/authorize", {
        method: "POST",
        body: { initData: initData },
      });
      console.log("Отправлено");
      console.log(data);
    } 
    catch (error) {
      console.error("Ошибка при отправке запроса:", error);
    }
  } 
  else {
    console.log("Нет");
  }
};
</script>

<template>
  <header class="header">
    <nav class="header__content">
      <img src="@/assets/img/icon.svg" alt="Bobby" />
      <ul class="header__nav-list">
        <li v-for="(navItem, index) in navArray" :key="index">
          <button class="base-button">
            <span><img :src="`/icons/${navItem}-icon.svg`" /></span>
          </button>
        </li>
        <img src="@/assets/img/user-icon.svg" />
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  padding: var(--size-base);
  background: var(--bg-color-main);
  border-radius: 0 0 var(--size-base) var(--size-base);
}

.header__content {
  display: flex;
  justify-content: space-between;
}

.header__nav-list {
  display: flex;
  gap: 0 8px;
  list-style: none;
}
</style>
