import { Component, OnInit } from '@angular/core';
import { IngredientsListComponent } from '../../components/ingredients-list/ingredients-list.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantsService } from '../../services/restaurants.service';
import { ReadOnlyCardV1Component } from '../../components/read-only-card-v1/read-only-card-v1.component';
import { ExperimentalComponent } from '../../components/experimental/experimental.component';
import { MiniItemComponent } from '../../components/mini-item/mini-item.component';
import { FilterListComponent } from '../../components/filter-list/filter-list.component';
import { CartCardComponent } from "../../components/cart-card/cart-card.component";

@Component({
  selector: 'app-semicustom-product',
  standalone: true,
  imports: [CartCardComponent,FilterListComponent, MiniItemComponent, ExperimentalComponent, ReadOnlyCardV1Component, IngredientsListComponent, CommonModule, ButtonModule, StepperModule, CartCardComponent],
  templateUrl: './semicustom-product.component.html',
  styleUrl: './semicustom-product.component.scss'
})
export class SemicustomProductComponent implements OnInit{
  myelement : any = {name: 'Bevande'}
  myList : any[] = [];
  items : any[] = [];
  // myelement : any = {name: 'Bevande'}
  ngOnInit(): void {
    this.myList.push({name: 'Panini'})
    this.myList.push({name: 'Pizze'})
    this.myList.push({name: 'Bevande'})
    this.myList.push({name: 'Insalate'})
    // throw new Error('Method not implemented.');

    this.items = [
      
      {
        image: 'assets/pizza_default.png',
        name: 'Pizza Margherita',
        ingredients: 'Tomato, mozzarella, pomodoro'
      },

      // more items...
    ];
  }

  test(item: any)
  {
    console.log(item);
  }
  onDeleteItem(e: any)
  {

  }
}
