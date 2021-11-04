import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductAdditionPageComponent} from "./product-addition-page.component";

const routes: Routes = [
  {path: '', component: ProductAdditionPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductAdditionPageRoutingModule { }
