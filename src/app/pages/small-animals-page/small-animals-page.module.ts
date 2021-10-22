import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmallAnimalsPageRoutingModule } from './small-animals-page-routing.module';
import {SmallAnimalsPageComponent} from "./small-animals-page.component";


@NgModule({
  declarations: [SmallAnimalsPageComponent],
  imports: [
    CommonModule,
    SmallAnimalsPageRoutingModule
  ]
})
export class SmallAnimalsPageModule { }
