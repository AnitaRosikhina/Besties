import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ShopAllPageRoutingModule} from './shop-all-page-routing.module';
import {ShopAllPageComponent} from "./shop-all-page.component";
import {ProductsListModule} from "../../../../shared/components/products-list/products-list.module";
import {ProductService} from "../../../../shared/services/product.service";
import {FilterByModule} from "../../../../shared/components/filter-by/filter-by.module";
import {SortByModule} from "../../../../shared/components/sort-by/sort-by.module";
import {SubcategoryService} from "../../../admin/pages/subcategories-addition-page/services/subcategory.service";


@NgModule({
  declarations: [ShopAllPageComponent],
  imports: [
    CommonModule,
    ShopAllPageRoutingModule,
    ProductsListModule,
    FilterByModule,
    SortByModule
  ],
  providers: [
    ProductService,
    SubcategoryService]
})
export class ShopAllPageModule {
}
