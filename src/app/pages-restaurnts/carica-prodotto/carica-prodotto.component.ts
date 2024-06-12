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
import { ActivatedRoute, Router } from '@angular/router';

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
  editState : boolean = false;
  constructor(private ingredient_service: IngredientService,private messageService: MessageService,private route: ActivatedRoute,private router: Router) {}
  ngOnInit(): void 
  {
      const editId = this.route.snapshot.paramMap.get('id');
      this.GetIngredientsTypes();

      if(editId != null) //stato EDIT
      {
        this.editState = true
        this.loadData();
      }
      else //stato NEW
      {
      }
  }

  GetIngredientsTypes()
  {
    this.tipologieProdottiList = INGREDIENTS_TYPES_CONST.map(type => ({
      name: type,
      // code: type.toUpperCase()
    }));
  }

  // onUpload(event:any) {
  //     for(let file of event.files) {
  //         this.uploadedFiles.push(file);
  //     }

  //     this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  // }

  loadData()
  {
    this.ingredient_service.getIngredientById(this.GetIdInRoute()).subscribe(response=>{
      this.new_ingredient = response
      this.selectedTypeIngredient = {name : this.new_ingredient.type}; 


    });
  }
  Save_data()
  {
    if(this.editState)
    {
      this.new_ingredient.type = this.selectedTypeIngredient.name;
      this.ingredient_service.updateIngredient(this.GetIdInRoute(),this.new_ingredient).subscribe(response=>{
        this.messageService.add({severity: 'success', summary: 'Info', detail: 'Ingrediente modificato'});
        this.router.navigate(['/lista-prodotti-ristorante']);
      })
      this.editState = false;
    }
    else
    {
      this.AddExtraInfo()
      this.ingredient_service.createIngredient(this.new_ingredient).subscribe(reponse=>{
        this.messageService.add({severity: 'success', summary: 'Info', detail: 'Ingrediente caricato'});
        this.new_ingredient = new Ingredient();
      })
    }
  }
  modificaStatoProdotto()
  {

  }

  GetIdInRoute()
  {
    return this.route.snapshot.paramMap.get('id');
  }

  AddExtraInfo()
  {
    this.new_ingredient.restaurantId = idRestaurantMock
    // TODO: aggiungi controllo se è undefined o null. in caso di edit si spacca altrimenti o perdi l'info
    this.new_ingredient.type = this.selectedTypeIngredient.name;
  }
}
