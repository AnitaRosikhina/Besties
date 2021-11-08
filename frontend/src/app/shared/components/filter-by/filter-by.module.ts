import {NgModule} from '@angular/core';
import {FilterByComponent} from "./filter-by.component";
import {MatExpansionModule} from "@angular/material/expansion";
import {NgxSliderModule} from "@angular-slider/ngx-slider";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [FilterByComponent],
  exports: [
    FilterByComponent
  ],
  imports: [
    MatExpansionModule,
    NgxSliderModule,
    FormsModule,
    CommonModule,
  ]
})
export class FilterByModule {
}
