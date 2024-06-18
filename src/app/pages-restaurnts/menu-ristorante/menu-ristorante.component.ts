import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../models/MenuItem.model';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { MenuItemService } from '../../services/menu-item.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { MENU_TYPES } from '../../config/constantVariable';

@Component({
  selector: 'app-menu-ristorante',
  standalone: true,
  imports: [FileUploadModule, ToastModule, CommonModule,DropdownModule,
    InputNumberModule,ToggleButtonModule,FormsModule,ButtonModule,CheckboxModule,IconFieldModule,InputIconModule,InputTextModule],
  templateUrl: './menu-ristorante.component.html',
  styleUrl: './menu-ristorante.component.scss'
})
export class MenuRistoranteComponent implements OnInit {

  currentMenuItem : MenuItem = new MenuItem();
  editState: boolean = false;
  selectedTypeMenu: any;
  MenuTypesList : any[] = [];
  constructor(
    private menu_item_service: MenuItemService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router)
  {

  }
  
  ngOnInit(): void {
    this.loadMenuTypes();
    // this.selectedTypeProduct.name = 'Cibo'
    const editId = this.route.snapshot.paramMap.get('id');
    if(editId != null) //stato EDIT
    {
      this.editState = true
      this.loadData();
    }
    else //stato NEW
    {
    }

  }

  

  loadMenuTypes()
  {
    this.MenuTypesList = MENU_TYPES.map(type => ({
      name: type,
    }));
  }

  loadData() {
    // throw new Error('Method not implemented.');
  }
// La bevanda è un item menu.
  
  Save_data()
  {
    if(this.editState)
    {
      //  update // 
    }
    else
    {
        this.menu_item_service.createMenuItem(this.currentMenuItem).subscribe(response=>{
        this.messageService.add({severity: 'success', summary: 'Info', detail: 'Menu caricato'});
        this.currentMenuItem = new MenuItem();
      })
    }
  }
}


/*
public class MenuItem {
    @Id
    private String id;
    private String name;
    private String description;
    private double price;
    private List<Ingredient> ingredients; //questa lista è utile in caso di menu custom 
    private String restaurantId;
    private String imageUrl;
    private ProductType productType; 
*/ 