import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReptilesPageRoutingModule } from './reptiles-page-routing.module';
import {ReptilesPageComponent} from "./reptiles-page.component";


@NgModule({
  declarations: [ReptilesPageComponent],
  imports: [
    CommonModule,
    ReptilesPageRoutingModule
  ]
})
export class ReptilesPageModule { }
