import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { base_api } from '../config/apiUrlConfig';
import { Ingredient } from '../models/Ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private base_api_ingredients = base_api +'/ingredients' 
  constructor(private http: HttpClient) { }

  getIngredients(idRestaurant : any): Observable<any[]> {
    return this.http.get<any[]>(this.base_api_ingredients + "/ingredients-by-restaurant"+ "/" + idRestaurant)
      .pipe(
        catchError(this.handleError)
      );
  }

  getIngredientById(idIngredient : any): Observable<any> {
    return this.http.get<any>(this.base_api_ingredients + "/by-id"+ "/" + idIngredient)
      .pipe(
        catchError(this.handleError)
      );
  }

  createIngredient(ingredient: Ingredient): Observable<Ingredient> {
    return this.http.post<Ingredient>(`${this.base_api_ingredients}/create`, ingredient)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateIngredient(id: any, IngredientDetails: Ingredient): Observable<Ingredient> {
    return this.http.put<Ingredient>(`${this.base_api_ingredients}/update/${id}`, IngredientDetails)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('Errore nella richiesta:', error);
    return throwError(error);
  }
}
