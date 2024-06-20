import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { IngredientsListComponent } from '../../components/ingredients-list/ingredients-list.component';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Typology } from '../../models/Enum/foodTypes';
import { IngredientService } from '../../services/ingredient.service';
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
  restaurant_id : string = '';
  typology1: Typology= Typology.condimento1 
  typology2: Typology= Typology.condimento2
  typology3: Typology= Typology.condimento3
  type_custom_product : string = '';
  constructor(private route: ActivatedRoute,private router: Router,private ingredient_service : IngredientService) {}
  
  ngOnInit(): void {
    this.loadTypeCustomProductFromUrl();
  }

  getRestaurantId()
  {
    return this.route.snapshot.params['id'];
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
   var id = this.route.snapshot.params['id'];
   this.router.navigate(['ristoranti/dettaglio/' + id])
  }

  loadTypeCustomProductFromUrl()
  {
    const state = window.history.state as { type: string };
    if (state) {
      this.type_custom_product = state.type;
      //scattano le logiche di render 
      this.loadIngredients();
    }
  }

  loadIngredients()
  {
    this.ingredient_service.getIngredients(this.getRestaurantId()).subscribe(response=>{
      this.fillIngredientList(response);
    })
  }
  fillIngredientList(response : any[])
  {
    //qui logiche su quale lista (1..2..3) ribaltare i dati
    //qui per capire dove mettere ingredienti in caso di panino o pizza
    this.ingredient1List = response.filter(item=> item.type == 'Carne');
    this.ingredient2List = response.filter(item=> item.type == 'Condimento');
    this.ingredient3List = response.filter(item=> item.type == 'Salsa');
  }
    
}
