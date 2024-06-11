import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { FoodTypes } from '../../models/Enum/foodTypes';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { RestaurantsService } from '../../services/restaurants.service';
import { MessagesModule } from 'primeng/messages';
import { SkeletonModule } from 'primeng/skeleton';
import { Router } from '@angular/router';
import { PizzaPaninoFilterComponent } from '../pizza-panino-filter/pizza-panino-filter.component';
import { RestaurantType } from '../../models/Enum/RestaurantType';

@Component({
  selector: 'app-restaurant-list',
  standalone: true,
  imports: [PizzaPaninoFilterComponent,CardModule,ButtonModule,CommonModule,TagModule,MessagesModule,SkeletonModule],
  templateUrl: './restaurant-list.component.html',
  styleUrl: './restaurant-list.component.scss'
})
export class RestaurantListComponent implements OnInit{
  TypeFood : FoodTypes = FoodTypes.Panino
  items: any[] = [];
  itemsTmp: any[] = [];
  skeletonIsActive : boolean = true;
  constructor(private restaurant_service: RestaurantsService,private router: Router)
  {}
  ngOnInit(): void {
  this.LoadData();
  }

  FilterRestaurants(type_food : FoodTypes)
  {
    this.items = this.itemsTmp;
    let choice_type: string = type_food === FoodTypes.Panino
    ? 'BREAD'
    : 'PIZZA'
    this.items = this.itemsTmp.filter(item=> item.type == choice_type || item.type == 'BOTH')
  }
  //togliere type_food dall'input
  LoadData() {
    this.restaurant_service.getRestaurants().subscribe(
      (data) => {
        this.items = data.filter(item=> item.type == 'BREAD' || item.type == 'BOTH');
        this.itemsTmp = data;
        this.skeletonIsActive = false;
      },
      (error) => {
        // this.errorMessage = error;
      }
    );
  }
  
  
  detail_restaurant(id: any)
  {
    this.router.navigate(['ristoranti/dettaglio/'+id])
  }
  
}
