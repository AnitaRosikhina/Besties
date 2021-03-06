import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ISubcategory} from "../../../../../shared/models/subcategory.model";

@Injectable()
export class SubcategoryService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<ISubcategory[]> {
    return this.http.get<ISubcategory[]>('http://localhost:3000/subcategory')
  }

  getByCategory(category: string): Observable<ISubcategory[]> {
    return this.http.get<ISubcategory[]>(`http://localhost:3000/subcategory/${category}`)
  }

  create(body: ISubcategory): Observable<ISubcategory> {
    return this.http.post<ISubcategory>('http://localhost:3000/subcategory', body)
  }

  delete(id: string): Observable<ISubcategory> {
    return this.http.delete<ISubcategory>(`http://localhost:3000/subcategory/${id}`)
  }

  edit(id: string, body: ISubcategory): Observable<ISubcategory> {
    return this.http.put<ISubcategory>(`http://localhost:3000/subcategory/${id}`, body)
  }
}
