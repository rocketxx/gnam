import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PaninoPizzaEnum } from '../../models/Enum/foodTypes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pizza-panino-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pizza-panino-filter.component.html',
  styleUrl: './pizza-panino-filter.component.scss'
})
export class PizzaPaninoFilterComponent implements OnInit {
  
  ngOnInit(): void {
  }
  FoodType = PaninoPizzaEnum;
  @Output() foodSelected = new EventEmitter<PaninoPizzaEnum>();
  selectedFood: PaninoPizzaEnum = PaninoPizzaEnum.Panino; // Dichiarazione e inizializzazione della proprietà selectedFood

  selectFood(foodType: PaninoPizzaEnum) {
    this.selectedFood = foodType;
    this.foodSelected.emit(foodType);
  }

}
