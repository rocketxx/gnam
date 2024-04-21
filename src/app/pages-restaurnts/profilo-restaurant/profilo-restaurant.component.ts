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
@Component({
  selector: 'app-profilo-restaurant',
  standalone: true,
  imports: [MessagesModule,ToastModule,ToggleButtonModule,CommonModule,FormsModule,ButtonModule,CheckboxModule,IconFieldModule,InputIconModule,InputTextModule],
  templateUrl: './profilo-restaurant.component.html',
  styleUrl: './profilo-restaurant.component.scss'
})
export class ProfiloRestaurantComponent implements OnInit{
  dettagli_profilo : any = {
    nome: '',
    cognome: '',
    telefono: '',
    indirizzio : '',
    stato : true
  };
  constructor(private messageService: MessageService)
  {}
  ngOnInit(): void {

  }

  Salva()
  {
  }
  
  modificaStatoAttivita()
  {
    var stato_attivita = this.dettagli_profilo.stato ? 'APERTA' : 'CHIUSA'
    var stato_attivita_severity = this.dettagli_profilo.stato ? 'success' : 'error'
    this.messageService.add({severity: stato_attivita_severity, summary:'Messaggio informativo', detail:'Stato attività: ' + stato_attivita});
  }

}
