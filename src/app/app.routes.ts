import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';

export const routes: Routes = [
    { path: 'ristoranti', title: 'ristoranti', component: HomePageComponent },
    { path: 'order', title: 'Ordini', component: OrderPageComponent },
    { path: 'profile', title: 'Profilo', component: ProfilePageComponent },
    { path: 'home', title: 'home', component: HomePageComponent },
    { path: 'cart', title: 'home', component: CartPageComponent },

];
