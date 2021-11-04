import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SubcategoriesAdditionPageComponent} from "./subcategories-addition-page.component";

const routes: Routes = [
  {path: '', component: SubcategoriesAdditionPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubcategoriesAdditionPageRoutingModule { }
