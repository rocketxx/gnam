import { Component, OnInit } from '@angular/core';
import { RestaurantListComponent } from '../../components/restaurant-list/restaurant-list.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodTypes } from '../../models/Enum/foodTypes';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RestaurantListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {

  queryParamsRestaurantiList : FoodTypes = FoodTypes.Tutti

  constructor(private route: ActivatedRoute)
  {

  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.queryParamsRestaurantiList = params['value'];
      console.log('Value received:', this.queryParamsRestaurantiList);
      
    });
  }

}
