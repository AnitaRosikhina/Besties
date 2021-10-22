import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatsPageRoutingModule } from './cats-page-routing.module';
import {CatsPageComponent} from "./cats-page.component";


@NgModule({
  declarations: [CatsPageComponent],
  imports: [
    CommonModule,
    CatsPageRoutingModule
  ]
})
export class CatsPageModule { }
