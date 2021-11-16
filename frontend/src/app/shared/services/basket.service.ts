import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {IBasket} from "../models/basket.model";

@Injectable()
export class BasketService {

  constructor(private http: HttpClient) { }

  getAllByUserId(userId: string): Observable<IBasket[]> {
    return this.http.get<IBasket[]>(`http://localhost:3000/basket/${userId}`)
  }

  add(body: IBasket): Observable<IBasket> {
    return this.http.post<IBasket>(`http://localhost:3000/basket`, body)
  }

  checkout(userId: string): Observable<IBasket[]> {
    return this.http.delete<IBasket[]>(`http://localhost:3000/basket/checkout/${userId}`)
  }

  removeById(userId: string, id: string): Observable<IBasket> {
    return this.http.delete<IBasket>(`http://localhost:3000/basket/deleteOne/${userId}/${id}`)
  }
}
