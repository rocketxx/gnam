import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ENDPOINTS_MENU_ITEMS } from '../config/apiUrlConfig';
import { MenuItem } from '../models/MenuItem.model';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {

  constructor(private http: HttpClient) { }

  getMenuItems(idRestaurant : any): Observable<any[]> {
    return this.http.get<any[]>(ENDPOINTS_MENU_ITEMS.GET_MENU_ITEMS_BY_RESTAURANT_ID(idRestaurant))
      .pipe(
        catchError(this.handleError)
      );
  }

  createMenuItem(item: MenuItem): Observable<MenuItem> {
    return this.http.post<MenuItem>(ENDPOINTS_MENU_ITEMS.CREATE_MENU_ITEM, item)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('Errore nella richiesta:', error);
    return throwError(error);
  }
}
