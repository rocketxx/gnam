import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { DetailRestaurantComponent } from './pages/detail-restaurant/detail-restaurant.component';
import { CustomProductComponent } from './pages/custom-product/custom-product.component';
import { SemicustomProductComponent } from './pages/semicustom-product/semicustom-product.component';
import { ProfiloRestaurantComponent } from './pages-restaurnts/profilo-restaurant/profilo-restaurant.component';
import { CaricaProdottoComponent } from './pages-restaurnts/carica-prodotto/carica-prodotto.component';
import { ListaProdottiComponent } from './pages-restaurnts/lista-prodotti/lista-prodotti.component';
import { MenuRistoranteComponent } from './pages-restaurnts/menu-ristorante/menu-ristorante.component';
import { OrariLavorativiComponent } from './pages-restaurnts/orari-lavorativi/orari-lavorativi.component';
import { OrdiniRistoranteComponent } from './pages-restaurnts/ordini-ristorante/ordini-ristorante.component';

export const routes: Routes = [
    { path: '', redirectTo: 'ristoranti', pathMatch: 'full' },
    { path: 'ristoranti', title: 'ristoranti', component: HomePageComponent },
    // aggiiungere id del ristorante
    { path: 'ristoranti/personalizza/:id', title: 'ristoranti', component: CustomProductComponent },
    { path: 'ristoranti/semipersonalizza/:id/:baseId', title: 'ristoranti', component: SemicustomProductComponent },
    { path: 'ristoranti/dettaglio/:id', title: 'dettaglio ristorante', component: DetailRestaurantComponent },
    { path: 'order', title: 'Ordini', component: OrderPageComponent },
    { path: 'profile', title: 'Profilo', component: ProfilePageComponent },
    { path: 'home', title: 'home', component: HomePageComponent },
    { path: 'cart', title: 'home', component: CartPageComponent },

    //-------- ROUTES RESTAURANT ADMIN 
    { path: 'profilo-ristorante', title: 'profilo', component: ProfiloRestaurantComponent },
    // { path: 'sicurezza-ristorante', title: 'sicurezza', component: ProfiloRestaurantComponent },
    { path: 'carica-prodotto-ristorante', title: 'carica-prodotto', component: CaricaProdottoComponent },
    { path: 'lista-prodotti-ristorante', title: 'lista-prodotti', component: ListaProdottiComponent },
    { path: 'menu-ristorante', title: 'menu', component: MenuRistoranteComponent },
    { path: 'orari-ristorante', title: 'orari', component: OrariLavorativiComponent },
    { path: 'ordini-ristorante', title: 'ordini', component: OrdiniRistoranteComponent },

];
