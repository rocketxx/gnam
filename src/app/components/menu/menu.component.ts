import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { RestaurantListComponent } from '../restaurant-list/restaurant-list.component';
import { FoodTypes } from '../../models/Enum/foodTypes';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenubarModule,RestaurantListComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Profilo',
        icon: 'pi pi-fw pi-user',
        routerLink: 'profile'
      },
      {
        label: 'Carrello',
        icon: 'pi pi-fw pi-user',
        routerLink: 'cart'
      },
      {
        label: 'Ordini',
        icon: 'pi pi-fw pi-user',
        routerLink: 'order'
      },
      {
        label: 'Tutti i ristoranti',
        icon: 'pi pi-fw pi-power-off',
        routerLink: 'home',
        queryParams : { value: FoodTypes.Tutti }
      },
      {
        label: 'Panino',
        icon: 'pi pi-fw pi-power-off',
        routerLink: 'home',
        queryParams : { value: FoodTypes.Panino }
      },
      {
        label: 'Pizza',
        icon: 'pi pi-fw pi-power-off',
        routerLink: 'home',
        queryParams : { value: FoodTypes.Pizza }
      }
    ];
  }



}
