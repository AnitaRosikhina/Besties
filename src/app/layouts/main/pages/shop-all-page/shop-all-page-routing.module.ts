import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShopAllPageComponent} from "./shop-all-page.component";

const routes: Routes = [
  {path: '', component: ShopAllPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopAllPageRoutingModule { }
