export interface IProductRequest {
  title: string;
  price: number;
  imageUrl: string;
  count: number;
}

export interface IProductResponse {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  count: number;
}
