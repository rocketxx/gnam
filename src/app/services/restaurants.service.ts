import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { apiConfig, base_api_restaurants } from '../config/apiUrlConfig';
import { Restaurant } from '../models/Restaurant.model';
@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  private all_restaurants = apiConfig.all_restaurants; 

  constructor(private http: HttpClient) { }
  getRestaurants(): Observable<any[]> {
    return this.http.get<any[]>(this.all_restaurants)
      .pipe(
        catchError(this.handleError)
      );
  }

  //non prende il vero dettaglio, si dovrebbe modificare per prendere robe come menu ecc
  getRestaurantDetailById(id: any): Observable<Restaurant> {
    return this.http.get<Restaurant>(base_api_restaurants+'/'+id)
      .pipe(
        catchError(this.handleError)
      );
  }

  getRestaurantById(id: any): Observable<Restaurant> {
    return this.http.get<Restaurant>(base_api_restaurants+'/'+id)
      .pipe(
        catchError(this.handleError)
      );
  }

  changeStatusRestaurant(id: any): Observable<Restaurant> {
    return this.http.put<Restaurant>(`${base_api_restaurants}/opened/${id}`, {})
      .pipe(
        catchError(this.handleError)
      );
  }

updateRestaurant(id: any, restaurantDetails: Restaurant): Observable<Restaurant> {
  return this.http.put<Restaurant>(`${base_api_restaurants}/update/${id}`, restaurantDetails)
    .pipe(
      catchError(this.handleError)
    );
}

  private handleError(error: any) {
    console.error('Errore nella richiesta:', error);
    return throwError(error);
  }
}

