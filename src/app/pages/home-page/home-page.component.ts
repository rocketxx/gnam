import { Component } from '@angular/core';
import { RestaurantListComponent } from '../../components/restaurant-list/restaurant-list.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RestaurantListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
