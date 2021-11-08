import {NgModule} from '@angular/core';
import {SortByComponent} from "./sort-by.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
  imports: [
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule
  ],
  exports: [
    SortByComponent
  ],
  declarations: [SortByComponent]
})
export class SortByModule { }
