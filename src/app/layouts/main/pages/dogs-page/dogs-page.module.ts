import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DogsPageRoutingModule } from './dogs-page-routing.module';
import {DogsPageComponent} from "./dogs-page.component";


@NgModule({
  declarations: [DogsPageComponent],
  imports: [
    CommonModule,
    DogsPageRoutingModule
  ]
})
export class DogsPageModule { }
