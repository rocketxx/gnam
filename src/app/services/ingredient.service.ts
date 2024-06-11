import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { base_api } from '../config/apiUrlConfig';
import { Ingredient } from '../models/Ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  // private base_api = '' 
  constructor(private http: HttpClient) { }
  // getRestaurants(): Observable<any[]> {
  //   return this.http.get<any[]>(base_api)
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }

  createIngredient(ingredient: Ingredient): Observable<Ingredient> {
    return this.http.post<Ingredient>(`${base_api}/create`, ingredient)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('Errore nella richiesta:', error);
    return throwError(error);
  }
}
