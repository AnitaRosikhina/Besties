import {Injectable} from '@angular/core';
import {CanLoad, Route, Router, UrlSegment, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {LoginService} from "../services/login.service";

@Injectable()
export class AdminGuard implements CanLoad {

  constructor(private router: Router,
              private loginService: LoginService) {}

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.loginService.getDecodedUser()?.email === 'admin@admin') {
      return true
    } else {
      this.router.navigate([''])
      return false
    }
  }
}
