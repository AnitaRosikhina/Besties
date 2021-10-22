import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CatsPageComponent} from "./cats-page.component";

const routes: Routes = [
  {path: '', component: CatsPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatsPageRoutingModule { }
