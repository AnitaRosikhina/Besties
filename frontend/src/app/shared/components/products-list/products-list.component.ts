import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IProduct} from "../../../layouts/admin/pages/product-addition-page/product-addition-page.component";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsListComponent {
  @Input() products: IProduct[]
}
