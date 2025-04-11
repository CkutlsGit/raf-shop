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
  interface ICategories {
    id: string,
    name: string,
    iconUrl: string,
    isNew: boolean,
    sub: Array // todo: в будущем интерфейс
  }
  interface IProduct {
    categoryName: string,
    discountPercent: number,
    id: string,
    imgUrl: string,
    inStock: boolean,
    isNew: boolean,
    isPopular: boolean,
    name: string,
    originalPrice: number,
    price: number
  }
  interface IStatus {
    titleStatus: string,
    iconSrc: string,
    status: string,
    productStatus: boolean
  }
}
