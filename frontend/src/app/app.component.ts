import {Component, OnInit} from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";
import {TOKEN_NAME} from "./shared/constants/tokens-name";
import {timer} from "rxjs";
import {LoginService} from "./shared/services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LoginService]
})
export class AppComponent implements OnInit {
  constructor(private jwtHelperService: JwtHelperService,
              private loginService: LoginService,
              private router: Router) {}

  ngOnInit(): void {
    timer(0, 60_000).subscribe(() => {
      if (this.jwtHelperService.isTokenExpired()) {
        this.loginService.logout()
        this.router.navigate([''])
      } else {
        localStorage.setItem(TOKEN_NAME, this.jwtHelperService.tokenGetter())
      }
    })
  }
}
