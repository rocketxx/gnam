import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { apiConfig } from '../config/apiUrlConfig';
@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  private apiUrl = apiConfig.ristorantiUrl; 
  private apiGetById = apiConfig.dettaglio_ristorante; 

  constructor(private http: HttpClient) { }

  getRistoranti(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  getDettaglioById(id: any): Observable<any[]> {
    return this.http.get<any[]>(this.apiGetById+'/'+id)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('Errore nella richiesta:', error);
    return throwError(error);
  }
}

