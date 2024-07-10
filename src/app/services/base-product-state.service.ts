// src/app/services/menu.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MenuItem } from '../models/MenuItem.model';

@Injectable({
  providedIn: 'root'
})
export class BaseProductStateService {
  private readonly storageKey = 'menuItem';
  private menuItemSubject: BehaviorSubject<MenuItem | null>;

  constructor() {
    const storedMenuItem = localStorage.getItem(this.storageKey);
    this.menuItemSubject = new BehaviorSubject<MenuItem | null>(storedMenuItem ? JSON.parse(storedMenuItem) : null);
  }

  setMenuItem(menuItem: MenuItem): void {
    localStorage.setItem(this.storageKey, JSON.stringify(menuItem));
    this.menuItemSubject.next(menuItem);
  }

  getMenuItem(): Observable<MenuItem | null> {
    return this.menuItemSubject.asObservable();
  }

  clearMenuItem(): void {
    localStorage.removeItem(this.storageKey);
    this.menuItemSubject.next(null);
  }
}
