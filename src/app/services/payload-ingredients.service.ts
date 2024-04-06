import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ingredient } from '../models/ingredient.model';

@Injectable()
export class IngredientService {
  private ingredientListSubject = new BehaviorSubject<Ingredient[]>([]);
  ingredientList$ = this.ingredientListSubject.asObservable();

  constructor() { }

  updateIngredientList(ingredients: Ingredient[]) {
    this.ingredientListSubject.next(ingredients);
  }
}
