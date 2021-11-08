import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatsPageRoutingModule } from './cats-page-routing.module';
import {CatsPageComponent} from "./cats-page.component";
import {FilterByModule} from "../../../../shared/components/filter-by/filter-by.module";
import {ProductsListModule} from "../../../../shared/components/products-list/products-list.module";
import {SortByModule} from "../../../../shared/components/sort-by/sort-by.module";
import {ProductService} from "../../../../shared/services/product.service";
import {SubcategoryService} from "../../../admin/pages/subcategories-addition-page/services/subcategory.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [CatsPageComponent],
  imports: [
    CommonModule,
    CatsPageRoutingModule,
    FilterByModule,
    ProductsListModule,
    SortByModule,
    HttpClientModule
  ],
  providers: [ProductService, SubcategoryService]
})
export class CatsPageModule { }
