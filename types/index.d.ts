export { IUser }

declare global {
  interface Window {
    Telegram: {
      WebApp: any
    }
  }
  interface IUser {
    name: string
    username: string
    avatar: string
    balance: number
  }
}
