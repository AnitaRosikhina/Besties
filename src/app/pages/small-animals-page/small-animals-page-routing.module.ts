import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SmallAnimalsPageComponent} from "./small-animals-page.component";

const routes: Routes = [
  {path: '', component: SmallAnimalsPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmallAnimalsPageRoutingModule { }
