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
  skeletonIsActive : boolean = true;
  constructor(private restaurant_service: RestaurantsService,private router: Router)
  {}
  ngOnInit(): void {
  this.LoadData(this.TypeFood);
  }


  LoadData(type_food : FoodTypes) {
    this.restaurant_service.getRistoranti().subscribe(response=>{
      this.items = response;
      this.skeletonIsActive = false;
    })
  }
  
  detail_restaurant(id: any)
  {
    this.router.navigate(['ristoranti/dettaglio/'+id])
  }
  
}
