import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductModalComponent} from "./product-modal.component";
import {CommonButtonModule} from "../common-button/common-button.module";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [ProductModalComponent],
  imports: [
    CommonModule,
    CommonButtonModule,
    MatDialogModule
  ]
})
export class ProductModalModule { }
