import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../../services/restaurants.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-restaurant',
  standalone: true,
  imports: [],
  templateUrl: './detail-restaurant.component.html',
  styleUrl: './detail-restaurant.component.scss'
})
export class DetailRestaurantComponent implements OnInit{
  constructor(private route: ActivatedRoute,private restaurant_service: RestaurantsService,private router: Router){}
  ngOnInit(): void {
    var id = this.route.snapshot.params['id'];
    debugger
      
  }

}
