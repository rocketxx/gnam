import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { IngredientsListComponent } from '../../components/ingredients-list/ingredients-list.component';
@Component({
  selector: 'app-custom-product',
  standalone: true,
  imports: [IngredientsListComponent,CommonModule,ButtonModule,StepperModule],
  providers: [MessageService],
  templateUrl: './custom-product.component.html',
  styleUrl: './custom-product.component.scss'
})
export class CustomProductComponent {
  constructor(private messageService: MessageService) {}

  
}
