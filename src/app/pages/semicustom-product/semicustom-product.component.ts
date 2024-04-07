import { Component, OnInit } from '@angular/core';
import { IngredientsListComponent } from '../../components/ingredients-list/ingredients-list.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { Typology } from '../../models/Enum/foodTypes';

@Component({
  selector: 'app-semicustom-product',
  standalone: true,
  imports: [IngredientsListComponent,CommonModule,ButtonModule,StepperModule],
  templateUrl: './semicustom-product.component.html',
  styleUrl: './semicustom-product.component.scss'
})
export class SemicustomProductComponent implements OnInit{
  
  ingredient1List : any[] = []
  ingredient2List : any[] = []
  ingredient3List : any[] = []

  typology1: Typology= Typology.condimento1
  typology2: Typology= Typology.condimento2
  typology3: Typology= Typology.condimento3
  
  ngOnInit(): void {
  }
  onIngredientSelectionChanged(selectedIds: string[]) {
    this.ingredient1List = selectedIds
  }

  onIngredient2SelectionChanged(selectedIds: string[]) {
    this.ingredient2List = selectedIds
  }

  onIngredient3SelectionChanged(selectedIds: string[]) {
    this.ingredient3List = selectedIds
  }

  Save()
  {
   console.log('1',this.ingredient1List)
   console.log('2',this.ingredient2List)
   console.log('3',this.ingredient3List)
  //  var id = this.route.snapshot.params['id'];
  //  this.router.navigate(['ristoranti/dettaglio/' + id])
  }
}
