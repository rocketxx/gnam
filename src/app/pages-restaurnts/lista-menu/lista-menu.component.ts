import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { MenuItemService } from '../../services/menu-item.service';
import { MenuItem } from '../../models/MenuItem.model';
import { idRestaurantMock } from '../../config/constantVariable';

@Component({
  selector: 'app-lista-menu',
  standalone: true,
  imports: [ButtonModule,TableModule, TagModule, IconFieldModule, InputTextModule, InputIconModule, MultiSelectModule, DropdownModule, HttpClientModule, CommonModule],
  templateUrl: './lista-menu.component.html',
  styleUrl: './lista-menu.component.scss'
})
export class ListaMenuComponent implements OnInit{
  menu_list : MenuItem[] = [];
  loading_data : boolean = true;

  constructor(private menu_item_service: MenuItemService,private router: Router)
  {
    
  }
  ngOnInit(): void {
    this.LoadData();
  }
  LoadData()
  {
    this.menu_item_service.getMenuItems(idRestaurantMock).subscribe(response=>{
      this.menu_list = response;
      this.loading_data = false
      console.log(response)
    })
  }
  GoToEditMenu(id: any)
  {
    //passo id al routing e vado in carica prodotto
    this.router.navigate(['/modifica-menu', id]);
  }

}
