import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
@Component({
  selector: 'app-custom-product',
  standalone: true,
  imports: [ToastModule,ButtonModule],
  providers: [MessageService],
  templateUrl: './custom-product.component.html',
  styleUrl: './custom-product.component.scss'
})
export class CustomProductComponent {
  constructor(private messageService: MessageService) {}

  show() {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  }
}
