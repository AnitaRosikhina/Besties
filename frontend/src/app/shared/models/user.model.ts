import {IProduct} from "./product.model";

export interface IUser {
  name?: string
  email: string
  password: string
  productsInBasket: IProduct[]
}
