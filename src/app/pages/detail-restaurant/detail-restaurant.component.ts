import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../../services/restaurants.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from '../../models/restaurant.model';
import { DataViewModule } from 'primeng/dataview';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
@Component({
  selector: 'app-detail-restaurant',
  standalone: true,
  imports: [TagModule,DataViewModule,CommonModule,ButtonModule],
  templateUrl: './detail-restaurant.component.html',
  styleUrl: './detail-restaurant.component.scss'
})
export class DetailRestaurantComponent implements OnInit{
  
  restaurant : Restaurant = new Restaurant();

  constructor(private route: ActivatedRoute,private restaurant_service: RestaurantsService,private router: Router){}
  
  ngOnInit(): void {
    this.loadData();      
  }

  loadData()
  {
    var id = this.route.snapshot.params['id'];
    this.restaurant_service.getDettaglioById(id).subscribe(response=>{
      this.restaurant = response;
    })
  }

}
