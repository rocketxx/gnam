import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { DetailRestaurantComponent } from './pages/detail-restaurant/detail-restaurant.component';
import { CustomProductComponent } from './pages/custom-product/custom-product.component';

export const routes: Routes = [
    { path: '', redirectTo: 'ristoranti', pathMatch: 'full' },
    { path: 'ristoranti', title: 'ristoranti', component: HomePageComponent },
    // aggiiungere id del ristorante
    { path: 'ristoranti/personalizza', title: 'ristoranti', component: CustomProductComponent },
    { path: 'ristoranti/dettaglio/:id', title: 'dettaglio ristorante', component: DetailRestaurantComponent },



    { path: 'order', title: 'Ordini', component: OrderPageComponent },
    { path: 'profile', title: 'Profilo', component: ProfilePageComponent },
    { path: 'home', title: 'home', component: HomePageComponent },
    { path: 'cart', title: 'home', component: CartPageComponent },

];
