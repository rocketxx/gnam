import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../../services/restaurants.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from '../../models/restaurant.model';
import { DataViewModule } from 'primeng/dataview';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import {TabViewModule } from 'primeng/tabview';
import { PanelModule } from 'primeng/panel';
import { MiniCardComponent } from '../../components/mini-card/mini-card.component';
@Component({
  selector: 'app-detail-restaurant',
  standalone: true,
  imports: [MiniCardComponent,PanelModule,TabViewModule,TagModule,DataViewModule,CommonModule,ButtonModule],
  templateUrl: './detail-restaurant.component.html',
  styleUrl: './detail-restaurant.component.scss'
})
export class DetailRestaurantComponent implements OnInit{
  
  restaurant : Restaurant = new Restaurant();
  tabs: { title: string, content: string }[] = [];
  constructor(private route: ActivatedRoute,private restaurant_service: RestaurantsService,private router: Router){}
  
  ngOnInit(): void {
    this.loadData();      //commento e risparmio chiamate api al server di mock
    this.tabsInizialize();
  }

  tabsInizialize()
  {
    this.tabs = [
      { title: 'Tab 1', content: 'Tab 1 Content' },
      { title: 'Tab 2', content: 'Tab 2 Content' },
      { title: 'Tab 3', content: 'Tab 3 Content' }
  ];
  }

  loadData()
  {
    var id = this.route.snapshot.params['id'];
    this.restaurant_service.getDettaglioById(id).subscribe(response=>{
      this.restaurant = response;
    })
  }

  personalizza_prodotto()
  {
    var id = this.route.snapshot.params['id'];

    this.router.navigate(['ristoranti/personalizza/' + id])

  }

}
