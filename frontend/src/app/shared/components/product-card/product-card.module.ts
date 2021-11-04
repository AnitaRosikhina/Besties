import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductCardComponent} from "./product-card.component";
import {CommonButtonModule} from "../common-button/common-button.module";
import {ProductModalModule} from "../product-modal/product-modal.module";

@NgModule({
  declarations: [ProductCardComponent],
  exports: [
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    CommonButtonModule,
    ProductModalModule
  ]
})
export class ProductCardModule {
}