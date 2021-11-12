import {NgModule} from '@angular/core';

import {MainRoutingModule} from './main-routing.module';
import {MainComponent} from "./main.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {HeaderComponent} from "../../shared/components/header/header.component";
import {FooterComponent} from "../../shared/components/footer/footer.component";
import {LoginModalComponent} from "../../shared/components/login-modal/login-modal.component";
import {RegistrationModalComponent} from "../../shared/components/registration-modal/registration-modal.component";
import {CommonModule} from "@angular/common";
import {MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    LoginModalComponent,
    RegistrationModalComponent
  ],
  imports: [
    MainRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    CommonModule,
    MatSnackBarModule
  ]
})
export class MainModule {}
