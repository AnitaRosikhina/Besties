import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductCardComponent} from "./product-card.component";
import {CommonButtonModule} from "../common-button/common-button.module";
import {ProductModalModule} from "../product-modal/product-modal.module";
import {MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  declarations: [ProductCardComponent],
  exports: [
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    CommonButtonModule,
    ProductModalModule,
    MatSnackBarModule
  ]
})
export class ProductCardModule {

  constructor() {
  }
}
