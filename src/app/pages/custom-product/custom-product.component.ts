import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { IngredientsListComponent } from '../../components/ingredients-list/ingredients-list.component';
import { IngredientService } from '../../services/payload-ingredients.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-custom-product',
  standalone: true,
  imports: [IngredientsListComponent,CommonModule,ButtonModule,StepperModule],
  templateUrl: './custom-product.component.html',
  styleUrl: './custom-product.component.scss'
})
export class CustomProductComponent implements OnInit{

  ingredient1List : any[] = []
  constructor() {}
  
  ngOnInit(): void {

  }
//replica per gli altri ingredienti
  onIngredientSelectionChanged(selectedIds: string[]) {
    this.ingredient1List = selectedIds
  }

  Save()
  {
   console.log(this.ingredient1List)
  }
    
}
