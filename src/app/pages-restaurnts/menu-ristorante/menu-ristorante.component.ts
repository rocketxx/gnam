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
  ngOnInit(): void {

  }
// La bevanda è un item menu.

Save_data()
{

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