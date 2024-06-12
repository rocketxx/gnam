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
@Component({
  selector: 'app-lista-prodotti',
  standalone: true,
  imports: [TableModule, TagModule, IconFieldModule, InputTextModule, InputIconModule, MultiSelectModule, DropdownModule, HttpClientModule, CommonModule],
  templateUrl: './lista-prodotti.component.html',
  styleUrl: './lista-prodotti.component.scss'
})
export class ListaProdottiComponent implements OnInit {


  constructor(private ingredient_service : IngredientService){}

  ngOnInit(): void {
    this.LoadData();
  }

  LoadData()
  {
    this.ingredient_service.getIngredients(idRestaurantMock).subscribe(response=>{
      console.log(response);
    })
  }

}
