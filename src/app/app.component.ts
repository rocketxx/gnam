import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gnam';
}
