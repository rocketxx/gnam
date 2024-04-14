import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule,ButtonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent implements OnInit {
  @Input() quantity: number = 0;
  @Input() productId: string = '';
  @Output() quantityChanged: EventEmitter<{ id: string; quantity: number; action: 'added' | 'removed' }> = new EventEmitter();

  ngOnInit(): void {
  }


  increase() {
    this.quantity++;
    this.emitQuantityChanged('added');
  }

  decrease() {
    if (this.quantity > 0) {
      this.quantity--;
      this.emitQuantityChanged('removed');
    }
  }

  private emitQuantityChanged(action: 'added' | 'removed') {
    this.quantityChanged.emit({ id: this.productId, quantity: this.quantity, action });
  }

}
