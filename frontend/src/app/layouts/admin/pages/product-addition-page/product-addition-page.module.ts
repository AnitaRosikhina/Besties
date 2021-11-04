import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductAdditionPageRoutingModule } from './product-addition-page-routing.module';
import {ProductAdditionPageComponent} from "./product-addition-page.component";
import {MatTableModule} from "@angular/material/table";
import {CommonButtonModule} from "../../../../shared/components/common-button/common-button.module";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
  declarations: [ProductAdditionPageComponent],
  imports: [
    CommonModule,
    ProductAdditionPageRoutingModule,
    MatTableModule,
    CommonButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule
  ]
})
export class ProductAdditionPageModule { }
