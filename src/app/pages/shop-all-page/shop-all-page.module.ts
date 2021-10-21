import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopAllPageRoutingModule } from './shop-all-page-routing.module';
import {ShopAllPageComponent} from "./shop-all-page.component";


@NgModule({
  declarations: [ShopAllPageComponent],
  imports: [
    CommonModule,
    ShopAllPageRoutingModule
  ]
})
export class ShopAllPageModule { }
