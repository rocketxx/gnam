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
import { AVAIBLE_FOR__TYPES_CONST, INGREDIENTS_TYPES_CONST, Panini, Pizze, Pizze_E_Panini, idRestaurantMock } from '../../config/constantVariable';
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
  new_ingredient: Ingredient = new Ingredient();
  selectedTypeIngredient: any | undefined;
  tipologieProdottiList : any[] = [];
  
  selectedAvaibleForIngredient: any | undefined;
  AvaibleForList : any[] = [];

  editState : boolean = false;
  constructor(private ingredient_service: IngredientService,private messageService: MessageService,private route: ActivatedRoute,private router: Router) {}
  ngOnInit(): void 
  {
      const editId = this.route.snapshot.paramMap.get('id');
      this.GetIngredientsTypes();
      this.GetAvaibleForTypes();

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
    }));
  }

  GetAvaibleForTypes()
  {
    this.AvaibleForList = AVAIBLE_FOR__TYPES_CONST.map(type => ({
      name: type,
    }));
  }

  loadData()
  {
    this.ingredient_service.getIngredientById(this.GetIdInRoute()).subscribe(response=>{
      this.new_ingredient = response
      this.new_ingredient.isActive = response.active //per qualche ragione mi arriva active anzichè isActive e non riesce a fare ovvimente il mapping
      this.selectedTypeIngredient = {name : this.new_ingredient.type}; 
      this.selectedAvaibleForIngredient = {name : this.new_ingredient.avaibleFor}; 
    });
  }

  Save_data()
  {
    if(this.editState)
    {
      this.new_ingredient.type = this.selectedTypeIngredient.name;
      this.new_ingredient.avaibleFor = this.selectedAvaibleForIngredient.name
      this.ingredient_service.updateIngredient(this.GetIdInRoute(),this.new_ingredient).subscribe(response=>{
        this.messageService.add({severity: 'success', summary: 'Info', detail: 'Ingrediente modificato'});
       //ATTENDI E POI CAMBIA
        this.router.navigate(['/lista-prodotti-ristorante']);
      })
      this.editState = false;
    }
    else
    {
      this.AddExtraInfo()
      if(this.selectedAvaibleForIngredient.name == Pizze_E_Panini)
      {
        this.CreateIngredient(this.new_ingredient,Pizze)
        this.CreateIngredient(this.new_ingredient,Panini)
      }
      else
      {
        this.CreateIngredient(this.new_ingredient,this.selectedAvaibleForIngredient.name)
      }
    }
  }


  CreateIngredient(ingredient : Ingredient,avaibleFor : string)
  {
    ingredient.avaibleFor = avaibleFor;
    this.ingredient_service.createIngredient(ingredient).subscribe(reponse=>{
      this.messageService.add({severity: 'success', summary: 'Info', detail: 'Ingrediente per ' + avaibleFor + ' caricato'});
      this.new_ingredient = new Ingredient();
    })
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
    // this.new_ingredient.avaibleFor = this.selectedAvaibleForIngredient.name
  }
}
