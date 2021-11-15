import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReptilesPageRoutingModule } from './reptiles-page-routing.module';
import {ReptilesPageComponent} from "./reptiles-page.component";
import {ProductService} from "../../../../shared/services/product.service";
import {SubcategoryService} from "../../../admin/pages/subcategories-addition-page/services/subcategory.service";


@NgModule({
  declarations: [ReptilesPageComponent],
  imports: [
    CommonModule,
    ReptilesPageRoutingModule
  ],
  providers: [ProductService, SubcategoryService]
})
export class ReptilesPageModule { }
