import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { Ingredient } from '../../models/ingredient.model';
import { IngredientService } from '../../services/payload-ingredients.service';
import { Typology } from '../../models/Enum/foodTypes';
import { Ingredient } from '../../models/Ingredient.model';

@Component({
  selector: 'app-ingredients-list',
  standalone: true,
  imports: [CommonModule],
  providers: [],
  templateUrl: './ingredients-list.component.html',
  styleUrl: './ingredients-list.component.scss'
})
export class IngredientsListComponent implements OnInit{
  mockList : any[] = [];
  isGreen: boolean = false;
  selectedIds: string[] = [];

  //in input deve prendere id ristorante, tipologia di prodotto (panino o pizza)
  @Input() CustomProduct : boolean = true;
  @Input() typology : Typology = Typology.condimento1;
  @Input() ingredients_list : any [] = [];
  //da rimuovere dato che ora utilizza
  @Output() ingredientSelectionChanged: EventEmitter<any[]> = new EventEmitter<any[]>();

  ngOnInit(): void {
    console.log(this.ingredients_list)
    // this.loadData();
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
    // var tmp = this.ingredients_list.filter(item=> item.itemId)
    // this.ingredientSelectionChanged.emit(this.selectedIds); 
  }

  isItemSelected(itemId: string): boolean {
    return this.selectedIds.includes(itemId); // Verifica se l'ID è già stato selezionato
  }

  printSelectedIds() {
    console.log("ID selezionati:", this.selectedIds);
  }

  loadData()
  {
  
    
  }

  getSelectedIdList()
  {
    return this.selectedIds;
  }

}
