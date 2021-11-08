import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketPageRoutingModule } from './basket-page-routing.module';
import {BasketPageComponent} from "./basket-page.component";


@NgModule({
  declarations: [BasketPageComponent],
  imports: [
    CommonModule,
    BasketPageRoutingModule
  ]
})
export class BasketPageModule { }
