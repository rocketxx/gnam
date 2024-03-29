import { Component, OnInit } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Utente } from '../../models/utente';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [ToastModule,CommonModule,FormsModule,ButtonModule,CheckboxModule,IconFieldModule,InputIconModule,InputTextModule,],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss',
  providers: [MessageService]
})
export class ProfilePageComponent implements OnInit{

  emailAddresses: string[] =['example1@example.com']; 
    utente_corrente: Utente = {
    nome: '',
    cognome: '',
    telefono: '',
    indirizzi: []
  };
  constructor(private messageService: MessageService){}
  ngOnInit(): void {
    this.loadUserInfo();
  }

  addEmail() {
    this.emailAddresses.push('');
  }
  salvaIndirizzi()
  {
    // window.alert(this.emailAddresses)
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  }
  loadUserInfo()
  {
    return this.utente_corrente = {
      nome: 'Mario',
      cognome: 'Rossi',
      telefono: '0123456789',
      indirizzi: this.emailAddresses
    };
  }
  deleteIndirizzo(index: any)
  {
    if (index === -1) {
        return undefined;
    }
    return this.emailAddresses.splice(index, 1);
  }
}
