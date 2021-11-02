import { NgModule } from '@angular/core';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import {AdminLayoutComponent} from "./admin-layout.component";


@NgModule({
  declarations: [AdminLayoutComponent],
  imports: [AdminLayoutRoutingModule]
})
export class AdminLayoutModule { }
