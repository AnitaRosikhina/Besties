import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FishAndAquaticsPageRoutingModule } from './fish-and-aquatics-page-routing.module';
import {FishAndAquaticsPageComponent} from "./fish-and-aquatics-page.component";


@NgModule({
  declarations: [FishAndAquaticsPageComponent],
  imports: [
    CommonModule,
    FishAndAquaticsPageRoutingModule
  ]
})
export class FishAndAquaticsPageModule { }
