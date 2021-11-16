import {Injectable} from '@angular/core';
import {IUser} from "../models/user.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";
import {LOGGED_USER_ID, TOKEN_NAME} from "../constants/tokens-name";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable()
export class LoginService {

  constructor(private http: HttpClient,
              private jwtHelperService: JwtHelperService) {
  }

  register(body: IUser): Observable<IUser> {
    return this.http.post<IUser>('http://localhost:3000/auth/register', body)
  }

  login(body: IUser): Observable<{ access_token: string }> {
    return this.http.post<{ access_token: string }>('http://localhost:3000/auth/login', body)
      .pipe(
        tap(response => {
          localStorage.setItem(TOKEN_NAME, response.access_token)
        })
      )
  }

  logout(): void {
    localStorage.removeItem(TOKEN_NAME)
    localStorage.removeItem(LOGGED_USER_ID)
  }

  getUser(email: string): Observable<IUser> {
    return this.http.get<IUser>(`http://localhost:3000/auth/user/${email}`)
  }

  getDecodedUser(): IUser | null {
    return this.jwtHelperService.decodeToken()
  }

  getUserId(): string {
    return localStorage.getItem(LOGGED_USER_ID)
  }
}
