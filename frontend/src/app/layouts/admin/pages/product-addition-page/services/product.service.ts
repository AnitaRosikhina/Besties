import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProduct} from "../product-addition-page.component";

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  create(body: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>('http://localhost:3000/product', body)
  }

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('http://localhost:3000/product')
  }

  delete(id: string): Observable<IProduct> {
    return this.http.delete<IProduct>(`http://localhost:3000/product/${id}`)
  }

  edit(id: string, body: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`http://localhost:3000/product/${id}`, body)
  }
}
