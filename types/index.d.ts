export { IUser, IBanner, IStatus }

declare global {
  interface Window {
    Telegram: {
      WebApp: any
    }
  }
  interface IUser {
    name: string
    username: string
    avatarUrl: string
    balance: number
  }
  interface IBanner {
    id: string
    imgUrl: string
    link: string
  }
  interface IStatus {
    titleStatus: string,
    iconSrc: string,
    status: string,
    productStatus: boolean
  }
}
