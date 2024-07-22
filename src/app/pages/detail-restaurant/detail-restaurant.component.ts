import { Component, OnInit, ViewChild } from '@angular/core';
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
import { MenuItem } from '../../models/MenuItem.model';
import { BaseProductStateService } from '../../services/base-product-state.service';
import { BREAD, idRestaurantMock, PIZZA } from '../../config/constantVariable';
import { ExperimentalComponent } from '../../components/experimental/experimental.component';
import { CustomButtonComponent } from '../../components/custom-button/custom-button.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { FilterListComponent } from '../../components/filter-list/filter-list.component';
import { FilterItem } from '../../models/FilterItem.model';
import { MiniItemComponent } from '../../components/mini-item/mini-item.component';
@Component({
  selector: 'app-detail-restaurant',
  standalone: true,
  imports: [FilterListComponent,CustomButtonComponent,ProductCardComponent,MiniCardComponent,PanelModule,TabViewModule,TagModule,DataViewModule,CommonModule,ButtonModule],
  templateUrl: './detail-restaurant.component.html',
  styleUrl: './detail-restaurant.component.scss'
})
export class DetailRestaurantComponent implements OnInit{
  @ViewChild('filterList') filter_list_component!: FilterListComponent;
  foodMenuList : any[] = []
  menuItems : any [] = [];
  currentMenuItems : any [] = [];
  drinkMenuList : any[] = []
  restaurant : Restaurant | undefined;
  tabs: { title: string, content: string }[] = [];
  restaurant_name : string = '';
  restaurant_type : string = '';
  renderCustomFoodButtonBread : boolean = false;
  renderCustomFoodButtonPizza : boolean = false;
  myList : any[] = [];
  filter_items : FilterItem[] = []
  constructor(private base_product_state: BaseProductStateService,private route: ActivatedRoute,private menu_item_service: MenuItemService,private restaurant_service: RestaurantsService,private router: Router){}
  
  ngOnInit(): void {
    this.loadData();      //commento e risparmio chiamate api al server di mock
    this.loadInfoRestaurantFromUrl();
    this.loadFilterItem();
  }



  loadData() //TODO: non va bene, effettua nuova lettura per ristorante. Essendo menu un entità a se posso richiamarli grazie all'id passato in url. modificare
  {
    var id = this.getRestaurantId();
    
    this.menu_item_service.getMenuItems(id).subscribe(response=>{
      //TODO: sevirebbe un filtro che se è ristorante BOTH allora filtri menu panino o pizze
      //TODO: food e drink menuList
      this.foodMenuList = response.filter(item=> item.type == 'Panino' || item.type == 'Pizza'); 
      this.drinkMenuList = response.filter(item=> item.type == 'Bevanda');
      this.menuItems = response;
      this.currentMenuItems = this.menuItems
    })
  }

  personalizza_prodotto(custom_type: string)
  {
    var id = this.getRestaurantId();

    this.router.navigate(['ristoranti/personalizza/' + id],{
      state: {
        type : custom_type, //passaggio del tipo di prodotto scelto per la personalizzazione
        name : this.restaurant_name
      }
    })

  }

  BaseClicked(item: any)
  {
    var menu_item = item as MenuItem;
    var id = this.getRestaurantId();
    this.base_product_state.setMenuItem(menu_item)
    this.router.navigate(['ristoranti/personalizza/' + id],{
      state: {
        type : item.type, 
        name : this.restaurant_name,
      }
    })

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
  //TODO IMPORTANTE: modificare e prendere solo i filterItem altrimenti troppe letture

    //recupera le tipologie di menu (bevanda, pizze,panini) dal ristorante
  //immettili nel componente list
  //l'evento emesso con l'item cliccato andrà a modificare la lista che passi a app-product-card
  //di default, la lista sarà sul primo elemento passato
  loadFilterItem()
  {
      this.restaurant_service.getRestaurantById(this.getRestaurantId()).subscribe(response => {
        this.filter_items = response.filterItems.filter(item=> item.active);
        this.filter_list_component?.clickedItem(this.filter_items[0])
        //devi accedere a filter_list_component e al suo figlio, attivare variabile isRed 
      })
  }

  filterMenuList(filter: FilterItem) //appena utente clicca su item "Pizza" o "Panino" questa funz. filtra in base al click
  {
    this.currentMenuItems = this.menuItems.filter(item=> item.type == filter.name)
  }

  getRestaurantId()
  {
    return this.route.snapshot.params['id'];
  }

}
