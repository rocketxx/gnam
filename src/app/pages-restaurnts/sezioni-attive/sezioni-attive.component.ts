import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MiniItemComponent } from '../../components/mini-item/mini-item.component';
import { RestaurantsService } from '../../services/restaurants.service';
import { idRestaurantMock } from '../../config/constantVariable';
import { Restaurant } from '../../models/Restaurant.model';
import { FilterItem } from '../../models/FilterItem.model';

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
    // throw new Error('Method not implemented.');const pizza = new FilterItem();
const pizza = new FilterItem();
pizza.nome = "Pizza";
pizza.isActive = false;
pizza.restaurantId = "66682c5187762f5279d13fa8";

const panino = new FilterItem();
panino.nome = "Panino";
panino.isActive = false;
panino.restaurantId = "66682c5187762f5279d13fa8";

const bevanda = new FilterItem();
bevanda.nome = "Bevanda";
bevanda.isActive = false;
bevanda.restaurantId = "66682c5187762f5279d13fa8";

const insalata = new FilterItem();
insalata.nome = "Insalata";
insalata.isActive = false;
insalata.restaurantId = "66682c5187762f5279d13fa8";

const primo = new FilterItem();
primo.nome = "Primo";
primo.isActive = false;
primo.restaurantId = "66682c5187762f5279d13fa8";

const secondo = new FilterItem();
secondo.nome = "Secondo";
secondo.isActive = false;
secondo.restaurantId = "66682c5187762f5279d13fa8";
    this.loadRestaurant();
  }

    loadRestaurant() {
      this.restaurant_service.getRestaurantById(idRestaurantMock).subscribe(response => {
        this.my_restaurant = response;
      })
    }

    test()
    {

      this.restaurant_service.updateRestaurant(this.my_restaurant.id,this.my_restaurant).subscribe(response=>{
        var tmp = response;
        debugger
      })
    }

}
