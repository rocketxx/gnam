import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { apiConfig } from '../config/apiUrlConfig';
import { Restaurant } from '../models/restaurant.model';
@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  private apiUrl = apiConfig.ristorantiUrl; 
  private apiGetById = apiConfig.dettaglio_ristorante; 

  constructor(private http: HttpClient) { }

  getRistoranti(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  // getDettaglioById(id: any): Observable<Restaurant> {
  //   // return this.http.get<Restaurant>(this.apiGetById+'/'+id)
  //   //   .pipe(
  //   //     catchError(this.handleError)
  //   //   );
  // }
  
  getDettaglioById(id: any): Observable<Restaurant> {
    var ristoranteMenu : Restaurant = {
      "nome": "Ristorante Bella Vista",
      "id": "e8c7de11-3b6f-45a5-9baf-84ab53b9d148",
      "menuCibo": [
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
      ],
      "menuBevande": [
        {
          "id": "b8af39d0-53a3-4a44-8626-8de316754d68",
          "nome": "Acqua Naturale",
          "descrizione": "Acqua minerale naturale in bottiglia",
          "prezzo": 1.99
        },
        {
          "id": "dd28f187-37bb-4a2d-9ee6-f2720311d038",
          "nome": "Vino Rosso Chianti",
          "descrizione": "Vino rosso toscano Chianti Classico",
          "prezzo": 15.99
        },
        {
          "id": "c03bc5a2-93c5-4f7f-89e5-9e79aa6e5a47",
          "nome": "Birra Artigianale IPA",
          "descrizione": "Birra artigianale India Pale Ale",
          "prezzo": 6.99
        }
      ]
    }

    // Simula un Observable che restituisce il ristorante e i suoi menu
    return of(ristoranteMenu);
  }

  private handleError(error: any) {
    console.error('Errore nella richiesta:', error);
    return throwError(error);
  }
}

