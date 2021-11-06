import { NgModule } from '@angular/core';
import {CommonModule, DecimalPipe, TitleCasePipe} from '@angular/common';

import { ProductAdditionPageRoutingModule } from './product-addition-page-routing.module';
import {ProductAdditionPageComponent} from "./product-addition-page.component";
import {MatTableModule} from "@angular/material/table";
import {CommonButtonModule} from "../../../../shared/components/common-button/common-button.module";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {SubcategoryService} from "../subcategories-addition-page/services/subcategory.service";
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import {ProductService} from "../../../../shared/services/product.service";

@NgModule({
  declarations: [ProductAdditionPageComponent],
  imports: [
    CommonModule,
    ProductAdditionPageRoutingModule,
    MatTableModule,
    CommonButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [SubcategoryService, ProductService, TitleCasePipe, DecimalPipe]
})
export class ProductAdditionPageModule { }
