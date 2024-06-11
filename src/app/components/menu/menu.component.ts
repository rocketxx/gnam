import { Component, Input, OnInit } from '@angular/core';
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
  @Input() isClient : boolean = true;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    if(this.isClient)
    {
      this.items = [
      {
        label: 'Profilo',
        icon: 'pi pi-fw pi-user',
        routerLink: 'profile'
      },
      {
        label: 'Carrello',
        icon: 'pi pi-shopping-cart',
        routerLink: 'cart'
      },
      {
        label: 'Ordini',
        icon: 'pi pi-history',
        routerLink: 'order'
      },
      {
        label: 'Tutti i ristoranti',
        icon: 'pi pi-arrow-right',
        routerLink: 'home',
        queryParams : { value: FoodTypes.Panino }
      }
    ];
      
    }
    else
    {
      this.items = [
        {
          label: 'Profilo',
          icon: 'pi pi-fw pi-user',
          routerLink: 'profilo-ristorante'
        },
        // {
        //   label: 'Sicurezza',
        //   icon: 'pi pi-fw pi-user',
        //   routerLink: 'sicurezza-ristorante'
        // },
        {
          label: 'Carica prodotto',
          icon: 'pi pi-fw pi-user',
          routerLink: 'carica-prodotto-ristorante'
        },
        {
          label: 'Lista prodotti',
          icon: 'pi pi-fw pi-user',
          routerLink: 'lista-prodotti-ristorante'
        },
        {
          label: 'Menu',
          icon: 'pi pi-fw pi-user',
          routerLink: 'menu-ristorante'
        },
        {
          label: 'Ferie',
          icon: 'pi pi-fw pi-user',
          routerLink: 'ferie'
        },
        {
          label: 'Ordini',
          icon: 'pi pi-fw pi-user',
          routerLink: 'ordini-ristorante'
        },
      ]
    }
  }



}
