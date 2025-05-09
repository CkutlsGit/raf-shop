<script setup lang="ts">
interface IAuthToken {
  authToken: string
}

interface IPath {
  name: string,
  path?: string
}

const runTimeConfig = useRuntimeConfig()
const emit = defineEmits(["isLoading"])
const userIcon = ref("")

const navRoutes: IPath[]  = [
  {
    name: 'cart',
    path: '/cart'
  }
]

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
      const response = await $fetch<IUser>(
        `${runTimeConfig.public.backendUrl}/api/v1/users/@me`,
        {
          method: "GET",
          headers: {
            Authorization: authToken,
          },
        }
      )

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
    const initData = webApp.initData

    try {
      const { authToken } = await $fetch<IAuthToken>(
        `${runTimeConfig.public.backendUrl}/api/v1/auth/validate-init`,
        {
          method: "POST",
          body: { initData: initData },
        }
      )

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
      <NuxtLink to="/">
        <img class="header__logo" src="@/assets/img/icon.svg" alt="Bobby" />
      </NuxtLink>
      <ul class="header__nav-list">
        <li v-for="(navItem, index) in navRoutes" :key="index">
          <NuxtLink :to="navItem.path">
            <button>
            <span><img :src="`/icons/${navItem.name}-icon.svg`" /></span>
          </button>
          </NuxtLink>
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
  align-items: center;
  justify-content: space-between;
}

.header__logo {
  cursor: pointer;
}

.header__nav-list {
  display: flex;
  gap: 0 var(--size-small);
  list-style: none;
}

.header__nav-list button {
  display: flex;
  justify-content: center;
  width: 48px;
  height: 48px;
  padding: var(--size-base);
  border-radius: var(--size-base);
  background: var(--bg-color-main);
  backdrop-filter: 6px;
  cursor: pointer;
}

.header__nav-list .header__nav-list--user-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
}
</style>
