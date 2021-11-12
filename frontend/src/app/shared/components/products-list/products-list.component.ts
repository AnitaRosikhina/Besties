import {ChangeDetectionStrategy, Component, Input, ViewChild} from '@angular/core';
import {IProduct} from "../../../layouts/admin/pages/product-addition-page/product-addition-page.component";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsListComponent {
  @Input() set products(value: IProduct[]) {
    this._products = value
    this.paginator.pageIndex = 0;
    this.onPageChange({pageIndex: 0, pageSize: 5})
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  _products: IProduct[]
  currentProductsToShow: IProduct[]

  onPageChange($event): void {
    this.currentProductsToShow = this._products?.slice($event.pageIndex * $event.pageSize,
      $event.pageIndex * $event.pageSize + $event.pageSize);
  }
}
