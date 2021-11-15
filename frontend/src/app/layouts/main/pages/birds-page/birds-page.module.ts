import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BirdsPageRoutingModule } from './birds-page-routing.module';
import {BirdsPageComponent} from "./birds-page.component";
import {FilterByModule} from "../../../../shared/components/filter-by/filter-by.module";
import {ProductsListModule} from "../../../../shared/components/products-list/products-list.module";
import {SortByModule} from "../../../../shared/components/sort-by/sort-by.module";
import {ProductService} from "../../../../shared/services/product.service";
import {SubcategoryService} from "../../../admin/pages/subcategories-addition-page/services/subcategory.service";


@NgModule({
  declarations: [BirdsPageComponent],
  imports: [
    CommonModule,
    BirdsPageRoutingModule,
    FilterByModule,
    ProductsListModule,
    SortByModule
  ],
  providers: [ProductService, SubcategoryService]
})
export class BirdsPageModule { }
