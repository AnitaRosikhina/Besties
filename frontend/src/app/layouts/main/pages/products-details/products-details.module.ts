import {NgModule} from '@angular/core';

import {ProductsDetailsRoutingModule} from './products-details-routing.module';
import {ProductsDetailsComponent} from "./products-details.component";
import {ProductService} from "../../../../shared/services/product.service";
import {CommonModule} from "@angular/common";
import {CommonButtonModule} from "../../../../shared/components/common-button/common-button.module";
import {MatExpansionModule} from "@angular/material/expansion";


@NgModule({
  declarations: [ProductsDetailsComponent],
  imports: [
    ProductsDetailsRoutingModule,
    CommonModule,
    CommonButtonModule,
    MatExpansionModule,
  ],
  providers: [ProductService]
})
export class ProductsDetailsModule { }
