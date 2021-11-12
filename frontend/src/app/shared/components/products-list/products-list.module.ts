import {NgModule} from '@angular/core';
import {ProductsListComponent} from "./products-list.component";
import {ProductCardModule} from "../product-card/product-card.module";
import {CommonModule} from "@angular/common";
import {MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
  declarations: [ProductsListComponent],
  exports: [
    ProductsListComponent
  ],
    imports: [
        ProductCardModule,
        CommonModule,
        MatPaginatorModule
    ]
})
export class ProductsListModule { }
