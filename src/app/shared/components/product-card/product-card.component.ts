import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {IProductRequest, IProductResponse} from "../../models/product";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent implements OnInit {
  @Input() product: IProductRequest
  constructor() { }

  ngOnInit(): void {
  }

  changeCount(product: IProductRequest, status: boolean) {
    if(status) {
      ++product.count
    }
    else if(!status && product.count > 1) {
      --product.count
    }
  }
}
