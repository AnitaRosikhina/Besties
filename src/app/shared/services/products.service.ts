import { Injectable } from '@angular/core';
import {IProductRequest} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: IProductRequest[] = [
    {
     title: "I'm product" ,
     price: 5,
     imageUrl: 'https://static.wixstatic.com/media/84770f_27102e864f2544e2b22efc83a096eede~mv2_d_1920_1920_s_2.jpg/v1/fill/w_309,h_309,al_c,q_80,usm_0.66_1.00_0.01/84770f_27102e864f2544e2b22efc83a096eede~mv2_d_1920_1920_s_2.webp',
     count: 1,
    },
    {
      title: "I'm product",
      price: 5,
      imageUrl: 'https://static.wixstatic.com/media/84770f_27102e864f2544e2b22efc83a096eede~mv2_d_1920_1920_s_2.jpg/v1/fill/w_309,h_309,al_c,q_80,usm_0.66_1.00_0.01/84770f_27102e864f2544e2b22efc83a096eede~mv2_d_1920_1920_s_2.webp',
      count: 1,
    }
  ]
  constructor() { }
}
