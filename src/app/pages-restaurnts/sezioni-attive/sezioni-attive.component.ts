import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MiniItemComponent } from '../../components/mini-item/mini-item.component';
import { RestaurantsService } from '../../services/restaurants.service';
import { idRestaurantMock } from '../../config/constantVariable';
// import { Restaurant } from '../../models/Restaurant.model';
import { FilterItem } from '../../models/FilterItem.model';
import { CustomButtonComponent } from '../../components/custom-button/custom-button.component';
import { ButtonModule } from 'primeng/button';
import { Restaurant } from '../../models/Restaurant.model';

@Component({
  selector: 'app-sezioni-attive',
  standalone: true,
  imports: [CustomButtonComponent,MiniItemComponent, CommonModule,ButtonModule],
  templateUrl: './sezioni-attive.component.html',
  styleUrl: './sezioni-attive.component.scss'
})
export class SezioniAttiveComponent implements OnInit{
  my_restaurant : Restaurant = new Restaurant() 
  filterlist : FilterItem[] = [ ]
  constructor(private restaurant_service: RestaurantsService){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');const pizza = new FilterItem();
// const pizza = new FilterItem();
// pizza.name = "Pizza";
// pizza.isActive = false;
// pizza.restaurantId = "66682c5187762f5279d13fa8";

// const panino = new FilterItem();
// panino.name = "Panino";
// panino.isActive = false;
// panino.restaurantId = "66682c5187762f5279d13fa8";

// const bevanda = new FilterItem();
// bevanda.name = "Bevanda";
// bevanda.isActive = false;
// bevanda.restaurantId = "66682c5187762f5279d13fa8";

// const insalata = new FilterItem();
// insalata.name = "Insalata";
// insalata.isActive = false;
// insalata.restaurantId = "66682c5187762f5279d13fa8";

// const primo = new FilterItem();
// primo.name = "Primo";
// primo.isActive = false;
// primo.restaurantId = "66682c5187762f5279d13fa8";

// const secondo = new FilterItem();
// secondo.name = "Secondo";
// secondo.isActive = false;
// secondo.restaurantId = "66682c5187762f5279d13fa8";
// this.filterlist.push(pizza)
// this.filterlist.push(panino)
// this.filterlist.push(bevanda)
// this.filterlist.push(insalata)
// this.filterlist.push(primo)
// this.filterlist.push(secondo)
    this.loadRestaurant();
  }

    loadRestaurant() {
      this.restaurant_service.getRestaurantById(idRestaurantMock).subscribe(response => {
        this.my_restaurant = response;
        debugger
      })
    }

    test()
    {
      this.my_restaurant.filterItems = this.filterlist;
      this.restaurant_service.updateRestaurant(this.my_restaurant.id,this.my_restaurant).subscribe(response=>{
        var tmp = response;
      })
    }

    clickedItem(item : any)
    {

    }

    changeStatus(item: any)
    {

    }

    getDescription(item : FilterItem)
    {
      if(item.active)
        return 'Attivo'
      else
        return "Inattivo"
    }

}
