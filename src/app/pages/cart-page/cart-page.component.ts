import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CardModule,CommonModule,ButtonModule],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss'
})
export class CartPageComponent implements OnInit {
  cartItems : any[] = [];
  loading: boolean = false;
  ngOnInit(): void {
    this.loadData();
  }

  salvaOrdine() {
      this.loading = true;

      setTimeout(() => {
          this.loading = false
      }, 2000);
  }
  loadData()
  {
   this.cartItems = [
      {
        "tipologia": "pizza",
        "nome": "Pizza Margherita",
        "ingredienti1": ["base margherita"],
        "ingredienti2": ["salame"],
      },
      {
        "tipologia": "panino",
        "nome": "Pizza Margherita",
        "ingredienti1": ["Porchetta"],
        "ingredienti2": ["Mozzarella", "Funghi", "Patatine"],
        "ingredienti3": ["Salsa rosa", "Maionese","Aroma verde"]
      }
    ]
  
   
  }

}
