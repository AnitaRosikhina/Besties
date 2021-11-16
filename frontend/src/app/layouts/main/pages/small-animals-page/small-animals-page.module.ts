import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmallAnimalsPageRoutingModule } from './small-animals-page-routing.module';
import {SmallAnimalsPageComponent} from "./small-animals-page.component";
import {ProductService} from "../../../../shared/services/product.service";
import {SubcategoryService} from "../../../admin/pages/subcategories-addition-page/services/subcategory.service";
import {FilterByModule} from "../../../../shared/components/filter-by/filter-by.module";
import {SortByModule} from "../../../../shared/components/sort-by/sort-by.module";
import {ProductsListModule} from "../../../../shared/components/products-list/products-list.module";


@NgModule({
  declarations: [SmallAnimalsPageComponent],
  imports: [
    CommonModule,
    SmallAnimalsPageRoutingModule,
    FilterByModule,
    SortByModule,
    ProductsListModule
  ],
  providers: [ProductService, SubcategoryService]
})
export class SmallAnimalsPageModule { }
