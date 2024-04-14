import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ingredient } from '../../models/ingredient.model';
import { IngredientService } from '../../services/payload-ingredients.service';
import { Typology } from '../../models/Enum/foodTypes';

@Component({
  selector: 'app-ingredients-list',
  standalone: true,
  imports: [CommonModule],
  providers: [],
  templateUrl: './ingredients-list.component.html',
  styleUrl: './ingredients-list.component.scss'
})
export class IngredientsListComponent implements OnInit{
  mockList : Ingredient[] = [];
  isGreen: boolean = false;
  selectedIds: string[] = [];

  //in input deve prendere id ristorante, tipologia di prodotto (panino o pizza)
  @Input() CustomProduct : boolean = true;
  @Input() typology : Typology = Typology.condimento1;
  @Output() ingredientSelectionChanged: EventEmitter<any[]> = new EventEmitter<any[]>();

  ngOnInit(): void {
    this.loadData();
    // this.toggleColor('d4e37a3d-1073-4d35-b78e-0c32e3b04401') per edit basta recuperare
    // tramite l'ID dell'item nel carrello, la lista degli id ingredienti associati
  }

  constructor(){}
  
  toggleColor(itemId: string) {
    const index = this.selectedIds.indexOf(itemId);
    if (index > -1) {
      this.selectedIds.splice(index, 1); // Rimuovi l'ID se già presente
    } else {
      this.selectedIds.push(itemId); // Aggiungi l'ID se non presente
      // bisogna che pubblichi su un payload condiviso cosi da poter recuperare tale info
    }
    this.ingredientSelectionChanged.emit(this.selectedIds); 
  }

  isItemSelected(itemId: string): boolean {
    return this.selectedIds.includes(itemId); // Verifica se l'ID è già stato selezionato
  }

  printSelectedIds() {
    console.log("ID selezionati:", this.selectedIds);
  }

  loadData()
  {
    //in base a custom o no, carico dati diversi
    if(this.CustomProduct)
    {
      //aggiungi anche se disponibile o meno (boolean)
          this.mockList = [
            {
              "id": "d4e37a3d-1073-4d35-b78e-0c32e3b04401",
              "descrizione": "Maglietta casual in cotone",
              "prezzo": 19.99,
              "typology": 0
            },
            {
              "id": "6ae90f41-d3d9-499e-bd78-15ad2bcf3f5f",
              "descrizione": "Pantaloni da jogging",
              "prezzo": 29.99,
              "typology": 1
            },
            {
              "id": "4ee29e09-83cc-4734-86d3-01fb29d3824f",
              "descrizione": "Scarpe da corsa leggere",
              "prezzo": 49.99,
              "typology": 2
            },
            {
              "id": "b9c53c36-25ac-4988-89c7-1d41fc13b9ef",
              "descrizione": "Occhiali da sole polarizzati",
              "prezzo": 39.99,
              "typology": 0
            },
            {
              "id": "690bfad0-c6b2-45b4-9c53-c562499e1c58",
              "descrizione": "Borsa a tracolla in pelle",
              "prezzo": 59.99,
              "typology": 1
            },
            {
              "id": "9807e227-9b54-4f4b-8d18-f377a4512fd1",
              "descrizione": "Portafoglio in similpelle",
              "prezzo": 14.99,
              "typology": 2
            },
            {
              "id": "c5cf8b14-f204-4459-8f71-812c84e75045",
              "descrizione": "Cappello estivo in cotone",
              "prezzo": 9.99,
              "typology": 0
            },
            {
              "id": "de8885a5-2937-40d1-a750-8104b285a7cb",
              "descrizione": "Calze sportive (pacchetto da 3)",
              "prezzo": 12.99,
              "typology": 1
            },
            {
              "id": "4c6dcb1f-0db7-499e-9f7c-0f3ff52e4419",
              "descrizione": "Bracciale in acciaio inossidabile",
              "prezzo": 24.99,
              "typology": 2
            }
          ].filter(item=> item.typology == this.typology)

    }
    else
    {
      this.mockList = [
        {
          "id": "6ae90f41-d3d9-499e-bd78-15ad2bcf3f5a",
          "descrizione": "Pantaloni da jogging",
          "prezzo": 29.99,
          "typology": 1
        },
        {
          "id": "6ae90f41-d3d9-499e-bd78-15ad2bcf3f5f",
          "descrizione": "Pantaloni da jogging",
          "prezzo": 29.99,
          "typology": 1
        },
        {
          "id": "b9c53c36-25ac-4988-89c7-1d41fc13b9ew",
          "descrizione": "Occhiali da sole polarizzati",
          "prezzo": 39.99,
          "typology": 0
        },
        {
          "id": "b9c53c36-25ac-4988-89c7-1d41fc13b9oo",
          "descrizione": "Occhiali da sole polarizzati",
          "prezzo": 39.99,
          "typology": 0
        },
        {
          "id": "9807e227-9b54-4f4b-8d18-f377a4512flk",
          "descrizione": "Portafoglio in similpelle",
          "prezzo": 14.99,
          "typology": 2
        },        
        {
          "id": "9807e227-9b54-4f4b-8d18-f377a4512fsy",
          "descrizione": "Portafoglio in similpelle",
          "prezzo": 14.99,
          "typology": 2
        }
      ].filter(item=> item.typology == this.typology)
    }
    
  }

}
