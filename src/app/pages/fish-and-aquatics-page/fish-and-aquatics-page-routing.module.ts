import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FishAndAquaticsPageComponent} from "./fish-and-aquatics-page.component";

const routes: Routes = [
  {path: '', component: FishAndAquaticsPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FishAndAquaticsPageRoutingModule { }
