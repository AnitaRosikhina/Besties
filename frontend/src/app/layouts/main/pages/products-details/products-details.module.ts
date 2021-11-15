import {NgModule} from '@angular/core';

import {ProductsDetailsRoutingModule} from './products-details-routing.module';
import {ProductsDetailsComponent} from "./products-details.component";


@NgModule({
  declarations: [ProductsDetailsComponent],
  imports: [
    ProductsDetailsRoutingModule,
  ]
})
export class ProductsDetailsModule { }
