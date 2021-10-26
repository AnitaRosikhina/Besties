import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommonButtonComponent} from "./common-button.component";

@NgModule({
  declarations: [CommonButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [CommonButtonComponent]
})
export class CommonButtonModule { }
