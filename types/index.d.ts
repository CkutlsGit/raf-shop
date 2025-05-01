export { IUser, IBanner, IStatus }

declare global {
  interface Window {
    Telegram: {
      WebApp: any
    }
  }
  interface IBase {
    name: string,
    id: string
  }
  interface IBaseCategory {
    description: string,
    products: IProduct[]
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
  interface ICategories extends IBase {
    iconUrl: string,
    isNew: boolean,
  }
  interface ISubCategories extends IBase, IBaseCategory {}
  interface ICategoriesFull extends ICategories, IBaseCategory {
    subCategories: ISubCategories[]
  }
  interface IProduct extends IBase {
    categoryName: string,
    discountPercent?: number,
    imgUrl: string,
    inStock: boolean,
    isNew: boolean,
    isPopular: boolean,
    originalPrice?: number,
    price: number
  }
  interface IProductCard extends IBase {
    description: string,
    categoryId: string,
    imgUrls: Array<string>,
    price: number,
    originalPrice?: number,
    discountPercent?: number,
    inStock: false,
    rating: number,
    reviews: IReview[]
  }
  interface IReview extends IBase {
    avatarUrl: string,
    comment: string,
    createdAtUtc: string,
    rating: number
  }
  interface ICartProudct extends IBase {
    imgUrl: string,
    price: number,
    originalPrice: number
  }
  interface ICartItem {
    product: ICartProudct,
    quantity: number,
    totalPrice: number,
    totalDiscount: number
  }
  interface ICart {
    totalPrice: number,
    totalDiscount: number,
    items: ICartItem[]
  }
  interface IStatus {
    titleStatus: string,
    iconSrc: string,
    status: string,
    productStatus: boolean
  }
}
