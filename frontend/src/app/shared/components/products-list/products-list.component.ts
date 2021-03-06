import {ChangeDetectionStrategy, Component, Input, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {IProduct} from "../../models/product.model";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsListComponent {
  @Input() set products(value: IProduct[]) {
    this._pureProducts = value
    this._products = value
    if (this.sortFunctionName) {
      this._products = this._products?.sort(this[this.sortFunctionName])
    }
    if (this.priceFilter) {
      this._products = this._pureProducts?.filter(el => +el.price >= this.priceFilter.value && +el.price <= this.priceFilter.highValue)
    }
    this.onPageChange({pageIndex: 0, pageSize: 5})
    if (this.paginator) {
      this.paginator.pageIndex = 0
    }
  }

  @Input() set sortBy(funcName: string) {
    this.sortFunctionName = funcName
    if (funcName) {
      this._products = this._products.sort(this[funcName])
      this.onPageChange({pageIndex: 0, pageSize: 5})
      if (this.paginator) {
        this.paginator.pageIndex = 0
      }
    }
  }

  @Input() set filterByPrice(obj) {
    this.priceFilter = obj
    if (this.priceFilter?.value && this.priceFilter?.highValue) {
      this._products = this._pureProducts?.filter(el => +el.price >= this.priceFilter.value && +el.price <= this.priceFilter.highValue)
      this.onPageChange({pageIndex: 0, pageSize: 5})
      if (this.paginator) {
        this.paginator.pageIndex = 0
      }
    }
  }

  @ViewChild(MatPaginator) paginator: MatPaginator

  _pureProducts: IProduct[]
  _products: IProduct[]
  currentProductsToShow: IProduct[]

  sortFunctionName: string
  priceFilter

  onPageChange($event): void {
    this.currentProductsToShow = this._products?.slice($event.pageIndex * $event.pageSize,
      $event.pageIndex * $event.pageSize + $event.pageSize)
  }

  // only for sortBy Input
  priceLowToHigh(a: IProduct, b: IProduct): number {
    return +a.price - +b.price
  }

  priceHighToLow(a: IProduct, b: IProduct): number {
    return +b.price - +a.price
  }

  nameAZ(a: IProduct, b: IProduct): number {
    return a.name < b.name
      ? -1
      : a.name > b.name
        ? 1
        : 0
  }

  nameZA(a: IProduct, b: IProduct): number {
    return a.name > b.name
      ? -1
      : a.name < b.name
        ? 1
        : 0
  }
}
