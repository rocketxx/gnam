import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../models/ingredient.model';

@Component({
  selector: 'app-ingredients-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ingredients-list.component.html',
  styleUrl: './ingredients-list.component.scss'
})
export class IngredientsListComponent implements OnInit{
  mockList : Ingredient[] = [];
  isGreen: boolean = false;
  selectedIds: string[] = [];
  ngOnInit(): void {
    this.loadData();
  }
  
  toggleColor(itemId: string) {
    const index = this.selectedIds.indexOf(itemId);
    if (index > -1) {
      this.selectedIds.splice(index, 1); // Rimuovi l'ID se già presente
    } else {
      this.selectedIds.push(itemId); // Aggiungi l'ID se non presente
      // bisogna che pubblichi su un payload condiviso cosi da poter recuperare tale info
    }
  }

  isItemSelected(itemId: string): boolean {
    return this.selectedIds.includes(itemId); // Verifica se l'ID è già stato selezionato
  }

  printSelectedIds() {
    console.log("ID selezionati:", this.selectedIds);
  }

  loadData()
  {

    this.mockList = [
      {
        "id": "d4e37a3d-1073-4d35-b78e-0c32e3b04401",
        "descrizione": "Maglietta casual in cotone",
        "prezzo": 19.99
      },
      {
        "id": "6ae90f41-d3d9-499e-bd78-15ad2bcf3f5f",
        "descrizione": "Pantaloni da jogging",
        "prezzo": 29.99
      },
      {
        "id": "4ee29e09-83cc-4734-86d3-01fb29d3824f",
        "descrizione": "Scarpe da corsa leggere",
        "prezzo": 49.99
      },
      {
        "id": "b9c53c36-25ac-4988-89c7-1d41fc13b9ef",
        "descrizione": "Occhiali da sole polarizzati",
        "prezzo": 39.99
      },
      {
        "id": "690bfad0-c6b2-45b4-9c53-c562499e1c58",
        "descrizione": "Borsa a tracolla in pelle",
        "prezzo": 59.99
      },
      {
        "id": "9807e227-9b54-4f4b-8d18-f377a4512fd1",
        "descrizione": "Portafoglio in similpelle",
        "prezzo": 14.99
      },
      {
        "id": "c5cf8b14-f204-4459-8f71-812c84e75045",
        "descrizione": "Cappello estivo in cotone",
        "prezzo": 9.99
      },
      {
        "id": "de8885a5-2937-40d1-a750-8104b285a7cb",
        "descrizione": "Calze sportive (pacchetto da 3)",
        "prezzo": 12.99
      },
      {
        "id": "4c6dcb1f-0db7-499e-9f7c-0f3ff52e4419",
        "descrizione": "Bracciale in acciaio inossidabile",
        "prezzo": 24.99
      },
      {
        "id": "91be8edf-b9db-42c3-b389-e27b70e4457b",
        "descrizione": "Cover per smartphone",
        "prezzo": 19.99
      },
      {
        "id": "3db83616-5b6d-4ba3-bf17-61de254d65b6",
        "descrizione": "Cintura in pelle",
        "prezzo": 34.99
      },
      {
        "id": "57358862-16a7-42e7-8854-b8bc493ac2a0",
        "descrizione": "Spazzola per capelli",
        "prezzo": 7.99
      },
      {
        "id": "bea6e635-41ef-4aef-b54c-4a267d4866aa",
        "descrizione": "Foulard leggero in seta",
        "prezzo": 29.99
      },
      {
        "id": "53b6e02d-85d5-4a58-af81-b2c3cc01cb71",
        "descrizione": "Cuffie wireless Bluetooth",
        "prezzo": 59.99
      },
      {
        "id": "ccba4b07-53b9-4a0d-95fc-e2cfa215df82",
        "descrizione": "Maschera per il sonno",
        "prezzo": 14.99
      },
      {
        "id": "f758b057-14b7-4398-95a1-62e3cfe0f2b5",
        "descrizione": "Sgabello pieghevole",
        "prezzo": 24.99
      },
      {
        "id": "cf568805-d04a-43a5-8e68-abbf20eb2f57",
        "descrizione": "Tazza da viaggio termica",
        "prezzo": 9.99
      },
      {
        "id": "a4e7be0b-1b99-465c-a46e-0301b537f3cb",
        "descrizione": "Set di penne gel colorate (12 pezzi)",
        "prezzo": 16.99
      },
      {
        "id": "c7b27f86-7b56-4d35-aaae-3e4efc6ff0f4",
        "descrizione": "E-book: Guida pratica alla cucina italiana",
        "prezzo": 0
      },
      {
        "id": "c29e243f-d486-464b-803f-d9dd2b1fda0d",
        "descrizione": "Corso online: Fotografia di paesaggio",
        "prezzo": 0
      }
    ]
  }

}
