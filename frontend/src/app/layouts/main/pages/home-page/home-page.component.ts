import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../../../shared/services/products.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  products;
  images = [
    {path: "assets/images/slider/slider_1.webp"},
    {path: "assets/images/slider/slider_2.webp"},
    {path: "assets/images/slider/slider_3.webp"},
  ]
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.products = this.productService.products
  }

}
