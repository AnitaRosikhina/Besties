import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DogsPageRoutingModule} from './dogs-page-routing.module';
import {DogsPageComponent} from "./dogs-page.component";
import {ProductCardModule} from "../../../../shared/components/product-card/product-card.module";
import {ProductService} from "../../../../shared/services/product.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [DogsPageComponent],
  imports: [
    CommonModule,
    DogsPageRoutingModule,
    ProductCardModule,
    HttpClientModule
  ],
  providers: [ProductService]
})
export class DogsPageModule {
}
