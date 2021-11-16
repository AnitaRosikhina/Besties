import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {IBasket} from "../models/basket.model";

@Injectable()
export class BasketService {

  constructor(private http: HttpClient) { }

  add(body: IBasket): Observable<IBasket> {
    return this.http.post<IBasket>(`http://localhost:3000/basket`, body)
  }
}
