import { Routes } from '@angular/router';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: 'ristoranti', title: 'ristoranti', component: RestaurantListComponent },
    { path: 'home', title: 'home', component: HomeComponent },

];
