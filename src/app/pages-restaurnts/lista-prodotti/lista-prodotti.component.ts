import { Component, OnInit } from '@angular/core';
import { Table, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import { IngredientService } from '../../services/ingredient.service';
import { idRestaurantMock } from '../../config/constantVariable';
import { Ingredient } from '../../models/Ingredient.model';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lista-prodotti',
  standalone: true,
  imports: [ButtonModule,TableModule, TagModule, IconFieldModule, InputTextModule, InputIconModule, MultiSelectModule, DropdownModule, HttpClientModule, CommonModule],
  templateUrl: './lista-prodotti.component.html',
  styleUrl: './lista-prodotti.component.scss'
})
export class ListaProdottiComponent implements OnInit {
  
  ingredients_list : Ingredient[] = [];
  loading_data : boolean = true;

  constructor(private ingredient_service : IngredientService,private router: Router){}


  ngOnInit(): void {
    this.LoadData();
  }

  LoadData()
  {
    this.ingredient_service.getIngredients(idRestaurantMock).subscribe(response=>{
      this.ingredients_list = response;
      this.loading_data = false
      console.log(response)
    })
  }

  GoToEditIngredient(id: any)
  {
    //passo id al routing e vado in carica prodotto
    this.router.navigate(['/carica-prodotto-ristorante', id]);
  }

}
