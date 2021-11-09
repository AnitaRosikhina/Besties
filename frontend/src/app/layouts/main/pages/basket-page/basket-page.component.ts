import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {IProduct} from "../../../admin/pages/product-addition-page/product-addition-page.component";

@Component({
  selector: 'app-basket-page',
  templateUrl: './basket-page.component.html',
  styleUrls: ['./basket-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasketPageComponent implements OnInit {
  @Input() product: IProduct
  count = 1;

  constructor() { }

  ngOnInit(): void {
  }

  changeCount(product: IProduct, increase: boolean) {
    if(increase) {
      ++this.count
    } else if(!increase && this.count > 1) {
      --this.count
    }
  }

}
