<script setup lang="ts">
const emit = defineEmits(["isLoading"])
const userIcon = ref("")

const navArray: Array<string> = ["search", "cart"]

onMounted((): void => {
  const authToken: string | null = GetCookie("authtoken")

  if (!authToken) {
    waitForTelegramWebApp()
  } else {
    getUserInfo(authToken)
  }
})

const waitForTelegramWebApp = (): void => {
  const intervalId = setInterval(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      clearInterval(intervalId)
      checkTelegramWebApp()
    }
  }, 100)
}

const getUserInfo = async (authToken: string | null): Promise<void> => {
  if (authToken) {
    try {
      const response = await $fetch("/api/userget", {
        method: "GET",
        headers: {
          Authorization: authToken,
        },
      })

      if (response.avatarUrl) {
        userIcon.value = response.avatarUrl
        emit("isLoading")
      }
    } catch (error) {
      console.log(error)
    }
  }
}

const checkTelegramWebApp = async (): Promise<void> => {
  const webApp = window.Telegram.WebApp

  if (webApp) {
    // const initData = webApp.initData // todo: save в куки, юзать апи @me
    const initData =
      "user=%7B%22id%22%3A1489217333%2C%22first_name%22%3A%22%D0%9A%D0%BE%D1%81%D1%82%D1%8F%E2%81%B4%C2%B2%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22Ckutls%22%2C%22language_code%22%3A%22ru%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2FW588Ba5495X8JJOkSekRU7SXfZvDKEKh5J49ZbzWUkg.svg%22%7D&chat_instance=-7909583542551606960&chat_type=sender&auth_date=1743956874&signature=qv6cEGW430uPGDqcU5jMmyEmAhXD0kZpfAA39QjjpJJ-Lm6jnN7pII3ySFs7gD3c5C8NMHSFhb8vo-a165foDg&hash=440af4f7516212755f960c1d4a91351415e2bdc6f8a8f08bf986c587f8d406d0"

    try {
      const { authToken } = await $fetch("/api/authorize", {
        method: "POST",
        body: { initData: initData },
      })

      SetCookie("authtoken", authToken)

      getUserInfo(authToken)
    } catch (error) {
      console.error("Ошибка при отправке запроса:", error)
    }
  }
}
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
        <img class="header__nav-list--user-icon" :src="userIcon" />
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

.header__nav-list .header__nav-list--user-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
}
</style>
