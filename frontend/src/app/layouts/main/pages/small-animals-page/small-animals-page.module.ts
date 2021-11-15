import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmallAnimalsPageRoutingModule } from './small-animals-page-routing.module';
import {SmallAnimalsPageComponent} from "./small-animals-page.component";
import {ProductService} from "../../../../shared/services/product.service";
import {SubcategoryService} from "../../../admin/pages/subcategories-addition-page/services/subcategory.service";


@NgModule({
  declarations: [SmallAnimalsPageComponent],
  imports: [
    CommonModule,
    SmallAnimalsPageRoutingModule
  ],
  providers: [ProductService, SubcategoryService]
})
export class SmallAnimalsPageModule { }
