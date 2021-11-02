import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductModalComponent} from "./product-modal.component";
import {CommonButtonModule} from "../common-button/common-button.module";
import {MatDialogModule} from "@angular/material/dialog";
import {ProductsDetailsRoutingModule} from "../../../pages/products-details/products-details-routing.module";

@NgModule({
  declarations: [ProductModalComponent],
  imports: [
    CommonModule,
    CommonButtonModule,
    MatDialogModule,
    ProductsDetailsRoutingModule
  ]
})
export class ProductModalModule { }
