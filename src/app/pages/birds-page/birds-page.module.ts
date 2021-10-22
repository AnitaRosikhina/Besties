import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BirdsPageRoutingModule } from './birds-page-routing.module';
import {BirdsPageComponent} from "./birds-page.component";


@NgModule({
  declarations: [BirdsPageComponent],
  imports: [
    CommonModule,
    BirdsPageRoutingModule
  ]
})
export class BirdsPageModule { }
