import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-cart-card',
  standalone: true,
  imports: [ButtonModule,AvatarModule,CommonModule],
  templateUrl: './cart-card.component.html',
  styleUrl: './cart-card.component.scss'
})
export class CartCardComponent implements OnInit{

  @Input() image: string='';
  @Input() name: string='';
  @Input() ingredients: string= '';
  @Output() edit = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    
  }
  onEdit() {
    this.edit.emit();
  }

  onDelete() {
    this.delete.emit();
  }


}
