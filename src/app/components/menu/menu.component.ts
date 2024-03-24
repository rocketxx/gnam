import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          {
              label: 'Profilo',
              icon: 'pi pi-fw pi-user',
          },
          {
              label: 'Carrello',
              icon: 'pi pi-fw pi-user',
          },
          {
              label: 'Ordini',
              icon: 'pi pi-fw pi-user',
          },
          {
              label: 'Tutti i ristoranti',
              icon: 'pi pi-fw pi-power-off',
              routerLink : '/test',
          },
          {
              label: 'Panino',
              icon: 'pi pi-fw pi-power-off'
          },
          {
              label: 'Pizza',
              icon: 'pi pi-fw pi-power-off'
          }
      ];
  }
}
