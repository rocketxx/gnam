import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { Ingredient } from '../../models/Ingredient.model';
import { IngredientService } from '../../services/ingredient.service';
import { INGREDIENTS_TYPES_CONST, idRestaurantMock } from '../../config/constantVariable';

interface UploadEvent {
    originalEvent: Event;
    files: File[];
}
@Component({
  selector: 'app-carica-prodotto',
  standalone: true,
  templateUrl: './carica-prodotto.component.html',
  styleUrl: './carica-prodotto.component.scss',
  imports: [FileUploadModule, ToastModule, CommonModule,DropdownModule,
    InputNumberModule,ToggleButtonModule,FormsModule,ButtonModule,CheckboxModule,IconFieldModule,InputIconModule,InputTextModule
  ],
  
  providers: [MessageService]
})
export class CaricaProdottoComponent implements OnInit{
  uploadedFiles: any[] = [];
  new_ingredient: Ingredient = new Ingredient();
  selectedTypeIngredient: any | undefined;
  tipologieProdottiList : any[] = [];
  constructor(private ingredient_service: IngredientService,private messageService: MessageService) {}
  ngOnInit(): void {

    this.loadData();
    this.GetIngredientsTypes();
  }

  GetIngredientsTypes()
  {
    this.tipologieProdottiList = INGREDIENTS_TYPES_CONST.map(type => ({
      name: type,
      // code: type.toUpperCase()
    }));
  }

  onUpload(event:any) {
      for(let file of event.files) {
          this.uploadedFiles.push(file);
      }

      this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }

  loadData()
  {

  }
  Save_data()
  {
    this.AddExtraInfo()
    this.ingredient_service.createIngredient(this.new_ingredient).subscribe(reponse=>{
      this.messageService.add({severity: 'success', summary: 'Info', detail: 'Ingrediente caricato'});
      this.new_ingredient = new Ingredient();
    })
  }
  modificaStatoProdotto()
  {

  }

  AddExtraInfo()
  {
    this.new_ingredient.restaurantId = idRestaurantMock
    this.new_ingredient.type = this.selectedTypeIngredient.name;
  }
}
