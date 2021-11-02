export interface IProductRequest {
  title: string
  price: number
  imageUrl: string
  description: string
  category: string
  subcategory: string
}

export interface IProductResponse extends IProductRequest {
  id: string
}
