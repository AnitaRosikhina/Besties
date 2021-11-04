import { NgModule } from '@angular/core';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import {AdminLayoutComponent} from "./admin-layout.component";
import {AdminHeaderComponent} from "./components/admin-header/admin-header.component";
import {CommonButtonModule} from "../../shared/components/common-button/common-button.module";


@NgModule({
  declarations: [AdminLayoutComponent, AdminHeaderComponent],
  imports: [AdminLayoutRoutingModule, CommonButtonModule]
})
export class AdminLayoutModule { }
