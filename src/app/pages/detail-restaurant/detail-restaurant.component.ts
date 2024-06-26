import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../../services/restaurants.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from '../../models/Restaurant.model';

import { DataViewModule } from 'primeng/dataview';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import {TabViewModule } from 'primeng/tabview';
import { PanelModule } from 'primeng/panel';
import { MiniCardComponent } from '../../components/mini-card/mini-card.component';
import { ProductType } from '../../models/Enum/ProductType';
import { RestaurantType } from '../../models/Enum/RestaurantType';
import { MenuItemService } from '../../services/menu-item.service';
@Component({
  selector: 'app-detail-restaurant',
  standalone: true,
  imports: [MiniCardComponent,PanelModule,TabViewModule,TagModule,DataViewModule,CommonModule,ButtonModule],
  templateUrl: './detail-restaurant.component.html',
  styleUrl: './detail-restaurant.component.scss'
})
export class DetailRestaurantComponent implements OnInit{
  foodMenuList : any[] = []
  drinkMenuList : any[] = []
  restaurant : Restaurant | undefined;
  tabs: { title: string, content: string }[] = [];
  restaurant_name : string = '';
  restaurant_type : string = '';
  renderCustomFoodButtonBread : boolean = false;
  renderCustomFoodButtonPizza : boolean = false;
  constructor(private route: ActivatedRoute,private menu_item_service: MenuItemService,private restaurant_service: RestaurantsService,private router: Router){}
  
  ngOnInit(): void {
    this.loadData();      //commento e risparmio chiamate api al server di mock
    this.tabsInizialize();
    this.loadInfoRestaurantFromUrl();
  }

  tabsInizialize()
  {
    this.tabs = [
      { title: 'Tab 1', content: 'Tab 1 Content' },
      { title: 'Tab 2', content: 'Tab 2 Content' },
      { title: 'Tab 3', content: 'Tab 3 Content' }
  ];
  }

  loadData() //TODO: non va bene, effettua nuova lettura per ristorante. Essendo menu un entità a se posso richiamarli grazie all'id passato in url. modificare
  {
    var id = this.route.snapshot.params['id'];
    
    this.menu_item_service.getMenuItems(id).subscribe(response=>{
      //TODO: sevirebbe un filtro che se è ristorante BOTH allora filtri menu panino o pizze
      this.foodMenuList = response.filter(item=> item.type == 'Panino' || item.type == 'Pizza'); 
      this.drinkMenuList = response.filter(item=> item.type == 'Bevanda');
    })
  }

  personalizza_prodotto(custom_type: string)
  {
    var id = this.route.snapshot.params['id'];

    this.router.navigate(['ristoranti/personalizza/' + id],{
      state: {
        type : custom_type, //passaggio del tipo di prodotto scelto per la personalizzazione
        name : this.restaurant_name
      }
    })

  }

  BaseClicked(item: any)
  {//aggiungere controllo se è bevanda o meno. se non lo è vai a custom altrimenti stepper
    var id = this.route.snapshot.params['id'];
    this.router.navigate(['ristoranti/semipersonalizza/' + id +'/'+ item.id])
  }

  loadInfoRestaurantFromUrl()
  {//crea bug quando salvi i prodotti da panino custom. non trova lo stato
    const state = window.history.state as { name: string, type: string };
    if (state) {
      this.restaurant_name = state.name;
      this.restaurant_type = state.type;
      //set type for button customize
      this.renderCustomFoodButtons();
    }
  }

  renderCustomFoodButtons()
  {
    if(this.restaurant_type == RestaurantType.BOTH.toString())
    {
      this.renderCustomFoodButtonPizza = true;
      this.renderCustomFoodButtonBread = true;
    }
    else if(this.restaurant_type == RestaurantType.BREAD.toString())
      this.renderCustomFoodButtonBread = true
    else if(this.restaurant_type == RestaurantType.PIZZA.toString())
      this.renderCustomFoodButtonPizza = true
  }

}
