import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { FoodTypes } from '../../models/Enum/foodTypes';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { RestaurantsService } from '../../services/restaurants.service';
@Component({
  selector: 'app-restaurant-list',
  standalone: true,
  imports: [CardModule,ButtonModule,CommonModule,TagModule],
  templateUrl: './restaurant-list.component.html',
  styleUrl: './restaurant-list.component.scss'
})
export class RestaurantListComponent implements OnInit{
  @Input() TypeFood : FoodTypes = FoodTypes.Tutti
  items: any[] = [];
  constructor(private restaurant_service: RestaurantsService)
  {}
  ngOnInit(): void {
  this.LoadData(this.TypeFood);
  }

  ngOnChanges(changes: SimpleChange): void {
    var tmp = changes;
    // debugger 
    //arriva un oggetto valorizzato ma non riesco a leggere il currentValue
    //una volta letto correttamente questo cambiamento, effettuo query
    this.LoadData(changes.currentValue);
  }

  LoadData(type_food : FoodTypes) {
    this.restaurant_service.getRistoranti().subscribe(response=>{
      this.items = response;
    })
  }
  
  goTo()
  {
    console.warn("Button clicked")

  }
  
}
