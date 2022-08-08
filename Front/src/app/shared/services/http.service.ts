import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private httpOptions: any;

  constructor(private http: HttpClient) {
  }

  public get(URL: string, parameters?: any): Observable<any> {
    if (parameters !== undefined) {
      let httpParams = new HttpParams();
      Object.keys(parameters).forEach(element => {
        httpParams = httpParams.append(element, parameters[element]);
      });
      this.httpOptions.params = httpParams;
    }
    return this.http.get<any>(
      URL,
      this.httpOptions,
    ).pipe(
      catchError(err => {
        return this.handleError(err);
      })
    );
  }

  public getParam(URL: string, parameters?: any): Observable<any> {
    let params = new HttpParams()
      .set('id', parameters);
    return this.http.get<any>(URL, { params }).pipe(
      catchError(err => {
        return this.handleError(err);
      })
    );
  }

  public post(URL: string, parameters: any): Observable<any> {
    return this.http.post(
      URL,
      parameters
    ).pipe(
      catchError(err => {
        return this.handleError(err);
      })
    );
  }
  public put(URL: string, parameters: any): Observable<any> {
    return this.http.put(
      URL,
      parameters,
      this.httpOptions
    ).pipe(
      catchError(err => {
        return this.handleError(err);
      })
    );
  }


  public delete(URL: string): Observable<any> {
    return this.http.delete(
      URL
    ).pipe(
      catchError(err => {
        return this.handleError(err);
      })
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      errorMessage = `Server-side error: ${error.status} ${error.message}`;
    }
    console.log(error, errorMessage);
    return throwError(errorMessage);
  }

}