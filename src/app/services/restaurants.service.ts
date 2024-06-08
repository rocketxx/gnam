import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { apiConfig, base_api_restaurants } from '../config/apiUrlConfig';
import { Restaurant } from '../models/Restaurant.model';
@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  private all_restaurants = apiConfig.all_restaurants; 

  constructor(private http: HttpClient) { }
  getRistoranti(): Observable<any[]> {
    return this.http.get<any[]>(this.all_restaurants)
      .pipe(
        catchError(this.handleError)
      );
  }
  getDettaglioById(id: any): Observable<Restaurant> {
    return this.http.get<Restaurant>(base_api_restaurants+'/'+id)
      .pipe(
        catchError(this.handleError)
      );
  }
  

  // getRistorantiMock(type_food : FoodTypes): Observable<any[]>
  // {
  //   // var lista_ristoranti: any[] = [
  //   //   {
  //   //     "id": 1,
  //   //     "name": "Ristorante Uno",
  //   //     "description": "Un ristorante accogliente con un'atmosfera familiare.",
  //   //     "openingHours": {
  //   //       "monday": "09:00 - 22:00",
  //   //       "tuesday": "09:00 - 22:00",
  //   //       "wednesday": "09:00 - 22:00",
  //   //       "thursday": "09:00 - 22:00",
  //   //       "friday": "09:00 - 23:00",
  //   //       "saturday": "09:00 - 23:00",
  //   //       "sunday": "Chiuso"
  //   //     },
  //   //     "status": "aperto",
  //   //     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-tUn7mE2S4p8_xMP_pCYtfhsfeXMOO6FdVA&s",
  //   //     "foodType": "Panino"
  //   //   },
  //   //   {
  //   //     "id": 2,
  //   //     "name": "Ristorante Due",
  //   //     "description": "Un ristorante elegante con cucina gourmet.",
  //   //     "openingHours": {
  //   //       "monday": "Chiuso",
  //   //       "tuesday": "Chiuso",
  //   //       "wednesday": "Chiuso",
  //   //       "thursday": "09:00 - 22:00",
  //   //       "friday": "09:00 - 23:00",
  //   //       "saturday": "09:00 - 23:00",
  //   //       "sunday": "09:00 - 22:00"
  //   //     },
  //   //     "status": "chiuso",
  //   //     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-tUn7mE2S4p8_xMP_pCYtfhsfeXMOO6FdVA&s",
  //   //     "foodType": "Pizza"
  //   //   },
  //   //   {
  //   //     "id": 3,
  //   //     "name": "Ristorante Tre",
  //   //     "description": "Un ristorante informale con specialità di pesce fresco.",
  //   //     "openingHours": {
  //   //       "monday": "09:00 - 22:00",
  //   //       "tuesday": "09:00 - 22:00",
  //   //       "wednesday": "09:00 - 22:00",
  //   //       "thursday": "09:00 - 22:00",
  //   //       "friday": "09:00 - 23:00",
  //   //       "saturday": "09:00 - 23:00",
  //   //       "sunday": "09:00 - 22:00"
  //   //     },
  //   //     "status": "aperto",
  //   //     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-tUn7mE2S4p8_xMP_pCYtfhsfeXMOO6FdVA&s",
  //   //     "foodType": "Tutti"
  //   //   }
  //   // ].filter(item=> item.foodType == type_food || item.foodType == FoodTypes.Tutti);
  //   // return of(lista_ristoranti);
  // }


//è il dettaglio del ristorante. quindi menu bevande e cibo
  // getDettaglioByIdMock(id: any): Observable<Restaurant> {
  //   var ristoranteMenu : Restaurant = {
  //     "name": "Ristorante Bella Vista",
  //     "id": "e8c7de11-3b6f-45a5-9baf-84ab53b9d148",
  //     "menuCibo": [
  //       {
  //         "id": "10f9f2e7-3fb8-4d7d-93d4-b9fd84b1681f",
  //         "nome": "Spaghetti alla Carbonara",
  //         "descrizione": "Pasta con uova, pancetta, pecorino e pepe nero",
  //         "ingredienti": ["Pasta", "Uova", "Pancetta", "Pecorino", "Pepe"],
  //         "prezzo": 10.99
  //       },
  //       {
  //         "id": "29f28146-2d21-4e4a-9a0a-7e02bb3a302f",
  //         "nome": "Pizza Margherita",
  //         "descrizione": "Pizza con pomodoro, mozzarella e basilico",
  //         "ingredienti": ["Impasto per pizza", "Salsa di pomodoro", "Mozzarella", "Basilico"],
  //         "prezzo": 8.99
  //       },
  //       {
  //         "id": "ac7b1e17-17cf-4df1-a940-ba75fc3f9e5e",
  //         "nome": "Insalata Caesar",
  //         "descrizione": "Insalata con lattuga romana, crostini, parmigiano, salsa Caesar",
  //         "ingredienti": ["Lattuga romana", "Crostini", "Parmigiano", "Salsa Caesar"],
  //         "prezzo": 7.99
  //       }
  //     ],
  //     "menuBevande": [
  //       {
  //         "id": "b8af39d0-53a3-4a44-8626-8de316754d68",
  //         "nome": "Acqua Naturale",
  //         "descrizione": "Acqua minerale naturale in bottiglia",
  //         "prezzo": 1.99
  //       },
  //       {
  //         "id": "dd28f187-37bb-4a2d-9ee6-f2720311d038",
  //         "nome": "Vino Rosso Chianti",
  //         "descrizione": "Vino rosso toscano Chianti Classico",
  //         "prezzo": 15.99
  //       },
  //       {
  //         "id": "c03bc5a2-93c5-4f7f-89e5-9e79aa6e5a47",
  //         "nome": "Birra Artigianale IPA",
  //         "descrizione": "Birra artigianale India Pale Ale",
  //         "prezzo": 6.99
  //       }
  //     ]
  //   }

  //   // Simula un Observable che restituisce il ristorante e i suoi menu
  //   return of(ristoranteMenu);
  // }

  getBaseProductByIdMock(id: any): Observable<any[]>
  {
    var base_products: any[] = [
      {
        "id": "10f9f2e7-3fb8-4d7d-93d4-b9fd84b1681f",
        "nome": "Spaghetti alla Carbonara",
        "descrizione": "Pasta con uova, pancetta, pecorino e pepe nero",
        "ingredienti": ["Pasta", "Uova", "Pancetta", "Pecorino", "Pepe"],
        "prezzo": 10.99
      },
      {
        "id": "29f28146-2d21-4e4a-9a0a-7e02bb3a302f",
        "nome": "Pizza Margherita",
        "descrizione": "Pizza con pomodoro, mozzarella e basilico",
        "ingredienti": ["Impasto per pizza", "Salsa di pomodoro", "Mozzarella", "Basilico"],
        "prezzo": 8.99
      },
      {
        "id": "ac7b1e17-17cf-4df1-a940-ba75fc3f9e5e",
        "nome": "Insalata Caesar",
        "descrizione": "Insalata con lattuga romana, crostini, parmigiano, salsa Caesar",
        "ingredienti": ["Lattuga romana", "Crostini", "Parmigiano", "Salsa Caesar"],
        "prezzo": 7.99
      }
    ].filter(item=> item.id == id);
    return of(base_products) 
  }

  private handleError(error: any) {
    console.error('Errore nella richiesta:', error);
    return throwError(error);
  }
}

