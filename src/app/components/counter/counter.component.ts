import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'] // Corretta la proprietà
})
export class CounterComponent implements OnInit {
  loadingIncrease: boolean = false;
  loadingDecrease: boolean = false;

  @Input() quantity: number = 0;
  @Input() defaultQuantity: number = 0;
  @Input() productId: string = '';

  @Output() quantityChanged: EventEmitter<{ id: string; quantity: number; action: 'added' | 'removed' }> = new EventEmitter();

  ngOnInit(): void {
    // Inizializza la quantity con defaultQuantity solo se defaultQuantity è maggiore di 0
    if (this.defaultQuantity > 0) {
      this.quantity = this.defaultQuantity;
    }
  }

  increase() {
    this.quantity++;
    this.emitQuantityChanged('added');
  }

  decrease() {
    // Se defaultQuantity è maggiore di 0, non scendere mai sotto defaultQuantity
    if (this.defaultQuantity > 0) {
      if (this.quantity > this.defaultQuantity) {
        this.quantity--;
        this.emitQuantityChanged('removed');
      }
    } else {
      // Se defaultQuantity è 0 o non è impostato, può scendere fino a 0
      if (this.quantity > 0) {
        this.quantity--;
        this.emitQuantityChanged('removed');
      }
    }
  }

  public emitQuantityChanged(action: 'added' | 'removed') {
    this.quantityChanged.emit({ id: this.productId, quantity: this.quantity, action });
  }
}
