import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProduct} from "../../layouts/admin/pages/product-addition-page/product-addition-page.component";

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('http://localhost:3000/product')
  }

  getById(id: string): Observable<IProduct> {
   return this.http.get<IProduct>(`http://localhost:3000/product/id/${id}`)
  }

  getByCategory(category: string): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`http://localhost:3000/product/${category}`);
  }

  getByCategoryAndSubCategory(category: string, subcategory: string): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`http://localhost:3000/product/${category}/${subcategory}`);
  }

  create(body: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>('http://localhost:3000/product', body)
  }

  edit(id: string, body: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`http://localhost:3000/product/${id}`, body)
  }

  delete(id: string): Observable<IProduct> {
    return this.http.delete<IProduct>(`http://localhost:3000/product/${id}`)
  }
}
