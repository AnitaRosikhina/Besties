import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DogsPageRoutingModule} from './dogs-page-routing.module';
import {DogsPageComponent} from "./dogs-page.component";
import {ProductCardModule} from "../../../../shared/components/product-card/product-card.module";
import {ProductService} from "../../../../shared/services/product.service";
import {HttpClientModule} from "@angular/common/http";
import {FilterByModule} from "../../../../shared/components/filter-by/filter-by.module";
import {SortByModule} from "../../../../shared/components/sort-by/sort-by.module";
import {ProductsListModule} from "../../../../shared/components/products-list/products-list.module";
import {SubcategoryService} from "../../../admin/pages/subcategories-addition-page/services/subcategory.service";


@NgModule({
  declarations: [DogsPageComponent],
  imports: [
    CommonModule,
    DogsPageRoutingModule,
    ProductCardModule,
    HttpClientModule,
    FilterByModule,
    SortByModule,
    ProductsListModule
  ],
  providers: [ProductService, SubcategoryService]
})
export class DogsPageModule {
}
