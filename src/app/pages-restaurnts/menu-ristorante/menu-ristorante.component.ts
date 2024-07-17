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
import { BREAD, MENU_TYPES, PIZZA, idRestaurantMock } from '../../config/constantVariable';
import { RestaurantsService } from '../../services/restaurants.service';

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
    private restaurant_service: RestaurantsService,
    private router: Router)
  {

  }
  
  ngOnInit(): void {
    this.loadRestaurant();
    // this.selectedTypeProduct.name = 'Cibo'
    const editId = this.route.snapshot.paramMap.get('id');
    if(editId != null) //stato EDIT
    {
      this.editState = true
      this.loadData(editId);
    }
    else //stato NEW
    {
    }

  }

  

  // loadMenuTypes()
  // {
  //   this.MenuTypesList = MENU_TYPES.map(type => ({
  //     name: type,
  //   }));
  // }

  loadData(id: string) {
    this.menu_item_service.getMenuItemById(id).subscribe(response=>{
      this.currentMenuItem = response;
      this.selectedTypeMenu = {name : this.currentMenuItem.type}; 
    })
  }

  loadRestaurant() {
    this.restaurant_service.getRestaurantById(idRestaurantMock).subscribe(response => {
      this.MenuTypesList = response.filterItems;
    })
  }
// La bevanda è un item menu.
  

  getTypeNameMenu()
  {
    // 'Pizza','Panino','Bevanda'
    return this.selectedTypeMenu.name
  }

  Save_data()
  {
    if(this.editState)
    {
      //  update // 
      this.currentMenuItem.type = this.getTypeNameMenu();
      this.menu_item_service.updateMenuItem(this.currentMenuItem.id,this.currentMenuItem).subscribe(response=>{
        this.messageService.add({severity: 'success', summary: 'Info', detail: 'Menu modificato'});
        this.router.navigate(['/lista-menu']);
      })
    }
    else
    {
      this.currentMenuItem.restaurantId = idRestaurantMock;
        this.currentMenuItem.type = this.getTypeNameMenu();
        this.menu_item_service.createMenuItem(this.currentMenuItem).subscribe(response=>{
        this.messageService.add({severity: 'success', summary: 'Info', detail: 'Menu caricato'});
        this.currentMenuItem = new MenuItem();
      })
    }
  }
}

