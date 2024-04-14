import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent implements OnInit {

  ngOnInit(): void {
  }

  @Input() quantity: number = 0;
  @Input() productId: string = '';
  @Output() quantityChanged: EventEmitter<{ id: string; quantity: number; action: 'added' | 'removed' }> = new EventEmitter();

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
