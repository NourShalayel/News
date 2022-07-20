import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {News} from "../models/news";
import {Category} from "../models/category";
import {catchError, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private baseUrl : string = `http://localhost:3000`;
  constructor(private http : HttpClient) { }

  public getAllNews(){
    let dataUrl : string = `${this.baseUrl}/news`
    return this.http.get<any[]>(dataUrl).pipe(catchError(this.handleError));

  }

  public getAllCategories(){
    let dataUrl : string = `${this.baseUrl}/categories`
    return this.http.get<Category[]>(dataUrl).pipe(catchError(this.handleError));
  }


  getNewsById(id : any){
    let dataUrl : string = `${this.baseUrl}/news/`+id
    return this.http.get<any[]>(dataUrl).pipe(catchError(this.handleError));
  }
  public handleError(error : HttpErrorResponse){
    let errorMessage:string=''
    if(error.error instanceof  ErrorEvent){
      errorMessage = `Error:${error.error.message}`
    }else {
      errorMessage = `Status:${error.status} \n Message :${error.message}` ;
    }
    return throwError(errorMessage)
  }
}
