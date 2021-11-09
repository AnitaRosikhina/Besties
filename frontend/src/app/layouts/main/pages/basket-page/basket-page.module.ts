import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketPageRoutingModule } from './basket-page-routing.module';
import {BasketPageComponent} from "./basket-page.component";
import {CommonButtonModule} from "../../../../shared/components/common-button/common-button.module";


@NgModule({
  declarations: [BasketPageComponent],
  imports: [
    CommonModule,
    BasketPageRoutingModule,
    CommonButtonModule
  ]
})
export class BasketPageModule { }
