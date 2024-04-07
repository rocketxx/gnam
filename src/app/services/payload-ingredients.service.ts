import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  private ingredientListSubject = new BehaviorSubject<any[]>([]);
  ingredient1List$ = this.ingredientListSubject.asObservable();
  // ingredient2List$ = this.ingredientListSubject.asObservable();
  // ingredient3List$ = this.ingredientListSubject.asObservable();

  constructor() { }

  updateIngredientList(ingredients: any[]) {
    this.ingredientListSubject.next(ingredients);
    console.log('dentro service:',ingredients)
  }

}
