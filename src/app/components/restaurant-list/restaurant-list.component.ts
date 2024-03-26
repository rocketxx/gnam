import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { FoodTypes } from '../../models/Enum/foodTypes';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-restaurant-list',
  standalone: true,
  imports: [CardModule,ButtonModule,CommonModule],
  templateUrl: './restaurant-list.component.html',
  styleUrl: './restaurant-list.component.scss'
})
export class RestaurantListComponent implements OnInit{
  @Input() TypeFood : FoodTypes = FoodTypes.Tutti
  items: any[] = [
    { imageUrl: 'url_immagine_1.jpg', description: 'Descrizione 1', status: 'Aperto' },
    { imageUrl: 'url_immagine_2.jpg', description: 'Descrizione 2', status: 'Chiuso' },
    // Aggiungi altri elementi se necessario
  ];
  constructor()
  {}
  ngOnInit(): void {
  this.LoadData(this.TypeFood);
  }

  ngOnChanges(changes: SimpleChange): void {
    var tmp = changes;
    // debugger 
    //arriva un oggetto valorizzato ma non riesco a leggere il currentValue
    //una volta letto correttamente questo cambiamento, effettuo query
    this.LoadData(changes.currentValue);
  }

  LoadData(type_food : FoodTypes) {
    console.warn("Mock chiamata al servizio di caricament dati ..", type_food)
  }
  
  goTo()
  {
    console.warn("Button clicked")

  }
  
}
