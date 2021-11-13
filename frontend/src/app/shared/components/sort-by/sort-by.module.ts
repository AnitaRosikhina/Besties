import {NgModule} from '@angular/core';
import {SortByComponent} from "./sort-by.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {CommonModule} from "@angular/common";


@NgModule({
  imports: [
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    CommonModule
  ],
  exports: [
    SortByComponent
  ],
  declarations: [SortByComponent]
})
export class SortByModule {
}
