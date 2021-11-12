import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ProductService} from "../../../../shared/services/product.service";

@Component({
  selector: 'app-shop-all-page',
  templateUrl: './shop-all-page.component.html',
  styleUrls: ['./shop-all-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopAllPageComponent implements OnInit {
  products$;
  categories: string[] = ['Dogs', 'Cats', 'Birds', 'Fish', 'Small Animals', 'Reptiles'];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.products$ = this.productService.getAll()
  }

  filterByCategory(event: string): void {
    this.products$ = this.productService.getByCategory(event)
  }
}
