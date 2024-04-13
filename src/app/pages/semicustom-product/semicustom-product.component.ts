import { Component, OnInit } from '@angular/core';
import { IngredientsListComponent } from '../../components/ingredients-list/ingredients-list.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { Typology } from '../../models/Enum/foodTypes';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantsService } from '../../services/restaurants.service';
import { ReadOnlyCardV1Component } from '../../components/read-only-card-v1/read-only-card-v1.component';

@Component({
  selector: 'app-semicustom-product',
  standalone: true,
  imports: [ReadOnlyCardV1Component,IngredientsListComponent,CommonModule,ButtonModule,StepperModule],
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

  baseProduct : any = null;

  constructor(private restaurant_service: RestaurantsService,private route: ActivatedRoute,private router: Router)
  {

  }
  ngOnInit(): void {
    this.loadBaseProduct();
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
  //  recupero base grazie a id
   var id = this.route.snapshot.params['id'];
   this.router.navigate(['ristoranti/dettaglio/' + id])
  }
  
  Carrello()
  {
    this.router.navigate(['cart'])
  }

  loadBaseProduct() //carico il prodotto scelto dall'utente come base del panino/pizza
  {
    var baseId = this.route.snapshot.params['baseId'];
    this.restaurant_service.getBaseProductByIdMock(baseId).subscribe(response=>{
      this.baseProduct = response[0];
    })
  }
}
