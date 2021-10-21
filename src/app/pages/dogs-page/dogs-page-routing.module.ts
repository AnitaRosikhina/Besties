import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DogsPageComponent} from "./dogs-page.component";

const routes: Routes = [
  {path: '', component: DogsPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DogsPageRoutingModule { }
