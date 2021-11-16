import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {JwtModule} from "@auth0/angular-jwt";
import {TOKEN_NAME} from "./shared/constants/tokens-name";
import {AdminGuard} from "./shared/guards/admin.guard";
import {LoginService} from "./shared/services/login.service";
import {BasketService} from "./shared/services/basket.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem(TOKEN_NAME)
        }
      }
    })
  ],
  bootstrap: [AppComponent],
  providers: [AdminGuard, LoginService, BasketService]
})
export class AppModule { }
