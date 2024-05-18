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
    ToggleButtonModule,FormsModule,ButtonModule,CheckboxModule,IconFieldModule,InputIconModule,InputTextModule
  ],
  
  providers: [MessageService]
})
export class CaricaProdottoComponent implements OnInit{
  uploadedFiles: any[] = [];
  dettagli_prodotto : any = {
    nome: '',
    descrizione : '',
    prezzo : 0,
    stato : true,
    tipologia : '',
  };

  tipologieProdottiList : any[] = [];
  constructor(private messageService: MessageService) {}
  ngOnInit(): void {
    this.tipologieProdottiList =
    [
      { nome: 'Salsa', code: 'NY' },
      { nome: 'Carne', code: 'RM' },
      { nome: 'Bevanda', code: 'LDN' },
      { nome: 'Condimento', code: 'IST' },
  ];
  }

  onUpload(event:any) {
      for(let file of event.files) {
          this.uploadedFiles.push(file);
      }

      this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }

  Salva()
  {

  }
  modificaStatoProdotto()
  {

  }
}
