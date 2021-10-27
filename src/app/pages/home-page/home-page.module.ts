import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomePageComponent} from "./home-page.component";
import {HomePageRoutingModule} from "./home-page-routing.module";
import {IvyCarouselModule} from "angular-responsive-carousel";
import {CommonButtonModule} from "../../shared/components/common-button/common-button.module";
import {ProductCardModule} from "../../shared/components/product-card/product-card.module";

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    IvyCarouselModule,
    CommonButtonModule,
    ProductCardModule,
  ]
})
export class HomePageModule { }
