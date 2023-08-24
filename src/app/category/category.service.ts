import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Category} from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl = "http://localhost:5028/";
  apiURL = this.baseUrl + "api/v1/Category";
     
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.apiURL + '/GetAll')
    .pipe(
      catchError(this.errorHandler)
    )
  }
     
  create(category:Category): Observable<any> {
    return this.httpClient.post<Category>(this.apiURL + '/Post', JSON.stringify(category), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
     
  getById(id:number): Observable<Category>  {
    return this.httpClient.get<Category>(`${this.apiURL}/GetById?id=${id}`)
  }
     
  update(category:Category): Observable<any> {
    return this.httpClient.put(`${this.apiURL}/Put?id=${category.id}`, JSON.stringify(category), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
     
  delete(id:number){
    return this.httpClient.delete(`${this.apiURL}/Delete?id=${id}`, this.httpOptions)    
    .pipe(
      catchError(this.errorHandler)
    )
  }    
    
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }

}
