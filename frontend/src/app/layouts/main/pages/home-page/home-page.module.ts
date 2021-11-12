import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomePageComponent} from "./home-page.component";
import {HomePageRoutingModule} from "./home-page-routing.module";
import {IvyCarouselModule} from "angular-responsive-carousel";
import {CommonButtonModule} from "../../../../shared/components/common-button/common-button.module";
import {ProductCardModule} from "../../../../shared/components/product-card/product-card.module";
import {ProductService} from "../../../../shared/services/product.service";
import {HttpClientModule} from "@angular/common/http";
import {ProductsListModule} from "../../../../shared/components/products-list/products-list.module";

@NgModule({
  declarations: [HomePageComponent],
    imports: [
        CommonModule,
        HomePageRoutingModule,
        IvyCarouselModule,
        CommonButtonModule,
        ProductCardModule,
        HttpClientModule,
        ProductsListModule
    ],
  providers: [ProductService]
})
export class HomePageModule { }
