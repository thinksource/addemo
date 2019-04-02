import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Variable, Station, IData } from './dataObject';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  public getVariables(): Observable<Variable[]> {
    const url = 'http://127.0.0.1:4000/api/variable';
    return this.http.get<Variable[]>(url).pipe(
      catchError(this.handleError<Variable[]>('getVariables', []))
    );
  }

  public getStations(): Observable<Station[]> {
    const url = 'http://127.0.0.1:4000/api/station';
    return this.http.get<Station[]>(url).pipe(
      catchError(this.handleError<Station[]>('getVariables', []))
    );
  }

  public getData(): Observable<IData[]> {
    const url = 'https://demo4062187.mockable.io/meteo';
    return this.http.get<IData[]>(url).pipe(
      catchError(this.handleError<IData[]>('getVariables', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
