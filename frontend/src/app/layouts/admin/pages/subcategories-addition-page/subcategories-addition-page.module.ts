import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubcategoriesAdditionPageRoutingModule } from './subcategories-addition-page-routing.module';
import {SubcategoriesAdditionPageComponent} from "./subcategories-addition-page.component";
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [SubcategoriesAdditionPageComponent],
  imports: [
    CommonModule,
    SubcategoriesAdditionPageRoutingModule,
    MatTableModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule
  ]
})
export class SubcategoriesAdditionPageModule {}
