import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RestaurantsService } from '../../services/restaurants.service';
import { Restaurant } from '../../models/Restaurant.model';
@Component({
  selector: 'app-profilo-restaurant',
  standalone: true,
  imports: [MessagesModule,ToastModule,ToggleButtonModule,CommonModule,FormsModule,ButtonModule,CheckboxModule,IconFieldModule,InputIconModule,InputTextModule],
  templateUrl: './profilo-restaurant.component.html',
  styleUrl: './profilo-restaurant.component.scss'
})
export class ProfiloRestaurantComponent implements OnInit{
  dettagli_profilo : any;
  constructor(private restaurant_service: RestaurantsService,private messageService: MessageService)
  {}
  ngOnInit(): void {
    this.restaurant_service.getRestaurantById('6667f88b1a3f1d5e4df6b8f9').subscribe(response=>{
      this.dettagli_profilo = response
    })
  }

  Salva()
  {
  }
  
  ChangeStatusRestaurant()
  {
    this.restaurant_service.changeStatusRestaurant('6667f88b1a3f1d5e4df6b8f9').subscribe(response=>{
      var stato_attivita = this.dettagli_profilo.opened ? 'APERTA' : 'CHIUSA'
      var stato_attivita_severity = this.dettagli_profilo.opened ? 'success' : 'error'
      this.messageService.add({severity: stato_attivita_severity, summary:'Messaggio informativo', detail:'Stato attività: ' + stato_attivita});
    })
  }

}
