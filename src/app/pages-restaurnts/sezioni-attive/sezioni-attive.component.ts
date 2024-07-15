import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MiniItemComponent } from '../../components/mini-item/mini-item.component';
import { RestaurantsService } from '../../services/restaurants.service';
import { idRestaurantMock } from '../../config/constantVariable';
import { Restaurant } from '../../models/Restaurant.model';

@Component({
  selector: 'app-sezioni-attive',
  standalone: true,
  imports: [MiniItemComponent, CommonModule],
  templateUrl: './sezioni-attive.component.html',
  styleUrl: './sezioni-attive.component.scss'
})
export class SezioniAttiveComponent implements OnInit{
  my_restaurant : Restaurant = new Restaurant() 
  constructor(private restaurant_service: RestaurantsService){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

    loadRestaurant() {
      this.restaurant_service.getRestaurantById(idRestaurantMock).subscribe(response => {
        this.my_restaurant = response;
        debugger
      })
    }

}
