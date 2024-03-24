import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { HomeComponent } from '../home/home.component';
import { RestaurantListComponent } from '../restaurant-list/restaurant-list.component';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenubarModule,HomeComponent,RestaurantListComponent],
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
        routerLink: 'home'
      },
      {
        label: 'Carrello',
        icon: 'pi pi-fw pi-user',
        routerLink: 'ristoranti'
      },
      {
        label: 'Ordini',
        icon: 'pi pi-fw pi-user',
        routerLink: 'ristoranti'
      },
      {
        label: 'Tutti i ristoranti',
        icon: 'pi pi-fw pi-power-off',
        routerLink: 'ristoranti',
      },
      {
        label: 'Panino',
        icon: 'pi pi-fw pi-power-off',
        routerLink: 'home',
      },
      {
        label: 'Pizza',
        icon: 'pi pi-fw pi-power-off',
        routerLink: 'ristoranti',

      }
    ];
  }



}
