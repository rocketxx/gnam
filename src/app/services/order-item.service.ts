import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { OrderItem } from '../models/OrderItem.model';
import { ENDPOINTS_ORDER_ITEM } from '../config/apiUrlConfig';

@Injectable({
  providedIn: 'root'
})
export class OrderItemService {

  constructor(private http: HttpClient) { }

  createOrderItem(item: OrderItem): Observable<OrderItem> {
    return this.http.post<OrderItem>(ENDPOINTS_ORDER_ITEM.CREATE_ORDER_ITEM, item)
      .pipe(
        catchError(this.handleError)
      );
  }

  getOrderItemByUserId(userId : any): Observable<any> {
    return this.http.get<any>(ENDPOINTS_ORDER_ITEM.GET_ORDER_ITEMS_BY_USER_ID(userId))
      .pipe(
        catchError(this.handleError)
      );
  }

  getOrderItemById(id : any): Observable<any> {
    return this.http.get<any>(ENDPOINTS_ORDER_ITEM.GET_ORDER_ITEM_BY_ID(id))
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteOrderItemById(itemId: any): Observable<any> {
    const url = ENDPOINTS_ORDER_ITEM.DELETE_ORDER_ITEM_BY_ID(itemId);
    return this.http.delete(url, { responseType: 'text' })
      .pipe(
        catchError(error => {
          console.error('Error in HTTP request:', error);
          return throwError(error);
        })
      );
  }
  
  
  
  private handleError(error: any) {
    console.error('Errore nella richiesta:', error);
    return throwError(error);
  }
}
