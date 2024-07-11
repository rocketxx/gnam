import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderItemTypeService {
  private readonly storageKey = 'orderItemType';
  private orderItemTypeSubject: BehaviorSubject<string | null>;

  constructor() {
    const storedOrderItemType = localStorage.getItem(this.storageKey);
    this.orderItemTypeSubject = new BehaviorSubject<string | null>(storedOrderItemType ? JSON.parse(storedOrderItemType) : null);
  }

  setOrderItemType(OrderItemType: string): void {
    localStorage.setItem(this.storageKey, JSON.stringify(OrderItemType));
    this.orderItemTypeSubject.next(OrderItemType);
  }

  getOrderItemType(): Observable<string | null> {
    return this.orderItemTypeSubject.asObservable();
  }

  clearOrderItemType(): void {
    localStorage.removeItem(this.storageKey);
    this.orderItemTypeSubject.next(null);
  }
}
