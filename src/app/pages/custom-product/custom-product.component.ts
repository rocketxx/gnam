import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { IngredientsListComponent } from '../../components/ingredients-list/ingredients-list.component';
import { IngredientService } from '../../services/payload-ingredients.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-custom-product',
  standalone: true,
  imports: [IngredientsListComponent,CommonModule,ButtonModule,StepperModule],
  templateUrl: './custom-product.component.html',
  styleUrl: './custom-product.component.scss'
})
export class CustomProductComponent implements OnInit{

  ingredient1List : any[] = []
  ingredient2List : any[] = []
  ingredient3List : any[] = []
  constructor(private route: ActivatedRoute,private router: Router) {}
  
  ngOnInit(): void {

  }
//replica per gli altri ingredienti
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
   var id = this.route.snapshot.params['id'];
   this.router.navigate(['ristoranti/dettaglio/' + id])
  }
    
}
