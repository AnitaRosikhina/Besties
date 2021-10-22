import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReptilesPageComponent} from "./reptiles-page.component";

const routes: Routes = [
  {path: '', component: ReptilesPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReptilesPageRoutingModule { }
