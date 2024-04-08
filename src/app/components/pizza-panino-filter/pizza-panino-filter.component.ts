import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FoodTypes } from '../../models/Enum/foodTypes';
@Component({
  selector: 'app-pizza-panino-filter',
  standalone: true,
  imports: [ButtonModule,CommonModule],
  templateUrl: './pizza-panino-filter.component.html',
  styleUrl: './pizza-panino-filter.component.scss'
})
export class PizzaPaninoFilterComponent implements OnInit {
  
  ngOnInit(): void {
  }
  FoodType = FoodTypes;
  @Output() foodSelected = new EventEmitter<FoodTypes>();
  selectedFood: FoodTypes = FoodTypes.Panino; // Dichiarazione e inizializzazione della proprietà selectedFood

  selectFood(foodType: FoodTypes) {
    this.selectedFood = foodType;
    this.foodSelected.emit(foodType);
  }

}
